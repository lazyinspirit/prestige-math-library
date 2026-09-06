---
id: lem-morse-trajectories-have-positive-energy-drop
kind: lemma
title: "Morse trajectories have a positive energy drop"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-morse-trajectory-from-p-to-q, lem-negative-gradient-energy-identity, cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function]
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Lemma 13.1"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Statement

If $\gamma$ is a Morse trajectory from $p$ to $q$, then

$$ f(p)-f(q)=\int_{-\infty}^{\infty}\lVert\operatorname{grad}_g f(\gamma(t))\rVert_g^2\,dt>0. $$

## Facts & Assumptions

**Given:** A Morse trajectory $\gamma:\mathbb R\to M$ from $p$ to $q$.

[F1] Its endpoint limits are $p$ and $q$ and it is nonconstant ([[def-morse-trajectory-from-p-to-q]]).

[F2] Its energy identity is $(f\circ\gamma)'=-\lVert\operatorname{grad}_g f\rVert_g^2$ ([[lem-negative-gradient-energy-identity]]).

[F3] A nonconstant negative-gradient trajectory strictly decreases $f$ ([[cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function]]).

## Proof

**Proof technique:** direct.

1.1 Integrating [F2] on $[-T,T]$ gives $f(\gamma(-T))-f(\gamma(T))=\int_{-T}^{T}\lVert\operatorname{grad}_g f(\gamma(t))\rVert_g^2\,dt$. [F2, given]

2.1 Letting $T\to\infty$ and using [F1] and continuity of $f$ yields the stated improper-integral equality. [F1, step 1.1]

3.1 By [F3], $f\circ\gamma$ is strictly decreasing, so $f(p)>f(q)$. The equality in step 2.1 therefore has strictly positive value. [F3, step 2.1] ∎
