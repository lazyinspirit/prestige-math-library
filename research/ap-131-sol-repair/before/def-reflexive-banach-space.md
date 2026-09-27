---
id: def-reflexive-banach-space
kind: definition
title: "Reflexivity is surjectivity of the canonical map"
status: published
origin: pipeline
deps: ["def-canonical-map-into-the-bidual", "thm-canonical-bidual-map-is-an-isometry", "def-banach-space"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Definition 2.70, p.89"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Definition

Let $\mathbb K=\mathbb R$ or $\mathbb C$. A [[def-banach-space|Banach space]] $X$ is **reflexive** if its canonical map $J_X:X\to X^{**}$ from [[def-canonical-map-into-the-bidual]] is surjective. By [[thm-canonical-bidual-map-is-an-isometry]] this map is already an isometric embedding. Surjectivity means that every bounded linear functional on $X^*$ is evaluation at a vector of $X$. Merely specifying some isomorphism between $X$ and $X^{**}$ is not this definition.
