---
id: ex-rationals-and-reals-as-fields
kind: example
title: "$\\mathbb{Q}$ and $\\mathbb{R}$ are fields, hence commutative rings, integral domains and ordered rings, all of characteristic $0$"
status: draft
origin: session
deps: [def-field, lem-field-is-a-commutative-ring, def-zero-divisor-and-integral-domain, def-ordered-ring, lem-ordered-ring-cone-and-order-agree, lem-ordered-field-is-an-ordered-ring, def-ordered-field, def-ring-characteristic, lem-integer-multiples-agree-with-canonical-natural, def-canonical-natural, lem-of-naturals-positive, thm-rat-field, thm-reals-field, thm-rat-ordered-field, thm-reals-ordered-field, def-ring, def-commutative-ring]
justified_by: []
aliases: []
landmark: false
short: "ℚ and ℝ as rings"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Field (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Field_(mathematics)"
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
pipeline_run: null
---

## Example

Let $F$ be either $\mathbb{Q}$ ([[thm-rat-field]]) or $\mathbb{R}$
([[thm-reals-field]]), with its published order ([[thm-rat-ordered-field]],
[[thm-reals-ordered-field]]). Then:

1. $F$ is a commutative ring with $1 \ne 0$ and an integral domain
   ([[lem-field-is-a-commutative-ring]],
   [[def-zero-divisor-and-integral-domain]]);
2. $F$ with its order is an ordered ring ([[def-ordered-ring]]), and the set
   $P = \{\, x \in F : 0 < x \,\}$ is a positive cone making $F$ an ordered field
   in the sense of [[def-ordered-field]], whose induced order is the published
   one;
3. $\operatorname{char}(F) = 0$ ([[def-ring-characteristic]]).

## Facts & Assumptions

**Given:** $F$ is $\mathbb{Q}$ or $\mathbb{R}$, with its published operations and order.

[L1] $\mathbb{Q}$ and $\mathbb{R}$ are fields ([[thm-rat-field]], [[thm-reals-field]], [[def-field]]).

[L2] The published order on each makes it a totally ordered field: the order is total, $x \le y$ implies $x + z \le y + z$, and $0 < x$ and $0 < y$ imply $0 < xy$ ([[thm-rat-ordered-field]], [[thm-reals-ordered-field]]).

[L3] Every field is a commutative ring with $1 \ne 0$, and is an integral domain ([[lem-field-is-a-commutative-ring]], [[def-ring]], [[def-commutative-ring]], [[def-zero-divisor-and-integral-domain]]).

[L4] An ordered ring is a ring with a total order satisfying the two compatibilities of [L2]; for such a ring, $P = \{\, x : 0 < x \,\}$ satisfies trichotomy and closure and induces the original order ([[def-ordered-ring]], [[lem-ordered-ring-cone-and-order-agree]]).

[L5] An ordered field is a field with a subset $P$ satisfying trichotomy (O1) and closure (O2), the order being $a < b :\iff b - a \in P$; and every ordered field is an ordered ring whose positive cone is $P$ ([[def-ordered-field]], [[lem-ordered-field-is-an-ordered-ring]]).

[L6] In a field, the additive multiple $n \cdot 1_F$ equals the canonical natural $\iota(n)$ of [[def-canonical-natural]] ([[lem-integer-multiples-agree-with-canonical-natural]]).

[L7] In an ordered field, $n \cdot 1_F > 0$ for every $n \ge 1$, the multiples being given by $1 \cdot 1_F = 1_F$ and $(n+1)\cdot 1_F = n \cdot 1_F + 1_F$ ([[lem-of-naturals-positive]]).

[L8] $\operatorname{char}(R)$ is the least $n \ge 1$ with $n \cdot 1_R = 0_R$, or $0$ if there is none ([[def-ring-characteristic]]).

## Verification

**Proof technique:** direct.

1.1 Claim 1: $F$ is a field by [L1], hence a commutative ring with $1 \ne 0$ and an integral domain by [L3]. [L1, L3]

2.1 By [L2] the published order on $F$ is a total order satisfying (OR1) and (OR2) of [[def-ordered-ring]] verbatim; with step 1.1 this makes $F$ an ordered ring. [L1, L2, L3]

3.1 By [L4] applied to that ordered ring, $P = \{\, x \in F : 0 < x \,\}$ satisfies trichotomy and closure, and the relation $a < b :\iff b - a \in P$ is the published order. Trichotomy and closure are exactly axioms (O1) and (O2) of [[def-ordered-field]], so $(F,P)$ is an ordered field whose order is the published one. This is claim 2. [step 2.1, L4, L5]

4.1 By step 3.1 the ordered-field structure of $F$ is available, so [L7] applies. Its multiples and the multiples of [L8] are the same elements: both agree with the canonical natural $\iota(n)$ of [[def-canonical-natural]] by [L6], since $\iota(1) = \iota(0) + 1_F = 1_F$ and both recursions add $1_F$ at each successor. Hence $n \cdot 1_F > 0$ for every natural $n \ge 1$, and $n \cdot 1_F \ne 0_F$ because $0_F$ is not positive by trichotomy. [step 3.1, L5, L6, L7]

5.1 Claim 3: by step 4.1 there is no natural $n \ge 1$ with $n \cdot 1_F = 0_F$, so $\operatorname{char}(F) = 0$ by [L8]. [step 4.1, L8]

6.1 Claims 1, 2 and 3 are established in steps 1.1, 3.1 and 5.1. [step 1.1, step 3.1, step 5.1] ∎

## Remarks

- **Two presentations of one order, reconciled here rather than assumed.** The
  published [[thm-rat-ordered-field]] and [[thm-reals-ordered-field]] state the
  order form; the published [[def-ordered-field]] states the positive-cone form.
  The step establishing claim 2 above passes between them using
  [[lem-ordered-ring-cone-and-order-agree]], and that is the only reason
  [[lem-of-naturals-positive]], which is stated for an ordered field, may be
  applied to $\mathbb{Q}$ and $\mathbb{R}$ here.

- **The multiples agree with the canonical naturals.** By [L6] the element
  $n \cdot 1_F$ appearing in [[def-ring-characteristic]] is the $\iota(n)$ of
  [[def-canonical-natural]], so claim 3 is also the statement that $\iota$ never
  takes the value $0_F$ on $n \ge 1$ in these two fields. More is true and is
  quoted rather than proved here: [[lem-of-naturals-positive]] shows $\iota$ is
  strictly increasing on $n \ge 1$, hence injective.

- **$\mathbb{Q}$ and $\mathbb{R}$ are domains for a reason stronger than
  necessary.** They have no zero divisors because every nonzero element is
  invertible, not because of any cancellation argument; the same reasoning gives
  nothing about $\mathbb{Z}$, whose domain property is recorded separately in
  [[ex-integers-are-an-integral-domain-not-a-field]].
