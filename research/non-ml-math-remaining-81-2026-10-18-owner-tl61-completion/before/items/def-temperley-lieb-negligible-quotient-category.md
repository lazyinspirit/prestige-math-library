---
id: def-temperley-lieb-negligible-quotient-category
kind: definition
title: "The Temperley–Lieb negligible quotient and TLJ completion"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-temperley-lieb-negligible-morphisms
  - lem-temperley-lieb-negligible-morphisms-form-tensor-ideal
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§§5.1–5.4, PDF pp. 60–65: the negligible quotient and additive/idempotent completion at a root of unity."
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§§1–2, printed pp. 2–5: the trace-radical quotient under the nonzero-parameter hypotheses."
verification:
  precheck: n/a
---

## Definition

Let $\ell\ge3$ be an integer, put $q=e^{\pi i/\ell}$ and $\delta=q+q^{-1}=2\cos(\pi/\ell)\ne0$, and use the category $\mathcal T_\delta$ and tensor ideal $\mathcal N_\delta$ from [[def-temperley-lieb-negligible-morphisms]] and [[lem-temperley-lieb-negligible-morphisms-form-tensor-ideal]]. The **negligible quotient category** $\mathcal T_\delta/\mathcal N_\delta$ has the same objects $n\in\mathbb N$ and morphism spaces
$$\operatorname{Hom}_{\mathcal T_\delta/\mathcal N_\delta}(m,n) =\operatorname{Hom}_{\mathcal T_\delta}(m,n)/\mathcal N_\delta(m,n).$$
Composition and tensor product are induced from $\mathcal T_\delta$; the tensor-ideal result makes both operations well-defined on these quotient spaces.

For a $\mathbb C$-linear monoidal category $\mathcal C$, its additive envelope has finite formal direct sums of objects and matrices of morphisms, with matrix composition and tensor product distributing over direct sums. Its idempotent completion has objects $(X,e)$ where $e\in\operatorname{End}_{\mathcal C}(X)$ and $e^2=e$; morphisms $(X,e)\to(Y,f)$ are morphisms $a:X\to Y$ satisfying $a=fae$, with inherited composition and tensor product. The **Temperley–Lieb–Jones category at order $\ell$** in this text means the idempotent completion of the additive envelope of $\mathcal T_\delta/\mathcal N_\delta$.

This is a definition of the quotient and completion only. It does not assert that the quotient is semisimple, that the completion is a fusion category, or that its simple objects have labels $0,\ldots,\ell-2$.
