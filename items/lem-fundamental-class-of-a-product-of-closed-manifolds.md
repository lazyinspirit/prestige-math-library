---
id: lem-fundamental-class-of-a-product-of-closed-manifolds
kind: lemma
title: "The fundamental class of a product is the cross product of the fundamental classes"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-fundamental-class-of-a-compact-oriented-manifold, def-product-orientation, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary, def-singular-chain-cross-product-on-generators, lem-singular-chain-cross-product-boundary-formula, prop-singular-chain-cross-products-are-natural, def-homology-cross-product-for-tensor-complexes, lem-the-kunneth-cross-product-map-is-well-defined-and-natural, prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise, thm-top-homology-characterizes-compact-orientable-manifolds]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 3.B, printed pp. 268-279: singular cross products and the Eilenberg-Zilber comparison; the evaluation argument is proved locally."
dependency_level: 0
---

## Statement

Let $M^m$ and $N^n$ be closed smooth manifolds. If $M$ and $N$ are oriented,
then with the product orientation ([[def-product-orientation]]) the fundamental
class of $M\times N$ is
$$[M\times N]=[M]\times[N]\in H_{m+n}(M\times N;\mathbb Z),$$
the homology cross product of the two fundamental classes. For the canonical
mod-two orientations the same identity holds in $H_{m+n}(M\times N;\mathbb F_2)$.
The identity is compatible with the componentwise definition of the fundamental
class on disjoint unions.

## Facts & Assumptions

**Given:** Closed smooth manifolds $M^m$ and $N^n$ with specified $R$-orientations, and $M\times N$ with their product orientation; write $\mu_x$ and $\nu_y$ for the local generators of the two orientations, and take all coefficients in a fixed commutative unital ring $R$ that is either $\mathbb Z$ or $\mathbb F_2$.

[F1] [[def-fundamental-class-of-a-compact-oriented-manifold]] defines $[M]\in H_m(M;R)$ as the unique class restricting at every point to the local generator of the specified $R$-orientation, gives the componentwise decomposition over the finitely many components of a compact manifold, and fixes the convention that in an oriented chart the local generator is the class of a positively oriented chart chain through the point.

[F2] [[def-product-orientation]] orients $V\oplus W$ by the tensor product of the two selected rays under the ordered determinant isomorphism $\det(V\oplus W)\cong\det V\otimes\det W$; via $T_{(x,y)}(M\times N)\cong T_xM\oplus T_yN$ this is the product orientation, whose ray at $(x,y)$ is the tensor of the rays of $\mu_x$ and $\nu_y$.

[F3] [[def-singular-chain-cross-product-on-generators]] expands $\sigma\times\tau$ as the alternating shuffle sum $\sum_{\theta}\operatorname{sgn}(\theta)\,(\sigma\times\tau)\circ\lambda_\theta$, and [[lem-singular-chain-cross-product-boundary-formula]] gives $\partial(a\times b)=\partial a\times b+(-1)^p a\times\partial b$ for $a\in C_p(X;\mathbb Z)$.

[F4] [[prop-singular-chain-cross-products-are-natural]]: $(f\times g)_\#(a\times b)=f_\#(a)\times g_\#(b)$ for continuous $f,g$.

[F5] [[def-homology-cross-product-for-tensor-complexes]] and [[lem-the-kunneth-cross-product-map-is-well-defined-and-natural]] make $[x]\times[y]=[x\otimes y]$ a well-defined natural pairing on homology.

[F6] [[thm-top-homology-characterizes-compact-orientable-manifolds]]: for a compact connected manifold, restriction of the top homology group to any local stalk is injective.

[F7] [[prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise]]: every manifold carries a canonical $\mathbb F_2$-orientation, and orientation data restrict to and glue over the components of a compact manifold.

[F8] [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]] gives the product smooth structure on $M\times N$; [[prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary]] gives $\partial(M\times N)=\partial M\times N\cup M\times\partial N$, so this boundary is empty for closed factors and the product orientation of [F2] orients the closed smooth manifold $M\times N$.

## Proof

1.1 Since $M$ and $N$ are closed, $M\times N$ is a closed smooth $(m+n)$-manifold with the product smooth structure and empty boundary [F8], and the product orientation of [F2] is an $R$-orientation of it. By [F1] the fundamental class $[M\times N]$ is the unique class in $H_{m+n}(M\times N;R)$ whose restriction at each point is the local generator attached to the ray of the product orientation, and [F5] makes the class $[M]\times[N]$ well defined. It therefore suffices to prove that for every $(x,y)$ the restriction of $[M]\times[N]$ to $H_{m+n}(M\times N,M\times N\setminus\{(x,y)\};R)$ is the local generator attached to the tensor ray of $\mu_x$ and $\nu_y$. [given, F1, F2, F5, F8]

