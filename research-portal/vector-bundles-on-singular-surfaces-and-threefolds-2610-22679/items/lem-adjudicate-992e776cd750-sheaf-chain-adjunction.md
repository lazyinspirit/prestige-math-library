---
id: lem-adjudicate-992e776cd750-sheaf-chain-adjunction
kind: lemma
title: Derived free sheaf chains and unbounded Eilenberg targets
status: draft
domain: mathematics
deps:
  - math:def-stalk-of-presheaf
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:thm-dold-kan-equivalence-for-simplicial-modules
  - math:thm-sheafification-preserves-stalks
  - math:thm-exactness-of-sheaves-stalkwise
  - math:lem-filtered-colimits-of-abelian-groups-are-exact
  - math:thm-sheaf-morphism-isomorphism-stalkwise
  - thm-adjudicate-992e776cd750-filtered-space-colimits-input
dependency_roles:
  math:def-stalk-of-presheaf: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:thm-dold-kan-equivalence-for-simplicial-modules: mathematical-premise
  math:thm-sheafification-preserves-stalks: mathematical-premise
  math:thm-exactness-of-sheaves-stalkwise: mathematical-premise
  math:lem-filtered-colimits-of-abelian-groups-are-exact: mathematical-premise
  math:thm-sheaf-morphism-isomorphism-stalkwise: mathematical-premise
  thm-adjudicate-992e776cd750-filtered-space-colimits-input: mathematical-premise
formulation_deps:
  - math:def-stalk-of-presheaf
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:thm-dold-kan-equivalence-for-simplicial-modules
  - math:thm-sheafification-preserves-stalks
  - math:thm-exactness-of-sheaves-stalkwise
  - math:lem-filtered-colimits-of-abelian-groups-are-exact
  - math:thm-sheaf-morphism-isomorphism-stalkwise
  - thm-adjudicate-992e776cd750-filtered-space-colimits-input
