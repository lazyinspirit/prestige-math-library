---
id: cex-invertible-derivative-without-c-one-local-inverse
kind: counterexample
title: "An invertible derivative at one point does not give a local inverse without $C^1$ regularity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-c-one-map-and-local-inverse, def-derivative, thm-algebra-of-derivatives, thm-chain-rule, lem-derivative-of-a-power, thm-sine-and-cosine-derivatives, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-cosine-zero-sets-and-fundamental-period, thm-quarter-turn-values-and-shift-formulas, cor-differentiable-implies-continuous, thm-continuous-inverse]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Exercise 4.4.6"
      url: "https://www.jirka.org/ra/html/sec_ift.html"
    - title: "J. Lebl, Basic Analysis II, Exercise 8.5.7"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
pipeline_run: null
---

## Example

Define

$$f(x):=\begin{cases}x+2x^2\sin(1/x),&x\ne0,\\0,&x=0.\end{cases}$$

Then $f$ is differentiable at $0$ with $f'(0)=1$, but it is injective on no
neighbourhood of $0$.  Its derivative is not continuous at $0$, so this does
not contradict the $C^1$ inverse function theorem.

## Facts & Assumptions

**Given:** No hypotheses beyond those quantified in the statement.

[L1] Derivatives obey the algebra and chain rules; the power rule gives the derivatives of $x$, $x^2$, and $x^{-1}$ on its nonzero domain; and $(\sin x)'=\cos x$ ([[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[lem-derivative-of-a-power]], [[thm-sine-and-cosine-derivatives]]).

[L2] Sine and cosine have the integer-multiple values determined by their zero sets, periods, and quarter-turn values ([[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-quarter-turn-values-and-shift-formulas]]).

[L3] Differentiability implies continuity, and a continuous injective real function on an interval is strictly monotone ([[cor-differentiable-implies-continuous]], [[thm-continuous-inverse]]).

[L4] Sine is bounded by $1$ in absolute value ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[L5] A derivative is the limit of the relative difference quotient ([[def-derivative]]).

## Proof

**Proof technique:** contradiction.

1.1 At zero, $$\frac{f(h)-f(0)}h=1+2h\sin(1/h)\longrightarrow1,$$ because sine is bounded.  Thus $f'(0)=1$.  For $x\ne0$, [L1] gives $$f'(x)=1+4x\sin(1/x)-2\cos(1/x).$$ [L1, L4, L5, algebra]

2.1 For $n\ge1$, put $x_n:=1/(2\pi n)$ and $y_n:=1/((2n+1)\pi)$. Both sequences tend to zero; [L2] gives $\sin(1/x_n)=\sin(1/y_n)=0$, $\cos(1/x_n)=1$, and $\cos(1/y_n)=-1$. Thus step 1.1 gives $f'(x_n)=-1$ and $f'(y_n)=3$, so $f'$ is not continuous at zero. [step 1.1, L2]

3.1 Suppose $f$ were injective on an open interval about zero. It is continuous there because it is differentiable, so [L3] would make it strictly increasing or strictly decreasing. At every differentiability point an increasing function has nonnegative derivative, while a decreasing function has nonpositive derivative, directly from the signs of its difference quotients. Step 2.1 supplies both a negative and a positive derivative in every such interval, a contradiction. [assume-contra, step 2.1, L3, L5]

4.1 Thus no neighbourhood gives injectivity; step 2.1 also identifies the failure of the $C^1$ hypothesis.  [step 2.1, step 3.1, L4, discharge-contradiction] ∎
