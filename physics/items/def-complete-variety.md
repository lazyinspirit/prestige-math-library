---
id: def-complete-variety
kind: definition
title: Complete varieties
status: published
origin: pipeline
deps:
  - def-proper-morphism
  - def-variety-scheme-theoretic
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: 'Ravi Vakil, Foundations of Algebraic Geometry, 2011 public draft, §11.3.1'
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

For a scheme-theoretic $k$-variety $X$ (integral, separated and finite type over
$k$), call $X$ **complete** when its structure morphism
$X\to\operatorname{Spec}k$ is proper. Completeness here is relative to the
given $k$-structure. This is a property of the structure morphism and makes no
assertion about compactness of $X(k)$ in an unspecified topology.

## Definition

Unfolding [[def-proper-morphism]], $X$ is complete over $k$ exactly when its
structure morphism is separated, of finite type, and universally closed.
The source convention [[def-variety-scheme-theoretic]] supplies the meaning of
$k$-variety used here. The term concerns algebraic properness over $k$; it does
not add a topology to the set of $k$-rational points.
