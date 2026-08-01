---
id: fs-zero-second-derivative-decides-extremum
kind: false-statement
title: "If $f'(a)=f''(a)=0$, then the second derivative test still decides whether $a$ is an extremum"
status: published
origin: session
deps: [thm-second-derivative-test, thm-first-nonzero-derivative-test]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
pipeline_run: null
---

## Statement

**False claim:** If $f'(c)=f''(c)=0$, then the value of $f''(c)$ decides whether $c$ is a local minimum, a local maximum, or neither.

## Facts & Assumptions

**Given:** The functions $f_+(x)=x^4$, $f_-(x)=-x^4$, and $f_0(x)=x^3$ at $c=0$.

[L1] The second derivative test is silent when $f''(c)=0$ ([[thm-second-derivative-test]]).

[L2] The first nonzero derivative test classifies the three functions by their first nonzero derivatives ([[thm-first-nonzero-derivative-test]]).

## Refutation

**Proof technique:** direct.

1.1 Direct differentiation gives $f_\pm'(0)=f_0'(0)=0$ and $f_\pm''(0)=f_0''(0)=0$.  [given, algebra]

1.2 Yet $x^4\ge0$ with equality only at $0$, so $f_+$ has a strict minimum; $-x^4\le0$, so $f_-$ has a strict maximum; and $x^3$ changes sign, so $f_0$ has neither.  [given, L2, algebra]

2.1 The identical second-derivative data lead to all three outcomes, refuting the claim.  [step 1.1, step 1.2, L1] ∎
