---
id: def-modc-relative-deligne-product
kind: definition
title: Relative Deligne product in the braided module 2-category
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-semisimple-module-category-over-fusion-category
  - def-braided-monoidal-category
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Construction 2.1.19
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet, The Relative Deligne Tensor Product over Pointed Braided Fusion Categories, §1
      url: https://arxiv.org/pdf/2203.10331
---

## Definition

Let $\mathcal C$ be a braided fusion category and let $\mathcal M,\mathcal N$ be finite semisimple right $\mathcal C$-module categories. A **relative Deligne product** $\mathcal M\boxtimes_{\mathcal C}\mathcal N$ in $\operatorname{Mod}(\mathcal C)$ means a finite semisimple right $\mathcal C$-module category $\mathcal P$ equipped with an exact bilinear functor $b:\mathcal M\times\mathcal N\to\mathcal P$ that is balanced over the middle $\mathcal C$-action and compatible with the outer right $\mathcal C$-action, and is universal among such functors: for every finite semisimple right $\mathcal C$-module category $\mathcal D$, composition with $b$ gives an equivalence between right $\mathcal C$-module functors $\mathcal P\to\mathcal D$ and exact bilinear middle-balanced right $\mathcal C$-module functors $\mathcal M\times\mathcal N\to\mathcal D$.

For the balancing convention, a right module category $\mathcal N$ is regarded as a left module category by $X\triangleright n:=n\odot X$. Its left module associator $(X\otimes Y)\triangleright n\to X\triangleright(Y\triangleright n)$ is the composite of $n\odot c_{Y,X}^{-1}$ with the inverse right-module associator. “Balanced” means that $b(m\odot X,n)\cong b(m,X\triangleright n)$ naturally in all variables, compatibly with the unit and associativity constraints. This definition fixes the universal property and the braiding convention; it does not assert that a product exists.
