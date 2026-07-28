---
id: thm-sum-rule
kind: theorem
title: "The sum rule: a finite disjoint union is finite with $\\lvert A \\cup B\\rvert = \\lvert A\\rvert + \\lvert B\\rvert$ and $\\lvert\\bigcup_{i \\in I} A_i\\rvert = \\sum_{i \\in I}\\lvert A_i\\rvert$, and a sum over a finite index set splits along a partition"
status: published
origin: session
deps: [def-finite-cardinality, def-sum-over-a-finite-index-set, lem-finite-sum-permutation-invariance, thm-subset-of-a-finite-set,
       def-nat-finite-sum-and-product, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-finite-sum, lem-finite-sum-laws, def-injection-surjection-bijection,
       def-equinumerous, def-nat-addition, def-nat-order, lem-nat-add-cancellative,
       lem-nat-order-add-compatible, lem-nat-add-commutative, lem-nat-order-is-membership,
       thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Rule of sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rule_of_sum"
    - title: "Summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Summation"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Statement

1. **Two blocks.** If $A$ and $B$ are finite and **disjoint**, then $A \cup B$ is
   finite and $\lvert A \cup B\rvert = \lvert A\rvert + \lvert B\rvert$
   ([[def-finite-cardinality]]).
2. **A finite partition.** If $I$ is a finite set and $(A_i)_{i \in I}$ is a
   family of finite sets that are pairwise disjoint, then $\bigcup_{i \in I} A_i$
   is finite and
   $\big\lvert\bigcup_{i \in I} A_i\big\rvert = \sum_{i \in I}\lvert A_i\rvert$,
   the sum being that of [[def-sum-over-a-finite-index-set]].
3. **Splitting a sum along a partition of its index set.** Let $S$ be finite, let
   $J$ be finite, and let $(S_j)_{j \in J}$ be pairwise disjoint subsets of $S$
   with $\bigcup_{j \in J} S_j = S$. Then for $a : S \to \mathbb{R}$ or
   $a : S \to \mathbb{N}$,
   $$\sum_{i \in S} a_i = \sum_{j \in J}\Big(\sum_{i \in S_j} a_i\Big), \qquad \prod_{i \in S} a_i = \prod_{j \in J}\Big(\prod_{i \in S_j} a_i\Big).$$
   In particular $\sum_{i \in S \cup T} a_i = \sum_{i \in S} a_i + \sum_{i \in T} a_i$
   for disjoint finite $S$ and $T$.

**Disjointness is a hypothesis and not a formality.** It is spent at exactly one
step, the injectivity of the splice map, and dropping it makes clause 1 false;
the companion page carries that false statement with its smallest witness.

## Facts & Assumptions

**Given:** Finite sets as in the statement, and the truncated difference and the two finite sums of [[def-nat-finite-sum-and-product]]. Throughout, $\ast$ denotes either $+$ or $\cdot$ on $\mathbb{R}$ or on $\mathbb{N}$, $e$ the corresponding identity, and $\bigstar_{k<n} c_k$ the associated iterated operation; the four cases are proved by one argument, as in [[lem-finite-sum-permutation-invariance]].

[L1] Induction ([[thm-induction-principle]]).

[L2] Cardinality ([[def-finite-cardinality]]): $\lvert A\rvert$ is the unique natural with $A \approx \lvert A\rvert$; $\lvert n\rvert = n$; $\lvert\varnothing\rvert = 0$; a bijection transports finiteness and cardinality.

[L3] Sums over a finite index set ([[def-sum-over-a-finite-index-set]]): $\sum_{i \in S} a_i = \sum_{k<n} a_{\varphi(k)}$ for any bijection $\varphi : \lvert S\rvert \to S$, the value being independent of $\varphi$; $\sum_{i \in n} a_i = \sum_{k<n} a_k$; reindexing along a bijection $T \to S$ leaves the value unchanged; and $\sum_{i \in \varnothing} a_i = e$.

[L4] Recursion clauses: $\bigstar_{k<0} c_k = e$ and $\bigstar_{k<\sigma(n)} c_k = \big(\bigstar_{k<n} c_k\big) \ast c_n$ ([[def-nat-finite-sum-and-product]], [[def-finite-sum]]).

[L5] Splitting at an index: for $p \le N$ and $q = N - p$, $\bigstar_{k<N} c_k = \big(\bigstar_{k<p} c_k\big) \ast \big(\bigstar_{j<q} c_{p+j}\big)$ (clause 3 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clause 3 of [[lem-finite-sum-laws]]).

[L6] Order and addition in $\mathbb{N}$: $p \le k$ gives a unique $j$ with $p + j = k$; $p + j < p + q \iff j < q$; addition is commutative; $\sigma(m) = m + 1$ ([[def-nat-order]], [[lem-nat-add-cancellative]], [[lem-nat-order-add-compatible]], [[lem-nat-add-commutative]], [[def-nat-addition]], [[lem-nat-order-is-membership]]).

[L7] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): composites and inverses of bijections are bijections, and an injective surjection is a bijection.

