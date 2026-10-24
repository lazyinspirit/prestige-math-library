---
id: thm-euler-global-state-and-log-density-error
title: "Euler global state and log-density error on a bounded C² tube"
kind: theorem
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-countable-choice
  - def-first-order-ode-initial-value-problem-and-solution
  - def-real-exponential-function-and-e
  - cor-vector-valued-ftc-and-lipschitz-bound
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - thm-chain-rule-for-total-derivatives
  - thm-mean-value-inequality-for-total-derivatives
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-continuous-flow-log-density-equation
  - thm-global-error-from-one-step-defect-and-stability
  - cor-global-log-density-error-from-state-and-quadrature
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited only for the pushforward-density interpretation; the ODE and numerical-error estimates are choice-free."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Mark Embree, Lecture Notes on Numerical Analysis"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Ricky T. Q. Chen, Yulia Rubanova, Jesse Bettencourt, and David Duvenaud, Neural Ordinary Differential Equations"
      url: "https://arxiv.org/pdf/1806.07366"
    - title: "George Papamakarios, Eric Nalisnick, Danilo Jimenez Rezende, Shakir Mohamed, and Balaji Lakshminarayanan, Normalizing Flows for Probabilistic Modeling and Inference"
      url: "https://jmlr.org/papers/volume22/19-1028/19-1028.pdf"
---

## Statement

Assume Countable Choice and the flow-density hypotheses of [[thm-continuous-flow-log-density-equation]]. Let $T>0$, $h=T/N$, $N\ge1$, and $t_n=nh$. Let $K\subset\mathbb R^d$ be compact and convex, and let $U\subset\mathbb R^{1+d}$ be a bounded convex open subset of the ODE domain containing $[0,T]\times K$. Suppose $f\in C^2(U,\mathbb R^d)$, all partial derivatives of $f$ through order two are bounded on $U$, and the exact path and every Euler node lie in $K$. Thus $[0,T]\times K$ is a compact tube with positive margin inside $U$. Put $q(t,x):=-\operatorname{div}_x f(t,x)$ and define
$$B_f:=\sup_U\|f\|_2,\quad L_f:=\sup_U\|D_xf\|,\quad M_f:=\sup_U\|\partial_tf\|_2,\quad L_q:=\sup_U\|D_xq\|,\quad M_q:=\sup_U|\partial_tq|,$$
where matrix and linear-functional norms are induced by Euclidean norms. These constants are finite by the hypotheses. Apply forward Euler to the state and to the continuous-flow log-density equation:
$$x_{n+1}=x_n+h f(t_n,x_n),\qquad \widehat\ell_{n+1}=\widehat\ell_n+hq(t_n,x_n).$$
If $\|x_0-x(0)\|_2\le C_{x,0}h$ and $|\widehat\ell_0-\log p_0(x(0))|\le C_{\ell,0}h$, define
$$C_x:=\frac{M_f+L_fB_f}{2},\qquad D_q:=\frac{M_q+L_qB_f}{2},$$
and
$$K_x:=\begin{cases}C_{x,0}\exp(L_fT)+C_x\dfrac{\exp(L_fT)-1}{L_f},&L_f>0,\\ C_{x,0}+C_xT,&L_f=0.\end{cases}$$
Then, for every $0\le n\le N$,
$$\|x_n-x(t_n)\|_2\le K_xh,$$
and
$$|\widehat\ell_n-\log p_{t_n}(x(t_n))|\le\bigl(C_{\ell,0}+TL_qK_x+D_qT\bigr)h.$$
This is a first-order Euler result; it asserts no adjoint-gradient error bound.

## Facts & Assumptions

**Given:** Countable Choice, a positive initial density and C¹ diffeomorphic flow, $f\in C^2$ with the stated bounded derivatives on a common convex tube, and the displayed Euler state and scalar updates.

[A1] The state and log-density initial errors are at most $C_{x,0}h$ and $C_{\ell,0}h$, respectively; exact, numerical, and local flow segments stay in the stated tube.

[A2] Countable Choice is used only to identify the continuous flow's pushforward density ([[def-countable-choice]]).

[F1] A solution of $x'=f(t,x)$ satisfies $x(t)=x(t_0)+\int_{t_0}^{t}f(s,x(s))\,ds$ ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

[F2] The derivative of a composite is the composite of the derivatives ([[thm-chain-rule-for-total-derivatives]]).

