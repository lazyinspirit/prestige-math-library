---
id: prop-positive-right-derived-functors-vanish-on-injective-objects
kind: proposition
title: "Positive right derived functors vanish on injective objects"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic, def-injective-object, def-injective-resolution-in-an-abelian-category, def-right-derived-object-relative-to-injective-resolution-data]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $I$ be a supplied injective resolution datum on a class $\mathcal D$ and
$F:\mathcal A\to\mathcal B$ an additive functor between abelian categories.
If $J\in\mathcal D$ is an injective object, then for every $n>0$,
$$R_I^nF(J)=0.$$
## Facts & Assumptions

**Given:** An injective object $J\in\mathcal D$ and an integer $n>0$.

[L1] An injective resolution is a coaugmented exact complex of injectives ([[def-injective-resolution-in-an-abelian-category]]).

[L2] The object $J$ is injective ([[def-injective-object]]).

[L3] Changing the supplied injective resolution datum changes the derived objects only by natural isomorphism ([[thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic]]).

[L4] The right derived object is the cohomology of the deleted chosen
resolution after applying $F$
([[def-right-derived-object-relative-to-injective-resolution-data]]).

## Proof

**Proof technique:** direct.

1.1 The coaugmented complex $$0\to J\xrightarrow{1_J}J\to0\to0\to\cdots$$ is exact and all its terms are injective by [L2], so [L1] makes it an injective resolution of $J$. After applying $F$, its deleted cochain complex has only one nonzero term, namely $F(J)$ in degree $0$. [L1, L2, L4, given, construct]

2.1 Let $I'$ be the supplied injective resolution datum on the same domain as $I$ that agrees with $I$ away from $J$ and assigns the trivial injective resolution from step 1.1 to $J$. By [L3], the right derived object computed from $I$ is isomorphic to the one computed from $I'$. By [L4], the complex computing $R_{I'}^nF(J)$ is the one-term complex from step 1.1, whose cohomology is zero in every positive degree. Hence $R_I^nF(J)=0$ for $n>0$. [L3, L4, step 1.1] ∎
