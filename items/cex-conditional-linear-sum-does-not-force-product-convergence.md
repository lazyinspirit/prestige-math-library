---
id: cex-conditional-linear-sum-does-not-force-product-convergence
kind: counterexample
title: "Conditional convergence of $\\sum a_n$ does not force convergence of $\\prod(1+a_n)$"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-infinite-product-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 Infinite products"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement refuted

If the series $\sum a_n$ converges, then the product $\prod(1+a_n)$ converges.

## Facts & Assumptions

**Given:** The sequence
$$a_{2m-1}=\frac1{\sqrt m},\qquad a_{2m}=-\frac1{\sqrt m}+\frac1{m^2}\qquad(m\ge1).$$

[F1] For real numbers $0\le p_m<1$, if $\sum p_m$ diverges then
$\prod(1-p_m)$ tends to $0$
([[thm-infinite-product-criterion]]).

## Counterexample

1.1 The paired partial sums satisfy $a_{2m-1}+a_{2m}=1/m^2$, so the series $\sum a_n$ converges because $\sum_{m\ge1}1/m^2$ converges; it is not absolutely convergent because $\sum a_{2m-1}=\sum1/\sqrt m$ diverges. [given, algebra]

2.1 The paired product is $(1+a_{2m-1})(1+a_{2m})=\left(1+\frac1{\sqrt m}\right)\left(1-\frac1{\sqrt m}+\frac1{m^2}\right)=1-\frac1m+\frac1{m^2}+\frac1{m^{5/2}}$. For all large $m$ this is at most $1-\frac1{2m}$. [step 1.1, algebra]

3.1 Since $\sum_{m\ge1}1/(2m)$ diverges, [F1] makes $\prod_{m\ge M}(1-\frac1{2m})$ tend to $0$ for every large $M$; step 2.1 therefore forces the product of the paired factors, and hence $\prod(1+a_n)$ itself, to tend to $0$ rather than to a nonzero limit. This refutes the statement. [F1, step 2.1, algebra] ∎
