# frontier-31a batch 3 — beta scaffold notes

## Scope and checkpoint

This is the complete Step-2 scaffold for the A/B pair `geometric-hahn-banach-and-convex-separation` / `geometric-hahn-banach-and-convex-separation-examples`. The manifest has 19 A items and 11 B items (30 total); the A page is below the 60-item split threshold. Every planned item has an explicit `deps` array. No item id was already present in the current plan or in published content.

The task specification agrees with the design: order 288.055, prerequisite `the-analytic-hahn-banach-theorem-examples`, title, category, and companion all match. The run-level drift note also records that the analytic Hahn--Banach predecessor reaches the elementary convexity and FA-2/FA-4 prerequisites used here. No local adjudication was made.

The task has no authored library items yet. This checkpoint records a source-grounded authoring plan, not published mathematics.

## Conventions and proof route

- Scalars are `K=R` or `C` under the established real/complex normed-space convention. In the complex case every separation inequality is about `Re f`; complex numbers are never ordered.

- `p_C(x)=inf{t>0:x in tC}` is formed only for absorbing `C`; it is finite then. Convexity gives real sublinearity, balancedness upgrades it to a seminorm, and positive-definiteness is never presumed.

- The gauge-recovery lemma is only for an open convex neighbourhood of zero. Point separation translates a chosen point of the open set to zero; it does not form a gauge of an open set that may omit zero.

- The selected main route is gauge -> real dominated Hahn--Banach -> real-part reconstruction in the complex case -> convex-set separation -> subspace separation and its consequences. The subspace and finite-dimensional projection proofs use `thm-norm-preserving-extension-from-any-subspace`, which covers both fields, rather than the real-only extension item.

- The Mazur item states just the finite-dual-functional neighbourhood criterion it needs. It is not an early definition of all weak-topology machinery.

- The Phillips companion proof is self-contained at this stage: a deterministic almost-disjoint-family construction, the quotient no-countable-separating-family lemma, then the projection contradiction. Its countable-union step explicitly depends on `thm-countable-union-of-countable`, hence on `AC_omega`.

## Item inventory: A page

| Item | Exact planned claim / authoring route | Direct dependencies |
| --- | --- | --- |
| `def-absorbing-balanced-and-absolutely-convex-set` | Define the three gauge hypotheses separately. | `def-norm-and-normed-space`, `rem-real-and-complex-normed-space-convention` |
| `def-minkowski-functional` | Define the finite gauge of an absorbing set and state its limits. | `def-absorbing-balanced-and-absolutely-convex-set` |
| `lem-minkowski-functional-is-sublinear` | Epsilon-dilate proof of nonnegative homogeneity and subadditivity. | preceding definition pair |
| `lem-balanced-gauge-is-a-seminorm` | Balancedness supplies absolute scalar homogeneity. | absorbing definition, gauge definition, sublinearity lemma |
| `lem-open-convex-set-recovered-from-its-gauge` | For open convex `U` containing zero, `U={p_U<1}`. | gauge, sublinearity, normed-space definition |
| `def-weak-and-strict-separation` | Define weak/strict/strong separation via `Re f` in the complex case. | dual-space definition, scalar convention |
| `thm-separation-of-an-open-convex-set-and-a-point` | Translate, gauge, apply dominated Hahn--Banach on a line, reconstruct complex-linear `f`. | gauge recovery, separation definition, real dominated HB, real-part lemma |
| `thm-separation-of-disjoint-convex-sets-one-open` | Apply point/open separation to the convex difference. | preceding separation theorem, separation definition |
| `thm-strong-separation-of-closed-and-compact-convex-sets` | Positive distance, open thickening, and separation yield a gap. | one-open theorem, separation definition, distance Lipschitz, metric extreme value, compactness |
| `cor-closed-convex-set-is-an-intersection-of-closed-half-spaces` | Exclude each exterior point by a closed half-space. | one-open theorem, separation definition, metric topology |
| `def-continuous-annihilator-of-a-subspace` | Define `M^perp` in the continuous dual, not algebraic dual. | dual-space definition, subspace definition |
| `thm-geometric-hahn-banach-for-subspaces` | `x` outside `closure M` has `f` vanishing on `M` with `f(x)=1`. | annihilator definition, field-general extension, closure characterization, normed subspace |
| `cor-annihilator-detects-closure` | `closure M` is the intersection of kernels of `M^perp`. | annihilator definition, geometric HB theorem |
| `cor-density-characterised-by-annihilator-zero` | `M` is dense iff `M^perp={0}`. | closure corollary |
| `cor-finite-dimensional-subspaces-are-complemented` | Extend fixed-basis coordinate maps and sum `f_j(x)e_j`. | finite-dimensional coordinate and closedness items, field-general extension, complemented/projection items |
| `cor-finite-codimensional-subspaces-are-complemented` | Lift a quotient basis to a bounded section and project by `I-Sq`. | quotient seminorm and closedness item, coordinate-map item, complemented/projection items |
| `def-linear-hyperplane` | Define by `dim(X/H)=1`, with no closedness built in. | subspace, quotient-vector-space, dimension definitions |
| `thm-closed-hyperplanes-are-kernels-of-nonzero-functionals` | Use an exterior-point separator; converse is continuity and codimension one. | hyperplane definition, geometric HB, dual-space definition, metric topology |
| `thm-mazur-weak-and-norm-closure-of-convex-sets` | Separate an exterior point from norm-closed convex `C` to exclude a finite-functional weak neighbourhood. | dual-space, closed-half-space corollary, one-open separation, separation definition |

