---
id: pthm-rpm-schwarzschild-circular-stability
kind: physics-theorem
title: "Lyapunov stability of Schwarzschild circular orbits in the fixed-angular-momentum radial system"
status: draft
origin: session
domain: physics
library: physics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - pthm-gr-schwarzschild-vacuum-model
  - post-gr-ideal-clocks-and-free-fall
  - lem-gr-schwarzschild-timelike-geodesic-reduction
  - lem-gr-schwarzschild-circular-orbits-and-photon-sphere
  - def-cm-equilibrium-and-lyapunov-stability
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-cm-compact-continuation-for-locally-lipschitz-odes
dependency_roles:
  pthm-gr-schwarzschild-vacuum-model: physical-result
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  lem-gr-schwarzschild-timelike-geodesic-reduction: mathematical-premise
  lem-gr-schwarzschild-circular-orbits-and-photon-sphere: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
physical_scope: "Conditional conclusion of the adopted Schwarzschild vacuum and free-fall model for the one-dimensional timelike radial subsystem at fixed angular momentum. Lyapunov stability is only for the reduced state (r, dr/dτ); it is not stability of the full spacetime orbit, against angular-momentum perturbations, or against radiation reaction, self-force, finite-size effects, or observations."
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 HTML of the complete lecture notes, §§1.2.5 and 1.3.1–1.3.5 (printed pp. 24–46)"
      url: "https://davidtong.org/teaching/general-relativity/grhtml/S1"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, §7, pp. 172–179"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification: {}
---

## Statement

Adopt the Schwarzschild vacuum exterior model with $m_*>0$, $s=2G_Nm_*/c^2>0$ and $f(r)=1-s/r$, together with its ideal-free-fall rule that a massive test body follows a future timelike geodesic. For a fixed angular-momentum magnitude $\ell>0$, set

$$W_\ell(r)=f(r)\left(c^2+\frac{\ell^2}{r^2}\right),\qquad r>s.$$

The equatorial reduced radial system is

$$\dot r=w,\qquad \dot w=-\frac12 W_\ell'(r),$$

where dot denotes proper-time derivative and $\ell$ is held fixed. For every circular timelike radius $r_c>3s/2$, the corresponding equilibrium is

$$z_c=(r_c,0),\qquad \ell^2=\frac{c^2s r_c^2}{2r_c-3s}.$$

Then this equilibrium is Lyapunov stable in the Euclidean phase space $(r,w)$ when $r_c>3s$, and is not Lyapunov stable when $3s/2<r_c\le3s$. At $r_c=3s$ the equilibrium is a stationary inflection of $W_\ell$, not a strict extremum, and is still not Lyapunov stable. These are conclusions about the reduced radial system at fixed $\ell$ only.

## Facts & Assumptions

**Given:** The stated Schwarzschild vacuum model, its free-fall rule, $c,s>0$, a fixed $\ell>0$, and the reduced radial state space $(s,\infty)\times\mathbb R$.

[A1] The adopted Schwarzschild model uses the exterior datum and ideal freely falling massive test bodies follow future timelike geodesics; this is a model assumption, not an empirical premise ([[pthm-gr-schwarzschild-vacuum-model]], [[post-gr-ideal-clocks-and-free-fall]]).

[F1] For an equatorial timelike geodesic with fixed conserved angular momentum $\ell$, the radial equation is $\dot r^2=e^2-W_\ell(r)$ and, on a radial interval, $\ddot r=-W_\ell'(r)/2$ ([[lem-gr-schwarzschild-timelike-geodesic-reduction]]).

[F2] A circular timelike orbit at $r_c>3s/2$ has $\ell^2=c^2s r_c^2/(2r_c-3s)$; the published supplier defines $V_\ell=W_\ell/2$ and gives $V_\ell''(r_c)=c^2s(r_c-3s)/(r_c^3(2r_c-3s))$, so $W_\ell''(r_c)=2c^2s(r_c-3s)/(r_c^3(2r_c-3s))$ at fixed $\ell$. Its sign gives a strict local minimum for $r_c>3s$ and a strict local maximum for $3s/2<r_c<3s$ ([[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]] clause (c)).

[F3] Lyapunov stability quantifies over every sufficiently small Euclidean initial-state ball and every maximal solution, requiring forward existence for all $t\ge0$ and continued containment in a prescribed ball ([[def-cm-equilibrium-and-lyapunov-stability]]).

[F4] The smooth radial vector field is locally Lipschitz, so every initial state has a unique local solution ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[F5] A solution of an autonomous locally Lipschitz ODE whose state remains in a compact subset of its open state domain near a finite endpoint extends beyond that endpoint ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]] clause 2).

## Proof

**Proof technique:** reduce geodesic motion to the fixed-$\ell$ radial ODE, use its conserved one-dimensional energy, and apply the definition of Lyapunov stability plus compact continuation.


