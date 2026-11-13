---
title: Unique continuation for general non-trapping obstacles and trajectories
status: published
research_item: op-se-ucp-general
dependency_level: 11
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 21, §5.2(A); PDF pages 4–5, hypotheses (W) and (UCPw)
      statement: The authors ask whether (UCPw) holds for general trajectories and
        every non-trapping obstacle. They note time-dependent, generally
        nonanalytic potentials and suggest Carleman estimates, which usually
        require additional geometric assumptions such as star-shapedness.
      hypotheses: The trajectory and unique-continuation formulations are those in (W)
        and (UCPw), with the article's exterior-domain hypotheses.
      reading_limits: The frozen extracted text at §5.2(A) and the recorded local
        formulations of (W) and (UCPw) were consulted; this citation attributes
        the question and does not prove its conclusion.
    - title: Unique continuation for Schrödinger operators with partially Gevrey
        coefficients
      url: https://laurentca.perso.math.cnrs.fr/papiers/Qualitative-Schrod.pdf
      locator: "Author manuscript dated 31 March 2025: abstract, PDF p. 1; Section
        1.2, equation (1.18), Theorem 1.7 and equation (1.19), PDF pp. 6–7."
      statement: The abstract gives local unique continuation for Schrödinger
        operators with time-independent Lipschitz metric and lower-order
        coefficients Gevrey 2 in time and bounded in space. For the scalar
        Dirichlet equation i partial_t u + Delta u + q u = 0 on the Euclidean
        unit disk, Theorem 1.7 states that for every T > 0 there is C > 0 such
        that the squared initial L2 norm is at most C times the integral of |u|
        squared over (0,T) times omega.
      hypotheses: For Theorem 1.7, the manifold is the closed Euclidean unit disk D; q
        is real-valued and belongs to C-infinity([0,T] times D) intersected with
        G2((0,T); L-infinity-loc(Int D)); omega is a nonempty relatively open
        subset of D meeting its boundary; the solution of (1.18) has homogeneous
        Dirichlet boundary condition and initial datum in L2(D). The abstract
        has the separate metric and coefficient assumptions stated in the
        statement field.
      reading_limits: "This maintenance turn read the abstract and Section 1.2,
        including (1.18), Theorem 1.7, (1.19), and the discussion immediately
        following it, in the author-hosted CNRS manuscript. The proof and the
        cited high-frequency result ALM16 were not reconstructed. This scalar
        disk result is contextual: no application to the conjugate-coupled
        exterior adjoint equation or arbitrary (W) trajectories is claimed, and
        no exhaustive worldwide status survey was performed."
---

PDF p. 21: ` §5.2(A) `

## Prerequisites

- [def-se-trajectory](item-def-se-trajectory)
- [def-se-ucpw](item-def-se-ucpw)
- [def-se-nontrapping](item-def-se-nontrapping)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [` Unique continuation for Schrödinger operators with partially Gevrey coefficients · Author manuscript dated 31 March 2025: abstract, PDF p. 1; Section 1.2, equation (1.18), Theorem 1.7 and equation (1.19), PDF pp. 6–7. `](https://laurentca.perso.math.cnrs.fr/papiers/Qualitative-Schrod.pdf)


## Open problem

Assume the Axiom of Choice: every family of nonempty sets admits a choice function. Let $n\ge2$, $T>0$, and $\lambda\in\mathbb R\setminus\{0\}$. Let $\Theta\subset\mathbb R^n$ be a nonempty compact obstacle with smooth boundary, connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and the non-trapping property of [def-se-nontrapping](item-def-se-nontrapping). For any $R>0$ with $\Theta\subset B_R(0)$, put $\omega=\{x\in\Omega:|x|>R\}$.

For every reference trajectory $w$ satisfying (W) as defined in [def-se-trajectory](item-def-se-trajectory), does (UCPw), as defined in [def-se-ucpw](item-def-se-ucpw), hold for this $T$ and $\omega$? Explicitly, does every $v\in C([0,T];H_0^1(\Omega))$ satisfying $i\partial_t v+\Delta v+2\lambda|w|^2v-\lambda w^2\overline v=0$ in distributions on $(0,T)\times\Omega$ and vanishing almost everywhere on $(0,T)\times\omega$ vanish identically as an $H_0^1(\Omega)$-valued path?

## Status

The frozen article, §5.2(A), reports this question open for general trajectories and non-trapping obstacles. It notes that the coefficients can depend on time and need not be analytic, and proposes Carleman estimates as a possible approach while noting that known approaches commonly impose additional geometry. This is attribution of the authors' status and suggested approach, not a proof that the question remains open worldwide.

A related result of Filippas, Laurent and Léautaud treats Schrödinger operators with lower-order coefficients Gevrey 2 in time; their Theorem 1.7 concerns a scalar equation on the unit disk under additional hypotheses. These conditions and that scalar setting do not establish the question above for the conjugate-coupled equation and arbitrary (W) trajectories. A limited literature search on 2026-11-13 did not identify a solution covering the complete stated formulation; it is not an exhaustive current-status review.
