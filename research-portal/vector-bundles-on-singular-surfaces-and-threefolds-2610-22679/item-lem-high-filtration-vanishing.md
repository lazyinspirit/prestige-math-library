---
title: High filtration vanishing
status: published
research_item: lem-high-filtration-vanishing
dependency_level: 21
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 9, Lemma 4.2 and proof
      statement: For a Noetherian scheme of dimension d over a field, the indicated
        negative homotopy groups vanish at stages i at least d, and degree zero
        vanishes at stages i greater than d.
      hypotheses: A Noetherian scheme of finite dimension d over a field.
      reading_limits: Historical reading record inherited from the existing generated
        item; this dependency-declaration maintenance does not assert fresh
        reading of that external source. Read the supplied frozen article
        extraction at PDF p. 9, Lemma 4.2 and its entire proof. The two
        stage-group conclusions and the descending-surjection argument are
        retained. The explicit foundational hypotheses, geometric scope check,
        empty-scheme convention and finite affine-dimension check are local
        clarifications using the declared suppliers. The deep motivic
        constructions and dimension/boundedness results are used through their
        current interfaces; no fresh reading or reconstruction of their external
        proofs is claimed.
---

PDF p. 9: Lemma 4.2

## Prerequisites

- [def-motivic-filtration](item-def-motivic-filtration)
- [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence)
- [thm-motivic-dimension-vanishing](item-thm-motivic-dimension-vanishing)
- [prop-filtration-eventual-vanishing](item-prop-filtration-eventual-vanishing)
- [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)
- [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)
- [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:lem-chain-dimension-open-cover](https://alphabetamath.cc/item/lem-chain-dimension-open-cover)
- [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)


## Statement
Assume the Axiom of Choice and the fixed compatible universe, smallness and pointed-space conventions of the motivic, stable-spectra and shift-index constructions, including their required universe enlargements. Universe existence is an additional size assumption, separate from Choice. Let $X$ be a Noetherian scheme of finite Krull dimension $d$ over an arbitrary field $k$, and let $i$ and $j$ be integers. For its actual decreasing motivic filtration,
$$\pi_jF^i_{\mathrm{mot}}K(X)=0\quad\text{if }i\geq d\text{ and }j<0,$$
and
$$\pi_0F^i_{\mathrm{mot}}K(X)=0\quad\text{if }i>d.$$
Here Noetherian means locally Noetherian and quasi-compact, equivalently admitting a finite affine open cover by spectra of Noetherian rings. For nonempty $X$, $d=\dim|X|$ is the finite supremum of lengths of strict chains of nonempty irreducible closed subsets of its underlying space; a one-member chain has length zero, and irreducible means not a union of two proper closed subsets. Set $\dim\varnothing=-\infty$, so either bound on $i$ holds for every integer when $X$ is empty. In that case all integer-indexed stage spectra are zero.

A $k$-scheme means a scheme with a structure morphism to $\operatorname{Spec}k$. The spectrum $F^i_{\mathrm{mot}}K(X)$ is stage $i$ of the specified tower on nonconnective $K$-theory, and $\pi_j$ is its $j$th stable homotopy group, an abelian group. These are assertions about the stage groups themselves, not merely their images in $K_j(X)$. The field is arbitrary; in applying the fixed-field definitions below, take the standing field to be $k$.

## Statement references
[def-motivic-filtration](item-def-motivic-filtration)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

[lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index)

[thm-motivic-dimension-vanishing](item-thm-motivic-dimension-vanishing)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

## Facts & Assumptions
**Given:** Choice, the compatible size and pointed-space assumptions in the Statement, the stated Noetherian finite-dimensional $k$-scheme $X$, and integers in either of the two stated ranges.

**Goal:** Prove the two stage-group vanishing assertions, retaining the empty case and the arbitrary-field scope.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) specifies Choice. [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) specifies the universe closure convention. In particular use nested universes $U\in V\in W$ with $\omega\in U$ and field and scheme data in $U$, and the unbounded derived enhancement of $V$-small abelian groups considered in $W$, as required by [thm-motivic-dimension-vanishing](item-thm-motivic-dimension-vanishing). Use compatible enlargements for the spectral realizations, with the same smallness and pointed-space conventions throughout [def-stable-spectra-interface](item-def-stable-spectra-interface), [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index), [def-motivic-filtration](item-def-motivic-filtration) and [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence). These are assumed size bounds, not consequences of Choice. Choice is inherited in those constructions and in the Noetherian topological results below; the finite descending-surjection argument makes no additional choices of models or resolutions.

