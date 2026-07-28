---
id: ex-connectedness-of-the-standard-topologies
kind: example
title: "The discrete, indiscrete, cofinite, cocountable, particular-point and Sierpinski topologies placed in the connectedness hierarchy"
status: draft
origin: session
deps: [def-connected-space, thm-connectedness-characterisations, def-standard-topologies,
       def-topological-space, def-connected-component-and-quasicomponent, def-countable,
       thm-r-uncountable, lem-countable-iff-surjection-from-n, thm-n-cross-n-countable,
       def-locally-connected, def-path-connected, def-subspace-topology-top,
       thm-components-partition-and-are-closed, def-interval]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "Particular point topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Particular_point_topology"
    - title: "Cofinite topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofinite_topology"
pipeline_run: null
---

## Example

Let $X$ be a set carrying one of the six topologies of
[[def-standard-topologies]]. The table records where each sits, with
connectedness as in [[def-connected-space]], local connectedness as in
[[def-locally-connected]] and path-connectedness as in [[def-path-connected]].

| topology | connected | locally connected | path-connected | components |
|---|---|---|---|---|
| discrete | only if $X$ has at most one point | yes | only if $X$ has at most one point | the singletons |
| indiscrete | yes | yes | yes | $X$ |
| cofinite, $X$ infinite | yes | yes | not decided here | $X$ |
| cocountable, $X$ uncountable | yes | yes | not decided here | $X$ |
| particular point $p$ | yes | yes | yes | $X$ |
| Sierpinski | yes | yes | yes | $S$ |

**Sierpinski space is the particular-point topology on a two-point set**
([[def-standard-topologies]]), so its row is an instance of the row above it and
is not verified separately.

**Two entries are deliberately left open.** Whether the cofinite topology on an
infinite $X$, or the cocountable topology on an uncountable $X$, is
path-connected depends on the cardinality of $X$, and no item among this page's
declared prerequisites settles it. Nothing here asserts either way.

## Facts & Assumptions

**Given:** A set $X$ carrying one of the six standard topologies.

[A1] A separation of a space is a pair of open, nonempty, disjoint sets covering it; a space is connected when none exists, and a subset is connected when it is connected as a subspace ([[def-connected-space]], [[def-subspace-topology-top]], [[def-topological-space]]).

[A2] The open sets are: all subsets (discrete); $\varnothing$ and $X$ (indiscrete); $\varnothing$ and the sets of finite complement (cofinite); $\varnothing$ and the sets of at most countable complement (cocountable); $\varnothing$ and the sets containing $p$ (particular point). A union of two finite sets is finite ([[def-standard-topologies]], [[def-countable]]).

[A3] $X$ is locally connected when every open $U$ and every $x \in U$ admit an open connected $V$ with $x \in V \subseteq U$; a component of $X$ is the largest connected set through a point, and the components partition $X$ ([[def-locally-connected]], [[def-connected-component-and-quasicomponent]], [[thm-components-partition-and-are-closed]]).

[A4] A map is continuous exactly when preimages of open sets are open; a space is connected exactly when every continuous map to the two-point discrete space is constant ([[thm-connectedness-characterisations]], claims 1 and 2).

[A5] A nonempty set is at most countable exactly when some surjection $\mathbb{N} \to$ it exists; there is a bijection $\mathbb{N} \to \mathbb{N} \times \mathbb{N}$; $\mathbb{R}$ is uncountable ([[lem-countable-iff-surjection-from-n]], [[thm-n-cross-n-countable]], [[thm-r-uncountable]], [[def-countable]]).

[A6] $[0,1]$ carries the subspace topology from $\mathbb{R}$, in which $(0,1)$, $[0,1)$, $(0,1]$ and $[0,1]$ are open ([[def-interval]], [[def-subspace-topology-top]], [[def-path-connected]]).

## Verification

**Proof technique:** direct.

1.1 **Discrete.** If $X$ has two distinct points $x, y$ then $(\{x\}, X \setminus \{x\})$ is a separation by [A2] and [A1], so $X$ is disconnected; every connected subset therefore has at most one point, the subspace topology on a subset again being discrete, so the components are the singletons by [A3], and $X$ is not path-connected, a path being in particular a connected image. Every singleton is open and connected, so $X$ is locally connected by [A3]. [A1, A2, A3]

1.2 **Indiscrete.** The only open sets are $\varnothing$ and $X$ by [A2], so no two nonempty open sets are disjoint and $X$ is connected by [A1]; hence its only component is $X$ by [A3], and $X$ itself is an open connected set containing every point, so $X$ is locally connected by [A3]. [A1, A2, A3]

