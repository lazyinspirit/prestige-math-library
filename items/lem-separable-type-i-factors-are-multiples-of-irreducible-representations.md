---
id: lem-separable-type-i-factors-are-multiples-of-irreducible-representations
kind: lemma
title: "A separable type I factor is a multiple of an irreducible representation"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - lem-polar-decomposition-and-nonzero-partial-isometries-in-factors
  - def-type-i-factor-representation-and-type-i-group
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
  - def-hilbert-orthogonal-projection
  - def-hilbert-direct-sum-of-unitary-representations
  - def-strongly-continuous-unitary-representation
  - def-operator-norm
  - def-von-neumann-algebra-and-commutant
  - def-separable-space
  - thm-zorn
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-separable-hilbert-space-has-a-countable-orthonormal-basis
  - thm-schurs-lemma-for-unitary-representations
  - def-axiom-of-choice
justified_by: []
aliases: []
dependency_level: 2
axiom_use: "AC is assumed. Its exact uses are Zorn's lemma for the maximal orthogonal family of minimal projections; a choice of one unit vector in each nonzero range p_iH and of a dense point in each of the pairwise disjoint balls when separability bounds the index set; a choice of the partial isometries t_i realizing the equivalences p ~ p_i; and a choice of an orthonormal basis of L when the multiplicity is expanded as a direct sum. The orthonormal-basis and direct-sum suppliers inherit their own AC. No further choice is used: all operators are defined by explicit formulas, and the compression coefficients lambda_ij(a) are determined by a."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part III, §III.1.5.1-III.1.5.4, printed pp. 247-249 (PDF pp. 255-257): matrix units, minimal/abelian projections, the spatial form M = B(H1) tensor C I of a type I factor and its commutant."
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 6, §6.B.c: Proposition 6.B.14 and its proof, printed pp. 186-187, deriving the factor-representation/multiple-of-irreducible equivalence from the preceding results."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume AC. Let $M$ be a concrete type-I factor on a nonzero separable complex Hilbert space $H$. There is a finite or countably infinite exhaustive orthogonal family $(p_i)$ of minimal projections in $M$, equivalent to a fixed $p=p_{i_0}$, and partial isometries $t_i$ in $M$ with $t_i^*t_i=p$ and $t_it_i^*=p_i$. Put $E=\ell^2(I)$, $L=pH$. The unitary $W:E\otimes L\to H$, $W(\delta_i\otimes\eta)=t_i\eta$, satisfies $W^*MW=B(E)\otimes I_L$ and $W^*M'W=I_E\otimes B(L)$. If $\pi$ is a strongly continuous unitary representation of a topological group $G$ on $H$ and $\pi(G)''=M$, there is a strongly continuous irreducible representation $\sigma$ on $E$ with $W^*\pi(g)W=\sigma(g)\otimes I_L$, so $\pi$ is $\dim(L)$ copies of $\sigma$. Equivalently $N=M'$ is type I; a minimal $q$ in $N$ has invariant irreducible carrier $K=qH$, and an exhaustive orthogonal family $(q_i)$ of equivalent minimal projections in $N$ with $u_i^*u_i=q_i$ and $u_iu_i^*=q$ gives a unitary $V:H\to K^{\oplus m}$, $V\xi=(u_i\xi)$, $m=\text{number of }q_i$, intertwining $\pi$ with $m$ copies of $\pi|K$. The space $pH$ for a minimal $p$ in $M$ is the multiplicity space, not the irreducible carrier. In the direct-sum realization used here, the operators $\rho(A)(\eta_i)_{i\in I}:=(\sum_{j\in I}A_{ij}\eta_j)_{i\in I}$ for $A=(A_{ij})\in B(E)$ constitute the algebra written $B(E)\otimes I_L$, and $(I\star S)(\eta_i)_{i\in I}:=(S\eta_i)_{i\in I}$ for $S\in B(L)$ constitutes $I_E\otimes B(L)$.

## Facts & Assumptions

**Given:** AC; a concrete factor $M$ of type I on a nonzero separable complex Hilbert space $H$; the minimal projection $p\in M$; and the notation of the Statement.

