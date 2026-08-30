---
id: cex-multiplicative-does-not-mean-completely-multiplicative
kind: counterexample
title: "Tau is multiplicative but not completely multiplicative"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-completely-multiplicative-arithmetic-function, def-multiplicative-arithmetic-function, prop-divisor-functions-under-dirichlet-convolution]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Section 2.9"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement refuted

The statement "every multiplicative arithmetic function is completely
multiplicative" is false.

## Facts & Assumptions

**Given:** The divisor-counting function $\tau$.

## Counterexample

**Proof technique:** direct.

1.1 By [[prop-divisor-functions-under-dirichlet-convolution]], the function $\tau$ is multiplicative in the sense of [[def-multiplicative-arithmetic-function]]. [given]

2.1 The same proposition gives $\tau(2)=2$ and $\tau(4)=3$. Hence $\tau(4)=3\ne4=\tau(2)^2$, so $\tau(mn)=\tau(m)\tau(n)$ fails at the non-coprime pair $m=n=2$. [step 1.1, algebra]

3.1 Therefore $\tau$ is a multiplicative arithmetic function that is not completely multiplicative, contradicting the refuted statement. [step 2.1] ∎
