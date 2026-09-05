---
id: thm-three-sat-reduces-to-subset-sum
kind: theorem
title: "3SAT polynomial-time many-one reduces to subset sum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-three-sat-reduces-to-clique, thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible, def-clique-independent-set-and-vertex-cover-problems, def-subset-sum-and-partition, def-polynomial-time-many-one-reduction]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Fabrizio Iozzi and Luca Trevisan, Handout NP2"
      url: "https://lucatrevisan.github.io/30540/notes-np2.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
---

## Statement

There is a polynomial-time many-one reduction from $3$-SAT to SUBSET SUM.

## Facts & Assumptions

**Given:** An arbitrary INDEPENDENT SET instance $(G,k)$, where $$ V(G)=\{v_1,\ldots,v_n\}, \qquad E(G)=\{e_1,\ldots,e_m\}. $$

[L1] There is a polynomial-time many-one reduction from $3$-SAT to CLIQUE, by [[thm-three-sat-reduces-to-clique]].

[L2] CLIQUE, INDEPENDENT SET, and VERTEX COVER polynomial-time many-one reduce to one another, by [[thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible]].

[F1] INDEPENDENT SET asks for $k$ pairwise nonadjacent vertices, and SUBSET SUM asks for a subcollection of positive integers whose sum is a prescribed target, by [[def-clique-independent-set-and-vertex-cover-problems]] and [[def-subset-sum-and-partition]].

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], it is enough to reduce INDEPENDENT SET to SUBSET SUM. If $k=0$, map $(G,k)$ to the fixed yes-instance consisting of the list $(1)$ with target $1$, because every graph has an independent set of size $0$. If $k>n$, map $(G,k)$ to the fixed no-instance consisting of the list $(1)$ with target $2$, because no graph on $n$ vertices has an independent set of size greater than $n$. So assume from now on that $1\le k\le n$. Set the base to $B:=n+2$. [L1, L2, F1, given, cases]

2.1 For each vertex $v_i$, form a base-$B$ integer $a_i$ with $m+1$ digits: the leading digit is $1$, and the digit in edge-column $j$ is $1$ exactly when $e_j$ is incident to $v_i$. For each edge $e_j$, form one slack integer $b_j$ whose only nonzero digit is a $1$ in edge-column $j$. Let the target integer $T$ have leading digit $k$ and digit $1$ in every edge-column. Since the leading-column sum is at most $n<B$ and every edge-column sum is at most $3<B$, no carries can occur in any valid sum. [F1, step 1.1, given, construct]

3.1 If $I\subseteq V(G)$ is an independent set of size $k$, choose the vertex numbers $a_i$ with $v_i\in I$. For each edge $e_j$ that has no endpoint in $I$, also choose the slack number $b_j$. Then the leading digit sums to $k$, and each edge-column sums to $1$: an edge with one endpoint in $I$ receives its $1$ from the corresponding vertex number, while an edge with no endpoint in $I$ receives its $1$ from its slack number. Hence the chosen integers sum to $T$. [F1, step 2.1, construct]

3.2 Conversely, suppose that some subcollection of the constructed integers sums to $T$. Because the slack numbers have leading digit $0$, exactly $k$ vertex numbers $a_i$ must be chosen. Consider any edge $e_j=\{u,v\}$. The target has digit $1$ in column $j$, and there are no carries by step 2.1. Hence both endpoint numbers for $u$ and $v$ cannot both be chosen, because that would contribute at least $2$ in column $j$. Therefore the chosen $k$ vertices are pairwise nonadjacent, so they form an independent set. [F1, step 2.1]

4.1 The map in step 2.1 uses $n+m$ integers with $m+1$ base-$B$ digits, so its binary output size and construction time are polynomial in the size of $(G,k)$. Steps 3.1 and 3.2 prove a polynomial-time many-one reduction from INDEPENDENT SET to SUBSET SUM. Composing that reduction with [L1] and [L2] yields a polynomial-time many-one reduction from $3$-SAT to SUBSET SUM. [L1, L2, step 1.1, step 2.1, step 3.1, step 3.2] ∎
