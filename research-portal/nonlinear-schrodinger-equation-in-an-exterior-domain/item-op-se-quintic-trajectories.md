---
title: Quintic control around nonzero trajectories
status: published
research_item: op-se-quintic-trajectories
dependency_level: 8
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 21, §5.2(C); PDF pages 4–5, Theorems 1.4 and 1.5 and
        hypotheses (W) and (UCPw)
      statement: The authors propose analogues of their linearized and nonlinear
        trajectory-control results for the quintic equation, with potentials
        3λ|w|⁴ and 2λ|w|²w², under a corresponding unique continuation
        hypothesis.
      hypotheses: The referenced trajectory results use the article's exterior
        geometry, non-trapping, trajectory regularity and unique continuation
        assumptions; the nonlinear theorem uses dimensions two and three.
      reading_limits: The cited passages were read in the frozen extracted article
        text. The article proposes this extension; the citation does not
        establish a proof or a worldwide current-status survey.
---

PDF p. 21: ` §5.2(C), first two sentences `

## Prerequisites

- [def-se-internal-systems](item-def-se-internal-systems)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-nontrapping](item-def-se-nontrapping)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)
- [physics:thm-bounded-potential-weak-unique-continuation-in-three-dimensions](https://alphabetamath.cc/physics/item/thm-bounded-potential-weak-unique-continuation-in-three-dimensions)


## Open problem

Assume the Axiom of Choice. Let $n\ge2$, $T>0$ and $\lambda\in\mathbb R\setminus\{0\}$. Let $\Theta\subset\mathbb R^n$ be a nonempty compact obstacle with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and assume it is non-trapping in the sense of [def-se-nontrapping](item-def-se-nontrapping). Choose the cutoff $\varphi$ and control region $\omega=\{x\in\Omega:|x|>R\}$ as in [def-se-internal-systems](item-def-se-internal-systems), and let $H_D^s(\Omega)$ denote the Dirichlet spectral scale of [def-se-dirichlet-scale](item-def-se-dirichlet-scale).

Let a reference trajectory $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ solve $i\partial_t w+\Delta w+\lambda|w|^4w=0$ in the distributional interior sense, with the zero Dirichlet condition supplied by its $H_D^2$ membership. Put $V_1=3\lambda|w|^4$ and $V_2=2\lambda|w|^2w^2$. Assume the corresponding unique continuation property: every $q\in C([0,T];H_0^1(\Omega))$ satisfying $i\partial_tq+\Delta q+V_1q-V_2\overline q=0$ distributionally in $\Omega\times(0,T)$ and vanishing on $\omega\times(0,T)$ is identically zero. The boundary condition is understood through $H_0^1$ membership.

Does the following quintic analogue of linearized controllability hold for $s\in\{1,2\}$? For every $z_0,z_T\in H_D^s(\Omega)$, is there $h\in C([0,T];H_D^s(\Omega))$ and a solution $z\in C([0,T];H_D^s(\Omega))$ of $i\partial_tz+\Delta z+V_1z+V_2\overline z=\varphi h$, with zero Dirichlet condition and endpoints $z(0)=z_0$, $z(T)=z_T$?

When $n\in\{2,3\}$, does the corresponding nonlinear statement also hold: is there $\delta>0$ such that every $v_0,v_T\in H_D^s(\Omega)$ with $\|v_0-w(0)\|_{H_D^s}\le\delta$ and $\|v_T-w(T)\|_{H_D^s}\le\delta$ can be joined by a solution $v\in C([0,T];H_D^s(\Omega))$ of $i\partial_tv+\Delta v+\lambda|v|^4v=\varphi h$, for some $h\in C([0,T];H_D^s(\Omega))$, with zero Dirichlet condition? The equations and endpoint conditions are to be understood in a solution class that makes the distributional equations and boundary and time traces meaningful.

## Status

In §5.2(C), the authors suggest that the two quintic analogues should follow along the same lines under the corresponding unique continuation hypothesis; they do not prove those analogues there. Their cited results near a nonzero trajectory concern the cubic equation, while their quintic result is near zero. This item records their proposed extension as an open question, not an established theorem. As of the present authoring pass, no independent worldwide status survey has been performed; the article's formulation and status were checked against its frozen v2 text.

## Remarks

The unique continuation property above is an explicit hypothesis, not a consequence claimed here of non-trapping. The elliptic, time-independent bounded-potential unique continuation result in [physics:thm-bounded-potential-weak-unique-continuation-in-three-dimensions](https://alphabetamath.cc/physics/item/thm-bounded-potential-weak-unique-continuation-in-three-dimensions) has different hypotheses and does not by itself supply this time-dependent conjugate-coupled property. No physical premise is used.
