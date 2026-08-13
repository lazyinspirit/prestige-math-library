# Frontier-12 step-6 independent reader 2 findings

Run: `frontier-12`
Batch: 3
Role: independent reader, read-only on `items/` and `library/`

## Fatal findings

None. I found no false title or Statement, no missing load-bearing hypothesis, and no proof that fails to establish its stated result.

## Nonfatal findings

### `thm-spectral-mapping-for-polynomials`

1. **Location:** Fact [L1], used in proof step 3.1.

   **What is wrong:** [L1] says that matrices turn both sums and composites into sums and products, but its matrix citation is only `thm-matrix-of-a-composite-is-the-product`. That source's Statement proves
   \([S\circ T]=[S][T]\); it does not state preservation of sums or scalar multiples. Step 3.1 needs both parts to pass from \(p(T)=\sum a_kT^k\) to the displayed block matrix for \(p(T)\).

   **Evidence:** The separate on-disk item `thm-matrix-representation-is-a-vector-space-isomorphism` states that matrix representation preserves sums and scalar multiples, but it is not a dependency or citation here.

   **Severity:** nonfatal. Adding that dependency/citation, or deriving the entrywise sum assertion inline, closes the gap immediately.

### `ex-real-quarter-turn-has-no-real-eigenvalues`

1. **Location:** Fact [L2].

   **What is wrong:** [L2] restates `lem-of-square-positive` as “Every real square is nonnegative.” The cited Statement instead assumes \(a\ne0\) and concludes the strict inequality \(a^2>0\). The Fact changes both the hypothesis and conclusion.

   **Evidence:** On disk, `lem-of-square-positive` says only that every **nonzero** square in an ordered field is **positive**. The desired nonnegativity follows after a separate \(a=0\) case, but that case is not the cited proposition itself.

   **Severity:** nonfatal. State the cited lemma faithfully and handle \(a=0\) in the computation.

### `ex-a-matrix-over-f-two-with-no-eigenvalues`

1. **Location:** Fact [L1], used in verification step 2.1.

   **What is wrong:** [L1] attributes both fieldhood and the assertion that the only elements are \(0\) and \(1\) to `thm-z-mod-p-is-a-field`. Its Statement establishes only that \(\mathbb Z/p\) is a field for prime \(p\); it does not state the enumeration of the residue classes. Step 2.1 relies on that enumeration to make the root check exhaustive.

   **Evidence:** The complete on-disk Statement of `thm-z-mod-p-is-a-field` is: “For every prime \(p\), the operations of addition and multiplication on \(\mathbb Z/p\) make it a field.”

   **Severity:** nonfatal. Cite the quotient/residue-class definition or derive directly that \(\mathbb Z/2=\{0,1\}\).

2. **Location:** `research/frontier-12-batch-3.proof-contracts.json`, this item's `boundaries` row for `zero`.

   **What is wrong:** The row is marked `not_applicable` with the reason that no zero or vanishing parameter occurs. Verification step 2.1 explicitly evaluates \(\chi_A(0)\), and this is one of the two cases that makes the exhaustive proof work.

   **Evidence:** Step 2.1 reads, in part, “the only candidate roots are \(0\) and \(1\), and \(\chi_A(0)=1\).”

   **Severity:** nonfatal contract defect. Mark `zero` as checked and use step 2.1 as its evidence.

### `thm-canonical-map-to-double-dual-is-surjective-iff-finite-dimensional`

1. **Location:** Proof step 1.2 and its proof-contract derivation.

   **What is wrong:** The step says “Choice supplies an infinite Hamel basis \(B\),” but none of [L1]–[L4] states that every vector space has a basis. The contract maps this inference only to `given` and `choose`, even though obtaining a Hamel basis from Choice is the substantive Zorn/basis theorem.

   **Evidence:** The exact local result `thm-every-independent-set-extends-to-a-basis` is on disk and, applied to the empty independent set, supplies a basis. It is not in this item's `deps` or contract. Infinite-dimensionality then shows the resulting basis is infinite.

   **Severity:** nonfatal. Add and cite that theorem in step 1.2.

