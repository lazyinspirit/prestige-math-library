---
id: thm-logarithm-change-of-base
kind: theorem
title: "Change of base and inversion of the positive-base real exponential"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-logarithm-to-a-base, def-real-power, thm-real-power-laws, thm-natural-logarithm-laws]
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

If $b>0$, $b\ne1$, and $x>0$, then
$$\log_bx=\frac{\log x}{\log b},\qquad b^{\log_bx}=x,\qquad \log_b(b^u)=u\quad(u\in\mathbb R).$$
In particular, $\log_bx=\log_cx/\log_cb$ for every second base $c>0$, $c\ne1$.

## Facts & Assumptions

**Given:** $b,c>0$ with $b,c\ne1$, $x>0$, and $u\in\mathbb R$.

[L1] $\log_bx=\log x/\log b$, with $\log b\ne0$ ([[def-logarithm-to-a-base]]).

[L2] $b^v=\exp(v\log b)$ and the real-power laws hold for positive bases ([[def-real-power]], [[thm-real-power-laws]]).

[L3] $\log(\exp v)=v$ and $\exp(\log x)=x$ for $x>0$ ([[thm-natural-logarithm-laws]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $b^{\log_bx}=\exp((\log x/\log b)\log b)=\exp(\log x)=x$. [L1, L2, L3]

1.2 Likewise $\log_b(b^u)=\log(\exp(u\log b))/\log b=u$. [L1, L2, L3]

2.1 Dividing $\log x$ first by $\log c$ and then by $\log b/\log c$ gives $\log_bx=\log_cx/\log_cb$. [L1, algebra] ∎
