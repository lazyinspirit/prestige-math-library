---
id: thm-ordered-monomial-pbw-basis-for-the-shifted-yangian
kind: theorem
title: "Ordered monomial PBW basis for the shifted Yangian"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       def-associated-graded-algebra-of-a-filtered-algebra,
       lem-gan-ginzburg-skryabin-inputs-hold-for-the-type-a-pyramid-good-grading,
       def-classical-complex-matrix-lie-algebras, def-universal-enveloping-algebra,
       def-algebra-over-a-commutative-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Chapter 2, Section 2.2 and Chapter 3, Theorem 3.5 and Lemma 3.6, printed pp. 16-20 and 30-33: the ordered monomial PBW basis of Y_n(sigma), the graded freeness of the truncated quotient, and the finite Gauss index ranges; Chapter 5-6 for the straightening identities."
    - title: "Jonathan Brundan and Alexander Kleshchev, Shifted Yangians and finite W-algebras (arXiv:math/0407012) and Parabolic presentations of the Yangian Y(gl_n) (arXiv:math/0407011)"
      url: "https://arxiv.org/pdf/math/0407011"
      locator: "Sections 2-6 of each paper: the RTT relations, the Gauss factorization T=FDE, the coefficient recursion for the column argument, and the evaluation/Vandermonde argument for linear independence of the symbols."
verification:
  precheck: pass
---

## Statement

For any fixed order on the shifted Drinfeld generators and on the root modes of
$Y_n(\sigma)$, their ordered monomials form a $\mathbb C$-basis of
$Y_n(\sigma)$. Its canonical associated graded algebra is the polynomial
algebra on the corresponding symbols, while its loop associated graded algebra
is the universal enveloping algebra of the current algebra
$\mathfrak{gl}_n[t](\sigma)$; the two graded algebras are different and
non-isomorphic in general. In the finite quotient $W(\lambda)$ the ordered
monomials in the finite Gauss range
$$s_{i,j}<r\le s_{i,j}+p_{\min(i,j)}$$
form a basis, and the commutative Kazhdan/canonical associated graded and the
noncommutative loop associated graded are distinct. Equivalently, the finite
$T$-coefficients with $s_{i,j}<r\le S_{i,j}$ form an ordered PBW basis, where
$r$ is the unshifted coefficient index of $T=FDE$, not a reindexed value.

## Facts & Assumptions

**Given:** A shift matrix $\sigma$ attached to a pyramid with row lengths $0\le p_1\le\cdots\le p_n$, the shifted Yangian $Y_n(\sigma)$ with its generators and filtrations of [[def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra]], and the quotient $W(\lambda)=Y_n(\sigma)/(D_1^{(r)},r>p_1)$.

[F1] The RTT/Drinfeld presentation, the Gauss decomposition $T=FDE$, the two filtrations and the truncation are as in [[def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra]]; the finite index range is $s_{i,j}<r\le S_{i,j}$ with $S_{i,j}=s_{i,j}+p_{\min(i,j)}$.

[F2] Ordered monomial PBW for enveloping algebras of finite-dimensional Lie algebras: an ordered monomial basis holds for $U(\mathfrak a)$ when $\mathfrak a$ is finite-dimensional ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]).

[F3] The loop symbol of $T_{i,j}^{(r)}$ is $(-1)^{r-1}e_{i,j;r-1}$, and the loop symbols of the truncated quotient are the current-algebra elements $e_{i,j}t^{r-1}$ with $(i,j,r-1)$ in the centralizer index set; the associated graded of the Kazhdan filtration is commutative ([[lem-gan-ginzburg-skryabin-inputs-hold-for-the-type-a-pyramid-good-grading]], [[def-associated-graded-algebra-of-a-filtered-algebra]]).



## Proof

**Proof technique:** direct.

**Given:** The shifted Yangian generators and the finite quotient $W(\lambda)$.

