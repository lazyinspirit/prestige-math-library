---
id: def-barrier-central-path-and-newton-residuals
kind: definition
title: "Log-barrier central paths and primal-dual Newton residuals"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-self-concordant-log-homogeneous-barrier
  - def-conic-optimization-primal-dual-models
  - def-inequality-constrained-program-and-kkt-geometry
  - lem-nonnegative-orthant-log-barrier
  - lem-lorentz-cone-log-barrier
  - lem-psd-cone-self-dual-logdet-barrier
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 11 §§11.2–11.3 and §§11.6–11.7, central path, generalized barriers, and primal-dual residual systems."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lectures 15–16"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture15.pdf"
      locator: "Lecture 15, path-following definition; Lecture 16, LP, SOCP, and SDP forms."
---

## Definition

For a smooth inequality problem with the convention of [[def-inequality-constrained-program-and-kkt-geometry]], let $D\subseteq\mathbb R^n$ be open and convex, let $f_0,g_1,\ldots,g_m$ be convex $C^2$ functions on $D$, and let $A\in\mathbb R^{p\times n}$ and $b\in\mathbb R^p$. Assume there exists $x\in D$ with $Ax=b$ and $g_i(x)<0$ for every $i$. For $t>0$, its **log-barrier objective** is
$$\Psi_t(x)=t f_0(x)-\sum_{i=1}^m\log(-g_i(x)),\qquad Ax=b,\quad g_i(x)<0.$$
Any attained minimizer is a central point. Its central multipliers are $\lambda_i=-1/(t g_i(x))>0$. A central point and multiplier tuple satisfy $Ax=b$, $g(x)<0$, and $\nabla f_0(x)+Dg(x)^T\lambda+A^T\nu=0$ for an equality multiplier $\nu$.

For the conic model of [[def-conic-optimization-primal-dual-models]], let $s=h-Gx\in\operatorname{int}K$ and let $F$ be a self-concordant barrier on $K$. The conic **barrier objective** is $\Phi_t(x)=t c^Tx+F(h-Gx)$ restricted to $Ax=b$. An attained minimizer $x_t$ satisfies
$$t c-G^*\nabla F(s_t)+A^Tw=0,\qquad Ax_t=b,\qquad s_t=h-Gx_t\in\operatorname{int}K$$
for some $w\in\mathbb R^p$. Its barrier multiplier is $z_t=-\nabla F(s_t)/t$.

For a standard-form LP or convex QP with $n\ge1$, $Ax=b$, $x\ge0$, and objective $f_0(x)=\tfrac12x^TQx+c^Tx$ ($Q=0$ for an LP), define the primal-dual residuals
$$r_d=Qx+c-A^Ty-s,\qquad r_p=Ax-b,\qquad r_c=Xs-\sigma\mu\mathbf1,$$
where $X=\operatorname{diag}(x)$, $S=\operatorname{diag}(s)$, $\mu=x^Ts/n$, and $0<\sigma<1$. For $x,s>0$, the modified KKT Newton direction solves
$$\begin{bmatrix}Q&-A^T&-I\\ A&0&0\\ S&0&X\end{bmatrix}\begin{bmatrix}\Delta x\\\Delta y\\\Delta s\end{bmatrix}=-\begin{bmatrix}r_d\\r_p\\r_c\end{bmatrix}.$$

For a finite product of orthant, Lorentz, or positive-semidefinite cone factors, use the sum $F$ of the selected factor barriers in the three cited lemmas. The analogous conic residuals are $r_p=Ax-b$, $r_d=A^Ty-G^*z-c$, and $r_c=s\circ z-\sigma\mu e_F$. These factors are self-dual under their standard Euclidean or trace pairings by [[lem-nonnegative-orthant-log-barrier]], [[lem-lorentz-cone-log-barrier]], and [[lem-psd-cone-self-dual-logdet-barrier]], so $s$ and $z$ occupy the same factor spaces. For the orthant, $\circ$ is coordinatewise multiplication and $e=\mathbf1$. The Lorentz Jordan product is $(t,u)\circ(q,v)=(tq+u^Tv,tv+qu)$ with $e=(1,0)$; for symmetric matrices $X\circ S=(XS+SX)/2$ with $e=I$. In each factor, pairing $s\circ z$ with $e$ gives $\langle s,z\rangle$: this is the coordinate sum for the orthant, the first coordinate for the Lorentz product, and $\operatorname{tr}((XS+SX)/2)=\operatorname{tr}(XS)$ for symmetric matrices by the finite-index trace identity. Write $e_F$ for the product vector whose orthant and matrix factors are $e_j$ and whose Lorentz factors are $2e_j$; it is a barrier target vector, whereas $e$ remains the Jordan identity. Then $\langle e,e_F\rangle=\nu$, the sum of the selected factor barrier parameters, and set $\mu=\langle s,z\rangle/\nu$. Indeed, $-\nabla F_j(s_j)$ is the coordinatewise inverse in the orthant, $2(q,-u)/(q^2-\|u\|_2^2)$ at a Lorentz point $(q,u)$, and $X^{-1}$ at a positive-definite matrix $X$. Their Jordan products with $s_j$ are respectively $e_j$, $2e_j$, and $e_j$. Thus a barrier multiplier $z_t=-\nabla F(s_t)/t$ satisfies $s_t\circ z_t=e_F/t$ and $\mu=1/t$. At an iteration, the centering target $\sigma\mu$ is held fixed when linearizing: the complementarity equation is $\Delta s\circ z+s\circ\Delta z=-r_c$, with $\Delta s=-G\Delta x$.

Residual tolerances describe a candidate unless an independent argument also verifies feasibility and a primal-dual gap. A finite iteration or factorization budget that returns a candidate, failure, or inconclusive status is not itself an optimality certificate.
