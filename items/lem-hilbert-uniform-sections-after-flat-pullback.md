---
id: lem-hilbert-uniform-sections-after-flat-pullback
kind: lemma
title: "A fixed presentation computes sections after every flat-family pullback"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-hilbert-uniform-regularity-fixed-polynomial
  - lem-hilbert-relative-regularity-and-base-change
  - thm-serre-vanishing
  - lem-eventual-global-generation-coherent-twists
  - thm-hilbert-polynomial-coherent-sheaf
  - lem-filtered-colimit-flat-fp-sheaf-stage
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

Assume AC and DC. Let $A$ be Noetherian and $F$ coherent on $\mathbb P^n_A$, with a presentation $E_1\to E_0\to F\to0$ by finite sums of twists. Fix a polynomial $P$. There is $N$, depending only on the presentation and $P$, such that for every $A$-algebra $B$ for which $F_B$ is base-flat with fibre polynomial $P$, and every $r\ge N$, the canonical map $H^0(F(r))\otimes_A B\to H^0(F_B(r))$ is an isomorphism, and both sides are finite locally free over $B$ of rank $P(r)$. The target algebra need not be Noetherian. The two successive kernels of $E_{1,B}\to E_{0,B}\to F_B$ are finitely presented and flat over $B$, with fibre polynomials $P_{E_0}-P$ and $P_{E_1}-P_{E_0}+P$, respectively.

## Facts & Assumptions

**Given:** The hypotheses in the statement and AC and DC, inherited from the scheme, cohomology, and finite-module suppliers ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] Uniform regularity for a subsheaf of a fixed sum of twists is [[lem-hilbert-uniform-regularity-fixed-polynomial]]. Relative generation, vanishing, and arbitrary base change for flat finitely presented sheaves are [[lem-hilbert-relative-regularity-and-base-change]].

[F2] Every coherent sheaf on projective space over a Noetherian affine base has a presentation by finite sums of twists, and its sufficiently high twists have no higher cohomology ([[lem-eventual-global-generation-coherent-twists]], [[thm-serre-vanishing]]). Polynomial additivity is [[thm-hilbert-polynomial-coherent-sheaf]]. A finitely presented base-flat sheaf over a filtered colimit descends with flatness to a sufficiently late Noetherian stage ([[lem-filtered-colimit-flat-fp-sheaf-stage]]).

## Proof

1.1 For a flat-family pullback put $K_B=\ker(E_{0,B}\to F_B)$ and $L_B=\ker(E_{1,B}\to K_B)$. Right exactness makes $E_{1,B}\to K_B$ onto. Both kernels are base-flat by the Tor argument, since $E_0,E_1,F_B$ are base-flat. They are finitely presented as follows. Write $B$ as the filtered colimit of its finitely generated $\mathbb Z$-subalgebras containing a finitely generated stage over which the presentation of $F$ descends (these stages are Noetherian). By the flat descent in [F2], after passing to one stage the given pullback $F$ is flat there. At that stage both successive kernels of the pulled-back presentation are coherent and base-flat. Tensoring these two sequences with $B$ stays exact because their quotients are base-flat. It identifies the stage kernels' pullbacks with $K_B,L_B$, so these kernels are finitely presented. Their fibre polynomials are respectively $P_{E_0}-P$ and $P_{E_1}-P_{E_0}+P$, independent of $B$. [F2, algebra]

2.1 By [F1], one bound depending only on these polynomials and $E_0,E_1$ makes every fibre of $K_B,L_B$ regular. Increase it to make $E_0,E_1$ regular too. The relative result gives $H^1(K_B(r))=H^1(L_B(r))=0$, so $H^0(F_B(r))$ is the cokernel of $H^0(E_{1,B}(r))\to H^0(E_{0,B}(r))$, for every $r$ beyond this bound. The two twist-section modules themselves commute with all base changes and are finite free in this degree range. [F1, step 1.1, algebra]

3.1 Over the original Noetherian base, put $K=\ker(E_0\to F)$ and $L=\ker(E_1\to K)$. Increase $N$ further so $H^1(K(r))=H^1(L(r))=0$ for $r\ge N$, by [F2]. The original $H^0(F(r))$ is now the same presentation cokernel. Right exactness of tensoring, together with the twist base-change isomorphisms, identifies its tensor with the cokernel in step 2.1. This is the canonical base-change map since all maps came from the given presentation. The relative result makes the target locally free of rank $P(r)$. Thus $N$ is independent of the base-change algebra. [F1, F2, step 2.1, algebra] ∎
