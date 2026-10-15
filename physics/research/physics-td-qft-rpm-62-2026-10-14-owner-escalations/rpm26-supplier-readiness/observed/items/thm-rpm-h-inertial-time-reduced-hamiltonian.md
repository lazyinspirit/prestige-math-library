---
id: thm-rpm-h-inertial-time-reduced-hamiltonian
kind: theorem
title: "Free shell in inertial time has the square-root Hamiltonian"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-cotangent-phase-space, def-sr-affine-minkowski-model, thm-rpm-h-flat-shell-global-reduction, thm-rpm-h-first-order-action-and-geodesics, thm-rpm-h-second-class-dirac-bracket]
dependency_roles:
  thm-rpm-h-second-class-dirac-bracket: mathematical-premise
  def-countable-choice: mathematical-premise
  def-rpm-h-cotangent-phase-space: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  thm-rpm-h-flat-shell-global-reduction: mathematical-premise
  thm-rpm-h-first-order-action-and-geodesics: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, complete lecture notes, §1.2.1"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Printed pp. 11–13, relativistic energy-momentum relation."
    - title: "David Tong, Classical Dynamics, complete Cambridge lecture notes, §§4.1.1–4.1.2"
      url: "https://www.damtp.cam.ac.uk/user/dt281/dynamics/clas.pdf"
      locator: "Printed pp. 82–84, Hamilton equations and reduced Hamiltonian dynamics."
physical_scope: "Flat free particle on the full future shell; inertial time gauge is global here only because P0 is strictly positive."
---

## Statement

In affine Minkowski space with $x^0=ct$, let $m\ge0$, $p_i$ be spatial momentum components and $p_i\ne0$ for $m=0$. On the future shell, $p_0=-E/c$, where

$$E(\mathbf p)=\sqrt{m^2c^4+c^2|\mathbf p|^2}.$$

The gauge $x^0=ct$ reduces the first-order shell action to

$$I=\int\left(p_i\dot q^i-E(\mathbf p)\right)dt,\qquad q^i=x^i.$$

The gauge pair $C_m=0$, $\psi=x^0-ct=0$ is second class because $\{C_m,\psi\}=-P^0\ne0$ on the future shell; its Dirac reduction gives the canonical spatial bracket. The reduced Hamilton equations are $\dot q^i=c^2p_i/E$, $\dot p_i=0$, agreeing with the unreduced characteristic trajectories. On this full flat future shell every characteristic line meets each inertial-time slice once; this global assertion does not extend by this proof to a curved temporal chart.

## Facts & Assumptions

**Given:** The affine Minkowski metric, positive $c$, the free shell first-order formulation, and the future branch.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-rpm-h-cotangent-phase-space]]: canonical one-form is $p_a dx^a$.

[F2] [[def-sr-affine-minkowski-model]]: inertial metric is diag$(-1,1,1,1)$, with $x^0=ct$.

[F3] [[thm-rpm-h-flat-shell-global-reduction]]: the future shell is parameterized by spatial $p_i$ and has $P^0=\sqrt{m^2c^2+|\mathbf p|^2}>0$.

[F4] [[thm-rpm-h-first-order-action-and-geodesics]]: shell action and Hamilton equations follow from independent variation.

[F5] [[thm-rpm-h-second-class-dirac-bracket]]: an invertible constraint bracket matrix gives an embedded symplectic joint level with its Dirac bracket.

## Proof

1.1 The shell equation is $-p_0^2+|\mathbf p|^2=-m^2c^2$. Its future branch has $p_0=-\sqrt{m^2c^2+|\mathbf p|^2}$. Multiplying the positive root by $c$ gives $E=\sqrt{m^2c^4+c^2|\mathbf p|^2}$, so $p_0=-E/c$. [given, A1, F2, F3, algebra]

1.2 On the gauge $x^0=ct$, the canonical term is $p_0c+p_i\dot q^i=-E+p_i\dot q^i$. The constraint term vanishes after solving $C_m=0$, yielding the displayed reduced action. [given, F1, F4, step 1.1]

1.3 Set $\psi=x^0-ct$. From $C_m=\tfrac12(-p_0^2+|\mathbf p|^2+m^2c^2)$, the canonical bracket gives $\{C_m,\psi\}=-p_0=-P^0\ne0$. Thus the matrix for $(C_m,\psi)$ is invertible; [F5] proves the gauge slice is symplectic, and the inverse $2\times2$ matrix gives $\{q^i,p_j\}_D=\delta^i_j$ and zero spatial-spatial and momentum-momentum brackets. [given, A1, F2, F3, F5, step 1.1, algebra]

2.1 Varying the reduced action with fixed spatial endpoints gives Hamilton equations $\dot q^i=\partial E/\partial p_i=c^2p_i/E$ and $\dot p_i=-\partial E/\partial q^i=0$. [given, step 1.2, calculus]

2.2 In the unreduced equations (x'^i=e p_i, x'^0=e(-p_0)=eE/c); hence (dx^i/dt=x'^i/(dt/d\lambda)=c^2p_i/E), while $p_i$ is constant. Because $E/c>0$, $t$ is strictly increasing and every complete affine characteristic line meets each fixed $t$ once, also as established by [F3]. [F3, F4, step 1.1, algebra] ∎
