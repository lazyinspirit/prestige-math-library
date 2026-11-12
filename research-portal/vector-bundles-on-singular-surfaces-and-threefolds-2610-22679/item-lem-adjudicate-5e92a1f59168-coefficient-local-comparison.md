---
title: Local comparison of coherent coefficient presheaves with derived sheaf
  Eilenberg targets
status: published
research_item: lem-adjudicate-5e92a1f59168-coefficient-local-comparison
dependency_level: 5
sources:
  references:
    - title: Jacob Lurie, Higher Algebra, September 18, 2017
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Proposition 1.3.4.25, printed p. 119; Proposition 1.3.5.3, p. 121;
        Proposition 1.3.5.15 and its proof, p. 127
      statement: A small coherent diagram in the localization of a combinatorial model
        category is represented by a strict diagram. Unbounded complexes in a
        Grothendieck abelian category have the injective combinatorial model
        structure, with monomorphisms as cofibrations and quasi-isomorphisms as
        weak equivalences, presenting its derived infinity-category.
      hypotheses: Small ordinary diagram category in compatible universes; a
        combinatorial model category for diagram rectification. Apply the
        injective complex model to abelian groups and abelian sheaves, which are
        Grothendieck categories. Reverse homological grading to cochains. No
        boundedness or left-completeness hypothesis.
      reading_limits: Rechecked the complete statements of Propositions 1.3.4.25 and
        1.3.5.3 and Proposition 1.3.5.15 with its proof in the live
        author-hosted PDF extraction on 12 November 2026 for this repair. The
        proof of model existence in Proposition 1.3.5.3 was not reconstructed.
        Rectification and model existence are imported. The basis extension,
        realization comparison and stalk argument below are local deductions; no
        full-book reading or independent acceptance is claimed.
---

## Prerequisites

