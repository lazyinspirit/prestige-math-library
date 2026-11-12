---
id: lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection
kind: lemma
title: Free-class detection on qcqs perfect K-space models
status: published
domain: mathematics
deps:
  - thm-author-3cde9692a7e9-plus-model-input
  - lem-adjudicate-10deda40f9da-affine-k-space-sheafification
  - thm-author-d026a7b99ace-universal-chern-space
  - lem-author-3cde9692a7e9-derived-chain-detection
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:thm-dold-kan-equivalence-for-simplicial-modules
  - math:def-tensor-product-total-complex-of-chain-complexes
  - math:def-left-and-right-flat-modules-over-an-arbitrary-ring
  - math:lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms
  - lem-adjudicate-8ea8635dc870-reduced-chain-adjunction
  - math:def-field
  - math:def-scheme-over-base
  - lem-adjudicate-77833c5b656f-filtered-affine-k-space-continuity
dependency_roles:
  thm-author-3cde9692a7e9-plus-model-input: mathematical-premise
  lem-adjudicate-10deda40f9da-affine-k-space-sheafification: mathematical-premise
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  lem-author-3cde9692a7e9-derived-chain-detection: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:thm-dold-kan-equivalence-for-simplicial-modules: mathematical-premise
  math:def-tensor-product-total-complex-of-chain-complexes: mathematical-premise
  math:def-left-and-right-flat-modules-over-an-arbitrary-ring: mathematical-premise
  math:lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms: mathematical-premise
  lem-adjudicate-8ea8635dc870-reduced-chain-adjunction: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  lem-adjudicate-77833c5b656f-filtered-affine-k-space-continuity: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 24
sources:
  references:
    - title: Charles Weibel, The K-book, author-hosted Chapter IV
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf
      locator: Printed pp. 3–6; Definitions 1.1.1, 1.4 and 1.4.1; Lemma 1.6;
        Construction 1.9(ii)
      hypotheses: Connected based CW complexes and a perfect normal subgroup for the
        plus map; unital rings for BGL(R). Local-ring rank and actual
        perfect-space comparisons are supplied separately.
      reading_limits: Read the live author-hosted PDF text extraction in this
        assignment at Definition 1.1.1, Definitions 1.4–1.4.1, Theorem 1.5,
        Lemma 1.6 with its proof, and Construction 1.9(ii), printed pp. 3–6.
        Plus existence and the full perfect-space comparison remain imported
        through the declared suppliers. No full-chapter review or cached-byte
        authentication is claimed.
      statement: A plus map of connected CW complexes is acyclic and induces integral
        homology isomorphisms; BGL(R)^+ may be modeled by integral completion.
    - title: Friedlander–Suslin, The spectral sequence relating algebraic K-theory to
        motivic cohomology (2002)
      url: https://www.numdam.org/item/10.1016/s0012-9593(02)01109-6.pdf
      locator: Appendix B, printed pp. 860–861 (PDF pages 88–89), normalization
        paragraph, shuffle formula and normalized-quotient clause before
        Proposition B.2
      statement: For simplicial abelian groups A,B, the natural shuffle map N(A)
        tensor N(B) to N(A tensor B) is a chain-homotopy equivalence, including
        normalized quotient complexes.
      hypotheses: Arbitrary simplicial abelian groups, degreewise tensor over Z, and
        direct-sum totalization with Koszul differential. The purely algebraic
        assertion has no geometric finiteness hypotheses.
      reading_limits: Read the live Numdam primary PDF extraction in this assignment
        at the normalization paragraph, Eilenberg–Zilber/shuffle formula and the
        explicit normalized-quotient clause, printed pp. 860–861. This algebraic
        comparison is imported; its classical foundations and the geometric
        spectral-sequence theorem are not reconstructed or used.
    - title: The Stacks Project, Stalks of modules
      url: https://stacks.math.columbia.edu/tag/04EM
      locator: Section 18.36, Lemmas 18.36.1–18.36.2 and proofs, and intervening
        construction of abelian stalks
      statement: At a point of a site, stalks preserve finite limits and arbitrary
        colimits, commute with sheafification, and are exact on abelian sheaves.
      hypotheses: A site and a point in the sense of Sites Definition 7.32.2;
        compatible size bounds.
      reading_limits: Read the live Stacks HTML in this assignment through Lemma
        18.36.2, including the intervening abelian-stalk construction and both
        proofs. Its cited site and sheafification foundations remain imported.
        No claim that every site has enough points is used.
    - title: The Stacks Project, Exactness at a conservative family of points
      url: https://stacks.math.columbia.edu/tag/05V3
      locator: Lemma 18.14.4, statement and proof
      statement: Exactness of abelian sheaf sequences can be checked at a conservative
        family of points.
      hypotheses: A site with a specified conservative family of points.
      reading_limits: Read the live Stacks lemma and its short proof in this
        assignment. The cited Sites Lemma 7.38.2 remains imported; the
        application uses the conservative Nisnevich family supplied in reference
        4.
    - title: R. W. Thomason and Thomas Trobaugh, Higher Algebraic K-Theory of Schemes
        and of Derived Categories (1990)
      url: https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Thomason-Trobaugh.pdf
      locator: Appendix E, E.1 and Lemma E.5(a)–(c) with proof, printed pp. 427–428;
        PDF pages 181–182
      statement: For any scheme the small Nisnevich topos has a conservative family of
        points indexed by finite separable extensions of residue fields.
        Neighborhoods are filtered étale neighborhoods, with the stated
        residue-field cofinal subsystem; the structure-sheaf stalks are
        henselian local rings.
      hypotheses: An arbitrary scheme and its small Nisnevich site. No noetherian,
        dimension or separation hypothesis. The qcqs presentation is obtained by
        affine neighborhood refinements.
      reading_limits: Read the live Rochester-hosted primary PDF text extraction in
        this assignment at E.1 and the statement and proof of E.5(a)–(c),
        printed pp. 427–428. The SGA4/EGA foundations it cites remain imports.
        E.6 is not used. The smooth-site restriction and filtered affine
        refinements are checked locally in F6 and Proof 1.1; K-space continuity
        is supplied separately by the declared helper.
