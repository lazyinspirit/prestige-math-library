#!/usr/bin/env bash
set -euo pipefail
exec node tools/dispatch.mjs \
  --role scope-repairer \
  --profile gpt-6.1-sol-medium \
  --brief briefs/scope-owner-repairer.md \
  --task research/numerical-optimization-dynamics-2026-10-16-owner-step2-b84/native-owner-continuation.task.md \
  --session-home research/numerical-optimization-dynamics-2026-10-16-scope-review/batch-84/scope-repairer-session \
  --resume-session 01a143e1-2b4f-74d2-9f38-64419447813e \
  --run numerical-optimization-dynamics-2026-10-16 \
  --label owner-merged-lm84-original-r1 \
  --result-artifact research/numerical-optimization-dynamics-2026-10-16-owner-step2-b84/original-owner-continuation-result.json \
  --timeout 7200 \
  --json
