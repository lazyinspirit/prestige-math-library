---
id: rem-cm14-scope-of-hamilton-jacobi-and-integrability
kind: remark
title: "Scope of the Hamilton-Jacobi and integrability statements: locality, the fibre hypotheses, global obstructions and the frequency conventions"
status: draft
origin: pipeline
domain: physics
dependency_level: 28
deps: [def-cm14-hamilton-jacobi-equation, def-cm14-complete-integral, def-cm14-involution, def-cm14-complete-integrability, pthm-cm14-hamilton-jacobi-characteristics, pthm-cm14-regular-tori, pthm-cm14-action-angle, pthm-cm14-adiabatic-invariance, def-cm13-canonical-form, def-action-and-angle-coordinates, def-countable-choice, cor-cm-action-angle-radian-scaling, rem-cm-scope-of-complete-integrability-and-action-angle, prop-period-lattice-monodromy-obstructs-global-action-angle-coordinates, def-cm-parameter-dependent-action-angle-branch]
dependency_roles:
  def-cm14-hamilton-jacobi-equation: formulation-prerequisite
  def-cm14-complete-integral: formulation-prerequisite
  def-cm14-involution: formulation-prerequisite
  def-cm14-complete-integrability: formulation-prerequisite
  pthm-cm14-hamilton-jacobi-characteristics: physical-result
  pthm-cm14-regular-tori: physical-result
  pthm-cm14-action-angle: physical-result
  pthm-cm14-adiabatic-invariance: physical-result
  def-cm13-canonical-form: formulation-prerequisite
  def-action-and-angle-coordinates: mathematical-premise
  def-countable-choice: mathematical-premise
  cor-cm-action-angle-radian-scaling: mathematical-premise
  rem-cm-scope-of-complete-integrability-and-action-angle: mathematical-premise
  prop-period-lattice-monodromy-obstructs-global-action-angle-coordinates: mathematical-premise
  def-cm-parameter-dependent-action-angle-branch: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The recorded scope of the Hamilton-Jacobi and integrability items of this page: the local character of the Hamilton-Jacobi construction and of its no-caustic hypothesis; the separate requirements of involution and independence in complete integrability; the compactness, connectedness, regularity and proper-submersion hypotheses of the torus and action-angle conclusions together with their Countable-Choice assumption; the published monodromy obstruction to global action-angle coordinates; and the period-one versus radian frequency convention. The remark asserts no new mathematical claim and no empirical content; it is a scope record for the conditional deductions of this page."
sources:
  references:
    - title: "Ana Cannas da Silva, Lectures on Symplectic Geometry (revised January 2006), Lecture 18, pp. 109-111 and the discussion of local action-angle coordinates over a base"
      url: "https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf"
    - title: "Eckhard Meinrenken, Symplectic Geometry (University of Toronto lecture notes), Chapter 6, Sections 6.1-6.3, pp. 66-75: regular fibres, period lattices, tori and the local construction of action-angle coordinates"
      url: "https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Sections 10.2-10.4, chapter pages 5-14 (PDF pages 241-250): the source's adiabatic, action-angle and Hamilton-Jacobi treatment, in which the canonicality of the action-angle transformation is deferred to Landau-Lifshitz and stricter proofs of the adiabatic result are referred to the literature"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.5-4.7, printed pages 105-126 (PDF pages 111-132): the sources' action-angle, adiabatic and Hamilton-Jacobi treatment, in which Liouville integrability is referred to Arnold and the adiabatic proof to Wells-Siklos"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---
## Scope of the Hamilton-Jacobi statements

All Hamilton-Jacobi statements of this page are local by construction.
[[def-cm14-hamilton-jacobi-equation]] fixes the equation attached to one
declared momentum chart of one potential presentation, with the branch
Hamiltonian of [[def-cm12-hamiltonian]]; changing the chart, the inverse
Legendre branch or the potential representative changes the equation by
the recorded rules, so the equation is part of the datum and not an
intrinsic object of the model. [[def-cm14-complete-integral]] requires the
nondegeneracy $\det S_{q\alpha}\ne0$ at the base point only, and
[[pthm-cm14-hamilton-jacobi-characteristics]] concludes only what that
nondegeneracy and the local theory give: characteristic curves near the
base point, the constancy of the Jacobi constants along them, a local
converse and local canonical labels $(\beta,\alpha)$. No solution is
extended across a conjugate time or a caustic; at such points the family
of characteristics focuses and the mixed derivative degenerates. The
companion page verifies the degeneration at the turning points of a
one-dimensional family and at the conjugate time of the harmonic model.
In particular the page claims no global Hamilton-Jacobi solution, no
uniqueness of the family and no global existence of the endpoint action.

