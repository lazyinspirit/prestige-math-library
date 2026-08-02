---
id: def-group
kind: definition
title: "Group and abelian group"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-semigroup-and-monoid, def-invertible-element, lem-inverse-unique, def-identity-element, def-binary-operation]
justified_by: []
aliases: [def-abelian-group]
landmark: true
short: "group, abelian group"
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
    - title: "Group (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Group_(mathematics)"
    - title: "Abelian group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abelian_group"
pipeline_run: null
---

## Definition

A **group** is a monoid $(G,*,e)$ ([[def-semigroup-and-monoid]]) in which every
element is invertible ([[def-invertible-element]]). Written out, a group is a set
$G$ with a binary operation $*$ ([[def-binary-operation]]) and an element
$e \in G$ such that

- **(G1)** $(x * y) * z = x * (y * z)$ for all $x, y, z \in G$;
- **(G2)** $e * x = x = x * e$ for every $x \in G$;
- **(G3)** for every $x \in G$ there is $y \in G$ with $y * x = e = x * y$.

By [[lem-identity-unique]] the element $e$ of (G2) is unique, and by
[[lem-inverse-unique]] the element $y$ of (G3) is unique for each $x$ and is
determined by either one of the two equations alone. So the notations $e$ for the
identity and $x^{-1}$ for the inverse of $x$ are legitimate, and asserting
$y * x = e$ alone already says $y = x^{-1}$.

A group is **abelian**, or **commutative**, when its operation is commutative:
$x * y = y * x$ for all $x, y \in G$.

**Notation.** The operation is usually written multiplicatively, $xy$ for
$x * y$, with identity $e$ (or $1$) and inverse $x^{-1}$. For an abelian group it
is often written additively, $x + y$, with identity $0$ and inverse $-x$; the two
notations describe the same notion and nothing below depends on the choice. We
write $G$ for the group when the operation is understood.

## Remarks

- **Why (G3) may be stated one-sidedly in practice.** The axiom as written asks
  for a two-sided inverse. Because [[lem-inverse-unique]] is proved before this
  definition, and is proved in the sharp form "a left inverse and a right inverse
  of the same element coincide", verifying either equation for a candidate $y$
  suffices once the element is known to be invertible. Nothing on this page ever
  uses a one-sided inverse without that lemma standing behind it.

- **A group is a monoid, not merely like one.** Every statement proved for
  monoids applies verbatim to groups. In the other direction the invertible
  elements of a monoid form a group ([[lem-monoid-units-form-a-group]]), so
  groups arise inside every monoid.

- **The axioms are not independent of the notation, but the content is.** Read
  additively, (G1)–(G3) are exactly the additive axioms in the definition of a
  field ([[def-field]]), whose axiom (A) says in as many words that $(F,+)$ is an
  abelian group and whose axiom (M) says the same of
  $(F \setminus \{0\}, \cdot)$; so every field already carries two groups.