- [lem-adjudicate-992e776cd750-sheaf-chain-adjunction](item-lem-adjudicate-992e776cd750-sheaf-chain-adjunction)
- [thm-adjudicate-992e776cd750-filtered-space-colimits-input](item-thm-adjudicate-992e776cd750-filtered-space-colimits-input)
- [lem-adjudicate-d5306176fce5-coherent-realization](item-lem-adjudicate-d5306176fce5-coherent-realization)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)
- [math:thm-sheafification-preserves-stalks](https://alphabetamath.cc/item/thm-sheafification-preserves-stalks)
- [math:thm-sheafification-universal-property](https://alphabetamath.cc/item/thm-sheafification-universal-property)
- [math:lem-filtered-colimits-of-abelian-groups-are-exact](https://alphabetamath.cc/item/lem-filtered-colimits-of-abelian-groups-are-exact)
- [math:prop-abelian-groups-are-z-modules](https://alphabetamath.cc/item/prop-abelian-groups-are-z-modules)
- [math:thm-module-categories-are-grothendieck-categories](https://alphabetamath.cc/item/thm-module-categories-are-grothendieck-categories)
- [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise)
- [` Jacob Lurie, Higher Algebra, September 18, 2017 · Proposition 1.3.4.25, printed p. 119; Proposition 1.3.5.3, p. 121; Proposition 1.3.5.15 and its proof, p. 127 `](https://www.math.ias.edu/~lurie/papers/HA.pdf)


## Statement
Assume the Axiom of Choice and compatible Grothendieck universes containing $\omega$, the space and the site data. Let $X$ be a topological space and $\mathcal B$ a small basis of opens, ordered by inclusion: whenever $x\in U$ with $U$ open, some $V\in\mathcal B$ satisfies $x\in V\subseteq U$. In particular, intersections admit covers by basis opens. The full open-set site is also allowed. Let $D:\mathcal B^{\rm op}\to\mathcal D(\mathbf{Ab})$ be a coherent functor to unbounded derived cochain complexes. Here coherent means an infinity-functor from the nerve of that ordinary category, retaining composition homotopies. For an integer $s$, put $Y_D(U)=\Omega^\infty H(D(U)[s])$. Use either the mapping-tower realization of the derived sheaf-chain adjunction or the fixed unit-preserving module realization used for the actual Chern coefficients; their zeroth spaces are naturally identified below. The cochain shift and zeroth-space conventions are those of the derived sheaf-chain adjunction.

Represent $D$ by a strict diagram $P$ of complexes. Its associated sheaf complex $C=a_{\mathcal B}P$ is defined degreewise, and is independent up to derived equivalence of that presentation. There is a natural comparison, compatible with all basis restrictions and the zero basepoints,
$$Y_D\longrightarrow E_X(C[s])|_{\mathcal B},\qquad E_X(C[s])(U)\simeq\Omega^\infty H(R\Gamma(U,C[s])).$$
This arrow is an equivalence on every stalk, and hence identifies the two targets in the stalkwise local homotopy convention. The comparison is natural in coherent coefficient diagrams and their homotopies. It identifies neither the original values $D(U)$ with $R\Gamma(U,C)$ nor ordinary space-valued sheafification with hypercompletion. No dimension, noetherian, coefficient-continuity or completeness hypothesis is imposed.

For precision, $a_{\mathcal B}P$ can be constructed as follows. Extend $P$ to a presheaf of complexes $\widehat P$ on all opens by $\widehat P(U)=\operatorname*{colim}_{V\in\mathcal B,\ U\subseteq V}P(V)$, with arrows given by restriction to smaller $V$. An empty such colimit is the zero complex. In each degree this colimit is the direct sum of the groups at these $V$, modulo the relations $[v]=[v|_W]$ for $U\subseteq W\subseteq V$; the differentials descend from those of $P(V)$. Set $C=a\widehat P$. If $U\in\mathcal B$, $U$ is terminal in this indexing category, so $\widehat P(U)=P(U)$. For the full open-set site this is just degreewise sheafification of $P$. This construction defines the underlying sheaf complex of the coefficient functor, without a claim about its underived sections.

## Facts & Assumptions
[A1] Choice is retained for the imported resolutions and model constructions. The universes and their existence are separate assumptions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[F1] The derived sheaf-chain supplier fixes $\mathcal D_X$, $H$, $E_X$, shifts, the natural formula $\Omega^\infty H(B)\simeq DK(\tau_{\leq0}B)$ for every unbounded complex of abelian groups, and the local homotopy convention. Its Facts F4 and Proof 2.1 supply the Grothendieck category of all abelian sheaves and unbounded K-injective models: a fibrant complex $I$ representing $C$ computes $R\Gamma(U,C)$ by $I(U)=\operatorname{Hom}(\mathbb Z[U],I)$. [lem-adjudicate-992e776cd750-sheaf-chain-adjunction](item-lem-adjudicate-992e776cd750-sheaf-chain-adjunction)

[F2] Source reference 0 supplies rectification and the injective complex model. The diagram category is the small ordinary category $\mathcal B^{\rm op}$. Abelian groups are $\mathbb Z$-modules and form a Grothendieck category, so the complex model satisfies rectification's combinatorial hypothesis; [F1] supplies the sheaf case. Rectification applies also to arrows and homotopies by using their small indexing categories. [math:prop-abelian-groups-are-z-modules](https://alphabetamath.cc/item/prop-abelian-groups-are-z-modules) [math:thm-module-categories-are-grothendieck-categories](https://alphabetamath.cc/item/thm-module-categories-are-grothendieck-categories)

[F3] Stalks are filtered neighborhood colimits. Basis neighborhoods are cofinal: for any neighborhood and point choose a smaller basis neighborhood, and refine an intersection to compare two choices. Sheafification preserves these stalks and has its natural unit. Filtered colimits of abelian groups are exact and commute with cohomology of arbitrary complexes. [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf) [math:thm-sheafification-preserves-stalks](https://alphabetamath.cc/item/thm-sheafification-preserves-stalks) [math:thm-sheafification-universal-property](https://alphabetamath.cc/item/thm-sheafification-universal-property) [math:lem-filtered-colimits-of-abelian-groups-are-exact](https://alphabetamath.cc/item/lem-filtered-colimits-of-abelian-groups-are-exact)

[F4] Filtered simplicial colimits compute colimits of spaces; finite homotopy limits commute with them. Consequently the homotopy groups of a filtered diagram of pointed spaces are the corresponding filtered colimits, using finite sphere and homotopy data. [thm-adjudicate-992e776cd750-filtered-space-colimits-input](item-thm-adjudicate-992e776cd750-filtered-space-colimits-input)

[F5] The actual coherent realization is $\mathcal H=U\Phi^{-1}$, where $\Phi:\operatorname{Mod}_{H\mathbb Z}\simeq\mathcal D(\mathbf{Ab})$ preserves the unit and $U$ forgets to spectra. Its Fact F2 supplies the unit mapping-space equivalence, naturally in derived complexes. Thus $\Omega^\infty\mathcal H(B)=\operatorname{Map}_{\mathrm{Sp}}(\mathbb S,U\Phi^{-1}B)\simeq\operatorname{Map}_{\operatorname{Mod}_{H\mathbb Z}}(H\mathbb Z,\Phi^{-1}B)\simeq\operatorname{Map}_{\mathcal D(\mathbf{Ab})}(\mathbb Z[0],B)$. The last space is the zeroth space of [F1]'s mapping-tower $H(B)$. These equivalences preserve zero and are natural on entire coherent diagrams. [lem-adjudicate-d5306176fce5-coherent-realization](item-lem-adjudicate-d5306176fce5-coherent-realization)

[F6] A sequence of abelian sheaves is exact if and only if it is exact on every stalk. Thus stalk functors are exact. For any unbounded sheaf complex $K$, preservation of kernels, images and their quotients gives $H^q(K)_x\cong H^q(K_x)$ for every integer $q$. Applying the same exactness criterion to $0\to H^q(K)\to H^q(L)\to0$ shows that a morphism $K\to L$ is a quasi-isomorphism if and only if $K_x\to L_x$ is a quasi-isomorphism for every $x$. These degreewise deductions require no boundedness assumption. [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise)

## External input
Import exactly the rectification and injective-model interfaces of source reference 0. Their hypotheses are discharged in [F1]–[F2] under [A1]. The comparison on stalks is proved here; this whole lemma is a local consequence, not an imported theorem. No proof of model existence or rectification is claimed.

## Proof

**Goal:** Construct the natural comparison and prove its asserted stalkwise equivalence and naturality.
**Given:** $X,\mathcal B,D,s$, Choice and the separate size bounds in the Statement.

1.1 Use [F5]'s natural pointed equivalence to compare the actual module realization with [F1]'s mapping-tower realization, when the former is used. Use [F2] to rectify the entire coefficient diagram to $P$. The extension in the Statement is a presheaf: for $U'\subseteq U$, the index category for $U$ maps into that for $U'$, inducing the restriction map; these maps compose as required. Its restriction to the basis is $P$ by the terminal-object calculation. Apply [F3] degreewise. Its unit identifies $C_x$ with $\operatorname*{colim}_{U\in\mathcal B,\ x\in U}P(U)$ as a complex. Exact filtered colimits then identify its degree-$q$ cohomology with $\operatorname*{colim}_U H^q(P(U))$ for every integer $q$. In particular an objectwise quasi-isomorphism of strict basis diagrams induces isomorphisms on the cohomology of every stalk; [F6] therefore makes the induced map of associated sheaf complexes a quasi-isomorphism. Thus this construction descends through the diagram localization in [F2], making $C$ independent of the rectification. Take a functorial fibrant replacement $C\to I$ in the sheaf-complex model of [F2]. The basis sheafification unit followed by this replacement gives $P(U)\to I(U)$ naturally in $U$. By [F1], $I(U)$ computes the required derived sections. Applying shift and $\Omega^\infty H$ gives the displayed comparison, in the rectified diagram and hence for $D$. [A1, F1, F2, F3, F5, F6, given, construct]

2.1 For $n\geq0$, [F1] identifies the homotopy groups of the source at zero with $H^{s-n}(P(U))$, including components when $n=0$. By [F4], the corresponding stalk groups are their filtered colimits. For the target, apply the same argument to $I(U)$; [F3] identifies the resulting groups with $H^{s-n}(I_x)$. By [F6], the quasi-isomorphism $C\to I$ induces a quasi-isomorphism $C_x\to I_x$ at every point. Together with step 1.1, this identifies the source groups with $H^{s-n}(C_x)$ and makes the comparison an isomorphism in every degree. The Dold–Kan models in [F1] are simplicial abelian groups: translating by any vertex is an isomorphism of their underlying spaces, and the comparison respects translation. Thus the test at zero covers every basepoint, and the bijection on components and all these homotopy-group isomorphisms prove a weak equivalence of stalks. This is exactly equivalence in the specified local homotopy convention. The constructions are functorial on strict diagrams and invert objectwise quasi-isomorphisms; [F2]'s diagram equivalence therefore retains coherent arrows and homotopies, including the zero basepoint. No passage to an inverse limit of truncations or exchange of coefficient sections with hypercompletion occurred. [F1, F2, F3, F4, F6, step 1.1] ∎
