---
id: ex-periodic-compressible-viscous-manufactured-state
kind: example
title: A periodic manufactured compressible viscous state
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
aliases: []
deps:
  - def-compressible-navier-stokes-fourier-model
  - lem-compressible-viscous-smooth-entropy-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Pablo Fernandez, Ngoc-Cuong Nguyen, and Jaime Peraire, Entropy-stable hybridized discontinuous Galerkin methods for the compressible Euler and Navier-Stokes equations, complete author preprint"
      url: "https://arxiv.org/pdf/1808.05066"
      locator: "Sections 2.2–2.3, PDF pp. 3–4. The explicit periodic forcing is computed locally."
---

## Example

On the one-dimensional periodic domain $\mathbb T_{2\pi}$, fix $R>0$, $\gamma>1$, $\mu>0$, $\zeta\ge0$, and $\kappa>0$. Let $\rho(x)=1$, $u(x)=0$, $T(x)=2+\sin x$, and $E(x)=c_vT(x)$. With forcing $S(x)=(0,R\cos x,\kappa\sin x)$ in the conservative balance $\partial_tU+\partial_xF_1=\partial_xF_1^{\mathrm{visc}}+S$, these fields form a smooth positive stationary solution. Its pointwise physical entropy production is $\kappa\cos^2x/T(x)^2$, and the forcing contribution closes the periodic mathematical-entropy balance exactly.

## Verification


**Given:** The one-dimensional ideal-gas model, the displayed periodic state, and the forcing $S$ in the balance law.

[F1] [[def-compressible-navier-stokes-fourier-model]]: $p=(\gamma-1)(E-m^2/(2\rho))$, $T=p/(R\rho)$, $F_1=(\rho u,\rho u^2+p,(E+p)u)$, and $F_1^{\mathrm{visc}}=(0,\tau,u\tau+\kappa\partial_xT)$.

[F2] [[lem-compressible-viscous-smooth-entropy-identity]]: for an unforced smooth positive field, $\eta_t+\partial_x(\eta u+\kappa T_x/T)=-\tau u_x/T-\kappa T_x^2/T^2$.

1.1 Since $T(x)\ge1$, $\rho=1$, $u=0$, $m=0$, and $E=c_vT>0$, the state lies in $\mathcal G$. The equation of state gives $p=(\gamma-1)c_vT=RT$. The stress is zero because $u_x=0$, so $F_1=(0,RT,0)$ and $F_1^{\mathrm{visc}}=(0,0,\kappa\cos x)$. [F1, given, algebra]

2.1 The state is stationary, so $\partial_tU=0$. Direct differentiation gives $\partial_xF_1=(0,R\cos x,0)$ and $\partial_xF_1^{\mathrm{visc}}=(0,0,-\kappa\sin x)$. Therefore $\partial_xF_1^{\mathrm{visc}}+S=\partial_xF_1$, proving the forced balance componentwise. [F1, step 1.1, algebra]

3.1 The physical production is $\tau u_x/T+\kappa T_x^2/T^2=\kappa\cos^2x/T^2$. For a source $S$, multiplying the conservative equation by $v$ adds $v^TS$ to the right side of the mathematical-entropy identity [F2]; here $v^TS=-\kappa\sin x/T$. The left-side entropy flux derivative is $\partial_x(\kappa\cos x/T)= -\kappa\sin x/T-\kappa\cos^2x/T^2$, which equals minus the production plus $v^TS$. Periodicity removes endpoint contributions. [F1, F2, step 1.1, step 2.1, algebra] ∎
