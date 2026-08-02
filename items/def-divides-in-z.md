---
id: def-divides-in-z
kind: definition
title: "Divisibility in $\\mathbb{Z}$: $d \\mid a$ when $a = dq$ for some integer $q$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-integers, def-int-operations, thm-int-comm-ring, thm-division-algorithm-in-z]
justified_by: []
aliases: [def-divisibility-in-z]
landmark: true
short: "$d \\mid a$ iff $a = dq$"
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
    - title: "Divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divisor"
pipeline_run: null
---

## Definition

Let $d, a \in \mathbb{Z}$ ([[def-integers]]). We say **$d$ divides $a$**, and
write $d \mid a$, when

$$a \;=\; d q \qquad \text{for some } q \in \mathbb{Z},$$

the product being that of [[def-int-operations]]. We write $d \nmid a$ when this
fails. In this situation $d$ is called a **divisor**, or a **factor**, of $a$,
and $a$ is called a **multiple** of $d$.

**This is the relation the library already has, not a second one.** The published
[[thm-division-algorithm-in-z]] introduces it in its own Statement, in these
words: "We say $b$ **divides** $a$, written $b \mid a$, when $a = qb$ for some
$q \in \mathbb{Z}$." Since multiplication on $\mathbb{Z}$ is commutative
([[thm-int-comm-ring]]), $a = qd$ and $a = dq$ are the same condition, so the
definition above is that relation verbatim and the two usages agree everywhere.
The theorem defined it for use on its own page and left the systematic theory to
a later page; this is that page, and this item records the agreement rather than
introducing a rival notion.

**The remainder test.** For $b > 0$ the same Statement records that $b \mid a$
holds exactly when the remainder $r$ in $a = qb + r$, $0 \le r < b$, is $0$.

**Boundary values.** Each is one line from the ring axioms, and each is used
below, so all three are recorded here rather than assumed:

- $d \mid 0$ for **every** integer $d$, including $d = 0$, since $0 = d \cdot 0$;
- $0 \mid a$ only for $a = 0$, since $a = 0 \cdot q$ forces $a = 0$;
- $1 \mid a$ and $a \mid a$ for every $a$, since $a = 1 \cdot a$ and
  $a = a \cdot 1$.

## Remarks

- **The remainder test for a negative divisor** is
  [[cor-division-algorithm-nonzero-divisor]], proved next: for every $b \ne 0$,
  $b \mid a$ holds exactly when the remainder in $a = qb + r$, $0 \le r < |b|$,
  is $0$.

- **$d \mid a$ says a quotient exists; it says nothing on its own about the size
  or the sign of $d$.** Signs are irrelevant to it — $2 \mid -4$, $-2 \mid 4$ and
  $-2 \mid -4$ all hold — and that is [[lem-divisibility-basic]]. The one place
  where divisibility does constrain size is [[lem-divisor-bound]], and it needs
  the hypothesis $a \ne 0$: without it $d \mid 0$ holds for arbitrarily large
  $|d|$.

- **Notation.** The bar in $d \mid a$ is a relation symbol read from left to
  right: the divisor is on the left. The reversed reading is a common slip, and
  the two directions are genuinely different, since $2 \mid 4$ holds while
  $4 \nmid 2$ (by [[lem-divisor-bound]], $4 \mid 2$ with $2 \ne 0$ would force
  $4 = |4| \le |2| = 2$).
