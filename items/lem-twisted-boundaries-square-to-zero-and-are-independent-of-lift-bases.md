---
id: lem-twisted-boundaries-square-to-zero-and-are-independent-of-lift-bases
kind: lemma
title: Twisted boundaries square to zero and ignore lift bases
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-singular-and-cellular-chain-complexes-with-local-coefficients]
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

The singular and cellular local differentials of [[def-singular-and-cellular-chain-complexes-with-local-coefficients]] square to zero. For a connected CW complex, two supplied choices of basepoint, universal-cover identification, cell lifts, and cell orientations give canonically chain-isomorphic tensor and equivariant-Hom complexes after the corresponding transport/conjugation comparison. In fixed basepoint coordinates, changing cell lifts conjugates every group-ring incidence matrix by diagonal group elements, and changing orientations conjugates it by diagonal signs.

## Facts & Assumptions

**Given:** A commutative unital ring $R$, a space with an $R$-module local system, and, for the cellular assertions, a CW complex and any two supplied choices named in the statement.

[F1] [[def-singular-and-cellular-chain-complexes-with-local-coefficients]] gives the intrinsic face formulas, the balanced tensor model, the left-chain equivariant-Hom model, and the cellular complexes.

## Proof

**Proof technique:** direct.

1.1 Expand $\partial^2(m\sigma)$. As in the ordinary simplicial cancellation, every codimension-two face occurs twice with opposite signs. If neither deletion removes the current first vertex, both coefficients remain $m$. If only the first vertex is removed, both occurrences use the same edge transport. In the remaining exceptional pair, one occurrence transports along $v_0v_1$ and then $v_1v_2$, while the other transports along $v_0v_2$; these paths are endpoint-fixed homotopic inside $\sigma(\Delta^n)$, so functoriality of the local system makes the transports equal. Hence all paired terms cancel and $\partial^2=0$. Reversing these transports gives the identical paired-face calculation for $\delta^2=0$. [F1]

1.2 Fix a basepoint and write a supplied old lifted oriented $n$-cell basis as $e_j$ with $\partial e_j=\sum_i e_i\cdot r_{ij}$. Any supplied new basis has $e'_j=\epsilon_j e_j\cdot a_j$, with $\epsilon_j\in\{1,-1\}$ and $a_j\in\pi$. Then $\partial e'_j=\sum_i e'_i\cdot(\epsilon_i a_i^{-1}r_{ij}a_j\epsilon_j)$. Thus the new incidence matrix is obtained from the old one by the appropriate diagonal changes. In the tensor complex $e'_j\otimes m=\epsilon_j e_j\otimes a_jm$, so diagonal coefficient change is a chain isomorphism; precomposition by its inverse is the corresponding equivariant-cochain isomorphism. [F1, algebra]

2.1 In the universal-cover models, the singular and cellular boundaries already square to zero and are right $R[\pi]$-linear. Therefore $(\partial\otimes1)^2=0$, while precomposition gives $\delta^2\varphi=\varphi\partial^2=0$. The intrinsic/model identifications in [F1] intertwine the formulas, so this also verifies every component and relative quotient or kernel. [F1, step 1.1]

2.2 If the basepoint changes from $x$ to $x'$, a supplied path $q:x\to x'$ identifies the loop groups by $a\mapsto[\bar q*a*q]$ and the fibers by $T_q$. The local-system identity $T_qT_{\bar a}=T_{\overline{\bar q*a*q}}T_q$ intertwines the two left module actions. Lifting $q$ identifies the two pointed universal-cover models and their deck actions, so it yields chain isomorphisms on tensor and equivariant-Hom complexes. A different $q$ changes this comparison by the already accounted-for group action, hence by an isomorphic diagonal basis change rather than by a new homology theory. [F1, step 1.2]

3.1 Steps 1.1–2.2 prove square-zero and all asserted independence statements. They are conditional on supplied lift/orientation/path choices and do not select a set-indexed family, so no AC is used. Empty spaces, zero modules, zero ring, degree zero, absent cells, and degenerate singular simplices are included in the same zero or paired-face calculations. [step 1.1, step 2.1, step 1.2, step 2.2] ∎