[F3] On a convex open set, a uniform derivative bound $\|Df(z)v\|_2\le M\|v\|_2$ implies a Lipschitz bound $\|f(y)-f(x)\|_2\le M\|y-x\|_2$ ([[thm-mean-value-inequality-for-total-derivatives]]).

[F4] A differentiable vector-valued curve with derivative norm bounded by $M$ is Lipschitz with constant $M$; for an integrable vector function, $\|\int g\|_2\le\int\|g\|_2$ ([[cor-vector-valued-ftc-and-lipschitz-bound]], [[thm-norm-inequality-for-the-vector-valued-integral]]).

[F5] A uniform one-step defect $Ch^{p+1}$ and stability factor $1+Lh$ give the stated fixed-time global error bound, including the $L=0$ case ([[thm-global-error-from-one-step-defect-and-stability]]).

[F6] If the divergence update has state sensitivity $hK_q$ and local quadrature defect $Dh^{m+1}$, then its global error is the sum of the initial, state, and quadrature contributions ([[cor-global-log-density-error-from-state-and-quadrature]]).

[F7] $\exp$ is the real exponential defined by its factorial power series, with $e:=\exp(1)$ ([[def-real-exponential-function-and-e]]).

## Proof

1.1 For fixed $t_n$, the open convex fiber $U_{t_n}$ contains $K$. Applying [F3] there gives $\|f(t_n,u)-f(t_n,v)\|_2\le L_f\|u-v\|_2$ for $u,v\in K$. Hence the Euler state map satisfies $\|u+h f(t_n,u)-v-h f(t_n,v)\|_2\le(1+L_fh)\|u-v\|_2$. [A1, F3, algebra]

1.2 Let $r(s):=f(t_n+s,x(t_n+s))$ for $0\le s\le h$. By [F2], $r'(s)=\partial_tf(t_n+s,x(t_n+s))+D_xf(t_n+s,x(t_n+s))f(t_n+s,x(t_n+s))$, whose norm is at most $M_f+L_fB_f$. By [F4], $\|r(s)-r(0)\|_2\le(M_f+L_fB_f)s$. Using [F1] and the integral norm bound in [F4], the exact-start Euler defect is $\left\|x(t_{n+1})-x(t_n)-hf(t_n,x(t_n))\right\|_2=\left\|\int_0^h(r(s)-r(0))\,ds\right\|_2\le C_xh^2$. [A1, F1, F2, F4, algebra]

1.3 Since $f\in C^2(U)$, $q=-\operatorname{div}_xf$ is $C^1$ on $U$. The open convex fiber $U_{t_n}$ contains $K$, so [F3] gives $|hq(t_n,u)-hq(t_n,v)|\le hL_q\|u-v\|_2$ for $u,v\in K$. Along the exact trajectory, [F2] gives $\frac{d}{ds}q(t_n+s,x(t_n+s))=\partial_tq+D_xq\,f$, with absolute value at most $M_q+L_qB_f$, hence $|q(t_n+s,x(t_n+s))-q(t_n,x(t_n))|\le(M_q+L_qB_f)s$ by [F4]. The left-Euler exact-start defect is $\left|\int_0^h\bigl(q(t_n+s,x(t_n+s))-q(t_n,x(t_n))\bigr)\,ds\right|$, which [F4] bounds by $(M_q+L_qB_f)h^2/2=D_qh^2$. [A1, F2, F3, F4, algebra]

2.1 The Euler state map from step 1.1 and defect from step 1.2 satisfy [[thm-global-error-from-one-step-defect-and-stability]] with order $p=1$, $C=C_x$, $L=L_f$, and initial constant $C_{x,0}$. Therefore $\max_n\|x_n-x(t_n)\|_2\le K_xh$, with the stated formula when $L_f>0$ and its separate zero branch when $L_f=0$. [A1, F5, F7, step 1.1, step 1.2]

3.1 Apply [F6] with state order $p=1$, quadrature order $m=1$, state constant $K_x$ from step 2.1, sensitivity $K_q=L_q$, defect constant $D=D_q$, and initial log-density error $C_{\ell,0}h$. This yields $|\widehat\ell_n-\log p_{t_n}(x(t_n))|\le(C_{\ell,0}+TL_qK_x+D_qT)h$ for every grid index. [A2, F6, step 2.1, step 1.3] ∎
