---
id: def-equivariant-borel-moore-homology-and-correspondence-convolution
kind: definition
title: "Equivariant Borel–Moore homology and oriented correspondence convolution"
status: draft
origin: session
deps: [lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports, thm-constructible-six-functors-proper-base-change-and-verdier-duality, lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ginzburg, Geometric methods in representation theory"
      url: "https://arxiv.org/abs/math/9802004"
    - title: "Varagnolo–Vasserot, Canonical bases and KLR-algebras"
      url: "https://arxiv.org/abs/0901.3992"
    - title: "Varshavsky, Lefschetz–Verdier trace formula"
      url: "https://arxiv.org/abs/math/0505564"
---

## Definition

Let $G=\prod_v\mathrm{GL}_{n_v}(\mathbb C)$, let $k$ be a characteristic-zero field, and use algebraically constructible complexes of $k$-sheaves in the analytic topology. All functors are derived. The equivariant dualizing object is normalized by $\omega_X^G|_X=\omega_X$, rather than by the dimension of the quotient stack. Define $H_j^{\mathrm{BM},G}(X;k)=H_G^{-j}(X,\omega_X^G)$. Equivalently, for a free smooth approximation $U\subset W$ and $b=\dim_{\mathbb C}U-\dim_{\mathbb C}G$, it is the eventual stable value $H_{j+2b}^{\mathrm{BM}}(X\times_GU;k)$; stabilization and independence are supplied by [[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]]. Ordinary Borel–Moore homology is $H_j^{\mathrm{BM}}(X;k)=\operatorname{Hom}(k_X,\omega_X[-j])$. Smooth complex orientation gives $\omega_X=k_X[2d]$ for pure complex dimension $d$.

Let $f_i:X_i\to E$ be finitely many proper $G$-equivariant algebraic maps with $X_i$ smooth of pure complex dimension $d_i$. Put $Z_{ij}=X_i\times_E X_j$ (reduced analytically), $T_{ijk}=X_i\times_E X_j\times_E X_k$, and let $h:T_{ijk}\to Z_{ik}$ forget the middle point. It is proper, being the base change of $f_j$. The first coordinate is the source. For $a\in H_p^{\mathrm{BM},G}(Z_{ij})$, $b\in H_q^{\mathrm{BM},G}(Z_{jk})$, define
$$a*b=h_*\Delta_{X_j}^{!}(a\boxtimes b)\in H_{p+q-2d_j}^{\mathrm{BM},G}(Z_{ik}).$$
Here $\Delta_{X_j}^{!}$ is the refined oriented middle-diagonal operation on supports: it restricts the external class to $T_{ijk}$ by the Thom class of the complex normal bundle $TX_j$ of $X_j\hookrightarrow X_j\times X_j$. It is defined on arbitrary closed supports; no transversality of $Z_{ij}$ and $Z_{jk}$ is assumed. Proper pushforward is the dualizing trace. The ordered coordinates are $(i,j,j,k)$, and the two middle factors are contracted without a permutation. If intermediate indices differ, set the product to zero. Put degree $d_i+d_j-p$ on the $(i,j)$ corner. The normalized diagonal class $[\Delta_{X_i}]$ has corner degree zero.

The sheaf model of the refined Thom operation uses the exchange morphism $u^*v^!\to v'^!u'^*$ for the middle Cartesian square, obtained as the adjunction mate of proper base change $u'_!v'^*\cong v^*u_!$. It is a morphism, not an asserted isomorphism for arbitrary supports. Its orientation is fixed by the Thom class restricting to $+1$ on every positively complex-oriented normal fiber. Agreement of this model with the stated refined geometric operation, and compatibility with composition, are proved in [[thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]] after the foundational six-functor inputs are available.
