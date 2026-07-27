---
id: def-division-ring
kind: definition
title: "Division ring: a ring with $1 \\ne 0$ in which every nonzero element is a unit"
status: draft
origin: session
deps: [def-ring, def-invertible-element, lem-ring-units-form-a-group, lem-ring-elementary-consequences]
justified_by: []
aliases: [def-skew-field]
landmark: true
short: "division ring"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Division ring (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Division_ring"
pipeline_run: null
---

## Definition

A **division ring** (also **skew field**) is a ring $D$ ([[def-ring]]) such that

- **(V1)** $1 \ne 0$ in $D$;
- **(V2)** every $x \in D$ with $x \ne 0$ is a unit, that is, has a two-sided
  multiplicative inverse ([[def-invertible-element]],
  [[lem-ring-units-form-a-group]]).

Equivalently, $D^{\times} = D \setminus \{0\}$: by (V2) every nonzero element is
a unit, and by (V1) together with [[lem-ring-units-form-a-group]] the element
$0$ is not a unit, since $0$ is a unit only when $1 = 0$. Consequently
$(D \setminus \{0\}, \cdot, 1)$ is a group ([[lem-ring-units-form-a-group]]); in
particular $D \setminus \{0\}$ is closed under multiplication, so a division
ring has no zero divisors.

A **commutative division ring** is a division ring whose multiplication is
commutative. Those are exactly the fields
([[lem-commutative-division-ring-is-a-field]],
[[lem-field-is-a-commutative-ring]]).

## Remarks

- **(V1) is not implied by (V2).** In the one-element ring, where $1 = 0$, there
  is no nonzero element at all, so (V2) holds vacuously; (V1) is what excludes
  it, exactly as in [[def-zero-divisor-and-integral-domain]]. Without (V1) the
  one-element ring would count as a division ring and the sentence "a division
  ring has no zero divisors" would still be true but useless.

- **The definition is not vacuous beyond the commutative case.** The quaternions
  $\mathbb{H}$ are a division ring that is not commutative, hence not a field
  ([[thm-quaternions-form-a-division-ring]]); they are constructed on this page
  for that reason.

- **"Has no zero divisors" is genuinely weaker.** $\mathbb{Z}$ has no zero
  divisors and is not a division ring, since $2$ is not a unit; the companion
  page records this. So (V2) is a real strengthening of the domain condition,
  and no argument on this page derives one from the other.
