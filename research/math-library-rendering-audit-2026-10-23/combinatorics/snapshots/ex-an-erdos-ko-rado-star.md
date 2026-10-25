---
id: ex-an-erdos-ko-rado-star
kind: example
title: "All $k$-sets through a fixed point form an intersecting family attaining the Erdős-Ko-Rado bound"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-erdos-ko-rado, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Erdős-Ko-Rado theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Ko%E2%80%93Rado_theorem"
pipeline_run: null
---

## Example

Let $A$ be an $n$-element set with $1\le k$ and $n\ge2k$, and fix $a\in A$.
The star

$$\mathcal S_a=\{S\in[A]^k:a\in S\}$$

is intersecting and has cardinality $\binom{n-1}{k-1}$, attaining the
Erdős-Ko-Rado bound.

## Facts & Assumptions

**Given:** An $n$-element set $A$, natural numbers $1\le k$ and $n\ge2k$, and a point $a\in A$.

[L1] Erdős-Ko-Rado bounds an intersecting family of $k$-subsets by $\binom{n-1}{k-1}$ and states that a star attains the bound ([[thm-erdos-ko-rado]]).

[F1] $\binom{m}{j}$ counts the $j$-subsets of an $m$-element set ([[def-binomial-coefficient]]).

## Verification

**Proof technique:** direct.

1.1 Any two members of $\mathcal S_a$ intersect at $a$, so the star is intersecting. [given]

1.2 The map $S\mapsto S\setminus\{a\}$ is a bijection from $\mathcal S_a$ to the $(k-1)$-subsets of $A\setminus\{a\}$. Hence $|\mathcal S_a|=\binom{n-1}{k-1}$. [given, F1]

2.1 By [L1], step 1.2 equals the universal upper bound, so the star is extremal. [step 1.1, step 1.2, L1] ∎
