---
id: op-nondegeneracy-of-gillet-soule-height-pairing
kind: open-problem
title: "Nondegeneracy of the Gillet–Soulé Height Pairing"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - def-gillet-soule-height-pairing-and-motivic-regulator-determinant
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

For the central modular motive $M=M(f)(k/2)$ and every number field $K$, prove that the real extension of the Gillet–Soulé height pairing
$$\langle\ ,\ \rangle_{GS,\infty}:H^1_{\mathrm{mot}}(K,M)_\infty\times H^1_{\mathrm{mot}}(K,M)_\infty\to F_\infty$$
has zero left and right kernels. Also prove that the induced map from either factor to the $F_\infty$-linear dual of the other is an isomorphism. Both assertions are part of this target; zero kernels alone are not asserted to imply the dual isomorphisms without a finite-dimensionality hypothesis.

## Open problem references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives](https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf)

## Facts & Assumptions

**Given:** The source-defined modular motive and its realization data.

[A1] [[def-axiom-of-choice]]: AC supplies the Galois/motive realization data used by this item.

## Status

This is Longo–Vigni Conjecture 2.18. Nondegeneracy is assumed in the rationality argument and is not proved by the definition of the pairing. The local motivic-cohomology interface remains escalated.
