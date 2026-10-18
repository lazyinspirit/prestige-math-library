---
id: lem-explicit-rk-differentiated-stages-give-local-c1-order
kind: lemma
title: "Differentiated explicit RK stages give local C1 order"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-explicit-runge-kutta-tableau-and-stage-map
  - lem-parameter-ode-flow-tangent-on-common-tube
  - lem-local-c1-step-consistency-implies-tangent-adjoint-gradient-order
  - prop-explicit-rk-order-conditions-through-four
  - thm-global-error-from-one-step-defect-and-stability
  - thm-chain-rule-for-total-derivatives
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - thm-mean-value-inequality
  - thm-gronwall-integral-inequality
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "William W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
      locator: "Method context for Runge-Kutta optimal-control derivatives; this local composition argument and its explicit constants are proved here, not quoted as an identical external theorem. No new source reading is claimed."
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
      locator: "Method context for adjoint derivative formulations; the stated local consistency composition and constants are proved here. This does not assert an identical theorem in the source or new source reading."
dependency_level: 5
---

## Statement

Use the dimensions, exact interval maps $\Phi_n,K_n$, terminal and initial data, and Euclidean conventions of [[lem-local-c1-step-consistency-implies-tangent-adjoint-gradient-order]]. Let $(A,b,c)$ be a fixed explicit $s$-stage tableau with $c_i=\sum_{j<i}a_{ij}$ and $\sum_i b_i=1$. Its weights may be negative or zero. The actual numerical state and cost maps are
$$Y_i=x+h\sum_{j<i}a_{ij}f(t_n+c_jh,Y_j,\theta),$$
$$\Psi_n=x+h\sum_i b_if(t_n+c_ih,Y_i,\theta),\qquad L_n=h\sum_i b_i\ell(t_n+c_ih,Y_i,\theta).$$
These are exact finite-stage maps, not outputs of a stopped implicit solver.

Assume $f:\mathcal D\to\mathbb R^d$ and $\ell:\mathcal D\to\mathbb R$ are $C^2$ on an open convex time-state-parameter domain. On a common compact convex subset with positive margin in $\mathcal D$, their derivatives through order two are uniformly bounded. All admitted local exact trajectories, all numerical trajectories and stages, and all needed joining segments lie in this domain and common tube, uniformly over the fixed parameter neighborhood and $h\le h_0$. Stage times outside $[t_n,t_{n+1}]$ are included when the tableau has such abscissae. Unique admitted local flows are assumed as in the flow-tangent supplier.

Put $r=d+m$, $E=[I_d\ 0]\in\mathbb R^{d\times r}$ and $E_\theta=[0\ I_m]\in\mathbb R^{m\times r}$. Consider the autonomous augmented system, with components $t,u,\vartheta,C,V,g$,
$$t'=1,\quad \vartheta'=0,\quad u'=f(t,u,\vartheta),\quad C'=\ell(t,u,\vartheta),$$
$$V'=f_u(t,u,\vartheta)V+f_\theta(t,u,\vartheta)E_\theta,$$
$$g'=V^T\ell_u(t,u,\vartheta)^T+E_\theta^T\ell_\theta(t,u,\vartheta)^T.$$
For every admitted local start use $(t_n,x,\theta,0,E,0)$. Suppose application of the same tableau to this augmented system has uniform exact-start defect at most $C_a h^{p+1}$, for an integer $p\ge1$, on a common compact convex augmented tube with positive margin. This is a local augmented-order hypothesis, not a global tangent, adjoint or gradient-error assumption.

Then the actual maps $\Psi_n,L_n$ satisfy all local value, first-derivative, $1+Lh$ derivative-stability, $Mh$ derivative-size, and $Hh$ exact-derivative Lipschitz hypotheses of [[lem-local-c1-step-consistency-implies-tangent-adjoint-gradient-order]], with constants independent of $n,N$. Subject to that lemma's initial and terminal hypotheses, their actual differentiated graph tangents, exact reverse adjoints, and reduced gradients consequently have order-$p$ global error.

A concrete sufficient instantiation for $1\le p\le4$ is that this augmented vector field is $C^4$ with bounded derivatives through order four on its admitted compact convex tube and the tableau satisfies the coefficient equations through order $p$ in [[prop-explicit-rk-order-conditions-through-four]]. Jointly $C^5$ base data $f,\ell$ with bounded derivatives through order five on the base tube are sufficient for this augmented $C^4$ condition. The classical RK4 tableau
$$a_{21}=a_{32}=\tfrac12,\quad a_{43}=1,\quad b=(\tfrac16,\tfrac13,\tfrac13,\tfrac16),\quad c=(0,\tfrac12,\tfrac12,1),$$
with all other $a_{ij}=0$, therefore gives the claimed order-four tangent, nodal-adjoint and gradient approximation under these hypotheses. For general $p$, retain the explicit local augmented-defect hypothesis above; no higher-order coefficient theorem is being asserted.

