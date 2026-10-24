---
id: thm-qftx-gaga-analytic-oka-coherence
kind: theorem
title: "Oka coherence and local coherent free resolutions"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-qftx-analytic-coherent-module
  - def-stalk-of-presheaf
  - lem-qftx-analytic-coherent-matrix-kernels
  - lem-qftx-gaga-analytic-bounded-degree-relations
  - lem-qftx-coherent-analytic-module-calculus
  - def-regular-holomorphic-germ
  - def-weierstrass-polynomial
  - thm-holomorphic-germ-ring-is-noetherian
  - thm-weierstrass-preparation-theorem
  - thm-weierstrass-division-theorem
  - lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular
  - thm-finite-generation-and-finite-presentation-over-a-noetherian-ring
  - thm-exactness-of-sheaves-stalkwise
  - thm-power-series-expansion-in-several-complex-variables
  - cor-uniqueness-of-multivariable-power-series-coefficients
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-qftx-analytic-coherent-module: mathematical-premise
  def-stalk-of-presheaf: mathematical-premise
  lem-qftx-analytic-coherent-matrix-kernels: mathematical-premise
  lem-qftx-gaga-analytic-bounded-degree-relations: mathematical-premise
  lem-qftx-coherent-analytic-module-calculus: mathematical-premise
  def-regular-holomorphic-germ: mathematical-premise
  def-weierstrass-polynomial: mathematical-premise
  thm-holomorphic-germ-ring-is-noetherian: mathematical-premise
  thm-weierstrass-preparation-theorem: mathematical-premise
  thm-weierstrass-division-theorem: mathematical-premise
  lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular: mathematical-premise
  thm-finite-generation-and-finite-presentation-over-a-noetherian-ring: mathematical-premise
  thm-exactness-of-sheaves-stalkwise: mathematical-premise
  thm-power-series-expansion-in-several-complex-variables: mathematical-premise
  cor-uniqueness-of-multivariable-power-series-coefficients: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §3.3, Theorem 3.19 and Lemma 3.20"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
    - title: "Joachim Wehler, Stein Manifolds, §4.2, Theorem 4.28"
      url: "https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $M$ be a finite-dimensional complex manifold and let $\mathcal O_M$ be its sheaf of holomorphic functions. For every open $U\subseteq M$ and every finite tuple $f_1,\ldots,f_q\in\mathcal O_M(U)$, the relation sheaf
$$
\ker\!\left(\mathcal O_U^{\oplus q}\longrightarrow\mathcal O_U,\quad(a_1,\ldots,a_q)\longmapsto\sum_{j=1}^q a_jf_j\right)
$$
is locally of finite type: every point has a neighborhood on which one finite family of relation sections generates the relation stalk at every point. Consequently $\mathcal O_M$ is coherent. Coherent $\mathcal O_M$-module sheaves are closed under kernels, cokernels, and finite extensions. For every coherent $\mathcal O_M$-module $\mathcal F$, point $x\in M$, and finite integer $\ell\ge0$, there are a chart neighborhood $W$ of $x$ and finite ranks $p_0,\ldots,p_\ell$ for which
$$
\mathcal O_W^{\oplus p_\ell}\longrightarrow\cdots\longrightarrow\mathcal O_W^{\oplus p_0}\longrightarrow\mathcal F|_W\longrightarrow0
$$
is exact at $\mathcal F|_W$ and at every free term except the leftmost one. No exactness at the leftmost free term and no global analytic free resolution are asserted.

## Statement references

[[def-axiom-of-choice|The Axiom of Choice]]

[[def-complex-manifolds-and-holomorphic-vector-bundles|Complex manifolds and holomorphic vector bundles]]

[[def-qftx-analytic-coherent-module|Coherent module sheaves]]

[[def-stalk-of-presheaf|Stalks and germs]]

[[lem-qftx-analytic-coherent-matrix-kernels|Finite free map kernels over a coherent structure sheaf]]

[[lem-qftx-gaga-analytic-bounded-degree-relations|Bounded-degree relation reduction]]

[[lem-qftx-coherent-analytic-module-calculus|Coherent module calculus]]

[Demailly, Chapter II §3.3, Theorem 3.19 and Lemma 3.20, pp. 89–90](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Wehler, §4.2, Theorem 4.28, complete proof, printed pp. 138–145/PDF pp. 142–149](https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf)

## Facts & Assumptions

**Given:** Full AC; a finite-dimensional complex manifold $M$ of complex dimension $n\ge1$; an open set $U\subseteq M$; a finite tuple of holomorphic sections; and, for the resolution clause, a coherent module $\mathcal F$, a point $x$, and a finite integer $\ell\ge0$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. AC is the adopted ambient assumption; the proof below makes only finite local selections.

[F1] [[def-complex-manifolds-and-holomorphic-vector-bundles]]: each point of $M$ has a holomorphic chart onto an open subset of $\mathbb C^n$, and $\mathcal O_M$ is the sheaf of holomorphic functions in those charts.

