/* eslint-disable */
/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Schema = AllCampaigns | Log;
export type Step =
  | BranchStep
  | InputStep
  | EncounterSetsStep
  | GenericStep
  | RuleReminderStep
  | StoryStep
  | LocationSetupStep;
export type Condition =
  | CampaignLogCondition
  | CampaignLogCountCondition
  | Math
  | CardCondition
  | CampaignDataCondition
  | CampaignDataScenarioCondition
  | CampaignLogSectionExistsCondition
  | CampaignDataChaosBagCondition
  | CampaignDataInvestigatorCondition
  | ScenarioDataCondition
  | TraumaCondition
  | CheckSuppliesCondition;
export type BoolOption = EffectOption | StepsOption | ResolutionOption;
export type Effect =
  | EarnXpEffect
  | AddCardEffect
  | RemoveCardEffect
  | ReplaceCardEffect
  | TraumaEffect
  | CampaignLogEffect
  | CampaignLogCountEffect
  | CampaignDataResultEffect
  | CampaignDataDifficultyEffect
  | CampaignDataNextScenarioEffect
  | CampaignDataChooseInvestigatorsEffect
  | ScenarioDataEffect
  | AddRemoveChaosTokenEffect;
export type InvestigatorSelector =
  | "lead_investigator"
  | "all"
  | "any"
  | "choice"
  | "defeated"
  | "not_resigned"
  | "$input_value";
export type ChaosToken =
  | "+1"
  | "0"
  | "-1"
  | "-2"
  | "-3"
  | "-4"
  | "-5"
  | "-6"
  | "-7"
  | "-8"
  | "skull"
  | "cultist"
  | "tablet"
  | "elder_thing"
  | "elder_sign"
  | "auto_fail";
export type NumOption = EffectOption | StepsOption | ResolutionOption;
export type DefaultOption = StepsOption | ResolutionOption;
export type Operand = CampaignLogOperand | ChaosBagOperand;
export type Option = EffectOption | StepsOption | ResolutionOption;
export type Input =
  | CardChoiceInput
  | SuppliesInput
  | UseSuppliesInput
  | InvestigatorChoiceInput
  | ChooseOneInput
  | ChooseManyInput
  | CounterInput
  | InvestigatorCounterInput;
export type Choice = StepsChoice | EffectsChoice | ResolutionChoice;
export type BulletType = "none" | "small";
export type AllCampaigns = FullCampaign[];
export type Choice1 =
  | CardChoice
  | SuppliesChoice
  | SelectChoice
  | InvestigatorCounterChoice
  | CounterChoice
  | InvestigatorChoice;

