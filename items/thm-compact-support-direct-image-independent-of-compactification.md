---
id: thm-compact-support-direct-image-independent-of-compactification
kind: theorem
title: "Compact-support direct image is independent of compactification"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-derived-direct-image-with-proper-supports
  - thm-nagata-compactification-for-separated-finite-type-morphisms
  - def-derived-category-of-etale-sheaves
  - def-l-adic-sheaf-as-compatible-system
  - thm-proper-base-change-and-finiteness-for-constructible-torsion-etale-sheaves
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, §18, Proposition 18.2"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
---

## Statement

Let $f:X\to S$ be a separated morphism of finite type between Noetherian schemes. Let $\mathcal F$ be a constructible torsion étale sheaf on $X$, or let $K$ be a bounded constructible $\mathbb Q_\ell$-complex when $\ell$ is invertible on $S$. Suppose $f=\overline f_1\circ j_1=\overline f_2\circ j_2$ are two compactifications, where each $j_a:X\hookrightarrow\overline X_a$ is an open immersion and each $\overline f_a:\overline X_a\to S$ is proper. Then the objects $R\overline f_{1*}(j_1)_!\mathcal F$ and $R\overline f_{2*}(j_2)_!\mathcal F$ in the torsion case, and $R\overline f_{1*}R(j_1)_!K$ and $R\overline f_{2*}R(j_2)_!K$ in the $\ell$-adic case, are canonically isomorphic by comparison maps through common proper refinements. The existence of such refinements follows by taking the closure of the diagonal image in $\overline X_1\times_S\overline X_2$; compatibility of the resulting cohomology comparisons uses proper base change.

## Statement references

[Milne, *Lectures on Étale Cohomology*, Chapter I, §18, Proposition 18.2, pp. 119–120](https://jmilne.org/math/CourseNotes/LEC.pdf)
