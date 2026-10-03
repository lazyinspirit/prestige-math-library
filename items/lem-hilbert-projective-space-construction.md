---
id: lem-hilbert-projective-space-construction
kind: lemma
title: "Construction of the fixed-polynomial Hilbert scheme of projective space"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-hilbert-uniform-sections-after-flat-pullback
  - def-hilbert-functor-of-flat-projective-subschemes
  - lem-hilbert-uniform-regularity-fixed-polynomial
  - lem-hilbert-relative-regularity-and-base-change
  - lem-hilbert-relative-grassmannian-quotients
  - lem-hilbert-universal-scheme-theoretic-flattening
  - def-dependent-choice
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Nitin Nitsure, Construction of Hilbert and Quot Schemes, Sections 2–5"
      url: "https://arxiv.org/pdf/math/0504590"
    - title: "Alexander Grothendieck, Les schémas de Hilbert, Bourbaki 221, Sections 2–3"
      url: "https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf"
---

## Statement

Assume AC and DC. For Noetherian $S$, $n\ge0$, and fixed $P$, the functor $\operatorname{Hilb}^{P,\mathcal O(1)}_{\mathbb P^n_S/S}$ on all $S$-schemes is represented by a locally closed finitely presented subscheme $H_P$ of one relative Grassmannian. It has a universal closed flat finitely presented family. The Grassmannian map recovers every family scheme theoretically from its quotient of sections in one uniformly fixed degree.

## Facts & Assumptions

**Given:** The hypotheses in the statement and AC and DC, inherited from the scheme, cohomology, and finite-module suppliers ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] Uniform kernel and quotient regularity is [[lem-hilbert-uniform-regularity-fixed-polynomial]]. The relative generation and arbitrary base-change result is [[lem-hilbert-relative-regularity-and-base-change]]. Flat successive kernels are finitely presented, including over arbitrary base algebras, by [[lem-hilbert-uniform-sections-after-flat-pullback]]; apply it locally to a twist presentation descended to a Noetherian stage.

[F2] The relative Grassmannian is [[lem-hilbert-relative-grassmannian-quotients]]. Universal flattening with arbitrary test schemes is [[lem-hilbert-universal-scheme-theoretic-flattening]].

## Proof

1.1 Choose $r$ large enough that every kernel and quotient of $\mathcal O_{\mathbb P^n_k}\twoheadrightarrow\mathcal O_Z$ with polynomial $P$, over every field, is $r$-regular. For any Hilbert family on $T$, its ideal $I$ and quotient are base-flat: the ambient structure sheaf is base-flat, so the Tor sequence gives this for $I$. They are finitely presented, locally by descent to a flat Noetherian stage as in [F1]. Thus the section sequence is an exact sequence of vector bundles $0\to\pi_*I(r)\to W_T\to\pi_*\mathcal O_Z(r)\to0$, with $W=H^0(\mathbb P^n_S,\mathcal O(r))$ and quotient rank $P(r)$, compatible with every base change. If the rank is impossible the functor is empty. Otherwise it gives a natural map to $G=\operatorname{Gr}_S(W,P(r))$. [F1, F2, construct]

2.1 On $G$, let $K$ be the kernel of its universal quotient. On $\mathbb P^n_G$ form $F=\operatorname{coker}(\pi^*K\otimes\mathcal O(-r)\to\mathcal O)$, with the map obtained by evaluation. Since the image is an ideal, $F$ is the structure sheaf of a closed finitely presented subscheme. Let $H_P\subseteq G$ be its polynomial-$P$ universal flattening stratum from [F2]. For every Hilbert family, evaluation generates $I(r)$ by [F1], so the cokernel reconstruction is exactly its structure sheaf and the map to $G$ factors through $H_P$. [F1, F2, step 1.1, construct]

3.1 Conversely a map $T\to H_P$ gives a flat family with polynomial $P$. The universal rank-$P(r)$ quotient $J$ of $W_T$ maps to its section module because evaluation kills $K_T$. That map is surjective by [F1] applied to the reconstructed ideal and structure sheaf. Both source and target are locally free of the same rank, so it is an isomorphism. Thus the recovered Grassmannian quotient is the original one. These two constructions are inverse for every $T$, and commute with every pullback. This proves representability and the universal-family assertion, including nonreduced test schemes. [F1, step 1.1, step 2.1, algebra] ∎
