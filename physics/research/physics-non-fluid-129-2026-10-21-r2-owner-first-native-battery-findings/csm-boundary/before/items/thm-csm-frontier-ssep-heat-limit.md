---
id: thm-csm-frontier-ssep-heat-limit
kind: theorem
title: "Diffusive heat limit for symmetric exclusion"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-csm-frontier-ssep-diffusive-model
  - lem-csm-frontier-finite-doob-bound
  - lem-csm-frontier-ssep-bracket
  - lem-csm-frontier-ssep-heat-flow
  - lem-csm-frontier-ssep-time-dependent-martingale
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-csm-frontier-ssep-diffusive-model: mathematical-premise
  lem-csm-frontier-finite-doob-bound: mathematical-premise
  lem-csm-frontier-ssep-bracket: mathematical-premise
  lem-csm-frontier-ssep-heat-flow: mathematical-premise
  lem-csm-frontier-ssep-time-dependent-martingale: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: null
sources:
  references:
    - title: "S. R. S. Varadhan, Hydrodynamic Scaling, Chapter 4 lecture notes"
      url: "https://math.nyu.edu/~varadhan/Spring2012/Chapter4.pdf"
      locator: "Section 4.3, Theorem 4.3.1 and proof, printed pp. 53–56: SSEP empirical-field hydrodynamic limit."
    - title: "Claudio Landim, Hydrodynamic Limit of Interacting Particle Systems, complete lecture notes"
      url: "https://math.arizona.edu/~sethuram/588/Landim.pdf"
      locator: "Chapter 2, Theorems 2.4–2.5, printed pp. 80–83: SSEP heat-equation limit, initial empirical-profile condition, and fixed-time convergence in probability."
    - title: "Lorenzo Bertini, Alberto De Sole, Davide Gabrielli, Giovanni Jona-Lasinio and Claudio Landim, Macroscopic fluctuation theory"
      url: "https://arxiv.org/pdf/1404.6466"
      locator: "Sections II.1 and V.4: diffusive model conventions and separately scoped boundary-driven SSEP transport coefficients."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Fix $d\ge1$, $T\ge0$, and for each integer $N\ge3$ let $(\eta_t^N)_{0\le t\le T}$ be the SSEP on $\Lambda_N=(\mathbb Z/N\mathbb Z)^d$ with rate $N^2$ on each unordered nearest-neighbor bond, started from any initial probability vector on a probability space $(\Xi_N,\mathcal A_N,\mathbb P_N)$. Write $\pi_t^N=N^{-d}\sum_{x\in\Lambda_N}\eta_x^N(t)\delta_{x/N}$ for its empirical measure. Suppose a measurable $\rho_0:\mathbb T^d\to[0,1]$ satisfies, for every real-valued smooth periodic $G$ and every $\epsilon>0$,

$$\mathbb P_N\!\left(\left|\langle\pi_0^N,G\rangle-\int_{\mathbb T^d}\rho_0(x)G(x)\,dx\right|>\epsilon\right)\longrightarrow0\qquad(N\to\infty),$$

where the probability spaces may depend on $N$. Let $\rho_t$ be the unique weak heat solution on $\mathbb T^d$ with initial datum $\rho_0$, defined by the Fourier heat profile. Then for every real-valued smooth periodic $G$ and every $\epsilon>0$,

$$\mathbb P_N\!\left(\sup_{0\le t\le T}\left|\langle\pi_t^N,G\rangle-\int_{\mathbb T^d}\rho_t(x)G(x)\,dx\right|>\epsilon\right)\longrightarrow0\qquad(N\to\infty).$$

## Statement references

[[def-csm-frontier-ssep-diffusive-model]]

[[def-csm-frontier-ssep-weak-heat-solution]]

[[lem-csm-frontier-ssep-heat-flow]]

[[lem-csm-frontier-ssep-bracket]]

[[lem-csm-frontier-ssep-time-dependent-martingale]]

[[lem-csm-frontier-finite-doob-bound]]

## Facts & Assumptions

**Given:** The Axiom of Choice; a fixed $d\ge1$ and finite $T\ge0$; for each $N\ge3$ an SSEP process with arbitrary initial law; a measurable density $\rho_0$ with $0\le\rho_0\le1$; and convergence in probability of the initial empirical measures against every real-valued smooth periodic test.

[A1] Assume the Axiom of Choice, meaning every family of nonempty sets has a choice function. The finite-chain realization, martingale bracket, and finite-horizon Doob suppliers below carry this assumption ([[def-axiom-of-choice]]).

[F1] [[def-csm-frontier-ssep-diffusive-model]]: $\mathbb T^d=(\mathbb R/\mathbb Z)^d$ has normalized product Haar measure; bonds are unordered, each allowed swap has rate $N^2$, $\pi_t^N$ is a finite positive measure of total mass at most $1$, and $\Delta_N$ is the displayed second-difference operator.

[F2] [[lem-csm-frontier-ssep-heat-flow]]: $\rho_t$ is the unique weak heat solution, $\int\rho_tG=\int\rho_0P_tG$, $P_tG$ is smooth, $\partial_tP_tG=\Delta P_tG$, and $0\le\rho_t\le1$ with conserved mass.

