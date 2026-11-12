---
title: Third-stage graded isomorphism
status: published
research_item: lem-third-graded-isomorphism
dependency_level: 22
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: pp. 12–13, opening of Section 6; p. 9, Lemma 4.2
      statement: For a normal threefold in Section 6 the third-stage projection is an
        isomorphism, using the vanishing of the degree zero and degree minus one
        homotopy groups at stage four.
      hypotheses: The article uses its standing field and scheme conventions; Lemma
        4.2 states the relevant vanishing for Noetherian finite-dimensional
        schemes over a field.
      reading_limits: Read the frozen article extraction at PDF p. 9, Lemma 4.2 and
        its proof, and pp. 12–13, the opening third-stage projection and the
        following edge-map paragraph. The stage-four vanishings and the
        third-stage conclusion agree with those passages. The arbitrary-field
        Noetherian formulation, explicit foundational hypotheses, inline qcqs
        proof and local exact-sequence argument use the current declared
        suppliers; they are not attributed as verbatim article formulations. No
        fresh inspection or reconstruction of the suppliers’ external proofs is
        claimed.
---

PDF p. 12: Section 6 opening projection; PDF p. 13: Opening sentence

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence)
- [lem-high-filtration-vanishing](item-lem-high-filtration-vanishing)
- [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)
- [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:lem-inverse-of-bijective-group-homomorphism](https://alphabetamath.cc/item/lem-inverse-of-bijective-group-homomorphism)


## Statement
Assume the Axiom of Choice and the fixed compatible universe, smallness and pointed-space conventions of the supplied motivic, stable-spectra and shift-index constructions, including their required universe enlargements. Universe existence is an additional size assumption, separate from Choice. Let $X$ be a Noetherian scheme of Krull dimension $3$ over a field $k$. Then the actual third-stage projection followed by the graded comparison is an isomorphism
$$p_3:\pi_0F^3_{\mathrm{mot}}K(X)\xrightarrow{\ \cong\ }H^{6,3}_{\mathrm{mot}}(X,\mathbb Z).$$
In particular, this applies to the normal threefolds in Section 6 under the article's standing conventions.

A $k$-scheme is a scheme with a structure morphism to $\operatorname{Spec}k$. Noetherian means locally Noetherian and quasi-compact, equivalently admitting a finite affine open cover by spectra of Noetherian rings. Its Krull dimension is the supremum of lengths $s$ of strict chains $Z_0\subsetneq\cdots\subsetneq Z_s$ of nonempty irreducible closed subsets of its underlying Noetherian space; a one-member chain has length zero, and irreducible means not a union of two proper closed subsets. The condition $\dim X=3$ excludes the empty scheme.

Here $F^r_{\mathrm{mot}}K(X)$ is stage $r$ of the decreasing motivic filtration of the nonconnective $K$-theory spectrum of perfect complexes; its third graded spectrum is the cofiber of the transition $F^4_{\mathrm{mot}}K(X)\to F^3_{\mathrm{mot}}K(X)$. The map $p_3$ is induced by the canonical map from the third stage to this cofiber and the specified graded equivalence. For the weight-three motivic complex $C=\mathbb Z(3)_{\mathrm{mot}}(X)$, the group $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ means $H^6(C)$. The symbol $\pi_i$ denotes the $i$th stable homotopy group. No injectivity of the map from the third stage to $K(X)$ is asserted here.

## Statement references
[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-field](https://alphabetamath.cc/item/def-field)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

[def-motivic-filtration](item-def-motivic-filtration)

[def-motivic-cohomology](item-def-motivic-cohomology)

[prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence)

[lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index)

## Facts & Assumptions

**Given:** The Axiom of Choice, the compatible universe, smallness and pointed-space assumptions in the Statement, a field $k$, and a Noetherian $k$-scheme $X$ of Krull dimension $3$.

**Goal:** Prove that the actual third-stage projection $p_3$ is an isomorphism.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) specifies Choice, and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) specifies the universe closure conditions. Adopt the same compatible size assumptions as [lem-high-filtration-vanishing](item-lem-high-filtration-vanishing): nested universes $U\in V\in W$ with $\omega\in U$ and the field and scheme data in $U$, the unbounded derived enhancement of $V$-small abelian groups considered in $W$, and compatible enlargements for the spectral realizations. Retain the same smallness and pointed-space conventions in [def-stable-spectra-interface](item-def-stable-spectra-interface), [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index), [def-motivic-filtration](item-def-motivic-filtration) and [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence). These are assumed size bounds, not consequences of Choice. Choice is inherited in these constructions and in the Noetherian topological results used below.

