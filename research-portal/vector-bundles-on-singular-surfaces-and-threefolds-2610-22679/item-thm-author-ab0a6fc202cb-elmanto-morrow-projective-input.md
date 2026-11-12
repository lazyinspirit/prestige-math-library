---
title: External projective bundle input for the actual motivic complex
status: published
research_item: thm-author-ab0a6fc202cb-elmanto-morrow-projective-input
dependency_level: 8
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1 PDF
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 5.24(2) and preceding projectivization convention, printed/PDF
        p.43; proof conclusion p.44.
      statement: The powers of the dual tautological first Chern class times pullback
        give the displayed finite-sum equivalence on a line-subbundle
        projectivization.
      hypotheses: Prime field Q or F_p; qcqs base scheme; finite locally free sheaf of
        constant positive rank r+1; j≥0; source line-subbundle convention.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the versioned primary PDF extraction at the projectivization
        convention and Theorem 5.24 on p.43 and its proof conclusion on p.44 for
        this repair. Import the projective-bundle theorem; its substantial proof
        and upstream inputs were not reconstructed. No visual inspection is
        claimed. The retraction and quotient dualization below are local
        arguments, not attributed verbatim to this theorem. Current maintenance
        read the assigned consumer and its exact declared supplier interfaces;
        no fresh primary-source or page-image reading, reconstruction or
        independent acceptance is claimed for this reference."
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1 PDF
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 1.1 opening and (1), p.3; Lemma 5.1, p.33; Definition 5.2, its
        following multiplicative discussion and (5.2), p.34; maps preceding
        Theorem 5.24, p.43.
      statement: The actual functor has natural pullbacks, a multiplicative structure
        and a natural first Chern class. Multiplication by its powers supplies
        the maps used here. Negative weights are set to zero.
      hypotheses: Qcqs schemes over Q or F_p; nonnegative motivic weights before the
        explicit zero extension; first Chern classes of line bundles.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read these primary v1 passages as extracted text for this repair,
        including Lemma 5.1, the complete Definition 5.2 and following
        multiplicative discussion. Use only the indicated operations and zero
        extension; their constructions and substantial proofs were not
        reconstructed. No visual inspection is claimed. Current maintenance read
        the assigned consumer and its exact declared supplier interfaces; no
        fresh primary-source or page-image reading, reconstruction or
        independent acceptance is claimed for this reference."
---

PDF p. 8: Computations after the splitting principle

## Prerequisites

- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme)
- [math:thm-projective-bundle-represents-line-quotients](https://alphabetamath.cc/item/thm-projective-bundle-represents-line-quotients)
- [math:lem-dual-locally-free-and-base-change](https://alphabetamath.cc/item/lem-dual-locally-free-and-base-change)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:prop-finite-biproducts-of-complexes-are-computed-degreewise](https://alphabetamath.cc/item/prop-finite-biproducts-of-complexes-are-computed-degreewise)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes, arXiv:2309.08463v1 PDF · Theorem 5.24(2) and preceding projectivization convention, printed/PDF p.43; proof conclusion p.44. `](https://arxiv.org/pdf/2309.08463v1)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes, arXiv:2309.08463v1 PDF · Theorem 1.1 opening and (1), p.3; Lemma 5.1, p.33; Definition 5.2, its following multiplicative discussion and (5.2), p.34; maps preceding Theorem 5.24, p.43. `](https://arxiv.org/pdf/2309.08463v1)


## Statement
Assume the Axiom of Choice throughout. Fix Grothendieck universes $U\in V\in W$ with $\omega\in U$, containing all fields, schemes and bundle data under consideration. Existence of these universes is a separate size assumption, inherited together with Choice from the actual motivic-complex supplier.

Let $\mathbb F=\mathbb Q$ or $\mathbb F_p$, let $X$ be a qcqs $\mathbb F$-scheme, and let $E$ be finite locally free of constant rank $r+1>0$. Here qcqs means quasi-compact and quasi-separated. Write $\mathbb Z(t)_{\mathrm{mot}}$ for the actual contravariant Elmanto–Morrow derived-complex functor, with its source multiplicative structure and natural first Chern operation. For $j\geq0$, the map
$$\Phi:\bigoplus_{s=0}^{r}\mathbb Z(j-s)_{\mathrm{mot}}(X)[-2s]\xrightarrow{\sum c_1(\mathcal O(1))^s\pi^*}\mathbb Z(j)_{\mathrm{mot}}(\mathbb P_{\mathrm{sub},X}(E))$$
is an equivalence of derived complexes. The source projectivization $\pi$ classifies locally split line subbundles of $E$, and $\mathcal O(1)$ is the dual of its tautological line. Negative-weight complexes in this formula are zero by the source convention. Pullback $\pi^*$ is evaluation of the actual contravariant functor on $\pi$; the summand map is its composition with multiplication by the $s$-th power of that first Chern class. For $s=0$ this multiplication is the identity. Consequently the actual pullback has a retraction in $D(\mathbb Z)$.

Here $D(\mathbb Z)$ is the homotopy category of the supplied derived enhancement of cochain complexes of $V$-small abelian groups, considered in $W$, with quasi-isomorphisms inverted. The shift convention is $C[n]^a=C^{a+n}$ with differential $(-1)^n d_C$. The finite direct sum carries its degreewise coordinate inclusions and projections.

For the native quotient-convention application, retain the same global Choice and universe assumptions; Choice is also inherited from the library's relative Proj construction. If $G$ is finite locally free of constant rank $r+1>0$, the same formula and retraction hold for $\mathbb P_X(G)$ in that convention: apply the subbundle formula to $E=G^\vee$. The canonical identification with $\mathbb P_{\mathrm{sub},X}(G^\vee)$ preserves the projection and identifies its $\mathcal O(1)$ with the native tautological quotient.

## Statement references
[lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:prop-finite-biproducts-of-complexes-are-computed-degreewise](https://alphabetamath.cc/item/prop-finite-biproducts-of-complexes-are-computed-degreewise)

[math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme)

[math:thm-projective-bundle-represents-line-quotients](https://alphabetamath.cc/item/thm-projective-bundle-represents-line-quotients)

[math:lem-dual-locally-free-and-base-change](https://alphabetamath.cc/item/lem-dual-locally-free-and-base-change)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

## Source contract
The prime field, qcqs condition, positive constant rank and nonnegative weight are exactly those of the imported theorem. No smoothness, regularity, noetherianity, finite-type or dimension hypothesis is imposed. The actual complex and its pullback are supplied by the existing prime-field functor, with its global Choice and containing-universe assumptions [A1], not an arbitrary theory satisfying abstract projective-bundle axioms. Native projectivization also uses this Choice assumption. These standing foundational assumptions belong to the declared suppliers; they add no geometric restriction to the imported theorem. No finite-clopen detection assertion is inferred from the abstract projective-bundle contract.

## External input
Import the equivalence [F1] and the operations and zero extension [F2] from the two statement-bearing references, respectively. Their substantial proofs are not reconstructed here. The subsequent proof only derives the retraction and transports the formula to the native quotient convention; those arguments are locally supplied.

## Facts & Assumptions
[F1] Elmanto–Morrow, Theorem 5.24(2), supplies the displayed equivalence in its line-subbundle convention, under exactly the stated prime-field, qcqs, rank and weight hypotheses (reference 0).

[F2] Lemma 5.1 and Definition 5.2 supply the natural first Chern class of a line bundle. The following multiplicative discussion, together with the maps preceding Theorem 5.24, supplies the multiplication maps in $\Phi$. A first Chern class has cohomological degree two and weight one, so its $s$-fold action has map type $\mathbb Z(t)_{\mathrm{mot}}(T)[-2s]\to\mathbb Z(t+s)_{\mathrm{mot}}(T)$ for nonnegative $t,s$. For a negative source weight the summand map is the zero map from the zero object. The zero-power action is the identity. These are the operations and conventions imported from reference 1.

[F3] Under the global Choice and universe assumptions [A1], the actual $D(\mathbb Z)$-valued functor on qcqs prime-field schemes with data in $U$, and its restriction to field-schemes, are supplied by [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes). Its natural morphism on a scheme map is the pullback used here. The qcqs object condition is [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme).

[F4] Finite locally free means locally a finite free module sheaf; a line bundle means rank one. The dual $E^\vee=\mathcal H om(E,\mathcal O_X)$ is finite locally free of the same rank, evaluation gives biduality, and duality commutes with arbitrary scheme pullback. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank), [math:lem-dual-locally-free-and-base-change](https://alphabetamath.cc/item/lem-dual-locally-free-and-base-change)

[F5] The native projective bundle is $\mathbb P_X(G)=\operatorname{Proj}_X\operatorname{Sym}(G)$, with tautological quotient $\pi^*G\twoheadrightarrow\mathcal O(1)$. Over every $f:T\to X$ it represents invertible quotients of $f^*G$ up to isomorphism, naturally in $T$. [math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme), [math:thm-projective-bundle-represents-line-quotients](https://alphabetamath.cc/item/thm-projective-bundle-represents-line-quotients)

[F6] The derived category and its cochain shifts are as in [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category), with the $V$-small coefficient groups and ambient universe $W$ supplied by [F3] under [A1]. Finite direct sums of complexes are formed degreewise, with coordinate inclusion $i_0$ and projection $p_0$ satisfying $p_0i_0=1$; these chain-map identities persist upon localization. [math:prop-finite-biproducts-of-complexes-are-computed-degreewise](https://alphabetamath.cc/item/prop-finite-biproducts-of-complexes-are-computed-degreewise)

[A1] Assume the Axiom of Choice for the whole statement, meaning that every family of nonempty sets has a choice function. Fix Grothendieck universes $U\in V\in W$ with $\omega\in U$ and all relevant field, scheme and bundle data in $U$; their existence is a separate size assumption. These are the standing hypotheses of the actual motivic-complex supplier in [F3], where Choice is inherited through the unbounded derived enhancement and its resolution and model constructions. Choice is also inherited from relative Proj and the selection of trivializing covers in [F5]. The finite coordinate calculation below requires no additional choice. [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

## Proof
**Given:** The global Choice and universe assumptions [A1], and the prime field, qcqs scheme, positive constant rank and weight in the Statement, with all relevant field, scheme and bundle data in $U$.

**Goal:** Derive the pullback retraction and the native-convention application from the explicit imported equivalence.

1.1 Under [A1], by [F1] and [F2], $\Phi$ is an equivalence with $\Phi i_0=\pi^*$, since its zero-power action is the identity and [F3] identifies its pullback with the actual functor map. In $D(\mathbb Z)$ put $\rho=p_0\Phi^{-1}$. Then $\rho\pi^*=p_0\Phi^{-1}\Phi i_0=p_0i_0=1$ by [F6]. This proves the claimed retraction for every nonnegative weight, including zero with the stated vanishing of negative summands. [F1, F2, F3, F6, A1]

2.1 For a test scheme $f:T\to X$, a quotient $f^*G\twoheadrightarrow L$ with $L$ a line bundle splits locally: trivialize $G,L$ near a point and write the surjection as a row $(a_0,\ldots,a_r)$; some $a_k$ is a unit near that point, and $a_k^{-1}e_k$ lifts the frame of $L$, while $e_i-a_i a_k^{-1}e_k$ for $i\ne k$ is a free basis of its kernel. Dualizing this local direct-sum decomposition gives a locally split line subbundle $L^\vee\hookrightarrow f^*(G^\vee)$. Conversely a locally split line subbundle $M\hookrightarrow f^*(G^\vee)$ dualizes to the quotient $f^*G\twoheadrightarrow M^\vee$. By [F4], biduality makes these operations inverse on isomorphism classes, and pullback compatibility makes them natural in $T$. Apply the representing properties in [F1] and [F5] to the universal bundles: they give inverse scheme morphisms over $X$, because each composite recovers the same universal subbundle or quotient. The source tautological subline becomes $L^\vee$, so its dual $\mathcal O(1)$ becomes exactly $L$, the native universal quotient. Under [A1] these native objects exist as specified in [F5]; [F4] gives $G^\vee$ the required positive constant rank. Thus [F1] applies to $G^\vee$, and naturality of [F2] and [F3] transports both its map and the retraction from step 1.1 to the native bundle. [F1, F2, F3, F4, F5, A1, step 1.1] ∎
