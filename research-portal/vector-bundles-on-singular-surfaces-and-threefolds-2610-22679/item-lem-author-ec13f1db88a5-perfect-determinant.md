---
title: Determinant descends on the actual perfect K zero
status: published
research_item: lem-author-ec13f1db88a5-perfect-determinant
dependency_level: 12
---

PDF p. 8: Proposition3.2, perfect-complex first class and determinant

## Prerequisites

- [thm-adjudicate-a8dfc5e2f7fe-perfect-determinant-true-triangle-input](item-thm-adjudicate-a8dfc5e2f7fe-perfect-determinant-true-triangle-input)
- [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:thm-the-derived-category-inherits-a-triangulated-structure](https://alphabetamath.cc/item/thm-the-derived-category-inherits-a-triangulated-structure)
- [math:prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism](https://alphabetamath.cc/item/prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)


## Statement
For every qcqs scheme $X$, the specified perfect-complex group $K_0(X)=\pi_0\mathbb K(\operatorname{Perf}(X))$ has a natural homomorphism $\det_X:K_0(X)\to\operatorname{Pic}(X)$. On a bounded finite locally free complex $P^\bullet$ its line is $\bigotimes_i(\det P^i)^{(-1)^i}$; this formula is local when no global such representative exists. It agrees with the exterior determinant on a bundle, sends a shift to the inverse line, and respects all cofiber relations. This requires no equality with vector-bundle K zero.

## Facts & Assumptions
[F1] [thm-adjudicate-a8dfc5e2f7fe-perfect-determinant-true-triangle-input](item-thm-adjudicate-a8dfc5e2f7fe-perfect-determinant-true-triangle-input) supplies the global graded determinant on perfect complexes, its invariance under derived isomorphisms, additivity for actual short-exact complex diagrams (Knudsen–Mumford true triangles), the local alternating formula and derived-pullback compatibility. Only these data are used here; a map of K-spaces or naturality for arbitrary ordinary triangle diagrams is not a premise.

[F2] [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input) identifies the cofiber Grothendieck presentation of the supplied essentially small stable idempotent-complete perfect category with its actual spectral $K_0$, naturally by the object-class map. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) fixes this category and its exact derived pullbacks. [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) identifies its homotopy category with the full perfect subcategory of the sheaf-derived category and supplies stability, including closure under shifts and cofibers. Roof representatives and cone comparisons are supplied separately in [F4]–[F5].

[F3] [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles) fixes exterior determinants and the Picard group law. On a bundle of locally varying rank, apply its constant-rank construction on the disjoint open rank loci.

[F4] [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category) supplies the cochain derived localization, roof representatives and the signed cone convention, under its standing size hypothesis. [math:thm-the-derived-category-inherits-a-triangulated-structure](https://alphabetamath.cc/item/thm-the-derived-category-inherits-a-triangulated-structure) supplies its triangulated structure, with distinguished triangles the isomorphic images of cone triangles. [math:prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism](https://alphabetamath.cc/item/prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism) compares any two distinguished completions of the same first map by an isomorphism of their third objects; no canonical choice is asserted.

[F5] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the abelian category $\mathcal A_X=\operatorname{Mod}(\mathcal O_X)$, the ambient sheaf-derived enhancement, its identification with the ordinary unbounded localization on homotopy categories, and the fact that the displayed cochain cone represents the enhanced cofiber. Thus the cofiber triangles used in [F2] have the ordinary distinguished-triangle interpretation in [F4]. Its unbounded module-sheaf model imposes no global bundle-resolution hypothesis.

[A1] AC and the fixed universe bounds are those already assumed in [F1], [F2] and [F5]; [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) states AC and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) fixes universe closure. Take $\mathcal U\in\mathcal V$, with $\omega\in\mathcal U$, as in [F1]: scheme and module-sheaf data are $\mathcal U$-small, while categories and localizations are formed in $\mathcal V$. Existence of the universes is assumed separately from AC. The collection of all such sheaf structures is a set in $\mathcal V$: their assignments of section sets, operations and restrictions are indexed by the $\mathcal U$-small site and take values in sets coded in $\mathcal U\in\mathcal V$. Countable cochain diagrams, cochain maps and homotopies then also form sets in $\mathcal V$. Hence $K(\mathcal A_X)$ is $\mathcal V$-small and the small-category alternative of [F4]'s roof-localization hypothesis applies in $\mathcal V$. The enhanced model and its essentially small perfect presentation retain their supplied AC assumption. The class argument makes no simultaneous choice of bundle representatives or triangle isomorphisms.


**Given:** $X$ qcqs, AC and the fixed universes of the specified perfect-complex model.

**Goal:** Descend the global determinant to its actual $K_0$, with the stated formulas and naturality.

## Proof
1.1 Assign to a perfect object $P$ the Picard class $d(P)$ of the underlying line of its global graded determinant in [F1]. Derived-isomorphism invariance makes $d(P)$ depend only on its object equivalence class, and $d(0)=0$. Forgetting the grading is done only on isomorphism classes, after using the graded determinant data. [F1, F3, A1]

2.1 For any cochain complex representing $P$, use the cone convention of [F4]–[F5]: $\operatorname{Cone}(1_P)^n=P^n\oplus P^{n+1}$ with $d(y,x)=(d_Py+x,-d_Px)$. The degree-minus-one map $h(y,x)=(0,y)$ satisfies $dh+hd=1$, so the identity cone is acyclic. The termwise split short-exact complex diagram $0\to P\to\operatorname{Cone}(1_P)\to P[1]\to0$ is a true triangle of perfect complexes. Its determinant additivity gives $d(P)+d(P[1])=d(\operatorname{Cone}(1_P))=d(0)=0$. This proves the inverse-line identity without assuming triangle functoriality in the ordinary derived category. [F1, F2, F4, F5, step 1.1]

3.1 Given an enhanced cofiber sequence $P\xrightarrow{u}Q\to R$, its triangle is distinguished in $D(\mathcal A_X)$ by [F2], [F4] and the cone-compatible enhancement of [F5]. By the roof calculus of [F4], valid under [A1], write its first map as a roof $P\xleftarrow{s}P'\xrightarrow{a}Q$, with $s$ a quasi-isomorphism and $a$ a cochain map; if $\ell$ denotes localization, then $\ell(a)=u\ell(s)$. The localized cone triangle of $a$ is distinguished by [F4]. Transport its first vertex along $\ell(s):P'\xrightarrow{\sim}P$ and its shifted vertex along $\ell(s)[1]$, keeping $Q$ fixed. This gives a distinguished triangle beginning with precisely $u:P\to Q$. The same-first-map comparison of [F4] therefore gives $\operatorname{Cone}(a)\cong R$ in $D(\mathcal A_X)$. In particular $P'$, $\operatorname{Cone}(a)$ and $P'[1]$ are perfect by [F2], although their representing complexes need not be globally bounded complexes of bundles. The globally defined termwise split short-exact complex diagram $0\to Q\to\operatorname{Cone}(a)\to P'[1]\to0$ is a KM true triangle, with maps $y\mapsto(y,0)$ and $(y,x)\mapsto x$ and degreewise section $x\mapsto(0,x)$. This section need not commute with differentials. Thus [F1] and step 2.1 give $d(R)=d(Q)+d(P'[1])=d(Q)-d(P)$, so every actual cofiber relation is killed. Only existence of the derived isomorphisms is needed for equality of Picard classes. [F1, F2, F4, F5, A1, step 1.1, step 2.1]

4.1 Extend $P\mapsto d(P)$ to the free abelian object-class group. By step 3.1 it descends through all its cofiber relations, and the object-class isomorphism of [F2] gives the homomorphism on the specified spectral $K_0$. For a morphism $f:Y\to X$ of qcqs schemes, [F1] identifies the global determinant of $Lf^*P$ with the pullback determinant of $P$; the naturality of the object-class map in [F2] therefore makes these homomorphisms natural in $X$. Exactness of the supplied derived pullback, rather than flatness of $f$, is what is used. [F1, F2, step 3.1]

5.1 On any open with a bounded finite locally free representative, [F1] gives the alternating tensor formula in the Statement. In degree zero it is the exterior determinant of [F3], and step 2.1 gives the shift formula. These are formulas for restrictions of an already global line: the line and its descent isomorphisms come from [F1]. They do not assert that an arbitrary perfect class is globally a bundle difference or admits a global bounded bundle representative. This proves the full qcqs statement. [F1, F3, step 2.1, step 4.1] ∎
