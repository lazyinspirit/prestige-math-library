# Frontier 12, batch 3 — Beta scaffold notes

## Batch result

This scaffold contains 75 items: 23 on `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, 7 on its B page, 33 on `dual-spaces-bilinear-forms-and-inertia`, and 12 on its B page. Both A pages are below the owner’s 60-item ceiling, so **no page split is proposed**.

The canonical harvest records 116 source or canonical-result headings: 78 `included`, 26 `inline`, 6 `already-published`, 4 `deferred`, and 2 `out-of-scope`. Thus 110 headings are retained in the batch or already on the published spine and 6 are declined. Repeated headings from independent sources are deliberately counted separately.

The proof-contract artifact begins all 59 proof-bearing contracts. Each has a citation plan, a proof-strategy obligation, all eight boundary dispositions, and no inapplicable registered finite-smoke test. Exact quoted citations and the final numbered-step partition remain Step-5 synchronization work.

## Proposed A-page summaries

### `eigenvalues-eigenvectors-and-the-characteristic-polynomial`

Eigenvectors turn an endomorphism into scalar multiplication on distinguished directions, while eigenspaces gather all directions belonging to one eigenvalue. This page relates eigenvalues to singular shifts, proves independence for distinct eigenvalues, and defines the characteristic polynomial for matrices and operators, including the zero-dimensional convention. Similarity invariance makes the operator polynomial basis-independent, and its roots recover the spectrum over the base field.

The page distinguishes algebraic from geometric multiplicity and proves the latter cannot exceed the former. When the characteristic polynomial splits, its coefficients identify trace and determinant as the sum and product of the eigenvalues counted with multiplicity, while spectral mapping computes the full characteristic polynomial of $p(T)$. Polynomial evaluation then leads to a coefficient-comparison proof of Cayley-Hamilton from the adjugate identity. The companion page contrasts base fields and repeated-root eigenspaces and isolates the invalid matrix-substitution pseudo-proof.

### `dual-spaces-bilinear-forms-and-inertia`

The algebraic dual records all linear measurements of a vector space. This page builds dual families, explains why they cease to be bases in infinite dimension, proves the exact finite-dimensional boundary for the canonical map into the double dual, and develops annihilators and transposes. Choice-dependent separation arguments are labelled as such, and the matrix of a transpose is derived in dual bases.

Bilinear forms are then represented by matrices and basis change becomes congruence. The page treats symmetric, alternating, sesquilinear, Hermitian, and quadratic forms with explicit characteristic and involution conventions; it proves polarization only when two is invertible, diagonalizes symmetric forms, and gives the symplectic normal form for alternating forms. Over the reals it proves Sylvester’s law of inertia and the leading-principal-minor criterion by Schur complements, without importing the later spectral or inner-product theory.

## Per-page item lists

### `eigenvalues-eigenvectors-and-the-characteristic-polynomial` — 23 items

| # | id | kind | title |
|---:|---|---|---|
| 1 | `def-eigenvalue-eigenvector-eigenspace-and-spectrum` | definition | Eigenvalues, eigenvectors, eigenspaces $E_\lambda(T)=\ker(T-\lambda I)$, and the spectrum $\sigma_F(T)$ of an endomorphism |
| 2 | `prop-eigenvalue-iff-shift-is-not-invertible` | proposition | For a finite-dimensional space, $\lambda$ is an eigenvalue of $T$ if and only if $T-\lambda I$ is not invertible |
| 3 | `thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent` | theorem | Eigenvectors belonging to pairwise distinct eigenvalues are linearly independent |
| 4 | `cor-an-operator-has-at-most-dimension-many-distinct-eigenvalues` | corollary | An endomorphism of an $n$-dimensional space has at most $n$ distinct eigenvalues |
| 5 | `def-characteristic-polynomial-of-a-matrix` | definition | For $A\in M_n(F)$, the characteristic polynomial is $\chi_A(x)=\det(xI_n-A)$ when $n\geq1$, with $\chi_A(x)=1$ for the unique $0\times0$ matrix |
| 6 | `lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients` | lemma | $\chi_A(x)$ is monic of degree $n$; for $n\geq1$ its $x^{n-1}$ coefficient is $-\operatorname{tr}(A)$ and its constant coefficient is $(-1)^n\det(A)$, while $\chi_{0\times0}=1$ |
| 7 | `lem-characteristic-polynomial-of-block-triangular-matrix` | lemma | The characteristic polynomial of a block upper- or lower-triangular matrix is the product of the characteristic polynomials of its diagonal blocks |
| 8 | `thm-characteristic-polynomial-is-similarity-invariant` | theorem | Similar matrices have the same characteristic polynomial |
| 9 | `def-characteristic-polynomial-of-an-operator` | definition | The basis-independent characteristic polynomial $\chi_T$ of an endomorphism of a finite-dimensional space, including $\chi_T=1$ in dimension zero |
| 10 | `thm-spectrum-is-the-root-set-of-the-characteristic-polynomial` | theorem | For every finite-dimensional space, $\sigma_F(T)$ is exactly the set of roots in $F$ of $\chi_T$ |
| 11 | `def-algebraically-closed-field` | definition | An algebraically closed field: every nonconstant polynomial has a root in the field |
| 12 | `cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue` | corollary | Every endomorphism of a nonzero finite-dimensional vector space over an algebraically closed field has an eigenvalue |
| 13 | `def-algebraic-and-geometric-multiplicity-of-an-eigenvalue` | definition | Algebraic multiplicity as the exponent of $x-\lambda$ in $\chi_T$, and geometric multiplicity as $\dim E_\lambda(T)$ |
| 14 | `thm-trace-is-sum-of-eigenvalues` | theorem | If $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$ in $F[x]$, then $\operatorname{tr}(T)=\sum_{i<n}\lambda_i$: trace is the sum of the eigenvalues counted with algebraic multiplicity |
| 15 | `thm-determinant-is-product-of-eigenvalues` | theorem | If $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$ in $F[x]$, then $\det(T)=\prod_{i<n}\lambda_i$: determinant is the product of the eigenvalues counted with algebraic multiplicity |
| 16 | `thm-geometric-multiplicity-does-not-exceed-algebraic-multiplicity` | theorem | The geometric multiplicity of an eigenvalue does not exceed its algebraic multiplicity |
| 17 | `cor-a-simple-eigenvalue-has-one-dimensional-eigenspace` | corollary | An eigenvalue of algebraic multiplicity one has a one-dimensional eigenspace |
| 18 | `thm-products-ab-and-ba-have-the-same-characteristic-polynomial` | theorem | For $A,B\in M_n(F)$, the products $AB$ and $BA$ have the same characteristic polynomial |
| 19 | `def-polynomial-evaluation-at-an-endomorphism` | definition | Polynomial evaluation at an endomorphism: $p(T)=\sum_k a_kT^k$ |
| 20 | `thm-spectral-mapping-for-polynomials` | theorem | If $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$ in $F[x]$, then $\chi_{p(T)}(y)=\prod_{i<n}(y-p(\lambda_i))$ for every $p\in F[x]$: the eigenvalues of $p(T)$ are $p(\lambda_i)$, counted with algebraic multiplicity |
| 21 | `cor-characteristic-polynomial-evaluation-has-only-zero-eigenvalues` | corollary | If $\chi_T$ splits over $F$, every eigenvalue of $\chi_T(T)$ is $0$ |
| 22 | `thm-cayley-hamilton` | theorem | Cayley-Hamilton: every finite-dimensional endomorphism satisfies its characteristic polynomial, $\chi_T(T)=0$ |
| 23 | `cor-inverse-of-an-invertible-operator-is-a-polynomial-in-the-operator` | corollary | The inverse of an invertible finite-dimensional endomorphism is a polynomial in that endomorphism |

### `eigenvalues-eigenvectors-and-the-characteristic-polynomial-examples` — 7 items

| # | id | kind | title |
|---:|---|---|---|
| 1 | `ex-characteristic-polynomial-and-eigenspaces-of-a-two-by-two-matrix` | example | The matrix $\begin{pmatrix}2&1\\0&3\end{pmatrix}$ has characteristic polynomial $(x-2)(x-3)$ and two explicitly computed eigenspaces |
| 2 | `ex-real-quarter-turn-has-no-real-eigenvalues` | example | A quarter-turn of $\mathbb R^2$ has characteristic polynomial $x^2+1$ and no real eigenvalue |
| 3 | `ex-a-matrix-over-f-two-with-no-eigenvalues` | example | $\begin{pmatrix}0&1\\1&1\end{pmatrix}$ over $\mathbb F_2$ has characteristic polynomial $x^2+x+1$ and no eigenvalue in its base field |
| 4 | `ex-repeated-eigenvalue-with-one-dimensional-eigenspace` | example | $\begin{pmatrix}2&1\\0&2\end{pmatrix}$ has algebraic multiplicity two but geometric multiplicity one at $2$ |
| 5 | `ex-repeated-eigenvalue-with-full-eigenspace` | example | The scalar matrix $2I_2$ has algebraic and geometric multiplicity two at $2$ |
| 6 | `ex-cayley-hamilton-reduces-powers-of-a-two-by-two-matrix` | example | Cayley-Hamilton reduces every power of $\begin{pmatrix}1&1\\1&0\end{pmatrix}$ to a linear combination of $A$ and $I$ |
| 7 | `fs-matrix-polynomial-substitution-is-a-ring-homomorphism` | false-statement | FALSE: substituting a fixed matrix $A$ for $x$ defines a ring homomorphism $M_n(F[x])\to M_n(F)$ |

### `dual-spaces-bilinear-forms-and-inertia` — 33 items

| # | id | kind | title |
|---:|---|---|---|
| 1 | `def-algebraic-dual-and-linear-functional` | definition | Linear functionals and the algebraic dual $V^*=\mathcal L(V,F)$ |
| 2 | `def-dual-family-associated-to-a-basis` | definition | The dual family $(b^*)_{b\in B}$ associated to a Hamel basis $B$, defined by $b^*(c)=\delta_{bc}$ |
| 3 | `thm-dual-family-is-a-basis-in-finite-dimension` | theorem | The dual family of a finite basis is a basis of the dual space, with the same dimension |
| 4 | `thm-dual-family-does-not-span-in-infinite-dimension` | theorem | For an infinite Hamel basis, its dual family is linearly independent but does not span the algebraic dual |
| 5 | `lem-linear-functionals-separate-points-from-subspaces` | lemma | Assuming choice, if $v\notin U\leq V$, some $f\in V^*$ vanishes on $U$ and satisfies $f(v)=1$ |
| 6 | `def-canonical-map-to-the-double-dual` | definition | The canonical evaluation map $J_V:V\to V^{**}$ given by $J_V(v)(f)=f(v)$ |
| 7 | `thm-canonical-map-to-double-dual-is-injective` | theorem | Assuming choice, the canonical map $J_V:V\to V^{**}$ is linear and injective |
| 8 | `thm-canonical-map-to-double-dual-is-surjective-iff-finite-dimensional` | theorem | Assuming choice, $J_V:V\to V^{**}$ is surjective if and only if $V$ is finite-dimensional |
| 9 | `def-annihilators-under-the-evaluation-pairing` | definition | The annihilator $U^\circ\leq V^*$ of $U\leq V$ and the preannihilator ${}^\circ S\leq V$ of $S\leq V^*$ |
| 10 | `thm-double-annihilator-and-annihilator-dimension` | theorem | Assuming choice, ${}^\circ(U^\circ)=U$; in finite dimension, $\dim U^\circ=\dim V-\dim U$ |
| 11 | `def-transpose-of-a-linear-map` | definition | The transpose or algebraic adjoint $T^*:W^*\to V^*$, $T^*(g)=g\circ T$, of a linear map $T:V\to W$ |
| 12 | `prop-transpose-preserves-identities-and-reverses-composition` | proposition | Transpose is linear, sends identities to identities, and reverses composition: $(S\circ T)^*=T^*\circ S^*$ |
| 13 | `thm-transpose-kernel-range-and-rank` | theorem | Assuming choice, $\ker T^*=(\operatorname{im}T)^\circ$ and $\operatorname{im}T^*=(\ker T)^\circ$; in finite dimensions $\operatorname{rank}T^*=\operatorname{rank}T$ |
| 14 | `thm-matrix-of-transpose-is-the-transposed-matrix` | theorem | In dual bases, the matrix of $T^*$ is the transpose of the matrix of $T$ |
| 15 | `def-bilinear-symmetric-skew-and-alternating-forms` | definition | Bilinear forms, and symmetric, skew-symmetric, and alternating bilinear forms |
| 16 | `thm-symmetric-alternating-relations-by-characteristic` | theorem | Alternating forms are skew-symmetric; the converse holds when $\operatorname{char}F\neq2$, while in characteristic $2$ alternating forms are symmetric |
| 17 | `thm-bilinear-forms-correspond-to-linear-maps-into-the-dual` | theorem | Bilinear forms on $V$ correspond linearly and bijectively to linear maps $V\to V^*$ |
| 18 | `def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form` | definition | The matrix, left and right radicals, rank, and nondegeneracy of a bilinear form on a finite-dimensional space |
| 19 | `thm-change-of-basis-for-a-bilinear-form-is-congruence` | theorem | A basis change by $P$ changes the matrix of a bilinear form from $A$ to $P^{\mathsf T}AP$ |
| 20 | `cor-rank-and-nondegeneracy-are-congruence-invariants` | corollary | Congruent matrices have the same rank; hence rank and nondegeneracy of a bilinear form are basis-independent |
| 21 | `def-sesquilinear-and-hermitian-forms-over-a-field-with-involution` | definition | Sesquilinear and Hermitian forms over a field with an involution, using the convention linear in the first variable |
| 22 | `thm-change-of-basis-for-a-sesquilinear-form` | theorem | For the linear-first convention, a basis change by $P$ sends a sesquilinear matrix $A$ to $P^{\mathsf T}A\,\sigma(P)$; Hermitian forms satisfy $A=\sigma(A)^{\mathsf T}$ |
| 23 | `def-quadratic-form-and-polar-form` | definition | A quadratic form $q$ in arbitrary characteristic and its polar form $b_q(u,v)=q(u+v)-q(u)-q(v)$ |
| 24 | `thm-polarization-bijection-in-characteristic-not-two` | theorem | If $\operatorname{char}F\neq2$, quadratic forms and symmetric bilinear forms correspond by $q(v)=B(v,v)$ and $B(u,v)=\tfrac12 b_q(u,v)$ |
| 25 | `thm-symmetric-bilinear-forms-have-an-orthogonal-basis` | theorem | Every symmetric bilinear form on a finite-dimensional space over a field of characteristic not $2$ has an orthogonal basis |
| 26 | `cor-symmetric-matrices-are-congruent-to-diagonal-matrices` | corollary | Over a field of characteristic not $2$, every symmetric matrix is congruent to a diagonal matrix |
| 27 | `cor-quadratic-forms-diagonalize-in-characteristic-not-two` | corollary | Over a field of characteristic not $2$, every quadratic form has diagonal coordinates $q(x)=a_1x_1^2+\cdots+a_nx_n^2$ |
| 28 | `thm-alternating-forms-have-a-symplectic-normal-form` | theorem | Every alternating form on a finite-dimensional space has a basis of symplectic pairs followed by a basis of its radical; in particular its rank is even |
| 29 | `def-definiteness-inertia-and-signature-data-over-the-reals` | definition | Positive and negative definiteness, the inertia $(p,q,r)$, rank $p+q$, and signature $p-q$ of a real symmetric bilinear or quadratic form |
| 30 | `thm-sylvesters-law-of-inertia` | theorem | Sylvester's law of inertia: every real symmetric form is congruent to $\operatorname{diag}(I_p,-I_q,0_r)$, and $(p,q,r)$ is unique |
| 31 | `cor-real-symmetric-bilinear-forms-are-classified-by-inertia` | corollary | Two real symmetric bilinear forms are congruent if and only if they have the same inertia |
| 32 | `lem-schur-complement-congruence-and-determinant` | lemma | For symmetric $M=\begin{pmatrix}A&B\\B^{\mathsf T}&C\end{pmatrix}$ with $A$ invertible, a block-unitriangular congruence gives $A\oplus(C-B^{\mathsf T}A^{-1}B)$ and factors $\det M$ |
| 33 | `thm-sylvesters-criterion-for-positive-definiteness` | theorem | Sylvester's criterion: a real symmetric $n\times n$ matrix with $n\geq1$ is positive definite if and only if all leading principal minors are positive |

### `dual-spaces-bilinear-forms-and-inertia-examples` — 12 items

| # | id | kind | title |
|---:|---|---|---|
| 1 | `ex-dual-basis-and-transpose-on-f-three` | example | A dual basis and transpose computed for a linear map on $\mathbb F_3^2$ |
| 2 | `ex-annihilator-of-a-coordinate-plane` | example | The annihilator of the coordinate plane $z=0$ in $\mathbb R^3$ is the line spanned by the third coordinate functional |
| 3 | `ex-canonical-double-dual-map-for-polynomial-space-is-not-surjective` | example | For the polynomial space $F[x]$, the canonical map to the algebraic double dual is injective but not surjective |
| 4 | `cex-distinct-subspaces-of-the-dual-can-have-the-same-preannihilator` | counterexample | In infinite dimension, distinct subspaces of $V^*$ can have the same preannihilator |
| 5 | `ex-a-bilinear-form-neither-symmetric-nor-alternating` | example | The form on $\mathbb R^2$ with matrix $\begin{pmatrix}0&1\\0&0\end{pmatrix}$ is neither symmetric nor alternating |
| 6 | `ex-congruence-diagonalization-and-inertia-of-a-real-quadratic-form` | example | $q(x,y)=2x^2+4xy+5y^2=2(x+y)^2+3y^2$ has inertia $(2,0,0)$ |
| 7 | `ex-symplectic-normal-form-of-a-degenerate-alternating-form` | example | A rank-two alternating form on $\mathbb R^3$ has one symplectic pair and a one-dimensional radical |
| 8 | `cex-symmetric-form-need-not-have-an-orthogonal-basis-in-characteristic-two` | counterexample | In characteristic $2$, a symmetric bilinear form need not have an orthogonal basis |
| 9 | `cex-distinct-quadratic-forms-have-the-same-polar-form-in-characteristic-two` | counterexample | In characteristic $2$, distinct quadratic forms can have the same polar form |
| 10 | `cex-positive-determinant-does-not-imply-positive-definite` | counterexample | Positive determinant does not imply positive definiteness |
| 11 | `ex-sylvesters-criterion-for-a-three-by-three-matrix` | example | Sylvester's criterion verifies positive definiteness for a concrete symmetric $3\times3$ matrix |
| 12 | `cex-congruence-need-not-preserve-trace-or-determinant` | counterexample | Congruence need not preserve trace or determinant: the real $1\times1$ matrices $[1]$ and $[4]$ are congruent |

## Step-4 prose-scaffold amendments requested

1. In `research/plan-algebra-track-expansion.md`, replace the two table rows

```text
| 82 | eigenvalues-eigenvectors-and-the-characteristic-polynomial | eigenvalue/vector/space, chi_A(x)=det(xI-A) in F[x], similarity-invariance, algebraic and geometric multiplicity |
| 84 | diagonalisation-and-the-minimal-polynomial | diagonalisable, the minimal polynomial as the monic generator of the annihilator ideal, mu divides chi, Cayley-Hamilton, diagonalisable iff mu splits with distinct roots, primary decomposition |
```

with the same rows after adding **trace and determinant as the sum and product of the eigenvalues when the characteristic polynomial splits**, **polynomial spectral mapping and its zero-spectrum corollary**, **Cayley-Hamilton by the adjugate/coefficient-comparison proof**, and **polynomial evaluation at an endomorphism** to the first row, and deleting **Cayley-Hamilton** from the second. The dispatch expressly moves this theorem to order 86 in the current plan; leaving both prose rows unchanged would assign one theorem to two pages.

2. In `research/plan-algebra-track.md`, append to the LA-8 A paragraph: “When the characteristic polynomial splits, trace and determinant are the sum and product of the eigenvalues counted with multiplicity; polynomial spectral mapping and its zero-spectrum corollary; polynomial evaluation at an endomorphism; Cayley-Hamilton by the adjugate identity over F[x], with the zero-dimensional case stated separately; the inverse of an invertible endomorphism is a polynomial in it.” Append to its B paragraph: “the false statement that substituting A for x is a ring homomorphism on matrix-coefficient polynomials.” This makes the dispatch’s new scope applyable rather than implicit.

3. In the same file, change the heading `Diagonalisation, the Minimal Polynomial and Cayley-Hamilton` to `Diagonalisation and the Minimal Polynomial`; delete the standalone `**Cayley-Hamilton**;` from its A paragraph; and replace its trap paragraph with: “Cayley-Hamilton is already proved on LA-8. This page may use it to derive minimal-polynomial consequences but must not duplicate its theorem or proof.” The order-88 page remains otherwise untouched and unscaffolded here.

4. In the LA-11 paragraph, add: “the dual family fails to span the algebraic dual for an infinite Hamel basis; the canonical double-dual map is onto exactly in finite dimension, assuming Choice; sesquilinear and Hermitian forms over a field with involution; symplectic normal form and even rank for alternating forms; all-characteristic quadratic forms, with polarization restricted to characteristic not 2.” These are canonical source results omitted by the older prose summary.

No edit to `plan-spec.json` is proposed by this Beta. The orchestrator must reconcile the existing order-88 title that still names Cayley-Hamilton when applying the run-specific dispatch.

## Scope, fields, and conventions

- Characteristic polynomials use `det(xI-A)`, not `det(A-xI)`. The matrix definition assigns the unique 0-by-0 matrix the polynomial 1 because the published matrix determinant starts at positive size. This closes the zero-dimensional operator, spectrum, Cayley-Hamilton, and inverse-polynomial boundaries locally.
- The trace-sum, determinant-product, Spectral Mapping, and zero-spectrum results state the factorisation hypothesis $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$ explicitly. They therefore work over any base field in which the characteristic polynomial splits, without importing algebraic closure or the later general triangularisation theorem; repeated roots and repeated values after applying $p$ are counted with algebraic multiplicity.
- “Algebraically closed” is defined for a general field, but the page does not assert that the complex numbers are algebraically closed. That result remains at order 125. A nonzero finite-dimensional operator gets an eigenvalue only under the algebraically-closed-field hypothesis.
- Diagonalisation and the minimal polynomial remain on order 88. They are not defined, cited forward, or used here.
- The infinite-dimensional dual and double-dual results use Hamel bases and therefore state the Choice cost inherited from the published basis-extension theorem.
- Sesquilinearity is linear in the first variable and involution-semilinear in the second. Pinkham notes that physicists commonly reverse these slots; the matrix formula here is tied to the declared linear-first convention.
- Polarization and symmetric-form diagonalization require characteristic not 2. The all-characteristic definition of a quadratic form remains meaningful, and the B page shows polarization losing injectivity in characteristic 2.
- The alternating normal form is valid in every characteristic; in characteristic 2 its 2-by-2 blocks are symmetric as well as alternating.
- Inertia and sign normalization are stated over the reals. Although invariant positive/negative indices make sense more generally, classification by signs alone over an arbitrary ordered field can fail when positive elements are not squares.
- Conrad treats the zero bilinear space as having no orthogonal basis under a nonempty-basis convention. The library’s published basis convention gives the zero space the empty basis, so the theorem includes that case.
- Inner products, norms, Gram-Schmidt, projections, and Hilbert-style adjoints remain on order 94. No item here cites that later page.
- Orders 86 and 92 share only published prerequisites and never cite one another.

## Long-proof decomposition and corollary passes

The proof-decomposition pass identified these substantive chains:

- Geometric versus algebraic multiplicity uses the earlier block-triangular characteristic-polynomial lemma.
- Trace and determinant as eigenvalue sum and product compare the $x^{n-1}$ and constant coefficients of the split characteristic polynomial with the already scaffolded extreme-coefficient lemma, including the empty sum and product in dimension zero.
- The AB/BA theorem uses explicit determinant-one block eliminations and the block-triangular lemma; it does not smuggle in a Schur formula requiring division by x.
- Spectral mapping is proved by induction on dimension: split off one eigenline, use a choice-free finite-dimensional basis extension, track polynomial evaluation through the resulting block upper-triangular matrix, and retain the full characteristic-polynomial identity so coalescing values receive the correct combined multiplicity. Its zero-spectrum corollary applies the theorem to $p=\chi_T$ before Cayley-Hamilton strengthens the conclusion to $\chi_T(T)=0$.
- Cayley-Hamilton is decomposed into the published adjugate identity over F[x], a degree bound for adjugate entries, coefficient comparison, and a telescoping matrix recurrence. The false substitution map is isolated on the B page.
- The infinite double-dual theorem uses the earlier separation lemma and the dual-family nonspanning theorem. The companion’s equal-preannihilator counterexample records the asymmetric infinite-dimensional failure.
- The transpose range theorem makes the extension of a functional from im(T) to W explicit and records its Choice cost.
- Symmetric-form diagonalization splits off one nonisotropic line at a time; alternating-form normal form splits off one nondegenerate 2-plane at a time.
- Sylvester’s law separates existence by diagonalization and square-root normalization from uniqueness by maximal positive and negative subspace dimensions.
- Sylvester’s criterion uses the earlier Schur-complement congruence and determinant factorization, then induction on size. It does not invoke the spectral theorem.

The corollary pass added the dimension bound on distinct eigenvalues, the algebraically-closed eigenvalue corollary, the trace-sum and determinant-product consequences of a split characteristic polynomial, the simple-eigenvalue corollary, the zero-spectrum consequence of spectral mapping, the inverse-polynomial corollary, congruence invariance of rank/nondegeneracy, diagonalization of symmetric matrices and quadratic forms, and classification of real symmetric forms by inertia. Both passes were performed; no further split or source-backed corollary survived the dependency and page-boundary checks.

## Forward references and cross-batch dependencies

There are no forward-reference wikilinks, no cross-batch dependency, and no dependency between the two A/B pairs in this batch. Later subjects are named only as scope boundaries in these notes and eventual prose Remarks. Every B-page item is a leaf and depends only on its A page or published content.

The collision check was:

```sh
rg -n --fixed-strings '<each proposed id>' items research/plan-spec.json
```

It returned no hit for any of the 75 proposed ids, including the four items added from Pinkham section 12.3 and the counterexample added after the Conrad harvest.

## Canonical-coverage harvest and declines

The coverage checklist has four independent treatments for order 86 and four for order 92, with a textbook in each pair. Pinkham section 12.3 is now harvested continuously between sections 12.2 and 12.4, and Theorem 12.1.3 is mapped only to the triangular characteristic-polynomial result it actually states; Axler Theorem 5.11 supplies the distinct-eigenvalue independence theorem in its own source row. The Stacks Project is classified as a `monograph`, uniformly with D9. The six declined headings most likely to be challenged are:

- Pinkham Example 12.1.9 and the immediate post-Cayley-Hamilton minimal-polynomial consequence — deferred because their distinguishing machinery is the later order-88 minimal polynomial.
- Khovanov’s diagonalizability result and the minimal-polynomial part of Remark 6.5 — deferred to the same declared order-88 subject, not because their proofs are inconvenient.
- Pinkham’s definite-integration functional — out of scope because it requires later integration theory and adds no dual-space boundary.
- Conrad’s polynomial bilinear-form example — out of scope because it repeats bilinearity without adding a result beyond the retained infinite polynomial dual example.

No locally buildable prerequisite theorem was declined. The source harvest itself caused the addition of the infinite-dual equal-preannihilator counterexample.

## Web source ledger

| source and locator read | supports | convention or licensing note |
|---|---|---|
| [Pinkham, Linear Algebra](https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf), 6.1, 6.4-6.6, 7.7-7.8, 12.1-12.4 | finite duality, transpose, inertia, sesquilinearity, characteristic polynomial, multiplicities, trace and determinant as eigenvalue sum and product, polynomial spectral mapping, AB/BA, Cayley-Hamilton | Full textbook draft; proofs and statements are paraphrased. Pinkham states section 12.3 over $\mathbb C$; the scaffold exposes the exact weaker hypothesis its algebraic proof needs, namely that $\chi_T$ splits over $F$. |
| [Khovanov, Linear Algebra II notes](https://www.math.columbia.edu/~khovanov/MA2_2022/files/lin_alg.pdf), section 6, pp. 11-15 | eigenvalues over a general field, algebraic closure, polynomial evaluation, Cayley-Hamilton, trace | Full lecture-note set; paraphrase only. |
| [Stacks Project, Lemma 10.16.1](https://stacks.math.columbia.edu/tag/05G6) | ring-general Cayley-Hamilton corroboration | Classified uniformly as a `monograph` under D9. CC BY-SA; only the mathematical route is used, not copied prose. |
| [Paul Garrett, Cayley-Hamilton notes](https://www-users.cse.umn.edu/~garrett/m/algebra/notes_2023-24/26.pdf) and [Howard Haber, characteristic-polynomial notes](https://scipp.ucsc.edu/~haber/ph116A/charpoly_11.pdf) | the classical invalid substitution pseudo-proof | The counterexample is newly computed; the warning is literature-backed. |
| [Axler, Linear Algebra Done Right, 4th ed.](https://linear.axler.net/LADR4e.pdf), Theorem 5.11, 9A, and 9C | independence of eigenvectors for distinct eigenvalues; matrix/forms, characteristic-polynomial, and Cayley-Hamilton cross-checks | CC BY-NC 4.0 from the official landing page; paraphrase only. Axler’s Cayley-Hamilton proof is over R/C, so it is not the primary general-field proof. |
| [Keith Conrad, Infinite-Dimensional Dual Spaces](https://kconrad.math.uconn.edu/blurbs/linmultialg/dualspaceinfinite.pdf), Theorem 1 and Corollary 2 | infinite dual size, double dual, asymmetric annihilator failure | No reuse licence was relied upon; statements and proofs are independently paraphrased. |
| [Keith Conrad, Bilinear Forms](https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf), selected ranges in sections 1, 4-7 | characteristic 2, orthogonal bases, symplectic bases, quadratic polarization | No reuse licence was relied upon; paraphrase only. The empty-basis convention differs and is recorded above. |
| [Jeffrey Kuan, positive definite matrices](https://math.berkeley.edu/~jkuan/Lecture_July31.pdf), final paragraph of p. 3 | Sylvester’s leading-principal-minor criterion | Lecture notes; proof is rebuilt locally through the scaffolded Schur-complement lemma. |
| [Demmel, Applied Numerical Linear Algebra lecture 14](https://people.eecs.berkeley.edu/~demmel/cs267/lecture14.html) | inverse as a polynomial consequence of Cayley-Hamilton | Corroborating source; the corollary is proved directly from the local theorem. |

For Pinkham, Khovanov, Conrad, Garrett, Haber, Berkeley, and Demmel no broad content licence was needed: the scaffold records mathematical facts, cites the source, and plans original proof prose. No restricted source text is copied.

## Published dependencies opened and confidence routes

Every dependency below was opened from `items/<id>.md` on disk, including its exact Definition or Statement and component provenance. There is no legacy-unclassified dependency and no dependency with an `ai-generated` Statement. Several published proofs are `ai-generated`; only their independently checked Statements are load-bearing here.

| published id | on-disk statement / proof provenance | confidence route |
|---|---|---|
| `cor-cauchy-reals-lub-complete` | literature-derived / ai-altered | established-from-knowledge — exact complete-ordered-field conclusion and real model checked on disk |
| `def-coordinate-column-and-matrix-of-a-linear-map` | literature-derived / not-applicable | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `def-determinant-of-a-linear-operator` | literature-derived / not-applicable | source-checked — Axler, Linear Algebra Done Right, 4th ed., as linked in the item, with the separate zero-dimensional value checked on disk |
| `def-determinant-of-a-square-matrix` | literature-derived / not-applicable | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `def-dimension` | ai-altered / not-applicable | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `def-field` | ai-altered / not-applicable | established-from-knowledge — exact on-disk statement and conventions independently checked |
| `def-kernel-and-image-of-a-linear-map` | literature-derived / not-applicable | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `def-linear-basis` | ai-altered / not-applicable | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `def-linear-independence` | ai-altered / not-applicable | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `def-linear-isomorphism-and-invertible-linear-map` | literature-derived / not-applicable | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `def-linear-map` | literature-derived / not-applicable | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `def-linear-subspace` | literature-derived / ai-altered | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `def-matrix-minors-cofactors-and-adjugate` | ai-altered / not-applicable | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `def-polynomial-degree-leading-coefficient-and-monic` | ai-altered / not-applicable | source-checked — Donaldson, Math 120B sections 22-23, as linked in the item |
| `def-polynomial-evaluation-and-root` | ai-altered / not-applicable | source-checked — Donaldson, Math 120B sections 22-23, as linked in the item |
| `def-polynomial-ring-over-a-commutative-ring` | literature-derived / not-applicable | source-checked — Donaldson, Math 120B sections 22-23, as linked in the item |
| `def-rank-and-nullity` | literature-derived / not-applicable | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `def-ring-characteristic` | ai-altered / not-applicable | established-from-knowledge — exact on-disk statement and conventions independently checked |
| `def-ring-matrix-product-identity-and-transpose` | ai-altered / not-applicable | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `def-similar-matrices` | literature-derived / not-applicable | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `def-trace-of-an-endomorphism` | literature-derived / not-applicable | source-checked — Axler, Linear Algebra Done Right, Definition 8.51, as linked in the item, including the empty-basis trace convention |
| `def-trace-of-a-square-matrix` | literature-derived / not-applicable | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `def-transpose-of-a-matrix` | literature-derived / not-applicable | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `def-vector-space` | ai-altered / not-applicable | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `def-vector-space-of-linear-maps` | literature-derived / not-applicable | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `lem-composition-and-identity-linear-maps` | literature-derived / ai-generated | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `lem-of-sign-rules` | ai-altered / ai-generated | established-from-knowledge — exact on-disk statement and conventions independently checked |
| `lem-of-square-positive` | literature-derived / ai-altered | established-from-knowledge — exact on-disk statement and conventions independently checked |
| `lem-standard-basis-of-f-n` | ai-altered / ai-generated | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `prop-field-and-ring-matrix-interfaces-agree` | ai-altered / ai-generated | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `prop-polynomial-coefficient-sequences-and-trimmed-lists-agree` | ai-altered / ai-altered | source-checked — Donaldson, Math 120B sections 22-23, as linked in the item |
| `prop-transpose-laws` | literature-derived / ai-generated | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `thm-adjugate-identity-over-a-commutative-ring` | ai-altered / ai-altered | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `thm-coordinate-action-of-a-linear-map` | literature-derived / ai-altered | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `thm-determinant-multiplicative` | literature-derived / ai-altered | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `thm-determinant-of-a-triangular-matrix` | literature-derived / ai-altered | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `thm-dimension-formula` | ai-altered / ai-altered | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `thm-dimension-of-a-linear-subspace` | ai-altered / ai-generated | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `thm-every-independent-set-extends-to-a-basis` | ai-altered / ai-altered | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `thm-linear-kernel-image-and-injectivity` | literature-derived / ai-altered | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `thm-matrix-multiplication-laws` | literature-derived / ai-generated | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `thm-matrix-of-a-composite-is-the-product` | literature-derived / ai-altered | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `thm-matrix-representation-is-a-vector-space-isomorphism` | literature-derived / ai-altered | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `thm-of-square-roots` | ai-altered / ai-altered | established-from-knowledge — exact on-disk statement and conventions independently checked |
| `thm-operator-invertible-iff-determinant-nonzero` | literature-derived / ai-altered | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `thm-polynomial-ring-is-a-commutative-ring` | literature-derived / ai-altered | source-checked — Donaldson, Math 120B sections 22-23, as linked in the item |
| `thm-polynomial-ring-over-a-field-is-a-ufd` | literature-derived / literature-derived | source-checked — Donaldson, Math 120B sections 22-23, as linked in the item |
| `thm-rank-nullity` | literature-derived / ai-altered | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `thm-reals-ordered-field` | ai-altered / ai-altered | established-from-knowledge — exact on-disk statement and conventions independently checked |
| `thm-ring-matrix-arithmetic-laws` | literature-derived / ai-altered | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `thm-similarity-is-an-equivalence-relation-and-models-basis-change` | ai-altered / ai-generated | source-checked — Pinkham, chapters 5/11/12, and the Waterloo determinant notes linked in the item |
| `thm-unique-coordinates-with-respect-to-an-ordered-basis` | ai-altered / ai-altered | source-checked — Axler, Linear Algebra Done Right, chapters 1-3, and Pinkham chapter 6 |
| `thm-z-mod-p-is-a-field` | literature-derived / ai-altered | source-checked — Keith Conrad, Modular Arithmetic, linked in the item |

The particularly delicate route is Cayley-Hamilton: `def-matrix-minors-cofactors-and-adjugate` and `thm-adjugate-identity-over-a-commutative-ring` were checked against the positive-size hypothesis on disk, so the scaffold handles dimension zero separately and invokes them only for n at least 1. Likewise `thm-of-square-roots` requires a complete ordered field, so `cor-cauchy-reals-lub-complete` is cited explicitly before applying it to the reals.

No opened published dependency contains an unambiguous false load-bearing statement. Therefore no narrow published repair is proposed.

## Planned component provenance

| item | statement | proof | rationale |
|---|---|---|---|
| `def-eigenvalue-eigenvector-eigenspace-and-spectrum` | literature-derived | not-applicable | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `prop-eigenvalue-iff-shift-is-not-invertible` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent` | literature-derived | ai-altered | Axler, Theorem 5.11 supplies this statement independently of Pinkham 12.1.3; the proof plan is adapted to the local finite-dimensional interface. |
| `cor-an-operator-has-at-most-dimension-many-distinct-eigenvalues` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `def-characteristic-polynomial-of-a-matrix` | ai-altered | not-applicable | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `lem-characteristic-polynomial-of-block-triangular-matrix` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `thm-characteristic-polynomial-is-similarity-invariant` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `def-characteristic-polynomial-of-an-operator` | ai-altered | not-applicable | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `thm-spectrum-is-the-root-set-of-the-characteristic-polynomial` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `def-algebraically-closed-field` | literature-derived | not-applicable | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `def-algebraic-and-geometric-multiplicity-of-an-eigenvalue` | literature-derived | not-applicable | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `thm-trace-is-sum-of-eigenvalues` | ai-altered | ai-altered | Pinkham 12.3.1 states the result over the complex numbers; the authored statement instead works over an arbitrary field under the exact split-characteristic-polynomial hypothesis, so Alpha C14 requires `ai-altered`. The proof compares the published trace interface with the extreme-coefficient identity. |
| `thm-determinant-is-product-of-eigenvalues` | ai-altered | ai-altered | Pinkham 12.3.2 states the result over the complex numbers; the authored statement instead works over an arbitrary field under the exact split-characteristic-polynomial hypothesis, so Alpha C14 requires `ai-altered`. The proof compares the published determinant interface with the constant-coefficient identity. |
| `thm-geometric-multiplicity-does-not-exceed-algebraic-multiplicity` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `cor-a-simple-eigenvalue-has-one-dimensional-eigenspace` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `thm-products-ab-and-ba-have-the-same-characteristic-polynomial` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `def-polynomial-evaluation-at-an-endomorphism` | literature-derived | not-applicable | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `thm-spectral-mapping-for-polynomials` | ai-altered | ai-altered | Pinkham 12.3.3 supplies spectral mapping at the eigenvalue level; the authored statement gives the stronger characteristic-polynomial identity with algebraic multiplicities under an explicit split hypothesis, so Alpha C14 requires `ai-altered`. The proof uses invariant-eigenline induction and the local block-triangular interface. |
| `cor-characteristic-polynomial-evaluation-has-only-zero-eigenvalues` | literature-derived | ai-altered | Pinkham 12.3.4 supplies the corollary; the scaffold derives it transparently by applying spectral mapping to the characteristic polynomial. |
| `thm-cayley-hamilton` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `cor-inverse-of-an-invertible-operator-is-a-polynomial-in-the-operator` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `ex-characteristic-polynomial-and-eigenspaces-of-a-two-by-two-matrix` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `ex-real-quarter-turn-has-no-real-eigenvalues` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `ex-a-matrix-over-f-two-with-no-eigenvalues` | ai-generated | ai-generated | New non-load-bearing companion witness; all arithmetic is finite and must be checked explicitly at authoring. |
| `ex-repeated-eigenvalue-with-one-dimensional-eigenspace` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `ex-repeated-eigenvalue-with-full-eigenspace` | literature-derived | ai-altered | Pinkham 12.1-12.4 and Khovanov section 6 support the statement; the proof plan is adapted to the published determinant and polynomial interfaces. |
| `ex-cayley-hamilton-reduces-powers-of-a-two-by-two-matrix` | ai-generated | ai-generated | New non-load-bearing companion witness; all arithmetic is finite and must be checked explicitly at authoring. |
| `fs-matrix-polynomial-substitution-is-a-ring-homomorphism` | literature-derived | ai-altered | Garrett and Haber document the classical false substitution argument; the witness and refutation are adapted to the library matrix convention. |
| `def-algebraic-dual-and-linear-functional` | literature-derived | not-applicable | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `def-dual-family-associated-to-a-basis` | literature-derived | not-applicable | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `thm-dual-family-is-a-basis-in-finite-dimension` | literature-derived | ai-altered | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `thm-dual-family-does-not-span-in-infinite-dimension` | literature-derived | ai-altered | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `lem-linear-functionals-separate-points-from-subspaces` | literature-derived | ai-altered | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `def-canonical-map-to-the-double-dual` | literature-derived | not-applicable | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `thm-canonical-map-to-double-dual-is-injective` | literature-derived | ai-altered | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `thm-canonical-map-to-double-dual-is-surjective-iff-finite-dimensional` | literature-derived | ai-altered | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `def-annihilators-under-the-evaluation-pairing` | ai-altered | not-applicable | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `thm-double-annihilator-and-annihilator-dimension` | literature-derived | ai-altered | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `def-transpose-of-a-linear-map` | literature-derived | not-applicable | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `prop-transpose-preserves-identities-and-reverses-composition` | literature-derived | ai-altered | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `thm-transpose-kernel-range-and-rank` | literature-derived | ai-altered | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `thm-matrix-of-transpose-is-the-transposed-matrix` | literature-derived | ai-altered | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `def-bilinear-symmetric-skew-and-alternating-forms` | literature-derived | not-applicable | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `thm-symmetric-alternating-relations-by-characteristic` | literature-derived | ai-altered | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `thm-bilinear-forms-correspond-to-linear-maps-into-the-dual` | literature-derived | ai-altered | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form` | literature-derived | not-applicable | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `thm-change-of-basis-for-a-bilinear-form-is-congruence` | literature-derived | ai-altered | Pinkham 7.7 and the Berkeley criterion notes support the statement; the proof plan avoids the later spectral theorem. |
| `cor-rank-and-nondegeneracy-are-congruence-invariants` | literature-derived | ai-altered | Pinkham 7.7 and the Berkeley criterion notes support the statement; the proof plan avoids the later spectral theorem. |
| `def-sesquilinear-and-hermitian-forms-over-a-field-with-involution` | ai-altered | not-applicable | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `thm-change-of-basis-for-a-sesquilinear-form` | literature-derived | ai-altered | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `def-quadratic-form-and-polar-form` | literature-derived | not-applicable | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `thm-polarization-bijection-in-characteristic-not-two` | literature-derived | ai-altered | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `thm-symmetric-bilinear-forms-have-an-orthogonal-basis` | literature-derived | ai-altered | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `cor-symmetric-matrices-are-congruent-to-diagonal-matrices` | literature-derived | ai-altered | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `cor-quadratic-forms-diagonalize-in-characteristic-not-two` | literature-derived | ai-altered | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `thm-alternating-forms-have-a-symplectic-normal-form` | literature-derived | ai-altered | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `def-definiteness-inertia-and-signature-data-over-the-reals` | literature-derived | not-applicable | Pinkham 7.7 and the Berkeley criterion notes support the statement; the proof plan avoids the later spectral theorem. |
| `thm-sylvesters-law-of-inertia` | literature-derived | ai-altered | Pinkham 7.7 and the Berkeley criterion notes support the statement; the proof plan avoids the later spectral theorem. |
| `cor-real-symmetric-bilinear-forms-are-classified-by-inertia` | literature-derived | ai-altered | Pinkham 7.7 and the Berkeley criterion notes support the statement; the proof plan avoids the later spectral theorem. |
| `lem-schur-complement-congruence-and-determinant` | literature-derived | ai-altered | Pinkham 7.7 and the Berkeley criterion notes support the statement; the proof plan avoids the later spectral theorem. |
| `thm-sylvesters-criterion-for-positive-definiteness` | literature-derived | ai-altered | Pinkham 7.7 and the Berkeley criterion notes support the statement; the proof plan avoids the later spectral theorem. |
| `ex-dual-basis-and-transpose-on-f-three` | ai-generated | ai-generated | New non-load-bearing companion witness; all arithmetic is finite and must be checked explicitly at authoring. |
| `ex-annihilator-of-a-coordinate-plane` | literature-derived | ai-altered | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `ex-canonical-double-dual-map-for-polynomial-space-is-not-surjective` | literature-derived | ai-altered | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `cex-distinct-subspaces-of-the-dual-can-have-the-same-preannihilator` | literature-derived | ai-altered | Pinkham chapter 6 and Conrad's infinite-dual note support the statement; the proof plan makes finite-dimensionality and Choice explicit. |
| `ex-a-bilinear-form-neither-symmetric-nor-alternating` | literature-derived | ai-altered | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `ex-congruence-diagonalization-and-inertia-of-a-real-quadratic-form` | ai-generated | ai-generated | New non-load-bearing companion witness; all arithmetic is finite and must be checked explicitly at authoring. |
| `ex-symplectic-normal-form-of-a-degenerate-alternating-form` | literature-derived | ai-altered | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `cex-symmetric-form-need-not-have-an-orthogonal-basis-in-characteristic-two` | literature-derived | ai-altered | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `cex-distinct-quadratic-forms-have-the-same-polar-form-in-characteristic-two` | literature-derived | ai-altered | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `cex-positive-determinant-does-not-imply-positive-definite` | literature-derived | ai-altered | Conrad's bilinear-form notes and Pinkham chapter 7 support the statement; field, involution, and characteristic hypotheses are made explicit. |
| `ex-sylvesters-criterion-for-a-three-by-three-matrix` | ai-generated | ai-generated | New non-load-bearing companion witness; all arithmetic is finite and must be checked explicitly at authoring. |
| `cex-congruence-need-not-preserve-trace-or-determinant` | ai-generated | ai-generated | New non-load-bearing companion witness; all arithmetic is finite and must be checked explicitly at authoring. |

Final totals are 12 literature-derived / not-applicable, 50 literature-derived / ai-altered, 4 ai-altered / not-applicable, 3 ai-altered / ai-altered, and 6 ai-generated / ai-generated. No A-page Statement is AI-generated. The six AI-generated Statements are all checkable companion examples or counterexamples and, because B pages are leaves, none can become a dependency target.

## Generated-witness truth-risk obligations

- `ex-a-matrix-over-f-two-with-no-eigenvalues`: recompute the determinant in F2[x] and test both field elements.
- `ex-cayley-hamilton-reduces-powers-of-a-two-by-two-matrix`: multiply A squared directly and verify the Fibonacci recurrence induction at m=1 and m=2.
- `ex-dual-basis-and-transpose-on-f-three`: evaluate both dual basis functionals on both columns modulo 3.
- `ex-congruence-diagonalization-and-inertia-of-a-real-quadratic-form`: multiply the displayed change-of-basis matrices and expand both quadratic expressions.
- `ex-sylvesters-criterion-for-a-three-by-three-matrix`: recompute all three leading minors and the independent sum-of-squares check.
- `cex-congruence-need-not-preserve-trace-or-determinant`: multiply the 1-by-1 matrices and compare both invariants.

These items must receive `generation` metadata at authoring and remain non-load-bearing. The repository’s registered finite-smoke checks are graph/group checks and do not model any of these claims, so no misleading `finite_smoke` entry is selected.

## Step-5 authoring result

All 75 planned items and all four page files are authored on disk as `status: draft`; every item has `origin: session`. The per-page totals are 23 items on `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, 7 on its B companion, 33 on `dual-spaces-bilinear-forms-and-inertia`, and 12 on its B companion. The batch contains 16 definitions and 59 proof-bearing items. Both A pages have two prose summary paragraphs and both B pages have frontmatter only.

