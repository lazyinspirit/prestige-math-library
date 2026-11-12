---
id: lem-author-a44f2061570d-evaluation-left-exact
kind: lemma
title: Evaluation preserves kernels
status: published
domain: mathematics
deps:
  - lem-author-a44f2061570d-kernel-sheaf
  - def-author-cf6ede58b450-site-plus-data
  - math:def-group
  - math:def-group-homomorphism
  - math:def-functor-and-contravariant-functor
  - math:def-natural-transformation
  - math:thm-abelian-groups-form-an-abelian-category
  - math:def-preadditive-category
  - math:def-additive-functor
  - math:def-abelian-category
  - math:def-additive-category
  - math:def-left-exact-and-right-exact-functor
  - math:thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels
  - math:def-kernels-and-cokernels-as-equalizers-and-coequalizers
  - math:def-exact-sequence-and-short-exact-sequence-in-an-abelian-category
  - math:def-exactness-at-a-node
  - math:def-image-and-coimage-in-a-category-with-kernels-and-cokernels
  - math:def-monomorphism-and-epimorphism
  - math:cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero
  - math:thm-every-monomorphism-is-the-kernel-of-its-cokernel
dependency_roles:
  lem-author-a44f2061570d-kernel-sheaf: mathematical-premise
  def-author-cf6ede58b450-site-plus-data: mathematical-premise
  math:def-group: mathematical-premise
  math:def-group-homomorphism: mathematical-premise
  math:def-functor-and-contravariant-functor: mathematical-premise
  math:def-natural-transformation: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
  math:def-preadditive-category: mathematical-premise
  math:def-additive-functor: mathematical-premise
  math:def-abelian-category: mathematical-premise
  math:def-additive-category: mathematical-premise
  math:def-left-exact-and-right-exact-functor: mathematical-premise
  math:thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels: mathematical-premise
  math:def-kernels-and-cokernels-as-equalizers-and-coequalizers: mathematical-premise
  math:def-exact-sequence-and-short-exact-sequence-in-an-abelian-category: mathematical-premise
  math:def-exactness-at-a-node: mathematical-premise
  math:def-image-and-coimage-in-a-category-with-kernels-and-cokernels: mathematical-premise
  math:def-monomorphism-and-epimorphism: mathematical-premise
  math:cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero: mathematical-premise
  math:thm-every-monomorphism-is-the-kernel-of-its-cokernel: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 7
---

## Statement
For an object $U$ of a small site, evaluation $F\mapsto F(U)$ is additive and preserves kernels of morphisms of abelian sheaves. Consequently, once the category of abelian sheaves is known to be abelian, evaluation is left exact: it preserves exact sequences of the form $0\to F'\to F\to F''$.

## Facts & Assumptions

**Given:** An object $U$ of a small site $(\mathcal C,J)$, with the relative-smallness conventions of [F0]. The assertion about left exactness is conditional on the abelian-category hypothesis in the Statement; no abelianness theorem for sheaves is assumed to prove additivity or kernel preservation.

**Goal:** Prove the stated properties of evaluation, with left exactness understood as finite-limit preservation.

[F0] Small sites, covering sieves, compatible matching families and unique amalgamation are as defined in [[def-author-cf6ede58b450-site-plus-data]].

[F1] Kernels of abelian sheaf morphisms are computed objectwise, as categorical kernels. [[lem-author-a44f2061570d-kernel-sheaf]] The kernel of $f$ means an arrow $k$ with $fk=0$ through which every arrow killed by $f$ factors uniquely; cokernels have the dual universal property. [[math:def-kernels-and-cokernels-as-equalizers-and-coequalizers]]

[F2] Write $\mathbf{Ab}$ for the category of abelian groups and group homomorphisms, with the size bounds of [F0]. An abelian sheaf on $(\mathcal C,J)$ means a contravariant functor $F:\mathcal C\to\mathbf{Ab}$ whose underlying set-valued presheaf has unique amalgamation for every matching family on a covering sieve. Thus its restriction maps are group homomorphisms. [[math:def-group]] [[math:def-group-homomorphism]] [[math:def-functor-and-contravariant-functor]] The category $\mathbf{Ab}$ is abelian, with the usual pointwise addition of homomorphisms. [[math:thm-abelian-groups-form-an-abelian-category]]

