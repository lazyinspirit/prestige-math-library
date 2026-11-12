---
id: thm-author-0bac6b264f4a-motivic-dim-relative-package-input
kind: theorem
title: External geometric properties of the actual motivic comparison fiber
status: published
domain: mathematics
deps:
  - thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-closed-immersion-schemes
  - math:def-proper-morphism
  - math:def-fibre-product-schemes-universal-property
  - math:thm-fibre-products-of-schemes-exist
  - math:thm-quasi-coherent-ideal-closed-subscheme-correspondence
  - lem-author-dcdf962edbda-qcqs-site
  - math:def-locally-finite-type-and-finite-type-morphism
  - lem-author-b747b28c359f-derived-cohomology
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:thm-affine-scheme-ring-anti-equivalence
dependency_roles:
  thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:def-proper-morphism: mathematical-premise
  math:def-fibre-product-schemes-universal-property: mathematical-premise
  math:thm-fibre-products-of-schemes-exist: mathematical-premise
  math:thm-quasi-coherent-ideal-closed-subscheme-correspondence: mathematical-premise
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  lem-author-b747b28c359f-derived-cohomology: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:thm-affine-schemes-quasi-separated: mathematical-premise
  math:thm-affine-scheme-ring-anti-equivalence: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Section 3.3, equation (3.4), printed p. 14; Theorem 8.2 and footnote
        14, printed p. 54, and its proof, printed p. 55; Proposition 8.12,
        printed p. 57, and its complete proof, printed p. 58
      statement: For a prime field F and j >= 0, W(j) = fib(Z(j)_mot -> Z(j)_cdh) is a
        finitary Nisnevich sheaf, is cdh-acyclic, satisfies degreewise pro-cdh
        descent on Noetherian F-schemes, and W(j)(A,I) lies in degrees <= j for
        every F-algebra A and finitely generated nilpotent ideal I. Equation
        (3.4) specifies abstract blowup squares; footnote 14 specifies their
        infinitesimal thickenings and the meaning of degreewise pro-vanishing.
      hypotheses: F = Q or F_p for a prime p; integer j >= 0; qcqs F-schemes in the
        supplied size convention. The pro-cdh assertion concerns abstract blowup
        squares of Noetherian F-schemes. The nilpotent-relative assertion allows
        arbitrary F-algebras A but requires I to be finitely generated and
        nilpotent. No finite-type hypothesis over F is imposed.
      reading_limits: "Historical reading record retained from the incoming generated
        item: For this proposal, read the extracted primary-PDF text of Section
        3.3 around (3.4), Theorem 8.2 including footnote 14 and its proof, and
        the complete statement and proof of Proposition 8.12. Import these
        assertions under their recorded hypotheses; do not reconstruct the
        derived de Rham, syntomic-rigidity or pro-cdh foundations. Retain the
        explicit <= j bound. Only the degreewise pro-cohomology convention in
        footnote 14 is used; its further unbounded pro-derived comparison is
        excluded. The total-fiber formula and zero-transition quantifiers spell
        out that degreewise convention. No complete-paper reading or independent
        proof acceptance is claimed. Current consumer maintenance read the item
        and current supplier interfaces; no fresh primary-source or page-image
        reading or independent acceptance is claimed."
    - title: The Stacks Project, Morphisms of Schemes, Lemma 29.22.9 (01TX)
      url: https://stacks.math.columbia.edu/tag/01TX
      locator: Lemma 29.22.9, parts (1) and (2), and its proof; part (2) is applied here
      statement: A morphism locally of finite type to a locally Noetherian scheme is
        locally of finite presentation; a morphism of finite type to a locally
        Noetherian scheme is of finite presentation, including quasi-compactness
        and quasi-separatedness.
      hypotheses: A morphism f:Y->S of schemes with S locally Noetherian. Part (2)
        requires f of finite type, not merely locally of finite type. Here S=X
        is Noetherian and each of i and p is of finite type.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the complete lemma and its proof on the primary Stacks page.
        Import the global finite-presentation assertion of part (2), including
        its quasi-separatedness conclusion. Its algebraic finite-presentation
        and quasi-separatedness prerequisites cited in the proof are not
        reconstructed. No unrestricted finite-type-implies-finite-presentation
        assertion is made. Current consumer maintenance read the item and
        current supplier interfaces; no fresh primary-source or page-image
        reading or independent acceptance is claimed."
    - title: The Stacks Project, Morphisms of Schemes, Lemma 29.15.5 (01T5)
      url: https://stacks.math.columbia.edu/tag/01T5
      locator: Lemma 29.15.5, first assertion and its proof
      statement: Every closed immersion of schemes is a morphism of finite type.
      hypotheses: A closed immersion i:Z->X of arbitrary schemes; no Noetherian or
        finite-generation hypothesis on its defining ideal is needed for finite
        type. Apply to the closed immersion in the Noetherian abstract blowup
        square.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the full lemma and its short proof on the primary Stacks
        page. Import only the closed-immersion finite-type assertion. Finite
        presentation is obtained separately using reference 1 and the locally
        Noetherian target; it is not inferred for arbitrary closed immersions.
        Current consumer maintenance read the item and current supplier
        interfaces; no fresh primary-source or page-image reading or independent
        acceptance is claimed."
