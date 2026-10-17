---
id: def-barycenter-and-affine-cone-on-a-singular-chain
kind: definition
title: "Barycenter and affine cone"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-singular-simplex-and-singular-chain-group-with-coefficients, def-singular-boundary-operator]
verification:
  audited: 2026-09-06
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 2.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Definition

Let $G$ be an abelian group and $n\ge0$. The barycenter of the ordered standard $n$-simplex is $b_n=(1/(n+1),\ldots,1/(n+1))$. An affine singular $m$-simplex in $\Delta^n$ is determined by its ordered vertices $w_0,\ldots,w_m\in\Delta^n$; write it as $[w_0,\ldots,w_m]$. Define its **affine cone** by
$$b_n[w_0,\ldots,w_m]=[b_n,w_0,\ldots,w_m],$$
and extend by tensoring with $\operatorname{id}_G$ to finite affine chains. The apex is the first vertex. Repeated vertices are allowed and remain singular simplices; no quotient by degenerate simplices is being taken.

For a singular simplex $\sigma:\Delta^n\to X$ and a supplied affine chain $\widetilde z$ in $\Delta^n$, define the **affine cone along $\sigma$** by
$$b_\sigma\widetilde z:=\sigma_\#(b_n\widetilde z).$$
Here $\sigma_\#$ means composition of each affine simplex with $\sigma$, with its coefficient unchanged. The lift $\widetilde z$, not just its image chain in $X$, is part of the input. It may lie anywhere in the convex simplex, including its boundary. In the recursive notation $b_\sigma S(\partial\sigma)$, the supplied lift is the chain $S(\partial\iota_n)$ in $\partial\Delta^n$, where $\iota_n$ is the identity simplex.

With the ordinary boundary of [[def-singular-boundary-operator]], the orientation formulas are, for $m\ge1$,
$$\partial(b_\sigma\widetilde z)=\sigma_\#\widetilde z-b_\sigma(\partial\widetilde z),$$
and for $m=0$,
$$\partial(b_\sigma\widetilde z)=\sigma_\#\widetilde z-[\sigma(b_n)]\otimes\varepsilon(\widetilde z),$$
where $\varepsilon(\sum_j[w_j]\otimes g_j)=\sum_j g_j$. The first formula follows by deleting the first cone vertex and then the successive base vertices with alternating signs; the second follows from $\partial[b_n,w]=[w]-[b_n]$. Thus in degree zero the formula without the extra term holds only when the total coefficient is zero. In particular it applies to the subdivided boundary of a $1$-simplex, whose endpoint coefficients sum to zero. These formulas do not change the library's ordinary degree-zero boundary or its reduced-homology convention.
