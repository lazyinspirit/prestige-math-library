---
id: "def-real-singular-chain-complex"
kind: "definition"
title: "Real singular chain complex"
deps: ["def-continuous-singular-simplex-and-real-singular-chain-group", "def-singular-boundary-operator"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 item 2; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: "draft"
origin: "pipeline"
---

## Definition

For every topological space $X$, use [[def-continuous-singular-simplex-and-real-singular-chain-group]] and the real-linear instance of [[def-singular-boundary-operator]]:
$$\partial_k[\sigma]=\sum_{i=0}^k(-1)^i[\sigma\circ\delta_i]\quad(k\ge1),\qquad \partial_k=0\quad(k\le0).$$
Each sum is finite. The **real singular chain complex** is $C_\bullet(X;\mathbb R)$ with these differentials. In degree one, a path has boundary $[\sigma(1)]-[\sigma(0)]$.

For completeness, if $k\ge2$, in the expansion of $\partial_{k-1}\partial_k[\sigma]$, a pair of omitted vertices $i<j$ occurs as $\sigma\delta_j\delta_i$ and $\sigma\delta_i\delta_{j-1}$. The affine maps insert zeros at the same two positions and leave all other coordinates in order, so they are equal. Their coefficients $(-1)^{i+j}$ and $(-1)^{i+j-1}$ cancel. Every term belongs to exactly one such pair. Thus $\partial^2=0$ on every generator and hence on every finite chain. For $k=1$ the composite is zero because $\partial_0=0$; all lower groups or maps are zero. This verifies well-definedness as an unaugmented chain complex directly.

Repeated or constant faces are counted with their signed multiplicities; no nondegeneracy assumption is imposed. For a point the boundary coefficient is $\sum_{i=0}^k(-1)^i$, equal to $1$ for positive even $k$ and $0$ for odd $k$, while $\partial_0=0$. For the empty space the entire complex is zero. No choice is used.
