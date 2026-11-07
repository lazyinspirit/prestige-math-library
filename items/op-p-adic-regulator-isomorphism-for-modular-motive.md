---
id: op-p-adic-regulator-isomorphism-for-modular-motive
kind: open-problem
title: "p-adic Regulator Isomorphism Conjecture"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - def-p-adic-etale-regulator-for-modular-motive
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

For every number field $K$ and every prime $\mathfrak p$ of the coefficient field above $p$, prove that the p-adic regulator
$$\operatorname{reg}_{K,\mathfrak p}:H^1_{\mathrm{mot}}(K,M)_{\mathfrak p}\longrightarrow H^1_f(K,V_{\mathfrak p})$$
is an isomorphism of coefficient-field vector spaces.

## Open problem references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives](https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf)

## Facts & Assumptions

**Given:** The source-defined modular motive and its realization data.

[A1] [[def-axiom-of-choice]]: AC supplies the Galois/motive realization data used by this item.

## Status

This is the p-adic regulator conjecture (Longo–Vigni Conjecture 2.50). The rank-zero and rank-one p-TNC theorems below assume specified instances of it; it is not an established supplier.
