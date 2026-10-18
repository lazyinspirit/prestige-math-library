---
id: lem-maxwell-discrete-incidence-identities
kind: lemma
title: Incidence curl has zero discrete divergence and gradient curl
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-maxwell-discrete-cochain-and-yee-grid, thm-cellular-boundary-is-the-incidence-degree-matrix, lem-the-cellular-boundary-squares-to-zero]
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

**Given:** A finite oriented cell complex and the PEC mixed-or-periodic boundary convention in [[def-maxwell-discrete-cochain-and-yee-grid]].

[F1] Before the PEC restriction, $G,C,D$ are the transposes of the oriented boundary maps on vertices, edges, faces, and volumes. The PEC mixed closure retains only interior electric edges and interior vertices but all faces and cells. ([[def-maxwell-discrete-cochain-and-yee-grid]])

[F2] For an oriented cell complex, the cellular boundary matrix is its signed incidence matrix and consecutive cellular boundaries compose to zero. ([[thm-cellular-boundary-is-the-incidence-degree-matrix]], [[lem-the-cellular-boundary-squares-to-zero]])

## Proof


1.1 Let $\partial_k$ be the absolute oriented cellular boundary from degree $k$ to degree $k-1$. By [F2], $\partial_1\partial_2=0$. Since $\bar G=\partial_1^T$ and $\bar C=\partial_2^T$, transposition gives $\bar C\bar G=(\partial_1\partial_2)^T=0$. For a polygonal face this is the telescoping sum of endpoint differences around its boundary, including a triangular or rectangular Yee face. [F1, F2, algebra]

1.2 Similarly [F2] gives $\partial_2\partial_3=0$, hence $\bar D\bar C=(\partial_2\partial_3)^T=0$. For a tetrahedral or cubical volume, each edge in the boundary of its oriented boundary has two occurrences with opposite induced signs. The cellular identity covers arbitrary cell attachments as well, so this argument does not restrict the claim to tetrahedra. [F1, F2, algebra]

2.1 Periodic identification identifies faces with the prescribed orientation, so the quotient cell structure retains oriented boundary-of-boundary cancellation. For PEC, let $\bar G,\bar C,\bar D$ be the absolute incidence matrices and let $P_e$ select interior edges and $P_v$ select interior vertices. The matrices are $G=P_e\bar G P_v$, $C=\bar C P_e^T$, and $D=\bar D$. An interior vertex is incident to no boundary edge, so $P_e^TP_e\bar G P_v=\bar G P_v$. Hence $CG=\bar C\bar G P_v=0$, while $DC=\bar D\bar C P_e^T=0$. This retains boundary-face magnetic cochains although boundary electric edge values are fixed. [F1, step 1.1, step 1.2, algebra] ∎
