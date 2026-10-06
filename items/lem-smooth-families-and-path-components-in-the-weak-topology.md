---
id: lem-smooth-families-and-path-components-in-the-weak-topology
kind: lemma
title: "Smooth families and path components in the weak topology"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-compact-parameter-pair, def-space-of-immersions-and-space-of-formal-immersions, def-regular-homotopy-of-immersions, lem-smoothing-formal-immersion-families, lem-smoothing-genuine-immersion-families, lem-joint-jet-continuity-and-the-weak-smooth-topology, def-weak-compact-open-smooth-topology-on-mapping-spaces, def-compact-space, thm-the-exponential-law, def-compact-open-topology, def-smooth-family-of-maps-and-evaluation-map, def-homotopy-relative-and-path-homotopy, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery, Ch. 7 §7.4 “The Smale–Hirsch classification of immersions”, printed pp. 142–146 (Theorem 7.35, Proposition 7.39)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    - title: "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Proposition 2.2 (disk), Definition 2.5 (Serre fibration), Definition 2.6 and Proposition 2.7 (flexible sheaves)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)"
      url: http://math.stanford.edu/~ralph/bookR4.pdf
dependency_level: 5
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be compact, $N$ smooth, and $(P,Q)$ a compact parameter pair. Every continuous $P$-family of smooth maps with adjoint smooth near $Q\times M$ is homotopic relative to $Q$ to a smooth family. For the following immersion-family assertions assume $\dim M\le\dim N$. If its values are genuine immersions, the homotopy remains genuine; for formal immersions, the hypothesis concerns both adjoint maps and the homotopy remains formal. Path components of $\operatorname{Imm}(M,N)$ are regular homotopy classes. Based homotopy sets defined by spheres or cubes agree with those defined by smooth families, for both genuine and formal immersion spaces. Formal-family smoothing itself does not require compact $M$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, compact smooth $M$, smooth $N$, a compact parameter pair $(P,Q)$, and a continuous family whose relevant adjoint data are smooth near $Q\times M$; for immersion families, $\dim M\le\dim N$.

[F1] Smooth families are weakly continuous, and joint source-jet continuity characterises weak continuity ([[lem-joint-jet-continuity-and-the-weak-smooth-topology]], [[def-compact-parameter-pair]]).

[L1] A formal family smooth near $Q\times M$ can be smoothed relative to a neighbourhood of $Q$ through formal families, without requiring holonomicity there ([[lem-smoothing-formal-immersion-families]]).

[L2] A genuine family smooth near $Q\times M$ can be smoothed relative to $Q$ through genuine families; every continuous path can be smoothed relative to both endpoints ([[lem-smoothing-genuine-immersion-families]]).

[L3] Regular homotopy means a jointly smooth path with immersion slices ([[def-regular-homotopy-of-immersions]]); homotopies relative to a subset fix its values throughout ([[def-homotopy-relative-and-path-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] for formal data and [L2] for genuine data. If an open neighbourhood of $Q\times M$ rather than a product neighbourhood is given, compactness of $M$ and a finite product-neighbourhood cover of each $\{q\}\times M$ give a parameter neighbourhood of $q$ on which all the data are smooth; the union over $q\in Q$ gives the required open $W\supseteq Q$. For general smooth maps repeat the construction of [L2] with the immersion requirement removed: compactness gives a permitted value-error keeping interpolation in the tubular domain, parameter convolution gives the smooth approximant, and the cutoff fixes a neighbourhood of $Q$. No reference family, logarithm or complete metric is needed. [L1, L2, given]

2.1 By the endpoint-preserving conclusion of [L2], every continuous path in $\operatorname{Imm}(M,N)$ joins regularly homotopic immersions. Conversely a regular homotopy is a continuous path by [F1]. This proves the component assertion with the prescribed endpoints unchanged. [F1, L2, L3, step 1.1]

2.2 For a based cubical family, precompose each coordinate with a smooth self-map of $[0,1]$ equal to zero near zero and one near one. This precomposition is homotopic to the identity by straight interpolation, preserves the boundary, and makes the family equal to its basepoint on a neighbourhood of the boundary. For a based spherical family, use a smooth self-map of the sphere homotopic to the identity relative to the basepoint and constant on a small neighbourhood of it: in a coordinate ball about that point replace the radial coordinate $r$ by a smooth function which is zero near zero and equals $r$ near the edge; extend by the identity outside the ball. Radial interpolation supplies the stated homotopy. These precompositions give smooth adjoint data near the relative set because the basepoint datum is a fixed smooth map or fixed smooth formal pair. Step 1.1 then supplies based smooth representatives. [F1, L1, L2, L3, step 1.1, construct]

3.1 To compare homotopies between smooth representatives, reparametrize the homotopy interval to be constant near its ends, and precompose the sphere or cube coordinates as in step 2.2. The resulting adjoint is smooth near the union of the end faces and the basepoint or boundary cylinder. Smooth it relative to that union using step 1.1. Its endpoints are the precomposed smooth representatives; each original smooth representative is joined to its precomposition by the smooth radial or cubical interpolation. Concatenating with smooth reparametrizations constant near the joining times gives a smooth based homotopy between the original representatives. Thus smooth representatives have exactly the same based homotopy classes as continuous ones. [L1, L2, L3, step 1.1, step 2.2] ∎
