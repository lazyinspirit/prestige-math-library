---
page: poisson-summation-sampling-and-lattice-duality
title: "Poisson Summation Sampling and Lattice Duality"
status: draft
items: [def-full-rank-lattice-covolume-and-dual-lattice,
        def-normalized-sinc-function,
        lem-invertible-linear-substitutions-preserve-schwartz-space,
        lem-lattice-fundamental-parallelotope-partitions-euclidean-space,
        lem-character-orthogonality-on-a-lattice-fundamental-domain,
        lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable,
        lem-fourier-coefficients-of-lattice-periodisation,
        lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients,
        thm-poisson-summation-for-a-full-rank-lattice,
        thm-poisson-summation-under-two-sided-polynomial-decay,
        rem-schwartz-poisson-formula-is-owned-by-functional-analysis,
        lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb,
        lem-sampling-produces-periodisation-in-frequency,
        lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval,
        thm-shannon-sampling-for-bandlimited-ltwo-functions,
        cor-nyquist-no-aliasing-condition,
        rem-aliasing-above-the-nyquist-rate]
examples: []
---

This page carries the Euclidean lattice refinement of the published Schwartz
Poisson theorem: it fixes the objects a lattice supplies (a full-rank lattice
$\Lambda=A\mathbb Z^n$, its covolume $|\det A|$ and its dual
$\Lambda^*=A^{-T}\mathbb Z^n$, with the character dictionary of
[[def-full-rank-lattice-covolume-and-dual-lattice]]), the geometry of its
fundamental parallelotope ([[lem-lattice-fundamental-parallelotope-partitions-euclidean-space]]),
and then proves the two faces of the same identity: the Fourier expansion of a
periodisation and the summation formula it yields. The argument is written in
the library's $2\pi$-normalised, negative-sign Fourier convention, so the classical
$2\pi$-normalisations of the sources appear translated, never silently changed.

The periodisation half of the page shows that a Schwartz function periodised
over a lattice is smooth with locally uniformly summable derivative series
([[lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable]]),
that its coefficients over the dual lattice are the Fourier transform sampled
at $\Lambda^*$ ([[lem-fourier-coefficients-of-lattice-periodisation]]), and
that continuous lattice-periodic functions are determined by those
coefficients ([[lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients]]).
The summation half then gives
$\sum_{\lambda\in\Lambda}f(\lambda)=c^{-1}\sum_{\lambda^*\in\Lambda^*}\widehat f(\lambda^*)$
for Schwartz $f$ ([[thm-poisson-summation-for-a-full-rank-lattice]]) and, under
the exact two-sided $(n+\varepsilon)$-decay hypotheses of the source, the same
pointwise identity for continuous integrable functions
([[thm-poisson-summation-under-two-sided-polynomial-decay]]); the recorded
orientation [[rem-schwartz-poisson-formula-is-owned-by-functional-analysis]]
keeps the unit-lattice case owned by the functional-analysis page.

The distributional side of the same algebra is
$\mathcal F\operatorname{comb}_\Lambda=c^{-1}\operatorname{comb}_{\Lambda^*}$
([[lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb]]), which
turns multiplication by a Schwartz function into the sampled distribution and
its transform into the periodisation of the spectrum over the dual lattice
([[lem-sampling-produces-periodisation-in-frequency]]). That periodisation is
what the sampling theory of this page inverts: for a band-limited $L^2$
function the samples are the coefficients of the rescaled spectrum
([[lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval]]),
the Shannon series reconstructs the function in $L^2$, and pointwise under the
extra hypothesis $\sum_k|f(hk)|<\infty$
([[thm-shannon-sampling-for-bandlimited-ltwo-functions]], with the normalised
$\operatorname{sinc}$ of [[def-normalized-sinc-function]]). The page closes
with the sharp Nyquist picture: translates of the band disjoint up to null sets mean no
aliasing ([[cor-nyquist-no-aliasing-condition]]), while positive-measure overlap of reciprocal translates
produces the aliasing failure mechanism
([[rem-aliasing-above-the-nyquist-rate]]). Every item carries at most Countable
Choice, inherited from the Euclidean integration, measure, Riesz–Fischer and
Schwartz Fourier suppliers; no use of the full Axiom of Choice occurs.
