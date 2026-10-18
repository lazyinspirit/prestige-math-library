---
id: thm-care-stabilizing-psd-solution-and-value
kind: theorem
title: "Stabilizability and detectability give the unique stabilizing positive-semidefinite CARE solution"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-lqr-stabilizability-and-detectability
  - def-standard-continuous-and-discrete-riccati-equations
  - lem-hurwitz-matrix-exponential-decay-bound
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-existence-and-uniqueness-of-a-maximal-ode-solution
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel Liberzon, Calculus of Variations and Optimal Control Theory: A Concise Introduction, Chapter 6"
      url: "https://liberzon.csl.illinois.edu/teaching/cvoc/node113.html"
      locator: "§§6.2.1–6.2.4, finite-horizon limit and infinite-horizon LQR"
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems, Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
      locator: "slides 26–29, CARE theorem, Hamiltonian graph, and Newton methods"
---

## Statement

Let $A\in F^{n\times n}$, $B\in F^{n\times m}$, $C\in F^{p\times n}$, $R=R^*\succ0$, $Q=C^*C$, and $G=BR^{-1}B^*$. Assume $(A,B)$ is continuously stabilizable and $(A,C)$ is continuously detectable, using [[def-lqr-stabilizability-and-detectability]]. Then the CARE of [[def-standard-continuous-and-discrete-riccati-equations]] has exactly one Hermitian positive-semidefinite solution $X$. Its closed-loop matrix $A_c=A-GX$ is Hurwitz, and for every initial state $x_0$ the infinite-horizon value
$$\inf_u\int_0^\infty\bigl(x(t)^*Qx(t)+u(t)^*Ru(t)\bigr)\,dt=x_0^*Xx_0$$
is attained by $u(t)=-R^{-1}B^*Xx(t)$. Controls are locally square-integrable and states are locally absolutely continuous solutions of $\dot x=Ax+Bu$. A finite value also forces the terminal term $x(T)^*Xx(T)$ to tend to zero; this transversality is proved below.

## Facts & Assumptions

**Given:** The finite matrices in the statement, continuous stabilizability/detectability, $R\succ0$, $Q=C^*C$, and locally square-integrable controls.

[F1] [[def-lqr-stabilizability-and-detectability]]: stabilizability/detectability mean existence of a Hurwitz state-feedback or output-injection matrix.

[F2] [[def-standard-continuous-and-discrete-riccati-equations]]: $G=BR^{-1}B^*$ and the CARE residual is $A^*X+XA-XGX+Q$.

[F3] [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]: $R\succ0$ yields an invertible factor $R=LL^*$.

[F4] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a locally Lipschitz finite-dimensional ODE vector field has a unique local IVP solution.

[F5] [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]: the local solution has a unique maximal interval; any solution through the same data is its restriction.

[F6] [[lem-hurwitz-matrix-exponential-decay-bound]]: if $M$ is Hurwitz then $e^{tM}$ has a bound by a polynomial times $e^{-\alpha t}$ for some $\alpha>0$.

[F7] [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]: for a continuous real matrix coefficient on a compact interval, every homogeneous linear matrix IVP has a unique solution throughout that interval.

## Proof

1.1 By [F3], $R^{-1}$ exists and $G=G^*\succeq0$, since $v^*Gv=(B^*v)^*R^{-1}(B^*v)\ge0$. Regard the Hermitian matrices as a finite-dimensional real vector space and solve the initial-value problem $P'(s)=A^*P(s)+P(s)A-P(s)GP(s)+Q,\qquad P(0)=0.$ Its polynomial vector field is locally Lipschitz: on each bounded matrix ball, expanding the quadratic difference gives $PGP-HGH=(P-H)GP+HG(P-H)$, which is bounded linearly in $\|P-H\|_F$. Thus [F4] and [F5] give a unique maximal solution. The adjoint $P(s)^*$ satisfies the same IVP, so uniqueness makes $P(s)=P(s)^*$ on its interval. [F2, F3, F4, F5, algebra]

2.1 Fix $T$ in this interval and let $x$ follow any admissible control on $[0,T]$. Put $S(t)=P(T-t)$. Differentiating $x(t)^*S(t)x(t)$ and substituting the ODE gives $x^*Qx+u^*Ru+\frac{d}{dt}(x^*Sx)=(u+R^{-1}B^*Sx)^*R(u+R^{-1}B^*Sx).$ Integrating, using $P(0)=0$, yields $J_T(u)=x_0^*P(T)x_0+\int_0^T(u+R^{-1}B^*Sx)^*R(u+R^{-1}B^*Sx)\,dt.$ The candidate feedback makes $\dot x=(A-GS(t))x$, whose coefficient is continuous on $[0,T]$. If $F=\mathbb R$, [F7] gives its unique solution on the interval. If $F=\mathbb C$, write $x$ in real and imaginary parts and replace the coefficient $M$ by $\begin{bmatrix}\operatorname{Re}M&-\operatorname{Im}M\\\operatorname{Im}M&\operatorname{Re}M\end{bmatrix}$; [F7] applies to this continuous real system, and its solution is exactly the complex feedback trajectory. Thus $u=-R^{-1}B^*Sx$ is admissible and makes the last integral zero, so $x_0^*P(T)x_0$ is the finite-horizon value and $P(T)\succeq0$. [F2, F7, step 1.1, algebra]

