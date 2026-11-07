---
id: ex-hilbert-class-polynomials-for-discriminants-minus-three-and-minus-four
kind: example
title: "Hilbert class polynomials for discriminants -3 and -4"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-cm-class-polynomial-of-imaginary-quadratic-order
  - thm-unique-reduced-positive-definite-binary-quadratic-form
  - def-reduced-positive-definite-binary-quadratic-form
  - def-discriminant-of-binary-quadratic-form
  - cor-zeros-of-e4-and-e6-at-the-elliptic-points
  - def-modular-discriminant-and-j-invariant
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Corollary 11.2, printed pp. 240–241; class polynomial as a product over ideal classes"
verification: {}
---

## Example

For the fundamental discriminants $D=-3$ and $D=-4$, the corresponding
Hilbert class polynomials are
$$H_{-3}(X)=X,\qquad H_{-4}(X)=X-1728.$$

## Example references

[[def-cm-class-polynomial-of-imaginary-quadratic-order|The class polynomial is the product of the singular moduli over ideal classes.]]

[[cor-zeros-of-e4-and-e6-at-the-elliptic-points|The elliptic-point values are $j(e^{2\pi i/3})=0$ and $j(i)=1728$.]]

[[thm-unique-reduced-positive-definite-binary-quadratic-form|Reduced representatives are unique; the two discriminants have one reduced class each.]]

## Facts & Assumptions

**Given:** The definitions of reduced positive definite forms, imaginary quadratic orders, and the modular invariant $j$.

[F1] [[thm-unique-reduced-positive-definite-binary-quadratic-form]]: every proper positive-definite form class of negative discriminant has a unique reduced representative, with $|b|\le a\le c$ and the standard boundary convention.

[F2] [[cor-zeros-of-e4-and-e6-at-the-elliptic-points]] and [[def-modular-discriminant-and-j-invariant]]: $j(e^{2\pi i/3})=0$ and $j(i)=1728$.

[F3] [[def-cm-class-polynomial-of-imaginary-quadratic-order]]: $H_D$ is the product of $X-j([I])$ over proper ideal classes.

## Proof

1.1 For $D=-3$, a reduced primitive form satisfies $|b|\le a\le c$ and $b^2-4ac=-3$. From $|b|\le a\le c$, $|D|=4ac-b^2\ge4a^2-a^2=3a^2$, so $a\le\sqrt{|D|/3}=1$ and $a=1$. The discriminant congruence forces $b$ odd; $|b|\le1$ gives $b=\pm1$, and the boundary convention selects $b=1$. Then $c=(b^2+3)/(4a)=1$. Thus there is one class represented by $(1,1,1)$. [F1, given, algebra]

2.1 For $D=-4$, the inequality in step 1.1 gives $a\le\sqrt{4/3}<2$, so $a=1$. The discriminant equation forces $b$ even; $|b|\le1$ gives $b=0$, and then $c=1$. Thus there is one class represented by $(1,0,1)$. [F1, step 1.1, given, algebra]

3.1 The principal lattice for $D=-3$ is homothetic to $\mathbb Z+\mathbb Z e^{2\pi i/3}$, so [F2] gives its singular modulus $0$. The principal lattice for $D=-4$ is $\mathbb Z+\mathbb Z i$, whose singular modulus is $1728$ by [F2]. [F2, step 1.1, step 2.1, algebra]

4.1 Each class number is one by steps 1.1 and 2.1. The product definition [F3] therefore has a single factor in each case, yielding $H_{-3}(X)=X$ and $H_{-4}(X)=X-1728$. [F3, step 1.1, step 2.1, step 3.1, algebra] ∎
