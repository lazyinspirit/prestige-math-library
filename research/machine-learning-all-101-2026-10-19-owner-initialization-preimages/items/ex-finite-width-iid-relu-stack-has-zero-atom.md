---
id: ex-finite-width-iid-relu-stack-has-zero-atom
kind: example
title: "A finite IID ReLU stack cannot keep every preactivation atomless"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - lem-iid-relu-layer-forces-zero-atom-next
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

## Facts & Assumptions

**Given:** The two IID symmetric atomless preactivations and the zero-bias second-layer sum in the Example.

[F1] For $n$ IID symmetric atomless preactivations followed by ReLU, any next zero-bias weighted sum has an atom at zero of probability at least $2^{-n}$. ([[lem-iid-relu-layer-forces-zero-atom-next]])

## Verification


1.1 The example has $n=2$, so [F1] gives $\mathbb P(T=0)\ge2^{-2}=1/4$, independently of the values of $W_1,W_2$. [given, F1, algebra]

2.1 Therefore the two first-layer preactivations can be atomless while the next preactivation is not atomless. Requiring the no-atom condition at every layer is incompatible with this finite IID ReLU stack. [step 1.1, algebra] ∎
