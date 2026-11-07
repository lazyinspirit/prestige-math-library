---
dependency_level: 10
id: lem-cyclic-local-norm-index-from-class-formation
kind: lemma
title: "Cyclic local norm index from the local invariant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-continuous-lyndon-hochschild-serre-spectral-sequence
  - thm-local-class-formation-for-finite-residue-local-field
  - lem-cyclic-group-cohomology-norm-and-inflation
  - thm-hilbert-90-for-absolute-galois-group
  - thm-field-norm-and-trace-by-embeddings
justified_by: []
proof_strategy: direct
axiom_use: "AC and DC explicitly; use the full AC continuous-LHS branch, never its compact/DC alternative with additional supplied-model hypotheses."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapters II\u2013III"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification: {}
---

## Statement

Assume AC and DC, with the supplied continuous cohomology convention. For every finite cyclic extension $L/K$ of finite-residue nonarchimedean local fields of degree $n$, the norm quotient $K^\times/N_{L/K}L^\times$ is cyclic of order $n$. This conclusion does not assume a local Artin map, Tate–Nakayama, or a ramified-unit Herbrand calculation.

## Statement references

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[thm-continuous-lyndon-hochschild-serre-spectral-sequence]]

[[thm-local-class-formation-for-finite-residue-local-field]]

[[lem-cyclic-group-cohomology-norm-and-inflation]]

[[thm-hilbert-90-for-absolute-galois-group]]

[[thm-field-norm-and-trace-by-embeddings]]

## Facts & Assumptions

**Given:** The data in the Statement.

[A1] AC supplies the full closed-normal-subgroup branch of continuous inflation–restriction, including compactness and the resolution/comparison choices; DC supplies the cohomology convention. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] For $\Gamma$ profinite, $N$ closed normal, and a discrete continuous module $M$, under AC the continuous LHS theorem has literal inflation and restriction edges; if $H^1(N,M)=0$, then inflation $H^2(\Gamma/N,M^N)\to H^2(\Gamma,M)$ is injective with image the kernel of restriction to $H^2(N,M)$. [[thm-continuous-lyndon-hochschild-serre-spectral-sequence]]

[F2] For local fields the degree-two invariants identify $H^2(G_K,K_s^\times)$ and $H^2(G_L,K_s^\times)$ with $\mathbb Q/\mathbb Z$, and restriction is multiplication by $[L:K]$. [[thm-local-class-formation-for-finite-residue-local-field]]

[F3] Hilbert 90 gives $H^1(G_L,K_s^\times)=0$. [[thm-hilbert-90-for-absolute-galois-group]]

[F4] For a finite cyclic group, $H^2(G,M)=M^G/N_GM$ under the stated cohomology convention. [[lem-cyclic-group-cohomology-norm-and-inflation]]

[F5] The Galois product norm equals the determinant field norm. [[thm-field-norm-and-trace-by-embeddings]]

## Proof

**Given:** The data and conventions above.

1.1 Fix a separable closure $K_s$ containing $L$. For $\Gamma=G_K$ and $N=G_L$, the quotient is $\operatorname{Gal}(L/K)=G$, and $(K_s^\times)^N=L^\times$. Use the full AC branch in [F1]; [F3] gives its required first-cohomology vanishing. Thus inflation identifies $H^2(G,L^\times)$ with the kernel of $\operatorname{Res}:H^2(G_K,K_s^\times)\to H^2(G_L,K_s^\times)$. [A1, F1, F3, given]

2.1 Under [F2], that kernel is $\ker(n:\mathbb Q/\mathbb Z\to\mathbb Q/\mathbb Z)=(\frac1n\mathbb Z)/\mathbb Z$, cyclic of order $n$. By [F4] and [F5], $H^2(G,L^\times)=K^\times/N_GL^\times=K^\times/N_{L/K}L^\times$. This proves the claim, including $n=1$. The chain uses only the invariant, Hilbert 90 and inflation–restriction, so has no ramified-unit or local-reciprocity premise. [F2, F4, F5, step 1.1, algebra] ∎ 