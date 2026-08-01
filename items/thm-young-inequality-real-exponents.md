---
id: thm-young-inequality-real-exponents
kind: theorem
title: "Young's inequality for conjugate real exponents"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-weighted-am-gm-real, def-real-power, thm-real-power-laws, cor-exponential-reciprocal-and-positivity]
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

Let $p,q>1$ satisfy $1/p+1/q=1$. For $u,v\ge0$,
$$uv\le\frac{u^p}{p}+\frac{v^q}{q}.$$

## Facts & Assumptions

**Given:** Conjugate real exponents $p,q>1$ and nonnegative reals $u,v$.

[L1] Weighted AM-GM applies to positive entries with nonnegative weights summing to one ([[thm-weighted-am-gm-real]]).

[L2] Positive-base real-power laws hold, and the zero-base convention is $0^r=0$ for $r>0$; positive-base real powers are positive ([[def-real-power]], [[thm-real-power-laws]], [[cor-exponential-reciprocal-and-positivity]]).



## Proof

**Proof technique:** direct.

1.1 If $u=0$ or $v=0$, the inequality is immediate from nonnegativity of the two terms on the right. [L2]

1.2 For $u,v>0$, apply [L1] to $u^p,v^q$ with weights $1/p,1/q$. [L1, given]

2.1 Its geometric side is $(u^p)^{1/p}(v^q)^{1/q}=uv$, and its arithmetic side is $u^p/p+v^q/q$. [step 1.2, L2]

3.1 Steps 1.1 and 2.1 cover all nonnegative $u,v$. [step 1.1, step 2.1] ∎
