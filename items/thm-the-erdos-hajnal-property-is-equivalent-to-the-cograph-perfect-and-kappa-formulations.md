---
id: thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations
kind: theorem
title: "The Erdos-Hajnal property is equivalent to the large-cograph, large-perfect, and kappa formulations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-erdos-hajnal-property-and-constant,
       def-h-free-and-family-free-graph,
       def-homogeneous-set-and-homogeneous-number,
       def-cograph-by-singletons-disjoint-union-and-complete-connection,
       def-perfect-graph,
       def-kappa-of-a-graph,
       thm-cographs-are-perfect,
       cor-perfect-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order,
       thm-real-power-laws,
       lem-rational-power-monotone,
       thm-real-power-agrees-with-rational-exponent,
       def-subgraph-induced-subgraph-and-spanning-subgraph,
       def-clique-stable-set-and-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdos-Hajnal for graphs with no 5-hole, Introduction"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let $\mathcal H$ be a finite family of finite graphs. The following are
equivalent.

1. $\mathcal H$ has the Erdos-Hajnal property.
2. There exists $\tau>0$ such that every nonempty $\mathcal H$-free graph
   contains an induced cograph with at least $|V(G)|^\tau$ vertices.
3. There exists $\tau>0$ such that every nonempty $\mathcal H$-free graph
   contains an induced perfect graph with at least $|V(G)|^\tau$ vertices.
4. There exists $\tau>0$ such that every nonempty $\mathcal H$-free graph
   satisfies $\kappa(G)\geq |V(G)|^\tau$.

## Facts & Assumptions

**Given:** A finite family $\mathcal H$ of finite graphs.

[L1] Clause 1 means exactly that some $\tau>0$ makes every nonempty $\mathcal H$-free graph $G$ satisfy $\operatorname{hom}(G)\geq |V(G)|^\tau$ ([[def-erdos-hajnal-property-and-constant]], [[def-homogeneous-set-and-homogeneous-number]], [[def-h-free-and-family-free-graph]]).

[L2] Every cograph is perfect ([[thm-cographs-are-perfect]]).

[L3] Every perfect graph $J$ has a clique or stable set of size at least $|V(J)|^{1/2}$ ([[cor-perfect-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order]]).

[L4] For positive reals, $(ab)^r=a^rb^r$ and $(a^r)^s=a^{rs}$ ([[thm-real-power-laws]]).

[L5] On positive reals, the map $x\mapsto x^{1/2}$ is increasing, because $1/2$ is a positive rational and the real power at exponent $1/2$ agrees with the rational power ([[lem-rational-power-monotone]], [[thm-real-power-agrees-with-rational-exponent]]).

[F1] If $S\subseteq V(G)$ is homogeneous, then $G[S]$ is a cograph: when $S$ is a clique, build $G[S]$ by repeatedly taking complete connections of singletons; when $S$ is a stable set, build it by repeatedly taking disjoint unions of singletons ([[def-cograph-by-singletons-disjoint-union-and-complete-connection]], [[def-homogeneous-set-and-homogeneous-number]], [[def-clique-stable-set-and-numbers]]).

[F2] If $J$ is an induced subgraph of $G$, then every clique or stable set in $J$ is also a clique or stable set in $G$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]], [[def-clique-stable-set-and-numbers]]).

[F3] For every nonempty graph $G$, $\operatorname{hom}(G)\leq \kappa(G)\leq \operatorname{hom}(G)^2$ because $\alpha(G),\omega(G)\geq 1$ and both are at most $\operatorname{hom}(G)$ ([[def-kappa-of-a-graph]], [[def-homogeneous-set-and-homogeneous-number]], [[def-clique-stable-set-and-numbers]]).

## Proof

**Proof technique:** direct equivalence cycle with exponent rescaling.

1.1 Assume clause 1. By [L1], choose $\tau>0$ such that every nonempty $\mathcal H$-free graph $G$ satisfies $\operatorname{hom}(G)\geq |V(G)|^\tau$. For such a graph, choose a homogeneous set $S$ with $|S|=\operatorname{hom}(G)$. Then [F1] shows that $G[S]$ is a cograph on at least $|V(G)|^\tau$ vertices. Hence clause 2 holds with the same exponent $\tau$. [L1, F1, choose]

1.2 Assume clause 2 with exponent $\tau>0$. Every cograph is perfect by [L2], so the same induced subgraph witnesses clause 3 with the same exponent. [L2]

1.3 Assume clause 3 with exponent $\tau>0$, and let $G$ be a nonempty $\mathcal H$-free graph. Choose an induced perfect subgraph $J$ of $G$ with $|V(J)|\geq |V(G)|^\tau$. By [L3], the graph $J$ has a clique or stable set of size at least $|V(J)|^{1/2}$. Since $|V(J)|\geq |V(G)|^\tau>0$, [L5] gives $|V(J)|^{1/2}\geq (|V(G)|^\tau)^{1/2}=|V(G)|^{\tau/2}$, where the equality is [L4]. Then [F2] turns that clique or stable set into one in $G$. Therefore clause 1 holds, with exponent $\tau/2$. [L3, L4, L5, F2, choose]

1.4 For a nonempty graph $G$, [F3] gives $\operatorname{hom}(G)\leq\kappa(G)\leq \operatorname{hom}(G)^2$. Therefore clause 1 implies clause 4 with the same exponent. Conversely, if clause 4 holds with exponent $\tau$, then $\operatorname{hom}(G)^2\geq \kappa(G)\geq |V(G)|^\tau>0$, so [L5] gives $\operatorname{hom}(G)\geq (|V(G)|^\tau)^{1/2}=|V(G)|^{\tau/2}$. Hence clause 4 implies clause 1. [L1, F3, L4, L5]

2.1 The implications in steps 1.1, 1.2, and 1.3 prove $1\Rightarrow 2\Rightarrow 3\Rightarrow 1$. [step 1.1, step 1.2, step 1.3]

3.1 Step 2.1 gives the forward implication chain from clause 1 to clause 3 and back, while step 1.4 proves the equivalence of clauses 1 and 4. Therefore all four formulations are equivalent. [step 2.1, step 1.4] ∎
