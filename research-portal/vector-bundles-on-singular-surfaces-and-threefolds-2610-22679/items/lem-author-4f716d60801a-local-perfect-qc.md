---
id: lem-author-4f716d60801a-local-perfect-qc
kind: lemma
title: Local perfection implies quasi-coherent cohomology
status: published
domain: mathematics
deps:
  - lem-author-4f716d60801a-finite-projective-model
  - lem-author-4f716d60801a-restriction-support
  - thm-author-4f716d60801a-local-perfect-input
  - thm-author-4f716d60801a-affine-derived-input
  - math:def-axiom-of-choice
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-grothendieck-universe-closure-convention
  - math:def-scheme
  - math:def-module-on-ringed-space
  - math:thm-abelian-sheaves-form-abelian-category
  - math:def-derived-category-of-an-abelian-category
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-quasi-isomorphism
  - math:def-locally-free-sheaf-finite-rank
  - math:def-quasi-coherent-module-scheme
  - math:def-restriction-sheaf-open-subspace
  - math:def-affine-scheme
  - math:def-associated-sheaf-module-affine-scheme
  - math:def-cohomology-object-of-a-cochain-complex
  - math:def-exact-functor-between-abelian-categories
  - math:thm-an-exact-functor-commutes-with-homology
  - math:def-left-and-right-modules
  - math:thm-modules-over-a-ring-form-an-abelian-category
dependency_roles:
  lem-author-4f716d60801a-finite-projective-model: mathematical-premise
  lem-author-4f716d60801a-restriction-support: mathematical-premise
  thm-author-4f716d60801a-local-perfect-input: mathematical-premise
  thm-author-4f716d60801a-affine-derived-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:thm-abelian-sheaves-form-abelian-category: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:def-cochain-complex-in-an-abelian-category: mathematical-premise
  math:def-quasi-isomorphism: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-quasi-coherent-module-scheme: mathematical-premise
  math:def-restriction-sheaf-open-subspace: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-associated-sheaf-module-affine-scheme: mathematical-premise
  math:def-cohomology-object-of-a-cochain-complex: mathematical-premise
  math:def-exact-functor-between-abelian-categories: mathematical-premise
  math:thm-an-exact-functor-commutes-with-homology: mathematical-premise
  math:def-left-and-right-modules: mathematical-premise
  math:thm-modules-over-a-ring-form-an-abelian-category: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
---

## Statement
Assume the Axiom of Choice and fix suitable Grothendieck universes containing $\omega$ and the scheme data, with larger universes for the categories. Existence of these universes is a standing size assumption. All module and sheaf data are taken relative to the fixed base universe. Let $X$ be any scheme in that universe and let $\mathcal A_X=\operatorname{Mod}(\mathcal O_X)$ be the abelian category of all Zariski $\mathcal O_X$-module sheaves in that convention. Write $D(\mathcal O_X)=D(\mathcal A_X)$ for its ordinary unbounded cochain derived category, and $\mathcal D(X)$ for its derived infinity-category, whose homotopy category is $D(\mathcal O_X)$.

An object $E\in\mathcal D(X)$ is locally perfect if each point has an open neighbourhood $U$ on which the image of $E|_U$ in $D(\mathcal O_U)$ is isomorphic to a bounded complex of finite locally free $\mathcal O_U$-modules. Here bounded means zero outside a finite interval of degrees; finite locally free means locally a finite direct sum of copies of the structure sheaf. Restriction uses $\mathcal O_U=\mathcal O_X|_U$. This condition is independent of the chosen derived representative and local on $X$. Every object satisfying it has quasi-coherent cohomology sheaves $H^n(E)$ for all integers $n$. The finite bounds may depend on the open set; neither a uniform global bound nor globally constant ranks are required.

