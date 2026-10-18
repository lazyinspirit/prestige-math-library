---
id: lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations
kind: lemma
title: "Rank-one Weyl strings, tensor filtrations, and tilting classification"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-temperley-lieb-rank-one-lusztig-tilting-category
  - def-lusztig-divided-power-integral-form
  - def-quantum-integers-factorials-and-divided-powers-at-q-i
  - thm-quantized-sl-two-string-formulas
  - lem-quantum-pascal-recurrence-and-gaussian-integrality
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity"
      url: "https://arxiv.org/pdf/math/0308281"
      locator: "§§2–4, printed pp. 8–22: Weyl and dual-Weyl filtrations, Ext vanishing, and indecomposable tiltings."
    - title: "Henning Haahr Andersen and Daniel Tubbenhauer, Diagram Categories for Uq-Tilting Modules at Roots of Unity"
      url: "https://arxiv.org/pdf/1409.2799"
      locator: "§§2.2–2.5, PDF pp. 7–16: rank-one Weyl bases, tensor filtrations, tilting modules, and linkage."
verification:
  precheck: escalated
---

## Statement

Fix the divided-power category and convention of [[def-temperley-lieb-rank-one-lusztig-tilting-category]]. For each $m\ge0$, the displayed basis and divided-power actions define the Weyl module $\Delta(m)$ after the specialization $v\mapsto q=e^{\pi i/\ell}$, and vector-space duality gives the dual Weyl module $\nabla(m)=\Delta(m)^\vee$. The rank-one tilting category is closed under tensor products; $\operatorname{Ext}^1(\Delta(a),\nabla(b))=0$ for all $a,b\ge0$, where this vanishing means every short exact sequence $0\to\nabla(b)\to M\to\Delta(a)\to0$ splits; and every finite-dimensional indecomposable tilting module is uniquely determined by its highest weight. The explicit string and its dual are proved below. The tensor-filtration, Ext, and classification assertions remain part of the exact claim and are escalated because the local highest-weight argument has not been completed.

## Facts & Assumptions

**Given:** The type-1 divided-power specialization at $q=e^{\pi i/\ell}$, $\ell\ge3$, and the string formulas of the specified Weyl module.

[F1] The divided-power integral form contains $E^{(r)},F^{(r)}$ and the toral quantum binomials, whose structure constants are Laurent-polynomial Gaussian coefficients ([[def-lusztig-divided-power-integral-form]], [[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

[F2] The generic rank-one string formulas give the displayed actions on a free string basis and are stable under the divided-power specialization ([[thm-quantized-sl-two-string-formulas]]).

[F3] Gaussian coefficients satisfy the quantum Pascal identities as Laurent-polynomial identities, so their specializations require no division by a quantum integer ([[lem-quantum-pascal-recurrence-and-gaussian-integrality]]).

[L1] The target category, weight grading, Weyl modules, dual Weyl modules, and filtration conventions are fixed in [[def-temperley-lieb-rank-one-lusztig-tilting-category]].

## Proof

**Proof technique:** specialize the integral divided-power string first, then dualize.

1.1 The free $\mathbb Z[v,v^{-1}]$-span of the generic basis $v_0,\ldots,v_m$ is stable under $K,E^{(r)},F^{(r)}$: each coefficient is a Laurent-polynomial Gaussian binomial by [F1] and [F3], and the images outside $0\le j\le m$ are zero. The given coproduct/string relations therefore define the module over the integral form, and base change $v\mapsto q$ preserves every module relation. The weight of $v_j$ is $m-2j$, so the weight grading is retained even if two $K$-eigenvalues coincide. [F1, F2, F3, L1, algebra]

1.2 The vector-space dual action is $(x\varphi)(u)=\varphi(S(x)u)$, using the antipode of the Hopf form. The dual action satisfies $(xy)\varphi=x(y\varphi)$ because $S(xy)=S(y)S(x)$; the dual weight is the negative of the original weight, and finite dimensionality makes the evaluation and coevaluation maps well defined. Thus $\nabla(m)=\Delta(m)^\vee$ is a type-1 module and has the stated dual-Weyl meaning. [F1, F2, L1, algebra]

2.1 These checks do not establish a Weyl filtration of $\Delta(a)\otimes\Delta(b)$ at the root, the vanishing of $\operatorname{Ext}^1(\Delta(a),\nabla(b))$, or uniqueness/decomposition of indecomposable tiltings. The read source proofs invoke linkage/highest-weight-category results and omit a rank-one divided-power filtration step; no local derivation of those premises is supplied here. Those three assertions remain open obligations in this carrier and are escalated for owner placement/review. [F1, F2, given] 
