---
id: lem-adjudicate-f63a33a7279d-clopen-chern-products
kind: lemma
title: Bundles and Chow Chern maps on a finite clopen partition
status: draft
domain: mathematics
deps:
  - lem-author-f08c343a07fc-local-chern-interface
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-open-immersion-schemes
  - math:def-locally-free-sheaf-finite-rank
  - math:thm-gluing-sheaves
  - math:def-chow-group-of-cycles-mod-rational-equivalence
  - math:def-chern-classes-of-a-vector-bundle
  - math:lem-flat-pullback-chow-groups
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-dimension-noetherian-topological-space
  - math:def-irreducible-component-of-a-topological-space
  - math:def-irreducible-topological-space-and-subset
  - math:def-closed-immersion-schemes
  - math:def-algebraic-cycle-and-cycle-group
  - math:def-restriction-sheaf-open-subspace
  - math:def-integral-scheme
  - math:def-gluing-datum-sheaves
  - math:def-sheaf-on-topological-space
  - math:def-pullback-module-ringed-spaces
  - math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme
dependency_roles:
  lem-author-f08c343a07fc-local-chern-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:thm-gluing-sheaves: mathematical-premise
  math:def-chow-group-of-cycles-mod-rational-equivalence: mathematical-premise
  math:def-chern-classes-of-a-vector-bundle: mathematical-premise
  math:lem-flat-pullback-chow-groups: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:def-irreducible-component-of-a-topological-space: mathematical-premise
  math:def-irreducible-topological-space-and-subset: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:def-algebraic-cycle-and-cycle-group: mathematical-premise
  math:def-restriction-sheaf-open-subspace: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-gluing-datum-sheaves: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
  math:def-pullback-module-ringed-spaces: mathematical-premise
  math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme: mathematical-premise
formulation_deps:
  - lem-author-f08c343a07fc-local-chern-interface
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-open-immersion-schemes
  - math:def-locally-free-sheaf-finite-rank
  - math:def-chow-group-of-cycles-mod-rational-equivalence
  - math:def-chern-classes-of-a-vector-bundle
  - math:lem-flat-pullback-chow-groups
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-dimension-noetherian-topological-space
  - math:def-irreducible-component-of-a-topological-space
  - math:def-irreducible-topological-space-and-subset
  - math:def-closed-immersion-schemes
  - math:def-algebraic-cycle-and-cycle-group
  - math:def-restriction-sheaf-open-subspace
argument_deps:
  - lem-author-f08c343a07fc-local-chern-interface
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-open-immersion-schemes
  - math:def-locally-free-sheaf-finite-rank
  - math:thm-gluing-sheaves
  - math:def-chow-group-of-cycles-mod-rational-equivalence
  - math:def-chern-classes-of-a-vector-bundle
  - math:lem-flat-pullback-chow-groups
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-dimension-noetherian-topological-space
  - math:def-irreducible-component-of-a-topological-space
  - math:def-irreducible-topological-space-and-subset
  - math:def-closed-immersion-schemes
  - math:def-algebraic-cycle-and-cycle-group
  - math:def-restriction-sheaf-open-subspace
  - math:def-integral-scheme
  - math:def-gluing-datum-sheaves
  - math:def-sheaf-on-topological-space
  - math:def-pullback-module-ringed-spaces
  - math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 15
---

