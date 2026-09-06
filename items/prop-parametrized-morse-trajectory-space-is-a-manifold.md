---
id: prop-parametrized-morse-trajectory-space-is-a-manifold
kind: proposition
title: "A parametrized Morse trajectory space is a manifold"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-morse-smale-pair, def-parametrized-morse-trajectory-space, thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces, thm-transverse-fibre-product-theorem]
proof_strategy: direct
sources:
  references:
    - title: "Michèle Audin and Mihai Damian, Morse Theory and Floer Homology, §2.2.b"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Statement

Let $(f,X)$ be Morse--Smale on an $n$-manifold.  For distinct critical points $p,q$, $\widetilde{\mathcal M}(p,q)$ is a smooth manifold of dimension $\lambda(p)-\lambda(q)$ (and is empty if the transverse fibre product is empty).

## Facts & Assumptions

**Given:** A Morse--Smale pair $(f,X)$ and distinct critical points $p,q$.

[F1] The global unstable and stable manifolds are immersed of dimensions $\lambda(p)$ and $n-\lambda(q)$ ([[thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces]]).

[F2] A transverse fibre product of smooth maps is an embedded submanifold of the product ([[thm-transverse-fibre-product-theorem]]).

## Proof

**Proof technique:** direct.

1.1 The Morse--Smale condition says that the two immersion maps from $W^u(p)$ and $W^s(q)$ are transverse.  Thus [F2] makes their fibre product a smooth manifold.  Its evaluation image is precisely $W^u(p)\cap W^s(q)$, hence, by the point-marked convention, $\widetilde{\mathcal M}(p,q)$. [F2, given]

2.1 The dimension of that transverse fibre product is $\lambda(p)+(n-\lambda(q))-n=\lambda(p)-\lambda(q)$ by [F1]. [F1, step 1.1, algebra] ∎