argument_deps:
  - math:def-stalk-of-presheaf
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:thm-dold-kan-equivalence-for-simplicial-modules
  - math:thm-sheafification-preserves-stalks
  - math:thm-exactness-of-sheaves-stalkwise
  - math:lem-filtered-colimits-of-abelian-groups-are-exact
  - math:thm-sheaf-morphism-isomorphism-stalkwise
  - thm-adjudicate-992e776cd750-filtered-space-colimits-input
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: J. F. Jardine, Lectures on Local Homotopy Theory, Lecture 06
      url: https://www.math.uwo.ca/faculty/jardine/courses/localhom/localhom-lecture06a.pdf
      locator: "Section 13, printed pp. 1–11: free/forgetful adjunction, Lemmas 13.1
        and 13.3, Proposition 13.5 and Corollary 13.6; Section 14, p. 12,
        inclusion/good-truncation adjunction; p. 16, reduced pointed adjunction"
      statement: On a small site, the free/forgetful and sheafification functors give
        simplicial model adjunctions for modules over a presheaf of commutative
        unital rings. Normalization transports local weak equivalences to
        homology-sheaf isomorphisms. Inclusion of nonnegative chain complexes
        has good truncation as right adjoint. Reduced free modules give the
        pointed adjunction.
      hypotheses: A fixed small Grothendieck site and a presheaf of commutative unital
        rings; use the constant ring Z and the open-set site of a topological
        space. Translate homological degree n to cochain degree -n.
      reading_limits: Freshly read the named adjunctions, Lemmas 13.1 and 13.3,
        Proposition 13.5, Corollary 13.6, the start of Section 14 and its
        pointed paragraph in the live author-hosted extraction on 12 November
        2026. Model existence is imported. Proposition 14.3 is not used to infer
        an enhanced connective comparison; that comparison is proved locally in
        Proof 2.1. No reconstruction of Boolean localization or full-course
        review is claimed.
    - title: Jacob Lurie, Higher Algebra, September 18, 2017
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Remark 1.3.1.12 and Construction 1.3.1.13, printed pp. 83–84;
        Definition 1.3.5.8 and Propositions 1.3.5.13–15, pp. 125–127;
        Proposition 1.3.5.21(1)–(2), p. 129; Proposition 1.2.1.5 and Notation
        1.2.1.7, p. 38
      statement: For a Grothendieck abelian category, unbounded derived localization
        has a fibrant K-injective dg model. Its mapping spaces are Dold–Kan of
        good truncation of derived Hom. The derived category has the standard
        t-structure and truncation adjoints. These inputs do not alone identify
        the separate localization of strictly connective complexes with its
        connective full subcategory; Proof 2.1 supplies that identification.
      hypotheses: A Grothendieck abelian category in fixed compatible universes. Use
        abelian sheaves, reverse homological grading to cochains, and truncate
        after derived replacement. No left completeness of the t-structure is
        assumed.
      reading_limits: "Freshly read Remark 1.3.1.12, Construction 1.3.1.13, Definition
        1.3.5.8, Propositions 1.3.5.13–15 and their proofs, Proposition
        1.3.5.21(1)–(2), Proposition 1.2.1.5 and Notation 1.2.1.7 in the live
        author PDF extraction on 12 November 2026. These enhanced-derived
        interfaces are imported. The source uses homological indexing: its
        connective right truncation becomes good cochain truncation at degree
        zero here. No left-completeness or full-book review is asserted."
    - title: The Stacks Project, Remark 19.13.3, tag 079Q
      url: https://stacks.math.columbia.edu/tag/079Q
      locator: Remark 19.13.3, both paragraphs and the displayed derived Hom formula
      statement: Module sheaves on a ringed site form a Grothendieck abelian category;
        every unbounded complex admits a K-injective resolution computing
        derived morphisms.
      hypotheses: All module sheaves on a ringed site; apply to the constant sheaf Z
        on the open-set site, with fixed universe bounds. No boundedness or
        finiteness assumption.
      reading_limits: Freshly read the complete live remark, its displayed derived Hom
        formula and its module-sheaf example on 12 November 2026. K-injective
        existence is imported from the cited result, not reconstructed. The
        infinity-categorical enhancement comes from reference 1, not from this
        homotopy-category remark.
    - title: Jacob Lurie, Higher Algebra, September 18, 2017 — stability and spectrum
        objects
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Proposition 1.3.5.9, printed pp. 125–126; Notation 1.4.2.20, p. 146;
        Proposition 1.4.2.24 and Remark 1.4.2.25, p. 147
      statement: The unbounded derived infinity-category of a Grothendieck abelian
        category is stable. Spectra are coherent towers of pointed spaces with
        successive loop equivalences; the infinite-loop-space functor evaluates
        at level zero.
      hypotheses: For stability use the Grothendieck category of abelian groups. For
        the tower description use pointed spaces, which admit finite limits.
        Work in the stated compatible universes. Cochain suspension is B[1], so
        B[n] is the loop object of B[n+1]. No boundedness or completeness
        hypothesis is imposed.
      reading_limits: Freshly read Proposition 1.3.5.9 and its proof, Notation
        1.4.2.20, Proposition 1.4.2.24 and Remark 1.4.2.25 in the live author
        PDF extraction on 12 November 2026. Stability and the spectrum-tower
        interface are imported; the particular tower and Dold–Kan comparison are
        local constructions below. No full-book review is claimed.
    - title: Jacob Lurie, Higher Algebra — infinity-localization and simplicial model
        mapping spaces
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definition 1.3.4.1 and Remark 1.3.4.2, printed p. 108; Definition
        1.3.4.15 and Remark 1.3.4.16, p. 116; Theorem 1.3.4.20, p. 117
      statement: Infinity-localization exists and restriction on functor
        infinity-categories is fully faithful, with image the functors inverting
        the chosen arrows. For a simplicial model category, the nerve of its
        fibrant-cofibrant simplicial subcategory presents its
        infinity-localization; functorial replacement also permits localization
        of all objects.
      hypotheses: Categories and chosen arrows in compatible universes. For the model
        comparison use the simplicial local models of reference 0, with
        functorial factorizations, and the simplicial presheaf local model
        appearing there. Theorem 1.3.4.20 is not applied to the nonsimplicial
        unbounded complex model; use reference 1 for that model.
      reading_limits: Freshly read Definition 1.3.4.1, Remark 1.3.4.2, Definition
        1.3.4.15, Remark 1.3.4.16 and the statement of Theorem 1.3.4.20 in the
        live author PDF extraction on 12 November 2026. The localization and
        model comparison are imported, without reconstruction of their
        foundational proofs. Descent of the explicit connective
        inclusion/truncation and the inverse mapping-space formulas are proved
        locally below.
