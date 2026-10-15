# Batch 46 — authoring and evidence notes

## Inventory, dependencies, and levels

The assigned pair is `spatial-field-summary-estimators` /
`spatial-field-summary-estimators-examples`. The A page has eleven items; the B
page has two. After adding the local LCA prerequisite and importing angular
Fourier orthogonality, the item levels are:

| Level | Items |
|---:|---|
| 0 | `def-van-hove-window-sequence`; `lem-integers-lattice-is-discrete-lca-group` |
| 1 | `lem-dual-of-zd-is-torus`; `ex-boundary-dominated-windows-are-not-van-hove` |
| 2 | `def-spatial-window-average`; `def-lattice-covariance-and-variogram-estimators`; `lem-transport-lattice-spectral-measure-to-torus` |
| 3 | `thm-van-hove-window-average-l2-consistency`; `thm-lattice-covariance-estimator-asymptotically-unbiased`; `def-regular-grid-periodogram-and-smoother`; `cex-lattice-sample-covariance-not-positive-definite` |
| 4 | `thm-regular-grid-periodogram-fejer-expectation` |
| 5 | `thm-regular-grid-smoothed-periodogram-bias-vanishes` |

The in-run item graph is acyclic. `node tools/item-dependency-levels.mjs check
--run statistical-models-experiments-62` currently checks 511 items over 124
pages, maximum level 9. The batch scheduling level remains 4 with prerequisite
batch 45; item levels include the within-pair proof chain, so the final local
item reaches level 5. The scheduling input supplied for this dispatch is
`27475f311f387a450b71d304fdeadb4cc19f50bb77fd57e0de7eea236ea68934`.

## Plan and design comparison

The current SME-46 design and plan-spec agree on the page IDs, order, titles,
category, and estimator scope. The design names SME-45 and the published
covariance and Bochner interfaces; plan-spec additionally requires the
probability-spaces and product-measures/Fubini pages. Those extra requirements
are retained as page dependencies and item dependencies. The plan-spec item
arrays were empty before authoring; only this batch manifest was populated.

The A page retains uniform Van Hove averages, the explicit covariance
integrability hypothesis, pair-count lattice covariance and increment
semivariogram estimators, and the periodogram/smoothing claims with their
hypotheses. It asserts no variance consistency for other estimators, weak
consistency, or CLT. The B page gives the boundary-ratio and non-positive-
semidefinite finite-data counterexamples.

## Supplier review and conventions

The current batch-45 page and actual supplier bodies are present. The full
`def-random-field-stationarity-covariance-and-variogram` definition was read;
it distinguishes coordinate from joint measurability, defines wide stationarity
by constant mean and displacement covariance, and defines the order-two
increment moments and variogram. The covariance-positive-semidefinite and
conditional-negative-definiteness proofs were also read. Batch 46 directly
uses the field definition; it does not import those two results. The sample
semivariogram definition states explicitly that only stationary second
increment moments are needed for its expectation identity.

`def-random-field-stationarity-covariance-and-variogram` writes
`Cov(X(s),X(t))=C(t-s)`. The lattice estimators use
`Cov(Y_{j+h},Y_j)`. These conventions agree for real covariance by symmetry;
the estimator definition says this explicitly. The spatial mean theorem states
its lag convention and cites the same symmetry.

The new `lem-integers-lattice-is-discrete-lca-group` proves, coordinate by
coordinate, that the additive integer lattice with its discrete topology is
abelian, Hausdorff and locally compact, and that maps out of it are continuous.
It is a choice-free local prerequisite for the dual and Bochner arguments.
`lem-angular-fourier-orthogonality` was read in full from batch 41. It assumes
Countable Choice; the Fejer theorem assumes AC and cites the actual
`AC => DC => AC_omega` theorem to discharge that stronger named premise. The
Bochner branch remains AC+DC. Window, estimator and counterexample arguments
make no choice-axiom assumption.

## Periodogram target and source-scope issue

The local periodogram is explicitly for a lattice-indexed field and its spectral
measure on the dual torus. The smoothed-bias theorem targets that lattice
spectral density. It does not identify this density with an unaliased
continuous-space density.

