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
  - lem-tgr-bulk-relaxation-entropy
  - lem-tgr-constant-linear-energy-causality
  - lem-tgr-local-gibbs-euler
dependency_roles:
  def-countable-choice: mathematical-premise
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

Use the uniform Minkowski rest equilibrium of the bulk-only model of [[lem-tgr-bulk-relaxation-entropy]], with constant background state $(n_0,\epsilon_0,p_0,T_0,\sigma_{p0})$, velocity $u_0=(1,0,0,0)$, and bulk pressure $\Pi_0=0$. Set $h_0:=\epsilon_0+p_0$ and assume $n_0,T_0,h_0,e_{vv},c>0$. The local state has specific energy $e\in C^2(X)$ on an open domain, with specific volume $v=1/n$ and specific entropy $\sigma_p$; $e_{vv}$ is evaluated at fixed $\sigma_p$. Take constant coefficients $\zeta,\tau>0$ and adiabatic perturbations $\delta\sigma_p=0$. Let

$$a_s:=\left(\frac{\partial p}{\partial\epsilon}\right)_{\sigma_p}=\frac{e_{vv}}{n_0h_0}>0$$

as supplied by [[lem-tgr-local-gibbs-euler]]. Write $r=\delta\epsilon$, $w=\delta u_{\rm spatial}$, and denote the first-order perturbation $\delta\Pi$ by $\Pi$ in the linearized equations. The system is

$$r_t+c h_0\operatorname{div}w=0,\qquad w_t+\frac{c}{h_0}\nabla(a_s r+\Pi)=0,\qquad \tau\Pi_t+\Pi=-\zeta c\operatorname{div}w.$$

Its positive quadratic energy density

$$\mathcal E_{\rm bulk}=\frac12\left[\frac{a_s}{h_0}r^2+h_0|w|^2+\frac{\tau}{\zeta}\Pi^2\right]$$

satisfies $\partial_t\mathcal E_{\rm bulk}+\operatorname{div}[c(a_s r+\Pi)w]=-\Pi^2/\zeta$. The normal characteristic speeds are $0$ and $\pm v_{\rm bulk}$, where

$$v_{\rm bulk}=c\sqrt{a_s+\frac{\zeta}{\tau h_0}}.$$

By [[lem-tgr-constant-linear-energy-causality]], Schwartz data on $\mathbb R^3$ and smooth periodic data on $\mathbb T_L^3$ have unique global smooth solutions, contractive in the corresponding energy and Sobolev norms, with finite propagation at $v_{\rm bulk}$. The branch is inside the reference speed $c$ exactly when $a_s+\zeta/(\tau h_0)\le1$. Constant density and transverse velocity modes can persist, so contraction does not mean every mode decays. No nonlinear or variable-coefficient existence theorem is claimed.

## Facts & Assumptions

**Given:** The corrected bulk model and law of [[lem-tgr-bulk-relaxation-entropy]] on Minkowski spacetime, linearized at a uniform rest equilibrium with $u_0=(1,0,0,0)$ and $\Pi_0=0$; $n_0,T_0,h_0,e_{vv},c,\zeta,\tau$ are strictly positive constants, and $\delta\sigma_p=0$. In SI bookkeeping, $r,h_0,\Pi,\zeta/\tau$ have units Pa, $w,a_s$ are dimensionless, $\zeta$ has units $\mathrm{Pa\,s}$, and $\tau$ has units s.

[A1] $n_0>0$, $T_0>0$, $e_{vv}>0$, $h_0>0$, $a_s>0$, $\zeta>0$, $\tau>0$, and $c>0$. The strict inequalities make the displayed energy positive definite and every displayed denominator nonzero.

[A2] Countable choice $\mathrm{AC}_\omega$ is carried by the current mathematical supplier chain; no stronger choice principle is used ([[def-countable-choice]]).

[F1] [[lem-tgr-bulk-relaxation-entropy]] (current batch-56 draft): the corrected bulk model supplies the exact covariant stress and particle projections $D\epsilon+(h+\Pi)\theta=0$, $(h+\Pi)a^b_{\rm acc}+\Delta^{ba}\nabla_a(p+\Pi)=0$, and $Dn+n\theta=0$, as well as the stated derivative-corrected entropy law. Its lower-level MC02 inputs remain draft and escalated.

