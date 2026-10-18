---
id: thm-supg-general-p1-error-and-stability
kind: theorem
title: "Multidimensional P1 SUPG consistency, coercivity, and error bound"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-supg-general-convection-diffusion-reaction-model, def-supg-general-residual-form, lem-supg-general-p1-interpolation-estimate, lem-affine-simplex-gauss-green-formula, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "Definition 5.14, Definition 5.21, Corollary 5.23, and Theorem 5.26 with its complete proof, printed pp. 54–62."
    - title: "Hans Petter Langtangen, INF5620: Numerical Methods for Partial Differential Equations, lecture slides"
      url: "https://hplgit.github.io/INF5620/doc/web/literature/slides5620_12_8.pdf"
      locator: "Slides 81–86, PDF pp. 10–11: streamline-direction perturbation and the warning that parameter selection is a separate multidimensional problem."
---

## Statement

Use the model of [[def-supg-general-convection-diffusion-reaction-model]] and form/parameter of [[def-supg-general-residual-form]]. Assume Countable Choice, and let $u\in C^2(\overline\Omega)$ solve the stated strong problem. For every continuous, zero-boundary function $w$ whose restriction to each cell has square-integrable values and square-integrable weak first derivatives, define
$$\|w\|_{\mathrm{SD},h}^2:=\epsilon\|\nabla w\|_{L^2(\Omega)}^2+\omega\|w\|_{L^2(\Omega)}^2+\sum_K\delta_K\|b\cdot\nabla w\|_{L^2(K)}^2.$$
$$M_2:=|\Omega|^{1/2}\|D^2u\|_{L^\infty(\Omega)},\quad B:=\|b\|_{L^\infty(\Omega)},\quad C:=\|c\|_{L^\infty(\Omega)},\quad \delta_*:=\max_K\delta_K.$$
Then the discrete form is coercive:
$$a_h(v_h,v_h)\ge\frac34\|v_h\|_{\mathrm{SD},h}^2\qquad(v_h\in V_h),$$
the discrete problem has a unique solution $u_h$, and the method is consistent, $a_h(u,v_h)=F_h(v_h)$. Moreover, with $C_*$ depending only on dimension, shape regularity, and the interpolation constant,
$$\|u-u_h\|_{\mathrm{SD},h}\le C_*M_2\left[\left(\sqrt{\epsilon}+\frac{B}{\sqrt{\omega}}\right)h+\left(\sqrt{\omega}+\frac{C}{\sqrt{\omega}}\right)h^2+B\sqrt{\delta_*}\,h+\sqrt{\delta_*}\left(\sqrt d\,\epsilon+Bh+Ch^2\right)\right].$$
This is a P1 estimate for the stated strong regularity and parameter branch; it does not claim stability for unrestricted multidimensional parameters or weaker regularity.

## Facts & Assumptions

**Given:** Countable Choice; a connected polyhedral domain with a finite shape-regular affine simplicial mesh; $\epsilon>0$, $b\in C^1$, $c\in C$, $c-\frac12\nabla\cdot b\ge\omega>0$, the parameter bound in [[def-supg-general-residual-form]], and an exact $C^2$ solution with zero boundary values.

[F1] [[def-supg-general-convection-diffusion-reaction-model]]: the mesh is matching and shape regular, $V_h$ is continuous P1 with zero boundary values, and the coefficient and strong-solution hypotheses above hold.

[F2] [[def-supg-general-residual-form]]: $a_h$ is the Galerkin form plus the cell residual pairing with $b\cdot\nabla v_h$, and $\delta_K\|c\|_{\infty,K}^2\le\omega/4$.

[F3] [[lem-supg-general-p1-interpolation-estimate]]: for $\eta=u-I_hu$, $\|\eta\|_2\le C_Ih^2M_2$ and $\|\nabla\eta\|_2\le C_IhM_2$.

[F4] [[lem-affine-simplex-gauss-green-formula]] under [[def-countable-choice]]: on each affine simplex, a $C^1$ vector field has volume divergence integral equal to its outward facet flux sum.

[A1] Countable Choice is used only through the imported simplex Gauss–Green identity [F4] ([[def-countable-choice]]).

## Proof

1.1 For $v_h\in V_h$, apply [F4] on each cell to $G=bv_h^2/2$. Interior fluxes cancel because $b$ and $v_h$ are continuous and the outward normals oppose; boundary fluxes vanish because $v_h=0$. Hence $(b\cdot\nabla v_h,v_h)_\Omega=-\frac12(\nabla\cdot b,v_h^2)_\Omega$. [A1, F1, F4, given]

1.2 For the exact $u$, apply [F4] cellwise to $G=\epsilon v_h\nabla u$. The interior fluxes cancel and the boundary flux vanishes, so $\epsilon(\nabla u,\nabla v_h)+(b\cdot\nabla u+cu,v_h)=(f,v_h)$. Since $R_K(u)=f$, adding $\sum_K\delta_K(f,b\cdot\nabla v_h)_K$ gives $a_h(u,v_h)=F_h(v_h)$. [A1, F1, F2, F4, given]

