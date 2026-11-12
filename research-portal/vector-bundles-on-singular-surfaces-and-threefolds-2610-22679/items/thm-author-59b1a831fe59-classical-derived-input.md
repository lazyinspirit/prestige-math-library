---
id: thm-author-59b1a831fe59-classical-derived-input
kind: theorem
title: External classical coefficient, derived Yoneda and effective-localization
  interface
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-perfect-field
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-separated-scheme-over-base
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-finite-morphism-schemes
  - def-nisnevich-covering-interface
  - def-derived-sections-on-sites
  - math:def-derived-category-of-an-abelian-category
  - math:prop-bounded-derived-localizations-embed-fully-faithfully
  - math:def-hom-complex-of-chain-complexes
  - math:def-grothendieck-category
  - math:lem-filtered-colimits-of-abelian-groups-are-exact
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-perfect-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-separated-scheme-over-base: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-finite-morphism-schemes: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:prop-bounded-derived-localizations-embed-fully-faithfully: mathematical-premise
  math:def-hom-complex-of-chain-complexes: mathematical-premise
  math:def-grothendieck-category: mathematical-premise
  math:lem-filtered-colimits-of-abelian-groups-are-exact: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Mazza–Voevodsky–Weibel, Lecture notes on motivic cohomology: derived
        coefficient evaluation"
      url: https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf
      locator: "Theorem 13.1; Lemma 13.4 and its proof; Exercise 13.5; Proposition
        13.10 and Example 13.11; Definition 14.6 and equation (14.6.1);
        Proposition 14.8, Corollary 14.9, Theorem 14.11, Remark 14.12, and
        Proposition 14.16. Online PDF: printed pp. 101–103 and 115–118 (PDF pp.
        112–114 and 126–129). Numbered locators control across differently
        paginated copies."
      statement: Nisnevich sheafification lifts uniquely to transfers and is an exact
        reflector; the transfer-sheaf category is abelian and has enough
        injectives. Representable Hom is evaluation, injective transfer sheaves
        are Nisnevich-acyclic, and Exercise 13.5 states the
        hyperext/hypercohomology comparison for complexes on smooth schemes. For
        bounded-above homotopy-invariant coefficients over a perfect field, the
        canonical Zariski-to-Nisnevich comparison is an isomorphism on every
        hypercohomology group. A1-local coefficients compute Hom after effective
        localization; the local objects carry the stated tensor structure and
        represent motivic cohomology.
      hypotheses: Smooth separated finite-type schemes over a field; integral
        coefficients here. Perfectness is retained for homotopy invariance,
        topology comparison and A1-locality. Effective motivic objects and
        coefficients are bounded above. Small representative sites and a larger
        universe, with AC for resolution constructions. No resolution of
        singularities or negative inverse Tate object is used.
      reading_limits: Read the named statements and displayed arguments in the locally
        supplied MVW PDF and checked the corresponding online text. Pagination
        differs between these copies; result numbers are binding. Exercise 13.5
        was read as an exercise statement, not a printed proof. Its canonical
        hyperext comparison is imported explicitly. Earlier foundations
        referenced by the printed proofs are not reconstructed. Remark 14.12
        concerns an internal Hom sheaf; the present scalar mapping complex is
        instead defined explicitly below. The local argument below supplies the
        resolution model and cone application, not a new proof of motivic
        comparison or A1-locality.
    - title: MVW, Tate coefficients and negative-weight convention
      url: https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf
      locator: Definition 3.1 (online printed p. 23/PDF p. 34); Definitions 8.2 and
        the bounded-above extension after Remark 8.6, Proposition 8.8, and
        Example 8.10 (printed pp. 58–60/PDF pp. 69–71); Definition 14.2 and
        Lemma 14.4 (printed pp. 113–114/PDF pp. 124–125).
      statement: The coefficient Z(r) is the shifted singular complex on the pointed
        r-fold multiplicative-group smash, and is zero for negative r by
        convention. The transfer tensor is constructed using representable
        projective resolutions, then Nisnevich sheafification; it descends to
        the effective localization. Representables tensor by products and
        pointed representables by smashes; singular-complex replacement is an
        A1-equivalence. These give the nonnegative Tate tensor powers.
      hypotheses: Bounded-above complexes for the derived transfer tensor. Nonnegative
        weights and twists for the effective tensor-power identity. The pointed
        multiplicative group uses the rational basepoint 1. Negative zero is a
        coefficient convention, not an effective inverse twist.
      reading_limits: Read Definition 3.1, Definitions 8.2 and the extension after
        Remark 8.6, Proposition 8.8 and its displayed proof, all of Example
        8.10, Definition 14.2, and Lemma 14.4 with its short proof reference.
        These were checked in the locally supplied MVW copy, with the numbered
        coefficient, pointed-tensor and localization statements checked online.
        The referenced monoidal and localization foundations are imported; their
        cited earlier proofs are not reconstructed.
    - title: Mazza–Voevodsky–Weibel, finite correspondences and transfer-coefficient
        constructions
      url: https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf
      locator: Lecture 1, Definition 1.1, composition following Lemma 1.4, Definition
        1.5, Lemma 1.7 and Definition 1.9 (online printed pp. 5–8/PDF pp.
        16–19); Definition 2.1, Theorem 2.3, and Definitions 2.8, 2.12 and 2.14
        (printed pp. 15–18/PDF pp. 26–29); Lecture 13 opening and Theorem 13.1;
        Lecture 14 opening and Definitions 14.1 and 14.6.
      statement: Finite correspondences between smooth separated finite-type schemes
        form the additive category Cor_k, with cycle composition and graph
        functor from Sm/k. Additive contravariant functors on Cor_k form the
        abelian category of presheaves with transfers, whose kernels and
        colimits are objectwise; a Nisnevich sheaf with transfers is one whose
        underlying scheme presheaf is a sheaf. Representables, pointed smash
        quotients, the algebraic singular complex, and the bounded-above
        effective A1-localization have the constructions specified at these
        locators.
      hypotheses: Schemes smooth, separated and of finite type over the chosen field
        for Cor_k. Correspondence generators are integral closed subschemes
        finite and surjective over a component of the source. Fix small
        representative categories. Composition and its intersection
        multiplicities are the cited established construction, not a naive
        fiber-product multiplicity rule. Use bounded-above complexes for the
        effective category.
      reading_limits: Read these definitions, the composition discussion and Lemma 1.7
        argument, and the Lecture 13 and 14 opening constructions in the locally
        supplied MVW PDF; checked the matching online category, transfer-functor
        and localization passages. The foundational intersection theory and
        associativity references are imported at the level of the established
        Cor_k category, not reconstructed here. No assertion about
        correspondences on singular schemes is used.
    - title: The Stacks Project, K-injective existence in a Grothendieck abelian
        category
      url: https://stacks.math.columbia.edu/tag/079P
      locator: Theorem 19.12.6, statement and displayed transfinite-construction proof
      statement: Every complex in a Grothendieck abelian category admits a functorial
        quasi-isomorphism to a K-injective complex whose terms are injective and
        into which each term maps monomorphically.
      hypotheses: A Grothendieck abelian category within fixed size bounds. The local
        argument verifies this hypothesis for Nisnevich sheaves with transfers
        before applying the theorem. AC is retained for the cardinal and
        representative choices in the imported resolution construction.
      reading_limits: Read the full online theorem and its displayed proof, including
        the choice of a set of bounded acyclic representatives and the
        transfinite iteration. The auxiliary cardinal bounds, factorization
        lemmas and earlier injective-existence proofs cited there were not
        reconstructed. No ringed-site theorem is silently applied to the
        transfer category.
    - title: The Stacks Project, computation of derived morphisms into K-injective
        complexes
      url: https://stacks.math.columbia.edu/tag/070I
      locator: Lemma 13.31.2, equivalence of (1), (2), (3), and its proof
      statement: For a K-injective complex I in an abelian category, maps into I in
        the homotopy category equal maps into I in the derived category;
        precomposition with a quasi-isomorphism induces a bijection.
      hypotheses: An abelian category with the indicated derived categories and a
        K-injective target. The unbounded resolution theorem supplies that
        target here. Apply the statement to every shift of I to identify all
        cohomology groups of the Hom complex.
      reading_limits: Read the complete lemma and its three implication arguments
        online. The roof calculus invoked in the proof is imported, consistently
        with the declared derived-category interface. The Hom-complex cone
        identity is checked locally below rather than attributed to this lemma.
