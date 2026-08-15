---
id: ex-the-subobject-poset-of-the-integers-in-abelian-groups
kind: example
title: "The subobject poset of the integers in abelian groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-subobject-and-quotient-object, thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections, lem-subgroups-of-z-are-cyclic]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, example 4.7.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

The subobjects of the additive group $\mathbb Z$ in $\mathbf{Ab}$ are
represented uniquely by the inclusions $n\mathbb Z\hookrightarrow\mathbb Z$
for $n\in\mathbb N$. Their order is reverse divisibility:
$$[n\mathbb Z]\le[m\mathbb Z]\quad\Longleftrightarrow\quad m\mid n.$$
The least element is $0\mathbb Z=\{0\}$ and the greatest is
$1\mathbb Z=\mathbb Z$.

## Facts & Assumptions

**Given:** The additive group $\mathbb Z$.

[L1] Every subgroup of $\mathbb Z$ is $n\mathbb Z$ for a unique natural number $n$, with $0\mathbb Z=\{0\}$ ([[lem-subgroups-of-z-are-cyclic]]).

[L2] A subobject is a mutual-factorisation class of monomorphisms, ordered by factorisation toward the ambient object ([[def-subobject-and-quotient-object]]).

[L3] This factorisation relation is a well-defined partial order on subobject classes ([[thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections]]).

## Verification

**Proof technique:** direct.

1.1 A monomorphism $H\to\mathbb Z$ in $\mathbf{Ab}$ is, up to its unique isomorphism onto its image, represented by the inclusion of the subgroup $H'\le\mathbb Z$. By [L1], exactly one $n\in\mathbb N$ has $H'=n\mathbb Z$, so [L2] gives precisely the displayed representatives. [L1, L2]

1.2 The inclusion $n\mathbb Z\hookrightarrow\mathbb Z$ factors through $m\mathbb Z\hookrightarrow\mathbb Z$ exactly when $n\mathbb Z\subseteq m\mathbb Z$, which holds exactly when $m$ divides $n$. By [L2] and [L3], this is the subobject order. [L2, L3, algebra]

2.1 At $n=0$ the subgroup is $\{0\}$ and factors through every subgroup, whereas at $n=1$ it is all of $\mathbb Z$ and every subgroup factors through it. These are respectively the least and greatest classes. [step 1.2, L1] ∎