proof_strategy: direct
dependency_level: 1
---

## Statement
Assume the Axiom of Choice and compatible Grothendieck universes containing $\omega$. Let $X$ be any topological space whose opens form a small site in these bounds. Simplicial presheaves are contravariant functors from opens to simplicial sets. A local weak equivalence induces weak homotopy equivalences on every stalk. Let $\mathcal H_X$ denote their infinity-localization at these equivalences, the stalkwise local homotopy convention. Write $\mathcal D_X$ for the infinity-localization of unbounded cochain complexes of abelian sheaves at cohomology-sheaf isomorphisms. Its homotopy category is $D(\operatorname{Sh}(X,\mathbb Z))$.

For $Y\in\mathcal H_X$, let $L_X(Y)$ be degreewise abelian sheafification of $N\mathbb Z[Y]$, in cochain degree $-n$ for normalized chain degree $n$. Here $N(A)_n=\bigcap_{i<n}\ker d_i$, with differential $(-1)^nd_n$. This construction is independent up to equivalence of the simplicial representative. Abelian sheafification is exact; the stalk of $L_X(Y)$ is $N\mathbb Z[Y_x]$. A map of these complexes is a quasi-isomorphism exactly when it is so at every point.

For any unbounded $C\in\mathcal D_X$, there is a natural derived adjunction. For an open $U$, let $h_U$ be its representable simplicial presheaf: $h_U(V)=\{*\}$ when $V\subseteq U$ and $h_U(V)=\varnothing$ otherwise, viewed as discrete simplicial sets. Throughout, $E_X(C)(U):=\operatorname{Map}_{\mathcal H_X}(h_U,E_X(C))$ denotes derived evaluation. For $V\subseteq U$, restriction is precomposition with $h_V\to h_U$. Then
$$\operatorname{Map}_{\mathcal H_X}(Y,E_X(C))\simeq\operatorname{Map}_{\mathcal D_X}(L_X(Y),C),\qquad E_X(C)(U)\simeq DK(\tau_{\leq0}R\Gamma(U,C)).$$
In this formula $R\Gamma(U,C)=R\operatorname{Hom}(\mathbb Z[U],C)$ is a derived complex of abelian groups; $\mathbb Z[U]$ is the free abelian sheaf on the represented open. The good cochain truncation $\tau_{\leq0}$ keeps negative degrees, replaces degree zero by the kernel of its differential, and kills positive degrees; $DK$ first reindexes to nonnegative chains and then applies inverse Dold–Kan and forgets the abelian structure. Truncation is applied to derived sections, never to underived sections in place of a resolution. Equivalently $E_X(C)(U)\simeq\Omega^\infty H(R\Gamma(U,C))$. Here $\mathcal D(\mathbf{Ab})$ is the infinity-localization of unbounded cochain complexes of abelian groups at quasi-isomorphisms. For any such complex $B$, define its Eilenberg–Mac Lane spectrum $H(B)$ by the coherent tower of pointed spaces $H(B)_n=\operatorname{Map}_{\mathcal D(\mathbf{Ab})}(\mathbb Z[0],B[n])$ for $n\geq0$, based at zero. The cochain shift has $B[n]^p=B^{p+n}$ and differential $(-1)^nd_B$; the tower equivalences $H(B)_n\simeq\Omega H(B)_{n+1}$ are induced by $B[n]\simeq\Omega B[n+1]$ in the stable derived category. A spectrum here means such a coherent tower, and $\Omega^\infty$ evaluates its zeroth space. This gives $\Omega^\infty H(B)\simeq DK(\tau_{\leq0}B)$ naturally on unbounded derived complexes, with the Dold–Kan comparison established in the proof.

