#!/usr/bin/env node
// Generate or validate physics assignments using the physics engine's limits.
import { assignmentCLI } from '../alpha-group-assignment.mjs';
import { MAX_RUN_BATCHES, MAX_GROUPS, MAX_BATCHES_PER_GROUP } from '../physics-autopilot/src/capacity.mjs';
// Public CLI contract; native preflight reads declarations in this wrapper.
const USAGE = 'usage: node tools/physics-support/alpha-groups.mjs --run RUN [--generate] [--facts] [--json] [--max-groups N] [--max-batches N]';
const argv = process.argv.slice(2);
if (!argv.includes('--run')) {
  console.error(USAGE);
  process.exitCode = 2;
} else {
  process.exitCode = assignmentCLI({ argv, maxRunBatches: MAX_RUN_BATCHES,
    maxGroups: MAX_GROUPS, maxBatches: MAX_BATCHES_PER_GROUP });
}
