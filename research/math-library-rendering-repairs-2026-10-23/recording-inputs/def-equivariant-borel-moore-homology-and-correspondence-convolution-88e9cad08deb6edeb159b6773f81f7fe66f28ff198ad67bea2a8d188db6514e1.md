---
id: def-equivariant-borel-moore-homology-and-correspondence-convolution
kind: definition
title: "Equivariant Borel–Moore homology and oriented correspondence convolution"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [def-axiom-of-choice, def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom,
       lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports,
       lem-proper-stable-base-change,
       thm-constructible-six-functors-proper-base-change-and-verdier-duality]
justified_by: [thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "V. Ginzburg, Geometric methods in the representation theory of Hecke algebras and quantum groups, arXiv:math/9802004v3; 1997 Montreal lectures (57-page PDF)"
      url: "https://arxiv.org/pdf/math/9802004"
    - title: "M. Varagnolo and E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992 (complete article)"
      url: "https://arxiv.org/pdf/0901.3992"
    - title: "Y. Varshavsky, Lefschetz-Verdier trace formula, arXiv:math/0505564 (complete article)"
      url: "https://arxiv.org/pdf/math/0505564"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) as inherited from the equivariant
constructible and Borel-stabilization suppliers. Let $G=\prod_v\mathrm{GL}_{n_v}(\mathbb C)$,
let $k$ be a characteristic-zero field, and use bounded algebraically constructible complexes of
$k$-sheaves in the analytic topology, in the equivariant derived category
$D^b_{G,c}(-;k)$ of [[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]].
All functors are derived.

**Dualizing normalization and Borel–Moore homology.** The equivariant dualizing object is
normalized by $\omega_X^G|_X=\omega_X$, rather than by the dimension of the quotient stack; here
$\omega_X=a_X^!k$ is the ordinary constructible dualizing object and
$\omega_X^G\simeq k_X[2d]$ for a smooth complex $d$-dimensional $X$
([[thm-constructible-six-functors-proper-base-change-and-verdier-duality]]). Define
$$H_j^{\mathrm{BM},G}(X;k)=H_G^{-j}(X,\omega_X^G)=\operatorname{Hom}_{D^b_{G,c}(X;k)}(k_X,\omega_X^G[-j]).$$
Equivalently, use the general linear Stiefel approximations $U$ and their geometric quotients
supplied by [[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]],
with $b=\dim_{\mathbb C}U-\dim_{\mathbb C}G$. In each fixed degree, once the supplied
bounded-Hom comparison applies, the group is the stable value
$H_{j+2b}^{\mathrm{BM}}(X\times_GU;k)$. Comparison on products of sufficiently acyclic
resolutions makes it independent of the chosen such stage. Other free smooth models require
the same bounded-Hom and quotient hypotheses; freeness alone does not assert stabilization. Ordinary
Borel–Moore homology is the case $G=1$ in the same formula, i.e.
$H_j^{\mathrm{BM}}(X;k)=\operatorname{Hom}(k_X,\omega_X[-j])$, and the smooth complex orientation
gives $\omega_X=k_X[2d]$ for $X$ smooth of pure complex dimension $d$.

**Correspondences.** Let $f_i:X_i\to E$ be finitely many proper $G$-equivariant algebraic maps
with $X_i$ smooth of pure complex dimension $d_i$. Put $Z_{ij}=X_i\times_EX_j$ (reduced
analytically), $T_{ijk}=X_i\times_EX_j\times_EX_k$, and let $h:T_{ijk}\to Z_{ik}$ forget the
middle point; it is proper, being the base change of $f_j$
([[lem-proper-stable-base-change]]). The first coordinate is the source.
For $a\in H_p^{\mathrm{BM},G}(Z_{ij})$, $b\in H_q^{\mathrm{BM},G}(Z_{jk})$, define
$$a*b=h_*\Delta_{X_j}^{!}(a\boxtimes b)\in H_{p+q-2d_j}^{\mathrm{BM},G}(Z_{ik}).$$
Here $\Delta_{X_j}^{!}$ is the refined oriented middle-diagonal operation on supports of
[[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]]: it
restricts the external class to $T_{ijk}$ by the Thom class of the complex normal bundle $TX_j$
of $X_j\hookrightarrow X_j\times X_j$. It is defined on arbitrary closed supports; no
transversality of $Z_{ij}$ and $Z_{jk}$ is assumed. Proper pushforward is the dualizing trace.
The ordered coordinates are $(i,j,j,k)$, and the two middle factors are contracted without a
permutation. If intermediate indices differ, the product is set to zero. Put degree $d_i+d_j-p$
on the $(i,j)$ corner. The normalized diagonal class $[\Delta_{X_i}]$ has corner degree zero.

