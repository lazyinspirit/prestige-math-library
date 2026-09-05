---
id: prop-natural-transformations-of-base-functors-give-morphisms-of-derived-delta-functors
kind: proposition
title: "Natural transformations of base functors give morphisms of derived delta functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-morphism-of-homological-delta-functors, def-morphism-of-cohomological-delta-functors, prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors, prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors, thm-naturality-of-the-homology-connecting-morphism, thm-naturality-of-the-cohomology-connecting-morphism, thm-left-derived-functors-form-a-homological-delta-functor, thm-right-derived-functors-form-a-cohomological-delta-functor]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Statement

Assume the Axiom of Dependent Choice.

Let $P$ be supplied projective resolution data, let $I$ be supplied injective
resolution data, and let $\alpha:F\Rightarrow G$ be a natural transformation
between additive functors $\mathcal A\to\mathcal B$.

If $F$ and $G$ are right exact, then the induced transformations
$$L_n^P(\alpha):L_n^PF\Rightarrow L_n^PG$$
assemble into a morphism of homological delta functors.

If $F$ and $G$ are left exact, then the induced transformations
$$R_I^n(\alpha):R_I^nF\Rightarrow R_I^nG$$
assemble into a morphism of cohomological delta functors.
## Facts & Assumptions

**Given:** A short exact sequence $0\to A'\to A\to A''\to0$ and an integer
$n\geq 0$.

[L1] A natural transformation induces degreewise natural transformations on
left and right derived functors
([[prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors]],
[[prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors]]).

[L2] The left and right derived families already carry delta-functor
structures
([[thm-left-derived-functors-form-a-homological-delta-functor]],
[[thm-right-derived-functors-form-a-cohomological-delta-functor]]).

[L3] The homology and cohomology connecting morphisms are natural with respect
to morphisms of short exact sequences of complexes
([[thm-naturality-of-the-homology-connecting-morphism]],
[[thm-naturality-of-the-cohomology-connecting-morphism]]).

[L4] A morphism of delta functors is a degreewise natural transformation that
commutes with the connecting maps
([[def-morphism-of-homological-delta-functors]],
[[def-morphism-of-cohomological-delta-functors]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the components $L_n^P(\alpha)$ and $R_I^n(\alpha)$ are already natural in the object variable. [L1, given]

2.1 Compute the connecting maps for the chosen short exact sequence from a horseshoe resolution on the projective or injective side as in [L2]. Applying $\alpha$ degreewise gives a morphism between the two short exact sequences of complexes obtained after applying $F$ and $G$. By [L3], the corresponding connecting squares in homology or cohomology commute. [L2, L3, step 1.1, construct]

3.1 Step 2.1 is exactly the compatibility demanded in [L4]. Therefore the induced degreewise natural transformations from step 1.1 assemble into morphisms of the corresponding derived delta functors. [L4, step 2.1] ∎