[F1] [def-motivic-filtration](item-def-motivic-filtration) supplies the actual integer-indexed decreasing tower on qcqs schemes over an arbitrary specified field, under [A1]. [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies its zero spectrum and integer stable homotopy groups.

[F2] For $r\geq0$, [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence) identifies the actual cofiber of $F^{r+1}_{\mathrm{mot}}K(X)\to F^r_{\mathrm{mot}}K(X)$ with $\mathbb Z(r)_{\mathrm{mot}}(X)[2r]$. The complex and the notation $H^{a,r}_{\mathrm{mot}}(X,\mathbb Z)=H^a(\mathbb Z(r)_{\mathrm{mot}}(X))$ are those of [def-motivic-cohomology](item-def-motivic-cohomology), restricted from the prime field of $k$. By [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index), the $j$th homotopy group of that cofiber is $H^{2r-j,r}_{\mathrm{mot}}(X,\mathbb Z)$.

[F3] [thm-motivic-dimension-vanishing](item-thm-motivic-dimension-vanishing) gives $H^{a,r}_{\mathrm{mot}}(X,\mathbb Z)=0$ for a Noetherian equicharacteristic scheme of finite chain dimension $d$, $r\geq0$ and $a>r+d$, under [A1]. Its equicharacteristic condition means a global factorization through $\operatorname{Spec}\mathbb Q$ or $\operatorname{Spec}\mathbb F_p$ for one prime $p$.

[F4] Put $\operatorname{gr}^r_{\mathrm{mot}}K(X)=\operatorname{cofib}(F^{r+1}_{\mathrm{mot}}K(X)\to F^r_{\mathrm{mot}}K(X))$. [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) gives exactness of $\pi_jF^{r+1}\to\pi_jF^r\to\pi_j\operatorname{gr}^r$: the image of each map is the kernel of the next. [prop-filtration-eventual-vanishing](item-prop-filtration-eventual-vanishing) gives, for each fixed $j$, vanishing of $\pi_jF^N_{\mathrm{mot}}K(X)$ at every sufficiently large integer $N$ on a finite-dimensional Noetherian equicharacteristic scheme, under the same compatible size assumptions. It also gives zero stages on the empty scheme at every integer index. Its nonempty dimension convention is the supremum of affine coordinate-ring prime-chain dimensions; only finiteness of that number is needed here.

[F5] [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) supplies a finite affine open cover by spectra of Noetherian rings. Under Choice, [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum) makes each such chart a Noetherian space, meaning every ascending sequence of opens stabilizes as in [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space). [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact) makes every open subset of a Noetherian space quasi-compact. By [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme), qcqs means that the underlying space is quasi-compact and every intersection of two affine opens is quasi-compact. [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space) supplies the chain dimension and empty-space convention in the Statement.

[F6] [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) specifies structure morphisms. [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification) gives a unit-preserving embedding $F\hookrightarrow k$ from $F=\mathbb Q$ or $F=\mathbb F_p$ for a prime $p$. [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence) sends it to $\operatorname{Spec}k\to\operatorname{Spec}F$, and identifies the ring of any affine chart with its global sections. Composing structure morphisms gives the required global prime-field factorization without changing the underlying scheme.

[F7] [math:lem-chain-dimension-open-cover](https://alphabetamath.cc/item/lem-chain-dimension-open-cover) gives $\dim|X|=\sup_\alpha\dim|U_\alpha|$ for an open cover of a Noetherian space. For a nonempty affine chart $U=\operatorname{Spec}A$, [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals) identifies its irreducible closed subsets with vanishing sets of prime ideals, reversing inclusion and preserving strictness. Thus its chain dimension is the prime-chain dimension of $A$ in [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring).

## External input
Reference 0 records the two conclusions and the descending-surjection argument of the article's Lemma 4.2, PDF p. 9. The deep motivic premises are used through [F1]–[F4]; the scope check and application below are local deductions. No new external theorem or reconstruction of a supplier's external proof is claimed.

## Proof
1.1 Work under [A1]. If $X$ is empty, [F4] gives zero stages at every integer index, proving all assertions. Otherwise choose the finite Noetherian affine cover in [F5]. Any ascending sequence of opens of $|X|$ stabilizes on each chart, hence stabilizes globally by taking the maximum of the finitely many stabilization indices. Thus $|X|$ is Noetherian. Every open subset of $|X|$ is quasi-compact by [F5]; applying this to $X$ and to intersections of affine opens proves that $X$ is qcqs. The chain dimension $d$ of [F5] is a nonnegative integer. By [F7], every nonempty affine open has chain dimension at most $d$ (apply the open-cover formula to the cover consisting of that open and $X$), hence by [F6]–[F7] its intrinsic coordinate ring has prime-chain dimension at most $d$. The supremum of these nonempty affine-ring dimensions is therefore finite; empty affine opens contribute only the eventual-vanishing supplier's stipulated value $-1$. This discharges that supplier's finiteness hypothesis without equating empty-dimension conventions. Finally [F6] equips $X$ with the global prime-field factorization. The actual tower and complexes in [F1]–[F4] are the same restrictions to this $k$-scheme, and their Choice and size hypotheses are [A1], so all the indicated premises apply. [A1, F1, F2, F3, F4, F5, F6, F7, given, choose]

2.1 Fix either $j<0$ and $i\geq d$, or $j=0$ and $i>d$. For every integer $r\geq i$, we have $r\geq0$ and $2r-j>r+d$: in the first case $r-d\geq0$ and $-j>0$, and in the second case $r-d>0$. By [F2] and [F3], $\pi_j\operatorname{gr}^r_{\mathrm{mot}}K(X)=0$. Exactness in [F4] makes every transition $\pi_jF^{r+1}_{\mathrm{mot}}K(X)\to\pi_jF^r_{\mathrm{mot}}K(X)$ surjective: its image is the kernel of the map to the zero group, namely the whole target. Choose $N\geq i$ large enough that $\pi_jF^N_{\mathrm{mot}}K(X)=0$ by [F4]. The finite composite of these surjections from stage $N$ to stage $i$ is surjective, so its target is zero; if $N=i$, the target is already zero. This proves both stage-group vanishing assertions in their full stated ranges. [A1, F2, F3, F4, given, step 1.1, algebra, choose] ∎
