---
id: cor-rational-function-no-poles-codimension-one-regular
kind: corollary
title: A rational function with no codimension-one poles is regular
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 3
proof_strategy: direct
justified_by: []
aliases: []
deps: [thm-normal-functions-codimension-one-intersection, def-rational-function-regular-at-point, def-classical-integral-affine-atlas-and-chartwise-morphism, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §a: Corollary 8.15 (a rational function regular outside codimension two is regular)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X$ be an irreducible normal classical variety and let $\varphi\in k(X)$. If, on every affine chart $U$, $\varphi$ belongs to $k[U]_{\mathfrak p}$ for every height-one prime $\mathfrak p$ of $k[U]$, then $\varphi$ is globally regular. This is the meaning of having no codimension-one poles in the classical register.

## Facts & Assumptions

**Given:** AC, $X$ and $\varphi$ satisfying the stated chartwise prime-local membership condition.

[F1] On an irreducible normal classical variety, global regularity is equivalent to membership in every height-one prime localization on every affine chart ([[thm-normal-functions-codimension-one-intersection]]). Classical closed-point regularity means membership in the germ ring ([[def-rational-function-regular-at-point]]); the prime-local criterion in this item uses the common chart function field of [[def-classical-integral-affine-atlas-and-chartwise-morphism]].

## Proof

1.1 The hypothesis is precisely the prime-local membership condition in [F1]. The implication from this condition to global regularity gives that $\varphi$ is regular on $X$. [F1, given]

2.1 Thus a rational function with no codimension-one poles, in the explicit chartwise sense of the Statement, is globally regular. [F1, step 1.1] ∎
