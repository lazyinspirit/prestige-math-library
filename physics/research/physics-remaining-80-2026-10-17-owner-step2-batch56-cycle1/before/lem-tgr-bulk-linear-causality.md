---
id: lem-tgr-bulk-linear-causality
kind: lemma
title: Bulk linear relaxation energy, stability and causal speed
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-countable-choice
  - def-schwartz-space-and-its-seminorms
  - lem-tgr-bulk-relaxation-entropy
  - lem-tgr-constant-linear-energy-causality
  - lem-tgr-local-gibbs-euler
dependency_roles:
  def-countable-choice: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  lem-tgr-bulk-relaxation-entropy: mathematical-premise
  lem-tgr-constant-linear-energy-causality: mathematical-premise
  lem-tgr-local-gibbs-euler: mathematical-premise
sources:
  references:
    - title: "Guillaume Bal, Waves in Random Media: Lecture Notes (May 2017)"
      url: "https://www.stat.uchicago.edu/~guillaumebal/COURSES/LecturesWavesRandomMedia.pdf"
      locator: "Full 102-page notes; §1.3.1, PDF pp. 7–8, and §1.3.4, PDF pp. 11–12: symmetrized Fourier evolution, energy estimates, and finite-speed cone estimates."
    - title: "Eitan Tadmor, Spectral Methods for Hyperbolic Problems (1998 lecture notes)"
      url: "https://www.math.umd.edu/~tadmor/lecture-notes/hyperbolic/node6.html"
      locator: "Initial Value Problems of Hyperbolic Type, 'Hyperbolic systems with constant coefficients': symmetrizers, Fourier-mode energy, and weighted estimates."
---

## Statement

Use $\mathcal M=\mathbb R^4$ with global length coordinates $(x^0,x^1,x^2,x^3)=(ct,\mathbf x)$, metric $\eta=\operatorname{diag}(-1,1,1,1)$, future direction $\partial_{x^0}$, and reference causal cone $\{V:V^0\geq0,\ \eta_{ab}V^aV^b\leq0\}$, whose boundary speed in $(t,\mathbf x)$ coordinates is $c$. Let $X\subset(0,\infty)\times\mathbb R$ be open, $e\in C^2(X;\mathbb R)$, and $(v_0,\sigma_{p0})\in X$. Define $n_0:=1/v_0$, $\epsilon_0:=n_0e(v_0,\sigma_{p0})$, $p_0:=-e_v(v_0,\sigma_{p0})$, $T_0:=e_{\sigma_p}(v_0,\sigma_{p0})$, and $h_0:=\epsilon_0+p_0$. The background fields are this constant state, $u_0=\partial_{x^0}=(1,0,0,0)$, and $\Pi_0=0$. Assume $n_0,T_0,h_0,e_{vv},c>0$, with $e_{vv}$ evaluated at fixed $\sigma_p$.

A first variation is defined by a family $(v_\lambda,\sigma_{p,\lambda},u_\lambda,\Pi_\lambda)$ jointly smooth in dimensionless $\lambda$ near $0$ and in $x$, through the displayed background, with $u_\lambda$ future unit, meaning $\eta(u_\lambda,u_\lambda)=-1$ and $u_\lambda^0>0$. For any such field $f_\lambda$, set $\delta f:=\left.\partial_\lambda f_\lambda\right|_{\lambda=0}$. At each $\lambda$, set $n_\lambda=1/v_\lambda$, $\epsilon_\lambda=n_\lambda e(v_\lambda,\sigma_{p,\lambda})$, $p_\lambda=-e_v(v_\lambda,\sigma_{p,\lambda})$, $T_\lambda=e_{\sigma_p}(v_\lambda,\sigma_{p,\lambda})$, $\Delta_\lambda^{ab}=\eta^{ab}+u_\lambda^au_\lambda^b$, $D_\lambda=u_\lambda^a\partial_a$, and $\theta_\lambda=\partial_a u_\lambda^a$. The bulk stress and current are $T_\lambda^{ab}=\epsilon_\lambda u_\lambda^au_\lambda^b+(p_\lambda+\Pi_\lambda)\Delta_\lambda^{ab}$ and $J_\lambda^a=n_\lambda u_\lambda^a$, and the corrected law of [[lem-tgr-bulk-relaxation-entropy]] is $\beta D_\lambda\Pi_\lambda+\Pi_\lambda/(\zeta c)=-\theta_\lambda-(T_\lambda\Pi_\lambda/2)\partial_a(\beta u_\lambda^a/T_\lambda)$, where $\beta=\tau/\zeta$. The linearized equations mean the first variations at $\lambda=0$ of $\partial_aT_\lambda^{ab}=0$, $\partial_aJ_\lambda^a=0$, and this corrected law, set equal to zero; no member with $\lambda\ne0$ is required to solve the nonlinear system. Impose $\delta\sigma_p=0$, put $r:=\delta\epsilon$, $w:=(\delta u^1,\delta u^2,\delta u^3)$, and denote $\delta\Pi$ by $\Pi$ in the linearized system below. Take constant coefficients $\zeta,\tau>0$.

