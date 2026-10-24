---
id: thm-coalgebra-automorphism-logarithms-are-coderivations
kind: theorem
title: "Coalgebra automorphisms congruent to the identity are exactly coderivation exponentials"
status: published
dependency_level: 3
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-coefficient-complete-codifferential-deformation
  - lem-complete-coderivations-form-a-filtered-differential-graded-lie-algebra
  - lem-noncommutative-filtered-exponential-and-logarithm
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Marco Manetti, Deformation theory via differential graded Lie algebras, §1"
      url: "https://arxiv.org/pdf/math/0507284"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §§1.2, 2.2, 10.1"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Statement

For the coefficient-complete tensor or symmetric carrier in [[def-coefficient-complete-codifferential-deformation]], exponential and logarithm restrict to mutually inverse bijections

$$F^1\mathfrak l^0\ \longleftrightarrow\ \{G:\ G\text{ is an allowed identity-modulo-}I\text{ coalgebra automorphism}\}.$$

In particular the logarithm of every such automorphism is a continuous counital coaugmentation-preserving coderivation; no finite-dimensionality or algebraic nilpotence of $I$ is required.

## Facts & Assumptions

**Given:** The carrier and allowed automorphisms in the stated definition.

[F1] [[lem-complete-coderivations-form-a-filtered-differential-graded-lie-algebra]] proves completeness and multiplicativity of the endomorphism filtration and closedness of the coderivation equations.

[F2] [[lem-noncommutative-filtered-exponential-and-logarithm]] proves the convergent inverse exponential/logarithm bijections in a noncommutative complete filtered algebra.

[F3] [[def-coefficient-complete-codifferential-deformation]] specifies the carrier, explicitly completed tensor target, zero-nullary coderivation equation, and the full allowed automorphism group.

## Proof

1.1 The complete degree-zero endomorphism algebra $E^0$ and its closed degree-zero coderivation subspace are supplied by [[lem-complete-coderivations-form-a-filtered-differential-graded-lie-algebra]]. Thus [[lem-noncommutative-filtered-exponential-and-logarithm]] defines inverse exponential and logarithm series on positive-order degree-zero endomorphisms. All subsequent identities can be checked in $C_n=C\otimes_k B/I^n$ and its tensor target and then passed to limits. [F1, F2, F3, given, construct]

1.2 Conversely, let $G$ be allowed and $N=G-\operatorname{id}$. On $C_n$, $N^n=0$. Define the endomorphism-valued polynomial $P_n(t)=\sum_{j=0}^{n-1}\binom tjN^j$. For every nonnegative integer $m$, the finite binomial theorem gives $P_n(m)=G^m$. Since $G^m$ is a counital coaugmented coalgebra map, $\Delta P_n(m)=(P_n(m)\otimes P_n(m))\Delta$, $P_n(m)(1_C)=1_C$, and $\epsilon P_n(m)=\epsilon$. [F3, given, construct, algebra]

2.1 For $X\in F^1\mathfrak l^0$, induction on $j$ using its coderivation equation gives $\Delta X^j=(X\otimes1+1\otimes X)^j\Delta$. The operators $X\otimes1$ and $1\otimes X$ commute because $X$ has degree zero. Each is of positive coefficient order, so the exponential and binomial calculations are finite in each quotient. Consequently $\Delta\exp X=(\exp X\otimes\exp X)\Delta$. Also $\exp X(1_C)=1_C$ and $\epsilon\exp X=\epsilon$, because every positive power of $X$ kills $1_C$ and is killed by $\epsilon$. Its inverse $\exp(-X)$ has the same properties. Hence exponential gives an allowed automorphism. [F3, step 1.1, algebra]

2.2 Each difference in these three identities is a polynomial in $t$ with coefficients in a $k$-vector space of maps. A polynomial of degree at most $a$ with such coefficients vanishing at $a+1$ distinct nonnegative integers has zero coefficients: apply the inverse of their scalar Vandermonde matrix over the characteristic-zero field $k$. This does not require finite-dimensional map spaces or any domain property of $B/I^n$. Therefore the identities of step 1.2 hold as polynomial identities for the indeterminate $t$. [step 1.2, algebra]

3.1 Differentiate those polynomial identities at $t=0$. Since $P_n(0)=\operatorname{id}$, the result is $\Delta P_n'(0)=(P_n'(0)\otimes1+1\otimes P_n'(0))\Delta$, $P_n'(0)(1_C)=0$, and $\epsilon P_n'(0)=0$. For $j\ge1$, differentiation of $t(t-1)\cdots(t-j+1)/j!$ at zero gives $(-1)^{j-1}/j$. Thus $P_n'(0)=\sum_{j=1}^{n-1}(-1)^{j-1}N^j/j$, exactly the reduction of $\log G$. [step 2.2, algebra]

4.1 These reductions are compatible for all $n$, and the coderivation, counit, and coaugmentation identities are closed in the completed targets. Therefore $\log G\in F^1\mathfrak l^0$. Step 1.1 gives inverse identities for the underlying endomorphisms, and step 2.1 shows that every positive-order degree-zero coderivation exponentiates into the allowed group. The restrictions are therefore mutually inverse bijections onto the entire stated group. [step 1.1, step 2.1, step 3.1] ∎
