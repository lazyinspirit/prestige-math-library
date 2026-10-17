---
id: ex-black-box-simulator-direct-search-fit
kind: example
title: "A black-box quadratic simulator fit using direct search"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-deterministic-direct-search
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. R. Conn, K. Scheinberg, and L. N. Vicente, Introduction to Derivative-Free Optimization, §§2.1–2.2 and ch. 8"
      url: https://ndl.ethernet.edu.et/bitstream/123456789/77202/1/18.pdf
    - title: "Tamara G. Kolda, Robert Michael Lewis, and Virginia Torczon, Optimization by Direct Search, §§3.1–3.6"
      url: https://www.kolda.net/publication/SIAM-42889.pdf
verification:
  precheck: pass
---

## Example
Treat the simulator response $f(\theta)=(\theta-2)^2$ as a black-box evaluation, with no derivative supplied. Run [[alg-deterministic-direct-search]] from $\theta_0=0$ using ordered polls $D=(+1,-1)$, $\Delta_0=1$, cap $\Delta_{\max}=2$, forcing $\rho(\Delta)=\Delta^2/10$, increase factor $2$, decrease factor $1/2$, and poll budget $N=3$. The successive centers are $0,1,1,2$; the third poll reaches the exact simulator fit $\theta=2$, and the finite run returns status budget-exhausted.

## Facts & Assumptions

**Given:** Positive-spanning direct-search polling and forcing rule [[alg-deterministic-direct-search]].

[F1] In one dimension $D=(+1,-1)$ is positive spanning; the acceptance test compares only function values and the stated forcing threshold ([[alg-deterministic-direct-search]]).

## Verification
1.1 At center $0$, $f(0)=4$ and the first poll point $1$ has $f(1)=1<4-1/10$, so the first poll succeeds at $1$ and the mesh grows to $2$. [given, F1, algebra]

2.1 At center $1$ with mesh $2$, the ordered trials $3,-1$ have values $1,9$, neither below $f(1)-4/10=3/5$; the second poll is unsuccessful and halves the mesh to $1$. At center $1$ with mesh $1$, the first trial $2$ has value $0<1-1/10$, so the third poll succeeds at $2$. The budget is now exhausted; the observed exact minimizer is returned without a derivative-based certificate. [given, F1, step 1.1, algebra] ∎

