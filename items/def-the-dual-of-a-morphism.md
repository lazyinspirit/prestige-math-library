---
id: def-the-dual-of-a-morphism
kind: definition
title: "The dual of a morphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-dual-and-right-dual-object]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Section 2.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "nLab, rigid monoidal category"
      url: "https://ncatlab.org/nlab/show/rigid+monoidal+category"
---

## Definition

Assume chosen left duals $X^\vee$ and $Y^\vee$ of objects $X$ and $Y$. For a
morphism $f:X\to Y$, its **left dual morphism**

$$f^\vee:Y^\vee\to X^\vee$$

is the composite

$$Y^\vee\xrightarrow{\rho^{-1}}Y^\vee\otimes\mathbf 1\xrightarrow{1\otimes\operatorname{coev}_X}Y^\vee\otimes(X\otimes X^\vee)\xrightarrow{\alpha^{-1}}(Y^\vee\otimes X)\otimes X^\vee\xrightarrow{(1\otimes f)\otimes1}(Y^\vee\otimes Y)\otimes X^\vee\xrightarrow{\operatorname{ev}_Y\otimes1}\mathbf 1\otimes X^\vee\xrightarrow{\lambda}X^\vee.$$

Equivalently, $f^\vee$ is the unique morphism making the transpose squares with
evaluation and coevaluation commute. The right dual of a morphism is defined by
the mirrored formula once right duals are chosen.
