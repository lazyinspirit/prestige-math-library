---
id: thm-lefschetz-hopf-index-formula
kind: theorem
title: Lefschetz-Hopf index formula
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-global-geometric-lefschetz-number
  - def-algebraic-lefschetz-number
  - lem-local-fixed-point-index-splits-under-perturbation
  - lem-orientation-twisted-diagonal-realizes-the-lefschetz-trace
  - prop-singular-homology-of-a-disjoint-union-is-the-direct-sum
  - lem-a-closed-discrete-subset-of-a-compact-space-is-finite
  - thm-hausdorff-iff-the-diagonal-is-closed
  - cor-homotopic-maps-induce-the-same-map-on-singular-homology
  - def-connected-component-and-quasicomponent
  - def-axiom-of-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall
        1974; complete 236-page PDF)
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 3 §4, printed pp. 119-131 (Lefschetz fixed-point theory on a
        compact oriented manifold: global intersection number, local numbers,
        splitting) and §5, printed pp. 134-137 (the flow/Lefschetz derivation of
        Poincare-Hopf)"
    - title: Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential
        Topology, Winter 2023 (complete 63-page lecture notes)
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: Lecture 17, printed pp. 54-55 (Theorem 155 and the diagonal-splitting
        proof, with sign det(I-df))
    - title: Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro
        Brasileiro de Topologia, Rio Claro 2006 (complete notes)
      url: https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf
      locator: "Lecture II §§5-6, printed pp. 11-16 (Theorem 5.1: I(f)=L(f) for
        compact connected oriented smooth manifolds, including the index
        axioms)"
dependency_level: 10
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $M$ be a closed smooth $n$-manifold, $n\ge1$, possibly disconnected or nonorientable, and let $f:M\to M$ be smooth with only isolated fixed points. Then $\operatorname{Fix}(f)$ is finite, its geometric index sum $I(f)=\sum_x\operatorname{ind}_x(f)$ is defined ([[def-global-geometric-lefschetz-number]]), and $I(f)=L(f)$, where $L(f)$ is the algebraic Lefschetz number of [[def-algebraic-lefschetz-number]].

## Facts & Assumptions

**Given:** $M,n,f$ and AC as in the statement.

[F1] A continuous self-map of a Hausdorff space has a closed fixed set, since the diagonal is closed; a closed discrete subset of a compact space is finite ([[thm-hausdorff-iff-the-diagonal-is-closed]], [[lem-a-closed-discrete-subset-of-a-compact-space-is-finite]]).

[F2] [[lem-local-fixed-point-index-splits-under-perturbation]] permits a smooth homotopy supported in a small ball isolating a fixed point which replaces that point by finitely many nondegenerate fixed points with the same total index.

[F3] [[lem-orientation-twisted-diagonal-realizes-the-lefschetz-trace]] proves $I(g)=L(g)$ for every smooth self-map of a connected closed manifold whose fixed points are nondegenerate, without an orientation or lifting hypothesis.

[F4] Manifold components are open; compactness gives finitely many. Their rational homology groups decompose as a finite direct sum, and the trace is the sum of the diagonal component-block traces ([[def-connected-component-and-quasicomponent]], [[prop-singular-homology-of-a-disjoint-union-is-the-direct-sum]], [[def-algebraic-lefschetz-number]]). Homotopic maps induce the same homology maps ([[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]).

## Proof

1.1 By [F1] isolation and compactness make the fixed set finite. Choose pairwise disjoint admissible balls isolating its points. Applying [F2] successively in these balls yields a smooth map $g$ homotopic to $f$, unchanged outside the balls, with every fixed point nondegenerate and $I(g)=I(f)$. There are no additional fixed points outside the balls because $g=f$ there, and the finite index sum is defined by [[def-global-geometric-lefschetz-number]]. [given, F1, F2]

2.1 Each connected component $C$ is carried by $g$ into a single component, since its image is connected. If that component is $C$, [F3] applies to the self-map $g|_C$ and gives $I(g|_C)=L(g|_C)$. If it is a different component, $C$ has no fixed points, and the source-to-$C$ diagonal block of $g_*$ on the homology direct sum in [F4] is zero. Thus that component contributes zero both to the index sum and to the trace. Summing the finitely many diagonal-block identities gives $I(g)=L(g)$. [F3, F4, step 1.1]

3.1 Since $f$ and $g$ are homotopic, [F4] gives $L(f)=L(g)$. Combining with the preceding steps gives $I(f)=I(g)=L(g)=L(f)$. AC is inherited from the finite-dimensional Lefschetz-number and twisted diagonal suppliers; the perturbations and the finite component decomposition require no global orientation or lift of either map. [F4, step 1.1, step 2.1] ∎
