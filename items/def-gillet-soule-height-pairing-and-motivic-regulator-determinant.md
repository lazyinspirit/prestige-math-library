---
id: def-gillet-soule-height-pairing-and-motivic-regulator-determinant
kind: definition
title: "Gillet–Soulé Height Pairing and Motivic Regulator Determinant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - def-motivic-cohomology-of-a-modular-motive
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: not-applicable
sources:
  references:
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§2.6–2.20, 2.36–2.56, 4.14–4.15, 5.4–5.9; definitions, conjectures, and Theorems 5.24, 5.29, 5.37 and 5.42."
    - title: "S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives"
      url: "https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf"
      locator: "§§5.5–5.16 and §6, including Definitions 5.5 and 5.9, Conjecture 5.15, Conjecture 6.2 and Theorem 6.1."
---

## Definition

For a number field $K$ and the central modular motive $M=M(f)(k/2)$, let $H^1_{\mathrm{mot}}(K,M)$ be its arithmetic Chow group of homologically trivial cycles. The Gillet–Soulé height pairing is the $F_\infty$-bilinear map
$$\langle\ ,\ \rangle_{GS,\infty}:H^1_{\mathrm{mot}}(K,M)_\infty\times H^1_{\mathrm{mot}}(K,M)_\infty\to F_\infty,$$
obtained by extending the arithmetic intersection pairing along each real embedding of $F$. For finite-dimensional $H^1_{\mathrm{mot}}(K,M)$ and a chosen basis $B$, define $\operatorname{Reg}_B(M/K)$ to be the determinant of the Gram matrix of this pairing; changing the basis multiplies it by the square of the basis determinant. No nonvanishing or nondegeneracy is part of the definition.

## Definition references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives](https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf)

## Facts & Assumptions

**Given:** A finite-dimensional motivic cohomology group with its arithmetic cycle realization.

[F1] [[def-motivic-cohomology-of-a-modular-motive]]: its elements are the projected arithmetic Chow classes of homologically trivial cycles.

[A1] [[def-axiom-of-choice]]: AC supplies the Galois/motive realization data used by this item.

## Authoring status

The pairing and determinant convention are specified. The arithmetic-intersection construction and the nondegeneracy conjecture are not proved by this definition; the motivic cohomology supplier is proof-open, so this item is escalated.
