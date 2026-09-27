---
id: "lem-closed-immersion-preserves-sheaf-cohomology"
kind: "lemma"
title: "Pushforward along a closed immersion preserves sheaf cohomology"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-topological-space, def-subspace-topology-top, def-direct-image-sheaf, lem-direct-image-is-sheaf, def-stalk-of-presheaf, lem-sheaf-section-over-empty-set-terminal, thm-exactness-of-sheaves-stalkwise, thm-inverse-direct-image-adjunction, lem-stalk-inverse-image-sheaf, def-injective-object, def-injective-resolution-in-an-abelian-category, thm-abelian-sheaves-have-enough-injectives, def-sheaf-cohomology-derived-global-sections, def-right-derived-object-relative-to-injective-resolution-data, def-global-sections-functor-sheaves, def-cohomology-object-of-a-cochain-complex, lem-comparison-map-from-an-exact-complex-into-an-injective-resolution, thm-chain-homotopic-maps-induce-the-same-map-on-homology, prop-homology-respects-identities-and-composition, def-chain-homotopy, def-additive-functor, def-cochain-complex-in-an-abelian-category, def-sheaf-on-topological-space, thm-abelian-sheaves-form-abelian-category, def-morphism-of-presheaves]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $Z\subseteq X$
be a closed subset of a topological space ([[def-topological-space]]), equipped
with the subspace topology ([[def-subspace-topology-top]]), let
$i:Z\hookrightarrow X$ be the inclusion, and let $\mathcal F$ be a sheaf of
abelian groups on $Z$ ([[def-sheaf-on-topological-space]]). Then for every
$q\ge0$ there is an isomorphism
$$H^q(Z,\mathcal F)\cong H^q(X,i_*\mathcal F),$$
where $i_*\mathcal F$ is the direct image sheaf
([[def-direct-image-sheaf]], [[lem-direct-image-is-sheaf]]) and cohomology is
that of [[def-sheaf-cohomology-derived-global-sections]].

## Facts & Assumptions

[F1] Direct image is precomposition with the inverse image on open sets: $(f_*\mathcal F)(V)=\mathcal F(f^{-1}(V))$, with the evident restriction maps ([[def-direct-image-sheaf]]).

[F2] If $\mathcal F$ is a sheaf of abelian groups on $X$ and $f:X\to Y$ is continuous, then $f_*\mathcal F$ is a sheaf of abelian groups on $Y$ ([[lem-direct-image-is-sheaf]]).

[F3] A subset $C$ of a subspace $S\subseteq X$ is closed in $S$ exactly when $C=F\cap S$ for a closed $F\subseteq X$, and the inclusion $\iota:S\to X$ is continuous ([[def-subspace-topology-top]]).

[F4] The stalk of a presheaf at a point is the filtered colimit of its section groups over the open neighbourhoods of the point ([[def-stalk-of-presheaf]]).

[F5] For a sheaf of sets $\mathcal F$ on $X$ the group $\mathcal F(\varnothing)$ is a singleton; for an abelian sheaf it is therefore the zero group ([[lem-sheaf-section-over-empty-set-terminal]]).

[F6] A sequence of sheaves of abelian groups is exact if and only if its stalk sequence at every point is exact ([[thm-exactness-of-sheaves-stalkwise]]).

[F7] Inverse image is left adjoint to direct image: $\operatorname{Hom}_X(f^{-1}\mathcal G,\mathcal F)\cong\operatorname{Hom}_Y(\mathcal G,f_*\mathcal F)$, naturally in $\mathcal F$ and $\mathcal G$ ([[thm-inverse-direct-image-adjunction]]).

[F8] The stalk of an inverse image is the stalk at the image point, $(f^{-1}\mathcal G)_x\cong\mathcal G_{f(x)}$ ([[lem-stalk-inverse-image-sheaf]]).

[F9] An object $I$ is injective when every morphism $M\to I$ out of a subobject $M\rightarrowtail E$ extends to $E$ ([[def-injective-object]]).

