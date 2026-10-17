#!/usr/bin/env bash
set -euo pipefail
exec node tools/dispatch.mjs \
 --role scope-repairer \
 --profile gpt-6.1-sol-medium \
 --brief briefs/scope-owner-repairer.md \
 --task research/numerical-optimization-dynamics-2026-10-16-owner-step2-b85/rebase-after100/native-original85-apply.task.md \
 --session-home research/numerical-optimization-dynamics-2026-10-16-scope-review/batch-85/scope-repairer-session \
 --resume-session 01a143e1-ee67-74f3-bab2-bb894bce9ff0 \
 --run numerical-optimization-dynamics-2026-10-16 \
 --label owner-ctrl-dispatch85-after100-r1 \
 --result-artifact research/numerical-optimization-dynamics-2026-10-16-owner-step2-b85/rebase-after100/original85-apply-result.json \
 --timeout 7200 \
 --json
