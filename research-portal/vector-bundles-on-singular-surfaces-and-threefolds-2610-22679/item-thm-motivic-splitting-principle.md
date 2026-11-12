---
title: Motivic splitting principle
status: published
research_item: thm-motivic-splitting-principle
dependency_level: 18
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 8, Section 3 opening, Theorem 3.1 and immediately following
        paragraph; p. 3, standing scheme conventions
      reading_limits: For this repair, read the frozen article extraction at printed
        pp. 3 and 8 and inspected supplied PDF page-8.png. The source states the
        splitting principle as a formal consequence of the projective bundle
        theorem; it does not give the numbered proof here. The proof in this
        item is locally composed from the declared suppliers, whose bodies and
        interfaces were read. No Elmanto–Morrow source proof or deeper supplier
        chain was independently audited. Finite coefficients, finite-clopen
        Chern assembly and the supported-extension formula are local
        consequences of those suppliers, not additional source quotations.
      statement: Theorem 3.1 states existence of a qcqs splitting space with
        successive line-bundle extensions and injective integral motivic
        pullback in every integer bidegree. The following paragraph applies it
        to Chern-class computations and bundle classes. The opening of Section 3
        specifies integral motivic Chern classes. The proposal gives a local
        componentwise formulation of the class equality and a local
        finite-coefficient refinement; those refinements are not attributed to
        this source statement.
      hypotheses: X is a qcqs scheme over the standing algebraically closed field k
        and V is a vector bundle. The integral theorem ranges over all integer
        i,j. No smoothness, finite-type, noetherianity or dimension assumption
        is imposed on X. The explicit negative-weight convention and the choice
        and size bookkeeping used in the proposal are supplied through its
        declared local interfaces.
---

PDF p. 8: Theorem 3.1 and following paragraph

## Prerequisites

- [lem-flag-tower-line-quotients](item-lem-flag-tower-line-quotients)
- [lem-flag-tower-cohomology-detection](item-lem-flag-tower-cohomology-detection)
- [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)


## Statement
Assume the Axiom of Choice and retain the compatible universe and site-size conventions of the supplied motivic and Chern constructions. Let $k$ be the article's algebraically closed field, let $X$ be a quasi-compact quasi-separated $k$-scheme, and let $V$ be a vector bundle on $X$. There is a quasi-compact quasi-separated $k$-scheme $Y$ and a morphism $q:Y\to X$ with the following properties.

The finitely many nonempty rank strata $X_\alpha$ of $V$ are open and closed. The scheme $Y$ is the finite disjoint union of schemes $Y_\alpha$ over $X_\alpha$, and on each $Y_\alpha$ the bundle $q^*V$ has a finite filtration by locally direct-summand subbundles whose successive quotients are line bundles. The filtration has length equal to the rank on $X_\alpha$; at rank zero it is the zero filtration and $Y_\alpha=X_\alpha$ with the identity map.

For every $i\in\mathbb Z$ and $j\geq0$, pullback
$$q^*:H^{i,j}_{\mathrm{mot}}(X,R)\longrightarrow H^{i,j}_{\mathrm{mot}}(Y,R)$$
is injective for $R=\mathbb Z$ and for $R=\mathbb Z/n$, $n>0$. With the explicit convention $H^{i,j}_{\mathrm{mot}}(-,R)=0$ for $j<0$, this also holds for all integer weights.

Write $L_{\alpha,s}$ for the line-quotient bundles on $Y_\alpha$ and $j_\alpha:Y_\alpha\hookrightarrow Y$ for the clopen inclusions. In the vector-bundle Grothendieck group,
$$[q^*V]=\sum_{\alpha,s}[j_{\alpha,*}L_{\alpha,s}],$$
where $j_{\alpha,*}L_{\alpha,s}$ is extension by zero: it is $L_{\alpha,s}$ on $Y_\alpha$ and zero on the other components. If $V$ has constant rank, $[q^*V]$ is a sum of global line-bundle classes on $Y$, with the empty sum in rank zero. More generally, an equality $u=v$ between specified motivic classes of the same bidegree whose expressions commute with pullback can be checked after pullback to this tower, equivalently on all its rank components. In particular this applies to integral motivic Chern-class expressions, with the varying-rank convention below.

