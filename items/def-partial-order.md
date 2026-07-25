---
id: def-partial-order
kind: definition
title: "Partial order and partially ordered set"
status: draft
origin: session
deps: []
justified_by: []
aliases: [def-poset]
landmark: true
short: "partial order"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Partially ordered set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partially_ordered_set"
    - title: "Total order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Total_order"
pipeline_run: null
---

## Definition

Let $P$ be a set. A **partial order** on $P$ is a binary relation $\le$ on $P$
such that, for all $x, y, z \in P$:

- **(R)** *reflexivity*: $x \le x$;
- **(A)** *antisymmetry*: if $x \le y$ and $y \le x$, then $x = y$;
- **(T)** *transitivity*: if $x \le y$ and $y \le z$, then $x \le z$.

The pair $(P, \le)$ is a **partially ordered set**, abbreviated **poset**. When
the order is clear we write $P$ for the pair.

The associated **strict order** is defined by
$$x < y \quad :\Longleftrightarrow \quad x \le y \text{ and } x \ne y.$$

Two elements $x, y \in P$ are **comparable** if $x \le y$ or $y \le x$, and
**incomparable** otherwise. A partial order in which every two elements are
comparable is a **total order** (equivalently a **linear order**), and $(P, \le)$
is then a **totally ordered set**.

## Remarks

- Partiality is the whole point: a partial order is permitted to leave pairs
  incomparable. Every statement below that concerns maximal elements, chains, or
  upper bounds is interesting precisely because incomparable pairs may exist; in
  a total order most of them collapse to something obvious.
- The three axioms are independent of one another, and none may be dropped
  without losing the results on this page. Antisymmetry is what makes a least
  upper bound unique when it exists, and uniqueness is what licenses the
  functional notation $\sup$ used in [[def-chain-complete-poset]].
- Dropping antisymmetry gives a **preorder**. Preorders are genuinely useful
  elsewhere (a directed set is preordered), but they are not used on this page.
- Inclusion $\subseteq$ on the power set of any set is the standard example, and
  it is the one every proof on this page ultimately applies to.
