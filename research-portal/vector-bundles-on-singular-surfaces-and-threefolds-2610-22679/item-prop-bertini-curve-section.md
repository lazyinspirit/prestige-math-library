---
title: Bertini curve functional with a prescribed avoidance locus
status: published
research_item: prop-bertini-curve-section
dependency_level: 26
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Printed p3 conventions; Theorem6.7 proof p15, second Bertini
        application, conditions(1)–(4)
      reading_limits: "Historical source-reading record retained from the incoming
        generated item: For this repair, read the frozen article extraction at
        printed p. 3 (Notation and conventions), p. 14 (Definition 6.5), and p.
        15 (Theorem 6.7 and the proof on that page). Read the assigned body, the
        geometric supplier interfaces and their displayed application arguments,
        the finite-clopen filtered-product proof, the point-subgroup and
        filtration definitions, and the full direct support consumer. Did not
        freshly inspect PDF page images, Swan primary scans or KM82 section 3,
        reconstruct upstream geometric or motivic proofs, or verify the rest of
        the article proof. Previous reading receipts are historical only.
        Current downstream maintenance read all five assigned bodies, their
        exact supplier contracts and relevant supplied arguments, and the
        complete direct support consumer. It made no fresh article-PDF/text,
        Swan-scan or KM82 reading claim."
      statement: The article uses algebraically closed base fields and finite-type
        affine schemes, and in the proof of Theorem 6.7 makes the second Bertini
        construction on the rank-two kernel over the complement of the finite
        first zero locus. It lists pure codimension two, smoothness outside the
        singular locus, irreducibility, and avoidance of a prescribed
        codimension-at-least-two closed subset.
      hypotheses: Theorem 6.7 assumes a normal affine threefold over an algebraically
        closed field; its proof uses the preceding rank-three bundle and its
        first functional. The locally composed geometric suppliers give the
        present stronger smooth, nonempty, geometrically integral conclusion.
        The clopen equality reduction is a local consequence of the declared
        K-theory suppliers, not an imported assertion from the article.
---

PDF p. 15: Theorem6.7 second Bertini application

## Prerequisites

