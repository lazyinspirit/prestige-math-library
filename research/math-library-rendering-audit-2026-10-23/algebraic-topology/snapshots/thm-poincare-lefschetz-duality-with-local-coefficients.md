---
id: thm-poincare-lefschetz-duality-with-local-coefficients
kind: theorem
title: Poincare–Lefschetz duality with local coefficients
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-poincare-duality-with-the-orientation-local-system, def-orientation-local-system-on-a-manifold-with-boundary, lem-canonical-twisted-fundamental-classes-over-compact-subsets, def-cup-and-cap-products-with-local-coefficient-pairings, def-compactly-supported-cohomology-with-local-coefficients, prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism, thm-pair-long-exact-sequences-with-local-coefficients, thm-excision-and-mayer-vietoris-with-local-coefficients, thm-topological-collaring-for-manifold-boundaries, thm-five-lemma-for-a-morphism-of-long-exact-sequences, thm-poincare-lefschetz-duality, def-axiom-of-choice]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §2.2, Poincare–Lefschetz extension, pp.101–103
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
    - title: Hatcher, Algebraic Topology, Theorem 3.43, pp.253–254
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Assume AC. Let $M$ be a compact $n$-manifold and let $A=\partial M$; let $R$ be a commutative unital ring and $\mathcal L$ an $R$-module local system on $M$. Cap with the canonical relative twisted fundamental class gives isomorphisms, for every integer $k$,
$$H^k(M;\mathcal L)\xrightarrow{\sim}H_{n-k}(M,A;\mathcal O_M^R\otimes_R\mathcal L),\qquad H^k(M,A;\mathcal L)\xrightarrow{\sim}H_{n-k}(M;\mathcal O_M^R\otimes_R\mathcal L).$$
Here $\mathcal O_M^R$ is the collar extension of the interior orientation system. The statement is for the actual boundary $A$, not an arbitrary subspace of $M$.

## Facts & Assumptions

**Given:** $M,A,n,R,\mathcal L$ and AC as in the statement. Put $N=M\setminus A$ and $\mathcal P=\mathcal O_M^R\otimes_R\mathcal L$.

[F1] [[lem-canonical-twisted-fundamental-classes-over-compact-subsets]] gives $z=[M,A]^\mathrm{tw}$ and $\partial z=[A]^\mathrm{tw}$ under the boundary-system identification of [[def-orientation-local-system-on-a-manifold-with-boundary]].

[F2] [[def-cup-and-cap-products-with-local-coefficient-pairings]] defines both relative cap maps and gives their boundary identity.

[F3] [[thm-poincare-duality-with-the-orientation-local-system]] gives twisted duality on $N$ and on the compact boundaryless manifold $A$.

[F4] [[thm-topological-collaring-for-manifold-boundaries]] supplies collar cores and makes $N\hookrightarrow M$ a homotopy equivalence. [[prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism]] applies this equivalence with the transport identifications of the coefficient systems.

[F5] [[thm-pair-long-exact-sequences-with-local-coefficients]] and [[thm-excision-and-mayer-vietoris-with-local-coefficients]] give the pair and excision maps. [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]] gives the exact-ladder comparisons.

[F6] [[def-compactly-supported-cohomology-with-local-coefficients]] gives the support colimit. [[def-axiom-of-choice]] is used only through [F3].

## Proof

**Proof technique:** direct.

1.1 If $A=\varnothing$, $M=N$ is compact, [F1] identifies $z$ with the compact twisted fundamental class, and both displayed maps are [F3]. This includes compact zero-manifolds. Hence suppose $A\ne\varnothing$, so $n\ge1$. Choose a collar and put $C_d=c(A\times[0,d))$, $K_d=M\setminus C_d$ for $0<d<1$. Every compact subset $L$ of $N$ lies in some $K_d$. Indeed, on a fixed closed collar segment the height coordinate has compact image on $L$, and that image omits zero because $L\cap A=\varnothing$; hence its positive part has a positive minimum. Points outside the segment already lie in every sufficiently small core. Choosing $d$ below that minimum gives $L\subseteq K_d$. [F4]

