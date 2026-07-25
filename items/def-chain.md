---
id: def-chain
kind: definition
title: "Chain in a poset"
status: published
origin: session
deps: [def-partial-order]
justified_by: []
aliases: []
landmark: false
short: "chain"
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
    - title: "Total order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Total_order"
    - title: "Partially ordered set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partially_ordered_set"
pipeline_run: null
---

## Definition

Let $(P, \le)$ be a poset ([[def-partial-order]]). A subset $C \subseteq P$ is a
**chain** if any two of its elements are comparable: for all $x, y \in C$, either
$x \le y$ or $y \le x$.

Equivalently, $C$ is a chain if the restriction of $\le$ to $C$ is a total order
on $C$.

## Remarks

- **The empty set is a chain**, and so is every singleton, both vacuously. This
  is not a technicality to be waved past: the empty chain is exactly what forces
  a chain-complete poset to have a least element ([[def-chain-complete-poset]]),
  and that least element is the starting point of the Bourbaki–Witt construction
  ([[thm-bourbaki-witt]]). A convention that quietly excludes the empty chain has
  to reintroduce the same content as a separate hypothesis.
- A chain need not be finite, need not be countable, and need not have a largest
  element. In the power set of $\mathbb{N}$ ordered by inclusion, the sets
  $\{1, \dots, n\}$ for $n \ge 1$ form a chain with no largest element.
- "Chain" is a property of a *subset*, not of the ambient poset. The whole poset
  $P$ is a chain exactly when $\le$ is a total order.
