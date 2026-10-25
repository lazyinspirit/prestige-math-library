---
id: thm-knot-wada-quotient-equals-reidemeister-torsion
kind: theorem
title: "A certified knot-spine Wada quotient equals twisted Reidemeister torsion"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-twisted-chain-complex-and-reidemeister-torsion
  - def-knot-wada-quotient-for-deficiency-one-presentation
  - lem-knot-twisted-exterior-acyclicity-from-torsion-module
  - thm-wada-deleted-minor-equals-twisted-reidemeister-torsion
  - lem-twisted-torsion-cell-basis-change-ambiguity
  - lem-twisted-fox-jacobian-is-cellular-boundary
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Paul Kirk and Charles Livingston, Twisted Alexander Invariants, Reidemeister Torsion, and Casson–Gordon Invariants, §§3–4"
      url: "https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf"
      locator: "Complete paper; §3 torsion convention and §4 deficiency-one Fox quotient."
    - title: "Anthony Conway, Burau Maps and Twisted Alexander Polynomials, §§2.3–2.4"
      url: "https://arxiv.org/pdf/1510.06678"
      locator: "Complete version-2 PDF; based torsion, Fox matrices, and the stated spine caveat."
    - title: "Andrew Ranicki, Notes on Reidemeister Torsion, basis-change discussion and Theorem 15"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf"
      locator: "Complete lecture notes; torsion under basis changes and simple homotopy."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Choice convention of the twisted-chain definition. Let $K\subset S^3$ be an oriented knot, let $E_K$ be its compact exterior, let $X$ be a finite based deficiency-one two-dimensional spine with one vertex, $n\ge2$ oriented $1$-cells and $n-1$ oriented $2$-cells, certified by a based cellular simple-homotopy equivalence with $E_K$, and let $\psi:\pi_1(E_K)\twoheadrightarrow H\cong\mathbb Z^m$ have $m\ge1$. Let $\rho:\pi_1(E_K)\to\mathrm{GL}_d(\mathbb F)$ be a representation over a field, and assume the degree-one twisted homology over $\Lambda=\mathbb F[H]$ is a torsion module. For any admissible generator column of the Fox block matrix of the certified spine, its deleted-minor Wada quotient represents the based twisted Reidemeister torsion of $E_K$ in $Q^\times/\mathcal U_{\rho,\psi}$, where $Q=\operatorname{Frac}(\Lambda)$ and $\mathcal U_{\rho,\psi}=\{\pm\det(\rho(g))\psi(g)^d:g\in\pi_1(E_K)\}$. All admissible columns give the same class. If two such deficiency-one spines are related by a supplied finite based simple cellular equivalence carrying the same representation and deck map, their Wada quotient classes also agree. A group-presentation isomorphism alone is not such an equivalence.

## Statement references

[[def-knot-wada-quotient-for-deficiency-one-presentation|Admissible deleted-column quotient]]

[[lem-twisted-fox-jacobian-is-cellular-boundary|Fox matrix as cellular boundary]]

[[lem-knot-twisted-exterior-acyclicity-from-torsion-module|Exterior-spine acyclicity]]

[[thm-wada-deleted-minor-equals-twisted-reidemeister-torsion|Deleted-minor torsion identity]]

[[lem-twisted-torsion-cell-basis-change-ambiguity|Simple-spine unit ambiguity]]

[Kirk and Livingston, §§3–4](https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf)

[Conway, §§2.3–2.4](https://arxiv.org/pdf/1510.06678)

[Ranicki, basis changes and Theorem 15](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf)

## Facts & Assumptions

**Given:** AC; the finite based knot-exterior spine certificate; a positive-rank free-abelian deck epimorphism; a field-valued representation; degree-one Laurent-ring homology torsion; and an admissible deleted column.

[A1] AC is inherited from the maximal-abelian-cover convention. [[def-axiom-of-choice]]; [[def-knot-twisted-chain-complex-and-reidemeister-torsion]]

[F1] The evaluated Fox block matrix of a based presentation complex is the cellular boundary matrix of its twisted chain complex, with the stated row-coefficient convention. [[lem-twisted-fox-jacobian-is-cellular-boundary]]

[F2] Torsion degree-one homology, positive-rank deck map, and the stated deficiency-one cell counts imply acyclicity over the fraction field. [[lem-knot-twisted-exterior-acyclicity-from-torsion-module]]

[F3] For an admissible deleted column of a certified deficiency-one spine, the Fox minor divided by its boundary determinant is the based twisted torsion class, and all admissible columns agree. [[thm-wada-deleted-minor-equals-twisted-reidemeister-torsion]]

[F4] Changing lifts, orientations or the certified simple cellular model changes torsion only by an element of the determinant and deck-unit subgroup. [[lem-twisted-torsion-cell-basis-change-ambiguity]]

[F5] The twisted-chain definition gives the based fraction-field torsion and its exact unit quotient. [[def-knot-twisted-chain-complex-and-reidemeister-torsion]]

## Proof



1.1 The supplied simple-spine certificate identifies the cellular presentation complex with the selected knot exterior model and transports the based cells, representation, and deck map. Therefore [F1] identifies the evaluated Fox matrix with the actual twisted cellular boundary matrix of this model; no conclusion here follows merely from an isomorphism of presented groups. [given, F1]

1.2 The spine has one $0$-cell, $n$ $1$-cells and $n-1$ $2$-cells, and the deck map has positive rank. The given torsion hypothesis is exactly the degree-one module hypothesis in [F2]. Hence its fraction-field complex is acyclic, so the torsion class in [F5] is defined and nonzero. [A1, F2, F5, given]

2.1 The chosen column is admissible by hypothesis. Apply [F3] to the based spine and the acyclic complex from step 1.2. It states that the deleted Fox minor divided by the selected $d_1$ block determinant represents the torsion class in $Q^\times/\mathcal U_{\rho,\psi}$, and it proves the same conclusion for every other admissible column. [F1, F3, step 1.2]

3.1 If a second certified deficiency-one spine is related to the first by the stated finite based simple cellular equivalence, [F4] makes its based torsion class equal in the same quotient; the representation and deck map are transported by that equivalence, so the subgroup $\mathcal U_{\rho,\psi}$ is unchanged. Applying step 2.1 to the second spine shows its admissible Wada quotient has that same class. This proves the permitted presentation-change assertion without promoting a group isomorphism to a spine equivalence. [F3, F4, F5, step 2.1, algebra] ∎