2.1 The collar retraction $C_d\simeq A$, the natural cohomology pair sequences, and the five lemma give $H^k(M,C_d;\mathcal L)\cong H^k(M,A;\mathcal L)$. Removing the closed boundary inside $C_d$, local-coefficient excision gives $H^k(M,C_d;\mathcal L)\cong H^k(N,N\setminus K_d;\mathcal L|_N)$. Both isomorphisms commute with decreasing $d$, because they are induced by inclusions, restrictions, and the collar homotopies with their coefficient-transport comparisons. Cofinality from step 1.1 and the common-support criterion [F6] therefore give an isomorphism $J:H^k(M,A;\mathcal L)\xrightarrow{\sim}H_c^k(N;\mathcal L|_N)$. [F4, F5, F6, step 1.1]

3.1 Under $J$, cap with $z$ is cap with the interior support class followed by inclusion $N\hookrightarrow M$. Indeed [F1] constructed $z$ so that its image in $H_n(M,C_d;\mathcal O_M^R)$ is the excision image of $[N]^\mathrm{tw}_{K_d}$. Represent a class by a cocycle vanishing on $C_d$ and represent the equality of these two relative classes by a boundary plus a chain in $C_d$. The cap boundary identity in [F2] turns the boundary term into a target boundary, and the $C_d$ term caps to zero. Thus the two cap classes agree. Twisted duality on $N$ is an isomorphism by [F3], and inclusion $N\hookrightarrow M$ is a homotopy equivalence with the coefficient comparison in [F4]. Together with step 2.1 this proves the second displayed isomorphism. [F1, F2, F3, F4, step 2.1]

4.1 For the first displayed map, compare the five-term cohomology window $H^{k-1}(A;\mathcal L)\to H^k(M,A;\mathcal L)\to H^k(M;\mathcal L)\to H^k(A;\mathcal L)\to H^{k+1}(M,A;\mathcal L)$ with the homology window $H_{n-k}(A;\mathcal P)\to H_{n-k}(M;\mathcal P)\to H_{n-k}(M,A;\mathcal P)\to H_{n-k-1}(A;\mathcal P)\to H_{n-k-1}(M;\mathcal P)$. Use vertically, in order, twisted duality on $A$, the second isomorphism just proved, the desired first cap map, twisted duality on $A$, and the next-degree second isomorphism. The boundary identification in [F1] identifies $\mathcal P|_A$ with $\mathcal O_A^R\otimes_R\mathcal L|_A$. Both rows are exact by [F5]. [F1, F3, F5, step 3.1]

5.1 The middle inclusion and quotient squares commute because they use the same cap chains before and after passage to the relevant quotient. For a degree-$(k-1)$ boundary cocycle $a$, choose an extension $\widetilde a$ to $M$. The positive cohomology connector is represented by $\delta\widetilde a$, and the cap boundary formula gives $\delta\widetilde a\cap z=\widetilde a\cap\partial z+(-1)^k\partial(\widetilde a\cap z)$. Since $\partial z=[A]^\mathrm{tw}$, this proves the first connector square; the same calculation one degree later proves the last. For the homology connector square, a degree-$k$ cocycle $b$ gives $\partial(b\cap z)=(-1)^k b|_A\cap\partial z$, so multiplying that homology connector by $(-1)^k$ makes the square commute. Multiplication by this unit preserves exactness. Thus [F5]'s five lemma applies to the ladder in step 4.1 and proves the first displayed map is an isomorphism. [F1, F2, F5, step 4.1]

6.1 Empty $M$ and the zero ring or zero system give the unique isomorphisms of zero groups. The endpoint degrees $k=0,n$ occur in the same exact windows; negative chain and cochain degrees vanish. Disconnected manifolds split componentwise, and compactness makes only finitely many components occur. The boundary may be empty or disconnected. The collar choice changes $\mathcal O_M^R$ only by the natural isomorphism specified in its definition, under which the class and cap maps correspond by their local characterization. The sole AC use is inherited from boundaryless twisted duality [F3], namely its countable coordinate-neighborhood selection; collar cores, individual representatives, and finite exact windows add no choice. The published oriented Poincare--Lefschetz theorem is recovered after an orientation trivializes $\mathcal O_M^R$. [F1, F3, F4, F6, step 1.1, step 3.1, step 5.1] ∎
