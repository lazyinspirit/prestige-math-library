---
id: "def-singular-cup-product-on-cochains"
kind: "definition"
title: "Singular cup product on cochains"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-alexander-whitney-diagonal-approximation","def-additive-singular-cohomology-cross-product","def-singular-cochain-complex-with-coefficients","thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses","lem-additive-singular-cohomology-cross-product-is-well-defined"]
sources:
  references:
    - title: Hatcher §3.2, Cup Product; Miller Construction 28.1
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $X$ be a space, let $R$ be a commutative unital ring, and use the positive coboundary $\delta\varphi=\varphi\partial$ of [[def-singular-cochain-complex-with-coefficients]]. For $p,q\ge0$ and cochains $\varphi\in C^p(X;R)$, $\psi\in C^q(X;R)$, their **cup product** is
$$(\varphi\smile\psi)(\sigma)=\varphi(\sigma[0,\ldots,p])\,\psi(\sigma[p,\ldots,p+q])\qquad(\sigma:\Delta^{p+q}\to X).$$
Extend from simplex generators $R$-linearly. The product is $R$-bilinear in the cochains by distributivity and commutativity in $R$. Zero or negative-degree inputs give zero.

With $J(\varphi,\psi)$ the tensor functional of [[def-additive-singular-cohomology-cross-product]] and $A=\operatorname{AW}$ from [[def-alexander-whitney-diagonal-approximation]], this is exactly $J(\varphi,\psi)A\Delta_\#$. Indeed only the cut of bidegree $(p,q)$ survives. Equivalently, define the AW external **cochain** by $J(\varphi,\psi)A$ and pull it back along the diagonal. There is no extra cochain sign.

The earlier additive **cohomology** cross product was expressed through a specified shuffle inverse $T$. The comparison with it is an equality of classes: [[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]] constructs $K$ with $A-T=dK+Kd$. For cocycles, [[lem-additive-singular-cohomology-cross-product-is-well-defined]] gives $Jd=0$, hence
$$J(A-T)\Delta_\#=JKd\Delta_\#=\delta(JK\Delta_\#).$$
Here postcomposition with the diagonal commutes with boundary, as proved in the diagonal definition. Thus the AW cup class equals diagonal pullback of the earlier external product; equality of the two chosen external cochains is not required. At total degree zero the displayed primitive is zero and the identity is literal. The same tensor-functional identity gives $\delta(JA\Delta_\#)=0$ for cocycles, so the compared classes exist.

For degree-zero cochains the formula on a vertex is ordinary multiplication of their values. A constant cochain of value $1$ multiplies any cochain on either side without changing it, including on disconnected spaces. On empty $X$ or over $R=0$ all cochains and products are zero. Face restrictions make sense for every singular simplex, including degenerate ones. A bare abelian coefficient group has no specified multiplication to insert in this formula. No AC or selection of representatives is used in this definition or comparison.
