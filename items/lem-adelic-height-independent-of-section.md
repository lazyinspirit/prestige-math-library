---
id: lem-adelic-height-independent-of-section
kind: lemma
title: "Independence of an adelic height from the rational section"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-adelic-metrization-and-anticanonical-height
  - thm-product-formula-for-number-fields
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC is inherited through the number-field product formula; its only proof use is
  applying that formula to the scalar relating the two section values.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §§3–4"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $X/K$ be a smooth Fano variety with an adelically metrized anticanonical line bundle, and let $P\in X(K)$. If $s$ and $t$ are rational sections of $-K_X$ that are both regular and nonzero at $P$, then the height formula using $s(P)$ equals the formula using $t(P)$.

## Statement references

[[def-adelic-metrization-and-anticanonical-height]]

## Facts & Assumptions

**Given:** AC, the number field $K$, the point $P$, the line $(-K_X)_P$, and two rational sections nonzero and regular at $P$.

[A1] AC is required by the cited number-field product formula. ([[def-axiom-of-choice]])

[F1] For every $a\in K^\times$, the normalized local absolute values satisfy $\prod_v|a|_v=1$. ([[thm-product-formula-for-number-fields]])

[F2] Each local norm is homogeneous: $\|a\ell\|_v=|a|_v\|\ell\|_v$. ([[def-adelic-metrization-and-anticanonical-height]])

## Proof

1.1 The fiber $(-K_X)_P$ is a one-dimensional $K$-vector space. Since both section values are nonzero, there is a unique $a\in K^\times$ with $t(P)=a s(P)$. By [F2], at each place $v$ the ratio of the local height factors for $t$ and $s$ is $|a|_v^{-1}$. [given, F2, construct]

1.2 The ratio of the global height products is therefore $(\prod_v|a|_v^{-1})^{1/[K:\mathbb Q]}=1$ by [F1]. Thus both sections define the same height at $P$. [given, F1, step 1.1, algebra] ∎
