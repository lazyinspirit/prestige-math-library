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
  - lem-tgr-constant-linear-energy-causality
  - lem-tgr-local-gibbs-euler
  - lem-tgr-perfect-fluid-projection
dependency_roles:
  def-countable-choice: mathematical-premise
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

Let $c>0$ be a fixed speed parameter, use Minkowski coordinates $x^0=ct$ with signature $(-,+,+,+)$, and consider a smooth perfect-fluid state at a uniform rest point. The local state has energy per marker $e\in C^2(X)$ on an open domain $X\subset(0,\infty)\times\mathbb R$, with specific volume $v=1/n$ and specific entropy $\sigma_p$; $e_{vv}$ denotes the second derivative at fixed $\sigma_p$. At the rest point assume $n_0>0$, $T_0>0$, $h_0=\epsilon_0+p_0>0$, and $e_{vv}>0$. Let

$$a_s:=\left(\frac{\partial p}{\partial\epsilon}\right)_{\sigma_p}=\frac{e_{vv}}{n_0h_0},$$

as in [[lem-tgr-local-gibbs-euler]], and assume additionally $a_s\le1$. For adiabatic perturbations $\delta\sigma_p=0$, write $r=\delta\epsilon$ and $w=\delta u_{\rm spatial}\in\mathbb R^3$. The linearized equations obtained from the no-force perfect stress and particle balances of [[lem-tgr-perfect-fluid-projection]] are

$$r_t+c h_0\operatorname{div}w=0,\qquad w_t+\frac{c a_s}{h_0}\nabla r=0.$$

For Schwartz data on $\mathbb R^3$ or smooth periodic data on $\mathbb T_L^3$, these equations have the unique global smooth solution supplied by [[lem-tgr-constant-linear-energy-causality]]. The positive quadratic energy density $\mathcal E=\tfrac12[(a_s/h_0)r^2+h_0|w|^2]$ has flux $c a_s r w$, and the solution is contractive in the corresponding weighted $L^2$ and Sobolev norms. Its characteristic speeds are $0$ and $\pm c\sqrt{a_s}$; for positive $a_s$, this cone lies inside the reference cone of speed $c$ exactly when $a_s\le1$. These are statements about this frozen linear system only; they do not assert a nonlinear or curved-spacetime evolution theorem.

For the formal coefficient comparison in [A3], if the same linear equations are assigned $a_s>1$, their plane-wave speed is $c\sqrt{a_s}>c$. If they are assigned $a_s<0$, smooth periodic modes grow as $e^{c\sqrt{-a_s}|k|t}$ at arbitrarily large wave numbers. The case $a_s=0$ is degenerate: the displayed positive energy matrix is no longer positive definite, so the stability proof above does not apply.

## Facts & Assumptions

**Given:** A smooth local state on an open domain with $e\in C^2$, a uniform Minkowski rest state, $n_0,T_0,h_0,e_{vv}>0$, $c>0$, and first-order perturbations with $\delta\sigma_p=0$. The mathematical normalization is $x^0=ct$, $g=\operatorname{diag}(-1,1,1,1)$, $r$ and $h_0$ have units Pa, $w$ and $a_s$ are dimensionless, and $c$ has units $\mathrm{m\,s^{-1}}$.

[A1] The reference speed condition $a_s\le1$ is an additional hypothesis for the causal branch, not a consequence of $e_{vv}>0$ or $h_0>0$.

[A2] Countable choice $\mathrm{AC}_\omega$ is carried by the geometric and Fourier suppliers; no stronger choice principle is assumed ([[def-countable-choice]]).

[A3] For the coefficient comparisons in the final paragraph only, consider the same two displayed linear equations with $h_0,c>0$ and $a_s\in\mathbb R$. These are coefficient-only comparisons, not claims that the parameters are realized by a material: $a_s>1$ drops the causal-branch hypothesis $a_s\le1$, and $a_s<0$ also drops the positive-response hypothesis $e_{vv}>0$.

