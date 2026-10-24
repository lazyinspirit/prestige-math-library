---
id: cex-complex-continuous-multiplicative-map-not-the-standard-exponential
kind: counterexample
title: "$f(x+iy)=e^x(\\cos 2y+i\\sin 2y)$ is continuous, satisfies $f(z+w)=f(z)f(w)$ and $f(1)=e$, but is not the standard complex exponential"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-complex-exponential-addition-and-real-extension, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-kernel-and-fibres-of-complex-exponential, def-complex-metric-convergence-and-continuity, thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-derivatives, thm-quarter-turn-values-and-shift-formulas, thm-exponential-is-strictly-increasing, thm-componentwise-limits-and-continuity]
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
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement refuted

Continuity, $f(z+w)=f(z)f(w)$, and $f(1)=e$ do not characterize the standard complex exponential. The conventions and prerequisite facts used below are recorded in [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-kernel-and-fibres-of-complex-exponential]], [[def-complex-metric-convergence-and-continuity]], [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-and-cosine-derivatives]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-exponential-is-strictly-increasing]], [[thm-componentwise-limits-and-continuity]].

## Facts & Assumptions

**Given:** $f(x+iy)=e^x(\cos2y+i\sin2y)$.

[L1] [[thm-sine-and-cosine-addition-formulas]] gives the sine and cosine formulas for every pair of real arguments.

[L2] [[thm-exponential-is-strictly-increasing]] states that $x\mapsto e^x$ is continuous, and [[thm-sine-and-cosine-derivatives]] makes sine and cosine continuous.

[L3] [[thm-componentwise-limits-and-continuity]] makes a complex-valued map continuous when its real and imaginary parts are continuous.

[L4] [[thm-complex-exponential-addition-and-real-extension]] restricts to the real exponential law $e^{x+s}=e^xe^s$.

[L5] [[thm-quarter-turn-values-and-shift-formulas]] gives $\sin(2\pi)=0$ and $\cos(2\pi)=1$.

[L6] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] gives $e^{i\pi}+1=0$.

## Counterexample

1.1 For $z=x+iy$ and $w=s+it$, [L4] and [L1] give $f(z+w)=e^{x+s}\bigl(\cos(2y+2t)+i\sin(2y+2t)\bigr)=f(z)f(w)$, and $f(1)=e$. [L1, L4, algebra]

1.2 The coordinate maps $(x,y)\mapsto x$ and $(x,y)\mapsto2y$ are continuous by the Euclidean norm estimate. Composition with the continuous real functions in [L2] is continuous, and the identity $uv-u_0v_0=u(v-v_0)+v_0(u-u_0)$ proves continuity of their products. Thus [L3] makes $f$ continuous. [L2, L3]

2.1 By [L5], $f(i\pi)=1$, while [L6] gives $\exp(i\pi)=-1$. Thus $f$ is not the standard exponential. [L5, L6] ∎