[F10] Assume AC. Then $\mathrm{Ab}(X)$ has enough injectives, every abelian sheaf admits an injective resolution, and the construction supplies one injective resolution datum on the whole category $\mathrm{Ab}(X)$ ([[thm-abelian-sheaves-have-enough-injectives]], [[def-injective-resolution-in-an-abelian-category]]).

[F11] Assume AC and fix a supplied functorial injective resolution datum $I^\bullet$ on $\mathrm{Ab}(X)$. Then $H^q(X,\mathcal F):=R_I^q\Gamma(X,\mathcal F)$ is the cohomology of the complex $\Gamma(X,I^\bullet(\mathcal F)_{\mathrm{del}})$, and two supplied data on the same domain give the same cohomology groups up to the canonical comparison of right derived objects ([[def-sheaf-cohomology-derived-global-sections]], [[def-right-derived-object-relative-to-injective-resolution-data]]).

[F12] Assume DC. For a coaugmented complex $0\to A\to J^\bullet$ exact at every displayed term and a coaugmented complex $0\to B\to I^\bullet$ with injective terms, every morphism $u:A\to B$ extends to a coaugmentation-preserving cochain map $J^\bullet\to I^\bullet$, and any two such extensions are cochain-homotopic ([[lem-comparison-map-from-an-exact-complex-into-an-injective-resolution]]).

[F13] Chain-homotopic chain maps induce the same map on homology, and homology respects identities and composition; a cochain complex may be read as a chain complex by the reindexing convention, so cohomology inherits both properties ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]], [[prop-homology-respects-identities-and-composition]], [[def-cochain-complex-in-an-abelian-category]]).

[F14] A cochain homotopy is a family $s^n$ satisfying $f^n-g^n=\delta^{n-1}s^n+s^{n+1}d^n$ in cochain indexing ([[def-chain-homotopy]]), and an additive functor $F$ satisfies $F(f+g)=Ff+Fg$ ([[def-additive-functor]]), so it carries such an identity to the corresponding identity for the image maps.

[F15] The global-sections functor $\Gamma(X,-):\mathrm{Ab}(X)\to\mathbf{Ab}$ is additive: $\Gamma(X,\varphi+\psi)=\Gamma(X,\varphi)+\Gamma(X,\psi)$ ([[def-global-sections-functor-sheaves]]).

[F16] In ZF the Axiom of Choice implies the Axiom of Dependent Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Given:** A closed subset $Z$ of a topological space $X$ with its subspace topology, the inclusion $i:Z\hookrightarrow X$, a sheaf of abelian groups $\mathcal F$ on $Z$, the supplied injective resolution datum $I_Z^\bullet$ on $\mathrm{Ab}(Z)$ and the supplied injective resolution datum $I^\bullet$ on $\mathrm{Ab}(X)$ furnished by [F10].

1.1 By [F1] and [F4], the stalk of $i_*\mathcal F$ at $x\in X$ is the filtered colimit of the groups $\mathcal F(U\cap Z)$ over the open neighbourhoods $U$ of $x$ in $X$. Suppose first that $x\in Z$. For an open $W\subseteq Z$ with $x\in W$ the set $W\cup(X\setminus Z)$ is open in $X$, because $X\setminus Z$ is open and $W$ is a trace of an open set by [F3], it contains $x$, and $(W\cup(X\setminus Z))\cap Z=W$; conversely $U\cap Z$ is such an open $W$ for every open $U\ni x$. The assignment $U\mapsto U\cap Z$ therefore carries the neighbourhood system of $x$ in $X$ cofinally onto the neighbourhood system of $x$ in $Z$, and the two filtered colimits agree: $(i_*\mathcal F)_x\cong\mathcal F_x$. Suppose now that $x\notin Z$. Then $X\setminus Z$ is open and contains $x$, and for every open $U\ni x$ the set $U\cap(X\setminus Z)\subseteq U$ is an open neighbourhood of $x$ with $(U\cap(X\setminus Z))\cap Z=\varnothing$; the colimit is thus computed by the constant subdiagram with value $\mathcal F(\varnothing)$, and $\mathcal F(\varnothing)=0$ is the zero group by [F5]. Hence $(i_*\mathcal F)_x=0$ for $x\notin Z$, and $i$ is continuous by [F3] so that $i_*\mathcal F$ is an abelian sheaf on $X$ by [F2]. [F1, F2, F3, F4, F5]

