---
id: lem-parameter-ode-flow-tangent-on-common-tube
kind: lemma
title: Parameter-dependent ODE flows have the variational tangent on a common tube
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-first-order-ode-initial-value-problem-and-solution, prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation, thm-mean-value-inequality-for-total-derivatives, thm-gronwall-integral-inequality, thm-norm-inequality-for-the-vector-valued-integral, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "William W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, §§2–3"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §2.4"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
---

## Statement

Let $T\ge0$, let $\Theta\subseteq\mathbb R^m$ and $D\subseteq\mathbb R\times\mathbb R^d\times\Theta$ be open, and let $f:D\to\mathbb R^d$ be continuously differentiable. Let $V_\theta\subseteq\Theta$ be open and $u_0:V_\theta\to\mathbb R^d$ be $C^1$. For $T>0$, assume that for every $\theta\in V_\theta$ the unique solution of $u'=f(t,u,\theta)$, $u(0)=u_0(\theta)$, exists on $[0,T]$; for $T=0$, instead define $u_\theta(0)=u_0(\theta)$. Assume there is a bounded convex open set $O\subset D$ with compact closure in $D$ containing all triples $(t,u_\theta(t),\theta)$. Then $\theta\mapsto u_\theta$ is $C^1$ as a map to $C([0,T];\mathbb R^d)$. For any $\theta_0\in V_\theta$ and $T>0$, its tangent matrix $S(t)=D_\theta u_\theta(t)|_{\theta=\theta_0}$ is the unique solution of
$$S'(t)=D_u f(t,u_{\theta_0}(t),\theta_0)S(t)+D_\theta f(t,u_{\theta_0}(t),\theta_0),\qquad S(0)=D u_0(\theta_0).$$
For $T=0$, evaluation identifies $C([0,0];\mathbb R^d)$ with $\mathbb R^d$ and the parameter derivative is $S(0)=D u_0(\theta_0)$; no time derivative or differential-equation solution on the singleton is asserted. The result is local to the stated common compact tube and claims no differentiability outside it.

## Facts & Assumptions

**Given:** The open domain, $C^1$ field, parameter neighborhood, $C^1$ initial map, common bounded convex tube with compact closure in $D$, and the stated IVP solutions for $T>0$ or initial-evaluation curves for $T=0$.

[F1] A first-order IVP solution satisfies its Volterra equation ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

[F2] A uniform bound on the derivative over a convex open set gives the corresponding Lipschitz bound ([[thm-mean-value-inequality-for-total-derivatives]]).

[F3] If $g(t)\le A+L\int_0^t g(s)\,ds$ for nonnegative continuous $g$, then $g(t)\le A e^{Lt}$ ([[thm-gronwall-integral-inequality]]).

[F4] The norm of a vector-valued integral is at most the integral of its norm ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[F5] A continuous coefficient matrix on a compact interval gives a unique global solution of its linear matrix IVP ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

[A1] The parameter neighborhood and convex tube $O$ ensure all secant segments used below remain in $O$. Continuity of $D f$ on the compact closure $\overline O$ makes $D f$ bounded and uniformly continuous there.

## Proof

1.1 If $T=0$, then $C([0,0];\mathbb R^d)$ is identified with $\mathbb R^d$ by evaluation at $0$, so $\theta\mapsto u_\theta$ is the given $C^1$ map $u_0$ and the initial condition determines its parameter tangent at the only time; this branch asserts no time derivative or IVP on the singleton. If $d=0$, then $\mathbb R^d=\{0\}$, so the state curve and tangent are the unique zero maps. If $m=0$, the parameter domain has at most one point; its map into $C([0,T];\mathbb R^d)$ has the unique derivative from $\mathbb R^0$, and the sensitivity matrix has no columns. In each case the asserted conclusion follows; hence assume $T>0$ and $d,m\ge1$. Let $\delta_h(t)=u_{\theta_0+h}(t)-u_{\theta_0}(t)$. Differentiability of $u_0$ gives $\|u_0(\theta_0+h)-u_0(\theta_0)\|_2\le C_0\|h\|_2$ for small $h$. Subtract the Volterra equations [F1] and apply [F2] on the segment between $(u_{\theta_0+h}(t),\theta_0+h)$ and $(u_{\theta_0}(t),\theta_0)$. Boundedness of $D f$ on $O$ gives $$\|\delta_h(t)\|_2\le C_0\|h\|_2+L\int_0^t(\|\delta_h(s)\|_2+\|h\|_2)\,ds.$$ Since $t\le T$, [F3] yields $\sup_t\|\delta_h(t)\|_2\le(C_0+LT)e^{LT}\|h\|_2$. [F1, F2, F3, F4, A1, given, algebra]

