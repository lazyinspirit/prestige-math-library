---
id: ex-steinitz-class-rank-two-module
kind: example
title: "A rank-two module and its ideal-class label"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-finite-torsionfree-modules-over-dedekind-domains, thm-ideal-class-group-is-the-picard-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Example

Assume the Axiom of Choice. Let $R$ be a Dedekind domain and let $I$ be an invertible fractional ideal.
Then the module
$$
M:=R\oplus I
$$
is a finite torsion-free module of rank $2$, and under the class-group
identification its second summand contributes the class
$[I]\in\operatorname{Cl}(R)$.

## Facts & Assumptions

**Given:** A Dedekind domain $R$ and an invertible fractional ideal $I$.

[L1] Every finite torsion-free Dedekind module splits as a finite direct sum of invertible fractional ideals ([[thm-finite-torsionfree-modules-over-dedekind-domains]]).

[L2] The ideal class group agrees with the Picard group of rank-one projectives ([[thm-ideal-class-group-is-the-picard-group]]).

## Verification

**Proof technique:** direct.

1.1 The module $M=R\oplus I$ is already displayed as a direct sum of two invertible ideal summands, so it is finite torsion-free and fits the decomposition pattern of [L1]. [L1, given]

2.1 Under the identification of [L2], the free summand $R$ contributes the neutral Picard class and the other summand contributes exactly the class of $I$. Thus the rank-two module $M$ is labelled by the same ideal class $[I]$. [L2, step 1.1] ∎
