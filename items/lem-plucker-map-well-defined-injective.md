---
id: lem-plucker-map-well-defined-injective
kind: lemma
title: The Plucker map is well defined and injective
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plucker-coordinates, thm-exterior-algebra-laws, thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, Proposition 6.29 and Remark 6.34
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

The Plucker map $\operatorname{pl}:\operatorname{Gr}(r,V)\to\mathbf P(\Lambda^rV)$ is well defined and injective.

## Proof

**Given:** An $r$-plane $S$ with ordered basis $(v_1,\ldots,v_r)$.

1.1 A change of basis multiplies $v_1\wedge\cdots\wedge v_r$ by its nonzero determinant, so its projective line is independent of the chosen basis. The wedge is nonzero because the basis is independent. [given, algebra]

2.1 Let $w=v_1\wedge\cdots\wedge v_r$. A vector $u$ satisfies $u\wedge w=0$ exactly when $u\in S$: one direction has a repeated vector, and the other follows because $u,v_1,\ldots,v_r$ are independent when $u\notin S$, so their wedge is nonzero. [step 1.1, algebra]

3.1 This annihilator description recovers $S$ from the projective line $[w]$. Equal Plucker points therefore determine equal subspaces. [step 2.1] ∎
