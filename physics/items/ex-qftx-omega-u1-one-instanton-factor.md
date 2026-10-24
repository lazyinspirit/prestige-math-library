---
id: ex-qftx-omega-u1-one-instanton-factor
kind: example
title: "The Rank-One One-Instanton Mass Insertion"
status: draft
origin: pipeline
dependency_level: 7
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
axiom_base: "ZF + the choice strength inherited from the normalized equivariant Borel–Moore and topological Chern/Euler suppliers; this finite example uses no choice."
physical_scope: "A finite formal mass-inserted coefficient on the explicit rank-one, charge-one stable ADHM quotient. It is not a specialization of the adopted U(2) S4 model and makes no continuum path-integral claim."
deps:
  - lem-qftx-u1-one-instanton-adhm-space
dependency_roles:
  lem-qftx-u1-one-instanton-adhm-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Vasily Pestun, Localization of Gauge Theory on a Four-Sphere and Supersymmetric Wilson Loops"
      url: https://arxiv.org/pdf/0712.2824
      locator: "§5, equation (5.11): the general U(N) adjoint-hypermultiplet factor, its shifted tangent numerator, with the equivariant mass shifted by half the sum of the two rotation weights."
verification:
  precheck: pending
---

## Example

For the explicit $k=N=1$ stable scalar ADHM quotient and generic rotation weights with $\epsilon_1\epsilon_2\ne0$, extend the rotation torus by a flavor circle. The rotation weights $\epsilon_1,\epsilon_2$ and additive flavor mass $\widetilde m$ each have mass dimension one. Let $q$ be a dimensionless formal variable marking instanton charge. The unique fixed point has tangent weights $\epsilon_1,\epsilon_2$, so the charge-one contribution of the top-Chern-class insertion for the inverse flavor line is
$$q I_{1,1}^{\mathrm{adj}}(\widetilde m)=q\frac{(\epsilon_1-\widetilde m)(\epsilon_2-\widetilde m)}{\epsilon_1\epsilon_2}.$$
The diagram shows the unique one-box partition, with the first coordinate horizontal for $B_1$ and the second vertical for $B_2$. This is a finite formal rank-one calculation only; the adopted S4 postulate in this batch is specifically $U(2)$.

~~~tikz
\begin{tikzpicture}[x=0.9cm,y=0.9cm]
  \draw[step=1,gray] (0,0) grid (1,1);
  \draw[fill=blue!20] (0,0) rectangle (1,1);
  \node at (0.5,0.5) {$Y_1=\square$};
  \draw[->] (0,0) -- (1.6,0) node[right] {$n_1\;(B_1)$};
  \draw[->] (0,0) -- (0,1.6) node[above] {$n_2\;(B_2)$};
\end{tikzpicture}
~~~

## Example references

[[lem-qftx-u1-one-instanton-adhm-space|Explicit quotient and mass-inserted Borel–Moore coefficient]]

## Facts & Assumptions

**Given:** The explicit scalar quotient with $k=N=1$, rotation weights $\epsilon_1,\epsilon_2$, and formal flavor weight $\widetilde m$.

[F1] The current draft [[lem-qftx-u1-one-instanton-adhm-space]] has a complete authored local proof: its stable-locus map satisfies the classical geometric quotient conditions, the quotient is $\mathbb C^2$ with one fixed point and tangent weights $\epsilon_1,\epsilon_2$, and the Borel-descended top Chern insertion has the stated mass-shifted weight product and charge-one coefficient.

## Verification

1.1 The unique fixed point and its two tangent weights are the rank-one quotient data in [F1]. [given, F1]

2.1 The inverse flavor line shifts each tangent weight by $-\widetilde m$, so the insertion numerator is $(\epsilon_1-\widetilde m)(\epsilon_2-\widetilde m)$, while the tangent Euler denominator is $\epsilon_1\epsilon_2$. Dividing gives the displayed coefficient, and multiplication by $q$ records charge one. [given, F1, step 1.1, algebra] ∎
