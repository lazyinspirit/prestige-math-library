---
id: thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property
kind: theorem
title: "For every $k$, the class forbidding $P_k$ and $\\overline{P_k}$ has the strong Erdős–Hajnal property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-strong-erdos-hajnal-property-for-a-hereditary-class, def-h-free-and-family-free-graph, def-standard-complete-bipartite-path-and-cycle-graphs, cor-rodl-in-the-edge-density-form, lem-a-weakly-sparse-set-has-a-large-sparse-subset, cor-connected-components-partition-the-vertex-set, lem-components-are-anticomplete-and-anticomponents-complete, def-connected-graph-and-connected-component, def-graph-adjacency-incidence-neighbourhood-and-degree, def-graph-isomorphism-and-complement, def-edges-between-sets-and-pure-mixed-pairs, def-c-sparse-and-c-restricted-vertex-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nicolas Bousquet, Aurélie Lagoutte, and Stéphan Thomassé, The Erdős-Hajnal Conjecture for Paths and Antipaths, Lemma 3 and Theorem 4"
      url: "https://arxiv.org/html/1303.5205v3"
pipeline_run: null
---

## Statement

For every integer $k\ge 2$, there exists a real constant $\gamma_k>0$ such that
every finite graph $G$ with no induced $P_k$ and no induced $\overline{P_k}$
and with $|V(G)|\ge 2$ contains disjoint sets $A,B\subseteq V(G)$ with

$$|A|\ge \gamma_k|V(G)|,\qquad |B|\ge \gamma_k|V(G)|,$$

and such that $(A,B)$ is a pure pair. Equivalently, the hereditary class
forbidding $P_k$ and $\overline{P_k}$ has the strong Erdős–Hajnal property.

## Facts & Assumptions

**Given:** An integer $k\ge 2$.

[L1] For every graph $H$ and every $\epsilon\in(0,\tfrac12)$ there exists $\delta>0$ such that every nonempty $H$-free graph has a linearly large vertex set whose self-density is at most $\epsilon$ or at least $1-\epsilon$ ([[cor-rodl-in-the-edge-density-form]]).

[L2] If a nonempty set has self-density at most $c$, then it has a subset of at least half its size that is $4c$-sparse ([[lem-a-weakly-sparse-set-has-a-large-sparse-subset]]).

[L3] Connected components partition the vertex set, and distinct connected components are anticomplete ([[cor-connected-components-partition-the-vertex-set]], [[lem-components-are-anticomplete-and-anticomponents-complete]]).

[L4] A graph class has the strong Erdős–Hajnal property exactly when some linear constant works for every nontrivial graph in the class ([[def-strong-erdos-hajnal-property-for-a-hereditary-class]]).

[F1] A set is $c$-sparse exactly when every vertex of its induced subgraph has degree at most $c$ times the set size ([[def-c-sparse-and-c-restricted-vertex-set]]).

## Proof

**Proof technique:** direct.

1.1 We first prove the connected-case claim: for each $r\ge 2$ there are constants $\varepsilon_r>0$ and $c_r>0$ such that every connected graph $J$ on $m\ge 2$ vertices has a vertex of degree greater than $\varepsilon_r m$, or contains an induced $P_r$ starting at every vertex, or has a biclique of size at least $c_rm$ in $\overline J$. We prove this by induction on $r$. [given, construct]

2.1 For $r=2$, choose $\varepsilon_2:=1/2$ and $c_2:=1/4$. Every vertex of a connected graph on at least two vertices is incident with an edge, so every vertex starts an induced $P_2$. Thus the claim holds for $r=2$. [step 1.1, base]

3.1 Fix $r>2$, assume the claim for $r-1$, and let $\varepsilon_r:=\varepsilon_{r-1}/(2+\varepsilon_{r-1})$. Since $\varepsilon_r<1/2$, choose any constant $0<c_r\le \min\{(1-2\varepsilon_r)/4,\ c_{r-1}(1-\varepsilon_r)/2\}$. Now let $J$ be a connected graph on $m\ge 2$ vertices for which the first outcome fails, so every vertex has degree at most $\varepsilon_r m$. Fix a vertex $v_1$ and put $S:=V(J)\setminus(N_J(v_1)\cup\{v_1\})$. Then $|S|\ge (1-\varepsilon_r)m-1$. Since $J$ is connected, $v_1$ has degree at least $1$, so $m\ge 1/\varepsilon_r$ and therefore $|S|\ge (1-2\varepsilon_r)m$. [step 2.1, ih, choose, algebra]

4.1 Suppose every connected component of $J[S]$ has size at most $|S|/2$. Choose components greedily until their union $A$ has size in the interval $[|S|/4,|S|/2]$: if the running union first reaches $|S|/4$ before it exceeds $|S|/2$, stop there; otherwise the next component itself has size in $[|S|/4,|S|/2]$ and we take that one alone. Let $B:=S\setminus A$. Then $|A|,|B|\ge |S|/4$, and [L3] makes $A$ anticomplete to $B$ in $J$. Hence $A$ and $B$ form a biclique of size at least $|S|/4\ge c_rm$ in $\overline J$. [step 3.1, L3, choose, algebra]

