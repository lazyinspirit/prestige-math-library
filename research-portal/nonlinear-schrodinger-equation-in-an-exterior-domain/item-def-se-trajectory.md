---
title: Reference trajectory hypothesis W
status: published
research_item: def-se-trajectory
dependency_level: 8
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 4, boxed hypothesis (W).
      statement: The reference path is continuous in H_D^2 intersected with
        W^{2,infinity}, solves the cubic unforced Schrodinger equation, and has
        homogeneous Dirichlet boundary data.
      hypotheses: The standing smooth compact obstacle and connected exterior, T
        positive, and the real nonzero coupling convention of the article.
      reading_limits: The frozen v2 PDF page 4 image and corresponding extracted text
        were read for attribution of (W) only; no prerequisite theorem or
        author-defect conclusion is imported from this article.
---

PDF p. 4: ` boxed assumption (W) `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-internal-systems](item-def-se-internal-systems)
- [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [def-se-foundation-distributional-equation](item-def-se-foundation-distributional-equation)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces)
- [math:thm-complex-holder-minkowski-and-the-quotient-norm](https://alphabetamath.cc/item/thm-complex-holder-minkowski-and-the-quotient-norm)
- [math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets](https://alphabetamath.cc/item/prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets)
- [math:thm-lp-trace-operator-on-a-bounded-c-one-domain](https://alphabetamath.cc/item/thm-lp-trace-operator-on-a-bounded-c-one-domain)
- [math:lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts](https://alphabetamath.cc/item/lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts)
- [math:thm-heine-cantor-metric](https://alphabetamath.cc/item/thm-heine-cantor-metric)
- [math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences)
- [math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures)
- [math:thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures](https://alphabetamath.cc/item/thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures)
- [physics:lem-fd-locally-integrable-functions-define-distributions](https://alphabetamath.cc/physics/item/lem-fd-locally-integrable-functions-define-distributions)
- [math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration](https://alphabetamath.cc/item/lem-ac-supplies-countable-and-dependent-choice-for-banach-integration)


## Definition

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be a nonempty compact obstacle with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$, let $T>0$, and let $\lambda\in\mathbb R\setminus\{0\}$. Put $X=H_D^2(\Omega)\cap W^{2,\infty}(\Omega)$, with norm $\|u\|_X=\|u\|_{H_D^2}+\|u\|_{W^{2,\infty}}$.

A reference trajectory satisfying hypothesis **(W)** is a complex-valued path $w\in C([0,T];X)$ such that

$$i\partial_t w+\Delta_x w+\lambda|w|^2w=0\quad\text{in }\mathcal D'((0,T)\times\Omega).$$

Continuity is in the displayed intersection norm. The homogeneous boundary condition $w=0$ on $\partial\Omega\times(0,T)$ is imposed by requiring $w(t)\in H_D^2(\Omega)=H^2(\Omega)\cap H_0^1(\Omega)$ for every $t\in[0,T]$; here $H_0^1$ is the $H^1$-closure of compactly supported smooth functions. The equation uses the distributional time derivative and spatial Laplacian. No initial value is prescribed by (W), and the hypothesis asserts neither existence nor uniqueness of such a trajectory.

## Definition references

[def-se-geometry](item-def-se-geometry)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[def-se-internal-systems](item-def-se-internal-systems)

[def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[def-se-foundation-distributional-equation](item-def-se-foundation-distributional-equation)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] [def-se-geometry](item-def-se-geometry) fixes the open exterior and its smooth one-sided obstacle boundary. [def-se-dirichlet-scale](item-def-se-dirichlet-scale) gives the complete space $H_D^2=D(A)$ with $A=I-\Delta_D\ge I$, its norm $\|Au\|_2$, and $D(A)=H^2\cap H_0^1$. [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation) fixes the weak Sobolev norms and the $H^1$ closure defining $H_0^1$. [def-se-internal-systems](item-def-se-internal-systems) fixes the unforced cubic expression and the real nonzero coupling, and [def-se-foundation-distributional-equation](item-def-se-foundation-distributional-equation) fixes the bilinear space-time distribution pairing and derivatives.

[F2] Under AC, [math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces) makes $W^{2,\infty}(\Omega;\mathbb C)$ complete for precisely the weak-derivative maximum norm used here; it applies to any open set, including an unbounded exterior.

[F3] Under AC, [math:thm-lp-trace-operator-on-a-bounded-c-one-domain](https://alphabetamath.cc/item/thm-lp-trace-operator-on-a-bounded-c-one-domain) gives the bounded complex trace $H^1(G)\to L^2(\partial G)$ on each bounded smooth $G$ and its agreement with smooth boundary restriction. [math:lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts](https://alphabetamath.cc/item/lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts) gives compatibility on common relatively open boundary pieces of nested bounded domains. These statements are applied only on bounded truncations, never directly on the exterior.

[F4] [math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets](https://alphabetamath.cc/item/prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets) gives sigma-finite Lebesgue factors and finite measure for bounded measurable sets. [math:thm-complex-holder-minkowski-and-the-quotient-norm](https://alphabetamath.cc/item/thm-complex-holder-minkowski-and-the-quotient-norm) gives complex Hölder, Minkowski and definiteness of the almost-everywhere quotient norms. [math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures) applies to sigma-finite factors under countable choice, including counting measure for nonnegative series. [math:thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures](https://alphabetamath.cc/item/thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures) identifies the completed time-space product with Euclidean Lebesgue measure, also after restriction to the open cylinder.

[F5] Under countable choice, [math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences) gives completeness of complex $L^2$ on every measure space and an almost-everywhere convergent subsequence of any norm-convergent sequence, with the correct norm-limit class.

[F6] [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces) defines norm-continuous paths into a Banach space and supplies their finite supremum norm on $[0,T]$. [math:thm-heine-cantor-metric](https://alphabetamath.cc/item/thm-heine-cantor-metric) makes a continuous map from this compact metric interval into any metric space uniformly continuous.

[F7] [physics:lem-fd-locally-integrable-functions-define-distributions](https://alphabetamath.cc/physics/item/lem-fd-locally-integrable-functions-define-distributions) has domain mathematics. For an open Euclidean set and a complex locally integrable function it proves that integration against a test function, without conjugation, is a distribution in the LF test-function topology. No physical premise is used.

[F8] AC is assumed as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). [math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration](https://alphabetamath.cc/item/lem-ac-supplies-countable-and-dependent-choice-for-banach-integration) supplies countable choice. AC covers the spectral-scale and trace suppliers; its countable consequence covers the completeness and measure-theoretic suppliers and the countably many spatial representative selections below.

## Justification

**Given:** AC, the exterior geometry, the displayed intersection norm, and a path with the regularity in the Definition.

**Goal:** Justify completeness of its target, its zero obstacle trace, and the space-time interpretation of the equation.

1.1 For $u\in H_D^2$, the spectral norm and $A\ge I$ give $\|u\|_2\le\|Au\|_2=\|u\|_{H_D^2}$. The sum of the two component norms is therefore a norm on their intersection of spatial almost-everywhere classes. If $(u_j)$ is Cauchy in this sum norm, completeness of the scale and of $W^{2,\infty}$ gives limits $a\in H_D^2$ and $b\in W^{2,\infty}$ in the respective norms. Put $E_k=\Omega\cap(-k,k)^n$, which has finite measure. On $E_k$, Hölder and the component convergences give $\|a-b\|_{L^2(E_k)}\le\|a-u_j\|_{L^2(\Omega)}+|E_k|^{1/2}\|u_j-b\|_{L^\infty(\Omega)}\to0$. Thus $a=b$ almost everywhere on each $E_k$ and hence on their countable union $\Omega$. The common class belongs to both spaces and $u_j$ converges to it in the sum norm. Consequently $X$ is Banach and the continuous-path supplier applies with exactly this $X$. [F1, F2, F4, F6, F8, given]

1.2 Choose $R>0$ with $\Theta\subset B_R(0)$ and let $G_R=B_R(0)\setminus\Theta$. This is a nonempty bounded smooth open set: its two disjoint boundary pieces are the obstacle boundary and the sphere, separated by a positive gap, and each has the required one-sided graph charts. The bounded-domain trace with $p=2$ defines the obstacle trace of $u\in H^1(\Omega)$ by restricting $u$ to $G_R$ and then restricting its trace to $\partial\Theta$. Restriction is a contraction in the weak $H^1$ norm, by restricting each weak derivative; the boundary locality result shows that this obstacle trace is independent of $R$, since two nested truncations have the relatively open common boundary piece $\partial\Theta$. For $u\in H_0^1(\Omega)$ choose $\phi_j\in C_c^\infty(\Omega)$ converging in $H^1$. Each $\phi_j$ is zero near the obstacle, so its obstacle trace on $G_R$ is zero by agreement with smooth restriction. Trace continuity gives zero obstacle trace for $u$. Apply this at every time to $w(t)\in H_D^2\subset H_0^1$. This proves the asserted homogeneous boundary condition in the Sobolev trace sense without assuming a trace theorem on an unbounded domain or pointwise boundary values. [F1, F3, F8, given, construct]

2.1 Put $Q=(0,T)\times\Omega$. By norm continuity and the component bounds, choose $M\ge1$ such that $\sup_{t\in[0,T]}(\|w(t)\|_2+\|w(t)\|_\infty)\le M$. The $L^2$-valued path is continuous by the bound in step 1.1 and hence uniformly continuous. For each integer $m\ge1$, choose a finite interval partition of $[0,T]$ fine enough that its left-endpoint sampled step path $s_m$ satisfies $\sup_t\|s_m(t)-w(t)\|_2\le2^{-m}$ (assign the endpoint $T$ separately). Choose measurable spatial representatives for the countably many sampled classes. Since each has essential bound at most $M$, replace its values by zero on its measurable null superlevel set above $M$. The resulting finite time-step function $U_m(t,x)$ is jointly measurable and satisfies $|U_m|\le M$, with spatial class $s_m(t)$. Completed-product Tonelli gives $\|U_m\|_{L^2(Q)}\le T^{1/2}M$ and $\|U_m-U_l\|_{L^2(Q)}\le T^{1/2}(2^{-m}+2^{-l})$. [F1, F4, F6, F8, step 1.1, given, choose, construct]

3.1 Completeness of $L^2(Q;\mathbb C)$ gives a measurable norm limit $U$ of $(U_m)$, and the almost-everywhere subsequence assertion gives $|U|\le M$ almost everywhere. Letting $l$ tend to infinity in the preceding norm bound gives $\|U_m-U\|_{L^2(Q)}\le T^{1/2}2^{-m}$. Tonelli, first in the time-space factors and then with counting measure, yields $\int_0^T\sum_{m\ge1}\|U_m(t,\cdot)-U(t,\cdot)\|_2^2\,dt\le T\sum_{m\ge1}4^{-m}<\infty$. Here the spatial sections and their norms are defined outside the common null exceptional set supplied by completed-product Tonelli. Therefore these section differences tend to zero in $L^2(\Omega)$ for almost every $t$. But their first terms have classes $s_m(t)\to w(t)$ in $L^2$ at every $t$, so uniqueness of the norm limit gives $[U(t,\cdot)]=w(t)$ for almost every $t$. The completed-product/Euclidean-measure identification makes $U$ a Lebesgue measurable representative on the open Euclidean cylinder. [F4, F5, F8, step 2.1]

4.1 The cubic $F=|U|^2U$ is measurable and $\|F\|_{L^2(Q)}\le M^2\|U\|_{L^2(Q)}<\infty$. Every compact $K\subset Q$ has finite measure, so Hölder gives $\int_K|U|\le |K|^{1/2}\|U\|_{L^2(Q)}$ and $\int_K|F|\le |K|^{1/2}\|F\|_{L^2(Q)}$. Thus both terms are locally integrable and define distributions by the mathematical regular-distribution supplier. If $V$ is another jointly measurable representative with $[V(t,\cdot)]=w(t)$ for almost every time, its disagreement set with $U$ has null spatial sections almost everywhere; Tonelli applied to its indicator makes it product-null. The Euclidean identification then gives $V=U$ almost everywhere on $Q$ and $|V|^2V=F$ there. Hence the resulting regular distributions depend only on the path, not on the representative. [F4, F7, step 3.1, algebra]

5.1 The geometry, scale and weak Sobolev definitions therefore specify a Banach intersection and its norm-continuous paths, with the two endpoint values retained. The unforced cubic convention supplies exactly $\lambda|w|^2w$, and step 4.1 makes it a well-defined space-time distribution. Apply the distributional derivative convention to this path distribution to interpret the displayed equation, while step 1.2 verifies the homogeneous obstacle trace. These statements make (W) meaningful; they prove neither existence nor uniqueness of a solution and require no separate continuity of a time derivative. The original article supplies the formulation only, and the preceding justifications use independent mathematical suppliers. [F1, F6, F8, step 1.1, step 1.2, step 4.1] ∎

## Source notes

The original article is cited only for the formulation and notation of (W) on PDF page 4. The Definition is unchanged. The numbered Justification is a local argument using the named suppliers; it is not attributed to the original authors. No new item, external-input theorem, physical assumption, independent review or publication approval is asserted.
