---
id: ex-finite-width-iid-relu-stack-has-zero-atom
kind: example
title: "A symmetric atomless IID ReLU layer creates a zero atom next"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - lem-iid-relu-layer-forces-zero-atom-next
  - thm-relu-backward-variance-recurrence
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun, Delving Deep into Rectifiers, §2.2"
      url: "https://openaccess.thecvf.com/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf"
    - title: "Simon J. D. Prince, Understanding Deep Learning, §7.5.1"
      url: "https://github.com/udlbook/udlbook/releases/download/v2.0.2/UnderstandingDeepLearning_03_06_24_C.pdf"
---

## Example

Let $Z_1,Z_2$ be independent and identically distributed symmetric real
random variables with no atom at zero, set $X_i=\operatorname{ReLU}(Z_i)$, and
form a second-layer zero-bias preactivation $T=W_1X_1+W_2X_2$ with arbitrary
real weights. Although each $Z_i$ is atomless, the event that both rectified
inputs vanish has probability $1/4$ and forces $T=0$.

For a complete finite-network signal calculation, also take a two-layer
width-one ReLU stack with $X_0=1$, mutually independent
$W_1,W_2\in\{-\sqrt2,\sqrt2\}$ with equal sign probabilities,
and an independent random sign $R\in\{-1,1\}$. Take objective
$J(X_2)=RX_2$, so $g_2=R$, and use zero-at-kink backpropagation.
Then $\operatorname{Var}(Z_1)=\operatorname{Var}(Z_2)=2$ but
$\mathbb P(Z_2=0)=1/2$ and $\operatorname{Var}(g_1)=1/2$.
The atomless half-factor coefficient would instead give $1$. This does not
refute the conditional theorem: its atomlessness and weight/gated-signal
independence hypotheses fail in this realized stack.

## Facts & Assumptions

**Given:** The two-coordinate zero-event model and the independent finite random-sign scalar stack in the Example.

[F1] For $n$ IID symmetric atomless preactivations followed by ReLU, any next zero-bias weighted sum has an atom at zero of probability at least $2^{-n}$. ([[lem-iid-relu-layer-forces-zero-atom-next]])

[F2] Zero-at-kink backward signals satisfy $h_2=\mathbf 1_{Z_2>0}g_2$ and $g_1=W_2h_2$; the atomless half-factor formula requires additional hypotheses. ([[thm-relu-backward-variance-recurrence]])

## Verification

1.1 The example has $n=2$, so [F1] gives $\mathbb P(T=0)\ge2^{-2}=1/4$, independently of the values of $W_1,W_2$. [given, F1, algebra]

1.2 In the scalar stack, $Z_1$ is $\pm\sqrt2$ with equal probabilities. If $W_1<0$ then $X_1=0$ and $Z_2=0$; if $W_1>0$ then $Z_2$ is $2$ or $-2$ with equal probabilities. Thus the law of $Z_2$ gives probabilities $1/4,1/2,1/4$ to $-2,0,2$, respectively. Both preactivations have mean zero and variance $2$, and the second has zero probability $1/2$. [given, algebra]

2.1 Therefore the two first-layer preactivations can be atomless while the next preactivation is not atomless. Requiring the no-atom condition at every layer is incompatible with this finite IID ReLU stack. [step 1.1, algebra]

3.1 By [F2], $g_1=\sqrt2 R$ exactly when both weights are positive, an event of probability $1/4$; it is zero otherwise. Independence and the centered sign $R$ give mean zero and variance $2(1/4)=1/2$. The atomless coefficient would be $(1/2)(1)(2)\mathbb E[R^2]=1$. Here $h_2=R$ on the same positive-weight event and zero otherwise: $\mathbb P(h_2\ne0\mid W_2<0)=0$, whereas $\mathbb P(h_2\ne0)=1/4$, so weight/gated-signal independence fails. The covariance identity and the specified kink convention remain valid; the atomless conditional recurrence is inapplicable. [given, F2, step 1.2, algebra] ∎