## Scope of the integrability statements

[[def-cm14-involution]] and [[def-cm14-complete-integrability]] define the
model properties and the datum. Two features are essential and logically
separate: the members of the datum must be in involution, and their
differentials must be independent on the regular locus; neither condition
implies the other. The striking conclusions are conditional on strictly
more than involution and independence:
[[pthm-cm14-regular-tori]] requires a regular value with nonempty compact
connected fibre and a saturated neighbourhood on which the integral map
is a proper submersion with connected fibres, and it consumes the Axiom
of Countable Choice through the published lattice lemma, as its statement
records; [[pthm-cm14-action-angle]] additionally produces the period-one
action-angle coordinates of [[def-action-and-angle-coordinates]] and the
linear motion on the tori, under the same hypotheses. Compactness cannot
be dropped (a free-particle regular level is a noncompact manifold, not a
torus), regularity cannot be dropped (the zero level of the isotropic
oscillator is a point), and the conclusions are local over a ball of
regular values — no global product structure or single-valued global
action-angle chart is asserted.

Global action-angle coordinates can genuinely fail even for completely
integrable data on a connected phase domain with only regular compact
fibres: the period lattice can have nontrivial monodromy around the base,
which obstructs global single-valued action coordinates. This is the
content of the published mathematical obstruction
[[prop-period-lattice-monodromy-obstructs-global-action-angle-coordinates]];
the corresponding false global statement is refuted by that mathematics,
and this page never claims a global toral chart.

## Conventions and frequency bookkeeping

The angles of [[def-action-and-angle-coordinates]] and of
[[pthm-cm14-action-angle]] are period-one, with
$\omega=\sum_{i}d\theta_{i}\wedge dI_{i}$ and action coordinates of
dimension $\mu\ell^{2}\tau^{-1}$; the numbers
$\partial h/\partial I_{i}$ are then frequencies in cycles per unit time,
not angular rates. The radian convention is recovered by the explicit
rescaling $\theta^{\mathrm{rad}}=2\pi\theta$,
$I^{\mathrm{rad}}=I/(2\pi)$ of [[cor-cm-action-angle-radian-scaling]],
under which the form is unchanged and the angular rates are twice
$\pi$ times the cyclic frequencies; the two conventions are never mixed
in this page. The sources use the radian action $J=\frac1{2\pi}\oint
p\,dq$; the period-one action of a mechanical one-degree-of-freedom model
is its $2\pi$-multiple, a convention recorded in the companion examples.

## Status of the adiabatic statement

[[pthm-cm14-adiabatic-invariance]] is conditional on a uniform
parameter-dependent action-angle chart with $|\partial_{I}h|\ge\omega_{0}$
and on the trapping of the solution in the compact chart region; it gives
an order-$\varepsilon$ drift bound on the $O(1/\varepsilon)$ horizon and
no exact invariance. Parameter paths that leave the chart, cross a
separatrix or make the frequency vanish are outside the statement, as are
the averaged statements of the sources, which the in-run mathematics
[[def-cm-parameter-dependent-action-angle-branch]] and the drift theorem
replace by an exact chain-rule estimate, with the source limitations
[[rem-cm-scope-of-complete-integrability-and-action-angle]] recorded.

## Empirical status

Every item of this page is a conditional deduction from the adopted
postulates and the declared presentation of the framework's force branch,
with the cited mathematics; none of them is an empirical claim. No item
reports a measurement, attaches a measured value to a model parameter or
compares a prediction with data. Where the sources motivate the
statements by physical examples (oscillators, Kepler motion, adiabatic
transport), the page treats those examples as model instances, and any
quantitative use of a parameter value would be an empirical premise with
its own conditions and uncertainty, to be recorded when such a use is
made.
