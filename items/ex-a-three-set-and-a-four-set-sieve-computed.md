---
id: ex-a-three-set-and-a-four-set-sieve-computed
kind: example
title: "The sieve run in full on three explicit finite sets and then on four, with every nonempty intersection listed"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-inclusion-exclusion, def-a-sieve-family-and-its-intersections, def-finite-cardinality,
       def-sum-over-a-finite-index-set, def-canonical-natural, def-integer-power,
       def-binomial-coefficient, thm-sum-rule, def-injection-surjection-bijection,
       thm-subset-of-a-finite-set, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Inclusion-exclusion principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
    - title: "Cardinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality"
    - title: "Guichard, The Inclusion-Exclusion Formula (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Combinatorics_and_Graph_Theory_%28Guichard%29/02%3A_Inclusion-Exclusion/2.01%3A_The_Inclusion-Exclusion_Formula"
pipeline_run: null
---

## Example

Take the ambient set $X := 8 = \{0,1,2,3,4,5,6,7\}$ and the subsets

$$A_0 := \{0,1,2,3\}, \qquad A_1 := \{2,3,4,5\}, \qquad A_2 := \{3,4,6\}, \qquad A_3 := \{5,6,7\}.$$

**First the family $(A_i)_{i \in 3}$**, a sieve family with ambient set $X$ and
index set $I := 3$ ([[def-a-sieve-family-and-its-intersections]]). Every
intersection $A_J$ for $\varnothing \ne J \subseteq 3$ is listed:

| $J$ | $A_J$ | $\lvert A_J\rvert$ |
|---|---|---|
| $\{0\}$ | $\{0,1,2,3\}$ | $4$ |
| $\{1\}$ | $\{2,3,4,5\}$ | $4$ |
| $\{2\}$ | $\{3,4,6\}$ | $3$ |
| $\{0,1\}$ | $\{2,3\}$ | $2$ |
| $\{0,2\}$ | $\{3\}$ | $1$ |
| $\{1,2\}$ | $\{3,4\}$ | $2$ |
| $\{0,1,2\}$ | $\{3\}$ | $1$ |

The union is $A_0 \cup A_1 \cup A_2 = \{0,1,2,3,4,5,6\}$, of size $7$, and the
sieve returns $(4+4+3) - (2+1+2) + 1 = 7$. The complementary form returns
$8 - (4+4+3) + (2+1+2) - 1 = 1$, and indeed
$X \setminus (A_0\cup A_1\cup A_2) = \{7\}$.

**Now the family $(A_i)_{i \in 4}$**, with $A_3$ adjoined and $I := 4$:

| $J$ | $A_J$ | $\lvert A_J\rvert$ |
|---|---|---|
| $\{0\}$ | $\{0,1,2,3\}$ | $4$ |
| $\{1\}$ | $\{2,3,4,5\}$ | $4$ |
| $\{2\}$ | $\{3,4,6\}$ | $3$ |
| $\{3\}$ | $\{5,6,7\}$ | $3$ |
| $\{0,1\}$ | $\{2,3\}$ | $2$ |
| $\{0,2\}$ | $\{3\}$ | $1$ |
| $\{0,3\}$ | $\varnothing$ | $0$ |
| $\{1,2\}$ | $\{3,4\}$ | $2$ |
| $\{1,3\}$ | $\{5\}$ | $1$ |
| $\{2,3\}$ | $\{6\}$ | $1$ |
| $\{0,1,2\}$ | $\{3\}$ | $1$ |
| $\{0,1,3\}$ | $\varnothing$ | $0$ |
| $\{0,2,3\}$ | $\varnothing$ | $0$ |
| $\{1,2,3\}$ | $\varnothing$ | $0$ |
| $\{0,1,2,3\}$ | $\varnothing$ | $0$ |

The union is now all of $X$, of size $8$, and the sieve returns
$(4+4+3+3) - (2+1+0+2+1+1) + (1+0+0+0) - 0 = 14 - 7 + 1 = 8$. The complementary
form returns $8 - 14 + 7 - 1 + 0 = 0$, and indeed
$X \setminus (A_0\cup A_1\cup A_2\cup A_3) = \varnothing$.

## Facts & Assumptions

**Given:** The ambient set $X = 8$ and the subsets $A_0, A_1, A_2, A_3$ above, together with the two index sets $I = 3$ and $I = 4$ and the canonical natural $\iota$ ([[def-canonical-natural]]).

[L1] A listed set with distinct entries has as many elements as entries: if $x_0, \dots, x_{k-1}$ are distinct then $j \mapsto x_j$ is a bijection of $k$ onto $\{x_0,\dots,x_{k-1}\}$, so that set is finite of cardinality $k$ ([[def-finite-cardinality]], clauses (a) and (c), [[def-injection-surjection-bijection]]).

[L2] For a sieve family with ambient set $X$, finite index set $I$, union $U=\bigcup_{i\in I}A_i$ and $A_\varnothing=X$, the sieve identity and its complementary form are $$\iota|U|=\sum_{\varnothing\ne J\subseteq I}(-1)^{|J|+1}\iota|A_J|, \qquad \iota|X\setminus U|=\sum_{J\subseteq I}(-1)^{|J|}\iota|A_J|$$ ([[thm-inclusion-exclusion]], [[def-a-sieve-family-and-its-intersections]]).

