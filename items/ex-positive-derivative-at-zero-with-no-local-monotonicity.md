---
id: ex-positive-derivative-at-zero-with-no-local-monotonicity
kind: example
title: "A function with positive derivative at $0$ that is monotone on no neighbourhood of $0$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [ex-piecewise-polynomial-periodic-oscillator, thm-algebra-of-derivatives, thm-chain-rule, def-derivative, def-monotone-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
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

## Example

There is a differentiable function $F$ with $F'(0)>0$ that is not monotone on any neighbourhood of $0$.

## Facts & Assumptions

**Given:** A bounded periodic differentiable function $\psi$ whose derivative takes values above $2$ and below $-2$, obtained by scaling [[ex-piecewise-polynomial-periodic-oscillator]], and $F(0)=0$, $F(x)=x+x^2\psi(1/x)$ for $x\ne0$.

[L1] Derivative algebra and the chain rule are [[thm-algebra-of-derivatives]] and [[thm-chain-rule]].

[L2] If a differentiable function is nondecreasing, every nonzero difference quotient has the corresponding weak sign and its derivative is nonnegative; for a nonincreasing function the derivative is nonpositive ([[def-derivative]], [[def-monotone-function]]).

## Verification

**Proof technique:** contradiction.

1.1 Boundedness of $\psi$ gives $F'(0)=\lim_{x\to0}(1+x\psi(1/x))=1>0$.   [given]

1.2 For $x\ne0$, $F'(x)=1+2x\psi(1/x)-\psi'(1/x)$. Along reciprocal sequences at which $\psi'>2$ the derivative is eventually negative, while along reciprocal sequences at which $\psi'<-2$ it is eventually positive.  [L1, given]

2.1 If $F$ were monotone on some neighbourhood, [L2] would force one weak derivative sign throughout it, contradicting step 1.2.  [assume-contra, step 1.2, L2, discharge-contradiction] ∎
