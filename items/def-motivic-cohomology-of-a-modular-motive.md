---
id: def-motivic-cohomology-of-a-modular-motive
kind: definition
title: "Motivic Cohomology and Algebraic Rank of a Modular Motive"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - def-grothendieck-motive-of-a-newform-and-realizations
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

Let $M=M(f)(k/2)$ be the central twist of the motive of a normalized newform. Let $X_f$ be a smooth projective model of the $(k-2)$-fold fiber power of the universal elliptic curve over the modular curve, and let $\theta_f$ be the Hecke idempotent cutting out the eigensystem of $f$ in parabolic cohomology. Define
$$H^1_{\mathrm{mot}}(K,M):=\operatorname{CH}^{k/2}_{\mathrm{arith}}(X_f/K)_{F[\theta_f]},$$
the $F[\theta_f]$-isotypic summand of the source arithmetic Chow group of null-homologous codimension-$k/2$ cycles on $X_f$ over $K$. When this vector space is finite-dimensional, define the algebraic rank $r_{\mathrm{alg}}(M/K)=\dim_F H^1_{\mathrm{mot}}(K,M)$.

## Definition references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives](https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf)

## Facts & Assumptions

**Given:** The modular motive $M(f)$ and its coefficient projector.

[F1] [[def-grothendieck-motive-of-a-newform-and-realizations]]: the motive is the rank-two eigensummand cut from parabolic cohomology with coefficient field $F$.

[A1] [[def-axiom-of-choice]]: the source construction of cohomological eigensummands explicitly assumes AC.

## Authoring status

The group is Longo–Vigni equation (2.18), with the Kuga–Sato variety and Hecke idempotent made explicit. A local definition and proof of the source arithmetic-Chow cycle group is absent; the required proposed supplier is def-arithmetic-chow-group-of-null-homologous-kuga-sato-cycles, placed immediately before this item. The motive and projector suppliers are also proof-open, so this definition is escalated.
