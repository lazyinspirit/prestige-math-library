---
title: "Proposition 3.5: full-scale free observability"
status: draft
research_item: prop-se-3-5
dependency_level: 16
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 11: ` Proposition 3.5; (3.12) `; PDF p. 12: ` proof `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-invisible-space](item-def-se-invisible-space)
- [def-se-compact-remainder](item-def-se-compact-remainder)
- [def-se-foundation-weak-compactness-language](item-def-se-foundation-weak-compactness-language)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality)
- [lem-se-3-2](item-lem-se-3-2)
- [lem-se-3-3](item-lem-se-3-3)
- [lem-se-3-4](item-lem-se-3-4)
- [prop-se-observation-endpoint](item-prop-se-observation-endpoint)
- [math:cor-hilbert-spaces-are-reflexive](https://alphabetamath.cc/item/cor-hilbert-spaces-are-reflexive)
- [math:cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence](https://alphabetamath.cc/item/cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-choice-implies-dependent-implies-countable-choice](https://alphabetamath.cc/item/thm-choice-implies-dependent-implies-countable-choice)
- [math:thm-ultrafilter-lemma](https://alphabetamath.cc/item/thm-ultrafilter-lemma)
- [math:thm-hahn-banach-dominated-extension](https://alphabetamath.cc/item/thm-hahn-banach-dominated-extension)


## Statement

Assume the Axiom of Choice and hypothesis (H): $n\ge2$, the nonempty compact obstacle $\Theta\subset\mathbb R^n$ has smooth boundary, its exterior $\Omega=\mathbb R^n\setminus\Theta$ is connected, and every generalized reflected ray leaves every compact set in finite time. Let $H_D^\sigma(\Omega)$ be the completed Dirichlet spectral scale of $I-\Delta_D$, $W(t)=e^{it\Delta_D}$ its free unitary evolution, and $\varphi$ the real smooth control cutoff that vanishes inside an enclosing ball and is positive outside it, as specified in [def-se-control-cutoffs](item-def-se-control-cutoffs).

For every $T>0$ and $\sigma\in[-2,2]$, there is $C>0$ such that every $v_0\in H_D^\sigma(\Omega)$ satisfies
$$\|v_0\|_{H_D^\sigma}^2\le C\int_0^T\|\varphi W(t)v_0\|_{H_D^\sigma}^2\,dt.$$

## Facts & Assumptions

[F1] The geometry and non-trapping condition are those of [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping). The scale is a complex Hilbert scale, with $H_D^0=L^2(\Omega)$, and the free group is strongly continuous and unitary on each scale level. The smooth cutoff $\varphi$ has bounded derivatives through order two and acts boundedly on $H_D^\sigma$ for $-2\le\sigma\le2$. [def-se-dirichlet-scale](item-def-se-dirichlet-scale) [prop-se-scale-flow](item-prop-se-scale-flow) [def-se-control-cutoffs](item-def-se-control-cutoffs) [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality)

[F2] For $T>0$ and $-2\le\sigma<2$, the nonnegative remainder $Q_\sigma$ is the squared time-integrated norm specified in [def-se-compact-remainder](item-def-se-compact-remainder). If $x_j\rightharpoonup x$ in $H_D^\sigma$, then $Q_\sigma(x_j-x)\to0$. There is $C_1>0$ such that $\|x\|_{H_D^\sigma}^2\le C_1(\int_0^T\|\varphi W(t)x\|_{H_D^\sigma}^2dt+Q_\sigma(x))$ for all $x\in H_D^\sigma$. [lem-se-3-2](item-lem-se-3-2) [lem-se-3-3](item-lem-se-3-3)

[F3] The invisible space $N_T^\sigma$ consists of the data $x\in H_D^\sigma$ for which $\varphi W(t)x=0$ for every $t\in[0,T]$. Under (H) and Choice, $N_T^\sigma=\{0\}$ for $-2\le\sigma\le2$. [def-se-invisible-space](item-def-se-invisible-space) [lem-se-3-4](item-lem-se-3-4)

[F4] Under Countable Choice every real or complex Hilbert space is reflexive; under the ultrafilter lemma, dependent choice and Hahn–Banach, every bounded sequence in a reflexive Banach space has a weakly convergent subsequence. The assumed Axiom of Choice implies dependent choice and Countable Choice by [math:thm-choice-implies-dependent-implies-countable-choice](https://alphabetamath.cc/item/thm-choice-implies-dependent-implies-countable-choice), the ultrafilter lemma by [math:thm-ultrafilter-lemma](https://alphabetamath.cc/item/thm-ultrafilter-lemma), and the real dominated-extension principle HB used in the weak-subsequence corollary by [math:thm-hahn-banach-dominated-extension](https://alphabetamath.cc/item/thm-hahn-banach-dominated-extension). Weak convergence means convergence under every bounded scalar-linear functional. [math:cor-hilbert-spaces-are-reflexive](https://alphabetamath.cc/item/cor-hilbert-spaces-are-reflexive) [math:cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence](https://alphabetamath.cc/item/cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [def-se-foundation-weak-compactness-language](item-def-se-foundation-weak-compactness-language)

[F5] Under the displayed geometric and cutoff hypotheses and Choice, observability at order zero for all $L^2$ data implies observability at order two for all $H_D^2$ data, with the same fixed time and cutoff. [prop-se-observation-endpoint](item-prop-se-observation-endpoint) The time-space norm used below is the $L^2$ norm of the strongly measurable scale-valued observation. [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

## Proof

**Given:** The geometry, Choice, cutoff, $T>0$ and $\sigma\in[-2,2]$ in the Statement.

**Goal:** Establish the displayed observability inequality uniformly over initial data.

1.1 Fix $\sigma\in[-2,2)$ and suppose the inequality fails. For each positive integer $j$, choose $x_j\in H_D^\sigma$ with $\|x_j\|_{H_D^\sigma}=1$ and $\int_0^T\|\varphi W(t)x_j\|_{H_D^\sigma}^2dt<1/j$. The normalization follows by scaling a counterexample; Choice permits the sequence of choices. By Hilbert reflexivity and weak subsequential compactness, after passing to a subsequence, $x_j\rightharpoonup x$ in $H_D^\sigma$ for some $x$. [given, F1, F4, assume-contra]

2.1 Define $O:H_D^\sigma\to L^2(0,T;H_D^\sigma)$ by $(Oy)(t)=\varphi W(t)y$. Strong continuity and the bounded multiplier make $Oy$ continuous, and unitarity gives $\|Oy\|_{L^2(0,T;H_D^\sigma)}\le\sqrt T\,\|\varphi\|_{\mathcal L(H_D^\sigma)}\|y\|_{H_D^\sigma}$. Thus $O$ is bounded and linear. For every bounded scalar-linear functional $\ell$ on the time-space, $\ell\circ O$ is bounded on $H_D^\sigma$, so $Ox_j\rightharpoonup Ox$. But the observations $Ox_j$ converge to zero in norm. Hence $Ox=0$; since $Ox$ is continuous in time, it vanishes at every $t\in[0,T]$. Therefore $x\in N_T^\sigma$ and $x=0$. [F1, F3, F4, F5, step 1.1]

3.1 Since $x_j\rightharpoonup0$, compactness of the remainder gives $Q_\sigma(x_j)\to0$. The estimate with remainder then yields $1=\|x_j\|_{H_D^\sigma}^2\le C_1(\|Ox_j\|_{L^2(0,T;H_D^\sigma)}^2+Q_\sigma(x_j))\to0$, a contradiction. Consequently the claimed inequality holds for every $\sigma\in[-2,2)$. [F2, step 1.1, step 2.1]

4.1 In particular, step 3.1 supplies the order-zero inequality for every datum in $H_D^0=L^2(\Omega)$. The conditional endpoint lifting result applies with this inequality, the same time, geometry and cutoff, and gives the asserted inequality at $\sigma=2$. This completes the full stated range. [F1, F5, step 3.1, discharge-contradiction] ∎

## Source notes

The article is cited for attribution of Proposition 3.5 and its proof structure on PDF pages 11–12. The argument above uses the displayed suppliers and the conditional endpoint lifting result; it does not assume the article's proposition as a premise.
