---
id: ex-nice-name-for-a-cohen-coordinate-real
kind: example
title: A nice name for one Cohen coordinate
status: published
origin: pipeline
deps: [def-nice-name-for-a-subset, def-cohen-collapse-and-levy-collapse-forcings, thm-mutually-generic-cohen-coordinate-reals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Cohen names", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

For $\xi<\lambda$, the canonical $\operatorname{Add}(\omega,\lambda)$-name whose $n$-th antichain consists of conditions assigning value $1$ at $(\xi,n)$ is a nice name and evaluates to the set of $1$-bits of $c_\xi$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-nice-name-for-a-subset]] defines nice names.

[F2] [[def-cohen-collapse-and-levy-collapse-forcings]] defines the finite-function order.

[F3] [[thm-mutually-generic-cohen-coordinate-reals]] defines $c_\xi$ from the generic union.

## Proof

1.1 For $n\in\omega$, let $A_n$ be the conditions $p$ with $p(\xi,n)=1$ and no other coordinates in their domains. In this displayed canonical version $A_n$ is the singleton containing $\{((\xi,n),1)\}$, hence an antichain; equivalently one may use any maximal antichain deciding that bit and retain only its value-$1$ part. Thus $\dot c_\xi=\{\langle\check n,p\rangle:n\in\omega, p\in A_n\}$ is nice. [F1, F2]

2.1 By name evaluation, $n\in(\dot c_\xi)_G$ exactly when some $p\in G$ sets $(\xi,n)$ to $1$. Directedness makes this equivalent to $(\bigcup G)(\xi,n)=1$, which is precisely $n\in c_\xi$. [F2, F3] ∎