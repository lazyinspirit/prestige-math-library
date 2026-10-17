---
id: lem-csm-dk-continuous-time-field-smooth-flow
kind: lemma
title: Smooth state flow for continuous-time smooth-state force fields
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps:
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-gronwall-integral-inequality
dependency_roles:
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Graduate Studies in Mathematics 140, American Mathematical Society (2012)
      url: https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf
      locator: 'Chapter 2 §§2.2, 2.4 and 2.6, printed pp. 36-53; Theorem 2.10 assumes joint C^k regularity in time and state, so the local proof below separately handles time-continuous fields with smooth state dependence.'
verification:
  precheck: pass
---

## Statement

Let $d\ge1$, let $I=[a,b]$ be a compact interval contained in an open interval $J\subseteq\mathbb R$, and let $G:J\times\mathbb T^d\to\mathbb R^d$ be continuous in time with jointly continuous state derivatives $D_x^rG$ on $J\times\mathbb T^d$ for every integer $r\ge1$. Assume that $G$ and each state derivative $D_x^rG$ are bounded on $I\times\mathbb T^d$ for every integer $r\ge1$. For initial data $(x_0,v_0)\in\mathbb T^d\times\mathbb R^d$, the system

$$\dot X(t)=V(t),\qquad \dot V(t)=G(t,X(t)),\qquad (X(a),V(a))=(x_0,v_0)$$

has a unique solution on all of $I$. For each $t\in I$, the map
$(x_0,v_0)\mapsto(X(t),V(t))$ is $C^\infty$; for every integer $r\ge1$ its
$r$th initial-state derivative is bounded uniformly over $t\in I$ and all
$(x_0,v_0)$. Its inverse is the solution map from $t$ back to $a$. If $G$ is
jointly $C^\infty$ in $(t,x)$ on $J\times\mathbb T^d$, then the flow is jointly
$C^\infty$ in time and initial state.

## Facts & Assumptions

**Given:** The compact interval, torus, continuous-time force field, bounded state derivatives and the initial-value system in the Statement.

[F1] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a continuous vector field that is locally Lipschitz in state has a unique local solution; on a compact cylinder, a bounded field and a state-Lipschitz bound give a common short interval.

[F2] [[thm-gronwall-integral-inequality]]: if a nonnegative continuous error satisfies $u(t)\le c+\int_a^t L u(s)\,ds$ with $c,L\ge0$, then $u(t)\le c e^{L(t-a)}$; the time-reversed version holds for $t\le a$.

## Proof

1.1 If $a=b$, the only time is the prescribed initial time and the solution map is the identity, so the claims hold. Otherwise lift $G$ periodically to $\widetilde G:J\times\mathbb R^d\to\mathbb R^d$ and write $z=(x,v)$ and $B(t,z)=(v,\widetilde G(t,x))$. On every compact time interval and bounded state ball, $B$ is continuous, bounded and Lipschitz in state because $D_xG$ is bounded. Thus [F1] gives unique local solutions. Along any such solution, if $M:=\sup_{I\times\mathbb T^d}|G|$, then $|V(t)-v_0|\le M|t-a|$ and $|X(t)-x_0-(t-a)v_0|\le M|t-a|^2/2$ for lifted positions. Hence a solution on a finite subinterval of $I$ remains in one bounded state cylinder. On a slightly larger cylinder the field has one finite bound and one finite state-Lipschitz constant, so the quantitative [F1] time estimate gives a common positive continuation length for every point of the trajectory. Finitely many such equal-length continuations cover $I$. Uniqueness on overlaps from [F1] gives one solution on all of $I$. [F1, construct, algebra]

1.2 Fix a compact subinterval and a base state $z_0$. The bound on $D_zB$ and [F2] give $|z(t,z_0+h)-z(t,z_0)|\le C|h|$ uniformly in $t$ for small $h$. In the integral equations, set $\Delta_h(t):=z(t,z_0+h)-z(t,z_0)$ and $A_h(t):=\int_0^1D_zB\bigl(t,z(t,z_0)+\theta\Delta_h(t)\bigr)\,d\theta.$ Then $\Delta_h(t)=h+\int_a^t A_h(s)\Delta_h(s)\,ds$. Uniform continuity of $D_zB$ on the compact time interval and torus gives $A_h\to A:=D_zB(t,z(t,z_0))$ uniformly in $t$. The linear integral equation $J(t)=I+\int_a^t A(s)J(s)\,ds$ has a unique solution by the same Picard iteration as [F1]. Subtracting it from the equation for $\Delta_h$, applying [F2], and using $\sup_t\|A_h-A\|\to0$ proves $\sup_t|\Delta_h(t)-J(t)h|/|h|\to0$. Thus $D_{z_0}z(t,z_0)=J(t)$ and it satisfies $\dot J=D_zB(t,z(t,z_0))J$, $J(a)=I$. Since $D_zB$ is bounded uniformly in state, [F2] also gives $\sup_{t\in I,z_0}\|J(t,z_0)\|<\infty$. [F1, F2, construct, algebra]

2.1 For each $r\ge2$, the candidate $r$-th state derivative $J_r$ satisfies the linear variational equation $\dot J_r=D_zB(t,z)J_r+\sum_{\substack{\pi\text{ a partition of }\{1,\ldots,r\}\\|\pi|\ge2}}D_z^{|\pi|}B(t,z)\bigl[J_{|C_1|},\ldots,J_{|C_{|\pi|}|}\bigr],\qquad J_r(a)=0,$ where $C_1,\ldots,C_{|\pi|}$ are the blocks of $\pi$ and $z=z(t,z_0)$. The coefficient and all higher derivatives of $B$ are bounded uniformly in state. By induction, the forcing term is therefore bounded uniformly over initial states; [F2] gives a unique $J_r$ with a uniform finite-time bound. Applying the difference-quotient argument of step 1.2 to the equation for $J_{r-1}$, using uniform continuity of each $D_z^jB$ on the compact time interval and periodic state variable for $j\le r$, shows that this $J_r$ is its derivative. Induction proves smooth dependence and the asserted uniform bounds. Solving the same system backward in time gives the inverse map, and uniqueness makes the two maps inverse. If $B$ is also smooth in time, $\partial_tz=B(t,z)$ and the state-jet equations give every mixed time-state derivative by repeated chain rule. [F1, F2, step 1.2, algebra] ∎

## Remarks
The proof uses no time derivatives of $G$ for smoothness in the initial state. This is the form needed when a force is defined by integration against a narrowly continuous measure curve.