There is an owner scope question. Spodarev 2024 §2.3, Definition 2.9 and
Lemma 2.10 (PDF pp. 18–19) defines a finite regular-grid periodogram from a
continuous-space field and, in the proof of part (b), integrates a periodic
Fejer kernel against the continuous-space density on `R` before claiming
convergence to the unaliased density. With fixed grid spacing, the kernel is
periodic and the limiting target is generally the periodized/aliased density.
For example, a nonnegative even smooth compactly supported density with bumps
near `±2π` and zero at `0` has an integer-grid spectral density positive at
frequency `0`, although the continuous-space density at `0` is zero. Thus the
source route does not justify an unaliased target without an alias-free
hypothesis or a changing-grid argument. The current three periodogram carriers
are drafted for the mathematically well-defined lattice target; their target
scope and Step-1 readiness are escalated for owner reconciliation. No aliasing
identity or continuous-space bias claim is silently asserted.

## Sources and retrieval

The A-page coverage record harvests three treatments:

- Spodarev, *Spatial Statistics: Lecture Notes* (2024), complete focused
  §§2.1–2.3, PDF pp. 15–23; mean, covariance and variogram estimators,
  Definitions 2.9–2.11, Lemmas 2.2–2.3, 2.8, 2.10 and 2.14.
- Sun, Stanford Stats 253 Lecture 6, complete covariance/variogram unit,
  PDF pp. 8–15; estimator conventions and the warning that a sample covariance
  need not be positive definite. Its asymptotic claims are not used as proof
  premises.
- Oxford Mathematical Institute, *Harmonic Analysis* lecture notes, complete
  character-identification unit, PDF pp. 17–18, for the dual of `Z^d`.

The coverage record contains each harvested-result disposition, exact locators,
URLs and successful fetch stamps. All three full texts were fetched and
inspected; there were no retrieval failures or source drops. No source
resolution fallback was needed.

## Scoped checks and Step-1 readiness

Final scoped checks report:

- Source fetch: 3/3 sources fetch-verified; 0 newly stamped and 0 documented
  drops.
- Coverage checklist: 1 A page, 14 harvested results, 0 errors and 0 warnings.
- Content policy: 13 scoped items, 0 errors and 0 warnings.
- Strict proof contracts: 13/13 items, 0 errors and 0 warnings.
- Precheck: 9 proof-bearing items pass; 4 definitions are not applicable.
- Proof layout: 13 items, 35 steps, 0 defects.
- Rendercheck: all 13 item carriers and both A/B pages pass.
- Item dependency levels: 511 items across 124 pages, maximum level 9; all
  labels match the run-wide graph.
- Focused depcheck: 0 errors/warnings, 1,339-item and 314-page dependency
  closure; focused fwdcheck and extcheck also report 0 errors/warnings.
- Depsource: 87 published and 20 draft-page dependencies, 0 unresolved.
- A and B page frontmatter inventories match the 11/2 items in this manifest.

The current shared batch-dependency-level artifact does not pass its check. The
file records input SHA `7678825e1f7f6ce11798fe342466b92d8abf015b55c31f19d48984f17f5437c6`,
while this dispatch supplied `27475f311f387a450b71d304fdeadb4cc19f50bb77fd57e0de7eea236ea68934`;
`node tools/batch-dependency-levels.mjs check --run
statistical-models-experiments-62` reports it stale. The artifact is shared
schedule state, so this batch did not rewrite it. The item-level graph was
recomputed and passes.

Step-1 records mark ten items `ready` and the three periodogram-target items
`escalated`: `def-regular-grid-periodogram-and-smoother`,
`thm-regular-grid-periodogram-fejer-expectation`, and
`thm-regular-grid-smoothed-periodogram-bias-vanishes`. The escalation preserves
the lattice-target draft while requesting owner resolution of the
continuous-space versus lattice-sampled scope issue. `node
tools/step1-decisions.mjs check --run statistical-models-experiments-62` sees
508 ready items overall and remains open solely on these three batch-46
escalations; the ten ready decisions include their examined direct dependency
IDs and current item hashes. Readiness records are authoring evidence only,
not independent proof approval.
