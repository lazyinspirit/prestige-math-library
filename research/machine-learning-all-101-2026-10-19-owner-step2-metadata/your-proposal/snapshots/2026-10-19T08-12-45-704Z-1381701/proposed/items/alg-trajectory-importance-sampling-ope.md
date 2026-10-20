---
id: alg-trajectory-importance-sampling-ope
kind: algorithm
title: "Ordinary, per-decision, and weighted trajectory importance sampling"
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
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§5.5, printed pp. 128–129, equations (5.3)–(5.5)."
    - title: "Nan Jiang and Lihong Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning"
      url: "https://proceedings.mlr.press/v48/jiang16.pdf"
      locator: "§3.2.2, PDF pp. 2–3, equations (4)–(7)."
    - title: "Sergey Levine, Aviral Kumar, George Tucker, and Justin Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems"
      url: "https://arxiv.org/pdf/2005.01643"
      locator: "§3.1, PDF pp. 10–12, equations (5)–(6) and surrounding discussion."
---

## Definition

Assume AC for the policy-induced trajectory laws. Input a finite-horizon logged dataset of $n\ge1$ independent behavior trajectories, a target policy $\pi$, the true behavior propensities $\mu(a\mid s)$, horizon $H$, and discount $0\le\gamma\le1$. Require full horizon coverage $P^\pi_H\ll P^\mu_H$. For trajectory $i$, compute $\rho_{i,t}=\pi(A_t^i\mid S_t^i)/\mu(A_t^i\mid S_t^i)$ for $0\le t<H$, and $W_{i,t}=\prod_{k=0}^{t}\rho_{i,k}$; set $W_{i,-1}=1$. If an observed pair has $\mu(A_t^i\mid S_t^i)=0<\pi(A_t^i\mid S_t^i)$, return status unsupported; if both probabilities are zero, set that ratio to zero. Let $G_i=\sum_{t=0}^{H-1}\gamma^tR_{t+1}^i$. Return the ordinary trajectory estimator

$$\widehat J_{\mathrm{OIS}}=\frac1n\sum_{i=1}^n W_{i,H-1}G_i,$$

the per-decision estimator

$$\widehat J_{\mathrm{PDIS}}=\frac1n\sum_{i=1}^n\sum_{t=0}^{H-1}\gamma^tW_{i,t}R_{t+1}^i,$$

and the self-normalized weighted estimator

$$\widehat J_{\mathrm{WIS}}=\begin{cases}\displaystyle\frac{\sum_{i=1}^nW_{i,H-1}G_i}{\sum_{i=1}^nW_{i,H-1}},&\sum_{i=1}^nW_{i,H-1}>0,\\0,&\sum_{i=1}^nW_{i,H-1}=0.\end{cases}$$

The procedure specifies estimators; it includes no finite-sample unbiasedness assertion for the self-normalized output.

## Definition references

[[def-offline-reinforcement-learning-dataset|Finite-horizon trajectory data, behavior propensities, return, and coverage.]]

[[lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative|The cumulative action-propensity product is the RN density on each finite trajectory prefix.]]

[Sutton and Barto, Reinforcement Learning: An Introduction, 2nd ed.](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf)

[Jiang and Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning](https://proceedings.mlr.press/v48/jiang16.pdf)

[Levine, Kumar, Tucker, and Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems](https://arxiv.org/pdf/2005.01643)
