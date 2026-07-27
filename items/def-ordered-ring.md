---
id: def-ordered-ring
kind: definition
title: "Ordered ring: a ring with a total order compatible with addition and with positives closed under multiplication"
status: published
origin: session
deps: [def-ring, def-commutative-ring, def-partial-order, def-ordered-field, thm-int-ordered-ring, def-int-order]
justified_by: []
aliases: [def-totally-ordered-ring]
landmark: false
short: "ordered ring"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Ordered ring (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_ring"
    - title: "Total order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Total_order"
pipeline_run: null
---

## Definition

An **ordered ring** is a ring $R$ ([[def-ring]]) together with a total order
$\le$ on $R$ ([[def-partial-order]]) such that, for all $a, b, c \in R$:

- **(OR1)** if $a \le b$ then $a + c \le b + c$;
- **(OR2)** if $0 < a$ and $0 < b$ then $0 < ab$.

As always $a < b$ means $a \le b$ and $a \ne b$. The **positive cone** of an
ordered ring is

$$P \;:=\; \{\, x \in R \;:\; 0 < x \,\},$$

and its members are the **positive** elements. An element $x$ with $x < 0$ is
**negative**. An ordered ring whose multiplication is commutative
([[def-commutative-ring]]) is an **ordered commutative ring**; nothing in the
definition requires commutativity.

**Convention, and the one place it differs from another in use.** (OR2) is
stated in the *strict* form: a product of two positive elements is positive.
Some texts, and the Wikipedia article named below, instead require
$0 \le a$ and $0 \le b$ to imply $0 \le ab$. Given (OR1) and a total order the
two are not equivalent: the strict form is the non-strict one together with the
extra requirement that a product of two positive elements is nonzero. The strict
form is the one adopted here, for a reason internal to this library: it is
verbatim what the published [[thm-int-ordered-ring]] proves of $\mathbb{Z}$
("$0 < x$ and $0 < y$ imply $0 < xy$") and verbatim what axiom (O2) of the
published [[def-ordered-field]] requires of a positive cone, so with this
convention both of those become instances of the present definition with nothing
to adjust.

## Remarks

- **Two presentations, one notion.** An ordered ring may be presented by its
  order, as above, or by its positive cone, as [[def-ordered-field]] presents an
  ordered field. [[lem-ordered-ring-cone-and-order-agree]] proves that the two
  presentations determine each other, so no second notion is introduced by the
  difference in style, and [[lem-ordered-field-is-an-ordered-ring]] is the
  bridge for fields.

- **Both published order structures on this library's number systems are
  instances.** $\mathbb{Z}$ with the order of [[def-int-order]] is one, by
  [[thm-int-ordered-ring]]; every ordered field is another, by
  [[lem-ordered-field-is-an-ordered-ring]]. The companion page records
  $\mathbb{Z}$, $\mathbb{Q}$ and $\mathbb{R}$ explicitly.

- **The order is data.** Writing "$R$ is an ordered ring" always means that a
  particular $\le$ has been fixed alongside the ring operations, exactly as "$F$
  is an ordered field" fixes a particular positive cone in
  [[def-ordered-field]]. Nothing below depends on there being only one such
  order, and no uniqueness is claimed.
