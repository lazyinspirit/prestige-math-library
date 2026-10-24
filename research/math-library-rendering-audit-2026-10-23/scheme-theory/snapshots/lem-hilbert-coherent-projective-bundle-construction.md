---
id: lem-hilbert-coherent-projective-bundle-construction
kind: lemma
title: "Global Hilbert strata in a coherent projective bundle over a locally Noetherian base"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-hilbert-functor-of-flat-projective-subschemes
  - lem-hilbert-regularity-independent-of-ambient-dimension
  - lem-hilbert-relative-grassmannian-quotients
  - lem-hilbert-projective-space-construction
  - lem-hilbert-universal-scheme-theoretic-flattening
  - lem-hilbert-valuative-flat-closure
  - lem-hilbert-relative-regularity-and-base-change
  - lem-hilbert-uniform-sections-after-flat-pullback
  - thm-valuative-criterion-properness
  - thm-relative-proj-base-change
  - def-axiom-of-choice
  - def-dependent-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item lem-hilbert-coherent-projective-bundle-construction; evidence research/frontier-38-owner-30-reader-29.md, research/frontier-38-owner-30-reader-findings-29.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Nitsure, Construction of Hilbert and Quot Schemes, Sections 2–5"
      url: "https://arxiv.org/pdf/math/0504590"
    - title: "Grothendieck, Les schémas de Hilbert, Bourbaki 221, Section 3"
      url: "https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf"
---

## Statement

Assume AC and DC. Let $S$ be any locally Noetherian scheme, possibly non-quasi-compact, and $E$ a coherent module sheaf on $S$. For $Y=\mathbb P_S(E)=\operatorname{Proj}_S\operatorname{Sym}E$ with $M=\mathcal O_Y(1)$ and every fixed $P$, the Hilbert functor with polynomial $P$ for $M$ is represented on all $S$-schemes by a proper finitely presented scheme $H_P$. Polynomials with eventually negative values have empty representative. For the remaining polynomials, and a sufficiently large $r$ depending only on $P$ with $P(r)\ge0$, it has a global closed immersion into $\operatorname{Gr}_S(\operatorname{Sym}^rE,P(r))$, hence into $\mathbb P_S(\bigwedge^{P(r)}\operatorname{Sym}^rE)$. The pullback of its tautological line is globally relatively very ample. There is a universal closed finitely presented flat family, and all constructions have their stated universal properties on arbitrary test schemes. No uniform bound on local generator numbers of $E$ or quasi-compactness of $S$ is assumed.

## Facts & Assumptions

**Given:** AC and DC and the hypotheses of the statement.

[F1] Uniform regularity independent of ambient dimension is [[lem-hilbert-regularity-independent-of-ambient-dimension]]. Relative sections and generation for flat families are [[lem-hilbert-relative-regularity-and-base-change]], with finite-presentation of the flat kernels from [[lem-hilbert-uniform-sections-after-flat-pullback]]. The coherent-source Grassmannian and its global Plücker embedding are [[lem-hilbert-relative-grassmannian-quotients]].

[F2] The local Grassmannian-cokernel construction is [[lem-hilbert-projective-space-construction]], and universal flattening is [[lem-hilbert-universal-scheme-theoretic-flattening]]. The arbitrary-valuation closure is [[lem-hilbert-valuative-flat-closure]] and the properness criterion is [[thm-valuative-criterion-properness]]. Relative Proj commutes with base change ([[thm-relative-proj-base-change]]).

## Proof

1.1 Every affine open $U\subseteq S$ is Noetherian and $E|_U$ has finitely many generators. A surjection $\mathcal O_U^{n+1}\twoheadrightarrow E|_U$ embeds $Y_U$ in $\mathbb P^n_U$, carrying $M$ to the ambient twist. Choose $r\ge b(P)$ as in [F1], so the same degree works for all these local embeddings, even if their $n$ are unbounded. For a flat family on any $T$, the ambient degree-$r$ polynomial sections surject onto $\pi_*\mathcal O_Z(r)$ by [F1]. The map factors through $W_T=(\operatorname{Sym}^rE)_T$, since the degree algebra relations of $Y$ vanish on $Z$. Its target is locally free of rank $P(r)$ and commutes with all base changes, giving a natural map to $G=\operatorname{Gr}_S(W,P(r))$. [F1, F2, construct]

2.1 On $G$ let $K$ be the kernel of the universal quotient $W_G\twoheadrightarrow U$. This kernel commutes with arbitrary pullback because the locally free quotient splits the sequence locally. On $Y_G$ form the cokernel of evaluation $\pi^*K\otimes M^{-r}\to\mathcal O_{Y_G}$, a quotient structure algebra $F$. On every Noetherian affine base open, apply [F2] after embedding $Y$ into the local projective space: the polynomial-$P$ flattening stratum of $F$ represents exactly those Grassmannian quotients that reconstruct a flat family. A family's ideal in the ambient space is generated in degree $r$, so its image ideal on $Y$ is generated by $K$ under evaluation. Conversely when the reconstructed quotient is flat with polynomial $P$, the map $U\to\pi_*F(r)$ is onto and between locally free modules of the same rank, hence an isomorphism. This is the same two-sided reconstruction as [F2]. Thus the local strata represent the identical functor on overlaps, and their universal ideals agree. They glue to $H_P\to G$ and its universal family; this morphism is an immersion on the preimage of every affine base open. [F1, F2, step 1.1, construct]

3.1 Over a Noetherian affine base open $U$, $G_U$ is a finite-type Noetherian scheme, and its flattening stratum is locally closed and of finite presentation. Thus $H_P\to S$ is finitely presented and separated, these properties being local on the base. For a valuative diagram, the image of the valuation ring's closed point lies in such an affine open and all other images are its generizations. Use the local embedding $Y_U\subseteq\mathbb P^n_U$ and [F2] to obtain the unique flat closure. It lies in $Y_R$, since its flat structure sheaf is torsion-free and the ideal of $Y_R$ kills it generically. This proves the criterion over every valuation ring, so $H_P\to S$ is proper. Since $G\to S$ is separated, $H_P\to G$ is also proper: use its closed graph in $H_P\times_SG$ and the proper projection. Its local immersions are therefore closed immersions. Closed immersion is local on the target, so they give a global closed immersion in $G$. The global coherent-source Plücker embedding in [F1] proves the displayed projective-bundle embedding and the relatively very ample line assertion. [F1, F2, step 2.1, algebra] ∎
