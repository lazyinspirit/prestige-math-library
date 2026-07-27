---
id: def-metric-compactness-variants
kind: definition
title: "Countably compact, sequentially compact and limit point compact metric spaces"
status: published
origin: session
deps: [def-metric-compactness, def-metric-space, def-sequence, def-metric-convergence, lem-index-map-grows, def-metric-interior-closure-boundary, def-countable, lem-countable-iff-surjection-from-n, def-metric-topology, def-isometry-and-metric-embedding]
justified_by: []
aliases: [def-sequentially-compact-metric, def-limit-point-compact-metric, def-countably-compact-metric]
landmark: true
short: "countably, sequentially, limit point compact"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "Limit point compact (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point_compact"
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), with open sets as in
[[def-metric-topology]] and open covers, subcovers, finiteness and compactness as
in [[def-metric-compactness]].

- $(X,d)$ is **countably compact** when every open cover $\mathcal{U}$ of $X$
  that is at most countable ([[def-countable]]) has a finite subcover.
- $(X,d)$ is **sequentially compact** when every sequence $(x_k)$ in $X$, that is
  every function $x : \mathbb{N} \to X$ ([[def-sequence]]), has a subsequence
  $(x_{n_j})$ converging to a point of $X$ ([[def-metric-convergence]]), the
  index map $n : \mathbb{N} \to \mathbb{N}$ being strictly increasing
  ([[lem-index-map-grows]]).
- $(X,d)$ is **limit point compact** when every infinite subset $A \subseteq X$
  has a limit point in $X$, that is a point $p \in X$ with
  $B(p,r) \cap (A \setminus \{p\}) \ne \emptyset$ for every real $r > 0$
  ([[def-metric-interior-closure-boundary]]). Here *infinite* means not finite in
  the sense of [[def-countable]], equivalently not listable as
  $\{a_0, \dots, a_n\}$ and not empty ([[def-metric-compactness]]).

A subset $A \subseteq X$ is called countably compact, sequentially compact or
limit point compact when the metric subspace $(A, d_A)$ is
([[def-isometry-and-metric-embedding]]), exactly as for compactness.

**The countable covers may be listed.** A nonempty at most countable family
$\mathcal{U}$ admits a surjection $\mathbb{N} \to \mathcal{U}$
([[lem-countable-iff-surjection-from-n]]), so countable compactness says: for
every sequence $(U_n)_{n \in \mathbb{N}}$ of open sets with
$X = \bigcup_{n \in \mathbb{N}} U_n$ there are finitely many indices whose sets
already cover $X$. That surjection is produced from the countability assumption
alone and no choice principle is involved; the empty family covers only the empty
space, which is compact anyway.

**Limit points are computed where the set lives.** For $S \subseteq A \subseteq X$
and $a \in A$, the identity $B_A(a,r) = B_X(a,r) \cap A$
([[def-isometry-and-metric-embedding]]) shows that $a$ is a limit point of $S$ in
the subspace $(A,d_A)$ exactly when $a$ is a limit point of $S$ in $X$ and lies in
$A$. So "$A$ is limit point compact" says that every infinite $S \subseteq A$ has
a limit point **belonging to $A$**; a limit point outside $A$ does not count, and
that is what distinguishes the property from a statement about $X$.

## Remarks

**Three conditions, and none of them is compactness by definition.** Each of the
three weakens or replaces the open-cover condition of
[[def-metric-compactness]]: countable compactness restricts the covers tested,
sequential compactness speaks about sequences instead of covers, and limit point
compactness speaks about subsets. That the four conditions are not equivalent for
topological spaces in general is standard and is quoted from the references, not
proved here. For metric spaces they do coincide, but the coincidence is a theorem
with a choice cost that varies from implication to implication, and it is proved
on this page one arrow at a time
([[thm-compact-implies-the-other-compactness-forms]],
[[thm-metric-compactness-equivalences]],
[[rem-compactness-choice-ledger-metric]]).

**Indexing starts at $0$.** A sequence here is a function on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-sequence]]), so a subsequence is
$(x_{n_j})_{j \in \mathbb{N}}$ with $n_0 < n_1 < \cdots$ and $n_j \ge j$
([[lem-index-map-grows]]). Every recursive construction of a subsequence on this
page produces $n_0$ first and then $n_{j+1} > n_j$, and every radius written
$1/(j+1)$ is written that way because $1/j$ is undefined at $j = 0$.