- [prop-swan-bertini-point-section](item-prop-swan-bertini-point-section)
- [lem-regular-section-parameter-family](item-lem-regular-section-parameter-family)
- [lem-author-27d786ff4d27-dual-global-controls](item-lem-author-27d786ff4d27-dual-global-controls)
- [lem-author-27d786ff4d27-common-core-nonempty](item-lem-author-27d786ff4d27-common-core-nonempty)
- [lem-author-27d786ff4d27-fixed-locus-avoidance](item-lem-author-27d786ff4d27-fixed-locus-avoidance)
- [lem-author-27d786ff4d27-chartwise-integrality](item-lem-author-27d786ff4d27-chartwise-integrality)
- [lem-author-27d786ff4d27-clopen-scope](item-lem-author-27d786ff4d27-clopen-scope)
- [thm-author-fc2380accb47-normal-geometric-input](item-thm-author-fc2380accb47-normal-geometric-input)
- [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-article-conventions](item-def-article-conventions)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-coherent-module-scheme](https://alphabetamath.cc/item/def-coherent-module-scheme)
- [math:def-sheaf-hom](https://alphabetamath.cc/item/def-sheaf-hom)
- [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-base-change-morphism-schemes](https://alphabetamath.cc/item/def-base-change-morphism-schemes)
- [math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect](https://alphabetamath.cc/item/cor-fields-of-characteristic-zero-and-finite-fields-are-perfect)
- [lem-adjudicate-f71858254bdf-clopen-threefold-comparison](item-lem-adjudicate-f71858254bdf-clopen-threefold-comparison)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · Printed p3 conventions; Theorem6.7 proof p15, second Bertini application, conditions(1)–(4) `](https://arxiv.org/abs/2610.22679v1)


## Statement
Assume the Axiom of Choice (AC). Let $k$ be an algebraically closed field of any characteristic, let $X$ be a normal affine finite-type $k$-scheme of dimension three, and let $P$ be a rank-three vector bundle. Fix a functional $s:P\to\mathcal O_X$ whose zero scheme $S$ is finite and smooth over $k$ and lies in $X_{\mathrm{sm}/k}$, as supplied by the preceding point-section construction; $S$ may be empty. Put $Q=\ker s$ and $U=X\setminus S$, so that $Q|_U$ is its rank-two kernel bundle. First suppose $X$ is integral. For every fixed closed subset $Z\subset U$ of codimension at least two, there exists a functional $t:Q|_U\to\mathcal O_U$ whose scheme-theoretic zero locus $Y$ is nonempty, geometrically integral, smooth over $k$, and of pure codimension two in $U$, and satisfies $Y\cap Z=\varnothing$. In particular it is smooth outside $U_{\mathrm{sing}}$, and can be chosen entirely inside $U_{\mathrm{sm}/k}$ by adjoining $U_{\mathrm{sing}}$ to the fixed avoidance set. The parameter may depend on $Z$.

For a normal affine threefold understood as a finite disjoint union of integral threefolds, apply this assertion on each clopen component: there is a single functional with zero scheme a finite disjoint union of nonempty smooth geometrically integral codimension-two curves, one per component, avoiding the prescribed $Z$. Global irreducibility is asserted in the integral case, not for every arbitrary fixed pair $(U,Q)$ on a disconnected scheme; the counterexample and exact scope correction are proved in the component lemma. Under the fixed compatible site and universe size bounds of the motivic K-theory suppliers, the equality in Theorem 6.7 for pure threefolds also reduces to these components: equality of the third motivic image group and the smooth-point subgroup holds on $X$ if and only if it holds on every integral component. Thus the reduction requires no new connectedness hypothesis. If “threefold” is interpreted as allowing additional lower-dimensional components, the curve assertion concerns its three-dimensional clopen components; the theorem's lower-dimensional cases must be handled in their own dimension, rather than falsely called curves here.

## Facts & Assumptions
**Given:** The exact preceding coherent kernel $Q$ and open $U$, the fixed $Z$, AC, and the stated component convention. A functional is an $\mathcal O_U$-linear morphism to $\mathcal O_U$, equivalently a section of $(Q|_U)^\vee=\mathcal Hom_{\mathcal O_U}(Q|_U,\mathcal O_U)$; its zero locus is defined by its coefficient ideal in a local frame. The extra site and universe bounds apply only to the auxiliary K-theoretic reduction, not to the geometric curve construction.

**Goal:** Supply actual nonempty irreducible Bertini curves in all characteristics with the correct avoidance quantifier and component scope, and justify the separate pure-dimensional theorem reduction.

[F1] [lem-author-27d786ff4d27-dual-global-controls](item-lem-author-27d786ff4d27-dual-global-controls) builds the global dual-section family and controlling charts of $W=U\setminus(Z\cup U_{\mathrm{sing}})$.

[F2] [lem-author-27d786ff4d27-common-core-nonempty](item-lem-author-27d786ff4d27-common-core-nonempty), [lem-author-27d786ff4d27-fixed-locus-avoidance](item-lem-author-27d786ff4d27-fixed-locus-avoidance) and [lem-author-27d786ff4d27-chartwise-integrality](item-lem-author-27d786ff4d27-chartwise-integrality) give the common-core nonemptiness open, the fixed-locus avoidance open, and the simultaneous smooth geometrically integral curve on this same global family. In particular the avoidance supplier proves that $Z\cup U_{\mathrm{sing}}$ has dimension at most one and that its avoidance open intersects finitely many nonempty coefficient opens in a nonempty open with a $k$-parameter. The chartwise supplier supplies the integral chart zeros and their common dense core.

[F3] [lem-author-27d786ff4d27-clopen-scope](item-lem-author-27d786ff4d27-clopen-scope) proves coherence of $Q=\ker s$ for every fixed functional satisfying the stated hypotheses and the exact rank-two kernel sequence on $U$; it also proves the componentwise assertion and its fixed-pair limitation. [prop-swan-bertini-point-section](item-prop-swan-bertini-point-section) supplies existence of a functional with the stated finite smooth zero scheme, rather than the universal kernel assertion for an arbitrary fixed functional. [lem-regular-section-parameter-family](item-lem-regular-section-parameter-family) fixes the actual incidence and coefficient-ideal zero-scheme convention, invariant under changes of frame and compatible with open restriction and parameter specialization.

[F4] [def-article-conventions](item-def-article-conventions) fixes the algebraically closed base, affine finite-type convention, chain dimension and finite locally free bundle/rank convention; [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) fixes $X=\operatorname{Spec}A$. Normal means that each local ring is an integrally closed domain. [thm-author-fc2380accb47-normal-geometric-input](item-thm-author-fc2380accb47-normal-geometric-input) supplies $(R_1)$, clopen integral components and the open equality of the regular and smooth loci over a perfect field. [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input) supplies Noetherianity, the finite-type dimension/codimension formulas and dimensions of nonempty integral opens. [math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect](https://alphabetamath.cc/item/cor-fields-of-characteristic-zero-and-finite-fields-are-perfect) makes the algebraically closed $k$ perfect. Codimension at least two means that every irreducible component of $Z$ has codimension at least two in its three-dimensional component of $U$; pure codimension two means that all zero-curve components have codimension exactly two. Clopen means open and closed. Integral means nonempty, reduced and irreducible, as in [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme). Smooth over $k$ means that the structure morphism is smooth, as in [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes); $U_{\mathrm{sm}/k}$ is this locus and $U_{\mathrm{sing}}$ its complement, which agrees here with the nonregular locus. Geometrically integral means integral after every field extension $K/k$, with base change $Y_K=Y\times_k\operatorname{Spec}K$ as in [math:def-base-change-morphism-schemes](https://alphabetamath.cc/item/def-base-change-morphism-schemes). The dual uses [math:def-sheaf-hom](https://alphabetamath.cc/item/def-sheaf-hom). Restriction has $(\mathcal F|_U)(V)=\mathcal F(V)$ for $V\subseteq U$ open and $\mathcal O_U=\mathcal O_X|_U$, as in [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace). Coherence has the quasi-coherent finite-type and finite relation-kernel meaning in [math:def-coherent-module-scheme](https://alphabetamath.cc/item/def-coherent-module-scheme); coherence of this particular $Q$ and construction of its coherent dual extension are supplied by [F3] and [F1], respectively.

[F5] [lem-adjudicate-f71858254bdf-clopen-threefold-comparison](item-lem-adjudicate-f71858254bdf-clopen-threefold-comparison) proves the reduction of the pure-threefold equality using the actual finite-clopen motivic image-group decomposition and exact zero extension of smooth-point classes. It assumes AC and the fixed compatible site and universe size bounds of those K-theory suppliers. This is an additional K-theoretic reduction, distinct from assembling functionals.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed at the preceding point construction and the geometric suppliers [F1]–[F3], and at the auxiliary reduction [F5]. The finite clopen assembly introduces no additional arbitrary-index choice.

## Proof
1.1 In the integral case [F4] makes $Z\cup U_{\mathrm{sing}}$ closed of dimension at most one, so its complement $W$ is a nonempty smooth integral threefold. For this fixed $s$, [F3]'s component lemma supplies coherent $Q$ on $X$ and its exact rank-two kernel sequence on $U$. Apply [F1] to its coherent dual extension on $X$ and this $W$. This supplies actual global functionals on $Q|_U$, with a single global indexed family and its controlling charts. Apply [F2] to that family: the simultaneous coefficient open has a $k$-parameter avoiding the fixed bad locus, a nonempty zero on the common core, and smooth geometrically integral one-dimensional zeros on all charts. The chartwise result identifies the common open core as dense in each chart zero and proves global geometric integrality. By [F3] these are restrictions of the scheme-theoretic coefficient-ideal zero locus $Y$ of the selected global functional. Thus $Y$ is nonempty, smooth, geometrically integral and of pure codimension two, contained in $W$ and disjoint from $Z$. The coefficient open depends on the fixed $Z$, giving exactly $\forall Z\,\exists t$. [F1, F2, F3, F4, A1, given]

2.1 In the finite clopen threefold-component case apply step 1.1 separately on each component and assemble the functionals using [F3]. Their coefficient ideals give precisely the disjoint union of the component zero curves, retaining smoothness, codimension and avoidance. The fixed-pair counterexample in [F3] explains the limitation on global irreducibility for disconnected schemes. For the separate reduction of Theorem 6.7, invoke [F5] with $d=3$, under its explicit Choice and size bounds: both subgroups restrict to their component direct sums inside the same actual $K_0$ decomposition, so equality is equivalent to componentwise equality. This proves the theorem-reduction assertion without inferring it from geometric assembly. The geometric claim for a scheme with additional lower-dimensional clopen components is restricted to its three-dimensional components as stated. [F3, F4, F5, A1, step 1.1] ∎

## Source/application note
The article's existence sentence and condition (4), read in the frozen printed p. 15 text, are used in their prescribed-locus sense. Taking $Z=Y$ after choosing $t$ reverses the quantifiers. The local geometric suppliers use Swan's controlling-family theorem and supply the separate nonemptiness and gluing arguments; this repair did not freshly read Swan's primary scans or KM82 section 3. The article's assumptions and four curve properties are the source claim being decomposed, not an imported proof of this local composition. The pure-dimensional K-theoretic reduction is proved by [F5]. The support consumer may use the integral case on each clopen component or carry the finite union; it must not assume one globally irreducible curve for every disconnected fixed pair. Its treatment of lower-dimensional components requires its separate filtration-vanishing and representative arguments.

## Maintenance scope
The Statement and coverage are unchanged. The fixed-functional kernel assertion is now applied through the current component lemma, which proves it for every admissible fixed functional; the existential point-section theorem retains its existence role. The complete current lem-bertini-support-reduction body was read and its use remains valid with no edit. External reading records above are historical. This generated-content repair supplies no original-author attribution, independent review, publication or acceptance.