## Statement
Assume AC and the suitable Grothendieck universes of the supplied bundle-class and ordinary Chow Chern interface, with universe existence separate from AC. Let $X$ be a smooth equidimensional finite-type scheme over a field $k$, of dimension $n\geq0$, and suppose $X=\bigsqcup_{a=1}^m X_a$ with $m\geq1$ is a finite partition into nonempty open and closed subschemes, each smooth equidimensional finite type of dimension $n$. Let $r\geq1$ be an integer. Write $j_a:X_a\hookrightarrow X$ for the inclusions. Restriction gives bijections $\rho_r:\mathrm{Vect}_r(X)\to\prod_{a=1}^m\mathrm{Vect}_r(X_a)$ and group isomorphisms $\rho^i:\mathrm{CH}^i(X)\to\prod_{a=1}^m\mathrm{CH}^i(X_a)$ for every integer $i$. A bundle is a finite locally free module sheaf of constant rank $r$, and $\mathrm{Vect}_r$ means its set of isomorphism classes. Here $\mathrm{CH}^i=A_{n-i}$ is the integral cycle group modulo rational equivalence. In these identifications the ordinary quotient-projective-bundle Chern map satisfies $\rho^i(c_i(E))=(c_i(E|_{X_a}))_a$ for $1\leq i\leq r$. Thus, if the Chern tuple map $C_r$ is bijective on every $X_a$, it is bijective on $X$.

## Facts & Assumptions

**Given:** The field, schemes, partition, integer $r$, AC and separate universe assumptions in the statement.

**Goal:** Establish the restriction identifications and the componentwise criterion for Chern bijectivity.

[F1] The ordinary Chow Chern interface supplies the sets of rank-$r$ bundle isomorphism classes, codimension Chow groups and the well-defined normalized Chern maps on all the stated schemes. Its AC and universe assumptions are inherited here. [[lem-author-f08c343a07fc-local-chern-interface]], [[math:def-axiom-of-choice]], [[math:def-grothendieck-universe-closure-convention]]

[F2] An open immersion identifies its source with the restricted open scheme. For an open $U\subseteq X$ and an open $V\subseteq U$, restriction of a sheaf satisfies $(E|_U)(V)=E(V)$. Finite local freeness of constant rank is local on the scheme and is preserved on open restrictions. A gluing datum consists of local sheaves and overlap isomorphisms satisfying the identity and cocycle conditions. Such data for module sheaves glue uniquely up to the unique identification respecting the local data. The sheaf axioms glue compatible sections uniquely and force the module of sections on the empty open to be zero; compatible module maps glue by applying those axioms to their values on each section, with module linearity checked locally. [[math:def-open-immersion-schemes]], [[math:def-restriction-sheaf-open-subspace]], [[math:def-locally-free-sheaf-finite-rank]], [[math:def-gluing-datum-sheaves]], [[math:thm-gluing-sheaves]], [[math:def-sheaf-on-topological-space]]

[F3] For a finite-type scheme, $Z_q(X)$ is the free abelian group of finite integral combinations of integral closed subschemes of dimension $q$. The group $A_q(X)$ is its quotient by the subgroup generated by principal-divisor cycles on integral closed subschemes of dimension $q+1$. In pure dimension $n$, $\mathrm{CH}^i(X)=A_{n-i}(X)$. [[math:def-algebraic-cycle-and-cycle-group]], [[math:def-chow-group-of-cycles-mod-rational-equivalence]]

[F4] For a morphism $f:X'\to X$ of smooth equidimensional $k$-schemes, ordinary Chern classes satisfy $c_i(f^*E)=f^*c_i(E)$. Ring pullback on smooth Chow rings agrees with flat pullback for flat morphisms, and open-immersion Chow pullback is restriction of cycles. Module pullback along an open immersion $j:U\hookrightarrow X$ identifies with restriction: the structure sheaf on $U$ is the restriction of that on $X$, so the defining tensor product $j^*E=\mathcal O_U\otimes_{j^{-1}\mathcal O_X}j^{-1}E$ identifies with $E|_U$ by multiplication, whose inverse sends $e$ to $1\otimes e$. The normalization is the quotient-projective-bundle convention of [F1]. [[math:def-chern-classes-of-a-vector-bundle]], [[math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme]], [[math:lem-flat-pullback-chow-groups]], [[math:def-pullback-module-ringed-spaces]], [[math:def-restriction-sheaf-open-subspace]], [[math:def-open-immersion-schemes]]