2. **Location:** `research/frontier-12-batch-3.proof-contracts.json`, this item's `empty` and `zero` boundary rows.

   **What is wrong:** The contract marks `empty` not applicable, although the finite-dimensional implication includes the zero space and uses an empty basis and empty sums. It marks `zero` checked but cites step 1.2, which assumes that \(V\) is infinite-dimensional and does not treat the zero space.

   **Evidence:** The applicable argument is step 1.1 with \(n=0\): \(V=V^*=V^{**}=0\), the basis and sums are empty, and \(J_V\) is surjective.

   **Severity:** nonfatal contract defect. Make the \(n=0\) reading explicit in step 1.1 and point both relevant rows there.

### `prop-transpose-preserves-identities-and-reverses-composition`

1. **Location:** Fact [L2], used in proof steps 1.2 and 1.3.

   **What is wrong:** [L2] says that composition is associative and identity maps are identities, citing `lem-composition-and-identity-linear-maps`. The cited Statement says only that identity maps are linear and composites of linear maps are linear. It does not state either formal composition law attributed to it.

   **Evidence:** The source Statement on disk is: “The identity map of a vector space is linear. If \(T\) and \(S\) are linear maps of compatible types, then \(S\circ T\) is linear.” Associativity is then used load-bearingly in step 1.3.

   **Severity:** nonfatal. Cite an exact function-composition law or prove the pointwise associativity/identity equations inline.

### `thm-matrix-of-transpose-is-the-transposed-matrix`

1. **Location:** Proof step 2.1.

   **What is wrong:** The first formula for the \((j,i)\)-entry is ill-typed: \(v_j^*(T^*(w_i^*))\) tries to apply the functional \(v_j^*\in V^*\) to the functional \(T^*(w_i^*)\in V^*\). It is not equivalent to the next, correct expression.

   **Evidence:** The coefficient of \(T^*(w_i^*)\) in the dual basis is \(T^*(w_i^*)(v_j)\), which the rest of the step correctly evaluates as \(w_i^*(T(v_j))=a_{ij}\).

   **Severity:** nonfatal. Delete the ill-typed expression and begin with \(T^*(w_i^*)(v_j)\).

### `thm-bilinear-forms-correspond-to-linear-maps-into-the-dual`

1. **Location:** Fact [L3], used in proof steps 1.2 and 2.1.

   **What is wrong:** [L3] says that linear maps form a vector space, citing `def-vector-space-of-linear-maps`. That Definition only defines the pointwise operations and explicitly says that closure and the vector-space axioms are proved in `prop-linear-maps-form-a-vector-space`; the proposition itself is not a dependency here.

   **Evidence:** The cited Definition's last sentence routes the claimed conclusion to `prop-linear-maps-form-a-vector-space`. The present theorem also calls the bilinear forms a vector space without separately defining or checking their pointwise vector-space structure; step 2.1 only observes that the displayed correspondence preserves the operations.

   **Severity:** nonfatal. Depend on/cite `prop-linear-maps-form-a-vector-space` and state the pointwise vector-space structure on bilinear forms, whose closure and axioms are immediate.

### `thm-change-of-basis-for-a-bilinear-form-is-congruence`

1. **Location:** Fact [L4].

   **What is wrong:** [L4] says that matrix multiplication “is associative and represents the relevant finite sums,” citing `thm-matrix-multiplication-laws`. Its Statement supplies associativity, units, distributivity, zero, and scalar laws; it does not state the row-column finite-sum formula or the interpretive claim that multiplication represents those sums.

   **Evidence:** The row-column formula is defined in the separate on-disk item `def-matrix-product-and-identity-matrix`. Only the associativity portion of [L4] is stated by the cited theorem.

   **Severity:** nonfatal citation defect. Shorten [L4] to the actual multiplication laws used in step 2.1, or cite the matrix-product definition for the finite-sum clause.

### `cor-rank-and-nondegeneracy-are-congruence-invariants`

1. **Location:** Fact [L3], used in proof steps 1.1 and 3.1.

   **What is wrong:** [L3] says that `prop-transpose-laws` both reverses products and sends an inverse to the inverse transpose. The cited Statement contains the transpose sum/scalar/involution/product identities, but no inverse-transpose conclusion.

   **Evidence:** Invertibility of \(P^{\mathsf T}\) follows by transposing \(PP^{-1}=I=P^{-1}P\), but that short derivation is absent from [L3] and the proof.

   **Severity:** nonfatal. State only the cited product law, then derive \((P^{\mathsf T})^{-1}=(P^{-1})^{\mathsf T}\) inline.

