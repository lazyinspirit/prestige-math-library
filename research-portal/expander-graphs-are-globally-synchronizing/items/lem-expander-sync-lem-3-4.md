---
id: lem-expander-sync-lem-3-4
title: Cut-edge mixing bound — Lemma 3.4
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-two-sided-expander
  - def-expander-sync-edge-count
  - def-expander-sync-matrix-order
  - lem-expander-sync-cut-test-vector
dependency_roles:
  def-expander-sync-two-sided-expander: mathematical-premise
  def-expander-sync-edge-count: mathematical-premise
  def-expander-sync-matrix-order: mathematical-premise
  lem-expander-sync-cut-test-vector: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 19–20, Lemma 3.4 and its proof
      statement: For an $(n,d^*,\alpha,c^-,c^+)$-expander and every $X\subseteq V$,
        $c^-(d^*/n)|X||X^c|\le e(X,X^c)-(d^*/n)|X||X^c|\le c^+(d^*/n)|X||X^c|$.
      hypotheses: The graph satisfies Definition 1.9 of the article and $X$ is a
        subset of its vertex set.
      reading_limits: The extracted article text for Lemma 3.4 and its proof on PDF
        pp. 19–20 was inspected. This reference attributes the article claim and
        method; the proof below uses the declared local suppliers.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 5
---

## Statement

Let $G=(V,E)$ be an $(n,d^*,\alpha,c^-,c^+)$-expander as in [[def-expander-sync-two-sided-expander]], and let $X\subseteq V$. Write $X^c=V\setminus X$ and let $e(X,X^c)$ be the ordered edge count of [[def-expander-sync-edge-count]]. Then

$$c^-\frac{d^*}{n}|X||X^c|\le e(X,X^c)-\frac{d^*}{n}|X||X^c|\le c^+\frac{d^*}{n}|X||X^c|.$$

## Facts & Assumptions

[F1] The expander definition has $n=|V|>0$, $\Delta_L=L-d^*I+(d^*/n)J$, and $c^-d^*I\preceq\Delta_L\preceq c^+d^*I$. Here $L$ is the row-sum Laplacian, $I$ is the identity, and $J$ is the all-ones matrix ([[def-expander-sync-two-sided-expander]]).

[F2] For Hermitian matrices, $B\preceq C$ means that $\langle f,(C-B)f\rangle\ge0$ for every complex vector $f$, with $\langle f,g\rangle=\sum_{x\in V}\overline{f(x)}g(x)$ ([[def-expander-sync-matrix-order]]).

[F3] If $\mathbf1_X$ and $\mathbf1_{X^c}$ are the indicators of $X$ and $X^c$ and $f=|X^c|\mathbf1_X-|X|\mathbf1_{X^c}$, then $\langle f,f\rangle=n|X||X^c|$ and $\langle f,\Delta_Lf\rangle=n^2(e(X,X^c)-(d^*/n)|X||X^c|)$ ([[lem-expander-sync-cut-test-vector]]).

## Proof

**Given:** An expander $G$ and a subset $X\subseteq V$ as in the statement.

**Goal:** Establish both displayed bounds on the centered cut count.

1.1 Take the cut vector $f$ of [F3]. Applying the two order inequalities in [F1] to this vector using [F2] yields $c^-d^*\langle f,f\rangle\le\langle f,\Delta_Lf\rangle\le c^+d^*\langle f,f\rangle$. This application is valid also when $f=0$. [F1, F2, F3]

2.1 Substitute the two identities in [F3] into step 1.1 and divide throughout by $n^2>0$, using $n>0$ from [F1]. The result is precisely the asserted pair of inequalities. This includes $X=\varnothing$ and $X=V$. [F1, F3, step 1.1, algebra] ∎

## Source notes

The statement and the cut-vector method are attributed to Lemma 3.4 of [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf). The argument above derives the claim from the stated local suppliers.
