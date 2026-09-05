---
id: def-direct-image-sheaf
kind: definition
title: "Direct image of a sheaf along a continuous map"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-presheaf-on-topological-space]
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 6.21: Continuous maps and sheaves"
      url: "https://stacks.math.columbia.edu/tag/008C"
    - title: "Ravi Vakil, The Rising Sea, Sections 2.2.H and 2.7"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

Let $f:X\to Y$ be a continuous map, and let $\mathcal F$ be a presheaf on $X$.
The **direct image presheaf**
$$f_*\mathcal F$$
on $Y$ is defined on an open set $V \subseteq Y$ by
$$
(f_*\mathcal F)(V):=\mathcal F(f^{-1}(V)).
$$
If $V' \subseteq V$, the restriction map
$$
(f_*\mathcal F)(V)\longrightarrow(f_*\mathcal F)(V')
$$
is the restriction map of $\mathcal F$ for the inclusion
$f^{-1}(V') \subseteq f^{-1}(V)$.

Thus direct image is just precomposition of the presheaf with the inverse-image
map on open sets.
