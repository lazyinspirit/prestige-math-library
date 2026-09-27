---
id: "lem-sheaf-supported-on-a-closed-subset-is-a-pushforward"
kind: "lemma"
title: "A sheaf with no stalks off a closed subset is a pushforward"
status: published
origin: pipeline
deps: [def-direct-image-sheaf, lem-direct-image-is-sheaf, def-stalk-of-presheaf, lem-sheaf-section-over-empty-set-terminal, def-subspace-topology-top, thm-inverse-direct-image-adjunction, lem-stalk-inverse-image-sheaf, thm-sheaf-morphism-isomorphism-stalkwise, def-sheaf-on-topological-space, thm-abelian-sheaves-form-abelian-category, def-topological-space, def-restriction-sheaf-open-subspace]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Sheaves on Spaces"
      url: https://stacks.math.columbia.edu/download/sheaves.pdf
---

## Statement

Let $i:Z\hookrightarrow X$ be the inclusion of a closed subset
$Z\subseteq X$ carrying the subspace topology ([[def-subspace-topology-top]]), and
let $\mathcal G$ be a sheaf of abelian groups on $X$
([[def-sheaf-on-topological-space]], [[thm-abelian-sheaves-form-abelian-category]])
whose stalks vanish off $Z$, that is $\mathcal G_x=0$ for every $x\in X\setminus Z$
([[def-stalk-of-presheaf]]). Then the unit
$$\eta:\mathcal G\longrightarrow i_*i^{-1}\mathcal G$$
of the adjunction ([[thm-inverse-direct-image-adjunction]]) between inverse image
and direct image ([[def-direct-image-sheaf]], [[lem-direct-image-is-sheaf]]) is an
isomorphism of sheaves of abelian groups; equivalently
$\mathcal G\cong i_*(\mathcal G|_Z)$ under the identification
$\mathcal G|_Z=i^{-1}\mathcal G$ ([[def-restriction-sheaf-open-subspace]]).

## Facts & Assumptions

[F1] Direct image is $(f_*\mathcal F)(V)=\mathcal F(f^{-1}(V))$ on open $V\subseteq Y$ ([[def-direct-image-sheaf]]), and it sends sheaves to sheaves ([[lem-direct-image-is-sheaf]]).

[F2] The stalk of a presheaf at $x$ is the filtered colimit of its section groups over the open neighbourhoods of $x$ ([[def-stalk-of-presheaf]]).

[F3] For a sheaf $\mathcal F$ of sets, $\mathcal F(\varnothing)$ is a singleton ([[lem-sheaf-section-over-empty-set-terminal]]).

[F4] Open subsets of the subspace $S\subseteq X$ are exactly the traces $U\cap S$ of open subsets of $X$ ([[def-subspace-topology-top]]).

[F5] Inverse image is left adjoint to direct image, $\operatorname{Hom}_X(f^{-1}\mathcal G,\mathcal F)\cong\operatorname{Hom}_Y(\mathcal G,f_*\mathcal F)$, with unit the adjunct of the identity of $f^{-1}\mathcal G$ ([[thm-inverse-direct-image-adjunction]]).

[F6] The stalk of an inverse image is the stalk at the image point, $(f^{-1}\mathcal G)_x\cong\mathcal G_{f(x)}$ ([[lem-stalk-inverse-image-sheaf]]).

[F7] A morphism of sheaves of sets is an isomorphism if and only if all its stalk maps are bijections ([[thm-sheaf-morphism-isomorphism-stalkwise]]).

## Proof

**Given:** A closed subset $Z\subseteq X$ with inclusion $i$, a sheaf of abelian groups $\mathcal G$ on $X$ with $\mathcal G_x=0$ for all $x\in X\setminus Z$, and the unit $\eta:\mathcal G\to i_*i^{-1}\mathcal G$ of the adjunction of [F5].

1.1 Let $\mathcal H:=i_*i^{-1}\mathcal G$, a sheaf of abelian groups on $X$ by [F1]. For $z\in Z$ the traces $V\cap Z$ of the open neighbourhoods $V$ of $z$ in $X$ are cofinally the open neighbourhoods of $z$ in $Z$ [F4], so [F1] and [F2] give $\mathcal H_z\cong(i^{-1}\mathcal G)_z$, and $(i^{-1}\mathcal G)_z\cong\mathcal G_z$ by [F6]. For $x\notin Z$ the open set $X\setminus Z$ contains $x$ and meets $Z$ in the empty set, so the colimit of [F2] is computed by the subdiagram of neighbourhoods $V$ with $V\cap Z=\varnothing$, on which $\mathcal H$ has the constant value $(i^{-1}\mathcal G)(\varnothing)$, a singleton by [F3] and hence the zero group; thus $\mathcal H_x=0$ for every $x\notin Z$. [F1, F2, F3, F4, F6]

2.1 Let $z\in Z$. Composing the stalk map $\eta_z:\mathcal G_z\to\mathcal H_z$ with the identifications of [step 1.1] gives a map $\mathcal G_z\to(i^{-1}\mathcal G)_z\cong\mathcal G_z$, and this composite is the identity: the unit is the adjunct of the identity of $i^{-1}\mathcal G$ under the adjunction [F5], a section $s\in\mathcal G(V)$ over an open $V\ni z$ is sent to the class of $s$ in the colimit defining $(i^{-1}\mathcal G)(V\cap Z)$ because $V$ is one of the open sets tested in that colimit, and the identification $(i^{-1}\mathcal G)_z\cong\mathcal G_z$ of [F6] sends that class to the germ of $s$. Hence $\eta_z$ is an isomorphism for every $z\in Z$. [F5, F6, step 1.1]

2.2 Let $x\notin Z$. By hypothesis $\mathcal G_x=0$ and by [step 1.1] also $\mathcal H_x=0$, so the stalk map $\eta_x$ is a map $0\to0$, hence a bijection. [step 1.1]

3.1 Every point of $X$ lies in $Z$ or in $X\setminus Z$, so [step 2.1] and [step 2.2] show that all stalk maps of $\eta$ are bijections; by [F7] the morphism $\eta$ is an isomorphism of sheaves of sets, and since $\mathcal G$ and $\mathcal H$ are sheaves of abelian groups whose structure is determined by the underlying sheaves of sets with their addition, $\eta$ is an isomorphism of sheaves of abelian groups. ∎ [F7, step 2.1, step 2.2]
