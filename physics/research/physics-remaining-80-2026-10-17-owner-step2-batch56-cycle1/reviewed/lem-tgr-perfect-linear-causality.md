---
id: lem-tgr-perfect-linear-causality
kind: lemma
title: Perfect sound characteristic and actual stable causal linear branch
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-countable-choice
  - def-schwartz-space-and-its-seminorms
  - lem-tgr-constant-linear-energy-causality
  - lem-tgr-local-gibbs-euler
  - lem-tgr-perfect-fluid-projection
dependency_roles:
  def-countable-choice: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  lem-tgr-constant-linear-energy-causality: mathematical-premise
  lem-tgr-local-gibbs-euler: mathematical-premise
  lem-tgr-perfect-fluid-projection: mathematical-premise
sources:
  references:
    - title: "Guillaume Bal, Waves in Random Media: Lecture Notes (May 2017)"
      url: "https://www.stat.uchicago.edu/~guillaumebal/COURSES/LecturesWavesRandomMedia.pdf"
      locator: "Full 102-page notes; §1.3.1, PDF pp. 7–8, and §1.3.4, PDF pp. 11–12: constant-coefficient acoustic/symmetric systems and finite propagation."
    - title: "Eitan Tadmor, Spectral Methods for Hyperbolic Problems (1998 lecture notes)"
      url: "https://www.math.umd.edu/~tadmor/lecture-notes/hyperbolic/node6.html"
      locator: "Initial Value Problems of Hyperbolic Type, 'Hyperbolic systems with constant coefficients': Fourier modes, symmetrizers, and weighted energy bounds."
---

## Statement

Fix $c>0$ and take $M=\mathbb R^4$ with global length coordinates $(x^0,x^1,x^2,x^3)=(ct,\mathbf x)$, metric $\eta=\operatorname{diag}(-1,1,1,1)$, and future causal cone $\{V\in\mathbb R^4:V^0\geq0,\ \eta_{ab}V^aV^b\leq0\}$. For $V^0>0$, membership in this cone is exactly the coordinate-speed condition $|d\mathbf x/dt|\leq c$; its boundary speed is the reference speed $c$. The constant rest observer is $\bar u=(1,0,0,0)$.

Let $X\subset(0,\infty)\times\mathbb R$ be open, let $e\in C^2(X;\mathbb R)$, and fix $(v_0,\sigma_{p0})\in X$. Define $n_0:=1/v_0$, $\epsilon_0:=n_0e(v_0,\sigma_{p0})$, $p_0:=-e_v(v_0,\sigma_{p0})$, $T_0:=e_{\sigma_p}(v_0,\sigma_{p0})$, and $h_0:=\epsilon_0+p_0$. Assume $n_0,T_0,h_0,e_{vv}>0$, with $e_{vv}$ evaluated at fixed $\sigma_p$. A first variation is defined by a family of state maps $(v_\lambda,\sigma_{p,\lambda}):M\to X$ and fields $u_\lambda:M\to\mathbb R^4$, jointly smooth in dimensionless $\lambda$ near $0$ and in $x$, with the displayed reference state and $\bar u$ as their constant $\lambda=0$ values and with $\eta(u_\lambda,u_\lambda)=-1$, $u_\lambda^0>0$. For any such field $f_\lambda$, write $\delta f:=\left.\partial_\lambda f_\lambda\right|_{\lambda=0}$; put $r:=\delta\epsilon$, $w:=(\delta u^1,\delta u^2,\delta u^3)$, and impose the adiabatic first-variation condition $\delta\sigma_p=0$. The linearized equations mean the first variations at $\lambda=0$ of the no-force balances $\partial_aT_\lambda^{ab}=0$ and $\partial_aJ_\lambda^a=0$, with $n_\lambda=1/v_\lambda$, $\epsilon_\lambda=n_\lambda e(v_\lambda,\sigma_{p,\lambda})$, $p_\lambda=-e_v(v_\lambda,\sigma_{p,\lambda})$, $\Delta_\lambda^{ab}=\eta^{ab}+u_\lambda^au_\lambda^b$, $T_\lambda^{ab}=\epsilon_\lambda u_\lambda^au_\lambda^b+p_\lambda\Delta_\lambda^{ab}$, and $J_\lambda^a=n_\lambda u_\lambda^a$; no member with $\lambda\ne0$ is required to solve the nonlinear balances. Differentiating $\eta(u_\lambda,u_\lambda)=-1$ gives $\delta u^0=0$.

