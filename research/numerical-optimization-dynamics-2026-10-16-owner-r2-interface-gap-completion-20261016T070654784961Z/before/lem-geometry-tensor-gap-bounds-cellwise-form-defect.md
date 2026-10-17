---
id: lem-geometry-tensor-gap-bounds-cellwise-form-defect
kind: lemma
title: Cellwise geometry tensor gaps bound form error and stability loss
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-geometry-lift-and-tensor-discrepancy, lem-discrete-form-perturbation-preserves-coercivity, def-bounded-coercive-and-symmetric-sesquilinear-forms, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-chain-rule-for-differentials-of-smooth-maps, thm-holder-inequality-for-integrals, thm-cauchy-schwarz-and-the-euclidean-norm, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 27, Error analysis with variational crimes
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap27.pdf
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
---

## Statement

Assume the geometry setting of [[def-geometry-lift-and-tensor-discrepancy]], and suppose $\Omega_h$ has a nonempty finite measurable partition into bounded cells $\{K\}$, with $h_K:=\operatorname{diam}(K)$ and $h:=\max_Kh_K$. For real-valued $U,W\in C^1(\Omega)$ with $\nabla U,\nabla W\in L^2(\Omega)$, put $v:=U\circ\Phi_h$ and $w:=W\circ\Phi_h$, and assume their gradients are square-integrable on each cell. Then the physical exact form $a(U,W)$ pulled back by $\Phi_h$ is $a_h^{\mathrm{lift}}(v,w)$. Suppose the implemented tensors $\widetilde B_h$ are real symmetric and measurable, with $\eta_{G,K}<\infty$. The form $\widetilde a_h(v,w):=\sum_K\int_K\nabla v^T\widetilde B_h\nabla w$ satisfies

$$|a_h^{\mathrm{lift}}(v,w)-\widetilde a_h(v,w)|\le\sum_K\eta_{G,K}\|\nabla v\|_{L^2(K)}\|\nabla w\|_{L^2(K)}\le\eta_G\|\nabla v\|_{L^2(\Omega_h)}\|\nabla w\|_{L^2(\Omega_h)},$$

where $\eta_G:=\max_K\eta_{G,K}$. If $\eta_{G,K}\le C_Gh_K^s$ for $s>0$, the form defect is at most $C_Gh^s\|\nabla v\|_2\|\nabla w\|_2$. Moreover, if $J_h\ge j_->0$, $0<L$, and $\|D\Phi_h\|_{L^\infty,\mathrm{op}}\le L$, then $B_h\succeq\beta I$ with $\beta=j_-\lambda/L^2$. For the stability conclusion, let $Z_h$ be a real Hilbert space of pullback functions with inner product $\int_{\Omega_h}\nabla v\cdot\nabla w$, so its norm is $\|\nabla v\|_{L^2(\Omega_h)}$. Restrict the exact and implemented forms to $Z_h$. If $\eta_G\le\beta/2$, the implemented form is coercive on $Z_h$ with constant at least $\beta/2$. The rate assumption is separate from the lift; neither it nor completeness of the gradient-norm space follows from a lift alone.

## Facts & Assumptions

**Given:** Countable Choice; the geometry definition; a nonempty finite measurable cell partition; physical functions $U,W$ and their pullbacks $v,w$ as stated; a real symmetric measurable tensor $A$ with $\lambda I\preceq A\preceq\Lambda I$; a $C^1$ diffeomorphism with positive Jacobian; measurable symmetric implemented tensors $\widetilde B_h$ with finite cell discrepancies; and, for the coercivity conclusion, the real Hilbert space $Z_h$ with the gradient inner product specified in the Statement.

[F1] [[def-geometry-lift-and-tensor-discrepancy]]: $B_h=J_hD\Phi_h^{-1}(A\circ\Phi_h)D\Phi_h^{-T}$ and $\eta_{G,K}=\|B_h-\widetilde B_h\|_{L^\infty(K;\mathrm{op})}$.

[F2] [[thm-chain-rule-for-differentials-of-smooth-maps]]: differentiating $U\circ\Phi_h$ gives $\nabla(U\circ\Phi_h)=D\Phi_h^T(\nabla U\circ\Phi_h)$, so $\nabla U\circ\Phi_h=D\Phi_h^{-T}\nabla(U\circ\Phi_h)$.

[F3] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under Countable Choice, a $C^1$ diffeomorphism changes variables by the positive factor $J_h$ for every nonnegative measurable integrand.

[F4] [[thm-holder-inequality-for-integrals]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: integral Cauchy–Schwarz applies on each cell, and the finite sum of cell products is bounded by the product of the two Euclidean norms of the cellwise L2 norms.

[F5] [[lem-discrete-form-perturbation-preserves-coercivity]]: a diagonal perturbation bounded by $\eta\|v\|^2$ lowers a coercivity constant by at most $\eta$.

[F6] [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]: coercivity in a real Hilbert space means $a(v,v)\ge\alpha\|v\|^2$ for every vector.

[A3] Countable Choice is the explicit assumption of the change-of-variables supplier [F3] ([[def-countable-choice]]).

[A1] $J_h\ge j_->0$, $0<L$, and $\|D\Phi_h\|_{L^\infty,\mathrm{op}}\le L$.

[A2] On each cell $K$, $\eta_{G,K}\le C_Gh_K^s$ for the stated optional rate conclusion.

## Proof

1.1 Set $v=U\circ\Phi_h$ and $w=W\circ\Phi_h$. By [F2], $\nabla U\circ\Phi_h=D\Phi_h^{-T}\nabla v$ and likewise for $W$. Under the Countable Choice hypothesis [A3], apply [F3] to the nonnegative measurable energy density $\nabla U^TA\nabla U$ to obtain $a(U,U)=a_h^{\mathrm{lift}}(v,v)$; the same applies to $W$ and $U+W$. Since $A$ and $B_h$ are symmetric, the real polarization identity $2a(U,W)=a(U+W,U+W)-a(U,U)-a(W,W)$ yields $a(U,W)=a_h^{\mathrm{lift}}(v,w)$. [F1, F2, F3, A3, given, algebra]

1.2 On each cell, the operator-norm definition and integral Cauchy–Schwarz [F4] give $|\int_K\nabla v^T(B_h-\widetilde B_h)\nabla w|\le\eta_{G,K}\|\nabla v\|_{L^2(K)}\|\nabla w\|_{L^2(K)}$. Summing over cells and using $\eta_{G,K}\le\eta_G$ together with finite Cauchy–Schwarz [F4] proves both displayed form-defect bounds; under [A2], $\eta_G\le C_Gh^s$. [F1, F4, A2, algebra]

1.3 For every vector $\xi$, [A1] and $A\succeq\lambda I$ imply $\xi^TB_h\xi=J_h(D\Phi_h^{-T}\xi)^TA(\Phi_h)(D\Phi_h^{-T}\xi)\ge j_-\lambda\|D\Phi_h^{-T}\xi\|^2\ge(j_-\lambda/L^2)\|\xi\|^2$. Thus $B_h\succeq\beta I$. [F1, A1, given, algebra]

2.1 The diagonal estimate in step 1.2 has constant $\eta_G$. On $Z_h$, the exact lifted form is coercive with constant $\beta$ by step 1.3 and [F6]. Apply [F5] with $V=V_h=Z_h$ to obtain coercivity of the implemented form with constant at least $\beta-\eta_G\ge\beta/2$. [F5, F6, given, step 1.2, step 1.3, algebra] ∎
