---
id: def-smooth-proper-model-over-a-p-adic-dvr
kind: definition
title: Smooth proper models over a p-adic discrete valuation ring
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-scheme-over-base
  - def-smooth-morphism-schemes
  - def-proper-morphism
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part I, Chapter 7, Section 7.3
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
verification:
  precheck: n/a
---

## Definition

Let $K$ be a finite extension of $\mathbb Q_p$, let $\mathcal O_K$ be its valuation ring, and let $k$ be its residue field. For a $K$-scheme $X$, a **smooth proper $\mathcal O_K$-model** of $X$ is a proper smooth $\mathcal O_K$-scheme $\mathcal X$ together with an isomorphism $\mathcal X\times_{\operatorname{Spec}(\mathcal O_K)}\operatorname{Spec}(K)\cong X$. The scheme $X$ has **good reduction** over $K$ if it admits such a model. The special fiber of the model is $\mathcal X_0:=\mathcal X\times_{\operatorname{Spec}(\mathcal O_K)}\operatorname{Spec}(k)$; it is a proper smooth $k$-scheme.

## Definition references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-scheme-over-base]]

[[def-smooth-morphism-schemes]]

[[def-proper-morphism]]

[Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part I, Chapter 7, Section 7.3](https://math.stanford.edu/~conrad/papers/notes.pdf)