For pointed $Y$ and target basepoint zero, replace $L_X(Y)$ by $\widetilde L_X(Y)=\operatorname{cofib}(\mathbb Z\to L_X(Y))$, where the arrow is induced by the given basepoint. The same adjunction holds for pointed mapping spaces. Consequently a (reduced, in the pointed case) chain quasi-isomorphism induces an equivalence of these mapping spaces for every unbounded coefficient $C$. No dimension, noetherian, or coefficient-continuity hypothesis is required. The space convention is the stalkwise localization, without identifying ordinary sheaves with hypercomplete sheaves.

## Facts & Assumptions
[A1] Choice is retained for the imported resolutions and model structures. Universes contain the space, its open-set site and $\omega$, with larger universes for categories; existence of these bounds is assumed separately. [[math:def-axiom-of-choice]] [[math:def-grothendieck-universe-closure-convention]]

[F1] The fixed-ring normalized Dold–Kan equivalence is [[math:thm-dold-kan-equivalence-for-simplicial-modules]]. Its finite kernel and finite degeneracy-sum formulas apply sectionwise, commute with restrictions, and extend to abelian sheaves. This supplies the indicated normalization and inverse convention.

[F2] For $x\in X$, let $\mathcal N_x$ be the category of open neighbourhoods of $x$, with inclusions as arrows. The stalk construction is $F_x=\operatorname*{colim}_{\mathcal N_x^{\mathrm{op}}}F(U)$, with transition maps given by restriction. This indexing category is filtered: $X$ is a neighbourhood and finite intersections give common refinements. For simplicial presheaves and presheaves of complexes, apply this construction in each degree; the face maps, degeneracies and differentials are induced by their sectionwise maps. [[math:def-stalk-of-presheaf]] Sheafification preserves stalks; exactness of abelian sheaves is detected on stalks; filtered colimits of abelian groups are exact. [[math:thm-sheafification-preserves-stalks]] [[math:thm-exactness-of-sheaves-stalkwise]] [[math:lem-filtered-colimits-of-abelian-groups-are-exact]]

[F3] Source reference 0 supplies the local simplicial free/forgetful model adjunction, the Dold–Kan model equivalence, the ordinary inclusion/good-truncation adjunction and the reduced pointed construction. Source reference 4 identifies derived mapping spaces in these simplicial models. Thus the enriched free/forgetful adjunction on cofibrant sources and fibrant targets supplies a mapping-space adjunction after localization. The comparison with the connective part of the unbounded localization is proved in step 2.1; it is not inferred from a homotopy-category stabilization statement.

[F4] Source reference 1 supplies unbounded derived mapping spaces and the truncation adjunction. Source reference 2 ensures that all abelian sheaves here form a Grothendieck category and admit the required unbounded K-injective replacements. These are applied to all abelian sheaves, not merely quasi-coherent ones.

[F5] [[thm-adjudicate-992e776cd750-filtered-space-colimits-input]] supplies the filtered simplicial/space colimit model and commutation with finite homotopy limits. Applying this to finite sphere and homotopy data computes homotopy groups of stalks by stalks of homotopy presheaves. [[math:thm-sheaf-morphism-isomorphism-stalkwise]] then identifies the local weak equivalences of [F3] on this open-set site with the stalkwise weak equivalences used here. This checks the enough-points application without any dimension assumption.

[F6] Source reference 3 supplies stability of the unbounded derived category of abelian groups and the coherent loop-tower description of spectra, with $\Omega^\infty$ evaluation at level zero. Abelian groups are $\mathbb Z$-module sheaves on a point, so [F4] supplies their Grothendieck and resolution hypotheses. The specific spectrum $H(B)$ and its Dold–Kan comparison are constructed locally, using the derived mapping-space formula of [F4].

