---
id: lem-adjudicate-dba56f870de6-closed-immersion-residue-fields
kind: lemma
title: Closed immersions preserve residue fields
status: published
domain: mathematics
deps:
  - math:def-closed-immersion-schemes
  - math:def-morphism-of-schemes
  - math:def-local-ring
  - math:def-stalk-of-presheaf
  - math:def-direct-image-sheaf
  - math:thm-exactness-of-sheaves-stalkwise
  - math:lem-local-homomorphism-residue-field-map
dependency_roles:
  math:def-closed-immersion-schemes: mathematical-premise
  math:def-morphism-of-schemes: mathematical-premise
  math:def-local-ring: mathematical-premise
  math:def-stalk-of-presheaf: mathematical-premise
  math:def-direct-image-sheaf: mathematical-premise
  math:thm-exactness-of-sheaves-stalkwise: mathematical-premise
  math:lem-local-homomorphism-residue-field-map: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Let $i:Z\to X$ be a closed immersion of schemes. For every $z\in Z$, putting $x=i(z)$, the local stalk homomorphism $\mathcal O_{X,x}\to\mathcal O_{Z,z}$ is surjective and its induced residue-field homomorphism $\kappa(x)\to\kappa(z)$ is an isomorphism. The residue field of a local ring is its quotient by its unique maximal ideal. No additional finiteness, noetherian or reducedness hypothesis is required.

## Statement references
[[math:def-closed-immersion-schemes]]

[[math:def-morphism-of-schemes]]

[[math:def-local-ring]]

[[math:def-stalk-of-presheaf]]

[[math:lem-local-homomorphism-residue-field-map]]

## Facts & Assumptions

**Given:** A closed immersion $i:Z\to X$ and a point $z\in Z$, with $x=i(z)$.

[F1] A closed immersion is a homeomorphism onto a closed subset and has a surjective structure-sheaf morphism $\mathcal O_X\to i_*\mathcal O_Z$. [[math:def-closed-immersion-schemes]]

[F2] A morphism of schemes is a morphism of the underlying locally ringed spaces; its stalk homomorphisms are local. [[math:def-morphism-of-schemes]]

[F3] Stalk elements are germs of sections over open neighbourhoods, with equality tested after restriction to a smaller neighbourhood. The direct image has sections $(i_*\mathcal O_Z)(U)=\mathcal O_Z(i^{-1}U)$ and the inherited restriction maps. [[math:def-stalk-of-presheaf]] [[math:def-direct-image-sheaf]]

[F4] A sequence of sheaves of abelian groups is exact if and only if its stalk sequences are exact. In particular a surjective structure-sheaf morphism is surjective on stalks, by applying this criterion to its underlying additive sheaves. [[math:thm-exactness-of-sheaves-stalkwise]]

[F5] The residue field of a local ring is its quotient by its unique maximal ideal. A local stalk map of a morphism of locally ringed spaces induces a unital field homomorphism on these quotients. [[math:def-local-ring]] [[math:lem-local-homomorphism-residue-field-map]]

## Proof

**Goal:** Prove surjectivity on local rings and the induced residue-field isomorphism.

**Proof technique:** Identify the direct-image stalk by germs and then pass to residue fields.

1.1 By [F1], every open neighbourhood $W$ of $z$ in $Z$ is $i^{-1}U$ for an open neighbourhood $U$ of $x$ in $X$: the image $i(W)$ is open in the subspace $i(Z)$, so it is $i(Z)\cap U$ for some open $U\subseteq X$, which necessarily contains $x$. Thus [F3] identifies $(i_*\mathcal O_Z)_x$ with $\mathcal O_{Z,z}$. Indeed every section germ at $z$ is represented on such an $i^{-1}U$, and equality of two germs is detected on another such neighbourhood, so the identification is both surjective and injective and respects ring operations. By [F4], the surjective sheaf morphism of [F1] induces a surjection $\mathcal O_{X,x}\to(i_*\mathcal O_Z)_x$. Under the germ identification this is the stalk homomorphism of $i$, proving its surjectivity. [F1, F3, F4, given]

2.1 By [F2] and [F5], this stalk homomorphism induces a unital field homomorphism $\kappa(x)\to\kappa(z)$. It is surjective: represent an element of $\kappa(z)$ by an element of $\mathcal O_{Z,z}$, lift it using step 1.1 and take the residue class of that lift. It is injective: if a nonzero source element mapped to zero, its inverse would force $1=0$ in the target field, a contradiction. Hence the induced homomorphism is an isomorphism. If $Z$ is empty, the pointwise assertions are vacuous. [F2, F5, step 1.1] ∎
