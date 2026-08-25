---
id: thm-binary-trees-correspond-to-dyck-paths
kind: theorem
title: "There is a bijection $\\mathcal{T}_n\\to\\mathcal{D}_n$ for every $n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-binary-tree-and-its-size, lem-binary-trees-of-a-given-size-form-a-finite-set, def-dyck-path-and-semilength, lem-first-return-decomposition-of-a-nonempty-dyck-path, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
    - title: "N. Dershowitz and S. Zaks, The Cycle Lemma and Some Applications"
      url: "https://weizmann.elsevierpure.com/en/publications/the-cycle-lemma-and-some-applications"
pipeline_run: null
---

## Statement

For every natural number $n$ there is a bijection

$$\Phi_n:\mathcal{T}_n\longrightarrow\mathcal{D}_n$$

from the binary trees of size $n$ ([[def-binary-tree-and-its-size]]) to the Dyck
paths of semilength $n$ ([[def-dyck-path-and-semilength]]).

## Facts & Assumptions

**Given:** a natural number $n$.

[F1] Every tree in $\mathcal{T}_{n+1}$ is determined by an index $i\le n$, a left subtree in $\mathcal{T}_i$ and a right subtree in $\mathcal{T}_{n-i}$ ([[def-binary-tree-and-its-size]]).

[L1] Every Dyck path of semilength $n+1$ factors uniquely as $U\,P\,D\,Q$ with $P\in\mathcal{D}_i$ and $Q\in\mathcal{D}_{n-i}$ for a unique index $i\le n$ ([[lem-first-return-decomposition-of-a-nonempty-dyck-path]]).

[L2] A function is a bijection exactly when it has a two-sided inverse ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

## Proof

**Proof technique:** induction.

1.1 [base] The set $\mathcal{T}_0$ has the single tree $\{\varepsilon\}$ and $\mathcal{D}_0$ has the single empty path, so $\Phi_0$ sending $\{\varepsilon\}$ to the empty path is a bijection. [given]

1.2 [ih] Assume that for every index $j\le n$ a bijection $\Phi_j:\mathcal{T}_j\to\mathcal{D}_j$ has already been constructed. [given]

2.1 For a tree $T\in\mathcal{T}_{n+1}$ write its recursive data as $(i,L,R)$ as in [F1], with $L\in\mathcal{T}_i$ and $R\in\mathcal{T}_{n-i}$, and define $\Phi_{n+1}(T)$ to be the Dyck path whose step word is $U$, then the step word of $\Phi_i(L)$, then $D$, then the step word of $\Phi_{n-i}(R)$. This lands in $\mathcal{D}_{n+1}$ by the defining condition on Dyck paths. [F1, step 1.2]

2.2 For a Dyck path $Q\in\mathcal{D}_{n+1}$, the first-return factorisation of [L1] writes $Q$ uniquely as $U\,P\,D\,Q'$ with $P\in\mathcal{D}_i$ and $Q'\in\mathcal{D}_{n-i}$ for a unique $i\le n$, so the induction hypothesis supplies unique trees $L:=\Phi_i^{-1}(P)$ and $R:=\Phi_{n-i}^{-1}(Q')$ and therefore a unique tree $T$ with recursive data $(i,L,R)$. Define $\Psi_{n+1}(Q):=T$. [L1, step 1.2]

3.1 The definitions of $\Phi_{n+1}$ and $\Psi_{n+1}$ undo one another: starting from a tree, the factorisation recovered from its image is the same recursive split, and starting from a Dyck path, the tree recovered from its first return rebuilds the same path. Hence $\Psi_{n+1}\circ\Phi_{n+1}=\Delta_{\mathcal{T}_{n+1}}$ and $\Phi_{n+1}\circ\Psi_{n+1}=\Delta_{\mathcal{D}_{n+1}}$, so $\Phi_{n+1}$ is a bijection by [L2]. [L2, step 2.1, step 2.2, discharge-induction] ∎

## Remarks

- The proof is a transport of the same recursion on two different families. Binary trees split at the root into left and right subtrees; Dyck paths split at their first return into an inner and an outer path. The bijection is that identification written as a two-sided inverse.