[F5] A $k$-scheme has a structure morphism to $\operatorname{Spec}k$; smoothness and finite type here refer to that morphism. Finite type means locally of finite type and quasi-compact. Dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets, with a one-member chain of length zero and $\dim\varnothing=-\infty$; this is the supplied chain-dimension convention and its general-scheme extension in the cycle interface. An irreducible component is a maximal irreducible subset. Equidimensional of dimension $n$ here means that every irreducible component has dimension $n$. The clopen pieces have their restricted open scheme structures, and their inclusions are also closed immersions: a closed immersion identifies its source topologically with a closed subset and gives a surjection onto its direct-image structure sheaf. [[math:def-scheme-over-base]], [[math:def-smooth-morphism-schemes]], [[math:def-locally-finite-type-and-finite-type-morphism]], [[math:def-dimension-noetherian-topological-space]], [[math:def-algebraic-cycle-and-cycle-group]], [[math:def-irreducible-component-of-a-topological-space]], [[math:def-irreducible-topological-space-and-subset]], [[math:def-open-immersion-schemes]], [[math:def-closed-immersion-schemes]]

[F6] An integral scheme is nonempty and reduced with irreducible underlying space. An irreducible space is nonempty and cannot be the union of two proper closed subsets; irreducibility of a subset uses its subspace topology. [[math:def-integral-scheme]], [[math:def-irreducible-topological-space-and-subset]]

## Proof

1.1 The stated schemes and their clopen inclusions are understood as in [F5]. Restricting a rank-$r$ bundle to each $X_a$ gives the stated tuple by [F1] and [F2]. Conversely take bundles $E_a$ of rank $r$ on all the pieces. On distinct pieces the overlaps are empty, so their restrictions there are zero module sheaves and the unique identifications, together with the identity identifications on each piece itself, satisfy the cocycle condition. The module version of gluing in [F2] produces a sheaf $E$ restricting to each $E_a$. The local free charts of the $E_a$ are charts for $E$ and cover $X$, so $E$ has rank $r$. If two bundles have isomorphic restrictions, the finitely many local isomorphisms and their inverses agree on the empty overlaps and glue to mutually inverse module maps; their composites are identities because they are identities on this open cover. Hence $\rho_r$ is well-defined, surjective and injective on isomorphism classes. All these are isomorphism classes in the universe scope of [F1]. [F1, F2, F5, given]

2.1 An integral closed subscheme $W$ of $X$ lies in exactly one $X_a$: it is nonempty by [F6], and if it met both $X_a$ and its complement, their intersections with $W$ would express its irreducible underlying space as the union of two proper closed subsets. As $X_a$ is open and closed, integral closed subschemes of $X_a$ are precisely those of $X$ lying there. Indeed, the structure-sheaf quotient for a closed immersion restricts to the same quotient on that piece and is the zero quotient on the complementary open; these local quotients give the closed immersion on $X$ by [F2] and [F5]. The subscheme itself is unchanged, so its local rings, function field and chain dimension are unchanged. By [F3], partitioning the integral generators therefore identifies $Z_q(X)$ with the finite direct sum of the $Z_q(X_a)$. Every principal-divisor generator lies in one piece, and its coefficients use the same rational function and the same local rings there, so the rational-equivalence subgroup is the direct sum of the corresponding subgroups. More explicitly, send a cycle class to its tuple of restricted classes, and send a tuple of classes to the class of the sum of representative cycles on the pieces. Changing representatives changes this sum by a sum of relations on those pieces, hence by a relation on $X$; thus the inverse is well-defined. The two maps are additive and inverse, giving each $\rho^i$ for $q=n-i$ and every integer $i$; a finite direct sum is the product since every finite tuple has finite support. By [F4], module restriction is pullback, and Chern naturality followed by the identification of Chow pullback with cycle restriction gives $\rho^i(c_i(E))=(c_i(E|_{X_a}))_a$. Consequently these identifications and step 1.1 turn $C_r(X)$ into the product of the maps $C_r(X_a)$, followed by the bijection reordering the two finite tuple indices $a$ and $i$. If each component map is bijective, its inverses componentwise and the inverse reorder give an inverse for $C_r(X)$. [F1, F2, F3, F4, F5, F6, step 1.1, given] ∎
