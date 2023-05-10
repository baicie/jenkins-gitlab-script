import Jenkins from 'jenkins'
import type { JenkinsType } from '../type/jenkins'
import { JenkinsUrl } from './constant'

export const jenkins = new Jenkins({
  baseUrl: JenkinsUrl,
}) as JenkinsType
