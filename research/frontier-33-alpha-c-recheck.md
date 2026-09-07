# frontier-33 · Alpha group `c` · Step 3 recheck

Rechecked the current batch-5, batch-6, and batch-7 manifests and coverage
ledgers; their `## Step-3 fix pass` notes; the current `research/plan-spec.json`;
and the refreshed group-`c` scope-decision ledger. The dispositions below are
for the bytes checked in this pass.

## Dispositions

1. **Batch 5 — no Step-3 finding: affirmed as inapplicable.** The batch-5
   fix-pass note correctly identifies no finding addressed to either
   `classical-zero-free-region-and-the-prime-number-theorem` or
   `decomposition-inertia-and-frobenius`. Its two A/B pairs remain respectively
   20/8 and 29/7 manifest items, with their declared plan prerequisites and
   companion edges unchanged. No repair or pushback is outstanding.

2. **Batch 6 — localized cone triangles dependency-description repair: closed.**
   `lem-localized-cone-triangles-satisfy-tr-one-through-tr-three` now declares
   and describes the exact prerequisite
   `lem-finite-roof-squares-and-composable-pairs-can-be-cleared`; the latter
   precedes it in the `derived-categories` route. This matches the stated TR3
   mechanism of clearing the localized square before obtaining the third
   comparison map by the cohomology five lemma. Neither the current manifest
   dependency array nor the fix-pass note's dependency record uses the stale
   ordinal; the note mentions it only to identify the repaired finding.

3. **Batch 6 — canonical t-structure dependency-description repair: closed.**
   `thm-the-canonical-pair-is-a-t-structure` now declares and describes the
   exact prerequisite `thm-canonical-truncations-fit-a-distinguished-triangle`.
   The theorem's stated decomposition argument uses that truncation triangle;
   it is earlier in the same A route. Neither the current manifest dependency
   array nor the fix-pass note's dependency record uses the stale ordinal; the
   note mentions it only to identify the repaired finding.

4. **Batch 7 — duplicate companion-page representation repair: closed.** The
   current batch-7 manifest has exactly one
   `regular-local-rings-and-homological-dimension-examples` B object, at order
   `365.906`, containing 18 distinct items in the recorded encounter order;
   the A object at `365.905` contains 60. The plan has the same A/B identity,
   order, and companion edge. Repeating the merge would reintroduce the defect.

## Scope decisions

`scope-decisions refresh --run frontier-33 --group c`, followed by `check`,
reports 29 current declines and zero errors: 9 for batch 5, 14 for batch 6,
and 6 for batch 7. The nine newly pending batch-5 rows were checked against
the current manifest and coverage rows and are now recorded as `stands`:
the two alternate logarithmic-derivative estimates, cosine-polynomial
optimization, general density implication, arbitrary-base and Beatty examples,
and the three infinite/numerical local-field extensions are not used by either
selected batch-5 route. Twenty-seven decisions stand. The two
`owner-decision` rows remain the non-load-bearing future homes for Stacks
§13.7 adjoint results; assigning those homes is outside this group's scope and
does not block an assigned pair.

## Pair verdicts

- `classical-zero-free-region-and-the-prime-number-theorem`: **sufficient**.
- `decomposition-inertia-and-frobenius`: **sufficient**.
- `derived-categories`: **sufficient**.
- `regular-local-rings-and-homological-dimension`: **sufficient**.

The existing `research/frontier-33-alpha-c-step3-verdicts.json` was parsed
after these current-byte checks and already contains exactly these four
sufficient rows; no missing-list entry is warranted.

## Current-byte checks

- `manifest-deps` over batches 5, 6, and 7: 211 items, 0 normalizations, 0
  errors.
- `coverage-checklist --require-destination`: batch 5 has 115 harvested rows
  with 0 errors/warnings; batch 6 has 190 with 0 errors and its known
  informational `coverage-low-yield` warning; batch 7 has 116 with 0
  errors/warnings.

## Cross-owner alert

The current full `validate-plan research/plan-spec.json` check exits 1 with two
unrelated `undeclared-prereq` errors on group `e`/batch-9 page
`dimension-constructible-images-and-dimensions-of-fibres`: dependencies on
`zariski-topology-on-prime-spectra` and
`schemes-subschemes-and-morphisms-locally-of-finite-type` are outside that
page's declared prerequisite closure. I did not alter that foreign plan page.
The four group-`c` page records and their direct plan prerequisites were
separately checked and are unaffected, but the engine must route the recorded
plan error to its owning group before any run-wide plan gate can pass.
