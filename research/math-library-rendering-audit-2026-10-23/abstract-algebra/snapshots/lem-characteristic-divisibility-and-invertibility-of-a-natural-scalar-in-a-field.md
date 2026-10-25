---
id: lem-characteristic-divisibility-and-invertibility-of-a-natural-scalar-in-a-field
kind: lemma
title: "Invertibility of a positive natural scalar in a field"
status: published
origin: pipeline
pipeline_run: phase-2-wave-1
deps: [def-field, lem-characteristic-and-additive-order]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Etingof et al., Introduction to Representation Theory"
      url: "https://math.mit.edu/~etingof/reprbook.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10 (2022)"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
---

## Statement

Let $k$ be a field and $n>0$ an integer. Then $n\cdot1_k$ is invertible if and only if $\operatorname{char}(k)\nmid n$. Divisibility is in $\mathbb Z$; in particular, $0$ divides no positive integer.

## Facts & Assumptions

**Given:** A field $k$ and an integer $n>0$.

[F1] In a field $0\ne1$, distributivity holds and every nonzero scalar has an inverse ([[def-field]]).

[F2] For any integer $n$, $n\cdot1_k=0$ if and only if $\operatorname{char}(k)\mid n$ ([[lem-characteristic-and-additive-order]]).

## Proof

**Proof technique:** direct.

1.1 Put $s=n\cdot1_k$. For every $t\in k$, distributivity gives $0t=(0+0)t=0t+0t$, so cancellation gives $0t=0$. Since $0\ne1$, the scalar zero is not invertible. If $s$ is invertible, it is therefore nonzero, and the equivalence in F2 gives $\operatorname{char}(k)\nmid n$. [F1, F2]

1.2 Conversely, if $\operatorname{char}(k)\nmid n$, F2 gives $s\ne0$, and the field inverse axiom gives $s^{-1}\in k$ with $ss^{-1}=s^{-1}s=1$. [F1, F2]

2.1 By integer divisibility, $0\mid n$ would mean $n=0q=0$ for some integer $q$, impossible for $n>0$. Thus characteristic zero is included. At $n=1$, the scalar is $1_k$ with inverse $1_k$. Together with the two implications this proves the claim. [step 1.1, step 1.2, F2, F1] ∎

## Sources

[Milne, Fields and Galois Theory](https://www.jmilne.org/math/CourseNotes/FT.pdf), pp. 8–9, characteristic cases 1–2. The normalization motivating this interface occurs in [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), Theorem 4.1.1, pp. 61–62.
