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
  - cor-finite-dimensional-normed-spaces-are-banach
  - lem-exponential-series-of-a-bounded-operator
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-norm-inequality-for-the-vector-valued-integral
dependency_roles:
  pthm-emg-weak-slow-test-motion: physical-result
  cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
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

[F1] [[pthm-emg-weak-slow-test-motion]]: for stationary weak metrics and prescribed electric/magnetic fields with the exact scalings, after choosing the theorem's parameter cutoff $\epsilon_*$ sufficiently small in terms of its uniform bounds, a proper-time charged test curve that exists with the stated uniform speed and compact-containment hypotheses obeys the Newton–Lorentz comparison system with an $O(\epsilon)$ scaled acceleration error and finite-time trajectory bound. The explicit constant-field estimates in this Example are proved directly below on the full displayed range $0<\epsilon\le1$ with $\epsilon|\mathbf W_0|^2\le1/2$; they do not rely on extending that general theorem beyond its small-cutoff hypothesis. The action-to-force formulation inherits only the equivalence theorem's stated $\mathrm{AC}_\omega$ hypothesis.

[F2] [[pthm-emg-weak-slow-test-motion]]: the metric and electromagnetic field are prescribed inputs; no Maxwell or Einstein equation is imposed on this background.

[F3] [[cor-finite-dimensional-normed-spaces-are-banach]]: a real normed space with a supplied finite ordered basis is Banach. [[lem-exponential-series-of-a-bounded-operator]]: for bounded $A$ on a real Banach space, $E_A(t):=\sum_{n=0}^{\infty}t^nA^n/n!$ converges in operator norm, is smooth for real $t$, satisfies $E_A(0)=I$ and $E_A(t+s)=E_A(t)E_A(s)$, and $E_A'(t)=AE_A(t)=E_A(t)A$.

[F4] [[cor-vector-valued-ftc-and-lipschitz-bound]], clauses 1–2: for a finite real vector curve on $[a,b]$, $a<b$, differentiability with integrable derivative gives $\int_a^b f'=f(b)-f(a)$; a continuous curve with derivative norm at most $M$ is $M$-Lipschitz. In particular a curve with zero derivative is constant. We apply the integral identity to smooth curves, including their one-sided endpoint derivatives; matrices are identified with their finite lists of real entries.

[F5] [[thm-norm-inequality-for-the-vector-valued-integral]]: for an integrable finite real vector curve on $[a,b]$ with $a\le b$, $|\int_a^b f|\le\int_a^b|f|$. The integral over an interval of zero length is zero.

[A1] Here the metric is exactly Minkowski, the electric field and weak gravitational potential vanish, the magnetic field is constant, $\mathbf W_0$ is transverse, and $\epsilon|\mathbf W_0|^2\le1/2$. The exact test trajectory and comparison are the solutions constructed below; no Maxwell or Einstein equation for the prescribed field is assumed.

## Verification

1.1 In flat coordinates the proper-time law of [F1] has $U^0=\gamma c$, $U^i=\gamma w^i$, and $\nabla=\partial$. With $E=0$ and $F_{ij}=\epsilon_{ijk}B_k$, its spatial components reduce to $d(\gamma m\mathbf w)/dt=q\mathbf w\times\mathbf B$. Its dot product with $\mathbf w$ is zero, so $|\mathbf w|$ and $\gamma=(1-|\mathbf w|^2/c^2)^{-1/2}=(1-\epsilon|\mathbf W_0|^2)^{-1/2}$ are constant. Since $\mathbf W_0$ is transverse to $\mathbf e_z$, the motion stays in that transverse plane. Define $J\mathbf v:=\mathbf v\times b_0\mathbf e_z$ there; $J$ is skew-symmetric and $J^2=-b_0^2I$. Identify the transverse plane with the real Euclidean normed space $\mathbb R^2$ using the ordered coordinate basis $(\mathbf e_x,\mathbf e_y)$; it is Banach by [F3], and $|Jv|=|b_0||v|$ proves that $J$ is bounded with $\|J\|_{2\to2}=|b_0|$. Define $E(t):=\sum_{n=0}^{\infty}t^nJ^n/n!$ by [F3], and write $e^{tJ}:=E(t)$. Rescaling the exact force equation gives $\mathbf W'=J\mathbf W/\gamma$ and $\mathbf X'=\mathbf W$. The formula $\mathbf W(S)=E(S/\gamma)\mathbf W_0$ has the matched initial velocity and satisfies the velocity equation by the derivative law in [F3]; the Newton–Lorentz comparison is $\mathbf W_N(S)=E(S)\mathbf W_0$. For either constant generator $aJ$ with $a=\gamma^{-1}$ or $a=1$, any solution with this initial value is unique: differentiating $E(-aS)\mathbf W(S)$ gives zero, so [F4] makes it constant and multiplication by $E(aS)$ recovers the displayed formula. [given, F1, F3, F4, A1, algebra]

