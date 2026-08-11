---
id: cex-infinite-branching-is-not-enough-for-konig
kind: counterexample
title: "Finite strictly decreasing sequences of naturals form a tree with every finite level nonempty but no infinite branch"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-konig-infinity-lemma-for-ordered-trees, def-finitely-branching-tree-on-finite-sequences, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

In [[thm-konig-infinity-lemma-for-ordered-trees]], finite branching can be replaced by arbitrary branching: every tree of finite sequences with a node at every level has an infinite branch.

## Facts & Assumptions

**Given:** The tree conventions of [[def-finitely-branching-tree-on-finite-sequences]].

[L1] An ordered finitely branching tree with a node at every level has an infinite branch, in ZF ([[thm-konig-infinity-lemma-for-ordered-trees]]).

## Counterexample

**Proof technique:** constructive.

1.1 Let $T$ consist of the empty sequence and all finite strictly decreasing sequences of natural numbers. It is prefix closed. For every $n$, the sequence $(n-1,n-2,\ldots,0)$ is a node of length $n$, so every finite level is nonempty. [construct]

2.1 The root has infinitely many successors, so $T$ is not finitely branching. An infinite branch would be an infinite strictly decreasing sequence of naturals, but its range would have a least element by [[thm-well-ordering-principle]], after which the branch would have to contain a smaller one. Thus no infinite branch exists, and the missing hypothesis relative to [L1] is exactly finite branching. [step 1.1, L1, discharge-construct] ∎

