---
id: cex-conditionally-convergent-euler-product-rearrangement
kind: counterexample
title: "The Euler-product identity does not survive after leaving the absolute half-plane"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-multiplicative-dirichlet-series-euler-product, thm-dirichlet-series-absolute-half-plane-holomorphy]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 2"
      url: "https://kskedlaya.org/ant/part-1-3.html"
pipeline_run: null
---

## Statement refuted

Once a multiplicative Dirichlet series is written as an Euler product on its
absolute half-plane, the same prime-by-prime regrouping remains valid on the
boundary or beyond.

## Facts & Assumptions

**Given:** The Dirichlet series $\zeta(s)=\sum_{n \ge 1} n^{-s}$.

[L1] The Euler-product theorem is stated only on a half-plane of absolute
convergence ([[thm-multiplicative-dirichlet-series-euler-product]],
[[thm-dirichlet-series-absolute-half-plane-holomorphy]]).

## Counterexample

**Proof technique:** direct.

1.1 On $\Re s>1$, [L1] gives $$\zeta(s)=\prod_p (1-p^{-s})^{-1}.$$ At the boundary point $s=1$, however, the Dirichlet series is the harmonic series and diverges. So there is no value of the left-hand side there to which the proved Euler-product identity could apply. [L1, given, algebra]

2.1 This already refutes the claimed boundary extension: the theorem proving the Euler product does not license prime-factor regrouping once absolute convergence is lost. [step 1.1] ∎
