# Batch 59 authoring notes — bayesian-computational-statistics-62

## Scope and plan reconciliation

This batch owns the A/B pair `quasi-monte-carlo-discrepancy-and-rules` /
`quasi-monte-carlo-discrepancy-and-rules-examples`, pages 2158–2159 in
`bayesian-computational-statistics`.

The controlling `research/plan-spec.json` row labels page 2158 BCS-56, gives the
title and companion shown in the dispatch, and requires only
`statistical-and-computational-error-accounting`. The full track-design
paragraph also lists BCS-25 and the item suppliers
`def-expectation-of-a-nonnegative-or-integrable-random-variable`,
`thm-change-of-variables-for-expectation`, and
`thm-tonelli-theorem-for-sigma-finite-product-spaces`. Following the
controlling plan and assigned scaffold, this pair adds no BCS-25 page
requirement. The expectation and change-of-variables suppliers are actual
dependencies of the inverse-CDF example. The smooth-variation proof uses
Riemann Fubini and finite additivity of the Riemann integral instead of
Tonelli; that substitution is recorded as a proof-route difference, not a
change in scope.

The five design-specified carriers remain, together with the two existing
local proof lemmas and three additional local prerequisites. The new
prerequisites on the A page are lower-anchor variation for subrectangles,
Riemann integrability of bounded coordinatewise monotone functions, and the
result that finite upper-anchor Hardy–Krause variation implies bounded Riemann
integrability. The Koksma–Hlawka statement now has the planned finite-variation
scope and proves the required integrability prerequisite locally. The proof
does not import the decomposition argument cited by the sources.

One design-versus-plan `Requires` conflict remains owner-relevant: the design
lists BCS-25 as well as BCS-54, but the controlling plan-spec and assigned
scaffold list BCS-54 only. The shared plan was not edited.

## Inventory and local dependency levels

The A page contains ten items and the B page four examples. Local levels were
computed from the current manifest dependencies, counting only in-pair
suppliers:

| Level | Items |
|---|---|
| 0 | `def-star-discrepancy-and-digital-net`; `def-hardykrause-variation`; `lem-bounded-coordinatewise-monotone-is-riemann-integrable` |
| 1 | `def-hardykrause-variation-lower-anchor`; `alg-digital-net-and-lattice-rule`; `lem-hk-smooth-mixed-derivative-formula`; `lem-anchored-box-summation-by-parts-hk-variation`; `thm-uniform-distribution-integrates-riemann-functions` |
| 2 | `lem-finite-hardykrause-variation-implies-riemann-integrability`; `ex-diagonal-lattice-poor-joint-projection` |
| 3 | `thm-koksma-hlawka-integration-bound` |
| 4 | `ex-digital-net-power-of-base-size-restriction`; `ex-smooth-finite-hk-integrand-koksma-hlawka`; `ex-inverse-cdf-integrable-singularity-infinite-variation` |

The dispatch scheduling snapshot says batch 59 is at level 2 after batch 57,
with input SHA-256
`4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d`. The
batch graph still has the declared batch-57 prerequisite. The run-level
scheduling record is owner-controlled; this pair edits only its assigned
manifest and evidence.

## Supplier inspection and unresolved cross-batch context

The required BCS-54 A page and complete current batch-57 manifest were read.
The available actual carrier
`def-statistical-and-computational-error-ledger` is a definition with no proof
phase. Its relevant interface states that a deterministic quadrature rule has
no replicate-based error estimate unless an actual randomization is added;
the A-page summary uses exactly this distinction. The following four items in
the actual batch-57 manifest remain absent as item carriers, and no Step-1
readiness record exists for the available definition:

- `thm-pathwise-error-ledger-decomposition`;
- `thm-error-ledger-mse-covariance-identity`;
- `thm-independent-replicate-variance-estimator`;
- `cor-independent-replicate-mean-clt`.

Their planned manifest previews are not treated as verified supplier
statements or proofs. The QMC proofs do not use them, but the required BCS-54
page context is partial, so every batch-59 item is recorded `escalated` for
owner reconciliation rather than `ready`. The exact page interface, missing
IDs, inspected carriers, and affected page readiness are recorded in
`research/bayesian-computational-statistics-62-batch-59.cross-batch-dependencies.json`.

The BCS-54 A page itself lists four page contexts:
`iid-monte-carlo-integration-and-error`,
`resampling-algorithms-and-sampling-units`,
`finite-group-permutation-inference`, and
`cross-validation-risk-and-model-comparison`. Their current draft pages were
inspected for their declared interfaces. No result from those pages is a
logical premise in this pair, and no proof-audit claim is made for them.