dependency_level: 11
proof_strategy: direct
---

## Statement
Assume the Axiom of Choice and the fixed small-site and universe conventions below. Over a perfect field $k$, let $\mathcal A$ be the category of Nisnevich sheaves with transfers on smooth separated finite-type $k$-schemes, with integral coefficients. For $j\geq0$, the classical complex $\mathbb Z(j)$ is bounded above and A¹-local. Its actual restriction functor is naturally modeled by
$$R\Gamma_{\mathrm{Zar}}(Y,\mathbb Z(j))\simeq R\Gamma_{\mathrm{Nis}}(Y,\mathbb Z(j))\simeq R\operatorname{Hom}_{D(\mathcal A)}(\mathbb Z_{\mathrm{tr}}(Y),\mathbb Z(j)).$$
Here $Y$ is smooth separated finite type over $k$ and $R\operatorname{Hom}$ is a complex of abelian groups. The first comparison is the canonical topology-change map; the second is derived Yoneda evaluation. Against an A¹-local target, localization identifies Hom in $D^-(\mathcal A)$ with Hom in $DM^{\mathrm{eff},-}_{\mathrm{Nis}}(k,\mathbb Z)$. These comparisons are natural for actual open maps. For $u:U\hookrightarrow Y$, put $f:\mathbb Z_{\mathrm{tr}}(U)\to\mathbb Z_{\mathrm{tr}}(Y)$ and take its actual cochain cone. In the specified derived-complex model,
$$R\operatorname{Hom}(\operatorname{Cone}(f),\mathbb Z(j))\simeq\operatorname{fib}\bigl(R\Gamma_{\mathrm{Nis}}(Y,\mathbb Z(j))\to R\Gamma_{\mathrm{Nis}}(U,\mathbb Z(j))\bigr).$$
The Tate convention is $\mathbb Z(r)=C_*\mathbb Z_{\mathrm{tr}}(\mathbb G_m^{\wedge r})[-r]$ for $r\geq0$. In the motive category this is the $r$-fold tensor power of $\mathbb Z(1)$, so $\mathbb Z(r)(d)\cong\mathbb Z(r+d)$ for $r,d\geq0$. Classical negative weights are zero by MVW Definition 3.1. The current EM construction itself has weights $j\geq0$; extending its notation by zero for $j<0$ is an explicit convention, not another EM construction. The EM sentence specifies the convention only and supplies no premise to this proof.

