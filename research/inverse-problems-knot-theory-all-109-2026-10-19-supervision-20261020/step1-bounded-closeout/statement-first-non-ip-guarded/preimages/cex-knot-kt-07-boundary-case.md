---
id: cex-knot-kt-07-boundary-case
kind: counterexample
title: "The knot-normalized Alexander fraction need not be a Laurent polynomial"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 13
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-oriented-seifert-surface
  - def-knot-connected-sum-and-prime-knot
  - def-one-variable-alexander-module-of-an-oriented-link
  - thm-seifert-matrix-presents-knot-alexander-module
  - lem-seifert-matrix-s-equivalence-under-isotopy
  - def-alexander-polynomial-from-the-first-elementary-ideal
  - thm-the-alexander-polynomial-is-an-oriented-link-invariant
  - lem-square-seifert-presentation-and-alexander-normalization
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - cor-knot-alexander-normalization-symmetry-and-genus-bound
  - cor-alexander-polynomial-multiplies-under-connected-sum
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-the-laurent-polynomial-ring
  - cor-contractible-nonempty-spaces-have-the-homology-of-a-point
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "Chapter 8.A–8.C, printed pp. 200–211"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
      locator: "§6.2.2–6.2.3, Example 6.2.11 and Proposition 6.2.12, printed pp. 42–47"
---

## Statement refuted

Assume the full Axiom of Choice and the existing knot convention $D_K(t)=\Delta_K(t)/(1-t)$. The fraction $D_K(t)$ is a Laurent polynomial in $\Lambda=\mathbb Z[t^{\pm1}]$ for every smooth oriented knot $K\subset S^3$.

## Statement references

[[def-alexander-polynomial-from-the-first-elementary-ideal|The existing definition of $\Delta_K$ and $D_K$]]

## Facts & Assumptions

**Given:** Full AC and the standard unknot $U$ in the oriented three-sphere.

[A1] Full AC is the choice-function axiom used by the Alexander-module and Seifert-matrix conventions. ([[def-axiom-of-choice]])

[F1] The standard unknot is the oriented unit circle in a fixed coordinate two-plane of $S^3\subset\mathbb R^4$. ([[def-knot-connected-sum-and-prime-knot]])

[F2] A Seifert surface is a connected compact smooth oriented embedded surface with the given knot as oriented boundary; a disk has Euler characteristic $1$ and genus $0$. ([[def-oriented-seifert-surface]])

[F3] A nonempty contractible space has the singular homology of a point. The singular chain complex of a point has $\partial_1=0$ and $\partial_2=1$, so $H_1(\ast;\mathbb Z)=0$. ([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]])

[F4] The positive-push Seifert matrix is defined on an ordered basis of $H_1(F;\mathbb Z)$, and the determinant of the empty $0\times0$ matrix is $1$. ([[def-knot-seifert-pairing-and-matrix]])

[F5] The positive-meridian module is presented by $V-tV^T$, the square presentation generates $E_0(A_K)$ by its determinant, and that determinant is associated to $\Delta_K(t)$. ([[def-one-variable-alexander-module-of-an-oriented-link]], [[thm-seifert-matrix-presents-knot-alexander-module]], [[lem-square-seifert-presentation-and-alexander-normalization]], [[thm-seifert-determinant-is-the-knot-alexander-polynomial]])

[F6] For a knot, the separate knot-normalized fraction is $D_K(t)=\Delta_K(t)/(1-t)$. ([[def-alexander-polynomial-from-the-first-elementary-ideal]])

[F7] The assignment $t\mapsto1$ extends to a ring homomorphism $\operatorname{ev}_1:\Lambda\to\mathbb Z$, since $1$ is invertible in the Laurent ring. ([[def-the-laurent-polynomial-ring]])

[F8] Connected-sum multiplicativity gives $\Delta_{K\#J}\doteq\Delta_K\Delta_J$. ([[cor-alexander-polynomial-multiplies-under-connected-sum]])

[F9] Full AC implies the Axiom of Countable Choice, the stated hypothesis of the Seifert-surface definition. ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]])

[F10] Every generator $\Delta_K$ satisfies $\Delta_K(1)=\pm1$. ([[cor-knot-alexander-normalization-symmetry-and-genus-bound]])

[F11] The Alexander polynomial is unchanged up to a unit under oriented ambient isotopy, and a transported Seifert matrix is related by unimodular congruence. ([[thm-the-alexander-polynomial-is-an-oriented-link-invariant]], [[lem-seifert-matrix-s-equivalence-under-isotopy]])

## Counterexample

1.1 By [A1] and [F9], the choice hypothesis of [F2] holds. The standard unknot $U$ bounds a hemisphere disk $D$ in a coordinate $2$-sphere in $S^3$, oriented to induce the chosen orientation of $U$. The disk contracts linearly to its center, so [F3] gives $H_1(D;\mathbb Z)=0$. Its basis is empty, so its Seifert matrix is $0\times0$ and its determinant is $1$ by [F4]. The matrix theorem and local E0 lemma in [F5] give $\Delta_U\doteq1$; by [F10] choose the representative $\Delta_U=1$. By [F11] the computation applies to the oriented unknot type, independently of the chosen representative. [A1, F1, F2, F3, F4, F5, F9, F10, F11, given, construct]

2.1 By [F6], $D_U(t)=1/(1-t)$. If $D_U$ belonged to $\Lambda$, there would be $q(t)\in\Lambda$ with $(1-t)q(t)=1$. Applying [F7] gives $0=1$ in $\mathbb Z$, a contradiction. Thus $D_U$ is not a Laurent polynomial. [F6, F7, step 1.1, algebra]

3.1 By [F8], $\Delta_{U\#U}\doteq\Delta_U^2\doteq1$. Any representative of $D_{U\#U}$ therefore has the form $\pm t^k/(1-t)$, whose numerator evaluates to $\pm1$ at $t=1$; applying [F7] as in step 2.1 shows it is not in $\Lambda$. [F7, F8, F11, step 1.1, step 2.1, algebra] ∎

## Counterexample references

[[def-knot-connected-sum-and-prime-knot|The standard unknot and oriented connected sum]]

[[cor-knot-alexander-normalization-symmetry-and-genus-bound|The knot evaluation $\Delta_K(1)=\pm1$]]

[[cor-alexander-polynomial-multiplies-under-connected-sum|Connected-sum multiplicativity]]
