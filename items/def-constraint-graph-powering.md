---
id: def-constraint-graph-powering
kind: definition
title: "Constraint graph powering with local-view labels"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-graph-power-and-walk-constraint, def-constraint-graph-and-labeling-value, def-regular-multigraph-and-normalized-adjacency]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-27
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5.1 Lemma 18.31 (powering), author-hosted draft."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §1.2 graph powering and §6 Definition 6.1, pp. 5 and 20."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Definition

Let $G$ be a binary constraint graph over the alphabet $\Sigma$ in the convention of [[def-constraint-graph-and-labeling-value]], whose underlying graph is $d$-regular in the adjacency-slot convention of [[def-regular-multigraph-and-normalized-adjacency]], and let $t\ge1$ be an integer. Put
$$R:=t+\lceil\sqrt t\rceil,\qquad L:=2t+1 .$$
A **lazy step** at a vertex $v$ is the choice of one of the $2d$ options: one of $d$ **hold** options (the walk stays at $v$) or one of the $d$ slots at $v$ (the walk traverses that slot). A **lazy walk of length $\ell$** is a sequence of $\ell$ independent uniform lazy steps; its transition matrix is $(I+M)/2$ with $M$ the normalized adjacency of the graph, so each step holds with probability $1/2$ and otherwise traverses a uniformly chosen slot. Since the graph is regular, the uniform distribution on $V$ is stationary, and the count of lazy walk patterns of length $\ell$ starting at $v$ is $(2d)^\ell$.

Write $\mathcal P_\ell:=\{1,\dots,2d\}^{\ell}$ for the set of lazy-walk **patterns** of length $\ell$, a set of cardinality $(2d)^{\ell}$ independent of the starting vertex. A pattern read from a vertex determines the sequence of visited vertices and the slots traversed. The **local-view alphabet** of the powering is
$$\Sigma_t:=\Sigma^{\mathcal P_R},$$
that is, a **view** is a function assigning a symbol of $\Sigma$ to every length-$R$ pattern. Fix the lexicographic order on patterns induced by the option order. For vertices $x,y$ at graph distance at most $R$, let $\kappa_{x,y}\in\mathcal P_R$ be the lexicographically first pattern read from $x$ that ends at $y$; this set is nonempty because a path of length at most $R$ can be padded by holds. Its cardinality is $|\Sigma_t|=|\Sigma|^{(2d)^{R}}\le|\Sigma|^{(2d)^{O(t)}}$.

**The powered graph $G_t$.** Its vertex set is $V$; the label of a vertex $v$ is a view $\varphi_v\in\Sigma_t$. For every length-$L$ pattern $\sigma=(\sigma_1,\dots,\sigma_L)\in\mathcal P_L$, starting vertex $v_0\in V$, and copy bit $b\in\{0,1\}$, create a directed incidence slot; reading $\sigma$ from $v_0$ gives the visited vertices $v_0,v_1,\dots,v_L$, and the slot joins $v_0$ to $v_L$. Pair it with the slot for the reversed pattern read from $v_L$ and copy bit $1-b$. This fixed-point-free pairing duplicates every walk slot, as required to represent the adjacency-slot power as an ordinary undirected multigraph even when a walk is fixed by reversal. The relation table in the orientation $(v_0,v_L)$ is the one given below; the paired reverse orientation carries its transpose. Let
$$J:=\{j: 1\le j\le L,\ j-1\le R,\ L-j\le R\}$$
be the **central window** of positions, of size $2\lceil\sqrt t\rceil+1$, symmetric about the midpoint $t+1$. The edge relation in the orientation of the pattern $\sigma$ from $v_0$ to $v_L$ consists of all pairs $(\varphi,\psi)\in\Sigma_t^2$ such that for every $j\in J$ whose step $\sigma_j$ is a move along a slot $e=(v_{j-1},v_j)$ of $G$, the pair
$$\bigl(\varphi(\kappa_{v_0,v_{j-1}}),\ \psi(\kappa_{v_L,v_j})\bigr)$$
belongs to the relation of $e$ in its orientation $(v_{j-1},v_j)$. The canonical patterns exist because $j-1\le R$ and $L-j\le R$, so both endpoints lie within radius $R$ of their respective view centres. Hold steps impose no condition.

Every vertex has exactly $2(2d)^L$ incident slots, so $G_t$ is $d_t$-regular with $d_t=2(2d)^L$. The pairing gives $|V|(2d)^L$ ordinary edges and the same number of relation tables, equivalently $2|V|(2d)^L$ directed incidence slots. Sampling a uniform ordinary edge and orienting it by its unique copy-$0$ incidence slot is therefore equivalent to choosing a uniform start vertex and a uniform length-$L$ pattern; its violation probability is $\operatorname{UNSAT}_\varphi(G_t)$. Since $d$ and $t$ are fixed, $\Sigma_t$ is a fixed finite alphabet; each table is a subset of the fixed finite set $\Sigma_t^2$, computable by the displayed rule, so the number of table entries is $O_{d,t,|\Sigma|}(|V|(2d)^L)$, while endpoint names and paired-slot indices require $O_{d,t}(\log(|V|+2))$ bits each. Thus the explicit bit encoding has length $O_{d,t,|\Sigma|}(|V|(2d)^L\log(|V|+2))$. Enumerating the patterns, computing their endpoints and canonical coordinates, and writing the fixed-size relation tables takes time polynomial in the explicit input and output bit lengths.

## Remarks

- **Convention bridge.** The radius $t+\lceil\sqrt t\rceil$, walk length $2t+1$, and central-window size $2\lceil\sqrt t\rceil+1$ follow the parameters of Arora–Barak §18.5.1. The local-view alphabet here is a redundant pattern-indexed variant: it has one coordinate for each lazy length-$R$ pattern, while Arora–Barak indexes a view by the distinct vertices in the radius-$R$ ball (with padding). The displayed coordinate rule defines this variant directly; no equivalence of the two label alphabets is asserted or used. Dinur's §6 uses walks of length $t$ with views of radius $\lceil t/2\rceil$ and a window of $\sqrt t$ positions. The numerical constants across these parameterizations are not interchangeable; every later item on this page states its bounds in the present pattern-indexed convention, and the lazy walk introduced here is the one used throughout.
- The reversal pairing is consistent with the published endpoint convention: position $j$ reverses to $L+1-j\in J$, the endpoint views swap, and each tested base relation is transposed. Thus the reverse-pattern table is the transpose of the original table, exactly as [[def-constraint-graph-and-labeling-value]] requires. If a walk pattern is fixed by reversal, its central option is a hold and the mirrored move tests pair in transposed pairs; its table is therefore symmetric, so the two copy-bit incidences define one well-formed loop edge.
- Each view records one canonical coordinate for each vertex of the radius-$R$ ball; a middle-position constraint reads those coordinates for the two endpoints of its tested base edge. The canonical coordinate removes any dependence on the placement of holds, while plurality decoding still counts distinct walk patterns with multiplicity.
- The role of this construction in the page is the powering step of [[thm-gap-amplification-step]]; the companion item [[def-graph-power-and-walk-constraint]] records the underlying one-step power convention, in which a walk predicate is a conjunction of the original edge relations along the walk.
