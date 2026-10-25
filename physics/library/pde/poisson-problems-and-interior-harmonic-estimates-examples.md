---
page: "poisson-problems-and-interior-harmonic-estimates-examples"
title: "Poisson Problems and Interior Harmonic Estimates — Examples"
status: published
items: []
examples: ["cex-poisson-integral-need-not-recover-discontinuous-data-at-the-jump", "cex-poisson-integral-on-the-half-space-is-not-unique-without-growth-control", "cex-exterior-dirichlet-uniqueness-needs-growth-or-decay-control", "cex-smooth-does-not-imply-real-analytic-for-general-pde", "ex-poisson-kernel-concentrates-at-a-boundary-point", "ex-poisson-extension-of-a-coordinate-function-on-a-ball", "ex-half-space-poisson-extension-of-a-plane-wave", "cex-interior-estimates-cannot-use-distance-zero-to-the-boundary", "ex-harmonic-taylor-series-on-a-ball"]
---

These companions compute the boundary behaviour of the Poisson representation and mark its limits. The disc Poisson integral of a two-valued Heaviside datum is shown to converge to $1/2$ at the jump, so assigned endpoint values need not be recovered; on the half-space the zero trace has the nonzero unbounded harmonic solution $u(x',t)=t$ when no growth restriction is imposed, and an exterior ball shows that boundedness alone does not force uniqueness of the exterior Dirichlet problem. Kernel concentration at a boundary point is computed from the mass split of the cap/complement estimate, and the Poisson extension of a coordinate function on a ball and of a plane wave on the half-space are evaluated explicitly. The boundary-scale counterexample exhibits harmonic polynomials with unit boundary data whose normal derivative blows up like the inverse distance to the boundary, so the interior gradient estimate must degenerate there; the final example records the terminating Taylor series of an elementary harmonic polynomial together with its factorial Cauchy bound.

All constructions use the main page's conventions: the normalized kernel $-\Delta\Phi=\delta_0$ with $\Phi(x)=|x|^{2-n}/((n-2)\omega_{n-1})$, the surface measure $\omega_{n-1}=|S^{n-1}|$, and Countable Choice wherever the Poisson integral, surface measure or the ball Dirichlet theorem is invoked.
