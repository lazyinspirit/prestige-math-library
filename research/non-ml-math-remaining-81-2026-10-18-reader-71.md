# Step 3a reader report — batch 71

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: independent reader  
Scope: assigned A page, its examples companion, their 20 listed items, and the direct published dependencies and page references needed to check their claims.

## Opened inventory

Assigned pages:

- `library/hopf-hecke-algebras/affine-hecke-algebras-beyond-type-a.md`
- `library/hopf-hecke-algebras/affine-hecke-algebras-beyond-type-a-examples.md`

Assigned items, read in dependency order:

- Level 0: `def-hh-affine-hecke-algebra-from-root-datum`; `lem-hh-positive-affine-parameter-has-infinite-quantum-characteristic`; `lem-hh-sl2-q3-lattice-tree-and-iwahori-orbits`.
- Level 1: `lem-hh-affine-hecke-im-basis`; `lem-hh-root-datum-affine-geometry-and-wall-parameters`; `ex-hh-affine-padic-versus-root-of-unity-parameters`.
- Level 2: `def-hh-affine-hecke-bernstein-presentation`; `lem-hh-signed-alcove-products-and-oriented-basis`; `thm-hh-sl2-q3-iwahori-convolution-corner`; `ex-hh-affine-b2-unequal-parameters`.
- Level 3: `lem-hh-affine-hecke-bernstein-quotients-are-well-defined`.
- Level 4: `thm-hh-affine-hecke-general-root-data-bernstein-pbw`.
- Level 5: `def-hh-affine-hecke-parabolic-subalgebras-and-central-characters`; `rem-hh-affine-hecke-general-bernstein-pbw-awaits-local-proof`.
- Level 6: `def-hh-affine-hecke-weight-temperedness-and-positive-position`.
- Level 7: `lem-hh-affine-hecke-parabolic-weight-filtration`; `lem-hh-langlands-dominant-projection`.
- Level 8: `thm-hh-affine-hecke-standard-module-unique-irreducible-quotient`.
- Level 9: `thm-hh-affine-hecke-tempered-langlands-classification`.
- Level 10: `rem-hh-affine-tempered-langlands-classification-awaits-local-proof`.

