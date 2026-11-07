---
id: ex-fundamental-line-for-rank-zero-modular-motive
kind: example
title: "The Fundamental Line in Analytic Rank Zero"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps:
  - def-fundamental-line-and-archimedean-trivialization
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§2.6–2.20, 2.36–2.56, 4.14–4.15, 5.4–5.9; definitions, conjectures, and Theorems 5.24, 5.29, 5.37 and 5.42."
    - title: "Charles A. Weibel, The K-book: An Introduction to Algebraic K-Theory, textbook"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf"
      locator: "Chapter IV §1 and §6.3.2; Quillen K-theory and determinant conventions."
---

## Example

Suppose $M$ is a central modular motive with $r_{\mathrm{an}}(M)=0$, $H^1_{\mathrm{mot}}(\mathbb Q,M)=0$, and $t(M)$ and $V_B^+$ are one-dimensional over $F$. Then the fundamental line reduces to
$$\Delta(M)=\operatorname{Det}_F t(M)\otimes_F\operatorname{Det}_F^{-1}V_B^+.$$
If the Betti–de Rham comparison sends a chosen basis $e_B$ to $c e_{dR}$, then the archimedean trivialization sends $e_{dR}\otimes e_B^{-1}$ to $c^{-1}$.

## Example references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[Charles A. Weibel, The K-book: An Introduction to Algebraic K-Theory, textbook](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf)

## Facts & Assumptions

**Given:** The fundamental-line definition, the stated zero-rank cohomology, and one-dimensional tangent and Betti-plus spaces.

[F1] [[def-fundamental-line-and-archimedean-trivialization]]: the fundamental line is the alternating determinant tensor product of motivic cohomology, its dual, the tangent space, and the Betti-plus space.

[A1] [[def-axiom-of-choice]]: AC supplies the Galois/motive realization data used by this item.

## Proof

**Proof technique:** determinant simplification and scalar calculation.

1.1 If $H^1_{\mathrm{mot}}(\mathbb Q,M)=0$, both its determinant and the determinant of its dual are $F$ with canonical unit $1$. Cancelling these factors in [F1] gives the displayed line. [given, F1, algebra]

2.1 The comparison sends $e_B$ to $c e_{dR}$. The dual basis is sent to $c^{-1}e_{dR}^{-1}$, so the induced determinant map sends $e_{dR}\otimes e_B^{-1}$ to $c^{-1}$. This is the claimed scalar; no zeta-value rationality follows from the calculation. [given, step 1.1, algebra] ∎
