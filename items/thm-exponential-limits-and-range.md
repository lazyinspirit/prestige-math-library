---
id: thm-exponential-limits-and-range
kind: theorem
title: "The exponential tends to $+\\infty$ at $+\\infty$ and to $0$ at $-\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-exponential-function-and-e, thm-nonnegative-series-bounded-partial-sums, cor-exponential-reciprocal-and-positivity, def-limits-at-infinity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Statement

$$\exp(x)\to+\infty\quad(x\to+\infty),\qquad \exp(x)\to0\quad(x\to-\infty),$$
and the range of $\exp$ is contained in $(0,\infty)$ and is unbounded above with infimum $0$.

## Facts & Assumptions

**Given:** The exponential series.

[L1] For $x\ge0$, every exponential-series term is nonnegative, so its sum dominates every partial sum and in particular $\exp(x)\ge1+x$ ([[def-real-exponential-function-and-e]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L2] $\exp(-x)=1/\exp(x)>0$ ([[cor-exponential-reciprocal-and-positivity]]).

[L3] Finite and infinite limits of functions at infinity have the quantified definitions in [[def-limits-at-infinity]].

## Proof

**Proof technique:** direct.

1.1 Given a real $M$, every $x>\max\{0,M-1\}$ satisfies $\exp(x)\ge1+x>M$. Hence $\exp(x)\to+\infty$.  [L1, L3]

1.2 Given $\varepsilon>0$, choose $X>0$ with $1+X>1/\varepsilon$. If $x<-X$, then $-x>X$, so [L1] gives $\exp(-x)\ge1-x>1+X>1/\varepsilon$; [L2] yields $0<\exp(x)<\varepsilon$.  [L1, L2, choose]

2.1 The range assertions follow from positivity and the two limit conclusions.  [step 1.1, step 1.2, L2] ∎