## Source record

The coverage record contains five full-text sources: Owen's book,
Niederreiter's SIAM monograph, Einkemmer's complete term paper, Owen–Rudolf's
paper on scrambled-net integration, and Aistleitner–Dick's paper on
Hardy–Krause variation and signed measures. `source-fetch-check --stamp`
returned 5/5 verified, with two newly stamped sources. The QMC books state
Koksma–Hlawka without a complete proof; Einkemmer's distributional-delta sketch
does not justify the arbitrary finite-variation case. All active proofs are
local. Owen–Rudolf's integrability proof uses a Jordan decomposition with a
separate theorem citation; the new lower-anchor prefix-variation proof does
not import that theorem. Leonov's cited 1998 translation was inspected only
for attribution; its longer Theorem 3 proof is neither imported nor cited, and
no full-reading or fetch-stamp claim is made for it. A Caflisch PDF cache miss and the successful
alternative full-text search remain recorded in the source-search history; no
reading or source citation for Caflisch is claimed.

## Proof and example scope

The star-box convention is half-open and the Hardy–Krause anchor is the upper
corner throughout. The local Koksma–Hlawka proof first proves a finite-grid
summation-by-parts bound and then takes lower-corner Riemann-sum limits.
Uniform-distribution convergence is stated only for bounded
Riemann-integrable functions. No construction-specific discrepancy rate or
generic deterministic error bar is claimed. The examples verify the smooth
finite-variation case, the integrable inverse-CDF singularity with infinite
variation, a poor joint projection with uniform one-coordinate projections,
and the power-of-base cardinality restriction for digital nets.

## Scoped checks and readiness

Final scoped results are recorded below after the assigned manifest,
item dependency, contract, precheck, renderer, source-fetch, and proof-layout
checks. The Step-1 records are escalated for owner reconciliation of the
required BCS-54 page context; an authoring record is not independent
mathematical acceptance.

- Local dependency validation checked all 14 manifest items against their
  carriers and computed levels 0–4 with no mismatches. The full-run
  `item-dependency-levels.mjs check` reported 52 errors in other current
  manifests (42 empty scaffold inventories and 10 stale dependency-level
  labels); none names a batch-59 item. Those pairs are outside this assignment.
- Scoped `depcheck` passed: 14 selected items, both selected pages, 643-item
  dependency closure, 118 prerequisite pages, and zero errors or warnings.
- `precheck.mts` passed all 10 proof-bearing items (4 definitions/algorithm
  carriers are not applicable); no repairs remain.
- `proof-layout.mjs` passed 14 changed items, 34 numbered steps, 0 defects.
- `rendercheck.mjs` passed the 14 items and 2 A/B pages with 0 errors or
  warnings.
- Scoped `content-policy.mjs` passed all 14 items with 0 errors or warnings.
- Strict proof-contract validation passed all 14 manifest entries with 0 errors
  or warnings. Batch-only `proof-contract-coverage` checked all 14 items and
  covered all 10 proof-bearing items. The ordinary full-run coverage command
  could not initialize because another run page,
  `misspecified-posterior-consistency`, has an empty inventory.
- Source-fetch check confirmed 5/5 full-text sources fetched and resolved; the
  earlier stamp pass newly stamped 2 of the 5. No source is documented as
  dropped.
- The run-wide dependency-level check and run-wide contract-coverage startup
  remain blocked by other in-flight empty inventories and unrelated stale
  labels; no other pair's files were edited.
- All 14 item readiness records are `escalated`, not `ready`, because the
  required BCS-54 page is partial: its actual definition was inspected, but four
  planned theorem/corollary carriers are absent. The four page prerequisites
  declared by BCS-54 were interface-inspected but not proof-audited here; none
  is a premise of a QMC proof. Exact planned hypotheses and owner actions are
  recorded in the cross-batch dependency input above.
- The live Step-1 command could not load the run because the unrelated
  `bayesian-computational-statistics-62-batch-26.coverage.json` has invalid JSON
  (`Bad escaped character`, line 173, column 84); that file was left untouched.
  I invoked the same `step1-decisions.mjs record` command in a temporary scope
  containing the exact run manifests, the live item tree, and the current
  `plan-spec.json`, using a valid empty coverage object only for batch 26 so
  `loadStep3` could initialize. Coverage files are not item-hash inputs. Only
  the 14 new batch-59 records were copied back, each with `owner: false`; no
  existing record or escalation was overwritten.
