---
id: prop-positive-right-derived-functors-are-effaceable-by-injectives
kind: proposition
title: "Positive right derived functors are effaceable by injectives"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-effaceable-cohomological-delta-functor-in-positive-degrees, thm-right-derived-functors-form-a-cohomological-delta-functor, prop-positive-right-derived-functors-vanish-on-injective-objects, def-a-category-with-enough-projectives-and-with-enough-injectives]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.12: Cohomological delta-functors"
      url: "https://stacks.math.columbia.edu/tag/010P"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Statement

Assume the Axiom of Dependent Choice.

Let $\mathcal A$ be an abelian category with enough injectives, let
$I$ be supplied injective resolution data on all objects of $\mathcal A$.
Let $F:\mathcal A\to\mathcal B$ be
an additive left exact functor. Then the cohomological delta functor
$(R_I^nF)$ is effaceable in positive degrees by injectives.
## Facts & Assumptions

**Given:** An object $A\in\mathcal A$ and an integer $n>0$.

[L1] Enough injectives gives a monomorphism $u:A\rightarrowtail J$ with $J$ injective ([[def-a-category-with-enough-projectives-and-with-enough-injectives]]).

[L2] Positive right derived functors vanish on injective objects ([[prop-positive-right-derived-functors-vanish-on-injective-objects]]).

[L3] Effaceability in positive degrees means killing the induced map into some injective object ([[def-effaceable-cohomological-delta-functor-in-positive-degrees]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a monomorphism $u:A\rightarrowtail J$ with $J$ injective. The datum $I$ is defined on all of $\mathcal A$, so $R_I^nF(J)$ is defined; since $J$ is injective and $n>0$, [L2] gives $R_I^nF(J)=0$. [L1, L2, given, construct]

2.1 The induced map $R_I^nF(u):R_I^nF(A)\to R_I^nF(J)$ is therefore zero. By [L3], this is exactly the required positive-degree effacement. [L3, step 1.1] ∎
