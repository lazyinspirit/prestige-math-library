---
id: def-qc-first-factor-partial-trace
kind: definition
title: Partial trace over the first tensor factor
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: [cor-finite-iterated-tensor-products-represent-multilinear-maps, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-inner-product-space, def-qc-partial-trace, def-qc-tensor-map, def-qc-tensor-register-and-permutation, thm-qc-partial-trace-characterization-and-basis-independence, thm-qc-tensor-map-composition-and-adjoint, thm-qc-wire-permutation-is-unitary]
provenance:
  statement: literature-derived
  proof: not-applicable
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Information, Chapter 7: Quantum Error Correction (working draft, March 2026)"
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: "David W. Kribs, Raymond Laflamme, David Poulin, and Maia Lesosky, Operator Quantum Error Correction"
      url: https://arxiv.org/pdf/quant-ph/0504189
---

## Definition

Let $H_G,H_Q$ be finite-dimensional complex inner-product spaces, and fix
the factor order $H_G\otimes H_Q$. For ordered orthonormal bases
$(g_s)$ and $(q_\alpha)$, define
$$\operatorname{Tr}_G:\mathcal B(H_G\otimes H_Q)\to\mathcal B(H_Q),\qquad (\operatorname{Tr}_G X)_{\alpha\beta}=\sum_sX_{(s,\alpha),(s,\beta)},$$
where $X_{(s,\alpha),(t,\beta)}=\langle X(g_t\otimes q_\beta),
g_s\otimes q_\alpha\rangle$ under the linear-first convention. Equivalently,
this is the partial trace over the second factor after swapping the two wires.
The partial-trace characterization and wire-permutation unitarity in
[[thm-qc-partial-trace-characterization-and-basis-independence]] and
[[thm-qc-wire-permutation-is-unitary]] show that the map is independent of
the chosen orthonormal bases. In particular, the same definition applies when
$H_Q=H_L\otimes H_R$, with that residual factor order left unchanged. For an
operator on $(H_G\otimes H_L)\otimes H_R$, use the canonical associator of
the ordered tensor-register construction to view it on
$H_G\otimes(H_L\otimes H_R)$ before taking this partial trace.
