---
id: ex-zero-zero-initialization-stalls-adaptation
kind: example
title: "Zero-zero initialization stalls one step, while nonzero A can move"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-finite-budget-low-rank-adaptation
  - thm-low-rank-adapter-merging-and-gradients
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Take a scalar layer with $d=k=r=1$, $c=1$, $W_0=0$, one data point $x_1=y_1=1$, loss $\ell_1(z)=\tfrac12(z-y_1)^2$, one update $T=1$, minibatch $I_0=(1)$, and finite step size $\eta_0>0$. With $A_0=B_0=0$, the finite-budget procedure returns $A_1=B_1=0$. With the same data and $A_0=1$, $B_0=0$, it instead returns $A_1=1$ and $B_1=\eta_0$.

## Facts & Assumptions

**Given:** The scalar data, loss, scale, initial factors, one-step horizon, and positive finite step size in the statement.

[F1] [[thm-low-rank-adapter-merging-and-gradients]]: $\nabla_B\mathcal L=cGA^{\mathsf T}$ and $\nabla_A\mathcal L=cB^{\mathsf T}G$.

[F2] [[alg-finite-budget-low-rank-adaptation]]: the procedure initializes $B_0=0$ and updates each factor by subtracting the step size times its reverse-mode gradient.

## Verification

1.1 At either initialization, $W_0+cB_0A_0=0$, so the scalar loss derivative with respect to the weight is $G=\ell_1'(0)=0-1=-1$. The loss is a polynomial defined and differentiable on all of $\mathbb R$, so the one-step reverse-mode call is admissible. [given, algebra]

2.1 If $A_0=B_0=0$, [F1] gives $\nabla_B\mathcal L=(-1)0=0$ and $\nabla_A\mathcal L=0(-1)=0$. By [F2], subtracting these zero gradients leaves $A_1=B_1=0$. [F1, F2, step 1.1, algebra]

3.1 If $A_0=1$ and $B_0=0$, [F1] gives $\nabla_A\mathcal L=0$ and $\nabla_B\mathcal L=(-1)(1)=-1$. The update in [F2] therefore gives $A_1=1-\eta_0\cdot0=1$ and $B_1=0-\eta_0(-1)=\eta_0$. [F1, F2, step 1.1, algebra] ∎
