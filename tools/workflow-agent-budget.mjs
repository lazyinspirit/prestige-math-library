// Count actual run-labelled model agents across dispatch and nested judge sweeps.
// Role/model pools still apply independently. Roll out only after old workers
// have drained: a process already running old code cannot acquire this budget.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, realpathSync } from 'node:fs';
import { join } from 'node:path';
import { createSlotPool } from './slots.mjs';

export const MAX_WORKFLOW_AGENTS = 30;
const pools = new Map();

export function workflowAgentBudget({ repo, run, slotRoot = process.env.WORKFLOW_AGENT_SLOT_ROOT ?? '/tmp/prestige-math-library-workflow-agent-slots' }) {
  if (!run) return null; // Standalone judging keeps its existing model caps.
  if (typeof run !== 'string' || !/^[A-Za-z0-9._-]+$/.test(run)) throw Error('Invalid workflow agent budget run');
  const canonicalRepo = realpathSync(repo);
  const configPath = ['physics-autopilot.config.json', 'autopilot.config.json']
    .map(name => join(canonicalRepo, name)).find(path => existsSync(path));
  const config = configPath ? JSON.parse(readFileSync(configPath, 'utf8')) : {};
  const limits = [config.concurrency ?? MAX_WORKFLOW_AGENTS, config.globalConcurrency ?? MAX_WORKFLOW_AGENTS];
  if (limits.some(value => !Number.isInteger(value) || value < 1))
    throw Error('Workflow concurrency and globalConcurrency must be positive integers');
  const capacity = Math.min(...limits, MAX_WORKFLOW_AGENTS);
  const namespace = createHash('sha256').update(JSON.stringify([canonicalRepo, run])).digest('hex');
  const root = join(slotRoot, namespace);
  if (pools.has(root)) {
    const budget = pools.get(root);
    if (budget.maxConcurrent !== capacity) throw Error('Workflow agent capacity changed while workers are active');
    return budget;
  }
  const pool = createSlotPool({ root, caps: { agents: capacity }, label: `workflow-agents:${run}` });
  const budget = { root, maxConcurrent: capacity, acquire: () => pool.acquire('agents'),
    held: () => pool.held('agents'), releaseAll: pool.releaseAll };
  // Normal exits, including uncaught launch errors, also return owned capacity.
  process.once('exit', pool.releaseAll);
  pools.set(root, budget);
  return budget;
}
