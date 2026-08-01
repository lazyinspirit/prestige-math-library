---
id: ex-x-to-x-tends-to-one
kind: example
title: "x^x tends to one as x tends to zero from the right"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-power, thm-logarithm-slower-than-every-positive-power, thm-exponential-is-strictly-increasing]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
pipeline_run: null
---

## Example

$$\lim_{x\to0+}x^x=1.$$

## Facts & Assumptions

**Given:** $x>0$ tending to $0$.

[L1] $x^x=\exp(x\log x)$ for $x>0$ ([[def-real-power]]).

[L2] $\log t/t\to0$ as $t\to+\infty$ ([[thm-logarithm-slower-than-every-positive-power]]).

[L3] The exponential is continuous and $\exp0=1$ ([[thm-exponential-is-strictly-increasing]]).



## Verification

**Proof technique:** direct.

1.1 With $t=1/x$, one has $t\to+\infty$ and $x\log x=-(\log t)/t\to0$ by [L2]. [L2]

2.1 Therefore $x^x=\exp(x\log x)\to\exp0=1$. [step 1.1, L1, L3] ∎
