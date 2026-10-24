---
id: def-unnormalized-homogeneous-bar-resolution
kind: definition
title: "The augmented unnormalized homogeneous bar complex"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integral-group-ring-module-and-trivial-module-convention]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Definition 6.5.1"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Definition

For $n\ge0$, let $B_n(G)$ be the free abelian group on
$(g_0,\ldots,g_n)\in G^{n+1}$, with diagonal left action
$h(g_0,\ldots,g_n)=(hg_0,\ldots,hg_n)$. For $n\ge1$, put
$$d_n=\sum_{i=0}^n(-1)^id_i:B_n(G)\longrightarrow B_{n-1}(G),$$
where $d_i$ deletes the $i$th vertex. In degree zero use the augmentation
$\varepsilon:B_0(G)\to\mathbb Z$, $\varepsilon(g_0)=1$, with trivial action
on $\mathbb Z$. Thus the augmented complex is
$\cdots\to B_1(G)\to B_0(G)\xrightarrow{\varepsilon}\mathbb Z\to0$; no
undefined object $B_{-1}$ or differential $d_0$ is used.
