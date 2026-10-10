---
page: em-action-and-variational-formulation
title: "Alternative action formulation"
status: draft
items: [def-em-field-action-definition,
        post-em-stationary-action-model,
        pthm-em-action-maxwell-variation,
        pthm-em-action-gauge-source-compatibility,
        pthm-em-particle-action-coupling]
examples: []
---

**Objective.** This page presents the action formulation of classical
electromagnetism as an alternative to postulating the field equations and the
force law directly, and it proves exactly what that formulation is equivalent
to on the declared smooth classes. It is the terminal formulation page of the
classical-electromagnetism track: it consumes the covariant tensor dictionary
and the four-force interface of the Lorentz-covariant formulation, and its
items are conditional deductions, not empirical claims.

**The two functionals.** The field action is
$S[A]=c^{-1}\int_U\bigl[-(4\mu_0)^{-1}F_{\mu\nu}F^{\mu\nu}+j^\nu A_\nu\bigr]d\lambda$
on a bounded chart region $U$ with smooth prescribed four-current $j$ and
smooth four-potential $A$ on an open neighbourhood of the closure, with
compactly supported smooth field variations; the particle functional is
$-mc\int\sqrt{-\eta(\dot X,\dot X)}\,ds+q\int A_\mu(X)\dot X^\mu\,ds$ on $C^2$
future timelike massive worldlines with fixed-endpoint $C^2$ variations
([[def-em-field-action-definition]]). The definition fixes the variation
classes, states the finiteness and the units, identifies the field action with
the mathematical quadratic functional at $\kappa=\mu_0$, $J=j$, and excludes
existence, boundary conditions, unbounded regions, singular sources and any
coupled particle-field action. The field sector inherits the Countable Choice
convention of its measure suppliers; the particle sector is a finite-interval
Riemann calculation and is choice-free.

**The adopted principle.** One item adopts stationarity of the two functionals
under the declared variations as the formulation principle of the model
([[post-em-stationary-action-model]]). It is an adopted assumption, not a
theorem, not a derivation from the remaining postulates and not an empirical
result: it asserts stationarity only, and explicitly not minimality,
existence, uniqueness, symmetry-forcing, uniqueness of the action or coupling
of the sectors. The sources present the principle in the same adopted spirit.

**Field equivalence.** Stationarity of the field action under all compactly
supported smooth variations is equivalent to the inhomogeneous tensor
equation $\partial_\mu F^{\mu\nu}=-\mu_0j^\nu$; consequently, for the
represented field pair and source, the four smooth-branch Maxwell equations
hold: the inhomogeneous pair from the variation, the homogeneous pair from
the closedness of $F=dA$ with commuting mixed partials
([[pthm-em-action-maxwell-variation]]). The equivalence is exactly the
physical reading of the compact-variation lemma
([[lem-em-compact-field-variation]]) at $\kappa=\mu_0$, $J=j$; existence of
stationary fields, boundary and decay conditions, weak and distributional
branches, singular sources and non-potential-represented fields are all
excluded from the statement.

**Gauge and source compatibility.** Under a compactly supported smooth gauge
parameter $\chi$, the field term is unchanged and the action difference is
exactly $c^{-1}\int_Uj^\mu\partial_\mu\chi\,d\lambda$, with no boundary term;
for smooth prescribed sources, invariance under all compact gauge variations
is equivalent to the conservation of the four-current, the converse following
from the fundamental variation lemma ([[pthm-em-action-gauge-source-compatibility]]).
The Maxwell-compatible instantiation runs through the smooth branch of charge
continuity, and a distributional reading of the pairing is recorded for
distributions as a statement about the pairing only, with no products of
distributions and with the smooth source retained whenever the functional
itself is used.

**Particle equivalence.** Fixed-endpoint stationarity of the particle
functional in a prescribed $C^2$ external potential is equivalent to the
covariant equation $m\,dU_\nu/d\tau=qF_{\nu\mu}U^\mu$ and to the framework's
adopted four-force equation $m\,dU/d\tau=q\,\Phi(U)$, with the coordinate
force and power laws then holding wherever the laboratory reading is $C^2$
([[pthm-em-particle-action-coupling]]). The deduction is the framework
identification of the in-run finite-interval curve-variation lemma; the
particle's own field, radiation reaction, self-force, monopoles, zero or
variable mass, coupled existence and trajectory approximation are excluded.


The textbook treatments cited on the items supply the formulation structure,
the variation and gauge computations and the particle-action dictionary, in
their own signatures and normalisations; every sign, constant and hypothesis
is rederived here in the framework's $(-,+,+,+)$, SI dictionary, and the
measure, distribution and calculus prerequisites are the cited published
mathematical items.