[F1] AC is the choice-function axiom; it supplies the selections listed in the axiom-use record ([[def-axiom-of-choice]]).

[F2] Zorn's lemma: a nonempty partially ordered set in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[F3] In a factor, every two nonzero projections $p,q$ admit nonzero subprojections $p'\le p$, $q'\le q$ that are equivalent through a partial isometry of the factor; a nonzero subprojection of a minimal projection equals that projection, and a type-I factor is one containing a nonzero minimal projection ([[lem-polar-decomposition-and-nonzero-partial-isometries-in-factors]], [[def-type-i-factor-representation-and-type-i-group]]).

[F4] A concrete von Neumann algebra is a unital weak-operator-closed $*$-subalgebra of $\mathcal B(H)$, its commutant is weak-operator-closed, the double commutant of a self-adjoint set is a von Neumann algebra, $M''=M$, and the commutant of $M'$ is $M$ ([[def-von-neumann-algebra-and-commutant]], [[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]]).

[F5] For an orthogonal family of projections $(p_i)_{i\in I}$ the finite partial sums converge strongly to the projection onto the closed linear span of the ranges, the complementary projection is $I$ minus that sum, the ranges are pairwise orthogonal closed subspaces with closed linear span $H$ exactly when the sum is $I$; the direct sum $\widehat\bigoplus_iL$ carries its canonical unitary sum map, and a Hilbert direct sum of copies of a representation is a direct sum in the sense of that definition ([[def-hilbert-orthogonal-projection]], [[def-hilbert-direct-sum-of-unitary-representations]]).

[F6] For an irreducible unitary representation its commutant is scalar ([[thm-schurs-lemma-for-unitary-representations]]). Conversely, a nonzero proper closed invariant subspace gives a nonscalar commuting orthogonal projection, so a scalar commutant implies irreducibility. Strong continuity, invariant subspaces and unitary intertwiners have the conventions of [[def-strongly-continuous-unitary-representation]].

[F7] A separable metric space has an at most countable dense subset, and contains at most countably many pairwise disjoint nonempty open sets, since each such open set contains a point of any fixed countable dense subset ([[def-separable-space]]).

[F8] Bounded operators carry the operator norm, and for a unitary $W$ the map $a\mapsto W^*aW$ preserves the *-algebraic operations and the norm ([[def-operator-norm]], [[def-von-neumann-algebra-and-commutant]]).

[F9] A finite-dimensional inner-product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]). A Hilbert space with a dense sequence has a finite or countable orthonormal basis ([[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]]).

## Proof

**Proof technique:** a maximal orthogonal family of minimal projections, an explicit matrix-unit and direct-sum analysis, and a compression identification of the representation with a multiple of an irreducible.

**Given:** AC; the concrete type-I factor $M\subseteq\mathcal B(H)$ with $H\neq\{0\}$ separable; a nonzero minimal projection $p\in M$; $L=pH$.

1.1 By [F3] and the definition of a type-I factor there, fix a nonzero minimal projection $p\in M$. Consider the set of all sets $S$ of pairwise orthogonal minimal projections of $M$, each equivalent to $p$ and with $p\in S$, ordered by inclusion. The set $\{p\}$ is a member, so the poset is nonempty; the union of a chain of members is again a set of pairwise orthogonal minimal projections equivalent to $p$ and containing $p$, hence an upper bound. By Zorn's lemma [F2] there is a maximal member, written $(p_i)_{i\in I}$ with $p_{i_0}=p$. [F1, F2, F3, construct]

