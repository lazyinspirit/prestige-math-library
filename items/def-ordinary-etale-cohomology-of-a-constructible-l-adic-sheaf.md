---
id: def-ordinary-etale-cohomology-of-a-constructible-l-adic-sheaf
kind: definition
title: "Ordinary étale cohomology of a constructible ℓ-adic sheaf"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-constructible-l-adic-sheaf-on-a-scheme
  - def-etale-morphism-schemes
  - def-derived-category-of-etale-sheaves
  - def-sheaf-cohomology-derived-global-sections
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
      locator: "Chapter I §§8, 18, ordinary derived étale cohomology and its compact-support comparison."
    - title: "Grothendieck et al., SGA 5, Exposé VI"
      url: "https://grothendiecksga.com/read/sga5/en/VI-1.html"
      locator: "§§1–2, derived categories and cohomology for étale sheaves and adic systems."
---

## Definition

Assume AC and use the fixed derived-global-sections convention. Let $X$ be a finite-type scheme over a field, let $\ell$ be invertible on $X$, and let $X_{\acute et}$ be the category of étale morphisms $U\to X$ with jointly surjective families as coverings. Let $K$ be a bounded constructible $\mathbb Q_\ell$-complex in the normalized adic derived category of sheaves on $X_{\acute et}$. The **ordinary étale cohomology** of $K$ is

$$H^i_{\acute et}(X,K):=H^i\!\left(R\Gamma(X_{\acute et},K)\right),$$

where $R\Gamma$ is the right-derived global-sections functor on the étale site and $H^i$ is the cohomology object of its cochain complex. This notation is relative to the specified normalized adic category; this definition does not assert finite-dimensionality, compatibility under changing an integral system, or comparison with a different rational adic model.

## Definition references

[[def-constructible-l-adic-sheaf-on-a-scheme]]

[[def-etale-morphism-schemes]]

[[def-derived-category-of-etale-sheaves]]

[[def-sheaf-cohomology-derived-global-sections]]

[[def-axiom-of-choice]]

[Milne, *Lectures on Étale Cohomology*, Chapter I §§8, 18](https://jmilne.org/math/CourseNotes/LEC.pdf)

[SGA 5, Exposé VI](https://grothendiecksga.com/read/sga5/en/VI-1.html)
