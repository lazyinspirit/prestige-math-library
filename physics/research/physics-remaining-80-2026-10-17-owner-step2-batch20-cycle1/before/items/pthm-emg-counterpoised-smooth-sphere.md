---
id: pthm-emg-counterpoised-smooth-sphere
kind: physics-theorem
title: Exact smooth coupled counterpoised dust and observables
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
physical_scope: "Exact smooth solutions of the selected static SI Einstein–Maxwell–charged-dust model for positive superharmonic conformastatic profiles, together with one regular spherical profile and its induced-volume and dilute observables. The finely fixed charge-to-mass ratio belongs only to this family. No empirical realization, arbitrary-data coupled evolution, formation, or stability claim is made."
dependency_level: 5
proof_strategy: direct
deps:
  - post-emg-transported-charged-dust
  - thm-emg-smooth-counterpoised-dust
  - cor-emg-regular-counterpoised-sphere
dependency_roles:
  post-emg-transported-charged-dust: physical-assumption
  thm-emg-smooth-counterpoised-dust: mathematical-premise
  cor-emg-regular-counterpoised-sphere: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011), §2, equations (1)–(7), PDF pp. 2–3"
      url: "https://arxiv.org/pdf/1105.3807"
      locator: "The selected static ECD ansatz and model-equation context. Its c=G=1 Gaussian conventions and fixed source sign are not imported; the local SI equations are checked under exact mathematical suppliers."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "§1.4.1 dust stress, §3.4 curvature contractions, and Ch. 4 Einstein-matter and electromagnetic-stress conventions; all conformastatic components and SI normalizations are supplied or checked locally."
    - title: "David Tong, General Relativity, University of Cambridge Part III, Michaelmas 2019, complete 290-page author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§§3.2.2, 3.4.1, 4.5.2–4.5.4, and 4.5.7: independent curvature, Einstein-matter, Maxwell/perfect-fluid tensor, and energy-condition treatments; no source proof or c=1 convention is silently imported."
verification:
  precheck: pass
---

## Statement

Assume only the Axiom of Countable Choice $\mathrm{AC}_\omega$ specified in [A1]. Use the selected smooth SI Einstein–Maxwell charged-dust model of [A1], with length coordinates $x^0=ct$ and $x^i$ in metres, positive constants $c,\mu_0,G_N$, $\epsilon_0:=(\mu_0c^2)^{-1}$, and $\kappa:=8\pi G_N/c^4$. Set $Q_s:=\sqrt{4\pi\epsilon_0G_N}>0$ (units $\mathrm{C\,kg^{-1}}$). For an open $D\subseteq\mathbb R^3$, let $H\in C^\infty(D,(0,\infty))$ be dimensionless and satisfy the Euclidean condition $\Delta H:=\sum_{i=1}^3\partial_i^2H\le0$. On $\mathcal M:=\mathbb R_{x^0}\times D$, use the coordinate metric, orientation, and time orientation
$$g_H=-H^{-2}(dx^0)^2+H^2\sum_{i=1}^3(dx^i)^2,\qquad n:=H\partial_0\text{ future},\qquad e_i:=H^{-1}\partial_i.$$
Use the coordinate orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$.
Define the smooth potential, field, dust velocity, rest-mass and rest-charge densities, current, and matter stress by
$$A:=s\frac c{Q_s}H^{-1}dx^0,\qquad F:=dA,\qquad U:=cH\partial_0,\qquad \rho:=-\frac{c^2\Delta H}{4\pi G_NH^3},\qquad \sigma:=sQ_s\rho,\qquad j^a:=\sigma U^a,\qquad T_m^{ab}:=\rho U^aU^b,$$
where $s\in\{-1,+1\}$ and the electromagnetic stress $T^{\mathrm{EM}}_{ab}$ is the one adopted in [A1]. Then $g_H$ is smooth Lorentzian, $n$ is a future unit observer, $U=cn$ is future timelike with $g_H(U,U)=-c^2$, all displayed fields are smooth, and $\rho\ge0$. This tuple satisfies every equation of the selected dust branch: $dF=0$, $\nabla_aF^{ab}=-\mu_0j^b$, $\nabla_a(\rho U^a)=0$, $\rho U^a\nabla_aU^b=\sigma F^b{}_cU^c$, $\nabla_aj^a=0$, $\nabla_aT_m^{ab}=F^b{}_cj^c$, and the adopted Einstein equation with $\Lambda=0$. These are exact conditional model deductions. On $\{\rho>0\}$ the ratio $\sigma/\rho=sQ_s$ is constant along $U$; no division by $\rho$ is made on $\{\rho=0\}$. The observer electric components are $E_i:=cF(e_i,n)=-s c^2H_i/(Q_sH^2)$, where $H_i:=\partial_iH$, and the coordinate acceleration is $a^0=0$, $a^i=-c^2H_i/H^3$.

