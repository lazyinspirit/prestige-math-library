# Step 3a reader report — batch 39

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader (`reader-39`)  
Findings file: `research/non-ml-math-remaining-81-2026-10-18-reader-findings-39.json`

## Verdict

The assigned mathematical claims are sound after the repairs below. No defect
remains that this reader could not edit, and there is no batch-39 mathematical
blocker. The proof contracts and batch manifest now match the repaired item
dependencies. No changed item contained a stale `verification.judge` record.

## Opened inventory

Assigned pages:

- `regular-weyl-representations-and-stone-von-neumann` (A)
- `regular-weyl-representations-and-stone-von-neumann-examples` (B)

Assigned items, reviewed in supplier/dependency-level order:

- A: `def-heisenberg-group-of-a-symplectic-vector-space`, `def-incomplete-tensor-product-with-reference-vector`, `def-universal-weyl-c-star-algebra`, `def-regular-weyl-system-on-a-symplectic-vector-space`, `lem-heisenberg-group-lagrangian-splitting-and-dual-orbit`, `lem-universal-weyl-c-star-algebra-is-well-defined`, `lem-schrodinger-weyl-system-is-regular-and-irreducible`, `lem-one-mode-gaussian-weyl-average-is-rank-one`, `thm-stone-von-neumann-for-finite-dimensional-weyl-systems`.
- B: `cex-universal-weyl-c-star-algebra-has-nonregular-representations`, `ex-zero-central-character-has-many-regular-characters`, `ex-one-mode-schrodinger-weyl-relations`, `cex-infinite-mode-regular-weyl-representations-are-inequivalent`.

The A page's prerequisite pages were opened: `heisenberg-and-algebraic-weyl-algebras`, `unitary-representations-positive-type-and-gns`, `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`, `primitive-dirichlet-l-functions-and-functional-equations`, and `mackeys-imprimitivity-theorem`. I also opened the three PA-07 items named in the A-page route: `def-polynomial-weyl-algebra`, `lem-common-domain-commutator-integrates-to-weyl-relations`, and `rem-algebraic-weyl-modules-do-not-automatically-exponentiate`. The PA-07 carriers are draft and remain reading context only; no batch-39 proof treats them as accepted premises.

