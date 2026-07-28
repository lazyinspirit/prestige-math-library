---
id: thm-the-bonferroni-inequalities
kind: theorem
title: "Truncating the sieve at an odd depth over-estimates the size of the union and truncating it at an even depth under-estimates it"
status: published
origin: session
deps: [thm-inclusion-exclusion, lem-the-partial-alternating-sum-of-a-binomial-row,
       def-a-sieve-family-and-its-intersections, lem-a-double-sum-over-finite-index-sets-may-be-interchanged,
       thm-sum-rule, def-sum-over-a-finite-index-set, def-binomial-coefficient,
       def-canonical-natural, def-integer-power, def-nat-power, lem-power-laws,
       lem-finite-sum-laws, def-finite-sum, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       thm-subset-of-a-finite-set, def-finite-cardinality, cor-cardinality-of-the-power-set,
       def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Inclusion-exclusion principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
    - title: "Boole's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boole%27s_inequality"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 2"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Statement

Let $X$, $I$, $(A_i)_{i \in I}$ and the intersections $A_J$ be a sieve family
([[def-a-sieve-family-and-its-intersections]]), let $U := \bigcup_{i \in I}A_i$,
put $N := \lvert I\rvert$, and let $\iota$ be the canonical natural
([[def-canonical-natural]]). For $j \in \mathbb{N}$ and $m \in \mathbb{N}$ set

$$S_j \;:=\; \sum_{J \in [I]^{j}} \iota\lvert A_J\rvert, \qquad T_m \;:=\; \sum_{i<m}(-1)^{i}\,S_{i+1},$$

the first sum being over the finite set of $j$-element subsets of $I$ and the
second the real finite sum of [[def-finite-sum]]. Thus $T_0 = 0$, $T_1 = S_1$ and
$T_2 = S_1 - S_2$. Then, in $\mathbb{R}$:

1. **Odd truncation over-estimates.** $\iota\lvert U\rvert \le T_{2r+1}$ for
   every $r \in \mathbb{N}$.
2. **Even truncation under-estimates.** $\iota\lvert U\rvert \ge T_{2r}$ for
   every $r \in \mathbb{N}$.
3. **Both are equalities once the truncation reaches $\lvert I\rvert$.**
   $T_m = \iota\lvert U\rvert$ for every $m \ge N$.

Clause 1 at $r = 0$ is the union bound $\iota\lvert U\rvert \le S_1$, and clause
2 at $r = 0$ is the trivial $\iota\lvert U\rvert \ge T_0 = 0$; the first
substantial even case is $r = 1$, where $T_2 = S_1 - S_2$.

## Facts & Assumptions

**Given:** A sieve family $X$, $I$, $(A_i)_{i \in I}$ with intersections $A_J$, union $U$, traces $T(x)$ and $t(x) := \lvert T(x)\rvert$ ([[def-a-sieve-family-and-its-intersections]]); $N := \lvert I\rvert$; the quantities $S_j$ and $T_m$ of the Statement; and, for $V \subseteq X$, the indicator $\mathbf{1}_V : X \to \mathbb{R}$ with value $1$ on $V$ and $0$ off it.

[L1] Indicator sums: $\sum_{p \in S}\mathbf{1}_W(p) = \iota\lvert W\rvert$ for a finite $S$ and $W \subseteq S$. Split $S$ into the disjoint blocks $W$ and $S \setminus W$ (clause 3 of [[thm-sum-rule]]) and apply the constant clause (c) of [[def-sum-over-a-finite-index-set]].

[L2] Sieve facts ([[def-a-sieve-family-and-its-intersections]]): $\mathcal{P}(I)$, $[I]^{j}$, $A_J$, $U$ and $T(x)$ are finite ([[cor-cardinality-of-the-power-set]], [[thm-subset-of-a-finite-set]], [[def-finite-cardinality]]); for nonempty $J$, $x \in A_J$ if and only if $J \subseteq T(x)$; $x \in U$ if and only if $t(x) \ge 1$; $\lvert [S]^{j}\rvert = \binom{\lvert S\rvert}{j}$ ([[def-binomial-coefficient]]); and every $J \subseteq I$ satisfies $\lvert J\rvert \le N$, by clause 2 of [[thm-subset-of-a-finite-set]], so $[I]^{j} = \varnothing$ whenever $j > N$.

[L3] Splitting a sum along a partition of its index set ([[thm-sum-rule]], clause 3); and, for sums over a finite index set, the bridge $\sum_{i \in n}u_i = \sum_{i<n}u_i$, the empty index set and the constant summand ([[def-sum-over-a-finite-index-set]], clauses (a) and (c)).

[L4] Interchange of a double sum over two finite index sets ([[lem-a-double-sum-over-finite-index-sets-may-be-interchanged]]).

[L5] Real finite-sum laws, read over a finite index set through an enumeration ([[def-sum-over-a-finite-index-set]]): additivity, scaling, splitting at an index and monotonicity ([[lem-finite-sum-laws]], clauses 1 to 4, [[def-finite-sum]]).

[L6] The partial alternating row sum: $\sum_{j<M+1}(-1)^{j}\iota\binom{t}{j} = (-1)^{M}\iota\binom{t-1}{M}$ for every $t \ge 1$ and every $M$ ([[lem-the-partial-alternating-sum-of-a-binomial-row]]).

[L7] Powers of $-1$: $(-1)^{0} = 1$ and $(-1)^{p+1} = -(-1)^{p}$ ([[def-integer-power]]); and $(-1)^{2r} = 1$, $(-1)^{2r+1} = -1$. For the last two, $(-1)^{2r} = \big((-1)^{2}\big)^{r} = 1^{r}$ by clause 1 of [[lem-power-laws]], and $1^{r} = \iota(1)^{r} = \iota(1^{r}) = \iota(1) = 1$ by clauses (b) and (d) of [[def-nat-power]] with [[def-canonical-natural]]; then $(-1)^{2r+1} = (-1)^{2r}\cdot(-1) = -1$.

[L8] Inclusion and exclusion, clause 1 ([[thm-inclusion-exclusion]]).

[L9] Boundary values of a binomial coefficient: $\binom{n}{j} = 0$ whenever $j > n$, so in particular $\binom{0}{j} = 0$ for $j \ge 1$ ([[def-binomial-coefficient]]); $\iota(0) = 0$ and $\iota(p) \ge 0$ for every natural $p$, $\iota$ being strictly increasing with $\iota(0) = 0$ ([[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clause 7).

[L10] $\mathbb{R}$ is an ordered field ([[def-ordered-field]], [[def-field]]).

## Proof

**Proof technique:** direct.

1.1 Each $S_j$ with $j \ge 1$ counted pointwise. By [L1], $\iota\lvert A_J\rvert = \sum_{x \in X}\mathbf{1}_{A_J}(x)$ for every $J \subseteq I$; interchanging the resulting double sum by [L4] gives $S_j = \sum_{x \in X}\big(\sum_{J \in [I]^{j}}\mathbf{1}_{A_J}(x)\big)$. For $j \ge 1$ every $J \in [I]^{j}$ is nonempty, so by [L2] the inner sum is $\iota$ of the number of $J \in [I]^{j}$ with $J \subseteq T(x)$, that is $\iota\lvert [T(x)]^{j}\rvert = \iota\binom{t(x)}{j}$. Hence $S_j = \sum_{x \in X}\iota\binom{t(x)}{j}$ for every $j \ge 1$. [L1, L2, L4]

1.2 The pointwise truncation. For $x \in X$ and $m \in \mathbb{N}$ put $c_m(x) := \sum_{i<m}(-1)^{i}\,\iota\binom{t(x)}{i+1}$. [construct]

1.3 A closed form for $c_m(x)$. Splitting $\sum_{j<m+1}(-1)^{j}\iota\binom{t(x)}{j}$ at the index $1$ by [L5] gives $(-1)^{0}\iota\binom{t(x)}{0} + \sum_{i<m}(-1)^{1+i}\iota\binom{t(x)}{1+i}$, which by [L7] and scaling is $1 - c_m(x)$; hence $c_m(x) = 1 - \sum_{j<m+1}(-1)^{j}\iota\binom{t(x)}{j}$. So $c_m(x) = 1 - (-1)^{m}\iota\binom{t(x)-1}{m}$ when $t(x) \ge 1$, by [L6]. When $t(x) = 0$ every term of $c_m(x)$ is $\iota\binom{0}{i+1} = 0$ by [L9], so $c_m(x) = 0$. [L5, L6, L7, L9]

2.1 $T_m$ counted pointwise. Scaling step 1.1 by $(-1)^{i}$ gives $(-1)^{i}S_{i+1} = \sum_{x \in X}(-1)^{i}\iota\binom{t(x)}{i+1}$ for every $i$; summing over $i \in m$, using $\sum_{i \in m} = \sum_{i<m}$ from [L3] and interchanging by [L4], gives $T_m = \sum_{x \in X}c_m(x)$ for every $m \in \mathbb{N}$. [step 1.1, step 1.2, L3, L4, L5]

2.2 The pointwise comparison. Let $x \in X$ and $r \in \mathbb{N}$. If $x \notin U$ then $t(x) = 0$ by [L2], so $c_{2r}(x) = c_{2r+1}(x) = 0 = \mathbf{1}_U(x)$ by step 1.3. If $x \in U$ then $t(x) \ge 1$, and step 1.3 with [L7] gives $c_{2r+1}(x) = 1 + \iota\binom{t(x)-1}{2r+1} \ge 1 = \mathbf{1}_U(x)$ and $c_{2r}(x) = 1 - \iota\binom{t(x)-1}{2r} \le 1 = \mathbf{1}_U(x)$, since $\iota$ of a natural number is at least $0$ by [L9]. So $c_{2r+1}(x) \ge \mathbf{1}_U(x) \ge c_{2r}(x)$ for every $x \in X$. [step 1.3, L2, L7, L9, L10]

3.1 Clauses 1 and 2. Monotonicity of a finite sum over the index set $X$, applied to step 2.2, gives $\sum_{x \in X}c_{2r}(x) \le \sum_{x \in X}\mathbf{1}_U(x) \le \sum_{x \in X}c_{2r+1}(x)$; the middle term is $\iota\lvert U\rvert$ by [L1] and the outer two are $T_{2r}$ and $T_{2r+1}$ by step 2.1. [step 2.1, step 2.2, L1, L5]

4.1 Clause 3. The sets $[I]^{i+1}$ for $i \in N$ are pairwise disjoint with union $\mathcal{P}(I)\setminus\{\varnothing\}$, since a nonempty $J \subseteq I$ has exactly one cardinality and it satisfies $1 \le \lvert J\rvert \le N$ by [L2]; splitting the sieve sum along this partition, and using $(-1)^{\lvert J\rvert + 1} = (-1)^{i+2} = (-1)^{i}$ for $J \in [I]^{i+1}$ from [L7], gives $\sum_{J \in \mathcal{P}(I)\setminus\{\varnothing\}}(-1)^{\lvert J\rvert+1}\iota\lvert A_J\rvert = \sum_{i<N}(-1)^{i}S_{i+1} = T_N$, which equals $\iota\lvert U\rvert$ by [L8]. For $m \ge N$, splitting $T_m$ at the index $N$ by [L5] and noting that $i \ge N$ forces $i+1 > N$, hence $[I]^{i+1} = \varnothing$ and $S_{i+1} = 0$ by [L2], [L3] and [L9], gives $T_m = T_N = \iota\lvert U\rvert$; with step 3.1 this completes all three clauses. [step 3.1, L2, L3, L5, L7, L8, L9] ∎

## Remarks

- **Why the parity is written as $2r$ and $2r+1$.** Nothing among this page's declared prerequisites defines the words *even* and *odd*, and the statement needs only the two families of truncation depths, which the two displayed forms name directly. The sign facts $(-1)^{2r} = 1$ and $(-1)^{2r+1} = -1$ are then the whole use of parity in the proof.

- **Where the error term comes from.** Step 1.3 says that a truncation at depth $m$ misses the indicator of $U$ at a point of trace size $t \ge 1$ by exactly $(-1)^{m}\iota\binom{t-1}{m}$, a single binomial coefficient. The sign of that term is what makes the inequality go one way for one parity and the other way for the other, and its nonnegativity is what makes the inequality hold at all.

- **A point outside the union contributes nothing at any depth**, which is why no hypothesis relating $X$ to $U$ appears. The ambient set may be much larger than the union without affecting either side.
