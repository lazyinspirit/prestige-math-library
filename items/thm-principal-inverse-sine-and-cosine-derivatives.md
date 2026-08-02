---
id: thm-principal-inverse-sine-and-cosine-derivatives
kind: theorem
title: 'For $-1<y<1$, $(\arcsin y)^{\prime}=1/\sqrt{1-y^2}$ and $(\arccos y)^{\prime}=-1/\sqrt{1-y^2}$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-inverse-sine-and-cosine, thm-derivative-of-an-inverse, thm-sine-and-cosine-derivatives, cor-differentiable-implies-continuous, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-quarter-turn-values-and-shift-formulas, thm-of-square-roots]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Inverse Trigonometric Functions"
      url: "https://dlmf.nist.gov/4.23"
pipeline_run: null
---

## Statement

For $-1<y<1$,

$$(\arcsin y)'=\frac{1}{\sqrt{1-y^2}},\qquad(\arccos y)'=-\frac{1}{\sqrt{1-y^2}}.$$

## Facts & Assumptions

**Given:** A real number $y$ with $-1<y<1$.

[L1] Principal inverse sine and cosine are the inverses of the indicated restricted functions
([[def-principal-inverse-sine-and-cosine]]).

[L2] Sine and cosine are differentiable, hence continuous, with derivatives
$\cos$ and $-\sin$ ([[thm-sine-and-cosine-derivatives]],
[[cor-differentiable-implies-continuous]]).

[L3] Sine is strictly increasing on $[-\pi/2,\pi/2]$ and strictly decreasing
on $[\pi/2,3\pi/2]$, while cosine is strictly decreasing on $[0,\pi]$;
the special values are $\sin0=\sin\pi=0$ and $\cos(\pi/2)=0$, and cosine is
even ([[thm-sine-cosine-signs-monotonicity-and-ranges]],
[[thm-quarter-turn-values-and-shift-formulas]],
[[cor-trigonometric-parity-and-pythagorean-identity]]).

[L4] $\sin^2t+\cos^2t=1$ for every $t$
([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L5] Every nonnegative real has a unique nonnegative square root
([[thm-of-square-roots]]).

[L6] The inverse of a continuous injective function on a nondegenerate interval has derivative
the reciprocal of the original derivative wherever that derivative is nonzero
([[thm-derivative-of-an-inverse]]).

## Proof

**Proof technique:** direct.

1.1 Put $a:=\arcsin y$ and $b:=\arccos y$. Then $\sin a=y$, $\cos b=y$, and $a,b$ lie in the interiors of their respective principal intervals. [L1, given]

2.1 The interval placement of step 1.1, the monotonicity and special values in [L3], and evenness of cosine give $\cos a>0$ and $\sin b>0$. The Pythagorean identity then gives $\cos a=\sqrt{1-y^2}$ and $\sin b=\sqrt{1-y^2}$. [step 1.1, L3, L4, L5]

3.1 Apply [L6] to sine on $[-\pi/2,\pi/2]$ at $a$: [L1] supplies injectivity and [L2] supplies continuity. Since its derivative there is $\cos a\ne0$, the inverse is differentiable at $y$ with $(\arcsin y)'=1/\cos a=1/\sqrt{1-y^2}$. [step 1.1, step 2.1, L1, L2, L6]

3.2 Apply [L6] to cosine on $[0,\pi]$ at $b$: [L1] supplies injectivity and [L2] supplies continuity. Its derivative is $-\sin b\ne0$, so $(\arccos y)'=-1/\sin b=-1/\sqrt{1-y^2}$. [step 1.1, step 2.1, L1, L2, L6]

4.1 Steps 3.1 and 3.2 prove the two derivative formulas. [step 3.1, step 3.2] ∎
