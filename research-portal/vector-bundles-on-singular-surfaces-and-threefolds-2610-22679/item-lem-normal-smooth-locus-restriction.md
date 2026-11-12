---
title: Smooth-locus restriction properties
status: published
research_item: lem-normal-smooth-locus-restriction
dependency_level: 4
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 3, Notation and conventions; pp. 9–10, preceding Lemma 5.1 and
        proofs of Lemmas 5.1 and 5.2; p. 15, proof of Theorem 6.7
      statement: The article uses smooth-locus restriction of global functions and
        units in the proof preceding Lemma 4.2, density for reduced schemes in
        Lemma 5.1, Picard restriction in Lemma 5.2, and the codimension bound on
        the singular locus in Theorem 6.7. This item supplies those geometric
        consequences under an explicit finite-type hypothesis; that hypothesis
        is part of the local scope correction, not a claim that the article
        states these lemmas only in that scope. The comparison with its Lemma
        5.1 setting applies only to schemes additionally of finite type over the
        same base field; reducedness and seminormality do not supply that
        hypothesis.
      hypotheses: "For the local conclusions: Choice, an algebraically closed field,
        and a finite-type scheme; reducedness for smooth density, and normality
        for the codimension, function, unit and Picard assertions. The article
        uses a broader standing qcqs setting in Section 5; this citation does
        not import its unrestricted smooth-locus inference."
      reading_limits: Read the frozen article text at PDF pp. 3, 9, 10 and 15 for the
        standing conventions, function/unit passage, Lemmas 5.1–5.2 and Theorem
        6.7 nonsmooth-locus application. No PDF-image verification or new
        original-author defect judgment is claimed. Read the current assigned
        mathematical body, its direct suppliers, and the two direct consumers
        for the applications in this repair. The proof is a local composition of
        the declared density, restriction and algebra suppliers, now including a
        locally proved generic-point chain correspondence. No article proof or
        additional literature theorem is imported as an unproved premise; deeper
        supplier-source proofs were not freshly reconstructed.
---

PDF p. 9: Functions on the smooth locus; PDF p. 10: Lemmas 5.1 and 5.2; PDF p. 15: Singular locus

## Prerequisites

