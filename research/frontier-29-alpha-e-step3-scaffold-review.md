# frontier-29 — Alpha group `e` Step 3 scaffold review

Scope: batches `5` and `16`, covering
`finite-dimensional-normed-spaces-and-riesz-lemma` and
`vector-fields-flows-and-lie-derivatives`.

I read the current `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and `CLAUDE.md`;
the batch `5` and batch `16` manifests, coverage files, and notes; the live
`research/plan-spec.json`; and the controlling design sections
`research/plan-functional-analysis-track.md:424-520` and
`research/plan-differential-geometry-track.md:2301-2516`. On Wednesday,
September 2, 2026, I refreshed
`research/frontier-29-alpha-e-scope-decisions.json`, resolved its seven pending
rows, and checked the resulting file.

## Verdicts

| A page | Batch | Verdict | Reason |
|---|---:|---|---|
| `finite-dimensional-normed-spaces-and-riesz-lemma` | 5 | insufficient | The FA-3 route still makes `lem-riesz-lemma` load-bearing, but the live reharvest leaves only an abstract-level carrier for that lemma and no full-text functional-analysis treatment on the current bytes. |
| `vector-fields-flows-and-lie-derivatives` | 16 | insufficient | DG-9 still keeps the flowout and time-dependent tail in scope, but the live coverage omits Lee entirely and records no replacement carrier for items `33`-`34` and `41`-`44`. |

## Scope-decision review

`node tools/scope-decisions.mjs refresh --run frontier-29 --group e` produced
seven current decline rows for this group. All seven now resolve as `stands`,
and `node tools/scope-decisions.mjs check --run frontier-29 --group e` returns
`scope-decisions: 7 current decline(s), 0 error(s)`.

Those carried scope boundaries are still honest on current disk:

- batch `5` still keeps the Hahn-Banach separation rows on
  `the-analytic-hahn-banach-theorem` and still leaves the full-choice
  Howard-Tachtsis equivalence outside FA-3
- batch `16` still stops at vector-field Lie derivatives here and still sends
  tensor-field / differential-form Lie-derivative material forward to DG-11
  and DG-12

## Direct repairs applied

No batch-local scaffold repair was both needed and licensed in this review. The
only file I changed before writing the Step 3 deliverables was
`research/frontier-29-alpha-e-scope-decisions.json`.

## Stable findings

### B5-1 — `finite-dimensional-normed-spaces-and-riesz-lemma` is missing a live full-text carrier for `lem-riesz-lemma`

The current FA-3 design still makes Riesz's lemma load-bearing:

- `research/plan-functional-analysis-track.md:443-446` keeps
  `lem-riesz-lemma` as item `7` and uses it again in the compactness theorem at
  item `9`
- `research/frontier-29-batch-5.pages.json:77-125` still routes
  `thm-locally-compact-normed-space-iff-finite-dimensional`,
  `lem-dependent-choice-riesz-separated-unit-sequence`, and
  `thm-closed-unit-ball-compact-iff-finite-dimensional` through
  `lem-riesz-lemma`

But the live post-reharvest coverage no longer contains a full treatment of the
lemma itself:

- `research/frontier-29-batch-5.coverage.json:140-142` maps
  `lem-riesz-lemma` only to the Howard-Tachtsis abstract claim
  “Mazur's Lemma is provable in ZF”
- `research/frontier-29-batch-5.notes.md:264-304` says the September 2, 2026
  reharvest replaced Bühler-Salamon only for the coordinate-map and
  Hamel-basis rows
- `research/frontier-29-batch-5.coverage.json:87-96` explicitly defers
  Teschl's adjacent Hahn-Banach consequences to FA-4, so they do not repair
  the missing pre-Hahn-Banach Riesz-lemma route

Exact missing result and source:

- a live full-text functional-analysis treatment of `lem-riesz-lemma` on the
  FA-3 route, such as the design-named Bühler-Salamon §1.2.2 treatment or an
  equivalent replacement source recorded in coverage

Because items `6`, `8`, and `9` still depend on that lemma, the pair is not
author-ready on current bytes.

### B16-1 — `vector-fields-flows-and-lie-derivatives` is missing the DG-9 flowout and time-dependent source tail

The current DG-9 design still keeps the flowout and time-dependent material in
scope:

- `research/plan-differential-geometry-track.md:2401-2405` keeps
  `def-flowout-of-an-embedded-submanifold` and `thm-flowout-theorem` as items
  `33` and `34`
- `research/plan-differential-geometry-track.md:2425-2433` keeps the
  time-dependent items `41`-`44`
- `research/plan-differential-geometry-track.md:2473-2478` names Lee Chapter 9
  “Flowouts” and “Time-Dependent Vector Fields” as part of the primary source
  route for items `1`-`44`

The current manifest still carries those exact items:

- `research/frontier-29-batch-16.pages.json:355-375` keeps the flowout
  definition and theorem
- `research/frontier-29-batch-16.pages.json:441-475` keeps the time-dependent
  definition, local theorem, cocycle law, and compact-support globalisation

But the live coverage no longer supplies that source tail:

- `research/frontier-29-batch-16.coverage.json:58-220` records only Merry and
  Hitchin
- `research/frontier-29-batch-16.notes.md:203-209` explicitly says Lee was not
  recorded because no full-text URL was obtained
- the current coverage file names no carrier at all for
  `def-flowout-of-an-embedded-submanifold`,
  `thm-flowout-theorem`,
  `def-time-dependent-vector-field-and-evolution-operator`,
  `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators`,
  `prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law`, or
  `thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval`

Exact missing results and source:

- Lee Chapter 9 `Flowouts`, or an equivalent live replacement, for
  `def-flowout-of-an-embedded-submanifold` and `thm-flowout-theorem`
- Lee Chapter 9 `Time-Dependent Vector Fields`, or an equivalent live
  replacement, for
  `def-time-dependent-vector-field-and-evolution-operator`,
  `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators`,
  `prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law`, and
  `thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval`

This is a source sufficiency defect, not just a low-yield stylistic issue: the
designed DG-9 tail is still in scope, but its live coverage carrier is absent.

## Checks run

- `node tools/scope-decisions.mjs refresh --run frontier-29 --group e`
  Result: `scope-decisions: e: 7 decline(s), 7 pending`.
- `node tools/scope-decisions.mjs check --run frontier-29 --group e`
  Result: `scope-decisions: 7 current decline(s), 0 error(s)`.
- Focused carrier audit over the two owned A pages
  Result: `lem-riesz-lemma` currently has only the Howard-Tachtsis abstract
  carrier, and the DG-9 flowout/time-dependent items listed above have no live
  source carrier in `research/frontier-29-batch-16.coverage.json`.

## Outcome

Group `e` has two insufficient A pages on the current bytes:

- `finite-dimensional-normed-spaces-and-riesz-lemma`
- `vector-fields-flows-and-lie-derivatives`

`research/frontier-29-alpha-e-step3-verdicts.json` records both pages as
`insufficient`.