1.3 **Indiscrete, path-connectedness.** *Every* function $\gamma : [0,1] \to X$ is continuous by [A4], the preimages of $\varnothing$ and $X$ being $\varnothing$ and $[0,1]$; so for $x, y \in X$ the function with $\gamma(0) = x$ and $\gamma(t) = y$ for $t > 0$ is a path from $x$ to $y$, and $X$ is path-connected. [A2, A4]

1.4 **Cofinite, $X$ infinite.** Let $U, V$ be nonempty open sets, with complements $C_U$, $C_V$ finite by [A2]. Then $X \setminus (U \cap V) = C_U \cup C_V$ is finite by [A2], so $U \cap V \ne \varnothing$, $X$ being infinite. Hence no separation exists and $X$ is connected by [A1]. [A1, A2]

1.5 **Cocountable, $X$ uncountable, and $X$ a subset of $\mathbb{R}$ or any uncountable set.** Suppose $(U,V)$ were a separation. By [A2] the complements of $U$ and of $V$ are at most countable, and those complements are $V$ and $U$ respectively, so both $U$ and $V$ are nonempty and at most countable with $U \cup V = X$. [A1, A2]

1.6 **Particular point $p$.** Every nonempty open set contains $p$ by [A2], so two nonempty open sets meet and $X$ is connected by [A1]; its only component is $X$ by [A3]. [A1, A2, A3]

2.1 In the situation of step 1.5, [A5] gives surjections $f, g : \mathbb{N} \to U$ and $\mathbb{N} \to V$, and $h : \mathbb{N} \times \mathbb{N} \to X$ with $h(0,k) := f(k)$ and $h(m,k) := g(k)$ for $m \ne 0$ is onto $U \cup V = X$; composing with a bijection $\mathbb{N} \to \mathbb{N} \times \mathbb{N}$ from [A5] shows $X$ at most countable, contrary to hypothesis. So the cocountable topology on an uncountable $X$ is connected. [step 1.5, A5]

2.2 **Particular point is locally connected and path-connected.** Every nonempty open $U$ contains $p$ and carries as a subspace the particular-point topology on $U$ with the same $p$, hence is connected by step 1.6, so [A3] is witnessed by $U$ itself. For $x, y \in X$ define $\gamma(0) := x$, $\gamma(1) := y$ and $\gamma(t) := p$ for $0 < t < 1$; the preimage of an open $V$ is $\varnothing$ if $V = \varnothing$, and otherwise contains $(0,1)$ and is one of $(0,1)$, $[0,1)$, $(0,1]$, $[0,1]$, all open in $[0,1]$ by [A6]. So $\gamma$ is continuous by [A4] and is a path from $x$ to $y$. [step 1.6, A2, A3, A4, A6]

3.1 **Cofinite and cocountable are locally connected.** A nonempty open $U$ carries as a subspace the cofinite, respectively cocountable, topology on $U$ by [A2] and [A1]; $U$ is infinite, respectively uncountable, its complement being finite, respectively at most countable, while $X$ is not. So $U$ is connected by step 1.4, respectively step 2.1, and being open and containing each of its points it witnesses [A3]. [step 1.4, step 2.1, A1, A2, A3]

4.1 Sierpinski space is the particular-point topology on a two-point set with particular point its open point, by [A2], so steps 1.6 and 2.2 apply to it verbatim; and every connected space has its whole underlying set as its unique component by [A3]. This completes the table. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 2.2, step 3.1, A2, A3] ∎

## Remarks

- **Connectedness is cheap when there are few open sets.** Four of the six topologies are connected for the same structural reason: no two nonempty open sets are disjoint. That is immediate for the indiscrete and particular-point topologies, and for the cofinite and cocountable ones it is the statement that the ambient set is not a union of two small sets.

- **Local connectedness here is never informative.** In every connected case above, every nonempty open subspace is again of the same kind and hence connected, so local connectedness holds for free. A space where local connectedness carries information must have open sets that are not themselves connected, which is what happens in $\mathbb{R}^2$ and its subspaces.

- **Why two cells are left blank.** A path in the cofinite or cocountable topology is a continuous map out of $[0,1]$, and whether a non-constant one exists is a question about how large $X$ is compared with $\mathbb{R}$. This page's declared prerequisites contain no cardinal comparison of that kind, so the honest entry is that the question is not settled here.
