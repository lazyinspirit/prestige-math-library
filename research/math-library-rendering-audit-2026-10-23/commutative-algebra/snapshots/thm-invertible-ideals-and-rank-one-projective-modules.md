---
id: thm-invertible-ideals-and-rank-one-projective-modules
kind: theorem
title: "Invertible fractional ideals are exactly the rank-one projective modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-invertible-fractional-ideal, thm-invertible-ideal-characterisations, lem-rank-one-projective-embedded-as-a-fractional-ideal, thm-associativity-of-balanced-tensor-products, thm-unit-isomorphisms-for-module-tensor-products]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "The Stacks Project, Section 10.78: Finite projective modules"
      url: "https://stacks.math.columbia.edu/tag/00NV"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $R$ be a domain with fraction field $K$.
A nonzero fractional ideal of $R$ is invertible if and only if, as an
$R$-module, it is finite projective and becomes $K$ after tensoring with $K$.
Equivalently, the finite projective $R$-modules of constant rank one are
precisely the invertible fractional ideals inside $K$.

## Facts & Assumptions

**Given:** A domain $R$ with fraction field $K$.

[F1] Invertibility of a fractional ideal means $I(R:I)=R$ ([[def-invertible-fractional-ideal]]).

[L1] A fractional ideal is invertible exactly when it is finite projective and locally principal at every maximal ideal ([[thm-invertible-ideal-characterisations]]).

[L2] Every finite projective module with $P\otimes_RK\cong K$ is isomorphic to a fractional ideal ([[lem-rank-one-projective-embedded-as-a-fractional-ideal]]).

## Proof

**Proof technique:** direct.

1.1 Let $I\subseteq K$ be an invertible fractional ideal. Then [L1] makes $I$ finite projective and locally free of rank one at every maximal ideal. After tensoring with the field $K$, the module $I\otimes_RK$ is a one-dimensional $K$-vector space, hence isomorphic to $K$. Thus invertible fractional ideals are finite rank-one projectives. [F1, L1, given, algebra]

1.2 Conversely, let $P$ be a finite projective module with $P\otimes_RK\cong K$. By [L2], it is isomorphic to a fractional ideal $I\subseteq K$. For every maximal ideal $\mathfrak m$, the localisation $P_{\mathfrak m}$ is a free rank-one module over the local ring $R_{\mathfrak m}$, so $I_{\mathfrak m}$ is principal. Therefore [L1] makes $I$ invertible. [L1, L2, given, algebra]

2.1 Steps 1.1 and 1.2 prove the equivalence between invertible fractional ideals and finite projective modules of constant rank one. [step 1.1, step 1.2] ∎
