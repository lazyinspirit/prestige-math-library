---
id: lem-field-is-a-commutative-ring
kind: lemma
title: "Every field is a commutative ring with $1 \\ne 0$; it is an integral domain, and it is a commutative division ring"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
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
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §16.4: Integral Domains and Fields"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/16%3A_Rings/16.04%3A_Integral_Domains_and_Fields"
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

[A1] Axiom (M) of [[def-field]]: multiplication is associative and commutative on **all** of $F$, and $x \cdot 1 = x$ for **every** $x \in F$, the element $0$ included; moreover $(F \setminus \{0\}, \cdot)$ is an abelian group with identity $1$, so every $x \ne 0$ has a multiplicative inverse $x^{-1}$ with $x \cdot x^{-1} = 1$.

[A2] Axiom (A): $(F,+)$ is an abelian group with identity $0$; addition is associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an additive inverse $-x$ with $x + (-x) = 0$ ([[def-field]], [[def-group]]).

[A3] Axiom (D), left distributivity: $x(y+z) = xy + xz$ for all $x, y, z \in F$ ([[def-field]]).

[A4] $0 \ne 1$ ([[def-field]]).

[L1] A ring is an abelian group under addition, a monoid under multiplication, and satisfies both distributive laws; it is commutative when its multiplication is ([[def-ring]], [[def-commutative-ring]], [[def-semigroup-and-monoid]]).

[L2] In a field, $ab = 0$ implies $a = 0$ or $b = 0$ ([[lem-of-no-zero-divisors]]).

[L3] In a field the identities $0$, $1$ and the inverses $-x$, $x^{-1}$ are unique, so the notation is single-valued ([[lem-of-inverse-unique]], [[def-invertible-element]]).

## Proof

**Proof technique:** direct.

1.1 $(F,+,0)$ is an abelian group: this is axiom (A), and $0 + x = x + 0 = x$ follows from $x + 0 = x$ and commutativity of addition. [A2]

1.2 $(F,\cdot,1)$ is a commutative monoid: multiplication is a binary operation on $F$, it is associative and commutative on all of $F$ by axiom (M), and $x \cdot 1 = x$ for every $x \in F$ by the same axiom, whence $1 \cdot x = x \cdot 1 = x$ by commutativity. [A1, L1]

1.3 Right distributivity: for all $x, y, z \in F$, $(y+z)x = x(y+z) = xy + xz = yx + zx$, the first and third equalities being commutativity of multiplication at the pairs $(y+z, x)$, $(x,y)$ and $(x,z)$ from axiom (M) as stated in [A1], and the middle one axiom (D). [A1, A3]

1.4 $F$ has no zero divisors: if $ab = 0$ then $a = 0$ or $b = 0$ by [L2], which is exactly the condition of [[def-zero-divisor-and-integral-domain]]. [L2]

2.1 By steps 1.1, 1.2 and 1.3 together with axiom (D), $F$ satisfies (R1), (R2) and (R3) of [[def-ring]], so $F$ is a ring; its multiplication is commutative by step 1.2, so it is a commutative ring; and $1 \ne 0$ by [A4]. This is claim 1. [step 1.1, step 1.2, step 1.3, A3, A4, L1]

3.1 Claim 2: by step 2.1 the ring $F$ is commutative with $1 \ne 0$, and by step 1.4 it has no zero divisors, so it is an integral domain. [step 2.1, step 1.4, L2]

3.2 Claim 3: $1 \ne 0$ by [A4]; and if $x \in F$ with $x \ne 0$, axiom (M) supplies $x^{-1} \in F$ with $x \cdot x^{-1} = 1$, and $x^{-1} \cdot x = 1$ as well, by the commutativity of multiplication that (M) asserts. So $x$ is a unit of the ring $F$, and $F$ is a division ring; it is commutative by step 2.1. [step 2.1, A1, A4, L3]

4.1 Claims 1, 2 and 3 are established in steps 2.1, 3.1 and 3.2. [step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Where (M)'s unrestricted quantifier is load bearing.** Two of the ring axioms are about all of $F$: that $(F,\cdot,1)$ is a monoid needs associativity and $x \cdot 1 = x$ at $x = 0$ as well, and right distributivity is obtained from the left form only by commuting a product one of whose factors may be $0$. Axiom (M) of [[def-field]] asserts associativity, commutativity and $x \cdot 1 = x$ on all of $F$ outright, which is what steps 1.2 and 1.3 spend; its Remarks record the two-element counterexample showing that the quantifier cannot be restricted to $F \setminus \{0\}$.

- **Where else the same clause is in play.** The published [[lem-of-zero-mult]] cites [[def-field]] for the right distributive law $(y+z)x = yx + zx$, which is licensed by (M)'s unrestricted commutativity together with axiom (D), exactly as step 1.3 above, and by nothing else in the axioms.

- **The converse direction is a separate item.** [[lem-commutative-division-ring-is-a-field]] shows every commutative division ring satisfies the axioms of [[def-field]], so the two vocabularies name the same structures and this page never needs a second notion of field. Note that a commutative division ring satisfies the unrestricted clause of (M) outright, since its multiplication is commutative on all of $D$ and $1$ is a monoid identity by definition.

- **Nothing is reproved.** The absence of zero divisors is quoted from [[lem-of-no-zero-divisors]] rather than rederived; the general ring statement [[lem-ring-elementary-consequences]] is not available as a substitute, because a ring may perfectly well have zero divisors.
