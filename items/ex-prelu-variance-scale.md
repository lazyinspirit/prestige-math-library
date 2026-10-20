---
id: ex-prelu-variance-scale
kind: example
title: "A PReLU slope changes both initialization scales"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - cor-prelu-variance-preserving-scale
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
    - title: "Simon J. D. Prince, Understanding Deep Learning, §7.5.1–7.5.3"
      url: "https://github.com/udlbook/udlbook/releases/download/v2.0.2/UnderstandingDeepLearning_03_06_24_C.pdf"
    - title: "Johns Hopkins University, Handout #8: Neural Network Training and Tokenization, §3"
      url: "https://self-supervised.cs.jhu.edu/fa2026/files/readings/08.stable-training.html"
---

## Example

For the PReLU source scale calculation, take negative-side slope $a=1/2$,
fan-in $n=5$, and fan-out $\hat n=10$. Compare the exact forward recurrence
coefficient $(1+a^2)n\sigma^2/2$ with the atomless conditional backward
coefficient $(1+a^2)\hat n\sigma^2/2$. Compute the two unit-coefficient
weight variances and determine whether they agree. The backward coefficient
has the corollary's independence assumptions; it is not asserted to describe
an arbitrary actual-network gradient, and a zero atom with a specified kink
gate changes its factor.

## Facts & Assumptions

**Given:** The dimensions, slope, and forward and atomless conditional backward coefficients stated in the Example.

[F1] The PReLU forward and backward scale factors are $(1+a^2)/2$ times fan-in or fan-out and the corresponding weight variances are $2/((1+a^2)n)$ or $2/((1+a^2)\hat n)$. ([[cor-prelu-variance-preserving-scale]])

## Verification

1.1 Since $1+a^2=1+1/4=5/4$, the forward-preserving variance is $2/((5/4)5)=8/25$. The forward recurrence factor is $(5/8)5(8/25)=1$. [given, F1, algebra]

1.2 The backward-preserving variance is $2/((5/4)10)=4/25$. The backward recurrence factor is $(5/8)10(4/25)=1$. [given, F1, algebra]

2.1 The two variances $8/25$ and $4/25$ differ because the fan-in and fan-out differ, so no shared weight variance makes both recurrence coefficients equal to one. [step 1.1, step 1.2, algebra] ∎
