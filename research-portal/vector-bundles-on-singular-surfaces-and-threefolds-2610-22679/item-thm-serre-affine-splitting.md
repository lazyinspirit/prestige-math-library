---
title: Serre splitting above the dimension
status: published
research_item: thm-serre-affine-splitting
dependency_level: 3
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 1, introduction; PDF p. 12, application citing Ser58 §4 Theorem 1
      statement: The introduction recalls that a vector bundle of rank greater than
        the dimension of an affine scheme splits off a trivial line; page 12
        applies Serre splitting to rank-three bundles on an affine surface. The
        explicit iteration to rank d in this item is a local consequence, not a
        separately quoted article theorem.
      hypotheses: The recalled affine splitting claim is used here with a nonempty
        noetherian affine scheme of finite dimension and a bundle of constant
        rank strictly greater than that dimension. Choice is explicit in this
        item.
      reading_limits: Read the frozen extracted introduction on PDF page 1 and the
        Serre-splitting passages of the proof of Theorem A on PDF page 12. The
        original Ser58 paper was not read. No new defect finding about the
        article is inferred from this generated-content repair.
    - title: "The Stacks Project, More on Algebra, Section 15.129: Splitting off a
        free module"
      url: https://stacks.math.columbia.edu/tag/0GVC
      locator: Theorem 15.129.5; imported through
        thm-author-3af31ead36fb-serre-module-input
      statement: A finitely presented module over a ring with noetherian maximal
        spectrum of finite dimension e splits off a free line if at every
        maximal ideal its localization has a free direct summand of rank greater
        than e.
      hypotheses: Commutative unital ring; noetherian finite-dimensional maximal
        spectrum; finitely presented module; the specified strict local
        free-summand rank bound at every maximal ideal.
      reading_limits: Read the theorem statement and complete displayed proof at tag
        0GVC for this repair. Its cited Algebra Lemmas 10.9.9, 10.127.6,
        10.82.11 and 10.82.4, Lemma 15.129.2 and Proposition 15.129.4 were not
        independently read or reconstructed. The result is applied through the
        declared module supplier.
    - title: The Stacks Project, Properties of Schemes, Lemma 28.5.2
      url: https://stacks.math.columbia.edu/tag/01OW
      locator: Lemma 28.5.2 (tag 01OW), implication (1) to (2), and its displayed proof
      statement: For a locally noetherian scheme, the ring of sections on each affine
        open is noetherian.
      hypotheses: A locally noetherian scheme and an affine open subscheme.
      reading_limits: Read the statement and entire displayed proof. Its
        local-property criterion (Lemma 28.4.3), localization lemma (10.31.1),
        ring-locality lemma (10.23.2) and Definition 28.4.1 were not followed or
        reconstructed. Only implication (1) to (2) is imported here.
---

