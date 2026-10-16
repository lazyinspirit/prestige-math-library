---
id: def-qc-correctable-subsystem-and-gauge-factor
kind: definition
title: Exact correction of a protected subsystem
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, def-inner-product-space, def-qc-exact-recovery-of-a-quantum-code, def-qc-first-factor-partial-trace, def-qc-quantum-channel, def-qc-quantum-code-isometry-and-code-projector, lem-qc-subsystem-marginal-preservation-forces-gauge-kraus-form, thm-qc-isometric-encoding-projector]
provenance:
  statement: literature-derived
  proof: not-applicable
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "John Preskill, Quantum Information, Chapter 7: Quantum Error Correction (working draft, March 2026)"
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: "David W. Kribs, Raymond Laflamme, David Poulin, and Maia Lesosky, Operator Quantum Error Correction"
      url: https://arxiv.org/pdf/quant-ph/0504189
---

## Definition

Let $H_G,H_L,H_P,H_O$ be nonzero finite-dimensional complex inner-product
spaces with the fixed factor order $H_G\otimes H_L$. Let
$J:H_G\otimes H_L\to H_P$ be an isometric encoding and set $P=JJ^*$.
The factors $H_G$ and $H_L$ are the gauge and protected logical subsystems.
Let $\mathcal N:\mathcal B(H_P)\to\mathcal B(H_O)$ be a channel.

For any finite-dimensional residual space $H_Q$, use the first-factor partial
trace $\operatorname{Tr}_G$ of
[[def-qc-first-factor-partial-trace]] on $H_G\otimes H_Q$. In particular, for
a reference $H_R$, take $H_Q=H_L\otimes H_R$ and leave that factor order
unchanged.

A **decoded recovery** is a channel
$\mathcal R:\mathcal B(H_O)\to\mathcal B(H_G\otimes H_L)$. The subsystem
$H_L$ is **exactly correctable** for $\mathcal N$ under $J$ when some decoded
recovery satisfies, for every finite-dimensional reference $H_R$ and every
positive semidefinite trace-one operator $\rho$ on
$(H_G\otimes H_L)\otimes H_R$,

$$((\operatorname{Tr}_G\otimes\operatorname{id}_{\mathcal B(H_R}))\circ((\mathcal R\circ\mathcal N\circ\operatorname{Ad}_J)\otimes\operatorname{id}_{\mathcal B(H_R)}))(\rho)=(\operatorname{Tr}_G\otimes\operatorname{id}_{\mathcal B(H_R)})(\rho),$$

where $\operatorname{Ad}_J(X)=JXJ^*$. The recovery may change the gauge
state. By [[lem-qc-subsystem-marginal-preservation-forces-gauge-kraus-form]],
this is equivalently a corrected decoded channel of the form
$\mathcal T_G\otimes\operatorname{id}_{\mathcal B(H_L)}$ for a channel
$\mathcal T_G$ on the gauge factor. For a unit vector $g_0\in H_G$, resetting
the decoded gauge and re-encoding uses
$X\mapsto J(P_{g_0}\otimes\operatorname{Tr}_G(\mathcal R(X)))J^*$, where
$P_{g_0}(x)=\langle x,g_0\rangle g_0$; the same supplier proves this is a
channel. If $\dim H_G=1$, the marginal condition is ordinary exact recovery
of the code subspace in the sense of
[[def-qc-exact-recovery-of-a-quantum-code]].

