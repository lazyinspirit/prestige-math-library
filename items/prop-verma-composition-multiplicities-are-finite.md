---
id: prop-verma-composition-multiplicities-are-finite
kind: proposition
title: "Verma composition multiplicities are finite"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-verma-composition-factor-has-the-same-central-character, cor-central-characters-are-dot-weyl-orbits, prop-casimir-eigenvalue-on-a-highest-weight-module, prop-weights-of-a-verma-module-lie-below-lambda]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Lemma 15.9"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

For any weights $\lambda,\mu$, the composition multiplicity $[M(\lambda):L(\mu)]$ is finite.

## Facts & Assumptions

**Given:** Central-character preservation [[lem-a-verma-composition-factor-has-the-same-central-character]], dot-orbit classification [[cor-central-characters-are-dot-weyl-orbits]], Casimir scalars [[prop-casimir-eigenvalue-on-a-highest-weight-module]], and the Verma weight cone [[prop-weights-of-a-verma-module-lie-below-lambda]].

## Proof

**Proof technique:** direct.

1.1 A factor $L(\mu)$ can occur only when $\mu$ is both a weight below $\lambda$ and in the dot orbit fixed by its central character. The Casimir equality restricts the possible lattice differences in each bounded weight cone to a finite set. [given]

2.1 In particular, the $\mu$-weight space of $M(\lambda)$ is finite-dimensional and every copy of $L(\mu)$ contributes its one-dimensional highest-weight line there. Therefore the multiplicity is bounded by $\dim M(\lambda)_\mu<\infty$. [step 1.1, algebra] ∎
