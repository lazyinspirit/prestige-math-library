---
id: ex-qsm-periodic-ideal-occupation
kind: example
title: "A fixed-number constraint removes independent occupations"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-qsm-periodic-ideal-occupation
  - post-qsm-models-statistics-and-preparation
  - def-countable-choice
dependency_roles:
  pthm-qsm-periodic-ideal-occupation: physical-result
  post-qsm-models-statistics-and-preparation: physical-assumption
  def-countable-choice: mathematical-premise
physical_scope: "An exact two-mode, one-particle canonical calculation compared with the distinct grand-canonical independent-mode preparation; no ensemble-equivalence claim is made."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, Statistical Physics, §3.5, canonical and grand-canonical occupation sums"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
---

## Example

Consider two bosonic modes with energies $\epsilon_1,\epsilon_2\in\mathbb R$ in J and inverse temperature $\beta>0$ in J$^{-1}$. Represent occupation outcomes by $(n_1,n_2)\in\mathbb N_0^2$ and define $N_i(n_1,n_2):=n_i$. Under a canonical preparation restricted to total number $N=N_1+N_2=1$, put $w_i=e^{-\beta\epsilon_i}$ and $p_i=w_i/(w_1+w_2)$; then the occupations satisfy $N_1+N_2=1$. For a grand-canonical comparison on these same two modes, choose chemical potential $\mu<\min(\epsilon_1,\epsilon_2)$ in J and put $q_i=e^{-\beta(\epsilon_i-\mu)}\in(0,1)$. The grand law has independent mode occupations, by factorization of its two geometric weights. This is the same product-law mechanism as in the linked periodic ideal model under its trace hypotheses.

## Verification

**Given:** $\mathrm{AC}_\omega$ ([[def-countable-choice]]), $\beta>0$, two finite energies, and the adopted canonical and grand preparations.

[A1] [[post-qsm-models-statistics-and-preparation]]: fixed-number canonical preparation is the Gibbs state restricted to the selected number sector; grand preparation is a separate trace state.

[F1] [[pthm-qsm-periodic-ideal-occupation]], Statement: occupations are independent in the diagonal grand state under its trace hypotheses.

1.1 The one-particle sector has exactly the two basis states $|1,0\rangle$ and $|0,1\rangle$, with weights $w_1,w_2$. Normalization gives probabilities $p_1,p_2$ with $p_1+p_2=1$, so $\mathbb E N_i=p_i$ and $N_1N_2=0$ in every canonical state outcome. [given, A1, algebra]

2.1 For the same two modes, the grand weights are $q_1^{n_1}q_2^{n_2}$, so $\Xi=(1-q_1)^{-1}(1-q_2)^{-1}$ and the normalized joint law is $\prod_{i=1}^2(1-q_i)q_i^{n_i}$ on $\mathbb N_0^2$; it is independent. The linked periodic theorem [F1] gives the same product law for its own modes under its trace hypotheses. By step 1.1, the fixed-number covariance is $\operatorname{Cov}(N_1,N_2)=\mathbb E(N_1N_2)-\mathbb E N_1\mathbb E N_2=-p_1p_2<0$. Thus the total-number constraint changes the joint law in this two-mode model, without implying any general finite-volume ensemble-equivalence failure. [step 1.1, F1, algebra] ∎
