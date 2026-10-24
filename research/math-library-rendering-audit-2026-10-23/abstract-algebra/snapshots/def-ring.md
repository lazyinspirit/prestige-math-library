---
id: def-ring
kind: definition
title: "Ring: an abelian group under addition and a monoid under multiplication, with multiplication distributing over addition on both sides"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-group, def-semigroup-and-monoid, def-binary-operation, def-identity-element, lem-identity-unique, def-invertible-element, lem-inverse-unique]
justified_by: []
aliases: [def-unital-ring]
landmark: true
short: "ring"
verification:
  precheck: n/a
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Ring (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ring_(mathematics)"
    - title: "Rng (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rng_(algebra)"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §16.3: Rings"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/16%3A_Rings/16.03%3A_Rings"
pipeline_run: null
---

## Definition

A **ring** is a set $R$ carrying two binary operations ([[def-binary-operation]]),
addition $+$ and multiplication $\cdot$, and two distinguished elements $0$ and
$1$ of $R$, such that

- **(R1)** $(R, +, 0)$ is an abelian group ([[def-group]]): addition is
  associative and commutative, $0 + x = x = x + 0$ for every $x \in R$, and every
  $x \in R$ has an additive inverse;
- **(R2)** $(R, \cdot, 1)$ is a monoid ([[def-semigroup-and-monoid]]):
  multiplication is associative and $1 \cdot x = x = x \cdot 1$ for every
  $x \in R$;
- **(R3)** multiplication distributes over addition **on both sides**: for all
  $x, y, z \in R$,

$$x \cdot (y + z) \;=\; x \cdot y + x \cdot z, \qquad (y + z) \cdot x \;=\; y \cdot x + z \cdot x .$$

We write $xy$ for $x \cdot y$, call $0$ the **zero** and $1$ the **identity** (or
**unity**) of $R$, write $-x$ for the additive inverse of $x$, and abbreviate
$x - y := x + (-y)$.

**Why "the" zero, "the" identity and "the" additive inverse are legitimate.**
Each of $0$ and $1$ is a two-sided identity for its own operation, and a binary
operation has at most one two-sided identity ([[lem-identity-unique]],
[[def-identity-element]]), so each is determined by the operation and the
notation is single-valued. An additive inverse of $x$ is an inverse in the
monoid $(R,+,0)$ ([[def-invertible-element]]), and in a monoid an element has at
most one inverse ([[lem-inverse-unique]]); so $-x$ names one element, and a
single equation $y + x = 0$ already forces $y = -x$.

**Convention: a ring has an identity.** Axiom (R2) asks for a *monoid*, so the
existence of $1$ is part of the definition and is not an extra hypothesis to be
carried around. This is the convention used throughout this library. A structure
satisfying (R1), (R3) and the associativity half of (R2), but not required to
have a multiplicative identity, is called a **non-unital ring** (also *rng*); it
is not called a ring here, and where such a structure occurs it is named as a
non-unital ring in as many words. The distinction has content: the companion
page exhibits a subset of $\mathbb{Z}$ that is closed under addition, additive
inverses and multiplication and is not a subring, precisely because it misses
the identity.

Nothing above requires $1 \ne 0$. A ring in which $1 = 0$ has exactly one
element; the companion page records it as the **zero ring**. Definitions that
need $1 \ne 0$ — integral domain, division ring, field — say so explicitly.

## Remarks

- **Both distributive laws are stated, and neither is redundant here.**
  Multiplication is not assumed commutative, so $(y+z)x = yx + zx$ does not
  follow from $x(y+z) = xy + xz$. The published [[def-field]] states only the
  left form, in a setting where multiplication is commutative; a ring is not
  that setting. The quaternions ([[def-quaternions]]), constructed on this page,
  are a ring whose multiplication is not commutative, so for them the two laws
  are genuinely two statements and both are checked.

- **A ring packages two structures the library already has.** Read (R1) alone
  and a ring is an abelian group; read (R2) alone and it is a monoid. Every
  theorem proved about groups and about monoids therefore applies to a ring
  without restatement, and this page uses that repeatedly rather than reproving
  cancellation, uniqueness of inverses, or the behaviour of finite products.

- **Notation for repeated addition.** For $m \in \mathbb{Z}$ and $a \in R$ the
  expression $ma$ means the integer power of $a$ in the additive group
  $(R,+,0)$, written additively as in [[def-group-power]]. It is not a product
  formed with the ring multiplication: $m$ is an external integer scalar, even
  when the underlying set of $R$ happens to contain integers. The arithmetic of
  these multiples is [[lem-integer-multiples-in-a-ring]].
