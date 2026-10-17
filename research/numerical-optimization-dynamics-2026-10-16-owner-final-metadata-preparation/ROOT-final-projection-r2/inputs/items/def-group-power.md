---
id: def-group-power
kind: definition
title: "Powers $g^{n}$: natural exponents in a monoid and integer exponents in a group, with $g^{0} = e$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-semigroup-and-monoid, def-group, def-invertible-element, lem-inverse-unique, thm-recursion, def-natural-numbers, def-integers, def-int-operations, def-int-order, thm-int-ordered-ring, lem-nat-embeds-int]
justified_by: []
aliases: [def-integer-power-in-a-group]
landmark: false
short: "$g^{n}$, $n \\in \\mathbb{N}$ or $\\mathbb{Z}$"
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "Group (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Group_(mathematics)"
pipeline_run: null
---

## Definition

**Natural exponents, in a monoid.** Let $(M,\cdot,e)$ be a monoid
([[def-semigroup-and-monoid]]) and $g \in M$. By the recursion theorem
([[thm-recursion]]), applied with the set $M$, the element $e$ and the function
$x \mapsto x \cdot g$ from $M$ to $M$, there is exactly one function
$\mathbb{N} \to M$, written $n \mapsto g^{n}$, with

$$g^{0} = e, \qquad g^{\sigma(n)} = g^{n} \cdot g \quad (n \in \mathbb{N}).$$

In particular $g^{0} = e$ for **every** $g$, including $g = e$, and
$g^{1} = g^{\sigma(0)} = e \cdot g = g$. Since $\mathbb{N}$ contains $0$
([[def-natural-numbers]]), the exponent $0$ is a genuine value of the definition
and not a separate convention.

**Integer exponents, in a group.** Let $G$ be a group ([[def-group]]) and
$g \in G$. Write $\iota : \mathbb{N} \to \mathbb{Z}$ for the embedding
$\iota(k) = [(k,0)]$ of [[lem-nat-embeds-int]], which is injective, preserves
addition, multiplication and order, and has as image exactly the nonnegative
integers. For $x \in \mathbb{Z}$ define

- $g^{x} := g^{k}$, the natural power, when $0 \le x$ and $x = \iota(k)$;
- $g^{x} := (g^{k})^{-1}$ when $x < 0$ and $-x = \iota(k)$.

**Why this is well defined.** The order on $\mathbb{Z}$ is total and
antisymmetric ([[thm-int-ordered-ring]], [[def-int-order]]), so exactly one of
$0 \le x$ and $x < 0$ holds and the two clauses never both apply. In the first
clause $x$ is nonnegative, so $x = \iota(k)$ for some $k \in \mathbb{N}$, and $k$
is unique because $\iota$ is injective. In the second clause $x < 0$ gives
$0 = x + (-x) < 0 + (-x) = -x$ by compatibility of the order with addition
([[thm-int-ordered-ring]], [[def-int-operations]]), so $-x$ is a positive integer
and again $-x = \iota(k)$ for a unique $k$. The inverse $(g^{k})^{-1}$ is a single
determined element by [[lem-inverse-unique]] and [[def-invertible-element]].
Finally the two readings of $g^{\iota(k)}$, as a natural power and as an integer
power, agree by construction, so no ambiguity is introduced.

**Abbreviation.** In an exponent we write $k$ for the integer $\iota(k)$ when a
natural number $k$ is used where an integer is expected; this is unambiguous
because $\iota$ is injective and preserves the arithmetic and the order, and
because the two readings of $g^{k}$ agree as just noted.

**Additive notation.** When the group is written additively the same object is
written $n g$ or $n \cdot g$ rather than $g^{n}$, with $0 g = 0$ and
$\sigma(n) g = n g + g$; the definitions are identical, only the symbols differ.

## Remarks

- **The case split is on the integer, not on a representative.** An integer is an
  equivalence class $[(a,b)]$ of pairs of naturals ([[def-integers]]), so a
  definition of $g^{x}$ by a formula in $a$ and $b$ would carry a
  well-definedness obligation. The definition above avoids that entirely: it
  splits on the *sign* of $x$, which is a property of the integer itself, and
  then uses the unique natural supplied by [[lem-nat-embeds-int]].

- **Negative exponents need a group, not merely a monoid.** The second clause
  uses an inverse, which a monoid need not have. Natural powers are available in
  any monoid, and every statement below says which of the two settings it is in.

- The exponent is an index, an element of $\mathbb{N}$ or of $\mathbb{Z}$, and
  never an element of the group. No canonical-natural machinery
  ([[def-canonical-natural]]) is involved: that item is about the image of
  $\mathbb{N}$ inside a field, a different map with the same traditional name.

- The laws $g^{m+n} = g^{m}g^{n}$, $(g^{m})^{n} = g^{mn}$ and, when $g$ and $h$
  commute, $(gh)^{n} = g^{n}h^{n}$ are proved in
  [[lem-group-power-laws]]. The last one is **false** without the commuting
  hypothesis.
