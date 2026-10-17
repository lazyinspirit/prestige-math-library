#!/usr/bin/env bash
# ROOT ONLY. Prepared; not launched. Fresh rootwriter/86stability context required.
set -euo pipefail
python3 - <<'GUARD'
from pathlib import Path
import json
base=Path('research/numerical-optimization-dynamics-2026-10-16-owner-step2-b3-apply-ready-r2-20261016T094634705392Z/final-same-session-completion')
o=json.loads((base/'preparation.json').read_text())
for rel in o['source_paths']:
 p=Path(rel);expected=base/'approved-five-after-root'/rel
 if not p.is_file() or p.read_bytes()!=expected.read_bytes():raise SystemExit('POST-ROOT SOURCE GUARD MISMATCH: '+rel)
print('Five approved final source-byte guards match; no source written.')
GUARD
exec node tools/dispatch.mjs --role scope-repairer --profile gpt-6.1-sol-medium --brief research/numerical-optimization-dynamics-2026-10-16-owner-step2-b3-apply-ready-r2-20261016T094634705392Z/final-same-session-completion/original-owner-final-completion.task.md --task research/numerical-optimization-dynamics-2026-10-16-owner-step2-b3-apply-ready-r2-20261016T094634705392Z/final-same-session-completion/original-owner-final-completion.task.md --label owner-b3-existing-cycle2-final-completion --run numerical-optimization-dynamics-2026-10-16 --session-home research/numerical-optimization-dynamics-2026-10-16-scope-review/batch-3/scope-repairer-session --resume-session 01a143b9-06eb-7aa3-aa0b-b5e90361c8ba --result-artifact research/numerical-optimization-dynamics-2026-10-16-owner-step2-b3-apply-ready-r2-20261016T094634705392Z/final-same-session-completion/original-owner-final-completion-result.json --timeout 14400 --json
