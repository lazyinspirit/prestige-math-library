---
id: thm-the-solution-set-condition-says-the-comma-category-has-a-jointly-weakly-initial-set
kind: theorem
title: "The solution-set condition at an object is exactly a jointly weakly initial set in its comma category"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-the-solution-set-condition, def-comma-slice-and-coslice-categories, def-weakly-initial-object-and-jointly-weakly-initial-set]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, theorem 4.7.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "T. Leinster, Basic Category Theory, theorem 6.3.10"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: null
---

## Statement

Let $U:\mathcal A\to\mathcal C$ and fix $C\in\mathcal C$. A supplied family $(\eta_i:C\to U(A_i))_{i\in I}$ is a solution set at $C$ if and only if the corresponding supplied set of objects $(A_i,\eta_i)$ is jointly weakly initial in the comma category $(C\downarrow U)$.

## Facts & Assumptions

**Given:** A functor $U:\mathcal A\to\mathcal C$, an object $C$, and a supplied set-indexed family $\eta_i:C\to U(A_i)$ as in [[def-the-solution-set-condition]].

[L1] An object of $(C\downarrow U)$ is an arrow $f:C\to U(A)$, and a morphism $(A_i,\eta_i)\to(A,f)$ is a map $h:A_i\to A$ satisfying $f=U(h)\circ\eta_i$ ([[def-comma-slice-and-coslice-categories]]).

[L2] A set of objects is jointly weakly initial exactly when every target receives a morphism from one member of that set ([[def-weakly-initial-object-and-jointly-weakly-initial-set]]).

## Proof

**Proof technique:** direct.

1.1 If $(\eta_i)$ is a solution set and $(A,f)$ is any comma object, the defining factorisation gives $i$ and $h:A_i\to A$ with $f=U(h)\eta_i$. By [L1] this is a comma morphism from $(A_i,\eta_i)$ to $(A,f)$, so [L2] gives joint weak initiality. If the supplied set is empty, the same assertion says the comma category has no objects. [L1, L2]

2.1 Conversely, if the corresponding comma objects are jointly weakly initial, apply [L2] to each $(A,f)$. The resulting comma morphism has, by [L1], exactly the equation $f=U(h)\eta_i$ required by the solution-set condition. [step 1.1, L1, L2] ∎
