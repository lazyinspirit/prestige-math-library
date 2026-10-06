---
id: lem-relative-hurewicz-and-general-position-produce-surgery-spheres
kind: lemma
title: Kernel classes are represented by embedded spheres below the middle dimension
deps:
- lem-metastable-embedding-for-maps-from-a-compact-manifold
- def-degree-one-normal-map-for-the-surgery-program
- def-relative-homotopy-group
- thm-long-exact-sequence-of-relative-homotopy-groups
- def-n-connected-space-and-n-connected-map
- cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map
- thm-relative-whitney-approximation-for-manifold-valued-maps
- def-smooth-embedding
- cor-negative-expected-dimension-generic-intersections-are-empty
- thm-strong-whitney-approximation-by-transverse-maps
- def-countable-choice
- lem-stably-trivial-bundles-over-spheres-below-the-rank-are-trivial
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Proposition 10.24, printed p. 210 (for $2n+1\le m$ an element can be killed iff its stable normal class
      vanishes, via the Whitney embedding theorem and the stable inverse computation) and Proposition 10.25(i),
      printed p. 210 (for $2n+1\le m$ every element of $\pi_{n+1}(f)$ can be killed)
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Lemma 6.12, printed p. 79 (embedding approximation for $\dim M\ge2\dim Y+1$, used here for the boundary
      spheres)
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
dependency_level: 5
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(f,b):M^m\to X$ be a degree-one normal map with $M$ connected and $X$ a connected finite CW complex, and let $2p+2\le m$. Then: (i) every class $x\in\pi_{p+1}(f)$ is represented by a map of pairs $(h,g):(D^{p+1},S^p)\to(M_f,M)$ whose boundary sphere $g:S^p\to M$ is an embedding; (ii) any finite family $x_1,\dots,x_k\in\pi_{p+1}(f)$ admits such representatives whose underlying embedded spheres have pairwise disjoint images away from an arbitrarily small prescribed neighbourhood of the base point; (iii) consequently for every such $x$ the boundary class $\partial x\in\pi_p(M)$ is represented by an embedded sphere, and the stable normal class of that sphere vanishes: $(\nu_M)_*(\partial x)=0\in\pi_p(BO)$.

## Facts & Assumptions

[F1] Relative homotopy classes and groups. [[def-relative-homotopy-group]]

[F2] Degree-one normal map for the surgery program. [[def-degree-one-normal-map-for-the-surgery-program]]

[F3] Under Countable Choice, relative Whitney approximation smooths a continuous map while fixing a neighbourhood of a closed subset near which it is already smooth. [[thm-relative-whitney-approximation-for-manifold-valued-maps]]

[F4] Metastable approximation of maps by embeddings. [[lem-metastable-embedding-for-maps-from-a-compact-manifold]]

[F5] Strong Whitney approximation by transverse maps. [[thm-strong-whitney-approximation-by-transverse-maps]]

[F6] Negative expected dimension forces empty generic intersections. [[cor-negative-expected-dimension-generic-intersections-are-empty]]

[F7] A stably trivial smooth rank-$q$ bundle over $S^p$ is trivial when $p<q$. [[lem-stably-trivial-bundles-over-spheres-below-the-rank-are-trivial]]

## Proof


**Given:** Countable choice, a degree-one normal map with its target stable bundle $\xi$, and $2p+2\le m$.

1.1 By the relative disk definition, $x$ has a boundary map $g:S^p\to M$ and a target disk filling $f\circ g$. For $p\ge1$ keep its marked source point at the basepoint of $M$ as follows. Choose small source and target coordinate balls about these points, with $g$ of the source ball landing in the target ball and both marked coordinates zero. Multiplying the target coordinates of $g$ by $1-t\chi$ for a source bump $\chi=1$ near the marked point makes $g$ constant on a smaller ball by a based homotopy. Apply [F3] relative to that smaller closed ball. In its constant region insert, with a further cutoff, a small linear $p$-dimensional coordinate cap through zero; this is a based smooth homotopy and gives injective ambient derivative at the marked point. Now [F4] applies relative to that singleton because $m\ge2p+2>2p$, giving an embedded sphere through the same basepoint. Glue the resulting based boundary homotopy cylinder to the target filling, so the represented relative class remains $x$. The target map is never smoothed when $X$ is merely a CW complex. For $p=0$ keep the marked endpoint fixed and move the other to a distinct nearby point in a source chart, appending the image of that path to its target path. [given, construct, F1, F2, F3, F4]

2.1 For finitely many classes choose these representatives successively. Relative to a small marked-point neighbourhood, perturb each sphere transversely to the previous finitely many spheres. Their expected intersection dimension is $2p-m\le-2$, so there are no intersections outside the protected neighbourhood. Their homotopies again attach to their target nullhomotopies. If unbased disjoint surgery representatives are needed, move their marked points along short distinct source paths and include these paths in their whiskers; a finite family then has entirely disjoint embedded spheres. This changes basepoint representatives by the recorded action and does not change the corresponding generated kernel. [step 1.1, construct, algebra, F5, F6]

3.1 The normal structure gives a stable isomorphism $\nu_M\cong f^*\xi$. Pull it back along $g$. The supplied nullhomotopy makes $(f\circ g)^*\xi$ stably trivial: a bundle pulled back over a compact ball can be framed directly. To see this without a strong-AC homotopy-invariance theorem, take finitely many trivializing charts of the pulled-back bundle and a finite support-subordinate partition, constructed from small balls with closures inside these charts. Their weighted coordinate maps embed the bundle into a finite trivial bundle, giving a continuous orthogonal projection of constant rank. The finite radial projection-and-Gram–Schmidt construction of the sphere-bundle cancellation lemma trivializes it over the ball. Restriction to the boundary gives the required stable trivialization. Thus the stable class of $g^*\nu_M$ is zero. In classifying notation this is $(\nu_M)_*(\partial x)=0$, with the target normal datum $\xi$, even when $X$ has no smooth normal bundle. [step 1.1, step 2.1, construct, F2, F7] ∎
