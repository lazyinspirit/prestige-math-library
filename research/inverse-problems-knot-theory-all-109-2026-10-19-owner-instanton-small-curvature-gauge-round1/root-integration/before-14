---
id: thm-sutured-instanton-khi-rank-detects-unknot
kind: theorem
title: "Sutured instanton knot homology detects the unknot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
  - lem-knot-exterior-is-irreducible
  - lem-nontrivial-knot-exterior-boundary-incompressible
  - def-instanton-knot-homology-and-canonical-class
  - def-singular-instanton-knot-and-sutured-closure-data
  - lem-instanton-knot-complex-asd-analytic-foundations
  - def-axiom-of-choice
  - def-countable-choice
axiom_use: "Assumes the declared AC branch through singular instanton, excision, and knot-exterior homology suppliers."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "P. B. Kronheimer and T. S. Mrowka, Knots, sutures and excision, §§7.5–7.6"
      url: "https://arxiv.org/pdf/0807.4891"
    - title: "P. B. Kronheimer and T. S. Mrowka, Knots, three-manifolds and instantons, §§4.3 and 5.1"
      url: "https://math.pku.edu.cn/puremath/docs/2018-10/20181010175415114589.pdf"
    - title: "P. B. Kronheimer and T. S. Mrowka, Khovanov homology is an unknot-detector, §§1.1–1.2 and 5.4"
      url: "https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf"
---

## Statement

Assume full AC. For every smooth knot $K\subset S^3$, the rational sutured instanton knot homology $KHI(K;\mathbb Q)$ is finite-dimensional and has dimension at least one; it has dimension one if and only if $K$ is the unknot. Moreover, excision gives an isomorphism $I^\natural(K;\mathbb Q)\cong KHI(K;\mathbb Q)$.

## Statement references

[[def-singular-instanton-knot-and-sutured-closure-data|Sutured closure and KHI eigenspace]]

[[lem-knot-exterior-is-irreducible|Irreducibility of a knot exterior]]

[[lem-nontrivial-knot-exterior-boundary-incompressible|Boundary incompressibility for a nontrivial knot]]

[Kronheimer–Mrowka, *Knots, sutures and excision* (2008), Definition 7.13, Proposition 7.16, and §§7.5, 7.8](https://arxiv.org/pdf/0807.4891)

[Kronheimer–Mrowka, *Knots, three-manifolds and instantons* (2018), Proposition 4.6 and §5.1](https://math.pku.edu.cn/puremath/docs/2018-10/20181010175415114589.pdf)

[Kronheimer–Mrowka, *Khovanov homology is an unknot-detector* (2011), Proposition 1.4 and §5.4](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

## Facts & Assumptions

**Given:** Full AC, a classical knot, its meridional sutures, and the chosen admissible sutured closure data.

[A1] The exact statement in Kronheimer–Mrowka, *Knots, sutures and excision*, Theorem 7.12, is that a taut balanced sutured manifold has nonzero sutured instanton homology. Its proof is not supplied locally and it depends on the sutured decomposition result in Proposition 7.11.

[A2] For a genus-$g$ Seifert surface, the top and bottom Alexander summands of $KHI(K)$ are identified with sutured instanton homology after cutting the exterior along that surface. The local decomposition and closure-identification proof is not supplied.

[A3] The rank-one unknot calculation uses the torus closure and the eigenspace computation for $I_w(T^3)$. The local calculation and its integral/rational coefficient passage are not supplied.

[A4] The bridge $I^\natural(K;\mathbb Q)\cong KHI(K;\mathbb Q)$ uses the excision construction in Proposition 1.4 of the detector paper. Its exact cobordism and bundle identifications must be proved locally; the citation does not discharge them.

## Proof obligation

The source argument needs local proofs of closure independence, the sutured decomposition rank inclusion, taut-sutured nonvanishing, the genus-summand identifications, the unknot closure computation, and the excision bridge. The full-text sources state these routes but do not provide a self-contained proof of all required gauge-theoretic modules. The KHI rank detector is therefore escalated.
