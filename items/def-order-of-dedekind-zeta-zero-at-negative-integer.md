---
id: def-order-of-dedekind-zeta-zero-at-negative-integer
kind: definition
title: "Order of a Dedekind Zeta Zero at a Negative Integer"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-dedekind-zeta-function
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - def-order-of-zero-holomorphic-function
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Armand Borel, Stable real cohomology of arithmetic groups"
      url: "https://numdam.org/item/10.24033/asens.1269.pdf"
      locator: "Proposition 12.2 and the discussion of the order of the Dedekind-zeta zero at negative integers."
    - title: "Jürgen Neukirch, Algebraic Number Theory"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Chapter VII §5, the completed Dedekind-zeta function and its analytic continuation."
verification: {}
---

## Definition

Assume the Axiom of Choice. Let $K$ be a number field and let $m\ge1$. The completed Dedekind-zeta theorem makes $\zeta_K$ holomorphic at $s=-m$. Define

$$d_m^0(K):=\operatorname{ord}_{s=-m}\zeta_K(s),$$

where the order is the least Taylor index with nonzero coefficient, and is $+\infty$ if every Taylor coefficient vanishes.

## Definition references

[[def-axiom-of-choice]]

[[def-number-field]]

[[def-dedekind-zeta-function]]

[[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[[def-order-of-zero-holomorphic-function]]

## Facts & Assumptions

**Given:** AC; a number field $K$ and an integer $m\ge1$.

[A1] [[def-axiom-of-choice]]: the Dedekind-zeta continuation supplier used here assumes the Axiom of Choice.

[F1] [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]: under AC, $\zeta_K$ is meromorphic on $\mathbb C$ and has no pole except at $s=1$.

[F2] [[def-order-of-zero-holomorphic-function]]: for a function holomorphic near $a$, its order is the least Taylor index with nonzero coefficient, or $+\infty$ if every coefficient is zero.

## Proof

1.1 Since $m\ge1$, the point $-m$ differs from $1$. By [A1] and [F1], $\zeta_K$ has no pole at $-m$, hence is holomorphic on a neighborhood of that point. [A1, F1, given]

2.1 Apply the order definition [F2] to this holomorphic germ. It gives a unique value in $\mathbb N\cup\{+\infty\}$, so the displayed $d_m^0(K)$ is well-defined. [F2, step 1.1, given] ∎
