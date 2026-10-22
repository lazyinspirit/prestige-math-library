---
id: cex-ip-smooth-map-fails-tcc
kind: counterexample
title: A smooth map can fail the tangential cone condition
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-nonlinear-forward-map
  - def-ip-tangential-cone-condition
  - def-frechet-derivative-between-banach-spaces
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-reals-cauchy-complete
  - def-real-and-complex-inner-product-space
  - def-hilbert-space
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
    - title: "Christian Clason, Regularization of Inverse Problems, equation (9.6) and Theorem 9.9"
      url: "https://arxiv.org/pdf/2001.00617v2"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement refuted

Every infinitely differentiable forward map between real Hilbert spaces satisfies a local tangential cone condition at each point of its domain with some radius $\delta>0$ and some constant $0\le\eta<1$.

## Statement references

[[def-ip-tangential-cone-condition|Local tangential cone condition]]

[Christian Clason, *Regularization of Inverse Problems*, equation (9.6)](https://arxiv.org/pdf/2001.00617v2)

## Facts & Assumptions

**Given:** The standard real Hilbert line $X=Y=\mathbb R$, the map $F(t)=t^2$, basepoint $x^\dagger=0$, exact datum $y=0$, and a proposed local TCC radius $\delta>0$ with constant $0\le\eta<1$.

[F1] The one-coordinate Euclidean inner product is $\langle s,t\rangle=st$, with induced Euclidean norm ([[def-euclidean-inner-product]]).

[F2] The induced Euclidean length on $\mathbb R^1$ is a norm ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F3] Every Cauchy sequence of real numbers converges ([[thm-reals-cauchy-complete]]).

[F4] A real inner-product space complete in its induced norm is a real Hilbert space ([[def-real-and-complex-inner-product-space]], [[def-hilbert-space]]).

[F5] A Fréchet derivative is a bounded linear map whose remainder divided by the increment norm tends to zero ([[def-frechet-derivative-between-banach-spaces]]).

[F6] The local TCC at $0$ would require $|F(h)-F(0)-F'(0)h|\le\eta|F(h)-F(0)|$ whenever $|h|\le\delta$ ([[def-ip-tangential-cone-condition]]).

## Counterexample

**Proof technique:** direct.

1.1 Identify $\mathbb R$ with the one-coordinate Euclidean space $\mathbb R^1$ by its sole coordinate; [F1] gives inner product $st$ and [F2] gives norm $|t|$. Every Cauchy sequence for this norm converges by [F3], so [F4] makes $\mathbb R$ a real Hilbert space. The polynomial $F(t)=t^2$ is infinitely differentiable; moreover $|F(h)-F(0)-0h|/|h|=|h|\to0$ as $h\to0$, so [F5] gives $F'(0)=0$. [given, F1, F2, F3, F4, F5, construct, algebra]

2.1 Since $\delta>0$, choose $h=\delta/2$, which is nonzero and satisfies $|h|\le\delta$. Substitution in [F6] gives $h^2\le\eta h^2$, hence $1\le\eta$ after division by $h^2>0$, contradicting $\eta<1$. Therefore no such TCC radius and constant exist. [given, F6, choose, algebra] ∎

## References

[[def-ip-nonlinear-forward-map|Nonlinear forward-map convention]]

[[def-ip-tangential-cone-condition|Local tangential cone condition]]

[Christian Clason, *Regularization of Inverse Problems*, equation (9.6)](https://arxiv.org/pdf/2001.00617v2)