formulation_deps:
  - thm-author-3cde9692a7e9-plus-model-input
  - lem-adjudicate-10deda40f9da-affine-k-space-sheafification
  - thm-author-d026a7b99ace-universal-chern-space
  - lem-author-3cde9692a7e9-derived-chain-detection
  - lem-adjudicate-8ea8635dc870-reduced-chain-adjunction
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-field
  - math:def-scheme-over-base
argument_deps:
  - thm-author-3cde9692a7e9-plus-model-input
  - lem-adjudicate-10deda40f9da-affine-k-space-sheafification
  - thm-author-d026a7b99ace-universal-chern-space
  - lem-author-3cde9692a7e9-derived-chain-detection
  - math:def-axiom-of-choice
  - math:thm-dold-kan-equivalence-for-simplicial-modules
  - math:def-tensor-product-total-complex-of-chain-complexes
  - math:def-left-and-right-flat-modules-over-an-arbitrary-ring
  - math:lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms
  - lem-adjudicate-8ea8635dc870-reduced-chain-adjunction
  - lem-adjudicate-77833c5b656f-filtered-affine-k-space-continuity
---

## Statement
Assume the Axiom of Choice and the compatible site-size and universe bounds of the supplied constructions. Let $k$ be any field and $X$ any qcqs $k$-scheme. On its smooth qcqs Nisnevich site, let $\mathcal K$ be the specified local replacement of the perfect K-space presheaf, using the stalkwise local homotopy convention consistently. Put $\mathcal B=\operatorname{colim}_n BGL_n$ and let $\underline{\mathbb Z}$ be the sheaf of locally constant integers. The canonical stable free-class map
$$j:\underline{\mathbb Z}\times\mathcal B\longrightarrow\mathcal K$$
is a local integral-chain quasi-isomorphism, as is $j\times j$. It sends $(m,g)$ to the rank-$m$ translate of the reduced stable free-bundle class of $g$, and carries block sum and integer addition to actual K-space addition. The same construction on the rank-zero components gives a local integral-chain quasi-isomorphism from $\mathcal B$ to the rank-zero local K-space.

