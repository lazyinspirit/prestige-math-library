---
id: def-cotensor-and-tensor
kind: definition
title: "Tensor and cotensor in a V-category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-enriched-category, thm-a-closed-monoidal-category-is-enriched-in-itself, def-set-weighted-limit-and-weighted-colimit, def-the-internal-hom-and-its-evaluation-morphism]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equations (3.42) and (3.43)"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.7"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Definition

Let $\mathcal B$ be a $\mathcal V$-category and assume $\mathcal V$ is
right closed, so that it is enriched in itself
([[thm-a-closed-monoidal-category-is-enriched-in-itself]]).

For $X\in\mathcal V$ and $C\in\mathcal B$:

- a **cotensor** of $C$ by $X$ is an object written $X\pitchfork C$ together
  with isomorphisms in $\mathcal V$
  $$\mathcal B(B,X\pitchfork C)\cong[X,\mathcal B(B,C)]$$
  natural in $B$;
- a **tensor** of $C$ by $X$ is an object written $X\otimes C$ together with
  isomorphisms in $\mathcal V$
  $$\mathcal B(X\otimes C,B)\cong[X,\mathcal B(C,B)]$$
  natural in $B$.

These are the one-object-indexed weighted limit and weighted colimit cases of
[[def-set-weighted-limit-and-weighted-colimit]] after replacing set-valued
weights by $\mathcal V$-valued ones and ordinary hom-sets by enriched
hom-objects.

In the special case $\mathcal V=\mathbf{Set}$, cotensors are the powers and
tensors are the copowers.
