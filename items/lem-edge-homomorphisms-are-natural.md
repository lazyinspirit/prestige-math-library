---
id: lem-edge-homomorphisms-are-natural
kind: lemma
title: Edge homomorphisms are natural
deps: ["def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence", "def-morphism-of-spectral-sequences", "prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences", "thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

Edge maps commute with compatible morphisms of spectral sequences and filtered abutments. In particular this holds for filtered chain maps of degreewise finitely filtered complexes satisfying the first-quadrant and endpoint hypotheses.

## Facts & Assumptions

**Given:** Compatible morphisms of first-quadrant spectral sequences from s≥2 and of their filtered abutments, with the edge endpoint normalizations.

[F1] Edges are composites of axis transition quotients or inclusions and the abutment filtration maps ([[def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence]]).

[F2] A morphism commutes with differentials and α, and a compatible abutment map agrees on graded pieces ([[def-morphism-of-spectral-sequences]]).

[F3] Filtered chain maps induce morphisms of spectral sequences ([[prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences]]).

[F4] Finite filtered convergence is natural ([[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]]).

## Proof

**Proof technique:** direct.

1.1 At the vertical homological axis, outgoing maps are zero. The commutative differential squares in [F2] carry each incoming image into its counterpart, so the induced map on its cokernel commutes with the transition quotient. Compatibility with α equates that map with the next page morphism. Compose these squares up to a common finite stabilization page to obtain a square $E^s_{0,n}\to E^\infty_{0,n}$ for source and target. [F1, F2]

1.2 At the horizontal axis, incoming maps are zero. The same differential squares restrict to outgoing kernels, and α compatibility gives commuting squares for all transition inclusions. Their composite yields the square for $E^\infty_{n,0}\hookrightarrow E^s_{n,0}$. [F1, F2]

2.1 A compatible filtered map on H commutes with $F_0H_n\hookrightarrow H_n$ and $H_n\twoheadrightarrow H_n/F_{n-1}H_n$, and compatibility identifies their graded maps with the stable maps. Attach these squares to steps 1.1–1.2 to obtain naturality of both edges. In cohomological indexing the kernel and quotient axes are exchanged, giving the two analogous squares. For filtered chain maps, [F3] and [F4] provide exactly the page and abutment compatibilities just used. [F1, F2, F3, F4, step 1.1, step 1.2] ∎

## Source notes

[Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Example 5.2.6 and naturality in Theorem 5.5.1; the commuting squares are proved here.
