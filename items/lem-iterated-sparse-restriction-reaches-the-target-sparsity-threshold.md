---
id: lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold
kind: lemma
title: "Iterated sparse restriction reaches the target sparsity threshold"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-c-sparse-and-c-restricted-vertex-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 2.9"
      url: "https://arxiv.org/pdf/2606.06258v2"
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VI. Bounded VC-dimension, Lemma 3.2"
      url: "https://arxiv.org/pdf/2312.15572"
pipeline_run: null
---

## Statement

Let $c\in(0,1)$, $b_1>1$, $b_2,b_3>0$, and assume
$$b_1b_2\ge b_2+b_3.$$
Suppose that $x\in(0,c)$ and that a graph $G$ satisfies:

1. $G$ has a $c$-sparse induced subgraph with at least $c^{b_2}|V(G)|$
vertices; and
2. for every $\lambda\in[x,c]$ and every $\lambda$-sparse induced subgraph
$F$ of $G$ with $|V(F)|\ge \lambda^{b_2}|V(G)|$, there is a
$\lambda^{b_1}$-sparse induced subgraph of $F$ with at least
$\lambda^{b_3}|V(F)|$ vertices.

Then $G$ contains an $x$-sparse induced subgraph with at least
$x^{b_1b_2}|V(G)|$ vertices.

## Facts & Assumptions

**Given:** The parameters and hypotheses in the statement.

[L1] A $\lambda$-sparse vertex set is nonempty, and every vertex has degree at
most $\lambda$ times the size of that set inside the induced subgraph
([[def-c-sparse-and-c-restricted-vertex-set]]).

## Proof

**Proof technique:** direct.

1.1 Hypothesis 1 supplies a nonempty $c$-sparse vertex set, because
$c$-sparse sets are nonempty by [L1]. Hence $|V(G)|>0$. [given, L1]

1.2 For each nonempty induced subgraph $E$ of $G$, let $\mu(E)$ be its maximum degree divided by $|V(E)|$; by [L1], the graph $E$ is $\lambda$-sparse exactly when $\mu(E)\le \lambda$. Define $\lambda(E):=\max(x^{b_1},\mu(E))$. Hypothesis 1 gives a $c$-sparse induced subgraph $E_0$ with at least $c^{b_2}|V(G)|$ vertices, so $\lambda(E_0)\le c$ and $|V(E_0)|\ge \lambda(E_0)^{b_2}|V(G)|$. Because $G$ has only finitely many induced subgraphs, the set of values $\lambda(E)$ with $\lambda(E)\le c$ and $|V(E)|\ge \lambda(E)^{b_2}|V(G)|$ has a minimum. Choose an induced subgraph $F$ for which that minimum is attained, and write $\lambda:=\lambda(F)$. [given, choose, L1, algebra]

2.1 Suppose that $\lambda\ge x$. Then hypothesis 2 applies to $F$ and produces a $\lambda^{b_1}$-sparse induced subgraph $F'\subseteq F$ with at least $\lambda^{b_3}|V(F)|\ge \lambda^{b_2+b_3}|V(G)|\ge \lambda^{b_1b_2}|V(G)|$ vertices, where the last inequality uses $b_1b_2\ge b_2+b_3$. Since $F'$ is $\lambda^{b_1}$-sparse, we have $\mu(F')\le \lambda^{b_1}$ and therefore $\lambda(F')=\max(x^{b_1},\mu(F'))\le \lambda^{b_1}<\lambda$. Also $|V(F')|\ge \lambda(F')^{b_2}|V(G)|$. This contradicts the minimal choice of $\lambda$. Therefore $\lambda<x$. [step 1.2, given, algebra, assume-contra, discharge-contradiction]

3.1 Since $\lambda=\lambda(F)$, step 1.2 gives $x^{b_1}\le \lambda$, and step 2.1 gives $\lambda<x$. Because $F$ is $\lambda$-sparse, it is also $x$-sparse. Moreover $|V(F)|\ge \lambda^{b_2}|V(G)|\ge (x^{b_1})^{b_2}|V(G)|=x^{b_1b_2}|V(G)|$. [step 1.2, step 2.1, algebra]

4.1 The induced subgraph $F$ from step 3.1 is the required $x$-sparse induced subgraph. [step 3.1] ∎
