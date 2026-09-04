---
id: prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied
kind: proposition
title: "A bifunctor can be derived in either variable when the relevant resolution data are supplied"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-contravariant-derived-functors-are-derived-on-the-opposite-category, def-left-derived-object-relative-to-projective-resolution-data, def-right-derived-object-relative-to-injective-resolution-data]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

Let $\mathcal A,\mathcal C,\mathcal D$ be abelian categories, and let
$B:\mathcal A^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be additive in
each variable. Let $P$ be supplied projective resolution data on a class
$\mathcal D_A$ of objects of $\mathcal A$, and let $I$ be supplied injective
resolution data on a class $\mathcal D_C$ of objects of $\mathcal C$. Then:

1. for each fixed $A\in\mathcal D_A$, the covariant functor $B(A,-)$ has right
   derived objects at every $C\in\mathcal D_C$,
   $$R_I^n(B(A,-))(C);$$
2. for each fixed $C\in\mathcal D_C$, the contravariant functor $B(-,C)$ is
   derived at every $A\in\mathcal D_A$ on $\mathcal A^{\mathrm{op}}$ using
   the projective datum on
   $\mathcal A$.

These are the two candidate one-variable derived constructions. No equality
between them is asserted here.
## Facts & Assumptions

**Given:** Abelian categories $\mathcal A,\mathcal C,\mathcal D$, the displayed
bifunctor $B$, and the supplied data $P$ on $\mathcal D_A$ and $I$ on
$\mathcal D_C$.

[L1] Right derived objects are defined for covariant functors from supplied
injective resolution data
([[def-right-derived-object-relative-to-injective-resolution-data]]).

[L2] Left derived objects are defined for covariant functors from supplied
projective resolution data
([[def-left-derived-object-relative-to-projective-resolution-data]]).

[L3] Contravariant functors are derived on the opposite category
([[prop-contravariant-derived-functors-are-derived-on-the-opposite-category]]).

## Proof

**Proof technique:** direct.

1.1 Fix $A\in\mathcal D_A$. Then $B(A,-):\mathcal C\to\mathcal D$ is a covariant additive functor between abelian categories, so [L1] gives the right derived objects $R_I^n(B(A,-))(C)$ for each $C\in\mathcal D_C$. [L1, given, construct]

1.2 Fix $C\in\mathcal D_C$. Then $B(-,C)$ is contravariant and additive in the $\mathcal A$-variable. By [L3], it is derived at each $A\in\mathcal D_A$ on $\mathcal A^{\mathrm{op}}$ using $P$, equivalently the corresponding injective datum $P^{\mathrm{op}}$ on $\mathcal A^{\mathrm{op}}$. [L2, L3, construct]

2.1 Steps 1.1 and 1.2 give the two candidate one-variable derived constructions. Since no comparison map between them has yet been supplied, no balance conclusion follows here. [step 1.1, step 1.2] ∎