The local Gibbs identity of [[lem-tgr-local-gibbs-euler]] gives

$$a_s:=\left(\frac{\partial p}{\partial\epsilon}\right)_{\sigma_p}=\frac{e_{vv}(v_0,\sigma_{p0})}{n_0h_0},$$

and assume additionally $a_s\le1$. In the adopted units, $c$ has units $\mathrm{m\,s^{-1}}$, $r$ and $h_0$ have units Pa, and $w$ and $a_s$ are dimensionless. Since $x^0=ct$ and $\bar u=\partial_{x^0}$, the first variations of the no-force perfect-fluid projection equations of [[lem-tgr-perfect-fluid-projection]] are

$$r_t+c h_0\operatorname{div}w=0,\qquad w_t+\frac{c a_s}{h_0}\nabla r=0.$$

For initial data $U_0=(r_0,w_0)$ whose real components belong componentwise to $\mathcal S(\mathbb R^3)$ as defined by [[def-schwartz-space-and-its-seminorms]], or for smooth periodic data on $\mathbb T_L^3$ with $L>0$, these equations have the unique global smooth solution supplied by [[lem-tgr-constant-linear-energy-causality]]. The positive quadratic energy density $\mathcal E=\tfrac12[(a_s/h_0)r^2+h_0|w|^2]$ has flux $c a_s r w$, and the solution is contractive in the corresponding weighted $L^2$ and Sobolev norms. Its characteristic speeds are $0$ and $\pm c\sqrt{a_s}$; for positive $a_s$, this propagation cone lies inside the Minkowski reference cone exactly when $a_s\le1$. These are statements about this frozen linear system only; they do not assert a nonlinear or curved-spacetime evolution theorem.

For the formal coefficient comparison in [A3], if the same linear equations are assigned $a_s>1$, their plane-wave speed is $c\sqrt{a_s}>c$. If they are assigned $a_s<0$, smooth periodic modes grow as $e^{c\sqrt{-a_s}|k|t}$ at arbitrarily large wave numbers. The case $a_s=0$ is degenerate: the displayed positive energy matrix is no longer positive definite, so the stability proof above does not apply.

## Facts & Assumptions

**Given:** The reference state, first-variation convention, Minkowski geometry, and coefficient hypotheses in the Statement.

[A1] The reference speed condition $a_s\le1$ is an additional hypothesis for the causal branch, not a consequence of $e_{vv}>0$ or $h_0>0$.

[A2] Countable choice $\mathrm{AC}_\omega$ is carried by the geometric and Fourier suppliers; no stronger choice principle is assumed ([[def-countable-choice]]).

[A3] For the coefficient comparisons in the final paragraph only, consider the same two displayed linear equations with $h_0,c>0$ and $a_s\in\mathbb R$. These are coefficient-only comparisons, not claims that the parameters are realized by a material: $a_s>1$ drops the causal-branch hypothesis $a_s\le1$, and $a_s<0$ also drops the positive-response hypothesis $e_{vv}>0$.

[F1] [[lem-tgr-perfect-fluid-projection]] (current batch-55 draft): for the smooth $(-,+,+,+)$ Lorentzian data and fixed-composition state, $\nabla_aT^{ab}=0$ and $\nabla_a(nu^a)=0$ imply $D\epsilon+h\theta=0$, $ha^b_{\rm acc}+\Delta^{ba}\nabla_a p=0$, and $Dn+n\theta=0$. Its proof is conditional on the current draft state and Gibbs carriers; no independent proof acceptance is inferred.

