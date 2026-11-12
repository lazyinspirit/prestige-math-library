---
title: External K-flat sheaf resolution and pullback input
status: published
research_item: thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input
dependency_level: 0
sources:
  references:
    - title: The Stacks Project, Cohomology of Sheaves, Flat resolutions
      url: https://stacks.math.columbia.edu/tag/06Y7
      locator: "Section 20.26: Lemmas 20.26.1, 20.26.3–6, 20.26.8–13 and 20.26.17;
        Definitions 20.26.2 and 20.26.14 and the discussion preceding 20.26.14;
        its sign convention is Section 15.74 (0FNG), opening rules (6) and (9)."
      statement: Unbounded complexes of structure-sheaf modules have K-flat
        resolutions with flat terms. The K-flat test is stalkwise and stable
        under shifts, cones and total tensor. Tensor with a K-flat complex
        preserves quasi-isomorphisms; tensor with any complex preserves
        quasi-isomorphisms between K-flat complexes. K-flat replacement defines
        derived tensor, with the Koszul signed symmetry.
      hypotheses: An arbitrary ringed space with commutative structure sheaf; all
        complexes are complexes of its module sheaves and all tensor products
        use that structure sheaf. Direct-sum totalization has the cochain Koszul
        differential. AC and the stated universe convention are retained for the
        imported resolution machinery; no geometric finiteness assumption.
      reading_limits: For this repair read the current online definitions, discussion
        of derived tensor, and full statements and displayed proofs of the
        enumerated lemmas. Also read the opening sign rules (6) and (9) at tag
        0FNG, as used by Section 20.26. Apply only the stated sheaf-complex
        conclusions. The cited module-algebra, triangulated-category and
        resolution-construction foundations were not reconstructed. Lemma
        20.26.7 remains excluded. No new PDF reading or higher-coherence
        verification is claimed; 20.26.17 is retained as a checked source
        locator, not an additional conclusion used here.
    - title: The Stacks Project, Cohomology of Sheaves, Derived pullback
      url: https://stacks.math.columbia.edu/tag/06YI
      locator: Section 20.27, construction preceding Lemma 20.27.1 and Lemmas
        20.27.1–3 (06YJ, 0D5S, 079U); Section 20.26, Lemma 20.26.8 (06YC).
      statement: For a ringed-space morphism f:X to Y, degreewise f* preserves K-flat
        complexes and quasi-isomorphisms between them. It computes Lf*:D(O_Y) to
        D(O_X), with natural composition and derived-tensor comparisons.
      hypotheses: Any morphism of ringed spaces with commutative structure sheaves.
        Inputs are complexes of O_Y-modules, outputs complexes of O_X-modules;
        each tensor uses the corresponding structure sheaf. No flatness, finite
        Tor dimension, properness or finite-type hypothesis is required for this
        unbounded derived functor.
      reading_limits: For this repair read the current online construction, all three
        statements and displayed proofs, and Lemma 20.26.8 with its proof. Only
        their classical derived-category conclusions are imported. The general
        derived-functor and stalk/base-change results invoked in those proofs
        were not reconstructed; no infinity-coherent enhancement is inferred
        from these comparison isomorphisms.
    - title: The Stacks Project, Flat modules on a ringed space
      url: https://stacks.math.columbia.edu/tag/05ND
      locator: Definition 17.17.1.
      statement: A structure-sheaf module M is flat when the functor sending G to G
        tensor M over the structure sheaf is exact on the category of module
        sheaves.
      hypotheses: A ringed space with commutative structure sheaf; exactness is in the
        abelian category of its module sheaves.
      reading_limits: Read the complete current online definition for this repair. Use
        it only to define flat sheaves; no separate stalkwise-flatness theorem
        or geometric flatness assertion is needed.
    - title: The Stacks Project, Colimits of module sheaves
      url: https://stacks.math.columbia.edu/tag/01AH
      locator: Lemma 17.3.2(2), with the direct-sum construction immediately preceding
        it in Section 17.3 (01AF).
      statement: Module-sheaf coproducts exist and are the sheafifications of
        sectionwise module direct sums.
      hypotheses: Any ringed space; a set-indexed family of module sheaves. Here only
        integer-diagonal sums in the fixed base universe are used.
      reading_limits: Read the current online direct-sum construction in Section 17.3
        and the complete statement and displayed proof of Lemma 17.3.2. Use only
        its coproduct existence and description. Its cited general category and
        sheafification proofs were not reconstructed.
