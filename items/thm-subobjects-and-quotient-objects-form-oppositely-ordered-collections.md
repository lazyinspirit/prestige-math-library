---
id: thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections
kind: theorem
title: "Subobjects and quotient objects form oppositely oriented partially ordered collections"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence, def-preorder]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, section 4.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For an object $C$, subobjects form a partially ordered collection under
$$[m]\le[n]\quad\Longleftrightarrow\quad m\text{ factors through }n.$$
Quotient objects form a partially ordered collection under the dual orientation
$$[q]\le[r]\quad\Longleftrightarrow\quad r\text{ factors through }q.$$
These orders are well-defined on equivalence classes. They are collections rather than sets unless the relevant well-poweredness hypothesis is supplied.

## Facts & Assumptions

**Given:** The subobject and quotient-object equivalence classes of an object $C$.

[L1] Mutually factoring monomorphisms, and dually epimorphisms, determine the same class through unique inverse factor maps ([[thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]]).

[L2] A partial order is reflexive, transitive, and antisymmetric ([[def-preorder]]).

## Proof

**Proof technique:** direct.

1.1 If $m'=m\circ a$ and $m=m'\circ a'$ represent the same subobject, and similarly $n'$ and $n$, then any factorisation $m=n\circ u$ transports by composition to a factorisation of $m'$ through $n'$, and conversely. Thus the relation is independent of representatives by [L1]. [L1]

2.1 Identity factorisations give reflexivity and composites give transitivity. If $[m]\le[n]$ and $[n]\le[m]$, then the representatives mutually factor, so [L1] makes their classes equal. The subobject relation is therefore antisymmetric and hence a partial order by [L2]. [step 1.1, L1, L2]

3.1 For quotient representatives the same argument is dual, but the order is reversed because $[q]\le[r]$ means that $r$ factors through $q$. Reflexivity, transitivity, and antisymmetry follow by the epic half of [L1]. [step 2.1, L1, L2] ∎
