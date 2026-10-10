---
page: em-retarded-fields-and-radiation
title: "Retarded fields and radiation"
status: draft
items: [post-em-radiation-selection, def-em-retarded-point-geometry,
        lem-em-sphere-zonal-moments, pthm-em-retarded-potentials,
        pthm-em-dipole-radiation, pthm-em-lienard-wiechert,
        pthm-em-larmor-nonrelativistic, pthm-em-lienard-emitted-power,
        rem-em-radiation-reaction-limits]
examples: []
---

**Objective.** This page develops the retarded solution of the classical
vacuum model, the fields and radiation of prescribed compact and point
sources, and the honest limits of that radiation model. Everything is
conditional on the stated regularity, compactness, subluminality and choice
hypotheses; no dynamics (self-force, radiation reaction or mass derivation) is
supplied, and no empirical claim is made. The worked examples and the reduced
orbit model live on the companion page
[[em-retarded-fields-and-radiation-examples]].

**Adopted retarded selection.** The sourced wave system admits retarded and
advanced particular solutions and free additions; the framework adopts the
retarded branch with no incoming free field as an extra physical assumption
with arrow-of-time content, not as a consequence of the time-reversible
equations and not as a theorem or measurement
([[post-em-radiation-selection]]). The postulate records the affine freedom
explicitly, excludes the advanced branch and independent free fields, and
extends the same selection to the separately declared weak point-source
equations; existence, regularity and support must be supplied by the theorems
below.

**Kinematic point geometry.** For a prescribed $C^3$ uniformly subluminal
worldline the retarded root $s(x,t)$ with $t-s=|x-z(s)|/c$ exists and is
unique off the worldline, is $C^3$ there, and carries the retarded data
$r,n,\beta,\kappa,\dot\beta$ with derivative formulas $\partial_ts=1/\kappa$
and $\nabla_xs=-n/(c\kappa)$ ([[def-em-retarded-point-geometry]]). The
definition excludes finite-history and merely pointwise subluminal curves; the
companion example exhibits a smooth pointwise subluminal curve with no
retarded root at one event, delimiting the uniform bound
([[ex-em-no-retarded-root-example]]). The zonal and quadratic moments of the
sphere measure used by every angular computation are proved independently as
mathematics ([[lem-em-sphere-zonal-moments]]).

**Compact smooth sources.** For a smooth conserved source of compact spatial
support in a compact time interval, the explicit retarded integrals are
smooth, satisfy the sourced wave equations and, via the continuity equation,
the Lorenz gauge condition; the four smooth Maxwell equations hold, the fields
vanish before the source acts, the pair is the zero-data Cauchy solution at
every earlier time, and the total charge vanishes ([[pthm-em-retarded-potentials]]).

**Dipole radiation and point fields.** The actual leading far fields of the compact
branch are controlled by the shifted current moment $V(n,u)$; replacing it
by the dipole moment's second derivative $p''(u)$ has the explicit absolute
error $D(u)$. The theorem gives the moment identities, uniform field bounds
and retarded-time radiated power with its absolute error ([[pthm-em-dipole-radiation]]). For a
prescribed point charge on a uniformly subluminal worldline the retarded
potentials $C/(\kappa r)$ and $\beta\varphi/c$, the exact velocity/acceleration
field split, $B=n\times E/c$, the velocity-field bound and the uniform
far-zone remainder are established off the worldline; the constructed weak
point-source model satisfies the distributional Maxwell identities of the
declared singular-source class, while no field value on the worldline and no
nonlinear self-interaction is defined ([[pthm-em-lienard-wiechert]]).

**Emitted power.** At an instantaneous-rest emission event the exact field on
the emitted sphere gives the $\sin^2\theta$ angular pattern and the Larmor
power $q^2|a|^2/(6\pi\varepsilon_0c^3)$, with the uniform velocity-field
remainder and a separately quantified general low-speed power and angular
comparison ([[pthm-em-larmor-nonrelativistic]]). For a general emission event
the emitted power per unit emission time is defined by the
$\kappa_0$-weighted far-zone flux and equals
$q^2\gamma_0^6(|a|^2-|\beta_0\times a|^2)/(6\pi\varepsilon_0c^3)
=q^2\eta(A,A)/(6\pi\varepsilon_0c^3)$, with the uniform $\delta$-comparison
against the rest value ([[pthm-em-lienard-emitted-power]]).

**Limits of the model.** For a stationary nonzero point charge the truncated electrostatic self-energy diverges, products of
the singular self-field with the point current are undefined in the declared
distributional source model, and the emitted-power statements are
prescribed-source computations: no self-force, radiation reaction, runaway,
finite-size regularization or electromagnetic mass is supplied here
([[rem-em-radiation-reaction-limits]]). The reduced circular-orbit model on the
companion page retains its formal finite-time collapse strictly as a property
of its adopted premise ([[texp-em-classical-orbit-instability]]), and the
harmonic dipole computation holds inside the exact dipole law with its
explicit finite-radius and flux errors ([[ex-em-dipole-antenna-example]]).
