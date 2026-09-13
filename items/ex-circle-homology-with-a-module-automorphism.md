---
id: ex-circle-homology-with-a-module-automorphism
kind: example
title: Circle homology with monodromy
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-cellular-chains-compute-homology-with-local-coefficients]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §2.1, Exercise 76, pp.99–100
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Give $S^1$ its CW structure with one vertex and one oriented edge. If an $R$-module local system has fiber $M$ and monodromy $T\in\operatorname{Aut}_R(M)$ around the positive loop, its cellular local chain complex is
$$0\longrightarrow M\xrightarrow{T-1}M\longrightarrow0.$$
Consequently $H_1(S^1;\mathcal M)=\ker(T-1)$, $H_0(S^1;\mathcal M)=\operatorname{coker}(T-1)$, and all other homology groups vanish.

## Facts & Assumptions

**Given:** The CW circle, $R$-module $M$, and automorphism $T$ in the statement.

[F1] [[thm-cellular-chains-compute-homology-with-local-coefficients]] computes local homology from lifted cellular incidences with the right chain action $c\cdot g=g^{-1}c$ and the left fiber action $g m=T_{\bar g}m$.

## Proof

**Proof technique:** direct.

1.1 Let $g$ be the positive loop and lift the vertex to $\widetilde v\in\mathbb R$. Choose the lifted edge $\widetilde e$ from $\widetilde v$ to $g\widetilde v$. Its boundary is $g\widetilde v-\widetilde v=\widetilde v\cdot(g^{-1}-1)$ under [F1]'s right action. In the left fiber module, $g^{-1}m=T_{\overline{g^{-1}}}m=T_gm=Tm$. Tensoring therefore sends $m$ to $(T-1)m$. [F1]

2.1 There is one chain module $M$ in degrees one and zero and none elsewhere, so the kernel and cokernel of step 1.1 are exactly the displayed homology groups. Reversing the chosen loop yields $T^{-1}-1=-T^{-1}(T-1)$ and hence an isomorphic complex, so the answer is independent of the orientation convention. For $M=0$ all groups vanish; for $T=1$ the differential is zero and ordinary circle homology with coefficients in $M$ is recovered. No AC is used. [F1, step 1.1] ∎
