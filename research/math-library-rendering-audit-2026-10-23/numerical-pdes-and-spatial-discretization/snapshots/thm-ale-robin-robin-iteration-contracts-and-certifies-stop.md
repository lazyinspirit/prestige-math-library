---
id: thm-ale-robin-robin-iteration-contracts-and-certifies-stop
kind: theorem
title: "Robin-Robin iteration contracts to the monolithic trace"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-ale-linear-diffusion-transmission-model
  - lem-ale-schur-complement-positive-and-minimizes-energy
  - alg-ale-robin-robin-partitioned-iteration
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
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
      locator: "§§5–6, Schur-interface formulation and convergence of the heat Robin–Robin method; the present finite-dimensional contraction and stopping certificate are proved directly."
    - title: "Martina Maria Joosten, Aspects of interface modelling in fluid-structure interaction problems, PhD thesis, Swansea University (2011)"
      url: "https://cronfa.swan.ac.uk/Record/cronfa42211/Download/0042211-02082018162436.pdf"
      locator: "Chapter 5, §§5.2–5.7, one-degree-of-freedom partitioned iteration, mass-ratio convergence, and stopping behavior."
---

## Statement

Assume the model, positive Schur operators, and algorithm of [[def-ale-linear-diffusion-transmission-model]], [[lem-ale-schur-complement-positive-and-minimizes-energy]], and [[alg-ale-robin-robin-partitioned-iteration]], with $\alpha>0$. Every Robin solve in the algorithm exists uniquely, and for every admitted input it returns `converged` with the current first-subdomain trace on the first passing test, or returns `budget_exhausted` with $\lambda_1^M$ after at most $M$ passes. Let $\lambda_*$ be the unique monolithic trace solving $(S_1+S_2)\lambda_*=f_1+f_2$, and put $R_i=(\alpha I-S_i)(\alpha I+S_i)^{-1}$ and $q_i=\|R_i\|$, $q=q_1q_2$. Then $q<1$, the unique fixed point of the iteration corresponds exactly to $\lambda_*$, and the incoming-data error satisfies

$$r_1^{m+1}-r_1^*=R_2R_1(r_1^m-r_1^*),\qquad\|r_1^{m+1}-r_1^*\|\le q\|r_1^m-r_1^*\|.$$

If the algorithm's stop test succeeds at pass $m+1$, its returned trace satisfies $\|\lambda_1^{m+1}-\lambda_*\|\le\varepsilon$. A `budget_exhausted` return carries no such certificate.

## Facts & Assumptions

**Given:** The finite-dimensional diffusion transmission model, $S_i$ positive definite, $\alpha>0$, loads $f_i$, and the finite-pass algorithm.

[F1] [[def-ale-linear-diffusion-transmission-model]]: the outward flux is $p_i:=S_i\lambda_i-f_i$, and the monolithic trace equation is $(S_1+S_2)\lambda=f_1+f_2$.

[F2] [[lem-ale-schur-complement-positive-and-minimizes-energy]]: each $S_i$ is self-adjoint positive definite.

[F3] [[alg-ale-robin-robin-partitioned-iteration]]: each pass uses $(S_i+\alpha I)\lambda_i=r_i+f_i$ and exchanges $r_{i+1}=(\alpha I-S_i)\lambda_i+f_i$.

[F4] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: each finite-dimensional real self-adjoint endomorphism has an orthonormal eigenbasis.

## Proof

1.1 For each $i$, $S_i+\alpha I$ is self-adjoint positive definite because $\langle(S_i+\alpha I)z,z\rangle=\langle S_i z,z\rangle+\alpha\|z\|^2>0$ for every $z\ne0$. It is therefore invertible on the finite-dimensional space $\Lambda$; its inverse and the operators $R_i$ have finite norms, and $\|(\alpha I+S_1)^{-1}\|>0$ because $\Lambda\ne\{0\}$. Each first solve uniquely determines $\lambda_1^{m+1}$, the first exchange uniquely determines $r_2^{m+1}$, the second solve uniquely determines $\lambda_2^{m+1}$, and the last exchange uniquely determines $r_1^{m+1}$. Since $M$ is finite, these operations define all passes up to $M$; the tests either return `converged` at the first pass that satisfies them or, if none does, return `budget_exhausted` with the last trace. Thus the algorithm is well-defined and terminates within its stated budget. [given, F2, F3, algebra]


1.2 By [F1] and [F2], $S:=S_1+S_2$ is positive definite, so the monolithic trace $\lambda_*=S^{-1}(f_1+f_2)$ exists uniquely. Set $p_i^*:=S_i\lambda_*-f_i$; then $p_1^*+p_2^*=0$. Define $r_1^*:=\alpha\lambda_*+p_1^*$ and $r_2^*:=\alpha\lambda_*+p_2^*$. [given, F1, F2, algebra]


2.1 The first Robin equation in [F3] is equivalent to $r_1=\alpha\lambda_1+p_1$, and its exchange is $r_2=\alpha\lambda_1-p_1$; the second equation and exchange have the same forms with indices 1 and 2 reversed. Since $p_2^*=-p_1^*$, the pair $(r_1^*,r_2^*)$ is unchanged by both exchanges, so $\lambda_*$ gives a fixed point. [F1, F3, step 1.2, algebra]


2.2 Conversely, at any fixed point the two exchange equalities give $r_2=\alpha\lambda_1-p_1=\alpha\lambda_2+p_2$ and $r_1=\alpha\lambda_1+p_1=\alpha\lambda_2-p_2$. Adding the equalities for $r_2$ and $r_1$ yields $2\alpha(\lambda_1-\lambda_2)=0$, hence $\lambda_1=\lambda_2$; subtracting yields $p_1+p_2=0$. Thus the common trace solves the unique monolithic equation from step 1.2, proving the fixed point is unique. [F1, F3, step 1.2, algebra]


3.1 By [F2] and [F4], in an orthonormal eigenbasis of $S_i$, $R_i$ has eigenvalues $(\alpha-\sigma)/(\alpha+\sigma)$ with $\sigma>0$. Each has absolute value strictly below $1$, so $q_i<1$. Subtracting the fixed-point equations from the iteration equations in [F3] gives $r_2^{m+1}-r_2^*=R_1(r_1^m-r_1^*)$ and then $r_1^{m+1}-r_1^*=R_2(r_2^{m+1}-r_2^*)$. Therefore the displayed error map holds and $q=q_1q_2<1$. [F2, F3, F4, step 2.1, algebra]


4.1 Put $e_m=r_1^m-r_1^*$ and $d_m=r_1^{m+1}-r_1^m$. The error map in step 3.1 gives $d_m=(R_2R_1-I)e_m$. Since $\|R_2R_1\|\le q<1$, the reverse triangle inequality yields $\|d_m\|\ge(1-q)\|e_m\|$. The first solve in [F3] gives $\lambda_1^{m+1}-\lambda_*=(\alpha I+S_1)^{-1}e_m$. Therefore the stop test in [F3] implies $\|\lambda_1^{m+1}-\lambda_*\|\le\|(\alpha I+S_1)^{-1}\|\,\|d_m\|/(1-q)\le\varepsilon$. If the finite pass budget is exhausted without this test, no trace certificate has been issued. [F3, step 3.1, algebra] ∎

