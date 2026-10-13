---
id: lem-complex-algebraic-stratifications-have-finite-conical-cochain-models
kind: lemma
title: Complex algebraic constructible complexes have finite conical cochain models
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 13
deps:
- def-axiom-of-choice
- lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications
- lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model
- lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent
- thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods
- thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications
- thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology
- lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology
- def-derived-category-of-an-abelian-category
- def-derived-hom-in-the-bounded-setting
- def-inverse-image-presheaf-and-sheaf
- def-direct-image-sheaf
- def-extension-by-zero-abelian-sheaf
- thm-extension-by-zero-adjunction-exactness
- lem-extension-by-zero-short-exact-sequence
- lem-ringed-space-module-sheaves-enough-injectives
- lem-bounded-below-complexes-admit-injective-replacements
- thm-injective-complexes-model-the-bounded-below-derived-category
- thm-inverse-direct-image-adjunction
- thm-exactness-of-sheaves-stalkwise
- thm-acyclic-resolution-theorem-for-right-derived-functors
- lem-sections-near-a-compact-set-are-sections-on-that-set
- def-c-soft-sheaf
- lem-c-soft-field-sheaves-are-compact-support-acyclic
- def-compactly-supported-global-sections
- lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward
- thm-locally-compact-hausdorff-basics
- thm-compact-subset-of-a-hausdorff-space-is-closed
- thm-closed-subspace-of-a-compact-space-is-compact
- lem-filtered-colimits-of-abelian-groups-are-exact
- thm-flasque-sheaves-acyclic
- thm-choice-implies-dependent-implies-countable-choice
- thm-canonical-truncations-fit-a-distinguished-triangle
- thm-the-derived-category-inherits-a-triangulated-structure
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Beilinson-Bernstein-Deligne, Faisceaux pervers (Asterisque 100), 1.4 and 2.1 (constructibility and local cohomology); Bernstein-Lunts, Equivariant Sheaves and Functors, Part I (finite resolution construction)
    url: https://www.numdam.org/item/AST_1982__100__1_0.pdf
---

## Statement

Assume AC ([[def-axiom-of-choice]]). For quasi-projective complex varieties and
finitely many algebraic operations/support collections, the geometric suppliers
give individually chosen compatible smooth Whitney strata, conical local
products and finite deleted-boundary triangulation models for each operation.
No simultaneous stratification of an arbitrary cyclic diagram respecting all
marked supports is asserted. On any separated finite-type complex variety,
bounded algebraically constructible objects have bounded finite ordinary and
compact-support cohomology, ordinary derived Hom and bounded constructible
internal Hom, with coefficient-extension compatibility, by these models locally
and finite affine-open descent globally. A noncompact variety is not asserted
to be a finite compact realization.

## Facts & Assumptions

**Given:** AC and the coefficient, variety, bounds and maps specified in the Statement.

[F1] The connected compatible Whitney construction of [[thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications]] is used on quasi-projective pieces. For a general separated finite-type variety, [[lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications]] applied to its identity gives a finite connected smooth frontier refinement respecting finitely many algebraic locally closed subsets (by prescribing their closures and closed boundaries). Both constructions use the proved analytic/Zariski closure comparison, rather than splitting into potentially nonalgebraic analytic components.

[F2] The actual stated local construction of [[thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods]] is used with its explicit hypotheses.

[F3] The actual stated local construction of [[thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology]] is used with its explicit hypotheses.

[F4] The actual stated local construction of [[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]] is used with its explicit hypotheses.

[F5] The actual stated local construction of [[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]] is used with its explicit hypotheses.

[F6] The all-sheaf compact-support bound on every open in a finite deleted-boundary fibre model is [[lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology]]. The ordinary derived operations and proper-support factorization used below are constructed locally in steps 1.1–4.1, before the geometric application; exceptional inverse images and trace calculus are not used in this lemma.