## Item inventory: B page

| Item | Exact planned claim / authoring route | Direct dependencies |
| --- | --- | --- |
| `ex-gauges-of-norm-balls-and-ellipsoids` | Compute ball and positive-definite ellipsoid gauges. | Minkowski definition, balanced-gauge lemma |
| `cex-gauge-of-a-nonbalanced-set-is-not-a-seminorm` | One-sided interval violates negative-scalar homogeneity. | Minkowski definition, sublinearity lemma |
| `cex-two-closed-convex-sets-need-not-be-strongly-separated` | The x-axis and epigraph of `exp(-x)` are closed, convex, disjoint, and distance zero. | separation definition, exponential derivative/continuity, `thm-exponential-two-point-convexity`, `thm-exponential-is-strictly-increasing` |
| `ex-distance-to-a-subspace-via-annihilating-functionals` | Derive the unit-dual-ball supremum formula for distance to `closure M`. | annihilator definition, geometric HB theorem |
| `def-c-zero-and-ell-infinity` | Define `c_0` and `ell-infinity` with sup norm. | normed-space and sequence definitions |
| `lem-c-zero-is-a-closed-subspace-of-ell-infinity` | Uniform limit two-epsilon proof. | sequence-space definition, metric topology |
| `lem-uncountable-almost-disjoint-family-on-natural-numbers` | Least-index rational selections from shrinking irrational intervals. | irrational uncountability/density, rational countability, well-ordering, countability |
| `lem-quotient-by-c-zero-has-no-countable-separating-family` | Almost-disjoint indicators and `AC_omega` defeat every countable family. | closedness, almost-disjoint lemma, quotient norm items, dual definition, countable-union theorem |
| `thm-c-zero-is-not-complemented-in-ell-infinity` | A projection would induce a countable separating quotient family. | sequence-space and closedness items, quotient lemma, complemented/projection items, quotient seminorm |
| `ex-a-closed-uncomplemented-subspace` | Package `c_0 subset ell-infinity`. | B-page closedness and noncomplementability results |
| `rem-two-results-called-mazurs-lemma` | Distinguish closure Mazur from the convex-combination lemma. | Mazur closure theorem |

The companion has no dependency on a later B item: its B-page internal dependencies point only to earlier B items, and its A dependencies are already required through the companion A page.

## Source record and harvest status

All recorded URLs were opened in the research reader before the harvest. Exact headings, result-level dispositions, destinations, and recovery provenance are in `frontier-31a-batch-3.coverage.json`; this section is the authoring checkpoint rather than a substitute for that ledger.

