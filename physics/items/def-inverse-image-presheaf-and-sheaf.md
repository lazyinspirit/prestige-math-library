---
id: def-inverse-image-presheaf-and-sheaf
kind: definition
title: "Inverse image presheaf and inverse image sheaf"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-presheaf-on-topological-space, def-sheafification]
verification:
  audited: 2026-09-05
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Lemma 6.21.3 and the definition after it"
      url: "https://stacks.math.columbia.edu/tag/008C"
    - title: "Ravi Vakil, The Rising Sea, Section 2.7.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

Let $f:X\to Y$ be a continuous map, and let $\mathcal G$ be a presheaf on $Y$.
The **inverse-image presheaf**
$$
f_{\mathrm p}\mathcal G
$$
on $X$ is defined by
$$
(f_{\mathrm p}\mathcal G)(U):=\varinjlim_{f(U)\subseteq V}\mathcal G(V),
$$
where $V$ runs over the open neighbourhoods of $f(U)$ in $Y$, ordered by
reverse inclusion. If $U' \subseteq U$, then every neighbourhood of $f(U)$ is a
neighbourhood of $f(U')$, so there is a natural restriction map
$(f_{\mathrm p}\mathcal G)(U)\to(f_{\mathrm p}\mathcal G)(U')$.

The **inverse image sheaf** of a sheaf $\mathcal G$ on $Y$ is the sheafification
of this presheaf:
$$
f^{-1}\mathcal G:=a(f_{\mathrm p}\mathcal G).
$$

When $U$ is open in $X$ and $V$ is an open set of $Y$ with $f(U)\subseteq V$,
there is a canonical map
$$
\mathcal G(V)\longrightarrow(f_{\mathrm p}\mathcal G)(U)
$$
into the colimit class represented by $V$.
