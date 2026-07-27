---
id: ex-the-zero-ring
kind: example
title: "The zero ring $\\{0\\}$, in which $1 = 0$: a commutative ring of characteristic $1$ that is not a domain, not a division ring and not a field"
status: draft
origin: session
deps: [def-ring, def-commutative-ring, def-zero-divisor-and-integral-domain, def-division-ring, def-ring-characteristic, lem-ring-elementary-consequences, def-field, def-group-power]
justified_by: []
aliases: [ex-trivial-ring]
landmark: false
short: "the zero ring"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Zero ring (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zero_ring"
pipeline_run: null
---

## Example

Let $Z = \{z\}$ be a one-element set, and define $z + z := z$, $z \cdot z := z$,
$0_Z := z$ and $1_Z := z$. Then:

1. $Z$ is a commutative ring ([[def-ring]], [[def-commutative-ring]]), the
   **zero ring**, and $1_Z = 0_Z$;
2. up to the choice of the single element, it is the only ring in which
   $1 = 0$: any ring $R$ with $1_R = 0_R$ has $R = \{0_R\}$
   ([[lem-ring-elementary-consequences]]);
3. $Z$ has no zero divisors, and is nevertheless **not** an integral domain
   ([[def-zero-divisor-and-integral-domain]]), because it fails $1 \ne 0$;
4. $Z$ is **not** a division ring ([[def-division-ring]]) and **not** a field
   ([[def-field]]), for the same reason;
5. $\operatorname{char}(Z) = 1$ ([[def-ring-characteristic]]).

## Facts & Assumptions

**Given:** The one-element set $Z = \{z\}$ with $z + z = z$, $z \cdot z = z$, $0_Z = z$ and $1_Z = z$.

[L1] A ring is an abelian group under addition, a monoid under multiplication, and satisfies both distributive laws; it is commutative when its multiplication is ([[def-ring]], [[def-commutative-ring]]).

[L2] In a ring with $1 = 0$, every element equals $0$; so such a ring has exactly one element ([[lem-ring-elementary-consequences]]).

[L3] An integral domain is a commutative ring with $1 \ne 0$ and no zero divisors; an element $a$ is a zero divisor only if $a \ne 0$ ([[def-zero-divisor-and-integral-domain]]).

[L4] A division ring is a ring with $1 \ne 0$ in which every nonzero element is a unit; a field has $0 \ne 1$ among its axioms ([[def-division-ring]], [[def-field]]).

[L5] $\operatorname{char}(R)$ is the least $n \in \mathbb{N}$ with $n \ge 1$ and $n \cdot 1_R = 0_R$, if there is one, and $0$ otherwise; the multiples satisfy $0 \cdot a = 0_R$ and $\sigma(n)\cdot a = n \cdot a + a$ ([[def-ring-characteristic]], [[def-group-power]]).

## Verification

**Proof technique:** direct.

1.1 Every equation between elements of $Z$ holds, since $Z$ has exactly one element and both sides of any equation are that element. In particular addition is associative and commutative with two-sided identity $0_Z$ and with $z$ its own additive inverse; multiplication is associative and commutative with two-sided identity $1_Z$; and both distributive laws hold. So $Z$ is a commutative ring, and $1_Z = z = 0_Z$. This is claim 1. [L1, given]

1.2 Claim 2 is [L2]: if $R$ is a ring with $1_R = 0_R$ then $x = 1_R x = 0_R x = 0_R$ for every $x \in R$, so $R = \{0_R\}$. [L2]

1.3 $Z$ has no zero divisors: a zero divisor must be an element $a \ne 0$, and $Z$ has no such element. [L3, given]

2.1 Claim 3: by step 1.1 the ring $Z$ is commutative, by step 1.3 it has no zero divisors, and by step 1.1 it has $1_Z = 0_Z$; the clause $1 \ne 0$ of [L3] therefore fails and $Z$ is not an integral domain. [step 1.1, step 1.3, L3]

2.2 Claim 4: the clause $1 \ne 0$ of [L4] fails in $Z$, so $Z$ is not a division ring; and the axioms of [[def-field]] require $0 \ne 1$, so $Z$ is not a field. Note that "every nonzero element is a unit" holds vacuously in $Z$, so it is only the clause $1 \ne 0$ that excludes it from being a division ring. [step 1.1, L4]

2.3 $1 \cdot 1_Z = 0 \cdot 1_Z + 1_Z = 0_Z + 1_Z = 1_Z = 0_Z$, using the recursion of [L5] at $\sigma(0) = 1$ and $1_Z = 0_Z$ from step 1.1. [step 1.1, L5]

3.1 Claim 5: by step 2.3 the natural number $1$ satisfies $1 \ge 1$ and $1 \cdot 1_Z = 0_Z$, and no natural number $n$ with $n \ge 1$ is smaller than $1$; so the least such $n$ is $1$ and $\operatorname{char}(Z) = 1$. [step 2.3, L5] ∎

## Remarks

- **This is the item that makes $1 \ne 0$ a visible hypothesis.**
  [[def-zero-divisor-and-integral-domain]], [[def-division-ring]] and
  [[def-field]] each carry that clause, and the zero ring is what each of them
  excludes. It satisfies every other clause of the first two: it is a commutative
  ring, it has no zero divisors, and every nonzero element of it is vacuously a
  unit. For [[def-field]] the clause $0 \ne 1$ is not the only one that fails,
  and this is worth saying rather than glossing: axiom (M) there asks that
  $F \setminus \{0\}$ be an abelian group with identity $1$, and in the zero ring
  that set is empty, so it has no identity at all. The two failures are the same
  phenomenon, since $1 = 0$ is exactly what empties $F \setminus \{0\}$.

- **Characteristic $1$ occurs exactly here.** By claim 2 a ring has $1 = 0$ only
  if it is the zero ring, and by [[def-ring-characteristic]] the characteristic
  is $1$ exactly when $1 \cdot 1_R = 1_R = 0_R$. So the zero ring is the only
  ring of characteristic $1$, and every other ring has characteristic $0$ or a
  characteristic that is at least $2$.

- **The zero ring is not excluded from being a ring.** [[def-ring]] does not
  require $1 \ne 0$, deliberately. The ring of all functions from the empty set
  into a ring has exactly one element, the empty function
  ([[def-ring-of-functions]]), so it is the zero ring; requiring $1 \ne 0$ in the
  definition of a ring would make that construction partial.
