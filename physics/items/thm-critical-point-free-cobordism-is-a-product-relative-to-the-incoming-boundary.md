---
id: thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary
kind: theorem
title: A cobordism with no handles is a product
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 4
deps:
- thm-regular-interval-diffeomorphism
- prop-deformation-lemma-for-a-critical-point-free-slab
- lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time
- cor-regular-sublevels-are-diffeomorphic
- def-morse-function-adapted-to-a-cobordism
- def-handle-decomposition-relative-to-the-incoming-boundary
- lem-product-cobordisms-have-critical-point-free-presentations
- thm-morse-functions-and-handle-decompositions-correspond
- def-countable-choice
- thm-smooth-partitions-of-unity-exist-on-manifolds
- thm-every-smooth-manifold-admits-a-riemannian-metric
- lem-manifold-bump-for-a-compact-set-inside-an-open-set
- thm-compactly-supported-vector-fields-are-complete
- thm-fundamental-theorem-on-flows
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; Concluding Remarks, printed pp. 113--114
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5)
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W;M_0,M_1)$ be a
compact smooth triad with $\dim W=n+1$ admitting a handle decomposition
relative to $M_0$ with empty handle list
([[def-handle-decomposition-relative-to-the-incoming-boundary]]).
Equivalently, $W$ admits an adapted Morse function without critical points
(equivalently, $W$ is diffeomorphic to a collar $M_0\times[0,\varepsilon]$)
([[def-morse-function-adapted-to-a-cobordism]]). Then $W$ is diffeomorphic to
$M_0\times[0,1]$ relative to $M_0$; that is, there is a diffeomorphism
$W\to M_0\times[0,1]$ whose restriction to $M_0$ is the identity. Conversely a
product cobordism has an empty presentation.

## Facts & Assumptions

**Given:** A compact smooth triad $(W;M_0,M_1)$ with a handle decomposition relative to $M_0$ whose handle list is empty; $\mathrm{AC}_\omega$.

[F1] A finite handle decomposition of a triad $(W;M_0,M_1)$ relative to $M_0$ is a finite ordered list of indices together with embeddings of attaching regions such that $W$ is diffeomorphic, relative to $M_0$, to the manifold obtained from the collar $M_0\times[0,\varepsilon]$ by successively attaching the handles with corners rounded; with an empty list no handle is attached ([[def-handle-decomposition-relative-to-the-incoming-boundary]]).

[F2] Every finite handle decomposition of $W$ relative to $M_0$ is induced by an adapted excellent Morse function with one critical point per handle of the same index, and conversely every adapted excellent Morse function induces such a decomposition ([[thm-morse-functions-and-handle-decompositions-correspond]], [[def-morse-function-adapted-to-a-cobordism]]).

[F3] Under the compact regular closed-band hypothesis the normalized flow crosses the band in controlled time and gives a level-preserving diffeomorphism $T:M_a\times[a,b]\to K$, $T(x,t)=\Phi_{t-a}(x)$, together with a strong deformation retraction of the upper sublevel onto the lower one and a diffeomorphism of the two sublevels ([[thm-regular-interval-diffeomorphism]], [[lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time]], [[prop-deformation-lemma-for-a-critical-point-free-slab]], [[cor-regular-sublevels-are-diffeomorphic]]).

[F4] For a compact boundaryless smooth manifold $M$ the product $M\times[0,1]$ has the empty handle decomposition relative to $M\times\{0\}$ and its projection is an adapted Morse function without critical points ([[lem-product-cobordisms-have-critical-point-free-presentations]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] applied to the empty list, $W$ is diffeomorphic relative to $M_0$ to the collar $M_0\times[0,\varepsilon]$; composing with the reparametrization $M_0\times[0,\varepsilon]\to M_0\times[0,1]$, $(x,t)\mapsto(x,t/\varepsilon)$, which fixes $M_0\times\{0\}$ pointwise, gives a diffeomorphism $W\to M_0\times[0,1]$ whose restriction to $M_0$ is the identity. [F1, given]

1.2 Conversely let $W$ be a product cobordism; by [F4] its projection is an adapted Morse function without critical points and $W$ carries the empty handle list relative to $M_0$, which also shows that the empty-presentation formulation and the critical-point-free Morse formulation describe the same triads by [F2]. [F2, F4, given]

2.1 For the critical-point-free formulation, append signed collars to obtain a boundaryless neighborhood of $W$. Smoothness up to the boundary gives local extensions of $f$, and [[thm-smooth-partitions-of-unity-exist-on-manifolds]] patches them to a smooth extension near $W$, equal to $f$ there. Compactness and $df\ne0$ give a smaller neighborhood on which the extension still has nonzero differential. Choose a metric by [[thm-every-smooth-manifold-admits-a-riemannian-metric]] and multiply its normalized ascending gradient by a compactly supported cutoff equal to one near $W$ ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]). Its ambient flow $\Phi$ is complete by [[thm-compactly-supported-vector-fields-are-complete]], and $df(\Phi'_t)=1$ while the trajectory is in $W$. At $M_0$ it enters $W$ and at $M_1$ it exits; a first exit before the prescribed value would be at neither boundary fiber, which is impossible. Thus $T(x,t)=\Phi_t(x)$ maps $M_0\times[0,1]$ onto $W$, with inverse $y\mapsto(\Phi_{-f(y)}(y),f(y))$. Flow uniqueness and smooth dependence, including the signed collars, make these inverse diffeomorphisms ([[thm-fundamental-theorem-on-flows]]). This proves the boundary version directly; it does not apply a boundaryless closed-band theorem to $W$ without an extension. [F2, F3, step 1.2, construct]

3.1 Combining step 1.1 with steps 1.2 and 2.1 proves both directions and the claimed equivalence: the empty presentation forces $W\cong M_0\times[0,1]$ relative to $M_0$, and a product cobordism has an empty presentation. This is Milnor's product theorem for a critical-point-free slab. [F1, F2, F4, step 1.1, step 1.2, step 2.1] ∎