### `thm-change-of-basis-for-a-sesquilinear-form`

1. **Location:** Fact [L2], used in proof steps 1.1 and 2.2.

   **What is wrong:** [L2] says that matrix multiplication expands as finite row-column sums, citing `thm-matrix-multiplication-laws`. As above, that theorem's Statement gives algebraic laws but not the defining entry formula. The coordinate expansion is the fact needed to identify the sesquilinear matrix.

   **Evidence:** `def-matrix-product-and-identity-matrix`, not the cited theorem, is the on-disk item that defines the row-column sum.

   **Severity:** nonfatal citation defect. Cite the definition or derive the finite coordinate sum explicitly.

2. **Location:** `research/frontier-12-batch-3.proof-contracts.json`, this item's `iff-forward` boundary row.

   **What is wrong:** The Statement's iff is “\(H\) is Hermitian iff \(A=\sigma(A)^{\mathsf T}\).” The `iff-forward` row cites step 2.1, but that step proves only the basis-change formula \(P^{\mathsf T}A\sigma(P)\); it says nothing about Hermitian symmetry.

   **Evidence:** Step 1.2 is the actual forward implication, deriving \(A_{ij}=\sigma(A_{ji})\) from Hermitian symmetry. Step 2.2 is correctly used for the reverse implication.

   **Severity:** nonfatal contract defect. Point `iff-forward` to step 1.2.

### `thm-alternating-forms-have-a-symplectic-normal-form`

1. **Location:** Title, Statement, Fact [L2], and proof steps 1.1, 3.1, and 4.1.

   **What is wrong:** The item uses the singular notation \(\operatorname{rad}B\), while its cited definition `def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form` defines only \(\operatorname{rad}_L(B)\) and \(\operatorname{rad}_R(B)\). Fact [L2] inaccurately restates that source as if it defined one radical.

   **Evidence:** For an alternating form, [L1] gives skew-symmetry, so the left and right radicals do coincide: \(B(u,v)=0\) for every \(v\) iff \(B(v,u)=-B(u,v)=0\) for every \(v\). The item never records this inference or declares which common subspace `rad` denotes.

   **Severity:** nonfatal. Define \(\operatorname{rad}B:=\operatorname{rad}_L(B)=\operatorname{rad}_R(B)\) after the one-line skew-symmetry argument, and make [L2] state the cited definition faithfully.

### `ex-annihilator-of-a-coordinate-plane`

1. **Location:** Verification step 1.1 and its proof-contract derivation.

   **What is wrong:** Step 1.1 says that [L3] makes every functional on \(\mathbb R^3\) equal to \(ax^*+by^*+cz^*\). [L3] cites only `lem-standard-basis-of-f-n`, whose Statement makes the standard vectors a basis of \(\mathbb R^3\); it does not say that the coordinate functionals form a basis of the dual.

   **Evidence:** The exact required on-disk theorem is `thm-dual-family-is-a-basis-in-finite-dimension`. It is neither a dependency nor a contract citation for this example.

   **Severity:** nonfatal. Add that dependency/citation to step 1.1.

### `cex-symmetric-form-need-not-have-an-orthogonal-basis-in-characteristic-two`

1. **Location:** Fact [L1], used in counterexample step 1.1.

   **What is wrong:** [L1] attributes “\(\mathbb F_2\) is a field of characteristic \(2\)” to `thm-z-mod-p-is-a-field`. The cited Statement proves fieldhood for \(\mathbb Z/p\) but does not state its characteristic. The equality \(2=0\), used to prove alternation, is therefore not supplied by the named citation.

   **Evidence:** The complete source Statement contains no characteristic conclusion. The local characteristic definition/result can establish it in one line from \(1+1=0\) in \(\mathbb Z/2\).

   **Severity:** nonfatal. Add an exact characteristic citation or derive it from the residue-class arithmetic.

