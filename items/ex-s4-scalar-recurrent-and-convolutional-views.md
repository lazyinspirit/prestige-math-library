---
id: ex-s4-scalar-recurrent-and-convolutional-views
kind: example
title: A scalar state-space layer has matching recurrent and convolutional outputs
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-s4-dplr-parameterization, alg-s4-state-space-recurrence-and-convolution]
justified_by: []
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
    date: 2026-10-20
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, §§2.3–2.4"
      url: "https://arxiv.org/pdf/2111.00396"
---

## Example

Take the scalar state-space model $A=0$, $B=C=1$, direct term $D=0$, step size $\Delta=1$, and initial state $x_{-1}=0$. For any integer $L\ge1$ and any length-$L$ scalar input sequence $(u_0,\ldots,u_{L-1})$, the bilinear matrices are $\bar A=1$ and $\bar B=1$, so the recurrence gives $x_t=x_{t-1}+u_t$ and $y_t=\sum_{s=0}^{t}u_s$ for $0\le t<L$. The length-$L$ impulse kernel is $(1,\ldots,1)$, and its causal convolution $\sum_{j=0}^{t}K_j u_{t-j}$ gives the same outputs for $0\le t<L$.

## Example references

[[def-s4-dplr-parameterization]]

[[alg-s4-state-space-recurrence-and-convolution]]

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” §§2.3–2.4](https://arxiv.org/pdf/2111.00396)

## Facts & Assumptions

**Given:** The scalar parameters and zero initial state in the Example, with a length-$L$ input sequence.

[F1] [[def-s4-dplr-parameterization]]: when $I-\Delta A/2$ is invertible, $\bar A=(I-\Delta A/2)^{-1}(I+\Delta A/2)$, $\bar B=(I-\Delta A/2)^{-1}\Delta B$, and the zero-state kernel has entries $C^*\bar A^j\bar B$.

[F2] [[alg-s4-state-space-recurrence-and-convolution]]: the recurrent mode solves $(I-\Delta A/2)x_t=(I+\Delta A/2)x_{t-1}+\Delta Bu_t$ and returns $C^*x_t$.

## Proof

1.1 Here $I-\Delta A/2=1$ and $I+\Delta A/2=1$, so [F1] gives $\bar A=1$ and $\bar B=1$. [given, F1, algebra]

2.1 By [F2] and step 1.1, $x_t=x_{t-1}+u_t$ and $y_t=x_t$. The base value is $x_{-1}=0$; if $x_{t-1}=\sum_{s=0}^{t-1}u_s$, then $x_t=x_{t-1}+u_t=\sum_{s=0}^{t}u_s$. Induction proves $y_t=\sum_{s=0}^{t}u_s$. [given, F2, step 1.1, induction]

3.1 By [F1] and step 1.1, every kernel coefficient is $C^*\bar A^j\bar B=1$. Therefore its causal convolution at time $t$ is $\sum_{j=0}^{t}u_{t-j}=\sum_{s=0}^{t}u_s$, which equals the recurrent output in step 2.1 after substituting $s=t-j$. [F1, step 1.1, step 2.1, algebra] ∎
