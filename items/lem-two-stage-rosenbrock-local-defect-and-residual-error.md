---
id: lem-two-stage-rosenbrock-local-defect-and-residual-error
title: "The two-stage Rosenbrock W-method has a cubic local defect and explicit stage-residual allowance"
kind: lemma
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-two-stage-rosenbrock-w-method
  - lem-rosenbrock-shifted-matrix-invertibility-bound
  - lem-rosenbrock-stage-residual-certificate
  - def-implicit-residual-and-algebraic-error-units
  - def-first-order-ode-initial-value-problem-and-solution
  - def-jacobian-matrix-and-gradient
  - def-ck-euclidean-maps-and-diffeomorphisms
  - thm-chain-rule-for-total-derivatives
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-total-derivative-computes-directional-and-partial-derivatives
  - thm-algebra-of-derivatives
  - cor-vector-valued-ftc-and-lipschitz-bound
  - def-vector-valued-derivative-and-integral
  - thm-continuous-implies-integrable
  - thm-norm-inequality-for-the-vector-valued-integral
  - def-induced-matrix-p-norm
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
proof_strategy: direct
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "WIAS Berlin, Numerical Methods for Stiff Ordinary Differential Equations, §2.4 Rosenbrock Methods"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf"
      locator: "§2.4, Example 2.37 and Theorem 2.38, printed pp. 45–47"
    - title: "Joachim Rang and Lutz Angermann, New Rosenbrock Methods of Order 3 for PDAEs of Index 2"
      url: "https://dml.cz/bitstream/handle/10338.dmlcz/700435/Equadiff_11-2005-2_46.pdf"
      locator: "§2, printed pp. 386–387: general W-method order framework"
---

## Statement

Let $D\subseteq\mathbb R\times\mathbb R^d$ be open, $f:D\to\mathbb R^d$ be $C^2$, and $y(s)$ solve $y'=f(s,y)$ on $[t,t+h]$. Assume a compact convex tube $Q\subset D$ contains the trajectory, the stage midpoint segments, and all vectors used below. On $Q$, suppose
$$
\|f\|_2\le F,\quad \|D_yf\|_2\le L,\quad \|f_t\|_2\le T_0,\quad \|D^2f\|_{\rm op}\le H,
$$
where $D^2f$ is the second total derivative on the joint variable $(t,y)$, and $\|D^2f\|_{\rm op}:=\sup_{\|u\|=\|v\|=1}\|D^2f[u,v]\|_2$ for the Euclidean product norm. Fix $\alpha=1-1/\sqrt2$, and suppose $\|\widetilde J\|_2\le B_J$, $\|\widetilde T\|_2\le B_T$, and $\|\alpha h\widetilde J\|_2\le q<1$. Put $\kappa=(1-q)^{-1}$ and $M=T_0+LF$. The shifted inverse has norm at most $\kappa$ by [[lem-rosenbrock-shifted-matrix-invertibility-bound]].

For exact-arithmetic stages $k_1,q_2,k_2$ of [[alg-two-stage-rosenbrock-w-method]] (with its exact-storage checks successful), define
$$C_1=B_JF+B_T,\quad K_1=F+\alpha h\kappa C_1,\quad C_F=\frac{\alpha\kappa L C_1}{2}+\frac{H(1+K_1^2)}{8}.$$
$$C_K=\alpha^2\kappa^2B_JC_1+\frac{\alpha\kappa B_JM}{2}+\kappa C_F, \qquad M_2=H(1+F^2)+LT_0+L^2F.$$
Then the exact one-step defect is at most
$$
\|y(t)+hk_2-y(t+h)\|_2\le (C_K+M_2/6)h^3.
$$
If the computed first and second shifted solves have certified update-residual bounds $\rho_1$ and $\rho_2$, then the computed update satisfies
$$\|\widehat y_+-y(t+h)\|_2\le (C_K+M_2/6)h^3+C_rh^2\rho_1+\kappa h\rho_2, \qquad C_r:=\kappa^2(L/2+\alpha B_J).$$
Thus $\rho_1=O(h)$ and $\rho_2=O(h^2)$ preserve a cubic local defect. These are equation-residual conditions, not stage forward-error claims without the inverse bound.

