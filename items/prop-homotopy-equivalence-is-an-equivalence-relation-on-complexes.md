---
id: prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes
kind: proposition
title: "Homotopy equivalence is an equivalence relation on complexes"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chain-homotopy-equivalence, lem-chain-homotopy-is-compatible-with-addition-and-composition]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Statement

Chain homotopy equivalence is an equivalence relation on chain complexes.

## Facts & Assumptions

**Given:** Chain complexes $C_\bullet,D_\bullet,E_\bullet$.

[L1] A homotopy equivalence is a chain map with a homotopy inverse ([[def-chain-homotopy-equivalence]]).

[L2] Chain homotopy is compatible with composition ([[lem-chain-homotopy-is-compatible-with-addition-and-composition]]).

## Proof

**Proof technique:** direct.

1.1 Every complex is homotopy equivalent to itself: the identity map is its own homotopy inverse, with the zero homotopies witnessing $$1_C1_C\simeq1_C,\qquad 1_C1_C\simeq1_C.$$ Symmetry is immediate by swapping a map with its chosen homotopy inverse. [L1, given, algebra]

2.1 If $f:C\to D$ has homotopy inverse $g$ and $u:D\to E$ has homotopy inverse $v$, then $$ (gv)(uf)=g(vu)f\simeq g1_Df=gf\simeq1_C $$ and similarly $(uf)(gv)\simeq1_E$ by [L2]. Hence $uf$ is again a homotopy equivalence. Together with step 1.1, this proves reflexivity, symmetry, and transitivity. [L1, L2, step 1.1, algebra] ∎
