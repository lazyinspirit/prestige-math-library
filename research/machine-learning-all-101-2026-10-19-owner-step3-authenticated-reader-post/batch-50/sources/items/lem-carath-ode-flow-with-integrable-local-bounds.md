---
id: "lem-carath-ode-flow-with-integrable-local-bounds"
kind: lemma
title: "Local flows for time-measurable fields with integrable local bounds"
status: draft
dependency_level: 0
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-countable-choice", "thm-banach-fixed-point", "lem-vector-valued-continuous-curve-space-is-complete", "thm-first-fundamental-theorem-of-calculus-for-l-one", "thm-ftc-second-part", "thm-dominated-convergence", "thm-chain-rule-for-total-derivatives", "thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "Countable Choice is used only through the scalar Lebesgue FTC to identify derivatives of time integrals; the contraction and flow construction make no further choice."
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures, Chapter 8, §§8.1–8.2, PDF pp. 171–182"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Statement

Assume Countable Choice. Let $T>0$, let $d\ge1$, and let $b:[0,T]\times\mathbb R^d\to\mathbb R^d$ be Borel. Suppose that for every compact $K\subset\mathbb R^d$ there are nonnegative $m_K,L_K\in L^1(0,T)$ such that for almost every $t$, $|b(t,x)|\le m_K(t)$ and $|b(t,x)-b(t,y)|\le L_K(t)|x-y|$ for all $x,y\in K$. For each $(s,x_0)$ there is a unique maximal absolutely continuous solution $X(\cdot;s,x_0)$ of $\dot X=b(t,X)$ with $X(s)=x_0$, where maximal means that it has no solution extension to a strictly larger interval in $[0,T]$; any maximal endpoint lying in $(0,T)$ can occur only if the trajectory leaves every compact subset of $\mathbb R^d$. If, in addition, $b(t,\cdot)$ is continuously differentiable for almost every $t$ and $D_xb$ has integrable local bounds, then the set of initial points whose trajectories exist between any fixed pair of times is open, its time map is one-to-one onto an open image with both map and inverse continuously differentiable, and the path map into the uniform path space is continuous on the set of trajectories existing through the full interval. On compact flow tubes the dependence on the starting time is locally absolutely continuous and satisfies $\partial_sX(t;s,x)=-D_xX(t;s,x)b(s,x)$ for almost every s, simultaneously for x in the tube. The spatial derivative $V_t=D_{x_0}X(t;s,x_0)$ satisfies $\dot V_t=D_xb(t,X_t)V_t$, $V_s=I_d$, almost everywhere.

## Statement references

[[def-countable-choice]]

[[thm-banach-fixed-point]]

[[lem-vector-valued-continuous-curve-space-is-complete]]

[[thm-first-fundamental-theorem-of-calculus-for-l-one]]

[[thm-ftc-second-part]]

[[thm-dominated-convergence]]

[[thm-chain-rule-for-total-derivatives]]

[[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]]

