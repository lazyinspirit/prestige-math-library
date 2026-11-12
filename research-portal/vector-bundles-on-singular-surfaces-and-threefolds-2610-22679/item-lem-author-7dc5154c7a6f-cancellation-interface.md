---
title: Local application interface for a critical-rank cancellation theorem
status: published
research_item: lem-author-7dc5154c7a6f-cancellation-interface
dependency_level: 15
sources:
  references:
    - title: The Stacks Project, Noetherian schemes
      url: https://stacks.math.columbia.edu/tag/01OW
      locator: Lemma 28.5.2, Tag 01OW, implication (1) => (2)
      statement: If X is locally noetherian and U is an affine open subscheme of X,
        then the ring of sections O_X(U) is noetherian.
      hypotheses: X is a scheme, X is locally noetherian, and U is affine and open in X.
      reading_limits: Read the displayed lemma and its proof paragraph at Tag 01OW.
        The cited algebra and locality lemmas were not opened or reconstructed.
        Only implication (1) => (2) is imported.
---

## Prerequisites

- [lem-author-7dc5154c7a6f-module-classes](item-lem-author-7dc5154c7a6f-module-classes)
- [lem-author-7dc5154c7a6f-spectral-kzero-stability](item-lem-author-7dc5154c7a6f-spectral-kzero-stability)
- [lem-author-7dc5154c7a6f-cancellative-free-summands](item-lem-author-7dc5154c7a6f-cancellative-free-summands)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)
- [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)
- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)
- [` The Stacks Project, Noetherian schemes · Lemma 28.5.2, Tag 01OW, implication (1) => (2) `](https://stacks.math.columbia.edu/tag/01OW)


## Statement
Assume AC and the suitable universes of the article's perfect K-theory construction. Let $X=\operatorname{Spec}A$ be noetherian affine and $r\geq0$. Suppose every constant-rank-$r$ finite projective $A$-module is cancellative in the free-stabilization sense. Then two rank-$r$ bundles $E,F$ on $X$ are isomorphic exactly when $[E]=[F]$ in the article\'s spectral $K_0(X)$.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[A1] AC is assumed for the affine correspondence and spectral comparison used below. The suitable universes satisfy the supplied closure convention and the size bounds of those suppliers; their existence is assumed separately from AC. No further choice assumption is introduced by this composition. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[F1] On an affine scheme, taking sections identifies rank-$r$ bundle isomorphism classes with constant-rank-$r$ finite projective module isomorphism classes, in both directions. Write $P=\Gamma(X,E)$ and $Q=\Gamma(X,F)$. [lem-author-7dc5154c7a6f-module-classes](item-lem-author-7dc5154c7a6f-module-classes)

[F2] For a commutative unital noetherian ring $A$, under [A1], equality of the spectral classes of $E,F$ on $\operatorname{Spec}A$ is equivalent to $P\oplus A^N\cong Q\oplus A^N$ for some integer $N\geq0$, including $N=0$. [lem-author-7dc5154c7a6f-spectral-kzero-stability](item-lem-author-7dc5154c7a6f-spectral-kzero-stability)

[F3] A finite projective module is finitely generated and has the lifting property through surjective module homomorphisms. Here cancellative means that, for every finite projective $Q$ and integer $N\geq0$, an $A$-linear isomorphism $P\oplus A^N\cong Q\oplus A^N$ implies $P\cong Q$. Finite direct sums have componentwise operations and $A^N$ is the module of $N$-tuples, with $A^0=0$. [lem-author-7dc5154c7a6f-cancellative-free-summands](item-lem-author-7dc5154c7a6f-cancellative-free-summands)

[F4] All rings are commutative and unital. For the affine presentation $X=\operatorname{Spec}A$, its coordinate ring is canonically $A=\Gamma(X,\mathcal O_X)$. A noetherian scheme is locally noetherian and quasi-compact. A noetherian ring has every ideal finitely generated. [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring), [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme), [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme), [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)

[F5] On a locally noetherian scheme, sections of the structure sheaf over each affine open form a noetherian ring. This is the imported premise recorded in External input.

[F6] A vector bundle means a finite locally free $\mathcal O_X$-module, of rank $r$ when locally isomorphic to $\mathcal O_X^r$. On a quasi-compact, quasi-separated scheme, $K_0(X)=\pi_0\mathbb K(\operatorname{Perf}(X))$ and $[E]$ is the object class of the bundle placed in degree zero, with the assumed Choice and universe bounds. [def-vector-bundle-classes](item-def-vector-bundle-classes)

[F7] Quasi-compactness refers to the underlying space; quasi-separatedness means quasi-compact intersections of affine opens. Every affine scheme is quasi-separated. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme), [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)

## External input

[F5] imports implication (1) to (2) of [Stacks Lemma 28.5.2, Tag 01OW](https://stacks.math.columbia.edu/tag/01OW). Its hypotheses are a locally noetherian scheme and an affine open. We apply it to $U=X$. The source statement and proof paragraph were read; the cited antecedent lemmas were not reconstructed. The cancellation argument below is local.

## Proof

1.1 By [F4], $X$ is locally noetherian, and [F5] with the affine open $U=X$ makes $A=\Gamma(X,\mathcal O_X)$ noetherian. Also $X$ is quasi-compact by [F4] and quasi-separated by [F7], so the class convention in [F6] applies under [A1]. Suppose $[E]=[F]$. By [F1], $P,Q$ are finite projective modules of constant rank $r$. The ring hypothesis just checked permits [F2] to give $P\oplus A^N\cong Q\oplus A^N$. The assumed cancellativity, interpreted by [F3], yields $P\cong Q$, and [F1] gives $E\cong F$. [A1, F1, F2, F3, F4, F5, F6, F7, given]

2.1 Conversely, if $E\cong F$, [F1] gives $P\cong Q$, hence $P\oplus A^0\cong Q\oplus A^0$ since $A^0=0$ by [F3]. Under the hypotheses checked in step 1.1, apply [F2] with $N=0$ to get $[E]=[F]$ in the spectral group of [F6]. Together with step 1.1 this proves the equivalence, without changing the noetherian scheme hypothesis or the allowed rank $r\geq0$. [A1, F1, F2, F3, F6, given, step 1.1] ∎
