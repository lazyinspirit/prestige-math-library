---
id: lem-expander-sync-cut-test-vector
title: Cut test-vector identities for Laplacian mixing
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-edge-count
  - def-expander-sync-centered-matrices
  - def-expander-sync-matrix-order
  - prop-expander-prereq-indicator-and-cut-calculus
  - prop-expander-prereq-constant-projection
dependency_roles:
  def-expander-sync-edge-count: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
  def-expander-sync-matrix-order: mathematical-premise
  prop-expander-prereq-indicator-and-cut-calculus: mathematical-premise
  prop-expander-prereq-constant-projection: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 19, proof of Lemma 3.4
      statement: The proof uses the centered cut vector and its norm and Laplacian
        quadratic form to obtain a cut-edge mixing bound.
      hypotheses: The graph and cut are as in Lemma 3.4 and its proof.
      reading_limits: The frozen extracted formulation was inspected. This reference
        is attribution only; the proof below uses the listed local suppliers.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 3
---

## Statement

Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, at most one edge between any pair of vertices, and possible self-loops. Write $n=|V|$, let $A$ be its adjacency matrix, $D$ the diagonal matrix of row sums of $A$, and $L=D-A$. Let $I$ be the identity matrix, $J$ the all-ones matrix, and $d^*$ a real reference parameter. Set $\Delta_L=L-d^*I+(d^*/n)J$. For subsets $X,Y\subseteq V$, put $e(X,Y)=\sum_{x\in X}\sum_{y\in Y}A_{xy}$. The inner product is $\langle u,v\rangle=\sum_{x\in V}\overline{u(x)}v(x)$.

For $X\subseteq V$, write $X^c=V\setminus X$ and let $\mathbf1_X$ be the function that is $1$ on $X$ and $0$ elsewhere. Set $f=|X^c|\mathbf1_X-|X|\mathbf1_{X^c}$. Then $\langle f,f\rangle=n|X||X^c|$, $\langle f,Lf\rangle=n^2e(X,X^c)$, $\langle f,Jf\rangle=0$, and $\langle f,\Delta_Lf\rangle=n^2(e(X,X^c)-(d^*/n)|X||X^c|)$.

## Facts & Assumptions

[F1] The graph adjacency matrix is real, symmetric and nonnegative, and $e(X,Y)$ is the displayed ordered count. A loop contributes once to a row sum ([[def-expander-sync-edge-count]]).

[F2] For a nonempty finite vertex set and a real symmetric nonnegative matrix, the cut-calculus proposition gives $f^Tf=n|X||X^c|$, $Jf=0$, and $f^TLf=n^2e(X,X^c)$ for the displayed cut vector, with $L$ formed from the row sums. It includes empty cuts and permits diagonal entries ([[prop-expander-prereq-indicator-and-cut-calculus]]).

[F3] The centered Laplacian is $\Delta_L=L-d^*I+(d^*/n)J$ ([[def-expander-sync-centered-matrices]]). The displayed Hermitian inner product is linear in its second argument and agrees with transpose multiplication for real vectors ([[def-expander-sync-matrix-order]]).

[F4] For any vector $g$, $\langle g,Jg\rangle=|\sum_{x\in V}g(x)|^2$ ([[prop-expander-prereq-constant-projection]]).

## Proof

**Given:** The graph, real parameter $d^*$ and subset $X$ in the statement.

**Goal:** Prove the four displayed identities.

1.1 By [F1], the graph adjacency matrix satisfies the hypotheses of [F2], with the same row-sum Laplacian and ordered cut count. The vector $f$ is real, so [F2] and [F3] give $\langle f,f\rangle=n|X||X^c|$ and $\langle f,Lf\rangle=n^2e(X,X^c)$. Also [F2] gives $Jf=0$, hence $\langle f,Jf\rangle=0$. Equivalently, its coordinate sum is zero and [F4] gives the same last identity. [F1, F2, F3, F4, given]

2.1 By [F3] and linearity in the second argument, $\langle f,\Delta_Lf\rangle=\langle f,Lf\rangle-d^*\langle f,f\rangle+(d^*/n)\langle f,Jf\rangle$. Substituting step 1.1 and using $n>0$ gives $n^2e(X,X^c)-d^*n|X||X^c|=n^2(e(X,X^c)-(d^*/n)|X||X^c|)$, as required. [F3, step 1.1, given, algebra] ∎

## Source notes

The cut-vector calculation is attributed to the proof of Lemma 3.4 in the cited article. The proof above is a local consequence of the stated suppliers.
