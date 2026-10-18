---
id: def-real-two-user-gaussian-interference-channel
kind: definition
title: Real and complex two-user Gaussian interference channels
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
aliases: []
axiom_use: The channel model is axiomatic; entropy calculations in later lemmas use the stated Gaussian law and choice assumptions of their suppliers.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: Raul H. Etkin, David N. C. Tse, and Hua Wang, Gaussian Interference Channel Capacity to Within One Bit, IEEE Transactions on Information Theory 54(12), 2008
      url: https://arxiv.org/pdf/cs/0702045
      locator: §2, channel model, SNR and INR definitions, PDF pp. 4–5.
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 6, Gaussian interference channel model and capacity bounds, printed pp. 119–126.
---

## Definition

The two-user Gaussian interference channel has independent messages, separate encoders, and outputs
$$Y_1=h_{11}X_1+h_{21}X_2+Z_1,\qquad Y_2=h_{12}X_1+h_{22}X_2+Z_2.$$
For the **real model**, $X_i,h_{ji},Z_j$ are real, $Z_j\sim N(0,1)$, and $\mathbb E X_i^2\le P_i$. For the **complex model**, the inputs and gains are complex, $Z_j\sim\mathcal{CN}(0,1)$ with density $\pi^{-1}e^{-|z|^2}$, and $\mathbb E|X_i|^2\le P_i$. No feedback is present. For either model define
$$\mathrm{SNR}_1=|h_{11}|^2P_1,\quad \mathrm{SNR}_2=|h_{22}|^2P_2,\quad \mathrm{INR}_1=|h_{21}|^2P_2,\quad \mathrm{INR}_2=|h_{12}|^2P_1.$$
Rates are bits per use. A scalar Gaussian mutual information is $\kappa\log_2(1+\mathrm{SNR})$, where $\kappa=1/2$ in the real model and $\kappa=1$ in the complex model.