[F7] AC supplies DC by [[thm-choice-implies-dependent-implies-countable-choice]]. Earlier sheaf and resolution supplies: inverse/direct image and their adjunction, stalkwise exactness, exact extension by zero and the open/closed short exact sequence ([[def-inverse-image-presheaf-and-sheaf]], [[def-direct-image-sheaf]], [[thm-inverse-direct-image-adjunction]], [[thm-exactness-of-sheaves-stalkwise]], [[def-extension-by-zero-abelian-sheaf]], [[thm-extension-by-zero-adjunction-exactness]], [[lem-extension-by-zero-short-exact-sequence]]); functorial injective embeddings for constant-field module sheaves and bounded-below injective replacements computing the derived category and acyclic resolutions ([[lem-ringed-space-module-sheaves-enough-injectives]], [[lem-bounded-below-complexes-admit-injective-replacements]], [[thm-injective-complexes-model-the-bounded-below-derived-category]], [[thm-acyclic-resolution-theorem-for-right-derived-functors]], [[def-derived-category-of-an-abelian-category]], [[def-derived-hom-in-the-bounded-setting]]). Flasque abelian sheaves are acyclic for sections on every open by [[thm-flasque-sheaves-acyclic]].

[F8] Earlier compact-support supplies: sections on a compact set are the colimit of sections on its open neighbourhoods; flasque implies c-soft; c-softness is preserved by open/closed restriction and extension by zero and is compact-support acyclic; compact-support cohomology agrees with ordinary cohomology on a compact space; and the open/closed support resolution is exact ([[lem-sections-near-a-compact-set-are-sections-on-that-set]], [[def-c-soft-sheaf]], [[lem-c-soft-field-sheaves-are-compact-support-acyclic]], [[def-compactly-supported-global-sections]], [[lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward]]). Locally compact Hausdorff spaces have relatively compact neighbourhoods, compact subsets are closed, and closed subsets of compact spaces are compact ([[thm-locally-compact-hausdorff-basics]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-closed-subspace-of-a-compact-space-is-compact]]). Filtered colimits of abelian groups are exact ([[lem-filtered-colimits-of-abelian-groups-are-exact]]).

[F9] Bounded complexes can be built from their cohomology by the canonical truncation triangles; the derived category is triangulated, with triangles represented by mapping cones ([[thm-canonical-truncations-fit-a-distinguished-triangle]], [[thm-the-derived-category-inherits-a-triangulated-structure]]).

[A1] AC is inherited exactly for the geometric and analytic supplier constructions ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 **The needed ordinary operations and field injectives.** Inverse image is exact because its stalks are the corresponding source stalks, and the inverse/direct-image adjunction of [F7] is $k$-linear. Consequently direct image carries injectives to injectives: its representable functor is the composite of exact inverse image and the exact injective representable functor. Compute ordinary $Rf_*$ and derived Hom by the supplied bounded-below $k$-linear injective replacements. Their comparison maps and ordinary direct-image composition are the injective-model comparisons of [F7]. The bounded internal Hom used in the geometric argument is the actual sheaf object computed by the derived-incidence supplier [F4], not Hom of the stalks. To check that a $k$-injective sheaf $I$ is flasque, for open $U\subseteq V$ use the stalkwise monomorphism $j_{U!}k_U\to j_{V!}k_V$. The adjunction gives $\operatorname{Hom}(j_{U!}k_U,I)=I(U)$ and $\operatorname{Hom}(j_{V!}k_V,I)=I(V)$; a map from the constant sheaf is determined by the image of $1$, and every section determines such a map by locally constant scalar multiplication. Injectivity therefore makes $I(V)\to I(U)$ surjective. By [F8], $I$ is c-soft and its open/closed restrictions and their extensions by zero are c-soft. The underlying abelian sheaves of a $k$-injective resolution are flasque, hence acyclic for ordinary sections by [F7]; the acyclic-resolution theorem therefore identifies its section cohomology with the underlying abelian sheaf cohomology. For compact supports on a locally compact Hausdorff space, the same comparison uses the c-soft acyclicity of those underlying resolution terms from [F8]. Thus the compact c-soft acyclicity of [F8] applies also to the $k$-linear derived sections used here, without assuming a $k$-injective sheaf is injective after forgetting scalars. All these constructions are natural in sheaf morphisms. [given, F4, F7, F8, A1, construct, algebra]

