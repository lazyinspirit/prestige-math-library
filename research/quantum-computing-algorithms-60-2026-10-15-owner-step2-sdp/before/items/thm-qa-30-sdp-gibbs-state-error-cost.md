---
id: thm-qa-30-sdp-gibbs-state-error-cost
kind: theorem
title: "Gibbs purification error and resource bound"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-30-sdp-gibbs-purification
  - thm-qa-28-matrix-function-error-cost
  - lem-qa-30-capamplify-state-output-bound
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
    - title: "https://arxiv.org/pdf/1806.01838"
      url: "https://arxiv.org/pdf/1806.01838"
verification:
  precheck: pass
---

## Statement

Let the ideal unnormalized Gibbs amplitude on the reference state be $|v\rangle=((e^{-G/2}/B)\otimes I)|\Phi_d\rangle$ with ideal flag probability $p_G=\|v\|^2>0$, where $B>0$ is the declared block-encoding normalization. Suppose the implemented flagged preparation has good-branch vector $|\widetilde v\rangle$ with $\|\widetilde v-v\|\le\zeta$, and assume $0\le\zeta\le\sqrt{p_G}/2$. Then its normalized conditional state is within $2\zeta/\sqrt{p_G}$ in vector norm of the ideal Gibbs purification. Its actual success probability is at least $p_G/4$. CapAmplify with lower bound $p_G/4$ returns that implemented good ray with probability at least $2/3$ using $O(p_G^{-1/2})$ preparation, inverse, and reflection calls. The total cost also includes QSVT/block access, phase compilation, reference preparation, and all gate/precision costs.

## Facts & Assumptions

**Given:** The ideal and implemented flagged vectors, the additive error bound, and the finite cap-amplification lemma.

[F1] [[alg-qa-30-sdp-gibbs-purification]]: the ideal postselected branch is proportional to $(e^{-G/2}\otimes I)|\Phi_d\rangle$ and every preparation/access call is supplied.

[F2] [[lem-qa-30-capamplify-state-output-bound]]: with a promised positive lower bound on flag probability, capped amplification returns the normalized good projection with stated confidence and preserves its ray.

## Proof

**Proof technique:** direct.

1.1 By the reverse triangle inequality, $\|\widetilde v\|\ge\|v\|-\|\widetilde v-v\|\ge\sqrt{p_G}-\zeta\ge\sqrt{p_G}/2$, so the implemented branch is nonzero and its probability is at least $p_G/4$. Also $\left\|\frac{\widetilde v}{\|\widetilde v\|}-\frac v{\|v\|}\right\|\le\frac{\|\widetilde v-v\|+|\|v\|-\|\widetilde v\||}{\|v\|}\le\frac{2\zeta}{\sqrt{p_G}}.$ This proves the conditional-state bound. [given, F1, algebra]

2.1 Apply [F2] to the implemented preparation with lower success bound $p_{\rm low}=p_G/4$. It returns the same normalized good projection as the conditional branch from step 1.1 with probability at least $2/3$. Since $p_{\rm low}^{-1/2}=2p_G^{-1/2}$, its preparation/reflection call count is $O(p_G^{-1/2})$ for this fixed confidence; supplied QSVT, block, reference-state, inverse, compilation and precision costs remain additional. [given, F2, step 1.1, algebra] ∎
