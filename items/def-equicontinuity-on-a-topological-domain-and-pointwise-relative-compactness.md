---
id: def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness
kind: definition
title: "Equicontinuity on a topological domain and pointwise relative compactness"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-neighbourhood-top, def-metric-space, def-compact-space, def-continuous-map-top, def-interior-closure-boundary-top]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Topology, second edition, Sections 45 and 47"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Definition

Let $X$ be a topological space, let $(Y,d)$ be a metric space, and let $\mathcal F\subseteq C(X,Y)$.

The family $\mathcal F$ is **equicontinuous at $x\in X$** if, for every $\varepsilon>0$, there is a neighbourhood $U$ of $x$ such that

$$d(f(y),f(x))<\varepsilon$$

for every $f\in\mathcal F$ and every $y\in U$. It is **equicontinuous** if it is equicontinuous at every $x\in X$. The same neighbourhood must serve every member of the family. The empty family is equicontinuous, and when $X=\varnothing$ the pointwise condition is vacuous.

For $x\in X$, write $\mathcal F(x):=\{f(x):f\in\mathcal F\}$. The family is **pointwise relatively compact** if the closure $\overline{\mathcal F(x)}$ is a compact subset of $Y$ for every $x\in X$. Thus an empty family is pointwise relatively compact because the empty set is compact, and an empty domain again makes the condition vacuous.
