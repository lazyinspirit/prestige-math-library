# Citation-precision audit — everything that cites `lem-tube-lemma-for-a-compact-factor`

## The target, as it actually stands on disk

`items/lem-tube-lemma-for-a-compact-factor.md` — lemma — Tube lemma: if $K$ is compact and an open $N \\subseteq X \\times Z$ contains $K \\times \\{z_0\\}$, then $N$ contains $K \\times W$ for some open $W \\ni z_0$

#### Statement

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

## The 1 citing use(s), quoted verbatim from the citing items

### `lem-tube-lemma-for-a-compact-metric-factor` (published-backward, page function-space-topologies)

Title: Tube lemma: if $K$ is a compact subset of a metric space $X$, $Z$ is a topological space and $N$ is open in $X \\times Z$ with $K \\times \\{z_0\\} \\subseteq N$, then $K \\times W \\subseteq N$ for some open $W \\ni z_0$

- - **The general tube lemma, for a compact factor in an arbitrary topological product, is now available in this library, on an earlier page** ([[lem-tube-lemma-for-a-compact-factor]]). The proof above is the metric special case of that general lemma, narrowed to a metric factor $X$ and written independently of it: nothing above cites the general statement, and nothing needs to, since compactness of a metric-space subset is the same notion under either reading ([[lem-compactness-is-intrinsic]]).
