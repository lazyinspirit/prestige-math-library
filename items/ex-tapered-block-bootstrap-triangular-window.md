---
id: ex-tapered-block-bootstrap-triangular-window
kind: example
title: Triangular taper weights for a block of length three
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps: [alg-tapered-block-bootstrap, lem-taper-window-l2-normalization]
proof_strategy: direct substitution into the taper and its normalization
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Section 2.3, Assumption 2"
      url: https://arxiv.org/pdf/1711.01070
---

## Example

Take the triangular window $w(u)=\max(1-2|u-\tfrac12|,0)$ and a block length $b=3$. The midpoint weights are $w_3=(1/3,1,1/3)$.

## Verification

**Given:** The window and block length in the Example.

[F1] [[alg-tapered-block-bootstrap]]: The sampled window weights are $w_b(r)=w((r-\tfrac12)/b)$, with scale $a_b=\sqrt b/(\sum_r w_b(r)^2)^{1/2}$.

[F2] [[lem-taper-window-l2-normalization]]: For an admissible window, $W_b^2/b\to\int_0^1w(u)^2du>0$; the exact finite-$b$ scale is still computed from $W_b$.

1.1 Substitution of $r=1,2,3$ gives $w_3=(1/3,1,1/3)$, so $W_3^2=1/9+1+1/9=11/9$ and $a_3=3\sqrt{3/11}$. [F1, given, algebra]

2.1 The scaled within-block weights are therefore $(\sqrt{3/11},3\sqrt{3/11},\sqrt{3/11})$. Their squared sum is $\frac{3+27+3}{11}=3$, equal to $b$, as required by the normalization $a_b^2W_b^2=b$. [F1, F2, step 1.1, algebra] ∎
