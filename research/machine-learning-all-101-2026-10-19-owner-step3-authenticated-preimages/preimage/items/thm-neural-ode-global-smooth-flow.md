---
id: thm-neural-ode-global-smooth-flow
kind: theorem
title: A globally Lipschitz neural ODE has a global smooth flow
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-neural-ode
  - thm-mean-value-inequality-for-total-derivatives
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-existence-and-uniqueness-of-a-maximal-ode-solution
  - thm-gronwall-integral-inequality
  - lem-ode-extension-from-a-compact-interior-region
  - thm-smooth-dependence-of-ode-solutions-on-parameters
  - thm-fundamental-theorem-for-nonautonomous-smooth-odes
  - thm-c1-dependence-of-solutions-on-initial-data
  - thm-chain-rule-for-total-derivatives
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-endpoint extensions use explicitly defined sequences, and smoothness uses finite compact subcovers."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Chapter 2, §§2.2–2.5"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
verification:
  precheck: pass
---

## Statement

Let $T>0$, let $d,q\ge1$, let $\Theta\subseteq\mathbb R^q$ be open, let $I\subseteq\mathbb R$ be an open interval containing $[0,T]$, and let $v:I\times\mathbb R^d\times\Theta\to\mathbb R^d$ be jointly $C^\infty$. For every compact $K\subseteq\Theta$, suppose there are constants $L_K,M_K\ge0$ such that, for all $t\in[0,T]$, $\theta\in K$, and $z,w\in\mathbb R^d$,

$$\|v(t,z,\theta)-v(t,w,\theta)\|_2\le L_K\|z-w\|_2,\qquad \|v(t,0,\theta)\|_2\le M_K.$$

Then for each $\theta\in\Theta$, $s,t\in[0,T]$, and $z_s\in\mathbb R^d$, the neural ODE has a unique solution on all of $[0,T]$. Write $\Phi^\theta_{t,s}(z_s)$ for its value at time $t$. For each fixed $s,t$, the map $(z_s,\theta)\mapsto\Phi^\theta_{t,s}(z_s)$ is locally $C^\infty$. For each fixed $\theta$, $\Phi^\theta_{t,s}:\mathbb R^d\to\mathbb R^d$ is a $C^\infty$ diffeomorphism with inverse $\Phi^\theta_{s,t}$. Its state Jacobian $J_{t,s}:=D_{z_s}\Phi^\theta_{t,s}(z_s)$ satisfies

$$\frac{d}{dt}J_{t,s}=D_zv(t,\Phi^\theta_{t,s}(z_s),\theta)J_{t,s},\qquad J_{s,s}=I_d.$$

Time derivatives at $0$ and $T$ are one-sided.

## Statement references

[Teschl, *Ordinary Differential Equations and Dynamical Systems*, Chapter 2, §§2.2–2.5](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf)

## Facts & Assumptions

**Given:** The finite interval, open parameter domain, jointly smooth field, and compact-parameter-neighborhood Lipschitz and origin bounds in the Statement.

[F1] [[def-neural-ode]]: for fixed $\theta$, a trajectory solves $\dot z(t)=v_\theta(t,z(t))$ with its stated initial value.

[F2] [[thm-mean-value-inequality-for-total-derivatives]]: on a convex open state set, a uniform bound on the derivative operator norm implies the same Lipschitz bound for the map.

[F3] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space is bounded.

[F4] [[thm-heine-borel-rn]]: a closed bounded subset of a finite-dimensional Euclidean space is compact.

[F5] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a continuous field locally Lipschitz in the state has a unique local solution, and solutions through the same data agree on common intervals.

[F6] [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]: a Picard–Lindelöf IVP has a unique maximal solution on an open interval, and every other solution through the data is its restriction.

[F7] [[thm-gronwall-integral-inequality]]: from $u(t)\le a(t)+\int_{t_0}^t b(s)u(s)\,ds$, nonnegative continuous $u,b$, and nondecreasing nonnegative $a$, one obtains $u(t)\le a(t)\exp(\int_{t_0}^t b)$; the theorem also states the time-reflected form.

[F8] [[lem-ode-extension-from-a-compact-interior-region]]: if graph points of a solution approach a finite endpoint inside one compact subset of the open ODE domain, the solution extends past that endpoint; the statement also gives the reflected left-endpoint version.

[F9] [[thm-smooth-dependence-of-ode-solutions-on-parameters]]: a jointly smooth field has a common local solution interval and a solution map smooth in initial state and parameters near any base data.

[F10] [[thm-fundamental-theorem-for-nonautonomous-smooth-odes]]: for a smooth nonautonomous field, the local solution map is smooth in initial time and initial state near each base point.

[F11] [[thm-c1-dependence-of-solutions-on-initial-data]]: on a common compact local interval, the solution map is $C^1$ in initial state and its derivative solves the variational equation.

[F12] [[thm-chain-rule-for-total-derivatives]]: $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ for totally differentiable Euclidean maps.

## Proof

**Proof technique:** direct.

**Given:** $T,d,q,\Theta,I,v$, and the constants $L_K,M_K$ from the Statement.