The current supplier statements/definitions used by the batch were opened, including: `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure`, `def-action-by-automorphisms`, `def-axiom-of-choice`, `def-bounded-linear-operator`, `def-c-star-algebra`, `def-complex-haar-lp-spaces-and-compactly-supported-functions`, `def-countable-choice`, `def-covariant-function-model-of-unitary-induction`, `def-external-semidirect-product`, `def-hilbert-space`, `def-operator-norm`, `def-projection-valued-measure`, `def-real-and-complex-inner-product-space`, `def-symplectic-vector-space`, `def-transitive-system-of-imprimitivity`, `lem-bochner-integral-norm-inequality`, `lem-borel-representatives-make-the-convolution-integrand-borel-measurable`, `lem-bounded-hilbert-operators-form-a-c-star-algebra`, `lem-continuous-characters-of-the-real-line-are-exponentials`, `lem-duals-of-finite-products-and-discrete-direct-sums`, `lem-fourier-transform-of-a-gaussian`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `lem-second-countable-lch-spaces-are-standard-borel`, `lem-spectral-measure-of-a-representation-of-an-abelian-lch-group`, `lem-the-induced-action-is-unitary`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `prop-symplectic-vector-spaces-have-even-dimension`, `thm-bochner-integrability-criterion`, `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`, `thm-bounded-borel-pvm-integral`, `thm-bounded-linear-maps-commute-with-bochner-integration`, `thm-box-step-functions-are-dense-in-l-p-of-rn`, `thm-c-c-rn-is-dense-in-l-p-of-rn`, `thm-completion-measurable-functions-have-base-measurable-representatives`, `thm-completion-of-an-inner-product-space-is-hilbert`, `thm-complex-plane-is-complete`, `thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication`, `thm-dominated-convergence`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-gaussian-integral`, `thm-holder-inequality-for-integrals`, `thm-integrals-are-invariant-under-measure-preserving-maps`, `thm-l-one-fourier-inversion`, `thm-lebesgue-measure-under-dilations-and-reflections`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-mackey-imprimitivity-theorem`, `thm-metric-completion-carries-a-unique-banach-space-structure`, `thm-metric-completion-exists`, `thm-orthogonal-decomposition-by-a-closed-subspace`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity`, and `thm-uniqueness-in-mackey-imprimitivity`.

Other direct definition interfaces opened include `def-group`, `def-topological-group`, `def-product-topology`, `def-locally-compact-space`, `def-second-countable-space`, `def-strongly-continuous-unitary-representation`, `def-standard-borel-space`, `def-separable-space`, `def-coset`, and `def-system-of-imprimitivity`.

Source comparisons were checked against Speicher, *Mathematical Aspects of Quantum Mechanics*, Chapters VIII and X; Prasad, *An Easy Proof of the Stone-von Neumann-Mackey Theorem*, §4.3; and Fewster–Rejzner, *Algebraic Quantum Field Theory—an introduction*, §4. The local proofs supply the calculations needed here rather than relying on compressed source steps.

## Repairs and evidence

| Item | Repair and evidence |
|---|---|
| `def-incomplete-tensor-product-with-reference-vector` | Made Countable Choice explicit; added the published (L^2)-Hilbert interface and metric/inner-product completion suppliers. This closes the earlier unsupported assertion that the (L^2(mathbb R^n)) stages are Hilbert spaces and establishes existence of the completed union. The local projection formulas remain derived directly by Fubini, Cauchy–Schwarz, and compatibility. |
| `def-universal-weyl-c-star-algebra` | Made Countable Choice explicit because its GNS and universal norm constructions use Hilbert and norm completions. |
| `lem-universal-weyl-c-star-algebra-is-well-defined` | Added the metric/inner-product completion interfaces and the published theorem that bounded operators on a nonzero Hilbert space form a C*-algebra. The latter supplies the operator C*-identity used in Step 3.1. Step 4.1 now also handles the zero Hilbert-space representation before choosing a unit vector. |
| `lem-schrodinger-weyl-system-is-regular-and-irreducible` | Added the (L^2)-Hilbert supplier and made Countable Choice explicit. Step 1.2 now constructs the required nonzero vector in (M^\perp): a Countable Choice minimizing sequence, the parallelogram identity, completeness, and variation by (th) and (tih) give the orthogonal residual. This removes an unstated Hilbert projection prerequisite while retaining the Fourier-uniqueness and Tonelli irreducibility argument. |
| `lem-one-mode-gaussian-weyl-average-is-rank-one` | Made Countable Choice explicit. Recast the Gaussian kernel calculation as a weak matrix-coefficient computation: the bounded functional passes through the Bochner integral, Fubini applies to the absolutely integrable scalar triple integral, and the variable change yields the rank-one matrix coefficients. Density then gives the operator identity without an unproved pointwise identification of an (L^2)-valued integral. |
| `thm-stone-von-neumann-for-finite-dimensional-weyl-systems` | Added explicit support for the bounded PVM calculus, standard Borel quotient, σ-finiteness of the induced measure, the induced section-fiber action, and orthogonal decomposition of closed fiber subspaces under AC. The σ-finiteness argument uses the compact-box cover of (G/N\cong\mathbb R^n) and the supplier's Radon finiteness. The Schrödinger comparison now verifies its position PVM and identifies the inducing field directly from the explicit (N)-action. |
| `cex-infinite-mode-regular-weyl-representations-are-inequivalent` | Replaced the commutant projection (Q_M), whose existence would require an unstated general projection theorem, with the finite products (R_n=\prod_{j\le n}P_j^{\Omega_a}). They converge strongly to the explicit reference-line projection. The Gaussian averages preserve a closed invariant subspace, so cyclicity proves irreducibility under the stated Countable Choice assumption. |
| `cex-universal-weyl-c-star-algebra-has-nonregular-representations` | Made Countable Choice explicit and defined (\ell^2(V)) as the Hilbert completion of finite-support functions with its canonical inner product. The twisted left translations extend on Cauchy-sequence classes, making the Hilbert carrier and unitary action explicit. |
| `ex-zero-central-character-has-many-regular-characters` | Added the complex-plane completeness interface establishing that the scalar carrier (\mathbb C) is a Hilbert space. |
| `ex-one-mode-schrodinger-weyl-relations` | Made Countable Choice explicit and added the (L^2(\mathbb R)) Hilbert-space interface needed for the unitary operators. |

For each material repair, the affected proof-contract records were updated. The batch-39 manifest dependency arrays were synchronized with the carriers; a direct comparison reports a match for all assigned items. No stale `verification.judge` record was present on any changed carrier.

## Page verdicts

- **A — `regular-weyl-representations-and-stone-von-neumann`:** The title, summary, phase convention, finite-dimensional/nonzero-parameter scope, and distinction between the universal C*-algebra and polynomial Weyl algebra are accurate after the repairs. Its PA-07 page prerequisite is a reading route only; the assigned proof dependencies do not use the draft PA-07 claims.
- **B — `regular-weyl-representations-and-stone-von-neumann-examples`:** The summaries correctly describe the zero-character example, one-mode phase calculation, nonregular representation, and the two inequivalent infinite-mode representations. The page makes no infinite-dimensional classification claim. No B-page prose was changed.

## Checks, uneditable defects, and blockers

- Reflow and precheck passed for all ten changed items (the definition-only universal C*-algebra item has no proof-bearing precheck case).
- Final proof layout: 10 items, 51 proof steps, 0 defects.
- **Defects not editable by this reader:** none. Findings array is empty.
- **Batch-39 mathematical blocker:** none. At the closeout status snapshot the engine remains in `3a-read` and still lists batch 39 as pending until this dispatch is registered. The run also has an unrelated `3a-collect` blocker: `collect-18` failed three times for batch 18.
- **Coverage limitation:** Published supplier statements and exact interfaces were checked, but this was not a recursive re-audit of every published supplier's own proof closure. The PA-07 prerequisite items were opened to verify their draft/context status, not audited as logical premises; the assigned page expressly does not use them as such.
