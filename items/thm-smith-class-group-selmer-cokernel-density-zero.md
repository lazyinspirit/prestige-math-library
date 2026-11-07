---
id: thm-smith-class-group-selmer-cokernel-density-zero
kind: theorem
title: "The class-group to Selmer injection is an isomorphism for density one of twists"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps: [def-twistable-galois-module-and-favored-twist-family, def-fundamental-quadratic-discriminant, def-axiom-of-choice, def-countable-choice, def-dependent-choice, thm-class-group-quotient-as-fixed-point-selmer-group, thm-global-brauer-hasse-noether-exact-sequence-number-field, lem-finite-galois-obstruction-brauer-cohomology-comparison, lem-kummer-cohomology-of-roots-of-unity, thm-shapiro-lemma-for-group-cohomology, thm-number-field-ray-class-field-artin-isomorphism, thm-ray-class-exact-sequence, def-ray-class-group]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, AC_omega, and DC are inherited from the class-group injection, the
  Brauer localization interface, and global-field conventions.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ^∞-Selmer Groups in Degree ℓ Twist Families II, Example 3.11 and Proposition 8.5"
      url: "https://arxiv.org/pdf/2207.05143"
      locator: "Example 3.11; Proposition 8.5 and §§8.2–8.3"
    - title: "A. Morgan and A. Smith, Field change for the Cassels–Tate pairing and applications to class groups, Proposition 1.5"
      url: "https://arxiv.org/pdf/2206.13403"
      locator: "Proposition 1.5 and Proposition 7.4"
    - title: "A. Smith, The Distribution of ℓ^∞-Selmer Groups in Degree ℓ Twist Families I, Example 4.5"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "Example 4.5"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. For $H>0$, let $\mathcal X(H)$ be the set of isomorphism classes of imaginary quadratic fields $L/\mathbb Q$ with $|D_L|\le H$, where $D_L$ is the fundamental discriminant. Use the class-group twistable module $N=\mathbb Q_2/\mathbb Z_2$ and the local conditions in the class-group/Selmer comparison. Let $E(H)\subseteq\mathcal X(H)$ consist of those fields for which the natural injection of the $2$-primary dual class-group quotient into the fixed-point Selmer group is not surjective. Then
$$\lim_{H\to\infty}\frac{|E(H)|}{|\mathcal X(H)|}=0.$$

## Statement references

[[thm-class-group-quotient-as-fixed-point-selmer-group]]

[[def-fundamental-quadratic-discriminant]]

[[def-twistable-galois-module-and-favored-twist-family]]

