---
id: def-cut-order
kind: definition
title: "Order on the Dedekind reals"
status: published
origin: session
deps: [def-dedekind-cut, def-real-dedekind]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Appendix: construction of ℝ)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://bookstore.ams.org/chel-79"
pipeline_run: null
---

## Definition

For Dedekind cuts $A, B \in \mathbb{R}$ ([[def-dedekind-cut]],
[[def-real-dedekind]]), the **order** is set inclusion:

$$A \le B \iff A \subseteq B, \qquad A < B \iff A \subsetneq B.$$

That is, $A < B$ means $A \subseteq B$ and $A \ne B$.

A cut $A$ is called **positive** iff $0^{*} < A$, and **nonnegative** iff
$0^{*} \le A$, where $0^{*} = \{\, r \in \mathbb{Q} : r < 0 \,\}$ is the cut of
$0$. Negative and nonpositive cuts are defined symmetrically:
$A < 0^{*}$ and $A \le 0^{*}$.

## Remarks

Positivity has a convenient rational restatement: $0^{*} \le A$ iff every
rational $r < 0$ lies in $A$, and $0^{*} < A$ iff moreover $0 \in A$. Indeed if
$0 \in A$ then downward closure (C2) forces every $r < 0$ into $A$, so
$0^{*} \subseteq A$ and the inclusion is proper; conversely $0^{*} \subsetneq A$
supplies some $q \in A$ with $q \ge 0$, whence $0 \in A$ by (C2). Thus a cut is
positive exactly when it contains $0$.

Inclusion is manifestly reflexive, antisymmetric, and transitive; what is not
immediate is that it is **total** (any two cuts are comparable), which is
[[lem-cut-order-total]]. Compatibility of this order with the field operations
(translation invariance of $\le$ and closure of nonnegatives under products),
making $\mathbb{R}$ a totally ordered field, is
[[thm-reals-dedekind-ordered-field]].
