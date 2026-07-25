---
id: def-partial-order
kind: definition
title: "Partial order and partially ordered set"
status: published
origin: session
deps: []
justified_by: []
aliases: [def-poset]
landmark: true
short: "partial order"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
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
- All three axioms are used essentially in the proofs on this page: reflexivity
  in [[lem-extremal-cut-closed-under-f]] and [[lem-successor-of-extremal]],
  transitivity almost everywhere, and antisymmetry in [[thm-bourbaki-witt]],
  where the fixed point is obtained by passing from $f(c) \le c$ and
  $c \le f(c)$ to $f(c) = c$. Antisymmetry is also what makes a least upper
  bound unique when it exists, and uniqueness is what licenses the functional
  notation $\sup$ used in [[def-chain-complete-poset]].
- Dropping antisymmetry gives a **preorder**. Preorders are genuinely useful
  elsewhere (a directed set is preordered), but they are not used on this page.
- Inclusion $\subseteq$ on the power set of any set is the standard example, and
  it is the concrete order the two applications on this page run in:
  [[thm-zorn]] applies [[thm-bourbaki-witt]] to the set of chains of $P$ ordered
  by inclusion, and [[thm-zorn-implies-ac]] applies Zorn's lemma to partial
  choice functions ordered by extension. The results themselves are stated for
  an *arbitrary* poset and are used that way: [[thm-zorn]] is applied to
  whatever poset a later page brings, and the refutation in
  [[fs-maximal-is-greatest]] runs in a bare two-element antichain that is not
  presented as an order by inclusion at all.
