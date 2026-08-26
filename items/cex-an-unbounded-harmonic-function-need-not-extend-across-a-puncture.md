---
id: cex-an-unbounded-harmonic-function-need-not-extend-across-a-puncture
kind: counterexample
title: "Re(1/z) is harmonic on a punctured disc and does not extend harmonically across 0"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-polynomials-and-rational-functions-are-holomorphic, thm-c2-holomorphic-components-are-harmonic, thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every harmonic function on a punctured disc extends
harmonically across the puncture.

The witness is

$$u(z)=\operatorname{Re}(1/z).$$

It is harmonic on $0<|z|<1$, but it is unbounded near $0$ and therefore does not
extend harmonically there.

## Facts & Assumptions

**Given:** The function $f(z)=1/z$ on $0<|z|<1$ and its real part $u(z)=\operatorname{Re}(f(z))$.

[L1] Rational functions are holomorphic wherever their denominator is nonzero ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[L2] The real part of a holomorphic $C^2$ function is harmonic ([[thm-c2-holomorphic-components-are-harmonic]]).

[L3] A bounded harmonic function near an isolated puncture does extend harmonically ([[thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the function $1/z$ is holomorphic on $0<|z|<1$, so [L2] makes $u(z)=\operatorname{Re}(1/z)$ harmonic there. [L1, L2]

1.2 On the positive real axis, $u(t)=1/t\to+\infty$ as $t\downarrow0$, so $u$ is unbounded near $0$. If $u$ had a harmonic extension across $0$, it would be bounded on some small closed disc around $0$, contradicting [L3]. [L3, algebra]

2.1 Therefore $u$ is harmonic on the punctured disc but does not extend harmonically across the puncture. [step 1.1, step 1.2] ∎
