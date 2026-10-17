---
id: thm-nonlinear-rkc2-order-two-and-global-error
kind: theorem
title: "Undamped nonlinear RKC2 has fixed-stage order two on an admitted tube"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-rkc2-nonlinear
  - cor-finite-dimensional-normed-spaces-are-banach
  - def-ck-and-multi-index-notation-in-several-variables
  - def-euclidean-inner-product
  - def-first-order-ode-initial-value-problem-and-solution
  - def-one-step-ode-method-local-defect-order-and-stability
  - def-real-exponential-function-and-e
  - lem-chebyshev-rkc-bounds-and-endpoint-derivatives
  - lem-standard-basis-of-f-n
  - prop-rkc-stability-intervals-and-stage-degree
  - thm-algebra-of-derivatives
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - thm-global-error-from-one-step-defect-and-stability
  - thm-multivariable-taylor-formula-with-lagrange-remainder
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ibrahim Almuslimani and Gilles Vilmart, Explicit Stabilized Integrators for Stiff Optimal Control Problems, §2.2.2"
      url: "https://www.unige.ch/~vilmart/paper_optimal_control_alm_vil.pdf"
    - title: "B.P. Sommeijer, L.F. Shampine, and J.G. Verwer, RKC: An explicit solver for parabolic PDEs, §2"
      url: "https://ir.cwi.nl/pub/109/0109D.pdf"
---

## Statement

Fix $s\ge2$ and $T>0$. Let $f(t,y)$ be $C^2$ on an open time-state domain, and let the exact IVP solution $y$ be defined on $[0,T]$. Assume its derivatives through order three and the derivatives of $f$ through order two are bounded on a compact convex tube $K$ contained in the domain. Assume the stage recursion of [[alg-rkc2-nonlinear]] is admitted from every starting state in $K$ for sufficiently small uniform steps and that every stage and output remains in $K$. Assume all line segments used in Taylor expansions stay in $K$, and that on each state slice of $K$, $f$ is Lipschitz in its state argument with one common constant $L_f$. Evaluation failures and domain failures are absent. The global-error claim additionally assumes the exact and numerical trajectories stay in $K$.

Then the nonlinear RKC2 method has a uniform one-step defect bound $C_s h^3$ and one-step stability bound $(1+L_s h)$ on that tube, for constants $C_s,L_s$ independent of the step index and $h$ (but allowed to depend on fixed $s$ and the tube bounds).

For $h=T/N$, start the method at $y(0)$ and suppose its numerical stages and states remain in the same tube for all $N$ steps. Then the global grid error is at most
$$\max_{0\le n\le N}\|y_n-y(t_n)\|_2\le \begin{cases}C_s\frac{\exp(L_sT)-1}{L_s}h^2,&L_s>0,\\ C_sTh^2,&L_s=0.\end{cases}$$
The statement is fixed-stage and fixed-time. It gives no uniform-in-$s$ accuracy, nonlinear stability, positivity, or stiffness-uniform accuracy.

## Facts & Assumptions

**Given:** A fixed stage count $s\ge2$, a $C^2$ time-dependent vector field and exact solution on a fixed finite interval, the common compact convex tube and bounded-derivative hypotheses, state-Lipschitz constant $L_f$, admitted method stages, and exact stage evaluations.

[F1] [[alg-rkc2-nonlinear]]: $b_1=1/4$, $w_1=3/(s^2-1)$, $Y_1=y+b_1w_1h f(t,y)$, and for $j\ge2$, $Y_j=(1-\mu_j-\nu_j)y+\mu_jY_{j-1}+\nu_jY_{j-2}+m_jh f(t+c_{j-1}h,Y_{j-1})+g_jh f(t,y)$ with the stated coefficients.

[F2] [[prop-rkc-stability-intervals-and-stage-degree]]: the scalar linear specialization has $R_{2,s}(z)=1+z+z^2/2+O(z^3)$.

