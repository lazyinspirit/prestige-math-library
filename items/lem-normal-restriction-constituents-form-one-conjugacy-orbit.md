---
id: "lem-normal-restriction-constituents-form-one-conjugacy-orbit"
kind: "lemma"
title: "Normal restriction has one orbit of constituents"
status: "draft"
origin: "pipeline"
deps: ["lem-normal-isotypical-components-are-permuted-by-translation"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — §4.2 p.54, Proposition 4.2.2 and following formula; Späth Theorem 1.1"
      url: "https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf"
proof_strategy: direct
---

## Statement

Let $G$ be finite, $N\trianglelefteq G$, and $V$ an irreducible complex $G$-module. If $\theta$ is a constituent of $V|_N$, the constituents of $V|_N$ are exactly the $G$-orbit of $\theta$ under left conjugation, and each has the same positive integer multiplicity.

## Facts & Assumptions

**Given:** The groups, modules, characters, and hypotheses in the statement. All representations here are finite-dimensional complex left representations.

[F1] Translation carries $V_\psi$ onto $V_{{}^g\psi}$, and the restriction is the direct sum of its isotypical components. ([[lem-normal-isotypical-components-are-permuted-by-translation]]).

## Proof

**Proof technique:** direct.

1.1 The sum of the components indexed by the orbit of $\theta$ is nonzero because $V_\theta\ne0$. Translation permutes these components, so their sum is $G$-stable. Irreducibility makes it all of $V$, leaving no other types. [F1, given]

2.1 The linear isomorphism $v\mapsto gv$ gives $\dim V_{{}^g\theta}=\dim V_\theta$. Conjugate simple modules have the same dimension, since twisting changes only the action. Dividing component dimensions by this common simple dimension proves equality of multiplicities, each positive because its component is nonzero. This also covers a one-element orbit. [F1, step 1.1, algebra] ∎
