---
id: prop-verma-composition-multiplicities-are-finite
kind: proposition
title: "Verma composition multiplicities are finite"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-a-verma-composition-factor-has-the-same-central-character, cor-central-characters-are-dot-weyl-orbits, prop-weights-of-a-verma-module-lie-below-lambda, prop-verma-and-finite-dimensional-modules-lie-in-category-o, lem-finite-dot-orbit-weight-spaces-detect-o-subquotients]
proof_strategy: direct
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Lemma 15.9"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (prop-verma-composition-multiplicities-are-finite). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice.

For any weights $\lambda,\mu$, the composition multiplicity $[M(\lambda):L(\mu)]$ is finite.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), central-character preservation [[lem-a-verma-composition-factor-has-the-same-central-character]], dot-orbit classification under that Choice premise [[cor-central-characters-are-dot-weyl-orbits]], the Verma weight cone [[prop-weights-of-a-verma-module-lie-below-lambda]], membership of Verma modules in category $\mathcal O$ [[prop-verma-and-finite-dimensional-modules-lie-in-category-o]], and the Choice-qualified finite weight-space detector [[lem-finite-dot-orbit-weight-spaces-detect-o-subquotients]].

## Proof

**Proof technique:** direct.

1.1 The Verma module $M(\lambda)$ belongs to $\mathcal O$ and its center acts by the scalar character $\chi_\lambda$, so it belongs to $\mathcal O_{\chi_\lambda}$. A simple factor $L(\mu)$ can occur only when $\mu$ is a weight below $\lambda$ and $\chi_\mu=\chi_\lambda$, hence under the stated Choice premise $\mu\in W\cdot\lambda$. The Weyl group is finite; no Casimir bound is needed for this finite list. [given]

2.1 The finite weight-space detector bounds the number of strict inclusions in any submodule chain of $M(\lambda)$. Choose a finite chain of maximum possible length among these bounded integer lengths. If one factor were not simple, an intermediate submodule would refine it, contradicting maximality; thus this is a composition series. Taking a fixed weight is exact on these weight-module subquotients. Each occurrence of $L(\mu)$ contributes its one-dimensional highest-weight space in degree $\mu$; other factors contribute a nonnegative dimension. Thus $[M(\lambda):L(\mu)]\le\dim M(\lambda)_\mu<\infty$. [given, step 1.1, algebra] ∎
