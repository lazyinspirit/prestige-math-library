---
id: thm-logarithm-slower-than-every-positive-power
kind: theorem
title: "The logarithm grows more slowly than every positive real power"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-exponential-beats-every-polynomial, def-real-power, def-natural-logarithm, thm-exponential-limits-and-range, thm-algebra-of-limits]
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

For every $\alpha>0$,
$$\lim_{x\to+\infty}\frac{\log x}{x^\alpha}=0.$$

## Facts & Assumptions

**Given:** A real $\alpha>0$.

[L1] $\exp(t)$ tends to $+\infty$ as $t\to+\infty$, and its range is $(0,\infty)$ ([[thm-exponential-limits-and-range]], [[def-natural-logarithm]]).

[L2] For $a>0$, $t/\exp(at)\to0$ as $t\to+\infty$ ([[thm-exponential-beats-every-polynomial]]).

[L3] $x^\alpha=\exp(\alpha\log x)$ for $x>0$, and algebra of limits permits substitution through the displayed identities ([[def-real-power]], [[thm-algebra-of-limits]]).

## Proof

**Proof technique:** direct.

1.1 Put $t=\log x$. As $x\to+\infty$, the inverse relation and [L1] give $t\to+\infty$. [L1]

1.2 By [L3], $\log x/x^\alpha=t/\exp(\alpha t)$. [L3]

2.1 The right-hand side tends to $0$ by [L2], which proves the claim. [step 1.1, step 1.2, L2] ∎
