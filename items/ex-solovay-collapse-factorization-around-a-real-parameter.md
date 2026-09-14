---
id: ex-solovay-collapse-factorization-around-a-real-parameter
kind: example
title: Factoring the Solovay collapse around a real parameter
status: draft
origin: pipeline
deps: [def-solovay-levy-collapse-setup, lem-solovay-absorption-factorization-and-homogeneity]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
---

## Example

Let $t\in V[G_\xi]$ be a real and display both relevant factorizations.

## Facts & Assumptions

**Given:** The Solovay collapse and $t\in V[G_\xi]$.

[F1] [[def-solovay-levy-collapse-setup]]: restriction to $\xi\times\omega$ is a complete projection with the corresponding initial-extension/quotient factorization.

[F2] [[lem-solovay-absorption-factorization-and-homogeneity]]: small initial factors are absorbed over a real parameter and the remaining collapse is homogeneous.

## Verification

1.1 The complete restriction map gives $V[G]=V[G_\xi][G^{\xi}]$, where $G^\xi$ is generic for the quotient supported on $[\xi,\kappa)\times\omega$. The actual initial generic, not merely $t$, is present at this stage. [F1]

2.1 Absorption recodes $G_\xi$ together with the quotient into an $H$ generic for a fresh $\operatorname{Lv}(\kappa)^{V[t]}$, yielding $V[G]=V[t][H]$. A formula $\varphi(t,\vec\alpha)$ omitting $H$ is therefore decided by tail homogeneity; a formula mentioning $G_\xi$ need not be fixed. [F2, step 1.1] ∎