## Statement references
[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

[[math:def-scheme]]

[[math:def-module-on-ringed-space]]

[[math:thm-abelian-sheaves-form-abelian-category]]

[[math:def-derived-category-of-an-abelian-category]]

[[math:def-cochain-complex-in-an-abelian-category]]

[[math:def-quasi-isomorphism]]

[[math:def-locally-free-sheaf-finite-rank]]

[[math:def-quasi-coherent-module-scheme]]

[[math:def-restriction-sheaf-open-subspace]]

[[math:def-cohomology-object-of-a-cochain-complex]]

[[thm-author-4f716d60801a-derived-enhancement-input]]

## Facts & Assumptions
**Given:** A scheme $X$ and a locally perfect object $E\in\mathcal D(X)$, under the Choice and universe assumptions in the Statement.

**Goal:** Prove independence of representatives, locality and quasi-coherence of every cohomology sheaf, without a uniform global bound.

[A1] [[math:def-axiom-of-choice]] is retained for the imported derived constructions and affine comparisons. [[math:def-grothendieck-universe-closure-convention]] specifies the universe convention; their existence is separately assumed. These are the assumptions of [[thm-author-4f716d60801a-derived-enhancement-input]], which supplies $\mathcal D(X)$ and identifies its homotopy category with $D(\mathcal A_X)$. Thus equivalences of enhanced objects give exactly isomorphisms of objects in the ordinary derived category.

[F0] [[math:def-scheme]] specifies $(X,\mathcal O_X)$; [[math:def-module-on-ringed-space]] specifies the module sheaves and their linear maps. [[math:thm-abelian-sheaves-form-abelian-category]] makes their category abelian, so [[math:def-derived-category-of-an-abelian-category]] applies, with its size caveat discharged by [A1]. Use the cochains of [[math:def-cochain-complex-in-an-abelian-category]] and the quasi-isomorphisms of [[math:def-quasi-isomorphism]], read by $C^\sharp_n=C^{-n}$. Finite local freeness and its preservation under open restriction are as in [[math:def-locally-free-sheaf-finite-rank]]. The restriction operation itself is [[math:def-restriction-sheaf-open-subspace]].

[F1] [[thm-author-4f716d60801a-local-perfect-input]] gives invariance and locality of perfection, and its bounded finite locally free characterization on schemes, under the stated Choice and universe assumptions.

[F2] On an affine open in the sense of [[math:def-affine-scheme]], [[lem-author-4f716d60801a-finite-projective-model]] gives a bounded module-complex model for each bounded finite locally free complex. The associated-sheaf construction is [[math:def-associated-sheaf-module-affine-scheme]]. [[thm-author-4f716d60801a-affine-derived-input]] supplies exactness of this functor on modules. Modules here are unital left modules as in [[math:def-left-and-right-modules]], and [[math:thm-modules-over-a-ring-form-an-abelian-category]] supplies their abelian category, so the cohomology theorem in [F4] applies to this source and the module-sheaf target.

[F3] [[lem-author-4f716d60801a-restriction-support]] gives $H^n(E|_U)\cong H^n(E)|_U$ and invariance of cohomology under derived equivalence.

[F4] [[math:def-cohomology-object-of-a-cochain-complex]] defines $H^n(C)=\ker(d^n)/\operatorname{im}(d^{n-1})$. Exactness has the meaning in [[math:def-exact-functor-between-abelian-categories]]. [[math:thm-an-exact-functor-commutes-with-homology]], applied after the reindexing $C^\sharp_n=C^{-n}$, gives $H^n(\widetilde{P^\bullet})\cong\widetilde{H^n(P^\bullet)}$ for every module complex $P^\bullet$ by exactness in [F2].

[F5] [[math:def-quasi-coherent-module-scheme]] defines quasi-coherence by local affine associated-module presentations and states its invariance under isomorphism and locality on open covers. Its locality discussion also recalls that every point of an open subscheme has an affine open neighbourhood contained in that open. In particular, an associated sheaf on an affine scheme satisfies the quasi-coherence condition by taking that whole affine scheme as the neighbourhood.

## Proof
1.1 By [A1], the local condition can be interpreted in the ordinary derived category, where [F1] gives invariance under isomorphism and locality on open covers. In particular it is unchanged by changing a complex representative or by equivalence in $\mathcal D(X)$. Restricting a local representative to a smaller open set preserves its boundedness and the finite local freeness of its terms by [F0]; hence these presentations can be refined without imposing a common bound. [A1, F0, F1, given]

2.1 Refine the local presentations to affine opens $U=\operatorname{Spec}A$, using the affine neighbourhood property recalled in [F5]. By [F2], on each such open the representative is $\widetilde{P^\bullet}$ for a bounded module complex $P^\bullet$. For every integer $n$, exactness in [F2] and the cohomology theorem in [F4] give $H^n(\widetilde{P^\bullet})\cong\widetilde{H^n(P^\bullet)}$. By [F3] and the local derived isomorphism, this is $H^n(E)|_U$. The right side is an associated module sheaf, hence quasi-coherent by [F5]. Applying the locality in [F5] to this affine open cover proves that $H^n(E)$ is quasi-coherent on $X$. The construction imposes no common global degree bound or constant rank. [F0, F2, F3, F4, F5, step 1.1] ∎