$$a_s:=\left(\frac{\partial p}{\partial\epsilon}\right)_{\sigma_p}=\frac{e_{vv}}{n_0h_0}>0$$

as supplied by [[lem-tgr-local-gibbs-euler]]. The resulting linearized system is

$$r_t+c h_0\operatorname{div}w=0,\qquad w_t+\frac{c}{h_0}\nabla(a_s r+\Pi)=0,\qquad \tau\Pi_t+\Pi=-\zeta c\operatorname{div}w.$$

Its positive quadratic energy density

$$\mathcal E_{\rm bulk}=\frac12\left[\frac{a_s}{h_0}r^2+h_0|w|^2+\frac{\tau}{\zeta}\Pi^2\right]$$

satisfies $\partial_t\mathcal E_{\rm bulk}+\operatorname{div}[c(a_s r+\Pi)w]=-\Pi^2/\zeta$. The normal characteristic speeds are $0$ and $\pm v_{\rm bulk}$, where

$$v_{\rm bulk}=c\sqrt{a_s+\frac{\zeta}{\tau h_0}}.$$

By [[lem-tgr-constant-linear-energy-causality]], initial data $U_0\in\mathcal S(\mathbb R^3;\mathbb R^5)$ with the componentwise real convention of [[def-schwartz-space-and-its-seminorms]], or smooth periodic data on $\mathbb T_L^3$ with $L>0$, have unique global smooth solutions, contractive in the corresponding energy and Sobolev norms, with finite propagation at $v_{\rm bulk}$. The branch is inside the Minkowski reference cone exactly when $a_s+\zeta/(\tau h_0)\le1$. Constant density and transverse velocity modes can persist, so contraction does not mean every mode decays. No nonlinear or variable-coefficient existence theorem is claimed.

## Facts & Assumptions

**Given:** The reference geometry, state, first-variation convention, and positive coefficients of the Statement. In SI bookkeeping, $r,h_0,\Pi,\zeta/\tau$ have units Pa, $w,a_s$ are dimensionless, $\zeta$ has units $\mathrm{Pa\,s}$, $\tau$ has units s, and $c$ has units $\mathrm{m\,s^{-1}}$.

[A1] $n_0>0$, $T_0>0$, $e_{vv}>0$, $h_0>0$, $a_s>0$, $\zeta>0$, $\tau>0$, and $c>0$. The strict inequalities make the displayed energy positive definite and every displayed denominator nonzero.

[A2] Countable choice $\mathrm{AC}_\omega$ is carried by the current mathematical supplier chain; no stronger choice principle is used ([[def-countable-choice]]).

[F1] [[lem-tgr-bulk-relaxation-entropy]] (current batch-56 draft): the corrected bulk model supplies the exact covariant stress and particle projections $D\epsilon+(h+\Pi)\theta=0$, $(h+\Pi)a^b_{\rm acc}+\Delta^{ba}\nabla_a(p+\Pi)=0$, and $Dn+n\theta=0$, as well as the stated derivative-corrected entropy law. Its lower-level MC02 inputs remain draft and escalated.

[F2] [[lem-tgr-local-gibbs-euler]] (current batch-53 draft): for the open $C^2$ state domain it gives $d\epsilon=T\,ds+\mu\,dn$ and $h=Ts+\mu n$; at fixed $\sigma_p$, $\partial_n\epsilon=h/n$ and $\partial_n p=e_{vv}/n^2$, so $a_s=e_{vv}/(n_0h_0)>0$ when $n_0,e_{vv},h_0>0$. Its current Step 1 record says ready but has a stale hash against the carrier.

