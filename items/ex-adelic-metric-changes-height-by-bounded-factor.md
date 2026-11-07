---
id: ex-adelic-metric-changes-height-by-bounded-factor
kind: example
title: "Changing an adelic metric changes height by a bounded factor"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-adelic-metrization-and-anticanonical-height
  - lem-adelic-height-independent-of-section
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC is inherited from the anticanonical-height/product-formula definition; the
  local comparison argument itself is choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §§3–4"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
    - title: "Bjorn Poonen, Rational Points on Varieties, §2.6.4.3"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
verification: {}
---

## Example

Assume the Axiom of Choice. Let $K$ be a number field and let $X/K$ be a smooth Fano variety with anticanonical line bundle $L=-K_X$. Let $\bar L_0$ and $\bar L_1$ be two adelic metrizations of $L$. Suppose there is a finite set of places $S$ such that the two local metrics agree for $v\notin S$, and constants $C_v\ge1$ such that for every $v\in S$, every $P\in X(K_v)$, and every nonzero vector $\ell\in L_P$, one has $C_v^{-1}\le\|\ell\|_{v,1}/\|\ell\|_{v,0}\le C_v$. Then for all $P\in X(K)$,
$$
C^{-1}H_{\bar L_0}(P)\le H_{\bar L_1}(P)\le C H_{\bar L_0}(P),\qquad C:=\left(\prod_{v\in S}C_v\right)^{1/[K:\mathbb Q]}.
$$

## Example references

[[def-adelic-metrization-and-anticanonical-height]]

## Facts & Assumptions

**Given:** AC; the two adelic metrics, the finite set $S$, the uniform local comparison constants, and a rational point $P\in X(K)$.

[A1] AC is required by the height and product-formula interfaces. ([[def-axiom-of-choice]])

[F1] The height formula is independent of the rational section used to evaluate the line at $P$. ([[lem-adelic-height-independent-of-section]])

[F2] The metrics agree outside $S$ and satisfy the displayed two-sided ratio bound at every place in $S$. ([[def-adelic-metrization-and-anticanonical-height]])

## Verification

1.1 Choose a rational section of $L$ regular and nonzero at $P$; a local trivialization at $P$ gives such a rational section. By [F1], use this same section to compute both heights. [given, A1, F1, choose]

1.2 At places outside $S$ the two height factors are equal by [F2]. At each $v\in S$, the inverse-norm ratio is also between $C_v^{-1}$ and $C_v$. Multiplication over the finite set $S$ and raising to $1/[K:\mathbb Q]$ yields the displayed global bounds. [given, F2, step 1.1, algebra] ∎
