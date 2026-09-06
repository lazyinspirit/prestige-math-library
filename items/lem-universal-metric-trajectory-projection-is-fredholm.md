---
id: lem-universal-metric-trajectory-projection-is-fredholm
kind: lemma
title: "The universal metric--trajectory projection is Fredholm"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-parametrized-morse-trajectory-space, def-fredholm-maps-and-regular-values-on-countable-banach-manifolds, def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian, lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex, Lemmas 2.23--2.24"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Statement

Fix distinct critical points $p,q$ of a Morse function on a closed manifold and take a sufficiently large finite $C^h$ Banach manifold $\mathcal G^h$ of metrics fixed near the critical points.  The zero set of the universal gradient-flow section near parametrized connecting trajectories is a Banach manifold, and its projection to $\mathcal G^h$ is Fredholm of index $\lambda(p)-\lambda(q)$.  The free time-translation quotient is a Banach manifold, and its induced projection is Fredholm of index $\lambda(p)-\lambda(q)-1$.

## Facts & Assumptions

**Given:** The finite-$C^h$ metric completion and the universal decaying trajectory section.

[F1] The fixed-metric linearized operator detects stable--unstable transversality ([[lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator]]).

[F2] Fredholm maps and their indices have the stated Banach-manifold meaning ([[def-fredholm-maps-and-regular-values-on-countable-banach-manifolds]]).

## Proof

**Proof technique:** direct.

1.1 Metric variations supported where $df\ne0$ supply the missing cokernel directions of the fixed-metric operator in [F1]; consequently the universal section linearization is onto. [F1, given]

2.1 The Banach implicit-function theorem therefore makes its zero set a Banach manifold.  Eliminating the trajectory variable leaves a Fredholm projection to the metric parameter, in the sense of [F2]. [F2, step 1.1]

3.1 The asymptotic Morse splitting computes the parametrized projection's index as $\lambda(p)-\lambda(q)$.  Time translation is free and contributes the one-dimensional kernel direction; passing to the quotient therefore lowers the induced projection's index to $\lambda(p)-\lambda(q)-1$. [step 2.1, algebra] ∎