1.2 Let $\mathcal I$ be an injective object of $\mathrm{Ab}(Z)$. We show that $i_*\mathcal I$ is injective in $\mathrm{Ab}(X)$. Let $m:\mathcal A\rightarrowtail\mathcal B$ be a monomorphism in $\mathrm{Ab}(X)$. By [F6], $m$ being a monomorphism means that every stalk map $m_x$ has zero kernel; by [F8] the stalk of $i^{-1}m:i^{-1}\mathcal A\to i^{-1}\mathcal B$ at $x$ is the map $m_{i(x)}$, which again has zero kernel, so $i^{-1}m$ is a monomorphism by [F6]. Since $\mathcal I$ is injective [F9], the map $\operatorname{Hom}_Z(i^{-1}\mathcal B,\mathcal I)\to\operatorname{Hom}_Z(i^{-1}\mathcal A,\mathcal I)$ given by precomposition with $i^{-1}m$ is surjective. The adjunction [F7] provides natural bijections $\operatorname{Hom}_X(\mathcal A,i_*\mathcal I)\cong\operatorname{Hom}_Z(i^{-1}\mathcal A,\mathcal I)$ and $\operatorname{Hom}_X(\mathcal B,i_*\mathcal I)\cong\operatorname{Hom}_Z(i^{-1}\mathcal B,\mathcal I)$ under which precomposition by $m$ corresponds to precomposition by $i^{-1}m$; hence $\operatorname{Hom}_X(\mathcal B,i_*\mathcal I)\to\operatorname{Hom}_X(\mathcal A,i_*\mathcal I)$ is surjective, which is exactly the extension property of [F9] for $i_*\mathcal I$. [F6, F7, F8, F9]

2.1 We show that $i_*$ carries short exact sequences of abelian sheaves on $Z$ to short exact sequences on $X$. Let $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ be exact in $\mathrm{Ab}(Z)$. Its stalk sequence $0\to\mathcal F'_z\to\mathcal F_z\to\mathcal F''_z\to0$ is exact at every $z\in Z$, by the only-if direction of [F6] applied on $Z$; for $x\in Z$ the stalk sequence of $0\to i_*\mathcal F'\to i_*\mathcal F\to i_*\mathcal F''\to0$ is that same sequence by [step 1.1], and for $x\notin Z$ it is the sequence $0\to0\to0\to0$ of zero groups, again exact. By the if direction of [F6] applied on $X$, the sequence $0\to i_*\mathcal F'\to i_*\mathcal F\to i_*\mathcal F''\to0$ is exact. [F6, step 1.1]

2.2 By [F10] there is an injective resolution $0\to\mathcal F\to I_Z^0(\mathcal F)\to I_Z^1(\mathcal F)\to\cdots$ of $\mathcal F$ in $\mathrm{Ab}(Z)$, exact at every displayed term, with each $I_Z^n(\mathcal F)$ injective. Put $J^n:=i_*I_Z^n(\mathcal F)$, an abelian sheaf on $X$ by [step 1.1]. For every $x\in X$ the stalk complex $0\to(i_*\mathcal F)_x\to J^0_x\to J^1_x\to\cdots$ is exact at every term: for $x\in Z$ it is, term by term, the stalk complex of the given resolution by [step 1.1], and for $x\notin Z$ all its terms are $0$ by [step 1.1]. Extending the complex by zero objects on the left and applying the if direction of [F6] on $X$, the coaugmented complex $0\to i_*\mathcal F\to J^0\to J^1\to\cdots$ is exact at every displayed term, and each $J^n$ is injective by [step 1.2]; hence it is an injective resolution of $i_*\mathcal F$ on $X$ in the sense of [F10]. [F6, F10, step 1.2, step 1.1]

