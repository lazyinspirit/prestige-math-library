---
id: def-real-two-user-gaussian-interference-channel
kind: definition
title: Real and complex two-user Gaussian interference channels
status: published
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
For the **real model**, $X_i,h_{ji},Z_j$ are real and $Z_j\sim N(0,1)$. For the **complex model**, the inputs and gains are complex and $Z_j\sim\mathcal{CN}(0,1)$ with density $\pi^{-1}e^{-|z|^2}$. The receiver-noise variables are independent across receivers and channel uses and independent of the messages, so the channel is memoryless. Each power budget satisfies $P_i\ge0$. A length-$n$ code has independent uniform messages $M_i$ on $[m_i]$ for integers $m_i\ge1$, deterministic separate encoders $X_i^n=f_i(M_i)$, and decoders $\widehat M_i=g_i(Y_i^n)$; no feedback is present. The expected average-power constraints are $n^{-1}\sum_{t=1}^n\mathbb E[X_{i,t}^2]\le P_i$ in the real model and $n^{-1}\sum_{t=1}^n\mathbb E|X_{i,t}|^2\le P_i$ in the complex model, with expectations under the uniform message law. The average joint error is $\Pr\{(\widehat M_1,\widehat M_2)\ne(M_1,M_2)\}$. For either model define
$$\mathrm{SNR}_1=|h_{11}|^2P_1,\quad \mathrm{SNR}_2=|h_{22}|^2P_2,\quad \mathrm{INR}_1=|h_{21}|^2P_2,\quad \mathrm{INR}_2=|h_{12}|^2P_1.$$
Rates are bits per use, $R_i=n^{-1}\log_2m_i$. For a scalar unit-noise AWGN link $Y=aX+Z$ with power constraint $P$, the capacity is $\kappa\log_2(1+|a|^2P)$, attained by a centered real Gaussian input or a circular complex Gaussian input; $\kappa=1/2$ in the real model and $\kappa=1$ in the complex model.