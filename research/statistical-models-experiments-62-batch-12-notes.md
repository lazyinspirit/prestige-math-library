# Batch 12 authoring notes — Assignment randomization and sharp-null tests

## Plan and scaffold comparison

The SME-12 design at heading line 170 and the assigned `plan-spec.json` record
agree on the A/B page IDs, order 1940/1941, category, title, and all five page
requirements. No plan/design conflict was found. The owner authoring direction
controls over the older source-audit labels.

The current batch-12 manifest records seven items and their logical dependencies
before the item carriers. Item levels use zero without an in-run supplier and
one plus the maximum supplier level otherwise:

| Item | Home | Level | In-run suppliers |
|---|---|---:|---|
| `lem-finite-weighted-upper-tail-pvalues-and-randomized-ties` | A | 0 | none |
| `def-finite-randomized-treatment-assignment-model` | A | 1 | `def-scientific-statistical-model-contract` |
| `def-fisher-sharp-null-and-predeclared-test-orderings` | A | 2 | assignment model |
| `def-finite-population-average-treatment-effect-and-weak-null` | A | 3 | assignment model, sharp-null/order definition |
| `thm-fisher-sharp-null-randomization-pvalues-are-valid` | A | 4 | assignment model, sharp-null/order definition, weighted-tail lemma, weak-null definition |
| `cex-zero-average-treatment-effect-does-not-imply-fisher-sharp-null` | B | 4 | assignment model, sharp-null/order definition, weak-null definition |
| `ex-unequal-weighted-two-sided-randomization-test-with-ties` | B | 5 | assignment model, sharp-null/order definition, theorem |

A read-only dependency calculation over current batch-1 and batch-12 item
inventories passes: levels are $0,1,2,3,4,4,5$ for the batch-12 items, and
the in-run graph is acyclic.

The batch-level interface remains level 1 with prerequisite batch 1. The
batch-1 contract page is now present as draft authoring content; the other
four required A pages are current published prerequisite context.

## Current supplier inspection

The current published item bodies were inspected rather than relying on the
older pair-audit status labels:

- `def-statistical-experiment` supplies an observation measurable space and a
  family of probability laws, while explicitly making no common probability
  space claim for all parameters.
- `def-scientific-statistical-model-contract` is now present on the batch-1 A
  page; its current Step-1 record says `ready` (2026-10-14T17:01:42.880Z).
  Its Definition requires unit/index roles, quantity status, target,
  observation mechanism, support, conditioning, and classified adequacy
  assumptions. The assignment model states these fields explicitly: $i$ is
  the actual randomization unit, the schedule is fixed, the assignment is
  random, the record is $(Z,Y_θ(Z))$, the support is given by positive
  assignment weights, inference averages over $p$, and unassigned outcomes
  remain latent. The supplier is draft construction context; its readiness
  record is not independent acceptance.
- `def-statistic-and-estimator` defines a statistic as a measurable map to a
  named target measurable space.
- `def-p-value` defines validity by superuniformity under every law in the
  null family. `thm-p-value-superuniformity` converts an already valid
  p-value into a level test; it is not used as a proof of the p-value's own
  validity.
- `def-finite-population-average-treatment-effect-and-weak-null` specifies
  the weak zero-average-effect null in the no-interference binary submodel,
  so the sharp/weak distinction and its counterexample use an explicit
  target and schedule convention.
- `def-finite-probability-space-and-event` supplies nonnegative weights
  summing to one and event probabilities as finite sums. The proof works
  directly with these weights; it does not use expectation linearity or an
  indicator-expectation theorem.
- `def-random-element-and-real-random-variable`,
  `def-law-or-distribution-of-a-random-element`, and the complete proof of
  `lem-law-of-a-random-element-is-a-probability-measure` justify the
  pushforward assignment-data law in the model definition.
- `def-orbit-rank-p-value` is deliberately not used: it is a finite-group
  interface with uniform group-element counts and multiplicity. It does not
  supply arbitrary known assignment weights. The local finite weighted-tail
  lemma covers unequal and zero assignment weights directly.

No axiom of choice is used. The probability argument orders only finitely
many real score levels; every outcome schedule, assignment law, statistic,
and independent tie randomizer used in the statements is specified explicitly.

## Source reading and disposition

The A-page source coverage records URLs, locators, item support, and an
`included` or `inline` disposition for each inspected result. The required
`source-fetch-check --stamp` completed with **3/3 sources fetch-verified**.

