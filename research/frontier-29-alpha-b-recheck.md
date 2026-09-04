# frontier-29 · Alpha group `b` · Step 3 recheck

Checks run against the current bytes on Wednesday, September 2, 2026
(Australia/Sydney local time).

I re-read the current:

- `research/frontier-29-alpha-b-step3-scaffold-review.md`
- `research/frontier-29-batch-3.notes.md` (`## Step-3 fix pass`)
- `research/frontier-29-batch-13.notes.md` (`## Step-3 fix pass`)
- `research/frontier-29-batch-14.notes.md` (`## Step-3 fix pass`)
- `research/frontier-29-batch-3.pages.json`
- `research/frontier-29-batch-13.pages.json`
- `research/frontier-29-batch-14.pages.json`
- `research/frontier-29-batch-3.coverage.json`
- `research/frontier-29-batch-13.coverage.json`
- `research/frontier-29-batch-14.coverage.json`
- `research/plan-spec.json`
- `research/plan-commutative-algebra-track.md`
- `research/plan-algebraic-geometry-track.md`
- `research/frontier-29-alpha-b-scope-decisions.json`
- `research/frontier-29-alpha-b-step3-verdicts.json`

The live `research/plan-spec.json` entries for these six pages are still
pre-splice stubs with empty `items` arrays, so author-readiness was rechecked
from the batch manifests plus a temp spliced plan rather than from the raw
plan file alone.

Focused checks on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-29 --group b` -> `scope-decisions: b: 25 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-29 --group b` -> `scope-decisions: 25 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-29-batch-3.coverage.json research/frontier-29-batch-13.coverage.json research/frontier-29-batch-14.coverage.json --require-destination` -> `coverage-checklist: 3 page(s), 170 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-3.pages.json research/frontier-29-batch-13.pages.json research/frontier-29-batch-14.pages.json` -> `content-policy: 115 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-3.coverage.json` -> `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-13.coverage.json` -> `source-fetch-check: 2/2 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-14.coverage.json` -> `source-fetch-check: 3/3 source(s) fetch-verified`
- temp spliced plan check for batches `3`, `13`, and `14` -> `node tools/validate-plan.mjs /tmp/frontier-29-alpha-b-spliced-plan.recheck.json` ended in `OK` and reported only the standing repository-wide `redundant-prereq` advisories; no batch-`b`-specific cycle, forward-reference, unresolved-id, undeclared-prereq, or B-page-dependency defect remained

## Dispositions

1. `henselian-rings-and-equicharacteristic-cohen-structure` / finding `none issued`: **closed**.
   The batch-3 Step-3 fix-pass note is accurate on the current bytes. The stable group-`b` review still records the only local repair in this cohort on CA-14, and the live B-page manifest still carries the repaired dependencies exactly as claimed: `ex-artinian-local-ring-henselian` now depends only on `cor-artinian-local-henselian-via-nilpotent-maximal-ideal`, `def-polynomial-ring-over-a-commutative-ring`, and `def-quotient-ring`, while `ex-localised-integers-not-henselian` now depends only on `cor-henselian-local-simple-root-criterion`, `thm-localisation-at-a-prime-is-local`, `cor-residue-field-of-a-localisation-at-a-prime`, and `thm-z-mod-p-is-a-field`. The current spliced-plan validation is clean, so the prior foreign-B-page dependency defect remains repaired and no further scaffold change is owed.

2. `affine-algebraic-sets-and-coordinate-rings` / finding `none issued`: **closed**.
   The batch-13 Step-3 fix-pass note is accurate on the current bytes. The stable group-`b` review still marks AV-1 `sufficient`, the manifest still keeps the coordinate-ring definition before `thm-affine-variety-prime-coordinate-ring`, and the coverage rows still show the same five exact deferments to `morphisms-local-rings-and-rational-maps-of-affine-varieties` plus five honest out-of-scope exclusions. The current plan still places that destination immediately next in order at `366.043`, so the no-op pushback remains justified.

3. `presheaves-sheaves-stalks-and-sheafification` / finding `none issued`: **closed**.
   The batch-14 Step-3 fix-pass note is accurate on the current bytes. The stable review still marks AV-9 `sufficient`, the manifest still keeps `thm-sheaves-as-local-homeomorphisms` self-contained with only local AV-9 dependencies, and the coverage rows still send the exact deferred module/exactness material to `sheaf-operations-exactness-ringed-spaces-and-module-pullback` while keeping the extra example rows out of scope. The current plan still places that destination immediately next in order at `366.059`, so no further manifest or harvest repair is owed.

4. Group `b` scope decisions: **closed**.
   Refresh on Wednesday, September 2, 2026 returned `25 decline(s), 0 pending`, so no new row needed resolution before the check. The follow-up check passed with `25 current decline(s), 0 error(s)`, and the live scope ledger still resolves every owned decline as `stands`: `10` rows on batch `13` and `15` rows on batch `14`, with no current row on batch `3`. The exact deferred destinations remain present on current disk and match the controlling AV-2 and AV-10 ownership boundaries.

## Outcome

The verified Step-3 verdicts for group `b` remain:

- `henselian-rings-and-equicharacteristic-cohen-structure` -> `sufficient`
- `affine-algebraic-sets-and-coordinate-rings` -> `sufficient`
- `presheaves-sheaves-stalks-and-sheafification` -> `sufficient`

`research/frontier-29-alpha-b-step3-verdicts.json` already matched this
verified all-`sufficient` state on the current bytes, so no verdict-byte change
was required.
