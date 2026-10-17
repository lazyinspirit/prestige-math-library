---
id: lem-bounded-sde-increment-moments
kind: lemma
title: "Second and fourth moments of bounded-coefficient SDE increments"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-milstein-scheme-and-iterated-integrals
  - lem-event-weighted-ito-isometry
  - def-continuous-brownian-ito-process
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - thm-ito-integral-process-has-a-continuous-martingale-version
  - thm-fatou-lemma
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Kloeden and Platen, Numerical Solution of Stochastic Differential Equations, Sections 4.5 and 10.6, printed pp. 127-140 and 356-365"
      url: "https://stevencjxie8.com/files/refs/ref7.pdf"
    - title: "M. Tretyakov, Lecture Notes for a Mini-Course on Numerical Methods for SDEs, Sections 6.4 and 6.6"
      url: "https://www.math.chalmers.se/~cohend/MT2016/LNminicourseSDEv1.pdf"
---

## Statement

Let $X$ solve the autonomous SDE in [[def-milstein-scheme-and-iterated-integrals]] on a filtered probability space with an $m$-dimensional Brownian motion relative to the filtration. Assume $b,\sigma_1,\ldots,\sigma_m\in C_b^3(\mathbb R^d)$, with the $C_b^3$ convention of the Definition. There is a constant $C$ depending only on the coefficient bounds and $d,m$ such that for every $t\ge0$, $0\le r\le1$, and $A\in\mathcal F_t$,
$$\mathbb E\!\left[\mathbf1_A|X_{t+r}-X_t|^2\right]\le Cr\,P(A),\qquad \mathbb E\!\left[\mathbf1_A|X_{t+r}-X_t|^4\right]\le Cr^2\,P(A).$$
These event-weighted inequalities are the conditional second- and fourth-moment bounds for the increment.

## Facts & Assumptions

**Given:** AC, the Brownian It\^o process and SDE coefficient assumptions in the Statement, $t\ge0$, $0\le r\le1$, and an event $A\in\mathcal F_t$.

[L1] [[def-milstein-scheme-and-iterated-integrals]]: the state space is finite-dimensional, the drift and diffusion vector fields are componentwise $C_b^3$, and their sup norms and derivative sup norms are finite.

[F1] [[def-continuous-brownian-ito-process]]: the usual filtration and Brownian hypotheses give a continuous adapted representative with a drift-plus-It\^o-integral representation; Brownian increments after $t$ are independent of $\mathcal F_t$, and the process class is closed under stopping with drift and diffusion multiplied by the stopped indicator.

[F2] [[lem-event-weighted-ito-isometry]]: for $A\in\mathcal F_t$, each scalar It\^o integral over $(t,t+r]$ satisfies $\mathbb E[\mathbf1_A|\int H,dW^j|^2]=\mathbb E[\mathbf1_A\int|H|^2ds]$.

[F3] [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]: for $f\in C^{1,2}$, It\^o's drift is $Df\,b+\frac12\sum_jD^2f[\sigma_j,\sigma_j]$ and the martingale term is $\sum_jDf\,\sigma_j\,dW^j$.

[F4] [[thm-ito-integral-process-has-a-continuous-martingale-version]]: finite-energy It\^o integral processes are square-integrable martingales, so their stopped increments have mean zero after multiplication by an event known at the start time.

[F5] [[thm-fatou-lemma]]: for nonnegative random variables converging almost surely, the expectation of the limit is at most the lower limit of the expectations.

[A1] [[def-axiom-of-choice]]: AC is inherited from [F1]--[F3]; the moment estimates introduce no further choice.

## Proof

**Given:** The assumptions above.

1.1 Put $Y_s=X_s-X_t$, and let $B$ bound $|b|$ and $S^2$ bound $\sum_j|\sigma_j|^2$. The integral equation, $|\int_t^{t+r}b(X_s)ds|^2\le B^2r^2$, the finite-sum inequality $|\sum_jv_j|^2\le m\sum_j|v_j|^2$, and [F2] give
$$\mathbb E[\mathbf1_A|Y_{t+r}|^2]\le2B^2r^2P(A)+2S^2rP(A)\le C rP(A),$$
since $r\le1$. The event-weighted identity applies to each integrand $\sigma_j(X_s)\mathbf1_{(t,t+r]}(s)$, whose squared norm is bounded by $\|\sigma_j\|_\infty^2$. [L1, F1, F2, A1]

2.1 For $R>0$, use the continuous adapted version from [F1], modifying it on its exceptional null set if necessary; usual completeness makes this an adapted null modification and leaves all moment and SDE assertions unchanged. Let $\theta_R=\inf\{u\ge0:|Y_{t+u}|\ge R\}$. This is a stopping time: for fixed $u$, $\{\theta_R\le u\}=\{\sup_{0\le v\le u}|Y_{t+v}|\ge R\}$, and continuity makes the supremum equal to the supremum over rational $v\in[0,u]$ together with $u$, hence $\mathcal F_{t+u}$-measurable. Put $Y^R_u=X_{t+(u\wedge\theta_R)}-X_t=Y_{t+(u\wedge\theta_R)}$, $q_R(u)=\mathbb E[\mathbf1_A|Y^R_u|^4]$, and $p_R(u)=\mathbb E[\mathbf1_A|Y^R_u|^2]$. By the stopped representation in [F1], the drift and diffusion integrands are multiplied by $\mathbf1_{s-t\le\theta_R}$. Its drift square is at most $B^2u^2$, and applying [F2] coordinatewise with the finite-sum bound gives $p_R(u)\le2B^2u^2P(A)+2S^2uP(A)\le C uP(A)$, by the same bound as step 1.1. Apply [F3] to $f(y)=|y|^4$ and the stopped process. The Hessian formula gives drift $4|Y^R|^2\langle Y^R,b(X)\rangle+2|Y^R|^2\sum_j|\sigma_j(X)|^2+4\sum_j\langle Y^R,\sigma_j(X)\rangle^2$ before the stopping time. Bounded coefficients and $4B|Y^R|^3\le C(|Y^R|^4+|Y^R|^2)$ bound its absolute value by $C(|Y^R|^4+|Y^R|^2)$. The stopped stochastic integrand is bounded, so [F4] makes its expectation after multiplication by $\mathbf1_A$ zero. Consequently
$$q_R(u)\le C\int_0^u q_R(v)\,dv+C u^2P(A),\qquad 0\le u\le r.$$
The second term follows from $p_R(v)\le CvP(A)$; all constants are independent of $R$. [F1, F2, F3, F4, step 1.1]

2.2 Define $Q_R(u)=\int_0^u q_R(v)\,dv$. The inequality in step 2.1 implies $Q_R'(u)\le C Q_R(u)+C u^2P(A)$ for almost every $u$, with $Q_R(0)=0$. Multiplying by $e^{-Cu}$ and integrating gives $Q_R(u)\le C' u^3P(A)$ for $u\le1$. Returning to step 2.1 gives $q_R(u)\le C''u^2P(A)$. As $R\to\infty$, path continuity implies $Y^R_u\to Y_{t+u}$ almost surely; [F5] therefore yields the asserted fourth-moment bound. [F5, step 2.1, algebra]

3.1 Steps 1.1 and 2.2 are exactly the asserted event-weighted second- and fourth-moment estimates, with constants independent of $t,r,A$. The stopped argument and finite-dimensional It\^o calculation add no axiom beyond [A1]. [A1, step 1.1, step 2.2] ∎
