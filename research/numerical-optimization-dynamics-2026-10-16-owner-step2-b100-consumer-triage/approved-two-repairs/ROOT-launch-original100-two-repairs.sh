#!/usr/bin/env bash
set -euo pipefail
exec node tools/dispatch.mjs \
 --role scope-repairer \
 --profile gpt-6.1-sol-medium \
 --brief briefs/scope-owner-repairer.md \
 --task research/numerical-optimization-dynamics-2026-10-16-owner-step2-b100-consumer-triage/approved-two-repairs/native-original100-apply.task.md \
 --session-home research/numerical-optimization-dynamics-2026-10-16-scope-review/batch-100/scope-repairer-session \
 --resume-session 01a143f6-4087-7503-a211-97cb849a7a91 \
 --run numerical-optimization-dynamics-2026-10-16 \
 --label owner-ctrl100-approved-two-repairs-r1 \
 --result-artifact research/numerical-optimization-dynamics-2026-10-16-owner-step2-b100-consumer-triage/approved-two-repairs/original100-two-repair-result.json \
 --timeout 7200 \
 --json
