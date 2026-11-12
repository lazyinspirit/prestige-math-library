---
id: def-supported-higher-cycle-complex
kind: definition
title: Cycle complexes with fixed support
status: published
domain: mathematics
deps:
  - def-bloch-higher-cycle-complex
  - lem-author-75596422a482-face-support
  - lem-author-75596422a482-open-restriction
  - lem-author-75596422a482-restriction-kernel
  - lem-author-75596422a482-quotient-inclusion
  - lem-author-75596422a482-kernel-homotopy-fiber
  - thm-author-75596422a482-bloch-localization-input
  - math:def-homology-object-of-a-chain-complex
  - math:def-axiom-of-choice
  - math:def-field
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-open-immersion-schemes
  - math:def-integral-scheme
  - math:def-closed-immersion-schemes
  - math:def-fibre-product-schemes-universal-property
  - math:thm-fibre-products-of-schemes-exist
  - math:def-free-abelian-group
  - math:def-chain-complex-in-an-abelian-category
  - math:def-chain-map
  - math:thm-abelian-groups-form-an-abelian-category
  - math:def-kernel-and-image-of-group-homomorphism
dependency_roles:
  def-bloch-higher-cycle-complex: mathematical-premise
  lem-author-75596422a482-face-support: mathematical-premise
  lem-author-75596422a482-open-restriction: mathematical-premise
  lem-author-75596422a482-restriction-kernel: mathematical-premise
  lem-author-75596422a482-quotient-inclusion: mathematical-premise
  lem-author-75596422a482-kernel-homotopy-fiber: mathematical-premise
  thm-author-75596422a482-bloch-localization-input: mathematical-premise
  math:def-homology-object-of-a-chain-complex: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:def-fibre-product-schemes-universal-property: mathematical-premise
  math:thm-fibre-products-of-schemes-exist: mathematical-premise
  math:def-free-abelian-group: mathematical-premise
  math:def-chain-complex-in-an-abelian-category: mathematical-premise
  math:def-chain-map: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
  math:def-kernel-and-image-of-group-homomorphism: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 8
---

## Definition
Assume the Axiom of Choice. Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $T\subset U$ a closed subset, $V=U\setminus T$ with its open-subscheme structure, and $r\geq0$ an integer. All products are over $k$. Use the algebraic simplices $\Delta^n$, admissible integral closed subschemes and alternating face differentials of the unnormalized Bloch complex $z^r(U,\bullet)$. For $n\geq0$, define $z_T^r(U,n)$ to be the free subgroup on its admissible generators whose underlying sets lie in $p_n^{-1}(T)$, where $p_n:U\times_k\Delta^n\to U$ is the projection. The notation $T\times\Delta^n$ for this support condition means $p_n^{-1}(T)$; it requires no scheme structure on $T$.

Write $\partial_{T,n}$ for the restriction of the ambient boundary to these subgroups. Put $z_T^r(U,n)=0$ for $n<0$ and $\partial_{T,n}=0$ for $n\leq0$. Define the supported higher Chow groups by
$$\mathrm{CH}_T^r(U,n)=H_n(z_T^r(U,\bullet))=\ker(\partial_{T,n})/\operatorname{im}(\partial_{T,n+1}),\qquad n\in\mathbb Z.$$
Here the kernel consists of elements sent to zero and the image consists of boundary values, as subgroups of $z_T^r(U,n)$. In particular these groups vanish for $n<0$. Put $\mathrm{CH}_T^r(U)=\mathrm{CH}_T^r(U,0)$. Its cohomological indexing is $H_T^{p,r}(U;z)=\mathrm{CH}_T^r(U,2r-p)$ for every integer $p$.

The restriction along the open immersion $j:V\hookrightarrow U$ is the chain map $j^*:z^r(U,\bullet)\to z^r(V,\bullet)$. It has homotopy-fiber model $F_n=z^r(U,n)\oplus z^r(V,n+1)$ for every integer $n$, with differential $(a,b)\mapsto(\partial a,j^*a-\partial b)$. The direct sum here is the group of pairs with componentwise addition. The inclusion $z_T^r(U,\bullet)\to F$, $a\mapsto(a,0)$, is a quasi-isomorphism, so the displayed supported groups are also the homology groups of this derived restriction fiber, with the same indexing. A quasi-isomorphism is a chain map inducing isomorphisms on all homology groups.

## Definition references

[[def-bloch-higher-cycle-complex]]

[[lem-author-75596422a482-face-support]]

[[lem-author-75596422a482-open-restriction]]

[[lem-author-75596422a482-restriction-kernel]]

[[lem-author-75596422a482-quotient-inclusion]]

[[lem-author-75596422a482-kernel-homotopy-fiber]]

[[thm-author-75596422a482-bloch-localization-input]]

[[math:def-homology-object-of-a-chain-complex]]

[[math:def-axiom-of-choice]]

[[math:def-field]]

