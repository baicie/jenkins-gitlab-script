import type { Job } from './view-list'

export interface JenkinsViewGetResult {
  description?: unknown
  jobs: Job[]
  name: string
  property: unknown[]
  url: string
}
