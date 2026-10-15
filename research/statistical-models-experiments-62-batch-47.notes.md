# Batch 47 — Kriging authoring and evidence notes

Run: `statistical-models-experiments-62`  
Assigned dependency level: 4; prerequisite batches: 43 and 45  
Scheduling input: `7678825e1f7f6ce11798fe342466b92d8abf015b55c31f19d48984f17f5437c6`

## Plan and design reconciliation

The controlling plan is `research/plan-statistical-models-experiments-track.md`
§SME-47, L283. The narrative design, `research/plan-spec.json`, and the
assignment agree on page IDs, A/B ordering, category, titles, companion, and
all six declared A-page requirements. The plan-spec's pre-authoring empty item
array is not an item-inventory conflict. The six declared page requirements
remain unchanged, including `central-limit-theorems`; no CLT conclusion is
claimed.

The narrative design names item-level suppliers from batches 43 and 45, the
published affine L2 projection theorem, and the Axiom of Choice for the
Gaussian branch. It mentions the decision-theoretic MSF-03 item only if a
general prediction-risk claim is made. These items define mean-square error
as an expected squared error and make no separate decision-risk or coverage
claim, so there is no such item edge. The Gaussian conditional-mean theorem
also uses published conditional-expectation definitions and results. Their
exact direct item edges are recorded in item frontmatter and
`statistical-models-experiments-62-batch-47.cross-batch-dependencies.json`;
the plan's six page requirements are preserved. This is a metadata
reconciliation, not an unresolved mathematical prerequisite.

The source's finite-site rank inference in Lemma 3.28 is not used: orthogonality
of trend functions does not guarantee full rank after restriction to finitely
many sites. The local universal-kriging theorem states and proves its result
under explicit full-column-rank finite design. Plug-in estimates, intrinsic
fields without finite level moments, and alpha-stable prediction are outside
the assigned claims; their source dispositions include reasons.

## Item inventory and dependency levels

The item inventory, exact dependency arrays, and levels are recorded in
`statistical-models-experiments-62-batch-47.pages.json`. The pair has three A
items and three B examples, all below the 100-item page cap. Levels use one
plus the maximum level of in-run suppliers; published suppliers add no
in-run level.

| Level | Item | In-run supplier(s) |
|---:|---|---|
| 3 | `def-simple-ordinary-and-universal-kriging` | `def-random-field-stationarity-covariance-and-variogram`; `thm-order-two-field-variogram-is-conditionally-negative-definite` (batch 45) |
| 4 | `thm-kriging-systems-and-l2-optimality` | `def-simple-ordinary-and-universal-kriging` |
| 5 | `thm-gaussian-simple-kriging-equals-conditional-mean` | `def-simple-ordinary-and-universal-kriging`; `thm-kriging-systems-and-l2-optimality`; `lem-uncorrelated-jointly-gaussian-blocks-are-independent` (batch 43) |
| 4 | `ex-singular-covariance-simple-kriging` | `def-simple-ordinary-and-universal-kriging` |
| 4 | `ex-rank-deficient-universal-kriging-design` | `def-simple-ordinary-and-universal-kriging` |
| 5 | `ex-ordinary-kriging-larger-error-than-simple` | `def-simple-ordinary-and-universal-kriging`; `thm-kriging-systems-and-l2-optimality` |

The current batch-43 and batch-45 supplier carriers and complete relevant
proofs were read. In particular, the batch-45 field definition and CND theorem,
and the batch-43 Gaussian block-independence lemma, state the hypotheses and
conventions used here. Current supplier records show authoring readiness; this
does not constitute independent approval or acceptance. No direct supplier
body remains unavailable. The Gaussian branch separately declares AC and
identifies its uses through the Gaussian-law, Gaussian-independence, and
conditional-expectation suppliers; the covariance and finite examples are
choice-free.

## Source reading and retrieval

Two complete treatments were inspected for the A page:

- Evgeny Spodarev, *Spatial Statistics: Lecture Notes* (2024), complete
  focused Sections 3.1–3.2, PDF pp. 26–48. The reading included the conditional
  expectation argument, simple-kriging Theorems 3.15–3.16, ordinary-kriging
  Theorem 3.22 and system (3.22), universal constraints (3.28) and system
  (3.29), Lemma 3.28, and plug-in and variogram remarks.
  <https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf>
- Dennis Sun, *Stats 253 Lecture 5: Prediction and Kriging* (Stanford), the
  complete 21-page PDF. The correlated-error BLUP derivation on pp. 4–10,
  model distinctions on p. 17, and variogram discussion on p. 18 were read;
  the remaining pages were inspected for scope.
  <https://web.stanford.edu/class/stats253/lectures/lect5.pdf>

The coverage file records 22 harvested results, item-level dispositions,
locators, and fetch stamps. Retrieval succeeded for both sources; there were
no recovery failures, drops, or owner escalations, so no
`source_resolution` record was required. The coverage checklist reports one
advisory low-yield warning (7/22 results marked `included`); other results
are explicitly inline, already published, or out of scope with reasons. The
warning does not identify an omitted logical claim.

## Scoped checks and readiness

Final scoped results after the last item edit:

- Precheck: all five proof-bearing items pass; the definition is not
  applicable.
- `proof-layout.mjs`: 6 items, 17 steps, 0 defects.
- Strict proof contracts: 6/6 items, 0 errors and 0 warnings.
- Rendercheck: 6 item carriers and both A/B pages pass.
- Content policy: 6 items, 0 errors and 0 warnings.
- Manifest dependency normalization: 6 items, no errors or changes required.
- Focused dependency check: all 6 items and 2 selected pages pass; 1,573 item
  and 314 page prerequisite-cycle checks, 0 errors or warnings.
- Run-wide item dependency-level check: 510 items across 124 pages, maximum
  level 9; batch 47 labels agree with the recomputed graph.
- Cross-batch consistency: all 27 external item edges and all 6 declared page
  requirements match the dependency input.
- Finite smoke check: the singular-covariance example's symmetric
  Rademacher covariance check passes. An initial invocation supplied the pages
  manifest instead of a version-1 proof contract and returned `contract-shape`;
  the corrected scoped invocation used the proof-contract file and passed.
- Source fetch check: both page-source records are stamped and verified.
- Coverage checklist: one advisory as described above, no errors.

Six per-item Step-1 readiness records are recorded with exact direct
dependencies. They document complete authoring, placement, prerequisite
inspection, contracts, and scoped checks; they are not proof approval or
independent supplier acceptance. No escalation is overwritten and no owner
flag is used.

## Run handoff status

The disk-recomputed status reports the run still `running` at `1-scaffold`:
58/62 batches are covered, with 41, 42, 46, and 47 still listed as missing;
native artifacts are listed missing for 42 and 46. Batch 47's output artifact
is no longer listed as missing, although the batch remains among the four
uncovered IDs. The existing owner blocker remains: repair rejected items,
refresh certifications invalidated by those repairs, and retry the gate; see
`research/statistical-models-experiments-62-step1-blockers.json`. Batch 47
does not alter shared plans, published content, verdicts, the blocker file,
or autopilot state. Its readiness records are authoring evidence only.
