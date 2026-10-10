---
page: em-elementary-mathematical-prerequisites
title: Em Elementary Mathematical Prerequisites
status: draft
items: [def-em-complex-plane-wave, def-em-moving-patch, def-em-surface-distribution, lem-em-continuous-localization, lem-em-coulomb-dipole-remainder, lem-em-parameter-integrals, lem-em-point-current-continuity, lem-em-quadratic-stress-identity, lem-em-interface-derivatives, lem-em-joint-smooth-potentials, lem-em-moving-flux, lem-em-period-average, lem-em-interface-wave-linear-system]
examples: []
---

The elementary mathematical suppliers of the classical electromagnetism
collection, all of them mathematics: complex notation for time-harmonic fields,
moving parametrized patches, surface distributions and interface jumps,
localization, multipole remainders, parameter integrals, point-support
densities, quadratic stress identities, joint regularity of radial potentials,
and the algebraic interface system. [[def-em-complex-plane-wave]] fixes the
encoding of real vector fields as the real parts of complex exponentials and
the conventions under which complex linear equations may be projected,
[[lem-em-period-average]] computes the period averages
$\frac1T\int_0^T\operatorname{Re}(ae^{-i\omega t})\operatorname{Re}(de^{-i\omega t})dt=\frac12\operatorname{Re}(a\overline d)$
with the conjugation required for quadratic expressions, and
[[lem-em-interface-wave-linear-system]] records the purely algebraic
two-equation interface system with its balance $R+T=1$.
[[def-em-moving-patch]] defines a time-dependent parametrized family, its compatible
spacetime velocity field and its multiplicity-counted flux, and [[lem-em-moving-flux]] proves
the transport identity
$\Phi'(t)=\int_{S(t)}\partial_tB\cdot n\,dS-\oint_{\partial S(t)}(v\times B)\cdot d\mathbf r$
on nondegenerate time intervals for divergence-free fields, using this normal notation
at rank-two slices and the parameter-integral version at degenerate endpoint slices,
with the additional term
$\int_{S(t)}(v\cdot n)\operatorname{div}B\,dS$ in general; the companion
example page checks its sign convention and the necessity of the motion term.
[[def-em-surface-distribution]] defines the surface distribution
$\delta_S(\psi)=\int_S\psi\,dS$ and the jump $[F]=F_+-F_-$ of a two-sided field,
and [[lem-em-interface-derivatives]] proves the distributional identities
$\operatorname{div}F=\{\operatorname{div}F\}+n\cdot[F]\delta_S$ and
$\operatorname{curl}F=\{\operatorname{curl}F\}+n\times[F]\delta_S$ on the defined compact hypersurface, which has no manifold boundary. [[lem-em-point-current-continuity]] computes the distributional
continuity equation for point-support spacetime densities, including the
endpoint fluxes $q\delta_{(z(a),a)}-q\delta_{(z(b),b)}$ of the nonproper
branch, and [[lem-em-continuous-localization]] supplies the localization
converse used by variational arguments and potential theory.
[[lem-em-coulomb-dipole-remainder]] gives the monopole-dipole expansion with an
explicit $16a^2\lVert\rho\rVert_1/r^3$ remainder for compactly supported
$L^1$ densities, [[lem-em-parameter-integrals]] differentiates under the
integral sign over a compact measurable set and a compact $C^1$ surface,
[[lem-em-joint-smooth-potentials]] upgrades the radial vector and scalar
potentials to joint $C^k$ regularity on star-shaped domains, and
[[lem-em-quadratic-stress-identity]] records the coordinate identities
$\operatorname{div}Q=F\operatorname{div}F-F\times\operatorname{curl}F$ and the
local angular-balance identity used by the momentum and stress items.

All items on this page carry `domain: mathematics`, depend only on
mathematical suppliers, and assert no physical conclusion. Countable Choice is
declared and used exactly where the surface integrals, localization estimates,
dipole remainder, parameter integrals and transport identity require it, as
each item records; the period-average, point-current and algebraic items are
explicitly choice-free or carry their declared hypotheses. The physical
consumers are the classical electromagnetism and special relativity pages,
which use these items as stated mathematical premises under the physics
schema's dependency roles.
