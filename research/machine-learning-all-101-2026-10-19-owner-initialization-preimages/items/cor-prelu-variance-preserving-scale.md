---
id: cor-prelu-variance-preserving-scale
kind: corollary
title: "PReLU fan-in and fan-out variance scales"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-rectifier-variance-preserving-initialization
  - lem-centered-independent-weighted-sum-variance
  - lem-symmetric-rectifier-moments
  - thm-chain-rule-for-total-derivatives
  - thm-relu-backward-variance-recurrence
  - thm-relu-forward-variance-recurrence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun, Delving Deep into Rectifiers, §2.2"
      url: "https://openaccess.thecvf.com/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf"
    - title: "Simon J. D. Prince, Understanding Deep Learning, §7.5.1–7.5.3"
      url: "https://github.com/udlbook/udlbook/releases/download/v2.0.2/UnderstandingDeepLearning_03_06_24_C.pdf"
    - title: "Johns Hopkins University, Handout #8: Neural Network Training and Tokenization, §3"
      url: "https://self-supervised.cs.jhu.edu/fa2026/files/readings/08.stable-training.html"
---

## Statement

Let $a\in\mathbb R$ and consider a finite fully connected layered perceptron
with zero biases, widths $d_0,\ldots,d_L$, preactivations
$Z_\ell=W_\ell X_{\ell-1}$, and PReLU activations
$X_\ell=\phi_a(Z_\ell)$, where $\phi_a(t)=t$ for $t>0$ and
$\phi_a(t)=at$ for $t\le0$. Write the fan-in as $n_\ell=d_{\ell-1}$ and
the fan-out as $\hat n_\ell=d_\ell$. Assume the entries of each
$W_\ell\in\mathbb R^{d_\ell\times d_{\ell-1}}$ are mutually independent
with a common symmetric centered law of finite variance $\sigma_\ell^2$,
independent of $X_{\ell-1}$; assume the coordinates of each layer input are
independent and identically distributed with a common finite second moment.
For a fixed layer $2\le\ell\le L$, assume the preceding preactivations
$Z_{\ell-1,j}$ are symmetric about zero and the current preactivations
$Z_{\ell,j}$ are symmetric about zero with no atom at zero. For the backward
statement, let $J$ be a scalar
differentiable objective, put $g_\ell=\nabla_{X_\ell}J$ and
$h_\ell=\nabla_{Z_\ell}J$, assume the coordinates of $g_\ell$ have a common
finite second moment, the PReLU derivative gate at $Z_\ell$ is independent of
$g_\ell$, and $W_\ell$ is independent of $h_\ell$. Then for $2\le\ell\le
L$,
$$\operatorname{Var}(Z_{\ell,j})=\frac{1+a^2}{2}n_\ell\sigma_\ell^2\operatorname{Var}(Z_{\ell-1,1})$$
and
$$\operatorname{Var}(g_{\ell-1,i})=\frac{1+a^2}{2}\hat n_\ell\sigma_\ell^2\mathbb E[g_{\ell,1}^2].$$
If $g_{\ell,1}$ is centered, its second moment in the backward formula is its
variance. Thus the choice $\sigma_\ell^2=2/((1+a^2)n_\ell)$ preserves the
forward preactivation variance, while
$\sigma_\ell^2=2/((1+a^2)\hat n_\ell)$ preserves the backward gradient
second moment (and variance for centered gradients). These two choices agree
exactly when $n_\ell=\hat n_\ell$.

## Facts & Assumptions

**Given:** The finite-width layer model and independence, symmetry, finite-moment, and differentiability hypotheses in the Statement.

[F1] The initializer sets the forward variance to $2/((1+a^2)n_\ell)$ and the backward variance to $2/((1+a^2)\hat n_\ell)$. ([[alg-rectifier-variance-preserving-initialization]])

[F2] For symmetric atomless $Z$, $\mathbb E[\phi_a(Z)^2]=\frac{1+a^2}{2}\mathbb E[Z^2]$ and the positive/negative signs each have probability $1/2$. ([[lem-symmetric-rectifier-moments]])

[F3] A centered independent weighted sum has variance $\sum_i\operatorname{Var}(W_i)\mathbb E[X_i^2]$. ([[lem-centered-independent-weighted-sum-variance]])

[F4] The derivative of a composition at totally differentiable points is the composition of the derivatives in layer order. ([[thm-chain-rule-for-total-derivatives]])

[F5] The ReLU forward recurrence is for preactivation variance and has factor $n_\ell\sigma_\ell^2/2$. ([[thm-relu-forward-variance-recurrence]])

[F6] The ReLU backward recurrence uses fan-out, with the gate independent of downstream gradient and the weight independent of the gated incoming gradient. ([[thm-relu-backward-variance-recurrence]])

## Proof


1.1 For $\ell\ge2$, the local PReLU moment identity [F2] gives $\mathbb E[X_{\ell-1,1}^2]=\frac{1+a^2}{2}\mathbb E[Z_{\ell-1,1}^2]=\frac{1+a^2}{2}\operatorname{Var}(Z_{\ell-1,1})$, because the preceding preactivation is symmetric and hence centered. Applying [F3] to one row of $W_\ell$ yields $\operatorname{Var}(Z_{\ell,j})=\frac{1+a^2}{2}n_\ell\sigma_\ell^2\operatorname{Var}(Z_{\ell-1,1})$. [given, F2, F3]

1.2 At nonzero preactivations the PReLU derivative is $1$ on the positive half-line and $a$ on the negative half-line. By symmetry, no atom at zero, and the gate independence in the Statement, $\mathbb E[h_{\ell,j}^2]=\frac{1+a^2}{2}\mathbb E[g_{\ell,j}^2]$. The chain rule [F4] identifies $h_\ell$ as the gated downstream gradient and $g_{\ell-1}=W_\ell^{\mathsf T}h_\ell$. [given, F2, F4]

2.1 In forward mode [F1], $\sigma_\ell^2=2/((1+a^2)n_\ell)$, so the coefficient in step 1.1 is $1$ and $\operatorname{Var}(Z_{\ell,j})=\operatorname{Var}(Z_{\ell-1,1})$. [F1, step 1.1, algebra]

2.2 Apply [F3] to each column of $W_\ell$ and $h_\ell$. The upstream gradient is centered and has variance $\sigma_\ell^2\sum_{j=1}^{d_\ell}\mathbb E[h_{\ell,j}^2]=\frac{1+a^2}{2}\hat n_\ell\sigma_\ell^2\mathbb E[g_{\ell,1}^2]$. In backward mode [F1], this equals $\mathbb E[g_{\ell,1}^2]$. [given, F1, F3, step 1.2]

3.1 The two mode variances in [F1] are equal exactly when $n_\ell=\hat n_\ell$. Setting $a=0$ in steps 1.1 and 2.2 recovers the ReLU factors in [F5] and [F6]; thus the two cases agree with the preceding recurrence theorems. [F1, F5, F6, step 1.1, step 2.2, algebra] ∎

## Remarks

These are conditional one-layer formulas. The atomless-preactivation
hypothesis needed for the backward derivative gate is not asserted to propagate
through every finite zero-bias ReLU layer with independent layer inputs.