[F3] [[def-one-step-ode-method-local-defect-order-and-stability]]: local defect is the exact-start method output minus exact next state; order two requires a uniform $O(h^3)$ defect, and one-step stability has the form $1+Lh$.

[F4] [[thm-multivariable-taylor-formula-with-lagrange-remainder]] and [[def-ck-and-multi-index-notation-in-several-variables]]: a $C^2$ vector field has a first-order Taylor expansion on each admitted segment with a uniformly bounded quadratic remainder; apply the scalar theorem to each component.

[F5] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]] and [[thm-algebra-of-derivatives]]: differentiating the ODE along its exact solution gives $y''(t)=\partial_t f(t,y(t))+D_yf(t,y(t))f(t,y(t))$.

[F6] [[thm-global-error-from-one-step-defect-and-stability]]: on a common compact tube, initial error $C_0h^p$, local defect $Ch^{p+1}$, and one-step bound $1+Lh$ imply the stated fixed-time global estimate.

[F7] [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the state norm is Euclidean and obeys the triangle inequality.

[F8] [[lem-standard-basis-of-f-n]] and [[cor-finite-dimensional-normed-spaces-are-banach]]: the standard coordinate lists are finite bases of $\mathbb R$ and $\mathbb R^d$, so these Euclidean spaces are real Banach spaces. This supplies the Banach-space hypotheses when [F5] is applied to the ODE solution and vector field.

[A1] All exact states, numerical states, stage inputs, and Taylor segments used below lie in the stated compact convex tube, where the derivative and state-Lipschitz bounds are uniform.

## Proof

1.1 Apply the recurrence of [F1] to the time component of the augmented field $(t,y)'=(1,f(t,y))$. Its stage abscissae satisfy $c_0=0$, $c_1=b_1w_1$, and for $j\ge2$, $c_j=\mu_jc_{j-1}+\nu_jc_{j-2}+2b_jw_1,$ because $m_j+g_j=m_jb_{j-1}=2b_jw_1$. At $j=2$, $\mu_2=2$, $\nu_2=-1$, and $2b_2w_1=w_1/2$, so $c_2=2c_1+w_1/2=w_1$. At $j=3$ (when $s\ge3$), $b_3=8/27$, $\mu_3=64/27$, $\nu_3=-32/27$, and $2b_3w_1=16w_1/27$, so $c_3=8w_1/3$. For every $j\ge4$, the previous two values are $c_{j-1}=((j-1)^2-1)/(s^2-1)$ and $c_{j-2}=((j-2)^2-1)/(s^2-1)$. Using $w_1=3/(s^2-1)$ and $3b_kk^2=k^2-1$ for $k=j,j-1,j-2$ gives $\mu_jc_{j-1}+\nu_jc_{j-2}+2b_jw_1 =\frac{b_j}{s^2-1}\bigl(6(j-1)^2-3(j-2)^2+6\bigr) =\frac{b_jj^2}{s^2-1}=\frac{j^2-1}{s^2-1}.$ Thus induction gives $c_j=b_jw_1j^2=(j^2-1)/(s^2-1)$ for $j\ge2$, so $c_s=1$. The actual nonautonomous stage times are the declared $t+c_jh$. [F1, algebra, induction]

2.1 For fixed $s$, stage increments $Z_j:=Y_j-y$ are uniformly $O(h)$. The base is $Z_0=0$, $Z_1=b_1w_1h f(t,y)$; for $j\ge2$, the coefficient sum $(1-\mu_j-\nu_j)+\mu_j+\nu_j=1$ rewrites [F1] as $Z_j=\mu_jZ_{j-1}+\nu_jZ_{j-2}+m_jh f(t+c_{j-1}h,Y_{j-1})+g_jh f(t,y)$. Boundedness of $f$, the fixed finite number of stages, and induction give a uniform $O(h)$ bound. Refine the same induction: $Z_1=c_1h f(t,y)$, and Taylor to first order gives $f(t+c_{j-1}h,Y_{j-1})=f(t,y)+O(h)$, so the recurrence for its $h$ coefficient is $c_j=\mu_jc_{j-1}+\nu_jc_{j-2}+m_j+g_j$, the abscissa recurrence in step 1.1. Thus $Z_j=c_jh f(t,y)+O(h^2)$ for every stage. [A1, F1, F4, step 1.1, induction, algebra]

3.1 Write $q:=\partial_t f(t,y)+D_yf(t,y)f(t,y)$. From step 2.1 and [F4], uniformly at every stage, $f(t+c_{j-1}h,Y_{j-1})=f(t,y)+c_{j-1}h q+O(h^2).$ A second induction in [F1] therefore gives $Y_j=y+c_jh f(t,y)+d_jh^2q+O(h^3),$ where $d_0=d_1=0$ and $d_j=\mu_jd_{j-1}+\nu_jd_{j-2}+m_jc_{j-1}$. The remainders are uniform because $s$ is fixed and the derivatives are bounded on $K$. [A1, F1, F4, step 2.1, induction, algebra]

3.2 For stability, fix two admitted initial states $u,v$ in the same convex state slice and let $D_0=\|u-v\|_2$. The finite recurrence [F1], the triangle inequality, and the state-Lipschitz assumption imply by induction a finite constant $M_j$ with $\|Y_j(u)-Y_j(v)\|_2\le M_jD_0$ for every $j\le s$ and $h\le h_0$: take $M_0=1$, $M_1=1+b_1w_1h_0L_f$, and for $j\ge2$ take $M_j=|1-\mu_j-\nu_j|+|\mu_j|M_{j-1}+|\nu_j|M_{j-2}+|m_j|h_0L_fM_{j-1}+|g_j|h_0L_f.$ Writing $Z_j(y)=Y_j(y)-y$, the same recurrence after the constant base-state coefficients cancel gives $\|Z_j(u)-Z_j(v)\|_2\le K_jhD_0$: use $K_0=0$, $K_1=b_1w_1L_f$, and $K_j=|\mu_j|K_{j-1}+|\nu_j|K_{j-2}+|m_j|L_fM_{j-1}+|g_j|L_f.$ All constants are finite because $s$ is fixed. Hence $\|Y_s(u)-Y_s(v)\|_2\le\|u-v\|_2+\|Z_s(u)-Z_s(v)\|_2\le(1+K_sh)\|u-v\|_2$. This proves one-step stability with $L_s=K_s$. [A1, F1, F3, F7, step 2.1, algebra, induction]

4.1 For the scalar linear equation $y'=y$ at starting value $1$, the coefficient of $h^2$ in the same recurrence is exactly $d_s$. By [F2], the scalar stability polynomial is $1+z+z^2/2+O(z^3)$, so $d_s=1/2$. Since [F1] and the recurrence defining $d_j$ are independent of the choice of $f$, step 3.1 yields $Y_s=y+h f(t,y)+\frac{h^2}{2}\bigl(\partial_t f(t,y)+D_yf(t,y)f(t,y)\bigr)+O(h^3).$ By [F5], whose Banach-space hypotheses hold by [F8], the exact solution has the same expansion through degree two, with a uniform $O(h^3)$ remainder on the tube. The method-minus-exact defect is therefore bounded by $C_sh^3$. [A1, F1, F2, F4, F5, F8, step 3.1, algebra]

5.1 Apply [F6] with $p=2$, $C_0=0$, $C=C_s$, and $L=L_s$, using the local-defect and step-stability bounds from steps 4.1 and 3.2. It gives exactly the two global-error cases in the Statement. [A1, F3, F6, step 4.1, step 3.2] ∎

## Remarks

The imported global theorem is conditional: tube admissibility, local defect, and one-step stability are proved here for fixed $s$. Its use does not establish a uniform error constant as the stage count changes.
