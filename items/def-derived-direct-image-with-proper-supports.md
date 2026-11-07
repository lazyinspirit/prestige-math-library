---
id: def-derived-direct-image-with-proper-supports
kind: definition
title: "Derived direct image with proper support for étale sheaves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-derived-category-of-etale-sheaves
  - def-etale-sheaf-of-finite-modules
  - def-constructible-etale-sheaf-of-finite-modules
  - thm-nagata-compactification-for-separated-finite-type-morphisms
  - def-proper-morphism
  - def-open-immersion-schemes
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, §18, Proposition 18.4 (torsion coefficients)"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
---

## Definition

Let $f:X\to S$ be a separated morphism of finite type between Noetherian schemes. For a constructible torsion étale sheaf $\mathcal F$ on $X$, or for a bounded constructible $\mathbb Q_\ell$-complex $K$ when $\ell$ is invertible on $S$, choose a factorization $f=\overline f\circ j$ in which $j:X\hookrightarrow\overline X$ is an open immersion and $\overline f:\overline X\to S$ is proper. Define the derived direct image with proper support by $Rf_!\mathcal F:=R\overline f_*j_!\mathcal F$ in the torsion case and $Rf_!K:=R\overline f_*Rj_!K$ in the $\ell$-adic case. For an open immersion, $j_!$ is extension by zero: it restricts to the original sheaf on $X$ and has zero geometric stalks outside $X$. For a global degree-zero section on $\overline X$, its support means the closure of the geometric points where its germ is nonzero. Restriction to $X$ identifies global sections of $j_!\mathcal G$ with the sections of $\mathcal G$ on $X$ whose support is closed in $\overline X$ and contained in $X$, for either coefficient setting above.

## Definition references

[Milne, *Lectures on Étale Cohomology*, Chapter I, §18, Proposition 18.4, pp. 121–122 (torsion coefficients)](https://jmilne.org/math/CourseNotes/LEC.pdf)