dependency_level: 9
formulation_deps:
  - thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-closed-immersion-schemes
  - math:def-proper-morphism
  - math:def-fibre-product-schemes-universal-property
  - math:thm-quasi-coherent-ideal-closed-subscheme-correspondence
  - lem-author-dcdf962edbda-qcqs-site
  - math:def-locally-finite-type-and-finite-type-morphism
  - lem-author-b747b28c359f-derived-cohomology
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:thm-affine-scheme-ring-anti-equivalence
argument_deps:
  - thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-closed-immersion-schemes
  - math:def-proper-morphism
  - math:def-fibre-product-schemes-universal-property
  - math:thm-fibre-products-of-schemes-exist
  - math:thm-quasi-coherent-ideal-closed-subscheme-correspondence
  - lem-author-dcdf962edbda-qcqs-site
  - math:def-locally-finite-type-and-finite-type-morphism
  - lem-author-b747b28c359f-derived-cohomology
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:thm-affine-scheme-ring-anti-equivalence
---

## Statement
Use the size-bounded qcqs scheme categories and coherent derived target of the motivic-complex interface, including its Axiom of Choice and universe-existence assumptions. Thus fix Grothendieck universes $U\in V\in W$ with $\omega\in U$, put the field and scheme data in $U$, and take derived limits in the supplied stable enhancement $\mathcal D_\infty(\mathbb Z)$ of complexes of $V$-small abelian groups, whose homotopy category is $D(\mathbb Z)$.

For a prime field $F$ and integer $j\geq0$, use the specified motivic complex $M_{j,F}$, cdh complex $C_{j,F}$ and comparison $\alpha_{j,F}$. Define their pointwise derived fiber by
$$F_{j,F}=\operatorname{fib}(M_{j,F}\xrightarrow{\alpha_{j,F}}C_{j,F}).$$
It is a finitary Nisnevich sheaf, satisfies $L_{\mathrm{cdh}}F_{j,F}=0$ and pro-cdh descent on Noetherian $F$-schemes, and for every $F$-algebra $A$ and finitely generated nilpotent ideal $I\subseteq A$ one has
$$\operatorname{fib}(F_{j,F}(A)\to F_{j,F}(A/I))\in D(\mathbb Z)^{\leq j}.$$
Here $P(A)$ means $P(\operatorname{Spec}A)$; nilpotent means $I^N=0$ for some integer $N\geq1$, and finitely generated means $I=(a_1,\ldots,a_m)$ for a finite list of elements. The degree bound means that cohomology vanishes in every degree greater than $j$. The precise pro-cdh convention is specified below.

## Statement references
[[thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input]]

[[lem-author-b747b28c359f-elmanto-morrow-complexes]]

