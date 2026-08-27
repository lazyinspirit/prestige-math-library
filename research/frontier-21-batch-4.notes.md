# frontier-21 batch-4 beta notes

## Scope

- Owned pair: `the-spectral-theorem-and-singular-value-decomposition` (A, order 141) and `the-spectral-theorem-and-singular-value-decomposition-examples` (B, order 142).
- Manifest written in [frontier-21-batch-4.pages.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-21-batch-4.pages.json).
- Coverage harvest written in [frontier-21-batch-4.coverage.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-21-batch-4.coverage.json).

## Controlling design and drift

- I treated `research/plan-algebra-track.md`, section `II.9 X-2`, as controlling.
- `research/plan-algebra-track-expansion.md` is not authoritative for X-2, but its authority note is still operative: `plan-spec.json` can understate what is already published, so disk had to be checked before narrowing any theorem.
- `research/plan-combinatorics-and-categories.md` was read only as a downstream-demand note, not as page authority.
- I carried the spec order and `requires` exactly as given in `research/plan-spec.json`: 141/142, with `the-fundamental-theorem-of-algebra`, `inner-product-spaces-and-orthogonality`, and `triangularisation-and-jordan-canonical-form`.
- Order drift exists in the prose files and is recorded here rather than adjudicated locally:
  - `plan-algebra-track.md` gives `141 / 142`.
  - `plan-algebra-track-expansion.md` still mentions `137 / 138`.
  - `plan-combinatorics-and-categories.md` still cites `131`.
  - Per dispatch, I followed `research/plan-spec.json`.
- A second drift is on disk: `II.9.b` assumes LA-12 already publishes the self-adjoint/normal spectral block. The currently authored [inner-product-spaces-and-orthogonality.md](/home/lazyinspirit/Projects/prestige-math-library/library/linear-algebra/inner-product-spaces-and-orthogonality.md) does not list those operator-spectral items, so the scaffold still rebuilds those preliminaries locally.
- `C4-1` changes the Jordan-Chevalley scope record. The perfect-field theorem is inside the declared closure after all: the required page `the-fundamental-theorem-of-algebra` is already downstream of the published GA-1 page `algebraic-closure-embeddings-and-separability`, and that page publishes `def-perfect-field`, `cor-fields-of-characteristic-zero-and-finite-fields-are-perfect`, and `cor-algebraic-extensions-of-perfect-fields-are-separable`. The batch manifest now restores the designed item `thm-additive-jordan-chevalley-decomposition` instead of the split-only surrogate.

## Scaffold summary

- A page items: **34**.
- B page items: **19**.
- No split is needed; the A page is well below the 60-item ceiling.

The A page remains organised in five blocks:

1. Normal/self-adjoint preliminaries, Schur triangularisation, the complex spectral theorem, and the real normal classification.
2. Spectral resolution, functional calculus, and Jordan-Chevalley.
3. Positive operators, the non-negative square root, and singular values.
4. SVD, polar decomposition, operator norm, and Eckart-Young.
5. Rayleigh quotient, Courant-Fischer, interlacing, Weyl, and Gershgorin.

The B page still carries the explicit matrix computations and the field/convention counterexamples:

- the quarter-turn over `R`,
- a complex symmetric nilpotent witness,
- explicit square-root / polar / SVD calculations,
- the singular-value vs eigenvalue confusions,
- and the singular polar-factor nonuniqueness.

## Source decisions

I harvested six web-readable treatments for this pair. Five already carry on-disk
`fetch_verified` stamps; the Geck arXiv PDF was read and checked through the web
research channel but could not be restamped locally because of the shell DNS
failure recorded below:

1. Axler, *Linear Algebra Done Right*.
2. Nicholas Hu, *The Schur decomposition*.
3. MIT 18.409 lecture notes for Courant-Fischer and Rayleigh.
4. Helmberg-Porto-Torres-Trevisan via the live arXiv preprint PDF for Weyl/interlacing.
5. Meinolf Geck, *On the Jordan-Chevalley decomposition of a matrix*.
6. Joo Heon Yoo, *The Jordan-Chevalley decomposition*.

Why this mix:

