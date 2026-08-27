---
id: cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order
kind: corollary
title: "Every $P_4$-free graph has a clique or stable set of size at least the square root of its order"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-nontrivial-p-four-free-graphs-are-disconnected-or-their-complements-are-disconnected, def-clique-stable-set-and-numbers, def-h-free-and-family-free-graph, cor-connected-components-partition-the-vertex-set, lem-anticonnected-components-are-complement-components, lem-components-are-anticomplete-and-anticomponents-complete]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Tung H. Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, Exercise 1.1"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Statement

If $G$ is a finite $P_4$-free graph on $n$ vertices, then $G$ contains a clique
or a stable set of size at least $\sqrt n$.

## Facts & Assumptions

**Given:** A finite $P_4$-free graph $G$ on $n$ vertices.

[L1] Every induced subgraph of a $P_4$-free graph is again $P_4$-free ([[def-h-free-and-family-free-graph]]).

[L2] Every nontrivial $P_4$-free graph is disconnected or has disconnected complement ([[thm-nontrivial-p-four-free-graphs-are-disconnected-or-their-complements-are-disconnected]]).

[L3] Connected components partition the vertex set, and anticomponents do too ([[cor-connected-components-partition-the-vertex-set]], [[lem-anticonnected-components-are-complement-components]]).

[L4] Distinct connected components are anticomplete, and distinct anticomponents are complete ([[lem-components-are-anticomplete-and-anticomponents-complete]]).

[L5] The clique number and stability number are $\omega(G)$ and $\alpha(G)$ ([[def-clique-stable-set-and-numbers]]).

## Proof

**Proof technique:** direct.

1.1 We prove by induction on $n$ the stronger statement $\alpha(G)\omega(G)\ge n$. If $n\le 1$, then $\alpha(G)=1$ when $n=1$ and $\alpha(G)=\omega(G)=0$ when $n=0$, so the inequality is immediate. [given, base]

2.1 Assume $n\ge 2$. By [L2], either $G$ is disconnected or $\overline G$ is disconnected. [step 1.1, L2]

3.1 Suppose first that $G$ is disconnected. By [L3], choose a connected component $C$ of $G$ and let $D:=V(G)\setminus C$; then $C$ and $D$ are nonempty, $G[C]$ and $G[D]$ are induced subgraphs of $G$, and [L4] makes $C$ anticomplete to $D$. By [L1] both induced subgraphs are $P_4$-free, so the induction hypothesis gives $\alpha(G[C])\omega(G[C])\ge |C|$ and $\alpha(G[D])\omega(G[D])\ge |D|$. A stable set in $G[C]$ together with a stable set in $G[D]$ is still stable in $G$, while every clique of $G$ lies in one side. Hence $\alpha(G)\ge \alpha(G[C])+\alpha(G[D])$ and $\omega(G)\ge \max\{\omega(G[C]),\omega(G[D])\}$, so $\alpha(G)\omega(G)\ge \alpha(G[C])\omega(G[C])+\alpha(G[D])\omega(G[D])\ge |C|+|D|=n$. [step 2.1, L1, L3, L4, ih, algebra]

3.2 Suppose instead that $\overline G$ is disconnected. By [L3], choose an anticomponent $C$ of $G$ and let $D:=V(G)\setminus C$; then $C$ and $D$ are nonempty, the induced subgraphs $G[C]$ and $G[D]$ are $P_4$-free by [L1], and [L4] makes $C$ complete to $D$. The induction hypothesis again yields $\alpha(G[C])\omega(G[C])\ge |C|$ and $\alpha(G[D])\omega(G[D])\ge |D|$. Now a clique in $G[C]$ together with a clique in $G[D]$ is a clique in $G$, while every stable set of $G$ lies in one side. Thus $\omega(G)\ge \omega(G[C])+\omega(G[D])$ and $\alpha(G)\ge \max\{\alpha(G[C]),\alpha(G[D])\}$, and again $\alpha(G)\omega(G)\ge |C|+|D|=n$. [step 2.1, L1, L3, L4, ih, algebra]

4.1 Steps 3.1 and 3.2 prove $\alpha(G)\omega(G)\ge n$. Since $\max\{\alpha(G),\omega(G)\}^2\ge \alpha(G)\omega(G)$, one obtains $\max\{\alpha(G),\omega(G)\}\ge \sqrt n$. By [L5], this says that $G$ has a clique or a stable set of size at least $\sqrt n$. [step 3.1, step 3.2, L5, algebra, discharge-induction] ∎
