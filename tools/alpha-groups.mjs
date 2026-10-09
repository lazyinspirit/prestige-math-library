#!/usr/bin/env node
// Generate or validate the current run's metadata-only batch assignment.
import { assignmentCLI } from './alpha-group-assignment.mjs';
import { MAX_RUN_BATCHES, MAX_GROUPS, MAX_BATCHES_PER_GROUP } from './autopilot/src/capacity.mjs';
process.exitCode = assignmentCLI({ maxRunBatches: MAX_RUN_BATCHES,
  maxGroups: MAX_GROUPS, maxBatches: MAX_BATCHES_PER_GROUP });
