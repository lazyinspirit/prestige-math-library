---
id: def-int-abs
kind: definition
title: "The absolute value $|a|$ of an integer"
status: published
origin: session
deps: [def-integers, def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring]
justified_by: []
aliases: []
landmark: false
short: "$|a| = a$ or $-a$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Absolute value (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_value"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{Z}$ ([[def-integers]]). The **absolute value** of $a$ is

$$|a| \;:=\; \begin{cases} a & \text{if } a \ge 0, \\ -a & \text{if } a < 0, \end{cases}$$

where $\le$ is the order of [[def-int-order]] and $-a$ is the additive inverse
supplied by [[thm-int-comm-ring]] for the operations of [[def-int-operations]].

**Why the two clauses define a function.** The order on $\mathbb{Z}$ is total and
antisymmetric ([[thm-int-ordered-ring]]), so for each $a$ exactly one of $a \ge 0$
and $a < 0$ holds: totality gives at least one of $0 \le a$ and $a \le 0$, and if
both hold then $a = 0$ by antisymmetry, in which case $a \ge 0$ and $a < 0$ fails,
since $a < 0$ means $a \le 0$ together with $a \ne 0$. The two clauses therefore
never both apply and never both fail, and $-a$ is a single element of $\mathbb{Z}$
because additive inverses are unique in a commutative ring: if $a + u = 0$ and
$a + v = 0$ then $u = u + 0 = u + (a + v) = (u + a) + v = 0 + v = v$.

At the boundary, $|0| = 0$ by the first clause, and the second clause also gives
$-a$ whenever $a \le 0$: for $a < 0$ that is the definition, and for $a = 0$ both
readings give $0$.

## Remarks

- **This is not a second notion of absolute value.** The library's other absolute
  value, [[def-abs-value]], is stated for an **ordered field**. The structure the
  construction of $\mathbb{Z}$ supplies is that of a totally ordered commutative
  ring ([[thm-int-comm-ring]], [[thm-int-ordered-ring]]), and multiplicative
  inverses are no part of it, so [[def-abs-value]] does not apply here and the
  definition above is a new object rather than a redefinition of an existing
  one. (That $\mathbb{Z}$ is genuinely not a field, rather than merely not
  presented as one, is [[lem-units-of-z]] below: its only invertible elements
  are $1$ and $-1$.) A general form for an ordered ring would cover both cases at
  once, but the definition of an ordered ring comes much later in the reading
  order than this page, so it is not available to reach for.

- **The two agree along the embedding of $\mathbb{Z}$ in $\mathbb{Q}$.** Write
  $j : \mathbb{Z} \to \mathbb{Q}$ for the injective, order-preserving and
  arithmetic-preserving map of [[lem-int-embeds-rat]]. Then $j(|a|)$ is the
  absolute value of $j(a)$ in the sense of [[def-abs-value]], the check being the
  same case split: $j$ preserves the order and reflects it (if $j(a) \le j(b)$
  but not $a \le b$, then $b \le a$ by totality, so $j(b) \le j(a)$, whence
  $j(a) = j(b)$ and $a = b$ by injectivity), so $a \ge 0$ exactly when
  $j(a) \ge 0$, and $j(-a) = -j(a)$ because $j$ preserves addition. **Nothing on
  this page rests on this observation**; it is recorded so that a reader meeting
  $|\cdot|$ twice knows the two notations are consistent, and every result below
  is proved for $\mathbb{Z}$ from the integer definition alone.

- **Why an absolute value is load-bearing here and not a convenience.** The
  published division algorithm [[thm-division-algorithm-in-z]] is stated for a
  **positive** divisor, so every use of it below must first replace a divisor by
  a positive integer, and $|b|$ is what that replacement produces.
