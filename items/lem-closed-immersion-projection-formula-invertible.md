---
id: lem-closed-immersion-projection-formula-invertible
kind: lemma
title: "Projection formula for a closed immersion and an invertible sheaf"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - cor-change-of-rings-for-extension-of-scalars
  - def-axiom-of-choice
  - def-closed-immersion-schemes
  - def-coherent-module-scheme
  - def-direct-image-sheaf
  - def-euler-characteristic-coherent-sheaf
  - def-invertible-sheaf
  - def-locally-free-sheaf-finite-rank
  - def-locally-noetherian-and-noetherian-scheme
  - def-pullback-module-ringed-spaces
  - def-quasi-coherent-module-scheme
  - def-sheaf-tensor-product
  - def-stalk-of-presheaf
  - def-topological-space
  - lem-closed-immersion-cohomology-pushforward
  - lem-direct-image-is-sheaf
  - lem-pullback-qc-module-quasi-coherent
  - lem-stalk-inverse-image-sheaf
  - lem-stalk-tensor-product
  - lem-tensor-qc-modules-quasi-coherent
  - thm-associativity-of-balanced-tensor-products
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-pullback-pushforward-module-adjunction
  - thm-sheaf-morphism-isomorphism-stalkwise
  - thm-unit-isomorphisms-for-module-tensor-products
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "The Stacks Project, Cohomology, Section 20.54 (tag 01E6)"
      url: "https://stacks.math.columbia.edu/tag/01E6"
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Statement

Let $i:Z\to X$ be a closed immersion of schemes
([[def-closed-immersion-schemes]]), let $\mathcal L$ be an invertible
$\mathcal O_X$-module ([[def-invertible-sheaf]]) and let $\mathcal G$ be a
quasi-coherent $\mathcal O_Z$-module ([[def-quasi-coherent-module-scheme]]).
Then the canonical map
$$\mathcal L\otimes_{\mathcal O_X}i_*\mathcal G\longrightarrow i_*\bigl(i^*\mathcal L\otimes_{\mathcal O_Z}\mathcal G\bigr)$$
is an isomorphism of $\mathcal O_X$-modules; here $i_*$ is the direct image
([[def-direct-image-sheaf]]), $i^*$ is the pullback of modules
([[def-pullback-module-ringed-spaces]]) and $\otimes$ is the tensor product of
sheaves of modules ([[def-sheaf-tensor-product]]).

If moreover $X$ is locally Noetherian
([[def-locally-noetherian-and-noetherian-scheme]]) and $\mathcal G$ is
coherent ([[def-coherent-module-scheme]]), then both sides are coherent
$\mathcal O_X$-modules, and for every $q\ge 0$ there is an isomorphism
$$H^q\bigl(X,\mathcal L\otimes i_*\mathcal G\bigr)\cong H^q\bigl(Z,i^*\mathcal L\otimes\mathcal G\bigr);$$
in particular $\chi(X,\mathcal L\otimes i_*\mathcal G)=\chi(Z,i^*\mathcal L\otimes\mathcal G)$
whenever $X$ is proper over a field. The Euler-characteristic and coherence
clauses inherit the Axiom of Choice through
[[lem-closed-immersion-cohomology-pushforward]] and
[[def-euler-characteristic-coherent-sheaf]], while the stalkwise isomorphism
itself is choice-free beyond the cited sheaf and tensor constructions.

## Facts & Assumptions

**Given:** a closed immersion $i:Z\to X$ of schemes, an invertible $\mathcal O_X$-module $\mathcal L$, a quasi-coherent $\mathcal O_Z$-module $\mathcal G$, and the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] A closed immersion is a morphism whose underlying map is a homeomorphism onto a closed subset $Z\subseteq X$ and for which $\mathcal O_X\to i_*\mathcal O_Z$ is surjective ([[def-closed-immersion-schemes]]). In particular $i^{-1}(U)=U\cap Z$ for every open $U\subseteq X$, the assignment $U\mapsto U\cap Z$ is a surjection from the open subsets of $X$ onto the open subsets of $Z$, and the open neighbourhoods $U\cap Z$ of a point $z\in Z$, with $U$ an open neighbourhood of $z$ in $X$, are cofinal among the open neighbourhoods of $z$ in $Z$ ([[def-topological-space]]).

[F2] Direct image is precomposition: $(i_*\mathcal F)(U)=\mathcal F(i^{-1}U)$ with the evident restrictions, and it is a sheaf when $\mathcal F$ is ([[def-direct-image-sheaf]], [[lem-direct-image-is-sheaf]]). The stalk at $z\in X$ is the filtered colimit $\varinjlim_{U\ni z}\mathcal F(i^{-1}U)$ over open neighbourhoods $U$ of $z$ ([[def-stalk-of-presheaf]]).

