---
id: thm-cellular-cochains-compute-cohomology-with-local-coefficients
kind: theorem
title: Cellular cochains compute cohomology with local coefficients
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-homology-and-cohomology-with-local-coefficients, prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism, thm-cellular-chains-compute-homology-with-local-coefficients, thm-pair-long-exact-sequences-with-local-coefficients, lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs, thm-excision-and-mayer-vietoris-with-local-coefficients, thm-excision-for-singular-cohomology, thm-long-exact-sequence-of-a-pair-in-singular-cohomology, def-axiom-of-choice]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §§2.1 and 4, pp.98–100, 107–109
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Assume AC. For a CW pair $(X,A)$ and local system $\mathcal L$, the cellular cochain complex obtained from the skeletal filtration computes singular cohomology with local coefficients:
$$H^n\bigl(C^*_{\mathrm{cell}}(X,A;\mathcal L)\bigr)\cong H^n(X,A;\mathcal L).$$
For a connected pair, it is the equivariant-Hom complex on cellular chains after the published right chain action is converted to the left action $g\cdot c=c\cdot g^{-1}$; equivalently its cochains satisfy $\varphi(c\cdot g)=g^{-1}\varphi(c)$. The comparison is natural for cellular maps with correctly directed coefficient morphisms.

## Facts & Assumptions

**Given:** AC, a CW pair $(X,A)$, and a left $R$-module local system $\mathcal L$.

[F1] [[def-homology-and-cohomology-with-local-coefficients]] gives intrinsic relative local cochains and the universal-cover equivariant-Hom model.

[F2] [[thm-cellular-chains-compute-homology-with-local-coefficients]] proves the consecutive-skeleton local calculation, including the group-ring incidence description.

[F3] [[thm-pair-long-exact-sequences-with-local-coefficients]] gives the local cohomology pair sequences; [[thm-excision-for-singular-cohomology]] and [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] control their ordinary model.

[F4] [[lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs]] identifies the telescope of the skeletal filtration with $(X,A)$ up to pair homotopy, and [[prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism]] makes that identification valid with the pulled-back local system.

[F5] [[thm-excision-and-mayer-vietoris-with-local-coefficients]] proves local-coefficient cohomological excision and cochain Mayer--Vietoris by a simplexwise small-chain homotopy equivalence, valid for arbitrary coefficient fibers.

[A1] [[def-axiom-of-choice]] permits the simultaneous choice of a primitive
in every nonempty componentwise primitive set.

## Proof

**Proof technique:** direct.

1.1 Apply the local-coefficient cohomological excision of [F5], using its simplexwise small-chain inverse, to the open-cell neighborhoods in the relative $m$-skeleton. A separated open $m$-cell has constant coefficients after transport from one point, and the relative disk-boundary cellular cochain complex has one copy of that fiber in degree $m$ and zero elsewhere. Hence $H^q(X^m\cup A,X^{m-1}\cup A;\mathcal L)=0$ for $q\ne m$, while the degree-$m$ group is the product of the dual cell-coordinate groups, precisely $C^m_{\mathrm{cell}}(X,A;\mathcal L)$. [F1, F2, F3, F5]

1.2 In connected universal-cover coordinates, $g\cdot c=c\cdot g^{-1}$ makes the cellular boundary left $R[\pi]$-linear and applying $\operatorname{Hom}_{R[\pi]}(-,\mathcal L_x)$ gives the cellular coboundary by precomposition. Rewriting left equivariance at $c\cdot g=g^{-1}\cdot c$ gives $\varphi(c\cdot g)=g^{-1}\varphi(c)$, so every map is typed as claimed. [F1, F2]

2.1 For the triple $X^{m-1}\cup A\subseteq X^m\cup A\subseteq X^{m+1}\cup A$, the connecting maps in [F3] compose to the cellular coboundary. Exactness and the concentration in step 1.1 give, by a direct kernel-image chase, $\ker d^n/\operatorname{im}d^{n-1}\cong H^n(X^{n+1}\cup A,A;\mathcal L)$. Attaching cells in dimensions above $n+1$ leaves this group unchanged because the two adjacent relative groups vanish. [F2, F3, step 1.1]

3.1 For an infinite CW complex, use the telescope in [F4] and split it into alternating closed skeletal cylinders with overlapping half-cylinders. The local cochain Mayer--Vietoris sequence of [F5], applied to interiors of these cylinder neighborhoods, gives the exact sequence for this cover. The pieces are disconnected unions. By [A1], a family of componentwise cocycles is a coboundary in their product complex exactly when one may choose a primitive in every component; hence the cohomology of each piece is the product of the cohomologies of its skeletal components. Retraction of the pieces onto the skeleta then identifies the Mayer--Vietoris product map with $\Delta:\prod_mH^q(X^m,A^m;\mathcal L)\to\prod_mH^q(X^m,A^m;\mathcal L)$, where $\Delta((a_m))_m=a_m-i_m^*a_{m+1}$. Step 2.1 says that both the degree-$n$ and degree-$(n-1)$ inverse systems are eventually constant with isomorphism transition maps. For any eventually constant system, $\ker\Delta$ is its stable value, while $\Delta$ is onto: set the first stable-tail coordinate to zero, recurse forward there through the inverse transition maps, and then recurse through the finitely many earlier coordinates toward zero. Exactness therefore identifies $H^n$ of the telescope with the stable value $H^n(X^{n+1}\cup A,A;\mathcal L)$. Pair homotopy invariance from [F4] identifies this with $H^n(X,A;\mathcal L)$, with no inverse-limit remainder. [A1, F1, F3, F4, F5, step 1.1, step 2.1]

4.1 A cellular map preserves the skeletal triples and their connectors, and [F3] makes the restriction maps natural for a coefficient morphism $f^*\mathcal K\to\mathcal L$. The telescope splitting and the map $\Delta$ are natural as well. Therefore the identifications in steps 1.1--3.1 commute with induced cochain maps. Empty pairs, no cells, zero systems/rings, degree zero, negative degrees, and disconnected products are all covered by the same componentwise exact chase. AC is used only in Step 3.1 to assemble componentwise primitives. [A1, F3, F4, step 1.1, step 2.1, step 3.1, step 1.2] ∎