2.1 For every $\xi\in H$ and finite $F\subseteq I$ we have $\sum_{i\in F}\|p_i\xi\|^2=\|(\sum_{i\in F}p_i)\xi\|^2\le\|\xi\|^2$. The supremum of these finite square sums is finite; choosing a finite set within any positive tolerance of the supremum bounds every remaining tail by that tolerance. Orthogonality therefore makes the finite sums $\sum_{i\in F}p_i\xi$ Cauchy. Completeness gives their limit, which defines the orthogonal projection $s$ onto the closed span of the ranges. Thus the sums converge strongly, [F4] gives $s\in M$, and $r=I-s\in M$ is orthogonal to every $p_i$. If $r\neq0$, then [F3] applied to the nonzero projections $r$ and $p$ in the factor $M$ supplies nonzero subprojections $r'\le r$ and $p'\le p$ with $r'$ equivalent to $p'$; minimality of $p$ forces $p'=p$, and conjugation by the partial isometry identifies $r'Mr'$ with $pMp=\mathbb Cp$, so $r'$ is a minimal projection equivalent to $p$ and orthogonal to every $p_i$, contradicting maximality in step 1.1. Hence $r=0$, the family is exhaustive, and $H$ is the orthogonal direct sum of the nonzero subspaces $p_iH$. [F3, F4, step 1.1, algebra]

3.1 For each $i$ choose a unit vector $\xi_i\in p_iH$ (possible since $p_i\neq0$) and a point of a fixed countable dense subset $D\subseteq H$ in the ball around $\xi_i$ of radius $1/2$. Distinct $i$ give orthogonal unit vectors, hence centres at distance $\sqrt2>1$, so the radius-$1/2$ balls are pairwise disjoint, and distinct balls contain distinct points of $D$; therefore $I$ is at most countable. For each $i$ choose a partial isometry $t_i\in M$ with $t_i^*t_i=p$ and $t_it_i^*=p_i$, possible by the equivalence in step 1.1, and set $t_{i_0}:=p$. [F1, F7, step 2.1, construct]

4.1 For all $i,j,k,l\in I$ the operators $e_{ij}:=t_it_j^*\in M$ satisfy $e_{ij}^*=e_{ji}$ and $e_{ij}e_{kl}=\delta_{jk}e_{il}$: indeed $t_j^*t_k=t_j^*(p_jp_k)t_k$ vanishes for $j\neq k$ because $t_j^*=t_j^*p_j$ and $t_k=p_kt_k$, and equals $p$ for $j=k$; in particular the $e_{ii}=p_i$ are orthogonal projections and $e_{i_0i_0}=p$. [step 3.1, algebra]

5.1 On finite-support families $(\eta_j)$ in $\widehat\bigoplus_I L$, define $\rho(A)(\eta_j)_i=\sum_jA_{ij}\eta_j$ for $A\in B(E)$. Choose an orthonormal basis $b_1,\ldots,b_d$ of the finite-dimensional span of these input vectors by [F9], and write $\eta_j=\sum_ka_{jk}b_k$. Then $\sum_i\|\sum_jA_{ij}\eta_j\|^2=\sum_k\|A(a_{jk})_j\|_E^2\le\|A\|^2\sum_j\|\eta_j\|^2$. Thus $\rho(A)$ extends boundedly to the direct sum with norm at most $\|A\|$; testing families $(z_jb)$ for one fixed unit $b\in L$ gives equality. The identity $\rho(A)(z_jb)_j=((Az)_ib)_i$ holds first for finite-support $z$ and then for all $z\in E$ by continuity. Finite linear combinations of these separated families are dense, so this identity gives the product and adjoint laws for $\rho$; the norm equality makes it injective. The formula $W(\eta_i)=\sum_it_i\eta_i$ is unitary by orthogonality and exhaustion. For $a\in M$, $t_i^*at_j=\lambda_{ij}(a)p$ since $pMp=\mathbb Cp$; testing $W(z_i b)$ shows that the scalar matrix $\Lambda(a)$ defines an operator on $E$ with norm at most $\|a\|$, and its blocks give $W^*aW=\rho(\Lambda(a))$. [F5, F8, F9, step 2.1, step 4.1, algebra]

6.1 The unique scalar blocks and injectivity of $\rho$ show that $\Lambda$ is a unital injective $*$-homomorphism: the identities follow by conjugating sums, products and adjoints with $W$. The matrix units satisfy $W^*e_{ij}W=\rho(E_{ij})$. For finite-coordinate projections $P_F$ on $E$, put $R_F=\rho(P_F)$; direct-sum tails give $R_F\to I$ strongly. For every $A\in B(E)$, $\rho(P_FAP_F)=R_F\rho(A)R_F\to\rho(A)$ strongly, since $\|R_F\|\le1$ and $R_F\to I$. Each compression is a finite linear combination of the represented matrix units and lies in $W^*MW$. [F5, step 4.1, step 5.1, algebra]

