---
title: "Question B prime: outer boundary control"
status: draft
research_item: op-se-question-b-prime
dependency_level: 3
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF pages 1–2, Question A, equations (1.4)–(1.6), and Question B′;
        pages 16–17, proof of Theorem 1.1
      statement: Question B′ asks for outer-boundary control between arbitrary H^s
        endpoints for s at least zero and positive time; the article reports a
        local Dirichlet result for small compatible data at orders one and two
        in dimensions two and three.
      hypotheses: The article assumes a nonempty compact smooth non-trapping obstacle
        with connected exterior, enclosed in the specified ball; its partial
        result has the further dimension, regularity and smallness restrictions
        stated in the item.
      reading_limits: The frozen article text at the listed locations was consulted
        for the question and its reported partial result; no independent
        current-status or worldwide novelty review is claimed.
---

PDF p. 2: ` Question B′ `

## Prerequisites

- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [def-se-cubic-boundary-system](item-def-se-cubic-boundary-system)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [def-se-foundation-control-language](item-def-se-foundation-control-language)
- [math:def-nitsche-restriction-bessel-potential-sobolev-spaces](https://alphabetamath.cc/item/def-nitsche-restriction-bessel-potential-sobolev-spaces)
- [math:def-real-order-bessel-potential-sobolev-space](https://alphabetamath.cc/item/def-real-order-bessel-potential-sobolev-space)
- [math:thm-quotient-of-banach-by-closed-subspace-is-banach](https://alphabetamath.cc/item/thm-quotient-of-banach-by-closed-subspace-is-banach)
- [math:thm-complex-holder-minkowski-and-the-quotient-norm](https://alphabetamath.cc/item/thm-complex-holder-minkowski-and-the-quotient-norm)
- [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)


## Open problem

Assume countable choice. Let $n\ge2$ and let $\Theta\subset\mathbb R^n$ be a nonempty compact obstacle with smooth boundary, connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and the non-trapping property of [def-se-nontrapping](item-def-se-nontrapping): every complete admissible generalized reflected ray $x:\mathbb R\to\overline\Omega$, parametrized by physical time at unit speed, leaves each compact set in finite forward time. Choose $R_0>0$ with $\Theta\subset B_{R_0}(0)$, and set $\Omega_0=B_{R_0}(0)\setminus\Theta$, $\Gamma_1=\partial B_{R_0}(0)$ and $\Gamma_2=\partial\Theta$.

For given $s\ge0$, $T>0$ and arbitrary $u_0,u_1\in H^s(\Omega_0)$, can one find a control $h$ on $\Gamma_1\times(0,T)$ and a solution $u\in C([0,T];H^s(\Omega_0))$ with $u(0)=u_0$ and $u(T)=u_1$ to the cubic equation $iu_t+\Delta u+\lambda|u|^2u=0$, where $\lambda\in\mathbb R\setminus\{0\}$, satisfying either the Dirichlet conditions $u=h$ on $\Gamma_1$ and $u=0$ on $\Gamma_2$, or the Neumann conditions $\partial_\nu u=h$ on $\Gamma_1$ and $\partial_\nu u=0$ on $\Gamma_2$?

Here $H^s(\Omega_0)$ is the restriction space of $H^s(\mathbb R^n)$, equipped with the infimum extension norm. The path space consists of norm-continuous functions of time. The normal $\nu$ is outward from $\Omega_0$. The question leaves the control class and any weak interpretation of the boundary conditions to a formulation in which they are meaningful; it does not assert trace existence for arbitrary states.

## Justification

Only the function-space formulation is justified here. By [math:def-real-order-bessel-potential-sobolev-space](https://alphabetamath.cc/item/def-real-order-bessel-potential-sobolev-space), under Countable Choice the whole-space completion $H^s(\mathbb R^n)$ is complex Banach. For $s\ge0$, [math:def-nitsche-restriction-bessel-potential-sobolev-spaces](https://alphabetamath.cc/item/def-nitsche-restriction-bessel-potential-sobolev-spaces) supplies its linear injection $\iota_s$ into $L^2(\mathbb R^n)$ with $\|\iota_s F\|_2\le\|F\|_{H^s}$. Set $R F=(\iota_s F)|_{\Omega_0}$. Restrictions and vector operations are well-defined on almost-everywhere classes by [math:thm-complex-holder-minkowski-and-the-quotient-norm](https://alphabetamath.cc/item/thm-complex-holder-minkowski-and-the-quotient-norm). Monotonicity of the nonnegative integral in [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral) gives
$$\|RF\|_{L^2(\Omega_0)}^2\le\|\iota_s F\|_{L^2(\mathbb R^n)}^2\le\|F\|_{H^s(\mathbb R^n)}^2.$$
Consequently $R$ is bounded and linear. Its kernel $M$ is closed: if $F_j\in M$ and $F_j\to F$ in $H^s$, then $\|RF\|_2=\|R(F-F_j)\|_2\le\|F-F_j\|_{H^s}\to0$, so $RF=0$. Two extensions have the same restriction precisely when their difference lies in $M$. The displayed infimum-extension norm in the question is therefore the quotient norm of $H^s(\mathbb R^n)/M$. Under the stated Countable Choice, [math:thm-quotient-of-banach-by-closed-subspace-is-banach](https://alphabetamath.cc/item/thm-quotient-of-banach-by-closed-subspace-is-banach) makes it a definite complete norm. This verifies the Banach-target hypothesis of [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces) for the path space used in the question. No boundary condition is built into this restriction quotient, and this argument makes no controllability assertion.

## Status

Here the ray quantifier uses complete curves defined for all real times, as in the non-trapping supplier; locally admissible ray segments are not separately quantified over, and no theorem extending every segment to a complete ray is assumed.

The frozen v2 article poses this question with arbitrary endpoints. It reports a positive local Dirichlet result for $n\in\{2,3\}$ and $s\in\{1,2\}$, for sufficiently small endpoint data satisfying the obstacle-boundary compatibility condition, and for every $T>0$; it discusses the Neumann problem separately. This is a restricted result, not a claimed answer to the full question above. The question is recorded as unresolved in the article; no independent current-status review is claimed here.

## Remarks

Exact controllability means that every pair of endpoints in the specified admissible set can be joined by an admissible control and solution. The article's question uses all of $H^s(\Omega_0)$ as its endpoint set, whereas any rigorous answer must specify the admissible control and solution classes and the meanings of the boundary conditions.
