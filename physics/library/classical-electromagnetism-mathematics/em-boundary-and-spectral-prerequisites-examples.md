---
page: em-boundary-and-spectral-prerequisites-examples
title: Em Boundary And Spectral Prerequisites — Examples
status: draft
items: []
examples: [ex-em-boundary-and-spectral-prerequisites-hypothesis-boundaries]
---

The companion page records explicit mathematical checks of the hypotheses and
conventions of the boundary and spectral results on
[[em-boundary-and-spectral-prerequisites]]; it carries `domain: mathematics`
and inherits the Axiom of Countable Choice used by the polar-coordinate and
divergence-theorem interfaces of its computations.

[[ex-em-boundary-and-spectral-prerequisites-hypothesis-boundaries]] works three
exact examples. First, the sphere trace $f(n)=n_3$ is the boundary value of the
homogeneous harmonic polynomial $x_3$, yet the conditions $\Delta u=0$ in the
unit ball and $\partial_nu=1$ on the sphere are incompatible, because the
divergence theorem turns them into $0=4\pi$; the sphere-mass computation
$\sigma(S^2)=4\pi$ is supplied from the polar-coordinates formula and the
closed-ball volume. Second, the piecewise-constant coefficient $\varepsilon=1$
below the plane and $\varepsilon=2$ above it with the continuous piecewise-linear
function matching $x_1$ and $x_1/2$ gives $\varepsilon\partial_1u\equiv1$, a weak
solution of $-\operatorname{div}(\varepsilon\nabla u)=0$ that fails to be $C^1$
across the interface, so the smooth-coefficient conclusions of
[[thm-em-elliptic-boundary-existence]] cannot be extended globally and the
piecewise conclusion is sharp. Third, the same configuration lies outside the
smooth classes of [[thm-em-waveguide-spectral-completeness]], witnessing that
no completeness or classical regularity is asserted in non-smooth classes. No
measurement, physical field interpretation or empirical claim is made.
