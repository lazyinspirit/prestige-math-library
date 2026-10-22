---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
id: ex-ip-constraint-eliminates-a-kernel-direction
kind: example
title: A line constraint removes one kernel direction
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-admissible-constraint-class
  - prop-ip-constraints-can-remove-kernel-ambiguity
justified_by: []
aliases: []
proof_strategy: verification
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Use $X=\mathbb R^2$ with its Euclidean metric, $Y=\mathbb R$ with its absolute-value metric, and $U=X$. Let $A:X\to Y$ be $A(s,t)=s$, and restrict the truth class to $C_0=\{(t,0):t\in\mathbb R\}$. Every scalar datum $y\in\mathbb R$ has exactly one admissible preimage, and $(C_0-C_0)\cap\ker A=\{0\}$; this constraint removes the vertical null direction.

## Facts & Assumptions

**Given:** $X=\mathbb R^2$ and $Y=\mathbb R$ with the stated Euclidean and absolute-value metrics, $U=X$, $A(s,t)=s$ and the nonempty constraint class $C_0=\{(t,0):t\in\mathbb R\}$.

[F1] [[def-ip-admissible-constraint-class]]: restricted identifiability means injectivity of $A|_C$, and $C-C=\{x-x':x,x'\in C\}$.

[F2] [[prop-ip-constraints-can-remove-kernel-ambiguity]]: $A|_C$ is injective if and only if $(C-C)\cap\ker A=\{0\}$.

## Verification

1.1 From $A(s,t)=s$, $\ker A=\{(0,t):t\in\mathbb R\}$. Also $C_0-C_0=\{(t,0):t\in\mathbb R\}$, whose intersection with this vertical kernel is $\{(0,0)\}$. [given, F1, algebra]

2.1 By [F2] and step 1.1, $A|_{C_0}$ is injective. For any $y\in\mathbb R$, $(y,0)\in C_0$ and $A(y,0)=y$, so it is the unique admissible preimage of $y$. [given, F1, F2, step 1.1, construct, algebra] ∎
