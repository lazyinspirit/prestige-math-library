---
id: cor-x-sine-of-one-over-x-is-not-differentiable-at-zero
kind: corollary
title: "$x\\sin(1/x)$ extended by zero is continuous but not differentiable at zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-trigonometric-parity-and-pythagorean-identity,
       thm-squeeze-for-function-limits,
       thm-quarter-turn-values-and-shift-formulas,
       thm-sine-cosine-zero-sets-and-fundamental-period,
       cor-sequential-criterion-for-nonexistence,
       cor-archimedean-reciprocal, def-derivative,
       thm-sine-and-cosine-derivatives, cor-differentiable-implies-continuous,
       thm-algebra-of-continuous-functions,
       thm-composition-of-continuous-functions,
       def-pi-via-first-positive-cosine-zero,
       thm-cosine-has-a-smallest-positive-zero]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis, Example 8.9"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Define $f:\mathbb R\to\mathbb R$ by

$$f(0):=0,\qquad f(x):=x\sin(1/x)\quad(x\ne0).$$

Then $f$ is continuous on $\mathbb R$ but is not differentiable at $0$.

## Facts & Assumptions

**Given:** The function $f$ in the Statement.

[L1] For every real $u$, $|\sin u|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] If a function is squeezed near a point between two functions having the same limit there, then it has that limit ([[thm-squeeze-for-function-limits]]).

[L3] The quarter-turn values and period give $\sin(\pi/2+2m\pi)=1$ and $\sin(3\pi/2+2m\pi)=-1$ for every integer $m$ ([[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L4] For every real $\varepsilon>0$, there is a positive integer $N$ with $1/N<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L5] If two punctured-domain sequences approach a limit point while their images approach distinct real limits, then the function has no limit there ([[cor-sequential-criterion-for-nonexistence]]).

[L6] The derivative at zero, if it exists, is the limit of $(f(x)-f(0))/x$ as $x\to0$ through nonzero reals ([[def-derivative]]).

[L7] Sine is continuous; sums and products of continuous functions are continuous; quotients are continuous where their denominators do not vanish; and composites of continuous real functions are continuous ([[thm-sine-and-cosine-derivatives]], [[cor-differentiable-implies-continuous]], [[thm-algebra-of-continuous-functions]], [[thm-composition-of-continuous-functions]]).

[L8] The number $\pi=2\gamma$ is positive because the first positive cosine zero satisfies $\gamma\in(0,2)$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $-|x|\le f(x)\le|x|$ for $x\ne0$, so [L2] gives $f(x)\to0=f(0)$ at zero. Away from zero, the identity function has no zero in the denominator of the reciprocal, so the quotient, sine, composite, and product clauses of [L7] preserve continuity. Thus $f$ is continuous on $\mathbb R$. [L1, L2, L7, algebra]

1.2 For $x\ne0$, the difference quotient at zero is $(f(x)-f(0))/x=\sin(1/x)$. [L6, algebra]

1.3 For $k\in\mathbb N$, put $$x_k:=\frac1{\pi/2+2\pi(k+1)},\qquad y_k:=\frac1{3\pi/2+2\pi(k+1)}.$$ Positivity of $\pi$ and [L4] give nonzero positive terms and $x_k,y_k\to0$, while [L3] gives $\sin(1/x_k)=1$ and $\sin(1/y_k)=-1$. [L3, L4, L8, construct, algebra]

2.1 By [L5], step 1.3 shows that $\sin(1/x)$ has no limit at zero. [step 1.3, L5]

3.1 The quotient identity in step 1.2 and the nonexistence in step 2.1 show through [L6] that $f'(0)$ does not exist. [step 1.2, step 2.1, L6] ∎
