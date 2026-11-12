---
title: Local application interface for a critical-rank cancellation theorem
status: published
research_item: lem-author-f08c343a07fc-cancel-cancellation-interface
dependency_level: 15
sources:
  references:
    - title: The Stacks Project, Lemma 28.5.2 (Tag 01OW)
      url: https://stacks.math.columbia.edu/tag/01OW
      locator: Lemma 28.5.2, implication (1) to (2), and its proof paragraph
      statement: A locally noetherian scheme has a noetherian ring of sections on each
        affine open subscheme.
      hypotheses: The ambient object is a scheme and is locally noetherian; the chosen
        open subscheme is affine. No finite-type, dimension, nonempty, or field
        hypothesis is imposed. The application here takes that affine open to be
        the entire affine scheme X.
      reading_limits: Read the four equivalent conditions, the final open-subscheme
        assertion and the proof paragraph on the exact Tag 01OW page. The cited
        local-property and algebra lemmas were not followed or reconstructed.
        Only implication (1) to (2) is imported; identifying the resulting
        section ring with A uses the declared affine-scheme definition. This is
        an external premise for a local cancellation argument, not a claimed
        local proof of the Stacks lemma.
---

## Prerequisites

- [lem-author-f08c343a07fc-cancel-module-classes](item-lem-author-f08c343a07fc-cancel-module-classes)
- [lem-author-f08c343a07fc-cancel-spectral-kzero-stability](item-lem-author-f08c343a07fc-cancel-spectral-kzero-stability)
- [lem-author-f08c343a07fc-cancel-cancellative-free-summands](item-lem-author-f08c343a07fc-cancel-cancellative-free-summands)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)
- [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module)
- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)
- [math:def-section-restriction-and-global-section](https://alphabetamath.cc/item/def-section-restriction-and-global-section)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)
- [` The Stacks Project, Lemma 28.5.2 (Tag 01OW) · Lemma 28.5.2, implication (1) to (2), and its proof paragraph `](https://stacks.math.columbia.edu/tag/01OW)


## Statement
Assume AC and the suitable universes used for the article's perfect K-theory construction. Let $X=\operatorname{Spec}A$ be noetherian affine and $r\geq0$. Suppose every constant-rank-$r$ finite projective $A$-module is cancellative in the free-stabilization sense. Then two rank-$r$ bundles $E,F$ on $X$ are isomorphic exactly when $[E]=[F]$ in the article\'s spectral $K_0(X)$.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated equivalence without changing its rank or scheme scope.

[A1] AC is assumed through the two affine class interfaces. Suitable universes are also assumed for the perfect K-theory construction; the universe closure convention does not assert their existence or derive it from AC. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[F1] Under AC, rank and isomorphism classes pass through the affine equivalence: the section modules of rank-$r$ bundles are constant-rank-$r$ finite projective modules, and module isomorphism is equivalent to bundle isomorphism. [lem-author-f08c343a07fc-cancel-module-classes](item-lem-author-f08c343a07fc-cancel-module-classes)

[F2] For a commutative unital noetherian ring $A$, under AC and the stated universes, spectral K-zero equality for bundles on $\operatorname{Spec}A$ is equivalent to $\Gamma(X,E)\oplus A^N\cong\Gamma(X,F)\oplus A^N$ for some integer $N\geq0$. [lem-author-f08c343a07fc-cancel-spectral-kzero-stability](item-lem-author-f08c343a07fc-cancel-spectral-kzero-stability)

[F3] Cancellative means that for every finite projective $Q$ and integer $N\geq0$, $P\oplus A^N\cong Q\oplus A^N$ implies $P\cong Q$. Use the same supplier's explicit conventions for finite generation, unital modules, tuple modules $A^N$, binary direct sums and module isomorphisms, including $A^0=0$. Projectivity is the lifting property through surjective module homomorphisms. [lem-author-f08c343a07fc-cancel-cancellative-free-summands](item-lem-author-f08c343a07fc-cancel-cancellative-free-summands) [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module)

[F4] A noetherian scheme is locally noetherian and quasi-compact. An affine scheme is quasi-separated, so our $X$ is quasi-compact and quasi-separated, as required by the bundle-class definition. A commutative ring is noetherian when every ideal is finitely generated. [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated) [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)

[F5] The affine-spectrum convention takes $A$ to be commutative with $1$. In the chosen affine presentation, $A$ is canonically the ring $\Gamma(X,\mathcal O_X)$. The whole scheme $X$ is an affine open subscheme of itself. Apply the imported implication in External input to this open after [F4] supplies local noetherianity. [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum) [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[F6] A finite projective module has constant rank $r$ when its free localization at every prime has rank $r$; this rank is well-defined and is preserved by the bundle–module equivalence. The finite-projective and bundle conventions are explicitly stated in the affine interface. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

[F7] A rank-$r$ bundle is locally isomorphic to $\mathcal O_X^r$, and bundle isomorphisms are invertible $\mathcal O_X$-linear maps. Here $r$ is a nonnegative integer. The notation $[E]$ means the object class of $E[0]$ in $K_0(X)=\pi_0\mathbb K(\operatorname{Perf}(X))$, invariant under bundle isomorphism, with the stated AC and universe assumptions. [def-vector-bundle-classes](item-def-vector-bundle-classes)

[F8] The global-section notation is $\Gamma(X,E)=E(X)$; its $A$-module structure and the rank-preserving passage from bundles are supplied by the affine interface. [math:def-section-restriction-and-global-section](https://alphabetamath.cc/item/def-section-restriction-and-global-section) [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

## Proof

1.1 By [F4], $X$ is locally noetherian and is in the quasi-compact, quasi-separated scope of [F7]. The imported implication and [F5], with the affine open equal to $X$, make $A\cong\Gamma(X,\mathcal O_X)$ a noetherian ring. Thus the ring hypothesis of [F2] is satisfied. Suppose $[E]=[F]$, and put $P=\Gamma(X,E)$ and $Q=\Gamma(X,F)$ as in [F8]. By [F1] and [F6] they are constant-rank-$r$ finite projective modules. Under [A1], [F2] gives an integer $N\geq0$ with $P\oplus A^N\cong Q\oplus A^N$. The given cancellativity hypothesis, interpreted by [F3], gives $P\cong Q$. By [F1], $E\cong F$. [A1, F1, F2, F3, F4, F5, F6, F7, F8, given]

2.1 If $E\cong F$, then [F1] gives $P\cong Q$. With $A^0=0$ as in [F3], this is precisely the common free stabilization with $N=0$. Apply the reverse implication of [F2], whose ring and universe hypotheses were checked in step 1.1, to obtain $[E]=[F]$ in the spectral group interpreted by [F7]. Together with step 1.1 this proves both directions, including $r=0$ and the empty affine scheme. [A1, F1, F2, F3, F7, step 1.1] ∎

## External input

For a locally noetherian scheme, taking sections of its structure sheaf over any affine open gives a noetherian ring. We import this implication from [The Stacks Project, Lemma 28.5.2(1) to (2), Tag 01OW](https://stacks.math.columbia.edu/tag/01OW). Its proof is not reconstructed here. For the use in step 1.1 the chosen open is the entire $X$, and [F5] supplies the coordinate-ring identification. The cancellation equivalence proved above is the local consequence of this premise and [F1]–[F3].
