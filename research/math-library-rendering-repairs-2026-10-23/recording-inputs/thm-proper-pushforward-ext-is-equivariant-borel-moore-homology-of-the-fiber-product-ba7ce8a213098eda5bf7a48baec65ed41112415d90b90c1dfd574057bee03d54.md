---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product.json
  precheck: pass
id: thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product
kind: theorem
title: "Proper-pushforward Ext is equivariant Borel–Moore homology of the fiber product"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 24
deps: [def-axiom-of-choice, def-equivariant-borel-moore-homology-and-correspondence-convolution,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom,
       thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace,
       thm-constructible-six-functors-proper-base-change-and-verdier-duality,
       thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "V. Ginzburg, Geometric methods in the representation theory of Hecke algebras and quantum groups, arXiv:math/9802004v3; 1997 Montreal lectures (57-page PDF)"
      url: "https://arxiv.org/pdf/math/9802004"
    - title: "M. Varagnolo and E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992 (complete article)"
      url: "https://arxiv.org/pdf/0901.3992"
    - title: "Y. Varshavsky, Lefschetz-Verdier trace formula, arXiv:math/0505564 (complete article)"
      url: "https://arxiv.org/pdf/math/0505564"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) as inherited from the constructible
six-functor and Borel-stabilization suppliers. Use the constructible equivariant setting
$D^b_{G,c}(E;k)$ of [[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]]
and proper $G$-equivariant algebraic maps $f_i:X_i\to E$ with smooth sources $X_i$ of pure complex
dimension $d_i$, as in [[def-equivariant-borel-moore-homology-and-correspondence-convolution]].
Put $L_i=f_{i!}k_{X_i}[d_i]$. For every integer $r$ and every pair $(i,j)$ there is a natural
isomorphism
$$\Phi_{ij}^r:\operatorname{Hom}_{D^b_{G,c}(E;k)}(L_i,L_j[r])\xrightarrow{\sim}H_{d_i+d_j-r}^{\mathrm{BM},G}(Z_{ij};k).$$
All groups are degreewise finite-dimensional for these finite-type algebraic varieties and $G$;
no finite-dimensionality of their direct sum over all degrees is asserted. The isomorphism is
equivariant-cohomology linear, commutes with enlargement of the Borel approximation, and is
natural in constructible coefficient morphisms before smooth orientation is applied. No
semismallness, decomposition theorem, purity, or smoothness of $E$ or $Z_{ij}$ is required.

## Facts & Assumptions

**Given:** the Axiom of Choice; a characteristic-zero field $k$; a product $G$ of complex general linear groups; proper $G$-equivariant algebraic maps $f_i:X_i\to E$ with $X_i$ smooth of pure complex dimension $d_i$ and fiber products $Z_{ij}=X_i\times_EX_j$; the objects $L_i=f_{i!}k_{X_i}[d_i]$ in $D^b_{G,c}(E;k)$; and the Borel–Moore normalization of [[def-equivariant-borel-moore-homology-and-correspondence-convolution]].

[F1] Assume AC. The equivariant constructible six-functor theorem [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]] supplies, for $D^b_{G,c}$ over characteristic zero, the adjunctions $f_{i!}\dashv f_i^!$ and $p^*\dashv p_*$, the extraordinary proper base change $f_i^!f_{j!}\cong p_*q^!$ for the Cartesian square of the two proper maps $f_i,f_j$, the dualizing transitivity $q^!\omega_{X_j}=\omega_{Z_{ij}}$ transported from the ordinary analytic contract of [[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]], the normalized dualizing object $\omega_X^G|_X=\omega_X$, the smooth complex orientation $\omega_X^G=k_X[2d]$ for smooth $X$ of pure dimension $d$, and $Rf_!=Rf_*$ for proper $f$.

[F2] Assume AC. The cartesian-simplicial model lemma [[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]] supplies the finite general linear Stiefel resolution comparisons: $\operatorname{Hom}_G(A,B[m])\cong \operatorname{Hom}_{X_N}(Q_N(A),Q_N(B)[m])$ on the stated bounded ranges, the coherent comparison equivalences for products of sufficiently acyclic resolutions. For the trivial group the identity model has unbounded acyclicity range.

[F3] Assume AC. The definition [[def-equivariant-borel-moore-homology-and-correspondence-convolution]] fixes $H_j^{\mathrm{BM},G}(X;k)=H_G^{-j}(X,\omega_X^G)=\operatorname{Hom}(k_X,\omega_X^G[-j])$, its stable Borel value $H^{\mathrm{BM}}_{j+2b}(X\times_GU;k)$ for a free smooth approximation with $b=\dim_{\mathbb C}U-\dim_{\mathbb C}G$, and the corner degrees $d_i+d_j-p$; the ambient category is that of [[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]].