PDF p. 1: Serre splitting theorem

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)
- [lem-author-3af31ead36fb-finite-projective-presentation](item-lem-author-3af31ead36fb-finite-projective-presentation)
- [lem-author-3af31ead36fb-max-spectrum-dimension](item-lem-author-3af31ead36fb-max-spectrum-dimension)
- [lem-author-3af31ead36fb-local-rank](item-lem-author-3af31ead36fb-local-rank)
- [lem-author-3af31ead36fb-split-complement](item-lem-author-3af31ead36fb-split-complement)
- [lem-author-3af31ead36fb-iteration](item-lem-author-3af31ead36fb-iteration)
- [thm-author-3af31ead36fb-serre-module-input](item-thm-author-3af31ead36fb-serre-module-input)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)
- [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets)
- [math:lem-zariski-closed-set-axioms](https://alphabetamath.cc/item/lem-zariski-closed-set-axioms)
- [math:lem-every-zariski-closed-set-has-a-radical-defining-ideal](https://alphabetamath.cc/item/lem-every-zariski-closed-set-has-a-radical-defining-ideal)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals)
- [math:thm-proper-ideal-contained-in-maximal-ideal](https://alphabetamath.cc/item/thm-proper-ideal-contained-in-maximal-ideal)
- [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)
- [` The Stacks Project, More on Algebra, Section 15.129: Splitting off a free module · Theorem 15.129.5; imported through thm-author-3af31ead36fb-serre-module-input `](https://stacks.math.columbia.edu/tag/0GVC)
- [` The Stacks Project, Properties of Schemes, Lemma 28.5.2 · Lemma 28.5.2 (tag 01OW), implication (1) to (2), and its displayed proof `](https://stacks.math.columbia.edu/tag/01OW)


## Statement
Assume the Axiom of Choice. Let $X$ be a nonempty noetherian affine scheme of finite dimension $d\geq0$, and let $E$ be a vector bundle of constant rank $r>d$. Then $E\cong\mathcal O_X\oplus E_1$ for a vector bundle $E_1$ of rank $r-1$. More precisely, iteration gives $E\cong\mathcal O_X^{\oplus(r-d)}\oplus F$ for a vector bundle $F$ of rank $d$, hence at most $d$. On the empty affine scheme the corresponding splitting assertion is immediate because all sheaves of modules are zero.

A vector bundle means a finite locally free sheaf, and constant rank $r$ means that its local free rank is $r$ at every point. The dimension of $X$ is the supremum of the lengths of strict chains of irreducible closed subsets.

## External input

The coordinate-ring premise in [F8] is imported from Stacks Lemma 28.5.2 (tag 01OW), implication (1) to (2), without reconstructing its proof. The free-summand premise [F7] is Stacks Theorem 15.129.5 (tag 0GVC), supplied by [thm-author-3af31ead36fb-serre-module-input](item-thm-author-3af31ead36fb-serre-module-input). The argument below locally checks their hypotheses and composes them with the declared module results; its proof provenance describes that local argument.

## Facts & Assumptions

**Given:** $X$, $d$, $E$, $r$, and the Axiom of Choice as in the statement.

**Goal:** Split off a trivial line and iterate down to rank $d$.

[A1] The assumed Axiom of Choice is used through the affine bundle–module equivalence [F1], the local-rank and complement suppliers [F4]–[F6], the spectrum results [F9], and maximal-ideal existence [F10]. The presentation argument [F2] and the iteration itself are finite. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The affine bundle–module equivalence preserves finite direct sums and rank and sends the free module $A$ to $\mathcal O_{\operatorname{Spec}A}$. The global sections of a sheaf $E$ are denoted $\Gamma(X,E)=E(X)$. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

[F2] A finite projective module is finitely generated and has the lifting property through surjective module maps; it is finitely presented. [lem-author-3af31ead36fb-finite-projective-presentation](item-lem-author-3af31ead36fb-finite-projective-presentation)

[F3] For a nonzero noetherian ring of finite dimension $d$, the maximal spectrum is noetherian and has dimension at most $d$. [lem-author-3af31ead36fb-max-spectrum-dimension](item-lem-author-3af31ead36fb-max-spectrum-dimension)

[F4] The global sections of a rank-$r$ affine bundle form a finite projective module whose localizations at primes are free of rank $r$. Constant module rank $s$ means $P_{\mathfrak p}\cong A_{\mathfrak p}^{s}$ for every prime $\mathfrak p$; these are localizations at $A\setminus\mathfrak p$. [lem-author-3af31ead36fb-local-rank](item-lem-author-3af31ead36fb-local-rank)

[F5] If a finite projective constant-rank module splits off a free rank-one summand, its complementary module is finite projective of rank one less. [lem-author-3af31ead36fb-split-complement](item-lem-author-3af31ead36fb-split-complement)

[F6] A criterion splitting a free line from every finite projective module of rank greater than $d$ iterates down to rank $d$. [lem-author-3af31ead36fb-iteration](item-lem-author-3af31ead36fb-iteration)

[F7] Maximal ideals are prime. The imported Serre module theorem applies to a finitely presented module when the maximal spectrum is noetherian of finite dimension $e$ and every maximal localization has a free direct summand of rank greater than $e$. [thm-author-3af31ead36fb-serre-module-input](item-thm-author-3af31ead36fb-serre-module-input)


[F8] An affine scheme admits a presentation $X\cong\operatorname{Spec}A$, recovering $A$ as its ring of global sections. A noetherian scheme is locally noetherian and quasi-compact. Stacks Lemma 28.5.2, implication (1) to (2), says that the sections on any affine open of a locally noetherian scheme form a noetherian ring; this precise premise is recorded in External input. [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[F9] The points of $\operatorname{Spec}A$ are proper prime ideals and its closed sets are $V(I)=\{\mathfrak p:I\subseteq\mathfrak p\}$. An ideal is radical when containing a positive power of an element forces it to contain that element. For a closed subset $Z$, the intersection $I(Z)=\bigcap_{\mathfrak q\in Z}\mathfrak q$ is its unique radical defining ideal. A nonempty closed set is irreducible exactly when this defining ideal is prime. An irreducible subset is nonempty and cannot be expressed as a union of two proper relatively closed subsets. Ring Krull dimension is the supremum of lengths of strict prime-ideal chains. [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets) [math:lem-zariski-closed-set-axioms](https://alphabetamath.cc/item/lem-zariski-closed-set-axioms) [math:lem-every-zariski-closed-set-has-a-radical-defining-ideal](https://alphabetamath.cc/item/lem-every-zariski-closed-set-has-a-radical-defining-ideal) [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals) [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset) [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

[F10] Under Choice, every proper ideal in a nonzero commutative ring lies in a maximal ideal. [math:thm-proper-ideal-contained-in-maximal-ideal](https://alphabetamath.cc/item/thm-proper-ideal-contained-in-maximal-ideal)

[F11] Finite locally free sheaves have well-defined local rank; $\mathcal O_X^n$ has componentwise sections and restrictions. The sheaf axiom includes the empty cover of the empty open set. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank) [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)

## Proof

1.1 Choose an affine presentation $X\cong\operatorname{Spec}A$ and transport the bundle along it. By [F8], $A$ is noetherian. It is nonzero: otherwise [F9] gives no proper prime ideals and hence an empty spectrum, contrary to the hypothesis. For a prime $\mathfrak p$, the set $V(\mathfrak p)$ contains $\mathfrak p$, and the intersection of its points as prime ideals equals $\mathfrak p$; thus its radical defining ideal is $\mathfrak p$ and [F9] makes it irreducible. Conversely [F9] expresses every nonempty irreducible closed subset uniquely as $V(\mathfrak p)$. The definition of $V$ gives $\mathfrak p\subseteq\mathfrak q$ if and only if $V(\mathfrak q)\subseteq V(\mathfrak p)$: the reverse implication follows by taking the point $\mathfrak q\in V(\mathfrak q)$. Consequently reversing a strict chain preserves its length and gives a bijection between prime-ideal chains and irreducible-closed-set chains. Thus $\dim A=\dim X=d$. By [F3] the maximal spectrum is noetherian and has finite dimension $e\leq d$; it is nonempty by [F10] applied to $(0)$. For any finite projective $A$-module $M$ of constant rank $s>d$, [F2] gives finite presentation. At every maximal ideal, which is prime by [F7], the definition of constant rank in [F4] gives $M_{\mathfrak m}\cong A_{\mathfrak m}^{s}$, a free direct summand of itself with zero complement and rank $s>e$. Therefore [F7] gives $M\cong A\oplus M'$. This establishes the criterion required in [F6] for every such $M$. [A1, F2, F3, F4, F6, F7, F8, F9, F10, given]

2.1 By [F4], $P=\Gamma(X,E)$ is finite projective of constant rank $r$. Applying step 1.1 and then [F5] yields $P\cong A\oplus P'$ with $P'$ finite projective of constant rank $r-1$. Under [F1] this becomes $E\cong\mathcal O_X\oplus E_1$, with $E_1$ of rank $r-1$. Since the criterion of [F6] was established for every finite projective module of constant rank greater than $d$, [F6] also gives $P\cong A^{r-d}\oplus Q$ with $Q$ finite projective of constant rank $d$. Applying [F1] gives $E\cong\mathcal O_X^{\oplus(r-d)}\oplus F$ with $F$ of rank $d$, including $d=0$. Here finite powers and sums use componentwise operations, as in [F1], [F6] and [F11]. Finally, on the empty scheme the only open set is empty. The empty-cover sheaf axiom [F11] gives exactly one section for every sheaf there, so each sheaf of modules is the zero sheaf and the stated empty-case splitting follows. [A1, F1, F4, F5, F6, F11, step 1.1] ∎
