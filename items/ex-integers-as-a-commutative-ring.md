---
id: ex-integers-as-a-commutative-ring
kind: example
title: "$\\mathbb{Z}$ is a commutative ring and an ordered ring, the published construction being an instance of the general definitions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ring, def-commutative-ring, def-ordered-ring, lem-ordered-ring-cone-and-order-agree, thm-int-comm-ring, thm-int-ordered-ring, def-integers, def-int-operations, def-int-order]
justified_by: []
aliases: []
landmark: false
short: "ℤ is a commutative ordered ring"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Integer (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
    - title: "Ordered ring (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_ring"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §16.3: Rings"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/16%3A_Rings/16.03%3A_Rings"
pipeline_run: null
---

## Example

Let $\mathbb{Z}$ be the integers ([[def-integers]]) with the operations of
[[def-int-operations]] and the order of [[def-int-order]]. Then:

1. $(\mathbb{Z}, +, \cdot, 0, 1)$ is a ring in the sense of [[def-ring]], and it
   is commutative ([[def-commutative-ring]]);
2. $\mathbb{Z}$ with the order $\le$ is an ordered ring in the sense of
   [[def-ordered-ring]];
3. its positive cone $P = \{\, x \in \mathbb{Z} : 0 < x \,\}$ satisfies
   trichotomy and closure in the sense of
   [[lem-ordered-ring-cone-and-order-agree]], and the order it induces is the
   published order of [[def-int-order]].

The point of the example is that nothing is being built: the published
[[thm-int-comm-ring]] and [[thm-int-ordered-ring]] were proved before rings were
defined and used the words "commutative ring" and "totally ordered ring"
informally. This item records that those words, as used there, mean exactly what
[[def-ring]] and [[def-ordered-ring]] mean, so that a statement about rings may
be applied to $\mathbb{Z}$ without translation.

## Facts & Assumptions

**Given:** The set $\mathbb{Z}$ with $+$, $\cdot$, $0 = [(0,0)]$, $1 = [(1,0)]$ and the order $\le$ ([[def-integers]], [[def-int-operations]], [[def-int-order]]).

[L1] $(\mathbb{Z}, +, \cdot, 0, 1)$ is a commutative ring with multiplicative identity, in which every element has an additive inverse, namely $-[(a,b)] = [(b,a)]$ ([[thm-int-comm-ring]]).

[L2] The relation of [[def-int-order]] is a total order on $\mathbb{Z}$; it is compatible with addition ($x \le y$ implies $x + z \le y + z$), and $0 < x$ and $0 < y$ imply $0 < xy$ ([[thm-int-ordered-ring]]).

[L3] A ring is an abelian group under addition, a monoid under multiplication, and satisfies both distributive laws; it is commutative when its multiplication is ([[def-ring]], [[def-commutative-ring]]).

[L4] An ordered ring is a ring with a total order satisfying (OR1) and (OR2) as in [L2] ([[def-ordered-ring]]).

[L5] For an ordered ring, the set $\{\, x : 0 < x \,\}$ satisfies trichotomy and closure, and the order it induces is the original one ([[lem-ordered-ring-cone-and-order-agree]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], addition on $\mathbb{Z}$ is associative and commutative, $0$ is a two-sided additive identity, and every element has an additive inverse; so $(\mathbb{Z},+,0)$ is an abelian group. [L1, L3]

1.2 By [L1], multiplication is associative and commutative and $1$ is a multiplicative identity, so $(\mathbb{Z},\cdot,1)$ is a commutative monoid; and multiplication distributes over addition. Since multiplication is commutative, the right distributive law follows from the left one: $(y+z)x = x(y+z) = xy + xz = yx + zx$. [L1, L3]

2.1 By steps 1.1 and 1.2 the structure $(\mathbb{Z},+,\cdot,0,1)$ satisfies (R1), (R2) and (R3) of [[def-ring]] and its multiplication is commutative, so it is a commutative ring. This is claim 1. [step 1.1, step 1.2, L3]

3.1 By [L2] the relation $\le$ is a total order on $\mathbb{Z}$ satisfying (OR1) and (OR2) verbatim; with step 2.1 this makes $\mathbb{Z}$ an ordered ring, which is claim 2. [step 2.1, L2, L4]

4.1 Claim 3 is [L5] applied to the ordered ring of step 3.1. [step 3.1, L5] ∎

## Remarks

- **The multiplicative axiom matches on the nose.** [[thm-int-ordered-ring]]
  proves the *strict* statement "$0 < x$ and $0 < y$ imply $0 < xy$", which is
  exactly axiom (OR2) of [[def-ordered-ring]] as that definition states it. That
  is why the step establishing claim 2 above is a citation and not an argument, and it is the reason
  [[def-ordered-ring]] adopts the strict form.

- **$\mathbb{Z}$ is not a field**, and it is an integral domain; both are
  recorded separately in [[ex-integers-are-an-integral-domain-not-a-field]], for
  which this item supplies the ring structure.

- **A later page that needs "$\mathbb{Z}$ is a ring" on its own spine must
  re-derive it there rather than cite this item**, since examples pages are
  leaves in the reading order. The derivation is the three lines above.
