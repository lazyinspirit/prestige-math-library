---
id: thm-unparametrized-trajectory-space-is-a-smooth-manifold
kind: theorem
title: "The unparametrized trajectory space is a smooth manifold"
status: published
verification:
  audited: 2026-09-07
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-morse-smale-pair, prop-parametrized-morse-trajectory-space-is-a-manifold, def-unparametrized-morse-trajectory-moduli-space, lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories, thm-transverse-fibre-product-theorem]
proof_strategy: direct
sources:
  references:
    - title: "Michèle Audin and Mihai Damian, Morse Theory and Floer Homology, §2.2.b"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Statement

For a Morse--Smale pair and distinct critical points $p,q$, $\mathcal M(p,q)$ is a smooth manifold of dimension $\lambda(p)-\lambda(q)-1$.

## Facts & Assumptions

**Given:** A Morse--Smale pair and distinct $p,q$ with nonempty $\widetilde{\mathcal M}(p,q)$.

[F1] The parametrized space is a smooth manifold of dimension $\lambda(p)-\lambda(q)$ ([[prop-parametrized-morse-trajectory-space-is-a-manifold]]).

[F2] A regular intermediate level gives one representative of each time orbit ([[lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories]]).

## Proof

**Proof technique:** direct.

1.1 Choose a regular $c$ strictly between $f(q)$ and $f(p)$.  The map $f$ restricted to $\widetilde{\mathcal M}(p,q)$ has nonzero derivative along the flow direction, since $df(X)<0$ away from critical points.  Hence its $c$-level is a codimension-one smooth submanifold. [F1, given, algebra]

2.1 By [F2], that level is bijective to $\mathcal M(p,q)$; transport its smooth structure across this bijection.  Its dimension is $\lambda(p)-\lambda(q)-1$ by [F1] and step 1.1. [F1, F2, step 1.1, algebra] ∎