Here $\rho$ is rest-mass density in $\mathrm{kg\,m^{-3}}$, $\sigma$ is rest-charge density in $\mathrm{C\,m^{-3}}$, and the stress components have energy-density units $\mathrm{J\,m^{-3}}$. The orthonormal components of $F$ have tesla units and $E_i$ has units $\mathrm{V\,m^{-1}}$, under the SI convention of [A1].

The total stress $T_{ab}:=T_{m,ab}+T^{\mathrm{EM}}_{ab}$ satisfies the weak, null, dominant, and strong energy conditions pointwise: respectively $T(v,v)\ge0$ for every future timelike $v$; $T(\ell,\ell)\ge0$ for every nonzero future null $\ell$; $-T^a{}_bv^b$ is future causal or zero for every future timelike $v$; and the weak condition holds for $T_{ab}-\tfrac12(g^{cd}T_{cd})g_{ab}$.

For the spherical specialization on all $\mathbb R^3$, let $a,b>0$ be lengths,
$$r^2:=\sum_{i=1}^3(x^i)^2,\qquad \Psi:=\sqrt{r^2+b^2},\qquad H:=1+\frac a\Psi.$$
Then $\Delta H=-3ab^2/(r^2+b^2)^{5/2}<0$ and $\rho=3c^2ab^2/[4\pi G_NH^3(r^2+b^2)^{5/2}]>0$ everywhere. On a slice $\Sigma=\{x^0=\mathrm{constant}\}$ the induced spatial metric is $h=H^2\delta_{ij}dx^idx^j$ and its volume measure is $dV_h=H^3d\lambda_3$, where $\lambda_3$ is Euclidean Lebesgue measure. Define the proper matter mass and signed charge by $M_{\mathrm{prop}}:=\int_\Sigma\rho\,dV_h$ and $Q_{\mathrm{prop}}:=\int_\Sigma\sigma\,dV_h$. Both are finite, with
$$M_{\mathrm{prop}}=\frac{c^2a}{G_N},\qquad Q_{\mathrm{prop}}=sQ_s\frac{c^2a}{G_N}.$$
The scalar curvature, meaning the trace of the Ricci tensor in the adopted convention, is $S_g=-2\Delta H/H^3>0$. These proper integrals are not identified with an ADM mass or a measurement.

For $a=\delta b$ with $0<\delta\le1$, put $h_0:=b/\Psi$ and define the positive linear density profile
$$\rho_{\mathrm{lin}}:=\frac{3c^2\delta b^3}{4\pi G_N(r^2+b^2)^{5/2}}.$$
The same exact coupled solutions satisfy the entrywise Cartesian-coordinate bounds
$$\left|g_{00}+\bigl(1-2\delta h_0\bigr)\right|\le3\delta^2,\qquad \left|g_{ij}-\bigl(1+2\delta h_0\bigr)\delta_{ij}\right|\le\delta^2,\qquad 0\le1-\frac{\rho}{\rho_{\mathrm{lin}}}\le3\delta.$$
All these are ideal model statements, not observed data. The result does not assert physical realization, stability, formation, or a coupled initial-value theorem.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $D$, $H$, $s$, $c$, $\mu_0$, $G_N$, and the field conventions specified in the Statement.

