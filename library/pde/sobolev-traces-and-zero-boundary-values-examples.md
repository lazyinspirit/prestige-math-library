---
page: sobolev-traces-and-zero-boundary-values-examples
title: Sobolev Traces and Zero Boundary Values — Examples
status: published
items: []
examples: ["ex-trace-of-an-ac-sobolev-function-on-an-interval", "ex-trace-of-an-affine-function-on-a-ball", "cex-boundary-point-values-are-not-defined-by-an-lp-class", "cex-lp-boundary-data-need-not-lie-in-the-h-one-trace-range", "ex-zero-trace-versus-zero-extension", "cex-trace-theorem-fails-on-a-standard-outward-cusp-without-domain-control", "ex-a-right-inverse-in-the-half-space-by-poisson-type-extension"]
---

These companions compute and stress-test the trace theory of the main page. On
an interval the trace is the pair of endpoint values of the absolutely
continuous representative, and four descriptions of zero boundary behaviour
coincide: zero endpoint values, zero trace, membership in $W_0^{1,p}$, and
membership of the zero extension in $W^{1,p}(\mathbb R)$; the polynomial
$x(1-x)$ satisfies all four, while the constant $1$ fails all four and its
zero extension has distributional derivative $\delta_0-\delta_1$. On a ball
the trace of an affine function is its classical restriction, lies in the
fractional boundary space for $1<p<\infty$, and has the expected surface
integral. Two counterexamples delimit the boundary-value formalism: changing
values on the null set $\partial\Omega$ alters the classical boundary
restriction while leaving the interior class and its trace unchanged, and an
$L^2$ class can be unbounded on every neighbourhood of the boundary, so
pointwise evaluation is not a function of the class. On the plane a jump
datum lies in $L^p$ of the boundary but fails the $W^{1-1/p,p}$ seminorm for
every $p\ge2$, hence is not a trace there, while for $1<p<2$ the same jump
does belong to the trace space, so the range genuinely depends on $p$. An
outward cusp beyond the critical sharpness defeats every bounded extension of
classical restriction by an explicit concentrating sequence, and a
Poisson-type harmonic extension gives local cutoff lifts of smooth boundary
data. It is a global $W^{1,2}$ lift for every such datum when the boundary
dimension is at least two; in boundary dimension one this requires zero mean.
This example does not prove the general right inverse.

The constructions use the main page's conventions: bounded $C^1$ domains in
Euclidean space, traces as operators on almost-everywhere classes, and the
chart-independent surface measure on the boundary. Countable Choice is
declared through the stated measure and convolution interfaces. The cusp
calculation uses classical weak derivatives and linear changes of variables
under Countable Choice. The jump counterexample uses the sharp trace theorem
under the Axiom of Choice; the interval equivalences also declare the Axiom
of Choice through the absolutely continuous representative and ACL interfaces.
