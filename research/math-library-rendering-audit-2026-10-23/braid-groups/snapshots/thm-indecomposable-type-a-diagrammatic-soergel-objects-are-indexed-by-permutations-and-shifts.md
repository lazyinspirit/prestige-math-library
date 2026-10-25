---
id: thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts
kind: theorem
title: "Indecomposable type-A diagrammatic Soergel objects are indexed by permutations and shifts"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces, def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor, def-type-a-reflection-realization-and-polynomial-ring, def-field, def-local-ring, lem-type-a-reduced-words-are-connected-by-braid-moves]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias–Williamson, Soergel Calculus, Theorem 6.11, Lemma 6.24, Theorem 6.25, PDF pp. 63–68"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Libedinsky, Gentle Introduction to Soergel Bimodules I, §5"
      url: "https://arxiv.org/pdf/1702.00039"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $n\ge2$, let $D$ be the type-A diagrammatic Soergel category over
$k=\mathbb Q$ and let $\operatorname{Kar}(D)$ be its Karoubi envelope
([[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]). Then
$\operatorname{Kar}(D)$ is a Krull–Schmidt category, and for every
$w\in S_n$ there is an indecomposable object $D_w$ of $\operatorname{Kar}(D)$,
unique up to isomorphism, characterised as follows: $D_w$ is a direct summand of
the Bott–Samelson object of any reduced word for $w$, and is not isomorphic to a
shift of a summand of the Bott–Samelson object of a reduced word for any
$v<w$; it does not depend on the chosen reduced word, and every indecomposable
object of $\operatorname{Kar}(D)$ is isomorphic to $D_w(d)$ for a unique pair
$(w,d)\in S_n\times\mathbb Z$. In particular the passage to isomorphism classes
of indecomposables up to shift is a bijection
$$S_n\longrightarrow\{\text{indecomposables of }\operatorname{Kar}(D)\text{ up to isomorphism and shift}\},\qquad w\mapsto D_w.$$

## Facts & Assumptions
**Given:** The diagrammatic category $D$ over $k=\mathbb Q$ with its presentation and its hom spaces, the words of $S_n$ in the Coxeter presentation, and the Bott–Samelson objects $B_{\underline x}$.

[F1] $k=\mathbb Q$ is a field, hence has the unique maximal ideal $(0)$, and $\mathbb Q=\varprojlim_n\mathbb Q/(0)^n$, so $\mathbb Q$ is a complete local ring ([[def-field]], [[def-local-ring]]).

[F2] The type-A realization of [[def-type-a-reflection-realization-and-polynomial-ring]] is faithful, reflection faithful, Demazure surjective and balanced, so the hypotheses of the diagrammatic theory of the sources hold; in particular the simple root $\alpha_s$ does not vanish and the Demazure operator is surjective onto $R^{s}$.

[F3] By [[thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces]] the hom spaces of $D$ are free graded left $R$-modules with bases of double leaves, and by the imported Theorem 6.11 of the sources the light-leaf maps $\mathrm{LL}_{\underline x,e}$ with $e$ a subexpression expressing a fixed $w\in S_n$ are $R$-linearly independent modulo the ideal of morphisms factoring through strictly lower elements.

[F4] Imported statement (Elias–Williamson, Lemma 6.24 with Theorem 6.25): if $k$ is a complete local ring and $D$ is $k$-linear with all degree-zero hom spaces finitely generated over $k$, then $\operatorname{Kar}(D)$ is Krull–Schmidt, and for every $w\in S_n$ and every reduced word $\underline w$ for $w$ there is a unique summand $\underline B_w$ of $B_{\underline w}$ which is not isomorphic to the shift of a summand of $B_{\underline v}$ for any reduced word $\underline v$ of an element $v<w$; this summand is independent of the reduced word up to isomorphism, and every indecomposable object of $\operatorname{Kar}(D)$ is a shift of one of the $\underline B_w$ ([[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]).

[F5] The local Coxeter presentation of [[lem-type-a-reduced-words-are-connected-by-braid-moves]] identifies products of simple reflections and their subexpressions in $S_n$. The Bruhat order $v<w$ refines the length order by Elias–Williamson §2.1, and every lower interval is finite because $S_n$ is finite.



## Proof

1.1 The coefficient ring is complete local: by [F1] the zero ideal of $\mathbb Q$ is its unique maximal ideal and $\mathbb Q$ is isomorphic to its own $\mathfrak m$-adic completion, so the hypothesis of the imported theorem [F4] is satisfied. [F1]

1.2 The realization hypotheses and the categorical setting: by [F2] the standard type-A realization is a Soergel realization in the sense of the sources, so the diagrammatic results [F3] and [F4] apply to $D$ over $k=\mathbb Q$; the Karoubi envelope $\operatorname{Kar}(D)$ is by construction a $k$-linear idempotent complete additive category. [F2]

1.3 Imported classification: by [F4] each $w\in S_n$ has the summand $\underline B_w$ of the Bott–Samelson object of any reduced word, characterised by excluding the shifts of summands of strictly lower elements, and every indecomposable of $\operatorname{Kar}(D)$ is a shift of one of these; the subexpression indexing is that of the double leaves of [F3], and the elements $w$ with their Bruhat order are those of [F5]. [F3, F4, F5]

2.1 Finiteness input for the imported lemma: by [F3] the hom space of any two Bott–Samelson objects is a free graded $R$-module on finitely many homogeneous generators. Each fixed-degree piece of $R=\mathbb Q[x_1,\ldots,x_n]$ is finite-dimensional over $k=\mathbb Q$, because it has only finitely many monomials of that degree; hence the degree-zero part of a finite direct sum of shifts of $R$ is finite-dimensional over $k$. Every object of $\operatorname{Kar}(D)$ is a summand of a finite direct sum of shifts of Bott–Samelson objects, so its degree-zero endomorphism space is a direct summand of such a finite-dimensional space. Together with the completeness of $k$ from step 1.1 and the $k$-linearity and idempotent completeness of step 1.2, this verifies the hypothesis set of the imported Krull–Schmidt lemma [F4]. [F2, F3, step 1.1, step 1.2]

2.2 Existence of $D_w$: for $w\in S_n$ and a reduced word $\underline w$ for $w$, the uniqueness and exclusion clauses of the imported classification statement [F4] produce the summand $\underline B_w$ of $B_{\underline w}$ that is not a shift of a summand of $B_{\underline v}$ for $v<w$; by the subexpression language of [F5] this $w$ is a well-defined element of $S_n$ and the comparison of elements in Bruhat order is meaningful. We rename $\underline B_w$ as $D_w$ in the library's notation. [F4, F5, step 1.3]

3.1 Krull–Schmidt: the imported Krull–Schmidt statement of [F4] applies because of steps 1.1–1.3; hence every object of $\operatorname{Kar}(D)$ is a finite direct sum of indecomposables with local endomorphism rings, uniquely up to isomorphism and order. [F4, step 1.1, step 2.1]

3.2 Reduced-word independence: by the independence clause of the imported classification statement [F4] the summand $\underline B_w$ of $B_{\underline w}$ does not depend on the reduced word $\underline w$ for $w$ up to isomorphism, so the object $D_w$ of step 2.2 is well defined; its uniqueness clause likewise rules out a second, non-isomorphic summand of $B_{\underline w}$ with the same exclusion property. [F4, step 2.2]

4.1 Classification: let $B$ be an indecomposable object of $\operatorname{Kar}(D)$; by [F4] it is isomorphic to a shift of some $\underline B_w$, i.e. to $D_w(d)$ for some $d\in\mathbb Z$; conversely every $D_w(d)$ is indecomposable because $D_w$ has a local endomorphism ring by step 3.1 and shifts are equivalences, hence preserve indecomposability. The pair $(w,d)$ is unique: injectivity of $w\mapsto D_w$ up to isomorphism and shift is part of the bijection statement of [F4]. Once $w$ is fixed, let $X=B_{\underline w}$ and realize $D_w=(X,e_w)$ for a nonzero degree-zero idempotent $e_w$. By [F3], $\operatorname{End}^{\bullet}_D(X)$ is a finite direct sum of shifts of the nonnegatively graded ring $R$, hence has a lower degree bound. The graded corner $e_w\operatorname{End}^{\bullet}_D(X)e_w=\operatorname{End}^{\bullet}(D_w)$ has the same lower bound. If a degree-zero isomorphism $D_w\cong D_w(d)$ existed for $d\ne0$, it and its inverse would give mutually inverse homogeneous elements of this corner of degrees $d$ and $-d$. Powers of the element of negative degree would be nonzero in arbitrarily negative degrees, a contradiction. Thus no nonzero shift fixes $D_w$, proving uniqueness of $d$ entirely inside the diagrammatic category. [F3, F4, step 3.1, step 3.2]

5.1 Conclusion: $\operatorname{Kar}(D)$ is Krull–Schmidt, the objects $D_w$ for $w\in S_n$ are the indecomposables up to shift, and the assignment $w\mapsto D_w$ is the stated bijection; the case $n\le1$ has a single indecomposable up to shift, the unit object (the empty Bott–Samelson object), and the statements hold trivially there. ∎ [step 3.1, step 3.2, step 4.1]
