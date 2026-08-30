---
id: cex-two-distinct-chain-maps-inducing-the-same-homology-map
kind: counterexample
title: "Two distinct chain maps inducing the same homology map"
status: draft
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-a-chain-map-is-determined-by-its-maps-on-homology,
       thm-abelian-groups-form-an-abelian-category]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement refuted

Two chain maps with the same induced maps on homology must be equal.

## Facts & Assumptions

**Given:** The complex $$0\to\mathbb Z\xrightarrow{1_{\mathbb Z}}\mathbb Z\to0$$ and its two endomorphisms $f=1_C$ and $g=0_C$.

[L1] $\mathbf{Ab}$ is an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

[L2] The corresponding A-page false statement is false ([[fs-a-chain-map-is-determined-by-its-maps-on-homology]]).

## Counterexample

**Proof technique:** direct.

1.1 The complex is acyclic, so every homology group is zero. The maps $f$ and $g$ are distinct because their degree-$1$ components are $1_{\mathbb Z}$ and $0$. [L1, given, algebra]

2.1 Since all homology groups vanish, both induced homology maps are zero in every degree. Therefore $f\neq g$ but they induce the same homology map, as claimed in [L2]. [L2, step 1.1] ∎
