---
id: prop-identities-and-composites-of-chain-maps-are-chain-maps
kind: proposition
title: "Identities and composites of chain maps are chain maps"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chain-map]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement

For every chain complex $C_\bullet$, the identity family $1_{C_n}$ is a chain
map $1_C:C\to C$. If $f:C\to D$ and $g:D\to E$ are chain maps, then the
componentwise composite $(g_n f_n)_n$ is a chain map $g\circ f:C\to E$.

## Facts & Assumptions

**Given:** Chain complexes $C_\bullet,D_\bullet,E_\bullet$ and chain maps $f:C\to D$, $g:D\to E$.

[L1] A chain map is a degree-zero family commuting with the differentials ([[def-chain-map]]).

## Proof

**Proof technique:** direct.

1.1 For the identity family, $$d_n^C\circ 1_{C_n}=1_{C_{n-1}}\circ d_n^C$$ holds trivially in every degree, so [L1] makes $1_C$ a chain map. [L1, given, algebra]

2.1 Since $f$ and $g$ are chain maps, [L1] gives $d_n^E g_n=g_{n-1} d_n^D$ and $d_n^D f_n=f_{n-1} d_n^C$. Therefore $$d_n^E(g_n f_n)=g_{n-1}(d_n^D f_n)=g_{n-1}f_{n-1}d_n^C,$$ so the composite family again satisfies [L1]. [L1, given, algebra] ∎
