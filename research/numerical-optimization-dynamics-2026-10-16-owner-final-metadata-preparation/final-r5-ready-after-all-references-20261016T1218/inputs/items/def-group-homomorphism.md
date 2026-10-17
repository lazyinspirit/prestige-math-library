---
id: def-group-homomorphism
kind: definition
title: "Monoid homomorphism and group homomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-semigroup-and-monoid, def-group, def-identity-element, def-binary-operation]
justified_by: []
aliases: [def-monoid-homomorphism, def-homomorphism]
landmark: false
short: "monoid / group homomorphism"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Group homomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Group_homomorphism"
    - title: "Monoid homomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monoid#Monoid_homomorphisms"
pipeline_run: null
---

## Definition

Let $(M,\cdot,e)$ and $(M',\cdot',e')$ be monoids ([[def-semigroup-and-monoid]]).
A **monoid homomorphism** from $M$ to $M'$ is a function $f : M \to M'$ such that

- **(H1)** $f(x \cdot y) = f(x) \cdot' f(y)$ for all $x, y \in M$;
- **(H2)** $f(e) = e'$.

Let $G$ and $G'$ be groups ([[def-group]]). A **group homomorphism** from $G$ to
$G'$ is a function $f : G \to G'$ satisfying (H1) alone:

$$f(xy) \;=\; f(x)\, f(y) \qquad \text{for all } x, y \in G .$$

Condition (H2) is not imposed for groups because it follows: a group
homomorphism automatically satisfies $f(e) = e'$ and $f(x^{-1}) = f(x)^{-1}$
([[lem-group-homomorphism-basic-properties]]). For monoids it does **not**
follow and must be assumed, which is why the two definitions differ.

A homomorphism from a structure to itself is an **endomorphism**. The identity
map of $M$ is a monoid homomorphism, and a composite of monoid homomorphisms is
one, since $(g \circ f)(xy) = g(f(x)f(y)) = g(f(x))\,g(f(y))$ and
$(g \circ f)(e) = g(e') = e''$; the same computation, without the second clause,
shows a composite of group homomorphisms is a group homomorphism.

## Remarks

- **(H1) is a statement about two different operations.** On the left the product
  is formed in $M$, on the right in $M'$; the notation suppresses that and the
  reader must supply it. The definition says exactly that $f$ turns products into
  products, and nothing else.

- **The asymmetry between the two definitions is real, not stylistic.** The map
  $\mathbb{Z} \to \mathbb{Z}$ sending every integer to $0$ satisfies (H1) for the
  multiplicative monoid of $\mathbb{Z}$, since $0 = 0 \cdot 0$, and it sends the
  identity $1$ to $0 \ne 1$, so it is not a monoid homomorphism. In a group the
  same phenomenon is impossible, and cancellation is the reason
  ([[lem-group-homomorphism-basic-properties]]).

- Only the definition is given here. Kernels, images, isomorphisms and the
  isomorphism theorems belong to a later page; nothing on this page or its
  companion uses them.
