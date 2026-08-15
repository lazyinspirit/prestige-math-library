---
id: ex-the-solution-set-for-groups-computed-on-a-two-element-set
kind: example
title: "The canonical group solution set on a two-element set"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-solution-set-for-the-underlying-set-functor-on-groups]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Leinster, Basic Category Theory, appendix A"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: null
---

## Example

For the two-element set $S=\{x,y\}$, the canonical solution set for the
underlying-set functor on groups consists of the maps
$$S\longrightarrow U(F(S)/N)$$
as $N$ ranges over the normal subgroups of the free group $F(S)$. For example,
the map sending both $x$ and $y$ to the nonidentity element of
$\mathbb Z/2\mathbb Z$ occurs through the quotient by its induced kernel.

## Facts & Assumptions

**Given:** The set $S=\{x,y\}$.

[L1] For every set $S$, the quotient maps $S\to U(F(S)/N)$ indexed by normal subgroups $N\trianglelefteq F(S)$ form a solution set for the underlying-set functor on groups ([[thm-the-solution-set-for-the-underlying-set-functor-on-groups]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] to the two-element set $S$. The normal subgroups of the set-sized group $F(S)$ form a set, so the displayed family is the promised solution set. [L1]

1.2 Let $C=\mathbb Z/2\mathbb Z$ and map both $x$ and $y$ to its nonidentity element. Freeness extends this function uniquely to a homomorphism $\widehat f:F(S)\to C$. Its kernel $N$ is normal, and the induced injection $F(S)/N\to C$ factors the original map through the member indexed by $N$. [L1, algebra]

2.1 More generally, [L1] gives this kernel-quotient factorisation for every map from $S$ into an underlying group, which verifies the solution-set property rather than only listing the quotients. [step 1.1, L1] ∎
