---
id: def-kernel-cokernel-image-sheaves
kind: definition
title: "Kernel sheaves are objectwise, while cokernels and images are sheafified"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morphism-of-presheaves, def-sheafification, def-subsheaf]
verification:
  audited: 2026-09-05
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 17.3 and Section 6.26"
      url: "https://stacks.math.columbia.edu/tag/01AF"
    - title: "Ravi Vakil, The Rising Sea, Section 2.6"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

Let $\varphi:\mathcal F\to\mathcal G$ be a morphism of sheaves of abelian
groups on a topological space $X$.

The **kernel sheaf** is the subsheaf
$$
\ker(\varphi)\subseteq \mathcal F
$$
defined objectwise by
$$
\ker(\varphi)(U):=\ker\!\bigl(\varphi_U:\mathcal F(U)\to\mathcal G(U)\bigr).
$$

The **cokernel presheaf** is
$$
U\longmapsto \operatorname{coker}\!\bigl(\varphi_U:\mathcal F(U)\to\mathcal G(U)\bigr),
$$
and the **cokernel sheaf** $\operatorname{coker}(\varphi)$ is its
sheafification.

The **image presheaf** is
$$
U\longmapsto \operatorname{im}\!\bigl(\varphi_U:\mathcal F(U)\to\mathcal G(U)\bigr),
$$
and the **image sheaf** $\operatorname{im}(\varphi)$ is its sheafification.

For sheaves of modules on a ringed space, the same formulas are taken in the
corresponding module categories on each open set.
