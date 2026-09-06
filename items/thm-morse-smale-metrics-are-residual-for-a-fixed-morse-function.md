---
id: thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function
kind: theorem
title: "Morse--Smale metrics are residual for a fixed Morse function"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-morse-smale-pair, def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian, def-nowhere-dense-meagre-and-residual-subsets, thm-sard-smale-residual-regular-values-for-fredholm-maps, lem-universal-metric-trajectory-projection-is-fredholm, lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex, §2.12"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Statement

Assume dependent choice.  Let $M$ be closed and $f:M\to\mathbb R$ Morse.  The set of smooth Riemannian metrics $g$ for which $(f,g)$ is Morse--Smale is residual in the $C^\infty$ metric space.

## Facts & Assumptions

**Given:** Dependent choice, a closed manifold $M$, and a fixed Morse function $f$.

[F1] A fixed pair of critical points is transverse for a residual set of smooth metrics ([[lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics]]).

[F2] A Morse function on a compact manifold has finitely many critical points.

## Proof

**Proof technique:** direct.

1.1 By [F2], there are only finitely many ordered pairs $(p,q)$ of critical points.  For each pair, take the residual set of metrics supplied by [F1]. [F1, F2, given]

2.1 Their finite intersection is residual and consists exactly of metrics for which every $W^u(p)$ is transverse to every $W^s(q)$, namely the Morse--Smale metrics. [F1, step 1.1]

3.1 Thus the conclusion is residual in the smooth metric space.  No openness or simultaneous statement about varying functions or continuation families has been used. [step 2.1] ∎
