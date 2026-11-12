---
title: A compatible presheaf-complex model of étale derived sections
status: draft
research_item: lem-adjudicate-430d6b729af8-etale-presheaf-model
dependency_level: 11
sources:
  references:
    - title: The Stacks Project, big and small étale sites
      url: https://stacks.math.columbia.edu/tag/0214
      locator: Definitions 34.4.6 and 34.4.8; Lemmas 34.4.13, 34.4.17–18; Lemma
        34.4.20, statement and forward-construction proof.
      statement: A big étale site can be chosen containing a prescribed set of
        schemes. Restriction to the small étale site of any object is an
        inverse-image functor with value on U given by the original sheaf on U.
        Scheme base change gives the small-site morphisms. A big sheaf gives
        small-site sheaves with transition maps from inverse images, satisfying
        the composition identity of Lemma 34.4.20(1).
      hypotheses: Schemes and morphisms in the chosen big site; étale coverings are
        jointly surjective étale families. Apply over Spec F, containing the
        fixed qcqs skeleton and its small étale sites within enlarged universes.
      reading_limits: Read Definitions 34.4.6 and 34.4.8, Lemmas 34.4.13 and
        34.4.17–18, and the statement and forward construction of 34.4.20 in the
        online text on 2026-11-12. Site-existence and topos foundations are
        imported; no general commutation of restriction with inverse image is
        asserted.
    - title: The Stacks Project, Lemma 59.99.1
      url: https://stacks.math.columbia.edu/tag/0758
      locator: Lemma 59.99.1(2)(a), with (1)(a) and the two proofs following it.
      statement: For an object X of the big étale site over S, restriction of a
        K-injective complex of abelian sheaves to the small étale site of X is
        K-injective.
      hypotheses: An object X over S in a big étale site; abelian sheaves, not
        structure-sheaf modules. Here S=Spec F and the resolution is of the
        underlying abelian constant sheaf.
      reading_limits: Read Lemma 59.99.1 and both restriction arguments, including the
        structure-sheaf-module counterexample, on 2026-11-12. Only its abelian
        assertion is imported; constant-coefficient restriction is established
        locally using references 3–4.
    - title: The Stacks Project, Lemma 21.20.7
      url: https://stacks.math.columbia.edu/tag/0D6J
      locator: Lemma 21.20.7(2) and the first proof paragraph constructing the
        comparison from a module K-injective resolution and an abelian
        K-injective replacement.
      statement: For a ringed site and a module K-injective complex J, any abelian
        K-injective replacement UJ→K induces a quasi-isomorphism J(X)→K(X) for
        every site object X, after forgetting coefficients.
      hypotheses: A ringed site and an object X of it; J is K-injective as a module
        complex, UJ→K is a quasi-isomorphism, and K is K-injective as an abelian
        sheaf complex. Apply once on the big étale site with constant ring sheaf
        L and every X in the fixed skeleton.
      reading_limits: "Read all assertions and the full displayed proof of Lemma
        21.20.7 on 2026-11-12. Import its objectwise quasi-isomorphism
        criterion; the flat-resolution foundations are not reconstructed. No
        enhanced naturality theorem is attributed to this lemma: the global
        zigzag and its transition compatibility are proved locally."
    - title: "The Stacks Project, Lemma 18.16.2: Abelian lower shriek adjunction"
      url: https://stacks.math.columbia.edu/tag/04BG
      locator: Lemma 18.16.2, sheaf-level adjunction formula and proof.
      statement: For a functor of sites as in Section 18.16, the abelian lower-shriek
        functor is additive and left adjoint to inverse image.
      hypotheses: Use the inclusion X_et→B from Lemma 34.4.13; its induced inverse
        image is restriction r_X. This is the abelian-sheaf adjunction, not a
        claim about structure-sheaf modules.
      reading_limits: Read the full statement and proof on 2026-11-12, in conjunction
        with 34.4.13 and 59.99.1. The presheaf-colimit and sheafification
        foundations remain imported. The lift to constant-coefficient module
        actions is local.
    - title: "The Stacks Project, Lemma 18.16.3: Exactness of abelian lower shriek"
      url: https://stacks.math.columbia.edu/tag/04BH
      locator: Lemma 18.16.3, hypotheses (a)–(c), conclusion and proof.
      statement: The abelian lower-shriek functor is exact if the site functor is
        continuous and cocontinuous and preserves fibre products and equalizers,
        which exist in its domain.
      hypotheses: The inclusion X_et→B has these properties by the proof of 34.4.13.
        Apply to its abelian lower-shriek left adjoint ell_X.
      reading_limits: Read the complete statement and proof on 2026-11-12 and checked
        the inclusion hypotheses in 34.4.13. Exact sheafification and the
        colimit facts cited in that proof are imported, not re-proved.
    - title: "The Stacks Project, Section 21.19: Ringed-site K-injective resolutions"
      url: https://stacks.math.columbia.edu/tag/07A5
      locator: Opening paragraph, additive-functor clause (2), computation formula and
        object-sections example (2), before Lemma 21.19.1.
      statement: Module complexes on a ringed site admit functorial K-injective
        resolutions; additive derived evaluation is computed by evaluating them.
      hypotheses: A ringed site in fixed size bounds. Apply to (B,L) with L the
        constant Lambda ring sheaf, and also to abelian sheaves via the constant
        integer sheaf. Restrict the action on J(X) along Lambda→L(X).
      reading_limits: Read the opening paragraph through the two section-evaluation
        examples on 2026-11-12. Existence and model foundations cited there are
        imported; enhanced interpretation uses the declared endomorphism and
        enhanced-mapping suppliers.
    - title: "The Stacks Project, Section 13.31: K-injective comparison and products"
      url: https://stacks.math.columbia.edu/tag/070G
      locator: Definition 13.31.1; Lemma 13.31.2 and proof; Lemma 13.31.5 and its
        product-exactness argument; Lemma 13.31.7 proof, first paragraph.
      statement: Maps into K-injective complexes in the homotopy category compute
        derived maps. Quasi-isomorphisms between K-injectives are homotopy
        equivalences. Products of abelian groups are exact, so degreewise
        products of abelian complexes compute their derived products.
      hypotheses: An abelian category with the specified K-injective targets; for the
        product assertion use abelian groups, small indexing sets and Choice.
        Apply on B to compare I and K, and in abelian groups for formal-family
        values.
      reading_limits: Read the named definition, statements and proofs in the online
        text on 2026-11-12. The general derived-localization foundations remain
        imported. The global comparison map and its sheaf homotopy are
        constructed locally from the stated Hom bijection.