The final proof contract contains the same 59 proof-bearing ids. Every direct fact citation records the complete named source section, every citation records its actual numbered uses, every numbered step has one input-map row, and the boundary rows cite final step text rather than prospective instructions. The coverage artifact remains true of all 116 harvested headings. The six generated witnesses retain `generation` metadata and remain on B pages, so no generated Statement is a dependency target.

## Departures from the scaffolded strategies

1. `prop-eigenvalue-iff-shift-is-not-invertible` expands the reverse implication with dimension equality and a direct proof that the inverse of a bijective linear map is linear. This closes the zero-dimensional case and avoids treating “bijective” as an uncited synonym for “invertible.”
2. `thm-products-ab-and-ba-have-the-same-characteristic-polynomial` keeps the planned block-elimination argument but proves the needed block determinant identity directly from the Leibniz definition over $F[t]$. The published block-characteristic-polynomial lemma is stated for matrices over a field and does not itself license the intermediate determinant calculation over the polynomial ring.
3. `fs-matrix-polynomial-substitution-is-a-ring-homomorphism` corrects the scaffold’s wording: coefficientwise substitution is well-defined as a function, but it is not multiplicative. The witness now shows $E((xI)B)=BA=0$ while $E(xI)E(B)=AB=B$.
4. `thm-symmetric-bilinear-forms-have-an-orthogonal-basis` and `thm-alternating-forms-have-a-symplectic-normal-form` use strong induction on a proper complement rather than asserting exact dimension drops without a cited dimension-sum theorem. This is the same orthogonal/symplectic splitting strategy with a smaller, fully justified induction parameter.
5. `lem-schur-complement-congruence-and-determinant` states and checks the zero-sized-block convention explicitly. This makes the title and product formula honest at the empty-block boundary instead of silently assuming both blocks have positive size.
6. `thm-sylvesters-criterion-for-positive-definiteness` adds determinant multiplicativity and transpose-invariance as direct dependencies. They are needed to derive leading-minor positivity from a congruence rather than importing that determinant behavior without a fact.
7. `ex-canonical-double-dual-map-for-polynomial-space-is-not-surjective` adds the dual-family and separation inputs needed to construct the promised functional outside the canonical image. The scaffold named the phenomenon but did not supply enough dependencies for the explicit witness.
8. Several definition and short-corollary dependency lists were enlarged where the prose asserts existence, uniqueness, dimension equality, or invertibility: algebraic multiplicity adds the factor theorem; bilinear-form radicals add the finite dual-basis, rank-nullity, and invertible-matrix interfaces; definiteness records Sylvester’s law in `justified_by`; and the congruence-rank corollary adds the equal-dimension isomorphism criterion. These changes close the claims without changing their Statements.

