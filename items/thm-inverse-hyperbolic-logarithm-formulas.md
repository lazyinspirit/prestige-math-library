---
id: thm-inverse-hyperbolic-logarithm-formulas
kind: theorem
title: "Logarithm formulas for inverse sinh, inverse cosh, and inverse tanh on their natural domains"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-hyperbolic-functions, thm-hyperbolic-identities-and-derivatives, thm-natural-logarithm-laws, thm-real-power-continuity-and-derivatives, thm-of-square-roots]
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

The strictly increasing bijections $\sinh:\mathbb R\to\mathbb R$, $\cosh:[0,\infty)\to[1,\infty)$, and $\tanh:\mathbb R\to(-1,1)$ have inverse functions satisfying
$$\operatorname{arsinh}u=\log(u+\sqrt{u^2+1}),$$
$$\operatorname{arcosh}u=\log(u+\sqrt{u^2-1})\quad(u\ge1),$$
$$\operatorname{artanh}u=\frac12\log\frac{1+u}{1-u}\quad(|u|<1).$$

## Facts & Assumptions

**Given:** A real $u$ in the stated domain.

[L1] The hyperbolic identities hold, and $\sinh:\mathbb R\to\mathbb R$, $\cosh:[0,\infty)\to[1,\infty)$, and $\tanh:\mathbb R\to(-1,1)$ are strictly increasing bijections ([[thm-hyperbolic-identities-and-derivatives]], [[def-hyperbolic-functions]]).

[L2] $\log$ is the inverse of $\exp$ and satisfies its product and reciprocal laws ([[thm-natural-logarithm-laws]]).

[L3] Positive-base real powers are continuous, and every nonnegative real has its nonnegative square root ([[thm-real-power-continuity-and-derivatives]], [[thm-of-square-roots]]).



## Proof

**Proof technique:** direct.

1.1 Solving $\sinh z=u$ after putting $v=\exp z>0$ gives $v^2-2uv-1=0$, hence $v=u+\sqrt{u^2+1}>0$ and $z=\log(u+\sqrt{u^2+1})$. [L1, L2, L3]

1.2 Solving $\cosh z=u$ with $z\ge0$ gives $v^2-2uv+1=0$ and the allowed root $v=u+\sqrt{u^2-1}$, hence the displayed arcosh formula. [L1, L2, L3]

1.3 Solving $\tanh z=u$ gives $v^2=(1+u)/(1-u)>0$, so $z=\frac12\log((1+u)/(1-u))$. [L1, L2]

2.1 The strict monotonicity and stated ranges in [L1] make each algebraic solution the unique inverse value on its declared domain. [step 1.1, step 1.2, step 1.3, L1] ∎
