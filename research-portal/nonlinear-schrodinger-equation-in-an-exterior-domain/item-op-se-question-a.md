---
title: "Question A: general boundary exact control"
status: published
research_item: op-se-question-a
dependency_level: 3
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 1, equations (1.1)–(1.3) and Question A; pages 1–2, following
        paragraph
      statement: Question A asks whether arbitrary prescribed endpoints in H^s can be
        joined in time T by a solution of the cubic equation using full-boundary
        Dirichlet or Neumann control.
      hypotheses: s is nonnegative, T is positive, the spatial domain is bounded, and
        the cubic coefficient is a nonzero real number.
      reading_limits: The frozen article text at the cited passage was read for the
        question and its contextual account of local results; this citation is
        attribution, not proof of controllability or an independent
        current-status review.
    - title: Exact boundary controllability of the nonlinear Schrödinger equation
      url: https://www.sciencedirect.com/science/article/pii/S0022039608004786
      locator: Abstract
      statement: For specified ranges of s and n, the paper reports local exact
        boundary controllability in classical H^s around smooth solutions for
        Dirichlet or Neumann boundary conditions.
      hypotheses: The abstract concerns a bounded domain and the regularity ranges
        stated there; its local result is around a smooth reference solution.
      reading_limits: The publisher abstract was read in the web search result for its
        exact article URL; direct opening returned HTTP 403. The full theorem
        hypotheses and proof were not checked. This supports only the reported
        local partial result, not a general answer for arbitrary endpoints or a
        comprehensive current-literature review.
---

PDF p. 1: ` Question A `

## Prerequisites

