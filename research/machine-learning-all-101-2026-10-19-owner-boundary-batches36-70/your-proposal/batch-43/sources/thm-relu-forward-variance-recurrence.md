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
  statement: ai-altered
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
$X_{\ell-1}$ have a common finite second moment; they need not be independent
or identically distributed. Also assume that each preactivation coordinate $Z_{\ell,j}$ has
a symmetric law; an atom at zero is allowed in this forward second-moment
recurrence. Then, for every $2\le\ell\le L$ and
$1\le j\le d_\ell$,
$$\operatorname{Var}(Z_{\ell,j})=\frac12 n_\ell\sigma_\ell^2\operatorname{Var}(Z_{\ell-1,1}).$$
At the raw-input boundary, the exact base relation is
$$\operatorname{Var}(Z_{1,j})=n_1\sigma_1^2\mathbb E[X_{0,1}^2];$$
if $X_{0,1}$ is centered, its second moment here is its variance. In particular,
writing $V_\ell=\operatorname{Var}(Z_{\ell,1})$, the exact finite-depth formula is
$$V_L=V_1\prod_{\ell=2}^L\frac{n_\ell\sigma_\ell^2}{2}.$$
Thus $\sigma_\ell^2=2/n_\ell$ for $\ell\ge2$ gives $V_L=V_1$,
with zero atoms allowed at every depth. This is a statement about ensemble
second moments, not about variance along every sampled network or training success.

## Facts & Assumptions

**Given:** A finite fully connected layered perceptron with zero biases, symmetric centered independent weights, layer inputs independent of their weights, symmetric preactivations, and the stated layerwise moment assumptions.

[F1] A fully connected layered perceptron has a real weight on every edge between consecutive layers, so each preactivation is the corresponding finite weighted sum. ([[def-feedforward-neural-network]])

[F2] For independent centered weights $W_i$ independent of a square-integrable input vector $X$, $\operatorname{Var}(\sum_i W_iX_i)=\sum_i\operatorname{Var}(W_i)\mathbb E[X_i^2]$. ([[lem-centered-independent-weighted-sum-variance]])

[F3] If $Z$ is symmetric about zero, $\mathbb E[\rho(Z)^2]=\frac12\mathbb E[Z^2]$, including when $Z$ has an atom at zero. ([[lem-symmetric-rectifier-moments]])

## Proof


1.1 In the fully connected layer from $X_{\ell-1}$ to $Z_\ell$, each coordinate is $Z_{\ell,j}=\sum_{i=1}^{n_\ell}W_{\ell,ji}X_{\ell-1,i}$. Apply [F2] to this row of weights and the input vector. Since its entries have common variance $\sigma_\ell^2$ and the input coordinates have common second moment, this gives $\mathbb E[Z_{\ell,j}]=0$ and $\operatorname{Var}(Z_{\ell,j})=n_\ell\sigma_\ell^2\mathbb E[X_{\ell-1,1}^2]$. For $\ell=1$ this is the stated raw-input base relation. [given, F1, F2]

2.1 For $\ell\ge2$, $X_{\ell-1,1}=\rho(Z_{\ell-1,1})$. By [F3], $\mathbb E[X_{\ell-1,1}^2]=\frac12\mathbb E[Z_{\ell-1,1}^2]$. Symmetry makes $\mathbb E[Z_{\ell-1,1}]=0$, so this is $\frac12\operatorname{Var}(Z_{\ell-1,1})$. Substitution into step 1.1 proves the claimed recurrence. [given, F3, step 1.1]

3.1 Apply step 2.1 successively for $\ell=2,\ldots,L$. The product of the finitely many coefficients is the displayed expression for $V_L$; setting each coefficient to $1$ proves preservation. No division by a variance occurs, so the identity also holds when $V_1=0$. [step 2.1, algebra] ∎

## Remarks

The equal-second-moment assumption allows the dependence between coordinates
that naturally arises after averaging over a random previous layer. For a
concrete finite-depth model satisfying all these hypotheses, take every width
to be one, $X_0=1$, and mutually independent weights
$W_\ell=\pm\sqrt{v_\ell}$ with equal probabilities, where $v_\ell>0$.
At each layer the fresh weight is independent of the preceding activation and
its random sign makes the preactivation symmetric. The event $W_1<0$ already
forces all subsequent preactivations to vanish, yet
$V_1=v_1$ and $V_L=v_1\prod_{\ell=2}^L(v_\ell/2)$ hold exactly.
Thus atomlessness is unnecessary for finite-depth forward propagation.
