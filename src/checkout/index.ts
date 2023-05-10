import consola from 'consola'
import chalk from 'chalk'

import { checkoutConf } from '../config'
import type { ProjectSchema } from '../type'
import { ProjectName, api } from '../util'
import { checkoutByConfs } from './checkout'

function getOperateList(projects: ProjectSchema[]) {
  const keys = Object.keys(checkoutConf)

  return projects.filter(project => keys.includes(project.name))
}

async function checkout() {
  const cacheList: ProjectSchema[] = []

  const res = await api.Groups.projects(ProjectName)

  cacheList.push(...getOperateList(res))

  checkoutByConfs(cacheList, checkoutConf)
}

checkout().catch((err) => {
  consola.error(chalk.red('X'), chalk.red(err))
})
