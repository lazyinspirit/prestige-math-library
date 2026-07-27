---
id: def-invertible-element
kind: definition
title: "Left inverse, right inverse, and invertible element of a monoid"
status: published
origin: session
deps: [def-semigroup-and-monoid, def-identity-element, def-binary-operation]
justified_by: []
aliases: [def-unit, def-invertible]
landmark: false
short: "left / right inverse; unit"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Inverse element (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_element"
    - title: "Unit (ring theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unit_(ring_theory)"
pipeline_run: null
---

## Definition

Let $(M,*,e)$ be a monoid ([[def-semigroup-and-monoid]]) and let $g \in M$. An
element $h \in M$ is

- a **left inverse** of $g$ when $h * g = e$;
- a **right inverse** of $g$ when $g * h = e$;
- a **two-sided inverse**, or simply an **inverse**, of $g$ when it is both,
  that is when $h * g = e = g * h$.

The element $g$ is **invertible**, or a **unit** of $M$, when it has a two-sided
inverse. The set of units of $M$ is written $M^{\times}$.

The identity is always invertible, since $e * e = e$ exhibits $e$ as a two-sided
inverse of itself.

## Remarks

- **One-sided inverses are not enough on their own.** The definition keeps the
  three notions apart because the sharp uniqueness statement, and hence the right
  to write $g^{-1}$, is about their interaction: in a monoid a left inverse of
  $g$ and a right inverse of $g$ are automatically equal ([[lem-inverse-unique]]).
  Until that is proved, "the inverse of $g$" is not legitimate language.

- $M^{\times}$ is a group under the restricted operation
  ([[lem-monoid-units-form-a-group]]), and a monoid is a group exactly when
  $M^{\times} = M$ ([[def-group]]).
