---
page: "characteristic-functions-inversion-and-continuity"
title: "Characteristic Functions Inversion and Continuity"
status: published
items: ["def-characteristic-function-of-a-real-random-variable", "lem-basic-properties-of-characteristic-functions", "lem-characteristic-functions-under-affine-maps-and-independent-sums", "def-positive-definite-function-on-the-real-line", "lem-characteristic-functions-are-positive-definite", "rem-characteristic-function-fourier-stieltjes-convention", "thm-uniqueness-of-a-law-from-its-characteristic-function", "lem-uniform-sine-integral-bound-and-dirichlet-value", "thm-levy-inversion-formula", "cor-density-inversion-from-an-integrable-characteristic-function", "lem-moments-give-derivatives-of-the-characteristic-function", "rem-derivatives-at-zero-do-not-in-general-determine-the-law", "thm-levy-continuity-theorem-forward-direction", "thm-tightness-from-characteristic-function-equicontinuity-at-zero", "thm-levy-continuity-theorem-converse", "cor-characteristic-function-criterion-for-weak-convergence", "thm-cramer-wold-device"]
examples: []
---

Characteristic functions encode a real probability law by the bounded tests $x\mapsto e^{itx}$. The opening items establish their normalization, uniform continuity, positive definiteness, and behavior under affine maps and independent sums. The Fourier convention is made explicit before measure uniqueness is imported, so the sign and factor of $2\pi$ stay fixed throughout.

A uniformly bounded sine-integral kernel supplies Lévy inversion, including the half-mass at each interval endpoint. Absolute integrability of the characteristic function then produces a continuous density. Finite moments justify derivatives of the transform, but do not by themselves authorize Taylor reconstruction of the law.

The continuity theorem uses a triangular frequency average to control spatial tails. Its converse passes that average to the pointwise limit, absorbs the finitely many early laws into a larger compact interval, and uses Prokhorov and uniqueness to identify the full weak limit. Cramér–Wold closes the page with finite-dimensional Fourier uniqueness and a coordinate tightness argument. AC is stated where inherited from Fourier uniqueness, compact integration, or Prokhorov; the elementary characteristic-function and moment bounds introduce no new choice assumption.
