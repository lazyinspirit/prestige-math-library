---
id: thm-csm-frontier-potts-square-critical-temperature
kind: theorem
title: "Square-lattice Potts critical inverse temperature"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 6
deps:
  - def-csm-frontier-finite-potts-fk
  - def-csm-frontier-fk-real-boundaries
  - def-csm-frontier-fk-infinite-volume-states
  - lem-csm-frontier-fk-free-wired-limits
  - thm-csm-frontier-edwards-sokal
  - thm-csm-frontier-fk-square-critical-point
dependency_roles:
  def-csm-frontier-finite-potts-fk: mathematical-premise
  def-csm-frontier-fk-real-boundaries: mathematical-premise
  def-csm-frontier-fk-infinite-volume-states: mathematical-premise
  lem-csm-frontier-fk-free-wired-limits: mathematical-premise
  thm-csm-frontier-edwards-sokal: mathematical-premise
  thm-csm-frontier-fk-square-critical-point: mathematical-premise
justified_by: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vincent Beffara and Hugo Duminil-Copin, The self-dual point of the two-dimensional random-cluster model is critical for q >= 1"
      url: https://arxiv.org/pdf/1006.5073
      locator: "Theorem 3 and Section 1: finite Potts/FK coupling and the square-lattice critical-temperature formula."
    - title: "Geoffrey Grimmett, The Random-Cluster Model, second edition"
      url: https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf
      locator: "Chapter 1 §§1.2–1.4, finite Potts/FK coupling, and Chapter 6, square-lattice critical point."
verification:
  precheck: pending
---

## Statement

Let $Q\geq2$ be an integer, $J>0$, and $\beta>0$. On $\Lambda_n=[-n,n]^2\cap\mathbb Z^2$, let $B_n=\{x\in\Lambda_n:\lVert x\rVert_\infty=n\}$ and let $E_n$ be the nearest-neighbor edges with both endpoints in $\Lambda_n$. The $Q$-state Potts model has spins $\sigma:\Lambda_n\to\{1,\ldots,Q\}$, fixed plus boundary $\sigma|_{B_n}=1$, and finite-volume Gibbs probabilities proportional to $e^{-\beta H_n(\sigma)}$, where
$$H_n(\sigma)=-J\sum_{\{x,y\}\in E_n}\mathbf1_{\{\sigma_x=\sigma_y\}}.$$
Define its plus-boundary order parameter by
$$m_Q^+(\beta):=\lim_{n\to\infty}\mathbb P_{\beta,n}^+(\sigma_0=1)-Q^{-1},$$
when the limit exists, and define $\beta_c:=\inf\{\beta>0:m_Q^+(\beta)>0\}$. Then the limit exists and
$$\beta_c J=\log(1+\sqrt Q).$$
The assertion is conditional on the FK exact-threshold input in [[thm-csm-frontier-fk-square-critical-point]] and the current finite Potts/FK interfaces identified below.

## Statement references

[[def-csm-frontier-finite-potts-fk]]

[[def-csm-frontier-fk-real-boundaries]]

[[def-csm-frontier-fk-infinite-volume-states]]

[[lem-csm-frontier-fk-free-wired-limits]]

[[thm-csm-frontier-edwards-sokal]]

[[thm-csm-frontier-fk-square-critical-point]]

## Facts & Assumptions

**Given:** Integer $Q\geq2$, coupling $J>0$, inverse temperature $\beta>0$, the finite plus-boundary Potts laws on $(\Lambda_n,E_n)$, and the FK states at $p=1-e^{-\beta J}$.

[F1] On a finite simple graph, the Potts edge weight is $\prod_e(1+v_e\mathbf1_{\{\sigma_x=\sigma_y\}})$ and the FK edge-subset weight is $Q^{k(A)}\prod_{e\in A}v_e$ ([[def-csm-frontier-finite-potts-fk]]).

[F2] For integer $Q\geq2$, the finite Edwards–Sokal joint law has Potts and FK marginals and colors every FK component independently and uniformly when there is no pinned boundary ([[thm-csm-frontier-edwards-sokal]]). The pinned-boundary version used below is derived directly by the same finite summation with all vertices of $B_n$ fixed to color $1$.

[F3] For real $q\geq1$, finite FK weights with a boundary partition use $q^{k_\xi(A)}$ and $p/(1-p)$ is the edge activity ([[def-csm-frontier-fk-real-boundaries]]).

[F4] The wired FK state is the cylinder limit of wired finite-box laws, and restrictions of those finite wired laws stochastically dominate the limit ([[def-csm-frontier-fk-infinite-volume-states]], [[lem-csm-frontier-fk-free-wired-limits]]).

