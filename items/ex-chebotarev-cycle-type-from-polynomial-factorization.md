---
id: ex-chebotarev-cycle-type-from-polynomial-factorization
kind: example
title: "Prime factorization patterns have densities determined by Frobenius cycle types"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - thm-chebotarev-dirichlet-density
  - def-chebotarev-prime-ideal-counting-function
  - def-dirichlet-density-of-prime-ideals
  - thm-frobenius-cycle-type-and-prime-splitting
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited through the Chebotarev theorem;
  the finite group, factorization, and discriminant checks are choice-free.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VIII §7, Theorem 7.4, printed pp. 259–260."
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $f\in\mathbb Z[T]$ be monic, meaning its leading coefficient is $1$, and separable, meaning its roots are distinct in an algebraic closure, of degree $n\ge1$. Let $L$ be the splitting field of $f$ over $\mathbb Q$, namely the field generated over $\mathbb Q$ by all roots of $f$, let $G=\operatorname{Gal}(L/\mathbb Q)$, and let $\alpha_1,\ldots,\alpha_n$ be its roots. Define the polynomial discriminant $D_f=\operatorname{Disc}(f)=\prod_{i<j}(\alpha_i-\alpha_j)^2\in\mathbb Z\setminus\{0\}$. For each rational prime $p$, let $\bar f_p\in\mathbb F_p[T]$ be the coefficientwise reduction of $f$. For a partition $\lambda$ of $n$, meaning a finite multiset of positive integers with sum $n$, put
$$G_\lambda=\{g\in G:\text{the cycle lengths of }g\text{ acting on }\{\alpha_1,\ldots,\alpha_n\}\text{ are the parts of }\lambda\}.$$
Then the rational primes $p\nmid D_f$ for which $\bar f_p\in\mathbb F_p[T]$ factors into distinct monic irreducibles with degree multiset $\lambda$ have Dirichlet density $|G_\lambda|/|G|$, where the Dirichlet density of a set $P$ of rational primes is $\lim_{s\downarrow1,\ s>1}\frac{\sum_{p\in P}p^{-s}}{\log(1/(s-1))}$ and the absolute prime norm of $p$ is $p$.

For the concrete polynomial $g(T)=T^2-2$, the splitting field has Galois group of order two, so the patterns $(1,1)$ and $(2)$ each have density $1/2$. The primes $7$ and $3$ realize these two patterns, respectively.

## Example references

[[thm-chebotarev-dirichlet-density]]

[[thm-frobenius-cycle-type-and-prime-splitting]]

[[def-dirichlet-density-of-prime-ideals]]

[Milne, Class Field Theory, VIII §7, Theorem 7.4](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** The data above.

[F1] [[thm-chebotarev-dirichlet-density]]: For a finite Galois extension of number fields and a conjugacy-stable subset of its Galois group, the corresponding unramified prime ideals have Dirichlet density equal to the subset's cardinality divided by the group order.

[F2] [[thm-frobenius-cycle-type-and-prime-splitting]]: If $f\in\mathbb Z[T]$ is monic and separable and $p\nmid\operatorname{Disc}(f)$, then $p$ is unramified in the splitting field and the degrees of the distinct irreducible factors of $\bar f$ are the cycle lengths of arithmetic Frobenius on the roots.

[F3] [[def-dirichlet-density-of-prime-ideals]]: For rational primes, the Dirichlet-density denominator is $\log(1/(s-1))$ as $s\downarrow1$.

## Verification

**Given:** The data above.

1.1 For $g\in G$ and $h\in G$, the permutations $g$ and $hgh^{-1}$ on the root set are conjugate and therefore have the same cycle lengths. Thus $G_\lambda$ is stable under conjugation. [given, algebra]

2.1 By [F2], for every $p\nmid D_f$ the irreducible-factor degree multiset of $\bar f$ is exactly the Frobenius cycle type. Hence the primes in the Example are the Chebotarev set for $G_\lambda$ with the finite set of primes dividing $D_f$ removed. [F1, F2, step 1.1]

3.1 [F1] gives density $|G_\lambda|/|G|$ before the finite removal. A finite set of primes contributes a bounded numerator to the logarithmically normalized sum in [F3], so its Dirichlet density is zero and removing it preserves the limit. This proves the stated density, including the case $G_\lambda=\varnothing$. [F1, F3, step 2.1, algebra]

4.1 For $g(T)=T^2-2$, the roots are $\sqrt2$ and $-\sqrt2$, so $D_g=(2\sqrt2)^2=8$. The polynomial has no rational root, hence is irreducible over $\mathbb Q$ and its splitting field is $\mathbb Q(\sqrt2)$ with group $\{1,c\}$. The identity has type $(1,1)$ and $c$ has type $(2)$, so $|G_{(1,1)}|=|G_{(2)}|=1$ and $|G|=2$. Step 3.1 therefore gives density $1/2$ for both patterns. [F1, given, step 3.1, algebra]

5.1 Modulo $3$, $g(T)=T^2+1$ has no root because the squares in $\mathbb F_3$ are $0$ and $1$, so it is irreducible of degree two. Modulo $7$, $g(T)=(T-3)(T-4)$ with distinct roots. Since $3,7\nmid D_g$, [F2] identifies these factorizations with the cycle types $(2)$ and $(1,1)$, respectively, as stated. [F2, step 4.1, algebra] ∎
