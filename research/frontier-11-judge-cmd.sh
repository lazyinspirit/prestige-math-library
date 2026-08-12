#!/bin/sh
cd /Users/ianx/Projects/prestige-math-library
JUDGE_LINEUP=deepseek+terra node tools/judge-sweep.mjs --ledger research/frontier-11-judge.jsonl --cost research/frontier-11-judge-cost.jsonl --pages field-extensions-and-the-complex-numbers,conjugacy-and-simplicity-in-the-symmetric-groups,the-determinant-of-a-linear-operator,the-integral-logarithm-and-its-characterisations,arc-length-and-rectifiable-curves,formal-power-series,extremal-graph-theory,the-fundamental-theorems-of-calculus,universal-properties-and-the-yoneda-lemma > research/frontier-11-judge-sweep.log 2>&1
