---
id: lem-expander-sync-lem-3-3
title: Internal-edge mixing bound — Lemma 3.3
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-adjacency-expander
  - def-expander-sync-edge-count
  - def-expander-sync-matrix-order
  - def-expander-prereq-vertex-hilbert-space
  - math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
dependency_roles:
  def-expander-sync-adjacency-expander: mathematical-premise
  def-expander-sync-edge-count: mathematical-premise
  def-expander-sync-matrix-order: mathematical-premise
  def-expander-prereq-vertex-hilbert-space: mathematical-premise
  math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 19, Lemma 3.3 and proof
      statement: For an $(n,d^*,\alpha)$-expander and every $X\subseteq V$, $-\alpha
        d^*|X|\le e(X,X)-(d^*/n)|X|^2\le\alpha d^*|X|$.
      hypotheses: A graph satisfying the article's $(n,d^*,\alpha)$-expander condition
        and a subset $X$ of its vertex set.
      reading_limits: The supplied article text at Lemma 3.3 and its proof was
        inspected. This reference attributes the article's claim and argument;
        the proof below uses the declared mathematical suppliers.
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
---

## Statement

Let $G=(V,E)$ be an $(n,d^*,\alpha)$-expander, and let $X\subseteq V$. Then

$$-\alpha d^*|X|\le e(X,X)-(d^*/n)|X|^2\le\alpha d^*|X|.$$

Here $e(X,X)$ counts ordered adjacency entries, so a non-loop edge internal to $X$ contributes twice and a loop in $X$ contributes once.

## Statement references

[[def-expander-sync-adjacency-expander]]

[[def-expander-sync-edge-count]]

## Facts & Assumptions

[F1] The expander has a nonempty finite vertex set of size $n$, adjacency matrix $A$, all-ones matrix $J$, and centered adjacency matrix $\Delta_A=A-(d^*/n)J$ satisfying $\|\Delta_A\|\le\alpha d^*$ ([[def-expander-sync-adjacency-expander]]).

[F2] The ordered count is $e(X,X)=\sum_{x\in X}\sum_{y\in X}A_{xy}$, including diagonal entries ([[def-expander-sync-edge-count]]).

[F3] The vertex inner product is $\langle f,g\rangle=\sum_{x\in V}\overline{f(x)}g(x)$, with induced norm $\|f\|_2$ and matrix action by finite row sums ([[def-expander-prereq-vertex-hilbert-space]]). The operator norm is the supremum of $\|Hf\|_2/\|f\|_2$ over nonzero $f$ ([[def-expander-sync-matrix-order]]).

[F4] Cauchy–Schwarz gives $|\langle f,g\rangle|\le\|f\|_2\|g\|_2$; the vertex-space convention transfers the cited linear-first version by conjugation ([[math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[def-expander-prereq-vertex-hilbert-space]]).

## Proof

**Given:** An $(n,d^*,\alpha)$-expander $G$ and $X\subseteq V$.

**Goal:** Establish the two displayed inequalities.

**Proof technique:** direct.

1.1 Let $1_X$ be the indicator function, equal to $1$ on $X$ and $0$ outside it. The coordinate sums give $\langle 1_X,A1_X\rangle=e(X,X)$, $\langle 1_X,J1_X\rangle=|X|^2$, and $\|1_X\|_2^2=|X|$. Hence $\langle 1_X,\Delta_A1_X\rangle=e(X,X)-(d^*/n)|X|^2$. [F1, F2, F3]

2.1 If $1_X=0$, then $\|\Delta_A1_X\|_2=0$; otherwise the operator-norm definition gives $\|\Delta_A1_X\|_2\le\|\Delta_A\|\|1_X\|_2$. Thus Cauchy–Schwarz and the expander bound yield $|\langle 1_X,\Delta_A1_X\rangle|\le\|\Delta_A\|\|1_X\|_2^2\le\alpha d^*|X|$. The quantity in step 1.1 is real, so the absolute-value inequality is exactly the two claimed bounds. [F1, F3, F4, step 1.1] ∎

## Source notes

The statement and indicator-vector method are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), Lemma 3.3. The proof above derives the bound from the stated mathematical suppliers.
