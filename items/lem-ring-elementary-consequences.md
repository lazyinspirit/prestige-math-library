---
id: lem-ring-elementary-consequences
kind: lemma
title: "In any ring $0 \\cdot a = a \\cdot 0 = 0$, $(-a)b = a(-b) = -(ab)$, $(-a)(-b) = ab$, $(-1)a = -a$ and $a(b - c) = ab - ac$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ring, def-group, lem-group-cancellation, lem-group-inverse-laws, def-identity-element]
justified_by: []
aliases: [lem-ring-sign-rules]
landmark: false
short: "ring sign rules"
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
    - title: "Ring (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ring_(mathematics)"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §16.3: Rings"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/16%3A_Rings/16.03%3A_Rings"
pipeline_run: null
---

## Statement

Let $R$ be a ring ([[def-ring]]) and let $a, b, c \in R$. Then

1. $0 \cdot a = 0$ and $a \cdot 0 = 0$;
2. $(-a)b = -(ab)$ and $a(-b) = -(ab)$;
3. $(-a)(-b) = ab$;
4. $(-1)a = -a$ and $a(-1) = -a$;
5. $a(b - c) = ab - ac$ and $(b - c)a = ba - ca$.

In particular, if $1 = 0$ in $R$ then $R = \{0\}$.

No commutativity is assumed, which is why each claim is stated on both sides.

## Facts & Assumptions

**Given:** A ring $R$ with zero $0$, identity $1$, addition $+$ and multiplication $\cdot$, and elements $a, b, c \in R$; $x - y$ abbreviates $x + (-y)$ ([[def-ring]]).

[L1] $(R,+,0)$ is an abelian group: addition is associative and commutative, $0 + x = x = x + 0$, and each $x$ has an additive inverse $-x$ with $x + (-x) = 0 = (-x) + x$ ([[def-ring]], [[def-group]], [[def-identity-element]]).

[L2] Both distributive laws hold: $x(y+z) = xy + xz$ and $(y+z)x = yx + zx$ for all $x, y, z \in R$ ([[def-ring]]).

[L3] $1 \cdot x = x = x \cdot 1$ for every $x \in R$ ([[def-ring]]).

[L4] Cancellation in the additive group: $x + z = y + z$ implies $x = y$, and $z + x = z + y$ implies $x = y$ ([[lem-group-cancellation]], [[def-group]]).

[L5] In a group, $(g^{-1})^{-1} = g$; written additively, $-(-x) = x$ ([[lem-group-inverse-laws]], [[def-group]]).

## Proof

**Proof technique:** direct.

1.1 $0 \cdot a = (0 + 0) \cdot a = 0 \cdot a + 0 \cdot a$, using $0 + 0 = 0$ and the right distributive law. [L1, L2]

1.2 $a \cdot 0 = a \cdot (0 + 0) = a \cdot 0 + a \cdot 0$, using $0 + 0 = 0$ and the left distributive law. [L1, L2]

1.3 $(-a)b + ab = ((-a) + a)b = 0 \cdot b$, by the right distributive law and $(-a) + a = 0$. [L1, L2]

1.4 $a(-b) + ab = a((-b) + b) = a \cdot 0$, by the left distributive law and $(-b) + b = 0$. [L1, L2]

2.1 $0 \cdot a = 0$: step 1.1 gives $0 + 0 \cdot a = 0 \cdot a = 0 \cdot a + 0 \cdot a$, and cancelling $0 \cdot a$ on the right gives $0 = 0 \cdot a$. [step 1.1, L1, L4]

2.2 $a \cdot 0 = 0$: step 1.2 gives $0 + a \cdot 0 = a \cdot 0 = a \cdot 0 + a \cdot 0$, and cancelling $a \cdot 0$ on the right gives $0 = a \cdot 0$. This proves claim 1. [step 1.2, L1, L4]

3.1 $(-a)b = -(ab)$: by step 1.3 and step 2.1, $(-a)b + ab = 0 \cdot b = 0 = -(ab) + ab$, and cancelling $ab$ on the right gives $(-a)b = -(ab)$. [step 1.3, step 2.1, L1, L4]

3.2 $a(-b) = -(ab)$: by step 1.4 and step 2.2, $a(-b) + ab = a \cdot 0 = 0 = -(ab) + ab$, and cancelling $ab$ on the right gives $a(-b) = -(ab)$. This proves claim 2. [step 1.4, step 2.2, L1, L4]

4.1 $(-a)(-b) = -(a(-b)) = -(-(ab)) = ab$: the first equality is step 3.1 applied with $b$ replaced by $-b$, the second is step 3.2, and the third is $-(-x) = x$. This proves claim 3. [step 3.1, step 3.2, L5]

4.2 $(-1)a = -(1 \cdot a) = -a$ and $a(-1) = -(a \cdot 1) = -a$, by step 3.1 and step 3.2 applied with $a$ or $b$ equal to $1$, together with the identity law. This proves claim 4. [step 3.1, step 3.2, L3]

4.3 $a(b - c) = a(b + (-c)) = ab + a(-c) = ab + (-(ac)) = ab - ac$, and $(b - c)a = (b + (-c))a = ba + (-c)a = ba + (-(ca)) = ba - ca$, using the two distributive laws and step 3.1 and step 3.2. This proves claim 5. [step 3.1, step 3.2, L2]

5.1 If $1 = 0$ then for every $x \in R$ we have $x = 1 \cdot x = 0 \cdot x = 0$ by the identity law and step 2.1, so $R = \{0\}$. [step 2.1, L3] ∎

## Remarks

- **These are the general statements; the field versions already in the library
  are instances of them.** For a field $F$, claim 1 is [[lem-of-zero-mult]] and
  claims 2 and 3 are [[lem-of-mult-neg]], both proved earlier from the field
  axioms alone. Once [[lem-field-is-a-commutative-ring]] identifies a field as a
  commutative ring, those two lemmas are exactly the present ones read in $F$.
  The direction of generality matters for citation: a proof about an arbitrary
  ring must use this lemma, never the field lemmas, since a ring need not be a
  field.

- **Claim 1 is where the additive group is doing the work.** The identity
  $0 \cdot a = 0$ is not an axiom and does not follow from the multiplicative
  structure; it follows from distributivity together with the fact that addition
  cancels, which is available because $(R,+,0)$ is a group and not merely a
  monoid.

- **The last sentence of the statement is why the zero ring exists at all.** A
  ring with $1 = 0$ collapses to one element, so requiring $1 \ne 0$, as
  [[def-zero-divisor-and-integral-domain]] and [[def-division-ring]] do, is
  exactly the requirement that the ring is not that one-element ring.
