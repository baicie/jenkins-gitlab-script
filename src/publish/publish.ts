import chalk from 'chalk'
import consola from 'consola'
import ora from 'ora'
import xml2js, { parseStringPromise as parseString } from 'xml2js'
import type { CheckOutConfig, JenkisnConf, Job, XML } from '../type'
import { jenkins } from '../util'

function findConfigByJenkinName(name: string, confs: CheckOutConfig) {
  return Object.entries(confs).find(([key, value]) => value.jenkins.name = name)![1].jenkins
}

export async function publishByConfs(jobs: Job[], confs: CheckOutConfig) {
  const checkSpinner = ora('执行checkout,需要一会...')
  try {
    const logs: string[] = []
    for (const [key, job] of Object.entries(jobs)) {
      const log = await publishProject(job, findConfigByJenkinName(job.name, confs))
      if (log)
        logs.push(log)
    }

    logs.forEach(log => consola.success(log))

    checkSpinner.color = 'green'
    checkSpinner.succeed('checkout完成')
  }
  catch (error) {
    checkSpinner.color = 'red'
    checkSpinner.fail(chalk.red(`checkout失败:${error}`))
  }
}

async function publishProject(job: Job, conf: JenkisnConf) {
  if (!conf)
    throw new Error('没找到当前项目的配置')

  const config = await jenkins.job.config(job.name)

  const res = await parseString(config) as XML

  const afterEditXml = editXml(res, conf)

  const builder = new xml2js.Builder()

  const xml = builder.buildObject(afterEditXml)

  await jenkins.job.config(job.name, xml)

  consola.info('job.name', job.name)

  const build_res = await jenkins.job.build({
    name: job.name,
    parameters: conf.parameters,
  })

  consola.success(build_res)

  return (chalk.green(`Check Successfully:${conf.name}`))
}

function editXml(xml: XML, conf: JenkisnConf) {
  if (conf.name && conf.branche)
    xml['flow-definition'].definition[0].scm[0].branches[0]['hudson.plugins.git.BranchSpec'][0].name[0] = conf.branche

  return xml
}
