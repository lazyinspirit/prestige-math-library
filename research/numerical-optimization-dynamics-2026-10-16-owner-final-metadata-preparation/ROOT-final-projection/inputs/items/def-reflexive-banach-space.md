---
id: def-reflexive-banach-space
kind: definition
title: "Reflexivity is surjectivity of the canonical map"
status: published
origin: pipeline
deps: ["def-canonical-map-into-the-bidual", "thm-canonical-bidual-map-is-an-isometry", "def-banach-space", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Definition 2.70, p.89"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Definition

Let $\mathbb K=\mathbb R$ or $\mathbb C$. A [[def-banach-space|Banach space]] $X$ is **reflexive** if its canonical map $J_X:X\to X^{**}$ from [[def-canonical-map-into-the-bidual]] is surjective. Assuming the Axiom of Choice ([[def-axiom-of-choice]]), [[thm-canonical-bidual-map-is-an-isometry]] shows that this map is already an isometric embedding. Surjectivity means that every bounded linear functional on $X^*$ is evaluation at a vector of $X$. Merely specifying some isomorphism between $X$ and $X^{**}$ is not this definition.