[L8] A subset of a finite set is finite ([[thm-subset-of-a-finite-set]], clause 1).

## Proof

**Proof technique:** induction.

1.1 The splice map. Let $A$, $B$ be finite and disjoint, put $p := \lvert A\rvert$, $q := \lvert B\rvert$, and fix bijections $f : p \to A$ and $g : q \to B$. Define $h : p + q \to A \cup B$ by $h(k) = f(k)$ when $k < p$, and, when $p \le k$, by $h(k) = g(j)$ for the unique $j$ with $p + j = k$; that $j$ satisfies $j < q$ because $p + j = k < p + q$. The map $h$ is well defined by [L6], it is surjective because every element of $A \cup B$ is some $f(k)$ or some $g(j)$, and it is injective: two indices below $p$ are separated by the injectivity of $f$, two indices at least $p$ by the injectivity of $g$ together with the uniqueness of $j$, and an index below $p$ from one at least $p$ because $f(k) \in A$, $g(j) \in B$ and $A \cap B = \varnothing$. **The last of these three cases is the only use of disjointness in the whole proof.** [L6, L7, construct]

1.2 Base cases of the two inductions below, at $m = 0$. A family indexed by $0 = \varnothing$ has empty union, so $\big\lvert\bigcup_{k<0} B_k\big\rvert = \lvert\varnothing\rvert = 0 = \sum_{k<0}\lvert B_k\rvert$; and a partition of $S$ indexed by $0$ forces $S = \varnothing$, so both sides of clause 3 are $e$. [base, L2, L3, L4]

1.3 Inductive hypothesis for both inductions, at $m$: for pairwise disjoint finite $B_0, \dots, B_{m-1}$ the union $\bigcup_{k<m} B_k$ is finite with cardinality $\sum_{k<m}\lvert B_k\rvert$; and for a partition of a finite set $S$ into pairwise disjoint $S_0, \dots, S_{m-1}$ one has $\bigstar_{i \in S} a_i = \bigstar_{k<m}\big(\bigstar_{i \in S_k} a_i\big)$. [ih]

2.1 Clause 1. By step 1.1 the map $h$ is a bijection $p + q \to A \cup B$, so $A \cup B \approx p+q$; hence $A \cup B$ is finite and $\lvert A \cup B\rvert = \lvert p+q\rvert = p + q = \lvert A\rvert + \lvert B\rvert$. [step 1.1, L2, L7]

3.1 Clause 3 for two blocks. Let $S$, $T$ be finite and disjoint and $a$ defined on $S \cup T$. With $p = \lvert S\rvert$, $q = \lvert T\rvert$ and the bijections $f, g, h$ of step 1.1 for the pair $S$, $T$, step 2.1 gives $\lvert S \cup T\rvert = p+q$, so $h$ may be used as the enumeration in [L3]. Then $\bigstar_{i \in S \cup T} a_i = \bigstar_{k<p+q} a_{h(k)} = \big(\bigstar_{k<p} a_{h(k)}\big) \ast \big(\bigstar_{j<q} a_{h(p+j)}\big) = \big(\bigstar_{k<p} a_{f(k)}\big) \ast \big(\bigstar_{j<q} a_{g(j)}\big) = \big(\bigstar_{i \in S} a_i\big) \ast \big(\bigstar_{i \in T} a_i\big)$, using [L5] at the second equality. [step 1.1, step 2.1, L3, L5]

