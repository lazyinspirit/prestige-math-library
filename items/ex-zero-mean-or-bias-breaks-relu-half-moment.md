---
id: ex-zero-mean-or-bias-breaks-relu-half-moment
kind: example
title: "Mean-zero weights or a nonzero bias do not supply the ReLU half-moment"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - lem-symmetric-rectifier-moments
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun, Delving Deep into Rectifiers, §2.2"
      url: "https://openaccess.thecvf.com/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf"
    - title: "Simon J. D. Prince, Understanding Deep Learning, §7.5.1"
      url: "https://github.com/udlbook/udlbook/releases/download/v2.0.2/UnderstandingDeepLearning_03_06_24_C.pdf"
    - title: "Johns Hopkins University, Handout #8: Neural Network Training and Tokenization, §3"
      url: "https://self-supervised.cs.jhu.edu/fa2026/files/readings/08.stable-training.html"
---

## Example

Compare two one-unit preactivations. In the first, the input is $X=1$, the
bias is zero, and the weight $W$ equals $-1$ with probability $2/3$ and $2$
with probability $1/3$. In the second, the input $X$ is uniform on $[-2,2]$,
the independent weight $W$ equals $-1$ or $1$ with equal probabilities, and
the bias is $1$. In each case compute $\mathbb E[\operatorname{ReLU}(Z)^2]$
and compare it with $\frac12\operatorname{Var}(Z)$, where $Z=WX+b$. The first
case tests whether a zero-mean but nonsymmetric weight law suffices; the second
tests the effect of a nonzero bias despite symmetric weights and input.

## Facts & Assumptions

**Given:** The two one-unit probability models specified in the Example.

[F1] If $Z$ is symmetric about zero and has no atom at zero, then $\mathbb E[\operatorname{ReLU}(Z)^2]=\frac12\mathbb E[Z^2]$. ([[lem-symmetric-rectifier-moments]])

[F2] Variance is the centered second moment, $\operatorname{Var}(Z)=\mathbb E[(Z-\mathbb E[Z])^2]$. ([[def-moments-variance-and-covariance]])

[F3] Expectations of nonnegative random variables are integrals against their probability laws. ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]])

## Verification


1.1 In the first case, $\mathbb E[W]=(-1)(2/3)+2(1/3)=0$ and $\operatorname{Var}(Z)=\operatorname{Var}(W)=\mathbb E[W^2]=2$. Since $\operatorname{ReLU}(Z)$ is $2$ with probability $1/3$ and zero otherwise, $\mathbb E[\operatorname{ReLU}(Z)^2]=4/3$, whereas $\frac12\operatorname{Var}(Z)=1$. [given, F2, algebra]

1.2 The first preactivation has $\mathbb P(Z>0)=1/3$ and $\mathbb P(Z<0)=2/3$, so its law is not symmetric despite its zero mean and absence of an atom at zero. The symmetric-preactivation hypothesis of [F1] fails; zero mean alone cannot replace it. [given, F1, algebra]

1.3 In the second case, conditioning on either value of $W$ shows that $WX$ is uniform on $[-2,2]$. Thus $Z=WX+1$ is uniform on $[-1,3]$, with mean $1$ and variance $(3-(-1))^2/12=4/3$; it has no atom at zero. [given, F2, F3, algebra]

2.1 The density of $Z$ is $1/4$ on $[-1,3]$, so $\mathbb E[\operatorname{ReLU}(Z)^2]=\frac14\int_0^3 z^2\,dz=9/4$, while $\frac12\operatorname{Var}(Z)=2/3$. The nonzero bias has shifted the symmetric preactivation and invalidated the half-moment identity. [given, F2, F3, algebra] ∎
