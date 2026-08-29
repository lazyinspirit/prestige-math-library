// Central registry for every model and semantic lane used by the build.
// Role caps, sandboxes, effort, and web access remain in tools/dispatch.mjs.

export const MODELS = Object.freeze({
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
  gpt54: Object.freeze({
    id: process.env.GPT54_MODEL ?? 'gpt-5.4',
    runner: 'codex',
    family: 'openai',
  }),
  luna: Object.freeze({
    id: process.env.LUNA_MODEL ?? 'gpt-5.6-luna',
    runner: 'codex',
    family: 'openai',
  }),
  deepseek: Object.freeze({
    id: process.env.DEEPSEEK_MODEL ?? 'deepseek-v4-pro',
    runner: 'codex',
    family: 'deepseek',
  }),
});

// Stage-scoped overrides. A role still owns its sandbox, web access and cap;
// a profile changes only the model/provider, reasoning tier and context window.
// DeepSeek calls the top reasoning tier `max`; the public profile name retains
// the owner's `xhigh` terminology and the dispatcher records both spellings.
export const MODEL_PROFILE_NAMES = Object.freeze({
  deepseekXhigh1m: 'deepseek-v4-pro-xhigh-1m',
  gpt54High1m: 'gpt-5.4-high-1m',
  gpt54Xhigh1m: 'gpt-5.4-xhigh-1m',
  terraXhigh: 'gpt-5.6-terra-xhigh',
});

export const MODEL_PROFILES = Object.freeze({
  [MODEL_PROFILE_NAMES.deepseekXhigh1m]: Object.freeze({
    model: MODELS.deepseek.id,
    runner: MODELS.deepseek.runner,
    family: MODELS.deepseek.family,
    provider: 'deepseek',
    effort: 'max',
    requestedEffort: 'xhigh',
    contextWindow: 1_048_576,
    effectiveContextFloor: 995_000,
    attestContext: true,
  }),
  [MODEL_PROFILE_NAMES.gpt54Xhigh1m]: Object.freeze({
    model: MODELS.gpt54.id,
    runner: MODELS.gpt54.runner,
    family: MODELS.gpt54.family,
    provider: 'openai',
    effort: 'xhigh',
    requestedEffort: 'xhigh',
    contextWindow: 1_000_000,
  }),
  [MODEL_PROFILE_NAMES.gpt54High1m]: Object.freeze({
    model: MODELS.gpt54.id,
    runner: MODELS.gpt54.runner,
    family: MODELS.gpt54.family,
    provider: 'openai',
    effort: 'high',
    requestedEffort: 'high',
    contextWindow: 1_000_000,
  }),
  [MODEL_PROFILE_NAMES.terraXhigh]: Object.freeze({
    model: MODELS.terra.id,
    runner: MODELS.terra.runner,
    family: MODELS.terra.family,
    provider: 'openai',
    effort: 'xhigh',
    requestedEffort: 'xhigh',
    contextWindow: 872_000,
  }),
});

export const LANES = Object.freeze({
  agentic: 'gpt54',
  secondary: 'gpt54',
  partition: 'luna',
  adjudication: 'sol',
});

export const JUDGE_LINEUPS = Object.freeze({
  terra: Object.freeze([MODELS.terra.id]),
});

export const KNOWN_JUDGES = Object.freeze([...new Set(Object.values(JUDGE_LINEUPS).flat())]);
export const DEFAULT_LINEUP = 'terra';

// Codex's current Terra catalog advertises an 872k maximum context window and
// exposes 95% of it to the conversation (828,400 tokens). Judge conversations
// keep one session for the whole A/B pair, so compact the same session at
// exactly half the effective window rather than waiting for its terminal edge.
export const JUDGE_CONTEXT_WINDOW = 872_000;
export const JUDGE_EFFECTIVE_CONTEXT_WINDOW = 828_400;
export const JUDGE_AUTO_COMPACT_TOKEN_LIMIT = JUDGE_EFFECTIVE_CONTEXT_WINDOW / 2;

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
