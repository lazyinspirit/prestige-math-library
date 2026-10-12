---
id: thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product
kind: theorem
title: "Proper-pushforward Ext is equivariant Borel–Moore homology of the fiber product"
status: draft
origin: session
deps: [def-equivariant-borel-moore-homology-and-correspondence-convolution, thm-constructible-six-functors-proper-base-change-and-verdier-duality, lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ginzburg, Geometric methods in representation theory"
      url: "https://arxiv.org/abs/math/9802004"
    - title: "Varagnolo–Vasserot, Canonical bases and KLR-algebras"
      url: "https://arxiv.org/abs/0901.3992"
    - title: "Varshavsky, Lefschetz–Verdier trace formula"
      url: "https://arxiv.org/abs/math/0505564"
---

## Statement

Use the constructible equivariant setting and smooth proper maps of [[def-equivariant-borel-moore-homology-and-correspondence-convolution]]. Put $L_i=f_{i!}k_{X_i}[d_i]$. For every integer $r$ and every pair $(i,j)$ there is a natural isomorphism
$$\Phi_{ij}^r:\operatorname{Hom}_{D^b_{G,c}(E;k)}(L_i,L_j[r])\xrightarrow{\sim}H_{d_i+d_j-r}^{\mathrm{BM},G}(Z_{ij};k).$$
All groups are degreewise finite-dimensional for these finite-type algebraic varieties and $G$; no finite-dimensionality of their direct sum over all degrees is asserted. The isomorphism is equivariant-cohomology linear, commutes with enlargement of the Borel approximation, and is natural in constructible coefficient morphisms before smooth orientation is applied. No semismallness, decomposition theorem, purity, or smoothness of $E$ or $Z_{ij}$ is required.

## Facts & Assumptions

**Given:** the data and the supplied constructible six-functor and Borel-stabilization theorems in the Statement.

[F1] [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]] supplies coherent adjunction, proper base change, dualizing transitivity, and smooth complex orientation.

[F2] [[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]] supplies equivariant descent/stabilization and degreewise finiteness.

[F3] [[def-equivariant-borel-moore-homology-and-correspondence-convolution]] fixes homological normalization.

## Proof

1.1 Write $p:Z_{ij}\to X_i$, $q:Z_{ij}\to X_j$, and $t=r+d_j-d_i$. Remove the source shift by applying $[-d_i]$ to both objects. Properness and adjunction then give $\operatorname{Hom}_E(f_{i!}k_i,f_{j!}k_j[t])=\operatorname{Hom}_{X_i}(k_i,f_i^!f_{j!}k_j[t])$. In the Cartesian square with lower arrow $f_j$ and right arrow $f_i$, the dual mate of proper base change gives $f_i^!f_{j!}k_j=p_*q^!k_j$ (both maps are proper, so $!$ and $*$ pushforwards coincide). Ordinary adjunction $p^*\dashv p_*$ identifies the last group with $\operatorname{Hom}_{Z_{ij}}(k_Z,q^!k_j[t])$. This gives the complete cornerwise chain, including negative $r$. [F1, given]

2.1 Smooth orientation on $X_j$ says $k_j=\omega_{X_j}[-2d_j]$. Transitivity gives $q^!k_j=\omega_Z[-2d_j]$, so the group in step 1.1 is $\operatorname{Hom}(k_Z,\omega_Z[r-d_i-d_j])$, exactly the group claimed in [F3]. At a finite Borel approximation of dimension offset $b$, $X_j\times_GU$ has dimension $d_j+b$, while the descended complex retains the shift $d_j$. Thus the identical calculation gives ordinary Borel–Moore degree $d_i+d_j+2b-r$. Removing $2b$ gives the stated equivariant degree; one must not insert a stack-dimension shift into $\omega_X^G$. [F1, F2, F3, step 1.1]

3.1 Every map in the chain is an adjunction, base-change, or orientation map supplied naturally by [F1]. They commute with approximation transition pullbacks by [F2], so they induce an isomorphism in each stable degree. Coherent scalar pullback from the base point and the projection formula give equivariant-cohomology linearity. Degreewise finiteness is exactly [F2]'s conclusion, not a boundedness assertion about equivariant Ext. The proof uses smoothness only for the orientation on $X_j$ and properness only in base change and identification of the two pushforwards. [F1, F2, step 1.1, step 2.1] ∎
