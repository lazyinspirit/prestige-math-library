---
page: chern-weil-theory-and-characteristic-forms-examples
title: "Chern–Weil Theory and Characteristic Forms: Examples"
status: published
requires: [chern-weil-theory-and-characteristic-forms]
items: []
examples: [ex-curvature-and-first-chern-form-of-a-line-bundle,
           ex-flat-connections-have-vanishing-positive-degree-real-chern-weil-classes,
           ex-pontryagin-forms-from-a-real-connection,
           cex-changing-a-connection-changes-the-form-but-not-its-de-rham-class]
---

These worked calculations accompany
[[chern-weil-theory-and-characteristic-forms]], using its normalizations
throughout. The first example computes the curvature and first Chern form of
a Hermitian connection on the tautological complex line over the complex
projective line: in a unitary frame the connection form is imaginary and
$\Omega=d\omega$, a two-disk Stokes computation gives
$\int_{\mathbb{CP}^1}\Omega=2\pi i$, and the normalized form integrates to
$-1$, matching the real image of the topological class
$c_1(\gamma)=e(\gamma_{\mathbb R})$.

The Pontryagin example records what metric compatibility buys. For every real
connection $p_1(\nabla)=-c_2(\nabla_{\mathbb C})$, but the simplified formula
$p_1(\nabla)=-\operatorname{tr}(\Omega\wedge\Omega)/(8\pi^2)$ needs an
orthonormal frame, and an explicit rank-two connection on $\mathbb R^4$ with
$\omega=\operatorname{diag}(x_2\,dx_1,x_4\,dx_3)$ has a nonzero
$(\operatorname{tr}\Omega)^2$ correction, so the uncorrected trace expression
fails. In rank two with a positively oriented orthonormal frame the page's
normalization gives $p_1=F\wedge F/(4\pi^2)=e(\nabla)\wedge e(\nabla)$.

The flat-connection example proves that positive-degree real Chern,
Pontryagin and Euler classes of flat connections vanish whenever the relevant
compatibility hypothesis holds, and then constructs a compact hyperbolic
genus-two surface with a flat oriented plane bundle whose real Euler number is
$-1$ (a mod-two Thom lifting of the unit tangent circle bundle), showing that
the metric-compatibility hypothesis cannot be omitted. The counterexample
keeps one line bundle fixed and replaces the connection: the Chern form
changes, but the two representatives differ by an exact form, so the de Rham
class does not. Each item states its own AC accounting; the explicit frame,
curvature and quotient-connection computations add no further choices.
