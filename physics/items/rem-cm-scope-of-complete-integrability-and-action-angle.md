---
id: rem-cm-scope-of-complete-integrability-and-action-angle
kind: remark
title: "Scope of the action-angle and complete-integrability items: hypotheses, choice, singular and noncompact fibres, and the published proof gap"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [thm-cm-liouville-arnold-action-angle-repaired, lem-cm-closed-two-form-radial-primitive, cor-cm-action-angle-radian-scaling, def-completely-integrable-hamiltonian-system, def-action-and-angle-coordinates, lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice, thm-compact-connected-regular-fibres-are-tori, prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action, cor-motion-of-a-completely-integrable-hamiltonian-is-linear-on-invariant-tori]
dependency_roles:
  thm-cm-liouville-arnold-action-angle-repaired: mathematical-premise
  lem-cm-closed-two-form-radial-primitive: mathematical-premise
  cor-cm-action-angle-radian-scaling: mathematical-premise
  def-completely-integrable-hamiltonian-system: mathematical-premise
  def-action-and-angle-coordinates: mathematical-premise
  lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice: mathematical-premise
  thm-compact-connected-regular-fibres-are-tori: mathematical-premise
  prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action: mathematical-premise
  cor-motion-of-a-completely-integrable-hamiltonian-is-linear-on-invariant-tori: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ana Cannas da Silva, Lectures on Symplectic Geometry, revised January 2006, Lecture 18, pp. 110-111 (regular values, lagrangian fibres, and the two-part statement of the Arnold-Liouville theorem)"
      url: "https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf"
    - title: "Eckhard Meinrenken, Symplectic Geometry, Chapter 6, sections 6.1-6.3, pp. 66-75 (the local action-angle theorem and its hypotheses)"
      url: "https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf"
verification:
  precheck: n/a
---

## Remarks

- **Hypotheses actually used.** [[thm-cm-liouville-arnold-action-angle-repaired]] assumes
  $\mathrm{AC}_\omega$, an involutive system of $n$ independent smooth integrals, a compact
  *connected* regular fibre, and a saturated neighbourhood over a ball of regular values on which
  the integral map is a *proper submersion with connected fibres*. Compactness supplies complete
  flows on the fibre (through
  [[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]]); connectedness makes the
  orbit of the abelian action all of the fibre; properness keeps the nearby fibres compact and the
  period structure locally uniform; and $\mathrm{AC}_\omega$ enters only in the counterexample
  sequence of step 4.1. None of these conclusions follows from independence alone.
- **What is not claimed.** No statement is made about singular fibres, about noncompact or
  disconnected fibres, or about a global action-angle chart on all of $M$; the theorem is local over
  a shrunken ball of regular values, in accordance with
  [[def-completely-integrable-hamiltonian-system]] and [[def-action-and-angle-coordinates]]. A
  uniform parameter-dependent action-angle chart, as used by adiabatic estimates, is an additional
  hypothesis and is not a consequence of one fibre's chart.
- **The published proof gap and the local repair.**
  [[thm-liouville-arnold-action-angle-theorem]] states the same conclusion. Its proof invokes the
  one-form Poincare lemma [[thm-poincare-lemma-for-star-shaped-domains]] for the closed two-form
  $\sigma^*\omega$ in its step 5.2; a closed two-form needs a two-form primitive, which is what
  [[lem-cm-closed-two-form-radial-primitive]] supplies. The local theorem's step 3.2 uses that
  primitive; the published item is not consumed as a premise in the local proof, and no published
  or imported item is edited. The sound published suppliers consumed by the local proof are
  [[prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action]],
  [[lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice]],
  [[thm-compact-connected-regular-fibres-are-tori]], [[thm-cartans-magic-formula]],
  [[cor-local-normal-form-for-submersions]], [[thm-smooth-inverse-function-theorem-on-manifolds]]
  and [[thm-poincare-lemma-for-star-shaped-domains]] (the last only for *one*-forms).
- **Downstream motion.** Once action-angle coordinates exist, the linear motion
  $I'=0$, $\theta'=\nabla h(I)$ for a fibre-constant Hamiltonian is the published
  [[cor-motion-of-a-completely-integrable-hamiltonian-is-linear-on-invariant-tori]], and the
  period-one to radian conversion is [[cor-cm-action-angle-radian-scaling]]. The scope remark
  records the division of labour for the reviewing steps; it asserts no new mathematics.
