---
id: cor-homology-of-spheres
kind: corollary
title: "Homology of spheres"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-simplicial-and-singular-homology-agree-for-simplicial-complexes, cor-the-simplex-has-zero-reduced-simplicial-homology, def-zero-simplex-augmentation-and-reduced-singular-homology]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Example 2.23"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

For $n\ge1$, $\widetilde H_k(S^n;G)$ is $G$ for $k=n$ and $0$ otherwise.
For $S^0$, $\widetilde H_0(S^0;G)\cong G$ and all other reduced groups vanish.
Thus $H_0(S^n;G)\cong G$ for $n\ge1$, whereas
$H_0(S^0;G)\cong G\oplus G$.

## Facts & Assumptions

**Given:** The boundary of an $(n+1)$-simplex as a simplicial model of $S^n$.

## Proof

**Proof technique:** direct.

1.1 Put $D=\Delta^{n+1}$ and $K=\partial D$. The integral augmented complex of $D$ has a vertex-cone contraction, as used in [[cor-the-simplex-has-zero-reduced-simplicial-homology]]. Tensoring the contraction identity with $G$ preserves it, so the augmented complex with coefficients in $G$ is exact. For $k<n$, its groups and differentials computing reduced homology in degree $k$ agree with those of $K$, hence $\widetilde H_k^{\mathrm{simp}}(K;G)=0$. [given, construct]

2.1 In degree $n$, exactness for $D$ gives $\ker\partial_n=\operatorname{im}\partial_{n+1}$. The map $G=C_{n+1}(D;G)\to C_n(K;G)$ sends $g$ to the alternating sum of its facets with coefficient $g$; it is injective since any one facet has coefficient $g$ or $-g$. There are no $(n+1)$-chains in $K$, so $\widetilde H_n^{\mathrm{simp}}(K;G)\cong G$. This uses the augmentation as $\partial_0$ when $n=0$. Above degree $n$ all simplicial groups vanish. [step 1.1, algebra]

3.1 The characteristic-simplex comparison of [[thm-simplicial-and-singular-homology-agree-for-simplicial-complexes]] sends each vertex with coefficient $g$ to the corresponding singular point with coefficient $g$, so it commutes with augmentation to $G$. For either theory, $\widetilde H_0=\ker(H_0\to G)$, directly from the kernel-in-degree-zero definition in [[def-zero-simplex-augmentation-and-reduced-singular-homology]]. Thus the ordinary comparison isomorphism restricts to an isomorphism on these kernels; in positive degrees reduced and ordinary homology agree. The calculation therefore transfers to $|K|\cong S^n$, and negative reduced groups are zero by convention. [step 2.1, algebra]

4.1 For $n\ge1$, the augmentation $H_0(S^n;G)\to G$ is surjective (use any vertex) with zero kernel, hence is an isomorphism. For $n=0$, the simplicial model consists of two vertices and no edges, giving $H_0(S^0;G)\cong G\oplus G$; its augmentation kernel is $\{(g,-g):g\in G\}$. This includes $G=0$. [step 3.1, algebra] ∎
