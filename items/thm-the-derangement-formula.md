---
id: thm-the-derangement-formula
kind: theorem
title: "$\\iota(D_n) = \\iota(n!)\\sum_{i<n+1}(-1)^{i}/\\iota(i!)$, with the term at $i = 0$ equal to $1$ and $D_0 = 1$"
status: draft
origin: session
deps: [def-the-derangement-number, thm-inclusion-exclusion, def-a-sieve-family-and-its-intersections,
       thm-number-of-bijections-of-a-finite-set, def-factorial-and-falling-factorial,
       thm-binomial-closed-formula, def-binomial-coefficient, thm-sum-rule,
       def-sum-over-a-finite-index-set, def-canonical-natural, def-integer-power,
       def-finite-sum, lem-finite-sum-laws, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-injection-surjection-bijection, def-finite-cardinality, thm-subset-of-a-finite-set,
       cor-cardinality-of-the-power-set, def-nat-finite-sum-and-product, def-ordered-field,
       def-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Derangement (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derangement"
    - title: "Inclusion-exclusion principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
    - title: "Rencontres numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rencontres_numbers"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$, in $\mathbb{R}$,

$$\iota(D_n) \;=\; \iota(n!)\sum_{i<n+1}\frac{(-1)^{i}}{\iota(i!)},$$

where $D_n$ is the derangement number ([[def-the-derangement-number]]), $n!$ the
factorial ([[def-factorial-and-falling-factorial]]) and $\iota$ the canonical
natural ([[def-canonical-natural]]). Each division is legitimate because
$i! \ne 0$, hence $\iota(i!) \ne 0$.

The index runs from $0$, and the term at $i = 0$ is
$(-1)^{0}/\iota(0!) = 1$. At $n = 0$ the identity reads
$\iota(D_0) = \iota(0!)\cdot 1 = 1$, which agrees with $D_0 = 1$; at $n = 1$ it
reads $\iota(D_1) = 1\cdot(1-1) = 0$; and at $n = 2$ it reads
$\iota(D_2) = 2\cdot(1-1+1/2) = 1$.

Since $\iota$ is injective, the identity determines $D_n$ as a natural number
([[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clause 7).

## Facts & Assumptions

**Given:** A natural number $n$, the set $X := \operatorname{Bij}(n)$ of bijections of $n$ onto itself, and, for $a \in n$, the set $A_a := \{\, f \in X : f(a) = a \,\}$ of bijections fixing $a$.

[L1] $\operatorname{Bij}(S)$ is finite with $\lvert\operatorname{Bij}(S)\rvert = \lvert S\rvert!$ for every finite $S$ ([[thm-number-of-bijections-of-a-finite-set]], [[def-factorial-and-falling-factorial]]); in particular $\lvert X\rvert = n!$ and $\lvert n\rvert = n$ ([[def-finite-cardinality]]).

[L2] $(A_a)_{a \in n}$ is a family of subsets of the finite set $X$ indexed by the finite set $n$, hence a sieve family with ambient set $X$, and $A_\varnothing = X$ ([[def-a-sieve-family-and-its-intersections]], [[thm-subset-of-a-finite-set]]).

[L3] $\operatorname{Der}(n) = X \setminus \bigcup_{a \in n}A_a$, since a bijection of $n$ is a derangement exactly when it fixes no point ([[def-the-derangement-number]], [[def-injection-surjection-bijection]]).

[L4] The complementary form of the sieve identity ([[thm-inclusion-exclusion]], clause 2).

[L5] Partition of a power set by cardinality: the sets $[n]^{i}$ for $i \in \sigma(n)$ are pairwise disjoint with union $\mathcal{P}(n)$, and $\lvert [n]^{i}\rvert = \binom{n}{i}$ ([[thm-subset-of-a-finite-set]], clause 2, [[def-binomial-coefficient]], [[cor-cardinality-of-the-power-set]]).

[L6] Splitting a sum along a partition of its index set ([[thm-sum-rule]], clause 3); a constant real summand and the bridge $\sum_{i \in n}u_i = \sum_{i<n}u_i$ ([[def-sum-over-a-finite-index-set]], clauses (a) and (c)); and scaling of a real finite sum ([[lem-finite-sum-laws]], clause 2, [[def-finite-sum]]).

[L7] For $J \subseteq n$: $\lvert J\rvert + \lvert n\setminus J\rvert = n$, so $\lvert n\setminus J\rvert = n - \lvert J\rvert$ with the truncated difference ([[thm-sum-rule]], clause 1, [[def-nat-finite-sum-and-product]]).

[L8] Integrality of the binomial coefficient: for $i \le n$, $\iota\binom{n}{i} = \iota(n!)/\big(\iota(i!)\,\iota((n-i)!)\big)$ ([[thm-binomial-closed-formula]], clause 2); and $m! \ne 0$ for every $m$, so $\iota(m!) \ne 0$ ([[def-factorial-and-falling-factorial]], clause (b), [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clause 7).

[L9] $\mathbb{R}$ is an ordered field, so division by a nonzero element is available ([[def-ordered-field]], [[def-field]]); and $(-1)^{0} = 1$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 The ambient set and the sieve family. $X = \operatorname{Bij}(n)$ is finite with $\lvert X\rvert = n!$ by [L1], the sets $A_a$ for $a \in n$ are subsets of $X$, and $\operatorname{Der}(n)$ is the complement in $X$ of their union by [L3]. [L1, L2, L3, construct]

1.2 The intersections are bijection sets of a smaller set. For $J \subseteq n$ the map $f \mapsto f\!\restriction\!(n\setminus J)$ is a bijection of $A_J$ onto $\operatorname{Bij}(n\setminus J)$. Indeed a bijection $f$ of $n$ fixing every point of $J$ has $f[J] = J$, hence $f[n\setminus J] = n \setminus J$ by injectivity, so its restriction is a bijection of $n\setminus J$; conversely a bijection $g$ of $n\setminus J$ extends by the identity on $J$ to a bijection of $n$ fixing every point of $J$, and the two constructions are mutually inverse. For $J = \varnothing$ both sides are $X$, by the stipulation of [L2]. [L1, L2, L3, construct]

1.3 Hence $\lvert A_J\rvert = \lvert n\setminus J\rvert! = (n - \lvert J\rvert)!$ for every $J \subseteq n$, by [L1] applied to $n\setminus J$ and by [L7]. [L1, L7]

2.1 The sieve. Applying [L4] to the family of step 1.1 and substituting step 1.3, $\iota(D_n) = \iota\lvert\operatorname{Der}(n)\rvert = \sum_{J \in \mathcal{P}(n)}(-1)^{\lvert J\rvert}\,\iota\big((n-\lvert J\rvert)!\big)$. [step 1.1, step 1.2, step 1.3, L4]

3.1 Grouping the subsets of $n$ by size. Splitting along the partition of [L5] and using the constant clause of [L6] on each block, where the summand depends on $J$ only through $\lvert J\rvert = i$, gives $\iota(D_n) = \sum_{i<n+1}\iota\binom{n}{i}\,(-1)^{i}\,\iota\big((n-i)!\big)$. [step 2.1, L5, L6]

4.1 Each coefficient collapses. For $i < n+1$, that is $i \le n$, [L8] gives $\iota\binom{n}{i}\,\iota\big((n-i)!\big) = \iota(n!)/\iota(i!)$, so the $i$-th summand of step 3.1 is $(-1)^{i}\,\iota(n!)/\iota(i!)$; scaling the sum by the constant $\iota(n!)$ through [L6] gives $\iota(D_n) = \iota(n!)\sum_{i<n+1}(-1)^{i}/\iota(i!)$. [step 3.1, L6, L8, L9] ∎

## Remarks

- **Where the closed formula for the binomial coefficient is spent.** Only in the last step, and only in the range $i \le n$, which is exactly the range the sum runs over. Outside that range the identity of [[thm-binomial-closed-formula]] is not asserted, and it is not used.

- **Why the identity is stated in $\mathbb{R}$.** It contains both a subtraction, through the alternating sign, and a division by $i!$. Neither operation exists in $\mathbb{N}$, so the count is carried across by $\iota$; injectivity of $\iota$ is what carries the conclusion back.

- **The first index is $0$ and it matters.** The term at $i = 0$ is $1$, and the identity at $n = 0$ is the statement $D_0 = 1$, which is where the empty function enters. A version of this formula whose sum began at $i = 1$ would be false at every $n$.