- Axler remains the main textbook backing for the spectral theorem, positive operators, SVD, operator norm, polar decomposition, and Eckart-Young.
- Hu still supplies the Schur route and the real-normal block classification that the published prerequisites do not currently expose.
- MIT isolates the min-max and Rayleigh material in a compact note.
- Helmberg et al. still provide explicit, named Weyl/interlacing statements, and the arXiv PDF remains the same-document live recovery for the dead ResearchGate landing page.
- Geck is now the live theorem source for the repaired perfect-field Jordan-Chevalley item: Proposition 3 gives the perfect-field reduction and Theorem 7 gives existence, uniqueness, and polynomiality.
- Yoo is retained only as inline support for the split-primary-component model calculation. Its `original_url` provenance is preserved because it was the earlier re-source for the dead ResearchGate/Nowicki route.

## Dependency and proof-strategy notes

- `thm-schur-triangularisation` is still built from the existing triangularisation page plus Gram-Schmidt. The design explicitly forbids reproving the invariant-flag machinery.
- `thm-complex-spectral-theorem-for-normal-endomorphisms` still follows the Schur-plus-diagonal-lemma route, not a compactness or variational proof.
- `thm-real-normal-endomorphism-classification` is still derived from the complex theorem by pairing conjugate eigenvectors.
- `thm-additive-jordan-chevalley-decomposition` now follows the design's closure story: choose a splitting field inside an algebraic closure, use the split Jordan calculation on each primary component, and descend the semisimple/nilpotent operators by uniqueness plus base automorphisms of the algebraic closure. The item now depends explicitly on `def-algebraic-closure` and `cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure`, so the descent step is no longer implicit.
- `thm-non-negative-operator-characterisations`, `thm-non-negative-square-root-exists-and-is-unique`, `thm-singular-value-decomposition`, `thm-polar-decomposition`, `thm-operator-norm-is-the-largest-singular-value`, and `thm-eckart-young-best-rank-k-approximation` all remain on the design's algebraic route. No compactness or EVT is used.
- `thm-courant-fischer-min-max-principle`, `thm-cauchy-interlacing-for-self-adjoint-compressions`, and `thm-weyl-inequalities-for-self-adjoint-sums` stay in the real self-adjoint/symmetric setting because that is exactly the downstream graph-theory interface the design names.

## Known limits recorded now

- The infinite-dimensional spectral theorem is intentionally **not** scaffolded here.
- Cholesky factorisation, ellipsoid geometry, and volume-from-singular-values were harvested and declined as scope expansions, not as missing prerequisites.
- The new Geck arXiv source was read through the web research channel, but the shell still cannot resolve fresh hosts, so `source-fetch-check` could not mint a new on-disk `fetch_verified` stamp for that URL on 2026-08-27. I did not fabricate one.

## Validation

- `node tools/coverage-checklist.mjs research/frontier-21-batch-4.coverage.json --require-destination`:
  pass, `1` page and `49` harvested results, `0` errors, `0` warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-1.pages.json research/frontier-21-batch-2.pages.json research/frontier-21-batch-3.pages.json research/frontier-21-batch-4.pages.json research/frontier-21-batch-5.pages.json research/frontier-21-batch-6.pages.json research/frontier-21-batch-7.pages.json research/frontier-21-batch-8.pages.json research/frontier-21-batch-9.pages.json research/frontier-21-batch-10.pages.json`:
  pass, `433` scoped items, `0` errors, `0` warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`:
  pass. Output still contains only `redundant-prereq` advisories, including the existing batch-4 note that X-2 reaches `triangularisation-and-jordan-canonical-form` through `the-fundamental-theorem-of-algebra`.
- `node tools/source-backing.mjs --coverage research/frontier-21-batch-4.coverage.json --liveness research/frontier-21-url-liveness.json`:
  pass, `23` authored results still have openable backing.
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-4.coverage.json`:
  fails `5/6` fetch-verified, with the only missing stamp on `https://arxiv.org/pdf/2205.05432`. This is the shell DNS limitation recorded above, not a content-policy or coverage defect.

## Reharvest 2026-08-27

- `research/frontier-21-url-liveness.json` still records `https://www.researchgate.net/publication/373363866_An_interlacing_property_of_the_signless_Laplacian_of_threshold_graphs` as dead, and the live same-document recovery remains `https://arxiv.org/pdf/2308.12654`.
- `research/frontier-21-url-liveness.json` still records `https://www.researchgate.net/publication/267655069_Locally_finite_endomorphisms` as dead. On this fix pass I did not continue to use that dead-source replacement as theorem backing: Yoo now remains only as inline support for the split calculation, with `original_url` provenance preserved.
- The repaired theorem backing is now the live Geck arXiv PDF `https://arxiv.org/pdf/2205.05432`, read at:
  - Section 2, Proposition 3, printed pp. 2-3.
  - Section 3, Theorem 7 and its proof, printed pp. 4-5.

