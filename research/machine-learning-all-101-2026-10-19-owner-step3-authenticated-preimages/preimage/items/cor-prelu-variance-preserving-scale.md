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
  - thm-factorization-of-expectations-for-independent-variables
proof_strategy: direct
provenance:
  statement: ai-altered
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

Let $a\in\mathbb R$ and consider a finite rectified stack with zero biases,
widths $d_0,\ldots,d_L$, $Z_\ell=W_\ell X_{\ell-1}$, and
$X_\ell=\phi_a(Z_\ell)$, where $\phi_a(t)=t$ for $t>0$ and
$\phi_a(t)=at$ for $t\le0$. Put $n_\ell=d_{\ell-1}$ and
$\hat n_\ell=d_\ell$. Suppose each $W_\ell$ has independent entries
with a common symmetric centered law of finite variance $\sigma_\ell^2$ and
is independent of $X_{\ell-1}$. Suppose each layer input has coordinates with
a common finite second moment, and all preactivation coordinates are symmetric
about zero. Input coordinates may be dependent, and zero atoms are allowed.
Then, writing $V_\ell=\operatorname{Var}(Z_{\ell,1})$,
$$V_1=n_1\sigma_1^2\mathbb E[X_{0,1}^2],\qquad V_\ell=\frac{1+a^2}{2}n_\ell\sigma_\ell^2V_{\ell-1}\quad(2\le\ell\le L),\qquad V_L=V_1\prod_{\ell=2}^L\frac{1+a^2}{2}n_\ell\sigma_\ell^2.$$
Thus $\sigma_\ell^2=2/((1+a^2)n_\ell)$ preserves the forward
preactivation variance across the hidden layers.

For backward signals, take an objective $J$ differentiable as a function of
the last activation and set $g_L=\nabla_{X_L}J(X_L)$. Specify a finite kink
value $c_\ell$ and put
$\eta_{\ell,j}=\mathbf 1_{Z_{\ell,j}>0}+a\mathbf 1_{Z_{\ell,j}<0}+c_\ell\mathbf 1_{Z_{\ell,j}=0}$,
$h_\ell=\eta_\ell\odot g_\ell$, and
$g_{\ell-1}=W_\ell^{\mathsf T}h_\ell$.
They are ordinary chain-rule gradients when all relevant preactivations are
nonzero; when $a=1$ and $c_\ell=1$ the activation is linear and this also
holds at zeros. Otherwise a specified kink value is a backpropagation convention.
If the coordinates of $Z_\ell$ have common zero probability $p_\ell$,
the coordinates of $g_\ell$ have common finite second moment $G_\ell$,
$\eta_\ell$ is independent of $g_\ell$, and $W_\ell$ is independent of
$h_\ell$, then
$$G_{\ell-1}=\operatorname{Var}(g_{\ell-1,i})=\hat n_\ell\sigma_\ell^2\kappa_\ell G_\ell,\qquad \kappa_\ell=\frac{1+a^2}{2}(1-p_\ell)+c_\ell^2p_\ell.$$
The upstream coordinates have mean zero. If these conditional hypotheses hold
for every $r\le\ell\le L$, then
$$G_{r-1}=G_L\prod_{\ell=r}^L\hat n_\ell\sigma_\ell^2\kappa_\ell.$$
In the source's atomless case $p_\ell=0$, this retains the original backward
factor $(1+a^2)\hat n_\ell\sigma_\ell^2/2$ and the fan-out choice
$\sigma_\ell^2=2/((1+a^2)\hat n_\ell)$. For a noncentered terminal
signal $G_L$ is its second moment; for centered signals it is their variance.
The source's forward and atomless backward weight variances agree exactly when
$n_\ell=\hat n_\ell$. With atoms the conditional backward-preserving choice
is $1/(\hat n_\ell\kappa_\ell)$ when $\kappa_\ell>0$; if
$\kappa_\ell=0$ the upstream signal has zero variance for every finite
weight variance. These are conditional backward statements, and no independence
assumption or nonzero actual-gradient realization is inferred from initialization.

## Facts & Assumptions

**Given:** The finite stack and its forward moment assumptions, an objective differentiable as a function of $X_L$ with $g_L=\nabla_{X_L}J(X_L)$, the specified backward-signal convention, and the additional layerwise conditional hypotheses only for backward preservation.

