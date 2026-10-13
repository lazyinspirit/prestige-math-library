---
id: def-cm17-density-and-mass
kind: definition
title: "The density field of the continuum model and the mass of a material subregion"
status: published
origin: session
domain: physics
dependency_level: 10
deps:
  - def-cm17-continuum-body-and-units
  - post-cm17-continuum-kinematic-model
  - def-cm-material-region-and-density
  - def-cm-continuum-motion
  - def-cm01-units
  - def-integral-over-a-measurable-set
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-countable-choice
dependency_roles:
  def-cm17-continuum-body-and-units: formulation-prerequisite
  post-cm17-continuum-kinematic-model: formulation-prerequisite
  def-cm-material-region-and-density: mathematical-premise
  def-cm-continuum-motion: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-integral-over-a-measurable-set: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The density field of a continuum model, its dimensions (mass
  per unit volume), and the model's mass of a material subregion at a given
  time, computed as the Lebesgue integral of the density over the current image
  of the subregion. The definition distinguishes the model field and its
  integral from any measured mass; it asserts no conservation, no positivity law
  of nature and no empirical value."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the
        Mechanics of Solids (MIT, 1988, revised 2020), Sections 1.8 (extensive
        properties and their densities) and 4.2 (mass and its conservation)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September
        1, 2026 complete volume), Sections 7.1 and 8.3 (continuous medium,
        density and velocity fields)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: n/a
---

## Definition

Fix body data $(B,O,I)$ and a motion $\chi$ of the model on $I$ in the sense
of [[post-cm17-continuum-kinematic-model]]; write $\Omega_t=\chi_t(B)$ for the
current regions and, for an open interval $J_0$ with $\overline{J_0}\subseteq
I$, let $\Sigma=\{(t,x):t\in\overline{J_0},\ x\in\chi_t(\overline B)\}$ be the
swept region ([[def-cm-continuum-motion]]).

A **density field of the model** is a function

$$\rho:U\longrightarrow(0,\infty)$$

on an open set $U\subseteq\mathbb R\times\mathbb R^3$ containing the full swept set $\{(t,x):t\in I,\ x\in\chi_t(\overline B)\}$ (and hence $\Sigma$ for every compactly contained $J_0$),
whose physical reading is mass per unit volume: its dimension is
$[\rho]=\mu\ell^{-3}$ ([[def-cm01-units]], [[def-cm17-continuum-body-and-units]]).
The **standing regularity** of the balance items of this page is that $\rho$
is of class $C^1$ on $U$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]);
where a weaker regularity is used it is stated in the item that uses it.
Strict positivity and $C^1$ regularity are part of the field class of this
branch; the mathematical material-region notion that underlies it admits any
nonnegative integrable density ([[def-cm-material-region-and-density]]) and is
used here only to define the mass integral.

A **material subregion** at the level of labels is a nonempty bounded open
$B'\subseteq B$ with $\overline{B'}\subseteq B$
([[def-cm-material-region-and-density]]); the same $\chi$ is a motion of
$B'$. For the Lebesgue mass construction assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]), as in the density/mass part of [[def-cm-material-region-and-density]]; the positive $C^1$ field slot and the open-region predicate themselves require no choice axiom. For $t\in I$ the **model mass of $B'$ at time $t$** is the Lebesgue
integral

$$m(t,B'):=\int_{\chi_t(B')}\rho(t,x)\,dx$$

([[def-integral-over-a-measurable-set]]). Its dimension is $\mu$ and it is a
number computed from the model fields; whether it equals a measured mass is
not asserted here, and a comparison with an observed mass requires an
explicit measurement model, calibration and uncertainty statements that are
not part of this definition.

## Remarks

- **No conservation is asserted.** The definition attaches a number $m(t,B')$
  to the model at each time. That this number is constant in $t$ for every
  material subregion is the separate mass-balance assumption of this page,
  adopted as a postulate and not a consequence of the definitions.

- **Measured density is not the model field.** A measured density is the
  result of a procedure (massing a sample of finite size, imaging, or
  inferring from scattering) with its own resolution, calibration and
  uncertainty. A model density field is defined at every point of the current
  region; identifying the two requires a measurement model and sampling
  assumptions, and the identification is only as good as those assumptions.
  No measured value is recorded by this definition.

- **The velocity field used in the mass integral is the motion's.** The mass
  integral and all later rates of change refer to the current regions
  $\Omega_t$ of the one motion $\chi$; the definition does not introduce a
  second, independently chosen region or velocity.