## Construction conventions
Fix Grothendieck universes $\mathcal U\in\mathcal V$, with $\omega,k\in\mathcal U$, and small representative categories for $\mathrm{Sm}/k$ and its compatible sites; form sheaves and their Hom sets in the larger universe. This is a supplied size convention, not a theorem asserting the existence of universes. A $k$-scheme is a scheme over $\operatorname{Spec}k$. Smoothness, separatedness over $k$, finite type and finite morphisms have the meanings in the declared scheme interfaces.

Use the imported category $\operatorname{Cor}_k$ with these smooth objects. Its group of arrows from $S$ to $T$ is freely generated by integral closed subschemes of $S\times_kT$ finite and surjective over a connected component of $S$. Composition is MVW's intersection-cycle product in $S\times_kT\times_kW$ pushed to $S\times_kW$; the well-defined multiplicities, associativity, identity diagonal, product tensor and graph functor are included in that imported construction. A presheaf with transfers is an additive contravariant functor $\operatorname{Cor}_k\to\mathbf{Ab}$, with natural transformations as morphisms. Write $\mathcal P$ for their category. Requiring its restriction along the graph functor to satisfy the Nisnevich sheaf condition defines $\mathcal A$. Use the declared Nisnevich covering families and topology. Write $a:\mathcal P\to\mathcal A$ for the exact transfer-compatible sheafification and $\mathbb Z_{\mathrm{tr}}(Y)$ for $a\operatorname{Cor}_k(-,Y)$; this agrees with the usual representable transfer sheaf. The small Zariski site has open subschemes and open covers. Derived sections mean right derived evaluation on the chosen site, using the same construction for this Zariski site as for the Nisnevich site.

