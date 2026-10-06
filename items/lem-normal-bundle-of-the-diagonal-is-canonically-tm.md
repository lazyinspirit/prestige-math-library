---
id: lem-normal-bundle-of-the-diagonal-is-canonically-tm
kind: lemma
title: "The normal bundle of the diagonal is canonically the tangent bundle"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [prop-the-diagonal-is-an-embedded-submanifold, def-normal-and-conormal-bundles-of-an-embedded-submanifold, thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle, prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles, thm-canonical-tangent-and-cotangent-splittings-for-products, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-product-orientation, prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold, def-differential-of-a-smooth-map, def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "Eleny-Nicoleta Ionel (notes by Andrew Lin), Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lectures 14-16, printed pp. 43-52: Thom class and Thom isomorphism, the intersection product dual to the cup product, Theorems 138-139 (PD[S] is the normal Thom class), Corollaries 143/146 and Theorem 144 (the Euler class is dual to the zero locus; self-intersection of S is the Euler class of the normal bundle)."
dependency_level: 0
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a smooth boundaryless $n$-manifold and $\Delta_M=\{(x,x):x\in M\}\subseteq M\times M$ the diagonal, embedded by [[prop-the-diagonal-is-an-embedded-submanifold]]. The difference map $$T(M\times M)|_{\Delta_M}\longrightarrow TM,\qquad (v,w)\longmapsto w-v,$$ written in the canonical splitting $T(M\times M)|_{\Delta_M}\cong TM\oplus TM$ of [[thm-canonical-tangent-and-cotangent-splittings-for-products]], has kernel $T\Delta_M$ and induces a canonical isomorphism of smooth vector bundles over $\Delta_M\cong M$ $$\nu_{\Delta_M}=T(M\times M)|_{\Delta_M}/T\Delta_M\;\longrightarrow\;TM.$$ If $M$ is oriented, give the normal bundle the orientation for which the tangent orientation of $\Delta_M$ followed by the normal orientation is the product orientation of $M\times M$ ([[def-product-orientation]], [[prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold]]); under this orientation convention the isomorphism is orientation-preserving when $\Delta_M$ carries the orientation transported from $M$.

## Facts & Assumptions

**Given:** The smooth boundaryless $n$-manifold $M$, its diagonal $\Delta_M$, the canonical product splitting and the two orientation conventions of the statement.

[F1] The diagonal $\Delta_M=\{(p,p):p\in M\}\subseteq M\times M$ is an embedded submanifold of dimension $\dim M$ ([[prop-the-diagonal-is-an-embedded-submanifold]]).

[F2] For smooth manifolds $M,N$ there is a canonical vector-space isomorphism $T_{(p,q)}(M\times N)\cong T_pM\oplus T_qN$ ([[thm-canonical-tangent-and-cotangent-splittings-for-products]]).

[F3] $M\times M$ carries the product smooth structure defined by product charts ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

[F4] The differential is defined on derivations by $dF_p(v)([g])=v([g\circ F])$ ([[def-differential-of-a-smooth-map]]).

[F5] The normal-bundle set of an embedded submanifold is the fibrewise quotient $\nu(S)=\coprod_{p\in S}T_pM/T_pS$ ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]).

[F6] If $S\subseteq E$ is a smooth rank-$k$ subbundle of a smooth rank-$r$ vector bundle, then the fibrewise quotient $E/S\to M$ is a smooth vector bundle, and constant-rank kernels and images of bundle maps over the identity are smooth subbundles ([[thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle]], [[prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles]]).

[F7] A smooth rank-$r$ vector bundle is a smooth fibre bundle whose fibres are $r$-dimensional real vector spaces with local trivializations ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[F8] For oriented vector spaces the product orientation is defined by the ordered determinant isomorphism $\det(V\oplus W)\cong\det V\otimes\det W$ ([[def-product-orientation]]).

[F9] For an embedded submanifold, any two of the orientations of the ambient tangent bundle, the tangent bundle and the transverse normal bundle determine the third; in this pair the convention is that a positive tangent basis followed by a positive normal basis is positive in the ambient ([[prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold]]).

## Proof

**Proof technique:** compute the kernel and the quotient of the difference map in the product splitting, then transport the orientation through the same determinant comparison.

1.1 In a chart of $M$, the product tangent coordinates identify the splitting [F2] with the two coordinate-vector blocks, and the difference map $\Phi(v,w)=w-v$ has the constant matrix $[-I\ I]$. Hence the splitting and $\Phi$ are smooth in the product charts [F3], without requiring a general smooth-differential theorem. The diagonal inclusion has coordinate expression $x\mapsto(x,x)$, so its differential [F4] sends $v$ to $(v,v)$. Thus $\ker\Phi=T\Delta_M$. By [F5] and [F6] the quotient is a smooth bundle, and its induced map to $TM$ has smooth inverse $u\mapsto[(0,u)]$, as is also seen in these local trivializations [F7]. These formulas include $n=0$ and empty $M$. [F1, F2, F3, F4, F5, F6, F7, given, algebra]

2.1 Orientation. In an oriented basis $(e_1,\dots,e_n)$ of $T_xM$ the product orientation of $T_xM\oplus T_xM$ is the class of $((e_1,0),\dots,(e_n,0),(0,e_1),\dots,(0,e_n))$ [F8]. The diagonal basis $\delta_i=(e_i,e_i)$ is obtained from it by the block matrix $\begin{pmatrix} I & 0\\ I & I\end{pmatrix}$ of determinant $+1$, while the lifts $(0,e_j)$ of the normal classes satisfy $\Phi(0,e_j)=e_j$. Hence the ordered basis $(\delta_1,\dots,\delta_n,(0,e_1),\dots,(0,e_n))$ is positive in the product orientation exactly when the $e_j$ are positive in $T_xM$: with the tangent-first convention [F9] the induced normal orientation is carried by $\Phi$ to the tangent orientation transported from $M$, so the isomorphism is orientation-preserving. For $n=0$, write the supplied tangent orientation unit as $o=\pm1$: the ambient product unit is $o^2=1$, and the tangent-first rule gives normal unit $o^{-1}=o$, preserved by the unique rank-zero isomorphism. [F8, F9, algebra] ∎

