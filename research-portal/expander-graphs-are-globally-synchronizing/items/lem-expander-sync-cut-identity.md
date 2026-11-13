---
id: lem-expander-sync-cut-identity
title: Nested-cut polarization identity
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-edge-count
  - prop-expander-prereq-indicator-and-cut-calculus
dependency_roles:
  def-expander-sync-edge-count: mathematical-premise
  prop-expander-prereq-indicator-and-cut-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 20–21, proof of Lemma 3.7, opening identity
      statement: For nested vertex sets X and Y, the count from X to the complement of
        Y is one half of the sum of the cuts of X and Y minus the cut of Y minus
        X.
      hypotheses: The finite undirected graph and nested vertex sets in the proof of
        Lemma 3.7.
      reading_limits: The citation attributes the extracted article claim; it is not
        used as a proof or an independent prerequisite. The local proof below
        uses the stated suppliers.
dependency_level: 3
---

## Statement

Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, at most one edge between each pair of vertices, and possible loops. Its adjacency entry $A_{x,y}$ is $1$ when $\{x,y\}\in E$ and $0$ otherwise. For $P,Q\subseteq V$, write $e(P,Q)=\sum_{p\in P}\sum_{q\in Q}A_{p,q}$ and $P^c=V\setminus P$. If $X\subseteq Y\subseteq V$, then

$$e(X,Y^c)=\frac{e(X,X^c)+e(Y,Y^c)-e(Y\setminus X,(Y\setminus X)^c)}{2}.$$

## Facts & Assumptions

[F1] The graph adjacency matrix is symmetric and nonnegative, and the displayed $e(P,Q)$ is its ordered-pair count; complements are relative to $V$ ([[def-expander-sync-edge-count]]).

[F2] For a nonempty finite set with a symmetric nonnegative matrix and the same ordered weight count, nested sets satisfy $2e(X,Y^c)=e(X,X^c)+e(Y,Y^c)-e(Y\setminus X,(Y\setminus X)^c)$ ([[prop-expander-prereq-indicator-and-cut-calculus]]).

## Proof

**Given:** $G$, $X$ and $Y$ as in the statement.

**Goal:** Prove the displayed nested-cut identity.

1.1 By [F1], $A$ is a symmetric nonnegative matrix indexed by the nonempty finite set $V$. Its ordered weight count and relative complements are exactly those in the statement, so the hypotheses and notation of [F2] apply to $X\subseteq Y$. [given, F1, F2]

2.1 Applying [F2] gives twice the left-hand side equal to the numerator on the right. Dividing by $2$ proves the identity, including when one of the sets is empty. [F2, step 1.1, algebra] ∎

## Source notes

The identity is attributed to the opening of the proof of Lemma 3.7 in the cited article. The proof above instead applies the independently supplied cut-calculus proposition.
