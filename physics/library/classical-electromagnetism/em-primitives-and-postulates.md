---
page: em-primitives-and-postulates
title: "Primitives and postulates"
status: draft
items: [def-em-lab-geometry, def-em-si-conventions, def-em-fields,
        post-em-minkowski-physical-model, def-em-relativistic-worldlines-frames,
        def-em-sources, def-em-electromagnetic-tensor, post-em-vacuum-maxwell,
        pthm-em-linear-superposition, post-em-lorentz-coupling]
examples: []
---

**Objective.** This page opens the classical-electromagnetism track. It fixes
the framework's laboratory description and its SI conventions, defines the
sources and the electric and magnetic fields, and adopts the three physical
postulates on which the rest of the track is built: the Minkowski physical
model, the microscopic vacuum Maxwell equations, and the Lorentz coupling.
The only derived result on the page is the superposition theorem for prescribed
Maxwell fields and sources.

**The laboratory frame.** The framework works in one named inertial frame of
flat Minkowski spacetime. A restricted inertial chart identifies a laboratory
region $U$ with a product $I\times\Omega$ of a time interval and a spatial
region, and decomposes events into a laboratory time $t$ and a position $r$; at
fixed time a laboratory field of rank $m$ is a map $\Omega\to\mathbb R^m$ read
in the frame's orthonormal spatial basis ([[def-em-lab-geometry]]). The
construction is a coordinate identification inside the single frame: it is not
a Galilean transformation, it compares no two frames, and no observer
congruence is defined by it. The SI quantity and unit table, the exact defining
values of $c$ and $e$, the measured status of $\mu_0$ and the framework's
definition $\varepsilon_0=(\mu_0c^2)^{-1}$ are recorded at
[[def-em-si-conventions]]; units are bookkeeping and are explicitly not
evidence that a quantity is primitive.

**Spacetime, particles and observers.** The adopted physical reading of the
mathematical affine Minkowski model, the inertial descriptions, the ideal
clock and light assumptions with the same constant $c$, and the laboratory
description are the content of [[post-em-minkowski-physical-model]]; the model
is assumed and proves no field equation. Massive worldlines are future
timelike $C^k$ curves with everywhere nonzero tangent, ideal vacuum light rays follow future
null straight lines with regular $C^1$ parametrizations, and four-velocity and four-acceleration are those of the
special-relativity suppliers, with $\eta(U,U)=-c^2$ and $\eta(U,A)=0$
([[def-em-relativistic-worldlines-frames]]). Inertial frames, charts, point
observers ($n^\perp$ and rest projection $h$), observer congruences and tetrad
fields are explicitly defined and kept as distinct notions.

**Sources.** The framework takes a real charge parameter $q$, smooth frame
densities $(\rho,J)$ with the compact Jordan and bounded Lebesgue-measurable
volume-charge branches and oriented current flux, the adopted identification
$j=(c\rho,J)$ of the charge-current with a vector field of the spacetime model,
and the factorization $j=\rho_0U$ with its exact equality cases
([[def-em-sources]]). The definition asserts no conservation law, and point or
sheet sources are excluded: they are different objects with their own
distributional pairings.

**Fields and the vacuum equations.** The electric and magnetic fields are
fixed-time spatial vector fields $E,B:\Omega\times I\to\mathbb R^3$ with an
explicit regularity class, $E$ polar and $B$ axial, carrying V/m and T, and
defined without any value on singular source support
([[def-em-fields]]). The electromagnetic two-form is defined by its components
$F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$ in the named chart, with its
observer decomposition, its invariants, its potential representation when a
$C^1$ potential exists (with the weak closedness computation), and the
raised-index operator coupling $F$ to the four-current
([[def-em-electromagnetic-tensor]]). The microscopic vacuum Maxwell equations
are adopted in a smooth branch for jointly $C^1$ fields and a weak
distributional branch for locally integrable fields and sources, with no
magnetic charge and with point and sheet sources explicitly outside both
branches ([[post-em-vacuum-maxwell]]). Because the four equations are linear in
the fields and sources, finite linear combinations of field-source pairs obeying
one and the same branch obey that branch with the combined sources; no
nonlinear constitutive law and no infinite superposition is covered
([[pthm-em-linear-superposition]]).

**Coupling to matter.** On the particle model of [[post-em-minkowski-physical-model]]
the framework adopts the covariant equation of motion
$m\,dU/d\tau=q\,\Phi(U)$ for a constant charge $q$, an externally supplied rest
mass $m>0$, a future timelike $C^2$ worldline and a prescribed $C^1$ external
field, excluding the particle's own field; for a matter model to which the
coupling applies it adopts the force density $\rho E+J\times B$ and the power
density $J\cdot E$ ([[post-em-lorentz-coupling]]). The rest mass and charge are
inputs, no self-force or radiation reaction is included, and the nonrelativistic
coordinate law is not adopted as exact. Worked comparisons and dimensional
checks are collected on the companion examples page
[[em-primitives-and-postulates-examples]].
