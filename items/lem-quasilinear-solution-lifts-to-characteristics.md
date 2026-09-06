---
id: lem-quasilinear-solution-lifts-to-characteristics
kind: lemma
title: "A quasilinear solution lifts to augmented characteristics"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-augmented-characteristic-system-for-a-quasilinear-pde, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
sources:
  references:
    - title: "First order PDE: The Methods of Characteristics"
      url: "https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf"
---

## Statement

Let $u\in C^1(\Omega)$ solve $a(x,u)\cdot Du=b(x,u)$.  If $X$ solves
$\dot X=a(X,u(X))$ while it stays in $\Omega$, then $Z:=u(X)$ satisfies
$\dot Z=b(X,Z)$.  Thus $(X,Z)$ solves the augmented characteristic ODE system.

## Facts & Assumptions

**Given:** A $C^1$ solution $u$, a differentiable curve $X$ with the stated ODE, and $Z=u\circ X$.

## Proof

**Proof technique:** direct.

1.1 The chain rule gives $\dot Z=Du(X)\cdot\dot X$. [given, algebra]

2.1 Substitute $\dot X=a(X,u(X))$ and the PDE: $\dot Z=Du(X)\cdot a(X,u(X))=b(X,u(X))=b(X,Z)$. [step 1.1, given, algebra] ∎