1.3 Let $\eta=u-I_hu$. Enlarge the interpolation constant if necessary so $C_I\ge1$; this preserves [F3]. By [F3], $I_hu\in V_h$, $\|\nabla\eta\|_2\le C_IhM_2$, and $\|\eta\|_2\le C_Ih^2M_2$. Cellwise, $\Delta_KI_hu=0$, so $R_K(\eta)=-\epsilon\Delta u+b\cdot\nabla\eta+c\eta$. The Euclidean matrix norm and Cauchy–Schwarz on the diagonal give $|\Delta u(x)|=|\operatorname{tr}D^2u(x)|\le\sqrt d\,|D^2u(x)|$; integrating yields $\|\Delta u\|_2\le\sqrt d M_2$. The triangle inequality in the finite product of cellwise $L^2$ spaces then gives $\left(\sum_K\delta_K\|R_K(\eta)\|_{0,K}^2\right)^{1/2}\le\sqrt{\delta_*}(\sqrt d\,\epsilon M_2+B C_IhM_2+C C_Ih^2M_2)$. Also $\sum_K\delta_K\|b\cdot\nabla\eta\|_{0,K}^2\le\delta_*B^2\|\nabla\eta\|_2^2$, so the product norm satisfies $\|\eta\|_{\mathrm{SD},h}\le C_IM_2(\sqrt{\epsilon}h+\sqrt{\omega}h^2+B\sqrt{\delta_*}h)$. [F1, F2, F3, algebra]

2.1 Since $v_h$ is affine on each cell, $\Delta_Kv_h=0$. Substituting step 1.1 into [F2] gives $a_h(v_h,v_h)=\epsilon\|\nabla v_h\|_2^2+(c-\tfrac12\nabla\cdot b,v_h^2)_\Omega+\sum_K\delta_K\|b\cdot\nabla v_h\|_{0,K}^2+\sum_K\delta_K(c v_h,b\cdot\nabla v_h)_K$. On each cell, Cauchy–Schwarz and [F2] give $|\delta_K(c v_h,b\cdot\nabla v_h)_K|\le\frac14(\omega\|v_h\|_{0,K}^2+\delta_K\|b\cdot\nabla v_h\|_{0,K}^2)$: write the left bound as $(\sqrt{\delta_K}\|c\|_{\infty,K}/\sqrt{\omega})(\sqrt{\omega}\|v_h\|)(\sqrt{\delta_K}\|b\cdot\nabla v_h\|)$, use the first factor $\le1/2$, then $ab/2\le(a^2+b^2)/4$. Since $c-\frac12\nabla\cdot b\ge\omega$, this proves $a_h(v_h,v_h)\ge\frac34\|v_h\|_{\mathrm{SD},h}^2$. [F1, F2, step 1.1, algebra]

3.1 The linear map $V_h\to V_h^*$ induced by $a_h$ has zero kernel: if $a_h(w_h,v_h)=0$ for all $v_h$, test with $v_h=w_h$ and use step 2.1 to get $w_h=0$. The spaces have equal finite dimension, so this map is bijective and the discrete problem has a unique solution $u_h$. [F1, step 2.1, given, algebra]

4.1 Subtract the discrete equation from step 1.2 to obtain $a_h(u-u_h,v_h)=0$ for every $v_h\in V_h$. Put $e_h:=u_h-I_hu\in V_h$. Taking $v_h=e_h$ and using $u-u_h=\eta-e_h$ gives $a_h(e_h,e_h)=a_h(\eta,e_h)$. [F2, step 3.1, step 1.2, step 1.3, algebra]

5.1 Cauchy–Schwarz bounds the diffusion, convection, reaction, and stabilization terms in $a_h(\eta,e_h)$ by $\sqrt{\epsilon}\|\nabla\eta\|_2\|e_h\|_{\mathrm{SD},h}$, $B\|\nabla\eta\|_2\|e_h\|_{\mathrm{SD},h}/\sqrt{\omega}$, $C\|\eta\|_2\|e_h\|_{\mathrm{SD},h}/\sqrt{\omega}$, and $(\sum_K\delta_K\|R_K(\eta)\|_{0,K}^2)^{1/2}\|e_h\|_{\mathrm{SD},h}$, respectively. If $e_h=0$ the bound below is immediate; otherwise divide step 4.1 by its norm and use coercivity in step 2.1 to get $\|e_h\|_{\mathrm{SD},h}\le\frac43(\sqrt{\epsilon}\|\nabla\eta\|_2+\frac{B}{\sqrt{\omega}}\|\nabla\eta\|_2+\frac{C}{\sqrt{\omega}}\|\eta\|_2+(\sum_K\delta_K\|R_K(\eta)\|_{0,K}^2)^{1/2})$. [F2, step 2.1, step 4.1, algebra]

6.1 The norm in the statement is the product $L^2$ norm of $(\sqrt{\epsilon}\nabla w,\sqrt{\omega}w,(\sqrt{\delta_K}b\cdot\nabla w)_K)$, so $\|u-u_h\|_{\mathrm{SD},h}\le\|\eta\|_{\mathrm{SD},h}+\|e_h\|_{\mathrm{SD},h}$. Using step 1.3 in step 5.1 bounds the sum by $C_IM_2(\sqrt{\epsilon}h+\sqrt{\omega}h^2+B\sqrt{\delta_*}h)+\frac43C_IM_2((\sqrt{\epsilon}+B/\sqrt{\omega})h+(C/\sqrt{\omega})h^2+\sqrt{\delta_*}(\sqrt d\,\epsilon+Bh+Ch^2))$. Since $C_I+\frac43C_I=\frac73C_I$, this is at most the displayed right-hand side with $C_*:=\frac73C_I$, which has the claimed dependence. [F1, F2, F3, step 1.3, step 5.1, algebra] ∎
