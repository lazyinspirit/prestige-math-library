---
id: lem-qid-fixed-size-density-selection
kind: lemma
title: "Qid fixed size density selection"
status: published
origin: pipeline
deps: [thm-double-counting, cor-the-averaging-principle, thm-binomial-closed-formula, thm-two-element-subsets-count, def-induced-copy-density-and-homogeneous-restriction-parameter]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "4.3 proof (1); 5.2 proof (1)"
proof_strategy: direct
---

## Statement

Let $A,B$ be finite vertex sets and $1\leq m\leq N=|A|$ an integer. Some $m$-subset $C\subseteq A$ satisfies $e_G(C,B)\leq m e_G(A,B)/N$. Independently, if $2\leq m\leq N$, some $m$-subset $C\subseteq A$ satisfies $e(G[C])/\binom m2\leq e(G[A])/\binom N2$. For $m=1$ the internal edge count is zero. Applying the internal assertion to $\overline G$ gives the analogous upper-density selection. The cross-edge and internal choices need not be the same subset. Cross edges are counted as ordered adjacency pairs, so $A$ and $B$ may overlap.

## Facts & Assumptions

**Given:** Finite $A,B$, $N=|A|$, and an integer $1\leq m\leq N$.

[F1] $\binom{n}{k}\cdot k!\cdot (n-k)! = n!$. ([[thm-binomial-closed-formula]]).

[F2] $\sum_{x \in X}\lvert R_x\rvert \;=\; \lvert R\rvert \;=\; \sum_{y \in Y}\lvert R^{y}\rvert$. ([[thm-double-counting]]).

[F3] In a finite nonempty family of incidence rows, at least one row has size at most the average row size. ([[cor-the-averaging-principle]]).

## Proof

1.1 The family $\mathcal C$ of $m$-subsets of $A$ is finite and nonempty: enumerate $A$ and take its first $m$ members. Its size is $\binom Nm>0$. Each ordered adjacency pair $(a,b)\in A\times B$ is counted in $e_G(C,B)$ precisely when $a\in C$, and hence belongs to precisely $\binom{N-1}{m-1}$ members. Double counting incidences $(C,\text{edge})$ by [F2] and dividing by $\binom Nm$ gives average cross count $e_G(A,B)\binom{N-1}{m-1}/\binom Nm=m e_G(A,B)/N$, where the factorial identity [F1] gives the last ratio. [F1, F2]

2.1 The averaging principle [F3] applied to this incidence relation yields a member with cross count no greater than the average. This remains true if $B$ or the edge set is empty: every cross count is zero. [F3, step 1.1]

2.2 For $m\geq2$, an internal edge is in $\binom{N-2}{m-2}$ members of $\mathcal C$. Repeating the incidence count [F2], its average internal count is $e(G[A])\binom{N-2}{m-2}/\binom Nm=e(G[A])m(m-1)/(N(N-1))$ by [F1]. A member no greater than this average exists by [F3]; division by $\binom m2>0$ gives the assertion. [F1, F2, F3, step 1.1]

3.1 If $m=1$, choose any vertex of the nonempty $A$; its induced graph has zero edges. For $m=N$, the only choice is $C=A$ and the bounds are equalities. In the complement the same count gives $e(\overline G[C])\leq e(\overline G[A])\binom m2/\binom N2$, equivalently an internal density at least that of $G[A]$ when $m\geq2$. [step 2.1, step 2.2, algebra] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 4.3 proof (1); 5.2 proof (1).
