---
id: lem-mdp-performance-difference-identity-with-arbitrary-baseline
kind: lemma
title: "Performance-difference identity for an arbitrary bounded baseline"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-constrained-markov-decision-process
  - def-discounted-cost-constraint
  - def-normalized-discounted-state-occupancy
  - lem-geometric-sequence-null
  - lem-normalized-discounted-state-occupancy-is-probability
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Achiam, David Held, Aviv Tamar, and Pieter Abbeel, Constrained Policy Optimization, supplementary material"
      url: "https://proceedings.mlr.press/v70/achiam17a/achiam17a-supp.pdf"
      locator: "Appendix 10.1.1, equation (20), and Appendix 10.1.2, Lemma 2, PDF pp. 1–2."
---

## Statement

Let a finite discounted CMDP, a bounded transition signal $g$, a bounded function $f:S\to\mathbb R$, and stationary policies $\pi,\pi'$ be given. All sums below over $a,\rho,s'$ range over $A(s),\mathcal R,S$, respectively. For a policy $\sigma$ define

$$\delta_f^g(s,a,\rho,s'):=g(s,a,\rho,s')+\gamma f(s')-f(s),\qquad \bar\delta_{f}^{g,\sigma}(s):=\sum_{a,\rho,s'}\sigma(a\mid s)p(s',\rho\mid s,a)\delta_f^g(s,a,\rho,s').$$

Put

$$L_{\pi,f}^g(\pi'):=\sum_s d^\pi(s)\bigl(\bar\delta_f^{g,\pi'}(s)-\bar\delta_f^{g,\pi}(s)\bigr).$$

Then the exact performance-difference identity is

$$J_g^{\pi'}(\mu)-J_g^\pi(\mu)=\frac{L_{\pi,f}^g(\pi')}{1-\gamma}+\frac{1}{1-\gamma}\sum_s\bigl(d^{\pi'}(s)-d^\pi(s)\bigr)\bar\delta_f^{g,\pi'}(s).$$

## Statement references

[[def-constrained-markov-decision-process|Finite CMDP data and finite-time state masses.]]

[[def-discounted-cost-constraint]]: The expected discounted transition-signal sum $J_g^\pi(\mu)$.

[[def-normalized-discounted-state-occupancy]]: The normalized discounted state occupancy $d^\pi$.

[[lem-normalized-discounted-state-occupancy-is-probability|Probability mass and boundedness facts used to justify the discounted series.]]

[Achiam et al., *Constrained Policy Optimization*, supplementary material, Appendix 10.1](https://proceedings.mlr.press/v70/achiam17a/achiam17a-supp.pdf).

## Facts & Assumptions

**Given:** A finite discounted CMDP, bounded $g$ and $f$, stationary policies $\pi,\pi'$, and $0\le\gamma<1$.

[F1] [[def-constrained-markov-decision-process]]: the finite-time state masses obey the one-step transition recurrence with joint masses $p(s',\rho\mid s,a)$.

[F2] [[def-discounted-cost-constraint]]: $J_g^\sigma(\mu)$ is the discounted series of finite sums of $g$ against the time-$t$ transition masses.

[F3] [[def-normalized-discounted-state-occupancy]]: $d^\sigma(s)=(1-\gamma)\sum_{t\ge0}\gamma^t\mu_t^\sigma(s)$.

[F4] [[lem-normalized-discounted-state-occupancy-is-probability]]: every $\mu_t^\sigma$ is a probability distribution, and every bounded transition-signal discounted series is absolutely convergent.

[F5] [[lem-geometric-sequence-null]]: $\gamma^n\to0$ for $0\le\gamma<1$.

## Proof

1.1 Fix a policy $\sigma$. For each $t$, let $e_t^\sigma$ be the finite transition-mass sum of $g$ at time $t$, and let $h_t^\sigma:=\sum_s\mu_t^\sigma(s)f(s)$. By [F1] and the definition of $\delta_f^g$, the finite sum of $\delta_f^g$ at time $t$ is $e_t^\sigma+\gamma h_{t+1}^\sigma-h_t^\sigma$. Summing after multiplication by $\gamma^t$ for $t=0,\ldots,N$ telescopes to $\sum_{t=0}^N\gamma^t e_t^\sigma-h_0^\sigma+\gamma^{N+1}h_{N+1}^\sigma$. [F1, given, algebra]

2.1 The remainder satisfies $|\gamma^{N+1}h_{N+1}^\sigma|\le\gamma^{N+1}\|f\|_\infty\to0$ by [F4] and [F5]. Also $|\delta_f^g|\le\|g\|_\infty+(1+\gamma)\|f\|_\infty$, so [F4] makes its discounted series convergent. Passing to the limit in step 1.1 and using [F2]–[F3] gives $J_g^\sigma(\mu)=\sum_s\mu(s)f(s)+(1-\gamma)^{-1}\sum_s d^\sigma(s)\bar\delta_f^{g,\sigma}(s)$. [F2, F3, F4, F5, step 1.1, algebra]

3.1 Apply the identity in step 2.1 to $\sigma=\pi'$ and $\sigma=\pi$ and subtract; the initial terms $\sum_s\mu(s)f(s)$ cancel. Add and subtract $\sum_s d^\pi(s)\bar\delta_f^{g,\pi'}(s)$. The first resulting term is $L_{\pi,f}^g(\pi')$ by its definition, and the second is $\sum_s(d^{\pi'}(s)-d^\pi(s))\bar\delta_f^{g,\pi'}(s)$. Dividing by $1-\gamma>0$ gives the claimed identity. [F2, F3, step 2.1, algebra] ∎
