---
id: cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted
kind: counterexample
title: "The polynomial Rödl witness need not be the whole graph"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence, cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property, def-c-sparse-and-c-restricted-vertex-set, def-h-free-and-family-free-graph, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Whenever a finite family has the polynomial Rödl property, the restricted set
guaranteed by that property can always be chosen to be the whole graph.

## Facts & Assumptions

**Given:** A real $\epsilon\in(0,\tfrac12)$ and the graph $G:=K_N\sqcup K_N$ with $N>1/(1-2\epsilon)$.

[L1] Every graph on at most three vertices has the Erdős–Hajnal property ([[cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property]]).

[L2] For a single graph, the Erdős–Hajnal property, the polynomial Rödl property, and virality are equivalent ([[cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence]]).

[L3] $P_3$ is the three-vertex path, and $K_N$ is the complete graph on $N$ vertices ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L4] A set is $\epsilon$-restricted when it is $\epsilon$-sparse or $\epsilon$-dense ([[def-c-sparse-and-c-restricted-vertex-set]]).

[L5] A graph is $P_3$-free when it has no induced copy of the three-vertex path ([[def-h-free-and-family-free-graph]], [[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Counterexample

**Proof technique:** constructive.

1.1 The graph $G$ is $P_3$-free: three vertices in one clique induce a triangle, three vertices meeting both cliques induce either one edge or no edge, and none of those induced subgraphs is $P_3$. [L3, L5, construct]

1.2 Let $X:=V(G)$. Every vertex of $X$ has exactly $N-1$ neighbours and exactly $N$ non-neighbours inside $X$. Since $N>1/(1-2\epsilon)$, one has $N-1>2\epsilon N=\epsilon|X|$, so $X$ is not $\epsilon$-sparse; and because $\epsilon<1/2$, one also has $N>\epsilon|X|$, so $X$ is not $\epsilon$-dense. Thus $X$ is not $\epsilon$-restricted by [L4]. [L4, algebra]

1.3 One clique component of $G$ is $0$-dense and therefore $\epsilon$-restricted, so the polynomial Rödl conclusion for $G$ is realized by a proper subset of vertices rather than by the whole graph. [L4, algebra]

1.4 By [L3], the graph $P_3$ has three vertices, so [L1] gives the Erdős–Hajnal property for $P_3$. Applying [L2] then shows that the singleton family $\{P_3\}$ has the polynomial Rödl property. [L1, L2, L3]

2.1 Steps 1.2 and 1.3 show that the theorem's restricted witness need not be $V(G)$ itself, refuting the claim. [step 1.2, step 1.3, discharge-construct] ∎
