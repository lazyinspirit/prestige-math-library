---
title: Exterior spectral domains and the critical trace index
status: published
research_item: lem-se-exterior-fractional-identification
dependency_level: 10
---

## Prerequisites

- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization)
- [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract)
- [lem-se-sobolev-extension-retraction](item-lem-se-sobolev-extension-retraction)
- [lem-se-author-891dd21c27d6-exterior-collar-tail-retraction](item-lem-se-author-891dd21c27d6-exterior-collar-tail-retraction)
- [lem-se-author-891dd21c27d6-quotient-interpolation-retraction](item-lem-se-author-891dd21c27d6-quotient-interpolation-retraction)
- [lem-se-author-ccbb64dfef2c-strip-model-well-defined](item-lem-se-author-ccbb64dfef2c-strip-model-well-defined)
- [thm-se-bounded-fractional-dirichlet-input](item-thm-se-bounded-fractional-dirichlet-input)
- [math:thm-kernel-of-the-trace-is-w-one-p-zero](https://alphabetamath.cc/item/thm-kernel-of-the-trace-is-w-one-p-zero)
- [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor)
- [math:cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn](https://alphabetamath.cc/item/cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be nonempty and compact with smooth boundary, and let $\Omega=\mathbb R^n\setminus\Theta$ be connected. Let $A=I-\Delta_D$ and $H_D^s(\Omega)=D(A^{s/2})$ with norm $\|A^{s/2}u\|_2$, as in [def-se-dirichlet-scale](item-def-se-dirichlet-scale). Let $H^s(\Omega)$ be the restriction of the whole-space Bessel-potential $H^s(\mathbb R^n)$ with quotient norm, and let $d(x)=\operatorname{dist}(x,\partial\Omega)$. For $s>1/2$, $\gamma_0u$ denotes the boundary trace obtained by localization to a bounded smooth collar, as in the proof. Then, with equivalent norms, for $0\le s\le2$:

$$H_D^s(\Omega)=\begin{cases}H^s(\Omega),&0\le s<1/2,\\ \{u\in H^{1/2}(\Omega):d^{-1/2}u\in L^2(\Omega)\},&s=1/2,\\ \{u\in H^s(\Omega):\gamma_0u=0\},&1/2<s\le2.\end{cases}$$

At $s=1/2$ the norm on the displayed space is $\|u\|_{H^{1/2}(\Omega)}+\|d^{-1/2}u\|_2$; at other indices it is the inherited $H^s$ norm. In particular, for $1\le s\le2$ the last space is $H^s(\Omega)\cap H^1_0(\Omega)$, where $H^1_0$ is the $H^1$-closure of $C_c^\infty(\Omega)$. At $s=3/2$ no normal-derivative condition is imposed.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization) gives $A\ge I$, $D(A)=H^2(\Omega)\cap H^1_0(\Omega)$, and equivalence of the graph and $H^2$ norms. [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract) identifies $D(A^{s/2})$ with $[L^2(\Omega),D(A)]_{s/2}$ for $0<s<2$. The scale notation is fixed by [def-se-dirichlet-scale](item-def-se-dirichlet-scale).

[F2] [lem-se-author-891dd21c27d6-exterior-collar-tail-retraction](item-lem-se-author-891dd21c27d6-exterior-collar-tail-retraction) supplies nested cutoffs, the maps $J,P$ below, their ordinary $L^2$ and $H^2$ endpoint bounds, $PJ=I$, and the mapping of the bounded Dirichlet $H^2$ endpoint under $P$ into the exterior Dirichlet endpoint. [lem-se-sobolev-extension-retraction](item-lem-se-sobolev-extension-retraction) supplies the corresponding ordinary fractional localization norm equivalence.

[F3] [thm-se-bounded-fractional-dirichlet-input](item-thm-se-bounded-fractional-dirichlet-input) supplies the fractional Dirichlet interpolation spaces, traces and critical distance-weight norm on a bounded smooth open set. [lem-se-author-891dd21c27d6-quotient-interpolation-retraction](item-lem-se-author-891dd21c27d6-quotient-interpolation-retraction) gives $[L^2(\mathbb R^n),H^2(\mathbb R^n)]_{s/2}=H^s(\mathbb R^n)$ with equivalent norms. [lem-se-author-ccbb64dfef2c-strip-model-well-defined](item-lem-se-author-ccbb64dfef2c-strip-model-well-defined) transports common endpoint maps through complex interpolation.

[F4] On a bounded smooth domain, the kernel of the $H^1$ trace is the test-function closure [math:thm-kernel-of-the-trace-is-w-one-p-zero](https://alphabetamath.cc/item/thm-kernel-of-the-trace-is-w-one-p-zero). Smooth multiplication obeys the weak product rule [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor), and $C_c^\infty(\mathbb R^n)$ is dense in $H^1(\mathbb R^n)$ [Compactly supported smooth functions are dense in $W^{k,p}(\mathbb R^n)$](https://alphabetamath.cc/item/cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn). Full Choice, including the countable instances used by these suppliers, is assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

## Proof

**Given:** The hypotheses and conventions of the Statement.

[F1] [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization) gives $A\ge I$, $D(A)=H^2(\Omega)\cap H^1_0(\Omega)$, and equivalence of the graph and $H^2$ norms. [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract) identifies $D(A^{s/2})$ with $[L^2(\Omega),D(A)]_{s/2}$ for $0<s<2$. The scale notation is fixed by [def-se-dirichlet-scale](item-def-se-dirichlet-scale).

[F2] [lem-se-author-891dd21c27d6-exterior-collar-tail-retraction](item-lem-se-author-891dd21c27d6-exterior-collar-tail-retraction) supplies nested cutoffs, the maps $J,P$ below, their ordinary $L^2$ and $H^2$ endpoint bounds, $PJ=I$, and the mapping of the bounded Dirichlet $H^2$ endpoint under $P$ into the exterior Dirichlet endpoint. [lem-se-sobolev-extension-retraction](item-lem-se-sobolev-extension-retraction) supplies the corresponding ordinary fractional localization norm equivalence.

[F3] [thm-se-bounded-fractional-dirichlet-input](item-thm-se-bounded-fractional-dirichlet-input) supplies the fractional Dirichlet interpolation spaces, traces and critical distance-weight norm on a bounded smooth open set. [lem-se-author-891dd21c27d6-quotient-interpolation-retraction](item-lem-se-author-891dd21c27d6-quotient-interpolation-retraction) gives $[L^2(\mathbb R^n),H^2(\mathbb R^n)]_{s/2}=H^s(\mathbb R^n)$ with equivalent norms. [lem-se-author-ccbb64dfef2c-strip-model-well-defined](item-lem-se-author-ccbb64dfef2c-strip-model-well-defined) transports common endpoint maps through complex interpolation.

[F4] On a bounded smooth domain, the kernel of the $H^1$ trace is the test-function closure [math:thm-kernel-of-the-trace-is-w-one-p-zero](https://alphabetamath.cc/item/thm-kernel-of-the-trace-is-w-one-p-zero). Smooth multiplication obeys the weak product rule [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor), and $C_c^\infty(\mathbb R^n)$ is dense in $H^1(\mathbb R^n)$ [Compactly supported smooth functions are dense in $W^{k,p}(\mathbb R^n)$](https://alphabetamath.cc/item/cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn). Full Choice, including the countable instances used by these suppliers, is assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).



**Given:** The hypotheses and data in the Statement.

**Goal:** Prove the three space identifications and norm equivalences, including the critical index and the $H^1_0$ reformulation.

1.1 Choose $L$ and smooth cutoffs $\eta,a,\beta$ as in the collar–tail supplier: $\Theta\Subset B_{L/4}$, $\eta=1$ near $\Theta$ and is supported in $B_{L/2}$, $a=1$ near $\operatorname{supp}\eta$ and is supported in $B_L$, and $\beta=1$ near $\Theta$ with support in the interior of the plateau $\{\eta=1\}$. Put $b=1-\beta$, $G=\Omega\cap B_L$, and let $Zu$ be the zero extension to $\mathbb R^n$ of $(1-\eta)u$. Define $Ju=((\eta u)|_G,Zu)$ and $P(v,w)=V_av+(bw)|_\Omega$, where $V_av$ is $av$ on $G$ and zero on $\Omega\setminus G$. The supplier proves both maps bounded on the ordinary $L^2$ and $H^2$ endpoint couples, and $PJ=I$. In particular the unbounded tail zero extension is justified there by compactly supported tests, and $V_a$ crosses only the artificial sphere, where $a$ vanishes. [F2, given]

2.1 If $u\in H^2(\Omega)\cap H^1_0(\Omega)$, choose $u_j\in C_c^\infty(\Omega)$ converging to $u$ in $H^1(\Omega)$. The functions $(\eta u_j)|_G$ lie in $C_c^\infty(G)$ and converge to $(\eta u)|_G$ in $H^1(G)$ by the product rule. Thus the first component of $Ju$ lies in $H^2(G)\cap H^1_0(G)$; the second lies in $H^2(\mathbb R^n)$. Conversely, the collar–tail supplier proves that $P$ sends the product of those two endpoint spaces into $H^2(\Omega)\cap H^1_0(\Omega)$. Hence the same $J,P$ form a bounded retraction pair for the Dirichlet endpoint couples as well as for $L^2$. [F2, F4, step 1.1]

3.1 Let $0<s<2$. Apply the strip-map theorem to those two common endpoint maps. Coordinate projections and injections give one direction of the finite-product interpolation norm comparison; pairing admissible component strip functions gives the other. Consequently $J$ and $P$ give a retraction between $[L^2(\Omega),H^2(\Omega)\cap H^1_0(\Omega)]_{s/2}$ and the product of the bounded Dirichlet interpolation space on $G$ with $H^s(\mathbb R^n)$, with equivalent norms. By the spectral scale this exterior interpolation space is $H_D^s(\Omega)$. Thus $u\in H_D^s$ exactly when its collar component belongs to the bounded Dirichlet interpolation space and $Zu\in H^s(\mathbb R^n)$; its scale norm is equivalent to the sum of those component norms. [F1, F3, step 2.1]

4.1 The ordinary collar–tail retraction says that $u\in H^s(\Omega)$ exactly when $(\eta u)|_G\in H^s(G)$ and $Zu\in H^s(\mathbb R^n)$, with equivalent norms. The bounded-domain input therefore gives the claimed result for $0<s<1/2$. For $1/2<s<2$, define $\gamma_0u$ as the trace of $(\eta u)|_G$ on the obstacle boundary. Its trace on the artificial sphere is zero because $\eta$ vanishes in a neighborhood of that sphere. Since $\eta=1$ near the obstacle, the obstacle trace is independent of the chosen such cutoff: the difference has support away from that boundary and has zero localized trace. The bounded-domain input now gives precisely $\gamma_0u=0$ and no further condition, including at $s=3/2$. [F2, F3, step 3.1]

4.2 At $s=1/2$, the bounded input requires $d_G^{-1/2}(\eta u)|_G\in L^2(G)$, where $d_G=\operatorname{dist}(\cdot,\partial G)$. In a fixed neighborhood of the obstacle, $d_G=d$ after choosing the neighborhood sufficiently small; away from that neighborhood, $d$ is bounded below, while $\eta$ vanishes near the artificial sphere and $d_G$ is bounded below on the remaining relevant support. Also $d^{-1}$ is bounded on the exterior tail. Splitting the integrals into these regions shows that the bounded collar weighted norm plus the tail $H^{1/2}$ norm is equivalent to $\|u\|_{H^{1/2}(\Omega)}+\|d^{-1/2}u\|_2$. This proves the critical assertion without identifying it with the $H^{1/2}$-closure of test functions. [F2, F3, step 3.1]

5.1 At $s=0$, $H_D^0=L^2=H^0$; at $s=2$, the realization theorem gives $H_D^2=H^2\cap H^1_0$ with equivalent norms. For $u\in H^1(\Omega)$, zero obstacle trace implies $(\eta u)|_G\in H^1_0(G)$ by the bounded trace-kernel theorem, since its artificial-sphere trace is zero. Approximate that collar component by compactly supported smooth functions in $G$ and approximate $Zu\in H^1(\mathbb R^n)$ by compactly supported smooth whole-space functions. Applying $P$ to these approximants yields compactly supported smooth functions in $\Omega$ converging to $u$, because $a$ is supported inside $B_L$ and $b$ vanishes near the obstacle. Conversely, restriction and smooth multiplication carry any $H^1_0(\Omega)$ approximating sequence to a test-function approximating sequence for the collar component, so its trace vanishes. Thus $\ker\gamma_0=H^1_0(\Omega)$ in $H^1(\Omega)$. The $H^s$-to-$H^1$ inclusion for $s\ge1$ follows from the restriction quotient and the whole-space Fourier weights. Combining this with the previous steps proves the stated $1\le s\le2$ reformulation and all endpoint claims. [F1, F2, F3, F4, step 1.1, step 4.1, step 4.2] ∎

## Source notes

The bounded-domain fractional identification is the explicitly imported input recorded in [thm-se-bounded-fractional-dirichlet-input](item-thm-se-bounded-fractional-dirichlet-input). The exterior localization and application above are local arguments; the article under study is not used as a prerequisite source.
