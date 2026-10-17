#!/usr/bin/env bash
set -euo pipefail
# ROOT ONLY: append fresh writer authority before launching.
cd /home/lazyinspirit/Projects/prestige-math-library
node tools/dispatch.mjs --role scope-repairer --profile gpt-6-luna-max --brief briefs/scope-owner-repairer.md --task research/numerical-optimization-dynamics-2026-10-16-owner-step2-105-approved-apply/apply.task.md --label owner-scope-105-approved-apply --run numerical-optimization-dynamics-2026-10-16 --covers 105 --session-home research/numerical-optimization-dynamics-2026-10-16-scope-review/batch-105/scope-repairer-session --resume-session 01a143f4-8644-70d0-9830-831380747220 --result-artifact research/numerical-optimization-dynamics-2026-10-16-owner-step2-105-approved-apply/original105-apply-result.json --timeout 14400 --json