- [def-article-conventions](item-def-article-conventions)
- [lem-perfect-base-smooth-density](item-lem-perfect-base-smooth-density)
- [lem-codimension-two-extension](item-lem-codimension-two-extension)
- [lem-codimension-two-picard-restriction](item-lem-codimension-two-picard-restriction)
- [math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct](https://alphabetamath.cc/item/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:thm-evaluation-kernel-and-minimal-polynomial](https://alphabetamath.cc/item/thm-evaluation-kernel-and-minimal-polynomial)
- [math:def-separable-elements-and-separable-extensions](https://alphabetamath.cc/item/def-separable-elements-and-separable-extensions)
- [math:def-repeated-root-and-separable-polynomial](https://alphabetamath.cc/item/def-repeated-root-and-separable-polynomial)
- [math:cor-factor-theorem-over-a-commutative-ring](https://alphabetamath.cc/item/cor-factor-theorem-over-a-commutative-ring)
- [math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)
- [math:def-irreducible-component-of-a-topological-space](https://alphabetamath.cc/item/def-irreducible-component-of-a-topological-space)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [lem-adjudicate-fc0ec1cc794d-scheme-codimension-conventions](item-lem-adjudicate-fc0ec1cc794d-scheme-codimension-conventions)


## Statement
Assume the Axiom of Choice. Let $k$ be an algebraically closed field and $X$ a finite-type $k$-scheme. If $X$ is reduced, its smooth locus $U$ is open and meets every irreducible component densely. In particular, this applies to those reduced seminormal schemes in the setting of Lemma 5.1 of the article that also satisfy the stated finite-type hypothesis over $k$. If $X$ is normal, then $U$ is dense, $X\setminus U$ has codimension at least two in every irreducible component, and restriction induces isomorphisms $\Gamma(X,\mathcal O_X)\cong\Gamma(U,\mathcal O_U)$ and $\Gamma(X,\mathcal O_X)^\times\cong\Gamma(U,\mathcal O_U)^\times$, as well as an injection $\operatorname{Pic}(X)\hookrightarrow\operatorname{Pic}(U)$.

Here algebraically closed means that every nonconstant polynomial over $k$ has a root in $k$. Finite type means that $X$ has a finite affine cover by spectra of finitely generated $k$-algebras. Reduced means that its local rings have no nonzero nilpotents; normal means that its local rings are integrally closed domains. The smooth locus is the set of points at which the structure morphism $X\to\operatorname{Spec}k$ is smooth. Codimension of a point in an irreducible component is the supremum of the lengths of strict chains of irreducible closed subsets from that component to the closure of the point; the codimension of a subset is the infimum of the codimensions of its points, with the empty subset assigned $+\infty$. A global unit is a global function with a multiplicative inverse. The Picard group is the group of isomorphism classes of line bundles, meaning locally free $\mathcal O_X$-modules of rank one, under tensor product. Restriction is induced by pulling back functions or line bundles along $U\hookrightarrow X$.

## Statement references

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)

[math:def-irreducible-component-of-a-topological-space](https://alphabetamath.cc/item/def-irreducible-component-of-a-topological-space)

[math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

## Facts & Assumptions

[F1] The article conventions specify the algebraically closed base field and scheme language ([def-article-conventions](item-def-article-conventions)).

[F2] Under the Axiom of Choice, the smooth locus of a reduced finite-type scheme over a perfect field is open and meets every irreducible component densely; for a normal such scheme its complement has codimension at least two in every component ([lem-perfect-base-smooth-density](item-lem-perfect-base-smooth-density)). A field is perfect when all its algebraic extensions are separable.

[F3] Under the Axiom of Choice, if $X$ is a noetherian normal scheme and an open immersion $j:U\hookrightarrow X$ contains all points of component codimension at most one, then $\mathcal O_X\to j_*\mathcal O_U$ is an isomorphism. Consequently global functions and global units restrict isomorphically ([lem-codimension-two-extension](item-lem-codimension-two-extension)).

[F4] Under the same hypotheses as [F3], restriction $\operatorname{Pic}(X)\to\operatorname{Pic}(U)$ is injective ([lem-codimension-two-picard-restriction](item-lem-codimension-two-picard-restriction)).

[F5] Every polynomial algebra in finitely many variables over a field is noetherian ([math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct](https://alphabetamath.cc/item/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct)).

[F6] Pointwise smoothness is the condition on a morphism of schemes supplied by [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes). Integrally closed domains are defined by closure under integral elements in their fraction fields ([math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)). An irreducible component is a maximal nonempty irreducible subset ([math:def-irreducible-component-of-a-topological-space](https://alphabetamath.cc/item/def-irreducible-component-of-a-topological-space)). An inclusion of an open subscheme is an open immersion ([math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)).

[F7] An extension is algebraic when every element is a root of a nonzero polynomial over the base field. An element algebraic over a field has a unique monic irreducible minimal polynomial, which vanishes at that element ([math:thm-evaluation-kernel-and-minimal-polynomial](https://alphabetamath.cc/item/thm-evaluation-kernel-and-minimal-polynomial)). A root $b$ of a polynomial over a field gives a factor $t-b$ ([math:cor-factor-theorem-over-a-commutative-ring](https://alphabetamath.cc/item/cor-factor-theorem-over-a-commutative-ring)). An algebraic element is separable when its minimal polynomial is separable, and an extension is separable when every element is separable ([math:def-separable-elements-and-separable-extensions](https://alphabetamath.cc/item/def-separable-elements-and-separable-extensions)). A polynomial is separable when it has no repeated root in any extension field; a repeated root $b$ means divisibility by $(t-b)^2$ ([math:def-repeated-root-and-separable-polynomial](https://alphabetamath.cc/item/def-repeated-root-and-separable-polynomial)).

[F8] A finitely generated $k$-algebra is a quotient of a polynomial algebra in finitely many variables over $k$ ([math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)). Every quotient of a noetherian commutative ring is noetherian ([math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations), clause 1). A scheme with a finite affine open cover by spectra of noetherian rings is noetherian ([math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)).

[F9] Under the Axiom of Choice, every nonempty irreducible closed subset of a scheme has a unique generic point. Taking generic points gives a length-preserving correspondence between strict descending chains of irreducible closed subsets from a component to the closure of a point and strict specialization chains from the component's generic point to that point ([lem-adjudicate-fc0ec1cc794d-scheme-codimension-conventions](item-lem-adjudicate-fc0ec1cc794d-scheme-codimension-conventions)). Thus the closed-subset codimension convention of [F2] and the Statement agrees with the specialization convention of [F3] and [F4].

[A1] The Axiom of Choice, asserting that every family of nonempty sets has a choice function, is assumed for [F2], [F3], [F4], and the affine generic-point input underlying [F9] ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

## Proof

**Given:** The Axiom of Choice, an algebraically closed field $k$, and a finite-type $k$-scheme $X$.

**Goal:** Prove the smooth-density assertion for reduced $X$ and the codimension, function, unit, and Picard assertions for normal $X$.

1.1 The field $k$ is perfect: if $L/k$ is algebraic and $a\in L$, [F7] gives its monic irreducible minimal polynomial $m_a\in k[t]$. Algebraic closedness gives a root $b\in k$, and [F7] gives a factor $t-b$. Irreducibility and monicity imply $m_a=t-b$, so $m_a(a)=0$ gives $a=b\in k$. A degree-one polynomial has no repeated root in any extension field, since it cannot have a degree-two factor. Thus $a$ is separable by [F7], and every algebraic extension of $k$ is separable. If $X$ is reduced, [F2] now shows that its smooth locus, with smoothness and components interpreted as in [F6], is open and meets every irreducible component densely. This applies in particular whenever a scheme in the article's seminormal setting is reduced and is of finite type over $k$; no further property of seminormality is used here. [F1, F2, F6, F7, A1, given]

2.1 Suppose $X$ is normal. Its local rings are domains, so have no nonzero nilpotents: if $r^n=0$ in a domain, repeated use of the absence of zero divisors gives $r=0$. Hence $X$ is reduced. Each coordinate ring in the finite affine cover from the finite-type hypothesis is a quotient of a finite-variable polynomial ring over $k$ by [F8]. By [F5] and the quotient assertion in [F8], each such coordinate ring is noetherian. The finite-cover criterion in [F8] therefore makes $X$ a noetherian normal scheme in the sense required by [F3] and [F4]. By [F2] and step 1.1, $U$ is open and dense and its complement has codimension at least two in every irreducible component. Apply [F9] to each irreducible component $C$ and each $x\in C$: the two codimension conventions have exactly the same finite chain lengths and hence the same supremum, including an unbounded supremum. Therefore every point of specialization codimension zero or one has closed-subset codimension zero or one and cannot lie in $C\setminus U$, whose infimum of point codimensions is at least two. Consequently $U$ contains every point of component codimension at most one in the precise convention of [F3] and [F4]. Its open subscheme inclusion $j:U\hookrightarrow X$ is an open immersion by [F6]. Apply [F3] to obtain $\mathcal O_X\cong j_*\mathcal O_U$ and its stated consequences on global functions and units. Applying [F4] to the same open immersion gives injectivity on Picard groups. Together with step 1.1 these are all the asserted conclusions. [F2, F3, F4, F5, F6, F8, F9, A1, step 1.1, given] ∎
