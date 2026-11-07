---
id: op-beilinson-deligne-zeta-element-rationality-for-modular-motive
kind: open-problem
title: "Beilinson–Deligne Fundamental-Line Rationality"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps:
  - def-fundamental-line-and-archimedean-trivialization
  - def-l-function-and-analytic-rank-of-modular-motive
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§2.6–2.20, 2.36–2.56, 4.14–4.15, 5.4–5.9; definitions, conjectures, and Theorems 5.24, 5.29, 5.37 and 5.42."
    - title: "S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives"
      url: "https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf"
      locator: "§§5.5–5.16 and §6, including Definitions 5.5 and 5.9, Conjecture 5.15, Conjecture 6.2 and Theorem 6.1."
---

## Open problem

Assume the central modular motive $M$ has finite-dimensional motivic cohomology and nondegenerate height pairing, so that $\theta_\infty$ is defined. Prove that there is an element $\zeta_M\in\Delta(M)^\times$ such that
$$\theta_\infty(\zeta_M)=L^*(M,0)^{-1}.$$
The element $\zeta_M$ is the Beilinson–Deligne zeta element; this assertion is the rationality conjecture for the fundamental line.

## Open problem references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives](https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf)

## Facts & Assumptions

**Given:** The source-defined modular motive and its realization data.

[A1] [[def-axiom-of-choice]]: AC supplies the Galois/motive realization data used by this item.

## Status

This is Longo–Vigni Conjecture 2.40, due to Beilinson and Deligne. It remains open in general. The local fundamental-line trivialization is conditional and escalated; the conjecture is not used as an unproved theorem supplier.
