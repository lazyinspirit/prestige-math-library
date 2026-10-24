---
id: def-sheaf-tensor-product
kind: definition
title: "Tensor product of sheaves of modules"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-module-on-ringed-space, def-sheafification]
verification:
  audited: 2026-09-05
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 17.16"
      url: "https://stacks.math.columbia.edu/tag/01CA"
    - title: "Ravi Vakil, The Rising Sea, Exercise 2.6.J(a)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

Let $(X,\mathcal O_X)$ be a ringed space, and let $\mathcal F,\mathcal G$ be
$\mathcal O_X$-modules. The **tensor-product presheaf**
$$
\mathcal F\otimes_{p,\mathcal O_X}\mathcal G
$$
is defined by
$$(\mathcal F\otimes_{p,\mathcal O_X}\mathcal G)(U) := \mathcal F(U)\otimes_{\mathcal O_X(U)}\mathcal G(U)$$
for each open set $U \subseteq X$, with restriction induced from the
restriction maps of $\mathcal F$ and $\mathcal G$.

The **tensor-product sheaf** is the sheafification of this presheaf:
$$\mathcal F\otimes_{\mathcal O_X}\mathcal G := a(\mathcal F\otimes_{p,\mathcal O_X}\mathcal G).$$
