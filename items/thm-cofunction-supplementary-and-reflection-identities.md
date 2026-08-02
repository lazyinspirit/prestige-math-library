---
id: thm-cofunction-supplementary-and-reflection-identities
kind: theorem
title: "Cofunction, supplementary, quarter-turn, and reflection identities for the six trigonometric functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions, thm-quarter-turn-values-and-shift-formulas, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-zero-sets-and-fundamental-period, def-tangent-cotangent-secant-cosecant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
pipeline_run: null
---

## Statement

For every real $x$,
$$\sin(\pi/2-x)=\cos x,\quad \cos(\pi/2-x)=\sin x,\quad \sin(\pi-x)=\sin x,\quad \cos(\pi-x)=-\cos x,$$
and the quarter-turn and reflection formulas are
$$\sin(x+\pi/2)=\cos x,\quad \cos(x+\pi/2)=-\sin x,\quad \sin(-x)=-\sin x,\quad \cos(-x)=\cos x.$$
On the common natural domains of the two sides,
$$\tan(\pi/2-x)=\cot x,\quad \cot(\pi/2-x)=\tan x,\quad \sec(\pi/2-x)=\csc x,\quad \csc(\pi/2-x)=\sec x,$$
and
$$\tan(\pi-x)=-\tan x,\quad \cot(\pi-x)=-\cot x,\quad \sec(\pi-x)=-\sec x,\quad \csc(\pi-x)=\csc x.$$
The conventions and prerequisite facts used below are recorded in [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[def-tangent-cotangent-secant-cosecant]].

## Facts & Assumptions

**Given:** A real $x$.

[L1] [[thm-quarter-turn-values-and-shift-formulas]] states that, for every real $x$, $\sin(x+\pi/2)=\cos x$ and $\cos(x+\pi/2)=-\sin x$.

[L2] [[thm-sine-and-cosine-addition-formulas]] states that, for all real $a,b$, $\sin(a+b)=\sin a\cos b+\cos a\sin b$ and $\cos(a+b)=\cos a\cos b-\sin a\sin b$.

[L3] [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]] gives $\sin(-x)=-\sin x$ and $\cos(-x)=\cos x$.

[L4] [[def-tangent-cotangent-secant-cosecant]] defines $\tan t=\sin t/\cos t$, $\cot t=\cos t/\sin t$, $\sec t=1/\cos t$, and $\csc t=1/\sin t$ on their natural domains.

## Proof

**Proof technique:** direct.

1.1 By [L1] with $x$ replaced by $-x$, and then [L3], $\sin(\pi/2-x)=\cos x$ and $\cos(\pi/2-x)=\sin x$; [L1] also gives the displayed quarter-turn formulas. [L1, L3]

1.2 Apply [L2] to $\pi+(-x)$ and use the values at $\pi$ supplied by [L1] (put $x=\pi/2$) together with [L3]. This gives $\sin(\pi-x)=\sin x$ and $\cos(\pi-x)=-\cos x$. [L1, L2, L3]

2.1 Substitute the cofunction and supplementary sine--cosine equalities into [L4]. The stated nonvanishing conditions are exactly those that make both quotient or reciprocal expressions defined, so this yields all eight displayed identities. [L4, step 1.1, step 1.2] ∎