[F1] Under [A1], [def-motivic-filtration](item-def-motivic-filtration) supplies the decreasing motivic tower on qcqs schemes over the specified field $k$, and [def-motivic-cohomology](item-def-motivic-cohomology) supplies the weight-three motivic complex and its degree-six cohomology. Take the specified arbitrary field $k$ in these fixed-field definitions, overriding the default algebraically closed field convention. [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the spectra, cofibers, integer stable homotopy groups and their functorial abelian group structures.

[F2] Under [A1], for a qcqs $k$-scheme, [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence) gives the actual cofiber triangle $F^4_{\mathrm{mot}}K(X)\to F^3_{\mathrm{mot}}K(X)\to\mathbb Z(3)_{\mathrm{mot}}(X)[6]$. Its specified realization $\mathcal U$ satisfies $\pi_n\mathcal U(C)=H^{-n}(C)$ and $\mathcal U(C[s])\simeq\mathcal U(C)[s]$ for the coherent derived complex $C$. Consequently, for $C=\mathbb Z(3)_{\mathrm{mot}}(X)$, the actual graded spectrum has $\pi_0\mathcal U(C[6])=H^0(C[6])=H^6(C)=H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$. The cochain reindexing $H^0(C[6])=H^6(C)$ is also the calculation supplied by [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index). Only that cochain calculation is used from the latter item; no equivalence between its sequential realization $HC$ and $\mathcal U(C)$ is assumed.

[F3] [lem-high-filtration-vanishing](item-lem-high-filtration-vanishing) states, for a Noetherian scheme of finite chain dimension $d$ over any field and under [A1], that $\pi_0F^i_{\mathrm{mot}}K(X)=0$ for $i>d$ and $\pi_jF^i_{\mathrm{mot}}K(X)=0$ for $i\ge d$ and $j<0$. These are stage groups, rather than merely image-filtration groups.

[F4] [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) gives the homotopy exact sequence of a filtered stage and its cofiber: the image of each map equals the kernel of the next.

[F5] [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) supplies a finite affine open cover by spectra of Noetherian rings. Under Choice, [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum) makes each chart a Noetherian space; by [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space), every ascending sequence of opens then stabilizes. [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact) makes every open subset of a Noetherian space quasi-compact, under Choice. By [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme), qcqs means that the underlying space and every intersection of two affine opens are quasi-compact.

[F6] [math:def-field](https://alphabetamath.cc/item/def-field) supplies the field notion, [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) specifies the structure morphism, and [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space) supplies the chain dimension used both here and in [F3].

[F7] [math:lem-inverse-of-bijective-group-homomorphism](https://alphabetamath.cc/item/lem-inverse-of-bijective-group-homomorphism) supplies the inverse homomorphism of a bijective group homomorphism.

## Proof

**Proof technique:** Verify the qcqs hypothesis, apply the homotopy exact sequence to the third graded cofiber and use the two stage-four vanishing statements.

1.1 Work under [A1]. Take a finite affine open cover $X=U_1\cup\cdots\cup U_n$ by spectra of Noetherian rings, as in [F5]; $n\geq1$ since $\dim X=3$. Each $U_i$ is a Noetherian space. Given an ascending sequence of opens $V_0\subseteq V_1\subseteq\cdots$ of $X$, its restrictions to $U_i$ stabilize at indices $N_i$. For $N=\max_i N_i$, all restrictions agree for indices at least $N$, so the opens themselves agree. Thus $|X|$ is Noetherian. By [F5], every open subset of $X$, including $X$ and every intersection of two affine opens, is quasi-compact. Consequently $X$ is qcqs. Its chain dimension is $3$ by [F6] and the given hypothesis. [A1, F5, F6, given, choose]

2.1 The tower and actual third graded cofiber in [F1] and [F2] now apply under [A1]. Write $G^3$ for that cofiber and $C=\mathbb Z(3)_{\mathrm{mot}}(X)$. The specified graded equivalence gives $G^3\simeq\mathcal U(C[6])$. The realization formula and cochain reindexing in [F2] therefore give the natural group isomorphism $\pi_0G^3\cong H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$. [A1, F1, F2, step 1.1]

3.1 The stage-index-$3$, homotopy-degree-$0$ instance of [F4] gives the exact segment $\pi_0F^4_{\mathrm{mot}}K(X)\longrightarrow\pi_0F^3_{\mathrm{mot}}K(X)\longrightarrow\pi_0G^3\longrightarrow\pi_{-1}F^4_{\mathrm{mot}}K(X)$. The middle arrow is the map induced by the canonical third-stage-to-cofiber map. [F4, step 2.1]

4.1 In [F3], take $d=3$ and $i=4$ under [A1]. Since $4>3$, the first group in step 3.1 is zero. Since $4\ge3$ and $-1<0$, the last group is also zero. Exactness makes the kernel of the middle arrow the image of the zero group, hence zero, and makes its image the kernel of a map to the zero group, hence all of $\pi_0G^3$. Thus the middle arrow is both injective and surjective. [A1, F3, step 1.1, step 3.1, algebra]

5.1 By [F7], the bijective middle homomorphism in step 4.1 is an isomorphism of groups. Compose it with the isomorphism of step 2.1. By definition this composite is $p_3$, so $p_3$ is an isomorphism. The article's normal threefold case is included because its schemes satisfy the stated Noetherian dimension-three hypotheses under the same foundational conventions; normality and algebraic closedness are not needed for this deduction. [F7, step 2.1, step 4.1] ∎
