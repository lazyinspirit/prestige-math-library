---
id: fs-monotone-functions-have-at-most-countably-many-nondifferentiability-points
kind: false-statement
title: "FALSE: a monotone function has at most countably many points of non-differentiability"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-cantor-set-is-an-uncountable-lebesgue-null-set, def-cantor-function, def-derivative, thm-cantor-function-properties, thm-cantor-set-ternary-description]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, Real Analysis, 2nd ed."
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
---

## Statement

A monotone real function has at most countably many points where the finite
derivative fails to exist.

## Facts & Assumptions

**Given:** The statement above.

[A1] We use the Cantor function.

## Refutation

**Proof technique:** direct.

1.1 Let $c$ be the Cantor function and fix $x$ in the Cantor set. As in the Cantor-function example, let $u_n \le x \le v_n$ be the stage-$n$ Cantor interval determined by the first $n$ ternary digits of $x$. Then $v_n-u_n=3^{-n}$ and $c(v_n)-c(u_n)=2^{-n}$ by [[thm-cantor-set-ternary-description]] and [[thm-cantor-function-properties]]. At least one of the two numerator differences $c(v_n)-c(x)$ and $c(x)-c(u_n)$ is at least $2^{-n-1}$. For that choice the corresponding denominator is positive and at most $3^{-n}$, so one of the two secant slopes is at least $\tfrac12(3/2)^n$. Hence $c$ has no finite derivative at $x$. Since the Cantor set is uncountable by [[cor-cantor-set-is-an-uncountable-lebesgue-null-set]], the nondifferentiability set of $c$ is uncountable. [given, algebra]

2.1 Therefore a monotone function can have uncountably many nondifferentiability points, so the statement is false. [step 1.1] ∎
