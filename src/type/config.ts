export interface User {

}

type RepoName = string

export interface JenkisnConf {
  name: string
  branche: string
  parameters?: BaseType[]
}
export interface ChectOutItemConf {
  from: string
  to: string
  jenkins: JenkisnConf
  conf?: unknown
}

export type CheckOutConfig = Record<RepoName, ChectOutItemConf>
export type BaseType = Record<string, string>