[F3] Pullback: $i^*\mathcal L=\mathcal O_Z\otimes_{i^{-1}\mathcal O_X}i^{-1}\mathcal L$ is an $\mathcal O_Z$-module ([[def-pullback-module-ringed-spaces]]); it is quasi-coherent when $\mathcal L$ is quasi-coherent ([[lem-pullback-qc-module-quasi-coherent]]), and invertible $\mathcal O_X$-modules are quasi-coherent ([[def-invertible-sheaf]], [[def-locally-free-sheaf-finite-rank]]). For every point $z$ the stalks satisfy $(i^{-1}\mathcal L)_z\cong\mathcal L_{i(z)}=\mathcal L_z$ and $(i^{-1}\mathcal O_X)_z\cong\mathcal O_{X,z}$ ([[lem-stalk-inverse-image-sheaf]]); the stalk of a tensor product of $\mathcal O$-modules on a ringed space is the tensor product of the stalks over the stalk of the ring ([[lem-stalk-tensor-product]]).

[F4] Module identifications: for a homomorphism of commutative rings $R\to S$, a right $S$-module $N$ and a left $R$-module $M$ there is a natural isomorphism $N\otimes_RM\cong N\otimes_S(S\otimes_RM)$ ([[cor-change-of-rings-for-extension-of-scalars]]); tensor products over a commutative ring are associative ([[thm-associativity-of-balanced-tensor-products]]); and $R\otimes_RN\cong N\cong N\otimes_RR$ for every $R$-module $N$ ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F5] A morphism of sheaves on a topological space is an isomorphism if and only if it is bijective on every stalk ([[thm-sheaf-morphism-isomorphism-stalkwise]]).

[F6] Tensor products of quasi-coherent modules are quasi-coherent ([[lem-tensor-qc-modules-quasi-coherent]]); on a locally Noetherian scheme a quasi-coherent module is coherent if and only if it is of finite type, and coherence is a local condition on the scheme ([[thm-coherent-sheaves-abelian-noetherian-scheme]], [[def-coherent-module-scheme]]).

[F7] Assume AC. For a quasi-coherent $\mathcal O_Z$-module $\mathcal F$ and every $q\ge0$ there is a canonical isomorphism $H^q(Z,\mathcal F)\cong H^q(X,i_*\mathcal F)$; if $X$ is locally Noetherian and $\mathcal F$ coherent, then $i_*\mathcal F$ is coherent ([[lem-closed-immersion-cohomology-pushforward]], [[def-euler-characteristic-coherent-sheaf]]). The Axiom of Choice is inherited from these suppliers; the change-of-rings identification of [F4] and the stalk computations below make no selection.

## Proof

**Proof technique:** direct; exhibit the canonical map, compute it on stalks, where it is the change-of-rings identification, and conclude by the stalkwise criterion.

1.1 The canonical map. Pullback of modules is left adjoint to pushforward ([[thm-pullback-pushforward-module-adjunction]]), so the identity of the $\mathcal O_Z$-module $i^*\mathcal L$ corresponds to a canonical $\mathcal O_X$-linear map $\lambda:\mathcal L\to i_*i^*\mathcal L$. There is also the canonical map $i^{-1}\mathcal L\to i^*\mathcal L=\mathcal O_Z\otimes_{i^{-1}\mathcal O_X}i^{-1}\mathcal L$, $s\mapsto1\otimes s$ ([[def-pullback-module-ringed-spaces]]). Define, for every open $U\subseteq X$, the $\mathcal O_X(U)$-bilinear map $$\mathcal L(U)\times(i_*\mathcal G)(U)\longrightarrow(i^*\mathcal L\otimes_{\mathcal O_Z}\mathcal G)(i^{-1}U),\qquad(\ell,s)\longmapsto\lambda(\ell)|_{i^{-1}U}\otimes s.$$ These maps are compatible with the restriction maps, so they assemble into a morphism from the tensor presheaf of [[def-sheaf-tensor-product]] to the sheaf $i_*(i^*\mathcal L\otimes\mathcal G)$, and hence, by the universal property of sheafification, into a morphism of $\mathcal O_X$-modules $$\Theta:\mathcal L\otimes_{\mathcal O_X}i_*\mathcal G\longrightarrow i_*\bigl(i^*\mathcal L\otimes_{\mathcal O_Z}\mathcal G\bigr).$$ [F1, F3]

1.2 Stalks off $Z$. Let $x\in X\setminus Z$. Since $Z$ is closed, $X\setminus Z$ is an open neighbourhood of $x$ with $i^{-1}(X\setminus Z)=\varnothing$, so in the colimit of [F2] the groups $\mathcal G(i^{-1}U)$ vanish for all open $U\subseteq X\setminus Z$; as these $U$ are cofinal among the neighbourhoods of $x$, the stalk $(i_*\mathcal G)_x$ is $0$. Hence $(\mathcal L\otimes i_*\mathcal G)_x\cong\mathcal L_x\otimes(i_*\mathcal G)_x=0$ by [F3]. Applying the same argument to the quasi-coherent module $i^*\mathcal L\otimes\mathcal G$ in place of $\mathcal G$ gives $\bigl(i_*(i^*\mathcal L\otimes\mathcal G)\bigr)_x=0$. Thus $\Theta_x$ is a map $0\to0$, hence bijective. [F1, F2, F3]