3.1 Let $0\to i_*\mathcal F\to I^0(i_*\mathcal F)\to I^1(i_*\mathcal F)\to\cdots$ be the injective resolution of $i_*\mathcal F$ supplied by the datum $I^\bullet$ of [F10] on $\mathrm{Ab}(X)$, and let $J^\bullet$ be the resolution of [step 2.2]. Both complexes are exact at every displayed term and have injective terms, so [F12], whose hypothesis DC holds by [F16], applies with $u$ the identity of $i_*\mathcal F$ in both directions: there are coaugmentation-preserving cochain maps $\psi:I^\bullet(i_*\mathcal F)\to J^\bullet$ and $\chi:J^\bullet\to I^\bullet(i_*\mathcal F)$, and the composites $\psi\chi$ and $\chi\psi$ are cochain-homotopic to the respective identities. The global-sections functor is additive by [F15] and an additive functor carries the homotopy identities of [F14] to homotopy identities between the induced cochain maps of complexes of abelian groups; by [F13] homotopic cochain maps induce the same map on cohomology and cohomology respects identities and composition, so $\Gamma(X,\psi)$ and $\Gamma(X,\chi)$ induce mutually inverse isomorphisms $H^q\bigl(\Gamma(X,I^\bullet(i_*\mathcal F)_{\mathrm{del}})\bigr)\cong H^q\bigl(\Gamma(X,J^\bullet_{\mathrm{del}})\bigr)$ for every $q$. By the definition of cohomology [F11] the left-hand group is $H^q(X,i_*\mathcal F)$, so $$H^q(X,i_*\mathcal F)\cong H^q\bigl(\Gamma(X,J^\bullet_{\mathrm{del}})\bigr).$$ [F11, F12, F13, F14, F15, F16, step 2.2]

3.2 For every $n\ge0$ the group of global sections of $J^n=i_*I_Z^n(\mathcal F)$ over $X$ is $J^n(X)=I_Z^n(\mathcal F)(i^{-1}(X))=I_Z^n(\mathcal F)(Z)$ by [F1], and the differentials of the two complexes correspond under these identifications because the differential of $J^\bullet$ is the direct image of the differential of $I_Z^\bullet(\mathcal F)$ and direct image is functorial in the evident way [F1]. Hence the complexes of abelian groups $\Gamma(X,J^\bullet_{\mathrm{del}})$ and $\Gamma(Z,I_Z^\bullet(\mathcal F)_{\mathrm{del}})$ have the same terms and the same differentials, so they have isomorphic cohomology: $$H^q\bigl(\Gamma(X,J^\bullet_{\mathrm{del}})\bigr)=H^q\bigl(\Gamma(Z,I_Z^\bullet(\mathcal F)_{\mathrm{del}})\bigr).$$ [F1, step 2.2]

4.1 Combining the steps, for every $q\ge0$: $$H^q(X,i_*\mathcal F)\cong H^q\bigl(\Gamma(X,J^\bullet_{\mathrm{del}})\bigr)=H^q\bigl(\Gamma(Z,I_Z^\bullet(\mathcal F)_{\mathrm{del}})\bigr)=H^q(Z,\mathcal F),$$ the first isomorphism by [step 3.1], the equality by [step 3.2], and the last equality by the definition of the cohomology of $\mathcal F$ on $Z$ from the supplied datum $I_Z^\bullet$ [F11]. The Axiom of Choice is used in [F10] to supply the two injective resolution data, and through [F16] to provide the Dependent Choice required for the comparison maps of [F12]; no further selection is made, since the two resolutions are the fixed supplied data and the maps $\psi,\chi$ of [step 3.1] are obtained from [F12] at the single pair of complexes. ∎ [F10, F11, F12, F16, step 3.1, step 3.2]
