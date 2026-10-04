---
id: thm-disjoint-union-makes-bordism-classes-abelian-groups
kind: theorem
title: Disjoint union makes bordism classes abelian groups
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-unoriented-smooth-cobordism-of-closed-manifolds
  - def-oriented-smooth-cobordism
  - lem-cylinders-give-reflexivity-of-cobordism
  - thm-smooth-cobordism-is-an-equivalence-relation
  - def-null-cobordant-closed-manifold
  - def-unoriented-and-oriented-bordism-groups
  - prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds
  - prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth
  - prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary
  - def-product-orientation
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - def-induced-boundary-orientation
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-group
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Lemma 1.30 and the paragraph before it, printed pp.10-11"
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Section 17, $U_n$ is an abelian group under disjoint union, printed pp.201-202"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, 2016)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf
      locator: "Section 8.2, the natural group structure and inverse, printed p.247"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
      locator: "Section 6.3, exponent two and disjoint-union addition, electronic pp.117-118"
---

## Statement

For each $n\ge0$, the operations $[M]+[N]=[M\sqcup N]$ and
$[Q,o]+[R,p]=[Q\sqcup R,o\sqcup p]$ make $(\Omega_n^{O},+)$ and
$(\Omega_n^{SO},+)$ abelian groups
([[def-unoriented-and-oriented-bordism-groups]], [[def-group]]). The operation
is well defined: if $M_i$ is cobordant to $M_i'$ for $i=0,1$, the disjoint
unions $M_0\sqcup M_1$ and $M_0'\sqcup M_1'$ are cobordant via the disjoint
union of the two bordisms. It is associative and commutative, the canonical
diffeomorphisms of finite disjoint unions identifying the two bracketings and
the two orders, and the class of the empty manifold is a two-sided identity.
Inverses: for every closed $M$, $[M]+[M]=0$ in $\Omega_n^{O}$ because
$M\sqcup M$ is the boundary of $M\times[0,1]$; for every closed oriented
$(M,o)$, $[M,o]+[-M]=0$ in $\Omega_n^{SO}$ because $M\sqcup(-M)$ is the
boundary of the cylinder with the appropriate orientation. No choice principle
is used.

## Facts & Assumptions

**Given:** An integer $n\ge0$, closed smooth $n$-manifolds and closed oriented smooth $n$-manifolds, and their classes in $\Omega_n^{O}$, $\Omega_n^{SO}$ with the operation $[M]+[N]=[M\sqcup N]$.

[F1] The operation is well defined by disjoint unions of bordisms, the disjoint union of finitely many presented smooth manifolds carries its canonical smooth structure, and the empty class is the zero of the displayed operation ([[def-unoriented-and-oriented-bordism-groups]], [[prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds]]).

