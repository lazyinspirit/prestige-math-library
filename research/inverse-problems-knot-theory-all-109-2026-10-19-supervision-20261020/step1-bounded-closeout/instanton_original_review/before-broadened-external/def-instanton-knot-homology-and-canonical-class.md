---
id: def-instanton-knot-homology-and-canonical-class
kind: definition
title: "Instanton knot homology and its canonical class"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-singular-instanton-knot-and-sutured-closure-data
  - def-axiom-of-choice
justified_by:
  - lem-instanton-knot-complex-asd-analytic-foundations
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "P. B. Kronheimer and T. S. Mrowka, Khovanov homology is an unknot-detector, §§1.1–1.2, 2–4, and 8.7"
      url: "https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf"
    - title: "P. B. Kronheimer and T. S. Mrowka, Knots, three-manifolds and instantons, §5.1"
      url: "https://math.pku.edu.cn/puremath/docs/2018-10/20181010175415114589.pdf"
    - title: "Hongjian Yang, An Overview of Floer Homologies, §§5.5–5.7"
      url: "https://web.stanford.edu/~cm5/286.pdf"
---

## Definition

Assume full AC. For a based smooth knot $K\subset S^3$ with the earring and admissible singular-bundle data above, let $C^\natural(K;\mathbb Z)$ be the integral singular-instanton cochain complex: its generators are regular critical points of the perturbed Chern–Simons functional on the corresponding singular configuration space, and its degree-one differential counts oriented zero-dimensional moduli spaces of trajectories for the perturbed singular anti-self-dual equation. Here finite energy is the flow energy $2\int_{\mathbb R}\|\partial_tB\|_2^2dt$ in temporal gauge, equivalently the perturbed topological energy of the relative trajectory class, rather than unrenormalized curvature energy over the infinite cylinder. The grading is relative modulo four, and the differential has degree one. Define $I^\natural(K;\mathbb Z):=H^*(C^\natural(K;\mathbb Z))$ using the analytic construction and independence of choices established in [[lem-instanton-knot-complex-asd-analytic-foundations]]. Write $I^\natural(K;\mathbb Q):=I^\natural(K;\mathbb Z)\otimes_{\mathbb Z}\mathbb Q$.

## Definition references

[[def-singular-instanton-knot-and-sutured-closure-data|Based earring and singular-bundle data]]

[[lem-instanton-knot-complex-asd-analytic-foundations|Integral analytic construction and continuation invariance]]

[Kronheimer–Mrowka, *Khovanov homology is an unknot-detector* (2011), §§1.1–1.2, 2–4, and 8.7](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

[Kronheimer–Mrowka, *Knots, three-manifolds and instantons* (2018), §5.1](https://math.pku.edu.cn/puremath/docs/2018-10/20181010175415114589.pdf)

[Yang, *An Overview of Floer Homologies* (2025), §§5.5–5.7](https://web.stanford.edu/~cm5/286.pdf)

## Remarks

The cited constructions define the group but do not supply a distinguished element of $I^\natural(K)$ for every knot. The planned canonical-class clause is unresolved; in particular, the unique critical point for the unknot determines a rank-one group but not a sign-independent generator. No later rank argument uses such a class.

## Remarks references

[Kronheimer–Mrowka, *Khovanov homology is an unknot-detector* (2011), §8.7](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

[Kronheimer–Mrowka, *Knots, three-manifolds and instantons* (2018), §5.1](https://math.pku.edu.cn/puremath/docs/2018-10/20181010175415114589.pdf)
