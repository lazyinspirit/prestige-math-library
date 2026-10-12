---
id: rem-cm06-dalembert-vakonomic-distinction
kind: remark
title: "The d'Alembert and vakonomic prescriptions are different models: what is proved, what is adopted, and which questions are open"
status: draft
origin: session
domain: physics
dependency_level: 11
deps: [def-cm06-holonomic-constraint-model, def-cm06-nonholonomic-model, post-cm06-ideal-reaction-law, def-cm-nonholonomic-velocity-constraint-law, cex-cm-dalembert-and-vakonomic-evolutions-differ, prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets, def-cm01-units]
dependency_roles:
  def-cm06-holonomic-constraint-model: formulation-prerequisite
  def-cm06-nonholonomic-model: formulation-prerequisite
  post-cm06-ideal-reaction-law: physical-assumption
  def-cm-nonholonomic-velocity-constraint-law: mathematical-premise
  cex-cm-dalembert-and-vakonomic-evolutions-differ: mathematical-premise
  prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Scope remark distinguishing the two prescriptions for a velocity-constrained model: the d'Alembert (Chetaev, frozen-kernel) law adopted by this framework's nonholonomic models and the vakonomic (stationary augmented action) prescription, with the proved non-inclusion of the d'Alembert solution set in the vakonomic solution set for one specified z'=xy' initial datum, the exclusion of silent constraint substitution, and the open questions of rank and contact changes, rolling models and empirical adequacy. The remark asserts no measured value and no experimental comparison."
sources:
  references:
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 1.10.3: the explicit statement that d'Alembert's ideal constraint forces do not generally equal the equations obtained by adding lambda times the constraint to an unconstrained variational action"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "J. Cortes, M. de Leon, D. Martin de Diego and S. Martinez, Geometric description of vakonomic and nonholonomic dynamics. Comparison of solutions (SIAM J. Control Optim., author PDF), Sections 2 and 5: the vakonomic problem and the Chetaev/d'Alembert equations for the same linear constraint, and the comparison of their solutions"
      url: "http://terrano.ucsd.edu/jorge/publications/data/2003_CoLeMaMa-sicon.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 5.7 and 6.9: constrained variational systems, the straight-rolling exception, and applications involving non-holonomic constraints with the warning about variational substitutions"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.3.2, printed pages 20-21 (PDF pages 26-27): velocity-dependent constraints that cannot be integrated, the rolling coin, and the statement that no general method covers them"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), printed page 25 (PDF page 28): a nonintegrable velocity constraint uses d'Alembert dynamics, and unconstrained stationary action with the velocity constraint inserted is a different problem"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: n/a
---

## The two prescriptions

For a velocity-constraint datum $(O_{v},k',A,b)$ of
[[def-cm06-nonholonomic-model]] the framework's model is the **d'Alembert
model**: admissible curves satisfy $Ax'+b=0$, and the reaction is the ideal
(Chetaev) reaction, annihilating the frozen virtual displacements
$\ker A(t,x(t))$ at each instant, equivalently $R=A^{\mathsf T}\mu$ for a
unique multiplier. The **vakonomic** prescription of
[[def-cm-nonholonomic-velocity-constraint-law]] is a different construction:
one forms the augmented functional
$$\Phi(q,\eta)=\int_{a}^{b}\Bigl[\tfrac12|q'|^{2}+\eta\,(z'-xy')\Bigr]dt$$
for the sample constraint $z'=xy'$ and a multiplier function $\eta$, and asks
for pairs $(q,\eta)$ stationary under variations of both the curve and the
multiplier. The two prescriptions are definitions of two different laws for
the same constraint; neither is a theorem about the other, and the framework
adopts the d'Alembert one for its nonholonomic models.

## What is proved

For the constraint $z'=xy'$ with unit mass, zero applied force and initial
data $(x,y,z)(0)=(0,0,0)$, $(x',y',z')(0)=(1,1,0)$,
[[cex-cm-dalembert-and-vakonomic-evolutions-differ]] proves that the unique
d'Alembert motion is not a vakonomic motion with those data. Thus the set of
d'Alembert motions with this initial datum is not a subset of the vakonomic
motions with the same datum, so the two solution sets are unequal; the
counterexample does not assert that a vakonomic motion with these data exists.
Its contradiction follows because the exhibited d'Alembert trajectory has
$x''=0$, which would force the vakonomic multiplier $\eta$ to vanish on an
interval and then force $y''=0$, contrary to its explicit formula. The same
constraint is genuinely nonholonomic in the sense of
clause (d) of [[def-cm06-nonholonomic-model]]:
[[prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets]] proves
that its distribution is not tangent to the level sets of any $C^{2}$ function
with nonvanishing differential. The conclusions are mathematical statements
about the two prescriptions; they are read into this page's model through the
definitions, with the model's status and exclusions of clause (e) carried
along.

## What is adopted, and what is not claimed

The ideal (d'Alembert) condition for the holonomic branch is the adopted
postulate [[post-cm06-ideal-reaction-law]], and the corresponding ideal
condition for velocity constraints is built into the definition of the
d'Alembert model. In particular, no variational principle is claimed for the
nonholonomic models of this page: inserting the velocity constraint into a
Lagrangian and varying without constraint is the vakonomic construction and
generally produces different equations, and substituting the constraint into
the kinetic energy of a constrained system is justified only in the
holonomic-equivalent case, where the substitution parametrizes the position
locus rather than imposing a velocity law. The sources record both warnings
(SICM §1.10.3; Stewart, printed page 25; Cline §§5.7 and 6.9; Cortes et al.).

## Scope and open questions

The following are outside this page and remain open here: the behaviour of
either prescription at a point where the rank of $A$ drops; unilateral
constraints and contact-mode changes (a body that leaves a surface or begins
to slip), which require mode-change models with impact or friction laws; the
determination of which prescription describes a given physical mechanism; and
the quantitative comparison of either model with reported observations.
Rolling is a family of models rather than one model: the planar no-slip law
used on the companion page is holonomic-equivalent, and the straight-rolling
exception is noted in the sources. Tong's cited example is the specific coin
of radius $R$ rolling without slipping down a slope, with coordinates
$(x,y,\theta,\phi)$ and constraints $x'=R\phi'\sin\theta$,
$y'=R\phi'\cos\theta$ (Section 2.3.2, Eq. (2.41)); it is reported there as
nonholonomic. This remark asserts no classification of all three-dimensional
rolling models and supplies no local proof for Tong's example. Friction,
rolling resistance, material deformation and the ability of a contact to
supply the required reaction are application-level premises; no measured
value and no empirical adequacy claim is made by any item of this page.