Use cochain derived categories and cone signs from the declared derived-category interface, with $D^-(\mathcal A)$ embedded fully faithfully in $D(\mathcal A)$. For complexes $B,I$, the cochain form of the declared Hom complex has degree-$n$ term $\prod_p\operatorname{Hom}_{\mathcal A}(B^p,I^{p+n})$ and differential $dh=d_Ih-(-1)^nhd_B$. A complex $I$ is K-injective when every map to it from an acyclic complex is chain-homotopic to zero. The compatible linear mapping-complex model here is $R\operatorname{Hom}(B,K)=\underline{\operatorname{Hom}}(B,I_K)$ for a K-injective resolution $K\to I_K$. The proof verifies the existence and cone compatibility of this model. The fiber of a map of cochain complexes $g$ means $\operatorname{Cone}(g)[-1]$ in $D(\mathbf{Ab})$.

More explicitly, let $\mathcal E$ be the smallest thick subcategory of $D^-(\mathcal A)$ containing the cones of $\mathbb Z_{\mathrm{tr}}(S\times\mathbb A^1)\to\mathbb Z_{\mathrm{tr}}(S)$ and closed under sums that remain bounded above. Thick means closed under isomorphisms, shifts, cones and direct summands. Let $W_{\mathbb A^1}$ consist of maps whose cones lie in $\mathcal E$. The imported effective category is the localization $D^-(\mathcal A)[W_{\mathbb A^1}^{-1}]$; $M(S)$ is the image of $\mathbb Z_{\mathrm{tr}}(S)$. A target is A¹-local when contravariant Hom into it inverts $W_{\mathbb A^1}$.

For the coefficient construction, $\mathbb G_m=\operatorname{Spec}k[t,t^{-1}]$ is pointed by $1$. Its $r$-fold pointed representable is the quotient of $\mathbb Z_{\mathrm{tr}}(\mathbb G_m^r)$ by the images of all coordinate-$1$ inclusions, with the unit $\mathbb Z_{\mathrm{tr}}(\operatorname{Spec}k)$ for $r=0$. Put $\Delta^n=\operatorname{Spec}(k[t_0,\ldots,t_n]/(\sum t_i-1))$ and $(C_nF)(S)=F(S\times\Delta^n)$, with alternating coordinate-face differential; $C_*F$ is placed in cochain degree $-n$. The transfer tensor is the imported representable-projective-resolution construction, followed by Nisnevich sheafification and effective localization. It is not the objectwise tensor of transfer presheaves. In that tensor category $B(d)=B\otimes\mathbb Z(1)^{\otimes d}$ for $d\geq0$.

## Source contract
**Given:** The perfect field, integral coefficients, smooth separated finite-type $Y$, bounded-above effective objects, the Axiom of Choice and the fixed small-site and universe bounds.

**Goal:** Keep the canonical coefficient/restriction comparisons and nonnegative Tate conventions, supplying the actual derived mapping complexes for their relative-cone application.

The imported motivic and correspondence inputs are exactly the numbered MVW results in the source records. The resolution input applies to a Grothendieck abelian category; that hypothesis is verified in step 1.1. AC is retained for cardinal and representative choices in the imported K-injective resolution construction. The local Hom differential and cone calculation introduce no further choice. No resolution of singularities is assumed. The proof is a local composition of these explicit inputs, not a reconstruction of their foundational proofs.

