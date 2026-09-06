---
id: thm-closed-graph-theorem
kind: theorem
title: "Closed graph theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-graph-of-a-linear-operator, thm-bounded-inverse-theorem, lem-closed-subspace-of-a-banach-space-is-banach, thm-finite-products-of-banach-spaces-are-banach]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources: {references: [{title: "Buhler--Salamon, Functional Analysis, Theorem 2.20", url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"}]}
---
## Statement
Assume DC. For Banach spaces $X,Y$ and an everywhere-defined linear $T:X\to Y$, $T$ is bounded if and only if its graph ([[def-graph-of-a-linear-operator]]) is closed.
## Facts & Assumptions
**Given:** DC, Banach spaces $X,Y$, and an everywhere-defined linear map $T$.
## Proof
**Proof technique:** direct.

1.1 If $T$ is bounded, $x_n\to x$ and $Tx_n\to y$, continuity gives $y=Tx$, so the graph is closed. [given]

1.2 Conversely, a closed graph is Banach by [[lem-closed-subspace-of-a-banach-space-is-banach]], since $X\times Y$ is Banach by [[thm-finite-products-of-banach-spaces-are-banach]]. [given]

2.1 The first projection $G(T)\to X$ is a bounded linear bijection; its inverse is bounded by [[thm-bounded-inverse-theorem]]. Composing that inverse with the second projection makes $T$ bounded. [step 1.2] ∎
