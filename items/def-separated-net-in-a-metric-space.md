---
id: def-separated-net-in-a-metric-space
kind: definition
title: "Separated nets in a metric space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-space, def-metric-bounded-diameter, def-metric-interior-closure-boundary]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory, Section 8.1"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---

## Definition

Let $(X,d)$ be a metric space and let $A \subseteq X$.

For a real $\delta > 0$, the subset $A$ is **$\delta$-separated** if

$$d(a,a') \ge \delta \qquad \text{for all distinct } a,a' \in A.$$

For a real $R \ge 0$, the subset $A$ is an **$R$-net** in $X$ if for every
$x\in X$ there is an $a\in A$ with $d(x,a)\le R$. For nonempty $A$ this is
equivalent, after enlarging $R$ if needed, to a uniform bound on the
point-to-set distance of [[def-metric-bounded-diameter]]. The empty subset is
therefore an $R$-net exactly when $X$ is empty.

A **separated net** in $X$ is a subset that is $\delta$-separated for some
$\delta > 0$ and is an $R$-net for some $R \ge 0$.
