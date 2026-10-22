---
id: lem-ni-holomorphic-disk-and-jsj-analytic-inputs
kind: lemma
title: "Analytic inputs for Ni's sutured knot Floer decompositions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - thm-jsj-decomposition-of-knot-exteriors
  - def-satellite-pattern-companion-and-winding-number
  - def-top-alexander-grading-of-knot-floer-homology
  - def-balanced-taut-sutured-manifold-and-product-region
  - def-sutured-floer-chain-complex
  - def-knot-relative-spinc-structure
  - def-axiom-of-choice
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Yi Ni, Knot Floer homology detects fibred knots, arXiv:math/0607156v4, §§2.2–5"
      url: "https://arxiv.org/pdf/math/0607156v4"
      locator: "Printed pp.5–15; sutured Floer setup, surface-adapted diagrams, horizontal decomposition, and separating product-annulus decomposition"
    - title: "Andras Juhasz, Floer homology and surface decompositions, arXiv:math/0609779v3, §§1–7"
      url: "https://arxiv.org/pdf/math/0609779v3"
      locator: "Printed pp.1–31; balanced sutured diagrams, surface-decomposition chain maps, admissibility, and analytic construction"
    - title: "Peter Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds, arXiv:math/0101206"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Printed pp.19–35; Fredholm regularity, energy bounds, compactness, and index-two boundary and gluing arguments"
verification:
  precheck: n/a
---

## Statement

Let $K$ be a null-homologous knot in a closed connected oriented $3$-manifold $Y$, let $F$ be a genus-$g$ Seifert surface, and let $(M,\gamma)$ be the balanced sutured manifold obtained by cutting the compact exterior of $K$ along $F$. For a surface-adapted admissible sutured Heegaard diagram, the generator correspondence between the top Alexander summand of the knot Floer complex and the sutured Floer disk-count module identifies their disk-count differentials. Under the hypotheses of a horizontal decomposition, the induced chain map realizes Ni's horizontal decomposition formula. Under the hypotheses of a separating product annulus with connected $R_+$ and $R_-$, the induced chain map realizes Ni's product-annulus tensor formula. These assertions use the specified basepoint domains, periodic-domain admissibility, and exact characteristic-product-region hypotheses; they make no claim that generic Heegaard disk existence alone supplies the decomposition maps.

## Statement references

[[def-top-alexander-grading-of-knot-floer-homology|The absolute Alexander grading and coefficient convention]]

[[def-balanced-taut-sutured-manifold-and-product-region|Horizontal surfaces, product annuli, and characteristic product regions]]

[[def-sutured-floer-chain-complex|The diagram-level sutured Floer disk-count module]]

[[thm-grid-homology-independent-of-grid-and-equals-knot-floer|The current mod-two grid comparison interface]]

[Ni, *Knot Floer homology detects fibred knots*, §§2.2–5](https://arxiv.org/pdf/math/0607156v4)

[Juhasz, *Floer homology and surface decompositions*, §§1–7](https://arxiv.org/pdf/math/0609779v3)

[Ozsvath and Szabo, *Holomorphic disks and topological invariants for closed three-manifolds*, §§3–4](https://arxiv.org/pdf/math/0101206)
