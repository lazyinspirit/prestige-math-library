---
id: def-ring-homomorphism
kind: definition
title: "Ring homomorphism: additive, multiplicative, and required to send $1$ to $1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ring, def-group-homomorphism, def-semigroup-and-monoid, def-identity-element]
justified_by: []
aliases: []
landmark: true
short: "ring homomorphism"
verification:
  precheck: n/a
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Ring homomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ring_homomorphism"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §16.5: Ring Homomorphisms and Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/16%3A_Rings/16.05%3A_Ring_Homomorphisms_and_Ideals"
pipeline_run: null
---

## Definition

Let $R$ and $S$ be rings ([[def-ring]]). A **ring homomorphism** from $R$ to $S$
is a function $f : R \to S$ such that, for all $x, y \in R$,

- **(RH1)** $f(x + y) = f(x) + f(y)$;
- **(RH2)** $f(xy) = f(x)f(y)$;
- **(RH3)** $f(1_R) = 1_S$.

A ring homomorphism from a ring to itself is a **ring endomorphism**; a
bijective ring homomorphism is a **ring isomorphism**.

**(RH3) is imposed, not derived, and the reason is exactly the reason
[[def-group-homomorphism]] treats monoids and groups differently.** Condition
(RH1) says that $f$ is a homomorphism of the additive groups
$(R,+,0_R) \to (S,+,0_S)$, and for groups preservation of the identity is *free*:
it follows from (RH1) by cancellation
([[lem-group-homomorphism-basic-properties]]). Condition (RH2) says only that
$f$ is a homomorphism of the multiplicative *semigroups*, and $(R,\cdot,1_R)$ is
a monoid that need not be a group ([[def-semigroup-and-monoid]]); for monoids preservation
of the identity does **not** follow and must be assumed, which is precisely why
[[def-group-homomorphism]] puts the clause $f(e) = e'$ into the definition of a
monoid homomorphism and leaves it out of the definition of a group homomorphism
([[def-identity-element]]).

So a ring homomorphism is: a homomorphism of additive groups that is also a
homomorphism of multiplicative monoids. The clause is not redundant: the
companion page exhibits a map $\mathbb{Z} \to \mathbb{Z} \times \mathbb{Z}$
satisfying (RH1) and (RH2) and failing (RH3).

## Remarks

- **What follows automatically, and what does not.** $f(0_R) = 0_S$,
  $f(-x) = -f(x)$ and $f(mx) = m f(x)$ for every integer $m$ all follow from
  (RH1) alone, and units are carried to units once (RH3) is available; these are
  [[lem-ring-homomorphism-basic-properties]]. What does not follow from (RH1)
  and (RH2) is (RH3) itself.

- **Between fields there is no difference from the published notion.** A ring
  homomorphism between fields is exactly a field homomorphism in the sense of
  [[def-field-homomorphism]], and every such map is injective; that is
  [[lem-ring-homomorphism-of-fields-is-a-field-homomorphism]].

- Kernels, quotient rings and the isomorphism theorems are not defined on this
  page and nothing here uses them.
