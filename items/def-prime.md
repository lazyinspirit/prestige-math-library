---
id: def-prime
kind: definition
title: "Prime and composite integers: $p$ is prime when $p > 1$ and its only positive divisors are $1$ and $p$"
status: published
origin: session
deps: [def-divides-in-z, lem-divisibility-basic, lem-divisor-bound, def-int-abs,
       lem-int-abs-properties, lem-associates-characterisation, lem-units-of-z,
       def-integers, def-int-operations, def-int-order, thm-int-comm-ring,
       thm-int-ordered-ring, def-natural-numbers, lem-nat-embeds-int]
justified_by: []
forward_refs: [cex-calling-one-prime-destroys-uniqueness]
aliases: [def-prime-integer, def-composite-integer]
landmark: true
short: "$p$ prime: $p > 1$, positive divisors $1$ and $p$"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Prime number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Prime_number"
    - title: "Composite number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Composite_number"
pipeline_run: null
---

## Definition

Let $p \in \mathbb{Z}$ ([[def-integers]]), ordered as in [[def-int-order]], with
divisibility as in [[def-divides-in-z]]. Then $p$ is **prime** when

$$p > 1 \qquad \text{and} \qquad d \mid p \ \text{ with } \ d > 0 \ \text{ force } \ d = 1 \ \text{ or } \ d = p .$$

In words: $p$ exceeds $1$, and its only positive divisors are $1$ and $p$. An
integer $n$ with $n > 1$ that is not prime is **composite**; unfolding the
definition, $n$ is composite exactly when $n > 1$ and $n$ has a positive divisor
$d$ with $d \ne 1$ and $d \ne n$.

**Numerals.** For $k \in \mathbb{N}$ the symbol $k$ inside $\mathbb{Z}$ means
$\iota(k)$, the embedding of [[lem-nat-embeds-int]]; in particular $0$ and $1$
are the ring constants of [[def-int-operations]].

**Boundary values, stated rather than assumed.** $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and $\mathbb{Z}$ contains $0$, $1$ and the negatives,
so the small cases are recorded explicitly. The clause $p > 1$ decides all of
them at once:

- $1$ is **not** prime, since $1 > 1$ is false, and not composite either, since
  composite also requires $n > 1$.
- $0$ is **not** prime, since $0 > 1$ is false. This is decided by the size
  clause alone and not by counting divisors: every integer divides $0$
  ([[def-divides-in-z]]), so the divisor condition is not what rules $0$ out.
- Every negative integer is neither prime nor composite, again because $p > 1$
  fails. So a prime is in particular positive, and $-2$, $-3$, $-5$ are not
  primes in this library, though each is $-1$ times one.

Thus "prime" and "composite" between them classify exactly the integers greater
than $1$, and nothing else.

**The same condition read over all divisors.** For $p > 1$ the following are
equivalent:

1. the only positive divisors of $p$ are $1$ and $p$;
2. the only divisors of $p$ are $1$, $-1$, $p$ and $-p$.

That 2 implies 1 is immediate, since of those four only $1$ and $p$ are positive
($p > 1 > 0$, so $-1 < 0$ and $-p < 0$). For the converse let $d \mid p$. Since
$p > 1$ we have $p \ne 0$, so $d \ne 0$ by [[lem-divisor-bound]]; and
$|d| \mid p$, because $|d|$ is $d$ or $-d$ ([[def-int-abs]]) and those two divide
$p$ together ([[lem-divisibility-basic]]). Also $|d| \ge 0$ and $|d| \ne 0$
([[lem-int-abs-properties]]), so $|d| > 0$ and clause 1 gives $|d| = 1$ or
$|d| = p$. If $|d| = 1$ then $d = 1$ or $d = -1$, by the case split defining
$|d|$; and if $|d| = p = |p|$ then $d = up$ for a unit $u \in \{1,-1\}$
([[lem-associates-characterisation]], [[lem-units-of-z]]), that is $d = p$ or
$d = -p$. Both readings are used below without further comment.

**Why $1$ is excluded, and it is not a matter of taste.** The exclusion is
forced by the uniqueness half of [[thm-fundamental-theorem-of-arithmetic]],
proved on this page: if $1$ counted as a prime, a factorisation could be padded
with any number of factors $1$, so lists of different lengths would represent
the same integer and no permutation could match them. Existence of a
factorisation would survive the change; it is uniqueness alone that fixes the
convention, and the explicit witness is recorded on the companion page.

## Remarks

- **The witness for the exclusion of $1$.** The companion page carries it
  explicitly: [[cex-calling-one-prime-destroys-uniqueness]] displays
  $6 = 2 \cdot 3 = 1 \cdot 2 \cdot 3 = 1 \cdot 1 \cdot 2 \cdot 3$, three lists of
  lengths $2$, $3$ and $4$ that no permutation can match.

- **No ring vocabulary is used here, deliberately.** In a general commutative
  ring one distinguishes a *prime* element from an *irreducible* element, and in
  $\mathbb{Z}$ the two notions coincide; that dictionary needs the definition of
  a ring, which this library develops far above this page, so it is not stated
  here and nothing below depends on it. What *is* proved here is the arithmetic
  content of the coincidence: [[cor-prime-iff-euclid-property]] shows that for
  $p > 1$ the definition above is equivalent to the property that $p \mid ab$
  forces $p \mid a$ or $p \mid b$.

- **Primality is about $p$; coprimality is about a pair.** [[def-coprime]] is
  the condition $\gcd(a,b) = 1$ on two integers and needs no primality at all —
  $4$ and $9$ are coprime and neither is prime. The bridge in the other
  direction is [[lem-prime-not-dividing-is-coprime]], the next item, and it is
  the only place on this page where primality is converted into coprimality.