For any supplied coefficient complex $D$ and its derived Eilenberg target $K(D,n)$, precomposition with either comparison induces an equivalence of derived mapping spaces into that target. Thus identities between the actual natural operations, or between their two-variable Cartan expressions, are detected by these free-class comparisons. Composing an identity of local-model maps with the canonical perfect-space local-replacement unit gives that identity on every global perfect K-space. No claim that global perfect classes are differences of global vector bundles is needed. Here qcqs means quasi-compact and quasi-separated; neither normality, noetherianity, finite type nor finite dimension is assumed.

## Statement references
[[thm-author-3cde9692a7e9-plus-model-input]]

[[lem-adjudicate-10deda40f9da-affine-k-space-sheafification]]

[[thm-author-d026a7b99ace-universal-chern-space]]

[[lem-author-3cde9692a7e9-derived-chain-detection]]

[[math:def-axiom-of-choice]]

[[math:def-quasi-compact-and-quasi-separated-scheme]]

[[math:thm-dold-kan-equivalence-for-simplicial-modules]]

[[math:def-tensor-product-total-complex-of-chain-complexes]]

[[math:def-left-and-right-flat-modules-over-an-arbitrary-ring]]

[[lem-adjudicate-8ea8635dc870-reduced-chain-adjunction]]

[[math:def-field]]

[[math:def-scheme-over-base]]

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and the compatible site-size and universe bounds in the Statement. Choice is inherited by the actual model and derived replacements in [F1]–[F3] at steps 1.1–3.1. Universe existence is a separate assumption. The field has the meaning in [[math:def-field]], and a $k$-scheme includes its specified map to $\operatorname{Spec}k$ as in [[math:def-scheme-over-base]]. The qcqs hypothesis has the definition in [[math:def-quasi-compact-and-quasi-separated-scheme]].

[F1] [[thm-author-3cde9692a7e9-plus-model-input]] supplies the unrestricted local-ring free-class arrow, its componentwise plus acyclicity and integral homology equivalence, the rank identification, and compatibility of block sum with actual K-space addition.

[F2] [[lem-adjudicate-10deda40f9da-affine-k-space-sheafification]] supplies the entire affine comparison, the smooth qcqs Nisnevich site presentation and its chosen stalkwise local replacement, and the canonical perfect-space unit. [[thm-author-d026a7b99ace-universal-chern-space]] specifies the same local model and actual coefficient targets and operations. Ordinary sheafification and hypercompletion are kept distinct. Stalk tests below are those of this stipulated Nisnevich local convention, not an assertion about arbitrary sites.

[F3] [[lem-author-3cde9692a7e9-derived-chain-detection]] supplies detection for pointed local integral-chain quasi-isomorphisms on any fixed small site, without the noetherian restriction of its separate application. Chains $C(S)$ mean normalized degreewise free abelian sheaves, reindexed as nonpositive cochains. [[lem-adjudicate-8ea8635dc870-reduced-chain-adjunction]] supplies the precise pointed adjunction and the natural splitting into basepoint and reduced chains. For an unbounded coefficient complex $D$, its target $K(D,n)$ uses inverse Dold–Kan and derived local replacement of the good truncation $\tau^{\leq0}(D[n])$, with $D[n]^r=D^{r+n}$ and differential $(-1)^nd_D$; the cut term is the kernel of the degree-zero differential. Thus this is the same derived Eilenberg target as in [F2].

[F4] Normalization uses [[math:thm-dold-kan-equivalence-for-simplicial-modules]] and its natural decomposition by degeneracies. The quotient by degenerate simplices identifies with the normalized summand: all earlier face maps vanish on that summand, so its alternating differential is the signed last face. This identifies our normalization with the normalized-quotient convention of reference 1. Reference 1 imports the natural chain-homotopy equivalence $N(A)\otimes N(B)\to N(A\otimes B)$ for arbitrary simplicial abelian groups, with the tensor on the right taken degreewise. Tensor of complexes uses the direct-sum diagonal and Koszul differential in [[math:def-tensor-product-total-complex-of-chain-complexes]].

[F5] Flat means exactness of tensor, as in [[math:def-left-and-right-flat-modules-over-an-arbitrary-ring]]. [[math:lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms]] says that a bounded-above flat cochain complex preserves quasi-isomorphisms between bounded-above cochain complexes. It applies to nonnegative homological complexes after reversing degrees.

