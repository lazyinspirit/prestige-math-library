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

Take one zero-bias PReLU layer with negative-side slope $a=1/2$, fan-in
$n=5$, and fan-out $\hat n=10$. Assume symmetric atomless preactivations,
independent centered symmetric weights, iid layer-input coordinates independent
of the weights, a PReLU derivative gate independent of the downstream gradient,
and a weight matrix independent of the gated incoming gradient. Compute the
forward-preserving and backward-preserving weight variances, and verify the
corresponding recurrence factors and whether one variance preserves both.

## Facts & Assumptions

**Given:** The layer dimensions and slope in the Example, with the PReLU moment and independence hypotheses stated there.

[F1] The PReLU forward and backward scale factors are $(1+a^2)/2$ times fan-in or fan-out and the corresponding weight variances are $2/((1+a^2)n)$ or $2/((1+a^2)\hat n)$. ([[cor-prelu-variance-preserving-scale]])

## Verification

1.1 Since $1+a^2=1+1/4=5/4$, the forward-preserving variance is $2/((5/4)5)=8/25$. The forward recurrence factor is $(5/8)5(8/25)=1$. [given, F1, algebra]

1.2 The backward-preserving variance is $2/((5/4)10)=4/25$. The backward recurrence factor is $(5/8)10(4/25)=1$. [given, F1, algebra]

2.1 The two variances $8/25$ and $4/25$ differ because the fan-in and fan-out differ, so this layer cannot preserve both recurrences with one shared weight variance. [step 1.1, step 1.2, algebra] ∎
