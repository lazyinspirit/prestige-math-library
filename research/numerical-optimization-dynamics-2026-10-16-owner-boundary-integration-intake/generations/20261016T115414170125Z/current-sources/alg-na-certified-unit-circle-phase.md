---
id: alg-na-certified-unit-circle-phase
kind: algorithm
title: "Certified dyadic enclosures for unit-circle phases"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 11
deps: [def-dyadic-floating-point-format-and-directed-rounding, def-intervals-rectangles-and-complex-balls, def-outward-rounded-interval-and-ball-operations, def-real-elementary-functions-and-domains, alg-certified-elementary-range-evaluation, thm-real-elementary-range-enclosures, thm-outward-rounded-operations-are-isotone-and-dag-sound, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-na-interval-pi-matches-canonical-fourier-pi]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., Chapter 24, pp. 452–454"
      url: https://pages.stat.wisc.edu/~bwu62/771/hingham2002.pdf
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 11 §11.7"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
verification:
  precheck: n/a
---

## Definition

Input an exact rational $q$, a target $0<\tau\le1/4$, integer dyadic exponent limits $e_{\min}\le e_{\max}$, an initial precision $p_0\ge2$, a finite precision cap $p_{\max}\ge p_0$, and a finite elementary-series cap $J\ge1$. The target value is $w=e^{\pi iq}=\cos(\pi q)+i\sin(\pi q)$ by [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], for the canonical Fourier $\pi$ identified with the interval evaluator's constant by [[thm-na-interval-pi-matches-canonical-fourier-pi]]. For precision $p=p_0,p_0+1,\ldots,p_{\max}$, build the finite expression DAG for $\cos(\pi q)$ and $\sin(\pi q)$, with rational constants enclosed by directed dyadic rounding, and call [[alg-certified-elementary-range-evaluation]] using the dyadic format $(p,e_{\min},e_{\max})$ and truncation index $J$; its fixed finite-cell rules govern range reduction. If either result is non-finite, continue at the next precision unless the precision cap is reached, in which case return `inconclusive` with the supplier status. If the results are finite intervals $C=[c_-,c_+]$ and $S=[s_-,s_+]$, set $\widehat w=c_-+is_-$ and compute an upward-rounded dyadic $\epsilon\ge(c_+-c_-)+(s_+-s_-)$. If $\epsilon\le\tau$, return `certified(\widehat w,\epsilon)`; otherwise continue or return `inconclusive` at the cap. A non-finite endpoint or overflow returns its explicit failure status. The routine makes no finite-error claim on a failure branch.

## Remarks

The lower-left rectangle corner is already a representable dyadic pair. The radius uses the sum of coordinate widths, which bounds complex modulus error without a square-root computation. Precision refinement is finite and may return inconclusive; only the certified branch is used by dependent algorithms.
