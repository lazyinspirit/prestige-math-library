#!/bin/sh
# Step-7 paired judge sweep for run frontier-12.
#
# Every A page in the completed level, per the workflow rule: both judges judge
# every item whether or not Alpha changed it at step 6. The sweep adds each A
# page's B companion automatically, because the judge's context unit is the PAIR.
# --items is reserved for a later Alpha-selected rejudge after a material repair.
#
# JUDGE_LINEUP=deepseek+terra is the owner's lineup (2026-08-04): DeepSeek V4 Pro
# direct at `max`, tool-less by transport, and GPT 5.6 Terra as a fresh ephemeral
# read-only Codex process in an empty temp dir at xhigh with an explicit
# 1,000,000-token window, so the frozen prompt is its only context.
# Pools are 16 slots per lane, 32 combined. Do not raise them: every lane call is
# its own node+tsx process, and a capacity refusal is a null verdict, not a verdict.
set -e
cd /Users/ianx/Projects/prestige-math-library

PAGES='the-field-of-fractions-and-localisation,splitting-fields,composition-series-and-solvable-groups,free-modules-and-exact-sequences,eigenvalues-eigenvectors-and-the-characteristic-polynomial,dual-spaces-bilinear-forms-and-inertia,pi-the-equivalent-characterizations,line-integrals-and-the-gradient-theorem,finite-probability-spaces-and-random-variables,finite-probability-and-the-probabilistic-method,complex-differentiability-and-cauchy-riemann,limits-and-colimits'

JUDGE_LINEUP=deepseek+terra node tools/judge-sweep.mjs \
  --ledger research/frontier-12-judge.jsonl \
  --cost   research/frontier-12-judge-cost.jsonl \
  --pages  "$PAGES"