[F1] [[lem-tgr-perfect-fluid-projection]] (current batch-55 draft): for the smooth $(-,+,+,+)$ Lorentzian data and fixed-composition state, $\nabla_aT^{ab}=0$ and $\nabla_a(nu^a)=0$ imply $D\epsilon+h\theta=0$, $ha^b_{\rm acc}+\Delta^{ba}\nabla_a p=0$, and $Dn+n\theta=0$. Its proof is conditional on the current state and Gibbs carriers; its Step 1 readiness is escalated because those upstream hashes are stale.

[F2] [[lem-tgr-local-gibbs-euler]] (current batch-53 draft): for an open state domain and $e\in C^2(X)$, it gives $d\epsilon=T\,ds+\mu\,dn$ and $h=Ts+\mu n$. At fixed $\sigma_p$, $\partial_n\epsilon=h/n$ and $\partial_n p=e_{vv}/n^2$; when $e_{vv}>0$ and $h>0$, $a_s=e_{vv}/(nh)>0$. This use is conditional on those hypotheses; its current Step 1 record says ready but its stored hash is stale against the carrier.

[F3] [[lem-tgr-constant-linear-energy-causality]]: for constant matrices with positive symmetrizer $M$ and $MA_j$ symmetric, the constructed global linear solution is unique, contractive, and has finite propagation at the largest absolute eigenvalue of $M^{1/2}A(\nu)M^{-1/2}$ over unit directions.

## Proof

1.1 At the rest state $u^0=1$ and normalization gives $\delta u^0=0$. Since $x^0=ct$, the first variations are $D=c^{-1}\partial_t$, $\theta=\operatorname{div}w$, and $a^i_{\rm acc}=c^{-1}\partial_t w^i$. By [F2], $\delta p=a_s r$ and $\delta n=(n_0/h_0)r$. Linearizing the energy and spatial equations in [F1] therefore gives $r_t+c h_0\operatorname{div}w=0$ and $w_t+(c a_s/h_0)\nabla r=0$; the particle equation follows from $\delta n=(n_0/h_0)r$ and the first equation. [A2, F1, F2, given, algebra]

2.1 Put $U=(r,w)$ and $M=\operatorname{diag}(a_s/h_0,h_0I_3)$. The matrix $M$ is positive definite because $a_s,h_0>0$. For each $j$, define $A_j$ by $(A_j)_{r,w_j}=ch_0$, $(A_j)_{w_j,r}=ca_s/h_0$, with all other entries zero. Then $MA_j$ is symmetric. In a unit direction $\nu$, the longitudinal block of $A(\nu)$ on $(r,w\cdot\nu)$ has eigenvalues $\pm c\sqrt{a_s}$ and the two transverse components have eigenvalue $0$. Thus [F3] constructs the actual global smooth solution and yields its uniqueness, contraction, and propagation speed $c\sqrt{a_s}$. [A2, F3, step 1.1, algebra]

3.1 Direct multiplication of the equations by $(a_s/h_0)r$ and $h_0w$ gives $\partial_t\mathcal E+\operatorname{div}(c a_s r w)=0$. For a unit normal $\nu$, $|c a_s r\,w\cdot\nu|\le c\sqrt{a_s}\,\mathcal E$ by $2XY\le X^2+Y^2$ with $X=\sqrt{a_s/h_0}|r|$ and $Y=\sqrt{h_0}|w|$. Since $0<a_s\le1$, this flux cone lies inside the reference cone of speed $c$. [A1, step 2.1, algebra]

4.1 Under the formal coefficient convention [A3], for $k\ne0$ and $a_s>0$, $r=A\cos(k\cdot x-\omega t)$, $w=(\omega A/(c h_0|k|^2))k\cos(k\cdot x-\omega t)$ solves both equations when $\omega^2=c^2a_s|k|^2$; substitution gives both equalities. Hence $a_s>1$ has exact modes with speed greater than $c$. If $a_s<0$, put $\lambda=c\sqrt{-a_s}|k|$ and take $r=Ae^{\lambda t}\cos(k\cdot x)$, $w=-(\lambda A/(c h_0|k|^2))k e^{\lambda t}\sin(k\cdot x)$; differentiating verifies both equations and gives unbounded growth rates as $|k|\to\infty$. At $a_s=0$ the weight $a_s/h_0$ vanishes, so the positive-definite argument in step 2.1 is inapplicable. [A3, algebra] ∎
