---
id: lem-tube-lemma-for-a-compact-metric-factor
kind: lemma
title: "Tube lemma: if $K$ is a compact subset of a metric space $X$, $Z$ is a topological space and $N$ is open in $X \\times Z$ with $K \\times \\{z_0\\} \\subseteq N$, then $K \\times W \\subseteq N$ for some open $W \\ni z_0$"
status: draft
origin: session
deps: [def-metric-compactness, lem-compactness-is-intrinsic, def-product-topology,
       def-metric-topology, def-metrizable-space, def-topological-space,
       def-topology-basis-subbasis, thm-basis-criterion, def-metric-space]
justified_by: []
aliases: [lem-tube-lemma]
landmark: true
short: "tube lemma (compact metric factor)"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Tube lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tube_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space carrying its metric topology
([[def-metric-topology]], [[def-metrizable-space]]), let $(Z, \mathcal{T}_Z)$ be
a topological space ([[def-topological-space]]), and give $X \times Z$ the
product topology ([[def-product-topology]]). Let $K \subseteq X$ be a compact
subset ([[def-metric-compactness]]), let $z_0 \in Z$, and let $N \subseteq X \times Z$
be open with

$$K \times \{z_0\} \;\subseteq\; N .$$

Then there is an open $W \subseteq Z$ with $z_0 \in W$ and

$$K \times W \;\subseteq\; N .$$

The set $K \times W$ is the **tube** of the name. The case $K = \varnothing$ is
included and is settled by $W = Z$. **No choice principle is used at all**: the
cover produced below is indexed by *pairs* of open sets, so the ambient form of
compactness returns the second entries together with the indices and nothing has
to be selected afterwards.

## Facts & Assumptions

**Given:** A metric space $(X,d)$ with its metric topology, a topological space $(Z,\mathcal{T}_Z)$, the product $X \times Z$ with the product topology, a compact $K \subseteq X$, a point $z_0 \in Z$ and an open $N \subseteq X \times Z$ with $K \times \{z_0\} \subseteq N$.

[A1] $K \times \{z_0\} \subseteq N$, that is $(a, z_0) \in N$ for every $a \in K$.

[L1] For a two-element index set the basic product-open sets are exactly the boxes: the sets $U \times W$ with $U$ open in $X$ and $W$ open in $Z$ form a basis for the product topology on $X \times Z$ ([[def-product-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

[L2] $K$ is a compact subset of $X$ exactly when for every set $I$ and every family $(U_i)_{i \in I}$ of open subsets of $X$ with $K \subseteq \bigcup_{i \in I} U_i$ there are $n \in \mathbb{N}$ and $i_0, \dots, i_n \in I$ with $K \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, or else $K = \varnothing$ ([[lem-compactness-is-intrinsic]], claim 3).

[L3] $Z$ is open in $Z$, and an intersection of finitely many open subsets of $Z$ is open ([[def-topological-space]], axioms (T1) and (T3) iterated).

## Proof

**Proof technique:** direct.

1.1 If $K = \varnothing$ then $K \times Z = \varnothing \subseteq N$ and $Z$ is an open set containing $z_0$, so $W := Z$ settles the claim; assume from here on that $K \ne \varnothing$. [L3, given]

1.2 Let $\mathcal{P}$ be the set of all pairs $(U, W)$ with $U$ open in $X$, $W$ open in $Z$, $z_0 \in W$ and $U \times W \subseteq N$; this is a set cut out by a property of the pair, and nothing is selected in forming it. [construct, L1]

2.1 The family $(U)_{(U,W) \in \mathcal{P}}$, indexed by $\mathcal{P}$ and assigning to each pair its first entry, is a family of open subsets of $X$ and it covers $K$: for $a \in K$ we have $(a,z_0) \in N$ by [A1], so by [L1] there are $U$ open in $X$ and $W$ open in $Z$ with $(a,z_0) \in U \times W \subseteq N$, and then $(U,W) \in \mathcal{P}$ with $a \in U$. [A1, L1, step 1.2]

3.1 Since $K \ne \varnothing$ is compact, there are $n \in \mathbb{N}$ and pairs $(U_0,W_0), \dots, (U_n,W_n) \in \mathcal{P}$ with $K \subseteq U_0 \cup \dots \cup U_n$. [step 1.1, step 2.1, L2]

4.1 Each index returned by step 3.1 is itself a pair, so its second entry $W_j$ is given with it and nothing is chosen; put $W := W_0 \cap \dots \cap W_n$, which contains $z_0$ because every $W_j$ does, and is open in $Z$ as an intersection of $n+1 \ge 1$ open sets. [step 3.1, L3]

5.1 $K \times W \subseteq N$: given $a \in K$ and $z \in W$, step 3.1 gives $j \le n$ with $a \in U_j$, and $z \in W \subseteq W_j$, so $(a,z) \in U_j \times W_j \subseteq N$ by the defining property of $\mathcal{P}$. [step 1.2, step 3.1, step 4.1]

6.1 Steps 4.1 and 5.1 exhibit an open $W \ni z_0$ with $K \times W \subseteq N$, which with step 1.1 proves the lemma in both cases. [step 1.1, step 4.1, step 5.1] ∎

## Remarks

- **Why the pairs and not the open sets.** A single open $U \subseteq X$ may be the first entry of many admissible pairs, and recovering a suitable $W$ from $U$ alone would be a selection over an infinite family. Indexing the cover by the *pairs* rather than by the sets is what makes the second entries come back with the indices, and it is the same device the ambient form of compactness uses ([[lem-compactness-is-intrinsic]]).

- **Compactness of the metric factor is what the lemma is about.** No hypothesis whatever is placed on $Z$, and none is needed: the finite intersection of the $W_j$ is taken in $Z$ and uses only axiom (T3). What compactness of $K$ buys is that finitely many boxes already cover the slice $K \times \{z_0\}$, so that finitely many second entries have to be intersected.

- **The hypothesis cannot be moved to the other factor.** With $K$ replaced by a non-compact set the conclusion fails: the region under the graph of a positive function tending to $0$ contains a whole slice and no tube around it. Nothing on this page needs that witness, and it is not constructed here.

- **The general tube lemma, for a compact factor in an arbitrary topological product, is not available in this library at this point in the reading order,** because compactness is defined here only for metric spaces ([[def-metric-compactness]]). The proof above is the general one; only the hypothesis is narrowed.
