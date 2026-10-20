---
id: alg-rectifier-variance-preserving-initialization
kind: algorithm
title: "Rectifier variance-preserving initialization"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-feedforward-neural-network
  - def-independent-random-elements
  - def-moments-variance-and-covariance
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun, Delving Deep into Rectifiers, §2.2"
      url: "https://openaccess.thecvf.com/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf"
    - title: "Simon J. D. Prince, Understanding Deep Learning, §7.5.1–7.5.3"
      url: "https://github.com/udlbook/udlbook/releases/download/v2.0.2/UnderstandingDeepLearning_03_06_24_C.pdf"
    - title: "Johns Hopkins University, Handout #8: Neural Network Training and Tokenization, §3"
      url: "https://self-supervised.cs.jhu.edu/fa2026/files/readings/08.stable-training.html"
---

## Definition

**Inputs.** A finite layered perceptron with positive integer widths
$d_0,\ldots,d_L$, a real negative-side slope $a$, a mode
$m\in\{\mathrm{forward},\mathrm{backward}\}$, and a finite mutually
independent family of real random variables $\xi_{\ell ji}$ with a common
symmetric law, mean zero, and variance one. The layer matrix has shape
$d_\ell\times d_{\ell-1}$, with row index $j$ and column index $i$.

**Output.** Random weight matrices $W_\ell$ and zero bias vectors $b_\ell$.

**Instructions.** For each $1\le\ell\le L$, set the fan-in
$n_\ell=d_{\ell-1}$ and fan-out $\hat n_\ell=d_\ell$. Set
$$v_\ell=\frac{2}{(1+a^2)n_\ell}\quad(m=\mathrm{forward}),\qquad v_\ell=\frac{2}{(1+a^2)\hat n_\ell}\quad(m=\mathrm{backward}).$$
For every matrix entry set $W_{\ell,ji}=\sqrt{v_\ell}\,\xi_{\ell ji}$, and
set $b_\ell=0$. The case $a=0$ is ReLU; the piecewise-linear activation for
general $a$ is $t$ for $t>0$ and $at$ for $t\le0$.

## Remarks

The repeated forward recurrence concerns a layer whose inputs are outputs of a
rectifier. A raw-input first affine layer has no preceding rectifier factor;
when its inputs are centered, exact one-step forward variance preservation uses
$v_1=1/n_1$. He et al. also use the rectifier scale at that first layer for
simplicity; this changes one boundary factor, not the repeated hidden-layer
factor. Fan-in mode and fan-out mode target different directions and need not
preserve both when layer widths differ. The paper's depth and ImageNet accuracy
comparisons are reported experiments, not consequences of this definition and
not guarantees of training success or generalization.

The mode names specify the source's forward and conditional backward moment
targets. They do not assert that finite-network gradients are independent of
their weights or gates. A positive-probability zero preactivation requires a
specified kink convention for backpropagation; it does not have an ordinary
ReLU derivative. Consequently the backward scale alone supplies no nonzero
actual-gradient preservation guarantee.