[[math:def-scheme-over-base]]

[[math:def-smooth-morphism-schemes]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:def-open-immersion-schemes]]

[[math:def-integral-scheme]]

[[math:def-closed-immersion-schemes]]

[[math:def-fibre-product-schemes-universal-property]]

[[math:thm-fibre-products-of-schemes-exist]]

[[math:def-free-abelian-group]]

[[math:def-chain-complex-in-an-abelian-category]]

[[math:def-chain-map]]

[[math:thm-abelian-groups-form-an-abelian-category]]

[[math:def-kernel-and-image-of-group-homomorphism]]

## Facts & Assumptions

**Given:** The Axiom of Choice and $k,U,T,V,r$ as in the definition.

**Goal:** Justify the supported complex, its homology and the fiber comparison.

[A1] Choice is retained to invoke the supplied Bloch construction and localization theorem. The support and homology definitions introduce no additional choice assumption. [[math:def-axiom-of-choice]], [[def-bloch-higher-cycle-complex]], [[thm-author-75596422a482-bloch-localization-input]]

[F1] The unnormalized Bloch complex supplies the simplices, admissible generators and alternating face boundaries, with zero groups in negative degrees. [[def-bloch-higher-cycle-complex]]

[F2] Face boundaries preserve support, open restriction is a chain map with smooth finite-type target, and its kernel is exactly the supported complex with the set-theoretic support convention used above. [[lem-author-75596422a482-face-support]], [[lem-author-75596422a482-open-restriction]], [[lem-author-75596422a482-restriction-kernel]]

[F3] The quotient by that kernel embeds into the target with the same cokernel complex as restriction. [[lem-author-75596422a482-quotient-inclusion]]

[F4] The restriction cokernel is acyclic by localization, including for nonseparated smooth finite-type schemes. For a chain map of abelian groups with acyclic cokernel, the inclusion of its kernel into the displayed homotopy-fiber model, $a\mapsto(a,0)$, induces isomorphisms on all homology groups. [[thm-author-75596422a482-bloch-localization-input]], [[lem-author-75596422a482-kernel-homotopy-fiber]]

[F5] Abelian groups form an abelian category. A chain complex has degree-minus-one differentials with consecutive composite zero; a chain map commutes with them. Homology is the quotient of cycles by boundaries, and kernels and images of group homomorphisms have their usual elementwise meanings. [[math:thm-abelian-groups-form-an-abelian-category]], [[math:def-chain-complex-in-an-abelian-category]], [[math:def-chain-map]], [[math:def-homology-object-of-a-chain-complex]], [[math:def-kernel-and-image-of-group-homomorphism]]

[F6] A free abelian group on a set has the universal extension property for maps from that set to abelian groups; here the supported generators are a subset of the ambient free basis. [[math:def-free-abelian-group]], [[def-bloch-higher-cycle-complex]], [[lem-author-75596422a482-restriction-kernel]]

[F7] The field structure and the $k$-scheme structure are those of the stated field and structure morphism to $\operatorname{Spec}k$. Smoothness and finite type refer to this structure morphism; $V$ carries its open-subscheme structure and $j$ is its open immersion. [[math:def-field]], [[math:def-scheme-over-base]], [[math:def-smooth-morphism-schemes]], [[math:def-locally-finite-type-and-finite-type-morphism]], [[math:def-open-immersion-schemes]]

[F8] Integral schemes are nonempty, reduced and irreducible; the cycle generators are closed subschemes, understood via closed immersions into the ambient simplex product. Scheme fibre products, their projections and their existence supply these ambient products over $k$. [[math:def-integral-scheme]], [[math:def-closed-immersion-schemes]], [[math:def-fibre-product-schemes-universal-property]], [[math:thm-fibre-products-of-schemes-exist]]

## Justification
Under [A1], the field and geometric data of [F7] and [F8] meet the hypotheses of [F1] and [F2]; in particular the open complement $V$ is again smooth of finite type. By [F2] and [F6], the displayed supported groups form a subcomplex with the restricted differential. Its consecutive differentials compose to zero because those of the ambient complex do. Consequently its boundaries lie in its cycles, and [F5] supplies precisely the homology quotient displayed in the Definition. In negative degrees the cycles and boundaries are zero, so its homology is zero there.

The hypotheses of localization in [F4] hold for this field, smooth finite-type scheme and open complement, under [A1], without any separatedness assumption. By [F2] the kernel is the supported complex, and [F3] identifies the quotient and its cokernel. Apply the kernel-to-fiber result in [F4] to this actual restriction chain map: it gives exactly the differential and inclusion displayed above, hence the asserted quasi-isomorphism. The cohomological notation is a reindexing of these homology groups. This construction depends only on the closed subset $T$ and does not identify the whole support fiber with the image of ordinary Chow groups of $T$ in those of $U$. A comparison with a separately defined motivic cohomology theory requires its own compatible comparison theorem.