## External input
MVW Lecture 1 and Definitions 2.1, 2.8, 2.12 and 2.14 supply the transfer category, its representables and the coefficient constructions just specified. Theorem 13.1 supplies the exact reflector $a$ and the abelian transfer-sheaf category. Lemma 13.4 supplies ordinary Yoneda evaluation and acyclicity of injective transfer sheaves on every smooth scheme. Exercise 13.5 is imported as the canonical hyperext/hypercohomology comparison for complexes; its finite-cohomological-dimension hypothesis holds for the finite-dimensional smooth schemes here. This is an exercise statement in the source, not a claimed printed proof.

MVW Proposition 13.10 and Example 13.11 supply the canonical topology comparison for these bounded-above coefficients over a perfect field. Definition 14.6, equation (14.6.1), Proposition 14.8, Corollary 14.9, Theorem 14.11 and Proposition 14.16 supply their A¹-locality, local-target Hom calculation and representability. Definition 3.1, the tensor construction in Lecture 8 with Example 8.10, Definition 14.2 and Lemma 14.4 supply the coefficient and effective tensor conventions. The established intersection theory, tensor localization and homotopy-invariance foundations remain imports with the reading limits in the source records.

Stacks Theorem 19.12.6 supplies functorial K-injective resolutions for Grothendieck abelian categories. Stacks Lemma 13.31.2 identifies homotopy and derived morphisms into a K-injective target. These apply to $\mathcal A$ after step 1.1; no theorem restricted to ordinary sheaves on a ringed site is being substituted for a transfer-sheaf theorem. Internal Hom sheaves in MVW Remark 14.12 are distinguished from the scalar complex of abelian groups used here.

## Facts & Assumptions
**Given:** The data of the Statement and Construction conventions.

**Goal:** Establish the coefficient interface and its compatible cone-to-fiber calculation.

[A1] Choice is assumed for the representative/cardinal choices of the imported resolution framework; the supplied universes and small representatives bound all categories and products. [[math:def-axiom-of-choice]] [[math:def-grothendieck-universe-closure-convention]]

[F1] The geometric formulation uses perfect fields, schemes over the named base, smoothness, relative separatedness, finite type, and finite correspondence morphisms. [[math:def-perfect-field]] [[math:def-scheme-over-base]] [[math:def-smooth-morphism-schemes]] [[math:def-separated-scheme-over-base]] [[math:def-locally-finite-type-and-finite-type-morphism]] [[math:def-finite-morphism-schemes]] The transfer and coefficient constructions themselves are the exact MVW inputs in External input.

[F2] The Nisnevich topology and right derived evaluation have their supplied meanings; for Zariski evaluation use the explicitly specified open site. [[def-nisnevich-covering-interface]] [[def-derived-sections-on-sites]]

[F3] Cochain derived categories, cone signs and Hom differentials have the supplied conventions; bounded derived localizations embed fully faithfully in the unbounded one. [[math:def-derived-category-of-an-abelian-category]] [[math:prop-bounded-derived-localizations-embed-fully-faithfully]] [[math:def-hom-complex-of-chain-complexes]]

[F4] A Grothendieck category is abelian with a generator and exact filtered colimits (AB5); the declared filtered-colimit result includes commutation with cohomology of complexes of abelian groups. [[math:def-grothendieck-category]] [[math:lem-filtered-colimits-of-abelian-groups-are-exact]] The exact transfer reflector and the K-injective existence/computation theorems are the imports in External input.

