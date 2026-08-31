---
id: thm-a-locally-cartesian-closed-category-with-a-terminal-object-is-cartesian-closed
kind: theorem
title: "A locally cartesian closed category with a terminal object is cartesian closed"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-locally-cartesian-closed-category, def-initial-terminal-and-zero-object]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Lemma 4.6.3(ii)"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Statement

If $\mathcal C$ is locally cartesian closed and has a terminal object $\mathbf 1$, then $\mathcal C$ is cartesian closed.

## Facts & Assumptions

**Given:** A locally cartesian closed category $\mathcal C$ with terminal object $\mathbf 1$.

[L1] Every slice $\mathcal C/X$ of a locally cartesian closed category is cartesian closed ([[def-locally-cartesian-closed-category]]).

[L2] A terminal object receives a unique morphism from every object ([[def-initial-terminal-and-zero-object]]).

## Proof

**Proof technique:** direct.

1.1 The assignment $A\mapsto {!_A}:A\to\mathbf 1$ defines a functor $\mathcal C\to\mathcal C/\mathbf 1$, and forgetting the structure map defines a functor back. Because [L2] gives a unique map to $\mathbf 1$, these two functors are inverse isomorphisms of categories. [given, L2]

2.1 By [L1], the slice $\mathcal C/\mathbf 1$ is cartesian closed. Transport that structure across the isomorphism of step 1.1 to conclude that $\mathcal C$ itself is cartesian closed. [step 1.1, L1]

3.1 Therefore a locally cartesian closed category with a terminal object is cartesian closed. [step 2.1] ∎
