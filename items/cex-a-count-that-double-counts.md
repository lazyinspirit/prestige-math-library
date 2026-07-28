---
id: cex-a-count-that-double-counts
kind: counterexample
title: "A count that overcounts because the blocks are not disjoint, and exactly where the sum rule's hypothesis is spent"
status: draft
origin: session
deps: [thm-sum-rule, def-finite-cardinality, cor-cardinality-of-the-power-set,
       thm-subset-of-a-finite-set, def-injection-surjection-bijection, def-nat-power,
       def-sum-over-a-finite-index-set, lem-nat-add-cancellative, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rule of sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rule_of_sum"
    - title: "Inclusion-exclusion principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
    - title: "Power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_set"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** clause 2 of [[thm-sum-rule]] with its disjointness hypothesis
deleted, that is, for a finite index set $I$ and any family $(A_i)_{i \in I}$ of
finite sets,

$$\Big\lvert\bigcup_{i \in I} A_i\Big\rvert = \sum_{i \in I}\lvert A_i\rvert .$$

The witness lives inside $\mathcal{P}(X)$ for $X := 4 = \{0,1,2,3\}$. Take
$I := 2$, let $A_0$ be the set of subsets of $X$ containing $0$ and $A_1$ the set
of subsets containing $1$. Then $\lvert A_0\rvert = \lvert A_1\rvert = 8$, so the
right-hand side is $16$, while $\lvert A_0 \cup A_1\rvert = 12$.

## Facts & Assumptions

**Given:** $X = 4 = \{0,1,2,3\}$; $A_0 := \{\, S \subseteq X : 0 \in S \,\}$; $A_1 := \{\, S \subseteq X : 1 \in S \,\}$; and $C := \{\, S \subseteq X : 0 \notin S \text{ and } 1 \notin S \,\}$.

[L1] $\lvert\mathcal{P}(Y)\rvert = 2^{\lvert Y\rvert}$ ([[cor-cardinality-of-the-power-set]], [[def-nat-power]]), and $2^{2} = 4$, $2^{3} = 8$, $2^{4} = 16$.

[L2] The sum rule for two disjoint blocks: $\lvert S \cup T\rvert = \lvert S\rvert + \lvert T\rvert$, and its proof, whose only use of disjointness is the injectivity of the splice map $h$ ([[thm-sum-rule]], step 1.1 there).

[L3] Cardinality ([[def-finite-cardinality]]): transport along a bijection; a subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).

[L4] Maps ([[def-injection-surjection-bijection]]): a map with a two-sided inverse is a bijection.

[L5] Cancellation in $\mathbb{N}$ ([[lem-nat-add-cancellative]]), and sums over a finite index set ([[def-sum-over-a-finite-index-set]]).

## Counterexample

**Proof technique:** direct.

1.1 The three sets are subsets of the finite set $\mathcal{P}(X)$, hence finite by [L3], and $\lvert\mathcal{P}(X)\rvert = 2^{4} = 16$ by [L1]. [given, L1, L3]

2.1 Each block has eight elements. The map $S \mapsto S \setminus \{0\}$ sends $A_0$ into $\mathcal{P}(\{1,2,3\})$ and $T \mapsto T \cup \{0\}$ sends $\mathcal{P}(\{1,2,3\})$ into $A_0$; the two composites are the identity, because $0 \in S$ for $S \in A_0$ and $0 \notin T$ for $T \subseteq \{1,2,3\}$. So $\lvert A_0\rvert = 2^{3} = 8$ by [L1], [L3] and [L4], and the same argument at the point $1$ gives $\lvert A_1\rvert = 8$. Hence $\sum_{i \in 2}\lvert A_i\rvert = 8 + 8 = 16$. [step 1.1, L1, L3, L4, L5]

2.2 The union has twelve. A subset of $X$ lies in $A_0 \cup A_1$ exactly when it contains $0$ or contains $1$, so $\mathcal{P}(X)$ is the disjoint union of $A_0\cup A_1$ and $C$; and $C$ is in bijection with $\mathcal{P}(\{2,3\})$ under the identity map, since a subset of $X$ containing neither $0$ nor $1$ is precisely a subset of $\{2,3\}$, giving $\lvert C\rvert = 2^{2} = 4$. By [L2], $16 = \lvert A_0\cup A_1\rvert + 4$, so $\lvert A_0 \cup A_1\rvert = 12$ by [L5]. [step 1.1, L1, L2, L3, L4, L5]

3.1 The claim fails: $12 \ne 16$. The overcount is exactly $4$, the number of subsets containing both $0$ and $1$, and it is the same $4$ as $\lvert C\rvert$ only by coincidence of this example. [step 2.1, step 2.2] ∎

## Remarks

- **Where the proof of [[thm-sum-rule]] breaks.** Its step 1.1 splices bijections
  $f : p \to A$ and $g : q \to B$ into $h : p+q \to A \cup B$, and the only place
  disjointness enters is the third case of injectivity: an index below $p$ must
  give a value different from an index at least $p$, and that is guaranteed only
  because $f$ lands in $A$, $g$ lands in $B$ and $A \cap B = \varnothing$. Here
  the four subsets containing both $0$ and $1$ are each hit twice, so $h$ is
  surjective but not injective, and one gets $\lvert A_0\cup A_1\rvert \le 16$
  rather than equality.

- **The systematic repair is inclusion and exclusion**, which subtracts the count
  of the overlap. It is the next page of this track and is not available here, so
  the correction is not stated as a formula: what this item establishes is that
  some correction is needed.
