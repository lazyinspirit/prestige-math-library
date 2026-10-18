---
id: ex-near-boundary-riccati-residual-inconclusive
kind: example
title: "A tiny CARE residual is inconclusive near the stability boundary"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-standard-continuous-and-discrete-riccati-equations
  - thm-care-local-residual-ball-certificate
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems,
        Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
      locator: "slides 26–29, Hamiltonian separation and CARE conditioning"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Let $\varepsilon=10^{-8}$ and take scalar CARE data $A=\varepsilon$, $B=R=1$, $C=\varepsilon$, hence $Q=\varepsilon^2$ and $G=1$. Use the candidate $\widehat X=1.1\varepsilon$.

## Facts & Assumptions

**Given:** The scalar data above and the CARE residual-ball criterion of [[thm-care-local-residual-ball-certificate]].

[F1] [[def-standard-continuous-and-discrete-riccati-equations]]: $F_c(X)=A^*X+XA-XGX+Q$ and $A_c(X)=A-GX$.

[F2] [[thm-care-local-residual-ball-certificate]]: a radius must satisfy $\kappa(r+g\rho^2)\le\rho$ and $2\kappa g\rho<1$ for its fixed-point certificate.

## Proof

1.1 The scalar CARE is $2\varepsilon X-X^2+\varepsilon^2=0$, with positive root $X_*=(1+\sqrt2)\varepsilon$ and stable closed loop $A_c(X_*)=-\sqrt2\varepsilon$. At the candidate, $\widehat A_c=-0.1\varepsilon<0$, the exact residual is $r=|F_c(\widehat X)|=1.99\varepsilon^2=1.99\cdot10^{-16}$, and $g=1$. [F1, given, algebra]

2.1 The scalar Lyapunov derivative is $\mathcal L(E)=2\widehat A_c E=-0.2\varepsilon E$, so its inverse norm is $\kappa=1/(0.2\varepsilon)=5\cdot10^8$. For every $\rho>0$, $r+\rho^2\ge2\sqrt r\,\rho$, so $\kappa(r+\rho^2)\ge2\kappa\sqrt r\,\rho>\rho$ because $2\kappa\sqrt r>14$. Thus no radius satisfies even the self-map condition, despite the absolute residual being below $2\cdot10^{-16}$ and the exact stabilizing root existing. The residual alone is inconclusive because the inverse Lyapunov factor is large near the imaginary axis. [F2, step 1.1, algebra] ∎
