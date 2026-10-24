---
id: ex-group-actions-as-functors
kind: example
title: "Actions of a group $G$ on sets are functors $BG\\to\\mathbf{Set}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-monoids-and-groups-as-one-object-categories, prop-sets-and-functions-form-category-set, def-functor-and-contravariant-functor, thm-group-actions-correspond-to-homomorphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 1.3.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

A left action of $G$ on a set is exactly a set-valued functor on the one-object
category $BG$.

## Facts & Assumptions

**Given:** A group $G$ and its one-object category $BG$.

[L1] A group is a one-object category whose arrows are all invertible ([[prop-monoids-and-groups-as-one-object-categories]]).

[L2] Sets form $\mathbf{Set}$, and a functor preserves identity and composition ([[prop-sets-and-functions-form-category-set]], [[def-functor-and-contravariant-functor]]).

[L3] Group actions correspond to homomorphisms into permutation groups ([[thm-group-actions-correspond-to-homomorphisms]]).

## Verification

**Proof technique:** direct.

1.1 A functor $F:BG\to\mathbf{Set}$ selects one set $X=F(*)$ and, for every $g\in G$, a function $F(g):X\to X$. [L1, L2]

1.2 Conversely, a left action defines $F(*)=X$ and $F(g)(x)=g\cdot x$; its action axioms are precisely the two functor equations. [L1, L2, L3]

2.1 The functor equations say $F(e)=1_X$ and $F(gh)=F(g)F(h)$. With $g\cdot x=F(g)(x)$, these become $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$, exactly the left-action axioms. [step 1.1, L2, L3]

3.1 The two constructions recover the same functions $F(g)$ and the same action operation. Therefore left $G$-actions on sets are exactly functors $BG\to\mathbf{Set}$. [step 2.1, step 1.2] ∎
