---
id: thm-twisted-burau-determinant-formula-under-extension-hypotheses
kind: theorem
title: "The colored twisted Burau procedure computes exterior torsion"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-knot-twisted-chain-complex-and-reidemeister-torsion
  - def-knot-wada-quotient-for-deficiency-one-presentation
  - alg-twisted-burau-determinant-for-colored-braid-closure
  - thm-twisted-burau-axis-torsion-product
  - thm-knot-wada-quotient-equals-reidemeister-torsion
  - lem-twisted-torsion-cell-basis-change-ambiguity
  - thm-abelian-cover-chain-model-computes-alexander-module
  - def-field-of-fractions
  - thm-field-of-fractions-is-a-field-and-the-domain-embeds
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony Conway, Burau Maps and Twisted Alexander Polynomials, Theorem 3.15"
      url: "https://arxiv.org/pdf/1510.06678"
      locator: "Complete version-2 PDF, §§3.1–3.3; Theorem 3.15 is printed on pp. 16–17 and gives the colored determinant and complete axis-filling proof."
    - title: "Paul Kirk and Charles Livingston, Twisted Alexander Invariants, Reidemeister Torsion, and Casson–Gordon Invariants, §§2–4"
      url: "https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf"
      locator: "Complete paper; coefficient complexes, based torsion and deficiency-one determinant quotient."
    - title: "Andrew Ranicki, Notes on Reidemeister Torsion, Definitions 4 and 6 and Theorem 15"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf"
      locator: "Complete lecture notes; based torsion and its unit indeterminacy."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Choice convention of the twisted-chain definition. Let a finite colored geometric braid, a field with exact arithmetic, a representation of the closure exterior group, the full positive-meridian abelianization followed by a declared surjective color map, and compatible based spine and axis-filling certificates satisfy all input conditions of the colored twisted Burau procedure. Assume its designated denominator $D=\det(\rho(g_n)\psi(g_n)-I_d)$ is nonzero, so the procedure is applicable, and assume the representation and deck map extend over the filling with the axis meridian acting trivially. Then the procedure returns the class of the twisted Reidemeister torsion of the closure exterior. If the fraction-field complex is acyclic, the returned value is $N/D$, where $N=\det(\overline B_\rho(\beta)-I_{(n-1)d})$; if it is nonacyclic, the procedure returns $0$ and $N=0$, in agreement with the declared zero-torsion convention. The geometric certificates are essential hypotheses: matching a group presentation alone does not certify an exterior spine or the axis-filling decomposition.

## Statement references

[[alg-twisted-burau-determinant-for-colored-braid-closure|Finite colored twisted Burau procedure and its input boundary]]

[[thm-twisted-burau-axis-torsion-product|Braid-axis torsion product]]

[[thm-knot-wada-quotient-equals-reidemeister-torsion|Exterior-spine Wada quotient theorem]]

[[def-knot-twisted-chain-complex-and-reidemeister-torsion|Twisted coefficient and torsion convention]]

[Conway, Theorem 3.15](https://arxiv.org/pdf/1510.06678)

[Kirk and Livingston, §§2–4](https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf)

[Ranicki, Definitions 4 and 6 and Theorem 15](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf)

## Facts & Assumptions

**Given:** AC; all finite encoded procedure inputs; a nonzero designated denominator; the actual based spine and compatible axis-filling certificates; and the stated coefficient extension across filling.

[A1] AC is inherited from the full abelianization and twisted-chain convention. [[def-axiom-of-choice]]; [[def-knot-twisted-chain-complex-and-reidemeister-torsion]]

[F1] The finite procedure checks its declared input conditions, evaluates $D$ before the acyclicity branch, returns zero for a nonacyclic complex, and otherwise returns $N/D$. [[alg-twisted-burau-determinant-for-colored-braid-closure]]

[F2] For the certified closure and axis exteriors with $D\ne0$, the braid-axis torsion product identifies the exterior torsion with $N/D$ on the acyclic branch and proves $N=0$ on the nonacyclic branch. [[thm-twisted-burau-axis-torsion-product]]

[F3] The twisted torsion convention assigns zero to a nonacyclic fraction-field complex and takes acyclic torsion modulo the determinant and deck-unit subgroup. [[def-knot-twisted-chain-complex-and-reidemeister-torsion]]

[F4] The colored-braid algorithm forms the full positive-meridian abelianization before applying the declared color map. [[alg-twisted-burau-determinant-for-colored-braid-closure]]

## Proof



1.1 By [A1] and the given input hypotheses, all finite spine, gluing, color and representation checks in [F1] pass. Since $D\ne0$, the designated deleted column is admissible and the procedure does not return `not-applicable`. The coefficient system is the full positive-meridian system followed by the declared color map, as required by [F4], and the axis meridian acts trivially by the extension hypothesis. [A1, given, F1, F4]

2.1 If the fraction-field complex is acyclic, [F1] returns $N/D$ and [F2] identifies this value with the twisted torsion class. If the complex is nonacyclic, [F1] returns $0$, [F2] gives $N=0$, and [F3] assigns torsion $0$. Thus in either branch the procedure returns the twisted Reidemeister torsion of the closure exterior, with precisely the stated spine and extension hypotheses. [F1, F2, F3, step 1.1, cases] ∎

