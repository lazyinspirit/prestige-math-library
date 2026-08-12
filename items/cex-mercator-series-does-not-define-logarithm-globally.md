---
id: cex-mercator-series-does-not-define-logarithm-globally
kind: counterexample
title: "For every x>2 the uncontinued Mercator series at u=x-1 diverges"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-log-series-extends-by-the-product-law, thm-ratio-test,
       lem-nth-term-test]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "OpenStax, Calculus Volume 1, Section 6.7"
      url: "https://openstax.org/books/calculus-volume-1/pages/6-7-integrals-exponential-functions-and-logarithms"
pipeline_run: null
---

## Statement refuted

The Mercator expression
$\sum_{n=1}^{\infty}(-1)^{n+1}(x-1)^n/n$ does not define the natural
logarithm for every $x>0$. For every $x>2$, this uncontinued series diverges.

## Facts & Assumptions

**Given:** $x>2$ and $u:=x-1>1$.

[L1] The ratio test says that a series diverges if the lower limit of the
absolute ratios of successive nonzero terms is greater than $1$
([[thm-ratio-test]]).

[L2] If a series converges, then its terms tend to $0$
([[lem-nth-term-test]]).

[L3] The Mercator series gives local data on $-1<u\leq1$; a separate product
law continues those data uniquely to all positive inputs
([[lem-log-series-extends-by-the-product-law]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $a_n=(-1)^{n+1}u^n/n$ for $n\geq1$. Every $a_n$ is nonzero, and $$ \left|\frac{a_{n+1}}{a_n}\right| =u\frac{n}{n+1}\longrightarrow u>1. $$ [given, algebra]
2.1 The ratio test [L1] therefore makes $\sum_na_n$ divergent. [step 1.1, L1]
2.2 More explicitly, choose $q$ with $1<q<u$. The ratios in step 1.1 are at least $q$ for all sufficiently large $n$, so $|a_n|$ then grows by a factor at least $q$ and cannot tend to $0$; [L2] again rules out convergence. [step 1.1, L2, choose, algebra]
3.1 This does not conflict with [L3]: for $x>2$, the direct substitution $u=x-1$ lies outside the local interval, and the value at $x$ is obtained by the product-law continuation instead. [step 2.1, L3] ∎