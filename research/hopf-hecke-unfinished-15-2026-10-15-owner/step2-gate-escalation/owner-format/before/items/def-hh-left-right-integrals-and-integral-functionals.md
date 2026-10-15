---
id: def-hh-left-right-integrals-and-integral-functionals
kind: definition
title: "Left and right integrals and integral functionals"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps: [def-hh-hopf-algebra-and-antipode, thm-hh-finite-dimensional-dual-hopf-algebra]
justified_by: [thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Paolo Saracco, Notes on Hopf Modules, Integrals and Frobenius Hopf Algebras (course notes, 2019)"
      url: "https://paolo.saracco.web.ulb.be/Material/2019-06-12_Structure%20Theorem_course%20notes.pdf"
      locator: "§4.1, Lemma 4.2 and §4.2, Theorem 4.5, PDF pp. 19–21: integral spaces and normalized left integrals"
    - title: "Erasmus Mini-Course on Hopf Algebras (lecture notes)"
      url: "https://www.fc.up.pt/pessoas/clomp/Adana-lectures.pdf"
      locator: "Lecture 6, Theorem 6.3, PDF pp. 15–16: left/right integral spaces in a finite-dimensional Hopf algebra and its dual"
verification:
  precheck: n/a
---

## Definition

Let $H$ be a Hopf algebra over a field $k$ as in [[def-hh-hopf-algebra-and-antipode]], with multiplication, unit $1$, counit $\varepsilon$, and antipode. The **left-integral space** and **right-integral space** of $H$ are
$$
\int_H^\ell=\{\Lambda\in H:h\Lambda=\varepsilon(h)\Lambda\text{ for every }h\in H\},\qquad
\int_H^r=\{\Lambda\in H:\Lambda h=\varepsilon(h)\Lambda\text{ for every }h\in H\}.
$$
Both are linear subspaces and include zero. When $H$ is finite-dimensional, its dual $H^*$ is a Hopf algebra. Its product is convolution $(f*g)(h)=\sum f(h_1)g(h_2)$ and its counit is $\varepsilon_{H^*}(f)=f(1)$. A **left integral functional** on $H$ means an element $\lambda\in H^*$ satisfying $f*\lambda=f(1)\lambda$ for every $f\in H^*$; a **right integral functional** satisfies $\lambda*f=f(1)\lambda$. Zero is allowed in both definitions; existence of a nonzero integral is a theorem, not part of the definition.
