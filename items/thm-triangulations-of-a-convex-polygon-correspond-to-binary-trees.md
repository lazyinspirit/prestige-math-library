---
id: thm-triangulations-of-a-convex-polygon-correspond-to-binary-trees
kind: theorem
title: "There is a bijection $\\mathcal{T}_n\\to\\mathcal{P}_{n+2}$ for every $n\\in\\mathbb{N}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-polygon-chords-crossings-and-triangulations, lem-a-triangulation-has-a-unique-triangle-on-the-closing-side, def-binary-tree-and-its-size, lem-binary-trees-of-a-given-size-form-a-finite-set, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, Exercise 3.5.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
    - title: "N. Dershowitz and S. Zaks, The Cycle Lemma and Some Applications"
      url: "https://weizmann.elsevierpure.com/en/publications/the-cycle-lemma-and-some-applications"
pipeline_run: null
---

## Statement

For every natural number $n$ there is a bijection

$$\Psi_n:\mathcal{T}_n\longrightarrow\mathcal{P}_{n+2}$$

from the binary trees of size $n$ to the triangulations of the labelled
$(n+2)$-gon.

## Facts & Assumptions

**Given:** a natural number $n$.

[L1] A triangulation of the $(n+3)$-gon has a unique split index $k$ on the closing side, and splitting there produces triangulations of the $k$-gon and the $(n-k+4)$-gon ([[lem-a-triangulation-has-a-unique-triangle-on-the-closing-side]]).

[F1] Every tree in $\mathcal{T}_{n+1}$ is determined by an index $i\le n$, a left subtree in $\mathcal{T}_i$ and a right subtree in $\mathcal{T}_{n-i}$ ([[def-binary-tree-and-its-size]]).

[L2] A function is a bijection exactly when it has a two-sided inverse ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

## Proof

**Proof technique:** induction.

1.1 [base] The set $\mathcal{T}_0$ has the single tree $\{\varepsilon\}$ and the set $\mathcal{P}_2$ has the single empty triangulation, so there is a unique bijection $\Psi_0:\mathcal{T}_0\to\mathcal{P}_2$. [given]

1.2 [ih] Assume that for every index $j\le n$ a bijection $\Psi_j:\mathcal{T}_j\to\mathcal{P}_{j+2}$ has already been constructed. [given]

2.1 For a tree $T\in\mathcal{T}_{n+1}$ write its recursive data as $(i,L,R)$ as in [F1]. Let $\Psi_{n+1}(T)$ be the triangulation of the $(n+3)$-gon obtained by taking the triangle on the closing side with third vertex $k:=i+2$, filling the left $k$-gon by $\Psi_i(L)$, and filling the right $(n-i+2)$-gon by the order-preserving relabelling of $\Psi_{n-i}(R)$ onto the vertices $\{k,k+1,\dots,n+3\}$. [F1, step 1.2]

2.2 For a triangulation $U\in\mathcal{P}_{n+3}$, [L1] supplies a unique split index $k$ and therefore a unique index $i:=k-2\le n$, together with triangulations of the left $k$-gon and the right $(n-i+2)$-gon. Relabel those two sub-polygons back to $\{1,\dots,i+2\}$ and $\{1,\dots,n-i+2\}$, apply the inverse bijections $\Psi_i^{-1}$ and $\Psi_{n-i}^{-1}$ from the induction hypothesis, and rebuild a tree in $\mathcal{T}_{n+1}$ from the recursive data $(i,L,R)$. Define that tree to be $\Omega_{n+1}(U)$. [L1, F1, step 1.2]

3.1 The constructions in steps 2.1 and 2.2 undo one another because both are governed by the same split index: the root split of the tree becomes the closing-side triangle of the triangulation, and the closing-side triangle of the triangulation becomes the root split of the tree. Hence $\Omega_{n+1}\circ\Psi_{n+1}=\Delta_{\mathcal{T}_{n+1}}$ and $\Psi_{n+1}\circ\Omega_{n+1}=\Delta_{\mathcal{P}_{n+3}}$, so $\Psi_{n+1}$ is a bijection by [L2]. [L2, step 2.1, step 2.2, discharge-induction] ∎

## Remarks

- The boundary case is the digon, not the triangle. That is why the statement is $\mathcal{T}_n\to\mathcal{P}_{n+2}$ rather than $\mathcal{P}_{n+1}$, and it is why the base case carries the empty triangulation of the two-gon explicitly.
