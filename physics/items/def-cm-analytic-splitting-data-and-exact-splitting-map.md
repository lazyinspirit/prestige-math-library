---
id: def-cm-analytic-splitting-data-and-exact-splitting-map
kind: definition
title: Analytic splitting data with uniform holomorphic neighbourhood, and the exact symmetric splitting map $\Psi_h$
status: published
origin: pipeline
domain: mathematics
dependency_level: 5
deps:
- def-cm-complex-phase-domains-and-holomorphic-maps
- def-cm-splitting-hamiltonian-and-verlet-map
- prop-cm-drift-kick-and-verlet-preserve-the-canonical-form
- def-cm-phase-domain-and-standard-symplectic-two-form
- def-star-shaped-open-subset-of-rn
- def-metric-ball
- def-metric-topology
- thm-heine-borel-rn
- thm-extreme-value-metric
- lem-relative-compact-closed-sets-have-a-positive-distance-gap
justified_by:
- lem-cm-complex-analytic-flow-existence-and-holomorphy
dependency_roles:
  def-cm-complex-phase-domains-and-holomorphic-maps: mathematical-premise
  def-cm-splitting-hamiltonian-and-verlet-map: mathematical-premise
  prop-cm-drift-kick-and-verlet-preserve-the-canonical-form: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  def-star-shaped-open-subset-of-rn: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  lem-relative-compact-closed-sets-have-a-positive-distance-gap: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 3 ''Backward error analysis'', Sections 1-3: the modified differential equation of a splitting method, the modified Hamiltonian for symplectic methods and the star-shaped global existence remark, printed pages 1-7'
    url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
  - title: 'J. Lebl, Tasty Bits of Several Complex Variables, Chapter 1, Sections 1.1-1.2: holomorphic maps, polydiscs and separate holomorphy on complex domains, printed pages 13-27'
    url: https://www.jirka.org/scv/scv.pdf
verification:
  precheck: pass
---

## Definition

Let $d\ge1$. **Analytic splitting data** consists of the following objects.

1. A nonempty open bounded set $U\subseteq\mathbb R^{2d}$, star-shaped with respect to $0$ ([[def-star-shaped-open-subset-of-rn]]), together with a number $\rho>0$ and the **uniform holomorphic neighbourhood** $U_\rho:=D(\rho)=\{\zeta\in\mathbb C^{2d}:\operatorname{dist}(\zeta,\overline U)<\rho\}$ of [[def-cm-complex-phase-domains-and-holomorphic-maps]].
2. Functions $A,B:U\to\mathbb R$ (written additively as the **splitting** $H:=A+B$) that are real analytic on $U$ and admit **holomorphic extensions** $\tilde A,\tilde B:U_\rho\to\mathbb C$ with $\tilde A|_U=A$ and $\tilde B|_U=B$, where holomorphy is the $\mathbb C$-linear total-derivative notion of [[def-cm-complex-phase-domains-and-holomorphic-maps]]. Set $\tilde H:=\tilde A+\tilde B$ on $U_\rho$; then $\tilde H|_U=H$.
3. A constant $M\ge1$ with $\lVert X_{\tilde A}\rVert\le M$ and $\lVert X_{\tilde B}\rVert\le M$ pointwise on $U_\rho$, where $X_F=J\nabla F$ is the complex Hamiltonian field of a holomorphic $F$ and the norm is the Euclidean norm of $\mathbb C^{2d}\cong\mathbb R^{4d}$ ([[def-cm-complex-phase-domains-and-holomorphic-maps]], [[def-cm-phase-domain-and-standard-symplectic-two-form]]).
4. A nonempty compact $K\subseteq U$; then $\delta:=\operatorname{dist}(K,\mathbb R^{2d}\setminus U)>0$ because $K$ is compact, $\mathbb R^{2d}\setminus U$ is closed and nonempty, and the two sets are disjoint ([[thm-heine-borel-rn]], [[def-metric-topology]], [[lem-relative-compact-closed-sets-have-a-positive-distance-gap]]).

For $F\in\{\tilde A,\tilde B\}$ and $Z\in U_\rho$, the complex-flow lemma [[lem-cm-complex-analytic-flow-existence-and-holomorphy]] supplies an open time neighborhood $\Omega_{F,Z}\subseteq\mathbb C$ of $0$ and a uniquely determined holomorphic solution $Y_{F,Z}:\Omega_{F,Z}\to U_\rho$ with $Y_{F,Z}(0)=Z$ and $Y'_{F,Z}(\tau)=X_F(Y_{F,Z}(\tau))$. Write $\varphi_F^t(Z):=Y_{F,Z}(t)$ when $t\in\Omega_{F,Z}$. Any use of a continuation to a larger connected time domain specifies a single-valued solution branch there; the compositions below are defined only where their three local maps or specified continuations can be composed.

The **exact splitting map** at step $h\in\mathbb C$ is the partial map from $U_\rho$ to $U_\rho$ given by

$$\Psi_h:=\varphi_{\tilde A}^{h/2}\circ\varphi_{\tilde B}^{h}\circ\varphi_{\tilde A}^{h/2},$$

defined wherever the composition exists; for $m\in\mathbb N$ its $m$-th iterate is $\Psi_h^m:=\Psi_h\circ\cdots\circ\Psi_h$ ($m$ factors, $\Psi_h^0=\mathrm{id}$).

## Remarks

- Only $\tilde A$ and $\tilde B$ enter $\Psi_h$; the real functions $A,B$ serve to state the hypotheses and conclusions on $U$. On real points of $U$, the restrictions $\tilde A|_U=A$ and $\tilde B|_U=B$ make their coordinate fields real. Whenever the full real-time flow segments stay in $U$, uniqueness identifies the complex local flows on those data with the corresponding real local flows.
- In the mechanical case of [[def-cm-splitting-hamiltonian-and-verlet-map]] ($\tilde A=\tfrac12p^{\mathsf T}M^{-1}p$, $\tilde B=V(q)$), the two flows $\varphi_{\tilde A}^t$ and $\varphi_{\tilde B}^t$, restricted to real points and real times whose entire affine drift or kick segment remains in $U$, are exactly the drift $D_t$ and the kick $K_t$ by [[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]]; hence $\Psi_h=D_{h/2}\circ K_h\circ D_{h/2}$ whenever all three full internal segments remain in $U$. Interchanging the analytic labels $\tilde A,\tilde B$ gives $\Psi_h=V_h=K_{h/2}\circ D_h\circ K_{h/2}$. For each order the segment condition applies to every factor at its own initial state; endpoint inclusion alone does not ensure it on arbitrary $U$. In [[thm-cm-analytic-verlet-energy-on-exponential-times]] a smaller uniform step bound obtained from $K$ and its margin $\delta$ supplies this condition.
- The bound $\lVert X_F\rVert\le M$ on the *complex* neighbourhood $U_\rho$, not merely on $U$, is an essential hypothesis: it is what makes the analytic continuation and the Cauchy estimates on complex domains available. The number $\rho$ and the margin $\delta$ are fixed data; no smallness is required of $\rho$.