1.2 Model computation. In $\mathbb R^m$ let $c$ be an affine $m$-simplex whose image contains $0$ in its interior and whose affine parametrization is orientation-preserving, and in $\mathbb R^n$ let $d$ be such an $n$-simplex; write $\rho_m,\rho_n,\rho_{m+n}$ for the positive local generators of the standard orientations. For $m,n>0$ choose the two simplices so that $(0,0)$ avoids the internal faces of their finite shuffle triangulation; this is possible by varying the two interior barycentric coordinates to avoid finitely many proper affine hyperplanes. The boundaries of $c$ and $d$ avoid the origin, so $c$ and $d$ are relative cycles representing $\rho_m$ and $\rho_n$, and by [F3] the boundary $\partial(c\times d)=\partial c\times d+(-1)^m c\times\partial d$ lies in $C((\mathbb R^m\setminus\{0\})\times\mathbb R^n)+C(\mathbb R^m\times(\mathbb R^n\setminus\{0\}))\subseteq C(\mathbb R^{m+n}\setminus\{0\})$, so $c\times d$ is a relative cycle for the pair $(\mathbb R^{m+n},\mathbb R^{m+n}\setminus\{0\})$. Its shuffle expansion is the sum of the terms $\operatorname{sgn}(\theta)\,(c\times d)\circ\lambda_\theta$ over all $(m,n)$-shuffles $\theta$ [F3]: the vertices of $\lambda_\theta$ are the successive vertices of the lattice path of $\theta$, so consecutive differences of its edge columns give the ordered coordinate increments of the path, with determinant $\operatorname{sgn}(\theta)$; subtracting successive columns does not change the determinant, so the coefficient $\operatorname{sgn}(\theta)$ makes every term positively oriented, and the images of these simplices have pairwise disjoint interiors and cover the product of the two simplex images, the standard lattice-path triangulation of a product simplex. Exactly one shuffle simplex contains the origin in its interior, and all other shuffle simplices avoid it. Its oriented class is therefore the positive local generator; equivalently $c\times d$ covers a neighbourhood of the origin exactly once, positively oriented, so by the chart convention of [F1] its class is the positive generator $\rho_{m+n}$ of the local group of $\mathbb R^{m+n}$ at the origin; that is, $\rho_m\times\rho_n=\rho_{m+n}$ for the standard, hence product, orientation. [given, F1, F3, algebra]

1.3 For relative cycles $c\in C_m(M,M\setminus\{x\};R)$ and $d\in C_n(N,N\setminus\{y\};R)$, the boundary formula makes $c\times d$ a relative cycle off $(x,y)$: its boundary terms are supported in $(M\setminus\{x\})\times N$ or $M\times(N\setminus\{y\})$. Changing $c$ by $\partial e$ changes the product by $\partial(e\times d)-(-1)^{m+1}e\times\partial d$, a relative boundary because the second term misses $y$; changing $d$ by $\partial f$ has the analogous effect, with the remaining term missing $x$. Chains already supported off $x$ or $y$ also produce chains off $(x,y)$. Thus the cross product descends to the local relative groups, and quotienting absolute cycles shows that the restriction of $[M]\times[N]$ is the cross product of their local restrictions. [F3, F4, F5]


2.1 First suppose $m,n>0$. Choose charts $\varphi:(U,x)\to(\mathbb R^m,0)$ and $\psi:(V,y)\to(\mathbb R^n,0)$, replacing either chart by its composition with a reflection of the corresponding Euclidean space if necessary, in the integral case so that $d\varphi_x$ and $d\psi_y$ carry the orientation rays of $M$ at $x$ and of $N$ at $y$ to the standard rays. Over $\mathbb F_2$ take any charts, since either sign gives the canonical local generator. In the integral case this also makes $d(\varphi\times\psi)_{(x,y)}=d\varphi_x\oplus d\psi_y$ carry the product ray to the standard ray of $\mathbb R^{m+n}=\mathbb R^m\times\mathbb R^n$ [F2]. The chart maps induce isomorphisms of the local pairs and, by naturality [F4, F5], carry the relative cross product of step 1.3 to the relative cross product in the models, while by the chart convention of [F1] the local generators $\mu_x$, $\nu_y$ correspond to the positive generators $\rho_m$, $\rho_n$ of the model local groups and the product-orientation generator to $\rho_{m+n}$. The required pointwise identity at $(x,y)$ is therefore exactly the model identity $\rho_m\times\rho_n=\rho_{m+n}$ proved in step 1.2. If a factor is zero-dimensional, its local fundamental class is its supplied sign times the point cycle (or the unique nonzero point cycle over $\mathbb F_2$). The point-factor shuffle has a single term; bilinearity carries that sign into the product local generator, so no nonexistent orientation-reversing zero-dimensional chart is needed. [given, F1, F2, F4, F5, step 1.2, step 1.3]

3.1 Steps 1.2, 1.3 and 2.1 show that the restriction of $[M]\times[N]$ at every point $(x,y)$ of $M\times N$ is the local generator of the product orientation, so the characterizing property of the fundamental class [F1] gives $[M\times N]=[M]\times[N]$ in $H_{m+n}(M\times N;R)$; this is the integral identity for $R=\mathbb Z$. For $R=\mathbb F_2$ the same shuffle formula has all signs equal to $1$, the local groups are $\mathbb F_2$ with the canonical orientation of [F7], and the computation of step 1.2 is unchanged, so the identity holds in $H_{m+n}(M\times N;\mathbb F_2)$ as well. For a disjoint union $M=\bigsqcup_i M_i$ the fundamental class is the sum of the component fundamental classes and the cross product is bilinear [F1, F5], so applying the identity to each component pair gives $[M\times N]=\sum_{i,j}[M_i\times N_j]=\bigl(\sum_i[M_i]\bigr)\times\bigl(\sum_j[N_j]\bigr)=[M]\times[N]$; this is the asserted compatibility with the componentwise definition, and by [F6] the same reduction would already follow from checking one point in each connected component. If $M$ or $N$ is empty then $M\times N$ is empty and both sides are the zero class in the zero group; if $m=0$ or $n=0$ the corresponding shuffle set has one element of sign $1$ and the computation of step 1.2 covers the point factors. [F1, F5, F6, F7, step 1.2, step 1.3, step 2.1] ∎
