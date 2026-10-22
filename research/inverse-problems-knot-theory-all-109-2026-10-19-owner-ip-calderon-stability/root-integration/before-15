---
id: thm-ip-calderon-logarithmic-l2-stability
kind: theorem
title: Logarithmic L2 stability for Calderón conductivity classes
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-ip-calderon-admissible-conductivity-class
  - def-ip-calderon-weak-dn-map-for-bounded-conductivities
  - lem-ip-calderon-boundary-trace-quotient-identification
  - lem-ip-calderon-higher-dimensional-cgo-fourier-logarithmic-stability
  - lem-ip-calderon-planar-beltrami-dbar-logarithmic-stability
  - lem-ip-calderon-rough-dn-map-wellposedness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Theorem 3.2, equations (3.2)–(3.3), and its full proof in Section 3.1, printed pp. 13–14."
    - title: "Daniel Faraco and Martí Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Theorem 1.6 and Theorem 3.5 proof, printed pp. 1–2 and 41–43."
    - title: "Pedro Caro, Andoni García and Juan Manuel Reyes, Stability of the Calderón problem for less regular conductivities"
      url: "https://arxiv.org/pdf/1205.2487"
      locator: "Theorem 1.1 and its proof in Section 4, printed pp. 2 and 15–19."
---

## Statement

Assume the Axiom of Choice and Countable Choice. For each fixed integer $d\ge2$, let $\Omega\subset(0,1)^d$ be a nonempty bounded connected smooth domain, let $\Omega'\Subset\Omega$, fix $m>0$, $M\ge\max\{1,m\}$, $R>0$ and $0<\alpha<1$, and let $\gamma,\gamma_0\in X_d(R)$. Set
$$\delta:=\|\dot{\Lambda}_\gamma-\dot{\Lambda}_{\gamma_0}\|_{\mathcal L(\mathcal D(\Omega)/\mathbb C\mathbf1,(\mathcal D(\Omega)/\mathbb C\mathbf1)^*)}.$$
There exist constants $C>0$, $\rho>0$ and $t_0\in(0,1)$, depending only on $d,\alpha,\Omega,\Omega',m,M,R$, such that
$$\|\gamma-\gamma_0\|_{L^2(\Omega)}\le C\,\omega(\delta),\qquad \omega(0):=0,\qquad \omega(t):=\left[\log\!\left(\frac1{\min\{t,t_0\}}\right)\right]^{-\rho}\quad(t>0).$$
Here $X_d(R)$ is the BV class when $d=2$ and the bounded $C^{1,\alpha}$ class when $d\ge3$, and $\dot\Lambda_\gamma$ is the induced weak conductivity Dirichlet-to-Neumann map on the trace quotient by constants.

## Statement references

[[def-ip-calderon-admissible-conductivity-class|The explicit conductivity class and dimension split.]]

[[def-ip-calderon-weak-dn-map-for-bounded-conductivities|The weak DN map, trace quotient and operator norm convention.]]

[[lem-ip-calderon-planar-beltrami-dbar-logarithmic-stability|The planar BV stability branch.]]

[[lem-ip-calderon-higher-dimensional-cgo-fourier-logarithmic-stability|The higher-dimensional C1alpha stability branch.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; a fixed $d\ge2$ and the domain and parameters in the statement; $\gamma,\gamma_0\in X_d(R)$; and $\delta$ as defined there.

[F1] $X_2(R)$ is the real conductivity class with $m\le\gamma\le M$, background value $1$ outside $\Omega'$, and the stated BV norm bound; for $d\ge3$, $X_d(R)$ has the stated $C^{1,\alpha}$ bound. ([[def-ip-calderon-admissible-conductivity-class]])

[F2] $\Lambda_\gamma$ is the weak energy-form DN map, is well-defined and bounded on the trace quotient, kills constants and has range functionals annihilating constants; $\dot\Lambda_\gamma$ is its induced bounded map on the constant quotient. ([[def-ip-calderon-weak-dn-map-for-bounded-conductivities]], [[lem-ip-calderon-rough-dn-map-wellposedness]], [[lem-ip-calderon-boundary-trace-quotient-identification]])

[L1] In dimension $2$, every pair in $X_2(R)$ satisfies an $L^2$ logarithmic stability bound with positive exponent and a positive threshold, including the zero-data case. ([[lem-ip-calderon-planar-beltrami-dbar-logarithmic-stability]])

[L2] In dimensions $d\ge3$, every pair in $X_d(R)$ satisfies an $L^2$ logarithmic stability bound with positive exponent and a positive threshold, including the zero-data case. ([[lem-ip-calderon-higher-dimensional-cgo-fourier-logarithmic-stability]])

## Proof

**Given:** The data in the statement and Facts & Assumptions [F1]–[L2].

1.1 If $d=2$, apply [L1] and write its constants as $C_2,\rho_2,t_2$. If $d\ge3$, apply [L2] and write its constants as $C_d,\rho_d,t_d$. In either case, for the fixed dimension there are $C_*>0$, $\rho_*>0$, and $t_*>0$ such that $\|\gamma-\gamma_0\|_2\le C_*[\log(1/\min\{\delta,t_*\})]^{-\rho_*}$ when $\delta>0$, and equality of the DN maps implies $\gamma=\gamma_0$. [F1, F2, L1, L2, given, cases]

2.1 Set $\rho:=\rho_*$ and $t_0:=\min\{t_*,1/2\}$. If $0<\delta<t_0$, then $\min\{\delta,t_0\}=\delta$ and $\min\{\delta,t_*\}=\delta$, so step 1.1 is exactly the asserted estimate with constant $C_*$. If $\delta=0$, step 1.1 gives $\gamma=\gamma_0$, so the estimate holds with $\omega(0)=0$. [step 1.1, given, algebra]

3.1 If $\delta\ge t_0$, [F1] gives $\|\gamma-\gamma_0\|_2\le2M|\Omega|^{1/2}$, while $\omega(\delta)=[\log(1/t_0)]^{-\rho}>0$. Choose $C\ge\max\{C_*,2M|\Omega|^{1/2}[\log(1/t_0)]^{\rho}\}$. Then the desired inequality follows for $\delta\ge t_0$ by this uniform coefficient bound and for $\delta<t_0$ by step 2.1. The constants have only the listed class and geometry dependence. [F1, step 2.1, given, algebra] ∎
