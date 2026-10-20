---
id: lem-covariate-shift-joint-law-density
kind: lemma
title: "Covariate shift gives a joint-law density"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - cor-integral-over-a-null-set-vanishes
  - def-axiom-of-choice
  - def-likelihood-density
  - def-likelihood-ratio-as-rn-derivative
  - def-measurable-function-between-measurable-spaces
  - def-measure-kernel-and-probability-kernel
  - def-measure-with-density
  - def-pi-system
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-source-target-distributions-and-shift
  - lem-finite-measure-uniqueness-on-a-pi-system
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-likelihood-ratio-change-of-measure
justified_by: []
proof_strategy: direct
axiom_use: "AC is used to obtain the nonnegative Radon-Nikodym representative for the target input marginal. The remaining setwise and measure-uniqueness argument uses no additional choice principle."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Masashi Sugiyama, Learning under Non-stationarity: Covariate Shift Adaptation by Importance Weighting, Handbook of Computational Statistics, 2nd ed., Chapter 31 (2012), §3.1"
      url: "https://www.ms.k.u-tokyo.ac.jp/sugi/2012/CSAreview.pdf"
---

## Statement

Assume AC. Let $P_S,P_T$ be source and target joint laws with input marginals $\mu_S,\mu_T$ and specified conditional label kernels $K_S,K_T$ as in the definition of source/target distributions. Suppose $\mu_T\ll\mu_S$ and there is a $\mu_T$-null set outside of which $K_S(x,\cdot)=K_T(x,\cdot)$. Let $w$ be any nonnegative measurable representative of $d\mu_T/d\mu_S$. Then for every product-measurable set $E\subseteq\mathsf X\times\mathsf Y$,
$$P_T(E)=\int_E w(x)\,P_S(d(x,y)).$$
Consequently $P_T\ll P_S$ and $w\circ\pi_X$ is a representative of the likelihood-ratio density of $P_T$ with respect to $P_S$.

## Statement references

