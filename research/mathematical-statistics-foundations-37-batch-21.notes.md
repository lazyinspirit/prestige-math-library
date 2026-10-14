# Batch 21 — Delta Method and Asymptotic Normality

Run `mathematical-statistics-foundations-37`, role beta, Step 1 scaffold,
batch 21. Owned pair: `delta-method-and-asymptotic-normality` (A, order 1884)
and `delta-method-and-asymptotic-normality-examples` (B, order 1885).
The output manifest, coverage record, proof contracts, cross-batch input and
this note are the batch-21 evidence files. Seven draft items are authored in
`items/`; both draft pages are under `library/mathematical-statistics/`.

## Instructions and design

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the
batch task, the owner-authoring direction, the current plans, the run's batch
dependency-level evidence, and the MSF-03 foundation dossier, source manifest
and pair audit. The owner direction makes
`research/plan-mathematical-statistics-track.md` the controlling plan. Its
MSF-14 row at line 102 supplies the full mathematical scope, prerequisites,
proof route and source anchors. The MSF-14 entry at line 58 of
`research/plan-statistical-models-experiments-track.md` is a downstream
Category-2 interface inventory, not an alternative authoring design; it names
the same two carriers. The controlling plan therefore resolves any design
conflict.

The two `research/plan-spec.json` rows match page IDs, titles, companion links,
orders 1884/1885 and the controlling plan's `requires` lists. Their empty
`items` arrays are the preauthoring scaffold, not an item-inventory conflict.
No plan-spec conflict was found. The A page keeps all five specified page
prerequisites. The B page depends on A and remains a leaf.

The batch dependency evidence sets batch 21 at level 5, with prerequisite
batches 13 and 20. The scheduling input recorded for this dispatch is
`dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c`.
Item levels below were recomputed through the transitive closure of the seven
assigned items and their in-run suppliers.

## Inventory and dependency levels

| Item | Page | Level | Direct item dependencies |
|---|---|---:|---|
| `thm-first-and-second-order-delta-method-for-random-vectors` | A | 3 | `def-op-and-little-op-stochastic-bounds`; `def-convergence-in-distribution-of-random-elements`; `def-real-frechet-derivative-on-real-and-complex-matrix-spaces`; `thm-vector-stochastic-order-calculus`; `thm-vector-slutsky` |
| `thm-z-estimator-asymptotic-linearity-and-normality` | A | 5 | `def-z-estimator`; `def-estimator-sequence-in-iid-experiments`; `def-op-and-little-op-stochastic-bounds`; `def-convergence-in-distribution-of-random-elements`; `def-identically-distributed-and-iid-random-variables`; `lem-measurable-functions-preserve-independence`; `def-real-frechet-derivative-on-real-and-complex-matrix-spaces`; `def-axiom-of-choice`; `def-multivariate-normal-law`; `thm-vector-stochastic-order-calculus`; `thm-vector-slutsky`; `thm-multivariate-iid-central-limit-theorem` |
| `ex-log-transformation-delta-method` | B | 4 | `thm-first-and-second-order-delta-method-for-random-vectors` |
| `ex-ratio-delta-method` | B | 4 | `thm-first-and-second-order-delta-method-for-random-vectors` |
| `ex-second-order-delta-method-quadratic` | B | 4 | `thm-first-and-second-order-delta-method-for-random-vectors` |
| `ex-sample-variance-delta-method` | B | 4 | `thm-first-and-second-order-delta-method-for-random-vectors`; `def-identically-distributed-and-iid-random-variables`; `lem-measurable-functions-preserve-independence`; `thm-multivariate-iid-central-limit-theorem`; `def-multivariate-normal-law`; `def-moments-variance-and-covariance`; `def-axiom-of-choice` |
| `cex-continuity-alone-does-not-give-delta-method` | B | 4 | `thm-first-and-second-order-delta-method-for-random-vectors` |

The batch manifest and item frontmatter agree. The B-page example order matches
the manifest. The direct dependencies on the in-run batches 13 and 20 are all
recorded and verified in
`mathematical-statistics-foundations-37-batch-21.cross-batch-dependencies.json`.
The proof contracts quote the actual supplier text and enumerate the exact
proof-step uses. Current bodies for the stochastic-order definitions and
theorems, vector Slutsky theorem, Z-estimator definition, and estimator
sequence definition were inspected. The Z-estimator theorem uses
`def-z-estimator` and the measurable estimator convention, not the supplier's
consistency theorem or a uniform-law conclusion. It states consistency, the
stronger `sqrt(n)||P_n psi_{hat theta_n}|| = o_P(1)` root condition, and direct
local stochastic equicontinuity as hypotheses, and proves the plug-in score
replacement from that process condition.

Existing weak-convergence, real Frechet-derivative, iid, measurable-map,
multivariate-normal, multivariate-CLT, moment/covariance and choice suppliers
were inspected for their relevant definitions, hypotheses and conventions.
No missing supplier or unresolved mathematical prerequisite remains in this
pair. The inner-product page remains a declared page prerequisite; the local
proofs use Euclidean/Frobenius norm conventions and do not import an
orthogonality theorem.

## Proofs, source review and axiom branches

The A page proves the finite-dimensional first-order delta theorem and its
zero-gradient second-order Peano-expansion branch, followed by the iid
Z-estimator asymptotic linear representation and normal limit. The delta
proof is choice-free and uses tightness, stochastic-order bounds, local
remainder estimates and vector Slutsky. Its proof contract follows canonical
phase steps `1.1, 2.1, 3.1, 3.2, 4.1, 5.1`.

