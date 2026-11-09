---
title: Actual supported Chern operation and its smooth comparison
status: published
research_item: lem-author-d026a7b99ace-supported-chern-map
dependency_level: 22
---

PDF p. 17: Corollary6.9 supported factor calculation

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [def-total-chern-class](item-def-total-chern-class)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model)
- [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation)
- [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)
- [thm-author-d026a7b99ace-integral-field-model](item-thm-author-d026a7b99ace-integral-field-model)
- [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison)
- [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input)
- [lem-open-excision-for-support-fibers](item-lem-open-excision-for-support-fibers)
- [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)
- [lem-adjudicate-6e70d30b9793-chern-operation-transport](item-lem-adjudicate-6e70d30b9793-chern-operation-transport)
- [lem-finite-projective-complements](item-lem-finite-projective-complements)
- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the motivic and perfect K-theory constructions. Let $k$ be any field, let $X$ be a quasi-compact quasi-separated $k$-scheme, and let $i\geq1$. The actual EM Chern classes admit natural pointed K-space operations
$$C_i:\Omega^\infty K(X)\longrightarrow\Omega^\infty\bigl(H\mathbb Z(i)_{\rm mot}(X)[2i]\bigr),$$
where $H\mathbb Z(i)_{\rm mot}(X)$ is the Eilenberg–Mac Lane spectrum of the supplied weight-$i$ cochain complex. Their global values on bundles are the supplied projective-relation classes. For affine $X$, their values on the specified perfect $K_0(X)$ agree with the supplied virtual-series classes. These assertions require no normality, noetherianity or dimension bound.

Let $x\in X$ be a closed point and put $U=X\setminus\{x\}$. Write $K(X/U)=\operatorname{fib}(K(X)\to K(U))$ and $M_i(X/U)=\operatorname{fib}(H\mathbb Z(i)_{\rm mot}(X)\to H\mathbb Z(i)_{\rm mot}(U))$. On non-quasi-compact opens use exactly the inverse-limit extensions over quasi-compact opens in the supplied support convention. Taking fibers of the pointed operations gives operations of pointed sets
$$c_{i,x}^{\rm fib}:\pi_0K(X/U)\longrightarrow H^{2i,i}_x(X),\qquad H^{2i,i}_x(X)=\pi_0\bigl(M_i(X/U)[2i]\bigr).$$
They commute with open restriction and forgetting support. If $U$ is quasi-compact, localization identifies $K(X/U)$ with the category-defined supported perfect K-spectrum $K_x(X)$; the resulting operation is denoted $c_{i,x}:K_{0,x}(X)\to H^{2i,i}_x(X)$. Under this hypothesis, restriction to every quasi-compact open neighbourhood of $x$ is an excision identification for both support theories. For a non-quasi-compact complement, only the declared fiber construction is used here, without claiming that localization comparison. Higher Chern operations are not asserted additive.

For the classical comparison assume additionally that $k$ is perfect and $x$ has a smooth affine finite-type open neighbourhood $V\subseteq X$. Restriction of the fiber operation to $(V,x)$ is the classical integral motivic universal operation used in supported Riemann–Roch, through the actual multiplicative coefficient comparison preserving the original Picard orientation. When $U$ is quasi-compact this is also its identification by support excision. Use the size-bounded site of smooth qcqs schemes of finite presentation over $V$, with all $V$-morphisms and Zariski covers; its objects and relevant quasi-compact opens are smooth finite-type $k$-schemes. In the article's application, $k$ is algebraically closed in arbitrary characteristic, $X$ is a normal affine finite-type threefold, and $x$ is a smooth closed point on a three-dimensional component; one can choose $V$ of pure dimension three. The pointed construction is only for $i\geq1$; $c_0=1$ remains an unpointed global constant.

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the fixed compatible site and universe bounds of the supplied constructions. These are inherited by the actual EM spectrum and orientation models, the sheaf K-space construction, the smooth coefficient comparison, the bundle and virtual Chern constructions, and the support/localization constructions below. These premises are used in steps 1.1–4.1; no additional choice principle is asserted.

[F1] [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space) gives the positive-index formal universal-Chern/K-space construction and its map-level coefficient and restriction naturality. It includes the full affine K-space comparison, the canonical unit from actual perfect K-values into the local model, and the inverse-limit extension on open complements. [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model) and [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation) supply its actual EM ring model and Picard orientation over the qcqs base $X$. A comparison of only $K_1$ or only target groups is not substituted for this input.

