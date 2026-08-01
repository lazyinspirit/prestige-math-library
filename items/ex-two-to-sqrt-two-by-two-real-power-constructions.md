---
id: ex-two-to-sqrt-two-by-two-real-power-constructions
kind: example
title: "Two to the square root of two from rational suprema and from exp(sqrt(2) log 2)"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-rational-supremum-power-agrees-with-exp, cor-real-power-as-rational-limit, thm-of-square-roots]
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

Let $s=\sqrt2$. The two constructions give the same number:
$$2^{[s]}=\sup\{2^q:q\in\mathbb Q,\ q<s\}=\exp(s\log2)=\lim_{q_n\to s,\ q_n\in\mathbb Q}2^{q_n}.$$

## Facts & Assumptions

**Given:** The nonnegative square root $s=\sqrt2$.

[L1] The rational-supremum and exponential constructions agree ([[thm-rational-supremum-power-agrees-with-exp]]).

[L2] Rational approximations to an exponent converge to its real power ([[cor-real-power-as-rational-limit]]).

[L3] $\sqrt2$ exists and is positive ([[thm-of-square-roots]]).

## Verification

**Proof technique:** direct.

1.1 By [L3], $s$ is a real exponent, so [L1] gives $2^{[s]}=\exp(s\log2)$. [L1, L3]

1.2 For every rational sequence $q_n\to s$, [L2] gives $2^{q_n}\to2^s=\exp(s\log2)$. [L2]

2.1 Thus the supremum, exponential, and rational-limit descriptions agree. [step 1.1, step 1.2] ∎
