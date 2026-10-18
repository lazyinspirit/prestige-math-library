---
id: ex-ale-two-domain-heat-interface-flux-balance
kind: example
title: "A two-domain heat trace balances outward fluxes"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-ale-linear-diffusion-transmission-model
  - lem-ale-schur-complement-positive-and-minimizes-energy
  - thm-ale-monolithic-backward-euler-energy-identity
  - alg-ale-robin-robin-partitioned-iteration
  - thm-ale-robin-robin-iteration-contracts-and-certifies-stop
justified_by: []
aliases: []
forward_refs: []
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
    - title: "Emil Engström and Eskil Hansen, Time-dependent Steklov–Poincaré operators and space-time Robin–Robin decomposition for the heat equation (2022)"
      url: "https://arxiv.org/pdf/2210.13868"
      locator: "§§1 and 4–6, matching traces, balanced normal fluxes, and Robin–Robin interface iteration; the reduced matrix example is computed here."
---

## Statement

Take a one-dimensional trace space $\Lambda=\mathbb R$, two interior spaces $I_i=\mathbb R$, $\Delta t=2$, $M_1=M_2=I_2$, $A_1=\operatorname{diag}(1/2,3/2)$, and $A_2=\operatorname{diag}(1/2,1/2)$, with the second coordinate as trace. Let the condensed loads be $f_1=1$, $f_2=5$. The monolithic trace is $2$ and the outward fluxes are $3$ and $-3$. With $\alpha=1$, $r_1^0=2$, tolerance $0.1$, and budget $M=2$, the Robin–Robin algorithm returns the certified trace $2$ on its second pass.

## Facts & Assumptions

**Given:** The finite-dimensional local blocks, trace coordinates, condensed loads, Robin parameter, incoming datum, tolerance, and pass budget in the Statement.

[F1] [[def-ale-linear-diffusion-transmission-model]]: $B_i=\Delta t^{-1}M_i+A_i$, $q_i=S_i\lambda_i-f_i$, and the monolithic trace solves $(S_1+S_2)\lambda=f_1+f_2$.

[F2] [[lem-ale-schur-complement-positive-and-minimizes-energy]]: each positive-definite local block has a positive-definite Schur complement.

[F3] [[thm-ale-monolithic-backward-euler-energy-identity]]: when traces match and outward fluxes balance, paired interface work cancels in the monolithic energy identity.

[F4] [[alg-ale-robin-robin-partitioned-iteration]]: each pass performs the two Robin solves and exchanges and stops only when the stated residual test passes.

[F5] [[thm-ale-robin-robin-iteration-contracts-and-certifies-stop]]: a passing stop test certifies trace error at most $\varepsilon$ relative to the monolithic trace.

## Verification

1.1 The local backward-Euler blocks are $B_1=\operatorname{diag}(1,2)$ and $B_2=\operatorname{diag}(1,1)$, which are positive definite. With zero off-diagonal blocks between the interior and trace coordinates, their Schur operators are $S_1=2$ and $S_2=1$, so [F2] applies. [given, F1, F2, algebra]

1.2 On pass one, $\lambda_1^1=(2+1)/3=1$, $r_2^1=(1-2)1+1=0$, $\lambda_2^1=(0+5)/2=2.5$, and $r_1^1=(1-1)2.5+5=5$. Here $q_1=|(1-2)/(1+2)|=1/3$, $q_2=0$, and the stop threshold is $0.1/(1/3)=0.3$; the incoming-data change is $|5-2|=3$, so the algorithm does not stop. [F1, F4, algebra]

2.1 The monolithic scalar equation is $3\lambda=6$, hence $\lambda_*=2$. Its fluxes are $q_1=2(2)-1=3$ and $q_2=1(2)-5=-3$, so they balance and the interface work $\lambda_*(q_1+q_2)$ vanishes as in [F3]. [F1, F3, step 1.1, algebra]

3.1 On pass two, $\lambda_1^2=(5+1)/3=2$, $r_2^2=(1-2)2+1=-1$, $\lambda_2^2=(-1+5)/2=2$, and $r_1^2=(1-1)2+5=5$. The incoming-data change is $0\le0.3$, so [F4] returns `converged` with trace $2$; [F5] certifies its error is at most $0.1$ relative to $\lambda_*=2$ from step 2.1. [F4, F5, step 1.2, step 2.1, algebra] ∎
