---
id: lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts
kind: lemma
title: "The left derived connecting map is independent of the horseshoe resolution and lifts"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-connecting-map-for-left-derived-functors, thm-horseshoe-lemma-for-projective-resolutions, prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy, thm-naturality-of-the-homology-connecting-morphism, thm-chain-homotopic-maps-induce-the-same-map-on-homology]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-30
---

## Statement

Assume the Axiom of Dependent Choice.

In the situation of [[def-connecting-map-for-left-derived-functors]], the map
$$\partial_n^H:L_n^PF(A'')\to L_{n-1}^PF(A')$$
does not depend on the chosen horseshoe middle resolution $H_\bullet$ or on
the comparison lifts used to transport the homology connecting morphism to the
fixed datum $P$. More generally, a morphism of short exact sequences and fixed
comparison lifts on the two end resolutions admit a compatible comparison map
between chosen horseshoe middle resolutions; any two such middle maps induce
the same maps on homology.
## Facts & Assumptions

**Given:** Two choices of horseshoe middle resolution and comparison lifts for
the same short exact sequence $0\to A'\to A\to A''\to0$.

[L1] Item 9 defines the connecting map by transporting homology's connecting
morphism from a chosen horseshoe sequence
([[def-connecting-map-for-left-derived-functors]]).

[L2] Two horseshoe middle comparison maps fitting the same side data are
chain-homotopic
([[prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy]]).

[L3] A horseshoe resolution is degreewise the biproduct of the chosen end
resolutions ([[thm-horseshoe-lemma-for-projective-resolutions]]).

[L4] The homology connecting morphism is natural under morphisms of short exact
sequences of complexes
([[thm-naturality-of-the-homology-connecting-morphism]]).

[L5] Chain-homotopic maps induce the same map on homology
([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

[L6] Any two comparison maps between projective resolutions that lift the same
object morphism are chain-homotopic, whether or not they were chosen as the
same side maps of a horseshoe ladder
([[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], each horseshoe choice gives a short exact sequence of complexes after applying $F$, hence a homology connecting morphism. For a morphism of the underlying short exact sequences, fix comparison lifts on the two end resolutions. By [L3], write each horseshoe term as the biproduct of its end terms. Inductively in the degree, define the middle comparison map as the fixed diagonal pair of side maps plus an off-diagonal correction. The chain-map defect in degree $n$ lands in the kernel of the target augmentation or differential; projectivity of the corresponding right-hand resolution term lifts it, giving the next correction. This produces a middle chain map for which both side squares commute, hence a morphism of short exact sequences of complexes. [L1, L3, given, construct]

2.1 Applied to the identity morphism of the original short exact sequence, step 1.1 supplies a comparison between any two chosen horseshoes. By [L2], any two compatible middle comparisons with the fixed side maps are chain-homotopic. [L2, step 1.1]

3.1 Applying [L4] to the ladder from step 1.1 shows that the homology connecting morphisms commute with the induced maps on the two ends. If the end comparison lifts are changed, [L6] makes the old and new lifts chain-homotopic and [L5] makes their induced end homology maps equal. With either fixed pair of side lifts, [L2] likewise makes any two compatible middle maps chain-homotopic. Thus all transport maps occurring in the connecting square are unchanged on homology. Applying this to the comparison in step 2.1 shows that the resulting map $L_n^PF(A'')\to L_{n-1}^PF(A')$ is independent of both the horseshoe and transport choices. [L2, L4, L5, L6, step 1.1, step 2.1, algebra] ∎