[F4] Under AC, equivariant Hom groups of bounded algebraically constructible objects are finite-dimensional in every fixed degree, and commute with characteristic-zero field extension ([[thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars]]).

[A1] The Axiom of Choice is consumed exactly through [F1], [F2] and [F4], whose constructions (injective replacements, equivariant descent, Stiefel resolution comparisons) declare it; the adjunction chain, the orientation computation and the degree bookkeeping below are choice-free ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The adjunction chain. Write $p:Z_{ij}\to X_i$ and $q:Z_{ij}\to X_j$ for the projections and put $t=r+d_j-d_i$. Removing the source shift by $[-d_i]$ and using the adjunction $f_{i!}\dashv f_i^!$ of [F1] gives $\operatorname{Hom}_E(f_{i!}k_i,f_{j!}k_j[t])=\operatorname{Hom}_{X_i}(k_i,f_i^!f_{j!}k_j[t])$. In the Cartesian square with lower arrow $f_j$ and right arrow $f_i$, the extraordinary proper base change of [F1] gives $f_i^!f_{j!}k_j=p_*q^!k_j$, because both maps are proper and the square is Cartesian; the adjunction $p^*\dashv p_*$ then identifies the group with $\operatorname{Hom}_{Z_{ij}}(k_Z,q^!k_j[t])$. This is the complete cornerwise chain and it is valid for every integer $r$, including negative $r$. [F1, given]

2.1 Orientation and the degree. The smooth orientation of [F1] on the smooth pure $d_j$-dimensional source $X_j$ says $k_{X_j}=\omega_{X_j}[-2d_j]$, and dualizing transitivity for $q$ gives $q^!k_{X_j}=q^!\omega_{X_j}[-2d_j]=\omega_{Z_{ij}}[-2d_j]$. Substituting $t=r+d_j-d_i$, the group of step 1.1 is $\operatorname{Hom}(k_Z,\omega_Z[r-d_i-d_j])$, which is exactly $H_{d_i+d_j-r}^{\mathrm{BM},G}(Z_{ij};k)$ in the normalization of [F3]. At a finite free smooth approximation of dimension offset $b=\dim_{\mathbb C}U-\dim_{\mathbb C}G$, the space $X_j\times_GU$ is smooth of complex dimension $d_j+b$ while the descended complex retains the shift $d_j$, so the identical calculation gives ordinary Borel–Moore degree $d_i+d_j+2b-r$; removing $2b$ gives the stated equivariant degree, and no stack-dimension shift is inserted into $\omega_X^G$. [F1, F3, step 1.1]

3.1 Naturality, linearity and finiteness. Every map in the chain of steps 1.1 and 2.1 is an adjunction, base-change or orientation map supplied naturally by [F1], so the composite is natural in constructible coefficient morphisms before the smooth orientation is applied and is compatible with composition of the $f_i$. By [F2] these maps commute with the approximation transition pullbacks on the bounded ranges, so the composite induces an isomorphism in each stable degree; coherent scalar pullback from the base point together with the projection formula of [F1] gives equivariant-cohomology linearity. Degreewise finiteness is exactly the conclusion of [F4] for bounded algebraically constructible objects, and it is asserted nowhere that the direct sum over all degrees is finite-dimensional. Smoothness of the sources is used only for the orientation in step 2.1, and properness only in the base change and in the identification $f_{i!}=f_{i*}$; no semismallness, decomposition theorem, purity or smoothness of $E$ or of the fiber products $Z_{ij}$ is used. [A1, F1, F2, F3, F4, step 1.1, step 2.1] ∎


## Remarks

The Cartesian square underlying step 1.1 is displayed with $f_i$ on the
right and $f_j$ below, as in that step. Its projections are
$p(x_i,x_j)=x_i$ and $q(x_i,x_j)=x_j$.

```tikzcd
[font=\LARGE, every label/.append style={font=\Large}, column sep=large, row sep=large]
Z_{ij}=X_i\times_E X_j \arrow[r, "p"] \arrow[d, "q"'] & X_i \arrow[d, "f_i"] \\
X_j \arrow[r, "f_j"'] & E
```

The defining condition $f_i(x_i)=f_j(x_j)$ gives
$f_i\circ p=f_j\circ q$. Here $p$ is the base change of $f_j$, while $q$
is the base change of $f_i$; both projections are proper. In this orientation,
the extraordinary proper base-change comparison of [F1] is
$f_i^!f_{j!}\cong p_*q^!$, with both sides taking complexes on $X_j$ to
complexes on $X_i$. This square illustrates the adjunction chain; the proof
and its degree calculation remain independent of the figure.
