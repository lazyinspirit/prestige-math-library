---
id: lem-it-flat-spectral-type-information-approximation
kind: lemma
title: Exact flat spectral-type reduction of channel information
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
- lem-it-finite-mixture-entropy-bounds
- def-it-quantum-channel-complement-and-coherent-information
- thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all probabilistic selections are finite, and the stated real/finite-dimensional completeness suppliers suffice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
  - title: John Watrous, The Theory of Quantum Information
    url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    locator: Sections 5.2 and 8.1–8.2; complete relevant proofs inspected in owner construction evidence.
  - title: Igor Devetak, The private classical capacity and quantum capacity of a quantum channel
    url: https://arxiv.org/pdf/quant-ph/0304127
    locator: Theorems 1 and 5; complete private coding proof and channel reduction inspected.
---

## Statement

Let $\rho$ be a state on dimension $d$ and $\mathcal N$ a finite-dimensional channel. There is an exact decomposition $\rho^{\otimes n}=\sum_t p_t\tau_t$ into mutually orthogonal flat spectral-type states, with at most $(n+1)^d$ positive-weight types and $H(T)\le d\ln(n+1)$. For its fixed complementary channel, $$\sum_t p_t I_c(\tau_t,\mathcal N^{\otimes n})\ge nI_c(\rho,\mathcal N)-H(T),$$ $$\sum_t p_t[S(\tau_t)+I_c(\tau_t,\mathcal N^{\otimes n})]\ge n[S(\rho)+I_c(\rho,\mathcal N)]-2H(T).$$ Thus in each inequality some flat type state attains at least the displayed lower bound.

## Facts & Assumptions

**Given:** The finite-dimensional spaces, states, channels and explicit scalar hypotheses in the Statement.

[F1] [[lem-it-finite-mixture-entropy-bounds]]: Entropy bounds for a finite mixture of states.

[F2] [[def-it-quantum-channel-complement-and-coherent-information]]: Complementary channels and coherent information.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: Complex spectral theorem: a normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis, and conversely.

## Proof

1.1 Let $\rho=\sum_{j=1}^d\lambda_j|j\rangle\langle j|$. The product $\rho^{\otimes n}$ decomposes as $$\rho^{\otimes n}=\sum_t p_t\tau_t,$$ where $t$ ranges over its positive-probability spectral types and $\tau_t$ is the uniform state on that type subspace. There are at most $(n+1)^d$ such types; their supports are orthogonal. Thus $$\sum_t p_tS(\tau_t)=nS(\rho)-H(T),\quad H(T)\le d\ln(n+1).$$ For any fixed channel $\mathcal N$ with complement $\mathcal N^c$, the mixture bounds applied separately to their outputs yield $$\sum_t p_t I_c(\tau_t,\mathcal N^{\otimes n})\ge nI_c(\rho,\mathcal N)-H(T),$$ $$\sum_t p_t\{S(\tau_t)+I_c(\tau_t,\mathcal N^{\otimes n})\}\ge n\{S(\rho)+I_c(\rho,\mathcal N)\}-2H(T).$$ Indeed the averaged receiver entropy is at least its mixture entropy minus $H(T)$; averaged environment entropy is at most its mixture entropy. The input entropy identity follows directly by summing eigenvalues over disjoint type blocks. Therefore in each inequality some flat type state attains at least the displayed lower bound. These are exact finite-$n$ estimates; no replacement of fixed-dimensional continuity by a uniform bound is involved. [F1, F2, F3, given, algebra, construct] ∎