3.1 By stabilizability [F1], choose $K_0$ with $A_0=A-BK_0$ Hurwitz. Under $u=-K_0x$, [F6] bounds $x(t)=e^{tA_0}x_0$ by a square-integrable polynomial-exponential multiple of $\|x_0\|$. The control $K_0x(t)$ has the same property, so its cost on $[0,T]$ is at most $c\|x_0\|^2$ for one finite $c$ independent of $T$. Step 2.1 therefore gives $0\preceq P(T)\preceq cI$. If the maximal interval ended at finite $T_*$, the polynomial ODE field would be bounded on this bounded range, so $P'(s)$ would be bounded and every entry of $P(s)$ would have a finite limit as $s\uparrow T_*$. Applying [F4] at that limiting matrix extends the solution past $T_*$, contradicting maximality [F5]. Hence $P$ exists for every $s\ge0$. [F1, F4, F5, F6, step 2.1]

4.1 For $T_2>T_1$, every control on $[0,T_2]$ has nonnegative cost after $T_1$; its restriction to $[0,T_1]$ costs at least $x_0^*P(T_1)x_0$ by step 2.1. Taking infima gives $P(T_2)\succeq P(T_1)$. Together with the bound in step 3.1, each quadratic form $v^*P(T)v$ increases to a finite limit. Applying this to the coordinate vectors and their pairwise sums shows every matrix entry converges to a Hermitian limit $X\succeq0$. [step 2.1, step 3.1, algebra]

5.1 Let $\Phi(P)=A^*P+PA-PGP+Q$. By step 4.1 and continuity, $P'(T)=\Phi(P(T))\to\Phi(X)$. If $\Phi(X)\ne0$, polarization gives a vector $v$ with $v^*\Phi(X)v\ne0$. Then the derivative of the convergent scalar function $v^*P(T)v$ tends to a nonzero real number, so it is eventually bounded away from zero with constant sign; integration contradicts its convergence. Thus $\Phi(X)=0$, so $X$ solves the CARE. [F2, step 4.1, algebra, contradiction]

6.1 Set $K=R^{-1}B^*X$ and $A_c=A-BK=A-GX$. The CARE gives $A_c^*X+XA_c=-Q-K^*RK$. Along $\dot x=A_cx$, integration over $[0,T]$ gives $\int_0^T(\|Cx(t)\|_2^2+u(t)^*Ru(t))\,dt=x_0^*Xx_0-x(T)^*Xx(T)\le x_0^*Xx_0.$ The Cholesky factor $R=LL^*$ is invertible by [F3], so $u^*Ru=\|L^*u\|_2^2$ controls $\|u\|_2^2$ by the finite operator norm of $L^{-*}$. Hence $Cx,u\in L^2(0,\infty)$. [F2, F3, step 5.1, algebra]

7.1 By detectability [F1], choose $L$ with $A_o=A-LC$ Hurwitz. Then $\dot x=A_ox+w$, where $w=Bu+LCx\in L^2$. Since $x$ is locally absolutely continuous, $w$ is locally integrable and the product rule gives $\frac{d}{dt}(e^{-tA_o}x(t))=e^{-tA_o}w(t)$ almost everywhere. Integrating this identity from $0$ to $t$ and multiplying by $e^{tA_o}$ proves $x(t)=e^{tA_o}x_0+\int_0^t e^{(t-s)A_o}w(s)\,ds$. From [F6], there are $M,\alpha>0$ with $\|e^{tA_o}\|_2\le Me^{-\alpha t}$ after absorbing the finite polynomial factor into a smaller exponential rate. The initial term tends to zero. For the integral, split at a fixed $S$: the portion $0\le s\le S$ tends to zero as $t\to\infty$; by Cauchy–Schwarz the tail is at most $M(2\alpha)^{-1/2}\|w\|_{L^2(S,\infty)}$, which tends to zero as $S\to\infty$. Thus $x(t)\to0$. Since this holds for every initial state, no eigenvalue of $A_c$ can have nonnegative real part: an eigenvector for such an eigenvalue would not decay. Therefore $A_c$ is Hurwitz. [F1, F6, step 6.1, algebra, contradiction]

8.1 For any admissible control of finite infinite-horizon cost, $u,Cx\in L^2$. Repeating the stable-convolution argument in step 7.1 gives $x(T)\to0$. The same square-completion identity as step 2.1, now with constant $S=X$, yields $J_T(u)=x_0^*Xx_0-x(T)^*Xx(T)+\int_0^T(u+Kx)^*R(u+Kx)\,dt.$ Taking $T\to\infty$ gives $J_\infty(u)\ge x_0^*Xx_0$. The feedback in step 6.1 has $u+Kx=0$ and $x(T)\to0$, hence attains equality. [F1, F2, F3, step 2.1, step 6.1, step 7.1, algebra]

9.1 Let $Y\succeq0$ be any other CARE solution. Repeating steps 6.1–7.1 with $Y$ proves $A_Y=A-GY$ is Hurwitz. Subtracting the CAREs and using $XGX-YGY=PG(X-Y)+(X-Y)GY\quad\text{with }P=X$ gives $A_c^*(X-Y)+(X-Y)A_Y=0$. Hence the derivative of $e^{tA_c^*}(X-Y)e^{tA_Y}$ is zero, so this matrix equals $X-Y$ for every $t\ge0$. Both exponential factors tend to zero by [F6], forcing $X-Y=0$. Thus $X$ is the unique positive-semidefinite solution, and in particular the unique stabilizing one. [F2, F6, step 6.1, step 7.1, algebra] ∎
