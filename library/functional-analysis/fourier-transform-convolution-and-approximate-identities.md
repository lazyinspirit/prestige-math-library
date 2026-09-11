---
page: "fourier-transform-convolution-and-approximate-identities"
title: "Fourier Transform Convolution and Approximate Identities"
status: published
items: ["def-fourier-transform-on-l-one-of-rn", "lem-l-one-fourier-transform-is-well-defined", "thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions", "thm-fourier-translation-modulation-dilation-and-reflection-laws", "thm-fourier-transform-converts-convolution-to-products", "lem-complex-integration-by-parts-on-intervals-and-decaying-lines", "lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization", "thm-riemann-lebesgue", "lem-gaussian-fourier-summability-kernel-is-an-approximate-identity", "lem-radial-majorized-kernels-recover-lebesgue-point-values", "thm-fourier-inversion-at-lebesgue-points-under-summability", "thm-l-one-fourier-inversion", "thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis", "cor-uniqueness-of-the-l-one-fourier-transform", "cor-convolution-approximate-identities-from-fourier-multipliers", "thm-fourier-transform-of-a-finite-complex-measure", "lem-gaussian-smoothing-of-finite-complex-measures", "cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms", "rem-probability-characteristic-function-normalization", "rem-riesz-thorin-supplied-by-measure-theory"]
examples: []
---

The Fourier transform here uses the phase $e^{-2\pi ix\cdot\xi}$ on complex-valued functions. The opening definition and well-definedness lemma distinguish an $L^1$ class from its bounded continuous transform, which is defined at every frequency. Translation, modulation, reflection and linear changes of variables fix the conventions used throughout the pair.

Convolution becomes multiplication. The Gaussian calculation then supplies a concrete summability kernel, and the radial-majorant lemma proves recovery at specified Lebesgue values. This separates norm convergence from pointwise recovery and leads to inversion when the transform is integrable, the product formula and injectivity. Finite complex measures are treated through their variation and Gaussian smoothing, ending with measure uniqueness and the conversion to probability's characteristic-function convention.

The elementary transform bound and uniform continuity argument require no choice selection. Items that use the Euclidean measure and approximation interfaces state countable choice; the Radon–Nikodym route for measure smoothing and its uniqueness consumer explicitly assume the Axiom of Choice. These assumptions are local to the statements that use them.

The companion computations test the normalization and the hypotheses of inversion. Wiener and interpolation references provide orientation only where identified; they are not substitutes for proved prerequisites. The next A page develops Schwartz topology and the unitary $L^2$ transform.
