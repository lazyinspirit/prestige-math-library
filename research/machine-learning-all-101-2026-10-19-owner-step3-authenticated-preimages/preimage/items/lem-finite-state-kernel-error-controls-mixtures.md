---
id: lem-finite-state-kernel-error-controls-mixtures
kind: lemma
title: Uniform row error bounds mixture-kernel error
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-measure-kernel-and-probability-kernel
  - def-total-variation-distance-for-probability-laws
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; every sum is finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "David A. Levin and Yuval Peres, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf
      locator: "Chapter 4, §4.1, Propositions 4.2 and 4.5"
---

## Statement

Let $S$ be a finite nonempty set and let $Q$ and $P$ be probability kernels on $S$, meaning that each row is a probability vector. For probability vectors $u,v$ on $S$, use $\operatorname{TV}(u,v)=\sup_{A\subseteq S}|u(A)-v(A)|$, where $u(A)=\sum_{x\in A}u(x)$. If $\sup_{x\in S}\operatorname{TV}(Q(x,\cdot),P(x,\cdot))\le\varepsilon$ for $0\le\varepsilon\le1$, then every probability vector $\mu$ on $S$ satisfies
$$\operatorname{TV}(\mu Q,\mu P)\le\varepsilon,$$
where $(\mu Q)(A)=\sum_{x\in S}\mu(x)Q(x,A)$ and similarly for $\mu P$.

## Statement references

[[def-total-variation-distance-for-probability-laws]]: total variation is the supremum of absolute event-probability differences.

[[def-measure-kernel-and-probability-kernel]]: each kernel row is a probability measure; on finite power-set spaces this is a row-stochastic matrix.

## Facts & Assumptions

**Given:** A finite nonempty set $S$, probability kernels $Q,P$ on $S$, a probability vector $\mu$ on $S$, and $0\le\varepsilon\le1$ with the stated uniform row bound. Prove $\operatorname{TV}(\mu Q,\mu P)\le\varepsilon$.

[F1] [[def-total-variation-distance-for-probability-laws]]: for probability laws $u,v$, $\operatorname{TV}(u,v)=\sup_A|u(A)-v(A)|$.

[F2] [[def-measure-kernel-and-probability-kernel]]: every row $Q(x,\cdot)$ and $P(x,\cdot)$ is a probability law.

## Proof

1.1 Fix $A\subseteq S$. By [F2] and the finite mixture formulas, $$| (\mu Q)(A)-(\mu P)(A)|=\left|\sum_{x\in S}\mu(x)\bigl(Q(x,A)-P(x,A)\bigr)\right|\le\sum_{x\in S}\mu(x)|Q(x,A)-P(x,A)|.$$ Each summand's event difference is bounded by its row total variation, so the right side is at most $\sum_x\mu(x)\varepsilon=\varepsilon$. [given, F1, F2, algebra]

2.1 Taking the supremum over all $A\subseteq S$ in step 1.1 and applying [F1] gives $\operatorname{TV}(\mu Q,\mu P)\le\varepsilon$. [F1, step 1.1] ∎
