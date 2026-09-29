---
id: def-support-module-sheaf
kind: definition
title: Support of a module sheaf
status: published
origin: pipeline
deps:
  - def-module-on-ringed-space
  - def-stalk-of-presheaf
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Definition

Let $(X,\mathcal O_X)$ be a ringed space and let $\mathcal F$ be an
$\mathcal O_X$-module ([[def-module-on-ringed-space]]). The **support** of
$\mathcal F$ is the set of points at which its stalk is nonzero,
$$\operatorname{Supp}(\mathcal F):=\{\,x\in X:\mathcal F_x\ne 0\,\}\subseteq X,$$
where $\mathcal F_x$ denotes the stalk of $\mathcal F$ at $x$
([[def-stalk-of-presheaf]]).

The support is thus a subset of $X$ determined by the stalks of $\mathcal F$;
it is not determined by the zero set of one chosen global or local section.
The definition is invariant under isomorphism: $\mathcal F\cong\mathcal G$ implies
$\operatorname{Supp}(\mathcal F)=\operatorname{Supp}(\mathcal G)$. One has
$\operatorname{Supp}(0)=\varnothing$, since the zero module has zero stalks,
and, whenever all structure stalks are nonzero (in particular on a scheme),
$\operatorname{Supp}(\mathcal O_X)=X$. For an open subscheme $U\subseteq X$
the support of the restriction is
$$\operatorname{Supp}(\mathcal F|_U)=\operatorname{Supp}(\mathcal F)\cap U,$$
because the stalk of the restriction at $x\in U$ is $\mathcal F_x$.
