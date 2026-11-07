---
id: ex-nondegenerate-planar-curve-extremality
kind: example
title: "Strong extremality of a nondegenerate planar curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-kleinbock-margulis-strong-extremality-of-nondegenerate-manifolds
  - def-analytic-nondegenerate-point
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "Theorem A and Proposition 2.3, complete proof route in §§2–5"
    - title: "Beresnevich–Kleinbock 2022"
      url: "https://www.asau.ru/files/pdf/3028250.pdf"
      locator: "chapter 9, printed pp. 303–310"
---

## Example

For $f:\mathbb R\to\mathbb R^2$, $f(t)=(t,t^2)$, every point of the parabola is $2$-nondegenerate, and the parametrized curve is strongly extremal.



Strong extremality here means that for almost every $t\in\mathbb R$, $f(t)$ is not VWMA in the dual multiplicative sense.

## Example references

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — Theorem A and Proposition 2.3, complete proof route in §§2–5.

[Beresnevich–Kleinbock 2022](https://www.asau.ru/files/pdf/3028250.pdf) — chapter 9, printed pp. 303–310.


## Supplied unqualified proof scope

The original unqualified supplier conclusion is now supplied by its actual choice-free proof. The calculations below retain their original scope and constants; no additional choice axiom is assumed.

## Facts & Assumptions

**Given:** the $C^2$ embedding $f(t)=(t,t^2)$.

[F1] A point is $2$-nondegenerate when its first and second derivative vectors span $\mathbb R^2$. [[def-analytic-nondegenerate-point]]

[F2] the Kleinbock–Margulis theorem gives strong extremality for a $C^m$ manifold nondegenerate almost everywhere. [[thm-kleinbock-margulis-strong-extremality-of-nondegenerate-manifolds]]


## Verification

1.1 The derivative vectors are $f'(t)=(1,2t)$ and $f''(t)=(0,2)$. Their determinant is $2$, so they span $\mathbb R^2$ for every $t$. By [F1], every point is $2$-nondegenerate. [given, F1, algebra]

2.1 The hypothesis of [F2] therefore holds at every parameter. The theorem gives that almost every $t$ maps to a vector that is not VWMA, which is exactly strong extremality of this curve. [step 1.1, F2] ∎

## Remarks

The original unqualified claim is retained. The sole inherited choice-premise hold is discharged by the actual supplied unqualified theorem, without a new premise or a change to the mathematical calculations.
