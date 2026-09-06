---
id: lem-characteristic-strip-jacobian-at-the-initial-surface
kind: lemma
title: "Jacobian of a characteristic strip at its initial surface"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-augmented-characteristic-system-for-a-quasilinear-pde, lem-local-solvability-of-the-augmented-characteristic-ode]
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

For the local strip $(X,Z)$, the derivative of $\Psi(s,y):=X(s,y)$ at $s=0$ is

$$D_{(s,y)}\Psi(0,y)=[a(\gamma(y),\phi(y)),D\gamma(y)].$$

Consequently $D_{(s,y)}\Psi(0,y)$ is invertible exactly when this $n\times n$
matrix has rank $n$.

## Facts & Assumptions

**Given:** The $C^1$ local strip supplied by the preceding lemma.

## Proof

**Proof technique:** direct.

1.1 Its initial condition gives $D_yX(0,y)=D\gamma(y)$, and its ODE gives $\partial_sX(0,y)=a(\gamma(y),\phi(y))$. [given, algebra]

2.1 These are precisely the first and remaining columns of $D_{(s,y)}\Psi(0,y)$, proving the formula; an $n\times n$ derivative is invertible exactly when it has rank $n$. [step 1.1, algebra] ∎
