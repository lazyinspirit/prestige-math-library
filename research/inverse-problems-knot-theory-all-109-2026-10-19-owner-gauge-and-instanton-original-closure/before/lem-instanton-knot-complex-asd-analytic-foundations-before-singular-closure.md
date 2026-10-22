---
id: lem-instanton-knot-complex-asd-analytic-foundations
kind: lemma
title: "Analytic foundations for the singular instanton knot complex"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-instanton-knot-homology-and-canonical-class
  - def-singular-instanton-knot-and-sutured-closure-data
  - def-axiom-of-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "P. B. Kronheimer and T. S. Mrowka, Khovanov homology is an unknot-detector, §§2–4"
      url: "https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf"
    - title: "P. B. Kronheimer and T. S. Mrowka, Knot homology groups from instantons, §§2.1–2.2 and 3.3–3.8"
      url: "https://people.math.harvard.edu/~kronheim/yaft.pdf"
    - title: "Hongjian Yang, An Overview of Floer Homologies, §5.7"
      url: "https://web.stanford.edu/~cm5/286.pdf"
---

## Statement

Assume full AC and fix a smooth based knot $K\subset S^3$ with the earring and admissible singular bundle data of the preceding definitions. For regular perturbation data, the perturbed Chern–Simons critical points and finite-energy singular anti-self-dual trajectories define a finite free cochain complex $C^\natural(K;\mathbb Z)$ with differential $d$ satisfying $d^2=0$. Its homology is independent of the chosen regular metric and perturbation up to the declared overall sign and is invariant under isotopy of the based knot data.

## Statement references

[[def-instanton-knot-homology-and-canonical-class|Instanton knot complex and homology]]

[[def-singular-instanton-knot-and-sutured-closure-data|Earring and singular bundle data]]

[Kronheimer–Mrowka, *Khovanov homology is an unknot-detector* (2011), §§2–4](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

[Kronheimer–Mrowka, *Knot homology groups from instantons* (2011), §§2.1–2.2 and 3.3–3.8](https://people.math.harvard.edu/~kronheim/yaft.pdf)

[Yang, *An Overview of Floer Homologies* (2025), §5.7](https://web.stanford.edu/~cm5/286.pdf)

## Facts & Assumptions

**Given:** Full AC, a based knot, the specified singular bundle data, and generic regular perturbation data.

[A1] A Fredholm Sobolev completion of the singular configuration space, compatible with the prescribed codimension-two holonomy, is needed to define expected dimensions. The current local item does not supply it.

[A2] Generic holonomy perturbations must make all critical points nondegenerate and all index-one and index-two moduli spaces regular. This transversality result is not supplied locally.

[A3] Uhlenbeck compactness with the required singular bubbling and energy-index bounds, together with broken-trajectory gluing, is needed to identify the ends of compactified index-two moduli spaces with the terms in $d^2$. These local analytic arguments are not supplied.

## Proof obligation

The primary construction invokes the singular-instanton and Floer analytic frameworks in earlier work. This carrier records the exact result required by the spectral-sequence and rank-detector claims, but it does not replace the missing Sobolev, Fredholm, transversality, compactness, gluing, and isotopy-invariance proofs. The item is escalated.
