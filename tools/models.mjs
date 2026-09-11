// Central registry for every model and semantic lane used by the build.
// Role caps, sandboxes, effort, and web access remain in tools/dispatch.mjs.

export const MODELS = Object.freeze({
  astra: Object.freeze({
    id: process.env.ASTRA_MODEL ?? 'gpt-6-astra',
    runner: 'codex',
    family: 'openai',
  }),
  sol: Object.freeze({
    id: process.env.SOL_MODEL ?? 'gpt-5.6-sol',
    runner: 'codex',
    family: 'openai',
  }),
  terra: Object.freeze({
    id: process.env.TERRA_MODEL ?? 'gpt-5.6-terra',
    runner: 'codex',
    family: 'openai',
  }),
  luna: Object.freeze({
    id: process.env.LUNA_MODEL ?? 'gpt-5.6-luna',
    runner: 'codex',
    family: 'openai',
  }),
  deepseekFlash: Object.freeze({
    id: process.env.DEEPSEEK_FLASH_MODEL ?? 'deepseek-flash',
    runner: 'codex',
    family: 'deepseek',
  }),
});

// Stage-scoped overrides. A role still owns its sandbox, web access and cap;
// a profile changes only the model/provider, reasoning tier and context window.
export const MODEL_PROFILE_NAMES = Object.freeze({
  astraMedium: 'gpt-6-astra-medium',
  solHigh: 'gpt-5.6-sol-high',
  terraHigh: 'gpt-5.6-terra-high',
  deepseekFlashMax: 'deepseek-v4.1-flash-max',
});

// Controllers started before the 2026-09-05 lane change retain this literal
// profile name in memory for Step-5 refuters and Step-6 group readers. Keep it
// resolvable at the new high effort until those live runs terminate; fresh
// controllers select `terraHigh` directly from their stage definitions.
const LIVE_TERRA_XHIGH_COMPAT = 'gpt-5.6-terra-xhigh';

export const MODEL_PROFILES = Object.freeze({
  [MODEL_PROFILE_NAMES.astraMedium]: Object.freeze({
    model: MODELS.astra.id, runner: MODELS.astra.runner, family: MODELS.astra.family,
    provider: 'openai', effort: 'medium', requestedEffort: 'medium', contextWindow: 1_000_000,
  }),
  [MODEL_PROFILE_NAMES.solHigh]: Object.freeze({
    model: MODELS.sol.id, runner: MODELS.sol.runner, family: MODELS.sol.family,
    provider: 'openai', effort: 'high', requestedEffort: 'high', contextWindow: 1_000_000,
  }),
  [MODEL_PROFILE_NAMES.terraHigh]: Object.freeze({
    model: MODELS.terra.id,
    runner: MODELS.terra.runner,
    family: MODELS.terra.family,
    provider: 'openai',
    effort: 'high',
    requestedEffort: 'high',
    contextWindow: 872_000,
  }),
  [MODEL_PROFILE_NAMES.deepseekFlashMax]: Object.freeze({
    model: MODELS.deepseekFlash.id,
    runner: MODELS.deepseekFlash.runner,
    family: MODELS.deepseekFlash.family,
    provider: 'deepseek',
    effort: 'max',
    requestedEffort: 'max',
    contextWindow: 1_048_576,
  }),
  [LIVE_TERRA_XHIGH_COMPAT]: Object.freeze({
    model: MODELS.terra.id,
    runner: MODELS.terra.runner,
    family: MODELS.terra.family,
    provider: 'openai',
    effort: 'high',
    requestedEffort: 'high',
    contextWindow: 872_000,
  }),
});

export const LANES = Object.freeze({
  agentic: 'terra',
  secondary: 'terra',
  partition: 'terra',
  adjudication: 'sol',
  finalAdjudication: 'astra',
});

export const JUDGE_LINEUPS = Object.freeze({
  terra: Object.freeze([MODELS.terra.id]),
});

export const KNOWN_JUDGES = Object.freeze([...new Set(Object.values(JUDGE_LINEUPS).flat())]);
export const DEFAULT_LINEUP = 'terra';

// Each item judge is ephemeral, but keep the active lane's context window
// explicit so an unusually large target and its compact interfaces fit without
// inheriting user configuration.
export const JUDGE_CONTEXT_WINDOW = 872_000;

export function resolveLineup(name = process.env.JUDGE_LINEUP ?? DEFAULT_LINEUP) {
  const models = JUDGE_LINEUPS[name];
  if (!models) {
    throw new Error(`JUDGE_LINEUP must be one of ${Object.keys(JUDGE_LINEUPS).join(', ')}; got ${name}`);
  }
  return { name, models };
}

export function lane(laneName) {
  const key = LANES[laneName];
  if (!key) throw new Error(`unknown lane ${laneName}; known: ${Object.keys(LANES).join(', ')}`);
  const model = MODELS[key];
  if (!model) throw new Error(`lane ${laneName} names unknown model ${key}`);
  return { runner: model.runner, model: model.id };
}

export function laneFamily(laneName) {
  const key = LANES[laneName];
  if (!key) throw new Error(`unknown lane ${laneName}`);
  return MODELS[key].family;
}

export function modelProfile(name) {
  const profile = MODEL_PROFILES[name];
  if (!profile) {
    throw new Error(`unknown model profile ${name}; known: ${Object.keys(MODEL_PROFILES).join(', ')}`);
  }
  return profile;
}

export const KNOWN_MODEL_IDS = Object.freeze(Object.values(MODELS).map((model) => model.id));
