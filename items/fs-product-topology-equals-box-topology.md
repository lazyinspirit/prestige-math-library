---
id: fs-product-topology-equals-box-topology
kind: false-statement
title: "FALSE: the product topology and the box topology agree on every product"
status: published
origin: session
deps: [thm-box-finer-than-product, def-product-topology, def-metrizable-space,
       lem-real-line-is-a-metric-space, def-interval, lem-of-inverse-positive,
       lem-finite-set-has-max, def-canonical-natural, lem-of-naturals-positive,
       def-topological-space]
justified_by: []
forward_refs: [cex-box-topology-diagonal-not-continuous]
aliases: []
landmark: false
short: "product and box topologies differ"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Box topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Box_topology"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
pipeline_run: null
---

## Statement

**False claim:** for every family of topological spaces $(X_i)_{i \in I}$ the
product topology and the box topology on $\prod_{i \in I} X_i$ are the same
topology ([[def-product-topology]]).

The claim is correct for a finite index set and fails as soon as the index set is
infinite and the factors have enough open sets
([[thm-box-finer-than-product]]). The refutation below writes down the standard
witness explicitly, in $\mathbb{R}^{\mathbb{N}} = \prod_{k \in \mathbb{N}} \mathbb{R}$
with every factor carrying the usual topology
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]): the shrinking
box

$$B \;:=\; \prod_{k \in \mathbb{N}} \Big(-\tfrac{1}{k+1},\ \tfrac{1}{k+1}\Big)$$

is open in the box topology and is not open in the product topology. No choice
principle is used, the factors of $B$ being given by a formula.

## Facts & Assumptions

**Given:** The index set $\mathbb{N}$, the product $P := \prod_{k \in \mathbb{N}} \mathbb{R}$ with each factor carrying the usual topology, the box $B$ of the statement, and the point $z \in P$ with $z_k = 0$ for every $k$. Here $1/(k+1)$ abbreviates $1/\iota(k+1)$, the inverse of the canonical natural ([[def-canonical-natural]]).

[A1] A basis for the box topology is the family of all boxes $\prod_k U_k$ with every $U_k$ open; a basis for the product topology is the family of boxes with $U_k = \mathbb{R}$ off a set listed as $\{j_0,\dots,j_{n-1}\}$ for some natural $n$ ([[def-product-topology]], [[thm-box-finer-than-product]]).

[A2] $(a,b) = \{\, t \in \mathbb{R} : a < t < b \,\}$, and a set is open in the usual topology of $\mathbb{R}$ exactly when each of its points has a bounded open interval around it inside the set ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

[L1] $\iota(k+1) \ge 1 > 0$ for every $k \in \mathbb{N}$, and $\iota$ is strictly increasing, hence injective ([[lem-of-naturals-positive]], [[def-canonical-natural]]).

[L2] If $0 < u \le v$ then $0 < 1/v \le 1/u$ ([[lem-of-inverse-positive]]).

[L3] For every natural $n \ge 1$ and reals $a_0,\dots,a_{n-1}$ the set $\{a_0,\dots,a_{n-1}\}$ has a maximum ([[lem-finite-set-has-max]]).

[L4] If $U$ belongs to a topology and $x \in U$, then $U$ is open; and a topology is a family of subsets of the underlying set ([[def-topological-space]]).

## Refutation

**Proof technique:** direct.

1.1 For every $k \in \mathbb{N}$: $1/(k+1) > 0$ by [L1] and [L2], so $0 \in (-1/(k+1),\ 1/(k+1))$ by [A2]; hence $z \in B$. [A2, L1, L2]

1.2 For every $k \in \mathbb{N}$: $1/(k+1) \le 1$, since $1 \le \iota(k+1)$ by [L1] and [L2] applied with $u = 1$ and $v = \iota(k+1)$. [L1, L2]

1.3 Each factor $(-1/(k+1),\ 1/(k+1))$ is open in the usual topology of $\mathbb{R}$, being a bounded open interval, so $B$ is a box with open factors and hence open in the box topology. [A1, A2]

1.4 Suppose $B$ were open in the product topology. Then by [A1] there is a basic product-open $O = \prod_k O_k$ with $z \in O \subseteq B$, and $O_k = \mathbb{R}$ for every $k$ outside a list $j_0,\dots,j_{n-1}$ with $n \in \mathbb{N}$. [A1, L4, assume-hyp]

2.1 There is $j \in \mathbb{N}$ with $O_j = \mathbb{R}$: if $n = 0$ the list is empty and $j := 0$ serves; if $n \ge 1$ then by [L3] the set $\{\iota(j_0),\dots,\iota(j_{n-1})\}$ has a maximum, attained at some index $m_0 < n$, and $j := j_{m_0} + 1$ satisfies $\iota(j) > \iota(j_m)$ for every $m < n$ by [L1], hence $j \ne j_m$ for every $m < n$. [step 1.4, L1, L3]

3.1 Let $y \in P$ be the point with $y_j := 1$ and $y_k := z_k = 0$ for $k \ne j$. Then $y \in O$, since $y_j = 1 \in \mathbb{R} = O_j$ and $y_k = z_k \in O_k$ for $k \ne j$. [step 1.4, step 2.1]

4.1 $y \notin B$: by step 1.2 one has $1/(j+1) \le 1 = y_j$, so $y_j \notin (-1/(j+1),\ 1/(j+1))$ by [A2]. [step 1.2, step 3.1, A2]

5.1 Steps 3.1 and 4.1 contradict $O \subseteq B$ from step 1.4, so $B$ is not open in the product topology; by step 1.3 it is open in the box topology, so the two topologies on $P$ are different and the claim is false. [step 1.3, step 1.4, step 3.1, step 4.1] ∎

## Remarks

- **What is true is the inclusion, in one direction only.** The box topology is
  always finer than the product topology, and the two agree whenever the index
  set is finite ([[thm-box-finer-than-product]], claims 1 and 2); it is only the
  converse inclusion for infinite index sets that fails, and the box above is the
  cheapest witness of the failure.

- **The failure is not an artefact of $\mathbb{R}$.** Claim 3 of
  [[thm-box-finer-than-product]] shows that any infinite family of nonempty
  factors, infinitely many of which have an open subset that is neither empty nor
  everything, produces the same separation. The real line is used here only
  because its open intervals are written down without effort.

- **The practical consequence is the failure of the characteristic property.**
  A map into a box-topologised product can have every component continuous and
  still fail to be continuous; the diagonal of $\mathbb{R}^{\mathbb{N}}$ does
  exactly that, and it is worked on the companion page as
  [[cex-box-topology-diagonal-not-continuous]]. That is why the product topology,
  and not the box topology, is what $\prod_i X_i$ carries by default.