At any base point in the tube, the same two-stage residual perturbation argument gives the solver-to-exact-map bound $\|\widehat\Phi_h(t,y)-\Phi_h(t,y)\|_2\le C_rh^2\rho_1+\kappa h\rho_2$, whenever both midpoint evaluations lie in $Q$.

## Facts & Assumptions

**Given:** The exact solution, tube, derivative bounds, stage data, and stated residual bounds.

[F1] [[alg-two-stage-rosenbrock-w-method]]: $W=I-\alpha h\widetilde J$, $Wk_1=f+\alpha h\widetilde T$, $F_1=f(t+h/2,y+hk_1/2)$, $Wq_2=F_1-k_1$, and $k_2=q_2+k_1$.

[F2] [[lem-rosenbrock-shifted-matrix-invertibility-bound]]: $\|W^{-1}\|_2\le(1-q)^{-1}=\kappa$ when $\|\alpha h\widetilde J\|_2\le q<1$.

[F3] [[cor-vector-valued-ftc-and-lipschitz-bound]]: a differentiable vector curve with derivative bounded by $C$ varies by at most $C$ times the interval length.

[F4] [[thm-chain-rule-for-total-derivatives]]: composition with the differentiable exact solution gives $y''=f_t+D_yf\,f$ and the corresponding derivative of this expression.

[F5] [[lem-rosenbrock-stage-residual-certificate]]: the solver returns a certified upper bound for each exact linear equation residual.

[F6] [[def-implicit-residual-and-algebraic-error-units]]: each stage residual is the value of the defining linear residual map; it is distinct from forward error.

[F7] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: the induced norm bounds matrix action and is submultiplicative.

[F8] [[thm-continuous-partial-derivatives-imply-total-differentiability]]: componentwise $C^2$ implies the first partial derivatives exist and are continuous; applying the theorem to $f$ and to each first-partial component gives the total derivatives used below.

[F9] [[thm-total-derivative-computes-directional-and-partial-derivatives]]: in the joint variable $(t,y)$, the nonzero standard time and state basis directions identify the first derivative blocks with $f_t$ and $D_yf$, and identify derivatives of first-partial components with their partial derivatives.

[F10] [[thm-algebra-of-derivatives]]: the scalar product and sum rules apply coordinatewise to each finite component of a matrix-vector product along a differentiable curve.

[F11] [[thm-continuous-implies-integrable]] and [[def-vector-valued-derivative-and-integral]]: a continuous scalar component on a compact interval is integrable, and vector integrability is componentwise; therefore continuous vector curves used in the FTC remainders are integrable.

[F12] [[thm-norm-inequality-for-the-vector-valued-integral]]: the norm of an integrable vector integral is at most the integral of its Euclidean norm.

## Proof

**Given:** The data in the Statement.

1.1 Write $f_0=f(t,y(t))$ and $J_0=D_yf(t,y(t))$. Since $W=I-\alpha h\widetilde J$, the first stage equation in [F1] gives $W(k_1-f_0)=\alpha h(\widetilde Jf_0+\widetilde T)$. Apply [F2], [F7], and the bounds on $f_0,\widetilde J,\widetilde T$ to obtain $\|k_1-f_0\|_2\le\alpha h\kappa C_1$ and hence $\|k_1\|_2\le K_1$ (using $h$ in the displayed constants). [given, F1, F2, F7, algebra]

1.2 Let $\delta_1=\widehat k_1-k_1$. The first residual equation and [F2], [F5], [F7] give $\|\delta_1\|_2\le\kappa\rho_1$. Let $\widehat F_1=f(t+h/2,y+h\widehat k_1/2)$. The state segment lies in $Q$, so [F3] and $\|D_yf\|\le L$ imply $\|\widehat F_1-F_1\|_2\le(Lh/2)\|\delta_1\|_2$. [given, F2, F3, F5, F6, F7]

