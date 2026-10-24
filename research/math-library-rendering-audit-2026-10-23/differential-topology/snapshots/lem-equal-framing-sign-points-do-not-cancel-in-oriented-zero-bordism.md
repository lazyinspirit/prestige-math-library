---
id: lem-equal-framing-sign-points-do-not-cancel-in-oriented-zero-bordism
kind: lemma
title: The signed count is invariant under framed cobordism
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 4
deps:
- def-framing-sign-of-a-zero-dimensional-regular-preimage
- lem-oppositely-framed-points-are-framed-null-cobordant-in-pairs
- def-framed-cobordism-of-embedded-submanifolds
- def-framing-of-a-normal-bundle
- lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant
- def-oriented-smooth-manifold-and-oriented-chart
- def-product-orientation
- def-induced-boundary-orientation
- def-relative-fundamental-class-and-boundary-orientation
- lem-fundamental-class-of-a-boundary-pushes-forward-to-zero
- prop-zero-th-singular-homology-is-free-on-path-components
- def-orientation-of-a-finite-dimensional-real-vector-space
- def-countable-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: The signed count is a framed cobordism invariant; Lemmas 2.45-2.46, printed p.24
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, concluding Hopf discussion, the framed cobordism class of a 0-manifold is determined by the signed count, printed p.50
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed oriented smooth $m$-manifold,
$m\ge1$, and let $(N_0,\varphi_0)$, $(N_1,\varphi_1)$ be closed framed
$0$-dimensional submanifolds of $M$ with signed counts $\Sigma_0,\Sigma_1$. If
they are framed cobordant then $\Sigma_0=\Sigma_1$. In particular a closed
framed $0$-manifold containing exactly two points of the same framing sign and
no other points is not framed null-cobordant, while a pair of points of
opposite framing signs lying in a common chart ball is framed null-cobordant.

## Facts & Assumptions

**Given:** A closed oriented smooth $m$-manifold $M$, $m\ge1$, framed $0$-dimensional submanifolds $(N_i,\varphi_i)$ with signed counts $\Sigma_i=\sum_{x\in N_i}\varepsilon(x)$, and a framed cobordism $(W,\varepsilon,\Psi)$ from the first to the second in $M\times I$ ([[def-framing-sign-of-a-zero-dimensional-regular-preimage]], [[def-framed-cobordism-of-embedded-submanifolds]], [[def-framing-of-a-normal-bundle]]).

[F1] The product orientation on $M\times I$ orders a positive $M$-frame before $\partial_t$. The bottom and top face orientations are therefore $(-1)^{m+1}$ and $(-1)^m$ times the orientation of $M$, respectively, by moving the outward vector $\mp\partial_t$ past the $m$ spatial vectors ([[def-product-orientation]], [[def-induced-boundary-orientation]], [[def-oriented-smooth-manifold-and-oriented-chart]]).

[F2] For a compact oriented $1$-manifold, the induced boundary class pushes to zero in $H_0(W;\mathbb Z)$. Since $H_0$ is free on path components, summing its coefficients gives zero total boundary signed count ([[lem-fundamental-class-of-a-boundary-pushes-forward-to-zero]], [[prop-zero-th-singular-homology-is-free-on-path-components]], [[def-relative-fundamental-class-and-boundary-orientation]]).

[F3] Two closed framed $0$-manifolds of opposite framing signs lying in a common chart ball are framed null-cobordant by a framed cobordism supported in that ball ([[lem-oppositely-framed-points-are-framed-null-cobordant-in-pairs]], [[lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant]]).

## Proof

**Proof technique:** direct.

1.1 (Orientations of $W$ and of its normal bundle.) Orient the normal bundle $\nu(W\subseteq M\times I)$ by the framing $\Psi$, and orient the $1$-manifold $W$ by the rule that a positive normal frame followed by a positive tangent frame of $W$ is a positive frame of $T(M\times I)$; this orientation exists and is unique because $W$ is connected componentwise and the rank of $\nu(W)$ is $m$. With this choice the orientation of $W$ is determined by the framing and the product orientation, and no orientation is imposed on the individual points of the $N_i$. [F1, given]

2.1 On an end collar a normal frame given by $\Psi^{-1}$ is a frame $b$ of $T_xM$ of sign $\varepsilon(x)$. In the product orientation, $(b,\varepsilon(x)\partial_t)$ is positive, so the rule in step 1.1 makes $\varepsilon(x)\partial_t$ the positive tangent of $W$ there. At the bottom, the outward tangent is $-\partial_t$, so the boundary point sign is $-\varepsilon(x)$; at the top it is $+\varepsilon(x)$. Consequently the signed boundary count is $-\Sigma_0+\Sigma_1$. This computes the signs directly on $W$, without suppressing the dimension-dependent signs of the ambient faces. [F1, step 1.1]

3.1 By [F2] the signed count of the boundary of a compact oriented $1$-manifold is zero, so $-\Sigma_0+\Sigma_1=0$ and $\Sigma_0=\Sigma_1$: the signed count is a framed cobordism invariant. Consequently a closed framed $0$-manifold consisting of exactly two points of the same framing sign and no other points has signed count $\pm2\ne0$, while the empty framed $0$-manifold has signed count $0$, so it is not framed null-cobordant; a pair of opposite signs in a common chart ball is framed null-cobordant by [F3]. [F2, F3, step 1.1, step 2.1] ∎