[F2] [lem-adjudicate-6e70d30b9793-chern-operation-transport](item-lem-adjudicate-6e70d30b9793-chern-operation-transport) supplies the actual smooth square of pointed universal Chern maps and its support fibers. [thm-author-d026a7b99ace-integral-field-model](item-thm-author-d026a7b99ace-integral-field-model) supplies the integral multiplicative, orientation-preserving coefficient comparison on smooth finite-type pairs over a perfect field. [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison) fixes the ordinary Voevodsky/Bloch classical theory. These are used only under the additional comparison hypotheses in the Statement.

[F3] [def-motivic-chern-classes](item-def-motivic-chern-classes), [def-total-chern-class](item-def-total-chern-class) and [prop-chern-whitney-identities](item-prop-chern-whitney-identities) specify the projective relation, normalization and actual virtual bundle coefficients. [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge) identifies the specified affine perfect $K_0$ with the bundle group, by the same object classes, over every commutative unital ring.

[F4] [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface) identifies affine bundles with finite projective modules, preserving sums. The module assertion of [lem-finite-projective-complements](item-lem-finite-projective-complements) gives a finite projective complement over every ring. Only that assertion, not its separately locally noetherian Grothendieck-group clause, is used below; the affine object-class bridge supplies the bundle difference.

[F5] [def-cohomology-with-support](item-def-cohomology-with-support) fixes the unshifted support spectrum $M_i(X/U)$, its $[2i]$ shift, and the actual inverse-limit extension on non-quasi-compact opens. In particular $\pi_0(M_i(X/U)[2i])=H^{2i,i}_x(X)$. [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input) supplies the category-to-fiber comparison and K-theory open descent/excision when the complement and neighbourhood are quasi-compact.

[F6] [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) supplies derived Nisnevich descent for the actual EM complexes on all qcqs schemes over the prime field and, by restriction, over $k$. Hence a cover by two quasi-compact opens has a homotopy-cartesian restriction square. [lem-open-excision-for-support-fibers](item-lem-open-excision-for-support-fibers) turns that square into motivic support excision; it is not inferred merely from the existence of a fiber.


**Given:** The qcqs field-scheme $X$, the positive integer $i$, the closed point when supports are used, and [A1]. For the localization/excision assertions assume the complement is quasi-compact. For the classical comparison assume the perfect field and smooth affine finite-type neighbourhood $V$ in the Statement.

**Goal:** Construct the actual operations and their support, restriction and classical comparison maps with the stated hypotheses.

## Proof
1.1 Fix $i\geq1$. Use the EM P¹-ring model of [F1] on the size-bounded smooth qcqs site over $X$, which includes the identity of $X$ and its quasi-compact opens. The universal bundle classes are the projective-relation classes of [F3]; their stability under $E\mapsto E\oplus\mathcal O$ follows from actual Whitney. Apply [F1] to obtain the pointed maps on the local perfect K-space model, and compose on derived sections with its canonical unit from the actual K-values. This gives the displayed maps $C_i$ and their actual restriction arrows; the target is the shifted Eilenberg spectrum in the Statement. Their values on bundles are the original classes. The full affine comparison and local-replacement unit, rather than an assertion of unbounded K-hyperdescent or global bundle representation, are the specified inputs. [A1, F1, F3, construct]

2.1 On affine $X$, [F3] represents each perfect class as $[P]-[Q]$ for actual bundles. Apply [F4] to obtain a finite projective complement $Q^{\prime}$ with $Q\oplus Q^{\prime}\cong\mathcal O_X^N$. The same class is $[P\oplus Q^{\prime}]-[\mathcal O_X^N]$. The completed universal construction in [F1] projects away from trivial rank, so its Chern value is that of the actual bundle $P\oplus Q^{\prime}$. The actual Whitney identity gives $c_t(Q)c_t(Q^{\prime})=c_t(\mathcal O_X^N)=1$ and thus $c_t(P\oplus Q^{\prime})=c_t(P)c_t(Q)^{-1}$. Its positive coefficients are precisely the prescribed virtual-series values. Varying ranks are handled on the finite clopen rank strata as in [F3]; no global bundle-difference representation on nonaffine schemes is used. [A1, F1, F3, F4, step 1.1]

2.2 If $U$ is not quasi-compact, take the inverse limits of the natural operations over its quasi-compact open subsets, exactly as prescribed in [F1] and [F5]. These subsets are qcqs by quasi-separatedness of $X$. Since $\Omega^\infty$ preserves limits, the resulting source and target spaces are those of the declared extensions. Apply these natural pointed maps to the restriction arrow from $X$ to $U$ and take homotopy fibers over zero. The target is $\Omega^\infty(M_i(X/U)[2i])$, whose $\pi_0$ is $H^{2i,i}_x(X)$ by [F5]. Taking $\pi_0$ defines $c_{i,x}^{\rm fib}$. The natural fiber projections give the support-to-global square; compatible restrictions give open naturality. If $U$ is quasi-compact, [F5] also identifies the source with $K_x(X)$ and its support-forgetting map. This yields the asserted $c_{i,x}$ on the category-defined group. No additive spectrum map for the individual higher Chern operations is asserted. [A1, F1, F5, step 1.1]

