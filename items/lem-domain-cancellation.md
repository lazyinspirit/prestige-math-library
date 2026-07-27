---
id: lem-domain-cancellation
kind: lemma
title: "Cancellation characterises domains: in a commutative ring with $1 \\ne 0$, the implication $ab = ac$ and $a \\ne 0$ imply $b = c$ holds if and only if the ring has no zero divisors"
status: draft
origin: session
deps: [def-zero-divisor-and-integral-domain, def-commutative-ring, def-ring, lem-ring-elementary-consequences, lem-group-cancellation, def-group]
justified_by: []
aliases: []
landmark: false
short: "cancellation iff domain"
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
    - title: "Integral domain (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integral_domain"
    - title: "Cancellation property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cancellation_property"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring ([[def-commutative-ring]]) with $1 \ne 0$.
Consider the two conditions

- **(C)** for all $a, b, c \in R$: if $ab = ac$ and $a \ne 0$ then $b = c$;
- **(Z)** $R$ has no zero divisors ([[def-zero-divisor-and-integral-domain]]).

Then (C) holds if and only if (Z) holds; that is, (C) holds exactly when $R$ is
an integral domain.

## Facts & Assumptions

**Given:** A commutative ring $R$ with zero $0$ and identity $1$, and $1 \ne 0$ ([[def-commutative-ring]], [[def-ring]]).

[L1] $(R,+,0)$ is an abelian group and multiplication is commutative and distributes over addition ([[def-ring]], [[def-commutative-ring]], [[def-group]]).

[L2] $a(b - c) = ab - ac$ and $a \cdot 0 = 0 = 0 \cdot a$ for all $a, b, c \in R$ ([[lem-ring-elementary-consequences]]).

[L3] Cancellation in the additive group: $x + z = y + z$ implies $x = y$ ([[lem-group-cancellation]], [[def-group]]).

[L4] $a$ is a zero divisor when $a \ne 0$ and $ab = 0$ for some $b \ne 0$; $R$ has no zero divisors exactly when $ab = 0$ implies $a = 0$ or $b = 0$ ([[def-zero-divisor-and-integral-domain]]).

## Proof

**Proof technique:** direct.

1.1 Assume (Z), and let $ab = ac$ with $a \ne 0$. Then $a(b - c) = ab - ac = 0$. [L2, given]

1.2 Assume (C), and let $ab = 0$ with $a \ne 0$. Then $ab = 0 = a \cdot 0$. [L2, given]

2.1 From step 1.1, (Z) gives $a = 0$ or $b - c = 0$; since $a \ne 0$, we get $b + (-c) = 0$. As also $c + (-c) = 0$, cancelling $-c$ gives $b = c$. So (Z) implies (C). [step 1.1, L1, L3, L4]

2.2 From step 1.2, (C) applied with $a$, $b$ and $0$ gives $b = 0$. So whenever $ab = 0$ and $a \ne 0$ we have $b = 0$, which says exactly that $ab = 0$ implies $a = 0$ or $b = 0$; hence (Z). So (C) implies (Z). [step 1.2, L4]

3.1 By steps 2.1 and 2.2 the two conditions are equivalent, and (Z) together with commutativity and $1 \ne 0$ is the definition of an integral domain. [step 2.1, step 2.2, L4] ∎

## Remarks

- **The hypothesis $1 \ne 0$ is used nowhere in the equivalence itself.** It is
  carried in the statement only so that "(C) holds exactly when $R$ is an
  integral domain" is literally true, since (D1) of
  [[def-zero-divisor-and-integral-domain]] is part of being a domain. In the
  one-element ring both (C) and (Z) hold vacuously and the ring is still not a
  domain.

- **Cancellation is by $a$, not by $0$.** The clause $a \ne 0$ cannot be dropped:
  $0 \cdot b = 0 \cdot c$ holds for all $b$ and $c$ in every ring
  ([[lem-ring-elementary-consequences]]), so cancelling $0$ would collapse the
  ring.

- **Multiplicative cancellation does not make the nonzero elements a group.**
  It makes $(R \setminus \{0\}, \cdot, 1)$ a cancellative commutative monoid,
  and $\mathbb{Z}$ shows that is strictly weaker than being a group: $2$ cancels
  and is not invertible. The rings where the nonzero elements do form a group
  are the fields ([[lem-commutative-division-ring-is-a-field]]).
