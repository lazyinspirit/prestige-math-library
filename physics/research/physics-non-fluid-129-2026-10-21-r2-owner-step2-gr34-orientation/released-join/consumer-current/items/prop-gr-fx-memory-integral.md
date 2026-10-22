---
id: prop-gr-fx-memory-integral
kind: proposition
title: "Classical shear memory and the leading displacement approximation"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
physical_scope: "Conditional classical Bondi-boundary identity and formal first-order Jacobi response; finite-radius terms are controlled only to the stated asymptotic order, with no finite-amplitude error claim, experiment, or quantized-gravity claim."
deps:
  - def-gr-fx-bondi-expansion
  - def-gr-wave-screen-and-tt-projection
  - thm-gr-tt-plane-wave-curvature
  - thm-gr-jacobi-equation-and-geodesic-deviation
  - thm-ftc-second-part
  - def-countable-choice
dependency_roles:
  def-gr-fx-bondi-expansion: mathematical-premise
  def-gr-wave-screen-and-tt-projection: mathematical-premise
  thm-gr-tt-plane-wave-curvature: mathematical-premise
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-countable-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Thomas Mädler and Jeffrey Winicour, Bondi-Sachs Formalism, arXiv:1609.01731 (2016), full 31-page PDF: §3, Eqs. (37), (40)-(43), and §4, supertranslation action on shear"
      url: "https://arxiv.org/pdf/1609.01731"
    - title: "Andrew Strominger, Lectures on the Infrared Structure of Gravity and Gauge Theory, Princeton University Press (2018), full lecture notes arXiv:1703.05448: §6, Eqs. (6.0.1)-(6.0.3), geodesic-deviation and displacement memory"
      url: "https://arxiv.org/pdf/1703.05448"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and a smooth Bondi expansion as in [[def-gr-fx-bondi-expansion]]. For $u_1<u_2$ in its retarded-length interval, define $\Delta C_{AB}:=C_{AB}(u_2)-C_{AB}(u_1)$. Then

$$\Delta C_{AB}=\int_{u_1}^{u_2}N_{AB}(u)\,du.$$

For the detector clause, fix an angular point $x\in S^2$ and a large fixed area radius $r>r_0$. In the local flat approximation choose the future unit observer $n=\partial_0$ and outward unit propagation direction $\hat k=\partial_3$ of [[def-gr-wave-screen-and-tt-projection]], so the positive screen is $\Sigma(n,\hat k)=\operatorname{span}(\partial_1,\partial_2)$. Let $\iota:S^2\to\mathbb R^3$ be the unit-sphere inclusion; $d\iota_x$ identifies $T_xS^2$ isometrically, for $q$, with the plane orthogonal to $\iota(x)$. Choose axes with $e_3=\iota(x)$ and a fixed ordered orthonormal screen basis $e_1,e_2$ corresponding to a $q$-orthonormal basis of $T_xS^2$. Use adapted inertial coordinates with $x^0=ct$ and $x^3$ in the $\hat k$ direction. The background central worldline is the restriction to $[u_1,u_2]$ of the smooth future-directed timelike affine geodesic $\gamma_0(u)=(x^0=u+r,x^1=0,x^2=0,x^3=r)$; its affine parameter $u$ is also proper-length parameter, and on it the Bondi retarded coordinate is $u=x^0-r$.

A **linear transverse detector approximation** here is the formal flat first-order model with a dimensionless screen-TT profile $H_{AB}(u)=C_{AB}(u,x)/r+\rho_{AB}(u,r,x)$ in the chosen basis, extended on an open tube $\Omega\subset\mathbb R^4$ around $\gamma_0([u_1,u_2])$ as the planar perturbation $h_{AB}(x^0,x^3)=H_{AB}(x^0-x^3)$ with all other components zero. Take $H$ as the first-order coefficient of a smooth flat linearized metric family on $\Omega$; only this coefficient is used. Assume the profile has a smooth extension outside $[u_1,u_2]$; only its values on this interval enter. For $j=0,1,2$, assume $\sup_{u\in[u_1,u_2]}|\partial_u^j\rho_{AB}(u,r,x)|\le K_jr^{-2}$, where the constants $K_j$ are uniform on the fixed interval and angular patch and have dimensions $\mathrm{length}^{2-j}$. Let $s_0^A$ be any initial screen-separation components in the fixed basis, with zero initial relative velocity. Its **formal first-order response** $\delta s^A$ is the unique solution of the linearized screen Jacobi equation

$$\partial_u^2\delta s^A=\frac12\partial_u^2H^A{}_B\,s_0^B,\qquad \delta s^A(u_1)=0,\qquad \partial_u\delta s^A(u_1)=0,$$

with angular indices raised using $q^{AB}$. Assume $N_{AB}(u_1)=N_{AB}(u_2)=0$. This is a first-order response coefficient only; no finite-amplitude $O(\varepsilon^2)$ estimate is asserted. Then

$$\delta s^A(u_2)=\frac{1}{2r}\Delta C^A{}_B\,s_0^B+O(r^{-2}|s_0|).$$

Under the same approximation, the endpoint relative screen velocity has first-order response $\partial_u\delta s^A(u_2)=O(r^{-2}|s_0|)$, so it has no leading $r^{-1}$ contribution when the news vanishes at both cuts.

The error constants depend on the fixed compact interval, angular patch and the $K_j$ bounds. No exact finite-radius identity $H_{AB}=C_{AB}/r$ is asserted.

