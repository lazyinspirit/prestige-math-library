---
id: thm-simplicial-subdivision-is-a-chain-map-and-homology-isomorphism
kind: theorem
title: "Simplicial subdivision is a chain map and homology isomorphism"
status: published
origin: pipeline
deps: ["lem-oriented-simplicial-subdivision-commutes-with-boundary", "lem-last-vertex-map-is-carried-by-original-simplices", "lem-simplicial-chain-maps-carried-by-specified-cones-are-chain-homotopic", "thm-chain-homotopic-maps-induce-the-same-map-on-homology"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "C. R. F. Maunder, Algebraic Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/maunder.pdf"
---

## Statement

For an abstract simplicial complex with a specified total order on its vertices, $S$ is a chain-homotopy equivalence of ordinary and augmented integral simplicial chains, with inverse up to chain homotopy $\lambda_\#$. It induces isomorphisms on ordinary and augmented reduced homology, including degree $-1$. The inverse homology map is independent of the chosen order.

## Source locators

4.3.9 and subdivision discussion following 4.3.10, pp.119–120.


## Facts & Assumptions

[F1] Subdivision commutes with augmented and ordinary boundaries. [[lem-oriented-simplicial-subdivision-commutes-with-boundary]].

[F2] The last-vertex map is carried and augmentation-preserving. [[lem-last-vertex-map-is-carried-by-original-simplices]].

[F3] Nested specified cone carriers give a carried chain homotopy. [[lem-simplicial-chain-maps-carried-by-specified-cones-are-chain-homotopic]].

[F4] Chain homotopy gives equality on homology. [[thm-chain-homotopic-maps-induce-the-same-map-on-homology]].


## Proof

**Given:** A complex $K$ with a given vertex order, its subdivision operator $S$, and its last-vertex chain map $\lambda_\#$.

1.1 Both $S$ and $\lambda_\#$ commute with boundary and augmentation. For a nonempty original face $\sigma$, carry $\lambda_\#S$ and $1$ by the full simplex on $\sigma$, a cone with apex its greatest vertex. Indeed $S$ stays over $\sigma$ and $\lambda$ lands in $\sigma$. These carriers are nested under faces. The specified cone contractions and the carried-homotopy lemma give $\lambda_\#S\simeq1$. [F1, F2, F3]

2.1 For a face chain $\eta=(\sigma_0<\cdots<\sigma_q)$ carry $S\lambda_\#$ and $1$ by $\operatorname{sd}\sigma_q$, a cone with apex $\sigma_q$. The identity lies there; $\lambda_\#\eta$ either vanishes or is a face of $\sigma_q$, whose subdivision lies there as well. Removing any chain vertex leaves the same or a smaller maximum, so the carriers are nested. The carried-homotopy lemma gives $S\lambda_\#\simeq1$. Its homotopies have $h_{-1}=0$, so restriction also gives ordinary chain homotopies. [F2, F3, step 1.1]

3.1 Chain-homotopic maps induce equal homology maps, hence $H(\lambda_\#)H(S)=1$ and $H(S)H(\lambda_\#)=1$. These equations hold in every augmented degree and every ordinary degree. If $K$ has no vertices, both augmented degree $-1$ groups are $\mathbb Z$ and both maps are the identity. Any other vertex order produces another two-sided inverse $J$ to the same $H(S)$; then $J=JH(S)H(\lambda_\#)=H(\lambda_\#)$, proving independence. [F4, step 1.1, step 2.1] ∎
