---
id: thm-cm-verlet-finite-time-error-is-quadratic
kind: theorem
title: 'Finite-time global error of the velocity-Verlet method: $\lVert
  z_n-\Phi_{nh}(z_0)\rVert\le C(e^{LT}-1)h^2/L$'
status: published
origin: pipeline
domain: mathematics
dependency_level: 5
deps:
  - lem-cm-verlet-local-truncation-error-is-cubic
  - prop-cm-drift-kick-and-verlet-preserve-the-canonical-form
  - def-cm-splitting-hamiltonian-and-verlet-map
  - def-cm-local-flow-of-an-autonomous-system
  - thm-chain-rule-for-total-derivatives
  - def-jacobian-matrix-and-gradient
  - def-matrix-product-and-identity-matrix
  - def-metric-ball
  - def-metric-topology
  - def-ck-euclidean-maps-and-diffeomorphisms
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - thm-derivative-of-exponential
  - thm-ftc-second-part
  - lem-cm-local-flow-composition-law
dependency_roles:
  lem-cm-verlet-local-truncation-error-is-cubic: mathematical-premise
  prop-cm-drift-kick-and-verlet-preserve-the-canonical-form: mathematical-premise
  def-cm-splitting-hamiltonian-and-verlet-map: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  lem-cm-local-flow-composition-law: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 2
        ''Symplectic integrators'', Sections 1-2 and 4: order of a one-step
        method and composition of consistent methods, printed pages 1-9'
      url: https://www.unige.ch/~hairer/poly_geoint/week2.pdf
    - title: 'A. Quillen, PHY411 Lecture notes Part 7 ''Integrators'' (University of
        Rochester), Sections 1.1-1.2: local versus global error accumulation for
        one-step methods, printed pages 2-7'
      url: https://astro.pas.rochester.edu/~aquillen/phy411/lecture7.pdf
verification:
  precheck: pass
---

## Statement

Use the data, finite field and derivative bounds, and constants $h_1,C_1$ of [[lem-cm-verlet-local-truncation-error-is-cubic]] on an open bounded convex tube $W$, with compact $K_1$ and positive tube margin. Let $T>0$, $0<|h|\le h_1$, and $n\in\mathbb N$ satisfy $n|h|\le T$. Suppose $z_j=V_h^j(z_0)$ and $y_j=\Phi_{jh}(z_0)$ both lie in $K_1$ for $0\le j\le n$. With $L=L_1=\sup_W\|DX_H\|$, the following holds:

$$\|z_n-y_n\|\le C_1h^2\frac{e^{LT}-1}{L}\quad(L>0),\qquad \|z_n-y_n\|\le C_1Th^2\quad(L=0).$$

The constants are independent of $n,h,T$, with the displayed data fixed.

## Facts & Assumptions

**Given:** The stated data, including finite bounds on the convex tube and retention of both sequences in $K_1$.

[F1] [[lem-cm-verlet-local-truncation-error-is-cubic]] supplies existence of the short exact trajectories from each point of $K_1$ in $W$, and $\|V_h(z)-\Phi_h(z)\|\le C_1|h|^3$.

[F2] On the convex $W$, the derivative bound and the chain rule give $\|X_H(x)-X_H(y)\|\le L\|x-y\|$; the exact flow obeys its integral equation ([[def-cm-local-flow-of-an-autonomous-system]], [[thm-ftc-second-part]]).

[F3] Exponential integration and monotonicity follow from [[thm-derivative-of-exponential]] and [[thm-exponential-is-strictly-increasing]].

[F4] The field $X_H=(M^{-1}p,-\nabla V(q))$ is $C^1$ on its phase domain and hence locally Lipschitz. Clause 2 of [[lem-cm-local-flow-composition-law]] applies to its unique maximal autonomous solutions: if $\Phi_s(z)$ and $\Phi_h(\Phi_s(z))$ are defined, then $\Phi_{s+h}(z)=\Phi_h(\Phi_s(z))$, for signed real times as well.

## Proof

1.1 Exact-flow stability. Write $a=|h|$. For short trajectories starting at $x,y\in K_1$, their distance $u(t)$, with time oriented by the sign of $h$, satisfies $u(t)\le u(0)+L\int_0^tu(s)ds$ on $0\le t\le a$ by [F2]. If $v(t)=u(0)+L\int_0^tu(s)ds$, then $v'\le Lv$; differentiation of $e^{-Lt}v(t)$ proves $v(t)\le e^{Lt}u(0)$. Thus $\|\Phi_h(x)-\Phi_h(y)\|\le e^{La}\|x-y\|$. [given, F1, F2, F3, algebra]

2.1 Recurrence. Set $e_j=\|z_j-y_j\|$. For $j<n$, the datum $y_j=\Phi_{jh}(z_0)$ lies in $K_1$, so [F1] supplies $\Phi_h(y_j)$; [F4] with $s=jh$ gives $\Phi_h(y_j)=\Phi_{(j+1)h}(z_0)=y_{j+1}$. Thus by [F1], $e_{j+1}\le\|V_h(z_j)-\Phi_h(z_j)\|+\|\Phi_h(z_j)-\Phi_h(y_j)\|\le C_1a^3+e^{La}e_j$. Since $e_0=0$, induction gives $e_n\le C_1a^3\sum_{k=0}^{n-1}e^{Lak}$. [given, F1, F4, step 1.1, algebra]

3.1 Evaluation. For $L>0$ the sum is $(e^{Lna}-1)/(e^{La}-1)$, and $e^{La}-1\ge La$, obtained by integrating $Le^{Lt}\ge L$ on $[0,a]$. Hence $e_n\le C_1a^2(e^{LT}-1)/L$. For $L=0$ the sum equals $n$ and $na\le T$ gives $e_n\le C_1Ta^2$. [step 2.1, F3, algebra] ∎

## Remarks

This is a conditional finite-time trajectory estimate. Retention in the compact tube is assumed. The analytic energy theorem does not give exponential-time accuracy of the original trajectory. Negative steps obey the same bound with elapsed time $n|h|$.
