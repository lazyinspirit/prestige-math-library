---
id: ex-ip-local-tcc-neighborhood
kind: example
title: A smooth map with a local tangential cone neighborhood
status: published
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
  role: example
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, equation (9.6)"
      url: "https://arxiv.org/pdf/2001.00617v2"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

Let $X=Y=\mathbb R$ with their usual real Hilbert structure, let $U=\mathbb R$, and define the smooth forward map $F(t)=t+t^2$. At $x^\dagger=1$ the exact datum is $y=F(1)=2$. The local tangential cone condition holds at $1$ on the closed ball of radius $\delta=1/4$ with constant $\eta=1/10$.

## Example references

[[def-ip-nonlinear-forward-map|Nonlinear forward maps and exact data]]

[[def-ip-tangential-cone-condition|Local tangential cone condition]]

[[def-frechet-derivative-between-banach-spaces|Fréchet derivative]]

[Christian Clason, *Regularization of Inverse Problems*, equation (9.6)](https://arxiv.org/pdf/2001.00617v2)

## Facts & Assumptions

**Given:** The standard real Hilbert line $X=Y=\mathbb R$, $U=\mathbb R$, $F(t)=t+t^2$, $x^\dagger=1$, $y=2$, $\delta=1/4$, and $\eta=1/10$.

[F1] The one-coordinate Euclidean inner product is $\langle s,t\rangle=st$, with induced Euclidean norm ([[def-euclidean-inner-product]]).

[F2] The induced Euclidean length on $\mathbb R^1$ is a norm ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F3] Every Cauchy sequence of real numbers converges, and a complete real inner-product space is a real Hilbert space ([[thm-reals-cauchy-complete]], [[def-real-and-complex-inner-product-space]], [[def-hilbert-space]]).

[F4] The Fréchet derivative is characterized by a remainder that is $o(\|h\|)$ ([[def-frechet-derivative-between-banach-spaces]]).

[F5] The local TCC requires $\|F(x+h)-F(x)-F'(x)h\|\le\eta\|F(x+h)-F(x)\|$ for every increment in its closed ball ([[def-ip-tangential-cone-condition]]).

## Verification

**Proof technique:** direct.

1.1 For $h\in\mathbb R$, $F(1+h)-F(1)=3h+h^2$, so $F(1+h)-F(1)-3h=h^2$. Since $|h^2|/|h|=|h|\to0$, [F4] gives $F'(1)h=3h$; the polynomial is smooth. [given, F4, algebra]

2.1 For $|h|\le1/4$, the TCC remainder is $|h|^2$ and the data difference has magnitude $|3h+h^2|=|h||3+h|$. If $h\ne0$, then $|3+h|\ge3-|h|\ge11/4$, so $|h|/|3+h|\le(1/4)/(11/4)=1/11<1/10$. Thus $|h|^2\le(1/10)|3h+h^2|$; for $h=0$ both sides vanish. Since $\overline B_{1/4}(1)\subset\mathbb R$ and $F(1)=2$, this verifies the stated local TCC neighborhood. [given, F1, F2, F3, F5, algebra] ∎
