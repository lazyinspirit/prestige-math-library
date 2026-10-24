---
id: thm-p3-free-graphs-have-square-root-homogeneous-sets
kind: theorem
title: "Every $P_3$-free graph $G$ satisfies $\\operatorname{hom}(G)\\ge\\sqrt{|V(G)|}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-homogeneous-set-and-homogeneous-number, def-erdos-hajnal-property-and-constant, def-h-free-and-family-free-graph, lem-forbidden-induced-subgraph-classes-are-hereditary, def-standard-complete-bipartite-path-and-cycle-graphs, def-connected-graph-and-connected-component, cor-connected-components-partition-the-vertex-set, def-graph-walk-trail-path-and-cycle, def-graph-distance-and-girth, thm-of-square-roots, thm-real-power-agrees-with-rational-exponent]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdos-Hajnal Conjecture: A Survey, sec. 2"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
pipeline_run: null
---

## Statement

Every $P_3$-free finite graph $G$ satisfies
$$\operatorname{hom}(G)\ge\sqrt{|V(G)|}.$$
Consequently the hereditary class of $P_3$-free graphs has Erdős–Hajnal constant $1/2$.

## Facts & Assumptions

**Given:** A finite $P_3$-free graph $G$.

[L1] The homogeneous number is $\operatorname{hom}(G)=\max\{\omega(G),\alpha(G)\}$ ([[def-homogeneous-set-and-homogeneous-number]]).

[L2] A hereditary class has constant $c>0$ when every nonempty member $F$ satisfies $\operatorname{hom}(F)\ge|V(F)|^c$ ([[def-erdos-hajnal-property-and-constant]]).

[L3] $P_3$-free means having no induced copy of the three-vertex path, and every fixed-pattern-free class is hereditary ([[def-h-free-and-family-free-graph]], [[lem-forbidden-induced-subgraph-classes-are-hereditary]]).

[L4] The graph $P_3$ has three vertices and exactly its two consecutive edges ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L5] Connected vertices are joined by a path, and a component is the induced graph on all vertices reachable from one vertex ([[def-connected-graph-and-connected-component]]).

[L6] Component vertex sets are nonempty, pairwise disjoint, cover $V(G)$, and induce connected graphs ([[cor-connected-components-partition-the-vertex-set]]).

[L7] A path has distinct vertices and consecutive vertices adjacent ([[def-graph-walk-trail-path-and-cycle]]); the distance of connected vertices is the minimum length of a path joining them ([[def-graph-distance-and-girth]]).

[L8] Every nonnegative real $a$ has a unique nonnegative square root $\sqrt a$ ([[thm-of-square-roots]]), and $a^{1/2}$ agrees with the rational-power square root, including at $a=0$ ([[thm-real-power-agrees-with-rational-exponent]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is null, then $\operatorname{hom}(G)=0=\sqrt0$ by [L1] and [L8]. Assume henceforth that $G$ is nonempty. [given, L1, L8]

1.2 Every connected component of $G$ is a clique: otherwise two nonadjacent vertices in one component have a shortest path $v_0,\ldots,v_\ell$ with $\ell\ge2$; the vertices $v_0,v_1,v_2$ are distinct, the consecutive pairs are edges, and $v_0v_2$ is not an edge because it would shorten the path, so they induce $P_3$, contrary to [L3]. [L3, L4, L5, L7]

1.3 Let $r\ge1$ be the number of connected components of $G$. Choosing one vertex from each of these finitely many nonempty components gives a stable set, since an edge would put its endpoints in one component; hence $\alpha(G)\ge r$. [L5, L6, choose]

2.1 Let the component orders be $c_1,\ldots,c_r$. By [L6], $r\ge1$, each $c_i\ge1$, and $|V(G)|=\sum_i c_i$; step 1.2 gives $\omega(G)\ge\max_i c_i$. [step 1.1, step 1.2, L6, choose]

3.1 Therefore $|V(G)|=\sum_i c_i\le r\max_i c_i\le\alpha(G)\omega(G)\le\operatorname{hom}(G)^2$. [step 2.1, step 1.3, L1, algebra]

4.1 Both sides are nonnegative, so [L8] and step 3.1 yield $\operatorname{hom}(G)\ge\sqrt{|V(G)|}=|V(G)|^{1/2}$. Together with [L2] and [L3], this makes $1/2$ an Erdős–Hajnal constant for the $P_3$-free class. [step 3.1, L2, L3, L8] ∎
