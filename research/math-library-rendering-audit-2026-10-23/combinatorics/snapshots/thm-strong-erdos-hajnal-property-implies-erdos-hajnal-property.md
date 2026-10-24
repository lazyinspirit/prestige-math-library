---
id: thm-strong-erdos-hajnal-property-implies-erdos-hajnal-property
kind: theorem
title: "The strong Erdős–Hajnal property implies the Erdős–Hajnal property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-strong-erdos-hajnal-property-for-a-hereditary-class, cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order, def-erdos-hajnal-property-and-constant, def-hereditary-graph-class, def-edges-between-sets-and-pure-mixed-pairs, thm-real-power-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Nicolas Bousquet, Aurélie Lagoutte, and Stéphan Thomassé, The Erdős-Hajnal Conjecture for Paths and Antipaths, Theorem 2"
      url: "https://arxiv.org/html/1303.5205v3"
pipeline_run: null
---

## Statement

Every hereditary class of finite graphs with the strong Erdős–Hajnal property
also has the Erdős–Hajnal property.

## Facts & Assumptions

**Given:** A hereditary class $\mathcal C$ of finite graphs with the strong Erdős–Hajnal property.

[L1] The strong Erdős–Hajnal property means that some $\eta>0$ makes every graph $G\in\mathcal C$ with $|V(G)|\ge 2$ contain disjoint sets $A,B$ with $|A|,|B|\ge \eta|V(G)|$ and $(A,B)$ pure ([[def-strong-erdos-hajnal-property-for-a-hereditary-class]]).

[L2] A hereditary class is closed under induced subgraphs ([[def-hereditary-graph-class]]).

[L3] Every $P_4$-free graph on $m$ vertices has a clique or stable set of size at least $\sqrt m$ ([[cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order]]).

[L4] The Erdős–Hajnal property asks for a positive exponent $c$ such that every nonempty graph in the class has a clique or stable set of size at least $|V(G)|^c$ ([[def-erdos-hajnal-property-and-constant]]).

[L5] For positive reals, $(ab)^r=a^rb^r$ ([[thm-real-power-laws]]).

## Proof

**Proof technique:** direct.

1.1 If every nonempty graph in $\mathcal C$ has one vertex, then $1$ is already an Erdős–Hajnal constant, so there is nothing to prove. We therefore assume that $\mathcal C$ contains some graph with at least two vertices. Let $\eta>0$ be the strong Erdős–Hajnal constant from [L1]. Applying [L1] to one nontrivial graph in $\mathcal C$ gives disjoint sets $A$ and $B$ with $|A|,|B|\ge \eta|V(G)|$, hence $2\eta\le 1$. Choose $c>0$ so that $2\eta^c=1$. [L1, given, choose]

2.1 We claim that every nonempty graph $G\in\mathcal C$ induces a $P_4$-free subgraph on at least $|V(G)|^c$ vertices. We prove this by induction on $|V(G)|$, and the case $|V(G)|=1$ is immediate. [step 1.1, given]

3.1 Let $G\in\mathcal C$ with $n:=|V(G)|\ge 2$, and assume the claim for smaller orders. By [L1], choose disjoint sets $A,B\subseteq V(G)$ with $|A|,|B|\ge \eta n$ and $(A,B)$ pure. By [L2], the induced subgraphs $G[A]$ and $G[B]$ both lie in $\mathcal C$, so the induction hypothesis gives induced $P_4$-free subgraphs $H_A\subseteq G[A]$ and $H_B\subseteq G[B]$ with $|V(H_A)|\ge |A|^c$ and $|V(H_B)|\ge |B|^c$. [step 2.1, L1, L2, choose]

4.1 Let $H:=G[V(H_A)\cup V(H_B)]$. The pair $(V(H_A),V(H_B))$ is still pure because it sits inside the pure pair $(A,B)$. No induced $P_4$ can lie entirely in one side, since $H_A$ and $H_B$ are each $P_4$-free. A $1+3$ split is impossible because the lone vertex would be complete or anticomplete to the three opposite vertices, while a vertex of $P_4$ is neither complete nor anticomplete to the other three. A $2+2$ split is impossible as well: a complete cross-pair gives four cross edges, and an anticomplete cross-pair gives none, whereas $P_4$ has exactly three edges and is connected. Hence $H$ is $P_4$-free. [step 3.1, given]

5.1 By [L5], $|V(H)|=|V(H_A)|+|V(H_B)|\ge |A|^c+|B|^c\ge 2(\eta n)^c=2\eta^c n^c=n^c$. This closes the induction and proves the claim from step 2.1. [step 3.1, step 4.1, L5, algebra]

6.1 Let $G$ be any nonempty graph in $\mathcal C$. By step 5.1, $G$ contains an induced $P_4$-free subgraph $H$ with $|V(H)|\ge |V(G)|^c$. Then [L3] gives a clique or stable set in $H$ of size at least $|V(H)|^{1/2}\ge |V(G)|^{c/2}$, and the same set is a clique or stable set in $G$. By [L4], the exponent $c/2$ is an Erdős–Hajnal constant for $\mathcal C$. [step 5.1, L3, L4, algebra] ∎
