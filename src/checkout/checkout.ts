import { consola } from 'consola'
import chalk from 'chalk'
import ora from 'ora'
import type { CheckOutConfig, ChectOutItemConf, ProjectSchema } from '../type'
import { api } from '../util'

export async function checkoutByConfs(schemas: ProjectSchema[], confs: CheckOutConfig) {
  const checkSpinner = ora('执行checkout,需要一会...')
  try {
    const logs: string[] = []
    for (const [key, schema] of Object.entries(schemas)) {
      const log = await checkProject(schema, confs[schema.name])
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

async function checkProject(schema: ProjectSchema, conf: ChectOutItemConf) {
  if (!conf)
    throw new Error('没找到当前项目的配置')

  const res = await api.Branches.create(schema.id, conf.to, conf.from)

  return (chalk.green(`Check Successfully:${res.name}`))
}
