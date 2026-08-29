---
id: cex-two-noncompatible-atlases-on-the-real-line
kind: counterexample
title: "Two noncompatible atlases on the real line"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smoothly-compatible-charts, def-smooth-atlas,
       ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Statement refuted

Any two atlases on the same topological manifold are smoothly compatible.

## Facts & Assumptions

**Given:** The real line with the two singleton atlases $\mathcal A=\{(\mathbb R,\operatorname{id})\}$ and $\mathcal B=\{(\mathbb R,\psi)\}$, where $\psi(x)=x^3$.

[F1] The real line is a smooth manifold, so the two displayed charts are charts on one and the same manifold ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]]).

[F2] A smooth atlas is a covering family of pairwise smoothly compatible charts ([[def-smooth-atlas]]).

[F3] Smooth compatibility requires both transition directions to be smooth ([[def-smoothly-compatible-charts]]).

## Counterexample

**Proof technique:** direct.

1.1 Each singleton family $\mathcal A$ and $\mathcal B$ covers $\mathbb R$, so [F1, F2] by [F2] each is an atlas provided its single chart is legitimate, and [F1] supplies that legitimacy. [F1, F2]

2.1 The transition $\psi\circ\operatorname{id}^{-1}(x)=x^3$ is smooth, but the [F3, step 1.1] reverse transition $\operatorname{id}\circ\psi^{-1}(x)=x^{1/3}$ is not differentiable at $0$. Hence [F3] says the two charts are not compatible. [F3, step 1.1]

3.1 Therefore $\mathcal A$ and $\mathcal B$ are atlases on the same manifold [step 2.1] that are not compatible, which refutes the statement. [step 2.1] ∎
