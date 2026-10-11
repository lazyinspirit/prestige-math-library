---
id: def-equivariant-borel-moore-homology-and-correspondence-convolution
kind: definition
title: "Equivariant Borel–Moore homology and oriented correspondence convolution"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [def-axiom-of-choice, def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom,
       lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports,
       thm-constructible-six-functors-proper-base-change-and-verdier-duality]
justified_by: [thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "V. Ginzburg, Geometric methods in representation theory, arXiv:math/9802004; lecture notes for the 1997 summer school (complete 30-page PDF)"
      url: "https://arxiv.org/pdf/math/9802004"
    - title: "M. Varagnolo and E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992 (complete article)"
      url: "https://arxiv.org/pdf/0901.3992"
    - title: "Y. Varshavsky, Lefschetz-Verdier trace formula, arXiv:math/0505564 (complete article)"
      url: "https://arxiv.org/pdf/0505564"
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
Equivalently, for a free smooth approximation: a $G$-invariant open subset $U$ of a
finite-dimensional complex $G$-representation on which $G$ acts freely, and
$b=\dim_{\mathbb C}U-\dim_{\mathbb C}G$, the group is the eventual stable value
$H_{j+2b}^{\mathrm{BM}}(X\times_GU;k)$; existence of the stable value and its independence of the
approximation are supplied by
[[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]]. Ordinary
Borel–Moore homology is the case $G=1$ in the same formula, i.e.
$H_j^{\mathrm{BM}}(X;k)=\operatorname{Hom}(k_X,\omega_X[-j])$, and the smooth complex orientation
gives $\omega_X=k_X[2d]$ for $X$ smooth of pure complex dimension $d$.

**Correspondences.** Let $f_i:X_i\to E$ be finitely many proper $G$-equivariant algebraic maps
with $X_i$ smooth of pure complex dimension $d_i$. Put $Z_{ij}=X_i\times_EX_j$ (reduced
analytically), $T_{ijk}=X_i\times_EX_j\times_EX_k$, and let $h:T_{ijk}\to Z_{ik}$ forget the
middle point; it is proper, being the base change of $f_j$. The first coordinate is the source.
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
$u^*v^!\to v'^!u'^*$ for the middle Cartesian square: with $u:Z_{ij}\to X_j$,
$v:Z_{jk}\to X_j$, $T=Z_{ij}\times_{X_j}Z_{jk}$ and projections $v':T\to Z_{ij}$,
$u':T\to Z_{jk}$, the morphism is obtained as the adjunction mate of proper base change
$u'_!v'^*\cong v^*u_!$. It is a morphism, not an asserted isomorphism for arbitrary supports.
Its orientation is fixed by the Thom class restricting to $+1$ on every positively
complex-oriented normal fiber. Agreement of this model with the stated refined geometric
operation, and compatibility with composition, are proved in
[[thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]] after the
foundational six-functor inputs are available.

**Well-formedness.** The definition is independent of the chosen free smooth approximation
because the stable Borel value exists and stabilizes by
[[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]]; the product is
defined because the refined middle-diagonal operation of
[[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]] is
defined on arbitrary closed supports and $h$ is proper, so its dualizing trace is available; the
degree bookkeeping is fixed by the pure complex dimension $d_j$ of the middle factor. The claim
that the sheaf model and the geometric operation agree, and that the product is compatible with
composition and units, is not assumed here: it is the content of
[[thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]], which is
recorded in `justified_by` rather than in `deps` because that theorem depends on this
definition. The Axiom of Choice is consumed exactly through the three cited suppliers, whose
constructions (equivariant descent, injective replacements, Borel stabilization) declare it;
the definition itself introduces no further choice principle.
