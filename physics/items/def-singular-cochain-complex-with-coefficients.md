---
id: def-singular-cochain-complex-with-coefficients
kind: definition
title: Singular cochain complex with coefficients
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-singular-chain-complex-and-singular-homology, def-singular-simplex-and-singular-chain-group-with-coefficients, def-singular-boundary-operator]
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
    - title: Hatcher, section 3.1, Cohomology of Spaces, printed pages 197–198
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Definition

Let $X$ be any topological space and $G$ an abelian group. Its **singular cochains with coefficients in $G$** are
$$C^n(X;G)=\operatorname{Hom}_{\mathbb Z}(C_n(X;\mathbb Z),G)\quad(n\ge0),\qquad C^n(X;G)=0\quad(n<0),$$
where the chains are those of [[def-singular-chain-complex-and-singular-homology]]. Addition and negatives of homomorphisms are pointwise. The **coboundary** is
$$\delta^n:C^n(X;G)\to C^{n+1}(X;G),\qquad \delta^n\varphi=\varphi\circ\partial_{n+1}$$
for $n\ge0$, and is zero for $n<0$. Composition with the homomorphism [[def-singular-boundary-operator|$\partial_{n+1}$]] is additive, so this is a homomorphism. The sign convention is positive: there is no extra degree sign on this composite. On a singular $(n+1)$-simplex it says
$$\delta^n\varphi(\sigma)=\sum_{i=0}^{n+1}(-1)^i\varphi(\sigma\circ\delta_i),$$
where $\delta_i$ denotes the affine face map, distinct from the superscripted coboundary. In particular $\delta^0\varphi$ on an oriented path is its endpoint value minus its initial value.

By [[def-singular-simplex-and-singular-chain-group-with-coefficients]], the integer chains are finite sums on the specified simplex set $S_n(X)$. Thus a cochain is equivalently an arbitrary function $S_n(X)\to G$: the extension sends $\sum_\sigma a_\sigma\sigma$ to $\sum_\sigma a_\sigma\varphi(\sigma)$. The sum is finite and the formal coefficients are unique. The cochain need not have finite support.

For a commutative unital ring $R$ and an $R$-module $G$, there is a canonical identification
$$C^n(X;G)\cong\operatorname{Hom}_R(C_n(X;R),G).$$
Indeed the given chain convention is $C_n(X;R)=C_n(X;\mathbb Z)\otimes_{\mathbb Z}R$. A homomorphism $\varphi$ on integer chains defines an $R$-linear map by $c\otimes r\mapsto r\varphi(c)$; the defining additive and integer-balanced tensor relations are preserved. Conversely evaluate an $R$-linear map on $c\otimes1$. These operations are inverse since $c\otimes r=r(c\otimes1)$, and they intertwine the two coboundaries because the coefficient boundary is $\partial\otimes1$. The construction also covers the zero ring with its unital zero module.

The resulting graded group and coboundary are called the **singular cochain complex**. The square-zero identity follows by precomposition with $\partial^2=0$ in the chain complex and is spelled out in the next lemma. If $X$ is empty there are no singular simplices, so every cochain group is zero; if $G=0$ the same is true. The extension and tensor formulas are uniquely specified and require no AC.
