import { Gitlab } from '@gitbeaker/node'
import { GitLabHost, GitLabToken } from './constant'

export const api = new Gitlab({
  host: GitLabHost,
  token: GitLabToken,
})
