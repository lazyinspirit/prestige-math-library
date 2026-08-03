---
id: thm-erdos-szekeres
kind: theorem
title: "Every list of $mn+1$ pairwise distinct reals has a strictly increasing sublist of length $m+1$ or a strictly decreasing sublist of length $n+1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-a-monotone-sublist-of-a-finite-list-of-reals, lem-pigeonhole, thm-product-rule,
       def-finite-cardinality, thm-well-ordering-principle, def-ordered-field,
       def-injection-surjection-bijection, def-nat-order, lem-nat-order-is-membership,
       lem-nat-discrete, lem-nat-trichotomy, lem-nat-nonzero-is-successor,
       def-nat-finite-sum-and-product, def-natural-numbers, def-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
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
    - title: "Erdos-Szekeres theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Szekeres_theorem"
    - title: "Pigeonhole principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pigeonhole_principle"
    - title: "Longest increasing subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Longest_increasing_subsequence"
    - title: "Morris, Combinatorics: The Pigeonhole Principle (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Combinatorics_%28Morris%29/02%253A_Enumeration/10%253A_Other_Basic_Counting_Techniques/10.01%253A_The_Pigeonhole_Principle"
pipeline_run: null
---

## Statement

Let $m, n \in \mathbb{N}$ and let $a : (mn+1) \to \mathbb{R}$ be a pairwise
distinct finite list of reals of length $mn+1$
([[def-a-monotone-sublist-of-a-finite-list-of-reals]]). Then $a$ has a strictly
increasing sublist of length $m+1$ or a strictly decreasing sublist of length
$n+1$.

The length $mn+1$ is at least $1$ for all $m$ and $n$, so the statement has
content at every pair of indices. At $m = 0$ the list has one term and the
required increasing sublist has length $1$, which the single position supplies;
at $n = 0$ the same reading holds for the decreasing sublist, and the increasing
one of length $1$ is also available.

## Facts & Assumptions

**Given:** Naturals $m$ and $n$, the length $N := mn+1$, and a pairwise distinct list $a : N \to \mathbb{R}$. For $i < N$ and $L \ge 1$, call $s : L \to N$ an **increasing run ending at $i$** when $s$ is a strictly increasing sublist of $a$ (in both senses of [[def-a-monotone-sublist-of-a-finite-list-of-reals]]) with $s(L-1) = i$, and define a **decreasing run ending at $i$** in the same way with the values strictly decreasing.

[L1] A nonempty subset of $\mathbb{N}$ with an upper bound has a greatest element. Let $E \subseteq \mathbb{N}$ be nonempty with $E \subseteq \sigma(M)$ for some $M$. Every $e\in E$ then satisfies $e\le M$ by [[lem-nat-order-is-membership]], so the set $C := \{\, c \in \mathbb{N} : e \le c \text{ for every } e \in E \,\}$ contains $M$ and has a least element $c_0$ by [[thm-well-ordering-principle]]. If $c_0 \notin E$ then every $e \in E$ satisfies $e \le c_0$ and $e \ne c_0$, hence $e < c_0$ and $\sigma(e) \le c_0$ by [[lem-nat-discrete]]; since $E$ is nonempty, $c_0 \ne 0$, so $c_0 = \sigma(c_1)$ for some $c_1$ ([[lem-nat-nonzero-is-successor]]) and $e \le c_1$ for every $e \in E$, putting $c_1 \in C$ below $c_0$ and contradicting minimality. So $c_0 \in E$ and $c_0$ is the greatest element of $E$.

[L2] For every $i < N$ there is an increasing run and a decreasing run ending at $i$, both of length $1$: take $s : 1 \to N$ with $s(0) = i$, which is vacuously monotone in both senses ([[def-a-monotone-sublist-of-a-finite-list-of-reals]]).

[L3] Every run has length at most $N$: a run of length $L$ is injective into $N$, and there is no injection of $L$ into $N$ when $N < L$ ([[lem-pigeonhole]], clause 2, [[def-injection-surjection-bijection]], [[def-a-monotone-sublist-of-a-finite-list-of-reals]]).

[L4] Order facts in $\mathbb{N}$: $k < N \iff k \in N$, $N = \{k : k<N\}$ and $k < \sigma(M) \iff k \le M$ ([[lem-nat-order-is-membership]], [[def-nat-order]], [[def-natural-numbers]]); exactly one of $p<q$, $p=q$, $q<p$ holds ([[lem-nat-trichotomy]]); $p<q \iff \sigma(p) \le q$ ([[lem-nat-discrete]]); every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]); and the truncated difference of [[def-nat-finite-sum-and-product]], for which $1 \le L$ gives $(L-1)+1 = L$.

[L5] $\lvert m \times n\rvert = m\,n$ and $\lvert N\rvert = N$ ([[thm-product-rule]], clause 1, [[def-finite-cardinality]]); and there is no injection $\sigma(K) \to K$ for any $K \in \mathbb{N}$ ([[lem-pigeonhole]], clause 1). A bijection $m \times n \to mn$ exists because the two sets have the same cardinality ([[def-finite-cardinality]], clause (d)).

