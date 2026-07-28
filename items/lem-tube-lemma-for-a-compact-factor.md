---
id: lem-tube-lemma-for-a-compact-factor
kind: lemma
title: "Tube lemma: if $K$ is compact and an open $N \\subseteq X \\times Z$ contains $K \\times \\{z_0\\}$, then $N$ contains $K \\times W$ for some open $W \\ni z_0$"
status: draft
origin: session
deps: [def-compact-space, lem-compactness-of-a-subspace-is-ambient, def-product-topology, def-topology-basis-subbasis, thm-basis-criterion, def-topological-space, def-subspace-topology-top]
justified_by: []
aliases: [lem-tube-lemma-top]
landmark: true
short: "tube lemma"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tube lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tube_lemma"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T}_X)$ and $(Z, \mathcal{T}_Z)$ be topological spaces
([[def-topological-space]]) and give $X \times Z$ the product topology
([[def-product-topology]]). Let $K \subseteq X$ be a compact subset
([[def-compact-space]]), let $z_0 \in Z$, and let $N \subseteq X \times Z$ be open
with

$$K \times \{z_0\} \;\subseteq\; N .$$

Then there is an open $W \subseteq Z$ with $z_0 \in W$ and

$$K \times W \;\subseteq\; N .$$

The set $K \times W$ is the **tube** of the name. The case $K = \varnothing$ is
included and is settled by $W = Z$. **No choice principle is used at all**: the
cover produced below is indexed by *pairs* of open sets, so the indexed form of
the ambient compactness criterion ([[lem-compactness-of-a-subspace-is-ambient]],
claim 2) returns the second entries together with the indices and nothing has to
be selected afterwards.

## Facts & Assumptions

**Given:** Topological spaces $(X, \mathcal{T}_X)$ and $(Z, \mathcal{T}_Z)$, the product $X \times Z$ with the product topology, a compact $K \subseteq X$, a point $z_0 \in Z$, and an open $N \subseteq X \times Z$ with $K \times \{z_0\} \subseteq N$.

[L1] The sets $U \times V$ with $U \in \mathcal{T}_X$ and $V \in \mathcal{T}_Z$ form a basis for the product topology on $X \times Z$, the index set $2$ being a natural number so that the restriction "all but finitely many factors unrestricted" is vacuous ([[def-product-topology]], [[thm-basis-criterion]]).

[L2] If $\mathcal{B}$ is a basis for a topology, then for every open $O$ and every $p \in O$ there is $B \in \mathcal{B}$ with $p \in B \subseteq O$ ([[def-topology-basis-subbasis]]).

[L3] $K$ is a compact subset of $X$ exactly when for every set $I$ and every family $(U_i)_{i \in I}$ of open subsets of $X$ with $K \subseteq \bigcup_{i \in I} U_i$ there are $n \in \mathbb{N}$ and $i_0, \dots, i_n \in I$ with $K \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, or else $K = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 2; [[def-compact-space]], [[def-subspace-topology-top]]).

[L4] $\varnothing$ and $Z$ are open, and the intersection of finitely many open sets is open when at least one is taken ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Put $\mathcal{P} := \{\, (U,V) \in \mathcal{T}_X \times \mathcal{T}_Z : z_0 \in V \text{ and } U \times V \subseteq N \,\}$, a set of pairs cut out by a property of the pair and not by any selection, and for $p = (U,V) \in \mathcal{P}$ write $U_p := U$ and $V_p := V$. [construct]

2.1 $K \subseteq \bigcup_{p \in \mathcal{P}} U_p$: given $x \in K$ we have $(x, z_0) \in K \times \{z_0\} \subseteq N$, so by [L1] and [L2] there are $U \in \mathcal{T}_X$ and $V \in \mathcal{T}_Z$ with $(x, z_0) \in U \times V \subseteq N$; then $x \in U$, $z_0 \in V$, and $p := (U,V)$ lies in $\mathcal{P}$ with $x \in U_p$. [L1, L2, step 1.1]

3.1 If $K = \varnothing$ then $W := Z$ is open, contains $z_0$ and satisfies $K \times W = \varnothing \subseteq N$; otherwise [L3] applied to the family $(U_p)_{p \in \mathcal{P}}$ gives $n \in \mathbb{N}$ and $p_0, \dots, p_n \in \mathcal{P}$ with $K \subseteq U_{p_0} \cup \dots \cup U_{p_n}$. [L3, L4, step 1.1, step 2.1]

4.1 Put $W := V_{p_0} \cap \dots \cap V_{p_n}$; it is open by [L4], being an intersection of finitely many open sets with at least one taken, and $z_0 \in W$ because $z_0 \in V_{p_j}$ for every $j \le n$ by the definition of $\mathcal{P}$. [L4, step 1.1, step 3.1]

5.1 $K \times W \subseteq N$: given $x \in K$ and $w \in W$, step 3.1 gives $j \le n$ with $x \in U_{p_j}$, and $w \in W \subseteq V_{p_j}$, so $(x,w) \in U_{p_j} \times V_{p_j} \subseteq N$ by the definition of $\mathcal{P}$. With the case $K = \varnothing$ settled at step 3.1, the lemma is proved. [step 1.1, step 3.1, step 4.1] ∎

## Remarks

**What the lemma is for.** It is the step that makes a product of two compact spaces compact ([[thm-finite-products-of-compact-spaces]]): a cover of $X \times Z$ restricted to the slice $X \times \{z_0\}$ can be thinned by compactness of $X$, and the tube lemma is what turns the resulting cover of the slice into a cover of a whole open band $X \times W$ around it. Compactness of $K$ is essential and cannot be weakened to closedness: the union of finitely many basic boxes over a non-compact $K$ need not contain any tube.

**Why the pairs are carried along.** A proof that says "for each $x \in K$ choose open $U_x \ni x$ and $V_x \ni z_0$ with $U_x \times V_x \subseteq N$" has selected a pair for every point of $K$ at once, which for an arbitrary compact $K$ is the Axiom of Choice. Indexing the cover by the pairs themselves removes the selection: the compactness criterion hands back finitely many *indices*, and an index here already carries its own $V$.

**A metric special case is stated elsewhere in the library**, as `lem-tube-lemma-for-a-compact-metric-factor`, which assumes $X$ metric and carries the alias `lem-tube-lemma`; it is named here in plain text because its page comes after this one in the reading order. It is not used above, and the present lemma assumes nothing about $X$ beyond compactness of $K$.
