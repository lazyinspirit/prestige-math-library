---
id: ex-poisson-integral-of-a-single-character
kind: example
title: "Poisson integral of a single character"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-cesaro-and-abel-means-of-a-fourier-series]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
---

## Example

Let $k\in\mathbb Z$ and $0\le r<1$. Then

$$A_re_k=r^{|k|}e_k.$$

## Facts & Assumptions

**Given:** An integer $k$ and a parameter $r$ with $0\le r<1$.

[L1] The Abel means are defined by
$$A_rf(x)=\sum_{m\in\mathbb Z}r^{|m|}\widehat f(m)e_m(x)$$
([[def-cesaro-and-abel-means-of-a-fourier-series]]).

## Verification

**Proof technique:** direct.

1.1 The Fourier coefficients of $e_k$ vanish except at $k$, where the coefficient is $1$. Substituting into [L1] leaves only one term: $$A_re_k(x)=r^{|k|}e_k(x).$$ [L1, algebra]

2.1 Since step 1.1 holds for every $x$, it is exactly the asserted identity $A_re_k=r^{|k|}e_k$. [step 1.1] ∎