[L6] $\mathbb{R}$ is an ordered field, so its order is total and $a_i \ne a_j$ gives $a_i < a_j$ or $a_i > a_j$ ([[def-ordered-field]], [[def-field]]).

## Proof

**Proof technique:** contradiction.

1.1 If $m=0$ or $n=0$, then $N=mn+1=1$, and the one-term sublist ending at $0$ supplied by [L2] has the required length $1=m+1$ or $1=n+1$, respectively. Hence assume $m,n\ge1$ and suppose, for contradiction, that $a$ has neither required sublist. [L2, cases, assume-contra]

1.2 The two run lengths. For $i < N$ let $\mathrm{Inc}(i)$ be the set of lengths of increasing runs ending at $i$ and $\mathrm{Dec}(i)$ the set of lengths of decreasing runs ending at $i$. Both are nonempty by [L2] and both are contained in $\sigma(N)$ by [L3] and [L4], so both have a greatest element by [L1]; write $\mathrm{inc}(i)$ and $\mathrm{dec}(i)$ for those greatest elements. Both are at least $1$. [L1, L2, L3, L4, construct]

2.1 The bound imposed by the supposition. If some $\mathrm{inc}(i)$ were at least $m+1$, truncating a longest increasing run ending at $i$ to its first $m+1$ positions would give a strictly increasing sublist of length $m+1$; so $\mathrm{inc}(i) \le m$ for every $i < N$ by [L4], and likewise $\mathrm{dec}(i) \le n$. Combined with $\mathrm{inc}(i) \ge 1$ and $\mathrm{dec}(i) \ge 1$ from step 1.2, this gives $\mathrm{inc}(i)-1 < m$ and $\mathrm{dec}(i)-1 < n$, so the map $\Phi(i) := \big(\mathrm{inc}(i)-1,\ \mathrm{dec}(i)-1\big)$ sends $N$ into $m \times n$. [step 1.1, step 1.2, L4, construct]

2.2 Extending a run. Let $i < j < N$. If $a_i < a_j$ and $s$ is an increasing run of length $L := \mathrm{inc}(i)$ ending at $i$, then $s' : L+1 \to N$ defined by $s'\!\restriction\!L := s$ and $s'(L) := j$ is again a strictly increasing sublist: its indices increase because $s(L-1) = i < j$, and its values increase because $a_{s(p)} < a_{s(L-1)} = a_i < a_j$ for $p < L-1$. So $L+1 \in \mathrm{Inc}(j)$ and $\mathrm{inc}(j) \ge L+1 > \mathrm{inc}(i)$. Symmetrically, if $a_i > a_j$ then $\mathrm{dec}(j) > \mathrm{dec}(i)$. [step 1.2, L4, L6, construct]

3.1 $\Phi$ is injective. Let $i < j < N$; since $a$ is pairwise distinct, $a_i \ne a_j$, so $a_i < a_j$ or $a_i > a_j$ by [L6]. In the first case step 2.2 gives $\mathrm{inc}(i) \ne \mathrm{inc}(j)$, in the second $\mathrm{dec}(i) \ne \mathrm{dec}(j)$; either way $\Phi(i) \ne \Phi(j)$, because both run lengths are at least $1$, so $\mathrm{inc}(i) = (\mathrm{inc}(i)-1)+1$ by [L4] and equal first coordinates would force equal run lengths, and likewise for the second coordinate. As $i$ and $j$ were an arbitrary pair of distinct indices, $\Phi$ is injective. [step 2.1, step 2.2, L4, L6]

4.1 The contradiction. Composing $\Phi$ with a bijection $m \times n \to mn$ from [L5] gives an injection of $N = \sigma(mn)$ into $mn$, which [L5] forbids. So the supposition of step 1.1 is untenable, and $a$ has a strictly increasing sublist of length $m+1$ or a strictly decreasing sublist of length $n+1$. [step 2.1, step 3.1, L5, discharge-contradiction] ∎

## Remarks

- **Where pairwise distinctness is spent.** Only in step 3.1, to force one of the two strict comparisons between $a_i$ and $a_j$. Without it a list may repeat a value, and then two positions carrying that value force neither run length to increase.

- **Why a greatest element exists at all.** The lengths of runs ending at a fixed position form a nonempty set of naturals bounded by the length of the list, and a nonempty bounded set of naturals has a greatest element; that is derived in the facts from the well-ordering principle alone. No maximum of a finite set of reals is involved, and no choice principle is used, since $\mathrm{inc}(i)$ and $\mathrm{dec}(i)$ are determined by $i$ rather than selected.

- **The bound $mn+1$ is not improvable**, and the witness is a list of $mn$ distinct reals with neither long sublist; it is constructed in [[thm-the-erdos-szekeres-bound-is-sharp]].
