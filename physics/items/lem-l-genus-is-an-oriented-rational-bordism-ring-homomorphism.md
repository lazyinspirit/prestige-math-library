---
id: lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism
kind: lemma
title: "The L-genus is an oriented rational bordism ring homomorphism"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 4
deps:
  - lem-closed-oriented-pid-manifolds-have-finitely-generated-homology
  - def-total-l-class-of-a-smooth-manifold
  - lem-l-polynomials-form-a-well-defined-multiplicative-sequence
  - def-hirzebruch-l-polynomials
  - cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds
  - prop-oriented-boundaries-have-zero-pontryagin-numbers
  - lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas
  - lem-kronecker-pairing-is-multiplicative-under-cross-products
  - lem-fundamental-class-of-a-product-of-closed-manifolds
  - thm-canonical-tangent-and-cotangent-splittings-for-products
  - prop-singular-homology-of-a-disjoint-union-is-the-direct-sum
  - def-pontryagin-number-of-a-closed-oriented-manifold
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-unoriented-and-oriented-bordism-groups
  - thm-cartesian-product-makes-bordism-a-graded-ring
  - lem-product-boundary-formula-for-oriented-manifolds
  - def-null-cobordant-closed-manifold
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, Lemma 19.2, original p. 223: for a multiplicative sequence the correspondence to the K-genus is a ring homomorphism to the rationals"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, Lemma 19.1, printed p. 36: additivity, boundary vanishing and multiplicativity make the L-genus a Q-algebra homomorphism"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Theorem 11.48 and its proof, printed pp. 98-99: multiplicativity of the pairing of the L-class over a product"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. The L-genus [[def-total-l-class-of-a-smooth-manifold]] satisfies:
(1) $L[M\sqcup N]=L[M]+L[N]$ and $L[-M]=-L[M]$ for closed oriented manifolds of
dimension divisible by four; (2) $L[M]=0$ whenever $M=\partial W$ for a compact
oriented smooth manifold $W$; (3) $L[M\times N]=L[M]L[N]$ for closed oriented
$M^{4a},N^{4b}$. Consequently the L-genus is well defined on oriented bordism
classes, is additive, and extends to a unital $\mathbb Q$-algebra homomorphism
$$L:\Omega_*^{SO}\otimes\mathbb Q\longrightarrow\mathbb Q,$$
assigning to each closed oriented $4k$-manifold its L-genus and the value $0$ in
dimensions not divisible by four.

## Facts & Assumptions

**Given:** AC; closed oriented smooth manifolds in the dimensions named; the L-genus of [[def-total-l-class-of-a-smooth-manifold]].

[F1] $L[M]=\langle L_k(TM),[M]\rangle$ in dimension $4k$, and $L_k$ is a homogeneous weight-$4k$ polynomial $L_k=\sum_{|J|=k}c_Jp_J$ with $c_J\in\mathbb Q$, so $L[M]=\sum c_Jp_J[M]$; for dimensions not divisible by four the value is declared $0$ ([[def-total-l-class-of-a-smooth-manifold]], [[def-pontryagin-number-of-a-closed-oriented-manifold]]).

[F2] The bundle-level total L-class is stable, multiplicative and natural, and equals $1$ for trivial bundles ([[lem-l-polynomials-form-a-well-defined-multiplicative-sequence]]).

[F3] Every Pontryagin number of a closed oriented boundary vanishes: $p_J[\partial W]=0$ ([[prop-oriented-boundaries-have-zero-pontryagin-numbers]], [[cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds]]).

[F4] The fundamental class of a disjoint union is componentwise, $[M\sqcup N]=[M]+[N]$, and reversing the orientation negates it, $[-M]=-[M]$; the class of each component of a disjoint union is computed on that component ([[def-fundamental-class-of-a-compact-oriented-manifold]], [[prop-singular-homology-of-a-disjoint-union-is-the-direct-sum]]).

[F5] The tangent bundle of a product splits canonically: $T(M\times N)\cong TM\boxplus TN$ for the product smooth structure ([[thm-canonical-tangent-and-cotangent-splittings-for-products]]).

[F6] $[M\times N]=[M]\times[N]$ for closed oriented manifolds with the product orientation ([[lem-fundamental-class-of-a-product-of-closed-manifolds]]).

[F7] The Kronecker pairing is multiplicative under cross products: $\langle\alpha\times\beta,[M]\times[N]\rangle=\langle\alpha,[M]\rangle\langle\beta,[N]\rangle$ ([[lem-kronecker-pairing-is-multiplicative-under-cross-products]]).

[F8] Characteristic numbers of products expand over the Kunneth splitting, so pairing the degree-$4k$ part of $L(TM)L(TN)$ with $[M\times N]$ gives the product of the factor evaluations ([[lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas]]).

[F10] Closed oriented manifolds have rational cohomology zero above their dimension ([[lem-closed-oriented-pid-manifolds-have-finitely-generated-homology]]).