---

PDF p. 6: Proposition 2.6 proof; compatible model for the locality unit

## Prerequisites

- [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)
- [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [lem-author-7113c087ecba-endomorphism-hyperdescent](item-lem-author-7113c087ecba-endomorphism-hyperdescent)
- [thm-adjudicate-60ab133bec72-enhanced-mapping-input](item-thm-adjudicate-60ab133bec72-enhanced-mapping-input)
- [` The Stacks Project, big and small étale sites · Definitions 34.4.6 and 34.4.8; Lemmas 34.4.13, 34.4.17–18; Lemma 34.4.20, statement and forward-construction proof. `](https://stacks.math.columbia.edu/tag/0214)
- [` The Stacks Project, Lemma 59.99.1 · Lemma 59.99.1(2)(a), with (1)(a) and the two proofs following it. `](https://stacks.math.columbia.edu/tag/0758)
- [` The Stacks Project, Lemma 21.20.7 · Lemma 21.20.7(2) and the first proof paragraph constructing the comparison from a module K-injective resolution and an abelian K-injective replacement. `](https://stacks.math.columbia.edu/tag/0D6J)
- [` The Stacks Project, Lemma 18.16.2: Abelian lower shriek adjunction · Lemma 18.16.2, sheaf-level adjunction formula and proof. `](https://stacks.math.columbia.edu/tag/04BG)
- [` The Stacks Project, Lemma 18.16.3: Exactness of abelian lower shriek · Lemma 18.16.3, hypotheses (a)–(c), conclusion and proof. `](https://stacks.math.columbia.edu/tag/04BH)
- [` The Stacks Project, Section 21.19: Ringed-site K-injective resolutions · Opening paragraph, additive-functor clause (2), computation formula and object-sections example (2), before Lemma 21.19.1. `](https://stacks.math.columbia.edu/tag/07A5)
- [` The Stacks Project, Section 13.31: K-injective comparison and products · Definition 13.31.1; Lemma 13.31.2 and proof; Lemma 13.31.5 and its product-exactness argument; Lemma 13.31.7 proof, first paragraph. `](https://stacks.math.columbia.edu/tag/070G)


## Statement
Assume the Axiom of Choice and the nested universe bounds used for the qcqs prime-field site and derived sections, enlarged to contain the auxiliary big étale site below. Let $F=\mathbb Q$ or $F=\mathbb F_p$, with $p$ prime, and let $\Lambda$ be a finite commutative unital ring (its underlying set is finite). On the fixed skeleton $\mathcal C_F$ of qcqs $F$-schemes, the underlying abelian derived-section functor $E_\Lambda(X)=R\Gamma_{\mathrm{et}}(X,\underline\Lambda_X)$ has a strict presheaf-complex representative $C_\Lambda$. More precisely, choose one big étale site $\mathcal B=(\mathit{Sch}/F)_{\mathrm{et}}$ containing that skeleton, let $A$ be its constant abelian sheaf associated to the additive group of $\Lambda$, and choose a K-injective resolution $A[0]\to I^\bullet$ in abelian sheaves on $\mathcal B$. Then
$$C_\Lambda(X)=I^\bullet(X),\qquad C_\Lambda(f)=I^\bullet(f).$$
Localizing these strict complexes at objectwise quasi-isomorphisms gives a natural equivalence with the underlying $D(\mathbb Z)$-valued coherent functor $E_\Lambda$, including its actual derived pullbacks. Here $D(\mathbb Z)$ means the enhanced derived category of abelian complexes, and coherent means that the functor retains composition homotopies and their higher compatibilities. Consequently hypercover limits of this model are the limits of that same derived-section functor. For formal families use products of values, and for schemes outside the skeleton use its specified representative functor. No cdh sheafification is performed in constructing $C_\Lambda$.

## Facts & Assumptions
**Given:** The finite coefficient ring, prime field, fixed skeleton, Choice and sufficiently enlarged size bounds in the statement.

**Goal:** Construct the strict model and identify the entire coherent diagram, so that descent comparisons may be transferred to it.

[A1] Choice is used for the selected resolutions and the fixed skeleton representatives. All sites and indexing sets are small in the ambient enlarged universe. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The qcqs skeleton, prime field, universe bounds, presheaves and representative-based evaluation are those of [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site). Abelian sheaves, cochain complexes, cohomology, quasi-isomorphisms, cochain homotopies, K-injectivity and derived evaluation are supplied by [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input) and [def-derived-sections-on-sites](item-def-derived-sections-on-sites).

[F2] The constant coefficient sheaves, exact coefficient inverse images, enhanced derived-section functor and its actual coherent pullbacks have the meanings and resolution computation in [lem-author-7113c087ecba-endomorphism-hyperdescent](item-lem-author-7113c087ecba-endomorphism-hyperdescent). Its Definition and dg-localization interface, rather than its arc-descent conclusion, are used here.

[F3] Source reference 0 supplies the big and small étale sites, exact restriction $r_X$ to the small site, and base-change formulas. Source reference 1 supplies preservation of K-injectivity for abelian sheaves. Source reference 2 is used on the big ringed site to test the evaluations of one global coefficient-forgetting map; it supplies no enhanced naturality assertion.

[F4] The coefficient ring is as in [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring). Source reference 0, Lemma 34.4.20, supplies maps $\beta_f:f_{small}^{-1}r_XM\to r_YM$, natural in the big sheaf $M$, for $f:Y\to X$. They arise from restrictions along $U\times_XY\to U$ and satisfy $\beta_{fg}=\beta_g\circ g_{small}^{-1}\beta_f$ under canonical inverse-image identifications. They preserve addition, and on constant sheaves they are the constant-object isomorphisms. With constant coefficients they are linear, since restrictions commute with multiplication by every scalar.

[F5] Enhanced derived targets, coherent diagrams and their limits use [thm-adjudicate-60ab133bec72-enhanced-mapping-input](item-thm-adjudicate-60ab133bec72-enhanced-mapping-input). The target denoted $D(\mathbb Z)$ here is its $\mathcal D(\mathbb Z)$, not its homotopy category. Enhanced resolution computation and inverse-image coherence are those in [F2]. Forgetting coefficients from $D(\Lambda)$ to $D(\mathbb Z)$ means localizing degreewise restriction of scalars along $\mathbb Z\to\Lambda$; this exact functor preserves quasi-isomorphisms because it preserves the underlying kernels and images.

[F6] References 3–4 supply an additive exact left adjoint $\ell_X$ to $r_X$ on abelian sheaves. An adjunction here means a natural bijection $\operatorname{Hom}(\ell_XN,M)\cong\operatorname{Hom}(N,r_XM)$; exact means preserving short exact sequences. The inclusion $X_{\mathrm{et}}\to\mathcal B$ satisfies their hypotheses by the proof of reference 0, Lemma 34.4.13. No assertion for structure-sheaf modules is imported.

[F7] Reference 5 supplies K-injective resolutions for modules over any ring sheaf on a site. Reference 6 supplies maps into K-injective targets: precomposition by a quasi-isomorphism induces a bijection on cochain-homotopy classes. It also gives homotopy equivalences between quasi-isomorphic K-injectives and exactness of small products in abelian groups. Thus degreewise products of abelian complexes compute their derived products under [A1].

## External input
The imported site and abelian-restriction inputs are [Stacks, §34.4](https://stacks.math.columbia.edu/tag/0214) and [Lemma 59.99.1](https://stacks.math.columbia.edu/tag/0758). The abelian lower-shriek adjunction and its exactness are [Lemmas 18.16.2](https://stacks.math.columbia.edu/tag/04BG) and [18.16.3](https://stacks.math.columbia.edu/tag/04BH). The module resolution and homotopy-category comparison inputs are [§21.19](https://stacks.math.columbia.edu/tag/07A5) and [§13.31](https://stacks.math.columbia.edu/tag/070G). Exact statements, hypotheses and reading limits are in source references 0–1 and 3–6.

[Lemma 21.20.7(2)](https://stacks.math.columbia.edu/tag/0D6J), source reference 2, is applied on the single big ringed site to the global map $UJ^\bullet\to K^\bullet$ constructed below. Its objectwise conclusion is used only after that map exists. The constant-coefficient adjunction lift, compatible coefficient resolution and global natural zigzag are the local argument; the whole lemma is not an imported enhanced comparison theorem.

## Proof
1.1 Choose the big site $\mathcal B$ and the stated abelian resolution $a:A[0]\to I^\bullet$ using [A1], [F1] and [F3]. Restriction of $I^\bullet$ to $\mathcal C_F$ is the strict presheaf complex $C_\Lambda$. For each $X$, $r_XI^\bullet$ is an abelian K-injective resolution of $\underline\Lambda_X$, so its sections compute abelian derived sections. To model coefficients on this same big site, write $L=\underline\Lambda_{\mathcal B}$ and let $U$ forget its action. A sheaf of modules over the constant ring sheaf is equivalently an abelian sheaf with endomorphisms $\rho_\lambda$ for $\lambda\in\Lambda$ satisfying $\rho_1=\mathrm{id}$, $\rho_{\lambda+\mu}=\rho_\lambda+\rho_\mu$ and $\rho_{\lambda\mu}=\rho_\lambda\rho_\mu$: scalar sections are locally represented by constant scalars, so the action extends uniquely by sheaf gluing. This description applies on both big and small sites. Lift $\ell_X$ from [F6] by replacing each $\rho_\lambda$ by $\ell_X(\rho_\lambda)$. Additivity and functoriality preserve the action identities. Naturality of the adjunction bijection in both variables shows that a map commutes with every scalar if and only if its adjunct does; hence the lifted functor is left adjoint to coefficient restriction. Kernels and cokernels inherit scalar actions, and exactness is detected after forgetting them, so this lifted left adjoint remains exact. It follows directly that coefficient restriction preserves K-injectivity: homotopy classes of maps from an acyclic coefficient complex $T$ into $r_XJ$ are the classes of maps from $\ell_XT$ into $J$, which vanish for K-injective $J$ because the exact $\ell_X$ makes $\ell_XT$ acyclic. Choose a module K-injective resolution $b:L[0]\to J^\bullet$ by [F7]. Thus $r_XJ^\bullet$ is a coefficient K-injective resolution on $X_{\mathrm{et}}$, and the strict coefficient presheaf complex $P_\Lambda(X)=J^\bullet(X)$ computes the coefficient derived sections, with the action restricted along $\Lambda\to L(X)$. For $f:Y\to X$, apply [F4] to $b$: exact inverse image and restriction, together with the constant-object isomorphism, make $\beta_f:f_{small}^{-1}r_XJ^\bullet\to r_YJ^\bullet$ a quasi-isomorphism. The induced map on sections is exactly $J^\bullet(f)$, and is the actual derived pullback of [F2]. This is a simultaneous resolution of the entire constant-object diagram: its coaugmentation is compatible with every $\beta_f$, its component targets are K-injective, and the transition identity holds for every composable string. In the enhanced resolution computation of [F2], applying inverse image followed by these replacement maps therefore computes that same coherent functor. The associativity identifications come from iterated fibre products; their universal properties make all iterated identifications agree. Consequently this comparison retains the coherence for all lengths of strings before localization, rather than only the individual derived-category arrows. The localized $P_\Lambda$ is thus the actual coefficient-valued $E_\Lambda$. This argument concerns constant-ring actions and does not apply the false structure-sheaf-module analogue of [F3]. [A1, F1, F2, F3, F4, F6, F7, construct]

2.1 Construct the coefficient-forgetting comparison on $\mathcal B$ before any scheme evaluation. Choose an abelian K-injective replacement $q:UJ^\bullet\to K^\bullet$ by [F1], and put $c=qU(b):A[0]\to K^\bullet$. Reference 2 applied on the big ringed site $(\mathcal B,L)$ to $J^\bullet$ and $q$ gives a quasi-isomorphism $q(X):UJ^\bullet(X)\to K^\bullet(X)$ for every object $X$ of $\mathcal B$. Both $a$ and $c$ are sheaf quasi-isomorphisms. The Hom bijection of [F7], applied to precomposition with $a$ and target $K^\bullet$, gives a global chain map $h:I^\bullet\to K^\bullet$ and a global sheaf cochain homotopy $ha\simeq c$. Therefore $h$ is a quasi-isomorphism; since $I^\bullet$ and $K^\bullet$ are K-injective it is a cochain-homotopy equivalence by [F7]. Evaluation preserves the inverse maps and homotopies, so $h(X)$ is a quasi-isomorphism for every $X$. We have the diagram-level zigzag $UP_\Lambda\xrightarrow{q(-)}K^\bullet(-)\xleftarrow{h(-)}C_\Lambda$ of objectwise quasi-isomorphisms of strict presheaf complexes. For $f:Y\to X$, strict naturality gives $K^\bullet(f)q(X)=q(Y)UJ^\bullet(f)$ and $K^\bullet(f)h(X)=h(Y)I^\bullet(f)$. Before taking sections, naturality of [F4] gives $(r_Yq)\beta_f^{UJ}=\beta_f^K f_{small}^{-1}(r_Xq)$ and the analogous identity for $h$; the one sheaf homotopy $ha\simeq c$ restricts compatibly to every object as well. Hence both zigzag arrows respect all inverse-image transition maps, coaugmentations up to that specified global homotopy, and every iterated composite simultaneously. Taking nerves and then enhanced localization turns the strict zigzag into natural transformations of the full coherent diagrams, with all components equivalences. Inverting its right arrow yields the required coherent equivalence from the underlying coefficient functor of step 1.1 to $C_\Lambda$, inducing the identity on the constant object. This constructs the coefficient-forgetting comparison rather than inferring its enhanced naturality from reference 2. Equivalences of diagrams preserve their limits by the universal property in [F5], so the same comparison applies to hypercover limits and augmentations. Degreewise products give the formal-family values by [F7]. Precomposition with the representative functor of [F1] gives the specified comparison outside the skeleton. All these constructions precede cdh sheafification. [F1, F2, F3, F4, F5, F7, step 1.1] ∎