[F6] Reference 2 supplies point-stalk functors, preservation of finite limits and arbitrary colimits, exactness on abelian sheaves, and compatibility with sheafification. Reference 3 supplies exactness detection for a conservative family of points. Reference 4 supplies such a family on the small Nisnevich site of every scheme, with local structure-sheaf stalk rings and no finiteness hypothesis. For each smooth qcqs object $U$ restrict to its small Nisnevich site, using qcqs étale neighborhoods as in [F2]; affine refinements give the same stalks. These facts identify stalks of normalized sheaf chains with normalized chains of stalk simplicial sets: free abelianization uses colimits, normalization uses finite kernels in each degree, and homology uses exactness. For the additional passage from affine values to a K-space stalk, [[lem-adjudicate-77833c5b656f-filtered-affine-k-space-continuity]] supplies filtered-ring continuity of the entire affine perfect K-space, including components, compatibly with the actual free-class arrow. At a fixed point $p$ of the small Nisnevich site of a smooth qcqs object $U$, take the cofinal affine étale neighborhoods $V_i=\operatorname{Spec}A_i$ with their specified lifts of $p$. Index their coordinate rings in the direction of refinement. This index category is filtered: the filtering neighborhoods of reference 4 admit affine refinements containing the lifted point, also after taking a common refinement or equalizing two neighborhood arrows. Put $R=\operatorname{colim}_i A_i$; reference 4 identifies it with the henselian local structure-sheaf stalk. The helper identifies the filtered presheaf K-space stalk with $\Omega^\infty K_{\rm Perf}(\operatorname{Spec}R)$ and its free-class source with $\mathbb Z\times BGL(R)$, preserving the arrow. The chosen local-replacement unit in [F2] is a weak equivalence on these stalks. Indeed restriction to the small Nisnevich site commutes with homotopy sheafification, since all covers of an étale $U$-object are the same covering families in the two sites. Thus continuity is applied before local replacement; it is not inferred from sheafification.

[F7] Reference 0 imports the plus-map acyclicity, its integral-homology consequence and integral-completion model. The full perfect-space comparison and local-ring rank calculation used here are supplied by [F1]–[F2], rather than inferred from that citation alone.

## Proof
**Given:** $k,X$, the stated local model, coefficient targets, Choice and compatible site and universe bounds.

**Goal:** Establish the free-class and product comparisons and their derived mapping-space detection in the full qcqs scope.

1.1 Form $j$ by the actual free-object/core map into K, subtracting the trivial rank, stabilizing and translating by the locally constant integer rank. By [F1]–[F2] this preserves the actual object maps, direct sum and restrictions, giving the asserted addition comparison. For every smooth qcqs object $U$ and every point in reference 4's conservative family on its small Nisnevich site, use [F6]'s filtered affine neighborhood system. Its stages are affine and qcqs, every transition between them is affine, and its coordinate-ring colimit $R$ is the indicated henselian local ring. Apply [F6]'s continuity helper before local replacement. Its canonical comparison, including the free-class square, identifies this stalk map with the actual free-class map over $R$. The source comparison uses finite invertible matrices and their stable nerves, without asserting a plus description over a nonlocal neighborhood ring. By [F2] and [F6] the local-replacement unit preserves this stalk arrow up to weak equivalence. Now [F1] applies to the actual local ring $R$: the identified arrow is its componentwise plus arrow and is an integral homology isomorphism by [F1] and [F7]. By [F6], taking chains and homology commutes with this stalk calculation. To check conservativity on the smooth site, restrict a morphism of sheaves over each object $U$ to its small Nisnevich site. Covers of an étale $U$-object are the same in both sites, so restriction commutes with sheafification and with the kernels and cokernels computing homology. Reference 4 and reference 3 detect isomorphisms there, in particular on sections at its terminal object $U$. As $U$ varies this detects sheaf isomorphisms on the smooth site. Thus $C(j)$ is a local quasi-isomorphism. The same calculation restricted to rank zero proves the assertion for $\mathcal B$ and the rank-zero K-space. All ring comparisons used here are unrestricted local-ring or full affine comparisons; no global bundle-generation assertion enters. [A1, F1, F2, F6, F7, construct]