[F5] The wired state has positive percolation probability for every $p>p_c^1(Q)$, and $p_c^1(Q)=\sqrt Q/(1+\sqrt Q)$ ([[thm-csm-frontier-fk-square-critical-point]]); that theorem retains its own unresolved proof inputs.

## Proof

1.1 Put $v=e^{\beta J}-1$ and $p=v/(1+v)=1-e^{-\beta J}$. The normalized free Edwards–Sokal law of [F2], conditioned on the positive-probability event that every boundary spin equals $1$, has the following joint weights on the finite set of spin and edge configurations with $\sigma|_{B_n}=1$:
$$W_n^+(\sigma,A)=\prod_{e\notin A}1\prod_{e\in A}v\mathbf1_{\{\sigma_x=\sigma_y\}}.$$
For fixed $\sigma$, summing over $A\subseteq E_n$ gives $\prod_{e\in E_n}(1+v\mathbf1_{\{\sigma_x=\sigma_y\}})=e^{-\beta H_n(\sigma)}$. For fixed $A$, the constraints force a common color on each component of $(\Lambda_n,A)$; each component meeting $B_n$ must have color $1$, and every other component has $Q$ choices. Thus the edge marginal is proportional to $Q^{k_{\xi_n}(A)}v^{|A|}$, with $\xi_n$ wiring all of $B_n$. Since $v=p/(1-p)$, this normalized edge law is exactly the finite wired FK law. [F1, F3, algebra]

1.2 Conditional on $A$, the same finite count shows that components not meeting $B_n$ receive independent uniform colors, while every component meeting $B_n$ has color $1$. Because $0\notin B_n$, its conditional probability of color $1$ is $1$ if $0$ connects to $B_n$ and $1/Q$ otherwise. Averaging with the wired FK marginal from step 1.1 gives
$$\mathbb P_{\beta,n}^+(\sigma_0=1)=Q^{-1}+(1-Q^{-1})\phi^1_{n,p,Q}(0\leftrightarrow B_n).$$
This is the pinned-boundary extension of the component-color identity in [F2], with its finite counting argument supplied here. [F2, step 1.1, algebra]

2.1 Write $\phi^1_{p,Q}$ for the wired cylinder limit from [F4], and let $\theta^1(p,Q)=\phi^1_{p,Q}(0\leftrightarrow\infty)$. The finite wired law on $\Lambda_n$ stochastically dominates the restriction of $\phi^1_{p,Q}$ to $E_n$, because the wired finite-volume laws decrease under restriction as the volume grows. The event $0\leftrightarrow B_n$ depends only on $E_n$ and contains the event $0\leftrightarrow\infty$ under the infinite-volume law. Therefore
$$\phi^1_{n,p,Q}(0\leftrightarrow B_n)\geq\phi^1_{p,Q}(0\leftrightarrow B_n)\geq\theta^1(p,Q).$$
For a fixed $r<n$, connection to $B_n$ implies connection to the vertex boundary $\partial\Lambda_r$, so
$$\phi^1_{n,p,Q}(0\leftrightarrow B_n)\leq\phi^1_{n,p,Q}(0\leftrightarrow\partial\Lambda_r).$$
The event on the right is a finite-edge cylinder event; as $n\to\infty$ its probability tends to $\phi^1_{p,Q}(0\leftrightarrow\partial\Lambda_r)$. These boundary-connection events decrease as $r$ increases and their intersection is the event that the origin cluster is unbounded, which in the locally finite square lattice is $0\leftrightarrow\infty$. Hence the limit of the finite boundary-connection probabilities is $\theta^1(p,Q)$. [F4, step 1.1, algebra]

2.2 Steps 1.2 and 2.1 show that the defining limit exists and
$$m_Q^+(\beta)=(1-Q^{-1})\theta^1(1-e^{-\beta J},Q).$$
The prefactor is positive, and $\beta\mapsto1-e^{-\beta J}$ is strictly increasing from $0$ to $1$. Thus the infimum where $m_Q^+(\beta)>0$ is the inverse image of $p_c^1(Q)$ under this map. [F5, step 1.2, step 2.1, algebra]

3.1 By [F5], $p_c^1(Q)=\sqrt Q/(1+\sqrt Q)$. Solving $1-e^{-\beta_cJ}=p_c^1(Q)$ gives $e^{-\beta_cJ}=1/(1+\sqrt Q)$ and therefore $\beta_cJ=\log(1+\sqrt Q)$. This is a conditional deduction from the FK threshold and finite coupling interfaces; no empirical premise is involved. [F5, step 2.2, algebra] ∎

## Remarks

The finite plus-boundary Edwards–Sokal extension is proved by the displayed finite joint weight, rather than inferred from the no-boundary statement alone. Readiness remains escalated because the current batch-90 finite FK and Edwards–Sokal items have no current Step-1 readiness records, and the FK critical-point supplier carries its own unresolved proof inputs.
