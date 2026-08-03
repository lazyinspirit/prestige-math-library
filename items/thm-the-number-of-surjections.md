---
id: thm-the-number-of-surjections
kind: theorem
title: "The number of surjections from an $n$-element set onto a $k$-element set is $\\sum_{i<k+1}(-1)^{i}\\binom{k}{i}(k-i)^{n}$, read in $\\mathbb{R}$ through $\\iota$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-inclusion-exclusion, def-a-sieve-family-and-its-intersections,
       thm-cardinality-of-a-set-of-functions, def-nat-power, def-binomial-coefficient,
       thm-sum-rule, def-sum-over-a-finite-index-set, def-canonical-natural,
       def-integer-power, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-finite-cardinality, thm-subset-of-a-finite-set, def-injection-surjection-bijection,
       def-finite-sum, cor-cardinality-of-the-power-set, def-nat-finite-sum-and-product,
       cor-binomial-theorem-consequences]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Surjective function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Surjective_function"
    - title: "Inclusion-exclusion principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
    - title: "Twelvefold way (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Twelvefold_way"
    - title: "Algebraic Combinatorics Blueprint: Surjections"
      url: "https://faabian.github.io/algebraic-combinatorics/blueprint/sect0032.html"
pipeline_run: null
---

## Statement

Let $A$ and $B$ be finite sets, $n := \lvert A\rvert$ and $k := \lvert B\rvert$,
and write

$$\operatorname{Surj}(A,B) := \{\, f : f \text{ is a surjection } A \to B \,\}$$

([[def-injection-surjection-bijection]]). Then $\operatorname{Surj}(A,B)$ is
finite and, in $\mathbb{R}$,

$$\iota\lvert \operatorname{Surj}(A,B)\rvert \;=\; \sum_{i<k+1}(-1)^{i}\,\iota\binom{k}{i}\,\iota\big((k-i)^{\,n}\big),$$

where $\iota$ is the canonical natural ([[def-canonical-natural]]), $(k-i)^{n}$
is the $\mathbb{N}$-valued power of [[def-nat-power]], and $k-i$ is the truncated
difference of [[def-nat-finite-sum-and-product]], which is the ordinary one
throughout the range $i \le k$ of the sum.

**All three degenerate readings are part of the statement, and each is computed
rather than stipulated.**

- $n = 0$ and $k = 0$. There is exactly one function $\varnothing \to \varnothing$,
  the empty function, and it is a surjection, so the count is $1$. The sum has
  the single term $(-1)^{0}\iota\binom{0}{0}\,\iota(0^{0})$, and $0^{0} = 1$ is
  the base clause of [[def-nat-power]], so the sum is $1$ too.
- $n = 0$ and $k \ge 1$. No function $\varnothing \to B$ is a surjection, so the
  count is $0$; and every factor $\iota\big((k-i)^{0}\big)$ is $1$, so the sum is
  the full alternating row sum $\sum_{i<k+1}(-1)^{i}\iota\binom{k}{i}$, which is
  $0$ **because $k \ge 1$** ([[cor-binomial-theorem-consequences]], clause 2).
- $n \ge 1$ and $k = 0$. There is no function from a nonempty set to
  $\varnothing$, so the count is $0$; and the sum has the single term
  $\iota(0^{n})$, which is $0$ because $n \ge 1$ ([[def-nat-power]], clause (a)).

## Facts & Assumptions

**Given:** Finite sets $A$ and $B$ with $n := \lvert A\rvert$ and $k := \lvert B\rvert$; the set $\operatorname{Map}(A,B)$ of all functions $A \to B$; and, for $b \in B$, the set $F_b := \{\, f \in \operatorname{Map}(A,B) : b \notin f[A] \,\}$ of functions missing the value $b$.

[L1] $\operatorname{Map}(A,B)$ is finite with $\lvert\operatorname{Map}(A,B)\rvert = k^{\,n}$. This is [[thm-cardinality-of-a-set-of-functions]] with its $A$ taken to be $B$ and its $B$ taken to be $A$, so that its $A^{B}$ is the set of functions $A \to B$ and its formula reads $\lvert B\rvert^{\lvert A\rvert} = k^{\,n}$ ([[def-nat-power]]).

[L2] $(F_b)_{b \in B}$ is a family of subsets of the finite set $X := \operatorname{Map}(A,B)$ indexed by the finite set $B$, hence a sieve family with ambient set $X$, and its intersections $F_J$ for $J \subseteq B$ satisfy $F_\varnothing = X$ ([[def-a-sieve-family-and-its-intersections]], [[thm-subset-of-a-finite-set]], [[def-finite-cardinality]]).

[L3] $f \in \operatorname{Map}(A,B)$ is a surjection exactly when $f[A] = B$, that is exactly when there is no $b \in B$ with $b \notin f[A]$ ([[def-injection-surjection-bijection]]). Hence $\operatorname{Surj}(A,B) = X \setminus \bigcup_{b \in B}F_b$, and it is finite as a subset of $X$ ([[thm-subset-of-a-finite-set]]).

