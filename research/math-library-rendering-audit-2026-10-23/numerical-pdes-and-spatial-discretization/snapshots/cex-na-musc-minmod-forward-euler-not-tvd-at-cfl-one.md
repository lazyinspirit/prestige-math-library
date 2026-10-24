---
id: cex-na-musc-minmod-forward-euler-not-tvd-at-cfl-one
kind: counterexample
title: The specified direct MUSCL/minmod flux update is not TVD at CFL one
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps:
  - def-na-high-resolution-reconstruction
justified_by: []
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Jérôme Droniou, A Beginner’s Course in Finite Volume Approximation of Scalar Conservation Laws, complete lecture notes"
      url: "https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf"
      locator: "§3.3, PDF pp. 32–35, especially condition (3.3.8): the minmod MUSCL update requires an additional CFL restriction; the local finite data below directly refute the PE02 CFL-one assertion."
verification:
  precheck: pass
---

## Statement refuted

The direct reconstructed-upwind forward-Euler update in [[def-na-high-resolution-reconstruction]] is TVD for every scalar grid sequence whenever $|a|\Delta t/h\le1$.

## Facts & Assumptions

**Given:** $a=h=\Delta t=1$, so the CFL number is $1$; the minmod slope and direct forward-Euler flux update of [[def-na-high-resolution-reconstruction]]. For a finite-support sequence, $\operatorname{TV}(U)=\sum_i|U_{i+1}-U_i|$.

[F1] [[def-na-high-resolution-reconstruction]]: the slope increments are $\sigma_i=hs_i=\operatorname{minmod}(U_i-U_{i-1},U_{i+1}-U_i)$ and the positive-velocity face flux is $F_{i+1/2}=U_i+\sigma_i/2$.

## Counterexample

1.1 Set $U_{-3}=U_3=0$, $U_{-2}=U_2=0$, $U_{-1}=U_1=1/2$, $U_0=1$, and $U_i=0$ for all other indices. The initial variation is $1/2+1/2+1/2+1/2=2$. By [F1], the nonzero slope increments are $\sigma_{-1}=1/2$ and $\sigma_1=-1/2$; the central slope is $\sigma_0=\operatorname{minmod}(1/2,-1/2)=0$, and the adjacent outer slopes are zero. [given, F1, algebra]

2.1 The relevant right-going face fluxes from [F1] are $F_{-3/2}=0$, $F_{-1/2}=3/4$, $F_{1/2}=1$, $F_{3/2}=1/4$, and $F_{5/2}=0$. Substituting in the stated update gives $U_{-1}^{n+1}=-1/4$, $U_0^{n+1}=3/4$, $U_1^{n+1}=5/4$, and $U_2^{n+1}=1/4$, with neighboring states zero. [F1, step 1.1, algebra]

3.1 The new variation is $1/4+1+1/2+1+1/4=3$, which exceeds the initial value $2$. The data satisfy the claimed CFL bound with equality, so the proposed all-data TVD claim is false. [step 1.1, step 2.1, algebra] ∎

