---
id: lem-bar-differential-and-augmentation-form-a-complex
kind: lemma
title: The bar boundary squares to zero and is augmented
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-two-sided-bar-resolution-of-an-associative-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9: Hochschild and Cyclic Homology, §9.1.3"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, Hochschild homology section"
      url: https://arxiv.org/pdf/math/0510265
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

For the bar maps of [[def-two-sided-bar-resolution-of-an-associative-algebra]],
$d_{n-1}d_n=0$ for $n\geq2$ and $\varepsilon d_1=0$. Thus the augmented bar
sequence is a chain complex of both left and right $A^e$-modules.

## Facts & Assumptions

**Given:** A unital associative algebra $A$ over a field $k$, with the bar terms,
faces, augmentation and outer $A^e$-actions defined in the cited item.

[F1] The maps are the alternating sum of adjacent-slot multiplication faces
([[def-two-sided-bar-resolution-of-an-associative-algebra]]).

[F2] Every adjacent-multiplication face is linear on both $A^e$ sides
([[def-two-sided-bar-resolution-of-an-associative-algebra]]).

[F3] The augmentation is multiplication and is linear on both $A^e$ sides
([[def-two-sided-bar-resolution-of-an-associative-algebra]]).

## Proof

**Proof technique:** direct.

For $n\geq1$, write $\partial_i^{(n)}$ for the face that multiplies slots $i$
and $i+1$, so $d_n=\sum_{i=0}^{n}(-1)^i\partial_i^{(n)}$.

1.1 If $0\leq i<j-1$, the two faces multiply disjoint pairs of slots; doing the later one first and reindexing it by one gives $\partial_i^{(n-1)}\partial_j^{(n)}=\partial_{j-1}^{(n-1)}\partial_i^{(n)}$. The products are independent and retain their order, so the identity holds on the tensor terms. [F1, given, algebra]

1.2 If $j=i+1$, both composites multiply the consecutive triple $a_i,a_{i+1},a_{i+2}$ into one slot, giving $a_i(a_{i+1}a_{i+2})=(a_i a_{i+1})a_{i+2}$ by associativity; thus the same face identity holds for every $i<j$. [F1, given, algebra]

1.3 In degree one, $\varepsilon d_1(a_0\otimes a_1\otimes a_2)=(a_0a_1)a_2-a_0(a_1a_2)=0$ by associativity, so $\varepsilon d_1=0$. [F3, given, algebra]

2.1 In the double sum for $d_{n-1}d_n$, terms indexed by $i<j$ pair with $(j-1,i)$, exactly the terms with first index at least the second. Steps 1.1 and 1.2 identify the composites, and $(-1)^{i+j}=-(-1)^{(j-1)+i}$, so every term cancels and $d_{n-1}d_n=0$ for every $n\geq2$. [step 1.1, step 1.2, F1, algebra]

3.1 By [F2] and [F3], all these maps are linear for both outer $A^e$ actions; steps 2.1 and 1.3 therefore give the augmented chain-complex identities in both module categories. [step 2.1, step 1.3, F2, F3, algebra] ∎

## Remark

For $0\leq i<j-1$, the bar faces multiply disjoint adjacent pairs; their
composites agree after the later face is reindexed by one. For $j=i+1$,
associativity on the overlapping triple gives the same face identity. These
are the internal adjacent-multiplication cases used in the proof above.