[L4] For a finite sieve family $(F_b)_{b\in B}$ in $X$ with $F_\varnothing=X$, the complementary identity is $\iota|X\setminus\bigcup_{b\in B}F_b|=\sum_{J\in\mathcal P(B)}(-1)^{|J|}\iota|F_J|$ ([[thm-inclusion-exclusion]], clause 2).

[L5] For $J \subseteq B$: $\lvert J\rvert + \lvert B \setminus J\rvert = \lvert B\rvert$, so $\lvert B\setminus J\rvert = k - \lvert J\rvert$ ([[thm-sum-rule]], clause 1, and the truncated difference of [[def-nat-finite-sum-and-product]]).

[L6] Partition of a power set by cardinality: the sets $[B]^{i}$ for $i \in \sigma(k)$ are pairwise disjoint with union $\mathcal{P}(B)$, since a subset of $B$ has exactly one cardinality and it is at most $k$; and $\lvert [B]^{i}\rvert = \binom{k}{i}$ ([[thm-subset-of-a-finite-set]], clause 2, [[def-binomial-coefficient]], [[cor-cardinality-of-the-power-set]]).

[L7] Splitting a sum along a partition of its index set ([[thm-sum-rule]], clause 3); a constant real summand $\sum_{p \in S}\lambda = \iota(\lvert S\rvert)\lambda$ and the bridge $\sum_{i \in n}u_i = \sum_{i<n}u_i$ ([[def-sum-over-a-finite-index-set]], clauses (a) and (c)); and the real finite sum itself ([[def-finite-sum]]).

[L8] $\iota$ is injective and $(-1)^{0} = 1$ ([[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clause 7, [[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 The ambient set. Put $X := \operatorname{Map}(A,B)$; it is finite with $\lvert X\rvert = k^{\,n}$ by [L1]. [L1]

1.2 The sieve family. For $b \in B$ the set $F_b$ of functions missing $b$ is a subset of $X$, and by [L3] a function $f \in X$ is a surjection exactly when $f \notin \bigcup_{b \in B}F_b$; so $\operatorname{Surj}(A,B) = X \setminus \bigcup_{b \in B}F_b$ is the complement of the union of the sieve family $(F_b)_{b \in B}$ inside $X$. [L2, L3, construct]

1.3 The intersections are function sets. For every $J \subseteq B$, $F_J = \operatorname{Map}(A, B\setminus J)$: for $J \ne \varnothing$, $f \in F_J$ says that $f$ misses every $b \in J$, that is that $f$ takes all its values in $B \setminus J$; and for $J = \varnothing$ both sides are $\operatorname{Map}(A,B)$, the left by the stipulation $F_\varnothing = X$ of [L2]. Hence $\lvert F_J\rvert = \lvert B\setminus J\rvert^{\,n} = (k - \lvert J\rvert)^{\,n}$ by [L1] applied to $B \setminus J$ and by [L5]. [L1, L2, L5]

2.1 The sieve. Applying [L4] to the family of step 1.2 and substituting step 1.3, $\iota\lvert\operatorname{Surj}(A,B)\rvert = \sum_{J \in \mathcal{P}(B)}(-1)^{\lvert J\rvert}\,\iota\lvert F_J\rvert = \sum_{J \in \mathcal{P}(B)}(-1)^{\lvert J\rvert}\,\iota\big((k-\lvert J\rvert)^{\,n}\big)$. [step 1.2, step 1.3, L4]

3.1 Grouping the subsets of $B$ by size. Splitting the last sum along the partition of [L6] and using the constant clause of [L7] on each block, where the summand depends on $J$ only through $\lvert J\rvert = i$, gives $\sum_{J \in \mathcal{P}(B)}(-1)^{\lvert J\rvert}\iota\big((k-\lvert J\rvert)^{\,n}\big) = \sum_{i<k+1}\iota\binom{k}{i}\,(-1)^{i}\,\iota\big((k-i)^{\,n}\big)$. [step 2.1, L6, L7]

4.1 Combining steps 2.1 and 3.1 gives $\iota\lvert\operatorname{Surj}(A,B)\rvert = \sum_{i<k+1}(-1)^{i}\,\iota\binom{k}{i}\,\iota\big((k-i)^{\,n}\big)$, and $\operatorname{Surj}(A,B)$ is finite by [L3]; since $\iota$ is injective, the identity determines the count in $\mathbb{N}$. [step 2.1, step 3.1, L3, L8] ∎

## Remarks

- **The convention $0^{0} = 1$ is load bearing exactly once**, at $n = 0$ and $k = 0$, where the formula returns $\iota(0^{0})$ and the truth is that the empty function is a surjection onto the empty set. It is not a convenience: it is the base clause of the recursion defining natural exponentiation, and changing it would make the formula false at that single point.

- **Why the family is indexed by $B$ and not by $A$.** The sieve removes the functions that miss a value, and there is one condition per element of the codomain. This is also why the alternating sum runs to $k$ and not to $n$.

- **The count is a natural number.** The identity is stated in $\mathbb{R}$ because it carries signs, and $\iota$ is injective, so it pins down the natural number $\lvert\operatorname{Surj}(A,B)\rvert$ exactly.