7.1 Strong closedness [F4] now gives $\rho(A)\in W^*MW$ for every $A\in B(E)$, while step 5.1 gives the reverse inclusion. Hence $W^*MW=\rho(B(E))$, and $\Lambda$ is onto. To compute its commutant, let $T$ commute with all $\rho(E_{ij})$. Commuting with $\rho(E_{ii})$ makes $T$ block diagonal with blocks $S_i\in B(L)$; commuting with $\rho(E_{ij})$ makes $S_i=S_j$ for every $i,j$. Thus $T=I\star S$ for one bounded $S\in B(L)$, and conversely every such operator commutes with all $\rho(A)$. Consequently $W^*M'W=I_E\otimes B(L)$. [F4, step 6.1, algebra]

8.1 Suppose now that $\pi(G)''=M$ and put $\sigma(g):=\Lambda(\pi(g))\in B(E)$. Then $\sigma$ is a group homomorphism into the unitary group of $E$ by step 6.1, and $W^*\pi(g)W=\rho(\sigma(g))=\sigma(g)\otimes I_L$ in the notation of the Statement. For $\eta\in E$ fix a unit vector $b\in L$. The identity $\|\sigma(g)\eta-\sigma(g_0)\eta\|_E=\|\pi(g)W(\eta\star b)-\pi(g_0)W(\eta\star b)\|_H$ makes this orbit continuous at each $g_0$ directly by strong continuity of $\pi$; hence $\sigma$ is strongly continuous. [step 7.1, F5, F6, algebra]

9.1 The commutant of $\sigma(G)$ in $B(E)$ is computed by transporting along $\rho$: an operator $A\in B(E)$ commutes with every $\sigma(g)$ exactly when $\rho(A)$ commutes with every $\rho(\sigma(g))=W^*\pi(g)W$, that is, when $\rho(A)\in W^*\pi(G)'W=W^*M'W$; intersecting with $\rho(B(E))=W^*MW$ gives $W^*(M\cap M')W=\mathbb C I_H$, because $M$ is a factor. Hence $\sigma(G)'=\mathbb C I_E$, and by the double commutant theorem [F4] and the irreducibility criterion of [F6], $\sigma$ is irreducible with $\sigma(G)''=B(E)$. [F4, F6, step 8.1, algebra]

10.1 If $D$ is a countable dense subset of $H$, the set $pD$ is dense in $L=pH$ since $p$ is a contraction. A dense sequence and [F9] therefore supply a finite or countable orthonormal basis of $L$. Expanding $L$ in that basis, the identity $W^*\pi(g)W=\sigma(g)\otimes I_L$ exhibits $\pi$ as the Hilbert direct sum of $\dim(L)$ copies of $\sigma$ in the sense of [F6], where $\dim(L)\in\{1,2,\dots,\infty\}$ is the cardinality of that basis; the space $L=pH$ is thereby the multiplicity space of this decomposition, while $E$ is the carrier of the irreducible $\sigma$. Moreover $N=M'$ is a factor of type I: by the computation of step 7.1 we have $W^*NW=\{I\star S:S\in B(L)\}\cong B(L)$; commuting with its rank-one matrix units forces a scalar operator, so its centre is scalar, and $B(L)$ contains a nonzero minimal projection, namely the rank-one projection $q_0$ onto any line $\mathbb Cb$ with $b\in L$ a unit vector, since $q_0B(L)q_0=\mathbb Cq_0$. [F5, F6, F7, F9, step 7.1, step 9.1, construct]

11.1 Let $q\in N$ be a nonzero minimal projection and let $(q_i)_{i\in I'}$ be an exhaustive orthogonal family of minimal projections in $N$ equivalent to $q$, with partial isometries $u_i\in N$ satisfying $u_i^*u_i=q_i$ and $u_iu_i^*=q$; such data exist by the maximal-family argument of steps 1.1-2.1 applied to the type-I factor $N$ of step 10.1. Put $K:=qH$. The formula $V\xi:=(u_i\xi)_{i\in I'}$ defines a unitary $V:H\to\widehat\bigoplus_{i\in I'}K$: it is isometric because $\sum_i\|u_i\xi\|^2=\sum_i\langle q_i\xi,\xi\rangle=\|\xi\|^2$ by exhaustion; moreover $u_iu_j^*=\delta_{ij}q$, since $u_i=u_iq_i$ and $u_j^*=q_ju_j^*$. Its image contains every summand, since for $\eta\in K$ the vector $u_i^*\eta$ is mapped to the vector with $\eta$ in the $i$-th slot, and the image is closed as the isometric image of a complete space. [F5, step 10.1, construct]

12.1 Each $u_i$ lies in $N=\pi(G)'$, so $V$ intertwines: $V\pi(g)=(\bigoplus_{i\in I'}\pi(g)|K)V$. Finally $\pi|K$ is irreducible: for $T\in\mathcal B(K)$ the operator $Tq$ on $H$ commutes with $\pi(G)$ exactly when $T$ commutes with $\pi(G)|K$, so $(\pi|K)(G)'=q\pi(G)'q=qNq=\mathbb Cq=\mathbb C I_K$ by minimality of $q$; hence $V$ exhibits $\pi$ as $m:=|I'|$ copies of the irreducible representation $\pi|K$, as claimed. [F6, step 11.1, algebra]

