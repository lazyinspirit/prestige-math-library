#!/bin/sh
cd /Users/ianx/Projects/prestige-math-library
JUDGE_LINEUP=deepseek+terra node tools/judge-sweep.mjs --ledger research/frontier-11-judge.jsonl --cost research/frontier-11-judge-cost.jsonl --items cex-the-koch-curve-is-not-rectifiable > research/frontier-11-koch-judge.log 2>&1
