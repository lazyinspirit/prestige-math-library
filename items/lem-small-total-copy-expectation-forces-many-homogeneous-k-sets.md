---
id: lem-small-total-copy-expectation-forces-many-homogeneous-k-sets
kind: lemma
title: "Small total induced-copy expectation forces many homogeneous $k$-sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-t-k-homogeneous-property, def-h-free-and-family-free-graph, def-induced-copy-number, def-uniform-finite-probability-space, def-expectation-on-a-finite-probability-space, lem-many-good-two-t-vertex-sets-force-many-homogeneous-k-sets, thm-markov-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "M. Bucić, J. Fox, and H. T. Pham, Equivalence between Erdős-Hajnal and polynomial Rödl and Nikiforov conjectures, Lemma 14"
      url: "https://arxiv.org/html/2403.08303v1"
    - title: "T. H. Nguyen, Notes on Recent Work on the Erdős–Hajnal Conjecture, Lemma 14"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Statement

Let $1\le k\le t$ be integers, and let $\mathcal F$ be a finite family of
graphs, each with at least one vertex, such that every $\mathcal F$-free graph
has the $(t,k)$-homogeneous property.
Let $G$ be a finite graph on $n\ge2t$ vertices. Choose $X$ uniformly from
$[V(G)]^{2t}$ and define

$$ Y(X):=\sum_{H\in\mathcal F}\operatorname{ind}_H(G[X]). $$

If $\mathbb E[Y]\le t/2$, then $G$ has at least

$$ \frac12\left(\frac{n}{2t}\right)^k $$

homogeneous vertex sets of size $k$.

## Facts & Assumptions

**Given:** Positive integers $1\le k\le t$, a finite family $\mathcal F$ of graphs, each with at least one vertex, a finite graph $G$ on $n\ge2t$ vertices, the uniform choice of $X\in[V(G)]^{2t}$, and the hypothesis $\mathbb E[Y]\le t/2$.

[L1] A graph is $\mathcal F$-free exactly when it is $H$-free for every $H\in\mathcal F$ ([[def-h-free-and-family-free-graph]]).

[L2] $Y(X)$ is a nonnegative real random variable on the uniform probability space on $[V(G)]^{2t}$, and its expectation is the average value over that finite outcome set ([[def-uniform-finite-probability-space]], [[def-expectation-on-a-finite-probability-space]], [[def-induced-copy-number]]).

[L3] If a nonnegative random variable has expectation at most $t/2$, then the probability that it is at least $t$ is at most $1/2$ ([[thm-markov-inequality]]).

[L4] If at least half of the $2t$-element subsets of $V(G)$ contain a $t$-element induced subgraph in a class with the $(t,k)$-homogeneous property, then $G$ has at least $\tfrac12(n/(2t))^k$ homogeneous $k$-sets ([[lem-many-good-two-t-vertex-sets-force-many-homogeneous-k-sets]]).

## Proof

**Proof technique:** direct.

1.1 Since $Y$ is nonnegative and $\mathbb E[Y]\le t/2$, [L3] gives $\mathbb P(Y\ge t)\le1/2$, so with probability at least $1/2$ one has $Y<t$. [L2, L3]

2.1 Fix a set $X\in[V(G)]^{2t}$ with $Y(X)<t$. For each induced embedding counted by $Y(X)$ choose one vertex from its image; this is possible because every graph in $\mathcal F$ has at least one vertex. Delete from $X$ every chosen vertex. Since fewer than $t$ embeddings were counted, fewer than $t$ vertices are deleted, so at least $t$ vertices remain. [step 1.1, choose]

3.1 Let $T$ be any $t$-element subset of the remaining vertices. If some $H\in\mathcal F$ had an induced embedding into $G[T]$, then that same embedding would already have been counted in $Y(X)$, so step 2.1 would have deleted a vertex from its image. Because the image lies in $T$, this contradicts the choice of $T$. Thus $G[T]$ is $\mathcal F$-free by [L1]. [step 2.1, L1, choose]

4.1 Steps 2.1 and 3.1 show that with probability at least $1/2$, a uniformly random $2t$-element subset of $V(G)$ contains a $t$-element induced subgraph that is $\mathcal F$-free. Applying [L4] to the class of $\mathcal F$-free graphs proves the claimed lower bound on homogeneous $k$-sets. [step 1.1, step 3.1, L4] ∎
