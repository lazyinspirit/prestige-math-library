---
page: poisson-summation-sampling-and-lattice-duality-examples
title: "Poisson Summation Sampling and Lattice Duality — Examples"
status: draft
items: []
examples: [ex-dual-lattice-and-covolume-for-a-diagonal-scaling,
           ex-shannon-reconstruction-of-a-sinc-function,
           cex-undersampling-identifies-two-distinct-pure-frequencies,
           rem-lone-integrability-alone-does-not-license-pointwise-poisson-summation,
           rem-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis]
---

These examples exercise the lattice conventions of the companion page in the
smallest nontrivial cases, with Countable Choice declared wherever the
suppliers assume it. The diagonal scaling
[[ex-dual-lattice-and-covolume-for-a-diagonal-scaling]] computes the covolume
$\prod_i|a_i|$ and the dual lattice
$\operatorname{diag}(a_i^{-1})\mathbb Z^n$ directly from the Leibniz formula,
and records the one-dimensional pair $a\mathbb Z$, $a^{-1}\mathbb Z$ that
becomes $h\mathbb Z$, $h^{-1}\mathbb Z$ at the sampling spacing $h>0$.

The reconstruction example
[[ex-shannon-reconstruction-of-a-sinc-function]] checks the normalisation of
the sampling theorem at $h=1$: the $L^2$ Fourier transform of the normalised sinc is the indicator of
$[-1/2,1/2]$, its samples vanish off the origin, and the Shannon series collapses
to the single term $k=0$, so no cancellation or sign error can hide in the
constants. The counterexample
[[cex-undersampling-identifies-two-distinct-pure-frequencies]] shows the
companion failure: the pure frequencies $\xi$ and $\xi+m/h$ are distinct yet
indistinguishable from their samples on $h\mathbb Z$, because a shift by the
dual lattice is invisible at the sampling points; being constant-modulus, these
witnesses are not in $L^2$ and so do not conflict with the reconstruction
theorem.

The two recorded remarks guard the scope. Laugesen's step-function periodisation
[[rem-lone-integrability-alone-does-not-license-pointwise-poisson-summation]]
shows that bare $L^1$ data do not license pointwise Poisson summation: at the
jump the periodisation has assigned value $2\pi$, while its Fourier series
converges to the midpoint $3\pi$ of its one-sided limits. Half-open lattice
cells remain disjoint. The example shows that additional pointwise regularity
or summability is needed; it does not make the theorem’s particular two-sided
polynomial decay bounds necessary for every function.
Finally
[[rem-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis]]
records that the Gaussian/theta instance is already proved on the
functional-analysis page and is cited here rather than duplicated.
