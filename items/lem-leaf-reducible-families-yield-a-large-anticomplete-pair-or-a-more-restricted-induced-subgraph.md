---
id: lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph
kind: lemma
title: "Leaf-reducible families yield a large anticomplete pair or a deeper restricted induced subgraph"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-leaf-reducible-finite-family, def-c-sparse-and-c-restricted-vertex-set, def-induced-copy-number, def-viral-property-for-a-finite-family, def-h-free-and-family-free-graph, thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence, thm-leaf-deletion-preserves-virality-of-a-finite-family]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 2.7"
      url: "https://arxiv.org/pdf/2606.06258v2"
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. IV. New graphs with the Erdős-Hajnal property, Theorem 6.1"
      url: "https://arxiv.org/pdf/2307.06455"
pipeline_run: null
---

## Statement

Let $\mathcal F$ be a leaf-reducible finite family of graphs. Then there exist
constants $d>0$ and $h\ge 1$ such that for every $y\in(0,\tfrac12)$, every
$b>1$, and every $y$-sparse $\mathcal F$-free graph $G$, at least one of the
following holds:

1. there are disjoint sets $X,Y\subseteq V(G)$ with
$$|X|\ge y^{bd+1}|V(G)|,\qquad |Y|\ge (1-hy)|V(G)|,$$
and $Y$ anticomplete to $X$; or
2. $G$ has a $y^b$-restricted induced subgraph with at least
$$y^{bd+1}|V(G)|$$
vertices.

## Facts & Assumptions

**Given:** A leaf-reducible finite family $\mathcal F$, parameters $y\in(0,\tfrac12)$
and $b>1$, and a $y$-sparse $\mathcal F$-free graph $G$.

[L1] Because $\mathcal F$ is leaf-reducible, there exist $H\in\mathcal F$ and a
leaf $v\in V(H)$ such that
$$\mathcal F':=\{H\setminus\{v\}\}\cup(\mathcal F\setminus\{H\})$$
has the Erdős-Hajnal property
([[def-leaf-reducible-finite-family]]).

[L2] For a finite family, the Erdős-Hajnal property, the polynomial Rödl
property, and virality are equivalent
([[thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence]]).

[L3] Deleting a leaf from each of two forbidden graphs preserves virality
([[thm-leaf-deletion-preserves-virality-of-a-finite-family]]).

[L4] A graph is $\mathcal F$-free when it contains no induced copy of any member
of $\mathcal F$ ([[def-h-free-and-family-free-graph]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], fix $H$ and $v$ so that the modified family $\mathcal F':=\{H\setminus\{v\}\}\cup(\mathcal F\setminus\{H\})$ has the Erdős-Hajnal property. By the implication from assertion 1 to assertion 3 in [L2], the family $\mathcal F'$ is viral. [L1, L2]

2.1 Apply [L3] with both leaf-deletion slots equal to the same graph $H$ and with the same leaf $v$. The two modified families are both $\mathcal F'$, so step 1.1 makes them viral. Therefore $\mathcal F$ itself is viral. Using the implication from assertion 3 to assertion 2 in [L2], choose $d>0$ such that every $\mathcal F$-free graph has an $\epsilon$-restricted induced subgraph on at least $\epsilon^d$ times its number of vertices for every $\epsilon\in(0,\tfrac12)$. Set $h:=1$. [step 1.1, L2, L3, choose]

3.1 Since $G$ is $\mathcal F$-free by [L4], step 2.1 applies to $G$ with $\epsilon:=y^b\in(0,\tfrac12)$. We obtain a $y^b$-restricted induced subgraph of $G$ with at least $(y^b)^d|V(G)|=y^{bd}|V(G)|$ vertices. Since $y\in(0,\tfrac12)$, one has $y^{bd}\ge y^{bd+1}$, so this induced subgraph also has at least $y^{bd+1}|V(G)|$ vertices. Hence outcome 2 holds. [step 2.1, L4, algebra]

4.1 Because outcome 2 always holds, the displayed dichotomy is satisfied. [step 3.1] ∎
