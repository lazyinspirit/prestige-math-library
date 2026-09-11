---
id: "def-hurewicz-and-serre-fibrations"
kind: "definition"
title: "Hurewicz and serre fibrations"
deps: ["def-homotopy-relative-and-path-homotopy", "def-compactly-generated-conventions-for-based-homotopy"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter7 pp49–56; Chapter9 §3 p66 and §5 pp68–69"
    - title: "Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem4.41 pp375–377; Hopf example pp377–378; §4.3 pp405–410"
status: published
origin: "pipeline"
---

## Definition

Let $I=[0,1]$. A continuous map $p:E\to B$ has the **homotopy lifting property for $X$** if for every continuous $f:X\to E$ and $H:X\times I\to B$ satisfying $H(x,0)=p(f(x))$, there exists a continuous $\widetilde H:X\times I\to E$ such that
$$\widetilde H(x,0)=f(x),\qquad p(\widetilde H(x,t))=H(x,t).$$
Homotopies have the meaning of [[def-homotopy-relative-and-path-homotopy]]. Neither uniqueness nor stationarity over constant base paths is part of this condition.

A **Hurewicz fibration in ordinary spaces** has this property for every topological space $X$, with ordinary products. A **Serre fibration** has it for each finite-dimensional closed disk $D^n$, $n\ge0$; $D^0$ is one point. The relative CW formulation is established in the following proposition, with AC for arbitrary cell families.

In the CGWH convention of [[def-compactly-generated-conventions-for-based-homotopy]], a Hurewicz fibration tests every CGWH space and all constructions use k-products and kified subspaces. Products with $I$ have their ordinary topology. An assertion explicitly about all ordinary spaces uses the first convention, not merely the restricted test class. Disk tests agree in these conventions.

We do not impose surjectivity. For example the map from the empty space to any $B$ has the property: only the empty parameter space admits an initial map into its domain. Both conditions include prescribed-initial-point path lifting by taking $X=D^0$, so an image that meets a path component meets that entire component. For the unique map to an empty base the domain is empty. These are quantified definitions and use no choice principle.
