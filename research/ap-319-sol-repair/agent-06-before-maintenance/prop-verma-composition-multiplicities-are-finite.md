---
id: prop-verma-composition-multiplicities-are-finite
kind: proposition
title: "Verma composition multiplicities are finite"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-verma-composition-factor-has-the-same-central-character, cor-central-characters-are-dot-weyl-orbits, prop-weights-of-a-verma-module-lie-below-lambda, prop-verma-and-finite-dimensional-modules-lie-in-category-o, lem-finite-dot-orbit-weight-spaces-detect-o-subquotients]
proof_strategy: direct
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Lemma 15.9"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

For any weights $\lambda,\mu$, the composition multiplicity $[M(\lambda):L(\mu)]$ is finite.

## Facts & Assumptions

**Given:** Central-character preservation [[lem-a-verma-composition-factor-has-the-same-central-character]], dot-orbit classification [[cor-central-characters-are-dot-weyl-orbits]], the Verma weight cone [[prop-weights-of-a-verma-module-lie-below-lambda]], membership of Verma modules in category $\mathcal O$ [[prop-verma-and-finite-dimensional-modules-lie-in-category-o]], and the finite weight-space detector [[lem-finite-dot-orbit-weight-spaces-detect-o-subquotients]].

## Proof

**Proof technique:** direct.

1.1 The Verma module $M(\lambda)$ belongs to $\mathcal O$ and its center acts by the scalar character $\chi_\lambda$, so it belongs to $\mathcal O_{\chi_\lambda}$. A simple factor $L(\mu)$ can occur only when $\mu$ is a weight below $\lambda$ and $\chi_\mu=\chi_\lambda$, hence $\mu\in W\cdot\lambda$. The Weyl group is finite; no Casimir bound is needed for this finite list. [given]

2.1 The finite weight-space detector bounds the number of strict inclusions in any submodule chain of $M(\lambda)$. Choose a finite chain of maximum possible length among these bounded integer lengths. If one factor were not simple, an intermediate submodule would refine it, contradicting maximality; thus this is a composition series. Taking a fixed weight is exact on these weight-module subquotients. Each occurrence of $L(\mu)$ contributes its one-dimensional highest-weight space in degree $\mu$; other factors contribute a nonnegative dimension. Thus $[M(\lambda):L(\mu)]\le\dim M(\lambda)_\mu<\infty$. [given, step 1.1, algebra] ∎
