---
page: real-hardy-spaces-maximal-functions-and-atoms
title: "Real Hardy Spaces Maximal Functions and Atoms"
status: draft
requires: [hilbert-and-riesz-transforms, calderon-zygmund-decomposition-and-singular-integrals, distributions-test-functions-and-differentiation, tempered-distributions-and-the-fourier-transform, the-maximal-function-and-lebesgue-differentiation]
items: [def-hp-atom-with-moment-order, lem-existence-of-schwartz-functions-with-flat-fourier-transform-at-the-origin, lem-local-polynomial-projections-match-moments-through-order-s, lem-schwartz-dilations-preserve-schwartz-space, lem-whitney-decomposition-of-proper-open-subsets-of-euclidean-space, lem-whitney-type-ball-cover-of-a-proper-open-set, def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution, lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions, lem-schwartz-deconvolution-along-dyadic-dilations, def-grand-maximal-test-class-of-order-n, lem-tangential-maximal-function-norm-bound, lem-grand-maximal-function-is-dominated-by-the-tangential-maximal-function, lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable, lem-truncated-maximal-function-estimates, def-real-hardy-space-by-a-radial-maximal-function, lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions, lem-an-hp-atom-has-uniform-hp-quasinorm, lem-calderon-reproducing-formula-for-the-hardy-decomposition, thm-maximal-function-characterisations-of-real-hardy-spaces, cor-real-hardy-space-equals-lp-for-p-greater-than-one, lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions, lem-hardy-calderon-zygmund-level-decomposition-produces-atoms, thm-atomic-characterisation-of-real-hp, rem-real-hp-is-quasi-banach-below-one, thm-calderon-zygmund-operators-map-hone-to-lone-under-cancellation, thm-fourier-transform-decay-of-real-hardy-space-elements, cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range]
examples: []
---

This page develops the real Hardy spaces $H^p(\mathbb R^n)$ for
$0<p<\infty$. The space is defined by the radial maximal function of a fixed
admissible Schwartz kernel $\varphi$ with $\int\varphi\ne0$, and the page
compares that definition with the nontangential maximal functions of aperture
$a\ge1$ and with the grand maximal function of order $N$ built on the Schwartz
test class $\mathcal F_N$. The atomic objects are the $(p,\infty,s)$-atoms:
functions supported in a nondegenerate axis-parallel cube, bounded by
$|Q|^{-1/p}$ and with all moments of order at most $s=\lfloor n(1/p-1)\rfloor$
vanishing.

The first part assembles the analytic tools. Dilations and their normalisations
preserve Schwartz space with explicit seminorm identities, flat Schwartz
functions exist with prescribed vanishing moments, Schwartz approximate
identities converge in the tempered-distribution topology, and under Countable Choice, every tempered
distribution has a unique local polynomial projection for a nonnegative smooth compactly supported weight of positive integral matching its moments
through a prescribed order. Two covering lemmas are proved: a greedy countable
cover of a proper open set by balls with controlled radii, sizes and overlap,
and the all-generations dyadic Whitney decomposition with pairwise disjoint
interiors, comparable touching cubes, a finite touching count and bounded
overlap of the small dilates $RQ_j$, $1\le R\le2$. A smooth deconvolution along
dyadic dilations then expresses an arbitrary Schwartz function as a rapidly
convergent series in the negative dilates of the fixed kernel $\varphi$, with
Schwartz-norm coefficients decaying faster than any prescribed power.

The central theorem is the maximal-function characterisation: for each
admissible kernel $\varphi$ there is a finite order threshold
$N_0(n,p,\varphi)$ such that for every $N\ge N_0(n,p,\varphi)$ the conditions
$M^0_\varphi f\in L^p$, $M^{*,a}_\varphi f\in L^p$ and $M_Nf\in L^p$ are
equivalent, with equivalent extended quasi-norms. The threshold depends on the
kernel through the deconvolution constants, while the thresholds recorded in
the sources, $N\ge\lfloor n/p\rfloor+1$ and $N>n/p+n+1$, refer to their own
normalised grand maximal functions. The proof follows the truncation route:
the truncated maximal functions $M^{\epsilon,L}$ are finite and integrable for
large $L$, the grand truncated function is pointwise dominated by the
truncated tangential one, the good-set bootstrap with the Hardy-Littlewood
maximal theorem closes the a priori estimate, and monotone convergence as
$\epsilon\downarrow0$ removes the truncation. Borel measurability of all the
maximal functions makes the $L^p$ statements meaningful. A flat compactly supported kernel and the approximate-identity limit yield the Calderon reproducing formula used later.

From the characterisation the page derives that $H^p=L^p$ with equivalent
norms for $1<p<\infty$; the inclusion $H^p\subseteq L^p$ uses the weak-star
sequential compactness of the dual ball and is recorded as assuming the
ultrafilter lemma, while the converse uses Countable Choice through the published maximal-function machinery. For $0<p\le1$
the Calderon-Zygmund level decomposition of an $H^p$ distribution produces
$(p,\infty,s)$-atoms with summable $\ell^p$ coefficients, $\ell^p$-sums of
atoms converge in $\mathcal S'$ and in the $H^p$ quasi-norm, atoms have a
uniform $H^p$ bound with a quantitative pairing estimate, and the resulting
atomic characterisation identifies $H^p$ with the space of atomic sums and
gives the two-sided quasi-norm equivalence. The same route gives the Fourier
decay $|\widehat f(\xi)|\le C\|f\|_{H^p}|\xi|^{n(1/p-1)}$ with a little-$o$
refinement, and hence the vanishing of all moments through order
$\lfloor n(1/p-1)\rfloor$ for $H^p$ functions whose weighted moments through that order are absolutely integrable. Calderon-Zygmund
operators with standard Holder kernels map $H^1$ boundedly into $L^1$; that
theorem assumes Countable Choice, and the quasi-Banach remark records that
$\|\cdot\|_{H^p}$ is only a quasi-norm for $p<1$. 
