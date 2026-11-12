---
title: Finite rank strata detect Elmanto-Morrow motivic cohomology
status: published
research_item: lem-author-ab0a6fc202cb-motivic-rank-restriction
dependency_level: 9
sources:
  references:
    - title: Kerodon, Theorem 7.2.3.1 (Joyal)
      url: https://kerodon.net/tag/02NY
      locator: Theorem 7.2.3.1, part (1)
      statement: A simplicial map e:A to B with B an infinity-category is left cofinal
        exactly when A times_B B_{/b} is weakly contractible for each object b
        of B.
      hypotheses: B is an infinity-category; all simplicial sets and diagrams are
        small in the chosen coefficient universe. Apply to nerves of the
        inclusion D^op into R^op.
      reading_limits: Freshly read both parts of the theorem and the displayed proof
        on the primary page. The proof develops the right-cofinal case and
        states the left case by the analogous argument. Its fibration,
        localization and anodyne inputs are imported, not reconstructed. Only
        part (1) is used.
    - title: Kerodon, Corollary 7.2.2.3
      url: https://kerodon.net/tag/02XR
      locator: Corollary 7.2.2.3, full statement and proof
      statement: Restriction of a cone along a left cofinal simplicial map preserves
        and reflects the property of being a limit cone in any
        infinity-category.
      hypotheses: The reindexing map is left cofinal and the cone takes values in an
        infinity-category. Small limits exist here by the declared motivic
        enhancement supplier.
      reading_limits: Freshly read the entire corollary and its one-line reduction to
        Corollary 7.2.2.2 on the primary page. That upstream result is imported,
        not reconstructed. The local proof verifies left cofinality before using
        this limit-cone assertion.
    - title: Kerodon, Contractibility
      url: https://kerodon.net/tag/02L4
      locator: Example 3.2.4.2; Definition 3.2.4.16; Remark 3.2.4.17
      statement: The nerve of an ordinary category with an initial or final object is
        contractible and therefore weakly contractible. Weak contractibility
        means that projection to a point is a weak homotopy equivalence.
      hypotheses: An ordinary small category with an initial or final object; apply to
        the explicitly computed comma categories.
      reading_limits: Freshly read exactly these three entries in the primary
        subsection. The nerve-homotopy proposition cited by the example and the
        general weak-homotopy theory are imported, not reconstructed.
    - title: Kerodon, Characterization of Nerves
      url: https://kerodon.net/tag/0031
      locator: Proposition 1.3.4.1, statement and opening proof paragraph
      statement: Nerves of ordinary categories have unique fillers for all inner
        horns; in particular they are infinity-categories.
      hypotheses: An ordinary category small in the chosen universe; use its ordinary
        nerve, whose simplices are strings of composable arrows.
      reading_limits: Freshly read the proposition and its displayed proof on the
        primary page. The forward direction invokes Lemma 1.3.4.2, which is
        imported rather than reconstructed. No broader characterization result
        is needed in the application.
---

PDF p. 8: Computations after the splitting principle

## Prerequisites