13.1 Conversely, for an irreducible strongly continuous unitary $\sigma$ on $E$, [F6] and [F4] give $\sigma(G)''=B(E)$. The block-commutant calculation in step 7.1 applied to $\sigma(g)\otimes I_L$ gives generated algebra $B(E)\otimes I_L$, which has a nonzero minimal projection $P_b\otimes I_L$ for a unit vector $b\in E$. Thus a nonzero multiple of an irreducible is a type-I factor representation. The same spatial calculation, with $M$ and $M'$ interchanged, proves the equivalence of their type-I property. [F4, F6, step 7.1, step 12.1, algebra] ∎

## Boundary cases

If $I$ is finite, then $E=\ell^2(I)$ is finite dimensional, $B(E)$ is a finite-dimensional factor, and the family $(p_i)$ is a finite partition of unity; the proof of step 2.1 covers this case with the strong limit being an ordinary finite sum. If $H$ is one dimensional, then $M=\mathbb CI$, $p=I$ is minimal, $I=\{i_0\}$, $E=\mathbb C$, and $L=H$; $\pi$ is a one-dimensional character and the statement says it is $\dim H=1$ copy of itself. If $L$ is one dimensional the multiplicity is $1$ and $\sigma$ is unitarily equivalent to $\pi$. The zero space is excluded by hypothesis; each $p_iH$ is nonzero by construction, so no zero summand occurs. The alternative construction uses $N=M'$ rather than $M$; in the zero-multiplicity degenerate case $I'=\varnothing$ the argument is vacuous because $q\neq0$ forces $I'\neq\varnothing$. Choice is used exactly as recorded in the axiom-use field and [F1].

## Source qualifications

Blackadar, *Operator Algebras*, Part III §III.1.5, printed pp. 247-249, constructs matrix units from an abelian projection of a type I factor and states the spatial form $\mathcal B(H_1)\bar\otimes\mathbb C I$ together with its commutant; the local proof above supplies the maximal-family, exhaustion, countability, matrix-unit, direct-sum and compression details rather than importing its outline. Bekka-de la Harpe, Chapter 6 §6.B.c, Proposition 6.B.14 with its proof, printed pp. 186-187, records the factor-representation/multiple-of-irreducible equivalence on which the representation-theoretic clause is modelled; the strongly continuous irreducible $\sigma$ and the passage to $\dim(L)$ copies are proved locally in steps 8.1-10.1. The convention that the 'multiplicity space' $pH$ is not the irreducible carrier follows from step 10.1, where $\sigma$ acts on $E$ and the commutant of $W^*MW$ acts on $L$.