[F7] Source reference 4 supplies the following universal property: for a relative category $(\mathcal C,W)$, its infinity-localization $q:\mathcal C\to\mathcal C[W^{-1}]$ exists, and $q^*:\operatorname{Fun}(\mathcal C[W^{-1}],\mathcal T)\to\operatorname{Fun}(\mathcal C,\mathcal T)$ is fully faithful with image the functors carrying $W$ to equivalences. Here an ordinary category is read via its nerve, and $\operatorname{Fun}$ is the infinity-category of functors and coherent natural transformations. In particular, relative functors descend, and natural transformations and their homotopies between the descended functors descend as well. We apply this property to cochain complexes, quasi-isomorphisms, inclusion and good truncation. This is the enhanced input used in the local proof of the connective comparison.

## External input
Import the local simplicial model and ordinary truncation interfaces from reference 0, the enhanced unbounded derived and t-structure interfaces from reference 1, and the Grothendieck/K-injective input from reference 2. Reference 3 supplies stability and spectrum towers for the inline construction of $H$. Reference 4 supplies infinity-localization, its universal property on functor categories, and the simplicial-model mapping-space comparison. The site is the small open-set site and the ring is $\mathbb Z$, so references 0–2 apply under [A1]; reference 3 is applied to abelian groups and pointed spaces, and reference 4 to the indicated relative categories and simplicial models. The proof locally establishes the enhanced connective comparison and composes the adjunctions, checks stalks and constructs pointed reduction. It does not reconstruct the imported model structures or assume left completeness of an unbounded derived category.

## Proof

**Goal:** Establish the statement under its stated hypotheses.
**Given:** $X,Y,C$ and the site and size bounds in the Statement.

1.1 A short exact sequence of abelian presheaves remains exact on stalks, since stalks are filtered colimits and [F2] gives their exactness. Sheafification leaves these stalks unchanged by [F2]; stalkwise exactness therefore proves exactness of abelian sheafification. Free abelian groups commute with colimits, and normalization uses finite kernels, so [F1] and exact filtered colimits in [F2] identify the stalk of $L_X(Y)$ with $N\mathbb Z[Y_x]$. Apply stalkwise exactness to the cone to detect quasi-isomorphisms. By [F5] the local weak equivalences here are those of [F3], which become free-chain quasi-isomorphisms. Hence the formula for $L_X$ is well-defined in the stated localizations and agrees with the derived free functor. [A1, F1, F2, F3, F5]

