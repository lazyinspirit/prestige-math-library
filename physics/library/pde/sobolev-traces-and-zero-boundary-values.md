---
page: sobolev-traces-and-zero-boundary-values
title: Sobolev Traces and Zero Boundary Values
status: published
items: ["lem-one-dimensional-sobolev-endpoint-estimate", "thm-trace-estimate-on-the-half-space", "thm-lp-trace-operator-on-a-bounded-c-one-domain", "lem-sobolev-trace-agrees-with-continuous-boundary-values", "lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts", "thm-sobolev-gauss-green-formula-on-c-one-domains", "thm-kernel-of-the-trace-is-w-one-p-zero", "def-fractional-slobodeckij-space-on-euclidean-space", "lem-slobodeckij-seminorm-is-well-defined", "lem-coordinate-direction-form-of-the-slobodeckij-seminorm", "lem-one-dimensional-hardy-inequality-on-the-half-line", "lem-mean-zero-kernel-scale-estimate", "lem-smooth-compactly-supported-functions-are-dense-in-slobodeckij-spaces", "def-fractional-sobolev-space-on-a-compact-c-one-boundary", "lem-fractional-boundary-norm-is-independent-of-atlas", "lem-half-space-trace-has-the-fractional-slobodeckij-bound", "thm-half-space-lift-by-normal-mollification", "thm-sharp-trace-theorem-for-w-one-p", "thm-bounded-right-inverse-for-the-sobolev-trace", "cor-inhomogeneous-dirichlet-data-reduce-to-zero-trace", "rem-endpoint-and-rough-domain-trace-limitations"]
examples: []
---

This page develops the first-order trace theory of Sobolev spaces on bounded
$C^1$ domains and identifies the zero-boundary space as the kernel of the
trace. The one-dimensional endpoint estimate controls the absolutely
continuous representative at the endpoints by the $W^{1,p}$ norm, and the
half-space trace estimate is its normal-line form: the classical boundary
value of a compactly supported continuous $W^{1,p}$ function is controlled by
$\int|u|^{p-1}|\partial_nu|$, which bounds the flat restriction uniformly and
extends it to a bounded operator $T_+$ on all of $W^{1,p}$ of the half-space.
Chart flattening, a finite ambient partition and the bounded graph density
transport this to a bounded trace operator $T:W^{1,p}(\Omega)\to
L^p(\partial\Omega)$ on every bounded $C^1$ domain; $T$ agrees with classical
restriction on continuous Sobolev classes, commutes with smooth cutoffs, is
local, and is the transported flat trace on chart-supported classes. The
Gauss–Green identity with trace boundary terms is obtained from the divergence
theorem on smooth fields and density, and the kernel of $T$ is proved to be
exactly the closure of the test functions, through the half-space
zero-extension computation, translation, and mollification.

The second half builds the fractional boundary spaces. The Gagliardo–
Slobodeckij seminorm is defined by the double integral over increments on
$L^p$ classes; its well-definedness, triangle inequality and definiteness are
proved, and it is compared with the sum of coordinate-direction difference
integrals. The one-dimensional Hardy inequality and a mean-zero kernel scale
estimate supply the analytic engine: the flat trace of a half-space Sobolev
function loses exactly $1/p$ derivatives, so it lies in
$W^{1-1/p,p}$ of the boundary, and the local lifts of the boundary data patch
into a bounded linear right inverse supported in any prescribed collar. The
patched boundary space is chart-independent up to equivalent norms, the range
of the trace is exactly $W^{1-1/p,p}(\partial\Omega)$ for $1<p<\infty$, a
strict subset of $L^p(\partial\Omega)$, and the trace is not compact into
this fractional target. A closing
corollary reduces inhomogeneous Dirichlet data to a zero-trace remainder, and
a remark records the $p=1$ endpoint, the outward-cusp limitation, and the
Lipschitz-versus-$C^1$ scope of the cited theorems.

Conventions: $\Omega\subseteq\mathbb R^n$ is a bounded $C^1$ domain,
$n\ge2$, $1\le p<\infty$ unless stated otherwise, $\theta=1-1/p$, and the
scalar field is $\mathbb R$ or $\mathbb C$. The trace is an operator on
almost-everywhere classes; boundary $L^p$ uses the chart-independent surface
measure; the Slobodeckij norm carries its $L^p$ term; and the $p=1$ range is
never renamed $W^{0,1}$. Countable Choice is declared through the measure,
Fubini–Tonelli, convolution and approximate-identity interfaces, and the
Axiom of Choice is declared on the items whose ACL, density, completion or
finite-partition interfaces invoke it.