## Step-3 fix pass

- `C4-1`:
  disposition: applied.
  evidence: `plan-algebra-track.md` II.9.c still assigns `thm-additive-jordan-chevalley-decomposition` over a perfect field; `plan-algebra-track-expansion.md` warns that `plan-spec.json` can understate what is already published; the published pages [the-fundamental-theorem-of-algebra.md](/home/lazyinspirit/Projects/prestige-math-library/library/abstract-algebra/the-fundamental-theorem-of-algebra.md) and [algebraic-closure-embeddings-and-separability.md](/home/lazyinspirit/Projects/prestige-math-library/library/abstract-algebra/algebraic-closure-embeddings-and-separability.md) place `def-perfect-field`, `def-algebraic-closure`, `cor-algebraic-extensions-of-perfect-fields-are-separable`, and `cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure` inside the live closure; Geck Proposition 3 plus Theorem 7 provide a live source for the exact theorem; Yoo Proposition 6.1 only supports the split case and is therefore no longer the theorem row.
  changed scaffold record: [frontier-21-batch-4.pages.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-21-batch-4.pages.json) restores `thm-additive-jordan-chevalley-decomposition`, updates its title/strategy/deps, and adds the algebraic-closure/automorphism dependencies that make the descent step explicit; [frontier-21-batch-4.coverage.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-21-batch-4.coverage.json) adds the Geck theorem source, retargets the Jordan-Chevalley theorem row to that source, and demotes the Yoo row to inline split-case support; this notes file removes the old narrowing claim and records the repaired closure argument and validator results.

## Step-5 authoring

