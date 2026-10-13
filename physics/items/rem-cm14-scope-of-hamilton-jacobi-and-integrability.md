---
id: rem-cm14-scope-of-hamilton-jacobi-and-integrability
kind: remark
title: "Scope of the Hamilton-Jacobi and integrability statements: locality, the fibre hypotheses, global obstructions and the frequency conventions"
status: published
origin: pipeline
domain: physics
dependency_level: 28
deps: [def-cm12-hamiltonian, def-cm14-hamilton-jacobi-equation, def-cm14-complete-integral, def-cm14-involution, def-cm14-complete-integrability, pthm-cm14-hamilton-jacobi-characteristics, pthm-cm14-regular-tori, pthm-cm14-action-angle, pthm-cm14-adiabatic-invariance, def-cm13-canonical-form, def-action-and-angle-coordinates, def-countable-choice, cor-cm-action-angle-radian-scaling, rem-cm-scope-of-complete-integrability-and-action-angle, prop-period-lattice-monodromy-obstructs-global-action-angle-coordinates, fs-liouville-arnold-gives-global-action-angle-coordinates-on-the-entire-manifold, def-cm-parameter-dependent-action-angle-branch]
dependency_roles:
  def-cm12-hamiltonian: formulation-prerequisite
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
  fs-liouville-arnold-gives-global-action-angle-coordinates-on-the-entire-manifold: mathematical-premise
  def-cm-parameter-dependent-action-angle-branch: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The recorded scope of the Hamilton-Jacobi and integrability items of this page: the local character of the Hamilton-Jacobi construction and of its no-caustic hypothesis; the separate requirements of involution and independence in complete integrability; the compactness, connectedness, regularity and proper-submersion hypotheses of the torus and action-angle conclusions together with their Countable-Choice assumption; the published monodromy obstruction to global action-angle coordinates; and the period-one versus radian frequency convention. The remark asserts no new mathematical claim and no empirical content; it is a scope record for the conditional deductions of this page."
sources:
  references:
    - title: "N. Martynchuk, H. W. Broer and K. Efstathiou, Hamiltonian Monodromy and Morse Theory, Section 3.1, pp. 7-11: the spherical-pendulum monodromy calculation; Appendix A: transport of integer fibre cycles"
      url: "https://arxiv.org/pdf/1901.00705"
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
Hamiltonian of [[def-cm12-hamiltonian]]; changing the chart or the potential representative changes the equation by
the recorded rules; the inverse Legendre map is unique on each fixed hyperregular chart. Thus the equation is part of the datum and not an
intrinsic object of the model. [[def-cm14-complete-integral]] requires the
nondegeneracy $\det S_{q\alpha}\ne0$ at the base point only, and
[[pthm-cm14-hamilton-jacobi-characteristics]] concludes only what that
nondegeneracy and the local theory give: characteristic curves near the
base point, the constancy of the Jacobi constants along them, a local
converse and local canonical labels $(\beta,\alpha)$. No solution is
extended across a conjugate time or a caustic; the nondegeneracy hypothesis alone supplies no conclusion at excluded
points. The companion harmonic example exhibits refocusing at conjugate
times, where the mixed derivative is unbounded and the label-to-position
derivative vanishes. Its Kepler example separately concerns simple
turning points of a radial action integral.
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
linear Hamiltonian motion on the tori, under the same hypotheses;
identification with Cartesian model motions additionally uses $d\equiv0$; for a generalized-coordinate immersion the Hamiltonian curves correspond to the substituted Lagrange equations, and identifying them with ambient motions requires the additional reconstruction hypotheses. Compactness cannot
be dropped (a free-particle regular level is a noncompact manifold, not a
torus), regularity cannot be dropped (the zero level of the isotropic
oscillator is a point), and the conclusions are local over a ball of
regular values — no global product structure or single-valued global
action-angle chart is asserted.

Global action-angle coordinates can genuinely fail even for completely
integrable Hamiltonian data on a connected regular region with compact
connected fibres. The two published mathematical suppliers have distinct
roles. [[prop-period-lattice-monodromy-obstructs-global-action-angle-coordinates]]
gives the conditional obstruction: transporting an ordered integer basis
of the period lattice around a base loop yields an invertible integer
matrix, and a nonidentity matrix rules out a global action-angle system.
That implication alone does not exhibit nontrivial transport.

The witness is the regular torus bundle in the refutation of
[[fs-liouville-arnold-gives-global-action-angle-coordinates-on-the-entire-manifold]].
Its spherical-pendulum datum, in the source's dimensionless mathematical
normalization, is the smooth map $F=(H,J):T^*S^2\to\mathbb R^2$, where
$T^*S^2=\{(q,p)\in\mathbb R^3\times\mathbb R^3:|q|^2=1,\ q\cdot p=0\}$
(identifying cotangent vectors using the Euclidean inner product), with
the restriction of $dx\wedge dp_x+dy\wedge dp_y+dz\wedge dp_z$,
$q=(x,y,z)$, $H(q,p)=|p|^2/2+z$ and $J(q,p)=xp_y-yp_x$.
Over a sufficiently small punctured disk $B$ about the excluded value
$(H,J)=(1,0)$, $F^{-1}(B)$ is connected and all fibres are regular
compact connected two-tori. Section 3.1 of Martynchuk--Broer--Efstathiou
computes transport around the puncture as
$\begin{pmatrix}1&1\\0&1\end{pmatrix}$ in its chosen cycle basis;
the published refutation uses this nonidentity transport and the
obstruction to exclude global action-angle coordinates there.
This records a mathematical global counterexample, without identifying
its whole cotangent bundle with one momentum chart of this page's force
presentation or asserting an empirical pendulum observation. The
local-over-a-ball conclusions remain intact.

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
fixed canonical chart for the parameter-dependent Hamiltonian,
with $C^2$ data on open extension domains and $|\partial_{I}h|\ge\omega_{0}$
and on the trapping of the solution in the compact chart region; it gives
an order-$\varepsilon$ drift bound on the $O(1/\varepsilon)$ horizon and
no exact invariance. Parameter paths that leave the chart, cross a
separatrix or make the frequency vanish are outside the statement, as are
the averaged statements of the sources, which the in-run mathematics
[[def-cm-parameter-dependent-action-angle-branch]] and the drift theorem
replace by an exact chain-rule estimate, with the source limitations
[[rem-cm-scope-of-complete-integrability-and-action-angle]] recorded.

## Empirical status

The definitions stipulate datum classes and conventions relative to the
adopted presentation. The physics theorems establish conditional
deductions from the adopted postulates, declared hypotheses and cited
mathematics; remarks record their scope. None of these items reports an
empirical observation. No item
reports a measurement, attaches a measured value to a model parameter or
compares a prediction with data. Where the sources motivate the
statements by physical examples (oscillators, Kepler motion, adiabatic
transport), the page treats those examples as model instances, and any
quantitative use of a parameter value would be an empirical premise with
its own conditions and uncertainty, to be recorded when such a use is
made.
