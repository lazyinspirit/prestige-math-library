---
id: alg-csm-frontier-interval-finite-partition
kind: algorithm
title: Certified finite partition and expectation enclosure
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
domain: mathematics
library: physics
deps:
  - def-dyadic-floating-point-format-and-directed-rounding
  - def-intervals-rectangles-and-complex-balls
  - def-outward-rounded-interval-and-ball-operations
  - lem-directed-dyadic-rounding-enclosure-and-error
  - lem-real-interval-arithmetic-preserves-enclosure
dependency_roles:
  def-dyadic-floating-point-format-and-directed-rounding: mathematical-premise
  def-intervals-rectangles-and-complex-balls: mathematical-premise
  def-outward-rounded-interval-and-ball-operations: mathematical-premise
  lem-directed-dyadic-rounding-enclosure-and-error: mathematical-premise
  lem-real-interval-arithmetic-preserves-enclosure: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "Warwick Tucker, Validated Numerics: A Short Introduction to Rigorous Computations, Chapter 1 §§1.3–1.5"
      url: "https://pup-assets.imgix.net/onix/images/9780691247656/9780691247656.pdf?fm=pdf"
      locator: "Chapter 1 §§1.3–1.5, printed pp. 5–18 (PDF pp. 6–19): finite floating formats, directed rounding, outward endpoints, and overflow/domain-status conventions. The available book excerpt contains the complete cited chapter."
    - title: "R. B. Kearfott, Interval Computations: Introduction, Uses, and Resources"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
      locator: "§1, printed pp. 95–97 (PDF pp. 1–3): interval arithmetic as exact range enclosures for basic operations, endpoint formulas, expression evaluation, and outward rounding."
---

## Definition

Input a finite nonempty set $\mathsf X$ with an explicit enumeration, functions $w:\mathsf X\to(0,\infty)$ and $f:\mathsf X\to\mathbb R$, and, for each $x\in\mathsf X$, rational numbers $a_x\le b_x$ and $c_x\le d_x$ such that $w(x)\in W_x:=[a_x,b_x]$ and $f(x)\in F_x:=[c_x,d_x]$. Here a closed rational input interval $[a,b]$ means $a,b\in\mathbb Q$ and $a\le b$; its endpoints need not be dyadic, so before conversion it is distinct from the finite-dyadic real interval defined in [[def-intervals-rectangles-and-complex-balls]]. Choose a finite dyadic format $\mathbb F$ as in [[def-dyadic-floating-point-format-and-directed-rounding]], with its directed roundings. The interval assertions are certified input premises; this procedure does not derive them from energies or evaluate an exponential or logarithm.

For each input interval, convert its lower rational endpoint by directed rounding down and its upper rational endpoint by directed rounding up into $\mathbb F$. If any conversion overflows, return unresolved-overflow and no finite enclosure claim. Using the resulting dyadic intervals and the outward-rounded operations, construct the finite expression DAG for

$$\mathcal Z=\sum_{x\in\mathsf X}W_x,\qquad \mathcal N=\sum_{x\in\mathsf X}W_xF_x.$$

Every addition and multiplication uses the outward-rounded interval operations; division is used only for a denominator interval excluding zero. If any operation returns a non-finite status, return unresolved-operation and no finite enclosure claim. Otherwise return the finite intervals $\mathcal Z$ and $\mathcal N$. If the lower endpoint of $\mathcal Z$ is strictly positive, also return the outward interval quotient $\mathcal E=\mathcal N/\mathcal Z$; if that endpoint is nonpositive, return unresolved-denominator and no normalized-expectation enclosure.

This is finite enumeration and can require exponentially many operations in the model size. It certifies arithmetic from supplied weight intervals; it does not certify how those intervals were obtained.

## Definition references

[[def-dyadic-floating-point-format-and-directed-rounding]]

[[def-intervals-rectangles-and-complex-balls]]

[[def-outward-rounded-interval-and-ball-operations]]

[[lem-directed-dyadic-rounding-enclosure-and-error]]

[[lem-real-interval-arithmetic-preserves-enclosure]]