[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

[[math:def-locally-noetherian-and-noetherian-scheme]]

## Source contract
**Given:** The actual complexes and comparison of [[thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input]], with prime field $F$ and nonnegative weight. The coherent target, finitary and Nisnevich conventions, and Choice and universe assumptions are those of [[lem-author-b747b28c359f-elmanto-morrow-complexes]]. Choice is inherited from that supplied derived enhancement and from the closed-subscheme correspondence below; no choice-free replacement is asserted.

**Goal:** Import exactly the geometric hypotheses later normalized for the dimension criterion.

[F1] Reference 0, Proposition 8.12, supplies all the asserted properties of this specified fiber. Theorem 8.2 is its pro-cdh ingredient. These results are imported under the recorded hypotheses and reading limits.

[F2] Noetherian schemes have the meaning of [[math:def-locally-noetherian-and-noetherian-scheme]]. Closed immersions and proper maps have the unrestricted scheme meanings of [[math:def-closed-immersion-schemes]] and [[math:def-proper-morphism]]. Cartesian scheme squares use [[math:def-fibre-product-schemes-universal-property]], with existence supplied by [[math:thm-fibre-products-of-schemes-exist]]. The ideal sheaf and closed subscheme constructions used for thickenings are supplied, under Choice, by [[math:thm-quasi-coherent-ideal-closed-subscheme-correspondence]].

[F3] Finite type has the meaning of [[math:def-locally-finite-type-and-finite-type-morphism]]. Finite presentation has the full meaning fixed in [[lem-author-dcdf962edbda-qcqs-site]]: quasi-compact, quasi-separated and locally of finite presentation, with the finite affine algebra presentations specified there. Reference 1, Lemma 29.22.9(2), supplies the implication from finite type to finite presentation for a morphism with locally Noetherian target. Reference 2, Lemma 29.15.5, supplies that every closed immersion is of finite type. Proper morphisms are of finite type by [[math:def-proper-morphism]].

[F4] [[lem-author-b747b28c359f-derived-cohomology]] supplies the cohomology functors on $D(\mathbb Z)$ used in the degree bound and the pro-cohomology transition maps.

[F5] For every commutative $F$-algebra $A$ in the fixed data bounds, both $\operatorname{Spec}A$ and $\operatorname{Spec}(A/I)$ are affine schemes. Under the assumed Choice they are quasi-compact by [[math:cor-affine-scheme-quasi-compact]], and they are quasi-separated by [[math:thm-affine-schemes-quasi-separated]]. The algebra maps $F\to A\to A/I$ induce their $F$-structure morphisms and the compatible map $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ by [[math:thm-affine-scheme-ring-anti-equivalence]]. Thus both evaluations and their contravariant comparison are defined on the stated qcqs $F$-site, using its representative convention. This domain check requires neither Noetherianity nor finite type of $A$ over $F$.

## External input
Import [F1], rather than claiming a local proof of its geometric assertions. All fibers below are coherent derived limits of $B\to C\leftarrow0$ in the target fixed in the Statement, and are taken pointwise for presheaves. The characteristic-zero derived de Rham and characteristic-$p$ syntomic-rigidity arguments underlying the relative bound, and the pro-cdh machinery, remain imported foundations. This item supplies no local shift argument.

For the pro-cdh assertion, an abstract blowup square consists of a closed immersion $i:Z\hookrightarrow X$, a proper morphism $p:X'\to X$, and $Z'=X'\times_X Z$, all Noetherian $F$-schemes, with $p$ inducing an isomorphism $X'\setminus Z'\to X\setminus Z$. Complements here are open complements of the underlying closed subsets. By [F3], $i$ is of finite type because it is a closed immersion, and $p$ is of finite type because it is proper. Their common target $X$ is Noetherian, hence locally Noetherian, so reference 1, Lemma 29.22.9(2), makes both maps finitely presented, including the quasi-separatedness requirement. Thus these squares meet both finite-presentation hypotheses of reference 0, equation (3.4), with the precise meaning supplied by [[lem-author-dcdf962edbda-qcqs-site]]. This establishes the applicability of its Noetherian convention in Theorem 8.2 without adding separatedness or finite type over $F$. For the quasi-coherent ideal sheaf $\mathcal J=\ker(\mathcal O_X\to i_*\mathcal O_Z)$ and $r\geq1$, let $rZ$ be the closed subscheme cut out by $\mathcal J^r$, and set $rZ'=X'\times_X rZ$. Locally $rZ$ is $\operatorname{Spec}(A/J^r)$ when $Z$ is cut out by $J\subseteq A$. These are the $(r-1)$st infinitesimal thickenings in footnote 14. For $s\geq r$ their closed inclusions $rZ\to sZ$ and $rZ'\to sZ'$ induce the inverse-system transition maps on contravariant values.

For a coherent presheaf $P$, define the levelwise total fiber by
$$T_r(P)=\operatorname{fib}\!\left(\operatorname{fib}(P(X)\to P(X'))\longrightarrow\operatorname{fib}(P(rZ)\to P(rZ'))\right).$$
The middle map is induced by the commutative restriction square. Pro-cdh descent here means that, for each such square and every integer $n$, the inverse system $\{H^n(T_r(P))\}_{r\geq1}$ is zero as a pro abelian group: for each $r\geq1$ there is $s\geq r$ for which the transition $H^n(T_s(P))\to H^n(T_r(P))$ is zero. This is precisely the degreewise convention imported from reference 0, Theorem 8.2, footnote 14, and applied to the fiber by Proposition 8.12(2).

Only this degreewise condition is supplied to the dimension-criterion application. The source's further comparison with cartesianness in the unbounded category $\operatorname{Pro}(D(\mathbb Z))$ is not imported. No degreewise extraction from vanishing total K-groups is used.