- [def-article-conventions](item-def-article-conventions)
- [lem-author-ab0a6fc202cb-finite-common-rank-strata](item-lem-author-ab0a6fc202cb-finite-common-rank-strata)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)
- [math:def-comma-slice-and-coslice-categories](https://alphabetamath.cc/item/def-comma-slice-and-coslice-categories)
- [math:lem-open-immersion-monomorphism](https://alphabetamath.cc/item/lem-open-immersion-monomorphism)
- [` Kerodon, Theorem 7.2.3.1 (Joyal) · Theorem 7.2.3.1, part (1) `](https://kerodon.net/tag/02NY)
- [` Kerodon, Corollary 7.2.2.3 · Corollary 7.2.2.3, full statement and proof `](https://kerodon.net/tag/02XR)
- [` Kerodon, Contractibility · Example 3.2.4.2; Definition 3.2.4.16; Remark 3.2.4.17 `](https://kerodon.net/tag/02L4)
- [` Kerodon, Characterization of Nerves · Proposition 1.3.4.1, statement and opening proof paragraph `](https://kerodon.net/tag/0031)


## Statement
Assume AC and the article's field convention: $k$ is algebraically closed unless otherwise specified. Let $X$ be any qcqs $k$-scheme and $X=\coprod_{\alpha\in A}X_\alpha$ the finite common rank partition of finitely many finite locally free sheaves. For the actual Elmanto-Morrow motivic complex of every weight $j\geq0$, restriction gives
$$\mathbb Z(j)_{\mathrm{mot}}(X)\simeq\prod_\alpha\mathbb Z(j)_{\mathrm{mot}}(X_\alpha).$$
Thus for every $i\in\mathbb Z$ and $R=\mathbb Z$ or $\mathbb Z/n$ with $n>0$, the joint restriction map
$$H^{i,j}_{\mathrm{mot}}(X,R)\xrightarrow{\cong}\prod_\alpha H^{i,j}_{\mathrm{mot}}(X_\alpha,R)$$
is an isomorphism and in particular injective. No smoothness, finite-type, noetherian, dimension or regularity hypothesis is required. Weights $j<0$ are not defined here unless an additional zero-weight convention has explicitly been adopted.

## Facts & Assumptions

**Given:** AC, the field, scheme, finite bundle family and integer/coefficient bounds in the Statement, with the standing size assumptions [A1].

**Goal:** Prove the exact motivic detection property required by a varying-rank flag tower.

[A1] Use the compatible universes $U\in V\in W$, with $\omega\in U$, of [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes): scheme data are in $U$, the scheme category and its sieve categories are $V$-small, and coefficient limits are taken in the supplied enhancement in $W$. Universe closure has the meaning of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). Existence of these universes is a standing assumption separate from AC. AC is retained from the motivic construction; the finite coefficient calculation needs only finite choices. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F0] The field, qcqs $k$-scheme category, structure maps and finite locally free sheaves are those of [def-article-conventions](item-def-article-conventions). The present statement explicitly allows arbitrary qcqs schemes, including affine ones without a finite-type assumption.

[F1] The nonempty common rank strata form a finite clopen partition by qcqs open subschemes, with their restricted structure sheaves. If $X$ is empty the partition is empty. [lem-author-ab0a6fc202cb-finite-common-rank-strata](item-lem-author-ab0a6fc202cb-finite-common-rank-strata)

[F2] For $j\geq0$, [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) supplies the actual motivic functor $P=\mathbb Z(j)_{\mathrm{mot}}$ on qcqs $k$-schemes, already restricted from the prime field. Its enhanced target has small coherent limits and a zero object, which is terminal. For each Nisnevich covering sieve $R$ on $X$, restriction is the limit cone $P(X)\simeq\lim_{R^{\mathrm{op}}}P(T)$. In particular $P(\varnothing)\simeq0$. The supplier gives the mapping-space characterization of these limits and identifies the homotopy category with $D(\mathbb Z)$.

[F3] A sieve is closed under precomposition; the sieve generated by a family consists of arrows factoring through a member. [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) Open covering families, including the empty family on the empty scheme, are Nisnevich by [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface). An open immersion is a monomorphism, so factorization through a fixed rank-stratum inclusion is unique. [math:lem-open-immersion-monomorphism](https://alphabetamath.cc/item/lem-open-immersion-monomorphism)

[F4] Integral motivic groups apply $H^i$ to $P$; finite coefficients apply the fixed functor $-\otimes^{\mathbf L}\mathbb Z/n$ first, for $n>0$. Both operations commute with finite derived products, including the empty product, and the comparison components are induced by projections. [def-motivic-cohomology](item-def-motivic-cohomology), [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products)

[F5] References 0 and 1 give the left-cofinality criterion and restriction of limit cones, respectively. For an ordinary functor $e:I\to J$, the test category $(e\downarrow r)$ has objects $(d,e(d)\to r)$ and morphisms $h:d\to d^{\prime}$ satisfying the commuting-triangle equation. These comma categories are those of [math:def-comma-slice-and-coslice-categories](https://alphabetamath.cc/item/def-comma-slice-and-coslice-categories). Their nerves identify degreewise with $N(I)\times_{N(J)}N(J)_{/r}$, since both describe strings of these commuting triangles. Reference 3 makes the ordinary nerves infinity-categories. Thus weak contractibility of every test nerve allows restriction of a coherent limit cone along $N(e)$.

[F6] Reference 2 supplies weak contractibility of the nerve of any small ordinary category with a terminal object; this also applies to the one-object identity category. All uses of cofinality below concern coherent limits, rather than limits in the ordinary derived category.

## External input
References 0 and 1 import the coherent cofinality and limit-cone results; reference 2 imports nerve contractibility, and reference 3 the ordinary-nerve interface. Their exact statements, hypotheses and reading limits are recorded in sources.references. The finite covering-sieve computation below is locally authored. The actual motivic sheaf and its restriction to $k$-schemes are used through [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes), without reconstructing the Elmanto–Morrow construction. No general sieve-to-Čech theorem is assumed.

## Proof

1.1 Put $P=\mathbb Z(j)_{\mathrm{mot}}$ on the supplied category of qcqs $k$-schemes. All following categories and limits satisfy [A1]. If $X=\varnothing$, [F1] and [F2] already give the empty product assertion. Otherwise let $R$ be the sieve generated by the inclusions $i_\alpha:X_\alpha\hookrightarrow X$. It covers by [F1] and [F3]. Its objects are maps $r:T\to X$ factoring through one such inclusion, and its arrows are triangles over $X$. Let $D$ be its full subcategory on these inclusions and the unique map $\varnothing\to X$, and let $e:D^{\mathrm{op}}\hookrightarrow R^{\mathrm{op}}$ be the inclusion. These are categories of $k$-morphisms, so the motivic functor of [F2] is defined on every arrow. By disjointness and [F3], $D^{\mathrm{op}}$ has precisely the nonidentity arrows $i_\alpha\to(\varnothing\to X)$. For an object $r:T\to X$ of $R$, the test category $(e\downarrow r)$ in $R^{\mathrm{op}}$ records factorizations $T\to X_\alpha\to X$ or $T\to\varnothing\to X$. If $T$ is nonempty, the generating-sieve condition gives a factorization; its index is unique because the pieces are disjoint, and the factorization is unique by monomorphy. No map from nonempty $T$ to $\varnothing$ exists. The test category is therefore a one-object identity category. If $T$ is empty, its maps to all pieces and to $\varnothing$ are unique, and the latter factorization is terminal in the test category: the arrows $i_\alpha\to(\varnothing\to X)$ give its unique terminal arrows. Thus every test nerve is weakly contractible by [F6]. Applying [F5], $N(e)$ is left cofinal and the limit cone of [F2] restricts to a limit cone on $D^{\mathrm{op}}$. [A1, F0, F1, F2, F3, F5, F6, given, construct]

2.1 For nonempty $X$, the restricted diagram is the finite star $P(X_\alpha)\to P(\varnothing)$, with $P(\varnothing)$ terminal by [F2]. Its limit is $Q=\prod_\alpha P(X_\alpha)$: for every test object $L$, a coherent cone consists of maps $L\to P(X_\alpha)$, a map $L\to P(\varnothing)$, and the compatibility homotopies to that terminal value. The space of the latter choices is contractible, since $\operatorname{Map}(L,P(\varnothing))$ is contractible; the star has no composable nonidentity arrows imposing further conditions. Thus its cone space is naturally $\prod_\alpha\operatorname{Map}(L,P(X_\alpha))$, represented by $Q$ by the product mapping-space property in [F2]. The restricted cone of step 1.1 is consequently this product cone, whose maps are precisely $P(i_\alpha)$. This proves the displayed equivalence of actual complexes, including the empty case already treated. It also gives the finite product in the ordinary derived homotopy category: taking components of the finite product of mapping spaces gives the product of the sets of components. Apply [F4] to obtain the stated integral and finite-coefficient group isomorphisms, in every integer degree, with components the restrictions. Every isomorphism is injective. Only the supplied qcqs sheaf and finite partition were used, with no smoothness, finite-type, noetherian, dimension or regularity assumption. The definition in [F4] covers only $j\geq0$, so no negative-weight claim is made without the stated additional convention. [F1, F2, F4, step 1.1, construct] ∎
