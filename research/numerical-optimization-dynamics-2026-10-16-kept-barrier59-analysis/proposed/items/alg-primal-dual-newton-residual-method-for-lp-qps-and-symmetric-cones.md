---
id: alg-primal-dual-newton-residual-method-for-lp-qps-and-symmetric-cones
kind: algorithm
title: "Finite-budget primal-dual Newton methods for LP, convex QP, and symmetric cones"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-barrier-central-path-and-newton-residuals
  - def-conic-optimization-primal-dual-models
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - def-full-reduced-and-column-pivoted-computational-qr-factorisations
  - alg-scaled-householder-reflector-formation-and-application
  - lem-rounded-triangular-substitution-componentwise-backward-error
  - thm-computed-full-rank-least-squares-backward-stability
  - def-inequality-constrained-program-and-kkt-geometry
  - lem-nonnegative-orthant-log-barrier
  - lem-lorentz-cone-log-barrier
  - lem-psd-cone-self-dual-logdet-barrier
  - lem-primal-dual-lp-qp-newton-matrix-nonsingular
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 11 §§11.7.1–11.7.3, modified KKT residuals and primal-dual steps."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 16: LP, SOCP, and SDP (2019)"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture16.pdf"
      locator: "Full lecture, cone-program forms and the application of path-following methods."
---

## Definition

This procedure has two admissible modes. All input values are finite stored floating-point numbers. Audits interpret them as exact dyadic rationals, and rounded operations obey [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]].

**LP/QP mode.** Let $n\ge1$, $p\ge0$, $Q\in\mathbb R^{n\times n}$ be symmetric positive semidefinite, and $A\in\mathbb R^{p\times n}$ have full row rank. The supplied data are $A,b,c,Q$ for $\min\tfrac12x^TQx+c^Tx$ subject to $Ax=b$, $x\ge0$; LP is $Q=0$. The iterate inputs are $x>0$, $s>0$, and free $y$. Also supply $0<\sigma<1$, $0<\eta<1$, finite tolerances $\epsilon_p,\epsilon_d,\epsilon_g\ge0$, and an integer update cap $N\ge0$.

**Symmetric-cone mode.** Let $K$ be a nonempty finite product of nonnegative orthant, Lorentz, or positive-semidefinite cones, let $A$ have full row rank, and use the primal-dual pair of [[def-conic-optimization-primal-dual-models]]. Supply $A,b,c,G,h$, a point $x$ with $s=h-Gx\in\operatorname{int}K$, a dual point $z\in\operatorname{int}K^*$, and free $y$. Equality feasibility $Ax=b$ is checked as a residual, not required of the initial point. Also supply $0<\sigma<1$, $0<\eta<1$, finite tolerances $\epsilon_p,\epsilon_d,\epsilon_g\ge0$, and integer cap $N\ge0$. The positive barrier parameter $\nu$ is the sum of the cone-factor parameters.

The input audit checks all dimensions, exact symmetry of $Q$, and full row rank of $A$ by rational elimination. It checks $Q\succeq0$ by finite exact symmetric Schur elimination: reject a negative diagonal; if a positive diagonal exists, permute it to the first position and recurse on its Schur complement; if every diagonal is zero, accept only when every off-diagonal entry is zero. This test is equivalent by completing the square at each positive pivot; with zero diagonal, a nonzero off-diagonal makes one of the vectors $e_i+e_j$ or $e_i-e_j$ have negative quadratic form. In symmetric-cone mode it also checks that each listed factor has a positive finite dimension, that the data match the declared product spaces, and that $A$ has full row rank. All these checks use exact rational arithmetic on the stored dyadic inputs.