1.2 Put $A(t)=D_u f(t,u_{\theta_0}(t),\theta_0)$ and let $B_j(t)$ be column $j$ of $D_\theta f(t,u_{\theta_0}(t),\theta_0)$. For each parameter coordinate $j$, the augmented vector $Z_j=(S_{\cdot j},1)$ solves the homogeneous linear system $$Z_j'(t)=\begin{pmatrix}A(t)&B_j(t)\\0&0\end{pmatrix}Z_j(t),\qquad Z_j(0)=\begin{pmatrix}D u_0(\theta_0)_{\cdot j}\\1\end{pmatrix}.$$ Embed $Z_j(0)$ as one column of a square $(d+1)\times(d+1)$ initial matrix, with all other columns zero. The unique linear matrix solution supplied by [F5] has that vector solution as the selected column. Thus the tangent equation has a unique solution for each of the finitely many columns. [A1, F5, construct]

2.1 Put $A(t)=D_u f(t,u_{\theta_0}(t),\theta_0)$ and $B(t)=D_\theta f(t,u_{\theta_0}(t),\theta_0)$, and define $\rho_h(t)=f(t,u_{\theta_0}(t)+\delta_h(t),\theta_0+h)-f(t,u_{\theta_0}(t),\theta_0)-A(t)\delta_h(t)-B(t)h$. Set $z_0(t)=(t,u_{\theta_0}(t),\theta_0)$ and $v_h(t)=(0,\delta_h(t),h)$, and let $\omega(r)=\sup\{\|Df(z)-Df(w)\|:z,w\in\overline O,\ \|z-w\|_2\le r\}$. Uniform continuity of $Df$ on $\overline O$ gives $\omega(r)\to0$ as $r\downarrow0$. If $v_h(t)\ne0$, the set $O\cap B(z_0(t),2\|v_h(t)\|_2)$ is convex and open and contains both endpoints of the secant. For $R_t(z)=f(z)-Df(z_0(t))(z-z_0(t))$, its derivative on this set has norm at most $\omega(2\|v_h(t)\|_2)$. Applying [F2] there gives $\|\rho_h(t)\|_2\le\omega(2\|v_h(t)\|_2)\|v_h(t)\|_2$; if $v_h(t)=0$, then $\rho_h(t)=0$. Step 1.1 gives $\sup_t\|v_h(t)\|_2=O(\|h\|_2)$, so $\sup_t\|\rho_h(t)\|_2=o(\|h\|_2)$. Also $u_0(\theta_0+h)-u_0(\theta_0)=D u_0(\theta_0)h+o(\|h\|_2)$. [A1, F2, step 1.1, algebra]

3.1 Let $E_h(t)=\delta_h(t)-S(t)h$, and let $r_0(h)=u_0(\theta_0+h)-u_0(\theta_0)-D u_0(\theta_0)h$. The Volterra equations and the field remainder $\rho_h$ from step 2.1 give $E_h(t)=r_0(h)+\int_0^t\bigl(A(s)E_h(s)+\rho_h(s)\bigr)ds$, where $A(s)=D_u f(s,u_{\theta_0}(s),\theta_0)$. By [F4], $\|E_h(t)\|_2\le\|r_0(h)\|_2+T\sup_s\|\rho_h(s)\|_2+L\int_0^t\|E_h(s)\|_2ds$. Both first terms are $o(\|h\|_2)$ by step 2.1 and differentiability of $u_0$. Applying [F3] yields $\sup_t\|E_h(t)\|_2=o(\|h\|_2)$. Thus the Fréchet derivative at $\theta_0$ exists and equals $S$. [F1, F3, F4, step 1.2, step 2.1]

4.1 For any sequence $\theta_j\to\theta_0$ in $V_\theta$, step 1.1 gives $u_{\theta_j}\to u_{\theta_0}$ uniformly, and uniform continuity of $D f$ on $\overline O$ makes the tangent coefficients $A_j,B_j$ converge uniformly to $A,B$. Subtracting the tangent integral equations gives $S_j(t)-S(t)=D u_0(\theta_j)-D u_0(\theta_0)+\int_0^t\bigl(A_j(s)(S_j(s)-S(s))+(A_j(s)-A(s))S(s)+B_j(s)-B(s)\bigr)ds$. The initial and coefficient differences tend to zero, while $A_j$ are uniformly bounded; [F3] then gives $\|S_j-S\|_{C([0,T])}\to0$. Since $\theta_0$ is arbitrary in $V_\theta$, the derivative is continuous throughout that set, so the flow map is $C^1$. [A1, F3, step 1.1, step 1.2, step 3.1] ∎

