---
id: ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one
kind: example
title: "The Cantor function has derivative 0 almost everywhere, is not differentiable on the Cantor set, and still rises from 0 to 1"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-cantor-function-is-continuous, cor-cantor-set-is-an-uncountable-lebesgue-null-set, def-cantor-function, def-derivative, thm-cantor-function-properties, thm-cantor-set-ternary-description]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, Real Analysis, 2nd ed."
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
---

## Example

The Cantor function $c : [0,1] \to [0,1]$ is nondecreasing, satisfies
$c(0)=0$ and $c(1)=1$, has derivative $0$ almost everywhere, and has no finite
derivative at any point of the Cantor set.

## Facts & Assumptions

**Given:** The Cantor function $c$ and the Cantor set $C$.

[A1] The symbols are those of the statement.

## Verification

**Proof technique:** direct.

1.1 By [[thm-cantor-function-properties]], every point of $[0,1] \setminus C$ lies in an open interval on which $c$ is constant. Hence $c'(x)=0$ for all $x \notin C$. Since $C$ is Lebesgue null by [[cor-cantor-set-is-an-uncountable-lebesgue-null-set]], this proves $c'=0$ almost everywhere. [given]

2.1 Fix $x \in C$. Write the ternary expansion of $x$ using only digits $0$ and $2$, and let $u_n \le x \le v_n$ be the two points of $C$ obtained by freezing the first $n$ ternary digits of $x$ and filling the remaining digits with all $0$'s and all $2$'s. Then $v_n-u_n = 3^{-n}$ and $c(v_n)-c(u_n)=2^{-n}$ by the digit description of [[thm-cantor-set-ternary-description]] and the definition of the Cantor function. At least one of the two numerator differences $c(v_n)-c(x)$ and $c(x)-c(u_n)$ is at least $2^{-n-1}$. For that choice, the corresponding denominator is positive and at most $v_n-u_n=3^{-n}$, so one of the two secant slopes is at least $2^{-n-1}/3^{-n} = \tfrac12(3/2)^n$. These lower bounds are unbounded, so $c$ cannot have a finite derivative at $x$. [step 1.1, algebra]

2.2 The endpoint values $c(0)=0$ and $c(1)=1$ are part of [[thm-cantor-function-properties]], so the function still rises by one. [step 1.1]

3.1 Steps 1.1, 2.1, and 2.2 prove the example. [step 1.1, step 2.1, step 2.2] ∎