1.3 Stalks on $Z$. Let $z\in Z$. Every open neighbourhood of $z$ in $Z$ has the form $U\cap Z$ with $U$ an open neighbourhood of $z$ in $X$ ([[def-closed-immersion-schemes]]), and these are cofinal in the neighbourhood system of $z$ in $Z$ by [F1]; comparing the colimit description [F2] of the stalk of $i_*\mathcal G$ with the defining colimit of the stalk of $\mathcal G$ ([[def-stalk-of-presheaf]]) gives a canonical isomorphism $(i_*\mathcal G)_z\cong\mathcal G_z$, compatible with the $\mathcal O_{X,z}$-module structure because the action on $\mathcal G_z$ factors through $\mathcal O_{X,z}\to\mathcal O_{Z,z}$. Similarly $\bigl(i_*(i^*\mathcal L\otimes\mathcal G)\bigr)_z\cong(i^*\mathcal L\otimes\mathcal G)_z$. [F1, F2, F3]

2.1 Put $R=\mathcal O_{X,z}$ and $S=\mathcal O_{Z,z}$. By [F3] the source stalk is $\mathcal L_z\otimes_R\mathcal G_z$ and the target is $(S\otimes_R\mathcal L_z)\otimes_S\mathcal G_z$. The map sends $\ell\otimes g$ to $(1\otimes\ell)\otimes g$. Its inverse sends $(s\otimes\ell)\otimes g$ to $\ell\otimes sg$: the $R$-balancing relation in $S\otimes_R\mathcal L_z$ and the $S$-balancing relation of the outer tensor both give the same element, so this formula is well defined. The composites are identities, since $(s\otimes\ell)\otimes g=(1\otimes\ell)\otimes sg$. Thus $\Theta_z$ is an isomorphism. [F3, F4, step 1.3]

3.1 Conclusion of the isomorphism. By step 1.2 the stalk $\Theta_x$ is bijective for every $x\in X\setminus Z$, and by step 2.1 it is bijective for every $z\in Z$; hence $\Theta$ is an isomorphism of $\mathcal O_X$-modules by [F5]. This proves the first clause. [F5, step 1.2, step 2.1]

4.1 Coherence clause. Assume now that $X$ is locally Noetherian and that $\mathcal G$ is coherent. Then $i_*\mathcal G$ is a coherent $\mathcal O_X$-module by [F7]. The invertible module $\mathcal L$ is locally free of rank one ([[def-invertible-sheaf]]), so $X$ is covered by open subschemes $U$ with $\mathcal L|_U\cong\mathcal O_U$; over such $U$ the unit isomorphism of [F4] and the stalk computations of [F3] give $(\mathcal L\otimes i_*\mathcal G)|_U\cong(i_*\mathcal G)|_U$. Since coherence is local on $X$ and $i_*\mathcal G$ is coherent ([F6], [F7]), the sheaf $\mathcal L\otimes i_*\mathcal G$ is coherent; its isomorphic image $i_*(i^*\mathcal L\otimes\mathcal G)$ under the isomorphism of step 3.1 is coherent as well. [F4, F6, F7, step 3.1]

5.1 Cohomology and Euler characteristic. With $X$ locally Noetherian and $\mathcal G$ coherent, the isomorphism of step 3.1 identifies $H^q(X,\mathcal L\otimes i_*\mathcal G)$ with $H^q(X,i_*(i^*\mathcal L\otimes\mathcal G))$ for every $q\ge0$; the quasi-coherent module $i^*\mathcal L\otimes\mathcal G$ satisfies $H^q(X,i_*(i^*\mathcal L\otimes\mathcal G))\cong H^q(Z,i^*\mathcal L\otimes\mathcal G)$ by [F7] and [F6]. Hence $H^q(X,\mathcal L\otimes i_*\mathcal G)\cong H^q(Z,i^*\mathcal L\otimes\mathcal G)$ for every $q\ge0$. When $X$ is proper over a field, the left side is an alternating sum of finite-dimensional vector spaces ([[def-euler-characteristic-coherent-sheaf]], step 4.1), so the termwise isomorphic right side gives $\chi(X,\mathcal L\otimes i_*\mathcal G)=\chi(Z,i^*\mathcal L\otimes\mathcal G)$. The Axiom of Choice enters only through the suppliers named in [F7]; steps 1.1--3.1 make no selection. [F7, step 3.1, step 4.1] ∎
