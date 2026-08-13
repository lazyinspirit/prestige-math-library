---
id: fs-cauchy-riemann-on-an-open-set-without-regularity-implies-holomorphy
kind: false-statement
title: "FALSE: existence of partial derivatives satisfying Cauchy–Riemann everywhere on an open set implies holomorphy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-exponential-is-entire-with-derivative-itself, thm-algebra-of-complex-derivatives, thm-chain-rule-for-complex-derivatives, thm-exponential-beats-every-polynomial, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, cor-complex-differentiability-implies-continuity]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 2.2.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: frontier-12
---

## Statement

**False claim:** if all four first coordinate partial derivatives of $f=u+iv$ exist at every point of an open set and satisfy the Cauchy–Riemann equations there, then $f$ is holomorphic on that set.

## Facts & Assumptions
**Given:** The function on $\mathbb C$ $$f(0)=0,\qquad f(z)=\exp(-z^{-4})\quad(z\ne0).$$

[L1] The complex exponential is entire with derivative itself ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[L2] Complex differentiation is linear and satisfies the product rule; where $g(a)\ne0$ the reciprocal $1/g$ is complex differentiable at $a$ with $(1/g)'=-g'/g^2$ ([[thm-algebra-of-complex-derivatives]]); and a composite of complex differentiable maps is complex differentiable ([[thm-chain-rule-for-complex-derivatives]]). Iterating the product rule makes $z\mapsto z^{4}$ complex differentiable, so the reciprocal rule makes $z\mapsto z^{-4}$ complex differentiable wherever $z\ne0$. No general complex-exponent power rule is used.

[L3] For every natural $m$ and real $a>0$, $x^m/\exp(ax)\to0$ as $x\to+\infty$ ([[thm-exponential-beats-every-polynomial]]).

[L4] Complex differentiability implies the Cauchy–Riemann equations, and it also implies continuity at the point ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]], [[cor-complex-differentiability-implies-continuity]]).

## Refutation

**Proof technique:** direct counterexample.

1.1 On $\mathbb C\setminus\{0\}$, the power, reciprocal, exponential, and chain rules show that $f$ is holomorphic. Consequently all four partials exist and satisfy the Cauchy–Riemann equations there by [L1], [L2], and [L4]. [L1, L2, L4]

1.2 For nonzero real $t$, both $t^4$ and $(it)^4$ equal $t^4$, so $$f(t)=f(it)=e^{-1/t^4}\in\mathbb R.$$ [given, algebra]

1.3 Put $x=1/|t|$. As $t\to0$, $x\to+\infty$; for $x\ge1$, $0\le xe^{-x^4}\le xe^{-x}$, and [L3] with $m=1$, $a=1$ makes the last expression tend to $0$. Hence $e^{-1/t^4}/|t|\to0$. [L3, algebra]

1.4 Along $z=t(1+i)$ with nonzero real $t$, one has $z^4=-4t^4$, and therefore $$f(t(1+i))=e^{1/(4t^4)}\longrightarrow+\infty\qquad(t\to0).$$ So $f$ is unbounded in every neighbourhood of $0$ and is not continuous there. [given, algebra]

2.1 Steps 1.2–1.3 give $u_x(0)=u_y(0)=v_x(0)=v_y(0)=0$. Thus all four partials exist at $0$ and satisfy both Cauchy–Riemann equations there. Together with step 1.1, the false claim's hypotheses hold throughout the open set $\mathbb C$. [step 1.1, step 1.2, step 1.3]

3.1 By [L4], the discontinuity in step 1.4 rules out complex differentiability at $0$. Hence $f$ satisfies Cauchy–Riemann everywhere but is not holomorphic on $\mathbb C$, refuting the claim. [step 2.1, step 1.4, L4]

4.1 There is also a Wirtinger warning. Off $0$, $f$ is holomorphic, so conjugating its Cauchy–Riemann equations gives $(\bar f)_z=0$; at $0$, step 2.1 gives the same value. Thus $(\bar f)_z$ is identically zero and continuous. Nevertheless, off $0$ the chain rule gives $f'(z)=4z^{-5}e^{-z^{-4}}$, whose modulus along $z=t(1+i)$ tends to infinity, so the coordinate partials of $f$ and $\bar f$ are not continuous at $0$. [step 1.1, step 2.1, step 1.4, L2, L4, algebra] ∎
