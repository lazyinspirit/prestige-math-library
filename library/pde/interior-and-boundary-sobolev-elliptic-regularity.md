---
page: interior-and-boundary-sobolev-elliptic-regularity
title: Interior and Boundary Sobolev Elliptic Regularity
status: draft
items: ["def-first-difference-quotient", "lem-difference-quotient-integration-by-parts", "lem-cutoff-difference-quotient-commutator-estimate", "lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative", "thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one", "rem-the-p-one-difference-quotient-converse-leads-to-bv-not-w-one-one", "def-local-weak-solution-for-a-divergence-form-operator", "thm-caccioppoli-inequality-for-weak-elliptic-solutions", "cor-scaled-caccioppoli-inequality-on-concentric-balls", "lem-tangential-difference-quotient-test-function", "lem-localisation-identity-for-a-divergence-form-weak-solution", "lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates", "thm-interior-h-two-estimate-for-constant-coefficient-elliptic-equations", "lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators", "thm-interior-h-two-regularity-for-divergence-form-equations", "lem-nested-domain-induction-for-interior-elliptic-derivatives", "thm-interior-h-k-plus-two-elliptic-regularity", "cor-smooth-data-give-smooth-interior-solutions", "lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts", "lem-c-two-boundary-flattening-transforms-uniform-ellipticity", "lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary", "lem-normal-second-derivative-recovered-from-the-elliptic-equation", "lem-finite-boundary-and-interior-partition-glues-local-h-two-estimates", "thm-global-h-two-dirichlet-regularity", "cor-global-h-two-estimate-without-the-ltwo-term-under-uniqueness", "thm-higher-order-boundary-regularity-for-dirichlet-problems", "cor-smooth-weak-dirichlet-solutions-are-classical", "cor-smooth-coefficients-and-boundary-make-elliptic-eigenfunctions-smooth", "rem-regularity-estimates-do-not-create-boundary-compatibility"]
examples: []
---

This page develops the Sobolev regularity theory of second-order
divergence-form elliptic equations: interior $H^2$ and $H^{k+2}$ estimates,
the boundary theory of the Dirichlet problem through flattening and
tangential difference quotients, and the classical and spectral consequences
of the estimates.

The first part builds the difference-quotient calculus. The difference
quotient $\delta_h^iu$ is defined on the shrunken domain where both values
exist, and its calculus is recorded: integration by parts on the two shrunken
domains, the product rule with the correct shifts, and commutation with weak
derivatives. The cutoff commutator estimate isolates the localisation error
$\delta_h(\eta u)-\eta\delta_hu=(\delta_h\eta)(\tau_{-he}u)$, and uniformly
bounded difference quotients are identified as weak derivatives by a
choice-light duality argument, giving the characterisation of $W^{1,p}$ for
$1<p<\infty$; the endpoint $p=1$ is recorded as leading to a measure
derivative rather than to $W^{1,1}$. Local weak solutions of a divergence-form
operator are then defined with $L^2_{\mathrm{loc}}$ data and compactly
supported tests, and the Caccioppoli inequality and its scaled form on
concentric balls are proved by testing with $\eta^2u$. The
localisation identity and the difference-quotient test function supply the
admissible test classes, and the interpolation lemma absorbs the lower-order
terms that the commutators produce.

The second part proves interior regularity. For constant coefficients the
interior $H^2$ estimate is obtained by the difference-quotient method with no
coefficient commutator; the differentiated weak equation displays the
commutator terms $D_ka^{ij}D_ju$, and Young absorption together with
Caccioppoli gradient control yields the interior $H^2$ theorem for Lipschitz coefficients and
$L^2_{\mathrm{loc}}$ data, then the $H^{k+2}$ theorem for
$W^{k+1,\infty}$ coefficients and $H^k$ data, and finally smoothness of
solutions with smooth data.

The third part passes to the boundary. A $C^2$ boundary chart transforms the
weak equation and preserves uniform ellipticity quantitatively; near a flat
Dirichlet boundary, tangential difference quotients of compactly supported
localisations satisfy uniform tangential second-derivative bounds, and the equation recovers the
missing normal second derivative from the positive normal coefficient. A
finite partition glues the interior and boundary estimates into the global
$H^2$ Dirichlet theorem on a bounded $C^2$ domain with Lipschitz coefficients,
with the $L^2$ term on the right; under the trivial-kernel hypothesis the
$L^2$ term can be removed. Iterating the boundary estimate gives higher-order
boundary regularity under $C^{k+2}$ boundary and $W^{k+1,\infty}$ coefficients,
and after the Sobolev embeddings the weak solutions are classical; smooth
coefficients and boundary make Dirichlet eigenfunctions smooth. A closing
remark delimits the theory: the estimates presuppose compatible boundary data of the required Sobolev order
and do not manufacture compatibility.
