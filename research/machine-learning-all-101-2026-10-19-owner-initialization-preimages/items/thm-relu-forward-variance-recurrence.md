---
id: thm-relu-forward-variance-recurrence
kind: theorem
title: "ReLU forward preactivation-variance recurrence"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-feedforward-neural-network
  - lem-centered-independent-weighted-sum-variance
  - lem-symmetric-rectifier-moments
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun, Delving Deep into Rectifiers, §2.2"
      url: "https://openaccess.thecvf.com/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf"
    - title: "Simon J. D. Prince, Understanding Deep Learning, §7.5.1"
      url: "https://github.com/udlbook/udlbook/releases/download/v2.0.2/UnderstandingDeepLearning_03_06_24_C.pdf"
    - title: "Johns Hopkins University, Handout #8: Neural Network Training and Tokenization, §3"
      url: "https://self-supervised.cs.jhu.edu/fa2026/files/readings/08.stable-training.html"
---

## Statement

Let $L\ge2$ and let $d_0,\ldots,d_L$ be positive integers. For each
$1\le\ell\le L$, let $W_\ell\in\mathbb R^{d_\ell\times d_{\ell-1}}$ have
mutually independent, identically distributed entries with a symmetric law,
mean zero, and finite variance $\sigma_\ell^2$, and suppose $W_\ell$ is
independent of the input activation vector $X_{\ell-1}$. Set the fan-in
$n_\ell=d_{\ell-1}$, set every bias to zero, and define
$Z_\ell=W_\ell X_{\ell-1}$ and $X_\ell=\rho(Z_\ell)$ coordinatewise, where
$\rho(t)=\max(t,0)$. Assume for every layer that the coordinates of
$X_{\ell-1}$ are independent and identically distributed with a common finite
second moment. Also assume that each preactivation coordinate $Z_{\ell,j}$ has
a symmetric law; an atom at zero is allowed in this forward second-moment
recurrence. Then, for every $2\le\ell\le L$ and
$1\le j\le d_\ell$,
$$\operatorname{Var}(Z_{\ell,j})=\frac12 n_\ell\sigma_\ell^2\operatorname{Var}(Z_{\ell-1,1}).$$
At the raw-input boundary, the exact base relation is
$$\operatorname{Var}(Z_{1,j})=n_1\sigma_1^2\mathbb E[X_{0,1}^2];$$
if $X_{0,1}$ is centered, its second moment here is its variance.

## Facts & Assumptions

**Given:** A finite fully connected layered perceptron with zero biases, symmetric centered independent weights, layer inputs independent of their weights, symmetric preactivations, and the stated layerwise moment assumptions.

[F1] A fully connected layered perceptron has a real weight on every edge between consecutive layers, so each preactivation is the corresponding finite weighted sum. ([[def-feedforward-neural-network]])

[F2] For independent centered weights $W_i$ independent of a square-integrable input vector $X$, $\operatorname{Var}(\sum_i W_iX_i)=\sum_i\operatorname{Var}(W_i)\mathbb E[X_i^2]$. ([[lem-centered-independent-weighted-sum-variance]])

[F3] If $Z$ is symmetric about zero, $\mathbb E[\rho(Z)^2]=\frac12\mathbb E[Z^2]$, including when $Z$ has an atom at zero. ([[lem-symmetric-rectifier-moments]])

## Proof


1.1 In the fully connected layer from $X_{\ell-1}$ to $Z_\ell$, each coordinate is $Z_{\ell,j}=\sum_{i=1}^{n_\ell}W_{\ell,ji}X_{\ell-1,i}$. Apply [F2] to this row of weights and the input vector. Since its entries have common variance $\sigma_\ell^2$ and the input coordinates have common second moment, this gives $\mathbb E[Z_{\ell,j}]=0$ and $\operatorname{Var}(Z_{\ell,j})=n_\ell\sigma_\ell^2\mathbb E[X_{\ell-1,1}^2]$. For $\ell=1$ this is the stated raw-input base relation. [given, F1, F2]

2.1 For $\ell\ge2$, $X_{\ell-1,1}=\rho(Z_{\ell-1,1})$. By [F3], $\mathbb E[X_{\ell-1,1}^2]=\frac12\mathbb E[Z_{\ell-1,1}^2]$. Symmetry makes $\mathbb E[Z_{\ell-1,1}]=0$, so this is $\frac12\operatorname{Var}(Z_{\ell-1,1})$. Substitution into step 1.1 proves the claimed recurrence. [given, F3, step 1.1] ∎
