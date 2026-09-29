---
id: lem-exact-free-complex-reduction-nonzerodivisor
kind: lemma
title: Reduction of an exact free complex by a nonzerodivisor stays exact above degree one
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - thm-long-exact-sequence-in-homology
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
    - title: "The Stacks Project, Algebra, Lemma 10.102.7 (tag 00MZ), reduction of exact free complexes"
      url: https://stacks.math.columbia.edu/tag/00MZ
---

## Statement

Let $(R,\mathfrak m)$ be a local
ring, let $x\in\mathfrak m$ be a nonzerodivisor, and let
$F_\bullet:0\to F_e\to F_{e-1}\to\cdots\to F_0$
be a finite complex of finite free $R$-modules. If
$H_j(F_\bullet)=0$ for every $j\ge1$, then
$H_j(F_\bullet/xF_\bullet)=0$ for every $j\ge2$.
Equivalently, the reduced complex is exact at all its
terms of degree at least two. The degree-one homology can
appear from $x$-torsion in the original cokernel.

## Facts & Assumptions

**Given:** The local ring, nonzerodivisor, finite free complex, and exactness in positive degrees.

[F1] A short exact sequence of complexes gives a long exact sequence in homology ([[thm-long-exact-sequence-in-homology]]).

## Proof

**Proof technique:** use the homology sequence of multiplication by the nonzerodivisor.

1.1 Because each $F_j$ is free and $x$ is a nonzerodivisor on $R$, multiplication by $x$ is injective on every $F_j$. Thus $$0\to F_\bullet\xrightarrow{x}F_\bullet \to F_\bullet/xF_\bullet\to0$$ is a short exact sequence of complexes. [F1]

2.1 By [F1], for $j\ge2$ the segment $$H_j(F_\bullet)\xrightarrow{x}H_j(F_\bullet) \to H_j(F_\bullet/xF_\bullet) \to H_{j-1}(F_\bullet)$$ is exact. Both outer groups vanish by hypothesis, so $H_j(F_\bullet/xF_\bullet)=0$. At $j=1$ the last group is $H_0(F_\bullet)$, which need not be $x$-torsion-free; no degree-one conclusion is claimed. [F1, step 1.1] ∎
