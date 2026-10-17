#!/usr/bin/env bash
set -euo pipefail
exec node tools/dispatch.mjs \
 --role scope-reviewer \
 --profile gpt-6.1-sol-medium \
 --brief briefs/scope-owner-repairer.md \
 --task research/numerical-optimization-dynamics-2026-10-16-owner-step2-b100-consumer-triage/native-original100-consumers.task.md \
 --session-home research/numerical-optimization-dynamics-2026-10-16-scope-review/batch-100/scope-repairer-session \
 --resume-session 01a143f6-4087-7503-a211-97cb849a7a91 \
 --run numerical-optimization-dynamics-2026-10-16 \
 --label owner-ctrl100-original-consumers-r1 \
 --result-artifact research/numerical-optimization-dynamics-2026-10-16-owner-step2-b100-consumer-triage/original100-consumer-result.json \
 --timeout 7200 \
 --json
