---
id: prop-completeness-and-cocompleteness-in-poset-categories
kind: proposition
title: "A poset category is complete exactly when every small family has an infimum, and cocomplete exactly when every small family has a supremum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-completeness-and-cocompleteness-criteria, def-products-and-coproducts, prop-preorders-as-categories-and-monotone-maps-as-functors]
justified_by: []
aliases: []
landmark: false
proof_strategy: translation
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Example 3.1.24"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

A poset regarded as a category is complete if and only if every set-indexed
family has an infimum, including the empty family. It is cocomplete if and only
if every set-indexed family has a supremum, including the empty family. Hence
it is both complete and cocomplete exactly when it is a complete lattice.

## Facts & Assumptions

**Given:** A poset $P$ regarded as a category.

[F1] In the associated category, $x\to y$ exists exactly when $x\le y$, and
there is at most one such arrow
([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

[F2] Products and coproducts have their family-of-arrows universal properties
([[def-products-and-coproducts]]).

[L1] Products plus equalizers characterize completeness, and coproducts plus
coequalizers characterize cocompleteness
([[cor-completeness-and-cocompleteness-criteria]]).

## Proof

**Proof technique:** translate universal properties into inequalities.

1.1 A cone from $x$ to a discrete family $(p_i)$ is precisely the collection of inequalities $x\le p_i$. By [F1] and [F2], a product is therefore a lower bound above every lower bound, namely $\inf_i p_i$. For the empty family this is a greatest element. [F1, F2]

1.2 Reversing inequalities, a coproduct is $\sup_i p_i$, with the empty coproduct a least element. Coequalizers are identities for the same at-most-one-arrow reason. The dual half of [L1] proves both directions of the cocompleteness equivalence. [F1, F2, L1]

2.1 Parallel arrows in a poset category are equal whenever they exist. The identity of their common domain is consequently an equalizer, since every factor is unique by [F1]. Hence [L1] and step 1.1 prove both directions of the completeness equivalence. [F1, L1, step 1.1]

3.1 Having all set-indexed infima and suprema, including empty ones, is exactly the complete-lattice condition, which proves the last assertion. [step 2.1, step 1.2] ∎
