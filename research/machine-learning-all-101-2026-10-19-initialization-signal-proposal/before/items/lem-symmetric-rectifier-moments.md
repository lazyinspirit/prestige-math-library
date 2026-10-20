---
id: lem-symmetric-rectifier-moments
kind: lemma
title: "Second moments of symmetric rectifiers"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-cauchy-schwarz-for-random-variables
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - thm-change-of-variables-for-expectation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun, Delving Deep into Rectifiers, §2.2"
      url: "https://openaccess.thecvf.com/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf"
    - title: "Simon J. D. Prince, Understanding Deep Learning, §7.5.1–7.5.2"
      url: "https://github.com/udlbook/udlbook/releases/download/v2.0.2/UnderstandingDeepLearning_03_06_24_C.pdf"
    - title: "Johns Hopkins University, Handout #8: Neural Network Training and Tokenization, §3"
      url: "https://self-supervised.cs.jhu.edu/fa2026/files/readings/08.stable-training.html"
---

## Statement

Let $Z$ be a real random variable with $\mathbb E[Z^2]<\infty$ and law
symmetric about zero, meaning that $Z$ and $-Z$ have the same distribution.
Write $p_0=\mathbb P(Z=0)$. Define the ReLU function $\rho(t)=\max(t,0)$ and,
for $a\in\mathbb R$, define $\phi_a(t)=t$ for $t>0$ and $\phi_a(t)=at$ for
$t\le0$. Then
$$\mathbb P(Z>0)=\mathbb P(Z<0)=\frac{1-p_0}{2},\qquad \mathbb E[\rho(Z)]=\frac12\mathbb E[|Z|],\qquad \mathbb E[\rho(Z)^2]=\frac12\mathbb E[Z^2].$$
and
$$\mathbb E[\phi_a(Z)]=\frac{1-a}{2}\mathbb E[|Z|],\qquad \mathbb E[\phi_a(Z)^2]=\frac{1+a^2}{2}\mathbb E[Z^2].$$
In particular,
$$\operatorname{Var}(\rho(Z))=\frac12\mathbb E[Z^2]-\frac14\bigl(\mathbb E[|Z|]\bigr)^2.$$
When $\mathbb P(Z=0)=0$, each sign has probability $1/2$, so the ReLU
derivative gate is Bernoulli with parameter $1/2$.

## Facts & Assumptions

**Given:** A real random variable $Z$ with finite second moment and symmetric law about zero.

[F1] Expectations of measurable functions of a random element are integrals against its law. ([[thm-change-of-variables-for-expectation]])

[F2] Expectation is the Lebesgue integral on the probability space. ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]])

[F3] Variance is $\operatorname{Var}(Y)=\mathbb E[(Y-\mathbb E[Y])^2]$ for square-integrable $Y$. ([[def-moments-variance-and-covariance]])

[F4] A square-integrable random variable has integrable products by Cauchy–Schwarz; in particular $\mathbb E[|Z|]\le(\mathbb E[Z^2])^{1/2}$. ([[cor-cauchy-schwarz-for-random-variables]])

## Proof


1.1 Symmetry gives $\mathbb P(Z>0)=\mathbb P(Z<0)$, and these probabilities sum to $1-p_0$, so each is $(1-p_0)/2$. Applying [F1] and [F2] to $t\mapsto t^2\mathbf 1_{t>0}$ and $t\mapsto t^2\mathbf 1_{t<0}$ shows that the positive-side and negative-side second moments are equal. Their sum is $\mathbb E[Z^2]$, since the contribution at zero is zero, so each is $\frac12\mathbb E[Z^2]$. [given, F1, F2]

1.2 By [F1] and symmetry, $\mathbb E[Z]=\mathbb E[-Z]=-\mathbb E[Z]$, hence $\mathbb E[Z]=0$. The expectation $\mathbb E[|Z|]$ is finite by [F4]. The positive and negative parts of $Z$ have equal expectations by symmetry and sum to $|Z|$, so each expectation is $\frac12\mathbb E[|Z|]$. Therefore $\mathbb E[\rho(Z)]=\frac12\mathbb E[|Z|]$ and $\mathbb E[\phi_a(Z)]=\mathbb E[Z\mathbf 1_{Z>0}]+a\mathbb E[Z\mathbf 1_{Z<0}]=\frac{1-a}{2}\mathbb E[|Z|]$. [given, F1, F4, algebra]

2.1 The identities $\rho(Z)^2=Z^2\mathbf 1_{Z>0}$ and $\phi_a(Z)^2=Z^2\mathbf 1_{Z>0}+a^2Z^2\mathbf 1_{Z<0}$ now give the two asserted second moments from step 1.1. [step 1.1, algebra]

3.1 Expanding the variance definition [F3] gives $\operatorname{Var}(\rho(Z))=\mathbb E[\rho(Z)^2]-(\mathbb E[\rho(Z)])^2$. Substitution of steps 2.1 and 1.2 proves the stated centered-variance identity and completes all formulas. [step 2.1, step 1.2, F3, algebra] ∎
