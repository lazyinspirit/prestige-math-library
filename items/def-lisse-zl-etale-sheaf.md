---
id: def-lisse-zl-etale-sheaf
kind: definition
title: 'Finite-free lisse $\mathbb Z_\ell$ étale sheaf system'
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-lisse-etale-sheaf-of-finite-modules
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Pro-Étale Cohomology, Section 61.28, Definition 61.28.1"
      url: https://stacks.math.columbia.edu/tag/09BT
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter II, Section 32"
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
---

## Definition

Let $\ell$ be a prime and let $X$ be a scheme. Put $\mathbb Z_\ell=\varprojlim_{n\ge1}\mathbb Z/\ell^n\mathbb Z$ with its inverse-limit topology. A **rank-$r$ finite-free lisse $\mathbb Z_\ell$ étale sheaf system** on $X$ is a sequence $(\mathcal F_n)_{n\ge1}$ in which $\mathcal F_n$ is a lisse sheaf of finite free $\mathbb Z/\ell^n\mathbb Z$-modules of rank $r$, together with isomorphisms $\mathcal F_{n+1}/\ell^n\mathcal F_{n+1}\cong\mathcal F_n$ compatible with all further reductions. A morphism is a sequence of module sheaf morphisms commuting with these reductions. The term “finite-free lisse $\mathbb Z_\ell$ sheaf” in this page refers to exactly these systems.

Here a finite-free rank-$r$ $\mathbb Z_\ell$-module means a module isomorphic to $\mathbb Z_\ell^r$, and the inverse-limit topology has the kernels of the reductions modulo $\ell^n$ as a neighborhood basis of zero.

## Definition references

[The Stacks Project, Definition 61.28.1](https://stacks.math.columbia.edu/tag/09BT)

[Milne, Lectures on Étale Cohomology, Chapter II, Section 32](https://www.jmilne.org/math/CourseNotes/LEC.pdf)
