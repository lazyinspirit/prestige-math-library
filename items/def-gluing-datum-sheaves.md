---
id: def-gluing-datum-sheaves
kind: definition
title: "A gluing datum for sheaves on an open cover"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-restriction-sheaf-open-subspace]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 26.14"
      url: "https://stacks.math.columbia.edu/tag/01JA"
    - title: "Ravi Vakil, The Rising Sea, Section 2.5.D"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

Let $X$ be a topological space with an open cover $X=\bigcup_i U_i$. A
**gluing datum for sheaves on this cover** consists of

1. a sheaf $\mathcal F_i$ on each open set $U_i$, and
2. for each pair $(i,j)$, an isomorphism of sheaves on $U_i\cap U_j$,
   $$
   \varphi_{ij}:\mathcal F_i|_{U_i\cap U_j}\xrightarrow{\ \cong\ }\mathcal F_j|_{U_i\cap U_j},
   $$

such that

1. $\varphi_{ii}=\operatorname{id}_{\mathcal F_i}$, and
2. on every triple overlap $U_i\cap U_j\cap U_k$ one has
   $$
   \varphi_{jk}\circ\varphi_{ij}=\varphi_{ik}.
   $$

The same definition applies to sheaves of abelian groups, rings, or modules.
