---
id: ex-positive-non-log-convex-solution-of-gamma-functional-equation
kind: example
title: 'A positive non-log-convex solution of the Gamma functional equation'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-real-gamma-functional-equation, def-log-convex-positive-function, thm-natural-logarithm-laws, thm-sine-cosine-zero-sets-and-fundamental-period, thm-quarter-turn-values-and-shift-formulas, thm-exponential-addition-formula, thm-exponential-is-strictly-increasing]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 7 §4"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Example

Put $D:=\tfrac12(\log\Gamma(1)+\log\Gamma(3/2))-\log\Gamma(5/4)$, let $A:=1+|D|$, and define $F(s):=\Gamma(s)e^{A\sin(2\pi s)}$ for $s>0$. The function $F(s)=\Gamma(s)e^{A\sin(2\pi s)}$ is positive, satisfies $F(1)=1$ and $F(s+1)=sF(s)$, differs from Gamma, and is not log-convex.

## Facts & Assumptions

**Given:** The constants $D,A$ and the function $F$ in the Example.

[F1] For every $s>0$, $\Gamma(s+1)=s\Gamma(s)$, and $\Gamma(1)=1$ ([[thm-real-gamma-functional-equation]]).

[F2] Sine has period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[F3] A positive function is log-convex when its logarithm is convex ([[def-log-convex-positive-function]]).

## Verification

**Proof technique:** direct.

1.1 By [F2], $e^{A\sin(2\pi(s+1))}=e^{A\sin(2\pi s)}$. Together with [F1], this gives $F(s+1)=sF(s)$ and $F(1)=1$; positivity is immediate. [F1, F2, algebra]

1.2 At $s=1,5/4,3/2$, the sine terms are respectively $0,1,0$. Hence the midpoint value of $\log F$ exceeds the average of its endpoint values exactly when $A>D$, which holds because $A=1+|D|$. By [F3], $F$ is not log-convex. [F3, algebra]

2.1 Since $A>0$, $F(5/4)=e^A\Gamma(5/4)\ne\Gamma(5/4)$. Thus $F$ is a different positive normalized solution of the recurrence. [step 1.1, step 1.2, algebra] ∎