[F2] [[lem-tgr-local-gibbs-euler]] (current batch-53 draft): for the open $C^2$ state domain it gives $d\epsilon=T\,ds+\mu\,dn$ and $h=Ts+\mu n$; at fixed $\sigma_p$, $\partial_n\epsilon=h/n$ and $\partial_n p=e_{vv}/n^2$, so $a_s=e_{vv}/(n_0h_0)>0$ when $n_0,e_{vv},h_0>0$. Its current Step 1 record says ready but has a stale hash against the carrier.

[F3] [[lem-tgr-constant-linear-energy-causality]]: a constant real matrix system with a positive symmetrizer, symmetric symmetrized principal matrices, and nonnegative symmetrized damping has a unique global smooth solution, contraction, and propagation at its largest absolute symmetrized characteristic eigenvalue.

## Proof

1.1 At the uniform rest equilibrium, $D=c^{-1}\partial_t$, $\theta=\operatorname{div}w$, and $a^i_{\rm acc}=c^{-1}\partial_tw^i$. Because $\Pi_0=0$ and the background $u,T,\beta$ are constant, the product $\Pi\nabla_a(\beta u^a/T)$ has zero first variation. By [F2], $\delta p=a_s r$. Linearizing the energy projection in [F1] gives $r_t+c h_0\operatorname{div}w=0$, and its spatial projection gives $w_t+(c/h_0)\nabla(a_s r+\Pi)=0$. The linearized corrected law is $(\tau/(\zeta c))\partial_t\Pi+\Pi/(\zeta c)=-\operatorname{div}w$; multiplication by $\zeta c$ gives the third equation. For consistency, at fixed $\sigma_p$ [F2] gives $\partial_n\epsilon=T\sigma_p+\mu=h/n$, hence $\delta n=(n_0/h_0)r$; the first equation then implies $(\delta n)_t+c n_0\operatorname{div}w=0$, the linearized particle balance. [A1, A2, F1, F2, given, algebra]

2.1 Differentiate $\mathcal E_{\rm bulk}$ and substitute the system: the $r\operatorname{div}w$ terms cancel, the $\Pi\operatorname{div}w$ terms cancel, and the remaining relaxation term is $-\Pi^2/\zeta$. Thus $\partial_t\mathcal E_{\rm bulk}+\operatorname{div}[c(a_s r+\Pi)w]=-\Pi^2/\zeta\le0$. [A1, step 1.1, algebra]

2.2 Let $U=(r,w,\Pi)$ and $M=\operatorname{diag}(a_s/h_0,h_0I_3,\tau/\zeta)$. For each spatial index $j$, the nonzero entries of the principal matrix are $(A_j)_{r,w_j}=ch_0$, $(A_j)_{w_j,r}=ca_s/h_0$, $(A_j)_{w_j,\Pi}=c/h_0$, and $(A_j)_{\Pi,w_j}=\zeta c/\tau$; hence $MA_j$ is symmetric. The damping matrix is $B=\operatorname{diag}(0,0_{3\times3},1/\tau)$, with $MB=\operatorname{diag}(0,0_{3\times3},1/\zeta)\ge0$. The longitudinal block of $A(\nu)$ is $\begin{pmatrix}0&ch_0&0\\ ca_s/h_0&0&c/h_0\\0&\zeta c/\tau&0\end{pmatrix}$, whose characteristic polynomial is $-\lambda[\lambda^2-c^2(a_s+\zeta/(\tau h_0))]$; transverse velocities have zero speed. Apply [F3] to obtain the actual global solution, uniqueness, energy contraction, and finite propagation at $v_{\rm bulk}$. [A1, A2, F3, step 1.1, algebra]

3.1 Weighted Cauchy–Schwarz gives $(a_s r+\Pi)^2\le(h_0a_s+\zeta/\tau)[(a_s/h_0)r^2+(\tau/\zeta)\Pi^2]$. Therefore for every unit $\nu$, $|c(a_s r+\Pi)w\cdot\nu|\le c\sqrt{a_s+\zeta/(\tau h_0)}\,\mathcal E_{\rm bulk}$ by $2XY\le X^2+Y^2$. Since $c>0$, $v_{\rm bulk}\le c$ is equivalent to $a_s+\zeta/(\tau h_0)\le1$. With $r$ spatially constant, $w=0$, and $\Pi=0$, the first mode is stationary; constant transverse $w$ with $r=\Pi=0$ is stationary as well. [A1, step 2.1, step 2.2, algebra] ∎
