---
title: Stationary correlation spectra and ULE kernel regularity
status: published
research_item: def-qec-prereq-stationary-spectrum-kernel-contract
dependency_level: 0
sources:
  references:
    - title: Universal Lindblad equation for open quantum systems
      url: https://arxiv.org/pdf/2004.01469
      locator: p. 9, Eqs. (25)–(26) and surrounding text
      statement: The multi-channel jump correlator is defined by the Fourier integral
        of the positive matrix square root of the spectral matrix divided by 2π;
        the rate and correlation-time expressions use its 2,1 norm and first
        time moment.
      hypotheses: The source uses a positive semidefinite spectral matrix and its
        stated multi-channel bath setting. The convergence and
        nonzero-denominator conditions in this contract are explicit
        requirements for these expressions.
      reading_limits: The cited definitions and surrounding text were read. No source
        proof, empirical claim, or general Fourier inversion theorem is imported
        here.
---

## Prerequisites

- [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)
- [math:thm-fourier-inversion-on-schwartz-space](https://alphabetamath.cc/item/thm-fourier-inversion-on-schwartz-space)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-schwartz-space-and-its-seminorms](https://alphabetamath.cc/item/def-schwartz-space-and-its-seminorms)
- [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)
- [math:prop-countable-subsets-of-rn-are-lebesgue-null](https://alphabetamath.cc/item/prop-countable-subsets-of-rn-are-lebesgue-null)
- [math:cor-integral-over-a-null-set-vanishes](https://alphabetamath.cc/item/cor-integral-over-a-null-set-vanishes)
- [` Universal Lindblad equation for open quantum systems · p. 9, Eqs. (25)–(26) and surrounding text `](https://arxiv.org/pdf/2004.01469)


## Definition

Fix a positive integer $n$ and use entrywise Lebesgue integrals over the real line. A stationary matrix correlation is here a function $C:\mathbb R\to\mathbb C^{n\times n}$ of a time difference; stationarity alone imposes no integrability or positivity conclusion in this definition. Suppose every entry of $C$ is integrable. Its spectral density in this convention is $J(\omega)=(2\pi)^{-1}\int_{\mathbb R}C(t)e^{i\omega t}\,dt$. When Fourier inversion applies, the inverse convention is $C(t)=\int_{\mathbb R}J(\omega)e^{-i\omega t}\,d\omega$ at the points covered by the inversion theorem. In particular this equality holds for every $t$ if all entries of $C$ are Schwartz functions, assuming countable choice.

For the jump-kernel contract additionally require that $J(\omega)$ is Hermitian positive semidefinite for every real $\omega$: $J(\omega)^*=J(\omega)$ and $v^*J(\omega)v\geq0$ for every $v\in\mathbb C^n$. Define $g(\omega)$ to be the unique Hermitian positive semidefinite matrix whose square is $J(\omega)/(2\pi)$. Require its entries to be integrable and set $g(t)=\int_{\mathbb R}g(\omega)e^{-i\omega t}\,d\omega$. For a matrix $A$, put $\|A\|_{2,1}=\sum_{b=1}^n(\sum_{a=1}^n|A_{ab}|^2)^{1/2}$. Kernel regularity means $0<\int_{\mathbb R}\|g(t)\|_{2,1}\,dt<\infty$ and $\int_{\mathbb R}|t|\|g(t)\|_{2,1}\,dt<\infty$.

For an integrand $h$ with a singularity at a real point $a$, the symmetric Cauchy principal value is $\operatorname{PV}\int_{\mathbb R}h(x)\,dx=\lim_{\varepsilon\downarrow0}\int_{\{|x-a|>\varepsilon\}}h(x)\,dx$, provided those integrals and the limit exist; convergence at infinity is also required. A Dirac mass at $a$ is a measure assigning mass one to sets containing $a$ and zero to other sets. It is not an ordinary density with respect to Lebesgue measure, so its pointwise matrix square root is not defined by the density construction above.

## Definition references

[math:def-schwartz-space-and-its-seminorms](https://alphabetamath.cc/item/def-schwartz-space-and-its-seminorms)

[math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)

[math:prop-countable-subsets-of-rn-are-lebesgue-null](https://alphabetamath.cc/item/prop-countable-subsets-of-rn-are-lebesgue-null)

[math:cor-integral-over-a-null-set-vanishes](https://alphabetamath.cc/item/cor-integral-over-a-null-set-vanishes)

## Facts & Assumptions

[F1] The finite-dimensional complex spectral theorem supplies an orthonormal eigenbasis for a normal endomorphism. [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)

[F2] Fourier inversion holds pointwise for Schwartz functions, with absolutely convergent inverse integral, under countable choice. [math:thm-fourier-inversion-on-schwartz-space](https://alphabetamath.cc/item/thm-fourier-inversion-on-schwartz-space)

[A1] Countable choice means that a choice can be made from each member of every sequence of nonempty sets; assume it for the Fourier and Lebesgue-null suppliers. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F3] Under [A1], every singleton in $\mathbb R$ is Lebesgue measurable with measure zero; write $\lambda$ for Lebesgue measure on $\mathbb R$. [math:prop-countable-subsets-of-rn-are-lebesgue-null](https://alphabetamath.cc/item/prop-countable-subsets-of-rn-are-lebesgue-null)

[F4] If $p$ is nonnegative and measurable and $E$ is measurable with $\lambda(E)=0$, then $\int_E p\,d\lambda=0$. [math:cor-integral-over-a-null-set-vanishes](https://alphabetamath.cc/item/cor-integral-over-a-null-set-vanishes)

## Justification

The entrywise integrability assumptions make the displayed Fourier integrals finite. Hermitian matrices are normal, so [F1] diagonalizes $J(\omega)$ in an orthonormal basis. Its eigenvalues are real and nonnegative by the stated quadratic-form condition. Taking their nonnegative square roots, after division by $2\pi$, gives a Hermitian positive semidefinite square root. It is unique: any such root commutes with its square and preserves each eigenspace of that square; diagonalizing the root on each eigenspace forces its eigenvalues to be the nonnegative square root of the corresponding eigenvalue. Thus the construction is independent of the eigenbasis.

Apply [F2] entrywise to $C$ in the stated Schwartz special case, changing variables from the supplier's $2\pi$ Fourier convention to angular frequency and reversing the sign. The moment conditions explicitly ensure that the denominator used in the kernel correlation-time ratio is finite and nonzero and its numerator is finite. For the Dirac mass at $a$, [F3] gives $\lambda(\{a\})=0$. If a nonnegative measurable function $p$ were a Lebesgue density for that mass, [F4] would give $\int_{\{a\}}p\,d\lambda=0$, whereas the mass of $\{a\}$ is one. This contradiction excludes a Lebesgue density. The principal value is only a definition when the indicated limit exists; no existence follows merely from writing the symbol.

## Source notes

The jump-kernel normalization and mixed matrix norm follow the cited source's definitions. The separate hypotheses above make the domain and convergence requirements explicit; no physical interpretation or microscopic bath assertion is made by this mathematical contract.
