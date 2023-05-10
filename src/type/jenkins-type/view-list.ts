export interface View {
  url: string
  name: string
}

export interface UnlabeledLoad {}

export interface PrimaryView {
  url: string
  name: string
}

export interface AssignedLabel {}

export interface Job {
  color: string
  url: string
  name: string
}

export interface OverallLoad {}

export interface JenkinsViewListResult {
  views: View[]
  useSecurity: boolean
  useCrumbs: boolean
  unlabeledLoad: UnlabeledLoad
  slaveAgentPort: number
  quietingDown: boolean
  primaryView: PrimaryView
  assignedLabels: AssignedLabel[]
  mode: string
  nodeDescription: string
  nodeName: string
  numExecutors: number
  description?: any
  jobs: Job[]
  overallLoad: OverallLoad
}
