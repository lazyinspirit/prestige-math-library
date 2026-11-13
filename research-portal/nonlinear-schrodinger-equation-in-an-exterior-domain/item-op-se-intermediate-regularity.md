---
title: Three-dimensional intermediate Sobolev control
status: published
research_item: op-se-intermediate-regularity
dependency_level: 9
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: Frozen v2 PDF page 21, section 5.2(B); page 16, Remark 5; pages 15–16,
        Proposition 3.9.
      statement: Section 5.2(B) records the three-dimensional intermediate range 1 < s
        <= 3/2 as left open by the work and proposes combining the L4-in-time,
        Linfinity-in-space bound with Moser-type estimates in the Dirichlet
        scale. Remark 5 reports an algebra-based extension for 3/2 < s <= 2 in
        dimension three. Proposition 3.9 treats local exact controllability at s
        = 1 for the cubic and quintic systems.
      hypotheses: The attributed nonlinear control statements concern the homogeneous
        Dirichlet system on a connected smooth non-trapping exterior domain, for
        T > 0, m in {3,5}, real nonzero lambda, and data near zero; the present
        item specializes to dimension three. The intermediate-range estimates
        are proposed work, not assumed or proved inputs.
      reading_limits: Checked the formulation in frozen v2 PDF section 5.2(B), the
        statement of Remark 5 and the statement of Proposition 3.9, with its
        conclusion on page 16. This citation records what the article asks and
        reports; it supplies no independent proof of the reported control
        results and no survey of worldwide open-problem status.
---

PDF p. 21: ` §5.2(B), three-dimensional intermediate range `

## Prerequisites

- [def-se-internal-systems](item-def-se-internal-systems)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [def-se-foundation-control-language](item-def-se-foundation-control-language)
- [def-se-perturbation-hypotheses](item-def-se-perturbation-hypotheses)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Open problem

Assume the Axiom of Choice. Let $\Omega=\mathbb R^3\setminus\Theta$ be the connected exterior of a nonempty compact obstacle with smooth boundary, and suppose that $\Theta$ is non-trapping: each admissible generalized ray leaves each compact set in finite forward time. Let $T>0$ and $1<s\leq3/2$. Let $\varphi$ be the cutoff in [def-se-internal-systems](item-def-se-internal-systems), zero on $|x|\leq R$ and one for $|x|\geq R+1$, where $\Theta\subset B_R(0)$.

For $m\in\{3,5\}$ and $\lambda\in\mathbb R\setminus\{0\}$, consider the Dirichlet system $i\partial_t v+\Delta v+\lambda|v|^{m-1}v=\varphi h$ on $(0,T)\times\Omega$. Is it locally exactly controllable near zero in $H_D^s(\Omega)$? Explicitly, is there $\delta>0$ such that every $v_0,v_T\in H_D^s(\Omega)$ with norms less than $\delta$ can be joined by a solution $v\in C([0,T];H_D^s(\Omega))$ with $v(0)=v_0$, $v(T)=v_T$ and a control $h\in C([0,T];H_D^s(\Omega))$?

Here $H_D^s(\Omega)$ is the spectral domain of $(I-\Delta_D)^{s/2}$, with its graph norm, and $C([0,T];H_D^s(\Omega))$ means norm-continuous paths. The boundary condition is homogeneous Dirichlet, interpreted in the solution class; the interior equation and endpoint conditions have the meanings specified in [def-se-internal-systems](item-def-se-internal-systems).

The article proposes combining an $L^4_tL^\infty_x$ bound with suitable Moser-type estimates in the Dirichlet scale. In this question, such estimates mean bounds controlling the nonlinearity and its differences in $L^1(0,T;H_D^s)$ by appropriate powers of a solution-space norm, as required in [def-se-perturbation-hypotheses](item-def-se-perturbation-hypotheses). The mixed norm is the scalar sectionwise norm of [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces); it does not by itself require strong measurability into $L^\infty(\Omega)$. These estimates and the existence of an appropriate solution space are part of the proposed route, not assumptions that resolve the question.

## Status

The frozen article v2, PDF page 21, §5.2(B), records this intermediate range as a question and suggests the above route. Its Remark 5, PDF page 16, reports a separate algebra-based extension for $s>3/2$ in dimension three; the endpoint $s=1$ is treated in its Proposition 3.9. The present item makes no claim that the proposed fractional estimates or the requested controllability have been established. This is an article-status record as of the frozen v2; no independent survey establishing the current worldwide status has been performed.
