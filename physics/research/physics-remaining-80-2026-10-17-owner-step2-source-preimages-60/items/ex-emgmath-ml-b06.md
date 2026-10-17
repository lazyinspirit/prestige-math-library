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

Assume $\mathrm{AC}_\omega$. Let $b>0$ have length units and let $\delta$ be dimensionless with $0<\delta\le1/10$. Put $a=\delta b$ and choose either charge sign $s\in\{-1,+1\}$ in the exact coupled family. Set $h_0=b/\sqrt{r^2+b^2}$. Then
$$\left|g_{00}+\bigl(1-2\delta h_0\bigr)\right|\le3\delta^2\le\frac3{100},\qquad \left|g_{ij}-\bigl(1+2\delta h_0\bigr)\delta_{ij}\right|\le\delta^2\le\frac1{100},\qquad 0\le1-\frac{\rho}{\rho_{\mathrm{lin}}}\le3\delta\le\frac3{10},$$
where $\rho_{\mathrm{lin}}=3c^2\delta b^3/[4\pi G_N(r^2+b^2)^{5/2}]$. These are exact ideal-family bounds, not measured errors. The static dust has electromagnetic support and is not freely falling.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $b>0$, $0<\delta\le1/10$, $a=\delta b$, $s\in\{-1,+1\}$, and the exact family and dilute comparison of the corollary.

[F1] [[cor-emg-regular-counterpoised-sphere]] supplies $H=1+\delta h_0$, the exact metric and density profile, and the bounds $|H^{-2}-(1-2\delta h_0)|\le3\delta^2$, $|H^2-(1+2\delta h_0)|\le\delta^2$, and $0\le1-\rho/\rho_{\mathrm{lin}}\le3\delta$.

[F2] [[thm-emg-smooth-counterpoised-dust]] supplies $U=cH\partial_0$, $a^i=-c^2H_i/H^3$, and the identity $\rho a^i=\sigma F^i{}_cU^c$.

[A1] $0<\delta\le1/10$, so $3\delta^2\le3/100$, $\delta^2\le1/100$, and $3\delta\le3/10$.

## Verification

1.1 Put $z=\delta h_0$. Since $r^2+b^2\ge b^2$ and both square roots are positive, $0<h_0\le1$ and $0<z\le\delta$. The corollary's time-component bound [F1] is exactly $|g_{00}+(1-2z)|\le3z^2\le3\delta^2$. [given, F1, A1, algebra]

2.1 The spatial bound in [F1] gives $|g_{ij}-(1+2z)\delta_{ij}|\le\delta^2$, since $\delta_{ij}$ is $0$ or $1$. The density identity in [F1] gives $0\le1-\rho/\rho_{\mathrm{lin}}\le3\delta$. Applying [A1] yields the three numerical bounds in the Example. [step 1.1, F1, A1, algebra]

3.1 In the constructed solution $U^i=0$, so its coordinate spatial position is constant along each integral curve. Nevertheless [F2] gives $a^i=-c^2H_i/H^3$, and the same theorem states that $\rho a^i=\sigma F^i{}_cU^c$. Thus the static worldlines are electromagnetically supported; the estimates do not describe neutral freely falling dust. [given, F2, step 2.1, algebra] ∎

## Remarks

The numerical fractions are consequences of the ideal choice $\delta\le1/10$ and are not experimental uncertainties. No measurement, statistical estimate, or general perturbation theorem is asserted.