The design lists $L^2(P)$ continuity alongside a local Donsker/equicontinuity
route. The theorem assumes the local centered-process equicontinuity conclusion
directly in the exact form used by its proof; under that premise, a separate
$L^2(P)$ continuity condition is unnecessary. The theorem does not claim that
this process condition follows from consistency or pointwise measurability.
It states the measurable-process assumptions used by its proof, including
measurability of displayed suprema. It derives the score replacement from
local stochastic equicontinuity, applies the multivariate iid CLT, absorbs the
relative derivative remainder using nonsingularity, then uses vector Slutsky.
AC is explicit and is used through the library's multivariate
iid CLT and multivariate-normal law. The sample-variance example also states
AC because it uses that multivariate CLT. The remaining examples and the
first-/second-order delta theorem are choice-free.

The B page retains the three planned log, ratio and nondifferentiability
examples. It also includes a finite zero-gradient example for the new
second-order theorem branch and the source's sample-variance example, with its
nonzero-mean formula corrected. Both additions stay within the pair's
finite-dimensional delta-method scope and declare every added supplier.

Full relevant source reasoning was read:

- Peter Bartlett, *Theoretical Statistics*, Stat 210B Lecture 16,
  [PDF](https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/16notes.pdf),
  pp. 9–13: first-order delta proof and scalar Z-estimator normality route.
- John Duchi, *Theory of Statistics*, Stats 300B Lecture 2 (Winter 2018
  scribe note),
  [PDF](https://web.stanford.edu/class/stats300b/ScribeNotes/2021/lecture-02.pdf),
  complete four-page note, especially Theorems 3–4 and proofs, pp. 2–3, and
  the examples through p. 4. The variance calculation was independently
  checked because the note warns of possible errors.
- Aad W. van der Vaart, *Semiparametric Statistics*, Lecture 6 §6.5,
  Theorem 6.19 and proof, pp. 73–74,
  [full lecture notes](https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf).

The Stanford sample-variance example prints a variance formula omitting
nonzero-mean terms. The covariance matrix and derivative in that same example
give the corrected variance
`mu4 - 4 mu1 mu3 + 8 mu1^2 mu2 - 4 mu1^4 - mu2^2`, equal to
`E[(X-mu1)^4] - sigma^4`. The local B item proves this calculation and checks
it at `P(X=0)=P(X=2)=1/2`: the corrected value is zero, whereas the printed
`mu4-mu2^2` gives four. Coverage marks the source result included with this
correction. The source's Bernoulli KL example is recorded out-of-scope because
it would introduce a separate likelihood-divergence prerequisite; no source
result was dropped to avoid proof work. No retrieval failed, so no retry or
source-resolution record was needed.

## Final scoped checks

- `node tools/tsx-run.mjs tools/precheck.mts --json` on the seven assigned
  items: **PASS**, all 7 checked, 0 requiring repair.
- `node tools/proof-layout.mjs` on the seven changed items: **PASS**, 7 items,
  24 steps, 0 defects.
- `node tools/proof-contract.mjs research/mathematical-statistics-foundations-37-batch-21.proof-contracts.json --strict --json`:
  **PASS**, all 7 contracts checked, 0 errors and 0 warnings.
- `node tools/rendercheck.mjs` on the seven items and two pages: **PASS**, 9
  files; YAML frontmatter and KaTeX math parse, with no prohibited delimiter
  or link-in-math defects.
- `node tools/content-policy.mjs research/mathematical-statistics-foundations-37-batch-21.pages.json`:
  **PASS**, 7 scoped items, 0 errors and 0 warnings.
- `node tools/manifest-deps.mjs research/mathematical-statistics-foundations-37-batch-21.pages.json`:
  **PASS**, 7 items, 0 normalizations and 0 errors.
- `node tools/coverage-checklist.mjs research/mathematical-statistics-foundations-37-batch-21.coverage.json --require-destination`:
  **PASS**, 2 pages, 14 harvested results, 0 errors and 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/mathematical-statistics-foundations-37-batch-21.coverage.json --stamp --timeout-sec 20`:
  **PASS**, all 5 source entries fetch-verified; no new stamp was needed.
- Focused `dependencyLevels` check on the transitive closure of the assigned
  items: **PASS**, 15 items over 5 pages, 0 errors. Assigned levels match:
  delta theorem 3, Z-estimator theorem 5, and all five B items 4.
- Run-wide `node tools/item-dependency-levels.mjs check --run mathematical-statistics-foundations-37`:
  **BLOCKED outside this pair** by empty inventories for the sparse-high-
  dimensional, semiparametric-efficiency and robust-influence pages and
  numerous dependency-level mismatches in other batches. The output named no
  batch-21 item; the focused closure check above verifies this pair. The shared
  manifests and levels were left to their owners.
- `node tools/batch-dependency-levels.mjs check --run mathematical-statistics-foundations-37`:
  **BLOCKED before recomputation** by malformed YAML in two unassigned items:
  the unquoted colon in a reference title at
  `items/lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss.md:25`
  and `items/thm-brunn-minkowski-for-compact-convex-sets.md:30`. These files
  belong to other pairs and were not changed.

All seven final items have current `ready` Step-1 records naming their declared
dependencies and examined evidence. `step1-decisions.mjs record` was invoked
once per item; a focused current-hash check reports **7/7 current ready**.
These scaffold records are not independent approval or publication verdicts.
This batch did not edit published content, shared plans, engine state, another
pair's file or review verdicts.
