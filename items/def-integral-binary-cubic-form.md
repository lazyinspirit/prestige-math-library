---
id: def-integral-binary-cubic-form
kind: definition
title: "Integral binary cubic form and discriminant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bhargava, Shankar, and Tsimerman, On the Davenport–Heilbronn Theorems and Second-Order Terms, §2"
      url: "https://arxiv.org/pdf/1005.0672"
      locator: "§2, the Delone–Faddeev correspondence and discriminant convention"
verification: {}
---

## Definition

An **integral binary cubic form** is a homogeneous polynomial
$$f(x,y)=ax^3+bx^2y+cxy^2+dy^3\qquad(a,b,c,d\in\mathbb Z).$$
Its discriminant is
$$\operatorname{Disc}(f)=b^2c^2-4ac^3-4b^3d-27a^2d^2+18abcd.$$
For $\gamma\in\operatorname{GL}_2(\mathbb Z)$, use the twisted action
$$(\gamma\cdot f)(x,y)=\det(\gamma)^{-1}f((x,y)\gamma),$$
where $(x,y)$ is a row vector. Equivalence means belonging to the same orbit for this action.

## Definition references

[Bhargava, Shankar, and Tsimerman, §2](https://arxiv.org/pdf/1005.0672)
