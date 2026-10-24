---
id: def-suslin-line-order-interface
kind: definition
title: "Suslin lines in order language"
status: published
origin: pipeline
deps: [def-partial-order, def-countable]
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
    - title: "Monk, Set theory following Jech (2024), Theorem 9.17, printed pp72–73; dense complete order convention separated from nowhere-separable reduction"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Definition

A **Suslin line** here is a linearly ordered set $(L,<)$ with the following properties. Linear means that the associated reflexive order is a partial order as in [[def-partial-order]] and every two elements are comparable.

It is nonempty, dense ($x<y$ implies some $z$ satisfies $x<z<y$), and has no endpoints (for every $x$ there are $u<x<v$). It is **Dedekind complete**: every nonempty subset $B\subseteq L$ that is bounded above has a least upper bound in $L$. A subset $D\subseteq L$ is **order-dense** if it meets every open interval $(x,y)=\{z:x<z<y\}$ for $x<y$; $L$ has no countable order-dense subset, where countable includes finite as in [[def-countable]]. Finally, every family of pairwise disjoint nonempty open intervals is countable.

These conditions describe nonseparability of the whole line; they do not require every interval to be nonseparable. A reduction to a nowhere-separable line is a separate result. Completeness requires upper bounds only for nonempty bounded subsets, so it neither asks for a supremum of the empty set nor supplies endpoints. Empty and singleton orders are excluded by nonemptiness and the no-endpoint condition respectively. Every interval with distinct ordered endpoints is nonempty by density.
