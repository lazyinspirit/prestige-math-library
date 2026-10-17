---
id: lem-geometry-tensor-gap-bounds-cellwise-form-defect
kind: lemma
title: Cellwise geometry tensor gaps bound form error and stability loss
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-geometry-lift-and-tensor-discrepancy, lem-discrete-form-perturbation-preserves-coercivity, def-bounded-coercive-and-symmetric-sesquilinear-forms, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-chain-rule-for-total-derivatives, thm-holder-inequality-for-integrals, thm-cauchy-schwarz-and-the-euclidean-norm, def-countable-choice, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-arithmetic-and-lattice-operations-preserve-measurability]
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

[F2] [[thm-chain-rule-for-total-derivatives]]: differentiating $U\circ\Phi_h$ gives $\nabla(U\circ\Phi_h)=D\Phi_h^T(\nabla U\circ\Phi_h)$, so $\nabla U\circ\Phi_h=D\Phi_h^{-T}\nabla(U\circ\Phi_h)$.

[F3] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under Countable Choice, a $C^1$ diffeomorphism changes variables by the positive factor $J_h$ for every nonnegative measurable integrand.

[F4] [[thm-holder-inequality-for-integrals]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: integral Cauchy–Schwarz applies on each cell, and the finite sum of cell products is bounded by the product of the two Euclidean norms of the cellwise L2 norms.

[F5] [[lem-discrete-form-perturbation-preserves-coercivity]]: a diagonal perturbation bounded by $\eta\|v\|^2$ lowers a coercivity constant by at most $\eta$.

[F6] [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]: coercivity in a real Hilbert space means $a(v,v)\ge\alpha\|v\|^2$ for every vector.

[F7] Nonnegative Lebesgue integration over measurable sets is a measure ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]), and the integral is linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]). Finite products and sums of measurable real functions are measurable ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

[A3] Countable Choice is the explicit assumption of the change-of-variables supplier [F3] ([[def-countable-choice]]).

[A1] $J_h\ge j_->0$, $0<L$, and $\|D\Phi_h\|_{L^\infty,\mathrm{op}}\le L$.

[A2] On each cell $K$, $\eta_{G,K}\le C_Gh_K^s$ for the stated optional rate conclusion.

## Proof

1.1 Set $v=U\circ\Phi_h$ and $w=W\circ\Phi_h$. By [F2], $\nabla U\circ\Phi_h=D\Phi_h^{-T}\nabla v$ and likewise for $W$. Under the Countable Choice hypothesis [A3], apply [F3] to the nonnegative measurable energy density $\nabla U^TA\nabla U$ to obtain $a(U,U)=a_h^{\mathrm{lift}}(v,v)$; the same applies to $W$ and $U+W$. The physical energies are finite since $A\preceq\Lambda I$ and all three physical gradients are in $L^2$. Their nonnegative pulled-back energy densities therefore have finite integrals. The pointwise polarization identity expresses the pulled-back cross density as half the difference of these three integrable nonnegative densities, hence makes that cross density absolutely integrable. The physical cross density is integrable by the same argument. Since $A$ and $B_h$ are symmetric, the real polarization identity $2a(U,W)=a(U+W,U+W)-a(U,U)-a(W,W)$ yields $a(U,W)=a_h^{\mathrm{lift}}(v,w)$. [F1, F2, F3, A3, given, algebra]

1.2 For every vector $\xi$, [A1] and $A\succeq\lambda I$ imply $\xi^TB_h\xi=J_h(D\Phi_h^{-T}\xi)^TA(\Phi_h)(D\Phi_h^{-T}\xi)\ge j_-\lambda\|D\Phi_h^{-T}\xi\|^2\ge(j_-\lambda/L^2)\|\xi\|^2$. Thus $B_h\succeq\beta I$. The change-of-variables supplier [F3] carries the null exceptional set in the a.e. coefficient bounds to a null set under $\Phi_h$, so these estimates hold almost everywhere after pullback. These same bounds also make the lifted forms finite on every $Z_h$ vector with an $L^2$ gradient: all singular values of $D\Phi_h$ are at most $L$ and their product is $J_h\ge j_-$, so $\|D\Phi_h^{-1}\|_{\mathrm{op}}\le L^{d-1}/j_-$ almost everywhere; also $J_h\le L^d$. Hence $\|B_h\|_{L^\infty,\mathrm{op}}\le \Lambda L^{3d-2}/j_-^2$, and the finite cellwise discrepancies make $\widetilde B_h$ essentially bounded as well. [F1, F3, A1, given, algebra]

2.1 The finite measurable partition and the assumed finite cellwise squared-gradient integrals give global square integrability: apply the measure property [F7] to $|\nabla v|^2$ and $|\nabla w|^2$ to obtain $\|\nabla v\|_2^2=\sum_K\|\nabla v\|_{L^2(K)}^2$ and the analogous identity for $w$. The tensor and gradient entries are measurable, so the defect density $q=\nabla v^T(B_h-\widetilde B_h)\nabla w$ is measurable by [F7]. On each cell $|q|\le\eta_{G,K}|\nabla v||\nabla w|$ almost everywhere; [F4] makes this an integrable majorant, and the finite sum makes $q$ globally $L^1$. Step 1.1 has established that the exact lifted cross density is $L^1$. Thus the implemented cross density, the exact cross density minus $q$, is also $L^1$. Their finite indicator decompositions over the partition and $L^1$ linearity [F7] justify subtracting and summing cell integrals. The operator-norm estimate and integral Cauchy–Schwarz [F4] then give $|\int_K\nabla v^T(B_h-\widetilde B_h)\nabla w|\le\eta_{G,K}\|\nabla v\|_{L^2(K)}\|\nabla w\|_{L^2(K)}$. Summing over cells and using $\eta_{G,K}\le\eta_G$ together with finite Cauchy–Schwarz [F4] proves both displayed form-defect bounds; under [A2], $\eta_G\le C_Gh^s$. [F1, F4, F7, A2, step 1.1, algebra]

3.1 The diagonal estimate in step 2.1 has constant $\eta_G$. On $Z_h$, the exact lifted form is coercive with constant $\beta$ by step 1.2 and [F6]. Apply [F5] with $V=V_h=Z_h$ to obtain coercivity of the implemented form with constant at least $\beta-\eta_G\ge\beta/2$. [F5, F6, given, step 2.1, step 1.2, algebra] ∎
