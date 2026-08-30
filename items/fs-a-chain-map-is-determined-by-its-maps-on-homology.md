---
id: fs-a-chain-map-is-determined-by-its-maps-on-homology
kind: false-statement
title: "FALSE: a chain map is determined by its maps on homology"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-chain-map-induces-a-well-defined-map-on-homology,
       thm-abelian-groups-form-an-abelian-category]
proof_strategy: direct
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

If two chain maps induce the same morphism on every homology object, then the
two chain maps are equal.

## Facts & Assumptions

**Given:** The two-term complex $$0\to\mathbb Z\xrightarrow{1_{\mathbb Z}}\mathbb Z\to0$$ and the endomorphisms $f=1_C$ and $g=0_C$ of this complex.

[L1] $\mathbf{Ab}$ is an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

[L2] Chain maps induce homology maps ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

## Refutation

**Proof technique:** direct.

1.1 The complex is acyclic: in degree $1$ the kernel of $1_{\mathbb Z}$ is $0$, and in degree $0$ the cokernel of $1_{\mathbb Z}$ is also $0$. Hence all its homology objects are zero. The maps $f$ and $g$ are distinct because $f_1=1_{\mathbb Z}$ while $g_1=0$. [L1, given, algebra]

2.1 By [L2], both $f$ and $g$ induce the zero endomorphism on every homology object, since those homology objects are zero by step 1.1. Therefore equal homology maps do not force equality of chain maps. [L2, step 1.1] ∎