2. **Location:** `research/frontier-12-batch-3.proof-contracts.json`, this item's `degenerate` boundary row.

   **What is wrong:** The row is marked checked using step 1.1, but that step proves that the matrix has determinant \(1\) and the form is **nondegenerate**. It does not check a singular/radical case.

   **Evidence:** The counterexample deliberately shows failure of orthogonal diagonalization for a nondegenerate alternating form in characteristic \(2\).

   **Severity:** nonfatal contract defect. Mark `degenerate` not applicable (or supply a genuinely degenerate witness if one is intended).

### `cex-distinct-quadratic-forms-have-the-same-polar-form-in-characteristic-two`

1. **Location:** Fact [L1], used in counterexample step 1.1.

   **What is wrong:** [L1] again attributes both fieldhood and characteristic \(2\) to `thm-z-mod-p-is-a-field`, whose Statement contains only the field conclusion. Step 1.1 load-bearingly uses \(2xs=0\).

   **Evidence:** No other Fact in the item establishes \(1+1=0\) or \(\operatorname{char}\mathbb F_2=2\).

   **Severity:** nonfatal. Add the exact characteristic dependency or an inline residue-class calculation.

### `cex-positive-determinant-does-not-imply-positive-definite`

1. **Location:** `research/frontier-12-batch-3.proof-contracts.json`, this item's `degenerate` boundary row.

   **What is wrong:** The row calls the degenerate case checked by step 1.2, but the example has inertia \((1,2,0)\), hence zero radical dimension and nonzero determinant. Indefiniteness is not degeneracy.

   **Evidence:** The proof computes \(\det A=1\), and step 1.2 itself records the final inertia component as \(0\).

   **Severity:** nonfatal contract defect. Mark the boundary not applicable; the example is a nondegenerate indefinite matrix.

### `cex-congruence-need-not-preserve-trace-or-determinant`

1. **Location:** `research/frontier-12-batch-3.proof-contracts.json`, this item's `degenerate` boundary row.

   **What is wrong:** The row is marked checked by step 2.1, but that step explicitly says that both \(1\times1\) matrices have rank \(1\) and are nondegenerate. There is no degenerate case in the witness.

   **Evidence:** Both displayed matrices have nonzero determinant; the example isolates failure of trace and determinant invariance under congruence, not singular behavior.

   **Severity:** nonfatal contract defect. Mark `degenerate` not applicable.

## Contract and source-check summary

`node tools/proof-contract.mjs research/frontier-12-batch-3.proof-contracts.json --strict` reports `0 error(s), 0 warning(s), 59/59 item(s) checked`. The semantic comparisons above explain why that mechanical pass is insufficient: it verifies quote containment and mappings, not that a quoted Statement proves the attached Fact or that a boundary's named step treats the named case.

I also spot-checked the live external hypotheses in the cited primary notes: the split-characteristic-polynomial assumption used to generalize spectral mapping beyond Pinkham's complex-field presentation, characteristic not \(2\) for symmetric orthogonalization, the all-characteristic alternating normal form, real scalars for inertia, and the real symmetric hypothesis in Sylvester's criterion. I found no missing hypothesis or false mathematical conclusion in those items.

## Coverage

I read **fully**, without sampling, all 75 assigned items:

- `eigenvalues-eigenvectors-and-the-characteristic-polynomial` (23): `def-eigenvalue-eigenvector-eigenspace-and-spectrum`, `prop-eigenvalue-iff-shift-is-not-invertible`, `thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent`, `cor-an-operator-has-at-most-dimension-many-distinct-eigenvalues`, `def-characteristic-polynomial-of-a-matrix`, `lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients`, `lem-characteristic-polynomial-of-block-triangular-matrix`, `thm-characteristic-polynomial-is-similarity-invariant`, `def-characteristic-polynomial-of-an-operator`, `thm-spectrum-is-the-root-set-of-the-characteristic-polynomial`, `def-algebraically-closed-field`, `cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue`, `def-algebraic-and-geometric-multiplicity-of-an-eigenvalue`, `thm-trace-is-sum-of-eigenvalues`, `thm-determinant-is-product-of-eigenvalues`, `thm-geometric-multiplicity-does-not-exceed-algebraic-multiplicity`, `cor-a-simple-eigenvalue-has-one-dimensional-eigenspace`, `thm-products-ab-and-ba-have-the-same-characteristic-polynomial`, `def-polynomial-evaluation-at-an-endomorphism`, `thm-spectral-mapping-for-polynomials`, `cor-characteristic-polynomial-evaluation-has-only-zero-eigenvalues`, `thm-cayley-hamilton`, `cor-inverse-of-an-invertible-operator-is-a-polynomial-in-the-operator`.