A $k$-scheme and a $k$-morphism mean a scheme over $\operatorname{Spec}k$ and a morphism commuting with the structure maps, as in [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). A vector bundle is a finite locally free $\mathcal O_X$-module, and a line bundle is one of rank one; local freeness and its well-defined locally constant rank are those of [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank). Bundle pullback uses $f^*E=\mathcal O_T\otimes_{f^{-1}\mathcal O_S}f^{-1}E$ for $f:T\to S$, as in [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces). A filtration by locally direct-summand subbundles means a chain $0=F_0\subset\cdots\subset F_r$ in which each inclusion is locally the inclusion of a direct summand. A rank stratum is the locus where the locally constant rank has a specified value. Quasi-compact means every open cover has a finite subcover; quasi-separated means intersections of quasi-compact open subsets are quasi-compact. The vector-bundle Grothendieck group is generated by isomorphism classes of vector bundles subject to $[E]=[E']+[E'']$ for short exact sequences $0\to E'\to E\to E''\to0$. The motivic groups and functorial pullbacks in nonnegative weights are those of [def-motivic-cohomology](item-def-motivic-cohomology).

For a constant-rank bundle $E$, the integral classes $c_i(E)\in H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$, $i\geq0$, and their pullback naturality are those of [def-motivic-chern-classes](item-def-motivic-chern-classes), including $c_0(E)=1$ and the rank-zero convention. For arbitrary rank, define $c_i(E)$ as the unique class restricting on each nonempty clopen rank stratum $S$ to $c_i(E|_S)$ from that definition. The finite-clopen motivic restriction isomorphism of [lem-flag-tower-cohomology-detection](item-lem-flag-tower-cohomology-detection) supplies existence and uniqueness; naturality is verified in the proof. An integral motivic Chern-class expression here is a finite expression in these classes, integers and the unit using sums, differences and cup products, homogeneous in the indicated bidegree. Ring operations and their pullback compatibility are those of [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula). Other specified natural motivic classes are covered by the general detection assertion without requiring them to be constructed from actual bundles.

## Facts & Assumptions

**Given:** AC, the compatible universe and site-size conventions, the field $k$, the qcqs $k$-scheme $X$, and the vector bundle $V$ as in the statement.

**Goal:** Construct the componentwise line-quotient tower and establish motivic detection and the stated class formulas.

[F1] For a finite family of finite locally free bundles on a qcqs scheme, [lem-flag-tower-line-quotients](item-lem-flag-tower-line-quotients) constructs a finite clopen rank partition and a qcqs componentwise flag tower with locally split line-quotient filtrations. Rank-zero towers are identities. Its construction assumes AC.

[F2] [lem-flag-tower-cohomology-detection](item-lem-flag-tower-cohomology-detection) proves that this componentwise tower detects the actual motivic cohomology of qcqs schemes over the stated field for every cohomological degree and nonnegative weight, integrally and with finite coefficients. It also supplies finite-clopen motivic restriction isomorphisms and proves the componentwise class formulas and their global clopen extensions by zero. It does not assert injectivity on the vector-bundle Grothendieck group.

[F3] [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula) supplies the explicit zero extension in negative weights and the functorial motivic theory in all integer bidegrees. [def-motivic-cohomology](item-def-motivic-cohomology) supplies the nonnegative-weight groups and their functorial pullbacks.

[F4] AC is the choice assumption inherited by the flag, projective-bundle and Chern constructions used here. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F5] [def-motivic-chern-classes](item-def-motivic-chern-classes) defines integral motivic Chern classes of constant-rank bundles on qcqs field-schemes, including rank zero, and proves their pullback naturality under AC and its stated universe conventions. Together with the finite-clopen restriction isomorphism in [F2], this supplies the componentwise construction specified in the Statement.

[F6] [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) specifies schemes and morphisms over the base. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank) supplies the finite locally free sheaves and well-defined locally constant rank. [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces) specifies the module-sheaf pullback; on free charts it preserves the displayed basis, hence rank. The tower supplier [F1] supplies its application to locally split filtrations.

## Proof

**Proof technique:** Construct the flag tower separately on the finite clopen rank strata and apply motivic detection componentwise.

1.1 The rank of $V$ is locally constant because $V$ is locally free of finite rank. Its rank fibers are open, and each complement is the union of the other fibers, so each is also closed. They cover $X$; quasi-compactness gives only finitely many nonempty fibers. Apply [F1] to $V$ on each fiber and take the finite disjoint union of the resulting towers. This gives $q:Y\to X$ with $Y$ qcqs, the asserted locally split filtrations, and the identity tower and zero filtration on every rank-zero stratum. [given, F1, F4, F6, construct]

1.2 For any vector bundle $E$ on a qcqs $k$-scheme $S$, its finite clopen rank partition is available by [F1] and [F6]. On each piece [F5] gives $c_i$ in bidegree $(2i,i)$, and the finite-clopen isomorphism in [F2] gives a unique global class with these restrictions. Refining the partition does not change the global class, since [F5] is natural under the inclusions and [F2] detects equality on the refinement. If $f:T\to S$ is a morphism of qcqs $k$-schemes, the nonempty inverse images of the rank pieces are the rank pieces of $f^*E$ by [F6]. They are clopen and qcqs: a clopen subset of a quasi-compact space is quasi-compact, and quasi-separatedness is inherited by an open subscheme. On every such piece [F5] gives $f^*c_i(E)=c_i(f^*E)$; [F2] then gives the equality on $T$. Thus the varying-rank classes are well-defined and natural. Pullback preserves ring operations by [F3], so all the specified Chern-class expressions are natural as well. [given, F1, F2, F3, F4, F5, F6]

2.1 By [F2], pullback along the tower of step 1.1 is injective on $H^{i,j}_{\mathrm{mot}}(-,R)$ for every integer $i$, every $j\geq0$, and both specified kinds of coefficients. If $j<0$, the source and target are zero under the explicit convention in [F3], so pullback is injective there as well. [F2, F3, step 1.1]

2.2 On each component the short exact sequences associated with the filtration give the sum of the classes of its line quotients. By [F2], extension by zero along the clopen component inclusions yields the displayed equality in the global vector-bundle Grothendieck group. When the rank is constant, the tower and its filtration are global, so the summands are global line bundles; when the rank is zero the sum is empty. The supported extensions in the varying-rank formula need not themselves be global line bundles. [F2, step 1.1]

3.1 Let $u$ and $v$ be specified natural motivic expressions of the same bidegree on $X$, including the integral Chern-class expressions of step 1.2. Naturality identifies their pullbacks with the corresponding expressions formed from the pulled-back data. If these agree on every $Y_\alpha$, they agree on $Y$ by the finite-clopen restriction isomorphism in [F2]. Thus $q^*(u-v)=0$, and step 2.1 gives $u=v$. Conversely an equality on $X$ pulls back to every component by functoriality. This uses no injectivity assertion for the Grothendieck group. [F2, F3, step 2.1, step 1.2]

4.1 Steps 1.1 through 3.1 prove the stated construction, detection, class formulas, componentwise Chern convention and identity-checking consequence. [step 1.1, step 2.1, step 2.2, step 1.2, step 3.1] ∎
