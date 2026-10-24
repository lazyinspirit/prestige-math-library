---
id: ex-geometric-function-taylor-remainder
kind: example
title: "The Taylor polynomial of $(1-x)^{-1}$ at $0$ has the exact geometric remainder $x^{n+1}/(1-x)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-taylor-polynomial-and-remainder, cor-taylor-remainder-bound, lem-finite-sum-laws, thm-algebra-of-derivatives, thm-chain-rule, lem-derivative-of-a-power, def-factorial-and-falling-factorial, def-canonical-natural, lem-of-naturals-positive, thm-induction-principle]
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
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
pipeline_run: null
---

## Example

For $f(x)=1/(1-x)$ and $n\in\mathbb N$,
$$T_{n,0}f(x)=\sum_{j=0}^{n}x^j,\qquad R_{n,0}f(x)=\frac{x^{n+1}}{1-x}$$
whenever $x\ne1$.

## Facts & Assumptions

**Given:** The geometric function.

[L1] Finite geometric sums follow from [[lem-finite-sum-laws]]. Derivative algebra, the chain rule, and the natural-power derivative give the successive derivatives of $(1-x)^{-1}$; factorial arithmetic is preserved by the canonical embedding ([[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[lem-derivative-of-a-power]], [[def-factorial-and-falling-factorial]], [[def-canonical-natural]], [[lem-of-naturals-positive]]), and induction is [[thm-induction-principle]].

[L2] The Taylor objects and bound are [[def-taylor-polynomial-and-remainder]] and [[cor-taylor-remainder-bound]].

## Verification

**Proof technique:** direct.

1.1 Induction gives $f^{(j)}(x)=\iota(j!)(1-x)^{-j-1}$, hence $f^{(j)}(0)/\iota(j!)=1$.  [L1]

2.1 Multiplying $\sum_{j=0}^{n}x^j$ by $1-x$ telescopes to $1-x^{n+1}$. Subtracting from $1/(1-x)$ gives the stated remainder.  [step 1.1, L1, algebra]

3.1 This exact expression agrees with the qualitative estimate supplied by [L2] on every closed interval avoiding $1$.  [step 2.1, L2] ∎
