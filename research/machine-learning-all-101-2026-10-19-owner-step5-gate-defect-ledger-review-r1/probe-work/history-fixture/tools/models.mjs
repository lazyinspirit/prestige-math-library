// Central registry for every model and semantic lane used by the build.
// Role caps, sandboxes, effort, and web access remain in tools/dispatch.mjs.

export const MODELS = Object.freeze({
  astra: Object.freeze({
    id: process.env.ASTRA_MODEL ?? 'gpt-6-astra',
    runner: 'codex',
    family: 'openai',
  }),
  sol: Object.freeze({
    id: process.env.SOL_MODEL ?? 'gpt-6-sol',
    runner: 'codex',
    family: 'openai',
  }),
  sol61: Object.freeze({
    id: process.env.SOL61_MODEL ?? 'gpt-6.1-sol',
    runner: 'codex',
    family: 'openai',
  }),
  luna: Object.freeze({
    id: process.env.LUNA_MODEL ?? 'gpt-6-luna',
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
  lunaMax: 'gpt-6-luna-max',
  solHigh: 'gpt-6-sol-high',
  solXHigh: 'gpt-6-sol-xhigh',
  solMax: 'gpt-6-sol-max',
  sol61Medium: 'gpt-6.1-sol-medium',
  sol61High: 'gpt-6.1-sol-high',
  deepseekFlashMax: 'deepseek-v4.1-flash-max',
});

export const MODEL_PROFILES = Object.freeze({
  [MODEL_PROFILE_NAMES.astraMedium]: Object.freeze({
    model: MODELS.astra.id, runner: MODELS.astra.runner, family: MODELS.astra.family,
    provider: 'openai', effort: 'medium', requestedEffort: 'medium', contextWindow: 1_000_000,
  }),
  [MODEL_PROFILE_NAMES.lunaMax]: Object.freeze({
    model: MODELS.luna.id, runner: MODELS.luna.runner, family: MODELS.luna.family,
    provider: 'openai', effort: 'max', requestedEffort: 'max', contextWindow: 1_000_000,
  }),
  [MODEL_PROFILE_NAMES.solHigh]: Object.freeze({
    model: MODELS.sol.id, runner: MODELS.sol.runner, family: MODELS.sol.family,
    provider: 'openai', effort: 'high', requestedEffort: 'high', contextWindow: 1_000_000,
  }),
  [MODEL_PROFILE_NAMES.solXHigh]: Object.freeze({
    model: MODELS.sol.id, runner: MODELS.sol.runner, family: MODELS.sol.family,
    provider: 'openai', effort: 'xhigh', requestedEffort: 'xhigh', contextWindow: 1_000_000,
  }),
  [MODEL_PROFILE_NAMES.solMax]: Object.freeze({
    model: MODELS.sol.id, runner: MODELS.sol.runner, family: MODELS.sol.family,
    provider: 'openai', effort: 'max', requestedEffort: 'max', contextWindow: 1_000_000,
  }),
  [MODEL_PROFILE_NAMES.sol61Medium]: Object.freeze({
    model: MODELS.sol61.id, runner: MODELS.sol61.runner, family: MODELS.sol61.family,
    provider: 'openai', effort: 'medium', requestedEffort: 'medium', contextWindow: 1_000_000,
  }),
  [MODEL_PROFILE_NAMES.sol61High]: Object.freeze({
    model: MODELS.sol61.id, runner: MODELS.sol61.runner, family: MODELS.sol61.family,
    provider: 'openai', effort: 'high', requestedEffort: 'high', contextWindow: 1_000_000,
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
});

export const LANES = Object.freeze({
  agentic: 'sol61',
  secondary: 'sol61',
  partition: 'sol61',
  adjudication: 'sol61',
  finalAdjudication: 'astra',
});

export const JUDGE_LINEUPS = Object.freeze({
  sol: Object.freeze([MODELS.sol.id]),
  sol61: Object.freeze([MODELS.sol61.id]),
  luna: Object.freeze([MODELS.luna.id]),
});

export const KNOWN_JUDGES = Object.freeze([...new Set(Object.values(JUDGE_LINEUPS).flat())]);
export const DEFAULT_LINEUP = 'sol61';

// Each item judge is ephemeral, but keep the active lane's context window
// explicit so an unusually large target and its compact interfaces fit without
// inheriting user configuration.
export const JUDGE_CONTEXT_WINDOW = 1_000_000;

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