2.1 Define $g(s)=f(t+sh/2,y(t)+shk_1/2)$ for $0\le s\le1$. The componentwise $C^2$ hypothesis, [F8], and the basis-direction identification [F9] justify the chain rule and give $g'(0)=(h/2)(f_t+J_0k_1)$. The derivatives $g'$ and $g''$ are continuous, so [F11] makes them integrable; applying the vector FTC [F3] twice and the integral norm inequality [F12] gives $F_1=f_0+(h/2)(f_t+J_0k_1)+R_F$ with $\|R_F\|_2\le Hh^2(1+K_1^2)/8$. Replacing $J_0k_1$ by $J_0f_0$ adds at most $(h/2)L\|k_1-f_0\|_2\le(\alpha\kappa LC_1/2)h^2$. Thus $F_1=f_0+(h/2)G_0+E$, where $G_0=f_t+J_0f_0$ and $\|E\|_2\le C_Fh^2$. [given, F3, F8, F9, F11, F12, step 1.1, algebra]

3.1 By [F1], $Wk_2=Wq_2+Wk_1=F_1-k_1+Wk_1=F_1-\alpha h\widetilde Jk_1$, so $k_2=W^{-1}(F_1-\alpha h\widetilde Jk_1)$. Also $W^{-1}-I=\alpha hW^{-1}\widetilde J$. Insert the expansion from step 2.1 and regroup to get $k_2-f_0-(h/2)G_0=\alpha hW^{-1}\widetilde J(f_0-k_1)+(h/2)(W^{-1}-I)G_0+W^{-1}E$. [step 2.1, F1, algebra]

4.1 We have $\|G_0\|_2\le T_0+LF=M$. Bound the three terms in step 3.1 using [F2], [F7], step 1.1, and $\|E\|_2\le C_Fh^2$. This yields $\|k_2-f_0-(h/2)G_0\|_2\le C_Kh^2$. [given, F2, F7, step 1.1, step 3.1, algebra]

5.1 Let $X(s)=(s,y(s))$, so $X'=(1,f)$ and $X''=(0,y'')$. Applying the chain rule [F4] twice and the componentwise product rule [F10] to $Df(X)X'$ gives $y'''=D^2f[(1,f),(1,f)]+D_yf\,y''=D^2f[(1,f),(1,f)]+D_yf\,f_t+(D_yf)^2f$. The componentwise $C^2$ assumption yields differentiability of $Df$ by applying [F8] to the first-partial components, and [F9] identifies their derivative blocks; hence these second-total-derivative expressions are valid. Therefore $\|y'''\|_2\le H(1+F^2)+LT_0+L^2F=M_2$. The curve $y'''$ is continuous by these $C^2$ derivatives, so [F11] gives its integrability. Three applications of [F3] give the integral remainder $\int_0^h (h-s)^2y'''(t+s)/2\,ds$, whose norm is at most $M_2h^3/6$ by [F12]. Combine with step 4.1 after multiplying its bound by $h$ to obtain the exact-stage defect. [given, F3, F4, F8, F9, F10, F11, F12, step 4.1, algebra]

6.1 Subtract the two second-stage solve equations, including the residual vector $r_2$ with $\|r_2\|_2\le\rho_2$, and use $\widehat k_2=\widehat q_2+\widehat k_1$. The result is $\widehat k_2-k_2=W^{-1}(\widehat F_1-F_1)+(I-W^{-1})\delta_1+W^{-1}r_2$. Since $I-W^{-1}=-\alpha hW^{-1}\widetilde J$, steps 1.2 and [F2], [F7] yield $\|\widehat k_2-k_2\|_2\le C_rh\rho_1+\kappa\rho_2$. Multiplying by $h$ and adding the exact-stage defect proves the computed bound. [step 1.2, F1, F2, F5, F7, step 5.1, algebra] ∎
