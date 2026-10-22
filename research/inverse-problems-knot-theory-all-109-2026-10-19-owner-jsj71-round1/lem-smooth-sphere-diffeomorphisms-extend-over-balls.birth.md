---
id: lem-smooth-sphere-diffeomorphisms-extend-over-balls
author: prestige-math-library
kind: lemma
title: "Smooth sphere boundary maps extend over parametrized balls"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-countable-choice, lem-smooth-disk-diffeomorphisms-fixing-boundary-admit-relative-smooth-isotopies, lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms, lem-isotopy-extension-for-a-compact-source-with-boundary]
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from relative smooth disk isotopy and compact-source isotopy extension. All additional selections and coordinate constructions are finite."
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Jiayong Li and Jordan Alan Watts, The orientation-preserving diffeomorphism group of S2 deforms to SO(3) smoothly"
      url: "https://arxiv.org/pdf/0912.2877"
      locator: "Version2, §3, PDF pp.12–16 supplies the relative disk isotopy proved in the named local supplier. The fixed-input sphere reduction and ball extension below are proved directly."
---

## Statement

Assume countable choice. Every orientation-preserving smooth diffeomorphism $g:S^2\to S^2$ is joined to the identity by a jointly smooth isotopy of orientation-preserving diffeomorphisms, stationary near its time endpoints. Consequently every smooth diffeomorphism $b:\partial B_0\to\partial B_1$ between the boundaries of two parametrized smooth $3$-balls extends to a smooth diffeomorphism $B_0\to B_1$. In the radial boundary collars supplied by their parametrizations, the extension can be required to have the product form $(x,r)\mapsto(b(x),r)$ on one smaller collar. Its orientation agrees with the orientation of $b$ on the boundaries, using the outward-normal convention.

This asserts existence of an isotopy for each given map; it does not assert a deformation retraction parametrized by the entire diffeomorphism group.

## Facts & Assumptions

**Given:** Countable choice, the smooth sphere diffeomorphism, and, for extension, the supplied ball parametrizations.

[A1] Countable choice is [[def-countable-choice]].

[F1] A smooth orientation-preserving disk diffeomorphism equal to the identity on a boundary neighborhood admits a jointly smooth isotopy to the identity fixing one common smaller collar ([[lem-smooth-disk-diffeomorphisms-fixing-boundary-admit-relative-smooth-isotopies]], Statement).

[F2] A smooth isotopy of compact full-dimensional submanifold embeddings in a boundaryless ambient manifold extends to a smooth ambient isotopy with support in a prescribed neighborhood of its track ([[lem-isotopy-extension-for-a-compact-source-with-boundary]], Statement).

[F3] The positive germ construction by linear interpolation, rescaling and compact-source extension is proved in [[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]], Proof 6.1; it is a supported isotopy, not merely an extension of a germ.

## Proof

1.1 Fix a point $p\in S^2$. There is an orientation-preserving rotation $R$ carrying $g(p)$ to $p$, joined to the identity by a smooth rotation path. Indeed rotate in the plane through the two unit vectors; in the antipodal case use any plane containing the vector, with angle $\pi$. Set $h=R\circ g$, so $h(p)=p$. In one oriented coordinate chart about $p$, the local germ $k=h^{-1}$ fixes the origin and has derivative $A$ of positive determinant. Write $A=UP$ with $U$ a rotation and $P$ positive definite; a rotation path and positive definite linear interpolation join the identity to $A$. For $t>0$ put $k_t(x)=k(tx)/t$. The identity $$k_t(x)=\int_0^1 Dk(stx)x\,ds$$ shows joint smoothness at $t=0$, with $k_0(x)=Ax$. On a sufficiently small common closed coordinate disk every slice of this path is an embedding with image in the chart: for the rescaling part injectivity follows directly from injectivity of $k$, and for all parameters the lower bound on the least singular value of the derivatives and compactness give a common chart restriction. Concatenate the linear path with the rescaling path, stationary at the joins. By [F2], equivalently the construction in [F3], this disk isotopy extends to an ambient isotopy $K_t$ of the sphere supported in that chart. Its endpoint equals $k$ on a neighborhood of $p$. Hence $K_1\circ h$ is the identity near $p$. [A1, F2, F3, given, construct]

2.1 Choose a smaller round coordinate disk $U$ about $p$ in this identity neighborhood. The complement $D=S^2\setminus\operatorname{Int}U$ is a parametrized smooth disk (stereographic coordinates centered at $p$ identify it with a round disk after a radial change of scale). The map $K_1\circ h$ restricts to a diffeomorphism of $D$ fixing a boundary collar. By [F1] it is smoothly isotopic to the identity there with a common collar fixed. Extend by the identity on $U$. Because the whole family fixes that common collar, this pasting is jointly smooth across $\partial U$. Prepend the paths $g\mapsto R\circ g$ and $h\mapsto K_t\circ h$, and stationarize all endpoints and joins. This gives the claimed jointly smooth sphere isotopy. All slices preserve orientation because each is a diffeomorphism and the initial slice does. [A1, F1, step 1.1, construct]

3.1 Conjugate $b$ by the supplied ball parametrizations, obtaining a sphere diffeomorphism, again denoted $b$. If it preserves orientation, reverse step 2.1's isotopy to get $b_t$ from the identity to $b$. Choose a smooth $\alpha:[0,1]\to[0,1]$ zero for $r\le1/3$ and one for $r\ge2/3$. In polar ball coordinates define $$B(rx)=r\,b_{\alpha(r)}(x),\qquad x\in S^2.$$ It is the identity on the inner ball, so it is smooth at its center and across the inner gluing sphere. For $r>0$ its inverse is $ry\mapsto r\,b_{\alpha(r)}^{-1}(y)$; inverse smoothness follows from the jointly smooth isotopy and the invertibility of its tangential derivatives. Thus it is a diffeomorphism, and near $r=1$ it is exactly the radial product of $b$. If $b$ reverses orientation, compose it first with a fixed orthogonal reflection, apply the orientation-preserving construction, and then undo the reflection by its linear extension over the ball. Undo the original parametrizations. The normal collar coordinate is unchanged, so the determinant sign is the boundary determinant sign. Only [F1] and [F2] use [A1]. [A1, F1, F2, step 2.1, construct] ∎
