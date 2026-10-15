# Batch 54 authoring notes

Run: bayesian-computational-statistics-62  
Pair: finite-group-permutation-inference / finite-group-permutation-inference-examples  
Batch dependency level: **0**; declared prerequisite batches: **none**.

## Inventory and item levels

The inventory was set in bayesian-computational-statistics-62-batch-54.pages.json
before carrier authoring. All eight carriers are on their assigned A or B page.
The local dependency graph is acyclic and has these computed item levels:

| Item | Home | Level | In-run supplier(s) |
|---|---|---:|---|
| def-measurable-finite-group-permutation-setup | A | 0 | none |
| def-measurable-finite-group-orbit-pvalues | A | 1 | setup |
| alg-random-permutation-monte-carlo-pvalue | A | 2 | setup, orbit p-values |
| thm-finite-group-permutation-validity | A | 2 | setup, orbit p-values |
| thm-random-permutation-monte-carlo-validity | A | 3 | setup, orbit p-values, algorithm, full-orbit theorem |
| ex-exchangeable-two-sample-permutation-test | B | 3 | setup, orbit p-values, full-orbit theorem |
| ex-unequal-assignment-sharp-null-randomization | B | 3 | setup, orbit p-values, full-orbit theorem |
| cex-uncorrected-random-permutation-pvalue-can-be-zero | B | 4 | setup, orbit p-values, algorithm, Monte Carlo theorem |

All other direct dependencies are published external suppliers. The cross-batch
input records all 40 external item edges and both external page requirements;
same-batch edges remain in the manifest. I compared the input against the
current external edges: all 42 are present and marked `verified`.

## Plan comparison and interface findings

The track plan and plan-spec.json agree on both page IDs, titles, order,
category, companion pages, and the A-page page-level requires entries.
The plan-spec label `BCS-51` is the track pair number; dispatch batch 54 is its
scheduling owner, so these numbers do not conflict.
The track design additionally names MSF-02 and MSF-08 item interfaces
(def-randomized-procedure-as-a-markov-kernel, def-randomized-test,
def-test-size-and-power, and thm-p-value-superuniformity) whose home pages
do not appear in those page-level requires entries. I kept the generated
page requirements aligned with plan-spec.json and declared the exact
published item dependencies directly in the theorem manifest and carrier,
following the design's stronger item-level obligations.

The planned MSF-11 finite-group supplier is explicitly restricted to finite
data spaces. Its actual Definition and theorem were read; the new A-page
setup and complete rank proof establish the planned measurable-data-space
extension locally. No general measurable-space or non-invariance conclusion
is imported from the finite-space supplier. The SME-12 interface is used only
in the sharp-null assignment example, as the design directs. Its actual
assignment model, Fisher-sharp definition, weighted rank lemma, and validity
proof were inspected.

No supplier required by this pair is absent or unresolved. No axiom of choice
is used: the group and simulation-index selections are finite, and the
tie-randomizer is a stated independent uniform auxiliary variable.

## Source history and harvested results

Both independent A-page treatments were read over the stated ranges:

- Hemerik–Goeman, [full arXiv PDF](https://arxiv.org/pdf/1411.7565), §§2.1–2.2
  and 3.1–3.4, including the complete proofs of Theorems 1–2 and Proposition
  3. The full-group boundary randomization in Equation (3) is included;
  Proposition 3's separate Monte Carlo threshold-tie procedure is out-of-scope.
  Proposition 1's exactness grid is stated with its proof referred to as
  analogous, and is out-of-scope. Proposition 2's class-structure exactness
  proof and the infinite-group finite-subset result were read as context and
  recorded out-of-scope; their extra assumptions are not needed for this
  pair's superuniformity claims.
  The invariant-null condition, full-orbit rank proof, identity-adjoined
  Monte Carlo argument, tie randomization, and zero-possible uncorrected
  estimate are included in the local carriers or linked to the existing
  published non-invariance counterexample.
- Katsevich, [full STAT 9610 lecture notes](https://katsevich-teaching.github.io/stat-9610-fall-2022/assets/lecture-notes.pdf),
  §3.2.4.2, printed pp. 54–56 / PDF pp. 57–59, including equations
  (3.12)–(3.20). The section derives the IID-pairs exchangeability argument
  for the two-sample example and states the identity-corrected Monte Carlo
  formula, finite-sample bound, and warning against omitting the correction.
  For that bound it says only “Similar logic as above”; the complete
  finite-group recentering proof is supplied locally in
  `thm-random-permutation-monte-carlo-validity`, not attributed to these
  notes. Regression-specific discussion outside those claims is out-of-scope.

The source body and the complete relevant reasoning were inspected in both
documents. `source-fetch-check --stamp` verified their existing full-text
stamps (2/2, 0 newly stamped); the recorded source history was preserved.
There were no retrieval failures, recovery retries, or source-resolution
escalations.

## Scoped checks and remaining owner work

The final scoped results are:

| Check | Result |
|---|---|
| Precheck | Pass, 5 proof-bearing items, 0 failures |
| Rendercheck | Pass, 10 scoped item/page files |
| Proof layout | Pass, 8 items, 20 steps, 0 defects |
| Strict proof contracts | Pass, 8/8 items |
| Citation fidelity | 40 citations; no missing quotes or widening candidates |
| Coverage checklist | Pass, 1 A page, 20 harvested results, 0 errors or warnings |
| Source fetch | Pass, 2/2 existing full-text stamps verified with `--stamp`; no retries |
| Focused depcheck | Pass, 8 items and 2 pages; 0 errors or warnings |
| Dependency consistency | Pass, body/manifest deps and labels match for 8 carriers; 42/42 external cross-batch edges verified; levels 0–4, no cycles |
| Author check | Pass; precheck, rendercheck, content policy, and strict contracts all passed |
| Step-1 decisions | All 8 assigned items have current hash-bound `ready` records; none is in the run-wide outstanding-work list |

The isolated-manifest item-level check passed for the assigned inventory:
8 items across 2 pages, levels 0–4, with no cycles. An earlier repo-root
invocation of the run-wide item-level CLI was broader than intended; it
reported empty inventories in other unfinished pairs and two mismatches outside batch 54:
`thm-bootstrap-fails-at-nonsmooth-boundary-and-degenerate-mean-functionals`
(stored 2, computed 4) and `ex-nonsmooth-boundary-bootstrap-failure` (stored
3, computed 5). No batch-54 item was among its errors.

The shared run-level dependency input supplied to this dispatch has digest
`4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d`.
`batch-dependency-levels.mjs check` now reports that artifact as stale. A
read-only recomputation from the current 62-batch graph succeeds with digest
`27fe067e43a778d828e381e5d0b73ff36b59abdad3ebeab8235c07239bc226b0` and
confirms batch 54 remains at level 0 with `requires: []`. The shared run-level
artifact was left untouched for owner reconciliation.

The run-wide Step-1 decision check remains open because other pairs have
missing readiness records and empty inventories; the eight assigned items
have no open readiness findings. These records are authoring readiness only,
not independent mathematical approval.

No published items, shared plans, engine state, owner verdicts, or other
pairs' files were edited.
