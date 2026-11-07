---
id: lem-conjugation-inverts-quadratic-ideal-classes
kind: lemma
title: "Conjugation inverts imaginary quadratic ideal classes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-quadratic-order-of-discriminant
  - def-proper-invertible-ideal-class-group-of-a-quadratic-order
  - thm-primitive-forms-correspond-to-proper-ideal-classes-of-quadratic-orders
  - def-primitive-binary-quadratic-form
  - def-field-norm-and-trace
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Lemma 5.19, conjugation and inverse ideal classes"
verification: {}
---

## Statement

Let $D<0$ be a quadratic discriminant and let $I$ be a proper invertible
fractional ideal of $\mathcal O_D$. Then $I\bar I$ is a nonzero rational
principal fractional ideal, and complex conjugation acts on the ordinary
proper ideal class group by inversion:
$$[\bar I]=[I]^{-1}\quad\text{in }\operatorname{Pic}(\mathcal O_D).$$

## Statement references

[[def-proper-invertible-ideal-class-group-of-a-quadratic-order|The ordinary ideal class group quotients proper invertible ideals by nonzero scalar ideals.]]

[Cox, Lemma 5.19](https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf)

## Facts & Assumptions

**Given:** A negative quadratic discriminant $D$ and a proper invertible fractional $\mathcal O_D$-ideal $I$.

[F1] [[thm-primitive-forms-correspond-to-proper-ideal-classes-of-quadratic-orders]]: every class has a representative $I_Q=a\mathbb Z+\theta_Q\mathbb Z$ from a primitive form $Q=(a,b,c)$, with $\theta_Q=(b+\sqrt D)/2\in\mathcal O_D$.

[F2] [[def-quadratic-order-of-discriminant]]: $\mathcal O_D=\mathbb Z[\theta_Q]$ for $\theta_Q$ differing from $\tau_D$ by an integer.

[F3] [[def-proper-invertible-ideal-class-group-of-a-quadratic-order]]: ideals in the same class differ by multiplication by a nonzero element of $K_D$.

## Proof

1.1 By [F1], replace $I$ within its ideal class by $I_Q=(a,\theta_Q)$ for a primitive form $Q=(a,b,c)$ of discriminant $D$. Its conjugate is $(a,\bar\theta_Q)$, where $\theta_Q+\bar\theta_Q=b$ and $\theta_Q\bar\theta_Q=ac$. Their product is generated over $\mathbb Z$ by $a^2,a\theta_Q,a\bar\theta_Q,ac$, each of which belongs to $a\mathcal O_D$. [F1, F2, given, algebra]

2.1 Primitivity gives integers $r,s,t$ with $ra+sb+tc=1$. Since $a\theta_Q+a\bar\theta_Q=ab$, the product ideal contains $ra^2+sab+tac=a$. It also contains $a\theta_Q$. As $\mathcal O_D=\mathbb Z[\theta_Q]$, these two elements generate $a\mathcal O_D$ as an additive group. Therefore $I_Q\bar I_Q=a\mathcal O_D$. [F1, F2, step 1.1, algebra]

3.1 If $I=zI_Q$ with $z\in K_D^\times$, then $I\bar I=z\bar z\,a\mathcal O_D$, again a nonzero rational principal ideal. Hence $[\bar I]$ is the inverse of $[I]$ in the ideal class group, proving the assertion for the original class representative. [F3, step 2.1, algebra] ∎
