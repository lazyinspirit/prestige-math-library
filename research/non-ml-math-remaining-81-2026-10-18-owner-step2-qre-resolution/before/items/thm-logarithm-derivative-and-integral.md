---
id: thm-logarithm-derivative-and-integral
kind: theorem
title: "The natural logarithm has derivative 1/x and equals the integral from 1 to x of 1/t"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-natural-logarithm, thm-derivative-of-an-inverse, thm-derivative-of-exponential, thm-ftc-first-part, def-oriented-integral, thm-algebra-of-continuous-functions, cor-zero-derivative-implies-constant]
justified_by: []
aliases: []
landmark: true
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

For $x>0$, $\log$ is differentiable and
$$\log'(x)=\frac1x,\qquad \log x=\int_1^x\frac{dt}{t}.$$

## Facts & Assumptions

**Given:** A positive real $x$.

[L1] If a differentiable injective function has nonzero derivative, its inverse is differentiable at an image point and its derivative is the reciprocal of the original derivative ([[thm-derivative-of-an-inverse]]).

[L2] $\exp'(u)=\exp(u)$ for every real $u$ ([[thm-derivative-of-exponential]]).

[L3] The reciprocal of a nonvanishing continuous real function is continuous, and the first FTC differentiates $x\mapsto\int_1^x f(t)\,dt$ when $f$ is continuous ([[thm-algebra-of-continuous-functions]], [[thm-ftc-first-part]], [[def-oriented-integral]]).

[L4] A differentiable real function with zero derivative on an interval is constant ([[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 At $u=\log x$, $\exp'(u)=\exp(u)=x\ne0$; hence the inverse rule gives $\log'(x)=1/\exp(\log x)=1/x$. [L1, L2]

1.2 The function $t\mapsto1/t$ is continuous on $(0,\infty)$, so $I(x):=\int_1^xdt/t$ satisfies $I'(x)=1/x$ and $I(1)=0$. [L3]

2.1 The difference $x\mapsto\log x-I(x)$ has derivative zero on $(0,\infty)$, and is zero at $1$, so it is identically zero. [step 1.1, step 1.2, L4] ∎
