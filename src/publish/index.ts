import consola from 'consola'
import chalk from 'chalk'
import { jenkins } from '../util'
import { PublishView, checkoutConf } from '../config'
import type { Job } from '../type'
import { publishByConfs } from './publish'

function getOperateList(jobs: Job[]) {
  const keys = Object.entries(checkoutConf).map(([key, value]) => value.jenkins.name)
  return jobs.filter(job => keys.includes(job.name))
}

async function publish() {
  const existe = await jenkins.view.exists(PublishView)
  if (existe) {
    const list = await jenkins.view.get(PublishView)
    const cacheList = getOperateList(list.jobs)

    publishByConfs(cacheList, checkoutConf)
  }
}

publish().catch((err) => {
  consola.error(chalk.red('X'), chalk.red(err))
})