2.1 **Proper maps: the actual fibre comparison.** Let $p:Z\to Y$ be a proper continuous map between locally compact Hausdorff spaces, where proper means inverse images of compact subsets are compact. It is closed: for a closed $C\subseteq Z$ and a relatively compact base neighbourhood $W$, the set $C\cap p^{-1}(\overline W)$ is compact and its image is closed, and on $W$ that image equals $p(C)\cap W$. If $Z_y=p^{-1}(y)$ is contained in an open $O\subseteq Z$, then $Y\setminus p(Z\setminus O)$ is an open neighbourhood of $y$ whose inverse image lies in $O$. Thus inverse images of base neighbourhoods are cofinal among neighbourhoods of the compact fibre. Apply the compact-section theorem [F8] degreewise to an injective resolution $F\to I^\bullet$ supplied by [F7]: the stalk complex $(p_*I^\bullet)_y$ is naturally $\Gamma(Z_y,I^\bullet|_{Z_y})$. Restriction to $Z_y$ is exact, and its terms are c-soft by step 1.1, hence ordinary-section acyclic because the fibre is compact. Therefore $\Gamma(Z_y,I^\bullet|_{Z_y})$ computes $R\Gamma(Z_y,F|_{Z_y})$ by the acyclic-resolution theorem. This proves the canonical proper fibre formula $(Rp_*F)_y\simeq R\Gamma(Z_y,F|_{Z_y})$ and its natural restriction maps, with no later six-operation theorem. The same proof works for bounded complexes by bounded-below injective replacement. Exact filtered colimits in [F8] justify passing from the stalk complex to its cohomology. [given, F7, F8, A1, step 1.1, construct, algebra]

