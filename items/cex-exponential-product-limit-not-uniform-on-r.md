---
id: cex-exponential-product-limit-not-uniform-on-r
kind: counterexample
title: "The convergence $(1+x/n)^n\\to\\exp x$ is not uniform on $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-exponential-product-limit, thm-exponential-addition-formula, cor-two-less-than-e-less-than-three, def-pointwise-uniform-and-uniformly-cauchy-convergence, def-integer-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
pipeline_run: null
---

## Statement refuted

The pointwise convergence $(1+x/\iota(n))^n\to\exp(x)$ is uniform on all of $\mathbb R$.

## Facts & Assumptions

**Given:** $h_n(x)=(1+x/\iota(n))^n$.

[L1] Pointwise convergence is [[thm-exponential-product-limit]], while uniform convergence is [[def-pointwise-uniform-and-uniformly-cauchy-convergence]].

[L2] $e>2$ ([[cor-two-less-than-e-less-than-three]]) and $\exp(n)=e^n$ by [[thm-exponential-addition-formula]].

## Counterexample

**Proof technique:** direct.

1.1 At the moving point $x=\iota(n)$, $h_n(x)=2^n$, whereas $\exp(x)=e^n$.   [given, L2]

2.1 Since $e>2$, the difference $e^n-2^n$ is at least $e-2>0$ and in fact grows; therefore $\sup_x|h_n(x)-\exp(x)|\not\to0$.  [step 1.1, L2, algebra]

3.1 Hence the pointwise convergence is not uniform on $\mathbb R$.  [step 2.1, L1] ∎
