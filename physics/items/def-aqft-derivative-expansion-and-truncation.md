---
id: def-aqft-derivative-expansion-and-truncation
kind: definition
domain: physics
library: physics
title: Finite-regulator derivative expansion and truncation
status: draft
origin: pipeline
dependency_level: 3
deps:
  - def-aqft-model-and-scale-data
  - def-aqft-wilsonian-action
justified_by: []
forward_refs: []
dependency_roles:
  def-aqft-model-and-scale-data: formulation-prerequisite
  def-aqft-wilsonian-action: formulation-prerequisite
physical_scope: A finite-range derivative-counting convention for the positive Gaussian heavy-sector kernel; it asserts no generic continuum remainder or convergence.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: David B. Kaplan, Five lectures on effective field theory
      url: https://arxiv.org/pdf/nucl-th/0510023
      locator: §§1.1–1.2, printed pp. 3–7, local-operator expansion and scaling dimensions.
    - title: C. P. Burgess, Introduction to Effective Field Theory
      url: https://arxiv.org/pdf/hep-th/0701053
      locator: §2.2.4, printed pp. 24–25, the model-specific tree-level expansion in inverse powers of M.
---

## Definition

For the finite undirected graph $\Gamma=(X,E_\Gamma)$, define $d_\Gamma(x,y)$ as the least number of edges in a path from $x$ to $y$, and set $d_\Gamma(x,y)=+\infty$ if no path exists. Concatenating paths gives the triangle inequality for this extended distance. Identify $\mathbb R^X$ with real coordinate vectors indexed by $X$; for a matrix $B$ on this space, $B_{xy}$ denotes its row-$x$, column-$y$ entry in the standard coordinate basis. For an integer $r\ge0$, say that $B$ has range at most $r$ when $B_{xy}=0$ whenever $d_\Gamma(x,y)>r$. The positive heavy-sector matrix $A$ from the model data has range at most one. A derivative expansion of its inverse kernel is the formal operator series

$$
(M^2I+A)^{-1}\sim M^{-2}\sum_{r=0}^{\infty}(-A/M^2)^r.
$$

Its order-$N$ truncation, for an integer $N\ge0$, is the finite operator

$$
S_N:=M^{-2}\sum_{r=0}^{N}(-A/M^2)^r.
$$

It has range at most $N$ in this regulator. For a source $J$ supported in the spectral interval $[0,E^2]$ of $A$, the dimensionless power-counting parameter is $E/M$. This definition is an organized finite-order approximation; it does not assert convergence for unrestricted sources, a generic error bound, or a continuum local-operator expansion. The positive Gaussian theorem supplies a remainder bound only under its exact hypotheses.

## Definition references

[[def-aqft-model-and-scale-data]]

[[def-aqft-wilsonian-action]]

## Facts & Assumptions

**Given:** The finite graph $\Gamma=(X,E_\Gamma)$ and range-one matrix $A$ from the model-data definition, and the finite-regulator Wilsonian action convention.

[F1] [[def-aqft-model-and-scale-data]]: $X$ is finite, $d_\Gamma$ is graph distance, and the real symmetric matrix $A$ vanishes when $d_\Gamma(x,y)>1$. The extended shortest-path convention and standard coordinate entries used here are fixed in this Definition.

[F2] [[def-aqft-wilsonian-action]]: the Wilsonian action is defined by the finite high-coordinate integral while the retained coordinates are held fixed.

## Proof

**Proof technique:** direct matrix-range induction.

**Given:** The finite graph and matrix hypotheses in the Definition.

1.1 The identity $A^0=I$ has range zero. If $A^r$ has range at most $r$, then $(A^{r+1})_{xy}=\sum_{z\in X}(A^r)_{xz}A_{zy}$. A nonzero summand requires $d_\Gamma(x,z)\le r$ and $d_\Gamma(z,y)\le1$. When both distances are finite, concatenating the corresponding paths gives $d_\Gamma(x,y)\le r+1$; if either is infinite, the summand is zero by the range hypotheses. Induction yields range at most $r$ for every $A^r$. [given, F1, algebra]

2.1 Each term of $S_N$ is a scalar multiple of $A^r$ with $r\le N$. Therefore every matrix entry of $S_N$ vanishes when $d_\Gamma(x,y)>N$. It is a finite-range approximation to the finite-regulator Wilsonian kernel; no convergence or generic remainder follows from this range calculation. [given, F1, F2, step 1.1, algebra] ∎
