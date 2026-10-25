---
id: lem-rank-one-summand-of-a-finite-projective-dedekind-module
kind: lemma
title: "A nonzero finite projective module over a Dedekind domain splits off a rank-one summand"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-torsionfree-modules-over-dedekind-domains-are-projective, thm-invertible-ideals-and-rank-one-projective-modules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "The Stacks Project, Lemma 15.22.11"
      url: "https://stacks.math.columbia.edu/tag/0AUW"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $R$ be a Dedekind domain and let $M$ be a nonzero finite projective $R$-module. Then there exist a finite projective module $N$ and an invertible fractional ideal $I$ such that $M\cong N\oplus I$.

## Facts & Assumptions

**Given:** A Dedekind domain $R$, its fraction field $K$, and a nonzero finite projective $R$-module $M$.

[L1] Every finite torsion-free module over a Dedekind domain is projective ([[lem-finite-torsionfree-modules-over-dedekind-domains-are-projective]]).

[L2] Invertible fractional ideals are exactly the finite rank-one projective modules ([[thm-invertible-ideals-and-rank-one-projective-modules]]).

## Proof

**Proof technique:** direct.

1.1 The $K$-vector space $M_K:=M\otimes_RK$ is nonzero because $M$ is a nonzero projective module over a domain. Choose a nonzero $K$-linear functional $\lambda:M_K\to K$. Its image on the finite module $M$ is a finitely generated nonzero $R$-submodule $I:=\lambda(M)\subseteq K$, so $I$ is a fractional ideal. As a submodule of the field $K$, the module $I$ is torsion-free; since it is finitely generated, [L1] makes it projective. Because $\lambda_K:M_K\to K$ is surjective, one has $I\otimes_RK=K$, so $I$ has rank one. Therefore [L2] makes $I$ an invertible fractional ideal. [L1, L2, given, choose, algebra]

2.1 The restricted map $M\to I$ is surjective by construction. Since $I$ is projective by step 1.1, this surjection splits. Therefore $M\cong\ker(\lambda|_M)\oplus I$. Put $N:=\ker(\lambda|_M)$. Then $N$ is finite projective as a direct summand of $M$. [L1, step 1.1, algebra] ∎
