---
id: thm-natural-logarithm-laws
kind: theorem
title: "Order, continuity, range, and the product, quotient, and reciprocal laws for the natural logarithm"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-natural-logarithm, thm-exponential-addition-formula, cor-exponential-reciprocal-and-positivity, thm-exponential-is-strictly-increasing, thm-continuous-inverse]
justified_by: []
aliases: []
landmark: true
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

The function $\log:(0,\infty)\to\mathbb R$ is continuous and strictly increasing, is onto $\mathbb R$, and satisfies, for $x,y>0$,
$$\log(xy)=\log x+\log y,\qquad \log(x/y)=\log x-\log y,\qquad \log(1/x)=-\log x.$$
Also $\log 1=0$.

## Facts & Assumptions

**Given:** Positive reals $x,y$.

[L1] The exponential is a continuous strictly increasing bijection from $\mathbb R$ onto $(0,\infty)$, and $\log$ is its inverse ([[def-natural-logarithm]], [[thm-exponential-is-strictly-increasing]], [[thm-continuous-inverse]]).

[L2] For all reals $u,v$, $\exp(u+v)=\exp(u)\exp(v)$ ([[thm-exponential-addition-formula]]).

[L3] $\exp(-u)=1/\exp(u)$ and $\exp(u)>0$ for every real $u$ ([[cor-exponential-reciprocal-and-positivity]]).



## Proof

**Proof technique:** direct.

1.1 Since it is the inverse of the continuous strictly increasing exponential, $\log$ is continuous, strictly increasing, and maps $(0,\infty)$ onto $\mathbb R$. [L1]

1.2 The equality $\exp(\log x+\log y)=\exp(\log x)\exp(\log y)=xy=\exp(\log(xy))$ and injectivity of $\exp$ give $\log(xy)=\log x+\log y$. [L1, L2]

2.1 Since $x/y=x(1/y)$ and $\exp(-\log y)=1/y$ by [L3], step 1.2 gives $\log(x/y)=\log x-\log y$ and $\log(1/x)=-\log x$. [step 1.2, L3]

3.1 As $\exp(0)=1$, the inverse identity gives $\log 1=0$. [L1] ∎
