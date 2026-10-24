---
id: def-finitely-branching-tree-on-finite-sequences
kind: definition
title: "Rooted trees of finite sequences, levels, branches, and finite branching, with ordered finite successor sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-cardinality, def-natural-numbers, def-nat-order]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "I. B. Leader, Ramsey Theory, compactness proof after Corollary 3"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Definition

Let $\mathbb N$ be [[def-natural-numbers]]. A **rooted tree of finite sequences** is a nonempty set $T$ of finite sequences of naturals such that the empty sequence belongs to $T$ and every initial segment of a member of $T$ also belongs to $T$.

The **level** $T_n$ consists of the sequences in $T$ of length $n$. A node $t^\frown a$ is an **immediate successor** of $t$ when it is obtained by appending $a\in\mathbb N$. The tree is **finitely branching** when each node has only finitely many immediate successors ([[def-finite-cardinality]]). Their labels inherit the natural order of [[def-nat-order]], so every nonempty successor set has a least member.

An **infinite branch** is a function $b:\mathbb N\to\mathbb N$ such that the initial segment $(b(0),\ldots,b(n-1))$ lies in $T_n$ for every $n$. The empty initial segment is the root, and finite branching permits a node to have no successors; the hypotheses of an infinity lemma must rule out termination along the branch it constructs.

