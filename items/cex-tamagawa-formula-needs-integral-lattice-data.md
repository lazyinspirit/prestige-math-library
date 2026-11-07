---
id: cex-tamagawa-formula-needs-integral-lattice-data
kind: counterexample
title: "Why the p-Tamagawa Formula Depends on the Chosen Integral Lattice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps:
  - def-bloch-kato-fontaine-perrin-riou-tamagawa-number-conjecture
  - def-determinant-line-of-a-perfect-complex
  - def-field-of-fractions
  - cor-maximal-ideal-and-residue-field-of-zp
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

## Statement refuted

Rational special-value data in a one-dimensional determinant line determine a unique full $\mathbb Z_p$-lattice in that line.

## Statement refuted references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[Charles A. Weibel, The K-book: An Introduction to Algebraic K-Theory, textbook](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf)

## Facts & Assumptions

**Given:** A prime $p$, the one-dimensional vector space $D=\mathbb Q_p e$, and its two displayed submodules.

[F1] [[def-bloch-kato-fontaine-perrin-riou-tamagawa-number-conjecture]]: the p-TNC compares a zeta vector’s generated integral lattice with a determinant lattice.

[F2] [[def-determinant-line-of-a-perfect-complex]]: an integral determinant line is an invertible module embedded in its fraction-field determinant line.

[F3] [[def-field-of-fractions]]: $\mathbb Q_p$ is the fraction field of $\mathbb Z_p$.

[F4] [[cor-maximal-ideal-and-residue-field-of-zp]]: the unique maximal ideal of $\mathbb Z_p$ is $p\mathbb Z_p$, and $\mathbb Z_p/p\mathbb Z_p\cong\mathbb F_p$.

## Counterexample

**Proof technique:** direct quotient calculation.

1.1 Put $L_0=\mathbb Z_p e$ and $L_1=p\mathbb Z_p e$. Both $L_0$ and $L_1$ are free rank-one $\mathbb Z_p$-submodules of $D$, and after tensoring with $\mathbb Q_p$ each becomes $D$. Since $p\mathbb Z_p$ is the maximal ideal by [F4], $1\notin p\mathbb Z_p$, so $e\notin p\mathbb Z_p e$ and $L_0\ne L_1$. [given, F3, F4, algebra]

2.1 The quotient map $\pi:L_0\to L_0/L_1$ is surjective by definition and has kernel $L_1$. The map $\mathbb Z_p\to L_0/L_1$, $a\mapsto ae+L_1$, has kernel $p\mathbb Z_p$; by [F4] it induces $L_0/L_1\cong\mathbb F_p$. Thus the two distinct full lattices have the same generic fiber $D$, disproving uniqueness from rational data alone. [given, F4, step 1.1, algebra]

3.1 The p-TNC comparison in [F1] is an equality of integral lattices inside a rational determinant line. The two lattices constructed above share that rational line, so the line and rational vector alone cannot specify which integral determinant lattice occurs in the equality. The integral lattice data must therefore be included. [F1, F2, step 2.1, algebra] ∎
