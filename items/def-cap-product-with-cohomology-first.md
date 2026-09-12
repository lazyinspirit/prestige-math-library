---
id: "def-cap-product-with-cohomology-first"
kind: "definition"
title: "Cap product with cohomology written first"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-singular-cup-product-on-cochains","def-singular-simplex-and-singular-chain-group-with-coefficients"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher §3.3, Cap Product; Miller Lecture 34
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $X$ be a space and $R$ a commutative unital ring. For $p,n\ge0$, $\varphi\in C^p(X;R)$, and a singular $n$-simplex $\sigma$, define
$$\varphi\cap\sigma=\begin{cases}\varphi(\sigma[0,\ldots,p])\,\sigma[p,\ldots,n],&n\ge p,\\0,&n<p.\end{cases}$$
Extend $R$-bilinearly in $\varphi$ and the finite chains of [[def-singular-simplex-and-singular-chain-group-with-coefficients]]. An $R$-linear cochain is a function on simplex generators; each value multiplies one specified back-face generator. Thus the formula is well-defined on finite formal chains and is $R$-balanced in its two inputs. It gives
$$C^p(X;R)\otimes_R C_n(X;R)\longrightarrow C_{n-p}(X;R),$$
with negative chain groups zero. This is the **cap product with cohomology first**: evaluate on the front face and retain the back face.

The face convention is the same as [[def-singular-cup-product-on-cochains]]. In terms of its Alexander–Whitney diagonal $D_X$, cap is the bidegree-$(p,n-p)$ part of $D_X$, followed by evaluation of the first factor by $\varphi$. There is no additional sign in this evaluation. Subsequent boundary and projection identities use this order.

For $p=0$, this multiplies a simplex by the value of $\varphi$ at its first vertex; in particular the constant value-one cochain acts as the identity on chains. For $p=n$, it returns $\varphi(\sigma)$ times the last vertex, a degree-zero chain, whose boundary is zero. For $p>n$ it is zero by definition. On a degenerate simplex the same face formula applies; unnormalized chains retain these generators. Empty $X$, zero inputs and the zero ring give zero maps. The construction also applies to the higher singular simplices of a point and requires no AC.
