---
id: thm-euler-totient-product-formula
kind: theorem
title: "Euler's product formula $\\varphi(n)=n\\prod_{p\\mid n}(1-1/p)=\\prod_{p^k\\parallel n}(p^k-p^{k-1})$ for $n\\ge1$, stated through a finite injective list of its prime divisors"
status: published
origin: session
deps: [def-a-sieve-family-and-its-intersections, thm-inclusion-exclusion, thm-canonical-prime-factorisation, def-p-adic-valuation, lem-p-adic-valuation-basic, thm-unit-criterion-modulo-n, thm-standard-representatives-modulo-n, def-nat-finite-sum-and-product, def-finite-cardinality, lem-pairwise-coprime-divisibility, thm-induction-principle, lem-int-embeds-rat, thm-rat-field, def-unit-group-modulo-n-and-euler-totient, def-prime, lem-prime-not-dividing-is-coprime, lem-every-integer-above-one-has-a-prime-divisor, lem-rat-embeds-dense, lem-int-cancellation, cor-euler-totient-is-multiplicative, thm-totient-of-a-prime-power]
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
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
    - title: "K. Conrad, The Chinese Remainder Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, and let $p_0,\ldots,p_{r-1}$ be an injective finite list
consisting exactly of the prime divisors of $n$. Put
$k_i:=v_{p_i}(n)$, so $k_i\ge1$. Then

$$\varphi(n)=\prod_{i<r}\bigl(p_i^{k_i}-p_i^{k_i-1}\bigr).$$

After carrying the natural numbers into $\mathbb Q$, the same identity is

$$\varphi(n)=n\prod_{i<r}\left(1-\frac1{p_i}\right).$$

At $n=1$ the list is empty, both products are empty products equal to $1$, and
$\varphi(1)=1$. These finite-list formulas are the precise meanings of the two
products displayed in the title.

## Facts & Assumptions

**Given:** A positive integer $n$ and an injective finite list $p_0,\ldots,p_{r-1}$ consisting exactly of its prime divisors; $k_i:=v_{p_i}(n)$.

[L1] A class modulo $n$ is a unit exactly when its representative is coprime to $n$, and $\varphi(n)$ counts the unit classes ([[thm-unit-criterion-modulo-n]], [[def-unit-group-modulo-n-and-euler-totient]]).

[L2] The standard representatives form a set $X$ of cardinality $n$ ([[thm-standard-representatives-modulo-n]], [[def-finite-cardinality]]).

[L3] Inclusion-exclusion gives the cardinality of the complement of a finite union as the alternating sum of the cardinalities of all intersections, with the empty intersection equal to the ambient finite set ([[def-a-sieve-family-and-its-intersections]], [[thm-inclusion-exclusion]]).

[L4] The canonical prime factorisation is $n=\prod_{i<r}p_i^{k_i}$, and $p_i\mid n$ implies $k_i\ge1$ ([[thm-canonical-prime-factorisation]], [[def-p-adic-valuation]], [[lem-p-adic-valuation-basic]]).

[L5] A product of pairwise-coprime positive integers divides every common multiple of its factors ([[lem-pairwise-coprime-divisibility]]).

[L6] Natural finite products have empty value $1$ and obey the successor recursion ([[def-nat-finite-sum-and-product]]); the integers embed injectively in the field $\mathbb Q$, which in turn embeds injectively as an ordered subfield of $\mathbb R$ ([[lem-int-embeds-rat]], [[thm-rat-field]], [[lem-rat-embeds-dense]]).

[L7] Induction is valid on natural numbers ([[thm-induction-principle]]).

[L8] Distinct primes are coprime: a prime not dividing another prime is coprime to it ([[def-prime]], [[lem-prime-not-dividing-is-coprime]]).

[L9] Every integer greater than $1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]).

[L10] Multiplication by a nonzero integer is cancellative ([[lem-int-cancellation]]).

## Proof

**Proof technique:** direct.

1.1 For $i<r$, let $A_i:=\{a\in X:p_i\mid a\}$. Since the $p_i$ are distinct primes, they are pairwise coprime by [L8]. For $J\subseteq\{0,\ldots,r-1\}$ put $q_J:=\prod_{j\in J}p_j$, with $q_\varnothing=1$. By [L5], the intersection $A_J$ consists exactly of the standard representatives divisible by $q_J$. [L2, L5, L8]

1.2 A representative $a\in X$ lies outside every $A_i$ exactly when no prime divisor of $n$ divides $a$. This is equivalent to $\gcd(a,n)=1$: a common divisor greater than $1$ would have a prime divisor by [L9], and every such prime would occur in the list. Therefore $X\setminus\bigcup_iA_i$ is precisely the set of unit representatives and has cardinality $\varphi(n)$. [L1, L4, L9]

1.3 By [L4], $n=\prod_{i<r}p_i^{k_i}$. In $\mathbb Q$, finite distributivity and $k_i\ge1$ give $p_i^{k_i}(1-1/p_i)=p_i^{k_i}-p_i^{k_i-1}$ for each $i$, hence $n\prod_{i<r}(1-1/p_i)=\prod_{i<r}(p_i^{k_i}-p_i^{k_i-1})$. [L4, L6]

2.1 The integer $q_J$ divides $n$ by [L4]. Multiplication by $q_J$ bijects the integers $t$ with $0\le t<n/q_J$ onto $A_J$: its values lie between $0$ and $n-1$, every member of $A_J$ has the required quotient, and [L10] gives injectivity. Hence $|A_J|=n/q_J$. [step 1.1, L2, L4, L10]

3.1 Inclusion-exclusion applied to steps 1.1, 2.1 and 1.2 gives this equality after embedding its integer and rational terms in $\mathbb R$. Both sides come from $\mathbb Q$, and the ordered-field embedding $\mathbb Q\to\mathbb R$ is injective by [L6], so already in $\mathbb Q$ one has $\varphi(n)=\sum_{J\subseteq\{0,\ldots,r-1\}}(-1)^{|J|}n/q_J$. [step 1.1, step 2.1, step 1.2, L3, L6]

4.1 Finite distributivity gives $\prod_{i<r}(1-1/p_i)=\sum_J(-1)^{|J|}/q_J$: the empty case reads $1=1$, and adjoining $p_r$ replaces every old term $1/q_J$ by the pair $1/q_J$ and $-1/(q_Jp_r)$, indexed respectively by subsets not containing and containing $r$. Multiplying this identity by $n$ and using step 3.1 yields $\varphi(n)=n\prod_{i<r}(1-1/p_i)$. [step 3.1, L6, L7]

5.1 Combining steps 4.1 and 1.3 proves both formulas. When $n=1$, there are no prime divisors, so the list is empty; the products equal $1$ by [L6], and $\varphi(1)=1$ by [L1]. [step 4.1, step 1.3, L1, L6] ∎

## Remarks

- The same prime-power product also follows by repeatedly applying [[cor-euler-totient-is-multiplicative]] to the canonical factorisation and using [[thm-totient-of-a-prime-power]]. The proof above instead exposes the inclusion-exclusion count behind the factor $1-1/p_i$.