## Facts & Assumptions

**Given:** The hypotheses and data in the Statement.

[F1] [[def-explicit-runge-kutta-tableau-and-stage-map]], [[thm-chain-rule-for-total-derivatives]], [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: Explicit RK stages are finite successive compositions. The ordinary chain and product rules differentiate their actual maps.

[F2] [[lem-parameter-ode-flow-tangent-on-common-tube]], [[thm-gronwall-integral-inequality]]: The common-tube flow derivative solves the variational equation. Grönwall bounds its solutions uniformly on a fixed finite time interval.

[F3] [[prop-explicit-rk-order-conditions-through-four]]: The order-conditions supplier establishes local order through four for a $C^4$ autonomous augmented field on its stated compact convex tube. The time equation produces the actual stage times because $c_i=\sum_{j<i}a_{ij}$.

[F4] [[thm-global-error-from-one-step-defect-and-stability]], [[lem-local-c1-step-consistency-implies-tangent-adjoint-gradient-order]]: Uniform local defect and one-step Lipschitz stability imply global error for the same augmented method. The preceding local-C1 lemma independently derives the backward nodal-adjoint estimate and the graph-gradient estimate.

[A1] The domain, local flow, derivative, tube, local augmented-defect, initial-data and terminal-data assumptions in the Statement hold. The augmented local tube includes the exact local augmented paths and actual augmented RK stages for all the specified seeds. No tube containment is inferred from a formal order condition alone.

## Proof

1.1 Set $\xi=(x,\theta)$. The exact local solution has $V(t)=D_\xi u(t)$ because $V(t_n)=E$ and its displayed equation is the variational equation, with $D_\xi\theta=E_\theta$. Differentiating the cost integral gives $g(t)=D_\xi C(t)^T$. Thus at the local endpoint, $$V^+=[D_x\Phi_n\ D_\theta\Phi_n],\qquad g^+=\begin{pmatrix}D_xK_n^T\\D_\theta K_n^T\end{pmatrix}.$$ The flow result and bounded continuous derivatives justify these differentiations uniformly. [F2, A1]

2.1 Differentiate each actual stage, in its explicit order. If $V_i=D_\xi Y_i$, then $$V_i=E+h\sum_{j<i}a_{ij}(f_{u,j}V_j+f_{\theta,j}E_\theta),$$ $$D_\xi\Psi_n=E+h\sum_i b_i(f_{u,i}V_i+f_{\theta,i}E_\theta),$$ $$D_\xi L_n^T=h\sum_i b_i(V_i^T\ell_{u,i}^T+E_\theta^T\ell_{\theta,i}^T).$$ These are exactly the $V$ and $g$ outputs obtained by applying the same RK tableau to the augmented system. Its $C$ output is $L_n$ and its $u$ output is $\Psi_n$. Consequently the assumed augmented local defect bounds $\Psi_n-\Phi_n$, $L_n-K_n$, and all four first-derivative differences by constants times $h^{p+1}$. Projection to a component does not increase the Euclidean norm; a matrix Frobenius bound also bounds its operator norm. [F1, A1, step 1.1]

3.1 For a fixed finite tableau, the stage derivative recurrences in step 2.1 give uniform bounds on $D_xY_i,D_\theta Y_i$ by induction, using $h\le h_0$ and the bounded first derivatives of $f$. Here $D_xY_i=I+O(h)$ and $D_\theta Y_i=O(h)$. Substitution into the output derivatives gives $$D_x\Psi_n=I+O(h),\quad D_\theta\Psi_n=O(h),\quad D_xL_n^T=O(h),\quad D_\theta L_n^T=O(h),$$ uniformly. In particular $\|D_x\Psi_n\|\le1+L_hh$ for a fixed constant $L_h$. The exact variational integral equation gives the same bounds for the exact maps, with $\|D_x\Phi_n\|\le e^{Kh}\le1+Ke^{Kh_0}h$. Enlarging the constants gives the common $L,M$ required by the preceding lemma. [F1, F2, A1]

3.2 For $p\le4$, apply [F3] to the displayed autonomous augmented field itself. Its derivatives through order four exist and are uniformly bounded under the asserted augmented $C^4$ hypothesis. Joint base $C^5$ regularity is sufficient because its variational components use first derivatives of the base fields. All its exact paths and stages are admitted by [A1]. The source proposition therefore supplies the exact local augmented-defect premise used in step 2.1. This application concerns the differentiated augmented method, rather than just its state projection. [F3, A1, step 2.1]

4.1 The exact maps have the required second-derivative bounds of size $O(h)$. To justify differentiating their variational equations, apply the common-tube $C^1$ flow result to the first variational system: its field is $C^1$ since $f$ is $C^2$, its initial derivative seed is constant, and its variational components remain bounded by [F2]. For coordinate directions $a,b$ of $\xi$, put $W_{ab}=D_{\xi_a}D_{\xi_b}u$. Then $$W_{ab}'=f_uW_{ab}+D^2_{(u,\theta)}f[(V_a,E_{\theta,a}),(V_b,E_{\theta,b})],\qquad W_{ab}(t_n)=0.$$ The forcing is uniformly bounded, so Grönwall on an interval of length $h$ gives $\|W_{ab}\|\le C h$. Differentiating the cost integral twice produces the integrand $$D^2_{(u,\theta)}\ell[(V_a,E_{\theta,a}),(V_b,E_{\theta,b})]+\ell_uW_{ab},$$ which is uniformly bounded, and hence $D_\xi^2K_n=O(h)$. Thus $D_\xi^2\Phi_n=O(h)$ and $D_\xi^2K_n=O(h)$. Applying the one-dimensional mean value inequality along each admitted state segment gives Lipschitz constants $Hh$ for $A_n^e,B_n^e,c_n^e,d_n^e$. [F1, F2, A1, step 3.1]

4.2 There is also a direct augmented global-error interpretation. Along a full trajectory append $C'=\ell$ and the column $G'=S^T\ell_u^T+\ell_\theta^T$, with $C(0)=0,G(0)=0$ and $S'=f_uS+f_\theta$. Differentiating the actual stages shows that its numerical step is exactly $$S^+=A_n^hS+B_n^h,\quad C^+=C+L_n,\quad G^+=G+S^Tc_n^h+d_n^h.$$ The analogous exact step uses the exact maps. On bounded $S$ sets, step 2.1 therefore supplies a uniform $O(h^{p+1})$ local defect for $(u,S,C,G)$. Exact $S$ is bounded by Grönwall; numerical $S$ is bounded by the $1+Lh,Mh$ recurrence from step 3.1. The sums defining $C,G$ then bound them uniformly as well. Their stage values are bounded by the same finite-stage induction. [F1, F2, A1, step 2.1, step 3.1]

5.1 Steps 2.1–4.1 establish precisely the local hypotheses of the preceding lemma. That lemma now proves the global state, actual graph-tangent, backward nodal-adjoint and gradient bounds. In particular the adjoint conclusion is derived; it is not inserted as an additional hypothesis. [F4, step 2.1, step 3.1, step 4.1]

6.1 On a common compact convex augmented tube containing these values and joining stage segments, the $C^1$ augmented field has a derivative bound $K$. For two starting augmented states with difference $\delta$, explicit stage differences obey $\delta_i\le\delta+hK\sum_{j<i}|a_{ij}|\delta_j$. Induction gives $\delta_i\le D_i\delta$, where $D_1=1$ and $D_i=1+h_0K\sum_{j<i}|a_{ij}|D_j$. The output difference is at most $(1+hK\sum_i|b_i|D_i)\delta$. Thus the actual augmented method has one-step stability $1+\Lambda h$. The global-error supplier applies, giving order-$p$ error in the actual tangent and accumulated cost derivative as well. This independently exhibits the augmented local-to-global route; step 5.1 additionally supplies the nodal adjoint. [F4, A1, step 3.1, step 4.2]

7.1 For the displayed RK4 tableau the eight coefficient sums, in the order stated in the source proposition, are $1,1/2,1/3,1/6,1/4,1/12,1/8,1/24$. For example $Ac=(0,0,1/4,1/2)$, $Ac^{[2]}=(0,0,1/8,1/4)$, and $A^2c=(0,0,0,1/4)$, which verify the mixed sums directly. Hence step 3.2 applies with $p=4$. No division by an individual $b_i$ or internal-stage adjoint order condition occurs in this argument. [F3, step 3.2, algebra] ∎