1.1 By [F1], the reduced vector field is $F_\ell(r,w)=(w,-W_\ell'(r)/2)$ on the open set $(s,\infty)\times\mathbb R$. It is smooth there and [F4] gives a unique local solution through every state. Differentiating $W_\ell=f(c^2+\ell^2/r^2)$ gives $W_\ell'=c^2s/r^2-2\ell^2/r^3+3s\ell^2/r^4$; substituting the circular value of $\ell^2$ from [F2] yields $W_\ell'(r_c)=0$, so $F_\ell(r_c,0)=0$. Along every solution, $H_\ell(r,w):=\tfrac12(w^2+W_\ell(r))$ satisfies $dH_\ell/d\tau=w(-W_\ell'/2)+(W_\ell'/2)w=0$. Thus $H_\ell$ is constant on each solution interval. [given, F1, F2, F4, algebra]

2.1 Suppose $r_c>3s$. By [F2], $W_\ell''(r_c)>0$, so continuity gives an interval about $r_c$ on which $W_\ell''>0$. Since $W_\ell'(r_c)=0$, the derivative is negative to the left and positive to the right there; hence $W_\ell$ has a strict local minimum. Fix any phase-space radius $\varepsilon>0$ whose closed ball about $z_c$ lies in $(s,\infty)\times\mathbb R$. Choose $0<\eta<\varepsilon/2$ so $[r_c-\eta, r_c+\eta]\subset(s,\infty)$ and both boundary values of $W_\ell$ exceed $W_\ell(r_c)$. By continuity of $H_\ell$, choose $0<\delta\le\varepsilon$ so every state within $\delta$ of $z_c$ has $|r-r_c|<\eta/2$, energy below both boundary potential halves, and $H_\ell-W_\ell(r_c)/2<\varepsilon^2/8$. Conservation in 1.1 prevents such a solution from reaching either radial boundary, since there $H_\ell\ge W_\ell(r_c\pm\eta)/2$. Inside the resulting radial interval $W_\ell(r)\ge W_\ell(r_c)$, so $w^2/2=H_\ell-W_\ell(r)/2<\varepsilon^2/8$ and $|w|<\varepsilon/2$. The state stays in a compact subset of the open domain; [F5] rules out a finite forward maximal endpoint. With $|r-r_c|<\eta<\varepsilon/2$ and $|w|<\varepsilon/2$, it remains inside the prescribed phase-space ball for every $\tau\ge0$. This is Lyapunov stability by [F3]. [step 1.1, F2, F3, F4, F5, algebra]

2.2 Suppose $3s/2<r_c<3s$. By [F2], $W_\ell''(r_c)<0$; shrink $\eta>0$ so $W_\ell'(r)<0$ on $(r_c,r_c+\eta]$. For any proposed initial-state radius $\delta>0$, choose $r_0\in(r_c,r_c+\min\{\eta/2,\delta/2\})$ and initial data $(r_0,0)$. [F4] supplies a local solution. Its acceleration is $-W_\ell'(r_0)/2>0$, and conservation of $H_\ell$ gives, on the outgoing branch, $w=\sqrt{W_\ell(r_0)-W_\ell(r)}$. The travel-time integral to $r_c+\eta$ is $\int_{r_0}^{r_c+\eta}[W_\ell(r_0)-W_\ell(r)]^{-1/2}dr$, whose only endpoint singularity is bounded by a constant times $(r-r_0)^{-1/2}$ because $W_\ell'(r_0)<0$. Before reaching that radius, the energy identity bounds $w$ on the compact radial interval $[r_0,r_c+\eta]$, so the state stays in a compact subset of $(s,\infty)\times\mathbb R$ near any finite maximal endpoint. The compact-continuation result [F5] therefore prevents finite-time termination before the finite travel time; the solution reaches $r_c+\eta$ and leaves the fixed neighborhood of radius $\eta$. Since $r_0$ can be chosen within every proposed $\delta$, this contradicts [F3]. [step 1.1, F2, F3, F4, F5, algebra]

2.3 At $r_c=3s$, the circular relation gives $\ell^2=3c^2s^2$. Differentiating $W_\ell(r)=c^2(1-s/r)+\ell^2(r^{-2}-sr^{-3})$ at this fixed $\ell$ gives $W_\ell'(r)=c^2s(r-3s)^2/r^4$ and $W_\ell''(r)=-2c^2s(r-3s)(r-6s)/r^5$. Thus $W_\ell'$ is positive except at $3s$ and $W_\ell''$ changes sign there, so the equilibrium is a stationary inflection. Fix $0<\eta<s$ and, for any $\delta>0$, choose $r_0\in(3s-\min\{\eta/2,\delta/2\},3s)$ with initial data $(r_0,0)$. [F4] supplies a local solution. The acceleration is negative. On the inward branch energy conservation yields $w=-\sqrt{W_\ell(r_0)-W_\ell(r)}$ for $3s-\eta\le r<r_0$, since $W_\ell$ is strictly increasing on that interval. The travel-time integral to $3s-\eta$ is finite; near $r_0$ its integrand is bounded by a constant times $(r_0-r)^{-1/2}$ because $W_\ell'(r_0)>0$. The energy identity bounds $w$ while $r$ stays in the compact interval $[3s-\eta,r_0]\subset(s,\infty)$, so [F5] extends the solution past any finite maximal endpoint before its finite travel time. It therefore reaches $3s-\eta$, leaving the fixed neighborhood of radius $\eta$. Since $r_0$ can be chosen within every proposed $\delta$, [F3] says the equilibrium is not Lyapunov stable. [step 1.1, F1, F2, F3, F4, F5, algebra]

3.1 The two subcritical cases in 2.2–2.3 are not Lyapunov stable, while the supercritical case in 2.1 is Lyapunov stable. These are deductions under the adopted Schwarzschild free-fall model [A1] and concern only its fixed-angular-momentum radial subsystem. [step 2.1, step 2.2, step 2.3, A1, given] ∎

## Remarks

- The endpoint $r_c=3s$ is degenerate: $W_\ell''(r_c)=0$. The one-sided energy argument above establishes instability without calling the potential maximum or minimum.
- The statement does not perturb $\ell$ and does not imply orbital stability in the full geodesic phase space.
