---
dependency_level: 10
id: thm-yang-t-aspect-subconvexity-glnplus1-gln
kind: theorem
title: "Yang t-Aspect Subconvexity for GL(n+1) × GL(n)"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - thm-yang-2026-amplified-spectral-lower-bound
  - thm-yang-2026-amplified-geometric-side-bound
  - thm-yang-relative-trace-formula-glnplus1-gln
  - thm-global-rankin-selberg-continuation-for-arbitrary-rank-pairs
  - thm-yang-gl2-gl1-burgess-t-aspect-subconvexity
  - def-pure-isobaric-automorphic-sum
  - def-unitary-cuspidal-generic-gln-representation
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-adjoint-l-function-for-gln
  - def-unramified-satake-parameter-for-gln
  - lem-yang-unramified-amplifier-coefficient-lower-bound
  - thm-prime-number-theorem-logarithmic-integral
  - def-countable-choice
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), Theorem A and Theorem B"
      url: "https://arxiv.org/pdf/2309.07534v2"
    - title: "Liyang Yang, The Burgess Bound for GL(2) × GL(1) over Number Fields, Theorem A and proof"
      url: "https://arxiv.org/pdf/2305.10719v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Assume countable choice. Let $n\geq1$, let $\Pi$ be a unitary pure isobaric automorphic representation of $\mathrm{GL}_{n+1}(\mathbb A_\mathbb Q)$, and let $\pi'$ be a unitary cuspidal automorphic representation of $\mathrm{GL}_n(\mathbb A_\mathbb Q)$. Let $L(s,\Pi\times\pi')$ be the finite Rankin–Selberg $L$-function with the standard local-factor convention. For every $\varepsilon>0$ and every $t\in\mathbb R$,

$$L(1/2+it,\Pi\times\pi')\ll_{\Pi,\pi',\varepsilon}(1+|t|)^{\frac{n(n+1)}4-\frac1{4(3n^2+n-1)}+\varepsilon}.$$

If every local component of $\Pi$ lies in the tempered unitary dual, then the stronger estimate

$$L(1/2+it,\Pi\times\pi')\ll_{\Pi,\pi',\varepsilon}(1+|t|)^{\frac{n(n+1)}4-\frac1{4(3n-1)}+\varepsilon}$$

holds. The implied constants may depend on the fixed representations and $\varepsilon$.

## Statement references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, Theorem A, §1.1](https://arxiv.org/pdf/2309.07534v2)

[Liyang Yang, *The Burgess Bound for GL(2) × GL(1) over Number Fields*, Theorem A and proof](https://arxiv.org/pdf/2305.10719v1)

## Proof status

The n≥2 proof route is the amplified relative trace formula, the spectral lower bound, the geometric-side bound, the bounded-index amplifier coefficient, and the prime count. The available 2023 relative-trace-formula item assumes n≥2 and is itself escalated. The spectral route also needs proved global Rankin–Selberg continuation and vertical-strip bounds for every constituent pair of ranks $(a,n)$ with $1\leq a\leq n-2$; the current adjacent-rank and same-rank Cogdell items do not cover those pairs. The main theorem's n=1 clause has a distinct GL(2)×GL(1) route in the cited Burgess paper, whose relative trace formula and Theorem E proof are not supplied locally. The prime-counting step uses the published prime number theorem under countable choice, which is therefore an explicit hypothesis. Step 1 is escalated; proposed missing interfaces are `thm-global-rankin-selberg-continuation-for-arbitrary-rank-pairs` and `thm-yang-gl2-gl1-burgess-t-aspect-subconvexity`.


The full real-$t$ statement is preserved. Reducing it to the central-point batch49 trace interface requires explicit transport of norm twists through the split-center normalization, the inducing parameters, and the $L$-argument; arbitrary constituent deformations need their rank-weighted central exponent accounted for. The smooth microlocal test functions also require a proved extension of the batch49 compact-type-finite test class. These remain held analytic obligations; neither the batch49 local helpers nor its unproved trace identity supply them. Its Corollary9.4 source discrepancy between the stated finite $s=1$ value and the central-point completed moment does not authorize replacing this central $L$-value by an $s=1$ value.