[F9] Oriented cobordism classes form the graded ring $\Omega_*^{SO}$ under disjoint union and Cartesian product, with unit the class of a positively oriented point, and $\Omega_*^{SO}\otimes\mathbb Q$ is its rationalization; a null-cobordant manifold is the boundary of a compact oriented manifold ([[def-unoriented-and-oriented-bordism-groups]], [[thm-cartesian-product-makes-bordism-a-graded-ring]], [[lem-product-boundary-formula-for-oriented-manifolds]], [[def-null-cobordant-closed-manifold]]).

## Proof

**Proof technique:** direct; reduce each of the three bordism axioms to the bundle-level multiplicativity and the product formulas.

1.1 Additivity and orientation: let $M,N$ be closed oriented $4k$-manifolds. The restriction of the tangent bundle of $M\sqcup N$ to $M$ is $TM$ and to $N$ is $TN$, so the polynomial $L_k(T(M\sqcup N))$ restricts to $L_k(TM)$ and $L_k(TN)$; with $[M\sqcup N]=[M]+[N]$ by [F4] this gives $L[M\sqcup N]=L[M]+L[N]$. For the opposite orientation, $T(-M)=TM$ (the tangent bundle does not see the orientation), while $[-M]=-[M]$ by [F4], so $L[-M]=-L[M]$. [given, F1, F2, F4, algebra]

1.2 Boundary vanishing: if $M=\partial W$ with $W$ compact oriented and $\dim M=4k$, then, expanding by [F1], $L[M]=\sum_{|J|=k}c_Jp_J[M]=\sum_{|J|=k}c_J\cdot0=0$ because every Pontryagin number of a boundary vanishes by [F3]. [given, F1, F3]

1.3 Let $M^{4a},N^{4b}$ be closed oriented with the product orientation, and write $\pi_M,\pi_N$ for the projections. The tangent splitting [F5] and naturality and multiplicativity [F2] give $L(T(M\times N))=\pi_M^*L(TM)\pi_N^*L(TN)$. Its degree-$4(a+b)$ part is $\sum_{i+j=a+b}L_i(TM)\times L_j(TN)$. By [F10] only $i=a,j=b$ can survive. Evaluating this term on $[M]\times[N]$ using [F6] and the matching-degree identity [F7] gives $L[M\times N]=L[M]L[N]$. This uses the class identity from [F8], without its separate monomial-number expansion. [given, F2, F5, F6, F7, F8, F10]

1.4 Multiplicativity with the zero convention: if $4\nmid(m+n)$, the product and at least one factor have value zero by [F1]. Otherwise suppose $m=\dim M$ is not divisible by four, write $m=4p+r$ with $1\le r\le3$, and let $N$ have dimension $n=4k-m$ so that $M\times N$ has dimension $4k$. Then $L[M]=0$ by [F1]. In the degree-$4k$ part of $L(TM)L(TN)$ only the terms $L_i(TM)L_j(TN)$ with $i+j=k$ occur, and $L_i(TM)\in H^{4i}(M;\mathbb Q)=0$ whenever $4i>m$, so $i\le p$; similarly $L_j(TN)=0$ whenever $4j>n=4(k-p)-r$, so $j\le k-p-1$ because $r\ge1$; thus $i+j\le k-1<k$ and no term of total degree $4k$ survives. Hence $L[M\times N]=0=L[M]L[N]$, and the same argument with the roles of $M$ and $N$ interchanged covers $4\nmid\dim N$. [given, F1, F2, F5, F6, F7, F10, algebra]

2.1 Descent: the value $L[M]$ is additive under disjoint union and vanishes on oriented boundaries by steps 1.1 and 1.2, so it is constant on oriented cobordism classes: for a cobordism $V$ from $M_0$ to $M_1$ with $\partial V=-M_0\sqcup M_1$ by [F9], step 1.2 gives $0=L[\partial V]=L[-M_0\sqcup M_1]=-L[M_0]+L[M_1]$ by step 1.1. Hence $L$ induces a well-defined additive map $\Omega_n^{SO}\to\mathbb Q$ for each $n$ and, extended $\mathbb Q$-linearly, a functional on $\Omega_*^{SO}\otimes\mathbb Q$ that assigns the value $0$ in degrees not divisible by four. It is unital: $L[\mathrm{pt}]=1$ because the tangent bundle of a point is trivial and $L$ of a trivial bundle is $1$ by [F2]. [step 1.1, step 1.2, F1, F2, F9]

3.1 By step 2.1 the functional is defined and additive on the rationalized oriented bordism groups, and by steps 1.3 and 1.4 it is multiplicative on products of closed oriented manifolds, with unit value $1$; since products of such classes generate $\Omega_*^{SO}\otimes\mathbb Q$ biadditively, this makes $L$ a unital $\mathbb Q$-algebra homomorphism $\Omega_*^{SO}\otimes\mathbb Q\to\mathbb Q$, assigning each closed oriented $4k$-manifold its L-genus and the value $0$ in dimensions not divisible by four. The empty disjoint union and the zero class satisfy both sides trivially. [step 1.3, step 1.4, step 2.1, F9] ∎
