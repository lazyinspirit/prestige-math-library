---
id: thm-khovanov-to-instanton-spectral-sequence
kind: theorem
title: "Reduced Khovanov cohomology feeds the singular instanton spectral sequence"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-mirror-of-a-classical-knot
  - def-reduced-khovanov-cohomology-of-a-knot
  - thm-reduced-khovanov-basepoint-and-reidemeister-invariance
  - lem-kh-to-instanton-resolution-spectral-sequence
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
axiom_use: "Assumes ACω through reduced Khovanov diagram and basepoint invariance; the finite filtration argument is choice-free, and the instanton construction carries the separately declared AC branch."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. B. Kronheimer and T. S. Mrowka, Khovanov homology is an unknot-detector, Proposition 1.2 and Theorem 8.12"
      url: "https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf"
    - title: "P. B. Kronheimer and T. S. Mrowka, Knots, three-manifolds and instantons, Theorem 5.3"
      url: "https://math.pku.edu.cn/puremath/docs/2018-10/20181010175415114589.pdf"
    - title: "Hongjian Yang, An Overview of Floer Homologies, §5.7"
      url: "https://web.stanford.edu/~cm5/286.pdf"
---

## Statement

Assume full AC. For every smooth knot $K\subset S^3$, there is a finite spectral sequence of abelian groups whose $E_2$ page, after forgetting the Khovanov bigrading, is $\widetilde{Kh}(\overline K;\mathbb Z)$ and which converges to $I^\natural(K;\mathbb Z)$. The intermediate pages are not asserted to be knot invariants.

## Statement references

[[def-mirror-of-a-classical-knot|Fixed mirror involution]]

[[def-reduced-khovanov-cohomology-of-a-knot|Integral reduced cohomology convention]]

[[thm-reduced-khovanov-basepoint-and-reidemeister-invariance|Based reduced invariance]]

[[lem-kh-to-instanton-resolution-spectral-sequence|Diagramwise resolution filtration]]

[Kronheimer–Mrowka, *Khovanov homology is an unknot-detector* (2011), Proposition 1.2 and Theorem 8.12](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

[Kronheimer–Mrowka, *Knots, three-manifolds and instantons* (2018), Theorem 5.3](https://math.pku.edu.cn/puremath/docs/2018-10/20181010175415114589.pdf)

[Yang, *An Overview of Floer Homologies* (2025), §5.7](https://web.stanford.edu/~cm5/286.pdf)

## Facts & Assumptions

**Given:** Full AC, a smooth knot $K\subset S^3$, and any finite based regular diagram $D$ of $K$.

[F1] The fixed reflection defining the mirror satisfies $\overline{\overline K}=K$ ([[def-mirror-of-a-classical-knot]], Definition).

[F2] Under AC$_\omega$, the reduced integral groups of based diagrams of the same oriented knot are isomorphic, and transport of the basepoint along the knot preserves the groups ([[thm-reduced-khovanov-basepoint-and-reidemeister-invariance]], Statement). Its current body includes local RII/RIII and relative-movie proofs, but the recorded owner-ready hash does not match the current carrier; readiness remains unreconciled.

[A1] For the chosen diagram, the filtered instanton complex has $E_2=\widetilde{Kh}(\overline D;\mathbb Z)$ and abuts to $I^\natural(K;\mathbb Z)$ ([[lem-kh-to-instanton-resolution-spectral-sequence]], Statement). Its complete local cube/coherence proof is not supplied.

## Proof

1.1 Apply [A1] to $D$. This gives a finite spectral sequence from the reduced Khovanov cohomology of the reflected based diagram $\overline D$ to the singular instanton group of $K$, with no assertion about invariance of the intervening pages. [A1, given]

1.2 The fixed reflection sends $D$ to a diagram of $\overline K$ and carries its marked point with it. By [F2], the reduced groups do not depend on the chosen based diagram of $\overline K$. Thus the $E_2$ page from step 1.1 is the stated knot invariant $\widetilde{Kh}(\overline K;\mathbb Z)$, with its bigrading forgotten. [F1, F2, step 1.1, algebra] ∎

## Proof status

The formal passage from the diagramwise filtered complex to the knot-level statement is complete relative to [A1] and [F2]. The current [F2] proof body and its local helpers were inspected, but its owner-ready decision hash is stale against the current carrier. More importantly, [A1] still lacks the exact local instanton and cube-coherence proof. This item is therefore escalated.
