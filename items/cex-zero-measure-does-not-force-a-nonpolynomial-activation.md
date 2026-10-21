---
id: cex-zero-measure-does-not-force-a-nonpolynomial-activation
kind: counterexample
title: "The zero-measure Lp boundary"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-calligraphic-l-p-on-a-measure-space
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-measure
  - def-single-hidden-layer-network
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, Theorem 1 and Lp discussion"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
---

## Statement refuted

For every finite compactly supported measure $\mu$ and every $1<p<\infty$, a single-hidden-layer network family is dense in $L^p(\mu)$ only if its activation is not polynomial almost everywhere.

## Statement references

[Leshno et al., Theorem 1 and $L^p$ discussion](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

## Facts & Assumptions

**Given:** The zero measure $\mu=0$, an exponent $1<p<\infty$, and the constant activation $\sigma(t)=1$.

[F1] $L^p(\mu)$ is the space of finite-$p$-integral functions modulo equality almost everywhere ([[def-calligraphic-l-p-on-a-measure-space]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F2] The single-hidden-layer family includes the zero function by taking width zero and output bias zero ([[def-single-hidden-layer-network]]).

[F3] A measure is a nonnegative countably additive set function on its sigma-algebra; the zero measure assigns zero to every measurable set ([[def-measure]]).

## Counterexample

1.1 The constant activation $\sigma(t)=1$ is a polynomial, and the zero measure is finite, compactly supported, and absolutely continuous with respect to Lebesgue measure by [F3]. [given, F3, algebra]

1.2 Since every measurable function has $L^p(0)$ seminorm zero, the quotient space $L^p(0)$ contains only its zero class by [F1]. [given, F1]

2.1 The network family contains the zero function by [F2], whose class is the only element of $L^p(0)$. Thus it is dense despite the polynomial activation, refuting the unrestricted “only if” claim. [step 1.1, step 1.2, F2] ∎
