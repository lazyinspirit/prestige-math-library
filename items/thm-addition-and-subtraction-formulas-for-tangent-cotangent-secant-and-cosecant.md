---
id: thm-addition-and-subtraction-formulas-for-tangent-cotangent-secant-and-cosecant
kind: theorem
title: "Addition and subtraction formulas for tangent, cotangent, secant, and cosecant on their exact domains"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-tangent-cotangent-secant-cosecant, thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-subtraction-formulas]
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

If $\cos u\cos v\cos(u+v)\ne0$, then
$$\tan(u+v)=\frac{\tan u+\tan v}{1-\tan u\tan v},\qquad \sec(u+v)=\frac{\sec u\sec v}{1-\tan u\tan v};$$
if $\cos u\cos v\cos(u-v)\ne0$, then
$$\tan(u-v)=\frac{\tan u-\tan v}{1+\tan u\tan v},\qquad \sec(u-v)=\frac{\sec u\sec v}{1+\tan u\tan v}.$$
If $\sin u\sin v\sin(u+v)\ne0$, then
$$\cot(u+v)=\frac{\cot u\cot v-1}{\cot u+\cot v},\qquad \csc(u+v)=\frac{\csc u\csc v}{\cot u+\cot v};$$
if $\sin u\sin v\sin(u-v)\ne0$, then
$$\cot(u-v)=\frac{\cot u\cot v+1}{\cot v-\cot u},\qquad \csc(u-v)=\frac{\csc u\csc v}{\cot v-\cot u}.$$
The conventions and prerequisite facts used below are recorded in [[def-tangent-cotangent-secant-cosecant]], [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-and-cosine-subtraction-formulas]].

## Facts & Assumptions

**Given:** Reals $u,v$ satisfying the relevant displayed nonvanishing hypothesis.

[L1] [[def-tangent-cotangent-secant-cosecant]] defines $\tan t=\sin t/\cos t$, $\cot t=\cos t/\sin t$, $\sec t=1/\cos t$, and $\csc t=1/\sin t$ on their natural domains.

[L2] [[thm-sine-and-cosine-addition-formulas]] gives the sine and cosine formulas for $u+v$.

[L3] [[thm-sine-and-cosine-subtraction-formulas]] gives $\sin(u-v)=\sin u\cos v-\cos u\sin v$ and $\cos(u-v)=\cos u\cos v+\sin u\sin v$.

## Proof

**Proof technique:** direct.

1.1 Under the cosine nonvanishing hypothesis, divide the two formulas in [L2] by $\cos u\cos v$. Their quotient gives the tangent addition formula, and their cosine formula gives $\cos(u+v)=\cos u\cos v(1-\tan u\tan v)$. Taking reciprocals by [L1] gives the secant addition formula. [L1, L2]

1.2 Under the sine nonvanishing hypothesis, divide the formulas in [L2] by $\sin u\sin v$. Their quotient gives the cotangent addition formula, and their sine formula gives $\sin(u+v)=\sin u\sin v(\cot u+\cot v)$. Taking reciprocals by [L1] gives the cosecant addition formula. [L1, L2]

2.1 The two formulas in [L3], divided by the same nonzero products as in steps 1.1 and 1.2, give respectively the tangent--secant and cotangent--cosecant subtraction formulas. Every denominator used is nonzero by the hypothesis displayed next to that formula. [L1, L3] ∎
