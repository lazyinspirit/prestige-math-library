---
id: ex-sheaf-continuous-real-functions
kind: example
title: "Continuous real-valued functions form a sheaf"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sheaf-on-topological-space]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Example 7.3"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Example

For each open set $U\subseteq X$, let
$$C^0(U,\mathbb R):=\{f:U\to\mathbb R \text{ continuous}\}.$$
With the usual restriction of functions, this is a sheaf of sets on $X$.

## Facts & Assumptions

**Given:** An open cover $U=\bigcup_{i\in I}U_i$ of an open set $U$.

[L1] A sheaf is exactly a presheaf with locality and unique gluing on every
open cover ([[def-sheaf-on-topological-space]]).

## Verification

**Proof technique:** direct.

1.1 Restriction of a continuous function is continuous, so $U\mapsto C^0(U,\mathbb R)$ is a presheaf. If two continuous functions on $U$ agree on every $U_i$, then they agree pointwise on all of $U$ because the $U_i$ cover $U$. [given]

2.1 Let $f_i\in C^0(U_i,\mathbb R)$ be compatible on overlaps. Define $f:U\to\mathbb R$ by $f(x)=f_i(x)$ for any $i$ with $x\in U_i$. Compatibility makes this well defined, and continuity is local on the open cover because $f|_{U_i}=f_i$ is continuous for each $i$. Thus [L1] holds. [L1, given, construct] ∎
