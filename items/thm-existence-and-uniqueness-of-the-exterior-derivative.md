---
id: thm-existence-and-uniqueness-of-the-exterior-derivative
kind: theorem
title: "Existence and uniqueness of the exterior derivative"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-exterior-derivative-of-a-function-is-its-differential, thm-the-exterior-derivative-is-a-graded-derivation, thm-the-exterior-derivative-squares-to-zero]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

The operator $d$ constructed above is the unique degree-one graded derivation on $\Omega^*(M)$ that agrees with the ordinary differential on functions and satisfies $d^2=0$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For $f\in C^\infty(M)=\Omega^0(M)$, $df(X)=Xf$ for every smooth vector field $X$. ([[prop-exterior-derivative-of-a-function-is-its-differential]]).

## Proof

**Proof technique:** direct.

1.1 The preceding construction exists and has the stated derivation, function, and square-zero properties. [F1, given]

2.1 If $D$ has them, then $D(dx^i)=D^2x^i=0$, and the graded rule determines $D$ on every coordinate expansion; hence $D=d$ locally and globally. [step 1.1] ∎

