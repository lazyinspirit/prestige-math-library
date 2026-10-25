---
id: thm-half-angle-identities-with-sign-conditions
kind: theorem
title: "Half-angle identities with the sign determined by the quadrant"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-double-angle-and-power-reduction-identities, thm-of-square-roots, thm-sine-cosine-signs-monotonicity-and-ranges, def-tangent-cotangent-secant-cosecant]
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
$$\cos(x/2)=\varepsilon_c\sqrt{(1+\cos x)/2},\qquad \sin(x/2)=\varepsilon_s\sqrt{(1-\cos x)/2},$$
where $\varepsilon_c,\varepsilon_s\in\{-1,0,1\}$ are respectively the signs of $\cos(x/2)$ and $\sin(x/2)$ (so $\operatorname{sgn}(0)=0$). Thus the positive square root is valid only where the relevant half-angle function is nonnegative. The conventions and prerequisite facts used below are recorded in [[thm-double-angle-and-power-reduction-identities]], [[thm-of-square-roots]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[def-tangent-cotangent-secant-cosecant]].

## Facts & Assumptions

**Given:** A real $x$.

[L1] [[thm-double-angle-and-power-reduction-identities]] gives $\cos^2t=(1+\cos2t)/2$ and $\sin^2t=(1-\cos2t)/2$ for every real $t$.

[L2] [[thm-of-square-roots]] says that every nonnegative real has a unique nonnegative square root.

## Proof

**Proof technique:** direct.

1.1 Apply [L1] with $t=x/2$. Then $\cos^2(x/2)=(1+\cos x)/2$ and $\sin^2(x/2)=(1-\cos x)/2$, so both radicands are nonnegative. [L1]

2.1 By [L2], $|\cos(x/2)|=\sqrt{(1+\cos x)/2}$ and $|\sin(x/2)|=\sqrt{(1-\cos x)/2}$. [L2, step 1.1]

3.1 Multiplying each equality of step 2.1 by its sign, with sign $0$ when the corresponding value is $0$, yields the displayed identities. The sign ranges are therefore exactly $\{-1,0,1\}$. [step 2.1] ∎
