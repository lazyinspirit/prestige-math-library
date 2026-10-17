---
id: thm-elliptic-fe-gradient-error-in-energy-norms
kind: theorem
title: Conforming elliptic finite-element reduced gradients have an energy-norm error budget
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [thm-elliptic-adjoint-reduced-gradient, def-variational-crime-error-framework, thm-cea-quasi-optimality-for-conforming-galerkin-approximations, thm-first-strang-lemma-for-conforming-perturbed-galerkin, def-countable-choice, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited through the Lax-Milgram, Céa, and Strang suppliers used to obtain state and adjoint energy bounds; no unrestricted choice is used."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Hannes Meinlschmidt, Optimization with Partial Differential Equations, complete lecture notes, §§1.6 and 3.2"
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §§2.4–3"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
    - title: "Christian Clason, Introduction to Finite Element Methods, complete lecture notes, §§1.2 and 6.1"
      url: "https://arxiv.org/pdf/1709.08618v2.pdf"
---

## Statement

Assume Countable Choice and the elliptic state/adjoint setting of [[thm-elliptic-adjoint-reduced-gradient]]. Let $V_h\subseteq V$ be a finite-dimensional conforming space. Let $a_{\theta,h}$ and $\ell_{\theta,h}$ be operator-norm $C^1$ in $\theta$, uniformly coercive on $V_h$, and define the discrete state by $a_{\theta,h}(u_h,v_h)=\ell_{\theta,h}(v_h)$. Let $J_h:V_h\times\Theta\to\mathbb R$ be $C^1$, and let $p_h\in V_h$ solve $a_{\theta,h}(v_h,p_h)=D_uJ_h(u_h,\theta)[v_h]$. Suppose the parameter derivatives of the discrete forms and loads have specified bounded extensions to $V$ that agree with their values on $V_h$. Let $u,p$ be the exact state and adjoint, and let $u_h,p_h\in V_h$ be their discrete counterparts, with certified energy bounds
$$\|u-u_h\|_V\le E_u,\qquad \|p-p_h\|_V\le E_p.$$
For an exact conforming Galerkin solve these bounds may be supplied by [[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]]; for a conforming perturbed solve they may be supplied by [[thm-first-strang-lemma-for-conforming-perturbed-galerkin]], with all load, form, geometry and quadrature defects retained as in [[def-variational-crime-error-framework]]. Define exact and discrete reduced gradients by
$$g[\eta]=D_\theta J(u,\theta)[\eta]+\ell_\theta'[\eta](p)-a_\theta'[\eta](u,p),\qquad g_h[\eta]=D_\theta J_h(u_h,\theta)[\eta]+\ell_{\theta,h}'[\eta](p_h)-a_{\theta,h}'[\eta](u_h,p_h).$$
Assume for $\|\eta\|_2\le1$ that $\|\ell_\theta'[\eta]\|_{V^*}\le M_\ell$, $\|a_\theta'[\eta]\|_{\mathcal L(V,V^*)}\le M_a$, the direct-objective defect satisfies $|D_\theta J_h(u_h,\theta)[\eta]-D_\theta J(u,\theta)[\eta]|\le\varepsilon_J$, and the derivative-data defects obey
$$\|\ell_{\theta,h}'[\eta]-\ell_\theta'[\eta]\|_{V^*}\le\varepsilon_\ell,\qquad \|a_{\theta,h}'[\eta]-a_\theta'[\eta]\|_{\mathcal L(V,V^*)}\le\varepsilon_a.$$
Put $U_*=\max(\|u\|_V,\|u_h\|_V)$ and $P_*=\max(\|p\|_V,\|p_h\|_V)$. Then
$$\|g_h-g\|_{\Theta^*}\le\varepsilon_J+M_\ell E_p+\varepsilon_\ell P_*+M_a(E_uP_*+U_*E_p)+\varepsilon_aU_*P_*.$$
The derivative-data defects are separate obligations: ordinary state and adjoint Strang bounds do not by themselves bound derivative defects.

## Facts & Assumptions

**Given:** The exact elliptic reduced-gradient formula, the conforming discrete state and adjoint equations, their energy error bounds $E_u,E_p$, and the derivative-data bounds in the Statement.

[F1] The reduced gradient is $J_\theta[\eta]+\ell_\theta'[\eta](p)-a_\theta'[\eta](u,p)$ ([[thm-elliptic-adjoint-reduced-gradient]]).

[F2] Céa's estimate bounds a conforming Galerkin error by $M/\alpha$ times its best energy approximation ([[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]]).

[F3] For conforming perturbed forms, the first Strang estimate includes best approximation and form/load defects; the variational-crime framework identifies geometry, data and quadrature contributions to those defects ([[thm-first-strang-lemma-for-conforming-perturbed-galerkin]], [[def-variational-crime-error-framework]]).

[F4] The derivative of a C1 composition is given by the chain rule ([[thm-chain-rule-for-total-derivatives]]).

[A1] Both state and adjoint equations satisfy the hypotheses of either [F2] or [F3], with their own right-hand sides, defects, and coercivity constants. Countable Choice ([[def-countable-choice]]) is used through those suppliers.

## Proof

1.1 Apply [F2] to an exact conforming Galerkin state and its adjoint, or [F3] to each conforming perturbed equation, using the transposed form $a^\dagger(v,w)=a(w,v)$ for the adjoint. Transposition preserves boundedness and coercivity constants. Under [A1], the resulting two bounds are $E_u,E_p$, with all applicable form and load defects, including geometry and quadrature contributions, retained as specified by [F3]. [A1, F2, F3]

1.2 Choose a basis of $V_h$. Coercivity makes the discrete state matrix $K_h(\theta)$ invertible, and its entries and the load coordinates are $C^1$. Uniform coercivity makes $K_h(\theta+z)^{-1}$ locally bounded. The identity $K_h(\theta+z)^{-1}-K_h(\theta)^{-1}=-K_h(\theta+z)^{-1}(K_h(\theta+z)-K_h(\theta))K_h(\theta)^{-1}$ first gives continuity of the inverse. Using $K_h(\theta+z)-K_h(\theta)=DK_h(\theta)[z]+o(\|z\|_2)$ in that identity gives $D(K_h^{-1})(\theta)[z]=-K_h(\theta)^{-1}DK_h(\theta)[z]K_h(\theta)^{-1}$; this derivative is continuous, so $K_h^{-1}$ and hence $u_h(\theta)$ are $C^1$. Differentiating the state equation gives $a_{\theta,h}(w_h,v_h)=\ell_{\theta,h}'[\eta](v_h)-a_{\theta,h}'[\eta](u_h,v_h)$. By [F4], $D j_h[\eta]=J_{\theta,h}'[\eta]+D_uJ_h[w_h]$; use the discrete adjoint equation with $v_h=w_h$, then the differentiated state equation with $v_h=p_h$, to obtain the formula for $g_h$ in the Statement. The continuous formula is supplied by [F1]. [F1, F4, given, algebra]

2.1 Fix $\eta$ with $\|\eta\|_2\le1$. Subtract the continuous and discrete formulas. The direct-objective term is bounded by $\varepsilon_J$. Add and subtract $\ell_\theta'[\eta](p_h)$; then $|\ell_{\theta,h}'[\eta](p_h)-\ell_\theta'[\eta](p)|\le\varepsilon_\ell\|p_h\|_V+M_\ell\|p_h-p\|_V\le\varepsilon_\ell P_*+M_\ell E_p$. [F1, step 1.2, given, algebra]

3.1 Add and subtract $a_\theta'[\eta](u_h,p_h)$. The derivative-form data defect contributes at most $\varepsilon_a U_*P_*$. The remaining perturbation equals $a_\theta'[\eta](u-u_h,p_h)+a_\theta'[\eta](u,p-p_h)$ up to an overall sign, so $$|a_\theta'[\eta](u-u_h,p_h)+a_\theta'[\eta](u,p-p_h)|\le M_a(E_uP_*+U_*E_p).$$ Thus for every unit $\eta$, $|g_h[\eta]-g[\eta]|$ is bounded by the displayed constant. [given, step 2.1, algebra]

4.1 Taking the supremum over all $\|\eta\|_2\le1$ gives the asserted dual norm bound. The separate $\varepsilon$ terms show why state error alone does not certify a reduced-gradient error. [step 3.1, algebra] ∎