[A. Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families II*, Example 3.11 and Proposition 8.5](https://arxiv.org/pdf/2207.05143)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC; an imaginary quadratic field $L/\mathbb Q$; and the class-group/Selmer local conditions in the Statement.

[F1] The class-group quotient has the stated natural injection into the Selmer group. [[thm-class-group-quotient-as-fixed-point-selmer-group]]

[F2] A Brauer class over $\mathbb Q$ which is zero in every completion is zero; the algebraic and Galois-cohomological Brauer constructions agree compatibly with localization. [[thm-global-brauer-hasse-noether-exact-sequence-number-field]] [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F3] Kummer theory identifies $H^1(\mathbb Q,\mu_2)$ and $H^1(\mathbb Q_v,\mu_2)$ with the corresponding square-class groups, and identifies $H^2(-,\mu_2)$ with the $2$-torsion in the cohomological Brauer group. [[lem-kummer-cohomology-of-roots-of-unity]]

[F4] The finite-index Shapiro construction identifies the unramified Selmer group of a coinduced module with unramified cohomology over the quadratic field. Its cochain maps are continuous because the coset set is finite. [[thm-shapiro-lemma-for-group-cohomology]]

[F5] The ordinary ideal class group is the ray class group with trivial modulus, and the ray-class Artin isomorphism identifies its dual with everywhere-unramified characters. [[def-ray-class-group]] [[thm-ray-class-exact-sequence]] [[thm-number-field-ray-class-field-artin-isomorphism]]

## Proof

1.1 Put $A=\mathbb Q_2/\mathbb Z_2$, let $\chi$ be the quadratic character of $L/\mathbb Q$, and put $B=\operatorname{Ind}_{G_L}^{G_{\mathbb Q}}A$. Norm and sign projection give an exact sequence of discrete $G_{\mathbb Q}$-modules $0\to\mathbb F_2\to B\to A\oplus A_\chi\to0$. Indeed, after restricting to $G_L$ the last map is $(a,b)\mapsto(a+b,a-b)$; its kernel is the diagonal $A[2]$, and it is surjective because $A$ is $2$-divisible. These maps are equivariant for the permutation action on $B$ and the sign action on $A_\chi$. [given, construct, algebra]

1.2 The local characters of $-1$, $2$, and $5$ form a basis of $H^1(\mathbb Q_2,\mathbb F_2)$. For an odd $2$-adic unit, being a square is equivalent to being $1$ modulo $8$: necessity is immediate, and successive square-root lifting proves sufficiency. Thus $-1$ and $5$ generate the four unit square classes, and adjoining the valuation class $2$ gives all eight square classes. The character of $5$ is unramified, since $(1+\sqrt5)/2$ satisfies $X^2-X-1$, irreducible modulo $2$. The global characters of $-1$ and $2$ are unramified at every odd prime. [F3, given, algebra]

2.1 Take $y\in\operatorname{Sel}(A_\chi)$ and put $x=(0,y)$. At every place $v$, the localization $x_v$ has an unramified lift in $H^1(\mathbb Q_v,B)$. For ramified $v$, including the real place, $y_v=0$ by the local condition. At an unramified inert finite place, Frobenius acts by $-1$ on $A_\chi$ and $H^1_{\mathrm{ur}}(\mathbb Q_v,A_\chi)=A/2A=0$. At a split place, the unramified map is the surjective sum-and-difference map $A^2\to A^2$. [step 1.1, given, algebra]

2.2 For each $v$, let $W_v\subseteq H^1(\mathbb Q_v,\mathbb F_2)$ be the inverse image of the unramified subgroup of $H^1(\mathbb Q_v,B)$. Every unramified character lies in $W_v$. At the real place $W_\infty=H^1(\mathbb R,\mathbb F_2)$, since $L\otimes\mathbb R=\mathbb C$ and local Shapiro gives $H^1(\mathbb R,B)=H^1(\mathbb C,A)=0$. If an odd prime $p$ ramifies in $L$, then $W_p$ also contains the ramified character $\chi_p$, which restricts trivially to $G_{L_w}$. The group $H^1(\mathbb Q_p,\mathbb F_2)$ has order four, with unramified and ramified characters forming a basis, so $W_p$ is the whole group. The order-four assertion follows by writing $\mathbb Q_p^\times=p^{\mathbb Z}\mathbb Z_p^\times$ and lifting square roots of units with square residue modulo $p$. [F3, F4, step 1.1, given, algebra]

3.1 The boundary of $x$ in $H^2(\mathbb Q,\mathbb F_2)$ is locally zero by step 2.1. Identify $\mathbb F_2$ with $\mu_2$. By [F3] the boundary embeds in the global cohomological Brauer group, compatibly with localization, and [F2] makes that localization injective. Thus $x$ has a global lift $b\in H^1(\mathbb Q,B)$. [F2, F3, step 1.1, step 2.1, algebra]

4.1 Choose local unramified lifts of $x_v$ as in step 2.1. The difference from $b_v$ comes from $H^1(\mathbb Q_v,\mathbb F_2)$ by step 1.1. Let $T$ be the finite set of odd primes where this difference does not belong to $W_p$; finiteness follows because the global class $b$ and the local lifts are unramified almost everywhere. For each $p\in T$, the global character of $p$ is ramified at $p$ and unramified at every other odd prime. At an odd prime where $L$ is unramified, $W_p$ is the unramified subgroup; at an odd ramified prime it is all of $H^1$ by step 2.2. Thus subtracting the sum of the characters of the primes in $T$ puts every odd-place difference in $W_p$. By step 1.2, the remaining difference at $2$, modulo the unramified character already contained in $W_2$, is a sum of the local characters of $-1$ and $2$. Subtract the corresponding global characters; they do not disturb any odd place. The real difference lies in $W_\infty$. These adjustments make $b$ unramified everywhere without changing its image $x$. [F3, step 1.1, step 2.1, step 2.2, step 3.1, step 1.2, algebra]

5.1 By [F4], the adjusted class is an unramified class over $L$, hence comes from a class-group character by [F5]. Its sign projection is $y$. Thus the injection in [F1] is surjective for every imaginary quadratic field under the stated supplier interfaces. The exceptional set $E(H)$ is empty, proving the asserted density limit. [F1, F4, F5, step 4.1, algebra] ∎
