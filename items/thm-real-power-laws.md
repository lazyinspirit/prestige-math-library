---
id: thm-real-power-laws
kind: theorem
title: "The exponent, product, quotient, and iterated-power laws for positive real bases and real exponents"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-power, thm-natural-logarithm-laws, thm-exponential-addition-formula, cor-exponential-reciprocal-and-positivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
pipeline_run: null
---

## Statement

For $a,b>0$ and $r,s\in\mathbb R$,
$$a^{r+s}=a^ra^s,\qquad (ab)^r=a^rb^r,\qquad (a/b)^r=a^r/b^r,\qquad (a^r)^s=a^{rs}.$$

## Facts & Assumptions

**Given:** Positive reals $a,b$ and real exponents $r,s$.

[L1] $a^u=\exp(u\log a)$ for $a>0$ ([[def-real-power]]).

[L2] $\log(ab)=\log a+\log b$, $\log(a/b)=\log a-\log b$, and $\log(\exp u)=u$ ([[thm-natural-logarithm-laws]]).

[L3] $\exp(u+v)=\exp(u)\exp(v)$ and $\exp(-u)=1/\exp(u)$ ([[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]]).



## Proof

**Proof technique:** direct.

1.1 Expanding $a^{r+s}$ by [L1] and applying [L3] gives $a^{r+s}=\exp(r\log a)\exp(s\log a)=a^ra^s$. [L1, L3]

1.2 Expanding $(ab)^r$ and using $\log(ab)=\log a+\log b$ gives $(ab)^r=a^rb^r$. [L1, L2, L3]

1.3 The same calculation with $\log(a/b)=\log a-\log b$ and [L3] gives $(a/b)^r=a^r/b^r$. [L1, L2, L3]

2.1 Since $\log(a^r)=\log(\exp(r\log a))=r\log a$, expanding $(a^r)^s$ gives $a^{rs}$. [L1, L2] ∎
