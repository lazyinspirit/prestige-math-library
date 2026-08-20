---
id: fs-invertible-derivative-at-a-point-gives-a-local-inverse
kind: false-statement
title: "FALSE: an invertible derivative at one point gives a local inverse"
status: draft
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
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Exercise 8.5.7"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

**False claim:** if a real function is differentiable at $a$ and $f'(a)\ne0$, then it has a local inverse at $a$ in the sense of [[def-c-one-map-and-local-inverse]].

## Facts & Assumptions

**Given:** Define $f(0)=0$ and $f(x)=x+2x^2\sin(1/x)$ for $x\ne0$. We use derivative algebra, the chain and power rules ([[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[lem-derivative-of-a-power]]), boundedness of sine [[thm-sine-cosine-signs-monotonicity-and-ranges]], and differentiability implying continuity [[cor-differentiable-implies-continuous]].

[L1] A real function is differentiable at $c$ when its relative difference quotient has a finite limit ([[def-derivative]]).

[L2] The derivatives of sine and cosine satisfy $(\sin x)'=\cos x$ and $(\cos x)'=-\sin x$ ([[thm-sine-and-cosine-derivatives]]).

[L3] Both sine and cosine have period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L4] The quarter-turn values include $\sin(\pi/2)=1$, $\cos(\pi/2)=0$, $\sin\pi=0$, and $\cos\pi=-1$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[L5] A continuous injective real function on an interval is strictly monotone ([[thm-continuous-inverse]]).

## Refutation

**Proof technique:** contradiction.

1.1 By [L1], $(f(h)-f(0))/h=1+2h\sin(1/h)\to1$, so $f'(0)=1$. For $x\ne0$, the algebra, chain, and power rules with [L2] give $$f'(x)=1+4x\sin(1/x)-2\cos(1/x).$$ [L1, L2, given, algebra]

2.1 Put $x_n=1/(2\pi n)$ and $y_n=1/((2n+1)\pi)$ for $n\ge1$. By [L3] and [L4], step 1.1 gives $f'(x_n)=-1$ and $f'(y_n)=3$. Both sequences tend to zero, so derivatives of both signs occur in every neighbourhood of zero. [step 1.1, L3, L4, algebra]

3.1 Suppose $f$ were injective on an interval about zero. It is continuous there, so [L5] would make it strictly increasing or strictly decreasing. Difference quotients show that the derivative of an increasing differentiable function is nonnegative and that of a decreasing one is nonpositive, contradicting step 2.1. Thus $f'(0)=1$ is invertible but no local inverse exists. [step 2.1, L1, L5, given, assume-contra, discharge-contradiction] ∎