3.2 Inductive step for clause 2, in the case of an index set $\sigma(m)$. Let $B_0, \dots, B_{m}$ be pairwise disjoint and finite. Then $\bigcup_{k<\sigma(m)} B_k = \big(\bigcup_{k<m} B_k\big) \cup B_m$, and these two sets are disjoint because each $B_k$ with $k < m$ is disjoint from $B_m$. By the hypothesis of step 1.3 the first is finite with cardinality $\sum_{k<m}\lvert B_k\rvert$, so clause 1 makes the union finite with cardinality $\sum_{k<m}\lvert B_k\rvert + \lvert B_m\rvert = \sum_{k<\sigma(m)}\lvert B_k\rvert$ by [L4]. [step 1.3, step 2.1, L4]

4.1 Clause 2. By step 1.2, step 3.2 and induction, the statement holds for every family indexed by a natural number $m$. For a general finite index set $I$ take a bijection $\varphi : m \to I$ with $m = \lvert I\rvert$; then $\bigcup_{i \in I} A_i = \bigcup_{k<m} A_{\varphi(k)}$ and $\sum_{i \in I}\lvert A_i\rvert = \sum_{k<m}\lvert A_{\varphi(k)}\rvert$ by the definition of the sum over a finite index set, so the two statements coincide. [step 1.2, step 3.2, L1, L3]

5.1 Inductive step for clause 3, index set $\sigma(m)$. Let $S$ be finite and partitioned into pairwise disjoint $S_0, \dots, S_m$, and put $S' := \bigcup_{k<m} S_k$, which is finite by [L8] and disjoint from $S_m$. The hypothesis of step 1.3 applies to the partition of $S'$ into $S_0, \dots, S_{m-1}$, and step 3.1 applies to the disjoint pair $S'$, $S_m$, giving $\bigstar_{i \in S} a_i = \big(\bigstar_{i \in S'} a_i\big) \ast \big(\bigstar_{i \in S_m} a_i\big) = \big(\bigstar_{k<m}\bigstar_{i \in S_k} a_i\big) \ast \big(\bigstar_{i \in S_m} a_i\big) = \bigstar_{k<\sigma(m)}\big(\bigstar_{i \in S_k} a_i\big)$ by [L4]. [step 1.3, step 3.1, step 4.1, L4, L8]

6.1 Clause 3. By step 1.2, step 5.1 and induction it holds for every index set that is a natural number, and the general finite $J$ follows by reindexing along a bijection $m \to J$ exactly as in step 4.1. The two-block form is step 3.1. [step 1.2, step 3.1, step 5.1, L1, L3]

7.1 Clause 1 is step 2.1, clause 2 is step 4.1 and clause 3 is step 6.1; since $\ast$ was an arbitrary one of the four operations, both the sum and the product forms of clause 3 are proved. [step 2.1, step 4.1, step 6.1, discharge-induction] ∎

## Remarks

- **Why the splice map is built once.** The same bijection
  $p + q \to A \cup B$ proves clause 1 and, used as an enumeration, proves the
  two-block case of clause 3. Building it twice, once for cardinalities and once
  for sums, would be two chances to get the index arithmetic wrong.

- **The subtraction in the splice is legitimate.** Writing $h(k) = g(k - p)$ for
  $k \ge p$ means: the unique $j$ with $p + j = k$, which exists by the definition
  of $\le$ and is unique by cancellation. No negative number is formed anywhere.

- **Clause 3 is what the multinomial theorem needs.** Its outer sum is indexed by
  the set of weak compositions of $n$ into $m$ parts, and the induction on $m$
  partitions that index set by the value of the last part. Without clause 3 that
  step could not be taken.
