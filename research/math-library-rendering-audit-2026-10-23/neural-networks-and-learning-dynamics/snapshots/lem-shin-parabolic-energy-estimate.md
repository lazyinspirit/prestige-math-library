---
id: lem-shin-parabolic-energy-estimate
kind: lemma
title: "Parabolic L2 energy estimate with zero initial-lateral trace"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-shin-parabolic-operator-and-boundary
  - def-wkp-zero-as-a-sobolev-closure
  - def-countable-choice
  - lem-shin-bounded-open-set-hilbert-evolution-triple
  - lem-parabolic-energy-pairing-and-trace
  - def-parabolic-evolution-triple-and-energy-space
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Appendix G, parabolic energy argument"
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§6.2, energy estimate for general second-order parabolic PDEs"
---

## Statement

Assume Countable Choice. Let $U\subset\mathbb R^d$ be bounded and open, $T>0$, $Q=U\times(0,T)$, and let
$$L_t[e]=\sum_{i,j=1}^dD_i(a_{ij}D_j e)+\sum_{i=1}^dD_i(b_i e)+\sum_i c_iD_i e+d e$$
with $a_{ij}=a_{ji}$, $a(x,t)\ge\lambda_0 I$ for some $\lambda_0>0$, and real measurable $a,b,c,d$ bounded with the spatial derivatives needed for the displayed divergence form. Let $V=H^1_0(U)$, $H=L^2(U)$, and let $e\in L^2(0,T;V)$ have weak derivative $e_t\in L^2(0,T;V^*)$ and satisfy $-e_t+L_t[e]=r\in L^2(U\times(0,T))$ weakly. Use its continuous $H$ representative for the initial datum $e(0)$ and endpoint norms. The source application has $e(0)=0$. Then there is $C_E<\infty$, depending only on $T$, $\lambda_0$, and the coefficient bounds, such that
$$\sup_{0\le t\le T}\|e(t)\|_{L^2(U)}^2+\int_0^T\|\nabla e(t)\|_{L^2(U)}^2\,dt\le C_E\left(\|e(0)\|_{L^2(U)}^2+\|r\|_{L^2(Q)}^2\right).$$
The spatial zero trace is the stated $V$ membership almost everywhere in time. In particular, the estimate applies to locally classical continuous errors once their energy-space membership and weak equation have been established; no closed-cylinder derivatives are required.

## Statement references
[Shin et al., Appendix G: energy estimate for the parabolic error](https://arxiv.org/pdf/2004.01806)

[Hunter, §6.2: general variable-coefficient parabolic energy method](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf)

[Shin et al., Appendix G: source energy argument reconstructed with explicit boundary flux and lower-order bounds](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The coefficient bounds, uniform ellipticity, zero spatial trace, initial $L^2$ trace, and the variational solution $e$ of the inhomogeneous error equation.

[A1] Countable Choice is assumed by the zero-boundary Sobolev closure convention used for each spatial slice ([[def-countable-choice]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F1] On the real evolution triple the energy identity gives $\langle e_t,e\rangle=\tfrac12\frac{d}{dt}\|e(t)\|_{L^2(U)}^2$ almost everywhere, and the squared norm is absolutely continuous; it is proved by Bochner time mollification ([[lem-parabolic-energy-pairing-and-trace]], [[def-parabolic-evolution-triple-and-energy-space]]). The required triple on every bounded open set is supplied by [[lem-shin-bounded-open-set-hilbert-evolution-triple]].

[F2] The principal matrix satisfies $\int_U a_{ij}D_j eD_i e\,dx\ge\lambda_0\|\nabla e\|_{L^2(U)}^2$ by its pointwise ellipticity hypothesis.

[F3] The parabolic convention has initial and lateral boundary data on $\Gamma_T$ ([[def-shin-parabolic-operator-and-boundary]]).

[F4] $H^1_0(U)$ is the $H^1$-closure of $C_c^\infty(U)$ ([[def-wkp-zero-as-a-sobolev-closure]]).

## Proof

**Proof strategy:** multiply by the error, integrate by parts, absorb lower-order terms, and apply Gronwall's inequality.

1.1 For almost every $t$, by [F4], approximate $e(\cdot,t)$ in $H^1(U)$ by compactly supported smooth functions. For each approximant the distributional definition of the divergence terms gives the spatial integration-by-parts identity; the coefficient bounds make every pairing continuous in $H^1$, so passing to the limit produces no boundary term because $e(\cdot,t)\in H^1_0(U)$. Pair the weak equation $-e_t+L_t[e]=r$ against $e$ in $V^*,V$ and use [F1] and [F2]. Moving the time derivative to the left gives $$\tfrac12 E'(t)+\lambda_0\|\nabla e(t)\|_2^2\le (\|b\|_\infty+\|c\|_\infty)\|e(t)\|_2\|\nabla e(t)\|_2+\|d\|_\infty E(t)+\|r(t)\|_2\|e(t)\|_2,$$ where $E(t)=\|e(t)\|_2^2$. [given, A1, F1, F2, F3, F4, algebra]

2.1 By Young's inequality, the first product on the right is at most $\frac{\lambda_0}{4}\|\nabla e\|_2^2+C_1E(t)$ and the last product is at most $\frac12\|r(t)\|_2^2+\frac12E(t)$, for a finite $C_1$ depending only on the coefficient bounds and $\lambda_0$. Hence for $C_2=C_1+\|d\|_\infty+\frac12$, $$E'(t)+\lambda_0\|\nabla e(t)\|_2^2\le 2C_2E(t)+\|r(t)\|_2^2.$$ [step 1.1, algebra]

3.1 Dropping the nonnegative gradient term in step 2.1 and multiplying by $e^{-2C_2t}$ gives $\frac{d}{dt}(e^{-2C_2t}E(t))\le e^{-2C_2t}\|r(t)\|_2^2$. Integrating from $0$ to any $s\le T$ yields $$\sup_{0\le s\le T}E(s)\le e^{2C_2T}\left(E(0)+\|r\|_{L^2(Q)}^2\right).$$ [step 2.1, algebra]

4.1 Integrating step 2.1 from $0$ to $T$ and using step 3.1 gives $$\lambda_0\int_0^T\|\nabla e(t)\|_2^2dt\le E(0)+2C_2T\sup_{0\le t\le T}E(t)+\|r\|_{L^2(Q)}^2.$$ Combining this with step 3.1 and dividing by $\lambda_0>0$ proves the stated estimate after increasing the constant. [step 2.1, step 3.1, algebra] ∎