In LP/QP mode form
$$r_d=Qx+c-A^Ty-s,\quad r_p=Ax-b,\quad \mu=x^Ts/n,\quad r_c=Xs-\sigma\mu\mathbf1.$$
In symmetric-cone mode form
$$r_d=A^Ty-G^*z-c,\quad r_p=Ax-b,\quad \mu=\langle s,z\rangle/\nu,\quad r_c=s\circ z-\sigma\mu e_F.$$
Here $e_F$ is the barrier target vector of [[def-barrier-central-path-and-newton-residuals]]: it equals the Jordan identity on orthant and matrix factors and twice that identity on Lorentz factors. Hold $\sigma\mu$ fixed during each Newton solve. In either mode, $\epsilon_p$ bounds $\|r_p\|_2$, $\epsilon_d$ bounds both $\|r_d\|_2$ and $\|r_c\|$, and $\epsilon_g$ bounds the surrogate complementarity gap $n\mu=x^Ts$ in LP/QP mode or $\nu\mu=\langle s,z\rangle$ in symmetric-cone mode. On product cones use Euclidean norms on orthant and Lorentz factors and Frobenius norms on matrix factors. Norm tests compare exact squared values with squared tolerances. The output is a record containing `status`, the last accepted iterate when one exists, update count, audited residuals, and audited gap; it carries the exact audited gap as an objective-suboptimality bound only for status `certified-gap`. The possible statuses are `invalid-input`, `strict-start-unavailable`, `nonpositive-gap`, `certified-gap`, `residual-candidate`, `singular-system`, `lost-range`, `uncertified-newton-solve`, `boundary-status-unavailable`, and `budget-exhausted`. `invalid-input` has no iterate. A residual candidate is diagnostic, never a certificate.

**Interior audits.** For an orthant factor, require every coordinate to be positive. For a Lorentz factor $(t,u)$, require $t>0$ and $t^2-\|u\|_2^2>0$. For a symmetric matrix factor $Y$, test positive definiteness by exact rational Schur elimination: require $Y_{11}>0$, form $S=Y_{2:n,2:n}-Y_{2:n,1}Y_{1,2:n}/Y_{11}$, and repeat on $S$ until the matrix is empty. Completing the square gives $v^TYv=Y_{11}(v_1+Y_{1,2:n}v_{2:n}/Y_{11})^2+v_{2:n}^TSv_{2:n}$, so this finite test succeeds exactly for $Y\succ0$.

**Instructions.** First reject invalid dimensions, nonfinite data, parameters outside their stated domains, or a negative cap with `invalid-input`. Reject an LP/QP start unless $x,s>0$, or a cone start unless $s,z$ pass the interior audits, with `strict-start-unavailable`; this is not an infeasibility claim. Set the accepted-update count to zero and repeat the following audit and update loop.

Compute the residuals and complementarity gap exactly as rational expressions in the stored inputs; compare exact squared norms with squared tolerances. A nonpositive or nonfinite gap returns `nonpositive-gap`. Return `certified-gap` in LP/QP mode only when $Ax=b$, $x,s\ge0$, $Qx+c-A^Ty-s=0$, and $x^Ts\le\epsilon_g$; in cone mode require $Ax=b$, $s=h-Gx\in K$, $z\in K^*$, $A^Ty-G^*z=c$, and $\langle s,z\rangle\le\epsilon_g$. Otherwise, if $\|r_p\|_2\le\epsilon_p$, $\|r_d\|_2\le\epsilon_d$, $\|r_c\|\le\epsilon_d$, and the surrogate gap is at most $\epsilon_g$, return `residual-candidate`. If the update count equals $N$, return `budget-exhausted`.

Assemble the Newton derivative specified in [[def-barrier-central-path-and-newton-residuals]]. In LP/QP mode solve its displayed block system. In symmetric-cone mode solve
$$A\Delta x=-r_p,\qquad A^T\Delta y-G^*\Delta z=-r_d,\qquad \Delta s=-G\Delta x,\qquad \Delta s\circ z+s\circ\Delta z=-r_c.$$
The exact equations form a square system after eliminating $\Delta s$. Form each system coefficient as an exact dyadic expression in the stored inputs, then round that coefficient once to the nearest normal representable value, preserving exact zeros; any failed conversion returns `lost-range`. Convert the exact rational right-hand side $(-r_d,-r_p,-r_c)$ componentwise by the same nearest-normal rule, preserving exact zeros; a failed conversion also returns `lost-range`. In LP/QP mode, [[lem-primal-dual-lp-qp-newton-matrix-nonsingular]] proves nonsingularity of the exact Newton matrix under the stated rank and strict-start hypotheses; in either mode an exact rank audit detects a singular stored system.