- `eigenvalues-eigenvectors-and-the-characteristic-polynomial-examples` (7): `ex-characteristic-polynomial-and-eigenspaces-of-a-two-by-two-matrix`, `ex-real-quarter-turn-has-no-real-eigenvalues`, `ex-a-matrix-over-f-two-with-no-eigenvalues`, `ex-repeated-eigenvalue-with-one-dimensional-eigenspace`, `ex-repeated-eigenvalue-with-full-eigenspace`, `ex-cayley-hamilton-reduces-powers-of-a-two-by-two-matrix`, `fs-matrix-polynomial-substitution-is-a-ring-homomorphism`.

- `dual-spaces-bilinear-forms-and-inertia` (33): `def-algebraic-dual-and-linear-functional`, `def-dual-family-associated-to-a-basis`, `thm-dual-family-is-a-basis-in-finite-dimension`, `thm-dual-family-does-not-span-in-infinite-dimension`, `lem-linear-functionals-separate-points-from-subspaces`, `def-canonical-map-to-the-double-dual`, `thm-canonical-map-to-double-dual-is-injective`, `thm-canonical-map-to-double-dual-is-surjective-iff-finite-dimensional`, `def-annihilators-under-the-evaluation-pairing`, `thm-double-annihilator-and-annihilator-dimension`, `def-transpose-of-a-linear-map`, `prop-transpose-preserves-identities-and-reverses-composition`, `thm-transpose-kernel-range-and-rank`, `thm-matrix-of-transpose-is-the-transposed-matrix`, `def-bilinear-symmetric-skew-and-alternating-forms`, `thm-symmetric-alternating-relations-by-characteristic`, `thm-bilinear-forms-correspond-to-linear-maps-into-the-dual`, `def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form`, `thm-change-of-basis-for-a-bilinear-form-is-congruence`, `cor-rank-and-nondegeneracy-are-congruence-invariants`, `def-sesquilinear-and-hermitian-forms-over-a-field-with-involution`, `thm-change-of-basis-for-a-sesquilinear-form`, `def-quadratic-form-and-polar-form`, `thm-polarization-bijection-in-characteristic-not-two`, `thm-symmetric-bilinear-forms-have-an-orthogonal-basis`, `cor-symmetric-matrices-are-congruent-to-diagonal-matrices`, `cor-quadratic-forms-diagonalize-in-characteristic-not-two`, `thm-alternating-forms-have-a-symplectic-normal-form`, `def-definiteness-inertia-and-signature-data-over-the-reals`, `thm-sylvesters-law-of-inertia`, `cor-real-symmetric-bilinear-forms-are-classified-by-inertia`, `lem-schur-complement-congruence-and-determinant`, `thm-sylvesters-criterion-for-positive-definiteness`.

- `dual-spaces-bilinear-forms-and-inertia-examples` (12): `ex-dual-basis-and-transpose-on-f-three`, `ex-annihilator-of-a-coordinate-plane`, `ex-canonical-double-dual-map-for-polynomial-space-is-not-surjective`, `cex-distinct-subspaces-of-the-dual-can-have-the-same-preannihilator`, `ex-a-bilinear-form-neither-symmetric-nor-alternating`, `ex-congruence-diagonalization-and-inertia-of-a-real-quadratic-form`, `ex-symplectic-normal-form-of-a-degenerate-alternating-form`, `cex-symmetric-form-need-not-have-an-orthogonal-basis-in-characteristic-two`, `cex-distinct-quadratic-forms-have-the-same-polar-form-in-characteristic-two`, `cex-positive-determinant-does-not-imply-positive-definite`, `ex-sylvesters-criterion-for-a-three-by-three-matrix`, `cex-congruence-need-not-preserve-trace-or-determinant`.

For those items I read every numbered proof/verification/refutation step, all 59 proof contracts and their boundary rows, and every cited dependency's named Definition or Statement on disk (91 unique dependency items). I sampled no assigned item. Nothing in the assigned on-disk scope was unavailable or unchecked. I did not edit any file under `items/` or `library/`.
