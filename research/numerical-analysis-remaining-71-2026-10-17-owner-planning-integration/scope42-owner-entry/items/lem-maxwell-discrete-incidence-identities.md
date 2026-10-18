---
id: lem-maxwell-discrete-incidence-identities
kind: lemma
title: Incidence curl has zero discrete divergence and gradient curl
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-maxwell-discrete-cochain-and-yee-grid]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 8
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "§8.3, printed pp. 170–172: oriented simplex degrees of freedom and the discrete de Rham incidence sequence."
verification:
  precheck: pass
---

## Statement

For the incidence matrices $G,C,D$ of [[def-maxwell-discrete-cochain-and-yee-grid]], one has $CG=0$ and $DC=0$. The conclusion holds for the full periodic complex and for the PEC mixed closure defined there.

## Facts & Assumptions

**Given:** A finite oriented cell complex and the relative-or-periodic boundary convention in [[def-maxwell-discrete-cochain-and-yee-grid]].

[F1] $G,C,D$ are the transposes of the oriented boundary maps on vertices, edges, faces, and volumes; the PEC operators are induced on the quotient by the boundary subcomplex. ([[def-maxwell-discrete-cochain-and-yee-grid]])

## Proof


1.1 On an oriented triangle with ordered vertices $[v_0,v_1,v_2]$, the coboundary of a vertex cochain $q$ evaluated on the triangle is its oriented edge sum $(q(v_1)-q(v_0))+(q(v_2)-q(v_1))+(q(v_0)-q(v_2))=0$. Hence each triangular face row of $CG$ vanishes. The same calculation is the transpose of $partial_1\partial_2=0$ under the incidence convention in [F1]. [F1, algebra]

1.2 On an oriented tetrahedron, each edge in the boundary of its oriented boundary is obtained by deleting two different vertices. For each such pair of deleted indices, the two possible deletion orders have opposite signs, since $(-1)^i(-1)^{j-1}+(-1)^j(-1)^i=0$ for $i<j$. Thus every edge coefficient in the boundary-of-boundary is zero, so the cell row of $DC$ vanishes. This is the transpose of $\partial_2\partial_3=0$. [F1, algebra]

2.1 Periodic identification identifies faces with the prescribed orientation, so the quotient cell structure retains oriented boundary-of-boundary cancellation. For PEC, let $\bar G,\bar C,\bar D$ be the absolute incidence matrices and let $P_e$ select interior edges and $P_v$ select interior vertices. The matrices are $G=P_e\bar G P_v$, $C=\bar C P_e^T$, and $D=\bar D$. An interior vertex is incident to no boundary edge, so $P_e^TP_e\bar G P_v=\bar G P_v$. Hence $CG=\bar C\bar G P_v=0$, while $DC=\bar D\bar C P_e^T=0$. This retains boundary-face magnetic cochains although boundary electric edge values are fixed. [F1, step 1.1, step 1.2, algebra] ∎
