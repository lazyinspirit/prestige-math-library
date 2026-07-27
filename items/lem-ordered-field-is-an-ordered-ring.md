---
id: lem-ordered-field-is-an-ordered-ring
kind: lemma
title: "Every ordered field is an ordered ring, and its order is the one its positive cone induces"
status: draft
origin: session
deps: [def-ordered-field, def-ordered-ring, lem-ordered-ring-cone-and-order-agree, lem-field-is-a-commutative-ring, def-field, lem-of-square-positive]
justified_by: []
aliases: []
landmark: false
short: "ordered field ⇒ ordered ring"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Ordered ring (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_ring"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field with positive cone $P$ ([[def-ordered-field]]), and
let $\le$ be the relation $a \le b :\iff (b - a \in P$ or $a = b)$ that
[[def-ordered-field]] defines from $P$. Then:

1. $F$ with the operations of [[def-field]] is a commutative ring
   ([[lem-field-is-a-commutative-ring]]), and $P$ is a cone in the sense of
   [[lem-ordered-ring-cone-and-order-agree]];
2. $\le$ is a total order making $F$ an ordered ring ([[def-ordered-ring]]),
   whose positive cone $\{\, x \in F : 0 < x \,\}$ is exactly $P$;
3. $1 \in P$, that is $0 < 1$.

So an ordered field is an ordered ring, and its order and its positive cone
determine each other exactly as they do in any ordered ring.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and $\le$ defined from $P$ by $a \le b :\iff (b - a \in P$ or $a = b)$ ([[def-ordered-field]]).

[A1] Axiom (O1): for each $x \in F$ exactly one of $x \in P$, $x = 0$, $-x \in P$ holds ([[def-ordered-field]]).

[A2] Axiom (O2): if $x, y \in P$ then $x + y \in P$ and $xy \in P$ ([[def-ordered-field]]).

[A3] The order of an ordered field is defined by $a < b :\iff b - a \in P$, and $a \le b$ means $a < b$ or $a = b$ ([[def-ordered-field]]).

[L1] Every field is a commutative ring with $1 \ne 0$ ([[lem-field-is-a-commutative-ring]], [[def-field]]).

[L2] In a ring, a subset satisfying trichotomy and closure under addition and multiplication is a cone, and the relation it induces is a total order making the ring an ordered ring whose positive cone is that subset ([[lem-ordered-ring-cone-and-order-agree]], [[def-ordered-ring]]).

[L3] In an ordered field, $a \ne 0$ implies $a^{2} > 0$, that is $a \cdot a \in P$ ([[lem-of-square-positive]]).

## Proof

**Proof technique:** direct.

1.1 $F$ is a commutative ring under its own addition and multiplication, with the same $0$ and $1$. [L1]

2.1 $P$ is a cone in the ring $F$: trichotomy is axiom (O1) verbatim, and closure under addition and under multiplication is axiom (O2) verbatim. This proves claim 1. [step 1.1, A1, A2, L2]

3.1 By [L2] applied to the ring $F$ and the cone $P$, the relation $a \le_P b :\iff (b - a \in P$ or $a = b)$ is a total order making $F$ an ordered ring, and its positive cone is $P$. [step 2.1, L2]

4.1 That relation is the order of the ordered field: [A3] defines $a < b$ as $b - a \in P$ and $a \le b$ as $a < b$ or $a = b$, which is the definition of $\le_P$ word for word. So $\le$ and $\le_P$ are the same relation, and claim 2 follows. [step 3.1, A3]

5.1 Claim 3: $1 \ne 0$ by [L1], so $1 \cdot 1 \in P$ by [L3]; and $1 \cdot 1 = 1$ because $1$ is the multiplicative identity. Hence $1 \in P$, that is $0 < 1$. [step 4.1, L1, L3] ∎

## Remarks

- **This is one of the four bridges the page carries.** The published
  [[def-ordered-field]] and the [[def-ordered-ring]] of this page are two
  presentations of compatible orders, and without this item a later result about
  ordered rings could not be applied to $\mathbb{Q}$ or $\mathbb{R}$ without
  redoing the translation each time.

- **The converse is false as stated, and no converse is claimed.** $\mathbb{Z}$
  is an ordered ring and is not a field at all, as the companion page records.
  What is true, and is claim 2, is that on a field the two presentations of an
  order agree.

- **Where the strict form of (OR2) is used.** Axiom (O2) of
  [[def-ordered-field]] is already strict, so claim 1 is a verbatim match with
  the cone conditions of [[lem-ordered-ring-cone-and-order-agree]] and no
  strengthening is needed; that is exactly why [[def-ordered-ring]] states its
  multiplicative axiom in the strict form.
