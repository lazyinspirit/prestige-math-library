---
id: thm-inclusion-exclusion
kind: theorem
title: "Inclusion and exclusion: $\\iota\\lvert\\bigcup_{i \\in I} A_i\\rvert = \\sum_{\\varnothing \\ne J \\subseteq I}(-1)^{\\lvert J\\rvert + 1}\\,\\iota\\lvert A_J\\rvert$, together with the complementary form counting the elements in none of the $A_i$"
status: draft
origin: session
deps: [def-a-sieve-family-and-its-intersections, lem-a-double-sum-over-finite-index-sets-may-be-interchanged,
       thm-sum-rule, def-sum-over-a-finite-index-set, cor-binomial-theorem-consequences,
       def-binomial-coefficient, def-canonical-natural, def-integer-power,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, lem-finite-sum-laws,
       def-finite-sum, def-finite-cardinality, thm-subset-of-a-finite-set,
       cor-cardinality-of-the-power-set, def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Inclusion-exclusion principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 2"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Statement

Let $X$, $I$, $(A_i)_{i \in I}$ and the intersections $A_J$ be a sieve family
([[def-a-sieve-family-and-its-intersections]]), let $U := \bigcup_{i \in I}A_i$,
and let $\iota : \mathbb{N} \to \mathbb{R}$ be the canonical natural
([[def-canonical-natural]]). Then, in $\mathbb{R}$:

1. **The sieve identity.**
   $$\iota\lvert U\rvert \;=\; \sum_{J \in \mathcal{P}(I)\setminus\{\varnothing\}} (-1)^{\lvert J\rvert + 1}\,\iota\lvert A_J\rvert ,$$
   the sum being over the finite index set of nonempty subsets of $I$.
2. **The complementary form.**
   $$\iota\lvert X \setminus U\rvert \;=\; \sum_{J \in \mathcal{P}(I)} (-1)^{\lvert J\rvert}\,\iota\lvert A_J\rvert ,$$
   the sum now being over **all** subsets of $I$, its term at $J = \varnothing$
   being $\iota\lvert X\rvert$ by the stipulation $A_\varnothing = X$.

The identities are stated in $\mathbb{R}$ because their terms carry signs and
$\mathbb{N}$ has no subtraction; every cardinality appearing is a natural number
carried into $\mathbb{R}$ by $\iota$, and $\iota$ is injective, so an identity
between two of them may be read back in $\mathbb{N}$
([[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clause 7).

**Both readings at $I = \varnothing$ are part of the statement.** Then
$U = \varnothing$ and clause 1 reads $0 = 0$, the index set of its sum being
empty. Clause 2 reads $\iota\lvert X\rvert = \iota\lvert A_\varnothing\rvert$,
its sum having the single term at $J = \varnothing$. At $\lvert J\rvert = 1$ the
sign in clause 1 is $(-1)^{2} = 1$ and $A_{\{i\}} = A_i$, so the singleton terms
enter with a plus sign.

## Facts & Assumptions

**Given:** A sieve family $X$, $I$, $(A_i)_{i \in I}$ with intersections $A_J$, union $U$, traces $T(x)$ and $t(x) := \lvert T(x)\rvert$, all as in [[def-a-sieve-family-and-its-intersections]]; the abbreviation $\mathcal{J} := \mathcal{P}(I)\setminus\{\varnothing\}$; and, for $V \subseteq X$, the **indicator** $\mathbf{1}_V : X \to \mathbb{R}$ with $\mathbf{1}_V(x) = 1$ for $x \in V$ and $\mathbf{1}_V(x) = 0$ otherwise.

[L1] Sieve facts ([[def-a-sieve-family-and-its-intersections]]): $\mathcal{P}(I)$, $\mathcal{J}$, each $[S]^{j}$, each $A_J$, $U$ and each $T(x)$ are finite ([[cor-cardinality-of-the-power-set]], [[thm-subset-of-a-finite-set]], [[def-finite-cardinality]]); for nonempty $J$, $x \in A_J$ if and only if $J \subseteq T(x)$; $x \in U$ if and only if $T(x) \ne \varnothing$; and $\lvert [S]^{j}\rvert = \binom{\lvert S\rvert}{j}$ ([[def-binomial-coefficient]]).

[L2] Splitting a sum along a partition of its index set, and the sum rule for two disjoint blocks ([[thm-sum-rule]], clauses 3 and 1).

[L3] Sums over a finite index set ([[def-sum-over-a-finite-index-set]]): the value is independent of the enumeration used; $\sum_{i \in n}a_i = \sum_{i<n}a_i$ (clause (a)); a sum over $\varnothing$ is $0$ and a constant real summand gives $\sum_{i \in S}\lambda = \iota(\lvert S\rvert)\,\lambda$ (clause (c)).

[L4] Interchange of a double sum over two finite index sets ([[lem-a-double-sum-over-finite-index-sets-may-be-interchanged]]).

[L5] Additivity and scaling of a real finite sum over a finite index set: $\sum_{i \in S}(u_i + v_i) = \sum_{i \in S}u_i + \sum_{i \in S}v_i$ and $\sum_{i \in S}\lambda u_i = \lambda\sum_{i \in S}u_i$. Both are clauses 1 and 2 of [[lem-finite-sum-laws]] read through an enumeration of $S$ ([[def-sum-over-a-finite-index-set]], [[def-finite-sum]]).

[L6] Partition of a power set by cardinality: for a finite $S$ with $N := \lvert S\rvert$, the sets $[S]^{j}$ for $j \in \sigma(N)$ are pairwise disjoint with union $\mathcal{P}(S)$, since a subset of $S$ has exactly one cardinality and that cardinality is at most $N$ ([[thm-subset-of-a-finite-set]], clause 2).

[L7] Powers of $-1$ and the alternating row sum: $(-1)^{0} = 1$ and $(-1)^{p+1} = -(-1)^{p}$ ([[def-integer-power]]); and $\sum_{j<t+1}(-1)^{j}\,\iota\binom{t}{j} = 0$ for every $t \ge 1$ ([[cor-binomial-theorem-consequences]], clause 2). The hypothesis $t \ge 1$ there is not decoration: at $t = 0$ that sum is $1$.

[L8] $\iota$ is additive and injective ([[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clauses 0 and 7), and $\mathbb{R}$ is an ordered field, so subtraction is available ([[def-ordered-field]], [[def-field]]).

## Proof

**Proof technique:** direct.

1.1 Indicator sums. For every $V \subseteq X$ one has $\sum_{x \in X}\mathbf{1}_V(x) = \iota\lvert V\rvert$: the sets $V$ and $X \setminus V$ are disjoint finite sets with union $X$, so [L2] splits the sum into $\sum_{x \in V}1 + \sum_{x \in X\setminus V}0$, which is $\iota\lvert V\rvert\cdot 1 + \iota\lvert X\setminus V\rvert\cdot 0 = \iota\lvert V\rvert$ by the constant clause of [L3]. [L1, L2, L3, construct]

1.2 The double list. Define $h : \mathcal{J} \times X \to \mathbb{R}$ by $h(J,x) := (-1)^{\lvert J\rvert + 1}\,\mathbf{1}_{A_J}(x)$; both $\mathcal{J}$ and $X$ are finite by [L1], so both iterated sums of $h$ are defined. [L1, construct]

1.3 Fix $x \in X$ and write $t := t(x)$. The sets $\mathcal{J}_1 := \{\,J \in \mathcal{J} : J \subseteq T(x)\,\}$ and $\mathcal{J}\setminus\mathcal{J}_1$ are disjoint with union $\mathcal{J}$; by [L1] we have $\mathbf{1}_{A_J}(x) = 1$ for $J \in \mathcal{J}_1$ and $\mathbf{1}_{A_J}(x) = 0$ for $J \in \mathcal{J}\setminus\mathcal{J}_1$, so splitting by [L2] gives $\sum_{J \in \mathcal{J}}h(J,x) = \sum_{J \in \mathcal{J}_1}(-1)^{\lvert J\rvert + 1}$, and $\mathcal{J}_1 = \mathcal{P}(T(x))\setminus\{\varnothing\}$. [L1, L2, L3]

1.4 Grouping the subsets of $T(x)$ by size. By [L6] applied to $T(x)$, then the constant clause of [L3] on each block, then scaling by $-1$ and $(-1)^{j+1} = -(-1)^{j}$ from [L7], $$\sum_{J \in \mathcal{P}(T(x))}(-1)^{\lvert J\rvert + 1} = \sum_{j<t+1}\Big(\sum_{J \in [T(x)]^{j}}(-1)^{j+1}\Big) = \sum_{j<t+1}\iota\binom{t}{j}\,(-1)^{j+1} = -\sum_{j<t+1}(-1)^{j}\,\iota\binom{t}{j}.$$ [L1, L3, L5, L6, L7]

1.5 Splitting off the empty subset. $\{\varnothing\}$ and $\mathcal{P}(T(x))\setminus\{\varnothing\}$ are disjoint with union $\mathcal{P}(T(x))$, so [L2] and [L7] give $\sum_{J \in \mathcal{P}(T(x))}(-1)^{\lvert J\rvert + 1} = (-1)^{0+1} + \sum_{J \in \mathcal{P}(T(x))\setminus\{\varnothing\}}(-1)^{\lvert J\rvert + 1} = -1 + \sum_{J \in \mathcal{P}(T(x))\setminus\{\varnothing\}}(-1)^{\lvert J\rvert + 1}$. [L2, L3, L7]

2.1 The inner sum is the indicator of $U$. If $t \ge 1$ then [L7] makes the right-hand side of step 1.4 zero, so step 1.5 gives $\sum_{J \in \mathcal{P}(T(x))\setminus\{\varnothing\}}(-1)^{\lvert J\rvert + 1} = 1$. If $t = 0$ then $T(x) = \varnothing$, so $\mathcal{P}(T(x))\setminus\{\varnothing\} = \varnothing$ and that sum is $0$ by [L3]. Since $x \in U$ exactly when $t \ge 1$ by [L1], step 1.3 gives $\sum_{J \in \mathcal{J}}h(J,x) = \mathbf{1}_U(x)$ for every $x \in X$. [step 1.3, step 1.4, step 1.5, L1, L3, L7]

2.2 The outer sum recovers the sieve terms. Scaling by the constant $(-1)^{\lvert J\rvert+1}$ and applying step 1.1 to $V = A_J$ gives $\sum_{x \in X}h(J,x) = (-1)^{\lvert J\rvert + 1}\,\iota\lvert A_J\rvert$ for every $J \in \mathcal{J}$. [step 1.1, L5]

3.1 Clause 1. Summing step 2.2 over $\mathcal{J}$, interchanging by [L4], and then using step 2.1 and step 1.1 with $V = U$: $$\sum_{J \in \mathcal{J}}(-1)^{\lvert J\rvert + 1}\iota\lvert A_J\rvert = \sum_{J \in \mathcal{J}}\sum_{x \in X}h(J,x) = \sum_{x \in X}\sum_{J \in \mathcal{J}}h(J,x) = \sum_{x \in X}\mathbf{1}_U(x) = \iota\lvert U\rvert .$$ [step 1.1, step 2.1, step 2.2, L4]

4.1 Clause 2. The sets $U$ and $X \setminus U$ are disjoint finite sets with union $X$, so $\lvert X\rvert = \lvert U\rvert + \lvert X\setminus U\rvert$ by [L2] and hence $\iota\lvert X\setminus U\rvert = \iota\lvert X\rvert - \iota\lvert U\rvert$ by the additivity of $\iota$ in [L8]. On the other side, $\{\varnothing\}$ and $\mathcal{J}$ are disjoint with union $\mathcal{P}(I)$, so [L2], [L3] and [L7] give $\sum_{J \in \mathcal{P}(I)}(-1)^{\lvert J\rvert}\iota\lvert A_J\rvert = \iota\lvert A_\varnothing\rvert + \sum_{J \in \mathcal{J}}(-1)^{\lvert J\rvert}\iota\lvert A_J\rvert = \iota\lvert X\rvert - \sum_{J \in \mathcal{J}}(-1)^{\lvert J\rvert+1}\iota\lvert A_J\rvert$, which by step 3.1 is $\iota\lvert X\rvert - \iota\lvert U\rvert$. The two right-hand sides agree, which is clause 2. [step 3.1, L2, L3, L5, L7, L8] ∎

## Remarks

- **Where the alternating row sum is spent, and why its hypothesis matters.** The whole content of the proof is that each $x$ contributes $1$ to the right-hand side when it lies in some $A_i$ and $0$ otherwise. The first case is the vanishing of the full alternating row sum of $t(x)$, which holds only for $t(x) \ge 1$; the second case is not that identity at all but the emptiness of the index set. Applying the identity at $t(x) = 0$ would give $1$, not $0$, and would make the theorem false.

- **The empty intersection is used once.** Only in clause 2, at the term $J = \varnothing$, where $A_\varnothing = X$ contributes $\iota\lvert X\rvert$. Clause 1 never mentions it.

- **No choice principle is used.** A sum over a finite index set is defined because all its enumerations agree, not by selecting one, and the family $(A_i)_{i \in I}$ is given as a function.
