---
id: lem-field-is-a-commutative-ring
kind: lemma
title: "Every field is a commutative ring with $1 \\ne 0$; it is an integral domain, and it is a commutative division ring"
status: draft
origin: session
deps: [def-field, def-ring, def-commutative-ring, def-zero-divisor-and-integral-domain, def-division-ring, def-group, def-semigroup-and-monoid, def-invertible-element, lem-of-no-zero-divisors, lem-of-inverse-unique]
justified_by: []
aliases: []
landmark: true
short: "field ⇒ commutative ring"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Field (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Field_(mathematics)"
    - title: "Integral domain (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integral_domain"
pipeline_run: null
---

## Statement

Let $F$ be a field ([[def-field]]), with addition $+$, multiplication $\cdot$,
and distinguished elements $0 \ne 1$. Then

1. $(F, +, \cdot, 0, 1)$ is a ring ([[def-ring]]), and it is commutative
   ([[def-commutative-ring]]), with $1 \ne 0$;
2. $F$ is an integral domain ([[def-zero-divisor-and-integral-domain]]);
3. $F$ is a division ring ([[def-division-ring]]), and hence a commutative
   division ring.

The field structure is not changed by this: the ring operations are the field
operations, and the ring's zero and identity are the field's $0$ and $1$.

## Facts & Assumptions

**Given:** A field $F$ with operations $+$ and $\cdot$ and distinguished elements $0 \ne 1$, satisfying the axioms (A), (M) and (D) of [[def-field]].

[A1] **The reading of axiom (M) that this proof uses, stated as a reading of the published axiom and used in exactly two steps below, namely step 1.2 and step 1.3.** Axiom (M) of [[def-field]] is headed "$(F \setminus \{0\}, \cdot)$ is an abelian group with identity $1$" and is then glossed, in the same axiom and without a restriction of the variable, by the sentence "multiplication is associative and commutative, $x \cdot 1 = x$ for all $x$, and every $x \ne 0$ has a multiplicative inverse $x^{-1}$ with $x \cdot x^{-1} = 1$". This proof reads that gloss as written: multiplication on $F$ is associative and commutative on **all** of $F$, and $x \cdot 1 = x$ holds for **every** $x \in F$, the element $0$ included. Nothing published is amended by this item, and no other step below uses anything beyond the headed clause.

[A2] Axiom (A): $(F,+)$ is an abelian group with identity $0$; addition is associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an additive inverse $-x$ with $x + (-x) = 0$ ([[def-field]], [[def-group]]).

[A3] Axiom (D), left distributivity: $x(y+z) = xy + xz$ for all $x, y, z \in F$ ([[def-field]]).

[A4] $0 \ne 1$ ([[def-field]]).

[L1] A ring is an abelian group under addition, a monoid under multiplication, and satisfies both distributive laws; it is commutative when its multiplication is ([[def-ring]], [[def-commutative-ring]], [[def-semigroup-and-monoid]]).

[L2] In a field, $ab = 0$ implies $a = 0$ or $b = 0$ ([[lem-of-no-zero-divisors]]).

[L3] In a field the identities $0$, $1$ and the inverses $-x$, $x^{-1}$ are unique, so the notation is single-valued ([[lem-of-inverse-unique]], [[def-invertible-element]]).

## Proof

**Proof technique:** direct.

1.1 $(F,+,0)$ is an abelian group: this is axiom (A), and $0 + x = x + 0 = x$ follows from $x + 0 = x$ and commutativity of addition. [A2]

1.2 $(F,\cdot,1)$ is a commutative monoid: multiplication is a binary operation on $F$, it is associative and commutative on all of $F$ by the reading [A1], and $x \cdot 1 = x$ for every $x \in F$ by the same reading, whence $1 \cdot x = x \cdot 1 = x$ by commutativity. This is the first of the two steps that use [A1]; the other is the right-distributivity step that follows. [A1, L1]

1.3 Right distributivity: for all $x, y, z \in F$, $(y+z)x = x(y+z) = xy + xz = yx + zx$, the first and third equalities being commutativity of multiplication at the pairs $(y+z, x)$, $(x,y)$ and $(x,z)$ from the reading [A1], and the middle one axiom (D). This is the second and last use of [A1]. [A1, A3]

1.4 $F$ has no zero divisors: if $ab = 0$ then $a = 0$ or $b = 0$ by [L2], which is exactly the condition of [[def-zero-divisor-and-integral-domain]]. [L2]

2.1 By steps 1.1, 1.2 and 1.3 together with axiom (D), $F$ satisfies (R1), (R2) and (R3) of [[def-ring]], so $F$ is a ring; its multiplication is commutative by step 1.2, so it is a commutative ring; and $1 \ne 0$ by [A4]. This is claim 1. [step 1.1, step 1.2, step 1.3, A3, A4, L1]

3.1 Claim 2: by step 2.1 the ring $F$ is commutative with $1 \ne 0$, and by step 1.4 it has no zero divisors, so it is an integral domain. [step 2.1, step 1.4, L2]

3.2 Claim 3: $1 \ne 0$ by [A4]; and if $x \in F$ with $x \ne 0$, axiom (M) supplies $x^{-1} \in F$ with $x \cdot x^{-1} = 1$, and $x^{-1} \cdot x = 1$ as well, by commutativity of multiplication restricted to the nonzero elements, which is part of the headed clause of (M). So $x$ is a unit of the ring $F$, and $F$ is a division ring; it is commutative by step 2.1. [step 2.1, A4, L3]

4.1 Claims 1, 2 and 3 are established in steps 2.1, 3.1 and 3.2. [step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Why the reading has to be stated.** The headed clause of axiom (M) speaks
  about $F \setminus \{0\}$, and two of the ring axioms are about all of $F$:
  that $(F,\cdot,1)$ is a monoid needs associativity and $x \cdot 1 = x$ at
  $x = 0$ as well, and right distributivity is obtained from the left form only
  by commuting a product one of whose factors may be $0$. The gloss inside (M)
  states both without restricting the variable, and [A1] records that this is
  how the axiom is read here. This item amends no published item; it states, in
  the one place where the difference is load bearing, which reading its proof
  uses.

- **Where else the same reading is in play.** The published [[lem-of-zero-mult]]
  cites [[def-field]] for the right distributive law $(y+z)x = yx + zx$, which
  is licensed by the gloss of (M) exactly as step 1.3 above is licensed by it,
  and by nothing else in the axioms. Under the reading [A1] both are sound.

- **The converse direction is a separate item.**
  [[lem-commutative-division-ring-is-a-field]] shows every commutative division
  ring satisfies the axioms of [[def-field]], so the two vocabularies name the
  same structures and this page never needs a second notion of field. Note that
  a commutative division ring satisfies the gloss of (M) on all of $F$ outright,
  since its multiplication is commutative and $1$ is a monoid identity by
  definition; so the ambiguity discussed above does not arise on that side.

- **Nothing is reproved.** The absence of zero divisors is quoted from
  [[lem-of-no-zero-divisors]] rather than rederived; the general ring statement
  [[lem-ring-elementary-consequences]] is not available as a substitute, because
  a ring may perfectly well have zero divisors.