[F3] [[lem-tgr-constant-linear-energy-causality]]: a constant real matrix system with a positive symmetrizer, symmetric symmetrized principal matrices, and nonnegative symmetrized damping has a unique global smooth solution, contraction, and propagation at its largest absolute symmetrized characteristic eigenvalue.

[F4] [[def-schwartz-space-and-its-seminorms]]: scalar Schwartz functions are smooth complex-valued functions with every seminorm $\sup_x|x^\alpha\partial^\beta f(x)|$ finite; the data class in the Statement is the componentwise real-valued subspace.

## Proof

1.1 At $\lambda=0$, $u_0=\partial_{x^0}$ and $\partial_0=c^{-1}\partial_t$. Differentiating the unit normalization gives $\delta u^0=0$, so the first variations of $D\epsilon$, $\theta$, and the spatial acceleration are respectively $c^{-1}r_t$, $\operatorname{div}w$, and $c^{-1}\partial_t w$. Because $\Pi_0=0$ and the background $u,T,\beta$ are constant, the product $\Pi\nabla_a(\beta u^a/T)$ has zero first variation. By [F2], $\delta p=a_s r$. Linearizing the energy projection in [F1] gives $r_t+c h_0\operatorname{div}w=0$, and its spatial projection gives $w_t+(c/h_0)\nabla(a_s r+\Pi)=0$. The linearized corrected law is $(\tau/(\zeta c))\partial_t\Pi+\Pi/(\zeta c)=-\operatorname{div}w$; multiplication by $\zeta c$ gives the third equation. For consistency, at fixed $\sigma_p$ [F2] gives $\partial_n\epsilon=T\sigma_p+\mu=h/n$, hence $\delta n=(n_0/h_0)r$; the first equation then implies $(\delta n)_t+c n_0\operatorname{div}w=0$, the linearized particle balance. [A1, A2, F1, F2, given, algebra]

2.1 Differentiate $\mathcal E_{\rm bulk}$ and substitute the system: the $r\operatorname{div}w$ terms cancel, the $\Pi\operatorname{div}w$ terms cancel, and the remaining relaxation term is $-\Pi^2/\zeta$. Thus $\partial_t\mathcal E_{\rm bulk}+\operatorname{div}[c(a_s r+\Pi)w]=-\Pi^2/\zeta\le0$. [A1, step 1.1, algebra]

2.2 Let $U=(r,w,\Pi)$ and $M=\operatorname{diag}(a_s/h_0,h_0I_3,\tau/\zeta)$. For each spatial index $j$, the nonzero entries of the principal matrix are $(A_j)_{r,w_j}=ch_0$, $(A_j)_{w_j,r}=ca_s/h_0$, $(A_j)_{w_j,\Pi}=c/h_0$, and $(A_j)_{\Pi,w_j}=\zeta c/\tau$; hence $MA_j$ is symmetric. The damping matrix is $B=\operatorname{diag}(0,0_{3\times3},1/\tau)$, with $MB=\operatorname{diag}(0,0_{3\times3},1/\zeta)\ge0$. The longitudinal block of $A(\nu)$ is $\begin{pmatrix}0&ch_0&0\\ ca_s/h_0&0&c/h_0\\0&\zeta c/\tau&0\end{pmatrix}$, whose characteristic polynomial is $-\lambda[\lambda^2-c^2(a_s+\zeta/(\tau h_0))]$; transverse velocities have zero speed. Apply [F3] to obtain the actual global solution, uniqueness, energy contraction, and finite propagation at $v_{\rm bulk}$. [A1, A2, F3, step 1.1, algebra]

3.1 Weighted Cauchy–Schwarz gives $(a_s r+\Pi)^2\le(h_0a_s+\zeta/\tau)[(a_s/h_0)r^2+(\tau/\zeta)\Pi^2]$. Therefore for every unit $\nu$, $|c(a_s r+\Pi)w\cdot\nu|\le c\sqrt{a_s+\zeta/(\tau h_0)}\,\mathcal E_{\rm bulk}$ by $2XY\le X^2+Y^2$. Since $c>0$, $v_{\rm bulk}\le c$ is equivalent to $a_s+\zeta/(\tau h_0)\le1$. With $r$ spatially constant, $w=0$, and $\Pi=0$, the first mode is stationary; constant transverse $w$ with $r=\Pi=0$ is stationary as well. [A1, step 2.1, step 2.2, algebra] ∎