[F2] [[lem-tgr-local-gibbs-euler]] (current batch-53 draft): for an open state domain and $e\in C^2(X)$, it gives $d\epsilon=T\,ds+\mu\,dn$ and $h=Ts+\mu n$. At fixed $\sigma_p$, $\partial_n\epsilon=h/n$ and $\partial_n p=e_{vv}/n^2$; when $e_{vv}>0$ and $h>0$, $a_s=e_{vv}/(nh)>0$. This use is conditional on those hypotheses and the current draft Gibbs carrier; authoring readiness does not establish proof acceptance.

[F3] [[lem-tgr-constant-linear-energy-causality]]: for constant matrices with positive symmetrizer $M$, symmetric $MA_j$, and nonnegative symmetrized damping, the system has a unique global smooth solution for componentwise real Schwartz or smooth periodic data, with contraction and finite propagation at the largest absolute eigenvalue of $M^{1/2}A(\nu)M^{-1/2}$ over unit directions.

[F4] [[def-schwartz-space-and-its-seminorms]]: scalar Schwartz functions are smooth complex-valued functions with every seminorm $\sup_x|x^\alpha\partial^\beta f(x)|$ finite; the Statement uses the componentwise real-valued subspace for vector data.

## Proof

1.1 The family is normalized by $\eta(u_\lambda,u_\lambda)=-1$ and is future-directed, so at $\lambda=0$ it has $u_0=\bar u$ and differentiating normalization gives $\delta u^0=0$. Since $\partial_0=c^{-1}\partial_t$, the first variation of $D\epsilon$ is $c^{-1}r_t$, that of $\theta$ is $\operatorname{div}w$, and that of the spatial acceleration is $c^{-1}\partial_t w$. By [F2], $\delta p=a_s r$ and $\delta n=(n_0/h_0)r$. Taking first variations of the energy and spatial equations in [F1] therefore gives $r_t+c h_0\operatorname{div}w=0$ and $w_t+(c a_s/h_0)\nabla r=0$; the particle equation follows from $\delta n=(n_0/h_0)r$ and the first equation. [A2, F1, F2, given, algebra]

2.1 Put $U=(r,w)$ and $M=\operatorname{diag}(a_s/h_0,h_0I_3)$. The matrix $M$ is positive definite because $a_s,h_0>0$. For each $j$, define $A_j$ by $(A_j)_{r,w_j}=ch_0$, $(A_j)_{w_j,r}=ca_s/h_0$, with all other entries zero. Then $MA_j$ is symmetric. In a unit direction $\nu$, the longitudinal block of $A(\nu)$ on $(r,w\cdot\nu)$ has eigenvalues $\pm c\sqrt{a_s}$ and the two transverse components have eigenvalue $0$. Thus [F3] constructs the actual global smooth solution and yields its uniqueness, contraction, and propagation speed $c\sqrt{a_s}$. [A2, F3, step 1.1, algebra, F4]

3.1 Direct multiplication of the equations by $(a_s/h_0)r$ and $h_0w$ gives $\partial_t\mathcal E+\operatorname{div}(c a_s r w)=0$. For a unit normal $\nu$, $|c a_s r\,w\cdot\nu|\le c\sqrt{a_s}\,\mathcal E$ by $2XY\le X^2+Y^2$ with $X=\sqrt{a_s/h_0}|r|$ and $Y=\sqrt{h_0}|w|$. Since $0<a_s\le1$, this flux cone lies inside the reference cone of speed $c$. [A1, step 2.1, algebra]

4.1 Under the formal coefficient convention [A3], for $k\ne0$ and $a_s>0$, $r=A\cos(k\cdot x-\omega t)$, $w=(\omega A/(c h_0|k|^2))k\cos(k\cdot x-\omega t)$ solves both equations when $\omega^2=c^2a_s|k|^2$; substitution gives both equalities. Hence $a_s>1$ has exact modes with speed greater than $c$. If $a_s<0$, put $\lambda=c\sqrt{-a_s}|k|$ and take $r=Ae^{\lambda t}\cos(k\cdot x)$, $w=-(\lambda A/(c h_0|k|^2))k e^{\lambda t}\sin(k\cdot x)$; differentiating verifies both equations and gives unbounded growth rates as $|k|\to\infty$. At $a_s=0$ the weight $a_s/h_0$ vanishes, so the positive-definite argument in step 2.1 is inapplicable. [A3, algebra] ∎
