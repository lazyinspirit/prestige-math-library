---
id: post-cm17-mass-balance
kind: postulate
title: "Adopted mass balance: the mass of every material subregion is constant
  in time"
status: draft
origin: session
domain: physics
dependency_level: 11
deps:
  - post-cm17-continuum-kinematic-model
  - def-cm17-density-and-mass
  - def-cm-material-region-and-density
  - def-cm-continuum-motion
  - def-interval
  - def-countable-choice
dependency_roles:
  post-cm17-continuum-kinematic-model: formulation-prerequisite
  def-cm17-density-and-mass: formulation-prerequisite
  def-cm-material-region-and-density: mathematical-premise
  def-cm-continuum-motion: mathematical-premise
  def-interval: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of mass conservation for a closed continuum model: for
  every material subregion and every time in the window, the model mass integral
  over the current image of the subregion is constant. The postulate excludes
  open systems, diffusion or exchange of material between labels, chemical
  reactions, phase change and mass sources; it asserts no empirical law and no
  measured value, and the local continuity equation is a theorem conditional on
  it."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the
        Mechanics of Solids (MIT, 1988, revised 2020), Section 4.2 (the
        principle of conservation of mass and its local form)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September
        1, 2026 complete volume), Section 8.3 (continuity equation of a
        continuum)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: n/a
---

## Postulate

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the general Lebesgue mass integrals of [[def-cm17-density-and-mass]]; this qualifies the mathematical mass construction, not the choice-free kinematics.

Adopt the following assumption for every model of the continuum kinematic
branch of [[post-cm17-continuum-kinematic-model]] with density field of
[[def-cm17-density-and-mass]].

**(i) Mass balance.** Let $\chi$ be a motion of the model on the time window
$I$, let $J_0\subseteq I$ be an open interval with $\overline{J_0}\subseteq I$,
and let $B'\subseteq B$ be a material subregion (nonempty bounded open with
$\overline{B'}\subseteq B$). Then the model mass of $B'$,

$$m(t,B')=\int_{\chi_t(B')}\rho(t,x)\,dx\qquad(t\in J_0),$$

is constant in $t$:

$$\frac{d}{dt}\int_{\chi_t(B')}\rho(t,x)\,dx=0\qquad(t\in J_0). \tag{CM}$$

The assumption is imposed for **every** material subregion and every time in
the window; the family of subregions is not restricted to a selected finite
list.

**(ii) Reading and exclusions.** The assumption says that a label carries its
matter permanently: the material of the body is a closed mechanical system
during the motion. It is **not** adopted, and no statement of this page
covers: open systems in which material is added to or removed from the body;
diffusion, mixing or relative transport of distinct constituents between
labels; chemical reactions, phase change or mass exchange between
constituents; mass sources or sinks distributed in the body; and relativistic
mass-energy conversion. In such situations the balance above can fail and a
different balance with source terms is required.

**(iii) Empirical status.** The assumption is the classical conservation of
mass, adopted here as model structure. Comparisons of predictions with
observed masses of prepared closed systems can support it under stated
apparatus and calibration assumptions; such comparisons are evidence about
the combined model and apparatus, not a deductive proof of the principle, and
no measurement is asserted or used by this postulate.

**(iv) Status of the consequences.** The local continuity equation derived on
this page is a conditional theorem: it follows from (CM) together with the
declared regularity of the fields and the transport identity of the kinematic
branch. If (CM) is replaced by a balance with sources, the local equation
acquires the corresponding source terms and none of the present deductions
applies unchanged.
