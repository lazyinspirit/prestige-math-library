---
id: cex-ip-lm-zero-noise-discrepancy-stopping
kind: counterexample
title: Zero-noise discrepancy stopping need not be finite
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - alg-ip-regularized-levenberg-marquardt
  - thm-ip-lm-local-discrepancy-stopping
  - def-ip-product-tangential-cone-condition
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, §11.2, positive-noise discrepancy theorem"
      url: "https://arxiv.org/pdf/2001.00617v2"
verification:
  precheck: pending
---

## Statement refuted

Assume Countable Choice. Let $U=\mathbb R$, write $B_s(a):=\{t\in\mathbb R:|t-a|<s\}$, and let $F(t)=t$, exact solution $x^\dagger=1$ with exact datum $y=1$, initial value $x_0=15/16$, noise bound $\delta=0$ and datum $y^\delta=1$, forcing fraction $\sigma=1/2$, and discrepancy factor $\tau=3$. For $n\ge0$, define $h_n$ as the minimizer of
$$h\longmapsto\frac12|h+x_n-1|^2+\frac{\alpha_n}{2}|h|^2$$
for some $\alpha_n>0$ satisfying $|h_n+x_n-1|=\sigma|x_n-1|$, and set $x_{n+1}=x_n+h_n$. The claim that this iteration reaches the zero discrepancy threshold $\tau\delta=0$ after finitely many updates is false. Indeed, $B_2(x_0)\subset U$, $x^\dagger\in B_1(x_0)$, $|F'(t)|\le1$, and for all $u,v\in B_2(x_0)$,
$$|F(u)-F(v)-F'(u)(u-v)|\le|u-v|\,|F(u)-F(v)|.$$
Also $e_0:=|x_0-x^\dagger|=1/16<\min\{1,1/8,1/4\}$, and $\tau=3>1/\sigma=2$.

## Statement references

[[alg-ip-regularized-levenberg-marquardt|Residual-forcing regularized LM iteration]]

[[thm-ip-lm-local-discrepancy-stopping|The positive-noise local stopping theorem]]

[[def-ip-product-tangential-cone-condition|Product-type tangential cone condition]]

## Facts & Assumptions

**Given:** Countable Choice; $F(t)=t$ on $\mathbb R$; $x^\dagger=y=y^\delta=1$; $x_0=15/16$; $\delta=0$; $\sigma=1/2$; $\tau=3$; and the residual-forcing update in the Counterexample section.

[A1] Countable Choice is assumed by the general Hilbert-space LM definition through its adjoint interface ([[def-countable-choice]]).

[F1] The LM step minimizes the damped linearized residual and selects $\alpha_n$ so the linearized residual is multiplied by $\sigma$ ([[alg-ip-regularized-levenberg-marquardt]]).

[F2] The stopping theorem requires $\delta>0$ and does not assert finite stopping at $\delta=0$ ([[thm-ip-lm-local-discrepancy-stopping]]).

[F3] The product condition compares the two-point remainder to the product of the distance and data residual ([[def-ip-product-tangential-cone-condition]]).

## Counterexample



1.1 The derivative of $F(t)=t$ is $F'(t)=1$, so $F(u)-F(\tilde u)-F'(u)(u-\tilde u)=0$ for every $u,\tilde u\in\mathbb R$. Thus the product condition holds on $B_2(x_0)\subset\mathbb R$ with $c=1$, and $|F'(t)|=1=M$. The exact solution lies in $B_1(x_0)$ and $B_2(x_0)\subset U$. Also $e_0=|x_0-x^\dagger|=1/16<1$, while $\frac{\sigma\tau-1}{c(1+\tau)}=\frac18,\qquad\frac{1-\sigma}{2c}=\frac14,$ so the theorem's local smallness clauses hold. Its positive-noise clause does not hold because $\delta=0$. [given, F2, F3, algebra]

1.2 Let $r_n:=1-x_n$. If $r_n>0$, the objective is $\frac12(h-r_n)^2+\frac{\alpha_n}{2}h^2$. Completing the square gives the unique minimizer $h_n=r_n/(1+\alpha_n)$ and $r_n-h_n=\alpha_n r_n/(1+\alpha_n)$. The forcing equation with $\sigma=1/2$ therefore requires $\alpha_n=1$ and gives $h_n=r_n/2$. [A1, F1, given, algebra]

2.1 Since $x_0=1-1/16$, $r_0=1/16>0$. Whenever $r_n>0$, step 1.2 gives $r_{n+1}=1-x_{n+1}=r_n-h_n=r_n/2$. By induction, $r_n=2^{-n}/16>0$ for every finite $n$. Therefore $|F(x_n)-y^\delta|=r_n>0=\tau\delta$ at every finite index, so no discrepancy crossing occurs. This refutes the stated finite-stopping extension to zero noise. [F2, step 1.2, given, induction, algebra] ∎
## Remarks

The positive-noise theorem remains unchanged. This example isolates the boundary case it excludes: exact data with a zero threshold may require infinitely many contractive steps to attain residual zero.
