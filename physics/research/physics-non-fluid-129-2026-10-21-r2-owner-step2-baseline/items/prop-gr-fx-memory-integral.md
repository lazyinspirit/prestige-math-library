---
id: prop-gr-fx-memory-integral
kind: proposition
title: "Classical shear memory and the leading displacement approximation"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
physical_scope: "Conditional classical Bondi-boundary and linear Jacobi-field result; finite-radius terms are controlled only to the stated asymptotic order, with no experiment or quantized-gravity claim."
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

For the detector clause, fix an angular point and a large fixed area radius $r$. Use the local flat observer and propagation direction of [[def-gr-wave-screen-and-tt-projection]] to identify the positive two-dimensional screen. A **linear transverse detector approximation** here means that the dimensionless screen metric perturbation is $H_{AB}(u)=C_{AB}(u,x)/r+\rho_{AB}(u,r,x)$, where the screen-TT remainder and its first two $u$-derivatives are $O(r^{-2})$ uniformly on $[u_1,u_2]$; retain only first order in $H$ and first order in separation. Let $s^A(u)$ be the screen Jacobi field of a smooth timelike geodesic variation, with affine parameter $u$ (equivalently $x^0=ct=u+r$ along the background central geodesic), initial data $s^A(u_1)=s^A$ and $\partial_us^A(u_1)=0$, and assume $N_{AB}(u_1)=N_{AB}(u_2)=0$. Then, at this linear separation order,

$$s^A(u_2)-s^A(u_1)=\frac{1}{2r}\Delta C^A{}_B\,s^B+O(r^{-2}|s|)+O(\varepsilon^2|s|),\qquad \varepsilon:=\sup_{[u_1,u_2]}|H|_q.$$

Under the same approximation, the endpoint relative screen velocity satisfies $\partial_us^A(u_2)=O(r^{-2}|s|)+O(\varepsilon^2|s|)$, so it has no leading $r^{-1}$ contribution when the news vanishes at both cuts.

The error constants depend on the fixed compact interval, angular patch and differentiated remainder bounds in [[def-gr-fx-bondi-expansion]]. No exact finite-radius identity $H_{AB}=C_{AB}/r$ is asserted.

## Statement references

[[def-gr-fx-bondi-expansion]]

[[def-gr-wave-screen-and-tt-projection]]

[[thm-gr-tt-plane-wave-curvature]]

[[thm-gr-jacobi-equation-and-geodesic-deviation]]

[[thm-ftc-second-part]]

## Facts & Assumptions

**Given:** The smooth shear and news of [[def-gr-fx-bondi-expansion]], a fixed large-$r$ local screen in the flat TT model of [[def-gr-wave-screen-and-tt-projection]], and the endpoint and linearization hypotheses in the Statement.

[F1] $N_{AB}=\partial_uC_{AB}$ and the differentiated metric expansion gives a local leading screen perturbation $C_{AB}/r$ with a remainder whose first two retarded-time derivatives are $O(r^{-2})$ ([[def-gr-fx-bondi-expansion]]).

[F2] For a future unit observer $n$ and a unit spacelike propagation direction $\hat k\perp n$ in the flat model, the screen $\Sigma(n,\hat k)=\{v:\eta(v,n)=\eta(v,\hat k)=0\}$ is positive definite and two-dimensional; TT means transverse to $n,\hat k$ and trace-free on this screen ([[def-gr-wave-screen-and-tt-projection]]).

[F3] For a spatial TT planar perturbation $h_{AB}=H_{AB}(u)$ in $x^0=u+r$, the first-order curvature satisfies $R^{(1)A}{}_{00B}=\tfrac12\partial_u^2H^A{}_B$ in the library curvature convention ([[thm-gr-tt-plane-wave-curvature]]).

[F4] Along a smooth affine timelike geodesic variation, its separation field is a Jacobi field and obeys $D_u^2s=R(T,s)T$ ([[thm-gr-jacobi-equation-and-geodesic-deviation]]).

[F5] For a differentiable component function with integrable derivative on a compact interval, the integral of the derivative equals the endpoint difference ([[thm-ftc-second-part]]).

[A1] Countable Choice $\mathrm{AC}_\omega$ is the only choice principle inherited through the smooth Lorentzian screen suppliers; full Choice is not used ([[def-countable-choice]]).

[A2] The local detector approximation uses a background inertial observer, an outward unit propagation direction, an initially comoving infinitesimal geodesic separation, vanishing leading news at both endpoint cuts, and a small dimensionless screen perturbation $\varepsilon$. Angular variation across the small detector and the finite-radius remainder enter only the stated $O(r^{-2})$ term.

## Proof

**Given:** [F1]–[F5] and [A1]–[A2].

1.1 Apply [F5] to each smooth tensor component $C_{AB}(u,x)$ at the fixed angular point. Since $N_{AB}=\partial_uC_{AB}$, $C_{AB}(u_2,x)-C_{AB}(u_1,x)=\int_{u_1}^{u_2}N_{AB}(u,x)\,du$. This is the first identity. [A1, F1, F5, given, algebra]

1.2 In the leading local plane-profile model, [F3] and [F4] give the screen Jacobi equation $\partial_u^2s^A=\tfrac12\partial_u^2H^A{}_B\,s^B$ to first order in $H$. Replacing $s^B(u)$ on the right by its initial value $s^B$ changes the result only at second order $O(\varepsilon^2|s|)$, because the first-order Jacobi response is $O(\varepsilon|s|)$. [A2, F2, F3, F4, given, algebra]

2.1 With $s'(u_1)=0$, integrate the first-order equation twice to obtain
$$s^A(u_2)-s^A(u_1)=\frac12\int_{u_1}^{u_2}(u_2-v)\,\partial_v^2H^A{}_B(v)\,s^B\,dv+O(\varepsilon^2|s|).$$
Integration by parts gives the integral as $\Delta H^A{}_B-(u_2-u_1)\partial_uH^A{}_B(u_1)$. The leading part of the endpoint derivative vanishes by $N_{AB}(u_1)=0$, and the remainder derivative is $O(r^{-2})$ by [F1]; hence its contribution is $O(r^{-2}|s|)$. Also $\Delta H^A{}_B=\Delta C^A{}_B/r+O(r^{-2})$ by [F1]. Substitution proves the stated leading displacement and both error orders. [A2, F1, step 1.2, algebra]

3.1 Integrating the first-order Jacobi equation once gives $\partial_us^A(u_2)=\tfrac12(\partial_uH^A{}_B(u_2)-\partial_uH^A{}_B(u_1))s^B+O(\varepsilon^2|s|)$. At both endpoints the leading derivative is $N^A{}_B/r=0$; the derivative of the remainder in [F1] is $O(r^{-2})$. This proves the endpoint velocity estimate. [A2, F1, step 1.2, algebra] ∎

## Remarks

The first identity is the classical shear-memory integral. The second is a large-radius, linearized Jacobi-field approximation with explicit endpoint and remainder conditions. It does not identify a finite-radius TT waveform with the limiting news without the stated $O(r^{-2})$ control, and it is neither an entropy statement nor a soft-graviton quantization result.