- [def-se-cubic-boundary-system](item-def-se-cubic-boundary-system)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [def-se-foundation-control-language](item-def-se-foundation-control-language)
- [math:def-real-order-bessel-potential-sobolev-space](https://alphabetamath.cc/item/def-real-order-bessel-potential-sobolev-space)
- [math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-bounded-c-one-domain-boundary-charts-and-outward-normal](https://alphabetamath.cc/item/def-bounded-c-one-domain-boundary-charts-and-outward-normal)
- [math:def-classical-normal-derivative](https://alphabetamath.cc/item/def-classical-normal-derivative)
- [math:def-nitsche-restriction-bessel-potential-sobolev-spaces](https://alphabetamath.cc/item/def-nitsche-restriction-bessel-potential-sobolev-spaces)
- [math:thm-quotient-of-banach-by-closed-subspace-is-banach](https://alphabetamath.cc/item/thm-quotient-of-banach-by-closed-subspace-is-banach)
- [math:thm-complex-holder-minkowski-and-the-quotient-norm](https://alphabetamath.cc/item/thm-complex-holder-minkowski-and-the-quotient-norm)
- [math:def-integral-over-a-measurable-set](https://alphabetamath.cc/item/def-integral-over-a-measurable-set)
- [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)
- [` Exact boundary controllability of the nonlinear Schrödinger equation · Abstract `](https://www.sciencedirect.com/science/article/pii/S0022039608004786)


## Open problem

Assume countable choice. The article poses the following schematic question: let $\Omega_0\subset\mathbb R^n$ be a bounded domain, $n\ge1$, with boundary $\Gamma$, let $\lambda\in\mathbb R\setminus\{0\}$, and let $s\ge0$ and $T>0$. For each pair $u_0,u_1\in H^s(\Omega_0)$, can a full-boundary control $h$ produce a solution $u\in C([0,T];H^s(\Omega_0))$ of $iu_t+\Delta u+\lambda|u|^2u=0$ on $\Omega_0\times(0,T)$, with $u(0)=u_0$ and $u(T)=u_1$, using either Dirichlet data $u=h$ or Neumann data $\partial_\nu u=h$ on $\Gamma\times(0,T)$? This records the original broad question; its Neumann notation alone does not supply a normal on an arbitrary bounded domain.

For a precise instance with classical boundary geometry in dimension $n\ge2$, additionally take $\Omega_0$ to be a bounded $C^1$ domain. Its outward unit normal is the graph normal $(-Dh,1)/\sqrt{1+|Dh|^2}$ in an oriented chart where the domain lies below the graph $z=h(y)$; the chart function here is unrelated to the boundary control. For a state continuously differentiable up to the boundary, $\partial_\nu u=\nabla_xu\cdot\nu$, applied to its real and imaginary parts, and Dirichlet data are classical boundary restriction. At each $s$, fix in advance a complex Banach control space $U$ and an admissible solution/control class $\mathcal A\subseteq C([0,T];H^s(\Omega_0))\times U$. This class must specify a meaning for the nonlinear equation and the chosen boundary equality, including any weak traces, and must agree with these classical meanings whenever the state is sufficiently regular. For each such fixed formulation the question is whether every endpoint pair admits $(u,h)\in\mathcal A$ with the prescribed endpoints. The boundary regularity and fixed interpretation are explicit conditions on this precise instance, not extra hypotheses attributed to the original question. A formulation on a nonsmooth bounded domain must instead supply its own boundary structure and boundary interpretation before applying the endpoint quantifiers. No classical or weak normal trace for arbitrary Sobolev states is asserted here.

For $s\ge0$ and any nonempty open $D\subseteq\mathbb R^n$, use the canonical $L^2$ realization $\iota_s:H^s(\mathbb R^n)\to L^2(\mathbb R^n)$ and let $R_DF=(\iota_sF)|_D$, with restrictions identified up to almost-everywhere equality. Define the restriction space and its norm by
$$H^s(D)=R_DH^s(\mathbb R^n),\qquad \|u\|_{H^s(D)}=\inf\{\|F\|_{H^s(\mathbb R^n)}:R_DF=u\}.$$
Here the whole-space space is the Bessel-potential completion, identified with tempered distributions whose Fourier transform multiplied by $(1+|\xi|^2)^{s/2}$ is a regular $L^2$ distribution, using the negative-sign $2\pi$ Fourier convention. The restriction-space norm is definite and complete by the justification below. The path space means continuity in this norm. This restriction-space convention does not impose homogeneous boundary conditions. The article's later smooth truncated obstacle domain is one instance of the boundary geometry described above.

## Open problem references

[def-se-cubic-boundary-system](item-def-se-cubic-boundary-system)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[def-se-foundation-control-language](item-def-se-foundation-control-language)

[math:def-real-order-bessel-potential-sobolev-space](https://alphabetamath.cc/item/def-real-order-bessel-potential-sobolev-space)

[math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-bounded-c-one-domain-boundary-charts-and-outward-normal](https://alphabetamath.cc/item/def-bounded-c-one-domain-boundary-charts-and-outward-normal)

[math:def-classical-normal-derivative](https://alphabetamath.cc/item/def-classical-normal-derivative)

[math:def-nitsche-restriction-bessel-potential-sobolev-spaces](https://alphabetamath.cc/item/def-nitsche-restriction-bessel-potential-sobolev-spaces)

[math:thm-quotient-of-banach-by-closed-subspace-is-banach](https://alphabetamath.cc/item/thm-quotient-of-banach-by-closed-subspace-is-banach)

[math:thm-complex-holder-minkowski-and-the-quotient-norm](https://alphabetamath.cc/item/thm-complex-holder-minkowski-and-the-quotient-norm)

[math:def-integral-over-a-measurable-set](https://alphabetamath.cc/item/def-integral-over-a-measurable-set)

[math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)

## Justification

Only the formulation and its spaces are justified here. For every $s\ge0$, [math:def-nitsche-restriction-bessel-potential-sobolev-spaces](https://alphabetamath.cc/item/def-nitsche-restriction-bessel-potential-sobolev-spaces) supplies the linear injection $\iota_s$ with $\|\iota_sF\|_{L^2(\mathbb R^n)}\le\|F\|_{H^s(\mathbb R^n)}$ and the restriction-space convention used above; despite its title, that definition applies to every nonempty open $D$, not only polyhedra. Restriction of an $L^2$ class is well-defined, since a null disagreement set remains null on $D$. The complex $L^2$ norm and vector operations are supplied by [math:thm-complex-holder-minkowski-and-the-quotient-norm](https://alphabetamath.cc/item/thm-complex-holder-minkowski-and-the-quotient-norm). By the subset integral convention of [math:def-integral-over-a-measurable-set](https://alphabetamath.cc/item/def-integral-over-a-measurable-set) and monotonicity in [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral),
$$\|R_DF\|_{L^2(D)}^2=\int_D|\iota_sF|^2\le\int_{\mathbb R^n}|\iota_sF|^2\le\|F\|_{H^s(\mathbb R^n)}^2.$$
Thus $R_D$ is linear and bounded. Its kernel $M_D$ is a closed linear subspace: if $R_DF\ne0$, the ball of radius $\|R_DF\|_{L^2(D)}/2$ about $F$ misses $M_D$, since $G\in M_D$ would imply $\|R_DF\|_{L^2(D)}=\|R_D(F-G)\|_{L^2(D)}\le\|F-G\|_{H^s}$.

The whole-space space is Banach by [math:def-real-order-bessel-potential-sobolev-space](https://alphabetamath.cc/item/def-real-order-bessel-potential-sobolev-space). Two extensions have the same restriction exactly when their difference lies in $M_D$, so the range is linearly identified with $H^s(\mathbb R^n)/M_D$ and the displayed infimum is precisely its quotient norm. Under countable choice, [math:thm-quotient-of-banach-by-closed-subspace-is-banach](https://alphabetamath.cc/item/thm-quotient-of-banach-by-closed-subspace-is-banach) makes this a definite Banach norm for every $s\ge0$, without boundary regularity. Countable choice is the assumption of [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) used by the completion and quotient suppliers. The Fourier description and normalization are those of [math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces). This establishes the Banach-target hypothesis of [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces).

For the conditional $C^1$ instance with $n\ge2$, [math:def-bounded-c-one-domain-boundary-charts-and-outward-normal](https://alphabetamath.cc/item/def-bounded-c-one-domain-boundary-charts-and-outward-normal) supplies the normal and [math:def-classical-normal-derivative](https://alphabetamath.cc/item/def-classical-normal-derivative) supplies its classical derivative convention. These definitions make no weak-trace assertion. The article-specific instance and the complex cubic notation are those of [def-se-cubic-boundary-system](item-def-se-cubic-boundary-system); that supplier is not applied to an arbitrary nonsmooth domain. For a fixed admissible class, the endpoint relation is $(u_0,h,u_1)\in\mathcal R_T$ exactly when some $(u,h)\in\mathcal A$ has these endpoints. The predicate is therefore exact controllability on $H^s(\Omega_0)$ in [def-se-foundation-control-language](item-def-se-foundation-control-language). Neither existence of such an admissible formulation at every regularity nor its controllability is inferred from this definition.

## Status

The frozen article poses this general question and reports local exact controllability on the whole boundary in regularity ranges depending on dimension, around smooth solutions. Rosier and Zhang's publisher abstract independently reports such local results for specified ranges, for both boundary conditions. Local exact controllability concerns endpoints sufficiently close to reference endpoints; it does not by itself answer the question for arbitrary endpoint pairs. As of 2026-11-13, the sources consulted here do not establish a general answer for all stated parameters; this limited search is not a comprehensive current-literature certification.

## Source notes

The article citation attributes Question A and its context. The independent [Rosier–Zhang abstract](https://www.sciencedirect.com/science/article/pii/S0022039608004786) records only the partial result described there; no theorem from that paper is used as a logical premise. The boundary qualification and restriction-quotient justification are local formulation repairs, not claimed additions by the article's authors and not a solution to Question A.
