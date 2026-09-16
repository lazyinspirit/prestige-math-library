---
id: thm-cellular-chains-compute-homology-with-local-coefficients
kind: theorem
title: Cellular chains compute local homology
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-homology-and-cohomology-with-local-coefficients, lem-twisted-boundaries-square-to-zero-and-are-independent-of-lift-bases, thm-excision-for-singular-homology, lem-compact-cw-images-have-finite-cell-support-without-choice]
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
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §2.1, pp.98–100
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Let $(X,A)$ be a CW pair and $\mathcal L$ a left $R$-module local system on $X$. The cellular local chain complex computes singular local homology:
$$H_n\bigl(C_*^{\mathrm{cell}}(X,A;\mathcal L)\bigr)\cong H_n(X,A;\mathcal L).$$
The comparison is natural for cellular maps with correctly directed coefficient morphisms. Intrinsically,
$$C_n^{\mathrm{cell}}(X,A;\mathcal L)\cong H_n(X^n\cup A,X^{n-1}\cup A;\mathcal L).$$
If a basepoint and one oriented lift of each cell outside $A$ are supplied on every component, the $n$th group is the direct sum of the corresponding coefficient fibers, and its boundary is the signed $R[\pi]$ incidence matrix acting through monodromy.

## Facts & Assumptions

**Given:** A CW pair $(X,A)$, a commutative unital ring $R$, and an $R$-module local system $\mathcal L$.

[F1] [[def-homology-and-cohomology-with-local-coefficients]] defines the singular local groups, while [[lem-twisted-boundaries-square-to-zero-and-are-independent-of-lift-bases]] makes the cellular tensor complex independent of supplied lift bases.

[F2] [[thm-excision-for-singular-homology]] states the ordinary constant-coefficient excision theorem. Its subdivision and prism calculation is reconstructed with local transports in Step 1.1; no local-coefficient skeletal conclusion is attributed to the ordinary cellular theorem.

[F3] [[lem-compact-cw-images-have-finite-cell-support-without-choice]] places the image of every compact simplex in a finite CW subcomplex without using a selection principle.

## Proof

**Proof technique:** direct.

1.1 Barycentric subdivision works for intrinsic local chains by transporting each coefficient from the original first vertex to the first vertex of each subsimplex along the straight segment inside the original simplex. The paired-face proof used for ordinary subdivision has only triangular path comparisons, which agree by local-system functoriality; the usual subdivision prism therefore gives $\partial D+D\partial=1-S$. For a finite chain, a sufficiently high subdivision is small relative to any excisive open cover. This reproduces the chain-homotopy and excision argument of [F2] with fibers tracked, without assuming the later general local-excision theorem. [F1, F2]

2.1 Apply step 1.1 to the pair $(X^m\cup A,X^{m-1}\cup A)$. Excision separates the open $m$-cells outside $A$. On each cell, transport from one supplied point trivializes $\mathcal L$, and the relative pair is the disk-boundary pair; its chain contraction leaves one copy of that fiber in degree $m$ and zero in every other degree. Chains are finite, so the separated relative group is the direct sum over cells. In universal-cover coordinates this is exactly $C_m^{\mathrm{cell}}(\widetilde X,\widetilde A;R)\otimes_{R[\pi]}\mathcal L_x$. Thus consecutive skeletal relative local homology is concentrated in degree $m$, and the displayed intrinsic identification follows. [F1, step 1.1]

3.1 Write $Y_m=X^m\cup A$, with $Y_{-1}=A$, and $C_m=H_m(Y_m,Y_{m-1};\mathcal L)$. The degreewise short exact chain sequence for a triple gives the usual connecting map $[c]\mapsto[\partial c]$ and its exact homology sequence by a direct cycle-boundary chase. Step 2.1 and induction over the skeleta give $H_k(Y_m,A;\mathcal L)=0$ for $k>m$. For fixed $n$, exactness for $(Y_n,Y_{n-1})$ therefore gives an injection $j_n:H_n(Y_n,A;\mathcal L)\to C_n$ with image $\ker\partial_n$. The quotient map $H_{n-1}(Y_{n-1},A;\mathcal L)\to C_{n-1}$ is injective by the same vanishing one skeleton lower, including $n=0$ with $Y_{-1}=A$. Consequently $\ker d_n=\ker\partial_n=j_nH_n(Y_n,A;\mathcal L)$. Finally, exactness for $(Y_{n+1},Y_n)$ and $H_n(Y_{n+1},Y_n;\mathcal L)=0$ give an exact sequence $C_{n+1}\to H_n(Y_n,A;\mathcal L)\to H_n(Y_{n+1},A;\mathcal L)\to0$. Under $j_n$, the first image is exactly $\operatorname{im}d_{n+1}$, so taking the quotient proves $H_n(C_*^{\mathrm{cell}})\cong H_n(Y_{n+1},A;\mathcal L)$. [F1, step 2.1]

4.1 Attaching cells of dimension greater than $n+1$ does not change $H_n$ because their consecutive relative local groups vanish in degrees $n$ and $n+1$. Every finite singular local cycle, and every finite chain bounding it, lies in some finite skeleton modulo $A$: [F3] places each compact simplex image in a finite CW subcomplex, and the finitely many resulting subcomplexes have a common finite maximum cell dimension. Hence passage through the increasing skeleta is respectively surjective and injective on the colimit, and step 3.1 gives the asserted comparison for arbitrary-dimensional and infinite CW pairs. [F3, step 2.1, step 3.1]

5.1 A cellular map preserves skeleta, the exceptional coefficient transport by naturality, and the connecting formula $[c]\mapsto[\partial c]$. Therefore all identifications in steps 2.1–4.1 commute with the chain map from the supplied coefficient morphism. This proves naturality. [step 1.1, step 2.1, step 3.1, step 4.1]

6.1 With supplied oriented lifts, write $\partial\widetilde e_j^n=\sum_i\widetilde e_i^{n-1}\cdot r_{ij}$, where $r_{ij}$ is the finite signed sum of deck elements determined by lifted attaching incidences. Tensoring sends the $j$th fiber element $m$ to the $i$th component $\sum r_{ij}m$. These are group-ring incidences, not ordinary integer degrees. The basis-change lemma [F1] handles altered lifts and orientations. Empty pairs, absent cells, degree zero, the zero ring/system, and disconnected complexes are included componentwise; no choice is made unless a global family of lifts is separately supplied. [F1, F3, step 2.1, step 5.1] ∎