[F2] [[def-qftx-analytic-coherent-module]]: coherence of $\mathcal O_M$ is local finite generation of every finite tuple's relation sheaf; a coherent module is locally of finite type and has locally finite-type kernels for all finite-rank free maps into it.

[F13] [[def-stalk-of-presheaf]]: the stalk at a point consists of germs of sections on neighborhoods of that point.

[F3] [[lem-qftx-analytic-coherent-matrix-kernels]]: when a structure sheaf is coherent, kernels of finite matrices between finite-rank free module sheaves are locally of finite type.

[F4] [[lem-qftx-gaga-analytic-bounded-degree-relations]]: for a tuple of monic Weierstrass polynomials of maximum degree $d$, each relation germ is generated by polynomial relation germs of degree at most $d$ at the chosen point.

[F5] [[lem-qftx-coherent-analytic-module-calculus]]: kernels, cokernels, and finite extensions of coherent module sheaves are coherent.

[F6] [[thm-holomorphic-germ-ring-is-noetherian]]: for each $m\ge1$, the ring $\mathcal O_{m,0}$ of holomorphic germs at the origin of $\mathbb C^m$ is Noetherian.

[F7] [[thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]]: over a Noetherian commutative ring, every finitely generated module is a Noetherian module, so each of its submodules is finitely generated.

[F8] [[lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular]]: each nonzero holomorphic germ becomes regular in the last variable after an invertible complex-linear coordinate change.

[F9] [[def-regular-holomorphic-germ]] and [[thm-weierstrass-preparation-theorem]]: regularity means a finite exact zero order on the last coordinate line, and preparation writes such a germ as a unit times a monic Weierstrass polynomial of that degree.

[F10] [[def-weierstrass-polynomial]] and [[thm-weierstrass-division-theorem]]: a Weierstrass polynomial is monic of its stated degree with lower coefficients vanishing at the center, and division has unique quotient and lower-degree polynomial remainder.

[F11] [[thm-power-series-expansion-in-several-complex-variables]] and [[cor-uniqueness-of-multivariable-power-series-coefficients]]: nonzero holomorphic germs have nonzero first homogeneous terms, whose product is nonzero in the polynomial ring over $\mathbb C$.

[F12] [[thm-exactness-of-sheaves-stalkwise]]: equality of the constructed relation and kernel sheaves, and exactness of the local presentations, follow from their verified stalk sequences.

## Proof

1.1 Work under [A1]. In a holomorphic chart, prove the relation assertion by induction on dimension $n$, and for a fixed $n$ by induction on tuple length $q$. On $\mathbb C^0=\{0\}$ each relation space is a subspace of the finite-dimensional vector space $\mathbb C^q$, so a finite basis gives local generators. For any dimension, the empty tuple has zero relation sheaf. [A1, F1, F2, given, construct]

2.1 If some tuple entry has zero germ at the chosen point, [F13] gives a neighborhood on which that entry vanishes identically; its coordinate in a relation is then arbitrary, and the relation sheaf is the direct sum of one copy of $\mathcal O$ with the shorter tuple's relation sheaf. The induction on $q$ gives finite local generators, and repeating this finite reduction removes every zero germ. If some remaining entry, say $f_1$, is nonzero at the point, shrink until $f_1$ is a unit; the sections $e_j-(f_j/f_1)e_1$, $2\le j\le q$, generate the relation sheaf because the relation equation uniquely determines its first coordinate. [F2, F13, step 1.1, construct, algebra]

3.1 It remains to treat a tuple of nonzero germs all vanishing at the point. By [F11], the product $G=\prod_j f_j$ is a nonzero germ. Apply [F8] to $G$; after the resulting linear coordinate change the restriction of $G$ to the last coordinate line has finite order. Since this restriction is the product of the corresponding one-variable restrictions of the $f_j$, each factor is nonzero and hence has a finite order; each $f_j$ is therefore regular in the last variable. [F8, F11, step 2.1, construct, algebra]

4.1 Apply [F9] to each of the finitely many $f_j$ and intersect the resulting neighborhoods. On one common product polydisc each $f_j=u_jP_j$, where $u_j$ is a unit and $P_j$ is a monic Weierstrass polynomial. Multiplication of the relation coefficients by the units $u_j$ is an isomorphism from the relation sheaf of $(f_j)$ to that of $(P_j)$. Set $d=\max_j\deg_w P_j$. [F9, step 3.1, construct, algebra]

