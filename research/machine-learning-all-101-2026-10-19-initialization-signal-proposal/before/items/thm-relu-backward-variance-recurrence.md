---
id: thm-relu-backward-variance-recurrence
kind: theorem
title: "ReLU backward gradient-variance recurrence"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-feedforward-neural-network
  - lem-centered-independent-weighted-sum-variance
  - lem-symmetric-rectifier-moments
  - thm-chain-rule-for-total-derivatives
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun, Delving Deep into Rectifiers, §2.2"
      url: "https://openaccess.thecvf.com/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf"
    - title: "Simon J. D. Prince, Understanding Deep Learning, §7.5.2"
      url: "https://github.com/udlbook/udlbook/releases/download/v2.0.2/UnderstandingDeepLearning_03_06_24_C.pdf"
    - title: "Johns Hopkins University, Handout #8: Neural Network Training and Tokenization, §3"
      url: "https://self-supervised.cs.jhu.edu/fa2026/files/readings/08.stable-training.html"
---

## Statement

Consider a finite fully connected layered perceptron with widths
$d_0,\ldots,d_L$, zero biases, and layer maps $Z_\ell=W_\ell X_{\ell-1}$,
$X_\ell=\rho(Z_\ell)$, where $\rho(t)=\max(t,0)$. For each layer, the
entries of $W_\ell\in\mathbb R^{d_\ell\times d_{\ell-1}}$ are mutually
independent with a common symmetric centered law and finite variance
$\sigma_\ell^2$, and suppose $W_\ell$ is independent of the input activation
$X_{\ell-1}$, whose coordinates are independent and identically distributed
with a common finite second moment. Let $J$ be a scalar objective differentiable
at the layer values,
and let $g_\ell=\nabla_{X_\ell}J$ and $h_\ell=\nabla_{Z_\ell}J$ be its
ordinary gradients, set to zero on the null event where a ReLU preactivation
vanishes. For the fixed layer $2\le\ell\le L$ under consideration, assume each
$Z_{\ell,j}$ is symmetric about zero and has no atom at zero, the coordinates of $g_\ell$
have a common finite second moment, the gate vector
$\gamma_\ell=(\mathbf 1_{Z_{\ell,j}>0})_{j=1}^{d_\ell}$ is independent of
$g_\ell$, and $W_\ell$ is independent of $h_\ell$. Then the chain rule gives
$h_\ell=\gamma_\ell\odot g_\ell$ and
$g_{\ell-1}=W_\ell^{\mathsf T}h_\ell$. With fan-out
$\hat n_\ell=d_\ell$, for each $1\le i\le d_{\ell-1}$,
$\mathbb E[g_{\ell-1,i}]=0$ and
$\operatorname{Var}(g_{\ell-1,i})=\frac12\hat n_\ell\sigma_\ell^2\mathbb E[g_{\ell,1}^2]$.
In particular, if $g_{\ell,1}$ is centered, its second moment on the right
is $\operatorname{Var}(g_{\ell,1})$. The atomless-gate hypothesis is local to
this layer; it is not asserted to propagate through every finite ReLU layer.

## Facts & Assumptions

**Given:** A finite fully connected layered perceptron, a scalar differentiable objective, a symmetric atomless preactivation at the fixed layer, square-integrable downstream gradients, gate independence from those gradients, and weight independence from the gated incoming gradients.

[F1] A fully connected layered perceptron assigns a real weight to each edge between consecutive layers and evaluates each layer from the preceding layer. ([[def-feedforward-neural-network]])

[F2] At points of total differentiability, derivatives of a composition multiply in layer order: $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$. ([[thm-chain-rule-for-total-derivatives]])

[F3] For a symmetric preactivation with no atom at zero, the ReLU gate has probability $1/2$. ([[lem-symmetric-rectifier-moments]])

[F4] A centered independent weighted sum, with weights independent of the input vector, has variance equal to the sum of weight variances times input second moments. ([[lem-centered-independent-weighted-sum-variance]])

## Proof

1.1 Because each preactivation is nonzero almost surely, the ReLU derivative at layer $\ell$ is the diagonal gate $\gamma_\ell$. The total-derivative chain rule [F2] through the elementwise activation and the affine map $Z_\ell=W_\ell X_{\ell-1}$ therefore gives $h_\ell=\gamma_\ell\odot g_\ell$ and $g_{\ell-1}=W_\ell^{\mathsf T}h_\ell$. [given, F1, F2]

1.2 By [F3], each gate coordinate is Bernoulli with mean $1/2$. Since the gate vector is independent of $g_\ell$, $\mathbb E[h_{\ell,j}^2]=\mathbb E[\mathbf 1_{Z_{\ell,j}>0}]\mathbb E[g_{\ell,j}^2]=\frac12\mathbb E[g_{\ell,1}^2]$ for every $j$. [given, F3]

2.1 For fixed $i$, the column $(W_{\ell,ji})_{j=1}^{d_\ell}$ consists of independent centered weights of variance $\sigma_\ell^2$, and the whole matrix is independent of $h_\ell$. Apply [F4] to $g_{\ell-1,i}=\sum_{j=1}^{d_\ell}W_{\ell,ji}h_{\ell,j}$. It has mean zero and variance $\sigma_\ell^2\sum_{j=1}^{d_\ell}\mathbb E[h_{\ell,j}^2]=\frac12d_\ell\sigma_\ell^2\mathbb E[g_{\ell,1}^2]$. This is the claimed fan-out recurrence, with the centered-gradient specialization stated in the conclusion. [given, F4, step 1.2] ∎
