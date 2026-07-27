---
id: def-semigroup-and-monoid
kind: definition
title: "Semigroup and monoid"
status: published
origin: session
deps: [def-binary-operation, def-identity-element, lem-identity-unique]
justified_by: []
aliases: [def-monoid, def-semigroup]
landmark: false
short: "semigroup, monoid"
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
    - title: "Monoid (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monoid"
    - title: "Semigroup (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semigroup"
pipeline_run: null
---

## Definition

A **semigroup** is a pair $(S,*)$ consisting of a set $S$ and an associative
binary operation $*$ on $S$ ([[def-binary-operation]]).

A **monoid** is a triple $(M,*,e)$ in which $(M,*)$ is a semigroup and $e \in M$
is a two-sided identity for $*$ ([[def-identity-element]]), that is,

$$e * x \;=\; x \;=\; x * e \qquad \text{for every } x \in M .$$

By [[lem-identity-unique]] a binary operation has at most one two-sided identity,
so $e$ is determined by $(M,*)$ and may be called **the identity of $M$**; it is
written $e$, or $e_M$ when several monoids are in play, and $1$ or $0$ in
multiplicative or additive notation. For that reason a monoid is often written
simply as $(M,*)$, or as $M$.

A semigroup or monoid is **commutative** (for monoids also called **abelian**)
when its operation is commutative.

A subset $N \subseteq M$ is a **submonoid** when $e \in N$ and $N$ is closed under
$*$; the restricted operation then makes $(N,*,e)$ a monoid, associativity being
inherited ([[def-binary-operation]]).

## Remarks

- **The definite article is earned, not assumed.** Writing "the identity"
  presupposes uniqueness, and that is exactly what [[lem-identity-unique]]
  supplies, from the two defining equations alone. This is the first of the two
  uniqueness obligations on this page; the second is uniqueness of inverses
  ([[lem-inverse-unique]]), which is what will license writing "the inverse".

- **A monoid is data, not a property.** $(M,*,e)$ carries the identity as part of
  the structure. The uniqueness result says nothing is lost by suppressing it
  from the notation, and nothing is gained by keeping it.

- Every group is a monoid ([[def-group]]), and the invertible elements of a
  monoid form a group ([[lem-monoid-units-form-a-group]]), so the two notions are
  tied together in both directions.
