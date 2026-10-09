#!/usr/bin/env node
// Generate or validate physics assignments using the physics engine's limits.
import { assignmentCLI } from '../alpha-group-assignment.mjs';
import { MAX_RUN_BATCHES, MAX_GROUPS, MAX_BATCHES_PER_GROUP } from '../physics-autopilot/src/capacity.mjs';
process.exitCode = assignmentCLI({ maxRunBatches: MAX_RUN_BATCHES,
  maxGroups: MAX_GROUPS, maxBatches: MAX_BATCHES_PER_GROUP });
