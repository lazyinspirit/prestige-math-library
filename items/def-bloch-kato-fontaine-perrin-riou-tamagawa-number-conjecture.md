---
id: def-bloch-kato-fontaine-perrin-riou-tamagawa-number-conjecture
kind: definition
title: "Bloch–Kato–Fontaine–Perrin-Riou Tamagawa Number Conjecture"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps:
  - def-fundamental-line-and-archimedean-trivialization
  - def-p-adic-etale-regulator-for-modular-motive
  - def-determinant-line-of-a-perfect-complex
  - def-determinant-line-over-finite-product-of-domains
  - thm-componentwise-determinant-line-over-finite-product-is-invertible
  - def-l-function-and-analytic-rank-of-modular-motive
  - lem-number-field-completion-tensor-and-norm-in-zf
  - def-determinant-line-of-perfect-complex-over-commutative-ring
  - thm-determinant-line-of-perfect-complex-over-commutative-ring-is-invertible
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
    - title: "Charles A. Weibel, The K-book: An Introduction to Algebraic K-Theory, textbook"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf"
      locator: "Chapter IV §1 and §6.3.2; Quillen K-theory and determinant conventions."
---

## Definition

Let $M$ be a central modular motive over its coefficient field $F$, let $\mathcal O$ be a projective order in $F$, and let $T_B$ be a projective $\mathcal O$-structure in its Betti realization. Assume the rationality and p-adic regulator conjectures needed to define the source zeta element $\zeta_M^*$ and its p-adic trivialization $\theta_{p,S}$. For a finite set $S$ containing the primes of bad reduction and $p$, and each rational prime $p$, the p-part of the Tamagawa number conjecture is the equality of $\mathcal O_p=\mathcal O\otimes_{\mathbb Z}\mathbb Z_p$-lattices in the determinant line over $F_p=F\otimes_{\mathbb Q}\mathbb Q_p$:
$$\theta_{p,S}(\zeta_M^*)\,\mathcal O_p=\operatorname{Det}_{\mathcal O_p}R\Gamma_c\!\left(G_S,\operatorname{Comp}_{B,\mathrm{et}}(T_B\otimes_{\mathcal O}\mathcal O_p)\right).$$
Here $R\Gamma_c$ is compactly supported continuous Galois cohomology and $\operatorname{Comp}_{B,\mathrm{et}}$ is the Betti-to-étale comparison complex. The formula is meaningful only after the right-hand complex is proved perfect and the determinant line and trivialization are defined.

## Definition references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives](https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf)

[Charles A. Weibel, The K-book: An Introduction to Algebraic K-Theory, textbook](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf)

## Facts & Assumptions

**Given:** A coefficient field $F$, an order $\mathcal O$, a projective Betti lattice, and the compactly supported Galois complex.

[F1] [[def-fundamental-line-and-archimedean-trivialization]]: the fundamental line and archimedean period trivialization are fixed.

[F2] [[def-p-adic-etale-regulator-for-modular-motive]]: the p-adic regulator maps motivic cohomology to finite étale cohomology.

[F3] [[def-determinant-line-of-perfect-complex-over-commutative-ring]]: the determinant-functor interface is stated for bounded perfect complexes over an arbitrary coefficient order.

[F4] [[thm-determinant-line-of-perfect-complex-over-commutative-ring-is-invertible]]: the general determinant line is invertible and compatible with base change.

[F5] [[def-determinant-line-over-finite-product-of-domains]] and [[thm-componentwise-determinant-line-over-finite-product-is-invertible]]: the maximal-order split case is constructed componentwise.

[F6] [[lem-number-field-completion-tensor-and-norm-in-zf]]: $\mathcal O_F\otimes\mathbb Z_p\cong\prod_{\mathfrak p\mid p}\widehat{\mathcal O_{F,\mathfrak p}}$, so the coefficient order may split into domain components.

[A1] [[def-axiom-of-choice]]: AC supplies the Galois/motive realization data used by this item.

## Escalation

The exact p-TNC equality is transcribed from Longo–Vigni Conjecture 2.56. The general determinant-functor definition now contains a finite local gluing construction, and its invertibility theorem contains a representative-independence and base-change argument. Their presence supplies no independent acceptance and does not prove that the particular compactly supported Galois complex $R\Gamma_c(G_S,T_B)$ is perfect. A local perfectness theorem for that complex and the construction of $\theta_{p,S}$ from regulators and determinant identities remain missing. The finite-product determinant items likewise do not establish these Galois-cohomology prerequisites. This item remains escalated.
