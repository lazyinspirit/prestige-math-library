---
page: poisson-summation-sampling-and-lattice-duality-examples
title: "Poisson Summation Sampling and Lattice Duality — Examples"
status: published
items: []
examples: [ex-dual-lattice-and-covolume-for-a-diagonal-scaling,
        ex-shannon-reconstruction-of-a-sinc-function,
        cex-undersampling-identifies-two-distinct-pure-frequencies]
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

The Gaussian Poisson identity and theta reciprocity are proved under
Countable Choice in
[[ex-poisson-summation-for-the-gaussian-and-theta-functional-equation]]
on the functional-analysis examples page. That calculation gives
$\theta(t)=t^{-1/2}\theta(1/t)$ for
$\theta(t)=\sum_{k\in\mathbb Z}e^{-\pi tk^2}$ and $t>0$.
The pointwise summation theorem on the companion page retains its explicit
regularity and decay assumptions.