- Oehlert's author-hosted 679-page book was downloaded and Chapter 13 was
  extracted and inspected in full (PDF pp. 335–376, printed pp. 315–356).
  Sections 13.1–13.2 establish that the assignment restrictions are part of
  the design; §13.2.3, printed p. 321, calls classical F tests approximations
  to randomization tests and notes that blocks themselves were not randomized.
  This is a model-calibration warning, not the weighted sharp-null proof.
- Holmes and Huber's author-hosted Chapter 13 was fetched in full. The
  inspected §13.2 and §13.4 passages describe assignment randomization as a
  design choice and discuss nuisance averaging in the large-sample regime;
  they do not establish the finite-sample result claimed here.
- Balakrishnan's complete 10-page Lecture 28 was fetched. The relevant
  §§28.2–28.5 passages (PDF pp. 1–5) define unit potential outcomes and the
  finite-population average effect, explain sharp-null imputation, and compute
  an inclusive permutation p-value for complete equal-probability
  randomization. The lecture leaves validity as “easy to verify”; the local
  proof supplies the complete argument and extends it to arbitrary finite
  weights and randomized ties.

An initial attempt to retrieve a Conservancy-hosted duplicate of the Oehlert
PDF returned HTTP 403. A search found the author's official full-text URL,
which was successfully downloaded and inspected; the source used in the
items and coverage is that official URL. No source remains unresolved or
dropped.

## Cross-pair reconciliation

The assigned interface `scientific-statistical-model-contracts` and its item
`def-scientific-statistical-model-contract` were initially absent during the
scaffold inspection. The current page and exact item body are now present and
were checked before readiness records were finalized. The item is added to
`def-finite-randomized-treatment-assignment-model`'s `deps`; it is the only
in-run supplier of this pair. The model definition now matches its units,
quantity status, observation-map, support, conditioning, target, and adequacy
clauses. The four other required pages are current published prerequisite
context. No cross-pair supplier remains unresolved.

## Inventory and page capacity

The A page has five items and the B page has two. Each is below the 100-item
page cap. The B items depend only on earlier A-page suppliers; neither is a
supplier to another page.

## Run-level check limitations

The scoped batch-1/batch-12 item-level recalculation passes with levels
0,1,2,3,4,4,5 and no cycle. A final
`node tools/batch-dependency-levels.mjs check --run
statistical-models-experiments-62` now parses the run and reports a stale
shared input digest, as expected after authoring the updated batch-12
manifest. The page requirements still give batch 12 level 1 with prerequisite
batch 1. Read-only recomputation gives current input hash
`f44a63775dd68759c41c2fbc1304c8cc5f627d9d0d84ffaf1aa0227b5b330879` and
`{"batch":"12","dependency_level":1,"requires":["1"]}`. This derived
run-level artifact is owner/engine state; it was not rewritten from the batch
worker.

An earlier read-only attempt during this authoring turn stopped first on
malformed YAML in Batch 60 source-title metadata. The latest check proceeds
past that parse point and now reports only the stale digest; no Batch 60
carrier was edited here.

The global `proof-contract-coverage` command reports an empty current frontier
page, `stratified-sampling-and-allocation`, before it can report batch-12
coverage. That page is outside this assignment. The strict batch-12
`proof-contract` check passes for all seven local items, with each proof step
mapped and each cited supplier excerpt recorded.

## Scoped checks and Step-1 readiness

- `manifest-deps` passes all 7 items; `content-policy` passes 7 items with
  0 errors and 0 warnings.
- Strict `proof-contract` passes 7/7 items with 0 errors and 0 warnings.
  `proof-layout` passes 7 items and 15 numbered steps with 0 defects.
- Precheck passes all 4 proof-bearing items. Rendercheck passes all 7 items
  and both pages: 9 files, 0 errors. Focused `depcheck` and `fwdcheck` pass
  with their dependency closures; `extcheck` reports 0 forbidden records.
- `source-fetch-check --stamp` verifies all 3 full texts; the source coverage
  lists the actual item support and dispositions.
- All seven per-item Step-1 records are current and `ready`; their examined
  direct dependencies and evidence are hash-bound, and none uses an owner
  flag. These are construction-readiness records, not independent approval.
- Full-run `batch-dependency-levels` remains an owner/engine refresh because
  its input digest is stale after the authored manifest changed. Full-run
  `proof-contract-coverage` remains blocked by the other empty page named
  above; neither global blocker changes the passing scoped item checks.