2.1 By [F3], $Q(t):=E(t)^TE(t)$ is smooth and $Q'(t)=E(t)^T(J^T+J)E(t)=0$, with $Q(0)=I$. Clause 2 of [F4], applied to its four entries as a real vector on any compact interval, gives $Q(t)=I$, so every $E(t)$ preserves the Euclidean norm. For fixed $S>0$, put $r=\gamma^{-1}$ and $P(s):=E(rs)E(S-s)$ on $[0,S]$. The semigroup and derivative laws in [F3] imply that these factors commute with $J$ and $P'(s)=(r-1)JE(rs)E(S-s)$. Its derivative is continuous, so the componentwise integral identity in [F4] gives $E(rS)-E(S)=\int_0^S(r-1)JE(rs)E(S-s)\,ds$. Apply this identity to $\mathbf W_0$ and then [F5]. Both exponential factors preserve norm, so $|\mathbf W-\mathbf W_N|\le S|b_0||1-\gamma^{-1}||\mathbf W_0|$. At $S=0$ the difference and integral vanish directly. The exact identity $1-\gamma^{-1}=\epsilon|\mathbf W_0|^2/(1+\sqrt{1-\epsilon|\mathbf W_0|^2})\le\epsilon|\mathbf W_0|^2$ proves the velocity bound throughout the displayed parameter range, including $\mathbf W_0=0$. [F3, F4, F5, A1, step 1.1, algebra]

3.1 Define $J^{-1}=-J/b_0^2$ and the positions explicitly by $\mathbf X(S)=\mathbf X(0)+\gamma J^{-1}(E(S/\gamma)-I)\mathbf W_0$ and $\mathbf X_N(S)=\mathbf X(0)+J^{-1}(E(S)-I)\mathbf W_0$. Their derivatives are the respective velocities by [F3], and their initial positions match. Clause 1 of [F4] and [F5] give $|\mathbf X(S)-\mathbf X_N(S)|\le\int_0^S|\mathbf W(s)-\mathbf W_N(s)|\,ds\le |b_0|\epsilon|\mathbf W_0|^3\int_0^S s\,ds=\tfrac12|b_0|\epsilon|\mathbf W_0|^3S^2$, with $S=0$ immediate. The smooth orthogonal flows exist for all real $S$ and give $|\mathbf W|=|\mathbf W_N|=|\mathbf W_0|$ and $|\mathbf X-\mathbf X(0)|,|\mathbf X_N-\mathbf X_N(0)|\le S_*|\mathbf W_0|$ on the stated finite interval, hence common compact containment. Their constant speed is strictly below $c$ because $\epsilon|\mathbf W_0|^2\le1/2$, and setting proper time $\tau=t/\gamma$ reconstructs the future-directed proper-time test worldline satisfying the force law used in step 1.1. These direct calculations establish the displayed example throughout its stated range; for sufficiently small $\epsilon$ they also lie within the general theorem's hypotheses [F1]. The metric and field remain prescribed inputs by [F2], with no coupled-background equation. [F1, F2, F3, F4, F5, A1, step 1.1, step 2.1, algebra] ∎
