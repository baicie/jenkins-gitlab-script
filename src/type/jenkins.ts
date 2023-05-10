import type { JenkinsViewGetResult, JenkinsViewListResult } from './jenkins-type'

type BaseType = Record<string, string>

export class JenkinsType {
  info!: (() => Promise<BaseType>)

  job!: {
    list: () => Promise<BaseType[]>
    config: (name: string, xml?: string) => Promise<any>
    build: (opt: {
      name: string
      parameters?: BaseType[]
      token?: string
    }) => Promise<any>
    // build: (name: string) => Promise<any>
  }

  view!: {
    exists: (name: string) => Promise<boolean>
    list: () => Promise<JenkinsViewListResult>
    get: (name: string) => Promise<JenkinsViewGetResult>
  }
}
