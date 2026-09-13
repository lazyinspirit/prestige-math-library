---
id: def-upper-semicontinuous-real-map-on-a-topological-space
kind: definition
title: Upper semicontinuous real map on a topological space
status: draft
origin: pipeline
deps: ["def-topological-space", "thm-semicontinuity-level-set-characterisation"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Ian Ball, Bauer’s Maximum Principle for Quasiconvex Functions"
      url: "https://arxiv.org/pdf/2305.04893"
      locator: "p. 1, theorem hypothesis and standard proof step 1"
---

## Definition

Let $T$ be a topological space ([[def-topological-space]]) and let
$f:T\to\mathbb R$.  The map $f$ is **upper semicontinuous** if, for every
$a\in\mathbb R$, the strict sublevel set

$$\{x\in T:f(x)<a\}$$

is open in $T$.  Equivalently, every superlevel set
$\{x\in T:f(x)\geq a\}$ is closed, because it is the complement of the
strict sublevel set.

When $T=A\subseteq\mathbb R$ has the subspace topology, this agrees with the
existing pointwise definition: the equivalence with openness of all strict
sublevels is exactly [[thm-semicontinuity-level-set-characterisation]], claim
1.  The empty-domain condition is vacuous, constant functions are upper
semicontinuous, and the inequalities deliberately distinguish the open
threshold $f<a$ from the closed threshold $f\geq a$.
