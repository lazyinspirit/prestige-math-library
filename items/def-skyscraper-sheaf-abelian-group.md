---
id: def-skyscraper-sheaf-abelian-group
kind: definition
title: "A skyscraper sheaf of abelian groups at a point"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sheaf-on-topological-space]
verification:
  audited: 2026-09-05
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Definition 6.27.1"
      url: "https://stacks.math.columbia.edu/tag/0099"
    - title: "Ravi Vakil, The Rising Sea, Example 2.2.12"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

Let $X$ be a topological space, let $x\in X$, and let $A$ be an abelian group.
The **skyscraper sheaf at $x$ with value $A$** is the sheaf
$$
i_{x,*}A
$$
defined on an open set $V \subseteq X$ by
$$(i_{x,*}A)(V)= \begin{cases} A,& x\in V,\\ 0,& x\notin V. \end{cases}$$
If $V' \subseteq V$ and both opens contain $x$, the restriction map is the
identity on $A$. If $x\notin V'$, the restriction map to $0$ is the unique zero
homomorphism.

Thus a skyscraper sheaf has the value $A$ precisely on opens that meet the
chosen point.
