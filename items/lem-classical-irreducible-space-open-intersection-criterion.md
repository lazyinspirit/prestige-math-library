---
id: "lem-classical-irreducible-space-open-intersection-criterion"
kind: "lemma"
title: "Irreducibility is equivalent to the nonempty-open intersection criterion"
status: published
origin: "pipeline"
deps: ["def-classical-affine-variety-interface"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §2h p. 45"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

For a nonempty topological space $X$, irreducibility is equivalent to the intersection of every two nonempty open subsets being nonempty. Every nonempty open subspace of an irreducible space is itself irreducible and dense. This applies to the classical Zariski spaces.

## Facts & Assumptions

**Given:** A nonempty topological space $X$. For the inheritance assertions assume $X$ irreducible and let $U\subseteq X$ be nonempty open.

[F1] Irreducibility excludes a union of two proper closed subsets ([[def-classical-affine-variety-interface]]).

## Proof

**Proof technique:** direct.

1.1 Two disjoint nonempty opens $U,V$ give the proper closed cover $X=(X\setminus U)\cup(X\setminus V)$. Conversely a proper closed cover $X=C\cup D$ gives disjoint nonempty opens $X\setminus C,X\setminus D$. Taking complements proves both directions of the criterion. [F1, given]

2.1 If $U$ is nonempty open in irreducible $X$, each nonempty open $W$ of $X$ meets $U$ by step 1.1. Thus no proper closed subset of $X$ contains $U$, which says $\overline U=X$. If $V_1,V_2$ are nonempty opens of $U$, they are opens of $X$ because $U$ is open, so they intersect. The criterion makes $U$ irreducible. [step 1.1, given] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §2h p. 45. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
