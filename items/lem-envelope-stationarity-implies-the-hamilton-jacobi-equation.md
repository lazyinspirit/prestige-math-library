---
id: lem-envelope-stationarity-implies-the-hamilton-jacobi-equation
kind: lemma
title: "A nondegenerate stationary envelope solves the Hamilton–Jacobi equation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-fully-nonlinear-first-order-pde-and-complete-integral, thm-euclidean-implicit-function-theorem, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Part I: Explicit methods — Lecture notes for MA342H"
      url: "https://www.maths.tcd.ie/~pete/pde2/part_1.pdf"
---

## Statement

If $S_\alpha(x_0;\alpha_0)=0$ and $S_{\alpha\alpha}(x_0;\alpha_0)$ is
invertible, then locally $S_\alpha(x;\alpha(x))=0$ defines a $C^1$ parameter
$\alpha(x)$.  The envelope $u=S(x;\alpha(x))$ has $Du=S_x(x;\alpha(x))$ and
satisfies $F(x,u,Du)=0$.

## Facts & Assumptions

**Given:** A $C^2$ complete integral, a stationary point, and an invertible parameter Hessian there.

## Proof

**Proof technique:** direct.

1.1 Apply the implicit function theorem to $G(x,\alpha)=S_\alpha(x;\alpha)$; its derivative in $\alpha$ is the invertible $S_{\alpha\alpha}$. [given, construct]

2.1 The chain rule gives $Du=S_x+S_\alpha D\alpha=S_x$ on the stationary branch. [step 1.1, given, algebra]

3.1 The complete-integral identity $F(x,S,S_x)=0$, evaluated at $\alpha(x)$ and using step 2.1, is $F(x,u,Du)=0$. [step 2.1, given] ∎
