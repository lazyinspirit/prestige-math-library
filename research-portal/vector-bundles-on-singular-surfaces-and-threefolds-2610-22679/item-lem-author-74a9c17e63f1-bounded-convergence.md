---
title: Stage bounds imply completeness and finite multiplicative convergence
status: published
research_item: lem-author-74a9c17e63f1-bounded-convergence
dependency_level: 19
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-filtration](item-def-motivic-filtration)
- [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [thm-author-74a9c17e63f1-stage-bound-input](item-thm-author-74a9c17e63f1-stage-bound-input)
- [lem-author-74a9c17e63f1-page-product-transport](item-lem-author-74a9c17e63f1-page-product-transport)
- [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)
- [lem-adjudicate-656ca1c4e08f-eventually-zero-spectral-towers](item-lem-adjudicate-656ca1c4e08f-eventually-zero-spectral-towers)


## Statement
Assume the Axiom of Choice. If $X$ has finite valuative dimension, the actual motivic filtration is complete and the preceding multiplicative spectral sequence converges with
$$E_\infty^{a,b}\simeq F^{-b}_{\mathrm{mot}}K_{-a-b}(X)/F^{-b+1}_{\mathrm{mot}}K_{-a-b}(X).$$
Each $K_n(X)$ has its finite image filtration in this assertion; no splitting of that filtration is claimed.

## Facts & Assumptions
[A1] The Axiom of Choice and the fixed size conventions of the cited constructions are inherited through [lem-author-74a9c17e63f1-page-product-transport](item-lem-author-74a9c17e63f1-page-product-transport). They discharge the foundational and realization hypotheses when its tower and product comparisons are applied below. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** The Axiom of Choice and the fixed size conventions of the cited constructions, together with a qcqs scheme $X$ over the standing field with finite valuative dimension, and the actual tower.

**Goal:** Check the stagewise hypotheses for convergence and the zero-limit assertion.

[F1] [thm-author-74a9c17e63f1-stage-bound-input](item-thm-author-74a9c17e63f1-stage-bound-input) supplies $B\geq0$ with $F^rK(X)\in\mathrm{Sp}_{\geq r-B}$. [def-motivic-filtration](item-def-motivic-filtration) identifies every stage $r\leq0$ and its augmentation with $K$.

[F2] [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface) gives finite convergence from actual high-stage vanishing and low-stage isomorphisms. [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies spectra and their homotopy groups; [lem-author-74a9c17e63f1-page-product-transport](item-lem-author-74a9c17e63f1-page-product-transport) identifies the source products and their abutment maps.

[F3] [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness) defines finite valuative dimension, including the empty scheme, and completeness as a zero tower limit. [lem-adjudicate-656ca1c4e08f-eventually-zero-spectral-towers](item-lem-adjudicate-656ca1c4e08f-eventually-zero-spectral-towers) supplies the sequential-limit fiber formula, the product homotopy calculation and the zero-limit consequence for a tower whose homotopy groups vanish eventually in every degree.

[F4] The actual tower in [def-motivic-filtration](item-def-motivic-filtration) is the restriction from the prime field of the standing field. This restriction leaves the underlying scheme and its affine rings unchanged, so finite valuative dimension in [F3] is unchanged. Write $F^r=F^r_{\mathrm{mot}}K(X)$ and $K=K(X)$ below; $\mathrm{Sp}_{\geq t}$ means spectra with $\pi_i=0$ for every $i<t$.

## Proof
1.1 Use the supplied realization under [A1]. Regard $X$ as a scheme over the prime field of its standing field, using [F4]; its underlying scheme is unchanged, so the dimension hypothesis in [F3] and the stage-bound supplier in [F1] apply to this actual restricted tower. Choose its integer $B=B(X)\geq0$. Its contract covers every qcqs scheme of finite valuative dimension, including the empty scheme. Use that bound uniformly: for any fixed integer $n$, set $U_n=\max(1,B+n+1)$ and $L_n=0$. If $r\geq U_n$ then $n<r-B$, so $\pi_nF^r=0$. If $r\leq L_n$, the map to $K$ is an equivalence by [F1]. These are precisely the high/low hypotheses of [F2], including actual vanishing of stage groups rather than only their images. The resulting additive convergence and displayed associated-graded identification are therefore those of [F2]. [A1, F1, F2, F3, F4, construct]

2.1 Completeness also follows from the stage bound. Apply the spectral-tower lemma in [F3] to the coherent tower on $r\geq0$. For every fixed degree $n$, step 1.1 gives eventual vanishing in degrees $n$ and $n+1$. The lemma identifies its limit with the fiber of $1-\mathrm{shift}$ on $\prod_{r\geq0}F^r$, computes product homotopy groups, and proves that $1-\mathrm{shift}$ is invertible on each such group by a finite geometric sum. Its fiber exact sequence and the detection criterion therefore give a zero limit. This is also the limit of the integer-indexed tower: a coherent cone on the nonnegative stages extends to negative stage $j$ by its stage-zero map followed by $F^0\to F^j$; the tower coherences supply the compatibilities, and restriction and extension are inverse up to coherent equivalence. Thus the filtration is complete in the convention of [F3]. [A1, F1, F3, F4, step 1.1]

3.1 The image filtration on each $K_n$ is full for $r\leq0$ and zero for $r\geq U_n$, so it is finite. The product identification in [F2] makes the convergence in step 1.1 multiplicative with exactly this finite filtered abutment. This proves all claims. [F1, F2, step 1.1, step 2.1] ∎
