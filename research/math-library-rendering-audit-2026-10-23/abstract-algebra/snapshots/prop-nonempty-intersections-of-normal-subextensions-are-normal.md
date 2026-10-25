---
id: prop-nonempty-intersections-of-normal-subextensions-are-normal
kind: proposition
title: 'A nonempty intersection of normal subextensions inside a common algebraic extension is normal'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-normal-algebraic-extension, thm-evaluation-kernel-and-minimal-polynomial, thm-polynomial-ring-over-a-field-is-a-ufd]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Lemma 9.15.8'
      url: 'https://stacks.math.columbia.edu/tag/09HP'
pipeline_run: frontier-12
---

## Statement

Let $M/F$ be an algebraic extension and let $(E_i)_{i\in I}$ be a nonempty family of intermediate fields such that every $E_i/F$ is normal. Then
$$ K=\bigcap_{i\in I}E_i $$
is a normal algebraic extension of $F$.

## Facts & Assumptions

**Given:** An algebraic extension $M/F$ and a nonempty family of normal intermediate extensions $E_i/F$.

[F1] In a normal extension, the minimal polynomial over the base of each element splits ([[def-normal-algebraic-extension]]).

[F2] Every algebraic element has a unique monic irreducible minimal polynomial ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[F3] For every field $L$, the polynomial ring $L[x]$ is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

## Proof

**Proof technique:** direct.

1.1 The intersection $K$ is an intermediate field of $M/F$. Since $M/F$ is algebraic, every element of $K$ is algebraic over $F$. [given]

1.2 Fix $\alpha\in K$ and let $m\in F[x]$ be its minimal polynomial from [F2]. For every $i\in I$, one has $\alpha\in E_i$, so [F1] makes $m$ split over $E_i$. [F1, F2]

2.1 Because $I$ is nonempty, choose $i_0\in I$ and write the linear factorisation of $m$ in $E_{i_0}[x]\subseteq M[x]$. For any $i\in I$, a linear factorisation also exists in $E_i[x]\subseteq M[x]$. Uniqueness of factorisation in the ring $M[x]$ from [F3] shows that the same roots, with the same multiplicities, occur in both factorizations. Hence every root from the first factorisation lies in every $E_i$, and therefore in $K$. [F3, step 1.2]

3.1 Thus the minimal polynomial of every $\alpha\in K$ splits over $K$. Together with algebraicity from step 1.1, [F1] shows that $K/F$ is normal. The nonempty hypothesis was used in step 2.1; without it the intersection convention could give the ambient $M$, which need not be normal. [F1, step 1.1, step 2.1] ∎