## Proof
1.1 First verify the resolution hypothesis, rather than applying a ringed-site theorem to transfers. Kernels, colimits and homology in $\mathcal P$ are computed objectwise. Colimits in $\mathcal A$ are obtained by applying the exact reflector $a$ to colimits in $\mathcal P$. For a filtered diagram of exact complexes in $\mathcal A$, its presheaf homology objects sheafify to zero. By [F4], presheaf filtered colimits commute with homology; applying $a$, which is exact and preserves colimits, therefore gives zero homology again. Thus filtered colimits in $\mathcal A$ are exact. The small family $a\operatorname{Cor}_k(-,Y)$ generates: the maps indexed by every section of every sheaf give a pointwise surjection from a sum of presheaf representables, and sheafifying gives an epimorphism in $\mathcal A$. Their coproduct is a generator, since any nonzero morphism differs on a section and the corresponding representable map extends to that coproduct by zero on its other summands. Together with MVW 13.1, this makes $\mathcal A$ Grothendieck. The imported Stacks existence theorem now supplies $K\to I_K$. The Hom differential identifies degree-$n$ cycles with chain maps to $I_K[n]$ and boundaries with null homotopies. The imported K-injective computation, applied to every shift, gives $H^n\underline{\operatorname{Hom}}(B,I_K)=\operatorname{Hom}_{D(\mathcal A)}(B,K[n])$. It also makes this Hom complex invariant under quasi-isomorphisms in $B$: its Hom from an acyclic cone is acyclic. A quasi-isomorphism between K-injective resolutions is a homotopy equivalence by the same computation, so changing the resolution gives the canonical derived bifunctor. The imported representable and coefficient constructions are applicable with exactly the scheme and size bounds in [F1]. [A1, F1, F3, F4]

2.1 For $K=\mathbb Z(j)$, ordinary Yoneda gives $\underline{\operatorname{Hom}}(\mathbb Z_{\mathrm{tr}}(Y),I_K)=I_K(Y)$ termwise, naturally for the actual open map. Forgetting transfers gives the canonical derived comparison to ordinary Nisnevich sections: on a chosen ordinary-sheaf K-injective replacement it is the induced evaluation map. The imported MVW 13.4–13.5 comparison identifies its cohomology in every degree, so this map is a quasi-isomorphism, not a choice of unrelated group isomorphisms. The imported canonical Zariski-to-Nisnevich map is likewise a quasi-isomorphism by 13.10–13.11. For an actual cochain map $f:A\to B$, the Hom differential of [F3] gives a chain isomorphism $\underline{\operatorname{Hom}}(\operatorname{Cone}(f),I_K)\cong\operatorname{Cone}(\underline{\operatorname{Hom}}(B,I_K)\to\underline{\operatorname{Hom}}(A,I_K))[-1]$: in degree $n$, the components $(v,u)$ on $B$ and $A[1]$ map to $((-1)^{n+1}u,v)$. Here $v$ has degree $n$ in $\underline{\operatorname{Hom}}(B,I_K)$ and $u$ has degree $n-1$ in $\underline{\operatorname{Hom}}(A,I_K)$. With $d$ denoting the Hom differential, the source differential is $(dv,du+(-1)^{n+1}vf)$; both composites in the chain-map check send $(v,u)$ to $((-1)^n du-vf,dv)$. The map is degreewise invertible and natural in the actual map $f$. Taking $A=\mathbb Z_{\mathrm{tr}}(U)$ and $B=\mathbb Z_{\mathrm{tr}}(Y)$, the natural Yoneda comparisons identify its target with the restriction cone shifted by $[-1]$. By the stated cochain definition of fiber, this proves the displayed restriction-fiber formula directly in $D(\mathbf{Ab})$. Both endpoints and their cone lie in $D^-$; [F3] and the imported A¹-local-target formula (14.6.1) identify their derived Hom groups with Hom in the effective category. Finally, singular replacement is an A¹-equivalence and the imported tensor takes pointed representables to their smash, so $\mathbb Z(r)=\mathbb Z(1)^{\otimes r}$ and its $d$-fold effective twist is $\mathbb Z(r+d)$ for $r,d\geq0$. The source convention gives zero for negative classical weights; the stated EM zero extension is only the explicit convention already recorded. All claims follow with their stated bounds. [A1, F1, F2, F3, step 1.1] ∎
