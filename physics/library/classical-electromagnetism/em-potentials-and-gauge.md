---
page: em-potentials-and-gauge
title: "Potentials and gauge"
status: draft
items: [pthm-em-spacetime-potentials, def-em-gauge-transformation,
        pthm-em-gauge-invariance, pthm-em-lorenz-gauge-wave-form,
        pthm-em-gauge-reachability]
examples: []
---

**Objective.** This page develops the scalar and vector potentials of the
classical-electromagnetic framework, the gauge freedom that relates them, the
potential form of the Maxwell system, and the declared gauge-reachability
results. Every statement is conditional on the stated regularity, domain and
choice hypotheses; potentials are auxiliary objects and only the field pair
$(E,B)$ is physical content ([[def-em-fields]]).

**Existence of potentials.** On a spatial region that is star-shaped with
respect to a point, every jointly $C^k$ field pair $(E,B)$, $k\ge2$, satisfying
the two source-free Maxwell equations $\operatorname{div}B=0$ and
$\operatorname{curl}E=-\partial_tB$ admits a scalar potential $\varphi$ of
joint class $C^{k-1}$ and a vector potential $A$ of joint class $C^k$ with
$B=\operatorname{curl}A$ and $E=-\nabla\varphi-\partial_tA$, and smooth data
admit smooth potentials; conversely every jointly smooth potential pair satisfies
the two displayed source-free equations ([[pthm-em-spacetime-potentials]]). The radial
construction proves no global potential on a general open region, no boundary
or decay condition, and no uniqueness; the star-shaped hypothesis is
substantive, as the companion examples show
([[em-potentials-and-gauge-examples]]).

**Representations, gauge transformations and conditions.** A potential
representation of a field pair is a potential pair with that field pair; gauge
functions act by
$T_\chi(\varphi,A)=(\varphi-\partial_t\chi,\ A+\nabla\chi)$, a $C^m$ generator
sending a $C^m$ pair to a $C^{m-1}$ pair, and on smooth pairs gauge relatedness
is an equivalence relation with $T_{\chi_1}T_{\chi_2}=T_{\chi_1+\chi_2}$
([[def-em-gauge-transformation]]). The Lorenz condition reads
$G=\operatorname{div}A+c^{-2}\partial_t\varphi=0$ and the Coulomb condition
$\operatorname{div}A=0$; the definition of these conditions asserts nothing
about whether they can be reached. Gauge transformations leave the field pair
unchanged: $E$ and $B$ are gauge invariants of the framework
([[pthm-em-gauge-invariance]]).

**Wave form and reachability.** For a given jointly $C^2$ representation the
exact residual identities
$\operatorname{div}E=W\varphi-\partial_tG$ and
$\operatorname{curl}B-c^{-2}\partial_tE=WA+\nabla G$ hold with
$W=c^{-2}\partial_t^2-\Delta$, so the sourced Maxwell equations are equivalent
to the two residual equations; the gauge shift satisfies
$G(T_\chi(\varphi,A))=G-W\chi$; inside the Lorenz condition $G=0$ the Maxwell
system is equivalent to the decoupled sourced wave equations, and homogeneous
generators $W\chi=0$ change Lorenz pairs without changing their fields
([[pthm-em-lorenz-gauge-wave-form]]). Reachability is a separate PDE
conclusion: on an all-space smooth slab a gauge function with zero Cauchy data
at $t_0$ and $W\chi=G$ exists, carrying countable choice through the wave
supplier, while on a bounded smooth domain a Coulomb-generator exists for
smooth time-dependent Dirichlet data, or for componentwise-compatible smooth
Neumann flux data with a zero-mean normalization, carrying the choice
assumptions of the elliptic supplier; two Lorenz $C^2$ representations of one
field pair on a star-shaped region differ by a gauge generator with $W\chi=0$
([[pthm-em-gauge-reachability]]). That theorem asserts nothing about arbitrary
prescribed boundary or initial restrictions, about a global Lorenz gauge on a
bounded domain with prescribed data, or about the observability of the
instantaneous Coulomb potential.

Worked examples of the topological obstructions to global potentials, of
nonzero pure-gauge representatives of the zero field pair, and of a
homogeneous-wave residual generator are collected on the companion page
[[em-potentials-and-gauge-examples]].
