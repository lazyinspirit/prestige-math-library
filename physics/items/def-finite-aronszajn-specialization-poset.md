---
id: def-finite-aronszajn-specialization-poset
kind: definition
title: "Finite specializing conditions"
status: published
origin: pipeline
deps: [def-aronszajn-suslin-and-special-tree, def-poset-ccc-and-knaster-property]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Lemma 16.37, printed p332; reflexive order and distinct-node conventions corrected explicitly"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Definition

Let $T$ be an Aronszajn tree as in [[def-aronszajn-suslin-and-special-tree]]. A **finite specializing condition** is a function $p$ whose domain is a finite subset of $T$, whose values lie in $\omega$, and such that

$$x<_Ty\text{ and }x,y\in\operatorname{dom}(p)\quad\Longrightarrow\quad p(x)\ne p(y).$$

Let $P(T)$ be the set of these functions, ordered by $q\le p$ iff $q\supseteq p$ as graphs. Reflexivity and transitivity follow from graph inclusion; mutual inclusion gives equality, so this is a partial order. Its greatest condition is the empty function. The displayed inequality concerns distinct comparable nodes; it imposes no condition on $p(x)$ compared with itself. In particular every singleton assignment is a condition.

Two conditions $p,q$ are compatible in the sense of [[def-poset-ccc-and-knaster-property]] iff their union is a function and is a specializing condition. Indeed a common lower bound extends both graphs, so they agree on their overlap and all pairs in their union inherit its unequal-label requirement. Conversely, if $p\cup q$ is a condition then it extends both and is a common lower bound. Equivalently, they must agree on their common domain and assign different labels to any distinct comparable pair in the combined domain. Agreement on overlap alone does not verify the second requirement. The union of two finite domains is finite; the union with the empty condition is the original condition.
