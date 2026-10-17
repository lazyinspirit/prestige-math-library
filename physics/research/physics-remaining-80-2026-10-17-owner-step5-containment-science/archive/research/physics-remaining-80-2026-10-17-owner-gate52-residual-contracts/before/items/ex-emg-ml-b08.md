---
id: ex-emg-ml-b08
kind: example
title: Constant-magnetic-field slow test-orbit comparison
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 4
proof_strategy: direct
deps:
  - pthm-emg-weak-slow-test-motion
dependency_roles:
  pthm-emg-weak-slow-test-motion: physical-result
physical_scope: "An exact finite-time comparison of a relativistic charged test orbit and its Newton–Lorentz slow-motion trajectory in a prescribed constant magnetic field on Minkowski space. It excludes self-field, radiation reaction, and any small-field backreaction theorem or fully coupled flat Einstein–Maxwell solution."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. S. Reall, General Relativity, Cambridge Part III lecture notes, 12 October 2022 revision, complete 125-page notes, §6.2"
      url: https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf
      locator: "Equations (6.9)–(6.10), PDF pp. 61–63, give the curved charged test-particle equation; the finite magnetic orbit and error bound are computed here."
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011), complete 162-page review"
      url: https://arxiv.org/pdf/1102.0529v3
      locator: "§18.1, equations (18.3)–(18.10), PDF pp. 96–98, states the charged test-particle force equation and the singular self-field caveat. The present orbit uses only a separately prescribed smooth field."
verification:
  precheck: pass
---

## Example

On Minkowski spacetime with signature $(-,+,+,+)$ and time orientation $\partial_0$, set $\phi=0$, $\mathbf E=0$, and prescribe a constant magnetic field with $\alpha\mathbf B=\sqrt\epsilon(c/L)b_0\mathbf e_z$, where $\alpha=q/m\ne0$ has units $\mathrm{C\,kg^{-1}}$, $b_0\ne0$ is dimensionless, $L>0$ has units metres, $c$ has units $\mathrm{m\,s^{-1}}$, and $0<\epsilon\le1$ is dimensionless. Choose initial velocity $\mathbf w_0=\sqrt\epsilon c\mathbf W_0$ with $\mathbf W_0\cdot\mathbf e_z=0$ and $\epsilon|\mathbf W_0|^2\le1/2$. Let $\mathbf X=\mathbf x/L$, $\mathbf W=\mathbf w/(\sqrt\epsilon c)$, and $S=\sqrt\epsilon ct/L$. With matched initial position, the exact relativistic and Newton–Lorentz comparison trajectories satisfy

$$|\mathbf W(S)-\mathbf W_N(S)|\le |b_0|\epsilon|\mathbf W_0|^3S,\qquad |\mathbf X(S)-\mathbf X_N(S)|\le\frac12|b_0|\epsilon|\mathbf W_0|^3S^2$$

on every fixed finite interval $0\le S\le S_*$. This is an exact ideal test-background comparison; it is not a coupled flat Einstein–Maxwell solution or a backreaction estimate.

## Facts & Assumptions

**Given:** The fixed-background Lorentz-force model, the constant magnetic field and initial data above, a finite scaled interval $[0,S_*]$, and the inherited $\mathrm{AC}_\omega$ hypothesis when the action is expressed by its equivalent force law.

[F1] [[pthm-emg-weak-slow-test-motion]]: for stationary weak metrics and prescribed electric/magnetic fields with the exact scalings, a proper-time charged test curve that exists with the stated uniform speed and compact-containment hypotheses obeys the Newton–Lorentz comparison system with an $O(\epsilon)$ scaled acceleration error and finite-time trajectory bound. The action-to-force formulation inherits only the equivalence theorem's stated $\mathrm{AC}_\omega$ hypothesis.

[F2] [[pthm-emg-weak-slow-test-motion]]: the metric and electromagnetic field are prescribed inputs; no Maxwell or Einstein equation is imposed on this background.

[A1] Here the metric is exactly Minkowski, the electric field and weak gravitational potential vanish, the magnetic field is constant, $\mathbf W_0$ is transverse, and $\epsilon|\mathbf W_0|^2\le1/2$. The exact test trajectory and comparison are the solutions constructed below; no Maxwell or Einstein equation for the prescribed field is assumed.

## Verification

1.1 In flat coordinates the proper-time law of [F1] has $U^0=\gamma c$, $U^i=\gamma w^i$, and $\nabla=\partial$. With $E=0$ and $F_{ij}=\epsilon_{ijk}B_k$, its spatial components reduce to $d(\gamma m\mathbf w)/dt=q\mathbf w\times\mathbf B$. Its dot product with $\mathbf w$ is zero, so $|\mathbf w|$ and $\gamma=(1-|\mathbf w|^2/c^2)^{-1/2}=(1-\epsilon|\mathbf W_0|^2)^{-1/2}$ are constant. Since $\mathbf W_0$ is transverse to $\mathbf e_z$, the motion stays in that transverse plane. Define $J\mathbf v:=\mathbf v\times b_0\mathbf e_z$ there; $J$ is skew-symmetric and $J^2=-b_0^2I$. Rescaling the exact force equation gives $\mathbf W'=J\mathbf W/\gamma$ and $\mathbf X'=\mathbf W$, so $\mathbf W(S)=e^{SJ/\gamma}\mathbf W_0$. The Newton–Lorentz comparison is $\mathbf W_N(S)=e^{SJ}\mathbf W_0$. [given, F1, A1, algebra]

2.1 The exponentials are rotations because $J$ is skew-symmetric. Since they commute, $e^{SJ/\gamma}-e^{SJ}=\int_0^S(\gamma^{-1}-1)Je^{sJ/\gamma}e^{(S-s)J}\,ds$, and $\|J\|_{2\to2}=|b_0|$. Therefore $|\mathbf W-\mathbf W_N|\le S|b_0||1-\gamma^{-1}||\mathbf W_0|$. The exact identity $1-\gamma^{-1}=\epsilon|\mathbf W_0|^2/(1+\sqrt{1-\epsilon|\mathbf W_0|^2})\le\epsilon|\mathbf W_0|^2$ proves the velocity bound. [F1, A1, step 1.1, algebra]

3.1 Integrating $\mathbf X'-\mathbf X_N'=\mathbf W-\mathbf W_N$ with matched initial positions gives the stated half-$S^2$ position bound. The explicit rotations stay in bounded balls on every finite interval, so existence and common compact containment hold; the comparison is a special case of [F1] on the prescribed background [F2], with no coupled-background equation. [F1, F2, A1, step 2.1, algebra] ∎
