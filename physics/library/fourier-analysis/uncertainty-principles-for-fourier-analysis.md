---
page: uncertainty-principles-for-fourier-analysis
title: "Uncertainty Principles for Fourier Analysis"
status: published
items: [def-spatial-and-frequency-centres-and-variances,
        lem-position-derivative-commutator-estimate,
        lem-compact-support-gives-an-entire-fourier-laplace-transform,
        lem-gaussian-decay-gives-an-entire-fourier-laplace-transform,
        lem-hardy-entire-growth-rigidity,
        lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp,
        lem-separately-holomorphic-vanishing-on-a-real-box-is-zero,
        thm-support-measure-uncertainty-inequality,
        cor-dimensional-heisenberg-uncertainty-inequality,
        lem-centering-by-translation-and-modulation-preserves-the-variance-product,
        thm-hardy-gaussian-uncertainty-principle,
        thm-qualitative-compact-support-uncertainty-principle,
        rem-heisenberg-uncertainty-is-owned-by-functional-analysis,
        rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty,
        thm-finite-dft-support-product-uncertainty,
        rem-uncertainty-principles-measure-different-notions-of-localisation]
examples: []
---

This page isolates three inequivalent notions of localisation of a function on
$\mathbb R^n$ and states precisely how much can be said about each. The
variance formulation measures spread by the second moments of $|f|^2$ and
$|\widehat f|^2$; the support-measure formulation counts the measures of sets
off which $f$ and $\widehat f$ vanish; the Hardy formulation assumes Gaussian
decay of both and exhibits a threshold at the critical product $ab=1$. Gaussian decay in both domains implies finite second moments, but the
hypotheses are not interchangeable; the companion page supplies the Gaussian
computations and the separating examples.

The variance part begins with the spatial and frequency centres and variances of
a nonzero $L^2$ function with finite second moments, whose well-definedness is
discharged by Cauchy-Schwarz and Plancherel. The Fourier characterization of
$H^1$ identifies this domain with $f\in H^1$ and $xf\in L^2$. Translation and
modulation are then shown to centre the variance pair without changing the
product, and the coordinate commutator estimate
$\|x_jf\|_2\|D_jf\|_2\ge\frac12\|f\|_2^2$, with $D_jf$ the weak derivative,
is proved by compact cutoffs and vanishing $L^2$ tails. Fourier differentiation
and finite-tuple Cauchy-Schwarz convert that estimate into the summed
$n$-dimensional Heisenberg bound
$\||x|f\|_2\||\xi|\widehat f\|_2\ge\frac{n}{4\pi}\|f\|_2^2$
on the same $H^1$-with-finite-spatial-moment domain. The sharp theorem and its
equality classification are owned by the functional-analysis track and remain
quoted only on Schwartz functions; this pair extends the lower bound, not that
classification.

The support-measure part proves $|E||F|\ge1$ for a nonzero $L^2$ function
supported on $E$ whose continuous $L^1$ transform is supported on $F$, with no
regularity beyond measurability and finiteness of the two measures. The
complex-analytic route to compact-support rigidity is developed next: compact
support makes the transform a function with entire coordinate slices by
differentiation under the integral sign, Gaussian decay gives the same
entire continuation together with the growth bound
$|F(z)|\le Ca^{-n/2}e^{\pi|\operatorname{Im}z|^2/a}$, and a separately
holomorphic function vanishing on a real box is identically zero. Combining the
continuation with the nonempty open complement of a compact frequency support yields the qualitative theorem: a nonzero $L^1$ function with compact
support cannot have compactly supported transform.

The Hardy part states and proves the Gaussian uncertainty principle on
$\mathbb R^n$ by coordinate slices: entire continuation and one-variable
rigidity give vanishing in the supercritical case and successive Gaussian
factors in the critical case. The separate-holomorphy vanishing lemma then
extends the critical factorization to complex arguments. The proof's
complex-analytic cost is the entire growth-rigidity lemma with its two sector
bounds and Phragmen-Lindelof argument, and the remark on proof cost records
which part of the argument is real-variable and which is complex-analytic. The
subcritical Gaussians show that the threshold is sharp: for $ab<1$ every
Gaussian $e^{-\pi c|x|^2}$ with $a<c<1/b$ satisfies both Gaussian bounds, so no
vanishing conclusion can hold. The page closes by contrasting the finite
support-product bound of the unitary discrete Fourier transform, whose right
side is $N$ and whose equality set is different, with the continuous
inequalities, and by recording the sense in which the three localisation
notions are not interchangeable.