2.2 **Coefficient reconstruction on a product.** Let $V$ be a small contractible ball and $F$ a compact algebraic fibre with its induced Whitney strata. Give $F$ a finite compatible triangulation by [F3], and give $V$ a finite deleted-boundary ball model. Let $E$ be bounded with finite-rank locally constant cohomology on the product strata of $V\times F$, and put $q:V\times F\to F$. For any simplex-constructible $G$ on $F$, apply [F4]'s product comparison with base $F$ and fibre $V$: the unit $G\to Rq_*q^*G$ is an isomorphism since $C^*(V;k)\simeq k$. Derived adjunction from step 1.1 therefore makes $q^*$ fully faithful. On $V\times\sigma^\circ$ each cohomology sheaf of $E$ is constant: the product is contractible, and local-system transport is path-independent by subdividing a contracting homotopy into trivializing opens. Apply the same unit argument with base a point and contractible fibre $V\times\sigma^\circ$. Its pullback is fully faithful, and its essential image is closed under finite extensions because connecting morphisms lift and pullback preserves mapping cones. The finite truncation triangles of [F9] show that $E$ on this piece is a pullback of a finite coefficient complex. Now induct over the closed skeleta of $F$. On each skeleton, the top open simplex union and its closed complement give the ordinary open/closed triangle of [F7] and [F9]. Pullback along $q$ commutes with their extension by zero and closed pushforward: the natural comparison maps have the same stalk on the corresponding product subset and zero stalk outside. Thus both outer terms are pullbacks by induction; full faithfulness lifts their connecting morphism, and its cone is again a pullback. This proves $E\simeq q^*G$ for a bounded simplex-constructible $G$ on $F$, identified with the restriction of $E$ to any fixed fibre. For every smaller ball $V'\subseteq V$, apply [F4] to $V'\times F\to F$ and then derived global sections: $R\Gamma(V'\times F,E)\simeq R\Gamma(F,G)$. These comparisons are natural under restriction between balls, with the identity on the finite fibre cochain model because the units $k\to C^*(V';k)$ are quasi-isomorphisms. They therefore identify the pushforward to $V$ locally with that finite complex constant on $V$, not merely with equal-dimensional stalk cohomology. All operations are finite incidence comparisons, truncations and support cones, so their scalar-extension comparisons are those of [F4]. For an empty fibre both complexes are zero. [F3, F4, F7, F9, step 1.1, construct, algebra]

3.1 **Proper-support sections on an open-proper factorization.** For $f:X\to Y$ factoring as an open inclusion $j:X\hookrightarrow Z$ followed by proper $p:Z\to Y$, define $f_!F$ on $V\subseteq Y$ as sections of $F$ on $f^{-1}(V)$ whose closed support maps properly to $V$. This is exactly $p_*j_!F$. Indeed a section of $j_!F$ has support closed in $p^{-1}(V)$, so restriction of the proper map $p$ to that support is proper. Conversely a support proper over $V$ has no boundary accumulation in $p^{-1}(V)\setminus X$: near a proposed boundary point choose a relatively compact base neighbourhood $W$ with closure in $V$; the support over $\overline W$ is compact in $X$, hence compact and closed in $Z$, and cannot accumulate at that boundary point. Thus zero extension is an actual section of $j_!F$. These inverse section maps commute with restriction and give the sheaf identity $f_!=p_*j_!$; it is a left exact $k$-linear sheaf functor and does not depend on the chosen factorization. A section's support is closed because zero germs form an open set. This construction uses only support, properness and exact extension by zero; no exceptional inverse image or trace is needed. [given, F7, F8, step 2.1, construct, algebra]

4.1 **Derivation and finite open-cover support descent.** For an injective $I$ on $X$, the sheaf $j_!I$ restricts to a c-soft sheaf on each compact fibre of $p$: first restrict the c-soft $I$ of step 1.1 to the open fibre part and then extend by zero; both operations preserve c-softness by [F8]. Step 2.1 applied to $j_!I$ therefore gives $R^qp_*j_!I=0$ for $q>0$, since its fibre cohomology vanishes in positive degree. The exact functor $j_!$ carries an injective replacement $A\to I^\bullet$ to a $p_*$-acyclic replacement, so the acyclic-resolution theorem gives the actual factorization $Rf_!A=Rp_*j_!A$. Its fibre is $R\Gamma(Z_y,j_!A|_{Z_y})=R\Gamma_c(X_y,A|_{X_y})$, the last equality being the open/closed compact-support identity of [F8]. These are the canonical section restriction comparisons. They are independent of the open-proper factorization because step 3.1 identifies the same underived functor and the same derived injective model. For a finite open cover $(U_a)$ of a source, the augmented alternating complex of the sheaves $j_{U_{a_0}\cap\cdots\cap U_{a_r}!}(A|_{U_{a_0}\cap\cdots\cap U_{a_r}})$ resolves $A$: at each stalk its augmented complex is the exact simplex complex on the nonempty set of cover members containing that point. After replacing $A$ by injectives, each term is c-soft on the relevant source opens and their fibre restrictions. On every quasi-projective piece the preceding graph-factorization calculation makes these terms acyclic for its proper-support functor. Applying the proper-support functor to this finite resolution and its bounded-below injective models therefore gives the finite open-cover support descent used below, with exact augmented columns and finite diagonals. Coefficient extension commutes with the finite local cochains by [F4]; the finite descent complexes preserve that comparison. Ordinary $Rf_*$ composition is supplied by step 1.1. [given, F4, F5, F7, F8, A1, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 For each individual quasi-projective map and support collection, apply the actual compatible-stratification and control suppliers, followed by their fixed-space triangulation supplier. This is the precise geometric scope actually authored upstream. On each supplied finite deleted-boundary model the incidence theorem proves the finite local/global cochains, internal-Hom constructibility and field-extension comparison. Choices for different operations need not form one jointly stratified cyclic diagram. [given, F1, F2, F3, F4, F5, A1, step 4.1]

6.1 A separated finite-type variety has a finite affine-open cover, whose finite intersections are affine: its closed diagonal identifies each two-chart intersection with a closed subscheme of the affine chart product, and iterate. Each intersection is quasi-projective. Apply the local geometric/incidence construction there. The actual finite open-cover Cech derived augmentation assembles their cochains. Only finitely many intersection degrees occur, and the finitely many local cohomology bounds give a uniform finite total bound. Hence ordinary/global derived Hom and cohomology are bounded and finite, and their finite complexes commute with field extension. Compact-support models are assembled by the ordinary open/closed support resolution and the same finite local models. Internal Hom is locally computed on the finite affine cover and its bounds are uniform. For an explicit global witness to algebraic constructibility, take the finite collections of locally closed strata from all affine charts and their finite overlap refinements; these are locally closed algebraic subsets of the whole variety. Prescribe their closures and closed boundaries in [F1]'s identity-map smooth frontier construction. Every resulting connected smooth algebraic stratum lies in one chart stratum, so the internal-Hom cohomology remains locally constant of finite rank on it. This supplies a finite global constructibility witness without asserting a quasi-projective compactification or a global Whitney theorem for the general separated variety. [given, F1, F2, F3, F4, F5, A1, step 4.1, step 5.1]

7.1 For one morphism between quasi-projective varieties, choose a locally closed embedding of its source into $\mathbb P^N$ and take the reduced closure of its graph in $\mathbb P^N\times Y$. The graph is locally closed, hence open in that closure; thus the map factors as an open inclusion $j:X\hookrightarrow\overline X$ followed by the projective projection $p:\overline X\to Y$. The closure is quasi-projective and $p$ is analytically proper by [F1]. Each algebraic fibre has a deleted-boundary model of dimension at most twice the source dimension by [F3]; [F6] therefore bounds compact-support cohomology of every sheaf on every fibre open by that same integer. Thus the support operations satisfy their required all-fibre-open hypothesis, rather than merely a bound for constructible coefficients. Extension by zero $j_!$ is exact; $Rj_*$ is locally computed by the ordinary sections on the open part of [F2]'s controlled link-cone chart, and [F3] and [F4] give the bounded finite, locally constant complex-stratum model and its actual restriction maps. Choose [F1]'s one-map Whitney strata for $p$, respecting the boundary, finite input supports and the finite constructibility strata of both $Rj_*$ and $j_!$ of the input; prescribe the closures and closed boundaries of those strata. The proper whole-fibre local trivializations of [F2] give, over a small ball in each target stratum, a product with a compact stratified algebraic fibre. Step 2.2 applies to either constructible input on that product and identifies its pushforward with its finite fibre cochain complex constant along the ball. Finitely many target strata give a uniform amplitude bound; ordinary direct-image composition (inverse image is exact, so direct image preserves injectives) and the proper-support factorization of step 4.1 show $Rp_*Rj_*$ and $Rp_*j_!$ compute $Rf_*$ and $Rf_!$ respectively. All models and comparisons commute with field extension by [F3], [F4] and step 2.2. For a general separated finite-type map, work over an affine target chart, take a finite affine cover of its source preimage and finite intersections, and apply this construction to their finite disjoint union mapping to the target. Prescribe the needed supports in that one-map construction, obtaining one target stratification for the finitely many terms. The actual finite open-cover derived augmentation of [F5] then assembles ordinary pushforward; its extension-by-zero support resolution of step 4.1 assembles proper-support pushforward. Thus the outputs are bounded algebraically constructible locally on the target and hence globally by a finite affine cover. This proof uses a constructed projective factorization on each quasi-projective piece and proper whole-fibre triviality, rather than inferring whole-fibre control from local source charts. No joint stratification of an arbitrary cyclic diagram is required. [given, F1, F2, F3, F4, F5, F6, A1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 2.2] ∎

## Remarks

- Steps 5.1–7.1 use the actual derived-incidence and simplicial-descent suppliers for the stated finite cochain and open-cover comparisons.
- **Scope.** The global finiteness conclusion is obtained by finite
  affine-open descent on separated finite-type varieties; it is not obtained
  from a compactification of a general separated variety, and no noncompact
  variety is asserted to be a finite compact realization.
