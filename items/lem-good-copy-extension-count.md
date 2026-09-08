---
id: lem-good-copy-extension-count
kind: lemma
title: "Good copy extension count"
status: draft
origin: pipeline
deps: [def-labelled-blowup-and-good-induced-copy, thm-product-rule, thm-sum-rule, thm-subset-of-a-finite-set]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "4.2, internal claim (1)"
proof_strategy: induction
---

## Statement

Let $J$ have $j\geq1$ vertices and let $(A_v:v\in V(J))$ be a $(t,1/j)$-blowup in a finite graph $G$, with integer $t\geq1$. Every good embedding of $J[I]$, $I\subseteq V(J)$, has at least $(t/j)^{j-|I|}$ good extensions to $J$.

## Facts & Assumptions

**Given:** A $(t,1/j)$-blowup of a nonempty $j$-vertex pattern, integer $t\geq1$, $I\subseteq V(J)$, and a good partial embedding $\phi$.

[F1] In a $(t,1/j)$-blowup, every vertex of either block has at most $t/j$ wrong adjacencies in the other block; good embeddings respect the assigned labels. ([[def-labelled-blowup-and-good-induced-copy]]).

## Proof

1.1 Induct on $r=j-|I|$. When $r=0$, the given map is its unique extension and the bound is $(t/j)^0=1$. [base]

1.2 Let $r>0$ and assume the assertion for $r-1$. Choose a missing label $v$. For every $i\in I$, [F1] bounds by $t/j$ the vertices in $A_v$ with the wrong adjacency to $\phi(i)$. The union of these forbidden sets has size at most $|I|t/j$: assign each forbidden vertex to its first offending label, obtaining disjoint subsets of the forbidden sets. Thus at least $t-|I|t/j\geq t/j>0$ vertices are available. [F1, ih]

2.1 Each available $w\in A_v$ gives an induced extension by $v\mapsto w$: the old map already preserves all old pairs, the new pairs have the prescribed adjacency, and disjoint blocks prevent collisions. By induction each such map has at least $(t/j)^{r-1}$ full extensions. The families for distinct $w$ are disjoint since they differ at $v$; adding their cardinalities gives at least $(t/j)(t/j)^{r-1}=(t/j)^r$. This proves the induction, including the empty initial map. [step 1.1, step 1.2, discharge-induction] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 4.2, internal claim (1).