5.1 By [F4], whose quotient/remainder step uses the uniqueness in [F10], every relation germ of $(P_1,\ldots,P_q)$ is generated by polynomial relation germs whose components have $w$-degree at most $d$. Such vectors are identified with coefficient vectors in $\mathcal O_{\Delta'}^{\oplus q(d+1)}$, where $\Delta'$ is the base polydisc. Multiplication by the $P_j$ defines a finite matrix map $\Psi:\mathcal O_{\Delta'}^{\oplus q(d+1)}\to\mathcal O_{\Delta'}^{\oplus(2d+1)}$ by taking coefficients of $\sum_j Q_jP_j$. Its kernel is exactly the bounded-degree polynomial relation sheaf. [F2, F4, F10, step 4.1, construct]

6.1 By dimension induction, $\mathcal O_{\Delta'}$ is coherent; [F3] therefore makes $\mathcal K=\ker\Psi$ locally of finite type. At the base point, its stalk is a submodule of $A^{\oplus q(d+1)}$, where $A=\mathcal O_{n-1,0}$ after translation. If $n>1$, [F6] makes $A$ Noetherian; if $n=1$, $A=\mathbb C$ is a field and hence Noetherian. The finite free module is finitely generated, so [F7] makes it Noetherian and its submodule $\mathcal K_0$ finitely generated. [F3, F6, F7, step 5.1, given]

7.1 The sheaf $\mathcal K$ is coherent: it is locally of finite type by step 6.1, and for any finite free map into $\mathcal K$, composition with its inclusion into the finite free domain of $\Psi$ has the same kernel, locally of finite type by [F3]. A finite-rank free module over the coherent structure sheaf is coherent, since its standard basis gives finite type and [F3] gives the kernel condition. Choose finitely many germs generating $\mathcal K_0$ and represent them by sections on one smaller base neighborhood. Their cokernel in $\mathcal K$ is coherent by [F5]; its stalk at the base point is zero by the chosen generators and the stalk definition [F13]. Since that cokernel is locally of finite type, a finite generating family has zero germs there and vanishes after a common shrinking. Thus the selected sections generate every kernel stalk on a smaller base neighborhood. [F2, F3, F5, F12, F13, step 6.1, choose]

8.1 Regard these finite coefficient sections as polynomial relation sections on the product polydisc. Together with the finitely many elementary polynomial relations $P_qe_j-P_je_q$, they generate every bounded-degree relation stalk over the smaller base neighborhood; [F4] then makes them generate every relation stalk of $(P_1,\ldots,P_q)$ throughout a smaller product neighborhood. The unit isomorphisms from step 4.1 transfer these generators back to $(f_1,\ldots,f_q)$. Equality of the generated subsheaf with the relation sheaf follows from their equal stalks by [F12]. Thus the relation sheaf is locally of finite type at the chosen point. [F3, F4, F12, step 4.1, step 7.1, algebra]

9.1 Since the point and tuple were arbitrary, every finite tuple of holomorphic functions on every chart has a locally finite-type relation sheaf. A holomorphic coordinate change induces an isomorphism of structure sheaves and transports the relation map and its kernel, so the chart-local property is independent of coordinates. Hence [F2] makes $\mathcal O_M$ coherent on all of $M$. [F1, F2, F12, step 8.1, given]

10.1 Apply [F5] to the coherent structure sheaf $\mathcal O_M$. It gives closure of coherent $\mathcal O_M$-modules under kernels, cokernels, and finite extensions, as stated. [F5, step 9.1, given]

10.2 Fix coherent $\mathcal F$, $x\in M$, and finite $\ell\ge0$. Local finite type gives a finite-rank epimorphism $\mathcal O^{\oplus p_0}\to\mathcal F$ near $x$. The finite free source is coherent by [F3] and the coherence of $\mathcal O_M$ from step 9.1; hence its kernel is coherent by [F5]. Choose a finite-rank epimorphism onto that kernel, compose with its inclusion into $\mathcal O^{\oplus p_0}$, and repeat this operation until $\ell+1$ free modules have been chosen. At each intermediate stage the kernel is coherent by [F5], so the next finite-rank epimorphism exists locally. [F2, F3, F5, step 9.1, given, construct]

11.1 Only finitely many neighborhoods are used for the finite length $\ell+1$ construction; their intersection is a chart neighborhood $W$ of $x$. Each new free module maps onto the preceding kernel, so the resulting sequence is exact at $\mathcal F|_W$ and every free term before the leftmost one. No further kernel is chosen at the leftmost term, and no global choices of generators or global resolution are asserted. [F4, F12, step 10.2, algebra] ∎

## Proof sources

[[def-axiom-of-choice]]

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

[[def-qftx-analytic-coherent-module]]

[[lem-qftx-analytic-coherent-matrix-kernels]]

[[lem-qftx-gaga-analytic-bounded-degree-relations]]

[[lem-qftx-coherent-analytic-module-calculus]]

[[thm-holomorphic-germ-ring-is-noetherian]]

[[thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]]

[[lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular]]

[[thm-weierstrass-preparation-theorem]]

[[thm-weierstrass-division-theorem]]

[[thm-exactness-of-sheaves-stalkwise]]

## Remarks

The approved statement retains full AC as its ambient assumption. The proof uses only finitely many local generators at a time and finitely many neighborhood shrinkings for each finite resolution length; it does not claim that AC is necessary.