**Sheaf model.** The sheaf model of the refined Thom operation uses the exchange morphism
$v'^*u^!\to u'^!v^*$ for the middle Cartesian square: with $u:Z_{ij}\to X_j$,
$v:Z_{jk}\to X_j$, $T=Z_{ij}\times_{X_j}Z_{jk}$ and projections $v':T\to Z_{ij}$,
$u':T\to Z_{jk}$, the morphism is obtained as the adjunction mate of proper base change
$v^*u_!\xrightarrow{\sim}u'_!v'^*$. Explicitly, its value at $C$ is adjoint to
$u'_!v'^*u^!C\to v^*u_!u^!C\to v^*C$, the first map being inverse base change and the
second the exceptional counit. It is a morphism, not an asserted isomorphism for arbitrary supports.
Its orientation is fixed by the Thom class restricting to $+1$ on every positively
complex-oriented normal fiber. Agreement of this model with the stated refined geometric
operation, and compatibility with composition, are proved in
[[thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]] after the
foundational six-functor inputs are available.

**Well-formedness.** The definition is independent of the chosen sufficiently acyclic Stiefel stage
because the stable Borel value exists and the product-resolution comparisons are coherent by
[[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]]; the product is
defined because the refined middle-diagonal operation of
[[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]] is
defined on arbitrary closed supports and $h$ is proper, so its dualizing trace is available; the
degree bookkeeping is fixed by the pure complex dimension $d_j$ of the middle factor. The claim
that the sheaf model and the geometric operation agree, and that the product is compatible with
composition and units, is not assumed here: it is the content of
[[thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]], which is
recorded in `justified_by` rather than in `deps` because that theorem depends on this
definition. The Axiom of Choice is inherited through the cited suppliers, including proper
base-change stability; their descent, injective, Thom and Borel constructions declare it;
the definition itself introduces no further choice principle.


## Remarks

The right-hand square displays the middle matching in the source-first order.
Here $v'(x_i,x_j,x_k)=(x_i,x_j)$, $u'(x_i,x_j,x_k)=(x_j,x_k)$,
$u(x_i,x_j)=x_j$, $v(x_j,x_k)=x_j$, and $h(x_i,x_j,x_k)=(x_i,x_k)$.
Thus $uv'=vu'$ and $T_{ijk}=Z_{ij}\times_{X_j}Z_{jk}$; the arrow $h$ is
proper by the base-change description in the definition.

```tikzcd
[font=\LARGE, every label/.append style={font=\Large}, column sep=large, row sep=large]
Z_{ik} & T_{ijk} \arrow[l, "h"'] \arrow[r, "v'"] \arrow[d, "u'"'] & Z_{ij} \arrow[d, "u"] \\
& Z_{jk} \arrow[r, "v"'] & X_j
```

The same matching gives the following order of operations on Borel–Moore classes:

```tikzcd
[font=\LARGE, every label/.append style={font=\Large}, column sep=large, row sep=large]
H_{p+q}^{\mathrm{BM},G}(Z_{ij}\times Z_{jk})
\arrow[r, "\Delta_{X_j}^{!}"] &
H_{p+q-2d_j}^{\mathrm{BM},G}(T_{ijk})
\arrow[r, "h_*"] &
H_{p+q-2d_j}^{\mathrm{BM},G}(Z_{ik})
```

The input is $a\boxtimes b$, with ordered coordinates $(i,j,j,k)$.
The first arrow matches the middle pair using the positively complex-oriented
normal bundle $TX_j$ and lowers degree by $2d_j$; the second forgets the middle
point. The sheaf exchange for the right-hand square is precisely
$v'^*u^!\to u'^!v^*$, with no assertion that it is an isomorphism on arbitrary
supports. These diagrams only illustrate the definition; its well-formedness
and the cited compatibility proofs remain independent of the figures.
