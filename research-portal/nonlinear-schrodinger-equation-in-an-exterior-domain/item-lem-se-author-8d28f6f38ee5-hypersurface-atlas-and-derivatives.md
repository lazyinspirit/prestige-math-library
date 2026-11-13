---
title: Atlas-independent hypersurface Sobolev norms and $H^{3/2}$ tangential
  derivatives
status: draft
research_item: lem-se-author-8d28f6f38ee5-hypersurface-atlas-and-derivatives
dependency_level: 7
---

## Prerequisites

- [math:def-codimension-and-hypersurface](https://alphabetamath.cc/item/def-codimension-and-hypersurface)
- [math:def-smooth-atlas](https://alphabetamath.cc/item/def-smooth-atlas)
- [math:lem-slice-chart-restrictions-form-a-smooth-atlas](https://alphabetamath.cc/item/lem-slice-chart-restrictions-form-a-smooth-atlas)
- [math:prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding](https://alphabetamath.cc/item/prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding)
- [math:lem-surface-integral-is-independent-of-c-one-boundary-charts](https://alphabetamath.cc/item/lem-surface-integral-is-independent-of-c-one-boundary-charts)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:lem-finite-ambient-partitions-for-euclidean-boundary-integration](https://alphabetamath.cc/item/lem-finite-ambient-partitions-for-euclidean-boundary-integration)
- [math:def-surface-integral-on-a-compact-c-one-hypersurface](https://alphabetamath.cc/item/def-surface-integral-on-a-compact-c-one-hypersurface)
- [lem-se-author-8d28f6f38ee5-localized-chart-operators](item-lem-se-author-8d28f6f38ee5-localized-chart-operators)
- [math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces)
- [math:lem-weak-derivatives-are-polynomial-fourier-multipliers](https://alphabetamath.cc/item/lem-weak-derivatives-are-polynomial-fourier-multipliers)
- [math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences)
- [math:def-smooth-partition-of-unity-subordinate-to-an-open-cover](https://alphabetamath.cc/item/def-smooth-partition-of-unity-subordinate-to-an-open-cover)
- [math:def-weak-derivative-of-a-locally-integrable-function](https://alphabetamath.cc/item/def-weak-derivative-of-a-locally-integrable-function)


## Statement

Assume AC. Let $S\subset\mathbb R^n$, $n\ge2$, be a compact smooth embedded hypersurface without boundary. Equip $S$ with the smooth structure induced by restricting ambient slice charts. Choose a finite smooth atlas $\kappa_i:U_i\subset S\to V_i\subset\mathbb R^{n-1}$ compatible with this induced structure and a subordinate smooth partition $\chi_i$ with supports compactly inside $U_i$. For $f\in L^2(S)$ let $f_i$ be $(\chi_i f)\circ\kappa_i^{-1}$ extended by zero outside $V_i$, and set
$$\|f\|_{H^r(S),\mathcal A}^2=\sum_i\|f_i\|_{H^r(\mathbb R^{n-1})}^2\quad(0\le r\le2).$$
The space where this norm is finite is Banach, and different finite smooth atlases compatible with the induced structure and their subordinate partitions give the same space with equivalent norms. At $r=3/2$ the square of this norm is equivalent to
$$\sum_i\left(\|f_i\|_{H^{1/2}}^2+\sum_{a=1}^{n-1}\|\partial_a f_i\|_{H^{1/2}}^2\right).$$
Thus $H^{3/2}(S)$ is described by the lower-order norm and first weak tangential derivatives of localized chart representatives in $H^{1/2}$. This description is invariant under changes of charts and uses no global tangent frame.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); in particular its countable and dependent instances are available.

[F2] [math:lem-finite-ambient-partitions-for-euclidean-boundary-integration](https://alphabetamath.cc/item/lem-finite-ambient-partitions-for-euclidean-boundary-integration) supplies finite smooth partitions on the compact hypersurface. [math:def-surface-integral-on-a-compact-c-one-hypersurface](https://alphabetamath.cc/item/def-surface-integral-on-a-compact-c-one-hypersurface) defines the chart integral, and [math:lem-surface-integral-is-independent-of-c-one-boundary-charts](https://alphabetamath.cc/item/lem-surface-integral-is-independent-of-c-one-boundary-charts) proves that it is a finite Borel surface measure independent of the charts and partition, with continuous strictly positive regular chart densities. Its countable-choice hypothesis follows from AC. On each compact smooth patch the density is bounded above and away from zero, and all fixed transition derivatives are bounded.

[F3] [lem-se-author-8d28f6f38ee5-localized-chart-operators](item-lem-se-author-8d28f6f38ee5-localized-chart-operators) bounds compactly supported overlap pullbacks and smooth cutoff multipliers on every Fourier $H^r$, $0\le r\le2$.

[F4] [math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces) identifies the complete weighted Fourier spaces and their dense Schwartz core. [math:lem-weak-derivatives-are-polynomial-fourier-multipliers](https://alphabetamath.cc/item/lem-weak-derivatives-are-polynomial-fourier-multipliers) gives $\widehat{\partial_a g}=2\pi i\xi_a\widehat g$ distributionally.

[F5] [math:def-codimension-and-hypersurface](https://alphabetamath.cc/item/def-codimension-and-hypersurface) specifies the embedded dimension $n-1$ of $S$. [math:lem-slice-chart-restrictions-form-a-smooth-atlas](https://alphabetamath.cc/item/lem-slice-chart-restrictions-form-a-smooth-atlas) supplies the induced atlas with the subspace topology, and compatibility of atlases is as in [math:def-smooth-atlas](https://alphabetamath.cc/item/def-smooth-atlas). [math:prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding](https://alphabetamath.cc/item/prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding) makes the inclusion a smooth immersion in this structure. Consequently the inverse coordinate maps of compatible charts are regular smooth parametrizations into $\mathbb R^n$; their coordinate derivatives are velocities of curves in $S$, hence tangent to $S$. Transitions between any two chosen compatible atlases are smooth diffeomorphisms.

[F6] [math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences) gives completeness of complex $L^2$ on every measure space under Countable Choice. Apply it to the finite Borel surface measure on $S$ supplied by [F2]; AC supplies Countable Choice. Thus the surface space $L^2(S;\mathbb C)$ is complete, independently of the completeness of the coordinate Fourier spaces.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Establish every assertion of the Statement with the stated spaces and bounds.

1.1 The coordinate functions $f_i$ are well-defined on almost-everywhere classes because the compatible charts are regular parametrizations, smooth coordinate changes preserve null sets, and the chart-independent surface measure has positive chart densities. At order zero their squared $L^2$ norms sum to a quantity comparable to $\|f\|_{L^2(S)}^2$: the upper bound follows from the finite bounded densities and cutoffs, while $f=\sum_i\chi_i f$ gives the lower bound by the finite-sum inequality and change of variables. Thus the stated norm is definite for every $r\ge0$ and controls $L^2(S)$. [F2, F4, F5, given]

2.1 For a second compatible atlas and subordinate partition $(\widetilde\chi_j,\widetilde\kappa_j)$, write each localized new representative as the finite sum of the representations of $\widetilde\chi_j\chi_i f$. Each summand is obtained from $f_i$ by an overlap transition and a smooth cutoff supported inside that overlap. Such overlap cutoffs exist after a finite refinement of the compact support intersections; extend them smoothly with compact margins inside the relevant chart. The localized-chart lemma bounds each summand in $H^r$. The finite triangle inequality gives $\|f\|_{\widetilde{\mathcal A},r}\le C\|f\|_{\mathcal A,r}$, and reversing the atlases gives the other inequality. If $f_j$ is Cauchy in the atlas norm, the order-zero comparison in step 1.1 makes it Cauchy in $L^2(S;\mathbb C)$, and [F6] supplies a limit $f$ there; each localized representative converges also in complete $H^r$, whose continuous injection into $L^2$ identifies its limit with the localized representative of $f$. Hence $f$ belongs to the space and the atlas norm convergence holds, proving completeness. [F2, F3, F4, F5, F6, step 1.1]

2.2 For a whole-space $g\in H^{1/2}(\mathbb R^{n-1})$, the Fourier derivative identity shows that $g$ and all $\partial_a g$ are in $H^{1/2}$ exactly when $g\in H^{3/2}$. Indeed the sum of their squared norms is $\int\langle\xi\rangle(1+4\pi^2|\xi|^2)|\widehat g|^2$, whose weight is bounded above and below by positive constants times $\langle\xi\rangle^3$. Apply this to every $f_i$ and sum, obtaining the displayed characterization in both directions, including distributional derivative membership rather than presuming it. [F4, step 1.1, algebra]

3.1 In any compatible chart the coordinate vector fields are tangent to $S$, so these first derivatives are local tangential weak derivatives. On an overlap the chain rule gives a smooth transition Jacobian multiplying the coordinate derivatives; partition Leibniz terms add smooth coefficients multiplying the undifferentiated representative. To justify this identity for the present functions, approximate each localized representative by Schwartz functions in $H^{3/2}$, localize with a fixed larger chart cutoff, and pass to the limit using bounded overlap pullbacks on $H^{3/2}$ and bounded coefficient multipliers on $H^{1/2}$. Differentiation $H^{3/2}\to H^{1/2}$ is continuous by the preceding Fourier estimate. The limiting distributional identity follows, so the local derivative description is intrinsic without a global frame. [F2, F3, F4, F5, step 2.1, step 2.2] ∎
