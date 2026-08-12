#!/bin/sh
cd /Users/ianx/Projects/prestige-math-library
JUDGE_LINEUP=deepseek+terra node tools/judge-sweep.mjs --ledger research/frontier-11-judge.jsonl --cost research/frontier-11-judge-cost.jsonl --items def-path-polygonal-length-and-rectifiability-in-rn,thm-rectifiable-iff-coordinate-functions-have-bounded-variation,thm-arc-length-is-invariant-under-monotone-reparametrization,thm-extremal-graph-supersaturation > research/frontier-11-rejudge.log 2>&1
