---
id: lem-trimming-a-self-regular-set-of-low-density
kind: lemma
title: "Deleting the high-degree vertices of a $\\gamma$-self-regular set of density $d$ leaves more than $(1-\\gamma)$ of it, and that remainder is $((d+\\gamma)/(1-\\gamma))$-sparse"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-epsilon-regular-pair, lem-typical-degrees-in-a-regular-pair, def-edge-density-between-vertex-sets, def-c-sparse-and-c-restricted-vertex-set, lem-sparsity-depends-only-on-the-induced-subgraph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Lemma 2.2.3 and Remark 2.3.2"
      url: "https://yufeizhao.com/gtacbook/gtacbook.pdf"
pipeline_run: null
---

## Statement

Let $0<\gamma<1$, let $W\subseteq V(G)$ be nonempty, and suppose $(W,W)$ is a
$\gamma$-regular pair of density $d$. Then there is a subset $W'\subseteq W$
with $|W'|>(1-\gamma)|W|$ such that $W'$ is
$((d+\gamma)/(1-\gamma))$-sparse.

## Facts & Assumptions

**Given:** A finite simple graph $G$, a real $0<\gamma<1$, a nonempty set $W\subseteq V(G)$, and a density $d=d_G(W,W)$ such that $(W,W)$ is $\gamma$-regular.

[L1] If $(X,Y)$ is a $\gamma$-regular pair of density $d$ and a fixed set $Y'\subseteq Y$ has $|Y'|\ge\gamma|Y|$, then fewer than $\gamma|X|$ vertices of $X$ have more than $(d+\gamma)|Y'|$ neighbours in $Y'$ ([[lem-typical-degrees-in-a-regular-pair]], [[def-epsilon-regular-pair]]).

[L2] A set is $c$-sparse exactly when every vertex of the induced graph on it has degree at most $c$ times its size ([[lem-sparsity-depends-only-on-the-induced-subgraph]], [[def-c-sparse-and-c-restricted-vertex-set]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the pair $(W,W)$ with $Y'=W$. Since $|W|\ge\gamma|W|$, fewer than $\gamma|W|$ vertices of $W$ have more than $(d+\gamma)|W|$ neighbours in $W$. [L1]

2.1 Let $W'$ be the remaining vertices. Then $|W'|>(1-\gamma)|W|$. [step 1.1, choose]

3.1 For every $x\in W'$, one has $\deg_{G[W']}(x)\le\deg_{G[W]}(x)\le(d+\gamma)|W|<((d+\gamma)/(1-\gamma))|W'|$. Therefore [L2] makes $W'$ $((d+\gamma)/(1-\gamma))$-sparse. [step 2.1, L2, algebra] ∎