[Ambrosio, Gigli, and Savaré, *Gradient Flows*, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the Borel field $b$, its locally integrable magnitude bounds $m_K$, its locally integrable Lipschitz bounds $L_K$, and, for the flow-regularity clause, its almost-everywhere continuous spatial derivative with locally integrable bounds.

[F1] Continuous vector-valued curves on a compact interval form a complete space in the supremum norm; a contraction on a nonempty complete metric space has a unique fixed point. [[lem-vector-valued-continuous-curve-space-is-complete]] [[thm-banach-fixed-point]]

[F2] If $f$ is integrable, its indefinite integral is absolutely continuous and has derivative $f$ almost everywhere under Countable Choice. [[thm-first-fundamental-theorem-of-calculus-for-l-one]] [[def-countable-choice]]

[F3] The one-variable FTC integrates the derivative of the C1 state map along a line segment. [[thm-ftc-second-part]]

[F4] Dominated convergence applies to the matrix-valued coefficients bounded by an integrable local derivative bound. [[thm-dominated-convergence]]

[F5] The derivative of a composition of differentiable maps is the composition of their derivatives. [[thm-chain-rule-for-total-derivatives]]

[F6] Every locally integrable real function has its value as the limit of local averages almost everywhere; this applies simultaneously to a countable family under Countable Choice. [[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]] [[def-countable-choice]]

## Proof
1.1 Fix an initial pair $(s,x_0)$ and a closed ball $K=\overline B(x_0,r)$. On a sufficiently short one-sided interval $J$ adjoining $s$, absolute continuity of the integrals of $m_K,L_K$ gives $\int_Jm_K\le r$ and $\int_JL_K<1$. On continuous curves taking values in $K$, define $\Phi(X)(t)=x_0+\int_s^t b(q,X(q))dq,$ with the oriented integral when J lies to the left of s. The integrand is measurable because $q\mapsto(q,X(q))$ is continuous and b is Borel; it is integrable because $|b(q,X(q))|\le m_K(q)$ almost everywhere. The map preserves the closed sup-norm ball of radius r about the constant curve $x_0$, and $\|\Phi(X)-\Phi(Y)\|_\infty\le(\int_JL_K)\|X-Y\|_\infty$. By [F1] it has a unique fixed point. The integral FTC [F2] makes this curve absolutely continuous and a solution almost everywhere. [given, F1, F2]

2.1 If two solutions have the same value at one time and remain in a compact K on a common compact interval, partition that interval into finitely many subintervals on which $\int L_K<1$. On each subinterval beginning at a time where the solutions agree, their integral equations bound their sup-norm difference by $(\int L_K)$ times itself, so the difference is zero. Induction over the partition proves uniqueness throughout the common interval. Their union therefore defines a unique maximal solution. Suppose a maximal endpoint $\tau$ lies in $(0,T)$ and there are times $t_n\uparrow\tau$ with $X(t_n)$ in a compact set K. Choose R with K contained in the ball $B_R(0)$, put $K_1=\overline B_{R+1}(0)$, and take n large enough that $\int_{t_n}^{\tau}m_{K_1}<1$. If the path first reaches the boundary of $K_1$ at some $r\in(t_n,\tau)$, it stays in $K_1$ on $[t_n,r]$, so $|X(r)-X(t_n)|\le\int_{t_n}^r m_{K_1}<1$, while $|X(r)-X(t_n)|\ge |X(r)|-|X(t_n)|\ge1$, a contradiction. Thus it stays in $K_1$ up to $\tau$; the same integrable bound makes it Cauchy there, and its finite limit lets step 1.1 extend it past $\tau$, again a contradiction. Hence no compact set contains trajectory values at times arbitrarily close to an interior maximal endpoint: the path eventually leaves every compact set. [given, F2, step 1.1]

3.1 Assume the spatial derivative hypothesis. On a short interval and compact ball as in step 1.1, solutions from nearby initial points remain in a common compact ball. The contraction estimate gives $\|X(\cdot;s,x_0+h)-X(\cdot;s,x_0)\|_\infty\le C|h|$. Write $\Delta_h(t)=X(t;s,x_0+h)-X(t;s,x_0)$. The state-variable fundamental theorem of calculus [F3] gives $\Delta_h(t)=h+\int_s^t A_h(q)\Delta_h(q)dq,\quad A_h(q)=\int_0^1D_xb(q,X(q;s,x_0)+\theta\Delta_h(q))d\theta.$ Put $A(q)=D_xb(q,X(q;s,x_0))$ at the almost-everywhere times where the spatial differential exists, with value zero on its exceptional time set. The matrix equation $V(t)=I_d+\int_s^tA(q)V(q)dq$ has a unique continuous solution by the contraction argument of step 1.1, since $\int_JL_K<1$. Subtracting its product with h from the equation for $\Delta_h$ gives $\Delta_h(t)-V(t)h=\int_s^t A_h(q)(\Delta_h(q)-V(q)h)dq+\int_s^t(A_h(q)-A(q))V(q)h\,dq.$ Taking sup norms and absorbing the first term bounds the left side by $C|h|\int_J\|A_h-A\|dq=o(|h|)$. Thus $D_{x_0}X=V$; dominated convergence in the same integral equation proves continuity of V in $x_0$. The integral FTC [F2] yields $\dot V=A(t)V$ almost everywhere. Repeating on a finite cover by overlapping short intervals gives $C^1$ dependence throughout each common flow domain and continuous dependence in the uniform path norm on trajectories existing through the full interval. [F1, F2, F3, F4, step 1.1, step 2.1]

4.1 Uniqueness makes the time map from s to t injective. Continuous dependence makes its domain open; solving backward from time t shows its image is open and its inverse is the backward flow, which is $C^1$ by step 3.1. The chain rule [F5] says the derivative of the inverse times V is the identity. Thus the time map is a $C^1$ diffeomorphism between its open domain and image. [F5, step 2.1, step 3.1]

5.1 Fix a compact flow tube and a compact set K of states it visits. For a fixed target time t, choose a compact time interval J containing t and the varying start times, with all trajectories in the flow identity remaining in K. For trajectories with the same starting time, the integral equation gives $|X(r;s,y)-X(r;s,z)|\le|y-z|+\int_JL_K(q)|X(q;s,y)-X(q;s,z)|dq$; iterating this inequality yields the spatial Lipschitz bound $|X(t;s,y)-X(t;s,z)|\le e^{\int_JL_K}|y-z|$. For $s,s+h\in J$, the flow identity and the integral equation along the short backward segment give $X(t;s+h,x)=X(t;s,X(s;s+h,x))$ and $|X(s;s+h,x)-x|\le\int_{[s,s+h]}m_K(q)dq$, where the integral is over the unoriented interval. Hence $|X(t;s+h,x)-X(t;s,x)|\le e^{\int_JL_K}\int_{[s,s+h]}m_K(q)dq$. Summing over any disjoint adjacent intervals shows that $s\mapsto X(t;s,x)$ is locally absolutely continuous, uniformly for x in the tube. To identify its derivative, choose a countable dense subset Q of K. By [F6], outside one null set the functions $m_K,L_K$ and $s\mapsto b(s,q)$ for all $q\in Q$ have their values as limits of local averages; also the spatial Lipschitz bound holds at such s. Approximation by q and the common Lipschitz bound show that the averages of $b(r,x)$ over intervals shrinking to s converge to $b(s,x)$ uniformly for $x\in K$. For the solution started at x at time $s+h$, the magnitude bound gives $|X(r;s+h,x)-x|\le\int_{[s,s+h]}m_K=O(|h|)$ uniformly between s and s+h at these Lebesgue points. Replacing $b(r,x)$ by $b(r,X(r;s+h,x))$ in the average contributes at most $|h|^{-1}O(|h|)\int_{[s,s+h]}L_K(r)dr=O(|h|)$. The integral equation therefore gives $[X(s;s+h,x)-x]/h\to-b(s,x)$ uniformly on K. The flow identity $X(t;s+h,x)=X(t;s,X(s;s+h,x))$ and the spatial derivative from step 3.1 yield $\partial_sX(t;s,x)=-D_xX(t;s,x)b(s,x)$ almost everywhere on the tube. The right side has the integrable local bound $e^{\int_JL_K}m_K(s)$, consistent with and also giving the local absolute continuity. [F2, F6, step 3.1, step 4.1] ∎
