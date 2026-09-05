---
id: def-sheaf-hom
kind: definition
title: "The internal Hom sheaf of two module sheaves"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-module-on-ringed-space, def-restriction-sheaf-open-subspace]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 17.22"
      url: "https://stacks.math.columbia.edu/tag/01CM"
    - title: "Ravi Vakil, The Rising Sea, Section 2.3.C"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

Let $(X,\mathcal O_X)$ be a ringed space, and let $\mathcal F,\mathcal G$ be
$\mathcal O_X$-modules. The **internal Hom sheaf**
$$
\mathcal Hom_{\mathcal O_X}(\mathcal F,\mathcal G)
$$
is the sheaf on $X$ defined by
$$U\longmapsto \operatorname{Hom}_{\mathcal O_X|_U}(\mathcal F|_U,\mathcal G|_U)$$
for each open set $U \subseteq X$.

Restriction to a smaller open set $V \subseteq U$ sends a morphism
$\mathcal F|_U\to\mathcal G|_U$ to its restriction
$\mathcal F|_V\to\mathcal G|_V$. Multiplication by a local section
$a\in \mathcal O_X(U)$ acts on a morphism $\varphi$ by either pre- or
post-composition with multiplication by $a$, giving
$\mathcal Hom_{\mathcal O_X}(\mathcal F,\mathcal G)$ the structure of an
$\mathcal O_X$-module.
