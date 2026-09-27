---
id: thm-sine-and-cosine-parametrize-the-unit-circle
kind: theorem
title: "$t\\mapsto(\\cos t,\\sin t)$ is a bijection from $[0,2\\pi)$ onto the real unit circle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-cosine-zero-sets-and-fundamental-period, thm-sine-and-cosine-subtraction-formulas, thm-quarter-turn-values-and-shift-formulas, thm-sine-and-cosine-derivatives, thm-intermediate-value, def-pi-via-first-positive-cosine-zero]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (thm-sine-and-cosine-parametrize-the-unit-circle). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
pipeline_run: null
---

## Statement

The map $t\mapsto(\cos t,\sin t)$ is a bijection from $[0,2\pi)$ onto $S^1=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}$. The conventions and prerequisite facts used below are recorded in [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[def-pi-via-first-positive-cosine-zero]].

## Facts & Assumptions

**Given:** A point $(x,y)$ on $S^1$ or parameters $s,t\in[0,2\pi)$.

[L1] Cosine is strictly decreasing on $[0,\pi]$, has global range $[-1,1]$, and sine is nonnegative on $[0,\pi]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L2] The Pythagorean identity and parity hold ([[cor-trigonometric-parity-and-pythagorean-identity]]); sine and cosine have period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L3] The subtraction formulas express sine and cosine of $s-t$ in terms of the two image pairs ([[thm-sine-and-cosine-subtraction-formulas]]).

[L4] Shifting by $\pi$ negates cosine ([[thm-quarter-turn-values-and-shift-formulas]]).

[L5] Sine and cosine are differentiable, hence continuous, and a continuous function on $[0,\pi]$ takes every value between its endpoint values ([[thm-sine-and-cosine-derivatives]], [[thm-intermediate-value]]).

## Proof

**Proof technique:** direct.

1.1 The Pythagorean identity puts every image point on $S^1$. [L2]

1.2 Given $(x,y)\in S^1$, cosine is continuous on $[0,\pi]$ with endpoint values $1,-1$; the intermediate value theorem and strict decrease give a unique $u\in[0,\pi]$ with $\cos u=x$. Since $\sin u\ge0$ and $\sin^2u=1-x^2=y^2$, one has $\sin u=|y|$. If $y\ge0$ take $t=u$; if $y<0$, take $t=2\pi-u\in(\pi,2\pi)$, for which periodicity and parity give $(\cos t,\sin t)=(x,y)$. [L1, L2, L4, L5, given]

2.1 If $(\cos s,\sin s)=(\cos t,\sin t)$, the subtraction formulas and the Pythagorean identity give $\sin(s-t)=0$ and $\cos(s-t)=1$. The zero-set theorem makes $s-t=m\pi$ for some integer $m$; iterating the $\pi$-shift gives $\cos(m\pi)=(-1)^m$, so $m$ is even. Thus $s-t$ is a multiple of $2\pi$. Since $s,t\in[0,2\pi)$, $|s-t|<2\pi$, hence $s=t$. [L2, L3, L4, given] ∎
