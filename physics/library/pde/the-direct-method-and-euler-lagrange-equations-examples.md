---
page: the-direct-method-and-euler-lagrange-equations-examples
title: "The Direct Method and Euler--Lagrange Equations — Examples"
status: published
items: []
examples: ["cex-nonstrict-convexity-allows-many-minimisers", "cex-a-coercive-functional-need-not-attain-without-weak-lower-semicontinuity", "cex-a-minimising-sequence-need-not-converge-strongly", "cex-a-norm-closed-nonconvex-set-need-not-be-weakly-closed", "cex-euler-lagrange-stationarity-does-not-imply-a-minimum", "ex-one-dimensional-euler-lagrange-equation", "cex-nonconvex-gradient-energy-can-lose-weak-lower-semicontinuity", "ex-natural-neumann-condition-from-a-free-endpoint", "ex-dirichlet-energy-with-affine-boundary-data", "ex-fixed-trace-and-free-trace-variations-give-different-boundary-equations"]
---

These companions compute the direct method and the Euler--Lagrange equation on
explicit energies and delimit each hypothesis by a witness. On the one hand
two worked computations: an affine function on a bounded $C^1$ domain is the
unique minimiser of the Dirichlet energy among all $H^1$ functions with the
same boundary trace, and on a compact interval the energy
$\int_a^b\big(\tfrac12u'(x)^2+V(u(x))\big)dx$ with fixed endpoint values has
its local minimisers satisfying $-u''+V'(u)=0$, while free endpoints add the
natural conditions $f_{u'}=0$ at each free endpoint. The fixed-trace and
free-trace versions of the $L^2$-forced Dirichlet energy are then contrasted:
the same energy yields the Dirichlet problem in the first case and the
Neumann condition $\partial_\nu u=0$ in the second. Constant shifts obey
$I(u+c)=I(u)-c\int_\Omega f$, so the free energy is invariant under
constants exactly when $\int_\Omega f=0$, and is never coercive on the
whole $H^1$ space. Under the stated connected extension-domain hypotheses,
compatible zero-mean forcing gives a unique mean-zero weak Neumann solution.
Nonzero mean forbids a free local minimiser and cannot be repaired by
normalising the solution; on disconnected domains compatibility and
normalisation are required on each component.

On the other hand the hypotheses are shown to be load-bearing: coercivity
alone does not attain its infimum when weak lower semicontinuity fails at the
only candidate ($\ell^2$ with $I(0)=1$, $I(u)=\|u\|^2$ otherwise); a
minimising sequence for a weakly lower semicontinuous convex functional need
not converge strongly to the minimiser (the standard basis of $\ell^2$ in the
unit ball); a norm-closed set that is not convex need not be weakly closed
(the unit sphere of an infinite-dimensional Hilbert space is weakly dense in
the unit ball); strict convexity is genuinely needed for uniqueness of a
minimiser ($I(x,y)=x^2$ on $\mathbb R^2$ minimises along a line); a
nonconvex gradient integrand can lose weak lower semicontinuity altogether
(the sawtooth sequence $u_k(x)=\tfrac1kw(kx)$ makes
$\int_0^1(u'^2-1)^2$ vanish on the sequence but equal $1$ at the weak limit
$0$); and stationarity in the Euler--Lagrange equation does not imply a
minimum, since $J(u)=-\tfrac12\int_\Omega|Du|^2$ has $u=0$ as its only
stationary point on $H^1_0(\Omega)$ yet is unbounded below.

The conventions are those of the main page: bounded $C^1$ domains in
Euclidean space, $1<p<\infty$, weak limits taken sequentially, and the
Euler--Lagrange equation written $-\operatorname{div}f_\xi+f_s=0$. The
Dirichlet and free-trace comparison and the nonconvex-gradient counterexample
declare the choice principles used by their suppliers. The Hilbert-space
counterexamples assume AC for the counting-measure $L^2$ reflexivity and
duality interfaces; the unit-sphere example also invokes the HB-dependent
weak-closure theorem. The weighted-energy example checks its explicit weak
limit directly, without a subsequence extraction. The scalar convexity
witness $I(x,y)=x^2$ uses no choice principle, while the one-dimensional
variation examples explicitly assume Countable Choice for their measure
and fundamental-lemma interfaces.
