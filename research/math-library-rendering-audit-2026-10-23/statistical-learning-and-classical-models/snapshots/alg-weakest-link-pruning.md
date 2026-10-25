---
id: alg-weakest-link-pruning
kind: algorithm
title: "Weakest-link pruning of a finite tree"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
dependency_level: 2
deps:
  - def-empirical-decision-tree
  - def-cost-complexity-pruning
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., §9.2.2'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Definition

The input is a fixed finite empirical decision tree $T_0$. Start with the current tree $T=T_0$ and output sequence $(T_0)$. At each iteration, if $T$ consists of its root leaf, stop and return the sequence. Otherwise, for every current nonterminal node $t$, compute $g(t)=[R(t)-R(T_t)]/(|T_t|-1)$ using the current subtree quantities from the cost-complexity definition. Select a node minimizing $g(t)$; if several tie, select the node whose root-to-node address is least in lexicographic order with $L<R$. Collapse the current descendant subtree at that node to a leaf, using the empirical tree's leaf prediction rule on its sample set, and append the resulting subtree to the output sequence. Repeat on that new current tree.

The sequence contains the initial tree and each successive collapse through the root leaf. This procedure makes no claim that its subtrees globally minimize the cost-complexity criterion for every penalty or that a validation choice of penalty guarantees test-risk performance.

## Definition references

[[def-empirical-decision-tree|Empirical tree structure and leaf prediction rules]]

[[def-cost-complexity-pruning|Subtree loss, leaf count, and weakest-link quotient]]

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §9.2.2, printed p. 308](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