Stored floating-point numbers are treated as exact dyadic rationals (rationals with denominator a power of two) for audits; the unit roundoff $u$ and failure behavior of elementary operations are those of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]. For a matrix $M$, $\|M\|_F^2$ is the sum of the squares of its entries. Check exact rank by rational row elimination: scan columns from left to right, find the first nonzero entry at or below the next pivot row, swap it into that row, subtract exact multiples to clear entries below, and count pivots. If fewer pivots than rows are found, return `singular-system`. For a full-rank matrix, use a reduced QR solve: for each active column apply [[alg-scaled-householder-reflector-formation-and-application]] to the column and trailing block, store the reflector, apply the stored reflectors in order to the right-hand side using the same sequential dot, scale, multiply, and subtraction order as that procedure, and solve the resulting upper-triangular system by descending substitution $t_i=\operatorname{fl}(q_i-\operatorname{fl}(\sum_{j>i}\widehat R_{ij}\widehat d_j))$, $\widehat d_i=\operatorname{fl}(t_i/\widehat R_{ii})$. A range exception returns `lost-range`; a zero pivot returns `singular-system`. Let $d$ be the system dimension and $\gamma_{d+3}=(d+3)u/(1-(d+3)u)$. Require $(d+3)u<1$, $\gamma_{d+3}<1/8$, and, for the computed triangular factor $\widehat R$, verify with exact dyadic arithmetic that
$$\gamma_{d+3}^2\|\widehat R\|_F^2\|\widehat R^{-1}\|_F^2<1.$$
If the test fails, return `uncertified-newton-solve`. Otherwise [[thm-computed-full-rank-least-squares-backward-stability]] applies: the returned direction solves a nearby system with a nonsingular perturbed factor. Compute exactly and report the direction residual both against the rounded stored Newton system and against the original exact rational Newton equations.

For LP/QP mode set
$$\bar\alpha=\min\left(1,\min_{\Delta x_i<0}\frac{-x_i}{\Delta x_i},\min_{\Delta s_i<0}\frac{-s_i}{\Delta s_i}\right),$$
where an empty minimum is $+\infty$, and use $\alpha=\eta\bar\alpha$. In symmetric-cone mode compute a positive safe fraction $\beta$ for each primal-slack and dual factor, and use $\alpha=\eta$ times the minimum of those bounds. For an orthant factor use the same coordinate ratios. For a Lorentz factor at $(t,u)\in\operatorname{int}\mathcal L$ with direction $(\dot t,v)$, set $q=t^2-\|u\|_2^2$ and $c=|\dot t|+\sum_i|v_i|$; take $\beta=1$ if $c=0$, and otherwise $\beta=\min(1,q/(2tc))$. For a positive-semidefinite factor at $Y\succ0$ with symmetric direction $D$, let $L(M)=\sum_{i,j}|M_{ij}|$, compute $Y^{-1}$ by exact rational elimination, and set $C=L(Y^{-1})L(D)$; take $\beta=1$ if $C=0$ and otherwise $\beta=\min(1,1/C)$. These calculations are finite and use exact rational comparisons; their safety is proved by the fraction-to-boundary theorem on the A page.

Round $\alpha$ downward to a positive normal representable value; if none exists, return `lost-range`. Update each stored coordinate as $\operatorname{fl}(v+\operatorname{fl}(\alpha\Delta v))$ under the operationwise model. Any failed operation returns `lost-range`. Before accepting the candidate update, verify exactly that LP/QP variables $x,s$ remain positive, or that cone variables remain interior and $s=h-Gx$ still holds. If an audit fails, reject the candidate and return `boundary-status-unavailable` with the previous accepted iterate. Otherwise accept it, increment the update count, and return to the audit loop. Every factorization, inverse, rank, and safe-fraction calculation is bounded by finite matrix dimensions, and the outer loop is bounded by $N$. No failure status is an infeasibility conclusion; Phase I is a separate model.
