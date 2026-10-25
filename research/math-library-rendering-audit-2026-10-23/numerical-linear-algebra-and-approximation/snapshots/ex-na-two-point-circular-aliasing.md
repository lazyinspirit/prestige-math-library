---
id: ex-na-two-point-circular-aliasing
kind: example
title: "Two-point circular convolution aliases the linear endpoint term"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution-examples
dependency_level: 1
deps: [lem-na-zero-padding-removes-linear-convolution-aliasing, def-cyclic-convolution-on-z-mod-n]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 13 §13.1"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
---

## Example

Let $a=b=(1,1)$. The exact length-two cyclic convolution is $(2,2)$, while the linear convolution is $(1,2,1)$. Padding both inputs to length four makes the first three cyclic outputs equal the linear convolution and leaves the last output zero. The length-two circular result has wrapped the final linear coefficient into its index-zero output. This compares exact convolution operations and does not assert an output for the computed routine.

## Facts & Assumptions

**Given:** The exact cyclic and linear convolution operations, $a_0=a_1=b_0=b_1=1$, and zeros outside the stated two-entry supports.

[F1] $(a*_2b)_k=\sum_{j=0}^{1}a_jb_{[k-j]_2}$ ([[def-cyclic-convolution-on-z-mod-n]]).

[F2] Zero padding to any $M\ge n+m-1$ gives the full linear convolution in the first $n+m-1$ cyclic outputs and zero thereafter ([[lem-na-zero-padding-removes-linear-convolution-aliasing]]).

## Verification

1.1 From [F1], $(a*_2b)_0=a_0b_0+a_1b_1=2$ and $(a*_2b)_1=a_0b_1+a_1b_0=2$. Direct linear convolution has coefficients $c_0=a_0b_0=1$, $c_1=a_0b_1+a_1b_0=2$, and $c_2=a_1b_1=1$. [given, F1, algebra]

2.1 Here $n=m=2$, so $n+m-1=3$. Choose $M=4\ge3$. By [F2], the exact length-four cyclic operation on the padded inputs has outputs $(c_0,c_1,c_2,0)=(1,2,1,0)$. Since its index-zero value is $1$ rather than the unpadded circular value $2$, the latter contains the wrapped endpoint term $c_2$. [given, F2, step 1.1] ∎
