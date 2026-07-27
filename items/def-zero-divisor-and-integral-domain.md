---
id: def-zero-divisor-and-integral-domain
kind: definition
title: "Zero divisor, and integral domain: a commutative ring with $1 \\ne 0$ and no zero divisors"
status: draft
origin: session
deps: [def-ring, def-commutative-ring, lem-ring-elementary-consequences]
justified_by: []
aliases: [def-integral-domain, def-zero-divisor]
landmark: true
short: "zero divisor; integral domain"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Zero divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zero_divisor"
    - title: "Integral domain (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integral_domain"
pipeline_run: null
---

## Definition

Let $R$ be a ring ([[def-ring]]). An element $a \in R$ is a **zero divisor**
when

$$a \ne 0 \quad\text{and}\quad ab = 0 \ \text{ or }\ ba = 0 \ \text{ for some } b \in R \text{ with } b \ne 0 .$$

The ring $R$ **has no zero divisors** when no element of $R$ is a zero divisor;
equivalently, when $ab = 0$ implies $a = 0$ or $b = 0$, for all $a, b \in R$.

An **integral domain**, or simply a **domain**, is a commutative ring
([[def-commutative-ring]]) $R$ such that

- **(D1)** $1 \ne 0$ in $R$;
- **(D2)** $R$ has no zero divisors.

In a commutative ring the two clauses $ab = 0$ and $ba = 0$ of the definition of
a zero divisor say the same thing, so there the notion is one-sided without
ambiguity.

**Two conventions fixed here, and kept.** First, $0$ is **not** a zero divisor,
because the clause $a \ne 0$ is part of the definition. This matters: $0 \cdot b = 0$
holds for every $b$ in every ring ([[lem-ring-elementary-consequences]]), so
without that clause $0$ would be a zero divisor in every ring with more than one
element and the phrase "no zero divisors" would name the empty class. Second,
(D1) is a **hypothesis and not a consequence** of (D2). The one-element ring, in
which $1 = 0$, has no zero divisors at all — vacuously, since it has no nonzero
element — so (D2) alone would admit it. It is excluded by (D1), and by nothing
else; the companion page records that ring explicitly.

## Remarks

- **Where the definition is used.** Cancellation is what a domain really buys:
  in a commutative ring with $1 \ne 0$, the absence of zero divisors is
  *equivalent* to the cancellation law $ab = ac$ and $a \ne 0$ imply $b = c$,
  which is [[lem-domain-cancellation]].

- **Commutativity is part of the definition of a domain, and is not part of the
  definition of a zero divisor.** A non-commutative ring may perfectly well have
  no zero divisors — the quaternions ([[thm-quaternions-form-a-division-ring]])
  are such a ring, since every nonzero element there is invertible — and it is
  still not called an integral domain here.

- Every field has no zero divisors ([[lem-of-no-zero-divisors]]), so every field
  is an integral domain once it is known to be a commutative ring; that is part
  of [[lem-field-is-a-commutative-ring]]. The converse fails, and $\mathbb{Z}$
  is the standard witness, recorded on the companion page.
