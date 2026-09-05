---
id: def-zero-simplex-augmentation-and-reduced-singular-homology
kind: definition
title: "Augmentation at 0-simplices and reduced singular homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-singular-chain-complex-and-singular-homology]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: frontier-30
---

## Definition

Let $X$ be a topological space and let $G$ be an abelian group. The
**augmentation at 0-simplices** is the homomorphism
$$\varepsilon_X:C_0(X;G)\to G$$
defined by
$$\varepsilon_X(\sigma\otimes g)=g$$
for every singular $0$-simplex $\sigma:\Delta^0\to X$, and extended linearly.

The **reduced singular chain complex** $\widetilde C_\bullet(X;G)$ is obtained
from the singular chain complex by replacing degree $0$ with the kernel of the
augmentation:
$$\widetilde C_n(X;G):= \begin{cases} C_n(X;G),& n\geq 1,\\ \ker\varepsilon_X,& n=0,\\ 0,& n<0. \end{cases}$$
Its differential is the singular boundary in degrees $\geq 1$ and the zero map
$\widetilde C_0(X;G)\to 0$ in degree $0$.

The **reduced singular homology groups** are
$$\widetilde H_n^{\mathrm{sing}}(X;G):=H_n(\widetilde C_\bullet(X;G)).$$
For the empty space, this convention leaves $\widetilde C_0(\varnothing;G)=0$,
so $\widetilde H_n^{\mathrm{sing}}(\varnothing;G)=0$ for all $n\geq 0$.