2.1 Put $\mathcal A=\operatorname{Sh}(X,\mathbb Z)$ and let $\mathcal C_0$ be the ordinary category of its cochain complexes that vanish in positive degrees. Let $\mathcal Q=\mathcal C_0[W^{-1}]$, with $W$ the cohomology-sheaf isomorphisms. The ordinary inclusion $i:\mathcal C_0\to\operatorname{Ch}(\mathcal A)$ has right adjoint $t=\tau_{\leq0}$: a chain map from a complex vanishing in positive degrees factors uniquely through the kernel of the target differential in degree zero. Its unit is $\mathrm{id}\to ti=\mathrm{id}$ and its counit is the natural inclusion $\epsilon_C:itC\to C$; hence $t\epsilon_C=\mathrm{id}_{tC}$ and $\epsilon_{iA}=\mathrm{id}_{iA}$. Both functors preserve quasi-isomorphisms, since $H^p(tC)=H^p(C)$ for $p\leq0$ and $H^p(tC)=0$ for $p>0$. By [F7] they induce $\bar i:\mathcal Q\to\mathcal D_X$ and $\bar t:\mathcal D_X\to\mathcal Q$, with descended counit and identities. Full faithfulness of restriction on functor infinity-categories descends these natural transformations and their relations, not merely their effects on homotopy categories. For $A\in\mathcal Q$ and $C\in\mathcal D_X$, apply $\bar t$ to define $\Phi:\operatorname{Map}_{\mathcal D_X}(\bar iA,C)\to\operatorname{Map}_{\mathcal Q}(A,\bar tC)$, using $\bar t\bar i\simeq\mathrm{id}$. Define the reverse map by $\Psi(g)=\epsilon_C\circ\bar i(g)$. The relation $\bar t\epsilon\simeq\mathrm{id}$ gives $\Phi\Psi\simeq\mathrm{id}$. Naturality of $\epsilon$ and $\epsilon_{\bar iA}\simeq\mathrm{id}$ give $\Psi\Phi(f)=\epsilon_C\circ\bar i\bar t(f)\simeq f\circ\epsilon_{\bar iA}\simeq f$. These are homotopies of maps of entire mapping spaces, inherited from natural transformations, and are natural in $A,C$. Thus $\bar i\dashv\bar t$ and $\bar i$ is fully faithful. Its image consists exactly of complexes with vanishing positive cohomology: $\epsilon_C$ is a quasi-isomorphism precisely for those $C$. This identifies $\mathcal Q$ with $\mathcal D_X^{\leq0}$ and its coreflection with the standard cochain truncation of [F4], by the defining mapping property. Now compose [F3]'s derived free/forgetful simplicial adjunction with normalized Dold–Kan and this locally established inclusion/right-truncation adjunction. The simplicial mapping-space identification in [F3] ensures that the first adjunction is enhanced, so composition gives $L_X\dashv E_X$ on mapping spaces. By definition, derived evaluation at $U$ is $E_X(C)(U)=\operatorname{Map}_{\mathcal H_X}(h_U,E_X(C))$. Apply the adjunction to $h_U$: its free chains are $\mathbb Z[U]$ in degree zero, so derived evaluation is naturally $\operatorname{Map}_{\mathcal D_X}(\mathbb Z[U],C)$. Inclusions of opens induce the restriction maps on both sides by precomposition. The K-injective mapping formula of [F4] identifies this with $DK(\tau_{\leq0}R\operatorname{Hom}(\mathbb Z[U],C))$, naturally in restriction maps. This proves the displayed derived-section formula for arbitrary unbounded $C$, without exchanging stalks and unbounded coefficients. [F1, F3, F4, F7, step 1.1]

3.1 By [F6], $\mathcal D(\mathbf{Ab})$ is stable. The loop object of $B[n+1]$ is the pullback $0\times^h_{B[n+1]}0\simeq B[n]$. By the limit universal property, mapping out of $\mathbb Z[0]$ carries this pullback to the based-loop pullback of spaces. The resulting equivalences $H(B)_n\simeq\Omega H(B)_{n+1}$ are natural in $B$; iterating the suspension-loop equivalence in the stable category supplies their coherence. Thus the stated tower defines a spectrum functor on unbounded derived complexes. For a K-injective replacement $B[n]\to I$, evaluation at $1\in\mathbb Z$ identifies the Hom complex from $\mathbb Z[0]$ to $I$ with $I$. Since this Hom functor is exact, its derived Hom complex is naturally $B[n]$. The mapping formula of [F4] gives $H(B)_n\simeq DK(\tau_{\leq0}B[n])$. Evaluating at zero and taking $B=R\Gamma(U,C)$ proves the asserted spectrum comparison, naturally with respect to restriction in $U$; no boundedness or limit reconstruction of $B$ is used. [F1, F4, F6, step 2.1]

4.1 A pointed mapping space is the homotopy fiber, over the zero map, of evaluation at the source basepoint. Under step 2.1 this is the fiber of $\operatorname{Map}(L_X(Y),C)\to\operatorname{Map}(\mathbb Z,C)$; the cofiber universal property identifies it with $\operatorname{Map}(\widetilde L_X(Y),C)$. This is also the reduced free construction of [F3]. A quasi-isomorphism becomes an equivalence in $\mathcal D_X$, and precomposition with an equivalence is an equivalence on mapping spaces. For a pointed map which is a quasi-isomorphism on unreduced chains, the induced map on reduced chains is likewise an equivalence by the cofiber square with identity on $\mathbb Z$. This proves both detection assertions under exactly the stated hypotheses. [F3, F4, step 2.1] ∎
