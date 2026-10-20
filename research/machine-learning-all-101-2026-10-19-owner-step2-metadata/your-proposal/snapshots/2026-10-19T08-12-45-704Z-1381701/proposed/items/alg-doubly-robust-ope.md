---
id: alg-doubly-robust-ope
kind: algorithm
title: "Finite-horizon doubly robust off-policy value evaluation"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-offline-reinforcement-learning-dataset
  - lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Nan Jiang and Lihong Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning"
      url: "https://proceedings.mlr.press/v48/jiang16.pdf"
      locator: "§4.1, PDF pp. 3–4, equation (10), finite-horizon DR recursion."
    - title: "Sergey Levine, Aviral Kumar, George Tucker, and Justin Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems"
      url: "https://arxiv.org/pdf/2005.01643"
      locator: "§3.1, PDF pp. 11–12, equation (6), doubly robust estimator."
---

## Definition

Assume AC for the behavior-policy trajectory law. Input a finite-horizon logged dataset with $n\ge1$ behavior trajectories, a target policy $\pi$, finite real functions $\widehat Q_t(s,a)$ for $0\le t<H$, and finite nonnegative action-weight multipliers $\widehat\rho_t(s,a)$ for $0\le t<H$. Hold the functions and multipliers fixed when taking expectation over the evaluation dataset; they may be conditioned on an independent training sample. Define $\widehat V_H(s)=0$ for every $s$, and for $t=H-1,\ldots,0$ define

$$\widehat V_t(s)=\sum_{a\in A(s)}\pi(a\mid s)\widehat Q_t(s,a).$$

For each logged trajectory $i$, set $\widehat W_{i,-1}=1$ and $\widehat W_{i,t}=\widehat W_{i,t-1}\widehat\rho_t(S_t^i,A_t^i)$ for $0\le t<H$. Compute

$$D_i=\widehat V_0(s_0)+\sum_{t=0}^{H-1}\gamma^t\widehat W_{i,t}\left(R_{t+1}^i+\gamma\widehat V_{t+1}(S_{t+1}^i)-\widehat Q_t(S_t^i,A_t^i)\right),$$

and return $\widehat J_{\mathrm{DR}}=n^{-1}\sum_{i=1}^nD_i$. When supplied as propensity ratios, the multipliers have the form $\widehat\rho_t(s,a)=\pi(a\mid s)/\widetilde\mu_t(a\mid s)$, with positive denominators on target-positive actions. In the exact-ratio case they equal the target-to-behavior action-likelihood factors $\pi(a\mid s)/\mu(a\mid s)$; the procedure also permits finite fitted multipliers for the correct-value-model case. The fixed terminal value $\widehat V_H=0$ is part of the procedure.

## Definition references

[[def-offline-reinforcement-learning-dataset|The finite-horizon evaluation dataset, target value, and behavior-data law.]]

[[lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative|Exact behavior propensities yield the finite-prefix target-to-behavior density.]]

[Jiang and Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning](https://proceedings.mlr.press/v48/jiang16.pdf)

[Levine, Kumar, Tucker, and Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems](https://arxiv.org/pdf/2005.01643)
