---
id: thm-sipdg-energy-error-estimate
kind: theorem
title: A direct Strang-type energy error estimate for SIPDG
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    def-sipdg-bilinear-form-and-energy-norm,
    thm-sipdg-coercivity-large-penalty,
    thm-sipdg-exact-consistency,
    lem-sipdg-discrete-flux-inverse-bound,
    lem-sipdg-boundedness-augmented-norm,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 38:
        Discontinuous Galerkin"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap38.pdf"
      locator: "§38.3, Theorem 38.10, printed pp. 197–198: stability,
        consistency/boundedness, and the DG energy error estimate."
    - title: "Douglas N. Arnold, Franco Brezzi, Bernardo Cockburn, and L. Donatella
        Marini, Unified Analysis of Discontinuous Galerkin Methods for Elliptic
        Problems, SIAM Journal on Numerical Analysis 39(5) (2002)"
      url: "https://www.math.purdue.edu/~santos/research/disc_galerkin_ref/siam_DG_20\
        02.pdf"
      locator: "§5.1, printed pp. 1767–1768: the stable, consistent DG energy estimate
        derived from coercivity, boundedness, and approximation."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the mesh, coefficient, penalty, and exact-solution hypotheses of [[thm-sipdg-exact-consistency]] and [[thm-sipdg-coercivity-large-penalty]]. Let $u_h\in V_h^{\rm br}$ be the unique discrete solution, so $a_h(u_h,v_h)=\ell_h(v_h)$ for every $v_h\in V_h^{\rm br}$. Let $C_{\rm flux}$ be the constant in [[lem-sipdg-discrete-flux-inverse-bound]] and put $C_B:=2+2\gamma^{-1/2}$. Then for every $w_h\in V_h^{\rm br}$,
$$\|u-u_h\|_{DG}\le\bigl(1+2C_B\sqrt{1+C_{\rm flux}}\bigr)\|u-w_h\|_{DG,*}.$$
Consequently $\|u-u_h\|_{DG}\le\bigl(1+2C_B\sqrt{1+C_{\rm flux}}\bigr)\inf_{w_h\in V_h^{\rm br}}\|u-w_h\|_{DG,*}$. The augmented approximation term retains the face-flux trace needed to bound the SIP consistency terms; no approximation rate is asserted without a separate bound on that term.

## Facts & Assumptions

**Given:** Countable Choice; the exact solution $u$ and discrete solution $u_h$ satisfying the equations in the Statement; the coercivity threshold; and the mesh-dependent expressions $\|\cdot\|_{DG}$ and $\|\cdot\|_{DG,*}$.

[F1] The form and energy expressions are defined on $\mathcal D_h$, which contains the cellwise $H^2$ exact solution and the broken polynomials. ([[def-sipdg-bilinear-form-and-energy-norm]])

[F2] For $\gamma\ge4C_{\rm flux}$, $a_h(v_h,v_h)\ge\tfrac12\|v_h\|_{DG}^2$ on $V_h^{\rm br}$. ([[thm-sipdg-coercivity-large-penalty]])

[F3] For the stated piecewise $H^2$ exact solution, $a_h(u,v_h)=\ell_h(v_h)$ for every $v_h\in V_h^{\rm br}$. ([[thm-sipdg-exact-consistency]])

[F4] For every $z_h\in V_h^{\rm br}$, $\sum_Fh_F\|q_F(z_h)\|_{L^2(F)}^2\le C_{\rm flux}\sum_K\int_K\nabla z_h^TA_K\nabla z_h$. ([[lem-sipdg-discrete-flux-inverse-bound]])

[F5] The form obeys $|a_h(v,w)|\le C_B\|v\|_{DG,*}\|w\|_{DG,*}$ on $\mathcal D_h$, and $\|\cdot\|_{DG}$ is a seminorm there. ([[lem-sipdg-boundedness-augmented-norm]])

[F6] Countable Choice is used by the inverse-trace and physical-simplex Green suppliers [F3]–[F4]. ([[def-countable-choice]])

## Proof

1.1 The exact solution $u$ is cellwise $H^2$ and $u_h,w_h$ are broken polynomials, so $u-w_h$ and $u_h-w_h$ belong to $\mathcal D_h$. The boundedness constant for their form pairing is $C_B=2+2\gamma^{-1/2}$ by [F5]. [F1, F5, given]

2.1 Fix $w_h$ and set $z_h=u_h-w_h$. If $\|z_h\|_{DG}=0$, then $\|z_h\|_{DG}\le2C_B\sqrt{1+C_{\rm flux}}\|u-w_h\|_{DG,*}$ is immediate. Otherwise, coercivity [F2], the discrete equation and exact consistency [F3] give $\tfrac12\|z_h\|_{DG}^2\le a_h(z_h,z_h)=a_h(u-w_h,z_h)$. By [F4] and $\sum_K\int_K\nabla z_h^TA_K\nabla z_h\le\|z_h\|_{DG}^2$, $\|z_h\|_{DG,*}\le\sqrt{1+C_{\rm flux}}\|z_h\|_{DG}$. Apply [F5] and step 1.1 to obtain $\tfrac12\|z_h\|_{DG}^2\le C_B\sqrt{1+C_{\rm flux}}\|u-w_h\|_{DG,*}\|z_h\|_{DG}$. Dividing by $\|z_h\|_{DG}>0$ proves $\|z_h\|_{DG}\le2C_B\sqrt{1+C_{\rm flux}}\|u-w_h\|_{DG,*}$. [F1, F2, F3, F4, F5, F6, step 1.1, given, algebra]

3.1 Since $\|\cdot\|_{DG}$ is a seminorm on $\mathcal D_h$ by [F5], its triangle inequality and step 2.1 give $\|u-u_h\|_{DG}\le\|u-w_h\|_{DG}+\|w_h-u_h\|_{DG}\le(1+2C_B\sqrt{1+C_{\rm flux}})\|u-w_h\|_{DG,*}$. This holds for every $w_h$, so taking the infimum proves both assertions. [F5, step 2.1, algebra] ∎
