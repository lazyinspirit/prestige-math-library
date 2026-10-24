---
id: thm-totient-of-a-prime-power
kind: theorem
title: "For a prime $p$ and $k\\ge1$, $\\varphi(p^k)=p^k-p^{k-1}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-multiples-below-a-prime-power, thm-unit-criterion-modulo-n, lem-prime-not-dividing-is-coprime, def-prime, def-common-divisor-and-gcd, lem-divisibility-basic, def-unit-group-modulo-n-and-euler-totient, thm-standard-representatives-modulo-n, thm-sum-rule, def-finite-cardinality, thm-fundamental-theorem-of-arithmetic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Euler's totient function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euler%27s_totient_function"
    - title: "K. Conrad, The Chinese Remainder Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf"
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
    - title: "Carnegie Mellon, number-theory lecture notes"
      url: "https://www.cs.cmu.edu/~goyal/15356/lecture_notes.pdf"
pipeline_run: null
---

## Statement

For every prime $p$ and natural $k\ge1$,

$$\varphi(p^k)=p^k-p^{k-1}.$$

Equivalently, among the $p^k$ standard classes modulo $p^k$, the nonunits are
exactly those whose standard representatives are divisible by $p$.

## Facts & Assumptions

**Given:** A prime $p$, a natural $k\ge1$, and an arbitrary standard representative $r$ with $0\le r<p^k$.

[L1] A class $[r]_{p^k}$ is a unit exactly when $\gcd(r,p^k)=1$ ([[thm-unit-criterion-modulo-n]], [[def-unit-group-modulo-n-and-euler-totient]]).

[L2] If $p\nmid r$, then $\gcd(p,r)=1$ ([[lem-prime-not-dividing-is-coprime]]).

[L3] Every positive integer is a finite product of primes, and two finite prime products with the same value have the same factors up to a permutation ([[thm-fundamental-theorem-of-arithmetic]]).

[F1] Every prime exceeds $1$ ([[def-prime]]).

[F2] The gcd of a nonzero pair is its greatest common divisor: it is a common divisor, it is at least every common divisor, and divisibility is transitive. Hence every divisor of $\gcd(a,b)$ divides both $a$ and $b$ ([[def-common-divisor-and-gcd]], [[lem-divisibility-basic]]).

[L4] The standard representatives modulo $p^k$ divisible by $p$ have cardinality $p^{k-1}$ ([[lem-multiples-below-a-prime-power]]).

[L5] The standard representatives modulo $p^k$ map bijectively to $\mathbb Z/p^k$, which has cardinality $p^k$, and $\varphi(p^k)$ is the cardinality of its unit subset ([[thm-standard-representatives-modulo-n]], [[def-unit-group-modulo-n-and-euler-totient]]).

[L6] A finite disjoint union has cardinality equal to the sum of the cardinalities of its blocks ([[thm-sum-rule]], [[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 If $p\mid r$, then $p$ is a common divisor of $r$ and $p^k$. Since $p>1$ by [F1], the greatest-common-divisor property in [F2] gives $\gcd(r,p^k)\ne1$, so $[r]_{p^k}$ is not a unit. [L1, F1, F2]

1.2 Suppose $p\nmid r$, so $p$ and $r$ are coprime by [L2]. If $\gcd(r,p^k)>1$, [L3] gives a prime $q$ dividing that gcd. Then [F2] gives $q\mid r$ and $q\mid p^k$. Uniqueness of prime factorisation applied to $p^k$, a product of copies of $p$, forces $q=p$, contradicting the coprimality of $p$ and $r$. Hence $\gcd(r,p^k)=1$, so $[r]_{p^k}$ is a unit. [L1, L2, L3, F2]

2.1 Since $r$ was arbitrary, the standard representatives split disjointly into the unit representatives and the representatives divisible by $p$. The whole set has cardinality $p^k$ by [L5], and the second block has cardinality $p^{k-1}$ by [L4]. [step 1.1, step 1.2, L4, L5]

3.1 By the sum rule, $p^k=\varphi(p^k)+p^{k-1}$ in $\mathbb N$, so $\varphi(p^k)=p^k-p^{k-1}$. [step 2.1, L5, L6] ∎
