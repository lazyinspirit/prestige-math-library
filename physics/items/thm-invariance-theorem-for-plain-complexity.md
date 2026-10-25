---
id: thm-invariance-theorem-for-plain-complexity
kind: theorem
title: "Invariance theorem for plain Kolmogorov complexity"
status: published
origin: session
deps: [def-optimal-description-machine]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shen, Theorem 1"
      url: "https://arxiv.org/pdf/1504.04955"
---

## Statement

An optimal description machine exists. Consequently, after fixing one $U$, $C(x):=C_U(x)$ is invariant under replacement of $U$ by another optimal machine up to an additive constant.

## Proof

**Given:** an effective enumeration $(M_e)$ of description machines.

1.1 Choose a computable prefix-free self-delimiting coding $e\mapsto\langle e\rangle$ and define $U(\langle e\rangle p)=M_e(p)$; malformed inputs diverge. Prefix-freeness makes the split into $\langle e\rangle$ and $p$ unique, so this is partial computable. [given]

2.1 For a fixed $M=M_e$, every $M$-description $p$ becomes a $U$-description of length $|p|+|\langle e\rangle|$, so $U$ is optimal by [[def-optimal-description-machine]]. Applying this twice to two optimal machines gives the additive-constant comparison. [step 1.1, given] ∎