1.1 Fix $(t_0,z_0,\theta_0)\in I\times\mathbb R^d\times\Theta$. Choose a closed time interval and a closed state ball about $(t_0,z_0)$ whose product lies in the open domain; it is compact by [F4]. The continuous function $(t,z)\mapsto\|D_zv(t,z,\theta_0)\|$ is bounded there by [F3]. For each fixed nearby $t$, [F2] on the open state ball gives a state-Lipschitz bound, while smoothness gives continuity of the field. Thus the Picard–Lindelöf hypotheses hold locally at every point of the ODE domain. [F2, F3, F4, given, construct]

2.1 For each fixed $\theta$ and initial data, [F5] gives the unique local solution and [F6] gives its unique maximal solution on an open interval. Fix now a nonempty compact $K\subseteq\Theta$ and a bounded ball $B$ of initial states. For every $\theta\in K$, the assumptions imply $\|v(t,z,\theta)\|_2\le M_K+L_K\|z\|_2$ on $[0,T]$. For a trajectory starting at $s$ in $B$, its integral equation gives $u(\tau):=\|z(s+\tau)\|_2\le \sup_{x\in B}\|x\|_2+M_K\tau+L_K\int_0^\tau u(\sigma)\,d\sigma$ whenever $s+\tau\in[0,T]$. Apply [F7] with the nondecreasing function $a(\tau)=\sup_{x\in B}\|x\|_2+M_K\tau$; time reversal gives the same bound backward. Thus every such maximal trajectory while it lies in $[0,T]$ has norm at most $R:=(\sup_{x\in B}\|x\|_2+M_KT)e^{L_KT}$. If a right endpoint $\beta$ of its maximal interval belonged to $(s,T]$, the explicitly defined sequence $t_j=\beta-(\beta-s)/(j+1)$ would increase to $\beta$, and each graph point $(t_j,z(t_j))$ would lie in the compact cylinder $[0,T]\times\overline B_R\subset I\times\mathbb R^d$. By [F8] the solution would extend past $\beta$, contradicting maximality. The explicit sequence $t_j=\alpha+(s-\alpha)/(j+1)$ gives the same contradiction at any left endpoint $\alpha\in[0,s)$. Therefore every maximal solution contains all of $[0,T]$, and uniqueness follows from [F6]. The sequences are specified by their endpoint and use no choice axiom. [F4, F5, F6, F7, F8, given, step 1.1, algebra, construct]

3.1 Fix a base initial state, parameter, and times $s,t$; choose compact neighborhoods $B$ and $K$ of the state and parameter. Step 2.1 places the trajectories for these data in one closed bounded state ball, so $[0,T]\times\overline B_R\times K$ is compact by [F4]. At every point of this cylinder, [F9] and [F10] applied to the smooth augmented field $(z,\theta)'=(v(t,z,\theta),0)$ give an open neighborhood of initial time, state, and parameter, and a positive time radius on which the local transition map is smooth. A finite subcover exists by [F4], and the minimum of its finitely many time radii is positive. Partition the interval from $s$ to $t$ into finitely many segments shorter than this minimum. Each base trajectory node belongs to a selected chart; continuity lets us shrink the initial state and parameter neighborhoods successively so each perturbed node remains in the next chart. The full transition is therefore a finite composition of smooth local maps on a neighborhood of the base data. Since the base data were arbitrary, $(z_s,\theta)\mapsto\Phi^\theta_{t,s}(z_s)$ is locally $C^\infty$ for every fixed $s,t$. [F4, F9, F10, given, step 2.1, construct]

4.1 By uniqueness from step 2.1, solving from $s$ to $t$ and then from $t$ back to $s$ returns the original initial value; hence $\Phi^\theta_{s,t}\circ\Phi^\theta_{t,s}$ and $\Phi^\theta_{t,s}\circ\Phi^\theta_{s,t}$ are both identity maps. Both maps are smooth by step 3.1, so each $\Phi^\theta_{t,s}$ is a global $C^\infty$ diffeomorphism with the stated inverse. [step 2.1, step 3.1]

5.1 Fix $s,\theta,z_s$. At every interior time $r\in(0,T)$, smoothness of the field and [F10] give a common local interval for nearby initial states at $z_r:=\Phi^\theta_{r,s}(z_s)$. The hypotheses of [F11] hold there, so $A(t):=D_y\Phi^\theta_{t,r}(z_r)$ satisfies $A'(r)=D_zv(r,z_r,\theta)$ and $A(r)=I_d$. Uniqueness gives $\Phi^\theta_{t,s}=\Phi^\theta_{t,r}\circ\Phi^\theta_{r,s}$ near $t=r$; differentiating this identity in $z_s$ using [F12] yields $J_{t,s}=A(t)J_{r,s}$. Differentiating at $t=r$ therefore gives $\frac{d}{dt}J_{t,s}=D_zv(r,\Phi^\theta_{r,s}(z_s),\theta)J_{r,s}$. Since $r$ was arbitrary this holds on $(0,T)$; the local transitions at $0,T$ give the corresponding one-sided derivatives. At $t=s$, the transition is the identity and so $J_{s,s}=I_d$. [F1, F10, F11, F12, step 2.1, step 3.1] ∎
