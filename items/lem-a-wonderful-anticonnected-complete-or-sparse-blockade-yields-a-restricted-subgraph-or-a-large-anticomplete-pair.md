---
id: lem-a-wonderful-anticonnected-complete-or-sparse-blockade-yields-a-restricted-subgraph-or-a-large-anticomplete-pair
kind: lemma
title: "A wonderful anticonnected complete-or-sparse blockade yields a restricted subgraph or a large anticomplete pair"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-wonderful-finite-family, def-anticonnected-graph-and-anticonnected-component, def-blockade-length-and-width, def-c-sparse-and-c-restricted-vertex-set, def-directional-and-weak-sparsity-between-vertex-sets, def-edges-between-sets-and-pure-mixed-pairs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Claim 7.1.2"
      url: "https://arxiv.org/html/2312.15333v2"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdos-Hajnal beyond the five-vertex path, proof of Lemma 3.1"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $\mathcal F$ be a wonderful finite family, and let $a\ge 6$ be a witness
for wonderfulness. Let $y\in(0,\tfrac12)$ and let $G$ be a $y$-sparse
$\overline{\mathcal F}$-free graph. Suppose that

$$ \mathcal B=(B_1,\ldots,B_\ell) $$

is a blockade in $G$ such that:

1. $\ell\ge y^{-a}$;
2. all blocks have the same size $w$;
3. every block $B_i$ is anticonnected;
4. every distinct pair $(B_i,B_j)$ is either complete or mutually $y^a$-sparse;
5. the support satisfies $|V(\mathcal B)|\le y|G|$.

Then one of the following holds:

1. $G$ has a $y^4$-restricted induced subgraph with at least $w$ vertices; or
2. there exist disjoint sets $X,Y\subseteq V(G)$ with $|X|=w$,
   $|Y|\ge (1-4y)|G|$, and $Y$ anticomplete to $X$.

## Facts & Assumptions

**Given:** The wonderful family $\mathcal F$, its witness exponent $a$, the
parameter $y$, the $y$-sparse graph $G$, and the blockade
$\mathcal B=(B_1,\ldots,B_\ell)$ satisfying hypotheses 1-5.

[L1] The definition of wonderfulness applied to $\mathcal B$ yields either a
$y^4$-restricted induced subgraph of size at least $w$, or an index
$i\in[\ell]$ such that at most $y|G|$ vertices in
$V(G)\setminus V(\mathcal B)$ have between $1$ and $|B_i|/2-1$ neighbours in
$B_i$ ([[def-wonderful-finite-family]]).

[L2] A $y$-sparse graph has maximum degree at most $y|G|$ on its full vertex
set ([[def-c-sparse-and-c-restricted-vertex-set]]).

[L3] A pair is anticomplete exactly when it has no cross-edges
([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** apply wonderfulness and then count the outside vertices
that still see a chosen block.

1.1 Apply [L1] to the blockade $\mathcal B$. If it yields a $y^4$-restricted induced subgraph on at least $w$ vertices, then outcome 1 of the present lemma holds immediately. [L1, given]

2.1 We may therefore assume that [L1] yields an index $i\in[\ell]$ for which at most $y|G|$ vertices outside $V(\mathcal B)$ are mixed on $B_i$. Let $M$ be that exceptional set of mixed outside vertices. Every outside vertex with a neighbour in $B_i$ but not in $M$ has at least $|B_i|/2$ neighbours in $B_i$. Since every vertex of $B_i$ has total degree at most $y|G|$ by [L2], the number of outside vertices with at least $|B_i|/2$ neighbours in $B_i$ is at most $2y|G|$. [step 1.1, L2, algebra]

3.1 Let $Y$ be the set of vertices in $V(G)\setminus V(\mathcal B)$ that have no neighbours in $B_i$, and let $X:=B_i$. By step 2.1, $|Y|\ge |G|-|V(\mathcal B)|-|M|-2y|G|\ge |G|-y|G|-y|G|-2y|G|=(1-4y)|G|$. By construction there are no edges between $X$ and $Y$, so [L3] gives that $Y$ is anticomplete to $X$. Because all blocks have size $w$, we also have $|X|=|B_i|=w$. Thus outcome 2 holds. [given, step 2.1, L3, algebra]

4.1 Steps 1.1 and 3.1 prove that one of the two stated outcomes must occur. [step 1.1, step 3.1] ∎
