---
id: ex-the-reflection-bijection-on-a-concrete-path
kind: example
title: "The reflection bijection applied to $UDDUDU$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [lem-reflection-at-the-first-visit-to-a-level-is-a-bijection, thm-catalan-numbers-by-reflection, def-diagonal-lattice-path-and-its-height, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.3'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Example

Take the diagonal path with step word `UDDUDU`. Its height sequence is

$$0,1,0,-1,0,-1,0.$$

The first visit to the level $-1$ is at index $3$. Reflecting the initial
segment through the line $y=-1$ changes the first four heights to

$$-2,-3,-2,-1,$$

so the reflected path has step word `DUUUDU` and runs from $(0,-2)$ to $(6,0)$.

## Facts & Assumptions

**Given:** the path `UDDUDU`.

[L1] If $a>c$ and $b>c$, reflection sends a path from $(0,a)$ to $(n,b)$ that first visits level $c$ at $\tau$ to the path with heights $h'(i)=2c-h(i)$ for $i\le\tau$ and $h'(i)=h(i)$ for $i\ge\tau$; this is a bijection onto the paths from $(0,2c-a)$ to $(n,b)$ ([[lem-reflection-at-the-first-visit-to-a-level-is-a-bijection]]).

[L2] The Catalan count at semilength $3$ is $C_3=\binom{6}{3}-\binom{6}{4}=5$ ([[thm-catalan-numbers-by-reflection]], [[def-binomial-coefficient]]).

## Verification

**Proof technique:** direct.

1.1 The path `UDDUDU` starts at height $0$, ends at height $0$, and first reaches the level $-1$ at the index $3$. [given]

2.1 Reflecting the heights $0,1,0,-1$ through the line $y=-1$ gives $-2,-3,-2,-1$, so the reflected step word is `DUUUDU`; applying the same reflection to `DUUUDU` returns `UDDUDU`. [L1, step 1.1]

3.1 The count behind the example agrees with [L2]: there are $\binom{6}{3}=20$ diagonal paths from $(0,0)$ to $(6,0)$, $\binom{6}{4}=15$ of them touch the level $-1$, and the remaining $5$ are the Dyck paths of semilength $3$. [L2] ∎

## Remarks

- The reflected path is not a Dyck path; that is the whole point. The bijection removes exactly the paths that touch the forbidden level.
