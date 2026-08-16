---
id: thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections
kind: theorem
title: "Subobjects and quotient objects form oppositely oriented partially ordered collections"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence, def-partial-order,
       rem-category-theory-class-and-size-conventions]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, section 4.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Fix an object $C$ of a category $\mathcal C$. For monomorphisms $m,n$ into $C$ put
$$[m]\le[n]\quad\Longleftrightarrow\quad m\text{ factors through }n,$$
and for epimorphisms $q,r$ out of $C$ put the dual orientation
$$[q]\le[r]\quad\Longleftrightarrow\quad r\text{ factors through }q.$$
Each relation depends only on the mutual-factorisation classes of its two arguments, and each is reflexive, transitive, and antisymmetric in the sense that $[m]\le[n]$ together with $[n]\le[m]$ forces $[m]=[n]$, and likewise for quotients.

Those four properties are the whole content, and they are what the phrase *partially ordered collection* abbreviates here. They are asserted of a relation between representatives, not of a set: a subobject is a class rather than a set under this development's convention ([[rem-category-theory-class-and-size-conventions]]), so nothing below gathers the subobjects of $C$ into a collection. Along any set of monomorphisms into $C$ carrying exactly one representative of each class, the relation descends to an ordinary partial order on that set ([[def-partial-order]]); the later size hypotheses on this page are what produce such a set.

## Facts & Assumptions

**Given:** The subobject and quotient-object equivalence classes of an object $C$.

[L1] Mutually factoring monomorphisms, and dually epimorphisms, determine the same class through unique inverse factor maps ([[thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]]).

[L2] A **partial order** on a **set** $P$ is a binary relation $\le$ that is reflexive, antisymmetric, and transitive ([[def-partial-order]]). The cited definition is stated for a set, and this item does not claim its hypothesis: what is verified below are those same three conditions, clause by clause, for the factorisation relation between representatives of a fixed object's subobject and quotient-object classes. The cited definition applies verbatim only once a set of representatives is in hand.

## Proof

**Proof technique:** direct.

1.1 If $m'=m\circ a$ and $m=m'\circ a'$ represent the same subobject, and similarly $n'$ and $n$, then any factorisation $m=n\circ u$ transports by composition to a factorisation of $m'$ through $n'$, and conversely. Thus the relation is independent of representatives by [L1]. [L1]

2.1 Identity factorisations give reflexivity and composites give transitivity. If $[m]\le[n]$ and $[n]\le[m]$, then the representatives mutually factor, so [L1] makes their classes equal. The subobject relation is therefore reflexive, transitive and antisymmetric — the three conditions [L2] names — and by step 1.1 each is a statement about the classes rather than about chosen representatives. [step 1.1, L1, L2]

3.1 For quotient representatives the same argument is dual, but the order is reversed because $[q]\le[r]$ means that $r$ factors through $q$. Reflexivity, transitivity, and antisymmetry follow by the epic half of [L1]. [step 2.1, L1, L2]

4.1 Nothing in steps 1.1--3.1 quantifies over a collection whose members are subobjects: each is a statement about monomorphisms into $C$ and about the factorisation relation between them, which is what the bracket notation abbreviates. Restricting that relation to a set of monomorphisms into $C$ carrying one representative per class therefore gives a relation on a set satisfying the three conditions of [L2], hence a partial order there. [step 1.1, step 2.1, step 3.1, L2] ∎
