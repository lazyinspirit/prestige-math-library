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
  - thm-csm-frontier-edwards-sokal
  - lem-csm-frontier-fk-wired-annuli-and-numerical-threshold
dependency_roles:
  def-csm-frontier-finite-potts-fk: mathematical-premise
  def-csm-frontier-fk-real-boundaries: mathematical-premise
  thm-csm-frontier-edwards-sokal: mathematical-premise
  lem-csm-frontier-fk-wired-annuli-and-numerical-threshold: mathematical-premise
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
  precheck: pass
---

## Statement

Let $Q\geq2$ be an integer, $J>0$, and $\beta>0$. On $\Lambda_n=[-n,n]^2\cap\mathbb Z^2$, let $B_n=\{x\in\Lambda_n:\lVert x\rVert_\infty=n\}$ and let $E_n$ be the nearest-neighbor edges with both endpoints in $\Lambda_n$. The $Q$-state Potts model has spins $\sigma:\Lambda_n\to\{1,\ldots,Q\}$, fixed plus boundary $\sigma|_{B_n}=1$, and finite-volume Gibbs probabilities proportional to $e^{-\beta H_n(\sigma)}$, where
$$H_n(\sigma)=-J\sum_{\{x,y\}\in E_n}\mathbf1_{\{\sigma_x=\sigma_y\}}.$$
Define its plus-boundary order parameter by
$$m_Q^+(\beta):=\lim_{n\to\infty}\mathbb P_{\beta,n}^+(\sigma_0=1)-Q^{-1},$$
when the limit exists, and define $\beta_c:=\inf\{\beta>0:m_Q^+(\beta)>0\}$. Then the limit exists and
$$\beta_c J=\log(1+\sqrt Q).$$
This is a numerical limit of finite-volume probabilities; no infinite-volume probability-law extension is required.

## Statement references

[[def-csm-frontier-finite-potts-fk]]

[[def-csm-frontier-fk-real-boundaries]]

[[thm-csm-frontier-edwards-sokal]]

[[lem-csm-frontier-fk-wired-annuli-and-numerical-threshold]]

## Facts & Assumptions

**Given:** Integer $Q\geq2$, coupling $J>0$, inverse temperature $\beta>0$, the finite plus-boundary Potts laws on $(\Lambda_n,E_n)$, and the finite wired FK laws at $p=1-e^{-\beta J}$.

[F1] On a finite simple graph, the Potts edge weight is $\prod_e(1+v_e\mathbf1_{\{\sigma_x=\sigma_y\}})$ and the FK edge-subset weight is $Q^{k(A)}\prod_{e\in A}v_e$ ([[def-csm-frontier-finite-potts-fk]]).

[F2] For integer $Q\geq2$, the finite Edwards–Sokal joint law has Potts and FK marginals and colors every FK component independently and uniformly when there is no pinned boundary ([[thm-csm-frontier-edwards-sokal]]). The pinned-boundary version used below is derived directly by the same finite summation with all vertices of $B_n$ fixed to color $1$.

[F3] For real $q\geq1$, finite FK weights with a boundary partition use $q^{k_\xi(A)}$ and $p/(1-p)$ is the edge activity ([[def-csm-frontier-fk-real-boundaries]]).

[F4] If $a_n(p,Q)$ is the finite wired probability of $0\leftrightarrow B_n$, its numerical limit $L(p,Q)$ exists, is positive for $p>\sqrt Q/(1+\sqrt Q)$, and is zero for $p<\sqrt Q/(1+\sqrt Q)$ ([[lem-csm-frontier-fk-wired-annuli-and-numerical-threshold]]).

## Proof

1.1 Put $v=e^{\beta J}-1$ and $p=v/(1+v)=1-e^{-\beta J}$. On the finite spin-edge configurations with $\sigma|_{B_n}=1$, define the joint weight
$$W_n^+(\sigma,A)=v^{|A|}\prod_{\{x,y\}\in A}\mathbf1_{\{\sigma_x=\sigma_y\}}.$$
For fixed $\sigma$, summing over $A\subseteq E_n$ gives $\prod_{e\in E_n}(1+v\mathbf1_{\{\sigma_x=\sigma_y\}})=e^{-\beta H_n(\sigma)}$. For fixed $A$, every component meeting $B_n$ has color $1$ and each remaining component has $Q$ choices. After wiring all of $B_n$ into one class, the number of unpinned components is $k_{\xi_n}(A)-1$. Thus the edge marginal has weight $Q^{k_{\xi_n}(A)-1}v^{|A|}$, proportional by the configuration-independent factor $Q^{-1}$ to the wired FK weight in [F3]. Normalization therefore gives exactly the finite wired FK law. This supplies the pinned version of [F2] by an explicit finite sum. [F1, F2, F3, given, algebra]

2.1 Conditional on $A$, the origin has color $1$ with probability one if it connects to $B_n$, and with probability $1/Q$ otherwise. Indeed every unpinned component has its independent uniform color by the finite count of step 1.1. Consequently
$$\mathbb P_{\beta,n}^+(\sigma_0=1)=Q^{-1}+(1-Q^{-1})a_n(p,Q).$$
By [F4] the right side has a numerical limit. Hence $m_Q^+(\beta)=(1-Q^{-1})L(1-e^{-\beta J},Q)$. [F4, step 1.1, algebra]

3.1 The map $\beta\mapsto1-e^{-\beta J}$ is strictly increasing from $0$ to $1$. By [F4] and the positive prefactor in step 2.1, $m_Q^+(\beta)$ is zero below the unique parameter solving $1-e^{-\beta J}=\sqrt Q/(1+\sqrt Q)$ and positive above it. Its defining positive-set infimum is therefore that parameter, regardless of its value at the critical point. Solving gives $e^{-\beta_cJ}=1/(1+\sqrt Q)$ and $\beta_cJ=\log(1+\sqrt Q)$. [F4, step 2.1, algebra] ∎

## Remarks

The pinned-boundary component count is $Q^{k_{\xi_n}(A)-1}$; its constant factor relative to the wired FK weight cancels on normalization. The order parameter is defined by finite-volume probabilities and its limit is established numerically, so this deduction does not use a choice-dependent infinite-volume measure extension. The coupling $J$ is the Potts indicator-interaction coupling displayed in the statement.

