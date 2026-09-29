---
id: lem-free-complex-unit-entry-splits-contractible-pair
kind: lemma
title: A unit differential entry splits a contractible two-term summand
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.102.2 (tag 00MT), unit-entry splitting"
      url: https://stacks.math.columbia.edu/tag/00MT
---

## Statement

Let $R$ be a commutative ring and $F_\bullet$ a complex
of finite free $R$-modules. If one matrix coefficient of
$d_i:F_i\to F_{i-1}$ is a unit, then $F_\bullet$ is
isomorphic as a complex to the direct sum of a shorter
complex and the contractible two-term complex
$0\to R\xrightarrow{1}R\to0$ in degrees $i,i-1$.
The shorter complex has ranks one smaller in those
two degrees and the same ranks elsewhere.

## Facts & Assumptions

**Given:** The finite free complex and one invertible matrix coefficient of its differential.

[F1] Elementary row and column operations using a unit preserve free bases. The complex identities are $d_{i-1}d_i=0$ and $d_id_{i+1}=0$.

## Proof

**Proof technique:** clear the unit row and column, then use the complex identities to separate adjacent maps.

1.1 Permute bases to move the unit coefficient to the first row and column of $d_i$, and scale the source basis vector to make it $1$. Subtract its multiples from the remaining target basis vectors to clear the first column, then subtract multiples of the first source basis vector to clear the first row. These are invertible basis changes, and in the resulting decompositions $F_i=R\oplus F_i'$ and $F_{i-1}=R\oplus F_{i-1}'$ the map is $d_i=1_R\oplus d_i'$. [F1]

2.1 The equation $d_id_{i+1}=0$ forces the component of $d_{i+1}$ landing in the displayed $R\subseteq F_i$ to be zero, because $d_i$ is identity there. Likewise $d_{i-1}d_i=0$ forces $d_{i-1}$ to vanish on the displayed $R\subseteq F_{i-1}$. All other differentials already avoid these two summands. Thus the displayed identity pair is a direct summand as a complex, and the complement is the shorter complex in the Statement. No choice principle beyond finite basis operations is used. [F1, step 1.1] ∎