[L3] Every $J\subseteq I$ is finite with a unique natural cardinality $|J|\le|I|$, while $[I]^j=\{J\subseteq I:|J|=j\}$; hence the levels $[I]^j$ for $1\le j\le|I|$ are pairwise disjoint and have union $\mathcal P(I)\setminus\{\varnothing\}$. The sign attached to $J$ is $(-1)^{|J|+1}$, positive for odd $|J|$ and negative for even $|J|$ ([[def-finite-cardinality]], [[thm-subset-of-a-finite-set]], [[def-binomial-coefficient]], [[thm-sum-rule]], clause 3, [[def-sum-over-a-finite-index-set]], [[def-integer-power]]).

[L4] $\iota$ is additive and injective, so the arithmetic of the displayed sums may be carried out on the natural numbers and read in $\mathbb{R}$ ([[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clauses 0 and 7, [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 The three-set family. $A_0$, $A_1$, $A_2$ are subsets of $X = 8$ with $\lvert A_0\rvert = 4$, $\lvert A_1\rvert = 4$ and $\lvert A_2\rvert = 3$ by [L1], each entry list being strictly increasing and so having distinct entries. [given, L1]

1.2 Its intersections. Intersecting the listed sets entry by entry gives $A_{\{0,1\}} = \{2,3\}$, $A_{\{0,2\}} = \{3\}$, $A_{\{1,2\}} = \{3,4\}$ and $A_{\{0,1,2\}} = \{3\}$, of sizes $2$, $1$, $2$ and $1$ by [L1]. [given, L1]

1.3 Its union and complement. An element of $X$ lies in $A_0\cup A_1\cup A_2$ unless it is $7$, since $0,1,2,3 \in A_0$, $4,5 \in A_1$ and $6 \in A_2$ while $7$ belongs to none of the three listed sets; so the union is $\{0,1,2,3,4,5,6\}$, of size $7$, and its complement in $X$ is $\{7\}$, of size $1$. [given, L1]

1.4 The four-set family. Adjoining $A_3 = \{5,6,7\}$, of size $3$, the remaining intersections are $A_{\{0,3\}} = \varnothing$, $A_{\{1,3\}} = \{5\}$, $A_{\{2,3\}} = \{6\}$, $A_{\{0,1,3\}} = A_{\{0,2,3\}} = A_{\{1,2,3\}} = \varnothing$ and $A_{\{0,1,2,3\}} = \varnothing$, of sizes $0$, $1$, $1$, $0$, $0$, $0$ and $0$ by [L1] and clause (b) of [[def-finite-cardinality]]. [given, L1]

1.5 The four-set union. Now $7 \in A_3$, so the union is all of $X$, of size $8$, and its complement in $X$ is empty, of size $0$. [given, L1]

2.1 The sieve for three sets. Grouping by size as in [L3], clause 1 of [L2] reads $\iota\lvert A_0\cup A_1\cup A_2\rvert = \iota(4+4+3) - \iota(2+1+2) + \iota(1) = \iota(11) - \iota(5) + \iota(1) = \iota(7)$, which matches step 1.3. [step 1.1, step 1.2, step 1.3, L2, L3, L4]

2.2 The complementary form for three sets. Clause 2 of [L2] adds the term at $J = \varnothing$, which is $\iota\lvert A_\varnothing\rvert = \iota\lvert X\rvert = \iota(8)$, and reverses every sign, giving $\iota(8) - \iota(11) + \iota(5) - \iota(1) = \iota(1)$, which matches the complement computed in step 1.3. [step 1.1, step 1.2, step 1.3, L2, L3, L4]

2.3 The sieve for four sets. The singleton terms now sum to $4+4+3+3 = 14$, the pair terms to $2+1+0+2+1+1 = 7$, the triple terms to $1+0+0+0 = 1$ and the single four-element term is $0$; so clause 1 of [L2] reads $\iota(14) - \iota(7) + \iota(1) - \iota(0) = \iota(8)$, which matches step 1.5, and clause 2 reads $\iota(8) - \iota(14) + \iota(7) - \iota(1) + \iota(0) = \iota(0)$, again matching. [step 1.1, step 1.2, step 1.4, step 1.5, L2, L3, L4]

3.1 Both families therefore satisfy both forms of the identity, with every intersection exhibited rather than inferred. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Adjoining one set changes every level of the sum.** Passing from three sets to four adds a singleton term, three pair terms, three triple terms and one four-element term, and the totals at each level move accordingly; what stays fixed is that the alternating combination reproduces the size of the union.

- **The terms that vanish are not omitted.** $A_{\{0,3\}}$ and the three four-element-family triples are empty, so their terms are $0$; they are still terms of the sum, and writing them keeps the count of terms at each level equal to the number of subsets of that size, which is what the grouping in [L3] asserts.

- **Where the complementary form gets its extra term.** It runs over all subsets of the index set, including $\varnothing$, whose term is $\iota\lvert X\rvert$. That is the only place the ambient set enters the arithmetic, and it is why the ambient set has to be named as part of the family.
