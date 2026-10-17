---
id: pthm-csm-dk-ou-green-kubo-einstein
kind: physics-theorem
title: "Conditional Langevin Green–Kubo and Einstein relation"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps:
  - post-csm-dk-selected-thermal-langevin-bath
  - thm-csm-dk-ou-velocity-diffusion-response
  - def-axiom-of-choice
dependency_roles:
  post-csm-dk-selected-thermal-langevin-bath: physical-assumption
  thm-csm-dk-ou-velocity-diffusion-response: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
physical_scope: "Conditional one-dimensional prediction for the specified stationary inertial velocity Langevin model with constant mass, damping, temperature and additive noise. It does not assert the Einstein relation for nonlinear dynamics, arbitrary baths, general mechanical systems, or measured material coefficients."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Grigorios A. Pavliotis, Stochastic Processes and Applications"
      url: "https://www.ma.imperial.ac.uk/~pavl/PavliotisBook.pdf"
      locator: "Chapter 1 §1.2 and Chapter 4 §4.4: Green–Kubo diffusion coefficient and stationary OU covariance."
    - title: "Udo Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/pdf/1205.4176"
      locator: "§§2.6.1 and 8.1.1: inertial Langevin model and equilibrium fluctuation-dissipation response."
---

## Statement

Assume the adopted velocity bath [[post-csm-dk-selected-thermal-langevin-bath]] on $t\ge0$ and the Axiom of Choice [[def-axiom-of-choice]]. Let $X_t=X_0+\int_0^tV_s\,ds$ be the position coordinate in that model, and prepare $V_0$ in its specified stationary Gaussian law. For zero external force, define the stationary velocity covariance by
$$C_{VV}(\tau):=\mathbb E[(V_s-\mathbb EV_s)(V_{s+\tau}-\mathbb EV_{s+\tau})],\qquad s\ge\max(0,-\tau).$$
Stationarity makes it independent of $s$, and the model gives
$$C_{VV}(\tau)=\frac{k_BT_b}{m}e^{-\gamma|\tau|}.$$
For a deterministic force applied at time $s\le t$, the linear response kernel is
$$R_{VF}(t-s)=\frac1m e^{-\gamma(t-s)}=\frac{1}{k_BT_b}C_{VV}(t-s).$$
Here $R_{VF}$ is defined by the exact mean-response formula
$$\mathbb E[V_t]=\int_0^tR_{VF}(t-s)F(s)\,ds$$
for deterministic forcing from the stated zero-mean stationary preparation; its units are $\mathrm{kg^{-1}}$. The constant-force mobility below is a distinct steady-response coefficient.
The diffusion coefficient defined by centered displacement variance satisfies the Green–Kubo identity
$$D:=\lim_{t\to\infty}\frac{\operatorname{Var}(X_t-X_0)}{2t}=\frac{k_BT_b}{m\gamma}\quad\text{in }\mathrm{m^2\,s^{-1}}.$$
More precisely, $D=\int_0^\infty C_{VV}(\tau)\,d\tau$.
The constant-force mobility
$$\mu:=\lim_{t\to\infty}\frac{\mathbb E[V_t]}{F_0}=\frac1{m\gamma}\quad\text{in }\mathrm{s\,kg^{-1}}$$
for constant $F_0\ne0$. Hence $D=\mu k_BT_b$. The centered displacement divided by $\sqrt t$ converges in distribution to $N(0,2D)$. These are conditional model deductions, not observed transport data or a universal law for arbitrary systems.

## Facts & Assumptions
**Given:** The adopted one-dimensional Langevin equation and stationary preparation, Choice, and the exact mathematical OU velocity-response theorem.

[A1] [[post-csm-dk-selected-thermal-langevin-bath]]: $m>0$ is in kilograms, $T_b>0$ in kelvins, $k_B$ in joules per kelvin, $\gamma>0$ in seconds$^{-1}$, $\sigma^2=2\gamma k_BT_b/m$, and the stationary initial velocity has variance $k_BT_b/m$.

[A2] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function, as required by the Brownian and Itô suppliers.

[F1] [[thm-csm-dk-ou-velocity-diffusion-response]]: under $\sigma^2=2\gamma k_B\Theta/m$ and $V_0\sim N(0,k_B\Theta/m)$, the OU covariance is $(k_B\Theta/m)e^{-\gamma|\tau|}$, the integrated displacement variance has limit $D=k_B\Theta/(m\gamma)$, and the constant-input response coefficient is $1/(m\gamma)$.

## Proof

**Given:** [A1]–[A2] and [F1].

1.1 Substituting $\sigma^2=2\gamma k_BT_b/m$ from [A1] into the stationary variance $V=\sigma^2/(2\gamma)$ gives $V=k_BT_b/m$. Its units are $\mathrm J/\mathrm{kg}=\mathrm{m^2\,s^{-2}}$, the square of a velocity. [A1, algebra]

2.1 Apply [F1] with $\Theta=T_b$ and input $u=F$. Its covariance and response formulas give $C_{VV}(\tau)=(k_BT_b/m)e^{-\gamma|\tau|}$ and $R_{VF}(t-s)=m^{-1}e^{-\gamma(t-s)}$. Since $(k_BT_b)^{-1}C_{VV}(t-s)=m^{-1}e^{-\gamma(t-s)}$, the claimed equilibrium response relation follows. [A2, F1, step 1.1, algebra]

2.2 The same substitution in the displacement-variance limit of [F1] gives $D=k_BT_b/(m\gamma)$. The covariance in the Statement gives $\int_0^\infty C_{VV}(\tau)\,d\tau=(k_BT_b/m)\int_0^\infty e^{-\gamma\tau}\,d\tau=k_BT_b/(m\gamma)=D$, the Green–Kubo identity for this model. Its constant-input response gives $\mu=1/(m\gamma)$, so $D=\mu k_BT_b$. The unit of $\mu$ is $(\mathrm{m\,s^{-1}})/\mathrm N=\mathrm{s\,kg^{-1}}$, and multiplication by $k_BT_b$ in joules gives $\mathrm{m^2\,s^{-1}}$. [A2, F1, A1, step 1.1, algebra]

3.1 The centered-displacement distributional limit in [F1] gives $[X_t-X_0-\mathbb E(X_t-X_0)]/\sqrt t\Rightarrow N(0,2D)$. Every conclusion is conditional on [A1]; no observed value or empirical certainty is inferred. [A2, F1, A1, step 2.2] ∎
