---
id: def-order-isomorphism
kind: definition
title: "Order embedding and order isomorphism"
status: published
origin: session
deps: [def-partial-order, def-well-order]
justified_by: []
aliases: [def-order-embedding, def-order-isomorphic]
landmark: false
short: "bijection $f$ with $x\\le y\\iff f(x)\\le f(y)$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Order isomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_isomorphism"
    - title: "Partially ordered set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partially_ordered_set"
pipeline_run: null
---

## Definition

Let $(P, \le_P)$ and $(Q, \le_Q)$ be posets ([[def-partial-order]]).

A function $f : P \to Q$ is an **order embedding** when for all $x, y \in P$

$$x \le_P y \iff f(x) \le_Q f(y).$$

An order embedding is automatically injective: $f(x) = f(y)$ gives
$f(x) \le_Q f(y)$ and $f(y) \le_Q f(x)$, hence $x \le_P y$ and $y \le_P x$,
hence $x = y$ by antisymmetry ([[def-partial-order]]).

An **order isomorphism** is a surjective order embedding, equivalently a
bijection $f : P \to Q$ with $x \le_P y \iff f(x) \le_Q f(y)$ for all
$x, y \in P$. The posets $P$ and $Q$ are **order isomorphic**, written
$P \cong Q$, when an order isomorphism $P \to Q$ exists.

## Remarks

- **The condition is an equivalence, not an implication.** A bijection
  satisfying only $x \le_P y \Rightarrow f(x) \le_Q f(y)$ need not be an order
  isomorphism: let $P = \{a, b\}$ carry the discrete order, in which $a$ and $b$
  are incomparable, and let $Q = \{0, 1\}$ carry $0 < 1$. The bijection
  $a \mapsto 0$, $b \mapsto 1$ preserves every relation of $P$, because $P$ has
  none beyond reflexivity, yet its inverse does not preserve $0 < 1$.
- For **total** orders the implication form does suffice. If $P$ and $Q$ are
  totally ordered and $f : P \to Q$ is a bijection with
  $x <_P y \Rightarrow f(x) <_Q f(y)$, then $f$ is an order isomorphism:
  given $f(x) <_Q f(y)$, the alternative $y \le_P x$ would give
  $f(y) \le_Q f(x)$, which is impossible. Since a well-order is total
  ([[def-well-order]]), a strictly increasing bijection between well-orders is
  automatically an order isomorphism.
- **Strict form.** An order isomorphism satisfies
  $x <_P y \iff f(x) <_Q f(y)$, because it is injective and preserves both
  $\le$ and $=$ in both directions.
- The identity is an order isomorphism, the inverse of an order isomorphism is
  one, and a composite of two is one. Hence $\cong$ is reflexive, symmetric and
  transitive **on any set of posets**. It is not a relation on "all posets",
  since there is no set of all posets.
- **Order isomorphisms transport well-ordering.** If $f : P \to Q$ is an order
  isomorphism and $(P, \le_P)$ is a well-order ([[def-well-order]]), so is
  $(Q, \le_Q)$: totality transfers because $f$ is a surjective embedding, and a
  nonempty $S \subseteq Q$ has $f^{-1}[S]$ nonempty, whose least element $\ell$
  is carried by $f$ to a least element of $S$. This transfer is used repeatedly
  below and is the reason order isomorphism, rather than mere bijection, is the
  right notion of sameness here.
- **Order isomorphisms respect initial segments.** If $f : P \to Q$ is an order
  isomorphism and $x \in P$, then $f$ carries $\{y \in P : y <_P x\}$ onto
  $\{z \in Q : z <_Q f(x)\}$: the strict form gives the inclusion one way, and
  surjectivity gives it the other, since $z <_Q f(x)$ has the form $z = f(y)$
  with $y <_P x$. Consequently the restriction of $f$ to that set is again an
  order isomorphism.
- Functions, bijections, ordered pairs and Cartesian products are ambient ZFC
  vocabulary in this library, exactly as "subset" and "union" are. This item
  fixes only the order-theoretic terminology built on top of them.
