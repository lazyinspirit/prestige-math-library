---
id: lem-author-9ab3274efad8-picard-disjoint-union
kind: lemma
title: Picard groups of finite disjoint unions
status: published
domain: mathematics
deps:
  - math:def-picard-group-scheme
  - math:def-scheme
  - math:def-affine-open-subscheme
  - math:def-module-on-ringed-space
  - math:def-invertible-sheaf
  - math:def-restriction-sheaf-open-subspace
  - math:def-sheaf-on-topological-space
  - math:thm-gluing-sheaves
  - math:def-sheaf-tensor-product
  - math:def-sheafification
  - math:def-presheaf-plus-construction
  - math:def-stalk-of-presheaf
dependency_roles:
  math:def-picard-group-scheme: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-invertible-sheaf: mathematical-premise
  math:def-restriction-sheaf-open-subspace: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
  math:thm-gluing-sheaves: mathematical-premise
  math:def-sheaf-tensor-product: mathematical-premise
  math:def-sheafification: mathematical-premise
  math:def-presheaf-plus-construction: mathematical-premise
  math:def-stalk-of-presheaf: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
For a finite disjoint union of open and closed subschemes $X=\coprod_iX_i$, restriction gives an isomorphism $\operatorname{Pic}(X)\cong\prod_i\operatorname{Pic}(X_i)$. The empty union has the zero Picard group.

A line bundle is a sheaf of modules locally isomorphic to the structure sheaf. Its isomorphism classes form the Picard group under tensor product.

## Facts & Assumptions
[F1] The Picard group consists of isomorphism classes of invertible modules, with tensor product as multiplication and the structure sheaf as identity ([[math:def-picard-group-scheme]]).

[F2] A scheme carries its structure sheaf; an open subscheme $U$ carries $\mathcal O_X|_U$. An $\mathcal O_X$-module is a sheaf of abelian groups with compatible sectionwise scalar actions ([[math:def-scheme]], [[math:def-affine-open-subscheme]], [[math:def-module-on-ringed-space]]). Here the disjoint-union hypothesis means that the open and closed pieces cover $X$ and distinct pieces have empty intersection.

[F3] Restriction to an open subspace evaluates on its open sets using the same sections and restriction maps as on $X$. An invertible module is locally isomorphic to the structure sheaf, and restriction to an open subscheme preserves invertibility ([[math:def-restriction-sheaf-open-subspace]], [[math:def-invertible-sheaf]]).

[F4] Compatible local sections of a sheaf glue uniquely. The empty-cover case forces a sheaf of modules to have the one-element zero module of sections on the empty open set ([[math:def-sheaf-on-topological-space]]).

[F5] Sheaves of modules on a fixed ringed space glue on an open cover from overlap isomorphisms satisfying the identity and cocycle conditions, uniquely up to isomorphism compatible with the local identifications ([[math:thm-gluing-sheaves]]).

[F6] The sheaf tensor product is the sheafification of the presheaf $W\mapsto\mathcal L(W)\otimes_{\mathcal O_X(W)}\mathcal M(W)$, and sheafification is the double plus construction $a\mathcal P=\mathcal P^{++}$ ([[math:def-sheaf-tensor-product]], [[math:def-sheafification]]).

[F7] A plus section is an equivalence class of germ-compatible local presentations on an open cover. Equality of germs means equality on some smaller open neighbourhood; the plus construction restricts presentations by intersecting their open sets ([[math:def-presheaf-plus-construction]], [[math:def-stalk-of-presheaf]]).

**Given:** A finite disjoint union of open and closed subschemes as in the Statement.

**Goal:** Prove that restriction is the asserted group isomorphism, including the empty union.

## Proof
1.1 By [F2, F3], every line bundle restricts to a line bundle on each $X_i$. Conversely, take a line bundle $\mathcal L_i$ on each piece. On a diagonal overlap use the identity; on an off-diagonal overlap use the unique isomorphism between the zero module sheaves on the empty scheme, provided by [F4]. These maps satisfy the identity and cocycle conditions, so [F5] glues the $\mathcal L_i$ as an $\mathcal O_X$-module. It is locally isomorphic to $\mathcal O_X$ because this holds on each open piece, hence it is a line bundle by [F3]. Componentwise module isomorphisms glue, together with their inverses, by applying [F4] to local sections on each open set. Thus gluing is independent of the chosen representatives and is inverse to restriction on isomorphism classes. If the union is empty, $X=\varnothing$; [F4] gives exactly one module sheaf, namely $\mathcal O_\varnothing$, which is locally invertible vacuously. Its Picard group is the one-element group by [F1]. [F1, F2, F3, F4, F5, given, construct]

2.1 For any presheaf $\mathcal P$ and open $U\subseteq X$, the open covers of an open $W\subseteq U$ are the same whether viewed in $U$ or $X$. Germ equality at a point of $U$ is also unchanged: a witnessing neighbourhood in $X$ can be intersected with $U$, by [F7]. Hence the presentations and their equivalences identify $(\mathcal P^+)|_U$ with $(\mathcal P|_U)^+$, compatibly with restrictions and morphisms; applying this twice gives $(a_X\mathcal P)|_U\cong a_U(\mathcal P|_U)$ by [F6]. Apply this to the tensor presheaf in [F6]. On every open $W\subseteq U$, its sections agree with those of the tensor presheaf of $\mathcal L|_U$ and $\mathcal M|_U$, since sections and the scalar ring are unchanged by [F2, F3]. Therefore $(\mathcal L\otimes_{\mathcal O_X}\mathcal M)|_U\cong(\mathcal L|_U)\otimes_{\mathcal O_U}(\mathcal M|_U)$. Restriction consequently preserves Picard multiplication by [F1]. The bijection of step 1.1 is a group isomorphism, and its inverse gluing respects tensor products componentwise. For the empty union both groups have one element. [F1, F2, F3, F6, F7, step 1.1] ∎
