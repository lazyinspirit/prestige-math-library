---
id: cor-real-power-as-rational-limit
kind: corollary
title: "Every rational approximation to a real exponent gives the same limiting real power"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-rational-supremum-power-agrees-with-exp, thm-real-power-agrees-with-rational-exponent, thm-real-power-continuity-and-derivatives]
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

Let $a>0$, let $x\in\mathbb R$, and let $(q_n)$ be a rational sequence converging to $x$. Then $a^{q_n}\to a^x$. Hence the limit is independent of the rational approximating sequence and equals the rational-supremum value $a^{[x]}$.

## Facts & Assumptions

**Given:** $a>0$, $x\in\mathbb R$, and rational $q_n\to x$.

[L1] The rational-supremum and exponential constructions agree ([[thm-rational-supremum-power-agrees-with-exp]]).

[L2] Rational powers agree with real powers, and $t\mapsto a^t$ is continuous ([[thm-real-power-agrees-with-rational-exponent]], [[thm-real-power-continuity-and-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 For every $n$, rational-exponent agreement gives $a^{q_n}=\exp(q_n\log a)$. [L2]

1.2 Continuity of $t\mapsto a^t$ gives $a^{q_n}\to a^x$. [L2]

2.1 Since $a^{[x]}=a^x$, this limit is independent of the chosen rational sequence and has the asserted supremum value. [step 1.2, L1] ∎
