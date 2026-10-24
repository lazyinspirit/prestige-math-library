---
id: ex-trigonometric-identities-worked-at-pi-over-twelve
kind: example
title: "Addition and half-angle identities compute the sine, cosine, and tangent of $\\pi/12$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-sine-and-cosine-subtraction-formulas, thm-half-angle-identities-with-sign-conditions, thm-double-angle-and-power-reduction-identities, thm-cofunction-supplementary-and-reflection-identities, thm-quarter-turn-values-and-shift-formulas, cor-pi-is-the-first-positive-sine-zero, def-tangent-cotangent-secant-cosecant]
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

## Example

Using $\pi/12=\pi/3-\pi/4$,
$$\sin(\pi/12)=\frac{\sqrt6-\sqrt2}{4},\quad \cos(\pi/12)=\frac{\sqrt6+\sqrt2}{4},\quad \tan(\pi/12)=2-\sqrt3.$$

## Facts & Assumptions

**Given:** The positive number $\pi$ and the angles $\pi/4,\pi/3\in(0,\pi)$.

[L1] [[thm-quarter-turn-values-and-shift-formulas]] gives $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$.

[L2] [[thm-half-angle-identities-with-sign-conditions]] gives $\cos(x/2)=\varepsilon_c\sqrt{(1+\cos x)/2}$ and $\sin(x/2)=\varepsilon_s\sqrt{(1-\cos x)/2}$, with the signs of the corresponding half-angle functions.

[L3] [[thm-cofunction-supplementary-and-reflection-identities]] gives $\cos(\pi/2-x)=\sin x$ and $\cos(\pi-x)=-\cos x$.

[L4] [[thm-double-angle-and-power-reduction-identities]] gives $\cos(2x)=2\cos^2x-1$.

[L5] [[cor-pi-is-the-first-positive-sine-zero]] gives $\sin x>0$ whenever $0<x<\pi$.

[L6] [[thm-sine-and-cosine-subtraction-formulas]] gives $\sin(u-v)=\sin u\cos v-\cos u\sin v$ and $\cos(u-v)=\cos u\cos v+\sin u\sin v$.

[L7] [[def-tangent-cotangent-secant-cosecant]] defines $\tan x=\sin x/\cos x$ when $\cos x\ne0$.

## Verification

1.1 By [L5], $\sin(\pi/4)>0$, and [L3] gives $\cos(\pi/4)=\sin(\pi/4)>0$. Applying [L2] to $x=\pi/2$ and using [L1] therefore gives $\sin(\pi/4)=\cos(\pi/4)=\sqrt2/2$. [L1, L2, L3, L5, algebra]

1.2 Put $c=\cos(\pi/3)$. Then $c>0$ because [L3] writes it as $\sin(\pi/6)$ and [L5] makes that value positive. Also [L3] and [L4] give $-c=\cos(2\pi/3)=2c^2-1$, hence $(2c-1)(c+1)=0$; positivity rules out $c=-1$, so $\cos(\pi/3)=1/2$. [L3, L4, L5, algebra]

2.1 From [L3] and step 1.2, $\cos(2\pi/3)=-1/2$. Since $\sin(\pi/3)>0$ by [L5], [L2] applied to $x=2\pi/3$ gives $\sin(\pi/3)=\sqrt{(1+1/2)/2}=\sqrt3/2$. [L2, L3, L5, step 1.2, algebra]

3.1 Substitute steps 1.1, 1.2, and 2.1 into [L6] with $u=\pi/3$ and $v=\pi/4$. This gives $\sin(\pi/12)=(\sqrt6-\sqrt2)/4$ and $\cos(\pi/12)=(\sqrt6+\sqrt2)/4>0$. [L6, step 1.1, step 1.2, step 2.1, algebra]

4.1 By [L7] and step 3.1, $\tan(\pi/12)=(\sqrt6-\sqrt2)/(\sqrt6+\sqrt2)$; rationalizing gives $(8-4\sqrt3)/4=2-\sqrt3$. [L7, step 3.1, algebra] ∎