## Statement references

[[def-gr-fx-bondi-expansion]]

[[def-gr-wave-screen-and-tt-projection]]

[[thm-gr-tt-plane-wave-curvature]]

[[thm-gr-jacobi-equation-and-geodesic-deviation]]

[[thm-ftc-second-part]]

## Facts & Assumptions

**Given:** The smooth shear and news of [[def-gr-fx-bondi-expansion]], a fixed large-$r$ local screen in the flat TT model of [[def-gr-wave-screen-and-tt-projection]], and the endpoint and linearization hypotheses in the Statement.

[F1] $N_{AB}=\partial_uC_{AB}$ by [[def-gr-fx-bondi-expansion]]. Separately, the detector clause assumes the screen profile $H_{AB}=C_{AB}/r+\rho_{AB}$ and the explicit uniform $K_jr^{-2}$ bounds on $\rho_{AB}$ and its first two retarded-time derivatives stated in the Statement.

[F2] In the adapted flat inertial frame $n=\partial_0$, $\hat k=\partial_3$, the screen $\Sigma(n,\hat k)$ is positive definite and two-dimensional; the chosen basis $e_1,e_2$ is orthonormal and TT means transverse to $n,\hat k$ and trace-free on this screen ([[def-gr-wave-screen-and-tt-projection]]).

[F3] For a spatial TT planar perturbation $h_{AB}=H_{AB}(u)$ in $x^0=u+r$, the first-order curvature satisfies $R^{(1)A}{}_{00B}=\tfrac12\partial_u^2H^A{}_B$ in the library curvature convention ([[thm-gr-tt-plane-wave-curvature]]).

[F4] Along a smooth affine timelike geodesic variation, its separation field is a Jacobi field and obeys $D_u^2s=R(T,s)T$ ([[thm-gr-jacobi-equation-and-geodesic-deviation]]).

[F5] For a differentiable component function with integrable derivative on a compact interval, the integral of the derivative equals the endpoint difference ([[thm-ftc-second-part]]).

[A1] Countable Choice $\mathrm{AC}_\omega$ is the only choice principle inherited through the smooth Lorentzian screen suppliers; full Choice is not used ([[def-countable-choice]]).

[A2] The local detector approximation uses the specified future timelike affine background worldline, an outward unit propagation direction, a fixed orthonormal screen basis identified with $T_xS^2$, an initially comoving infinitesimal geodesic separation, and vanishing news at both endpoint cuts. Angular variation across the detector is excluded by the fixed-point planar approximation; the finite-radius profile remainder obeys the explicit $K_jr^{-2}$ bounds. Only the formal first-order response is retained.

## Proof

**Given:** [F1]–[F5] and [A1]–[A2].

1.1 Apply [F5] to each smooth tensor component $C_{AB}(u,x)$ at the fixed angular point. Since $N_{AB}=\partial_uC_{AB}$, $C_{AB}(u_2,x)-C_{AB}(u_1,x)=\int_{u_1}^{u_2}N_{AB}(u,x)\,du$. This is the first identity. [A1, F1, F5, given, algebra]

1.2 In the adapted frame of [A2], the plane-wave curvature supplier gives $R^{(1)A}{}_{00B}=\tfrac12\partial_u^2H^A{}_B$ ([F3]); the Jacobi equation of [F4] with initial screen value $s_0^Ae_A$ and zero initial derivative therefore has this forcing at first order, since the flat background curvature is zero and the basis is constant. Thus its formal first-order response obeys exactly the defining equation for $\delta s^A$ in the Statement. No finite-amplitude error estimate is used. [A2, F2, F3, F4, given, algebra]

2.1 Integrate the linearized equation twice, using $\delta s(u_1)=\partial_u\delta s(u_1)=0$, to obtain
$$\delta s^A(u_2)=\frac12\int_{u_1}^{u_2}(u_2-v)\,\partial_v^2H^A{}_B(v)\,s_0^B\,dv.$$
Integration by parts gives $\delta s^A(u_2)=\tfrac12[\Delta H^A{}_B-(u_2-u_1)\partial_uH^A{}_B(u_1)]s_0^B$. Since $H=C/r+\rho$, the endpoint condition $N_{AB}(u_1)=0$ and the $K_1r^{-2}$ bound give $\partial_uH(u_1)=O(r^{-2})$; the $K_0r^{-2}$ bound gives $\Delta H=\Delta C/r+O(r^{-2})$. This proves the stated displacement estimate, with constants depending on $u_2-u_1$ and $K_0,K_1$. [A2, F1, step 1.2, algebra]

3.1 Integrating the linearized equation once gives $\partial_u\delta s^A(u_2)=\tfrac12(\partial_uH^A{}_B(u_2)-\partial_uH^A{}_B(u_1))s_0^B$. At both endpoints the leading derivative is $N^A{}_B/r=0$, and the $K_1r^{-2}$ bound controls the remainder derivatives. This proves the endpoint velocity estimate. [A2, F1, step 1.2, algebra] ∎

## Remarks

The first identity is the classical shear-memory integral. The second is a large-radius, formal first-order Jacobi response with explicit screen, endpoint and remainder conditions. It does not identify a finite-radius TT waveform with the limiting news without the stated $O(r^{-2})$ control, and it makes no finite-amplitude error estimate. It is neither an entropy statement nor a soft-graviton quantization result.
