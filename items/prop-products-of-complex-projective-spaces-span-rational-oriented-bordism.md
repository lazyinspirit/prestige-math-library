---
id: prop-products-of-complex-projective-spaces-span-rational-oriented-bordism
kind: proposition
title: "Products of complex projective spaces span rational oriented bordism"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-axiom-of-choice, lem-projective-space-products-are-linearly-independent-in-rational-oriented-bordism, lem-projective-space-products-have-triangular-characteristic-number-matrix, thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism, thm-rational-cohomology-of-bo-and-bso-by-pontryagin-and-euler-classes, thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes, def-unoriented-and-oriented-bordism-groups, thm-cartesian-product-makes-bordism-a-graded-ring, thm-rational-hurewicz-for-highly-connected-cw-complexes, lem-rationalization-is-exact-and-commutes-with-singular-homology, def-thom-prespectrum-of-the-universal-real-and-oriented-bundles, lem-high-relative-cells-do-not-change-lower-homotopy, lem-oriented-grassmannian-has-two-lifted-schubert-cells, thm-schubert-cells-give-the-stable-grassmannian-cw-structure, lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex, cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex, def-disk-sphere-and-thom-space-of-a-metric-vector-bundle, thm-thom-isomorphism-for-oriented-vector-bundles, thm-naturality-and-uniqueness-of-thom-classes, lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology, cor-cohomology-over-a-field-is-dual-to-homology-over-that-field, prop-zero-dimensional-bordism-groups]
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Theorem 18.8 and Corollary 18.9, printed pp. 216-217, and Theorem 18.3 (the epsilon-isomorphism) with the citation of Serre, printed pp. 207-208"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Theorem 12.9 and equation (12.13), printed pp. 103-105: the $\\mathbb Q$-Hurewicz comparison for the oriented Thom spectrum"
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Section 18, printed pp. 32-34: determination of $\\Omega^{SO}\\otimes\\mathbb Q$"
dependency_level: 8
---

## Statement

Assume AC. For every $k\ge0$ the products
$P_J=\mathbb{CP}^{2j_1}\times\cdots\times\mathbb{CP}^{2j_r}$ indexed by the
partitions $J$ of $k$ form a $\mathbb Q$-basis of
$\Omega_{4k}^{SO}\otimes\mathbb Q$. Equivalently,
$\Omega_*^{SO}\otimes\mathbb Q$ is the polynomial algebra over $\mathbb Q$ on
the classes $[\mathbb{CP}^2],[\mathbb{CP}^4],[\mathbb{CP}^6],\dots$, and every
rational oriented bordism class is a unique rational polynomial in the
projective-space classes. Combined with the triangularity lemma this makes the
Pontryagin-number matrix of the projective-space products invertible and
identifies the dual basis.

## Facts & Assumptions

**Given:** An integer $n\ge0$, the oriented Thom prespectrum $T_r=\operatorname{Th}(\gamma_r^+)$ over $B_r=B\mathrm{SO}(r)$ with its coordinate-first structure maps $\alpha_r:S^1\wedge T_r\to T_{r+1}$ of [[def-thom-prespectrum-of-the-universal-real-and-oriented-bundles]], and rational coefficients unless stated.

[F1] [[lem-oriented-grassmannian-has-two-lifted-schubert-cells]], [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]], [[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]] and [[cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex]] give $B_r$ and the Thom space $T_r$ their CW weak topology: over a lifted $d$-cell the disk/sphere pair is $(D^d\times D^r,D^d\times S^{r-1})$ and its Thom relative cell is $(D^d\times D^r)/((\partial D^d\times D^r)\cup(D^d\times S^{r-1}))\cong S^{d+r}$, so relative to the basepoint all cells of $T_r$ have dimension at least $r$.

[F2] [[lem-high-relative-cells-do-not-change-lower-homotopy]] applied to the inclusion of the basepoint vertex into $T_r$ gives that $T_r$ is $(r-1)$-connected; [[thm-rational-hurewicz-for-highly-connected-cw-complexes]] with $c=r$ and $i=n+r$ then gives an isomorphism $\pi_{n+r}(T_r)\otimes\mathbb Q\to H_{n+r}(T_r;\mathbb Q)$ whenever $r\le n+r\le 2r-2$, i.e. $r\ge n+2$.

[F3] [[thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism]] identifies $\Omega_n^{SO}\cong\operatorname{colim}_r\pi_{n+r}(T_r)$; [[lem-rationalization-is-exact-and-commutes-with-singular-homology]] makes $-\otimes\mathbb Q$ exact and compatible with direct sums, so tensoring commutes with the sequential colimit and cofinal tails.

[F4] [[thm-thom-isomorphism-for-oriented-vector-bundles]], [[thm-naturality-and-uniqueness-of-thom-classes]] and [[lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology]] give the oriented Thom isomorphism and its naturality, identifying the cohomology transition map of the prespectrum with $i_r^*:H^n(B_{r+1};\mathbb Q)\to H^n(B_r;\mathbb Q)$ up to the reduced suspension isomorphism; [[thm-rational-cohomology-of-bo-and-bso-by-pontryagin-and-euler-classes]] gives the rank-by-rank polynomial presentation, and [[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]] the stability of the Pontryagin generators.