[Sugiyama, §3.1, book pp. 930–931](https://www.ms.k.u-tokyo.ac.jp/sugi/2012/CSAreview.pdf): the density-based covariate-shift identity that this lemma establishes for general measurable spaces using supplied conditional kernels.

## Facts & Assumptions

**Given:** AC; source and target joint probability laws on the common product measurable space; their input marginals and conditional label kernels; $\mu_T\ll\mu_S$; and a nonnegative representative $w$ of $d\mu_T/d\mu_S$.

[A1] [[def-axiom-of-choice]]: AC is assumed for the Radon-Nikodym density selection used below.

[F1] [[def-source-target-distributions-and-shift]]: for every nonnegative product-measurable $g$, $\int g\,dP_D=\int_{\mathsf X}\int_{\mathsf Y}g(x,y)K_D(x,dy)\,\mu_D(dx)$.

[F2] [[def-likelihood-density]] and [[def-likelihood-ratio-as-rn-derivative]]: for the two-law experiment with parameter set $\{S,T\}$ dominated by $\mu_S$, AC supplies a finite-valued nonnegative representative $w_0$ of the Radon–Nikodym density class of $\mu_T$ with respect to $\mu_S$; every other representative $w$ of that class agrees with $w_0$ $\mu_S$-almost everywhere. Since these are probability measures, the constant sequence $X_n=\mathsf X$ is a common finite-measure exhaustion.

[F3] [[thm-likelihood-ratio-change-of-measure]]: if $\mu_T\ll\mu_S$, then $\int q\,d\mu_T=\int qw\,d\mu_S$ for every nonnegative measurable $q$.

[F4] [[def-measure-with-density]]: a nonnegative measurable density $r$ relative to a measure $P$ defines the measure $r\,dP$ by $E\mapsto\int_Er\,dP$.

[F5] [[def-measurable-function-between-measurable-spaces]]: a map is measurable when preimages of measurable sets are measurable.

[F6] [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]: if $f\ge0$ is measurable and $E$ is measurable, then $f\mathbf1_E$ is measurable.

[F7] [[def-pi-system]] and [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]: measurable rectangles form a $\pi$-system generating $\Sigma_X\otimes\Sigma_Y$.

[F8] [[lem-finite-measure-uniqueness-on-a-pi-system]]: finite measures with equal total mass that agree on a generating $\pi$-system agree on the generated sigma-algebra.

[F9] [[def-source-target-distributions-and-shift]]: under covariate shift, the specified kernels agree as probability measures outside a $\mu_T$-null set.

[F10] [[def-measure-kernel-and-probability-kernel]]: for each measurable $B\subseteq\mathsf Y$, $x\mapsto K_D(x,B)$ is measurable.

[F11] [[def-measure-kernel-and-probability-kernel]]: a probability kernel satisfies $K_D(x,\mathsf Y)=1$ for every $x$.

[F12] [[cor-integral-over-a-null-set-vanishes]]: the integral of a nonnegative measurable function over a measurable null set is zero.

[F13] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: multiplication by a finite nonnegative scalar is homogeneous for the nonnegative integral; the zero scalar case gives integral zero.

[F14] [[def-source-target-distributions-and-shift]]: the input marginal satisfies $\mu_D(A)=P_D(A\times\mathsf Y)$ for every $A\in\Sigma_X$.


## Proof

1.1 Let $\pi_X(x,y)=x$. For each $A\in\Sigma_X$, $\pi_X^{-1}(A)=A\times\mathsf Y\in\Sigma_X\otimes\Sigma_Y$, so $\pi_X$ is measurable by [F5] and [F7]. For every Borel $C\subseteq[0,+\infty]$, $(w_0\circ\pi_X)^{-1}(C)=\pi_X^{-1}(w_0^{-1}(C))$ is product-measurable. Define $\nu_0:=(w_0\circ\pi_X)\,dP_S$; [F4] makes $\nu_0$ a measure. Since $K_S(x,\mathsf Y)=1$ by [F11], [F1] and [F13] give $\nu_0(\mathsf X\times\mathsf Y)=\int w_0\,d\mu_S$. Applying [F3] to $q=1$ yields $\int w_0\,d\mu_S=\int 1\,d\mu_T=1$. Thus $\nu_0$ and $P_T$ are finite measures of equal total mass. [A1, F1, F2, F3, F4, F5, F7, F11, F13, given]

1.2 For $A\in\Sigma_X$ and $B\in\Sigma_Y$, the function $g(x,y)=\mathbf1_{A\times B}(x,y)w_0(x)$ is nonnegative and product-measurable by [F5]–[F7]. By [F10], $x\mapsto K_S(x,B)$ is measurable, and by [F6] the function $q(x)=\mathbf1_A(x)K_S(x,B)$ is measurable. Since $w_0(x)$ is finite, [F13] pulls this scalar through the section integral in [F1]. Applying [F3] to $q$ gives
$$\nu_0(A\times B)=\int_A w_0(x)K_S(x,B)\,\mu_S(dx)=\int_A K_S(x,B)\,\mu_T(dx)=\int_A K_T(x,B)\,\mu_T(dx)=P_T(A\times B).$$
The middle equality uses the $\mu_T$-almost-everywhere equality of the specified kernels, and the last equality uses their target disintegration [F1]. [F1, F3, F5, F6, F7, F9, F10, F13, step 1.1, given]

2.1 The measurable rectangles form the generating $\pi$-system in [F7], so [F8] and steps 1.1–1.2 give $\nu_0=P_T$ on the entire product sigma-algebra. Since [F2] identifies $w_0$ as a representative of $d\mu_T/d\mu_S$, the setwise equality makes $w_0\circ\pi_X$ a Radon–Nikodym representative of $P_T$ with respect to $P_S$. [F2, F4, F7, F8, step 1.1, step 1.2]

3.1 Let $w$ be the arbitrary representative in the Statement. The same preimage argument as in step 1.1, using [F5] and [F7], shows $w\circ\pi_X$ is measurable. By [F2], there is a measurable $N\in\Sigma_X$ with $\mu_S(N)=0$ outside of which $w=w_0$. By [F14], $P_S(N\times\mathsf Y)=0$. For each measurable $E\subseteq\mathsf X\times\mathsf Y$, the two density integrands agree on $E\setminus(N\times\mathsf Y)$, and both integrals over $E\cap(N\times\mathsf Y)$ vanish by [F12]. Hence $\int_E w(x)\,dP_S=\int_E w_0(x)\,dP_S=P_T(E)$. In particular, if $P_S(E)=0$, [F12] gives $P_T(E)=0$, so $P_T\ll P_S$. [F2, F4, F5, F7, F12, F14, step 2.1, given] ∎