export interface FullCampaign {
  campaign: Campaign;
  scenarios: Scenario[];
}
export interface Campaign {
  id: string;
  name: string;
  position: number;
  campaign_log: {
    id: string;
    title: string;
    type?: "count" | "investigator";
  }[];
  scenarios: string[];
  setup: string[];
  steps: Step[];
}
export interface BranchStep {
  id: string;
  type: "branch";
  text?: string;
  condition: Condition;
}
export interface CampaignLogCondition {
  type: "campaign_log";
  section: string;
  id: string;
  options: BoolOption[];
}
export interface EffectOption {
  boolCondition?: boolean;
  numCondition?: number;
  condition?: string;
  default?: boolean;
  effects: Effect[];
  steps?: null;
  resolution?: null;
}
export interface EarnXpEffect {
  type: "earn_xp";
  investigator: InvestigatorSelector;
  bonus?: number;
}
export interface AddCardEffect {
  type: "add_card";
  investigator: InvestigatorSelector;
  card: string;
  required?: boolean;
  weakness_traits?: string[];
  ignore_deck_limit?: boolean;
}
export interface RemoveCardEffect {
  type: "remove_card";
  investigator?: InvestigatorSelector;
  card?: string;
}
export interface ReplaceCardEffect {
  type: "replace_card";
  old_card: string;
  new_card: string;
}
export interface TraumaEffect {
  type: "trauma";
  investigator: InvestigatorSelector;
  mental?: number;
  physical?: number;
  mental_or_physical?: number;
  killed?: boolean;
  insane?: boolean;
}
export interface CampaignLogEffect {
  type: "campaign_log";
  section: string;
  id?: string;
  card?: string;
  text?: string;
  cross_out?: boolean;
}
export interface CampaignLogCountEffect {
  type: "campaign_log_count";
  section: string;
  id?: string;
  set_count?: number;
  setInput?: boolean;
  add_count?: number;
  text?: string;
  cross_out?: boolean;
}
export interface CampaignDataResultEffect {
  type: "campaign_data";
  setting: "result";
  value: "win" | "lose";
}
export interface CampaignDataDifficultyEffect {
  type: "campaign_data";
  setting: "difficulty";
  value: "easy" | "standard" | "hard" | "expert";
}
export interface CampaignDataNextScenarioEffect {
  type: "campaign_data";
  setting: "next_scenario" | "skip_scenario" | "replay_scenario";
  scenario: string;
}
export interface CampaignDataChooseInvestigatorsEffect {
  type: "campaign_data";
  setting: "choose_investigators";
}
export interface ScenarioDataEffect {
  type: "scenario_data";
  setting: "investigator_status" | "lead_investigator";
  investigator: InvestigatorSelector;
  investigator_status?: "alive" | "resigned" | "physical" | "mental" | "eliminated";
}
export interface AddRemoveChaosTokenEffect {
  type: "add_chaos_token" | "remove_chaos_token";
  tokens: ChaosToken[];
}
export interface StepsOption {
  boolCondition?: boolean;
  numCondition?: number;
  condition?: string;
  default?: boolean;
  steps: string[];
  effects?: Effect[];
  resolution?: null;
}
export interface ResolutionOption {
  boolCondition?: boolean;
  numCondition?: number;
  condition?: string;
  default?: boolean;
  resolution: string;
  effects?: null;
  steps?: null;
}
export interface CampaignLogCountCondition {
  type: "campaign_log_count";
  section: string;
  id: string;
  options: NumOption[];
  defaultOption: DefaultOption;
}
export interface Math {
  type: "math";
  opA: Operand;
  opB: Operand;
  operation: "compare" | "sum";
  options: NumOption[];
  defaultOption: DefaultOption;
}
export interface CampaignLogOperand {
  type: "campaign_log";
  section: string;
  id?: string;
}
export interface ChaosBagOperand {
  type: "chaos_bag";
  token: ChaosToken;
}
export interface CardCondition {
  type: "has_card";
  investigator: "defeated" | "any";
  card: string;
  options: Option[];
}
export interface CampaignDataCondition {
  type: "campaign_data";
  campaign_data: "difficulty";
  options: Option[];
}
export interface CampaignDataScenarioCondition {
  type: "campaign_data";
  campaign_data: "scenario_completed";
  scenario: string;
  options: StepsOption[];
}
export interface CampaignLogSectionExistsCondition {
  type: "campaign_log_section_exists";
  section: string;
  options: BoolOption[];
}
export interface CampaignDataChaosBagCondition {
  type: "campaign_data";
  campaign_data: "chaos_bag";
  token: ChaosToken;
  options: StepsOption[];
}
export interface CampaignDataInvestigatorCondition {
  type: "campaign_data";
  campaign_data: "investigator";
  investigator_data: "trait" | "faction";
  options: StepsOption[];
}
export interface ScenarioDataCondition {
  type: "scenario_data";
  scenario_data: "player_count" | "investigator";
  options: Option[];
}
export interface TraumaCondition {
  type: "trauma";
  investigator: "lead_investigator" | "all";
  trauma: "killed";
  options: StepsOption[];
}
export interface CheckSuppliesCondition {
  type: "check_supplies";
  investigator: "choice";
  id: string;
  options: BoolOption[];
}
export interface InputStep {
  id: string;
  type: "input";
  text?: string;
  subtext?: string;
  input: Input;
  bullet_type?: BulletType;
}
export interface CardChoiceInput {
  type: "card_choice";
  query: CardQuery[];
  choices: SimpleEffectsChoice[];
}
export interface CardQuery {
  trait?: string;
  unique?: boolean;
  vengeance?: boolean;
  code?: string[];
}
export interface SimpleEffectsChoice {
  flavor?: string;
  text?: string;
  description?: string;
  effects: (CampaignLogEffect | RemoveCardEffect)[];
  steps?: null;
  resolution?: null;
}
export interface SuppliesInput {
  type: "supplies";
  points: number[];
  supplies: Supply[];
}
export interface Supply {
  id: string;
  name: string;
  description: string;
  cost: number;
  multiple?: boolean;
}
export interface UseSuppliesInput {
  type: "use_supplies";
  supply: string;
  investigator: InvestigatorSelector;
  choices: Option[];
}
export interface InvestigatorChoiceInput {
  type: "investigator_choice";
  investigator: InvestigatorSelector;
  detailed?: boolean;
  choices: EffectsChoice[];
}
export interface EffectsChoice {
  flavor?: string;
  text?: string;
  description?: string;
  effects: Effect[];
  steps?: null;
  resolution?: null;
}
export interface ChooseOneInput {
  type: "choose_one";
  choices: Choice[];
}
export interface StepsChoice {
  text?: string;
  flavor?: string;
  description?: string;
  steps: string[];
  effects?: null;
  resolution?: null;
}
export interface ResolutionChoice {
  text?: string;
  flavor?: string;
  description?: string;
  resolution: string;
  steps?: null;
  effects?: null;
}
export interface ChooseManyInput {
  type: "choose_many";
  choices: Choice[];
  count: number;
  progressive?: boolean;
}
export interface CounterInput {
  type: "counter";
  text: string;
  effects: Effect[];
}
export interface InvestigatorCounterInput {
  type: "investigator_counter";
  text: string;
  effects: Effect[];
}
export interface EncounterSetsStep {
  id: string;
  type: "encounter_sets";
  text?: string;
  subtext?: string;
  aside?: boolean;
  encounter_sets: string[];
}
export interface GenericStep {
  id: string;
  type?: null;
  title?: string;
  text?: string;
  steps?: string[];
  effects?: Effect[];
  bullets?: {
    text: string;
  }[];
}
export interface RuleReminderStep {
  id: string;
  type: "rule_reminder";
  text: string;
  title?: string;
  bullets?: {
    text: string;
  }[];
  example?: string;
}
export interface StoryStep {
  id: string;
  type: "story";
  title?: string;
  text: string;
  bullets?: {
    text: string;
  }[];
}
export interface LocationSetupStep {
  id: string;
  type: "location_setup";
  title: string;
  locations: string[][];
}
export interface Scenario {
  id: string;
  scenarioName: string;
  setup: string[];
  resolutions?: Resolution[];
  steps: Step[];
  interlude?: boolean;
}
export interface Resolution {
  id: string;
  title: string;
  text?: string;
  resolution?: string;
  steps?: string[];
}
export interface Log {
  campaignName: string;
  campaignCode: string;
  log: LogEntry[];
}
export interface LogEntry {
  id: string;
  choice?: Choice1;
}
export interface CardChoice {
  cards: string[];
}
export interface SuppliesChoice {
  supplies: {
    investigator: string;
    supplies: string[];
  }[];
}
export interface SelectChoice {
  choices: string[];
}
export interface InvestigatorCounterChoice {
  counts: {
    investigator: string;
    count?: number;
  }[];
}
export interface CounterChoice {
  count: number;
}
export interface InvestigatorChoice {
  investigators?: {
    investigator: string;
    deck?: string;
  }[];
}