All other proofs follow the scaffolded strategies. Precheck’s canonical stratification was adopted wherever it requested a repair; those changes only repartitioned or renumbered steps.

## Final gate results

- `precheck`: 59 proof-bearing items checked, 59 passed, 0 failing.
- `rendercheck`: 79 batch files checked; YAML, wikilinks, delimiters, display layout, and KaTeX all passed.
- `prosecheck --warnings`: 4 page files checked, 0 errors, 0 warnings.
- `citecheck`: 75 items scanned, passed.
- `proof-contract --strict`: 59/59 contracts checked, 0 errors, 0 warnings.
- `coverage-checklist`: 2 A pages and 116 harvested results checked, 0 errors, 0 warnings.
- `content-policy`: 75 scoped items checked, 0 errors, 0 warnings.
- `depcheck`: repository-wide pass; only pre-existing warnings were reported.
- `extcheck`: repository-wide pass; only the expected published external-material warnings were reported.
- `validate-plan`: passed for the spliced plan; no cycles, forward item dependencies, B-page dependencies, or unresolved ids.

## Honest closure and blockers

No batch claim or proof remained unclosed, and no claim had to be narrowed. The false matrix-substitution item was corrected as described above, and the zero-dimensional, characteristic-two, singular, endpoint, nonempty-choice, and both-direction boundary obligations are explicit where they apply.

The repository-wide `fwdcheck` is currently red only because three unrelated, concurrently authored items have undeclared forward links: `fs-every-closed-c1-field-on-a-connected-open-set-is-exact` links to `thm-path-connected-implies-connected`, while `thm-disc-area-is-pi-r-squared` and `thm-gregory-leibniz-series-for-pi-from-a-finite-remainder` link to `thm-newton-leibniz-with-interior-derivative`. No batch-3 item appears in any diagnostic, and I did not edit another author’s files. There is no permission or mathematical blocker within batch 3. I did not run `tools/gates.mjs`.
