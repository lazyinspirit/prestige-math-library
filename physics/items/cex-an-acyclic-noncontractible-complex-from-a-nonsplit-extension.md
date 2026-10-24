---
id: cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension
kind: counterexample
title: "An acyclic noncontractible complex from a nonsplit extension"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-a-contractible-complex-is-acyclic, prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category, thm-abelian-groups-form-an-abelian-category]
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

## Statement refuted

Every acyclic complex is contractible.

## Facts & Assumptions

**Given:** The three-term complex $$0\to\mathbb Z\xrightarrow{2}\mathbb Z\xrightarrow{\bmod 2}\mathbb Z/2\to0.$$

[L1] Every contractible complex is acyclic ([[cor-a-contractible-complex-is-acyclic]]).

[L2] Being zero in the homotopy category is stronger than having zero homology ([[prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category]]).

[L3] $\mathbf{Ab}$ is an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

## Counterexample

**Proof technique:** direct.

1.1 The complex is acyclic: multiplication by $2$ is injective, reduction mod $2$ is surjective, and its kernel is $2\mathbb Z$, which is the image of the first map. [L3, given, algebra]

2.1 If the complex were contractible, its identity map would be null-homotopic. In degree $0$, that would force the surjection $\mathbb Z\to\mathbb Z/2$ to have a section, so the short exact sequence would split. It does not split, so the complex is not contractible. Hence the displayed complex refutes the statement, exactly as [L2] warns; [L1] remains true as the forward implication. [L1, L2, step 1.1, algebra] ∎
