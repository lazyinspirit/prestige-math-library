---
page: em-primitives-and-postulates-examples
title: "Primitives and postulates — Examples"
status: draft
examples: [ex-em-smooth-and-point-source-types, ex-em-unit-dimensional-checks]
---

Two worked comparisons of the primitive objects on the companion page
[[em-primitives-and-postulates]]: one separating the source classes, one
checking the SI dimensions of every displayed equation.

The first example contrasts a compactly supported smooth charge density $qf$
with the distributional point charge on a prescribed $C^1$ trajectory
([[ex-em-smooth-and-point-source-types]]). The smooth density has total charge
$q$ in both retained charge branches and belongs to the source class to which
the smooth Maxwell branch refers; the point source is defined only by its
spacetime pairings, satisfies distributional continuity, and is read at fixed
time as the evaluation functional $q\delta_{z(t)}$. Assuming Countable Choice for the cited Lebesgue-volume, null-singleton and
regular-distribution embedding suppliers, the example shows that for $q\ne0$
no locally integrable density represents the point charge. The two
constructions carry the same total charge but have distinct spatial
distributions when $q\ne0$; for $q=0$ both give zero charge and current
distributions, represented by smooth zero functions. The point-source
pairings supply distributional continuity; neither locally integrable Maxwell
branch supplies a nonzero singular-source Maxwell adoption. No field value
at the particle and no measurement is asserted.

The second example verifies that every term of the four SI Maxwell equations
and of the Lorentz coupling terms carries a matching unit
([[ex-em-unit-dimensional-checks]]): $\operatorname{div}E$ and
$\rho/\varepsilon_0$ in $\mathrm{V\,m^{-2}}$; both source terms of
$\operatorname{curl}B$ and $\operatorname{curl}B$ itself in
$\mathrm{T\,m^{-1}}$; both sides of $\operatorname{curl}E=-\partial_tB$ in
$\mathrm{T\,s^{-1}}$; the adopted coupling terms $q\,\Phi(U)$ and
$m\,dU/d\tau$ in newtons, the displayed coordinate terms $qE$ and
$q(r'\times B)$ in newtons, and $\rho E+J\times B$ in
$\mathrm{N\,m^{-3}}$; and the energy density and flux
$\tfrac12(\varepsilon_0E^2+B^2/\mu_0)$ and $E\times B/\mu_0$ in
$\mathrm{J\,m^{-3}}$ and $\mathrm{W\,m^{-2}}$. The computation is exact unit
arithmetic: it is not a measurement, it proves no equation, and no numerical
value of $\mu_0$ is used or asserted.
