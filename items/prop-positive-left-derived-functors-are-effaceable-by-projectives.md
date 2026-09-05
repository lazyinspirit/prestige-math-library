---
id: prop-positive-left-derived-functors-are-effaceable-by-projectives
kind: proposition
title: "Positive left derived functors are effaceable by projectives"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-effaceable-homological-delta-functor-in-positive-degrees, thm-left-derived-functors-form-a-homological-delta-functor, prop-positive-left-derived-functors-vanish-on-projective-objects, def-a-category-with-enough-projectives-and-with-enough-injectives]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-30
---

## Statement

Assume the Axiom of Dependent Choice.

Let $\mathcal A$ be an abelian category with enough projectives, let
$P$ be supplied projective resolution data on all objects of $\mathcal A$.
Let $F:\mathcal A\to\mathcal B$ be
an additive right exact functor. Then the homological delta functor $(L_n^PF)$
is effaceable in positive degrees by projectives.
## Facts & Assumptions

**Given:** An object $A\in\mathcal A$ and an integer $n>0$.

[L1] Enough projectives gives an epimorphism $q:Q\twoheadrightarrow A$ with $Q$ projective ([[def-a-category-with-enough-projectives-and-with-enough-injectives]]).

[L2] Positive left derived functors vanish on projective objects ([[prop-positive-left-derived-functors-vanish-on-projective-objects]]).

[L3] Effaceability in positive degrees means killing the induced map from some projective epimorphism ([[def-effaceable-homological-delta-functor-in-positive-degrees]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a projective epimorphism $q:Q\twoheadrightarrow A$. The datum $P$ is defined on all of $\mathcal A$, so $L_n^PF(Q)$ is defined; since $Q$ is projective and $n>0$, [L2] gives $L_n^PF(Q)=0$. [L1, L2, given, construct]

2.1 The induced map $L_n^PF(q):L_n^PF(Q)\to L_n^PF(A)$ is therefore the zero map. By [L3], this is exactly the required positive-degree effacement of $L_n^PF(A)$ by a projective object. [L3, step 1.1] ∎