[F3] Let $\operatorname{ShAb}(\mathcal C)$ have these sheaves as objects and natural transformations with group-homomorphism components as morphisms. Identities and composition are componentwise. Evaluation $\operatorname{ev}_U$ sends $F$ to $F(U)$ and a morphism $a:F\to G$ to $a_U:F(U)\to G(U)$. For parallel morphisms, define $(a+b)_V=a_V+b_V$, $(-a)_V=-a_V$ and $(0_{F,G})_V=0$ at every object $V$. [[math:def-natural-transformation]] [[math:def-functor-and-contravariant-functor]]

[F4] A preadditive category has abelian hom-groups and bilinear composition. A functor between preadditive categories is additive when its maps on hom-groups are group homomorphisms. [[math:def-preadditive-category]] [[math:def-additive-functor]]

[F5] An abelian category is additive; an additive category is preadditive with finite biproducts. Left exact means preservation of every existing finite limit. An additive functor between additive categories is left exact exactly when it preserves kernels. [[math:def-abelian-category]] [[math:def-additive-category]] [[math:def-left-exact-and-right-exact-functor]] [[math:thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels]]

[F6] A sequence in an abelian category is called exact when it is exact at every interior object; exactness of $A\xrightarrow{i}B\xrightarrow{p}C$ at $B$ means that $\operatorname{im}(i)$ and $\ker(p)$ represent the same subobject of $B$, that is, their inclusion arrows differ by an isomorphism of their domains commuting with the maps into $B$. The image arrow is the kernel of a cokernel. [[math:def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]] [[math:def-exactness-at-a-node]] [[math:def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]

[F7] Monic means left cancellable. In an abelian category a morphism is monic exactly when its kernel is zero, and every monomorphism is a kernel of its cokernel; hence a monomorphism itself represents its image subobject, using [F6]. [[math:def-monomorphism-and-epimorphism]] [[math:cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]] [[math:thm-every-monomorphism-is-the-kernel-of-its-cokernel]]

## Proof

**Proof technique:** Construct the evaluation functor on morphisms, evaluate kernels, and apply the additive kernel criterion before checking the sequence formulation.

1.1 By [F3], evaluation preserves identities and composition, so it is a functor. Sums and negatives in [F3] are again group homomorphisms because the target groups are abelian; the naturality equation for a sum or negative follows by adding or negating the component naturality equations. Thus these operations give abelian hom-groups, and composition is bilinear because every component is a homomorphism. This makes $\operatorname{ShAb}(\mathcal C)$ preadditive. Evaluation preserves these operations componentwise, so it is additive in the sense of [F4]. The presheaf $V\mapsto 0$ with unique restrictions has unique amalgamation, and is a zero object because maps to and from it are unique; it evaluates to the zero group. By [F1], evaluation of each kernel inclusion is the kernel inclusion of the evaluated homomorphism. Any other choice of categorical kernel is isomorphic to that kernel by its universal property, and functors preserve isomorphisms, so evaluation preserves kernels independently of that choice. [F0, F1, F2, F3, F4, given]

2.1 Now assume $\operatorname{ShAb}(\mathcal C)$ is abelian. It and $\mathbf{Ab}$ are additive by [F2] and [F5], so [F5] applied to step 1.1 proves that evaluation preserves finite limits. For the sequence assertion, take an exact $0\to A\xrightarrow{i}B\xrightarrow{p}C$. By [F6], $\ker(i)=\operatorname{im}(0\to A)=0$: the identity of $A$ is a cokernel of $0\to A$, and its kernel is zero by the universal properties in [F1]. Hence $i$ is monic by [F7], so $i$ represents its image subobject. Exactness at $B$ in [F6] then identifies $i$ with a kernel of $p$, including the arrow into $B$. Step 1.1 therefore makes $i_U$ a kernel of $p_U$. Such a kernel homomorphism is injective and has image $\ker(p_U)$: compare its universal property with the subgroup inclusion $\ker(p_U)\hookrightarrow B(U)$. Together with preservation of the zero object in step 1.1 this gives exactness of $0\to A(U)\to B(U)\to C(U)$ at both interior groups, as required. [F1, F2, F5, F6, F7, step 1.1] ∎
