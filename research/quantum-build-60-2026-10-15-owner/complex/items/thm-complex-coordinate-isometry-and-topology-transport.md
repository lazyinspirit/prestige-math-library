---
id: thm-complex-coordinate-isometry-and-topology-transport
kind: theorem
title: The complex coordinate isometry transports topology and affine segments
status: draft
origin: session
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
sources:
  references:
  - title: J. Lebl, Guide to Cultivating Complex Analysis
    url: https://www.jirka.org/ca/ca.pdf
---

## Statement

Equip $\mathbb C$ with $d_{\mathbb C}(z,w)=|z-w|$ and $\mathbb R^2$ with its Euclidean metric $d_2$. The coordinate bijection $\Phi(a+bi)=(a,b)$ is an isometry and a homeomorphism. For every real $t$,

$$\Phi((1-t)z+tw)=(1-t)\Phi(z)+t\Phi(w).$$

For every $A\subseteq\mathbb C$, its image is open, closed, bounded, compact, or connected exactly when $A$ is, in the indicated ambient spaces. Moreover

$$\Phi[\operatorname{int}_{\mathbb C}A]=\operatorname{int}_{\mathbb R^2}\Phi[A],\qquad \Phi[\overline A]=\overline{\Phi[A]},\qquad \Phi[\partial A]=\partial\Phi[A].$$

## Facts & Assumptions

**Given:** The spaces and coordinate map in the statement; all subsets have their restricted metrics and induced topologies.

[F1] $\Phi$ is bijective and real linear ([[thm-complex-numbers-are-the-real-coordinate-plane]], [[thm-complex-coordinate-map-preserves-real-scalar-multiplication]]).

[F2] $d_{\mathbb C}(z,w)=\|\Phi(z)-\Phi(w)\|_2$ ([[def-complex-metric-convergence-and-continuity]], [[def-p-norms-on-rn]]).

[F3] Balls, metric openness and the induced topology, isometry, homeomorphism, interior, closure and boundary have their usual defining contracts ([[def-metric-ball]], [[def-metric-topology]], [[thm-metric-open-set-algebra]], [[def-isometry-and-metric-embedding]], [[def-homeomorphism-and-open-maps]], [[def-metric-interior-closure-boundary]]).

[F4] Boundedness means containment in a ball, with the empty set bounded; continuous images preserve compactness and connectedness ([[def-metric-bounded-diameter]], [[def-metric-compactness]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-continuous-image-of-a-connected-space]]).

## Proof

1.1 By [F1] and [F2], $\Phi$ is a bijective isometry and $\Phi[B_{\mathbb C}(z,r)]=B_2(\Phi(z),r)$ for every $r>0$. The same holds for its inverse. Ball neighborhoods therefore give continuity and openness in both directions: for an $\varepsilon$-ball choose the source $\varepsilon$-ball. Thus $\Phi$ is a homeomorphism. [given, F1, F2, F3]

1.2 Real linearity gives the affine identity by applying $\Phi$ separately to $(1-t)z$ and $tw$ and adding, for arbitrary real $t$. [F1, algebra]

2.1 A ball lies in $A$ exactly when its image ball lies in $\Phi[A]$; a ball meets $A$ exactly when its image ball meets $\Phi[A]$. The definitions of interior and closure yield their stated identities. Bijectivity preserves set difference, giving the boundary identity. Openness is equivalent to being the interior, and closedness transfers because complements of open sets correspond under the bijection. [step 1.1, F3]

3.1 Ball correspondence proves boundedness in both directions, also for the empty set. The restrictions of $\Phi$ and its inverse to $A$ and $\Phi[A]$ remain continuous for the induced structures. Apply the continuous-image compactness and connectedness theorems to these restrictions in both directions. This gives both remaining equivalences for every subset, including the empty subset. [step 1.1, F4] ∎
