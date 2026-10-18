---
id: prop-parametrized-morse-trajectory-space-is-a-manifold
kind: proposition
title: "A parametrized Morse trajectory space is a manifold"
status: published
verification:
  audited: 2026-09-07
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-step2-root-published-recording/receipts/prop-parametrized-morse-trajectory-space-is-a-manifold.json
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ def-morse-smale-pair, def-parametrized-morse-trajectory-space, thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces, thm-transverse-fibre-product-theorem ]
proof_strategy: direct
sources:
  references:
    - title: "Michèle Audin and Mihai Damian, Morse Theory and Floer Homology, §2.2.b"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Statement

Let $(f,X)$ be Morse--Smale on an $n$-manifold. For distinct critical points $p,q$, $\widetilde{\mathcal M}(p,q)$ is a smooth manifold, possibly empty. When nonempty, it has dimension $\lambda(p)-\lambda(q)$. If $\lambda(p)<\lambda(q)$, it is empty.

## Facts & Assumptions

**Given:** A Morse--Smale pair $(f,X)$ and distinct critical points $p,q$.

[F1] The global unstable and stable manifolds are immersed of dimensions $\lambda(p)$ and $n-\lambda(q)$ ([[thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces]]).

[F2] For transverse smooth maps $F:A\to N$ and $G:B\to N$, their fibre product is an embedded submanifold of $A\times B$, possibly empty. When nonempty, each component has dimension $\dim A+\dim B-\dim N$; in particular it is empty if this difference is negative ([[thm-transverse-fibre-product-theorem]]).

## Proof

**Proof technique:** direct.

1.1 The Morse--Smale condition says that the two immersion maps from $W^u(p)$ and $W^s(q)$ are transverse.  Thus [F2] makes their fibre product a smooth manifold.  Its evaluation image is precisely $W^u(p)\cap W^s(q)$, hence, by the point-marked convention, $\widetilde{\mathcal M}(p,q)$. [F2, given]

2.1 First suppose $\lambda(p)<\lambda(q)$. The source dimensions in [F1] sum to $\lambda(p)+(n-\lambda(q))<n$, so [F2] makes the fibre product empty. If the fibre product is nonempty, [F2] instead gives its dimension as $\lambda(p)+(n-\lambda(q))-n=\lambda(p)-\lambda(q)\ge0$. These cases prove the stated conditional dimension and emptiness assertions without assigning a negative dimension to an empty space. [F1, F2, step 1.1, algebra, cases] ∎
