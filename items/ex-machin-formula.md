---
id: ex-machin-formula
kind: example
title: "Machin's formula $\\pi/4=4\\arctan(1/5)-\\arctan(1/239)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-inverse-tangent, lem-tangent-principal-branch-is-bijective, def-tangent-cotangent-secant-cosecant, thm-sine-and-cosine-derivatives, thm-addition-and-subtraction-formulas-for-tangent-cotangent-secant-and-cosecant, thm-cofunction-supplementary-and-reflection-identities, thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, §4.24(iii) Addition Formulas"
      url: "https://dlmf.nist.gov/4.24.iii"
pipeline_run: null
---

## Example

Machin's formula is

$$\frac\pi4=4\arctan\frac15-\arctan\frac1{239}.$$

## Facts & Assumptions

**Given:** No hypotheses beyond those quantified in the statement.

[L1] Principal arctangent takes values in $(-\pi/2,\pi/2)$, is the inverse of tangent there, and is strictly increasing ([[def-principal-inverse-tangent]], [[lem-tangent-principal-branch-is-bijective]]).

[L2] The tangent addition and subtraction formulas hold when their displayed denominators and domains are nonzero ([[thm-addition-and-subtraction-formulas-for-tangent-cotangent-secant-and-cosecant]]).

[L3] Tangent is the quotient of sine by cosine; $\sin0=0$ and $\cos0=1$; and the cofunction and Pythagorean identities give $\tan(\pi/4)=1$ ([[def-tangent-cotangent-secant-cosecant]], [[thm-sine-and-cosine-derivatives]], [[thm-cofunction-supplementary-and-reflection-identities]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]).

## Proof

**Proof technique:** direct.

1.1 Put $a:=\arctan(1/5)$ and $b:=\arctan(1/239)$. Then $\tan a=1/5$ and $\tan b=1/239$. Comparing with $\tan0=0$ and [L3] on the principal branch gives $0<a,b<\pi/4$. [L1, L3]

2.1 Since $0<a<\pi/4$, we have $0<2a<\pi/2$, so the tangent addition formula applies. It gives $$\tan(2a)=\frac5{12}<1=\tan(\pi/4).$$ Strict increase of tangent on the principal branch now gives $2a<\pi/4$, hence $0<4a<\pi/2$. [step 1.1, L1, L2, L3, algebra]

3.1 The addition formula, now applied to $2a+2a$, gives $$\tan(4a)=\frac{120}{119}>1.$$ All displayed denominators are positive. [step 2.1, L2, algebra]

4.1 A final use of [L2] gives $$\tan(4a-b)= \frac{120/119-1/239}{1+(120/119)(1/239)}=1.$$ The denominator is positive.  [step 1.1, step 3.1, L2, algebra]

4.2 By step 2.1, $4a$ lies in the principal tangent interval. Since $\tan(4a)>1=\tan(\pi/4)$, strict increase gives $4a>\pi/4>b$. Thus $0<4a-b<4a<\pi/2$. Consequently $4a-b$ and $\pi/4$ lie in the same injective branch of tangent. [step 1.1, step 2.1, step 3.1, L1, L3]

5.1 Steps 4.1 and 4.2 imply $4a-b=\pi/4$, which is the claimed formula. [step 4.1, step 4.2] ∎
