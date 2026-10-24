---
id: ex-regular-level-slices-for-unparametrized-trajectories
kind: example
title: "Regular-level slices for unparametrized trajectories"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories, thm-unparametrized-trajectory-space-is-a-smooth-manifold]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Michèle Audin and Mihai Damian, Morse Theory and Floer Homology, Remark 2.2.3"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Example

For $f(\theta)=\cos\theta$ on $S^1$, take $p=0$, $q=\pi$, and regular value $c=0$.  The level $f^{-1}(0)=\{\pi/2,3\pi/2\}$ has one point on each of the two downward orbit classes, so it realizes $\mathcal M(p,q)$ as a two-point slice.

## Facts & Assumptions

**Given:** The circle height flow and the regular value $0$.

[F1] A regular intervening level identifies an unparametrized moduli space with its trajectory slice ([[lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories]]).

## Verification

**Proof technique:** direct.

1.1 The two arcs from $0$ to $\pi$ cross $f^{-1}(0)$ respectively at $\pi/2$ and $3\pi/2$, and strict descent prevents a second crossing. [given]

2.1 By [F1], these two slice points are exactly the two unparametrized trajectory classes. [F1, step 1.1] ∎
