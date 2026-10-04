---
id: thm-regular-local-ring-is-normal
kind: theorem
title: Regular varieties are normal
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 1
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-normal-point-and-normal-variety, thm-regular-local-rings-are-normal, def-regular-local-ring-geometric-point, thm-local-ring-affine-variety-localization, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §a: normal points (Definition 8.1) together with the commutative-algebra theorem that regular local rings are integrally closed"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. At every regular point of a classical variety over
an algebraically closed field the local ring is an integrally closed domain;
hence every regular variety is normal. No characteristic or perfectness
hypothesis is needed.

## Facts & Assumptions

**Given:** AC, the algebraically closed field $k$, the classical variety $X$, a regular point $x\in X$.

[F1] A point $x$ of a classical variety is regular exactly when its local ring $\mathcal O_{X,x}$ is a regular local ring; on an affine chart this local ring is the localisation of the coordinate ring at the maximal ideal of $x$ ([[def-regular-local-ring-geometric-point]], [[thm-local-ring-affine-variety-localization]]).

[F2] Every regular local ring is an integrally closed domain ([[thm-regular-local-rings-are-normal]]). AC is used there.

[F3] $x$ is a normal point exactly when $\mathcal O_{X,x}$ is an integrally closed domain, and $X$ is normal exactly when all of its points are normal ([[def-normal-point-and-normal-variety]]).

## Proof

1.1 Let $x$ be a regular point of $X$. By [F1] the local ring $\mathcal O_{X,x}$ is a regular local ring, and by [F2] it is an integrally closed domain. By [F3] the point $x$ is therefore normal. [F1, F2, F3, given]

2.1 Since $x$ was an arbitrary regular point and [F3] decides normality pointwise, every regular point of $X$ is normal; hence a variety all of whose points are regular is normal, that is, every regular variety is normal. Neither [F1] nor [F2] used any hypothesis on the characteristic of $k$ or its perfectness, so the conclusion carries no such hypothesis. [F1, F2, F3, step 1.1] ∎
