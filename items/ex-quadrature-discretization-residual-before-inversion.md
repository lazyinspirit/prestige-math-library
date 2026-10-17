---
id: ex-quadrature-discretization-residual-before-inversion
kind: example
title: "A scalar quadrature residual appears before the regularized inverse"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - thm-tikhonov-error-chain-with-discretization-and-residual
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 4: Regularization Methods"
      url: "https://www2.compute.dtu.dk/~pcha/DIP/chap4.pdf"
      locator: "Slide 12 on replacing the integral problem by a discretized matrix problem."
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Chapter 6 on Hilbert-space Tikhonov regularization and its normal equation."
---

## Example

Assume Countable Choice. Model a quadrature or collocation approximation by the scalar maps
$A=2$ and $A_h=1.9$, exact target $x^\dagger=1$, shared data noise $e=0.1$,
and $\lambda=1$. Then the exact forward datum is $y=2$, the perturbed datum
is $y_\delta=2.1$, the discretized perturbed datum is $y_{h,\delta}=2.0$,
and the forward residual discarded before inversion is $d_h=0.1$. The refined
error chain keeps its propagated residual $R_\lambda d_h=0.04$ as a separate
term.

## Facts & Assumptions

**Given:** Countable Choice, the scalar exact and discretized operators, target, shared noise, and $\lambda$ above; verify the pre-inversion residual and full error chain.

[F1] [[thm-tikhonov-error-chain-with-discretization-and-residual]]: For $y_{h,\delta}=A_hx^\dagger+e$ and $d_h=(A-A_h)x^\dagger$, the exact chain contains the separate term $R_\lambda d_h$ before the discretized solve.

## Verification

1.1 The scalar regularized maps are $R_\lambda=2/(2^2+1)=2/5$ and $R_{\lambda,h}=(19/10)/((19/10)^2+1)=190/461$. Also $d_h=2-1.9=1/10$, so [F1] gives the propagated pre-inversion residual $R_\lambda d_h=(2/5)(1/10)=1/25$. [given, F1, algebra]

2.1 With the exact discrete solve $\widetilde x_h=R_{\lambda,h}y_{h,\delta} =380/461$, the five chain terms are respectively $1/5$, $-1/25$, $1/25$, $4/5-380/461=-56/2305$, and $0$. Their sum is $461/2305-56/2305=405/2305=81/461=1-\widetilde x_h$, verifying the telescoping identity with the forward residual counted once. [step 1.1, algebra] ∎
