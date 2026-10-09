#!/usr/bin/env node
// Native appended-frontier review gates/materialization; --run and --generation
// name one fresh review, never an already completed original drift label.
import { checkAppendReview, applyAppendReview } from '../src/frontier-append.mts';
const args = process.argv.slice(2), action = args[0];
const option = (name: string) => {
  const at = args.indexOf(`--${name}`);
  return at < 0 || !args[at + 1] || args[at + 1].startsWith('--') ? undefined : args[at + 1];
};
const run = option('run'), number = Number(option('generation'));
try {
  if (!run || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(run) || !Number.isInteger(number) || number < 1)
    throw new Error('required: check-review|apply --run RUN --generation N');
  if (action === 'check-review') {
    const entry = checkAppendReview(process.cwd(), run, number);
    console.log(`APPEND_REVIEW ${entry.pairs.length} page(s) reviewed for generation ${number}`);
  } else if (action === 'apply') {
    const receipt = applyAppendReview(process.cwd(), run, number);
    console.log(`APPEND_APPLY ${number}: merged actual review ${receipt.reportSha256}`);
  } else throw new Error('unknown frontier-append action');
} catch (error: any) { console.error(error.message); process.exitCode = 1; }
