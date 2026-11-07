---
id: thm-poincare-duality-and-degree-zero-two-on-smooth-curves
kind: theorem
title: "Poincaré duality and degree-zero/two compact-support terms on a smooth curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-compactly-supported-etale-cohomology
  - def-lisse-l-adic-sheaf-on-a-scheme
  - def-smooth-curve-over-finite-field
  - def-tate-twist-of-an-l-adic-sheaf
  - thm-hc0-vanishing-for-lisse-sheaves-on-nonproper-smooth-curves
  - thm-poincare-duality-for-finite-lisse-etale-sheaves-on-smooth-curves
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, §24, Theorem 24.1"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, §14, Theorem 14.7"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
---

## Statement

Let $k$ be an algebraically closed field of characteristic $p$, let $U$ be a smooth geometrically connected nonproper curve over $k$, let $\ell\ne p$ be a prime, and let $\mathcal F$ be a lisse finite-rank $\mathbb Q_\ell$-sheaf on $U$. Cup product and trace give canonical perfect pairings
$$
H_c^i(U,\mathcal F)\times H^{2-i}(U,\mathcal F^\vee(1))\longrightarrow\mathbb Q_\ell
$$
for every integer $i$. In particular, $H_c^0(U,\mathcal F)=0$ and $H_c^2(U,\mathcal F)$ is dual to the geometric invariants $H^0(U,\mathcal F^\vee(1))$.

## Statement references

[Milne, *Lectures on Étale Cohomology*, Chapter I, §24, Theorem 24.1, pp. 144–145](https://jmilne.org/math/CourseNotes/LEC.pdf)

[Milne, *Lectures on Étale Cohomology*, Chapter I, §14, Theorem 14.7, pp. 93–96](https://jmilne.org/math/CourseNotes/LEC.pdf)