[A1] [[post-emg-transported-charged-dust]] adopts the SI Einstein and smooth curved-Maxwell equations, $T_m^{ab}=\rho U^aU^b$, $j^a=\sigma U^a$, the undivided mass-continuity and Lorentz-force equations, and charge-current conservation. It requires $\rho\ge0$, $g(U,U)=-c^2$, and $\sigma=0$ at $\rho=0$; on positive-density open sets it defines $\alpha=\sigma/\rho$ and adopts its transport through $U^a\nabla_a\alpha=0$. The Einstein–Maxwell equations are physical postulates, not deductions from mathematics or the cited literature. The selected branch excludes singular sources and makes no existence, stability, or empirical claim.

[F1] [[thm-emg-smooth-counterpoised-dust]]: under $\mathrm{AC}_\omega$, smooth positive $H$ with $\Delta H\le0$, the stated positive constants, and either sign $s$, the exact displayed $A,F,U,\rho,\sigma,j,T_m$ are smooth, $U$ is future timelike, and $\rho\ge0$. Its complete coordinate proof checks mass continuity, the undivided Lorentz-force identity, sourced Maxwell equations, the Bianchi identity, and the dust stress-exchange equation including the zero-density set; it then checks the $\Lambda=0$ Einstein components and all four energy conditions. The supplier remains a draft mathematical result and is used at its exact current conditional interface.

[F2] [[cor-emg-regular-counterpoised-sphere]]: for $a,b>0$ and $H=1+a/\sqrt{r^2+b^2}$, the smooth density is everywhere positive; with the induced volume density $H^3d\lambda_3$, the proper integrals are finite and equal $c^2a/G_N$ and $sQ_sc^2a/G_N$. It gives $S_g=-2\Delta H/H^3$ and the displayed metric and density bounds for $a=\delta b$, $0<\delta\le1$. This is also a draft mathematical supplier and is used conditionally.

## Proof

1.1 Under the Statement's $D,H,s,c,\mu_0,G_N$ hypotheses, the fields and coordinates are exactly those in [F1]; its full conditional proof verifies the smooth Lorentzian normalization, nonnegative density, sourced and homogeneous Maxwell equations, dust stress exchange, Einstein equation with $\Lambda=0$, and pointwise energy conditions. The definitions and equation directions coincide with the independently adopted physical system [A1], so the same tuple is a solution of that selected physical model. This is a deduction from the adopted postulate, not evidence for its empirical validity. [given, A1, F1]

2.1 The exact fields obey $\sigma=sQ_s\rho$ everywhere and the proved mass continuity. Thus $\nabla_a j^a=\nabla_a(sQ_s\rho U^a)=sQ_s\nabla_a(\rho U^a)=0$. On the open set where $\rho>0$, $\alpha=\sigma/\rho=sQ_s$ is constant, so $U^a\nabla_a\alpha=0$. Where $\rho=0$, the global formula gives $\sigma=0$; the preceding undivided current identity still applies and no charge-to-mass ratio is defined there. [A1, F1, step 1.1, algebra]

3.1 For the spherical profile, [F2] supplies the exact smooth solution, its induced metric volume density, and the stated finite proper mass and signed charge integrals. Its hypotheses are exactly $a,b>0$ and the displayed profile. When $a=\delta b$, its analytic metric and density inequalities apply for every $0<\delta\le1$; the scalar-curvature and strict-density claims follow from its displayed $\Delta H$ and $S_g$ formulas. These are conditional model observables, not measurements or an ADM-mass identification. [given, F1, F2, step 1.1, algebra] ∎