4.2 Suppose instead that $J[S]$ has a connected component $S'$ with $|S'|>|S|/2$. Because $J$ is connected, some vertex $v_2\in N_J(v_1)$ has a neighbour in $S'$. Let $J_2:=J[S'\cup\{v_2\}]$, which is connected. Every vertex of $J_2$ still has degree at most $\varepsilon_r m$, and $\varepsilon_r m=\varepsilon_{r-1}(1-\varepsilon_r)m/2<\varepsilon_{r-1}(|S'|+1)=\varepsilon_{r-1}|V(J_2)|$ because $|S'|+1>|S|/2+1\ge (1-\varepsilon_r)m/2$. So the first outcome of the induction hypothesis is false for $J_2$. [step 3.1, ih, choose, algebra]

5.1 Apply the induction hypothesis to $J_2$ with parameter $r-1$. If outcome 2 holds there, then $J_2$ contains an induced $P_{r-1}$ starting at $v_2$, and prefixing this path with $v_1$ gives an induced $P_r$ in $J$ starting at $v_1$ because $v_1$ is adjacent to $v_2$ and has no neighbours in $S'$. If outcome 3 holds there, then $\overline{J_2}$ contains a biclique of size at least $c_{r-1}|V(J_2)|\ge c_{r-1}(1-\varepsilon_r)m/2\ge c_rm$, and the same biclique lies in $\overline J$. Thus, whenever outcome 1 fails for $J$, either outcome 2 or outcome 3 follows. This completes the induction and proves the connected-case claim. [step 4.2, ih, algebra, discharge-induction]

6.1 Let $\varepsilon:=\varepsilon_k/8$. Because $P_k$ is the standard $k$-vertex path, [L1] applied to $H=P_k$ yields a constant $\delta>0$ such that every nonempty $P_k$-free graph has a vertex set of size at least $\delta n$ whose self-density is at most $\varepsilon$ or at least $1-\varepsilon$. [step 5.1, L1, choose]

7.1 Let $G$ be a graph with no induced $P_k$ and no induced $\overline{P_k}$, and let $n:=|V(G)|\ge 2$. If $G$ has a set of size at least $\delta n$ and self-density at least $1-\varepsilon$, apply the same argument to $\overline G$: an induced $P_k$ in $\overline G$ would be an induced $\overline{P_k}$ in $G$, and an induced $\overline{P_k}$ in $\overline G$ would be an induced $P_k$ in $G$. So $\overline G$ belongs to the same forbidden class. Replacing $G$ by $\overline G$ if necessary, we may assume that $G$ has a set $S_0$ with $|S_0|\ge \delta n$ and self-density at most $\varepsilon$. [step 6.1, given]

8.1 By [L2], the set $S_0$ contains a subset $S$ with $|S|\ge |S_0|/2\ge \delta n/2$ such that $S$ is $4\varepsilon$-sparse. By [F1], every vertex of $G[S]$ therefore has degree at most $4\varepsilon|S|=\varepsilon_k|S|/2$. [step 7.1, L2, F1, algebra]

9.1 If every connected component of $G[S]$ has size at most $|S|/2$, then the same greedy argument as in step 4.1 partitions those components into anticomplete sets $A,B\subseteq S$ with $|A|,|B|\ge |S|/4\ge \delta n/8$. This is already a pure pair in $G$. [step 8.1, L3, choose, algebra]

9.2 Otherwise $G[S]$ has a connected component $S'$ with $|S'|>|S|/2$. Every vertex of $G[S']$ has degree at most $\varepsilon_k|S|/2<\varepsilon_k|S'|$, and $G[S']$ is $P_k$-free because induced subgraphs preserve forbidden induced paths. Applying the connected-case claim from step 5.1 to the connected graph $G[S']$, outcome 1 is false by the degree bound and outcome 2 is false because $G[S']$ contains no induced $P_k$ at all. Hence outcome 3 holds, so $\overline{G[S']}$ has a biclique with both sides of size at least $c_k|S'|\ge c_k\delta n/4$. Equivalently, $G$ has an anticomplete pair of that size. [step 5.1, step 8.1, algebra]

10.1 Let $\gamma_k:=\min\{\delta/8,c_k\delta/4\}$. Steps 9.1 and 9.2 show that every graph with no induced $P_k$ or $\overline{P_k}$ and at least two vertices contains a pure pair with both sides of size at least $\gamma_k n$. By [L4], the class forbidding $P_k$ and $\overline{P_k}$ has the strong Erdős–Hajnal property. [step 9.1, step 9.2, L4, choose] ∎
