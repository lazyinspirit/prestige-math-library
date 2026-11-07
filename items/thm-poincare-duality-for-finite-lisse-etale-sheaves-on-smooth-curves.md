---
id: thm-poincare-duality-for-finite-lisse-etale-sheaves-on-smooth-curves
kind: theorem
title: "Poincaré duality for finite lisse étale sheaves on smooth curves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-compactly-supported-etale-cohomology
  - def-etale-sheaf-of-finite-modules
  - def-lisse-etale-sheaf-of-finite-modules
  - thm-local-duality-for-torsion-etale-sheaves-on-regular-curves
  - def-smooth-curve-over-finite-field
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, Theorem 14.7"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
---

## Statement

Let $k$ be an algebraically closed field of characteristic $p$, let $U$ be a smooth geometrically connected curve over $k$, let $\ell\ne p$ be a prime, let $n\ge1$, and let $\mathcal F$ be a finite locally constant sheaf of $\mathbb Z/\ell^n\mathbb Z$-modules on $U_{\acute e t}$. Write $\mathcal F^\vee:=\mathcal Hom(\mathcal F,\mathbb Z/\ell^n\mathbb Z)$, and let $(1)$ denote tensor product with the rank-one sheaf $\mu_{\ell^n}$. Cup product followed by the trace map gives a perfect pairing of finite groups
$$
H_c^i(U,\mathcal F)\times H^{2-i}(U,\mathcal F^\vee(1))\longrightarrow \mathbb Z/\ell^n\mathbb Z
$$
for every integer $i$.

## Statement references

[Milne, *Lectures on Étale Cohomology*, Chapter I, Theorem 14.7, pp. 93–96](https://jmilne.org/math/CourseNotes/LEC.pdf)
