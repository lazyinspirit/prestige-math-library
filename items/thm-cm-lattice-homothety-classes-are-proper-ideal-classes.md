---
id: thm-cm-lattice-homothety-classes-are-proper-ideal-classes
kind: theorem
title: "CM lattice homothety classes are proper ideal classes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-elliptic-lattice-with-complex-multiplication-by-an-order
  - thm-proper-fractional-ideal-of-quadratic-order-is-invertible
  - def-proper-invertible-ideal-class-group-of-a-quadratic-order
  - def-complex-lattice-and-complex-torus
  - thm-j-invariant-classifies-complex-tori
  - thm-proper-invertible-ideal-classes-form-abelian-group
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Chapter 11, CM lattices and ideal classes"
    - title: "A. V. Sutherland, MIT 18.783 Lecture 17"
      url: "https://ocw.mit.edu/courses/18-783-elliptic-curves-fall-2025/mit18_783_f25_lec_full.pdf"
      locator: "Lecture 17, complex lattices and proper ideal classes"
verification: {}
---

## Statement

Let $\mathcal O_D$ be an imaginary quadratic order. The map sending a proper
invertible fractional $\mathcal O_D$-ideal $I\subset K_D$ to its complex
lattice homothety class is a bijection from
$\operatorname{Pic}(\mathcal O_D)$ to the homothety classes of full lattices
$\Lambda\subset\mathbb C$ whose multiplier ring equals the fixed embedding of
$\mathcal O_D$. Under this bijection the singular modulus depends only on the
ideal class, and two such lattices have the same $j$-invariant exactly when
their ideal classes agree.

## Statement references

[[def-elliptic-lattice-with-complex-multiplication-by-an-order|CM means that the lattice multiplier ring is precisely the specified order.]]

[[def-proper-invertible-ideal-class-group-of-a-quadratic-order|The ordinary ideal class group identifies proper invertible fractional ideals modulo nonzero field scalars.]]

[Cox, Chapter 11, complex multiplication by an order](https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf)

## Facts & Assumptions

**Given:** An imaginary quadratic order $\mathcal O_D\subset K_D\subset\mathbb C$ and a full lattice $\Lambda$ with multiplier ring $\mathcal O_D$.

[F1] [[def-elliptic-lattice-with-complex-multiplication-by-an-order]]: $\mathcal O_D\Lambda\subseteq\Lambda$ and $\operatorname{End}(\Lambda)=\mathcal O_D$.

[F2] [[def-complex-lattice-and-complex-torus]]: a full lattice is a free rank-two $\mathbb Z$-module in $\mathbb C$.

[F3] [[thm-proper-fractional-ideal-of-quadratic-order-is-invertible]]: every proper fractional ideal of $\mathcal O_D$ is invertible.

[F4] [[def-proper-invertible-ideal-class-group-of-a-quadratic-order]]: $\operatorname{Pic}(\mathcal O_D)$ is the quotient by scalar ideals $c\mathcal O_D$, $c\in K_D^\times$.

[F5] [[thm-j-invariant-classifies-complex-tori]]: two full lattices have equal $j$-invariant exactly when they are homothetic.

## Proof

1.1 Give $V=\Lambda\otimes_{\mathbb Z}\mathbb Q$ the $K_D$-vector-space structure induced by the order action. It is one-dimensional over $K_D$, since it has dimension two over $\mathbb Q$ and the action is faithful. Choose a $K_D$-linear isomorphism $V\to K_D$; the image $I$ of $\Lambda$ is a rank-two $\mathbb Z$-lattice stable under $\mathcal O_D$. Clearing a nonzero integer denominator makes it a fractional $\mathcal O_D$-ideal. [F1, F2, given, choose]

2.1 The multiplier ring of $I$ equals that of $\Lambda$, namely $\mathcal O_D$, because the chosen isomorphism intertwines the $K_D$-action. Thus $I$ is proper, and [F3] makes it invertible. A different $K_D$-linear isomorphism $V\to K_D$ differs by a nonzero scalar in $K_D$, so it changes $I$ only within its class in [F4]. [F1, F3, F4, step 1.1, algebra]

3.1 Conversely, any proper invertible fractional ideal $I\subset K_D$ is a full lattice stable under $\mathcal O_D$, and its multiplier ring is $\mathcal O_D$ by properness; hence it gives a CM lattice. If two such ideals are homothetic in $\mathbb C$, say $J=zI$ for $z\in\mathbb C^\times$, then choosing $0\ne x\in I$ gives $zx\in J\subset K_D$ and $x\in K_D$, so $z=(zx)/x\in K_D^\times$. Thus homothety is exactly ideal-class equivalence, proving bijectivity. [F1, F2, F4, step 2.1, algebra]

4.1 By [F5], equality of the two singular moduli is equivalent to homothety of the lattices. Step 3.1 identifies that homothety with equality of ideal classes. [F4, F5, step 3.1, algebra] ∎
