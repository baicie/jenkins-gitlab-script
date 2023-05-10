export interface GitLabConnectionProperty {
  $: $
  gitLabConnection: string[]
  jobCredentialId: string[]
  useAlternativeCredential: string[]
}

export interface StringParameterDefinition {
  name: string[]
  defaultValue: string[]
  trim: string[]
}

export interface ParameterDefinition {
  'hudson.model.StringParameterDefinition': StringParameterDefinition[]
}

export interface ParametersDefinitionProperty {
  parameterDefinitions: ParameterDefinition[]
}

export interface Property {
  'com.dabsquared.gitlabjenkins.connection.GitLabConnectionProperty': GitLabConnectionProperty[]
  'hudson.model.ParametersDefinitionProperty': ParametersDefinitionProperty[]
}

export interface $ {
  class: string
  plugin: string
}

export interface UserRemoteConfigItem {
  url: string[]
  credentialsId: string[]
}

export interface UserRemoteConfig {
  'hudson.plugins.git.UserRemoteConfig': UserRemoteConfigItem[]
}

export interface BranchSpec {
  name: string[]
}

export interface Branche {
  'hudson.plugins.git.BranchSpec': BranchSpec[]
}

export interface SubmoduleCfg {
  $: $
}

export interface Scm {
  $: $
  configVersion: string[]
  userRemoteConfigs: UserRemoteConfig[]
  branches: Branche[]
  doGenerateSubmoduleConfigurations: string[]
  submoduleCfg: SubmoduleCfg[]
  extensions: string[]
}

export interface Definition {
  $: $
  scm: Scm[]
  scriptPath: string[]
  lightweight: string[]
}

export interface FlowDefinition {
  $: $
  actions: string[]
  description: string[]
  keepDependencies: string[]
  properties: Property[]
  definition: Definition[]
  triggers: string[]
  disabled: string[]
}

export interface XML {
  'flow-definition': FlowDefinition
}
