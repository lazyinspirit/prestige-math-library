#!/usr/bin/env node
import { checkAppendReview, applyAppendReview, assertAppendApplyBoundary } from '../src/frontier-append.mts';
import { appendRegistry } from '../../physics-support/frontier-append-evidence.mjs';
import { resolve } from 'node:path';
const args = process.argv.slice(2), action = args[0];
const option = (name: string) => { const i = args.indexOf(name); return i < 0 ? undefined : args[i + 1]; };
try {
    const run = option('--run'), n = Number(option('--generation'));
    if (!run || !Number.isInteger(n) || n < 1)
        throw Error('check-review|apply requires --run RUN --generation N');
    if (action === 'check-review') {
        const e = checkAppendReview(process.cwd(), run, n);
        console.log(`APPEND_REVIEW ${e.pairs.length} page(s), generation ${n}`);
    }
    else if (action === 'apply') {
        const stateDir = resolve(option('--state-dir') ?? `.physics-autopilot/${run}`);
        assertAppendApplyBoundary(process.cwd(), run, n, stateDir);
        const e = appendRegistry(process.cwd(), run).appends.find((e: any) => e.number === n);
        if (!e)
            throw Error('unknown generation');
        const r = applyAppendReview(process.cwd(), run, n);
        console.log(`APPEND_APPLY ${n}: separate native review ${r.reportSha256}; base unchanged`);
    }
    else
        throw Error('unknown action');
}
catch (e: any) {
    console.error(e.message);
    process.exitCode = 1;
}
