# frontier-33 · Alpha group `d` · Step 3 recheck

Rechecked the current batch-8, batch-13, and batch-16 manifests and coverage
ledgers, their `## Step-3 fix pass` records, group-`d` scope decisions, and
the current `research/plan-spec.json`. The dispositions below concern the
current bytes, rather than the earlier scaffold-review snapshot.

## Dispositions

1. **Batch 8 — no reviewer finding: closed.** The review reported no claim,
   identifier, prerequisite, page-order, or coverage defect. The current pair
   remains `44 + 8 = 52` items at orders `366.009` and `366.01`, with the A
   page requiring `cw-complexes-and-cellular-homology-examples` and the B page
   requiring its A companion. Every item has an explicit dependency array;
   the 76 harvested results validate without error or warning. No repair or
   pushback is outstanding.

2. **Batch 8 — Lebl source-record consistency repair: applied and closed.**
   `ex-local-degrees-of-a-polynomial-map-on-the-riemann-sphere` now cites
   `https://jirilebl.github.io/ca/ca.pdf`, exactly matching the coverage
   record. That record retains `https://www.jirka.org/ca/ca.pdf` as
   `original_url`, the full-text verification record (`2,058,822` bytes,
   SHA-256 prefix `d48d49f1e534ba4e`), and the retained locators: §1.3,
   pp. 19–20, and Lemma 5.1.1/Definition 5.1.2, pp. 122–123. The current
   source check is 7/7 fetch-verified and source backing covers all 30 source
   carriers. This is a reference-URL alignment only: the polynomial local
   degree claim, elementary factorisation route, dependencies, conventions,
   and plan edges are unchanged.

3. **Batch 13 — no reviewer finding: closed.** The current integration/Stokes
   pair remains `47 + 12 = 59` items at orders `469` and `470`. Its A page
   retains the six stated differential-geometric prerequisites and its B page
   retains only the A page; every item retains an explicit dependency array.
   The 139 coverage results and four fetch-verified source records support the
   retained compact-support, chart-orientation, half-space, density, and
   supplied-volume-form route. No manifest or coverage amendment was reported
   in the fix pass, and none is warranted.

4. **Batch 16 — no reviewer finding: closed.** The compact-band deformation
   and handle-attachment pair remains `21 + 6 = 27` items at orders `525` and
   `526`. Its A page retains exactly
   `stable-unstable-manifolds-and-morse-smale-transversality-examples` and
   `cw-complexes-and-cellular-homology` as page prerequisites, and its B page
   retains the A companion. All dependency arrays are explicit; the 44
   coverage results and three source records validate. Thus the compact-band,
   one-critical-point, endpoint, repeated-critical-value, and noncompact-band
   qualifications have not acquired a missing dependency or a contrary
   current record.

## Scope decisions

`node tools/scope-decisions.mjs refresh --run frontier-33 --group d` exposed
16 stale pending rows (eight in batch 8 and eight in batch 16). I checked each
against its exact coverage reason, the current manifests, and the live plan,
then recorded 14 `stands` decisions and two `owner-decision` rows. The latter
preserve the deliberately unassigned AT-12 sphere-classification destination;
neither classification claim is used in batch 8. The 11 existing batch-13
decisions remain supported. The subsequent `check` reports 27 current declines
and 0 errors; every row has nonempty current evidence.

## Pair verdicts

- `homology-axioms-degree-and-classical-applications`: **sufficient**.
- `integration-of-forms-and-the-general-stokes-theorem`: **sufficient**.
- `sublevel-deformation-and-the-handle-attachment-theorem`: **sufficient**.

`research/frontier-33-alpha-d-step3-verdicts.json` was parsed after the
current-byte checks and contains exactly these three sufficient records. There
is no blocked pair and therefore no `insufficient` record or missing list.

## Current-byte checks

- Scope refresh/check: 27 declines; refresh exposed 16 pending rows, all
  resolved before the final check; 0 final errors.
- `coverage-checklist --require-destination`: 76 (batch 8), 139 (batch 13),
  and 44 (batch 16) harvested results; 0 errors and 0 warnings for each.
- `content-policy --manifest-only`: 52, 59, and 27 scoped items,
  respectively; 0 errors and 0 warnings for each.
- `manifest-deps`: 52, 59, and 27 items, respectively; 0 normalizations and
  0 errors for each.
- `source-fetch-check`: 7/7, 4/4, and 3/3 current source records,
  respectively, fetch-verified.
- `splice-plan --dry-run`: batches 8, 13, and 16 each report two pages already
  correct, with no refusal or new splice.
- `validate-plan research/plan-spec.json --repo . --max-items 60`: the owned
  page records remain valid, but the whole-plan check currently reports two
  `undeclared-prereq` errors on the algebraic-geometry page
  `dimension-constructible-images-and-dimensions-of-fibres`. This is outside
  group `d` and neither item is in the closure of these three pairs; it is
  recorded here as a cross-group plan alert, not repaired by this group.

No Step-3 recheck obligation remains for group `d`. The next action belongs to
the engine's Step-4 splice boundary; this recheck makes no splice, content,
scope, or ordering change.
