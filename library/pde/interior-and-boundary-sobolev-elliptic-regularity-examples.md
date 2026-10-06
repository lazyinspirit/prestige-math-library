---
page: interior-and-boundary-sobolev-elliptic-regularity-examples
title: Interior and Boundary Sobolev Elliptic Regularity — Examples
status: draft
items: []
examples: ["ex-poisson-equation-with-ltwo-data-gains-two-interior-derivatives", "ex-piecewise-smooth-coefficient-produces-limited-regularity", "cex-interior-regularity-does-not-imply-boundary-regularity", "cex-boundary-h-two-regularity-needs-domain-regularity", "cex-bounded-discontinuous-elliptic-coefficients-do-not-force-h-two-regularity", "ex-bootstrapping-a-smooth-poisson-problem", "cex-higher-elliptic-regularity-cannot-exceed-the-forcing-regularity-by-more-than-two-derivatives", "ex-reentrant-sector-harmonic-singularity-has-explicit-sobolev-threshold", "cex-smooth-interior-data-do-not-repair-incompatible-dirichlet-corner-values", "cex-h-two-estimate-needs-an-ltwo-kernel-term-without-injectivity"]
---

These companions compute and stress-test the regularity theory of the main
page. Poisson's equation with $L^2$ data gains exactly two interior
derivatives for the constant-coefficient Laplacian, and bootstrapping a smooth
datum on nested compact subsets produces a $C^\infty$ representative solving
the equation pointwise. On the other side, the coefficient hypotheses are
tested: a bounded discontinuous coefficient admits an $H^1$ weak solution with
continuous flux that is not in $H^2$, so bounded measurability cannot replace
the Lipschitz hypothesis of the interior theorem, while a continuous
piecewise-smooth (Lipschitz) coefficient gives an $H^2$ solution whose
classical second derivative jumps at the interface, separating the weak
$H^2$ scale from $C^2$.

The boundary theory is bounded by counterexamples. A harmonic function on the
slit disc is smooth inside and belongs to $H^1$ but not to $H^2$, so interior
regularity does not imply boundary regularity when the boundary fails to be a
$C^1$ graph; on a reentrant sector the same mechanism produces the singular
exponent $\alpha=\pi/\omega$, with an explicit integer-order Sobolev threshold
and a proved real-order threshold in the intrinsic Slobodeckij scale. At a
convex corner of the square, smooth
side data assigning different constants at a corner admit no solution
continuous on the closure and no $H^2$ solution either, so compatibility of
the data is not created by regularity. Finally, the $H^2$ estimate is shown to
need its $L^2$ kernel term when the homogeneous problem has a nontrivial
solution: on the unit disk, $L=-\operatorname{div}((1/4-|x|^2/8)\nabla)-1$
annihilates $u=1-|x|^2$, whose $H^2$ norm is positive while
$\|Lu\|_{L^2}=0$, and the interior cusp datum $|x|^{k+1/2}$
shows that the two-derivative gain of the higher regularity theorem cannot be
improved by smoothness of the coefficients alone.