[F5] [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]] makes evaluation a natural isomorphism for field coefficients; [[lem-projective-space-products-are-linearly-independent-in-rational-oriented-bordism]] gives $p(k)$ independent classes in degree $4k$; [[thm-cartesian-product-makes-bordism-a-graded-ring]] and [[def-unoriented-and-oriented-bordism-groups]] give the product and the graded ring structure; [[prop-zero-dimensional-bordism-groups]] gives $\Omega_0^{SO}\cong\mathbb Z$ with the positively oriented point generator; [[lem-projective-space-products-have-triangular-characteristic-number-matrix]] supplies the invertibility of the Pontryagin matrix used in the final identification. [[def-axiom-of-choice]] is assumed exactly as declared by these suppliers.

## Proof

1.1 The rank-$r$ Thom space is $(r-1)$-connected. By [F1], $T_r$ is a based CW space whose non-basepoint cells have dimension at least $r$; applying [F2] to the inclusion of the basepoint gives $\pi_i(T_r)=0$ for $i\le r-1$. With $c=r$ and $i=n+r$ the inequalities of [F2] hold exactly when $r\ge n+2$, and in that range the actual rational Hurewicz map $\pi_{n+r}(T_r)\otimes\mathbb Q\to H_{n+r}(T_r;\mathbb Q)$ is an isomorphism; since $n+r>0$, reduced and ordinary homology agree here and no injectivity at the upper endpoint $2r-1$ is used. [F1, F2]

2.1 Pass to the stable colimit. By the Pontryagin-Thom isomorphism [F3], $\Omega_n^{SO}\cong\operatorname{colim}_r\pi_{n+r}(T_r)$. Tensoring with $\mathbb Q$ commutes with the sequential colimit: presenting the colimit as the cokernel of the shift map on the direct sum, exactness of $-\otimes\mathbb Q$ and its compatibility with direct sums [F3] identify $(\operatorname{colim}_r\pi_{n+r}(T_r))\otimes\mathbb Q$ with $\operatorname{colim}_r(\pi_{n+r}(T_r)\otimes\mathbb Q)$, and the tail $r\ge n+2$ is cofinal. Naturality of the Hurewicz map with respect to suspension followed by the structure map $\alpha_r$ makes the isomorphisms of step 1.1 a map of sequential systems, so $\Omega_n^{SO}\otimes\mathbb Q\cong\operatorname{colim}_{r\ge n+2}H_{n+r}(T_r;\mathbb Q)$. [F2, F3, step 1.1]

3.1 The homology transition maps are isomorphisms. Let $i_r:B_r\to B_{r+1}$ classify $\varepsilon^1_+\oplus\gamma_r^+$, the base map of the structure map. The normalized Thom classes and the ordered suspension normalization give the commuting Thom square of [F4], in which the bottom map is identified with $i_r^*$ after the reduced cohomology suspension: $H^n(B_{r+1};\mathbb Q)\cong\widetilde H^{n+r+1}(T_{r+1};\mathbb Q)\to\widetilde H^{n+r}(T_r;\mathbb Q)\cong H^n(B_r;\mathbb Q)$. Since the degree-$n$ part of the polynomial presentation [F4] uses only the stable Pontryagin generators $p_j$ with $4j\le n$, which occur in every rank $s>n$, naturality and stability give that $i_r^*:H^n(B_{r+1};\mathbb Q)\to H^n(B_r;\mathbb Q)$ is an isomorphism for every $r\ge n+1$, in particular throughout the tail. [F4, step 2.1]

4.1 Duality and dimension count. By [F5] the evaluation map is a natural isomorphism $H^q(Y;\mathbb Q)\cong\operatorname{Hom}_{\mathbb Q}(H_q(Y;\mathbb Q),\mathbb Q)$ for every space. The Thom cohomology and the polynomial presentation show that $\widetilde H^{n+r}(T_r;\mathbb Q)$ is finite-dimensional; hence $H_{n+r}(T_r;\mathbb Q)$ is finite-dimensional of the same dimension, since an infinite-dimensional vector space would have an infinite-dimensional dual using a basis and its coordinate functionals. Naturality of evaluation identifies the dual of the homology transition in step 2.1 with the cohomology transition of step 3.1, which is an isomorphism; therefore every homology transition is an isomorphism and the colimit of step 2.1 is any one of its tail groups, giving $\dim_{\mathbb Q}(\Omega_n^{SO}\otimes\mathbb Q)=\dim_{\mathbb Q}H^n(B_r;\mathbb Q)$ for $r\ge n+2$. [F5, step 2.1, step 3.1]

5.1 Identifying the dimension. If $n=4k$, the degree-$4k$ monomials in the universal Pontryagin classes are exactly $p_1^{a_1}p_2^{a_2}\cdots$ with $\sum_ja_j=k$, indexed by the partitions of $k$; hence the dimension is $p(k)$, the number of partitions of $k$. If $4\nmid n$ no monomial has degree $n$, so the dimension is zero. For $k=0$ there is one degree-zero monomial, and [F5] identifies $\Omega_0^{SO}\otimes\mathbb Q\cong\mathbb Q$ with the positively oriented point. [F4, F5, step 4.1]

6.1 Conclusion. For $k\ge1$, [F5] supplies $p(k)$ linearly independent classes $[P_J]$ in degree $4k$, and step 5.1 shows the dimension is exactly $p(k)$; hence they form a basis, and the Pontryagin-number matrix on this basis is invertible by the triangularity lemma [F5]. The product theorem for bordism makes $x_j\mapsto[\mathbb{CP}^{2j}]$ a graded ring map from the polynomial algebra on the classes $[\mathbb{CP}^{2j}]$ to $\Omega_*^{SO}\otimes\mathbb Q$; on each degree $4k$ it carries the monomials to the basis just proved and both sides vanish in degrees not divisible by four, so it is an isomorphism of graded rings, giving uniqueness of the polynomial expression. The empty product in degree zero is the point. [F5, step 5.1] ∎