2.1 At a stalk write $C_*(S)=N(\mathbb Z[S])$, where $\mathbb Z[S_q]$ consists of finite formal integral sums of $q$-simplices. The maps $[s]\otimes[t]\mapsto[(s,t)]$ identify the degreewise tensor with $\mathbb Z[S\times T]$ and commute with faces and degeneracies. Hence [F4] gives a natural chain-homotopy equivalence $C_*(S)\otimes C_*(T)\to C_*(S\times T)$. Each normalized term is a direct summand of the degreewise free group by [F4]. Tensor with a free group is a direct sum of copies of the input exact sequence. Such sums are exact: kernels are computed coordinatewise, and a finite-support element of the quotient has a lift by lifting only its finitely many nonzero coordinates. Tensor with a direct summand is a direct summand of this exact functor, hence exact; these normalized terms are therefore flat by [F5]. Reindex by $C^r=C_{-r}$ to obtain cochains bounded above by zero, with the same Koszul parity and direct-sum total differential. Apply [F5] successively to $C(j)\otimes\mathrm{id}$ and $\mathrm{id}\otimes C(j)$. Both are quasi-isomorphisms, so naturality of the shuffle comparison proves the same for $C(j\times j)$ at each stalk. Products and the chain-stalk identifications commute by [F6], proving the local product assertion. [F3, F4, F5, F6, step 1.1]

3.1 Apply the general pointed detection assertion in [F3] to step 1.1 and step 2.1. For unpointed mapping spaces apply its reduced adjunction instead to $S_+=S\amalg *$: reduced chains of $S_+$ are $C(S)$, and pointed maps $S_+\to K(D,n)$ are exactly unpointed maps $S\to K(D,n)$. This identification also holds for the derived function complexes, since adjoining a disjoint basepoint preserves monomorphisms and local weak equivalences, all sources are cofibrant, and [F3] computes maps into a fibrant target by the same simplicial function complexes. Consequently both conventions give the stated mapping-space equivalences, also for the rank-zero comparison. They are injective on homotopy classes; a difference of two coefficient-valued operations that becomes zero after precomposition was therefore zero before it. Naturality retains restriction and descent maps. Apply derived evaluation and precompose with [F2]'s canonical perfect-space unit to obtain the corresponding identity on every global perfect K-space, without requiring that unit to be an equivalence. This proves detection of the two-variable Cartan expressions as well. [A1, F2, F3, step 1.1, step 2.1] ∎

## External input
Reference 0 supplies only the plus and completion facts in [F7]. Reference 1 supplies the normalized simplicial shuffle equivalence in [F4]. References 2 and 3 supply the point-functor and exactness facts in [F6]. Reference 4 supplies conservative Nisnevich points on every object; step 1.1 gives the smooth-site application. Their local applications are proved above; the whole detection lemma is a locally authored composition, not an imported theorem. Filtered affine K-space continuity and compatibility with the actual free-class arrow are supplied by [[lem-adjudicate-77833c5b656f-filtered-affine-k-space-continuity]], with its separately recorded imports and local two-step argument.

## Source scope and reading limits
This assignment read the complete current assigned body, its declared supplier interfaces, the current plus-model, affine-model, universal-operation, derived-chain-detection and reduced-chain-adjunction bodies, and both direct consumer bodies. It also read the current stable-spectrum interface and the published ring, filtered-category and finite-limit interfaces used by the new continuity helper. Fresh primary-source reading was through the URLs and passages recorded in the source records here and in the helper; it was PDF text extraction or HTML, with no new authentication of cached PDF bytes or full foundational proof reconstruction. Prior proposals were leads only and confer no reading or acceptance credit.

The Statement is verbatim unchanged. The first-class consumer uses free-class detection and the global unit in Proof 1.1. The perfect-Cartan consumer uses product detection and the addition comparison in Proof 3.1–4.1. Both retain the same hypotheses and conclusions, so no consumer edit or changed-interface propagation is proposed. Coverage and page presentation remain unchanged. The gap belongs to the generated proof, not the original authors; the original PDF and historical article reports were not re-audited. Independent changed-item rejudgment and central render checks remain controller tasks.
