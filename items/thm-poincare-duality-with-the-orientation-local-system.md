---
id: thm-poincare-duality-with-the-orientation-local-system
kind: theorem
title: Poincare duality with the orientation local system
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-compactly-supported-cohomology-with-local-coefficients, prop-the-manifold-orientation-system-is-a-local-system, lem-canonical-twisted-fundamental-classes-over-compact-subsets, def-cup-and-cap-products-with-local-coefficient-pairings, prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism, thm-cellular-cochains-compute-cohomology-with-local-coefficients, thm-excision-and-mayer-vietoris-with-local-coefficients, thm-five-lemma-for-a-morphism-of-long-exact-sequences, lem-manifold-exhaustion-passes-local-duality-to-the-colimit, thm-rationals-countable, lem-q-and-irrationals-dense-r, thm-poincare-duality-for-oriented-topological-manifolds, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §2.2, Theorem 5.7 and stronger form, pp.101–103
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
    - title: Hatcher, Algebraic Topology, Theorem 3H.6, pp.335–336
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
    - title: Hatcher, correction to the last two paragraphs of Algebraic Topology p.335
      url: https://pi.math.cornell.edu/~hatcher/AT/Pduality.pdf
      locator: Complete one-page correction, including the twisted fundamental class and the two constant/orientation coefficient duality isomorphisms
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Assume AC. Let $M$ be a boundaryless Hausdorff second-countable $n$-manifold, $R$ a commutative unital ring, and $\mathcal L$ a left $R$-module local system. Using the pairing $\mathcal L\otimes_R\mathcal O_M^R\to\mathcal O_M^R\otimes_R\mathcal L$, $\ell\otimes o\mapsto o\otimes\ell$, cap with the canonical twisted support classes gives isomorphisms
$$D_M:H_c^k(M;\mathcal L)\xrightarrow{\sim}H_{n-k}(M;\mathcal O_M^R\otimes_R\mathcal L)$$
for all integers $k$, componentwise. If $M$ is compact, $H_c^k=H^k$. If
$M$ is $R$-oriented, a chosen trivialization
$\mathcal O_M^R\cong\underline R$ identifies the target for arbitrary
$\mathcal L$ with $H_{n-k}(M;\mathcal L)$; the published oriented
Poincare-duality map is recovered specifically when
$\mathcal L=\underline R$.

## Facts & Assumptions

**Given:** $M,n,R,\mathcal L$, and AC as in the statement.

[F1] [[def-compactly-supported-cohomology-with-local-coefficients]] gives support representatives and their common-larger-support equality criterion.

[F2] [[lem-canonical-twisted-fundamental-classes-over-compact-subsets]] gives $[M]^\mathrm{tw}_K$ with compatible support restriction, and [[def-cup-and-cap-products-with-local-coefficient-pairings]] defines the required relative cap maps and their boundary identity.

[F3] [[thm-excision-and-mayer-vietoris-with-local-coefficients]] gives exact local-coefficient Mayer--Vietoris sequences. [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]] gives the finite gluing step.

[F4] [[lem-manifold-exhaustion-passes-local-duality-to-the-colimit]] supplies, under [[def-axiom-of-choice]], a countable exhaustion by finite unions of relatively compact coordinate balls. Its geometric construction is independent of coefficients.

[F5] [[thm-poincare-duality-for-oriented-topological-manifolds]] is the
constant-system oriented comparison to be recovered when
$\mathcal L=\underline R$.

[F6] [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]] computes the disk-boundary support pair, and [[prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism]] gives contraction invariance with its transport comparison.

[F7] [[thm-rationals-countable]] and [[lem-q-and-irrationals-dense-r]] give the enumerated rational-box cover used inside a coordinate chart.

## Proof

**Proof technique:** direct.

1.1 If $a\in H^k(M,M\setminus K;\mathcal L)$ represents a compact-support class, define $D_M[a]=a\cap[M]^\mathrm{tw}_K$. The supportwise relative cap in [F2] has the displayed absolute target. Enlarging $K$ restricts the twisted class and commutes with cap, so [F1] makes the value independent of the support representative. Changes of cocycle or cycle representatives are boundaries by the cap identity. [F1, F2]

