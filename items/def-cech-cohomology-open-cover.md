---
id: "def-cech-cohomology-open-cover"
kind: "definition"
title: "Fixed-cover Čech cohomology"
status: draft
origin: pipeline
deps: [def-cech-cochain-complex-open-cover, lem-cech-differential-squares-zero, def-cohomology-object-of-a-cochain-complex]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Definition

Let $X$ be a topological space, $\mathcal F$ a sheaf of abelian groups on $X$,
and $\mathcal U=(U_i)_{i\in I}$ an open cover indexed by a linearly ordered set,
with ordered Čech cochain complex $\bigl(C^\bullet(\mathcal U,\mathcal F),
\delta^\bullet\bigr)$ ([[def-cech-cochain-complex-open-cover]],
[[lem-cech-differential-squares-zero]]). The **Čech cohomology of the fixed
cover $\mathcal U$ with values in $\mathcal F$** is
$$\check H^p(\mathcal U,\mathcal F) :=\ker\bigl(\delta^p:C^p(\mathcal U,\mathcal F)\to C^{p+1}(\mathcal U,\mathcal F)\bigr) \Big/\operatorname{im}\bigl(\delta^{p-1}:C^{p-1}(\mathcal U,\mathcal F)\to C^p(\mathcal U,\mathcal F)\bigr),$$
the $p$-th cohomology group of the cochain complex
$\bigl(C^\bullet(\mathcal U,\mathcal F),\delta^\bullet\bigr)$ in the sense of
[[def-cohomology-object-of-a-cochain-complex]]. Since $C^{-1}(\mathcal U,
\mathcal F)=0$ and $\delta^{-1}=0$, one has $\check H^0(\mathcal U,\mathcal F)
=\ker(\delta^0)$, and for $p<0$ the group $\check H^p(\mathcal U,\mathcal F)$
is $0$ because $C^p=0$, so both the kernel in degree $p$ and the image in degree $p$ are zero. A cochain in
$\ker(\delta^p)$ is called a **Čech $p$-cocycle** and a cochain in
$\operatorname{im}(\delta^{p-1})$ a **Čech $p$-coboundary**.