[F1] The source initializer uses forward variance $2/((1+a^2)n_\ell)$ or backward variance $2/((1+a^2)\hat n_\ell)$. ([[alg-rectifier-variance-preserving-initialization]])

[F2] Symmetry gives PReLU second moment $(1+a^2)\mathbb E[Z^2]/2$, and the squared gate moment is $((1+a^2)/2)(1-p_0)+c^2p_0$. ([[lem-symmetric-rectifier-moments]])

[F3] Independent centered weights independent of an input vector give weighted-sum mean zero and variance $\sum_i\operatorname{Var}(W_i)\mathbb E[X_i^2]$. ([[lem-centered-independent-weighted-sum-variance]])

[F4] Totally differentiable compositions obey the total-derivative chain rule. ([[thm-chain-rule-for-total-derivatives]])

[F5] The ReLU forward recurrence allows zero atoms and has factor $n_\ell\sigma_\ell^2/2$ and the corresponding finite-depth product. ([[thm-relu-forward-variance-recurrence]])

[F6] Exact backward signals obey a covariance-sum identity; the ReLU half-factor product is conditional, and its full atomless independence assumptions force zero downstream second moment at a nondegenerate actual ReLU hidden layer. ([[thm-relu-backward-variance-recurrence]])

[F7] Expectations of products of independent integrable variables factor. ([[thm-factorization-of-expectations-for-independent-variables]])

## Proof

1.1 Apply [F3] to a row of $W_\ell$. The preactivation is centered and has variance $n_\ell\sigma_\ell^2\mathbb E[X_{\ell-1,1}^2]$, which proves the raw-input relation. For $\ell\ge2$, [F2] and centered symmetry give $\mathbb E[X_{\ell-1,1}^2]=(1+a^2)V_{\ell-1}/2$, proving the forward recurrence without an atomlessness or coordinate-independence assumption. Successive substitution gives the finite product; the forward choice [F1] makes every hidden-layer factor one. [given, F1, F2, F3, algebra]

1.2 At nonzero preactivations the derivative of PReLU is $1$ on the positive half-line and $a$ on the negative half-line, so [F4] gives the stated backward recursion for ordinary gradients there. At zeros the recursion is instead the specified convention, except in the linear case $a=1,c_\ell=1$, where it is the ordinary derivative everywhere. By [F2] and independence of the gate and $g_\ell$, [F7] gives $\mathbb E[h_{\ell,j}^2]=\kappa_\ell G_\ell$. [given, F2, F4, F7]

2.1 Apply [F3] to each column of $W_\ell$ and $h_\ell$, using the assumed matrix/signal independence. The upstream signal is centered and has variance $\sigma_\ell^2\sum_j\mathbb E[h_{\ell,j}^2]=\hat n_\ell\sigma_\ell^2\kappa_\ell G_\ell$. Iteration over the finite set of layers proves the backward product, just as for [F6]. If $p_\ell=0$ then $\kappa_\ell=(1+a^2)/2$ and the source's backward choice [F1] gives unit coefficient. For positive $\kappa_\ell$, solving the unit-coefficient equation gives $1/(\hat n_\ell\kappa_\ell)$; for zero $\kappa_\ell$ the coefficient vanishes for every finite weight variance. [given, F1, F3, F6, step 1.2, algebra]

3.1 The positive source scales $2/((1+a^2)n_\ell)$ and $2/((1+a^2)\hat n_\ell)$ agree exactly when $n_\ell=\hat n_\ell$. At $a=0,c_\ell=0$, the forward and backward formulas specialize to [F5] and [F6], including the atom correction and feasibility caveat; at $a=1,c_\ell=1$, $\kappa_\ell=1$ for every zero probability, as required for the linear derivative. These substitutions also show why an arbitrary kink convention must not be silently identified with an ordinary derivative. [F1, F5, F6, step 1.1, step 2.1, algebra] ∎

## Remarks

The atomless half-factor product is retained as the precise conditional
calculation in He et al. §2.2; the forward product is valid for actual finite
stacks satisfying the forward assumptions, with dependent coordinates and zero
atoms allowed. The backward independence hypotheses require separate verification
for an actual network. In particular, the ReLU specialization has the explicit
nonzero-feasibility obstruction proved in the backward theorem, even at one
hidden layer. No mean-field limit or empirical training claim supplies that gap.