1.2 Let $U$ be a coordinate ball and choose its center $x$. Transport from $x$ trivializes $\mathcal L|_U$ with fiber $P=\mathcal L_x$ and trivializes $\mathcal O_M^R|_U$ after either local orientation choice. Closed concentric supports are cofinal. Excision and radial deformation identify each support pair with the disk-boundary CW pair, whose relative cellular local cochain complex is $P$ in degree $n$ and zero elsewhere. The cellular-cochain comparison therefore gives $H_c^k(U;\mathcal L|_U)=P$ for $k=n$ and zero otherwise. Contracting $U$ to $x$, with its transport coefficient comparison, gives $H_{n-k}(U;(\mathcal O_M^R\otimes\mathcal L)|_U)=P$ for $k=n$ and zero otherwise. In degree $n$, front evaluation on the canonical class sends $p\in P$ to the point class with coefficient $o\otimes p$; under the target trivialization this is $p$. Thus $D_U$ is an isomorphism in every degree. Changing $o$ negates both orientation factors and leaves this calculation unchanged. [F1, F2, F6]

2.1 The same result holds on any open subset $W$ of a coordinate ball. In coordinates, density and countability of the rationals give an enumerated cover of $W$ by bounded rational boxes. For compact supports $K\subset U$ and $L\subset V$, the relative local-cochain short exact sequence gives the compact-support Mayer--Vietoris sequence after taking the filtered colimit: exactness follows directly because a colimit-kernel representative becomes zero at one common larger support and can be lifted there. Together with the homology sequence in [F3], the cap boundary identity gives a commuting ladder. Finite unions of boxes now satisfy duality by induction, since an intersection of two boxes is empty or a box, and the five lemma in [F3] gives the union. The increasing union of the first $j$ boxes is all of $W$. Every compact-support cohomology representative is contained in one stage, and every finite homology cycle and bounding chain lies in one stage; the common-stage tests prove that both groups are the corresponding colimits. Cap is compatible with the stage maps, so the stage isomorphisms pass to $W$. No coefficient trivialization is chosen beyond the one already fixed on the ambient coordinate ball. [F1, F2, F3, F7, step 1.2]

3.1 Induct on a finite family of coordinate balls $B_1,\ldots,B_m$. The empty union has zero groups and one ball is step 1.2. Put $V=B_1\cup\cdots\cup B_{m-1}$ and $B=B_m$. By induction duality holds on $V$ and by step 1.2 on $B$. The intersection $V\cap B$ is an open subset of $B$, so step 2.1 applies with the restrictions of both systems. The cap-commuting Mayer--Vietoris ladder and the five lemma in [F3] give duality on $V\cup B$. [F2, F3, step 1.2, step 2.1]

4.1 Use AC through [F4] to obtain $U_1\subseteq U_2\subseteq\cdots$ covering $M$, each a finite union of coordinate balls and with compact closure in the next. Step 3.1 gives duality on every $U_j$. The geometric colimit proof works verbatim for local coefficients: a compact-support class is represented inside one $U_j$ by cofinality of the compact closures, while a local homology class and any chain witnessing its vanishing use finitely many singular simplices and hence occur in one stage. These representative and equality tests identify the two colimits with the groups on $M$. Compatibility from step 1.1 identifies the colimit of $D_{U_j}$ with $D_M$, so it is an isomorphism. AC is used exactly to choose the countable family of coordinate neighborhoods in [F4]; the local calculation above avoids a universal-coefficient choice. [F1, F2, F4, step 1.1, step 3.1]

5.1 If $M$ is compact, support $K=M$ is terminal in [F1]. If an $R$-orientation is supplied, its generator section gives $\mathcal O_M^R\cong\underline R$, so the target for arbitrary $\mathcal L$ becomes $H_{n-k}(M;\mathcal L)$. If moreover $\mathcal L=\underline R$, the canonical twisted local class represented by an orientation cycle $o_x$ carrying coefficient $o_x\otimes1_R$ becomes that ordinary oriented cycle with coefficient one. Thus $[M]^\mathrm{tw}_K$ corresponds to the usual oriented class, and in this constant-coefficient case the front/back cap formula is the published one in [F5]. Empty manifolds, zero rings and zero systems give zero maps; for $n=0$ step 1.2 is degree-zero vertex evaluation. Degrees outside $0\le k\le n$ have zero local models and hence zero global groups by the same gluing and exhaustion. Compact supports meet only finitely many open components, and chains have finite component support, so the construction splits componentwise without choosing orientations or basepoints on all components. [F1, F2, F5, step 1.2, step 4.1] ∎
