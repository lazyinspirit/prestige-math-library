---
id: thm-schreier-refinement-theorem
kind: theorem
title: "The Schreier refinement theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-subnormal-normal-series-refinement-and-equivalence, thm-zassenhaus-butterfly-lemma]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

Any two finite subnormal series of a group have equivalent refinements ([[def-subnormal-normal-series-refinement-and-equivalence]]).

## Facts & Assumptions

**Given:** Subnormal series $G=G_0\trianglerighteq\cdots\trianglerighteq G_m=1$ and $G=H_0\trianglerighteq\cdots\trianglerighteq H_n=1$.

[F1] A refinement inserts subgroup terms, and two series are equivalent when their nontrivial factors can be paired up to isomorphism after repetitions are deleted ([[def-subnormal-normal-series-refinement-and-equivalence]]).

[L1] For $A\trianglelefteq A^*$ and $B\trianglelefteq B^*$, the butterfly constructions give normal adjacent terms and isomorphic quotient factors ([[thm-zassenhaus-butterfly-lemma]]).

## Proof

**Proof technique:** direct.

1.1 For $0\le i<m$ and $0\le j\le n$, set $G_{i,j}:=G_{i+1}(G_i\cap H_j)$. Then $G_{i,0}=G_i$ and $G_{i,n}=G_{i+1}$; [L1] applied to $G_{i+1}\trianglelefteq G_i$ and $H_{j+1}\trianglelefteq H_j$ gives $G_{i,j+1}\trianglelefteq G_{i,j}$. [given, L1]

1.2 For $0\le j<n$ and $0\le i\le m$, set $H_{j,i}:=(G_i\cap H_j)H_{j+1}$. Concatenating these chains gives a subnormal refinement of the $H$-series. [given, L1, F1]

2.1 Concatenating the finite chains $G_{i,0}\trianglerighteq\cdots\trianglerighteq G_{i,n}$ over $i=0,\ldots,m-1$ yields a subnormal refinement of the $G$-series, possibly with repeated adjacent terms. [step 1.1, F1]

2.2 For every cell $(i,j)$, [L1] identifies $G_{i,j}/G_{i,j+1}$ with $H_{j,i}/H_{j,i+1}$. Thus the two refinements have their $mn$ displayed factors paired by $(i,j)\leftrightarrow(j,i)$. [step 1.1, step 1.2, L1]

3.1 Deleting repeated adjacent terms deletes exactly the trivial factors on both sides of each paired cell, so the remaining factors are still paired and isomorphic; the refinements are equivalent. [step 2.1, step 2.2, F1] ∎
