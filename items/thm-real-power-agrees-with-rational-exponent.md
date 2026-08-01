---
id: thm-real-power-agrees-with-rational-exponent
kind: theorem
title: "The exponential definition of real powers agrees with the existing rational powers"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-power, def-rational-power, lem-rational-power-laws, thm-natural-logarithm-laws]
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

## Statement

If $a>0$ and $r\in\mathbb Q$, then the real power $a^r=\exp(r\log a)$ agrees with the rational power of [[def-rational-power]]. For $r>0$, both conventions also give $0^r=0$.

## Facts & Assumptions

**Given:** A positive real $a$ and a rational $r=p/q$ with $q\ge1$.

[L1] Rational powers satisfy $(a^{p/q})^q=a^p$, are positive for positive base, and obey the rational power laws ([[def-rational-power]], [[lem-rational-power-laws]]).

[L2] For positive reals, $\log(xy)=\log x+\log y$, $\log(1/x)=-\log x$, and $\log$ is injective ([[thm-natural-logarithm-laws]]).

[L3] The real-power definition is $a^u=\exp(u\log a)$ ([[def-real-power]]).



## Proof

**Proof technique:** direct.

1.1 For $q\ge1$, the product law for $\log$ gives $\log((a^{p/q})^q)=q\log(a^{p/q})=p\log a=\log(a^p)$. [L1, L2]

2.1 Injectivity of $\log$ gives $\log(a^{p/q})=(p/q)\log a$, and exponentiating gives $a^{p/q}=\exp((p/q)\log a)$. [step 1.1, L2, L3]

3.1 This is the new real power at exponent $p/q$; negative rational exponents follow by reciprocals, and the stated $0^r$ convention agrees with [[def-rational-power]] for $r>0$. [step 2.1, L1, L3] ∎