- Authored page files: `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md` and `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition-examples.md`.
- Authored A-page ids (`34`): `def-self-adjoint-and-normal-endomorphism`, `prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases`, `thm-schur-triangularisation`, `lem-normal-upper-triangular-matrix-is-diagonal`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `thm-real-normal-endomorphism-classification`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-spectral-resolution-and-polynomial-spectral-projections`, `def-functional-calculus-for-a-normal-endomorphism`, `prop-functional-calculus-for-normal-endomorphisms`, `def-semisimple-and-nilpotent-endomorphisms`, `thm-additive-jordan-chevalley-decomposition`, `def-non-negative-and-positive-operator`, `prop-operator-positivity-agrees-with-form-positivity-over-the-reals`, `thm-non-negative-operator-characterisations`, `thm-non-negative-square-root-exists-and-is-unique`, `prop-non-negative-square-root-is-a-polynomial-in-the-operator`, `def-singular-values-of-an-endomorphism`, `prop-singular-values-are-well-defined`, `thm-singular-value-decomposition`, `cor-rank-equals-number-of-nonzero-singular-values`, `cor-adjoint-has-the-same-singular-values`, `thm-polar-decomposition`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `thm-operator-norm-is-the-largest-singular-value`, `cor-operator-norm-submultiplicative-and-t-star-t-identity`, `thm-eckart-young-best-rank-k-approximation`, `def-rayleigh-quotient`, `thm-courant-fischer-min-max-principle`, `cor-rayleigh-quotient-extreme-eigenvalue-characterisation`, `thm-cauchy-interlacing-for-self-adjoint-compressions`, `thm-weyl-inequalities-for-self-adjoint-sums`, `def-gershgorin-disks`, `thm-gershgorin-disk-theorem`.
- Authored B-page ids (`19`): `ex-real-symmetric-three-by-three-orthogonal-diagonalisation`, `ex-hermitian-two-by-two-unitary-diagonalisation`, `ex-quarter-turn-real-normal-form`, `ex-complex-symmetric-nilpotent-matrix`, `ex-non-negative-square-root-as-a-polynomial-in-a-matrix`, `ex-polar-decomposition-of-an-invertible-matrix`, `ex-polar-decomposition-of-a-singular-matrix`, `ex-singular-value-decomposition-of-a-two-by-three-matrix`, `ex-rank-one-svd-truncation`, `ex-courant-fischer-on-a-three-by-three-symmetric-matrix`, `ex-principal-submatrix-interlacing`, `ex-gershgorin-disks-and-spectrum`, `fs-normal-operators-are-diagonalisable-over-the-base-field`, `fs-complex-symmetric-matrices-are-unitarily-diagonalizable`, `fs-nonnegative-quadratic-values-force-self-adjointness`, `fs-square-roots-of-a-non-negative-operator-are-unique`, `fs-polar-isometry-is-unique-for-singular-operators`, `fs-singular-values-are-absolute-values-of-the-eigenvalues`, `fs-operator-norm-is-the-largest-eigenvalue-modulus`.
- Created `research/frontier-21-batch-4.proof-contracts.json` for the `45` proof-bearing ids and regenerated its `citations` and `derivations` from the final on-disk Facts and numbered steps after the last precheck-normalisation edits.

### Provenance rationale

- No item statement is `ai-generated`, so no `generation` block was written and no generated statement became a dependency target.
- Classical sourced Definitions, Theorems, and theorems-in-source Corollaries and Lemmas are marked `literature-derived` at statement level from the six batch sources: Axler for the spectral/SVD/positivity spine, Hu for Schur and the real normal block form, MIT for Rayleigh/Courant-Fischer, Helmberg-Porto-Torres-Trevisan for interlacing/Weyl, and Geck with Yoo for Jordan-Chevalley.
- Library-specific agreement items, witness-oriented corollaries, worked matrix examples, and false statements are marked `ai-altered` at statement level because they are source-backed but materially repackaged into the library's dependency language and field conventions.
- Every proof-bearing item is marked `provenance.proof: ai-altered`; every Definition uses `provenance.proof: not-applicable`.

### Narrowed and widened claims

- Narrowed to the complex-normal setting: `thm-spectral-resolution-and-polynomial-spectral-projections`, `def-functional-calculus-for-a-normal-endomorphism`, and `prop-functional-calculus-for-normal-endomorphisms`. The field-free normal formulation is false over `R` for the quarter-turn witness, so the final written claim keeps the theorem truthful and leaves the real self-adjoint use to the separate real spectral theorem.
- Broadened from endomorphisms to arbitrary linear maps `T:V->W`: `def-singular-values-of-an-endomorphism`, `prop-singular-values-are-well-defined`, `thm-singular-value-decomposition`, `cor-rank-equals-number-of-nonzero-singular-values`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `thm-operator-norm-is-the-largest-singular-value`, `cor-operator-norm-submultiplicative-and-t-star-t-identity`, and `thm-eckart-young-best-rank-k-approximation`. This is the natural `T^*T` domain formulation and it is required for the planned `2x3` SVD example.
- Deliberately not broadened: `cor-adjoint-has-the-same-singular-values` stays at the endomorphism level so the stated multiplicity claim does not become false for rectangular maps with different zero-singular-value multiplicities, and `thm-polar-decomposition` stays at the endomorphism level so the isometry factor remains a same-space operator.
- No planned item was dropped. No published content was edited.

### Batch-local dependency closure repairs

- The final written matrix-criterion proof needs `thm-matrix-of-a-composite-is-the-product`.
- The positivity and square-root proofs need the published square-root existence theorem `thm-of-square-roots`.
- The final Eckart-Young proof uses `thm-rank-nullity` and the finite-dimensional image bound from `thm-dimension-of-a-linear-subspace`.
- The final Weyl proof uses `thm-dimension-formula` for the intersection-dimension estimate.
- The refutation `fs-normal-operators-are-diagonalisable-over-the-base-field` cites the worked quarter-turn example directly, so its final dependency set includes `ex-quarter-turn-real-normal-form`.

### Final checks on Thursday, August 27, 2026

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-4 proof-bearing item scope...`: pass, `45/45` proof-bearing items.
- `node tools/content-policy.mjs research/frontier-21-batch-4.pages.json`: pass, `53` scoped items, `0` errors, `0` warnings.
- `node tools/proof-contract.mjs research/frontier-21-batch-4.proof-contracts.json --strict`: pass, `45/45` contracts, `0` errors, `0` warnings.
- `node tools/citation-fidelity.mjs research/frontier-21-batch-4.proof-contracts.json --fail-on-missing-quote`: pass, `88` citations; no missing quote and no widening candidate.
- `node tools/boundary-audit.mjs research/frontier-21-batch-4.proof-contracts.json --fail-on-contradicted --fail-on-template`: pass; no contradicted disposition and no template cluster at or above the default size.
- `node tools/validate-plan.mjs research/plan-spec.json`: pass, with the standing `redundant-prereq` advisories only. Final receipt line: `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 460 page(s) with item lists.`
- `git diff --check`: clean.

### Blockers

- No batch-local blocker remains after authoring.
- I did not rerun `source-fetch-check`; the step-2 DNS limitation on the new Geck URL remains a source-harvest transport issue rather than a step-5 authoring defect.