The current published direct item suppliers consulted through their claim/definition interfaces were `cor-existence-of-left-and-right-haar-measures`, `cor-normalized-haar-probability-on-a-compact-group`, `cor-p-adic-field-is-locally-compact-and-totally-disconnected`, `cor-zp-is-the-valuation-ring-of-qp`, `def-abstract-root-datum-and-its-weyl-group`, `def-axiom-of-choice`, `def-cg-affine-root-hyperplane-reflection-and-alcove`, `def-hh-universal-coxeter-hecke-parameters-and-presentation`, `def-quantum-characteristic-of-an-invertible-hecke-parameter`, `lem-cg-affine-generic-gallery-paths-and-disk-moves`, `lem-root-datum-combinatorics`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-cg-affine-alcove-transitivity-presentation-and-length`, `thm-hh-generic-coxeter-hecke-standard-basis`, `thm-hh-matsumoto-reduced-word-theorem`, `thm-nearest-point-in-a-nonempty-closed-convex-set`, `thm-p-adic-digit-expansion`, and `thm-smith-normal-form-existence-over-a-pid`.

To check the A-page scope and navigation summaries, I also opened `library/hopf-hecke-algebras/hopf-hecke-and-quantum-symmetry-interfaces.md`, `library/algebraic-geometry/split-reductive-root-systems-bruhat-cells-and-parabolics.md`, `library/number-theory/absolute-values-completions-and-p-adic-numbers.md`, `library/coxeter-groups/affine-reflections-coroot-translations-and-alcoves.md`, and `library/representation-theory/haar-measure-existence-and-uniqueness.md`, plus `thm-hh-affine-type-a-bernstein-pbw` and `thm-hh-affine-type-a-center`.

## Page verdicts

- `affine-hecke-algebras-beyond-type-a` — **Pass.** Its root-data, normalization, PBW, classification, and selected-group scope summaries match the locally supplied item statements and proofs. The type-A comparison is correctly described as separate context, and the Hopf/quantum-symmetry page is navigation context rather than a logical supplier.
- `affine-hecke-algebras-beyond-type-a-examples` — **Pass.** The scalar example distinguishes only quantum-characteristic regimes, and the B2 example now checks its based root datum, affine walls, Coxeter labels, parameter condition, and basis without asserting an unproved general theorem.

## Repairs and evidence

- `thm-hh-sl2-q3-iwahori-convolution-corner`, Proof 1.1 and 5.1: the finite-sum convolution and representation integrals used a “sufficiently small compact open congruence subgroup” without constructing one. The proof now defines the kernels `K_m` of reduction modulo `3^m`, derives their compact openness and neighborhood-basis property from the matrix topology and compact-open `Z_3`, and uses finite covers of compact supports to justify the sums. This supplies the missing local integration prerequisite from the stated hypotheses.
- `ex-hh-affine-b2-unequal-parameters`, Verification 1.1, 1.2, and 2.1: the root-datum check now lists the positive roots and explains how signed-permutation equivariance propagates the simple-root/coroot checks to every listed root. The affine-wall check states the range of every positive-root function. The parameter check now uses `Y=Q∨`, hence trivial Omega, before applying the odd-edge conjugacy criterion; this verifies the extended-conjugacy requirement in the affine definition.
- `lem-hh-affine-hecke-parabolic-weight-filtration`, Proof 3.1: the proof now explains why a Laurent polynomial `f` has sole eigenvalue `f(t)` on the simultaneous generalized weight space for `t`, so `f-f(t)` is nilpotent of exponent at most the ambient dimension. Centrality then propagates its annihilation to the generated submodule.

I updated the matching step derivations for these items in `research/non-ml-math-remaining-81-2026-10-18-batch-71.proof-contracts.json`. None of the three item carriers had a `verification.judge` record to remove.

## Source checks

- Bernstein relations and normalization: Dan Ciubotaru, *Tutorial on Affine Hecke Algebras*, §2, Theorem 2.3 and Example 2.4 (PDF pp. 3–4), and §3, Theorem 3.1 (PDF p. 5), [source](https://imsarchives.nus.edu.sg/oldwww/Programs/016theory/files/dan.pdf). The latter states the two root/coroot-lattice cases, including the doubled-root denominator and its second parameter.
- Iwahori–Matsumoto/Bernstein comparison: Maarten Solleveld, *Affine Hecke Algebras and Their Representations*, §§1.2–1.4, Theorems 1.8 and 1.10 (PDF pp. 8–12), [source](https://arxiv.org/pdf/2009.03007). These passages give the extended affine-group decomposition, crossed-product convention, and comparison theorem.
- Oriented gallery products and unequal parameters: Ulrich Görtz, *Alcove Walks and Nearby Cycles on Affine Flag Manifolds*, Theorem 3.1.1 and proof (PDF pp. 6–7), Proposition 3.3.1 and proof (PDF pp. 8–9), and §3.4 with Lemmas 3.4.1–3.4.2 (PDF pp. 10–11), [source](https://arxiv.org/pdf/math/0610839). The section states the unequal-parameter extension and gives the parity rule for doubled roots.
- Langlands quotient, exhaustivity, and uniqueness: Maarten Solleveld, *On the Classification of Irreducible Representations of Affine Hecke Algebras with Unequal Parameters*, §2.2, Lemmas 2.2.1 and 2.2.3 and Theorem 2.2.4 (PDF pp. 28–32), [source](https://arxiv.org/pdf/1008.0177). Theorem 2.2.4 states unique irreducible quotient and unique Langlands data; the local items supply the proof in the present weight and central-direction conventions.

## Validation and blockers

For each changed item, `reflow.mts` reported unchanged and `precheck.mts` passed. The final batched proof-layout check reported **3 items, 14 steps, 0 defects**.

## Defects not repaired

None remain in the assigned batch or the page summaries.

No batch-71 blocker or uneditable defect remains. At the run-status check, the active run had an unrelated `3a-collect` blocker: `collect-18 failed 3x (covers 18)`; no batch-71 action can resolve that blocker.

Coverage limitation: I checked the relevant statements/definitions of all direct published suppliers and the source passages above, but did not independently re-audit every upstream proof body in the published prerequisite closure.
