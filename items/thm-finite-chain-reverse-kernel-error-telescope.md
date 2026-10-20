---
id: thm-finite-chain-reverse-kernel-error-telescope
kind: theorem
title: Finite-chain reverse-kernel error telescope
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-measure-kernel-and-probability-kernel
  - def-total-variation-distance-for-probability-laws
  - lem-finite-state-kernel-error-controls-mixtures
  - lem-total-variation-coupling-and-kernel-contraction
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all state spaces and kernel compositions in the statement are finite.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "David A. Levin and Yuval Peres, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf
      locator: "Chapter 4, §4.1, Propositions 4.2 and 4.5"
---

## Statement

Let $S$ be a finite nonempty state space and let $N\ge1$. For each $j=1,\ldots,N$, let $Q_j$ and $P_j$ be probability kernels on $S$, used in reverse order from level $j$ to level $j-1$. Starting from probability vectors $\mu_N,\nu_N$, define $\mu_{j-1}=\mu_jQ_j$ and $\nu_{j-1}=\nu_jP_j$. If $\operatorname{TV}(\mu_N,\nu_N)\le\varepsilon_{\mathrm{init}}$ and
$$\sup_{z\in S}\operatorname{TV}(Q_j(z,\cdot),P_j(z,\cdot))\le\varepsilon_j\qquad(1\le j\le N),$$
where $\varepsilon_{\mathrm{init}},\varepsilon_1,\ldots,\varepsilon_N\in[0,1]$, then
$$\operatorname{TV}(\mu_0,\nu_0)\le\min\left\{1,\varepsilon_{\mathrm{init}}+\sum_{j=1}^N\varepsilon_j\right\}.$$
Here $\operatorname{TV}(u,v)=\sup_{A\subseteq S}|u(A)-v(A)|$.

## Statement references

[[def-total-variation-distance-for-probability-laws]]: for probability laws, total variation is the supremum of absolute event-probability differences.

[[def-measure-kernel-and-probability-kernel]]: a probability kernel has probability-law rows; on $S$ its action is matrix multiplication.

## Facts & Assumptions

**Given:** The finite state space, the $N$ pairs of probability kernels, the initial probability vectors, and all stated total-variation bounds. Prove the endpoint bound.

[F1] [[def-total-variation-distance-for-probability-laws]]: $\operatorname{TV}(u,v)=\sup_{A\subseteq S}|u(A)-v(A)|$ and lies in $[0,1]$ for probability laws.

[F2] [[lem-total-variation-coupling-and-kernel-contraction]]: applying the same probability kernel to two input laws cannot increase their total-variation distance.

[F3] [[lem-finite-state-kernel-error-controls-mixtures]]: a uniform row-wise total-variation error $\varepsilon_j$ gives $\operatorname{TV}(\rho Q_j,\rho P_j)\le\varepsilon_j$ for every input law $\rho$.

[F4] [[def-measure-kernel-and-probability-kernel]]: each $Q_j$ and $P_j$ row is a probability law.

## Proof

1.1 Fix $j$ and $A\subseteq S$. Insert the intermediate measure $\nu_jQ_j$ and use the ordinary triangle inequality for real numbers on the two event differences. The first difference is at most $\operatorname{TV}(\mu_j,\nu_j)$ by [F2], and the second is at most $\varepsilon_j$ by [F3]. Taking the supremum over $A$ by [F1] gives $\operatorname{TV}(\mu_{j-1},\nu_{j-1})\le\operatorname{TV}(\mu_j,\nu_j)+\varepsilon_j$. [given, F1, F2, F3, F4, algebra]

2.1 Apply step 1.1 successively for $j=N,N-1,\ldots,1$. The intermediate distances telescope, so $\operatorname{TV}(\mu_0,\nu_0)\le\operatorname{TV}(\mu_N,\nu_N)+\sum_{j=1}^N\varepsilon_j\le\varepsilon_{\mathrm{init}}+\sum_{j=1}^N\varepsilon_j$. [given, step 1.1, algebra]

3.1 Since both endpoint vectors are probability laws, [F1] gives $\operatorname{TV}(\mu_0,\nu_0)\le1$. Combining this with step 2.1 yields the stated minimum, including the cases $N=1$, zero kernel errors, and a sum at least one. [F1, step 2.1, algebra] ∎