1.1 Straightening. The RTT relation has the form $[T_{i,j}^{(r)},T_{h,k}^{(s)}]=$ (terms of total index $r+s-1$), so by filtered induction on total canonical degree every word in the generators can be rewritten, modulo terms of strictly smaller total degree, as an ordered monomial in a fixed monomial order. Hence the ordered monomials span $Y_n(\sigma)$, and the canonical associated graded is spanned by the commuting symbols; the same straightening applies in the finite quotient to the finite index set because the omitted modes are exactly those cut off by the truncation. [F1, algebra]

1.2 Linear independence by evaluation. Let $l$ exceed the largest index appearing in a proposed finite linear relation among ordered monomials, and evaluate the generating matrix at $l$ pairwise distinct scalars: $T(u)\mapsto I+\sum_{a=1}^l E^{(a)}/(u-c_a)$ with $E^{(a)}$ arbitrary matrices (or generators of $\mathfrak{gl}_n$). The $l$-fold comultiplication of the evaluation homomorphism has $r$-th coefficient equal to the sum of products of $r$ ordered matrix coordinates in distinct matrices $E^{(a)}$, so the symbols of the first $l$ canonical modes are the ordered elementary matrix polynomials in $l$ independent matrices. At the special point $(c_1I,\dots,c_lI)$ the differential of the polynomial map is $B_r=\sum_se_{r-1}(c_1,\dots,\widehat{c_s},\dots,c_l)A_s$ on every matrix entry, a Vandermonde matrix with nonzero determinant; hence these $l n^2$ polynomial coordinates are algebraically independent, and by [F2] their ordered enveloping monomials are independent. Taking $l$ larger than every index in the relation proves independence of the ordered monomials of $Y_n(\sigma)$; restricting to the shifted subset gives the shifted case, and restricting to the finite Gauss range gives independence in $W(\lambda)$. [F2, algebra, construct]

2.1 The finite quotient basis. On the truncated quotient the same evaluation argument is applied to the finite symbols $T_{i,j}^{(r)}$, $s_{i,j}<r\le S_{i,j}$: at distinct scalar matrices $h_cI$ the derivative of an allowed off-diagonal Gauss coefficient is $z\prod_{\text{extra}}(1+h z)/(1+h_cz)$ for the $E$-type coefficients and $z/(1+h_cz)$ for the $F$-type coefficients, and the diagonal elementary coefficients have Vandermonde Jacobian; the factors by which the common-column symbols differ from plain Vandermonde are nonzero constants. Hence the finite symbols are independent, and they span by straightening, so they form an ordered PBW basis of $W(\lambda)$. [F1, step 1.1, step 1.2, algebra]

3.1 The two gradings differ. The canonical associated graded of $Y_n(\sigma)$ is the commutative polynomial algebra on the generator symbols, while the loop associated graded is generated by the loop symbols $(-1)^{r-1}e_{i,j;r-1}$, which satisfy the current-algebra bracket $[e_{i,j}t^a,e_{k,l}t^b]=\delta_{jk}e_{i,l}t^{a+b}-\delta_{il}e_{k,j}t^{a+b}$, hence is noncommutative whenever $n\ge2$; the two graded algebras are therefore different. In $W(\lambda)$ the Kazhdan associated graded is commutative (it is the coordinate ring of the slice) while the loop associated graded is $U(\mathfrak g^e)$ up to the truncation, which is noncommutative in general; the identification of the loop graded algebra is the next item. [F1, F3, step 2.1, algebra]

4.1 Index bookkeeping. The vanishing ranges of [[def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra]] are exactly $0<r\le s_{i,j}$ (below) and $r>S_{i,j}$ (above), so the surviving indices are precisely $s_{i,j}<r\le S_{i,j}$, with $r$ the unshifted coefficient index of $T=FDE$; no $u^{s_{i,j}}$ reindexing is performed. [F1, step 2.1, algebra] ∎

## Remarks

- The independence argument is a finite-dimensional PBW argument in disguise: any finite relation involves finitely many modes, and mapping the corresponding finitely many generators to a jet Lie algebra makes their PBW images independent. No PBW theorem for the infinite-dimensional current algebra is assumed.

- The two related graded algebras are a recurring source of errors: the symbolic degrees of the Kazhdan filtration are the coordinates of the Slodowy slice, while the loop degrees are current-algebra degrees; the double centralizer arguments on this page use the loop filtration.