- Theo Buehler and Dietmar A. Salamon, *Functional Analysis*, §§2.3.2--2.3.5, printed pp. 76--87: [recovered complete text](https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf), with the intended [ETH provenance URL](https://people.math.ethz.ch/~salamond/PREPRINTS/funcana-ams.pdf). The source supports the separation, annihilator, closure, hyperplane, and complemented-subspace strand.

- Gerald Teschl, *Topics in Real and Functional Analysis*, §5.1 pp. 137--141 and §5.3 pp. 146--148: [complete 2018 manuscript rendering](https://pdfcoffee.com/topics-in-real-and-functional-analysis-gerald-teschl-pdf-free.html). It independently supports the gauge route, complex real-part convention, compact/closed separation, and Mazur closure result.

- Anthony W. Knapp, *Advanced Real Analysis*, IV §5, printed pp. 125--128: [official textbook PDF](https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf). It supplies an independent textbook treatment of convex sets, the support function, and algebraic separation.

- Piotr Hajlasz, *Functional Analysis*, §10.5, printed pp. 94--98: [author-hosted notes](https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf). It supplies the exact Phillips proof architecture used for the `c_0` companion sequence.

Known limits and deliberate destinations: positivity/order theory is out of scope; polar and quotient-dual calculus are deferred to `dual-spaces-adjoint-operators-and-annihilators`; weak-star and bipolar matters to `weak-and-weak-star-topologies`; Banach--Alaoglu and Goldstine to `banach-alaoglu-goldstine-and-krein-milman`; and the unit-sphere weak-closure example to `weak-and-weak-star-topologies-examples`. Each is recorded with a result-specific reason in the harvest.

## Validation checkpoint

Completed on 2026-09-05:

- `JSON.parse` of both batch JSON artifacts: PASS.
- `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-3.pages.json`: PASS, 30 scoped items, 0 errors and 0 warnings. This run caught and repaired two stale exponential ids before the final pass.
- `node tools/coverage-checklist.mjs research/frontier-31a-batch-3.coverage.json --require-destination`: PASS, 0 errors; warning only: 29 of 77 harvested results are scaffolded, so Alpha should confirm the explicit declines.
- `node tools/validate-plan.mjs research/plan-spec.json`: PASS. It reports no item cycles, forward references, B-page dependency violations, or unresolved ids among pages with item lists.
- Whole-run `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-*.pages.json`: still exits 1 solely for five pre-existing group-homology/cohomology dependency errors in another batch (`def-group-homology-as-a-derived-functor` three times and `def-group-cohomology-as-a-derived-functor` twice). The two errors initially attributable to this batch were repaired; no other batch artifact was changed.
- `node tools/url-sweep.mjs --coverage research/frontier-31a-batch-3.coverage.json --out /tmp/frontier-31a-batch-3-url-liveness.json --concurrency 4 --timeout-ms 6000 --recover --fail-on-dead`: local gate could not resolve any of the four hosts (`curl: (6) Could not resolve host`), so it exits 1 with 0/4 live and no archive result. This is a runner DNS transport failure, not a harvested-text failure: each reader-facing URL was directly fetched and read through the research reader as documented above and in coverage. No URL replacement can be justified from a resolver-wide local failure; the ephemeral liveness report is retained at `/tmp/frontier-31a-batch-3-url-liveness.json` for the next networked gate run.

Historical transport note: the earlier local `url-sweep` was unable to resolve
the four hosts, so its 0/4 result was a runner-DNS failure rather than a source
failure.  This Step-3 pass directly re-opened all four full-text URLs through
the research reader; no recovery or re-sourcing is required.  The scaffold,
source reading and provenance, dependencies, and batch-local structural gates
remain complete.

## Step-3 fix pass

The stable group-`f` review assigns no numbered batch-3 finding and records no
missing-result row.  The following rows preserve that identifier status rather
than inventing or renumbering a finding.

| Review finding id | Disposition | Evidence | Changed scaffold record |
| --- | --- | --- | --- |
| none assigned — Alpha `f`, “Batch 3 — geometric Hahn–Banach and convex separation” | accepted; no in-scope repair | `research/frontier-31a-alpha-f-step3-scaffold-review.md:20-48` declares the 19-A/11-B item route sufficient, identifies the gauge, real-part complex separation, strong-separation, annihilator, complement, Mazur, and Phillips obligations, and confirms their stated source route.  `research/frontier-31a-alpha-f-step3-verdicts.json` records `geometric-hahn-banach-and-convex-separation` as `sufficient`. | none — `frontier-31a-batch-3.pages.json` remains unchanged; its 30 item objects retain explicit `deps` arrays. |
| none assigned — Alpha `f`, scope-decision/coverage-low-yield review | accepted; decline boundary retained | `research/frontier-31a-alpha-f-step3-scaffold-review.md:115-130` records 21 batch-3 decline rows, all `stands`, and says none is a missing retained premise.  The 77-row harvest keeps concrete out-of-scope reasons or later destinations for every non-included result. | none — `frontier-31a-batch-3.coverage.json` remains unchanged; no source result was removed merely to clear the advisory. |

Direct full-text re-verification this pass opened each recorded source and its
harvest range: Bühler–Salamon, §§2.3.2--2.3.5, printed pp. 76--87 (recovered
452-page PDF); Teschl, §§5.1 and 5.3, printed pp. 137--148 (complete HTML
rendering); Knapp, IV §5, printed pp. 125--128 (648-page PDF); and Hajlasz,
§10.5, printed pp. 94--98 (189-page author-hosted PDF).  Their recorded
headings/results still support the same item dispositions, including the
real-part complex convention, compact/closed separation, Mazur closure, and
the Phillips route.  The source-fetch gate reports all four records verified.

Validation after the review disposition:

- `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-3.coverage.json`: PASS, 4/4 source records fetch-verified.
- `node tools/manifest-deps.mjs research/frontier-31a-batch-3.pages.json`: PASS, 30 items, 0 normalized ids, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-31a-batch-3.coverage.json --require-destination`: PASS, 77 harvested results and 0 errors; the expected `coverage-low-yield` advisory remains 29/77 because the reviewed 21 scope boundaries are intentionally not scaffolded.
- `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-*.pages.json`: PASS, 902 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: PASS; declared order is acyclic and consistent, with no item cycles, forward references, B-page dependencies, or unresolved ids among itemized pages.

No unresolved batch-3 scaffold obligation remains.  The next action is ordinary
authoring from the unchanged dependency-closed manifest; retain the existing
scalar, gauge, separation, compactness, and `AC_omega` qualifications.

## Step-5 authoring

Authored all 30 manifest ids as draft items and wrote the two planned pages:
`library/functional-analysis/geometric-hahn-banach-and-convex-separation.md`
and `library/functional-analysis/geometric-hahn-banach-and-convex-separation-examples.md`.
The A page contains the five gauge/separation definitions and lemmas, open-set,
one-open-set, and compact/closed separation, half-space reconstruction,
annihilator/closure/density, finite-dimensional and finite-codimensional
complementation, hyperplanes, and the finite-functional formulation of Mazur's
closure theorem.  The B page contains the two gauge computations/obstructions,
the zero-distance closed-convex obstruction, the annihilator distance formula,
and the $c_0\subseteq\ell^\infty$ Phillips route.

Every item is `status: draft`, has the manifest dependency list, source-backed
literature-derived statement provenance (with generated examples and
counterexamples marked by their required generation roles), and no judge stamp.
The proofs retain the page scalar convention: complex separation is always on
$\operatorname{Re}f$; the gauge recovery lemma requires an open convex
neighbourhood of $0$; and the quotient no-countable-separator and Phillips
claims explicitly assume $\mathrm{AC}_\omega$.  The cited dependency facts and
their exact source-section excerpts, proof-step uses, and all standard boundary
dispositions are recorded in `research/frontier-31a-batch-3.proof-contracts.json`.

No planned claim was dropped or narrowed.  The source provenance and routes are
the four source records and locators already enumerated above: Bühler--Salamon
§§2.3.2--2.3.5, Teschl §§5.1 and 5.3, Knapp IV §5, and Hajlasz §10.5.

Completed checks after authoring:

- `node tools/tsx-run.mjs tools/precheck.mts` with the 30 explicit manifest
  item paths: PASS, 23 proof-bearing items checked and 0 failing. Five stored
  phase sequences were normalized to the canonical precheck ordering before
  this final pass.
- `node tools/validate-plan.mjs research/plan-spec.json`: PASS; declared order
  is acyclic and consistent, with no item cycles, forward references, B-page
  dependency violations, or unresolved ids among itemized pages.
- `node tools/content-policy.mjs research/frontier-31a-batch-3.pages.json`:
  PASS, 30 scoped items, 0 errors and 0 warnings.
- `node tools/proof-contract.mjs research/frontier-31a-batch-3.proof-contracts.json --strict`:
  PASS, 23/23 scoped proof-bearing items, 0 errors and 0 warnings.

Blockers: none.