[F2] A map from a finite disjoint union with its canonical smooth structure is smooth exactly when each restriction to a summand is smooth, so the canonical bijections $(M\sqcup N)\sqcup P\to M\sqcup(N\sqcup P)$ and $M\sqcup N\to N\sqcup M$ that act as the identity on summands are diffeomorphisms, and they respect the disjoint-union orientations ([[prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth]], [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[F3] The cylinder $M\times[0,1]$ with its product structure and collars is a bordism from $M$ to $M$, and with the orientation $(-1)^n(o\otimes dt)$ it is an oriented bordism from $(M,o)$ to $(M,o)$; the induced orientation on $M\times\{0\}$ is $-o$ and on $M\times\{1\}$ is $o$ ([[lem-cylinders-give-reflexivity-of-cobordism]], [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[def-product-orientation]], [[prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary]], [[def-induced-boundary-orientation]]).

[F4] Cobordism is an equivalence relation in both theories, and a closed manifold is null-cobordant exactly when it is cobordant to the empty manifold; the class of a null-cobordant manifold is zero in the corresponding bordism set ([[thm-smooth-cobordism-is-an-equivalence-relation]], [[def-null-cobordant-closed-manifold]], [[def-oriented-smooth-cobordism]], [[def-unoriented-smooth-cobordism-of-closed-manifolds]]).

[F5] A group is a monoid in which every element is invertible; the axioms are associativity (G1), a two-sided identity (G2) and two-sided inverses (G3), and it is abelian when the operation is commutative ([[def-group]]).

## Proof

1.1 (Diffeomorphic manifolds are cobordant; the class of a diffeomorphism type.) Let $\varphi:M\to N$ be a diffeomorphism of closed smooth $n$-manifolds. Then $W:=M\times[0,1]$ with the collars $\theta_0(s,x)=(x,s)$ and $\theta_1(s,y)=(\varphi^{-1}(y),1+s)$ is a bordism from $M$ to $N$, because $\theta_0$ and $\theta_1$ are smooth embeddings onto collar neighbourhoods of $M\times\{0\}$ and $M\times\{1\}$ (identified with $N$ by $\varphi$) and the boundary parts cover $\partial W$. If $\varphi$ is orientation-preserving between $(M,o)$ and $(N,p)$, orient $W$ by $(-1)^n(o\otimes dt)$; by [F3] the incoming face carries $-o$ and the outgoing face carries $p$, so $W$ is an oriented bordism from $(M,o)$ to $(N,p)$. Consequently diffeomorphic closed manifolds, respectively orientation-preserving diffeomorphic closed oriented manifolds, are cobordant. [F1, F3, F4]

1.2 (Identity.) The empty $n$-manifold is a summand with $M\sqcup\varnothing=M$ and $\varnothing\sqcup M=M$ as smooth manifolds, and it is null-cobordant; hence $[M]+0=[M]=0+[M]$ in both theories. [F1, F4]

1.3 (Unoriented inverses: exponent two.) Let $M$ be a closed smooth $n$-manifold. Consider $W=M\times[0,1]$ and view its whole boundary $\partial W=(M\times\{0\})\sqcup(M\times\{1\})$ as the incoming part, with no outgoing part: the map $\theta:[0,1)\times(M\sqcup M)\to W$ given by $\theta(s,x)=(x,s/2)$ on the first summand and $\theta(s,x)=(x,1-s/2)$ on the second has disjoint open images $M\times[0,1/2)$ and $M\times(1/2,1]$ whose union is an open neighbourhood of $\partial W$, is a smooth embedding onto it, and satisfies $\theta(\{0\}\times(M\sqcup M))=\partial W$. Hence $M\sqcup M$ is null-cobordant, so $[M]+[M]=[M\sqcup M]=0$ in $\Omega_n^{O}$. [F1, F3, F4]

2.1 (Associativity.) Let $M,N,P$ be closed smooth $n$-manifolds. The canonical bijection $a:(M\sqcup N)\sqcup P\to M\sqcup(N\sqcup P)$ which is the identity on each summand is a diffeomorphism by [F2]; in the oriented theory it preserves the disjoint-union orientations. By step 1.1 the two sides are cobordant (oriented cobordant), so $([M]+[N])+[P]=[M]+([N]+[P])$ by [F1]. [F1, F2, step 1.1]

2.2 (Commutativity.) The canonical bijection $M\sqcup N\to N\sqcup M$ swapping the summands is a diffeomorphism by [F2] and preserves the disjoint-union orientations; by step 1.1 it gives $[M]+[N]=[N]+[M]$ in both theories. [F1, F2, step 1.1]

2.3 (Oriented inverses.) Let $(M,o)$ be a closed oriented $n$-manifold and orient $W=M\times[0,1]$ by $(-1)^n(o\otimes dt)$; by [F3] the induced boundary orientations are $-o$ on $M\times\{0\}$ and $o$ on $M\times\{1\}$. View the whole boundary as the incoming part with the single collar $\theta$ of step 1.3; the incoming face is $M\sqcup(-M)$ with the orientation of the source $o\sqcup(-o)$, and the required condition is that the induced orientation equal its negative, namely $(-o)\sqcup o$; this is exactly what the two faces carry. Hence $M\sqcup(-M)$ is null-cobordant and $[M,o]+[-M]=0$ in $\Omega_n^{SO}$. [F1, F3, F4, step 1.3]

3.1 (The group axioms.) By [F5], associativity (G1) is step 2.1, the two-sided identity (G2) is step 1.2, and two-sided inverses (G3) are steps 1.3 and 2.3; commutativity is step 2.2. Therefore $(\Omega_n^{O},+)$ and $(\Omega_n^{SO},+)$ are abelian groups for every $n\ge0$. The construction uses only the supplied smooth structures and collars, so no choice principle is used. [F5, step 2.1, step 2.2, step 1.2, step 1.3, step 2.3] ∎
