---
id: ex-relative-homology-of-a-composable-pair-of-stalk-complexes
kind: example
title: "Relative homology of a composable pair of stalk complexes"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-long-exact-sequence-of-relative-homology-for-a-composable-pair]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-27
---

## Example

Fix nonzero integers $m$ and $n$. For the composable pair
$$\mathbb Z[0]\xrightarrow{\times m}\mathbb Z[0]\xrightarrow{\times n}\mathbb Z[0],$$
the relative homology groups are
$$H_0(D,C;\times m)\cong\mathbb Z/m,\quad H_0(E,C;\times nm)\cong\mathbb Z/(nm),\quad H_0(E,D;\times n)\cong\mathbb Z/n,$$
and all higher relative homology groups vanish. The long exact sequence of the
pair therefore collapses to
$$0\to \mathbb Z/m\xrightarrow{\,[x]\mapsto[nx]_{nm}\,}\mathbb Z/(nm)\to\mathbb Z/n\to0.$$

## Facts & Assumptions

**Given:** Nonzero integers $m$ and $n$.

[L1] A composable pair of chain maps has a long exact sequence of relative homology ([[thm-long-exact-sequence-of-relative-homology-for-a-composable-pair]]).

## Verification

**Proof technique:** direct.

1.1 Each relative homology group is the homology of a two-term cone complex with differential multiplication by $m$, $nm$, or $n$. Hence the displayed degree-$0$ groups are the corresponding cokernels and all higher groups vanish. [L1, given, algebra]

2.1 With only degree-$0$ terms remaining, [L1] collapses to a short exact sequence. The first map is multiplication by $n$ modulo $nm$, and the second is reduction modulo $n$, giving the displayed exact sequence. [L1, step 1.1, algebra] ∎