[F3] [[lem-csm-frontier-ssep-time-dependent-martingale]]: for smooth $H_s$, the empirical-field martingale with drift $\partial_sH_s+\Delta_NH_s$ has bracket bounded by $T N^{-d}\sum_i\sup_s\|\partial_iH_s\|_\infty^2$.

[F4] [[lem-csm-frontier-ssep-bracket]]: for fixed smooth $G$, $\langle\pi_t^N,G\rangle-\langle\pi_0^N,G\rangle-\int_0^t\langle\pi_s^N,\Delta_NG\rangle ds$ is a square-integrable martingale whose bracket is bounded by $tN^{-d}\sum_i\|\partial_iG\|_\infty^2$.

[F5] [[lem-csm-frontier-finite-doob-bound]]: a square-integrable càdlàg martingale $M$ with $M_0=0$ satisfies $\mathbb E[\sup_{0\le t\le T}|M_t|^2]\le4\mathbb E|M_T|^2$.

## Proof

1.1 Fix $t\in[0,T]$ and a smooth $G$. Put $H_s=P_{t-s}G$ for $0\le s\le t$, and denote by $M_s^{N,t}$ the martingale from [F3] formed with this test function. By [F2], $\partial_sH_s=-\Delta H_s$. The time-dependent martingale identity at its terminal time gives $\langle\pi_t^N,G\rangle=\langle\pi_0^N,P_tG\rangle+M_t^{N,t}+\int_0^t\langle\pi_s^N,(\Delta_N-\Delta)P_{t-s}G\rangle\,ds$, and $M^{N,t}$ starts at zero with terminal second moment equal to the expected bracket. [A1, F1, F2, F3, algebra]

2.1 The fourth spatial derivatives of $P_{t-s}G$ are uniformly bounded for $0\le s\le t$ by [F2]. Taylor's formula for each symmetric second difference therefore gives $\sup_{s,x}|(\Delta_N-\Delta)P_{t-s}G(x)|\le C_{G,T}N^{-2}$. Since $\pi_s^N(\mathbb T^d)\le1$, the drift-error integral in step 1.1 is at most $tC_{G,T}N^{-2}$. By [F3], $\mathbb E_N|M_t^{N,t}|^2\le C'_{G,T}N^{-d}$, so Chebyshev's inequality makes that martingale term tend to zero in probability. The initial assumption applies to the smooth test $P_tG$, and [F2] gives $\int\rho_0P_tG=\int\rho_tG$. Thus for each fixed $t$, $\langle\pi_t^N,G\rangle\to\int\rho_tG$ in probability. [F1, F2, F3, step 1.1, algebra]

3.1 If $T=0$, the conclusion is the initial-profile assumption. Suppose $T>0$ and fix a finite time mesh $0=t_0<\cdots<t_m=T$. Step 2.1 and a finite union bound imply $\max_j|\langle\pi_{t_j}^N,G\rangle-\int\rho_{t_j}G|\to0$ in probability. [step 2.1, construct]

4.1 By the fundamental theorem of calculus applied twice to each centered second difference, $\|\Delta_NG\|_\infty\le K_G:=\sum_i\|\partial_{ii}G\|_\infty$ for all $N$. The fixed-test martingale in [F4] gives $|\langle\pi_t^N,G\rangle-\langle\pi_s^N,G\rangle|\le K_G|t-s|+2\sup_{0\le u\le T}|M_u^{N,G}|$ for all $s,t\in[0,T]$. By [F4], $\mathbb E|M_T^{N,G}|^2\le T N^{-d}\sum_i\|\partial_iG\|_\infty^2$; [F5] therefore implies $\sup_{u\le T}|M_u^{N,G}|\to0$ in probability. Also [F2] and the mass bound $\int\rho_t\le1$ show $t\mapsto\int\rho_tG$ is Lipschitz with constant $\|\Delta G\|_\infty$. Given $\delta>0$, choose a finite mesh with spacing at most $\delta$; the supremum error is bounded by the maximum mesh error from step 3.1, $2\sup|M^{N,G}|$, and $(K_G+\|\Delta G\|_\infty)\delta$. First let $N\to\infty$ and then $\delta\downarrow0$. This proves the stated uniform-in-time convergence in probability. [A1, F2, F4, F5, step 3.1, algebra] ∎

## Remarks

The result is a mathematical deduction from the adopted finite stochastic model; it reports no measured diffusion and derives no Navier–Stokes equation from Newtonian mechanics. If one assigns a microscopic bond rate $1/\tau_0$ before the $N^2$ time acceleration and a physical lattice spacing $\ell_0/N$, then the accelerated rate is $N^2/\tau_0$ and the single-particle variance rate in each coordinate is $2(N^2/\tau_0)(\ell_0/N)^2=2\ell_0^2/\tau_0$. Thus the normalized coefficient $D=1$ corresponds to $D=\ell_0^2/\tau_0$ with physical units of length squared per time; this is a unit conversion for this chosen model.
