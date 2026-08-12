#!/bin/sh
cd /Users/ianx/Projects/prestige-math-library
JUDGE_LINEUP=deepseek+terra node tools/judge-sweep.mjs --ledger research/frontier-11-judge.jsonl --cost research/frontier-11-judge-cost.jsonl --items thm-extremal-graph-supersaturation > research/frontier-11-rejudge2.log 2>&1
