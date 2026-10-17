---
id: thm-complex-coordinate-isometry-and-topology-transport
kind: theorem
title: The complex coordinate isometry transports topology and affine segments
status: published
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-complex-numbers-are-the-real-coordinate-plane
  - thm-complex-coordinate-map-preserves-real-scalar-multiplication
  - def-complex-metric-convergence-and-continuity
  - def-p-norms-on-rn
  - def-isometry-and-metric-embedding
  - def-metric-ball
  - def-metric-topology
  - thm-metric-open-set-algebra
  - def-homeomorphism-and-open-maps
  - def-metric-interior-closure-boundary
  - def-metric-compactness
  - def-metric-bounded-diameter
  - thm-continuous-image-of-a-connected-space
  - thm-continuous-image-of-a-compact-space-is-compact
justified_by: []
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: J. Lebl, Guide to Cultivating Complex Analysis, Section 1.1.1
      url: https://www.jirka.org/ca/ca.pdf
    - title: E. Stein and R. Shakarchi, Complex Analysis, Princeton Lectures in Analysis II, Chapter 1, Section 1.1
      url: https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf
---

## Statement

Equip $\mathbb C$ with $d_{\mathbb C}(z,w)=|z-w|$ and $\mathbb R^2$ with the
Euclidean metric $d_2$. The coordinate bijection $\Phi(a+bi)=(a,b)$ is a
bijective isometry and a homeomorphism. For every $z,w\in\mathbb C$ and every
$t\in\mathbb R$,

$$\Phi((1-t)z+tw)=(1-t)\Phi(z)+t\Phi(w).$$

For each $A\subseteq\mathbb C$, the image $\Phi[A]$ is open, closed, bounded,
compact, or connected exactly when $A$ has the corresponding property in the
indicated ambient metric or topological space. Moreover,

$$\Phi[\operatorname{int}_{d_{\mathbb C}}A]=\operatorname{int}_{d_2}\Phi[A].$$

$$\Phi[\overline A^{\,d_{\mathbb C}}]=\overline{\Phi[A]}^{\,d_2}.$$

$$\Phi[\partial_{d_{\mathbb C}}A]=\partial_{d_2}\Phi[A].$$

Subsets use their induced metric and topology.

## Facts & Assumptions

**Given:** The coordinate map $\Phi$ and the two ambient metric spaces.

[F1] [[thm-complex-numbers-are-the-real-coordinate-plane]] and [[thm-complex-coordinate-map-preserves-real-scalar-multiplication]]: $\Phi$ is a bijection preserving addition and real scalar multiplication.

[F2] [[def-complex-metric-convergence-and-continuity]] and [[def-p-norms-on-rn]]: $d_{\mathbb C}(z,w)=|z-w|=\|\Phi(z)-\Phi(w)\|_2$.

[F3] [[def-metric-ball]] and [[def-metric-topology]] define balls and open and closed sets; [[thm-metric-open-set-algebra]] establishes the metric topology; [[def-isometry-and-metric-embedding]] defines isometry; [[def-homeomorphism-and-open-maps]] defines homeomorphism.

[F4] [[def-metric-interior-closure-boundary]]: interior is tested by contained balls, closure by balls meeting the set, and boundary is closure minus interior.

[F5] [[def-metric-bounded-diameter]]: a subset is bounded when it is empty or lies in some open ball.

[F6] [[def-metric-compactness]] and [[thm-continuous-image-of-a-compact-space-is-compact]]: compact subsets use the induced metric and continuous images of compact subsets are compact.

[F7] [[thm-continuous-image-of-a-connected-space]]: a continuous image of a connected subset, with its induced topology, is connected.

## Proof

1.1 For $z,w\in\mathbb C$, [F2] gives $d_2(\Phi z,\Phi w)=d_{\mathbb C}(z,w)$, so bijectivity [F1] makes $\Phi$ an isometry. For every $r>0$, $u\in B_{\mathbb C}(z,r)$ exactly when $\Phi u\in B_2(\Phi z,r)$; hence $\Phi[B_{\mathbb C}(z,r)]=B_2(\Phi z,r)$, and the inverse has the reverse correspondence. If $U\subseteq\mathbb C$ is open, let $\mathcal B_U$ be the family of all open balls contained in $U$. Every point of $U$ lies in one such ball by the definition of openness, and every member of $\mathcal B_U$ is contained in $U$, so $U=\bigcup\mathcal B_U$. The ball correspondence maps this union to a union of open Euclidean balls; the arbitrary-union clause of [F3] makes $\Phi[U]$ open. The same argument for the inverse shows that both maps are open. Equality of distances gives continuity of both maps with $\delta=\varepsilon$, so the bijection is a homeomorphism by [F3]. [F1, F2, F3]

1.2 Real-linearity [F1] gives $\Phi((1-t)z+tw)=\Phi((1-t)z)+\Phi(tw)=(1-t)\Phi(z)+t\Phi(w)$ for every real $t$. [F1, algebra]

2.1 By the ball correspondence in step 1.1, a ball around $z$ is contained in $A$ exactly when its image ball is contained in $\Phi[A]$; likewise a ball around $z$ meets $A$ exactly when its image ball meets $\Phi[A]$. The definitions in [F4] therefore give the interior and closure identities. Bijectivity preserves set difference, so it also gives the boundary identity. Openness transfers by the same ball test, and closedness transfers because complements correspond under the bijection. [F3, F4, step 1.1]

3.1 If $A=\emptyset$, then $\Phi[A]=\emptyset$ and boundedness, compactness, and connectedness agree for the identical empty subsets. Otherwise, ball correspondence transfers containment in a ball in both directions, proving boundedness. The restrictions $\Phi|_A$ and $\Phi^{-1}|_{\Phi[A]}$ are continuous. Applying the compact-image theorem [F6] to these restrictions proves compactness in both directions; applying the connected-image theorem [F7] proves connectedness in both directions. [F5, F6, F7, step 1.1, given] ∎
