---
id: ex-emgmath-ml-b06
kind: example
title: "Quantified dilute exact coupled family"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
proof_strategy: direct
deps:
  - def-countable-choice
  - cor-emg-regular-counterpoised-sphere
  - thm-emg-smooth-counterpoised-dust
dependency_roles:
  def-countable-choice: mathematical-premise
  cor-emg-regular-counterpoised-sphere: mathematical-premise
  thm-emg-smooth-counterpoised-dust: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3, equations (3.90), (3.92), (3.95)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Curvature conventions only; the quantitative inequalities are derived from exact local formulas."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, Michaelmas 2019, §3.4.1"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Independent curvature conventions only; all dilute estimates are derived locally."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011), §2"
      url: "https://arxiv.org/pdf/1105.3807"
      locator: "Model context only; no limit, stability, or empirical conclusion is used."
verification:
  precheck: pass
---

## Example

Assume $\mathrm{AC}_\omega$. Let $b>0$ have length units and let $\delta$ be dimensionless with $0<\delta\le1/10$. Put $a=\delta b$ and choose either charge sign $s\in\{-1,+1\}$ in the exact coupled family. For $\mathbf{x}=(x^1,x^2,x^3)\in\mathbb R^3$, define the Euclidean radius $r:=\sqrt{(x^1)^2+(x^2)^2+(x^3)^2}$ and $h_0(\mathbf{x}):=b/\sqrt{r^2+b^2}$, so $H=1+\delta h_0$. Then
$$\left|g_{00}+\bigl(1-2\delta h_0\bigr)\right|\le3\delta^2\le\frac3{100},\qquad \left|g_{ij}-\bigl(1+2\delta h_0\bigr)\delta_{ij}\right|\le\delta^2\le\frac1{100},\qquad 0\le1-\frac{\rho}{\rho_{\mathrm{lin}}}\le3\delta\le\frac3{10},$$
where $\rho_{\mathrm{lin}}=3c^2\delta b^3/[4\pi G_N(r^2+b^2)^{5/2}]$. These are exact ideal-family bounds, not measured errors. On $\mathcal M=\mathbb R_{x^0}\times\mathbb R^3$, the static dust velocity field is $U=cH\partial_0$. For each fixed $\mathbf{x}\in\mathbb R^3$ and $x^0_*\in\mathbb R$, define its static worldline by
$$\gamma_{\mathbf{x},x^0_*}:\mathbb R\to\mathcal M,\qquad \gamma_{\mathbf{x},x^0_*}(\tau):=(x^0_*+cH(\mathbf{x})\tau,\mathbf{x}).$$
This is a smooth future-directed timelike curve with $\dot\gamma=U$ and $g_H(\dot\gamma,\dot\gamma)=-c^2$; $\tau\in\mathbb R$, measured in seconds, is its proper-time parameter in the adopted length-coordinate convention. Here a static worldline is freely falling exactly when it is a geodesic, $\nabla_{\dot\gamma}\dot\gamma=0$, with $\nabla$ the connection of the exact family. Define the model's electromagnetic force per unit mass by $f^b:=(\sigma/\rho)F^b{}_cU^c$; this is defined everywhere for this profile since $\rho>0$. For this profile, $H_i=-\delta b x^i/(r^2+b^2)^{3/2}$, so when $r>0$ both $a^i$ and $f^i$ are nonzero and $a^i=f^i$. At $r=0$ both vectors vanish, and the central static worldline is geodesic.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $b>0$, $0<\delta\le1/10$, $a=\delta b$, $s\in\{-1,+1\}$, and the exact family and dilute comparison of the corollary.

[F1] [[cor-emg-regular-counterpoised-sphere]] supplies $H=1+\delta h_0$, the exact metric and density profile, and the bounds $|H^{-2}-(1-2\delta h_0)|\le3\delta^2$, $|H^2-(1+2\delta h_0)|\le\delta^2$, and $0\le1-\rho/\rho_{\mathrm{lin}}\le3\delta$.

[F2] [[thm-emg-smooth-counterpoised-dust]] supplies $U=cH\partial_0$, $a^i=-c^2H_i/H^3$, and the identity $\rho a^i=\sigma F^i{}_cU^c$.

[A1] $0<\delta\le1/10$, so $3\delta^2\le3/100$, $\delta^2\le1/100$, and $3\delta\le3/10$.

## Verification

1.1 Put $z=\delta h_0$. Since $r^2+b^2\ge b^2$ and both square roots are positive, $0<h_0\le1$ and $0<z\le\delta$. The corollary's time-component bound [F1] is exactly $|g_{00}+(1-2z)|\le3z^2\le3\delta^2$. [given, F1, A1, algebra]

2.1 The spatial bound in [F1] gives $|g_{ij}-(1+2z)\delta_{ij}|\le\delta^2$, since $\delta_{ij}$ is $0$ or $1$. The density identity in [F1] gives $0\le1-\rho/\rho_{\mathrm{lin}}\le3\delta$. Applying [A1] yields the three numerical bounds in the Example. [step 1.1, F1, A1, algebra]

3.1 For the worldline $\gamma_{\mathbf{x},x^0_*}$ defined in the Statement, $\dot\gamma=U$, so its covariant acceleration is the supplier field $a^b$. Here $\rho>0$ by [F1] and $H_i=-\delta b x^i/(r^2+b^2)^{3/2}$; hence $a^i=-c^2H_i/H^3$ is nonzero when $r>0$, while $a^i=0$ at $r=0$. The supplier also gives $a^0=0$. Dividing its all-component identity $\rho a^b=\sigma F^b{}_cU^c$ by positive $\rho$ gives $a^b=f^b=(\sigma/\rho)F^b{}_cU^c$ everywhere. Thus both vectors are nonzero for $r>0$ and vanish at the center; only the noncentral static worldlines fail the geodesic definition of free fall. [given, F1, F2, step 2.1, algebra] ∎

## Remarks

The numerical fractions are consequences of the ideal choice $\delta\le1/10$ and are not experimental uncertainties. No measurement, statistical estimate, or general perturbation theorem is asserted.
