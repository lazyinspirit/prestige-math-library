---
id: lem-discounted-occupancy-change-bounded-by-average-tv
kind: lemma
title: "Discounted occupancy change is bounded by average policy TV"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-constrained-markov-decision-process
  - def-normalized-discounted-state-occupancy
  - lem-geometric-sequence-null
  - lem-normalized-discounted-state-occupancy-is-probability
  - thm-geometric-series
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Joshua Achiam, David Held, Aviv Tamar, and Pieter Abbeel, Constrained Policy Optimization, supplementary material"
      url: "https://proceedings.mlr.press/v70/achiam17a/achiam17a-supp.pdf"
      locator: "Appendix 10.1.1–10.1.2, equation (21) and Lemma 3, PDF pp. 1–4."
    - title: "Eitan Altman, Constrained Markov Decision Processes"
      url: "https://www-sop.inria.fr/members/Eitan.Altman/TEMP/h.pdf"
      locator: "Chapter 3 §3.1, discounted occupancy measures, printed pp. 27–29 (PDF pp. 34–36)."
---

## Statement

Let a finite discounted CMDP and two stationary policies $\pi,\pi'$ be given, with normalized discounted occupancies $d^\pi,d^{\pi'}$. Define

$$\operatorname{TV}_s(\pi',\pi):=\frac12\sum_{a\in A(s)}|\pi'(a\mid s)-\pi(a\mid s)|$$

and $\|x\|_1:=\sum_{s\in S}|x(s)|$ for a state vector. Then

$$\|d^{\pi'}-d^\pi\|_1\le\frac{2\gamma}{1-\gamma}\sum_{s\in S}d^\pi(s)\operatorname{TV}_s(\pi',\pi).$$

## Statement references

[[def-constrained-markov-decision-process|A finite CMDP has finite states and actions, a normalized joint transition law, and stationary policies.]]

[[def-normalized-discounted-state-occupancy]]: The normalized occupancy is $(1-\gamma)$ times the discounted sum of state-mass vectors.

[[lem-normalized-discounted-state-occupancy-is-probability|Each state-mass vector and the resulting occupancy are probability distributions.]]

[Achiam et al., *Constrained Policy Optimization*, supplementary material, Appendix 10.1](https://proceedings.mlr.press/v70/achiam17a/achiam17a-supp.pdf).

[Altman, *Constrained Markov Decision Processes*, Chapter 3 §3.1](https://www-sop.inria.fr/members/Eitan.Altman/TEMP/h.pdf).

## Facts & Assumptions

**Given:** A finite CMDP, $0\le\gamma<1$, stationary policies $\pi,\pi'$, and their state-mass vectors and normalized discounted occupancies.

[F1] [[def-constrained-markov-decision-process]]: $S$ and each $A(s)$ are finite, $p(s',\rho\mid s,a)$ is a normalized joint law, $P(s'\mid s,a):=\sum_\rho p(s',\rho\mid s,a)$ is a probability distribution, and $\pi(a\mid s)$ is a probability distribution over $A(s)$.

[F2] [[def-normalized-discounted-state-occupancy]]: $d^\sigma=(1-\gamma)\sum_{t\ge0}\gamma^t\mu_t^\sigma$ and the column transition matrix is $K_\sigma(s',s)=\sum_{a,\rho}\sigma(a\mid s)p(s',\rho\mid s,a)$.

[F3] [[lem-normalized-discounted-state-occupancy-is-probability]]: every $\mu_t^\sigma$ and $d^\sigma$ is a probability distribution.

[F4] [[thm-geometric-series]]: $\sum_{t=0}^{\infty}\gamma^t=1/(1-\gamma)$ for $0\le\gamma<1$.

[F5] [[lem-geometric-sequence-null]]: $\gamma^n\to0$ for $0\le\gamma<1$.

## Proof

1.1 For $\sigma\in\{\pi,\pi'\}$, every entry of $K_\sigma$ is nonnegative and each column sums to one by [F1]. Thus $K_\sigma^t$ is column-stochastic for every $t$, and its induced matrix $1$-norm $\|A\|_1:=\max_s\sum_{s'}|A(s',s)|$ is one. Every entry of $K_\sigma^t$ lies in $[0,1]$, so each of the finitely many coordinate series $\sum_{t=0}^{\infty}\gamma^t(K_\sigma^t)(s',s)$ converges by comparison with [F4]; their limits give convergence of the matrix partial sums in this finite-dimensional norm. The matrix series $G_\sigma:=\sum_{t=0}^{\infty}\gamma^tK_\sigma^t$ therefore exists; its finite partial sums satisfy $(I-\gamma K_\sigma)\sum_{t=0}^{N}\gamma^tK_\sigma^t=I-\gamma^{N+1}K_\sigma^{N+1}$, whose remainder norm tends to zero by [F5]. The same identity with multiplication on the other side shows $G_\sigma=(I-\gamma K_\sigma)^{-1}$. [F1, F4, F5, given, algebra]

1.2 By [F1], for each coordinate $s'$ of $(K_{\pi'}-K_\pi)d^\pi$, the triangle inequality gives $\sum_{s'}|((K_{\pi'}-K_\pi)d^\pi)(s')|\le\sum_{s,a,s'}d^\pi(s)|\pi'(a\mid s)-\pi(a\mid s)|P(s'\mid s,a)=2\sum_s d^\pi(s)\operatorname{TV}_s(\pi',\pi)$, because $\sum_{s'}P(s'\mid s,a)=1$. [F1, F3, algebra]

2.1 The recurrence in [F1] and the matrix definition in [F2] give $\mu_t^\sigma=K_\sigma^t\mu$, hence $d^\sigma=(1-\gamma)G_\sigma\mu$. The inverse identity $G_{\pi'}-G_\pi=G_{\pi'}[(I-\gamma K_\pi)-(I-\gamma K_{\pi'})]G_\pi$ therefore yields $d^{\pi'}-d^\pi=\gamma G_{\pi'}(K_{\pi'}-K_\pi)d^\pi$. [F1, F2, step 1.1, algebra]

3.1 Since $\|G_{\pi'}\|_1\le\sum_{t\ge0}\gamma^t=1/(1-\gamma)$ by [F4] and column-stochasticity, combine step 2.1 with step 1.2 to obtain the claimed $1$-norm bound. [F4, step 2.1, step 1.2, algebra] ∎