external_input: true
---

PDF p. 3: Nonconnective algebraic K theory: enhanced prerequisite interface

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-ringed-space](https://alphabetamath.cc/item/def-ringed-space)
- [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)
- [math:def-morphism-ringed-spaces](https://alphabetamath.cc/item/def-morphism-ringed-spaces)
- [math:thm-abelian-sheaves-form-abelian-category](https://alphabetamath.cc/item/thm-abelian-sheaves-form-abelian-category)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-exactness-of-a-complex-at-a-degree-and-acyclic-complex](https://alphabetamath.cc/item/def-exactness-of-a-complex-at-a-degree-and-acyclic-complex)
- [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)
- [math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product)
- [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)
- [math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories)
- [math:def-direct-sum-total-complex-of-a-double-complex](https://alphabetamath.cc/item/def-direct-sum-total-complex-of-a-double-complex)
- [math:def-tensor-product-total-complex-of-chain-complexes](https://alphabetamath.cc/item/def-tensor-product-total-complex-of-chain-complexes)
- [math:def-bounded-bounded-below-and-bounded-above-complex](https://alphabetamath.cc/item/def-bounded-bounded-below-and-bounded-above-complex)
- [math:def-natural-isomorphism](https://alphabetamath.cc/item/def-natural-isomorphism)
- [` The Stacks Project, Cohomology of Sheaves, Flat resolutions · Section 20.26: Lemmas 20.26.1, 20.26.3–6, 20.26.8–13 and 20.26.17; Definitions 20.26.2 and 20.26.14 and the discussion preceding 20.26.14; its sign convention is Section 15.74 (0FNG), opening rules (6) and (9). `](https://stacks.math.columbia.edu/tag/06Y7)
- [` The Stacks Project, Cohomology of Sheaves, Derived pullback · Section 20.27, construction preceding Lemma 20.27.1 and Lemmas 20.27.1–3 (06YJ, 0D5S, 079U); Section 20.26, Lemma 20.26.8 (06YC). `](https://stacks.math.columbia.edu/tag/06YI)
- [` The Stacks Project, Flat modules on a ringed space · Definition 17.17.1. `](https://stacks.math.columbia.edu/tag/05ND)
- [` The Stacks Project, Colimits of module sheaves · Lemma 17.3.2(2), with the direct-sum construction immediately preceding it in Section 17.3 (01AF). `](https://stacks.math.columbia.edu/tag/01AH)


## Statement
Assume AC and fix Grothendieck universes $\mathcal U\in\mathcal V$ with $\omega\in\mathcal U$. Ringed spaces and module sheaves are taken in $\mathcal U$; categories and ordinary localizations are formed in $\mathcal V$. Here $\mathcal U$-small sets mean sets belonging to $\mathcal U$. Let $(X,\mathcal O_X)$ be any such ringed space and write $\mathcal A_X=\operatorname{Mod}_{\mathcal U}(\mathcal O_X)$ for the abelian category of all sheaves of $\mathcal O_X$-modules with $\mathcal U$-small section sets. Every complex below is a $\mathbb Z$-indexed cochain complex in $\mathcal A_X$, unless another ringed space or ring is specified. Acyclicity and quasi-isomorphisms use the cochain convention, equivalently the chain convention $C_n=C^{-n}$. An $\mathcal O_X$-module $M$ is flat when $-\otimes_{\mathcal O_X}M:\mathcal A_X\to\mathcal A_X$ is exact.

For complexes $P,Q$ of $\mathcal O_X$-modules, put $T_X(P,Q)=\operatorname{Tot}^{\oplus}(P\otimes_{\mathcal O_X}Q)$, with $T_X(P,Q)^n=\bigoplus_{i+j=n}P^i\otimes_{\mathcal O_X}Q^j$ and differential $d(p\otimes q)=d_Pp\otimes q+(-1)^ip\otimes d_Qq$ for homogeneous local sections $p\in P^i$, $q\in Q^j$. These are sheaf tensor products and sheaf coproducts. Call $P$ K-flat when $T_X(N,P)$ is acyclic for every acyclic cochain complex $N$ of $\mathcal O_X$-modules.

Every cochain complex $C$ of $\mathcal O_X$-modules admits a quasi-isomorphism $P\to C$ with $P$ K-flat and every $P^i$ flat. K-flatness is stalkwise: $P$ is K-flat exactly when each $P_x$ is K-flat as a cochain complex of $\mathcal O_{X,x}$-modules, testing against all acyclic complexes of $\mathcal O_{X,x}$-modules with tensor over $\mathcal O_{X,x}$. K-flat complexes are closed under cochain shifts, mapping cones and $T_X$, and include all bounded-above complexes of flat modules and the tensor unit $\mathcal O_X[0]$ (the structure sheaf in degree zero and zero elsewhere). Here shifts and cones have the cochain conventions of $D(\mathcal A_X)$, and bounded above means vanishing in all sufficiently large degrees. For K-flat $P$, $T_X(-,P)$ preserves quasi-isomorphisms. For any complex $N$, $T_X(N,-)$ preserves quasi-isomorphisms between K-flat complexes. Write $D(\mathcal O_X)=D(\mathcal A_X)$ for the ordinary unbounded derived category. Its derived tensor $E\otimes_{\mathcal O_X}^{\mathbf L}F$ is computed by $T_X(P,Q)$ for K-flat representatives $P\to E$ and $Q\to F$.

For every morphism of ringed spaces $f:(X,\mathcal O_X)\to(Y,\mathcal O_Y)$, the module pullback $f^*G=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}G$ goes from $\mathcal A_Y$ to $\mathcal A_X$. Applied degreewise it preserves K-flatness and quasi-isomorphisms between K-flat complexes, and computes $Lf^*:D(\mathcal O_Y)\to D(\mathcal O_X)$. For another morphism $g:Y\to Z$ there is the usual natural isomorphism $Lf^*\circ Lg^*\cong L(g\circ f)^*$. For $E,F\in D(\mathcal O_Y)$ there is the canonical bifunctorial isomorphism $Lf^*(E\otimes_{\mathcal O_Y}^{\mathbf L}F)\cong Lf^*E\otimes_{\mathcal O_X}^{\mathbf L}Lf^*F$.

## Statement references
[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-ringed-space](https://alphabetamath.cc/item/def-ringed-space)

[math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)

[math:def-morphism-ringed-spaces](https://alphabetamath.cc/item/def-morphism-ringed-spaces)

[math:thm-abelian-sheaves-form-abelian-category](https://alphabetamath.cc/item/thm-abelian-sheaves-form-abelian-category)

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:def-exactness-of-a-complex-at-a-degree-and-acyclic-complex](https://alphabetamath.cc/item/def-exactness-of-a-complex-at-a-degree-and-acyclic-complex)

[math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)

[math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product)

[math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)

[math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories)

[math:def-direct-sum-total-complex-of-a-double-complex](https://alphabetamath.cc/item/def-direct-sum-total-complex-of-a-double-complex)

[math:def-tensor-product-total-complex-of-chain-complexes](https://alphabetamath.cc/item/def-tensor-product-total-complex-of-chain-complexes)

[math:def-bounded-bounded-below-and-bounded-above-complex](https://alphabetamath.cc/item/def-bounded-bounded-below-and-bounded-above-complex)

[math:def-natural-isomorphism](https://alphabetamath.cc/item/def-natural-isomorphism)

## Source contract
**Given:** The two universes, arbitrary ringed spaces, their module-sheaf cochain complexes, morphisms of ringed spaces, and AC, as typed in the Statement.

**Goal:** Import exactly the classical K-flat resolution, tensor and pullback machinery needed for a separate enhanced construction.

[A1] AC is retained for the arbitrary resolution choices in [F1] and [F2], including a K-flat replacement for each complex in the chosen universe. Universe existence is an explicit size convention, not a consequence of AC. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[F0] The module-sheaf category is abelian by [math:thm-abelian-sheaves-form-abelian-category](https://alphabetamath.cc/item/thm-abelian-sheaves-form-abelian-category). Stacks Lemma 17.3.2(2) and its preceding direct-sum construction give the required coproducts as sheafifications of sectionwise module sums. The tensor total is the direct-sum total of the double complex with horizontal differential $d_P\otimes1$ and signed vertical differential $(-1)^i1\otimes d_Q$ in bidegree $(i,j)$; these differentials anticommute. Use [math:def-direct-sum-total-complex-of-a-double-complex](https://alphabetamath.cc/item/def-direct-sum-total-complex-of-a-double-complex) with $C_{a,b}=P^{-a}\otimes_{\mathcal O_X}Q^{-b}$ to translate its homological convention. The analogous total on stalk modules uses [math:def-tensor-product-total-complex-of-chain-complexes](https://alphabetamath.cc/item/def-tensor-product-total-complex-of-chain-complexes), reindexed by $C_n=C^{-n}$.

[F1] Stacks Section 20.26, at the first source contract, supplies the resolution, stalk test, shift/cone/tensor closure, quasi-isomorphism preservation and derived-tensor construction used here. In particular, Lemma 20.26.12 supplies the flat-term K-flat resolution; Lemma 20.26.13 concerns tensoring a quasi-isomorphism between K-flat complexes with an arbitrary complex. These are imported results, not local reconstruction of the unbounded resolution proof.

[F2] Stacks Section 20.27, construction and Lemmas 20.27.1–3, together with Lemma 20.26.8, supplies degreewise pullback on K-flat complexes, its preservation of their quasi-isomorphisms, and both classical comparison isomorphisms. Source and target are $\mathcal O_Y$- and $\mathcal O_X$-module complexes, respectively. [math:def-morphism-ringed-spaces](https://alphabetamath.cc/item/def-morphism-ringed-spaces) [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)

[F3] Flat sheaf means exactness of the stated tensor functor, as in Stacks Definition 17.17.1. [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space) [math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product) [math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories)

## External input
Import [F0]–[F3] at the four precise source contracts above, with their hypotheses and reading limits. The direct-sum total differential and its Koszul symmetry $p\otimes q\mapsto(-1)^{ij}q\otimes p$ use the displayed sheaf tensor over $\mathcal O_X$, with homogeneous degrees $i,j$. No termwise flatness is assumed of a general K-flat complex; flat terms are part of the supplied replacement and bounded-above hypotheses.

The category of $\mathcal U$-small sheaves is encoded by section sets and structure maps indexed by the $\mathcal U$-small set of opens. These encodings and their integer-indexed complexes form sets in $\mathcal V$. Thus the ordinary derived category is interpreted using the small-category alternative in [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category), measured in $\mathcal V$; no unsupported assertion of $\mathcal U$-small derived Hom sets is required. The universe convention does not impose a geometric restriction. The ringed-space input includes the underlying ringed spaces of schemes.

Only the classical derived-category assertions are imported here. Their comparison isomorphisms alone do not supply an infinity-coherent enhancement; that construction remains the responsibility of the separate enhanced-localization and coherent-family helpers. Lemma 20.26.7 remains unused.
