---
id: thm-cm-class-polynomial-is-integral-and-irreducible-over-q
kind: theorem
title: "The CM class polynomial is integral and irreducible over Q"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-cm-class-polynomial-of-imaginary-quadratic-order
  - thm-cm-singular-moduli-are-algebraic-integers
  - thm-cm-lattice-homothety-classes-are-proper-ideal-classes
  - thm-singular-modulus-generates-the-ring-class-field
  - thm-ring-class-reciprocity-on-cm-singular-moduli
  - thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues
  - lem-conjugation-inverts-quadratic-ideal-classes
  - def-proper-invertible-ideal-class-group-of-a-quadratic-order
  - thm-eisenstein-series-are-modular-forms
  - lem-jacobi-product-formula-for-the-discriminant
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the ring class field and
  reciprocity suppliers; their proofs remain conditional on recorded inputs.
sources:
  references:
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Corollary 11.2 and Theorem 11.1, printed pp. 240–241"
    - title: "J. S. Milne, Modular Functions and Modular Forms"
      url: "https://www.jmilne.org/math/CourseNotes/MF110.pdf"
      locator: "Theorem 12.18 and proof of the maximal-order CM class-field result, printed pp. 120–126"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC, together with the ring class generation
and arithmetic reciprocity theorems. Let $D<0$ be a quadratic discriminant and
let $H_D(X)$ be the product of $X-j([I])$ over the proper ideal classes of
$\mathcal O_D$. Then
$$H_D(X)\in\mathbb Z[X]$$
and $H_D$ is irreducible over $\mathbb Q$ of degree
$h(D)=|\operatorname{Pic}(\mathcal O_D)|$.

## Statement references

[[def-cm-class-polynomial-of-imaginary-quadratic-order|The polynomial is the product over proper ideal classes.]]

[[thm-singular-modulus-generates-the-ring-class-field|Each singular modulus generates the ring class field over $K_D$.]]

[[thm-ring-class-reciprocity-on-cm-singular-moduli|Arithmetic Artin acts transitively on the class-indexed singular moduli.]]

[Cox, Corollary 11.2, pp. 240–241](https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, $D<0$, its class polynomial $H_D$, and the stated ring class generation and reciprocity theorems.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; the global class-field suppliers assume AC.

[A2] [[def-countable-choice]]: every sequence of nonempty sets has a choice function; the global class-field suppliers assume Countable Choice.

[A3] [[def-dependent-choice]]: every total relation on a nonempty set admits an infinite related sequence from any specified start; the global class-field suppliers assume DC.

[F1] [[thm-cm-singular-moduli-are-algebraic-integers]]: every root $j([I])$ is an algebraic integer.

[F2] [[thm-cm-lattice-homothety-classes-are-proper-ideal-classes]]: distinct ideal classes give distinct singular moduli.

[F3] [[thm-singular-modulus-generates-the-ring-class-field]]: $K_D(j([I]))=K_{\mathcal O_D}$ for every class; the proof uses a Chebotarev result independently supported by Milne's complete proof and remains conditional on proof-open CFT inputs.

[F4] [[thm-ring-class-reciprocity-on-cm-singular-moduli]]: arithmetic Artin sends $j([I])$ to $j([\bar{\mathfrak a}I])$ for the corresponding ideal class.

[F5] [[thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues]]: $K_{\mathcal O_D}/K_D$ is finite abelian with Galois group $\operatorname{Pic}(\mathcal O_D)$, $K_{\mathcal O_D}/\mathbb Q$ is Galois, and complex conjugation acts by inversion.

[F6] [[lem-conjugation-inverts-quadratic-ideal-classes]]: $[\bar I]=[I]^{-1}$ in the ideal class group.

[F7] [[thm-eisenstein-series-are-modular-forms]] and [[lem-jacobi-product-formula-for-the-discriminant]]: the Fourier coefficients of $j$ are real, so $\overline{j(\tau)}=j(-\bar\tau)$.

## Proof

1.1 The product defining $H_D$ has $h(D)$ factors. By [F2] their roots are pairwise distinct, and by [F1] they are algebraic integers. [F1, F2, given, algebra]

2.1 Fix a class $[I]$. By [A1]–[A3] and [F3], the extension $K_D(j([I]))$ equals the ring class field and has degree $h(D)$ over $K_D$, because [F5] identifies its Galois group with the ideal class group. By [F4], as $[\mathfrak a]$ ranges over that group, the Artin conjugates are the values $j([\bar{\mathfrak a}I])$. Conjugation is a bijection on classes by [F6], so these are exactly the $h(D)$ distinct roots from step 1.1. Thus $H_D$ is the minimal polynomial of $j([I])$ over $K_D$, and is irreducible over $K_D$. [A1, A2, A3, F2, F3, F4, F5, F6, step 1.1, algebra]

3.1 Step 2.1 shows that the coefficients of $H_D$ lie in $K_D$. Complex conjugation sends $j([I])$ to $j([\bar I])$: if $I$ is represented by $\mathbb Z+\mathbb Z\tau$, then [F7] gives $\overline{j(\tau)}=j(-\bar\tau)$, and $-\bar\tau$ represents the conjugate lattice up to homothety. Thus conjugation permutes the roots and fixes every coefficient. The fixed field of conjugation in the quadratic field $K_D$ is $\mathbb Q$, so $H_D\in\mathbb Q[X]$. [F5, F6, F7, step 2.1, algebra]

4.1 Every coefficient of $H_D$ is an algebraic integer by step 1.1 and closure of algebraic integers under sums and products. Since the coefficients are rational by step 3.1, they are integers. Irreducibility over $K_D$ from step 2.1 implies irreducibility over $\mathbb Q$, because any factorization over $\mathbb Q$ would also be a factorization over $K_D$. The degree is the number of factors, namely $h(D)$. [F1, step 1.1, step 2.1, step 3.1, algebra] ∎
