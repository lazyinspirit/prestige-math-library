---
id: thm-weakest-link-pruning-terminates
kind: theorem
title: "Weakest-link pruning terminates at the root"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
dependency_level: 3
deps:
  - def-empirical-decision-tree
  - def-cost-complexity-pruning
  - alg-weakest-link-pruning
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  scraped: []
  references:
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., §9.2.2'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Statement

Let $T_0$ be a finite empirical binary tree with $L_0\ge1$ terminal nodes and nonempty sample set at every leaf. The weakest-link pruning procedure that repeatedly collapses a current nonterminal node minimizing $g(t)$ terminates at the root leaf after at most $L_0-1$ collapses. This is a termination statement only; it does not assert global cost-complexity optimality.

## Statement references

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §9.2.2, printed p. 308](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

## Facts & Assumptions

**Given:** A finite empirical binary tree $T_0$ whose internal nodes each have two nonempty child sample sets.

[F1] [[def-empirical-decision-tree]]: Every internal node splits its sample set into two nonempty child sets, and the terminal sample sets partition the original sample.

[F2] [[def-cost-complexity-pruning]]: For a current nonterminal node $t$, $g(t)=[R(t)-R(T_t)]/(|T_t|-1)$, where $T_t$ is its current descendant subtree.

[F3] [[alg-weakest-link-pruning]]: At each iteration the algorithm chooses a current nonterminal node minimizing $g(t)$, collapses its descendant subtree to a leaf, and stops when the current tree is the root leaf.

## Proof

1.1 If the current tree has more than one leaf, its root is nonterminal. Every nonterminal node $t$ has two finite child subtrees. Starting at either child and following descendants must reach a leaf because the tree is finite, so $|T_t|\ge2$ and every denominator in [F2] is positive. The tree has finitely many nonterminal nodes, and every loss in [F2] is a finite real number because the sample and chosen impurity formulas are finite. Hence the candidate quotients form a finite nonempty set of real numbers, which has a minimum by repeated pairwise comparison. [given, F1, F2, construct, algebra]

2.1 By [F3], the algorithm selects a minimizing candidate, using its fixed tie rule. If that node has $k=|T_t|\ge2$ descendant leaves, collapsing it replaces those $k$ leaves by one, reducing the current leaf count by $k-1\ge1$. The resulting tree is still a finite subtree of $T_0$. [F2, F3, step 1.1, algebra, choose]

3.1 Starting from $L_0$ leaves, each collapse strictly decreases the positive integer leaf count, so there are at most $L_0-1$ collapses. If more than one leaf remains, the root is nonterminal and is among the available candidates by step 1.1; therefore the algorithm cannot stop early. A nonterminal root has at least two descendant leaves by step 1.1, so a tree with one leaf is the root leaf. [F1, F3, step 1.1, step 2.1, algebra] ∎

