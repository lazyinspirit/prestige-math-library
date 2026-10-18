---
id: thm-ale-monolithic-backward-euler-energy-identity
kind: theorem
title: "Monolithic backward Euler transmission energy identity"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-ale-linear-diffusion-transmission-model]
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Emil Engström and Eskil Hansen, Time-dependent Steklov–Poincaré operators and space-time Robin–Robin decomposition for the heat equation (2022)"
      url: "https://arxiv.org/pdf/2210.13868"
      locator: "§§1 and 4: two-subdomain heat transmission with matching traces and opposite outward normal fluxes; the time-discrete identity below is proved locally."
    - title: "Martina Maria Joosten, Aspects of interface modelling in fluid-structure interaction problems, PhD thesis, Swansea University (2011)"
      url: "https://cronfa.swan.ac.uk/Record/cronfa42211/Download/0042211-02082018162436.pdf"
      locator: "Chapter 5, monolithic subsystem equations and interface work in the finite-dimensional model."
---

## Statement

Assume the finite-dimensional diffusion-transmission model of [[def-ale-linear-diffusion-transmission-model]]. Let $V:=\{(v_1,v_2)\in X_1\oplus X_2:\gamma_1v_1=\gamma_2v_2\}$ be the common-trace space, take $u^n\in V$, and let $F_i^{n+1}\in X_i$. In the block notation of the definition, set the local right-hand side to $g_i:=\Delta t^{-1}M_i u_i^n+F_i^{n+1}$; assemble the local equations with common trace and the outward algebraic fluxes $q_i$ from that definition. There is a unique $u^{n+1}\in V$ satisfying

$$\sum_{i=1}^2\left(\left\langle M_i\frac{u_i^{n+1}-u_i^n}{\Delta t},v_i\right\rangle+\langle A_i u_i^{n+1},v_i\rangle\right)=\sum_{i=1}^2\langle F_i^{n+1},v_i\rangle\qquad(v\in V).$$

It obeys the exact identity

$$\frac12\left(\|u^{n+1}\|_M^2-\|u^n\|_M^2+\|u^{n+1}-u^n\|_M^2\right)+\Delta t\|u^{n+1}\|_A^2=\Delta t\sum_{i=1}^2\langle F_i^{n+1},u_i^{n+1}\rangle,$$

where $\|v\|_M^2:=\sum_i\langle M_iv_i,v_i\rangle$ and $\|v\|_A^2:=\sum_i\langle A_iv_i,v_i\rangle$. In the unforced case the monolithic backward-Euler energy is nonincreasing.

## Facts & Assumptions

**Given:** The finite-dimensional spaces, positive-definite mass and diffusion operators, common trace map, outward flux convention, and monolithic flux balance of [[def-ale-linear-diffusion-transmission-model]].

[F1] [[def-ale-linear-diffusion-transmission-model]]: $M_i$ and $A_i$ are self-adjoint positive definite, local fluxes use the outward sign, and monolithic traces and fluxes satisfy $\lambda_1=\lambda_2$ and $q_1+q_2=0$.

## Proof

1.1 The interior rows of the two local blocks give their backward-Euler subdomain equations; after eliminating those rows, the common trace row is $q_1+q_2=0$ by the definition in [F1]. For a common trace $\lambda$, the paired interface work is therefore $\langle q_1,\lambda\rangle+\langle q_2,\lambda\rangle=\langle q_1+q_2,\lambda\rangle=0$; this cancellation uses the shared trace and outward-flux sign convention. [given, F1, algebra]

1.2 On $V$, the assembled bilinear form associated with $\Delta t^{-1}M_i+A_i$ is positive definite: for $v\in V\setminus\{0\}$, at least one $v_i\ne0$, and every corresponding summand $\Delta t^{-1}\langle M_iv_i,v_i\rangle+\langle A_iv_i,v_i\rangle$ is positive. Hence the finite-dimensional restricted operator has zero kernel and is invertible, so the variational step has a unique solution. Test the monolithic equation with $v=u^{n+1}$ and multiply by $\Delta t$. For each $i$, self-adjointness gives $2\langle M_i(u_i^{n+1}-u_i^n),u_i^{n+1}\rangle=\|u_i^{n+1}\|_{M_i}^2-\|u_i^n\|_{M_i}^2+\|u_i^{n+1}-u_i^n\|_{M_i}^2$. Summing this identity and retaining $\Delta t\sum_i\langle A_i u_i^{n+1},u_i^{n+1}\rangle$ yields the stated equality. [given, F1, algebra]

2.1 If $F_i^{n+1}=0$ for both subdomains, the right-hand side is zero and both the time-jump term and diffusion term on the left are nonnegative. Therefore $\|u^{n+1}\|_M^2\le\|u^n\|_M^2$. [step 1.2, algebra] ∎