3.1 Assume $U$ quasi-compact and let $W\subseteq X$ be a quasi-compact open containing $x$. Then $X=U\cup W$, and $U\cap W=W\setminus\{x\}$ is quasi-compact by quasi-separatedness. The K-localization/open-descent supplier in [F5] and the actual derived motivic descent in [F6] therefore apply to the same four qcqs opens. The conditional excision lemma of [F6] identifies the support fibers on $X$ and $W$; for K-theory these are also the category-defined support spectra by [F5]. Naturality of step 2.2 gives the commuting squares of supported Chern operations under these excision equivalences, compatible with forgetting support. [A1, F5, F6, step 2.2]

4.1 Under the additional classical-comparison hypotheses, every object of the stated smooth finite-presentation qcqs site over $V$ is smooth finite type over the perfect field $k$. The same holds for its quasi-compact opens, including $V\setminus\{x\}$, since $V$ is noetherian. Thus [F2] applies naturally to the coefficient restriction diagram on $(V,x)$. It preserves products and the actual Picard first class, so the supplied operation-transport square identifies the projective-relation universal classes, their completed pointed K-space maps, and their support fibers. By step 2.2 this is the restriction of the constructed operation; when $U$ is quasi-compact, step 3.1 makes it the asserted excision identification. In the article specialization, algebraic closedness implies perfectness, finite type over a field makes $X$ noetherian and $U$ quasi-compact, and the smooth locus near the stated point has an affine finite-type neighbourhood of pure dimension three. Hence the article's $i=3$ application satisfies all these hypotheses without narrowing the general qcqs construction. The same actual Picard operation is compared throughout; the name of a tautological line alone introduces no extra sign. [A1, F1, F2, F3, F5, step 1.1, step 2.2, step 3.1] ∎

The ordinary total-series constant is $c_0=1$. It is unpointed and is not asserted to give an additive-target support-fiber operation. The supported target in step 2.2 is the fiber of $\mathbb Z(i)_{\rm mot}[2i]$ under restriction; its zeroth homotopy is $H^{2i,i}_x(X)$ in the declared cohomological convention.


The current universal supplier supplies the formal completion construction and the actual full-space local model. The primary [Asakura–Sato journal version](https://www.ms.u-tokyo.ac.jp/journal/26-3-1.pdf) was read at the locators above to check its positive-index, support and geometric-scope qualifications; its full admissibility package is not imported. The [Spitzweck v3 orientation passage](https://arxiv.org/pdf/1207.4078v3), p. 79, classifies the tautological line itself. Its notation $\mathcal O(-1)$ does not alone establish a sign mismatch for the dual line. The actual comparison used here is the current supplied map preserving the specified Picard operation. The primary article's printed Definition 2.7 was checked against Definition 2.2 and the retained support-indexing clarification: the current local support convention explicitly supplies the $[2i]$ shift. That corrected application does not erase the historical source-notation concern. The cited completion, coefficient-comparison and spectrum foundations have not been independently reconstructed.

## Index convention
The ordinary total-series constant is $c_0=1$. It is unpointed and is not asserted to give an additive-target support-fiber operation. The supported target in step 2.2 is the fiber of $\mathbb Z(i)_{\rm mot}[2i]$ under restriction; its zeroth homotopy is $H^{2i,i}_x(X)$ in the declared cohomological convention.

## Source use and reading limits
The current universal supplier supplies the formal completion construction and the actual full-space local model. The primary [Asakura–Sato journal version](https://www.ms.u-tokyo.ac.jp/journal/26-3-1.pdf) was read at the locators above to check its positive-index, support and geometric-scope qualifications; its full admissibility package is not imported. The [Spitzweck v3 orientation passage](https://arxiv.org/pdf/1207.4078v3), p. 79, classifies the tautological line itself. Its notation $\mathcal O(-1)$ does not alone establish a sign mismatch for the dual line. The actual comparison used here is the current supplied map preserving the specified Picard operation. The primary article's printed Definition 2.7 was checked against Definition 2.2 and the retained support-indexing clarification: the current local support convention explicitly supplies the $[2i]$ shift. That corrected application does not erase the historical source-notation concern. The cited completion, coefficient-comparison and spectrum foundations have not been independently reconstructed.
