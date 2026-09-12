---
id: def-additive-singular-cohomology-cross-product
kind: definition
title: Additive singular cohomology cross product
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [lem-singular-product-chain-equivalence-by-simplex-models, def-singular-cohomology-with-coefficients, def-singular-cochain-complex-with-coefficients]
justified_by: [lem-additive-singular-cohomology-cross-product-is-well-defined]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Miller, Construction 28.1, printed page 76; positive coboundary convention translated locally
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
---

## Definition

Let $R$ be a commutative unital ring, $X,Y$ spaces and $p,q\ge0$. Use the positive coboundary convention of [[def-singular-cochain-complex-with-coefficients]]. For homogeneous cochains $\varphi\in C^p(X;R)$ and $\psi\in C^q(Y;R)$, define a functional $J(\varphi,\psi)$ on the tensor chain complex by
$$J(\varphi,\psi)(x\otimes y)=\begin{cases}\varphi(x)\psi(y),&|x|=p,\ |y|=q,\\0,&|x|+|y|=p+q\text{ and }|x|\ne p.\end{cases}$$
Extend linearly. The formula is $R$-balanced, since multiplying either input chain by $r$ multiplies its value by $r$; commutativity of $R$ is used here. Each total degree is a finite direct sum.

Let $T:C(X\times Y;R)\to C(X;R)\otimes_R C(Y;R)$ be the natural chain homotopy inverse of shuffle supplied by [[lem-singular-product-chain-equivalence-by-simplex-models]]. For cocycles define the **additive singular cohomology cross product** by
$$[\varphi]\times[\psi]=[J(\varphi,\psi)T]\in H^{p+q}(X\times Y;R),$$
using [[def-singular-cohomology-with-coefficients]]. The next lemma [[lem-additive-singular-cohomology-cross-product-is-well-defined]] proves that the cochain is closed, that both changes of representatives yield coboundaries, that another chain homotopy inverse gives the same class, and that the resulting $R$-bilinear map is natural. These verifications precede every use of the quotient product.

This convention puts no extra $(-1)^{pq}$ in $J$: its differential obeys $\delta J(\varphi,\psi)=J(\delta\varphi,\psi)+(-1)^pJ(\varphi,\delta\psi)$ with positive coboundaries. It is an additive cross product only; cup products and cohomology-ring assertions are not part of this definition. Negative-degree inputs, empty factors or the zero ring give zero products. In degree zero, the vertex formula gives $(\varphi\times\psi)(x,y)=\varphi(x)\psi(y)$. No AC is required.
