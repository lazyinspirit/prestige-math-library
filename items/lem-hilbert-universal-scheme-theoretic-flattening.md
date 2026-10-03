---
id: lem-hilbert-universal-scheme-theoretic-flattening
kind: lemma
title: "Universal scheme theoretic flattening by Hilbert polynomial"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-hilbert-rank-flattening-finite-module
  - lem-hilbert-uniform-sections-after-flat-pullback
  - lem-hilbert-relative-regularity-and-base-change
  - thm-generic-flatness-morphisms
  - cor-euler-characteristic-locally-constant-flat-proper-family
  - lem-hilbert-uniform-regularity-fixed-polynomial
  - lem-generic-freeness-finite-type-algebra-module
  - thm-serre-vanishing
  - lem-eventual-global-generation-coherent-twists
  - thm-cohomology-projective-space-twisting-sheaves
  - lem-proper-cohomology-field-extension
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

Assume AC and DC. For a coherent $F$ on $\mathbb P^n_S$ with $S$ Noetherian, only finitely many fibre Hilbert polynomials occur. For each polynomial $P$ there is a locally closed subscheme $S_P\hookrightarrow S$, empty if $P$ does not occur, with this universal property for **every** scheme $T\to S$: $F_T$ is flat over $T$ and every fibre has polynomial $P$ if and only if $T\to S$ factors through $S_P$. Consequently $\coprod_P S_P\to S$ universally represents all base changes making $F$ flat, after decomposing $T$ into its open and closed polynomial loci. No reduction of $S_P$ is implicit.

## Facts & Assumptions

**Given:** The hypotheses in the statement and AC and DC, inherited from the scheme, cohomology, and finite-module suppliers ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] Generic freeness and Noetherian induction give a finite partition of $S$ into reduced locally closed schemes on which $F$ is flat ([[lem-generic-freeness-finite-type-algebra-module]], [[thm-generic-flatness-morphisms]]), and on such a flat family the fibre Euler characteristics, hence the fibre polynomials, are locally constant ([[cor-euler-characteristic-locally-constant-flat-proper-family]]). Uniform regularity bounds the higher cohomology of all fibres of such a family in one fixed tail ([[lem-hilbert-uniform-regularity-fixed-polynomial]]). The flat-family cohomology result is [[lem-hilbert-relative-regularity-and-base-change]]. Fibre polynomials are unchanged by field extension ([[lem-proper-cohomology-field-extension]]).

[F2] A finite presentation computes sections after a flat-family pullback in a uniform tail ([[lem-hilbert-uniform-sections-after-flat-pullback]]). Rank strata with arbitrary test-scheme universality are [[lem-hilbert-rank-flattening-finite-module]].

[F3] Serre vanishing is [[thm-serre-vanishing]]. Eventual global generation gives finite presentations of coherent sheaves by sums of twists over a Noetherian affine base ([[lem-eventual-global-generation-coherent-twists]]), and sections of sufficiently high twists of these sums are shifted polynomial modules ([[thm-cohomology-projective-space-twisting-sheaves]]).

## Proof

1.1 Work first over an affine open of $S$. The finite reduced partition in [F1], and local constancy of the polynomial in each flat family, imply that only finitely many polynomials occur. On each member of the partition, Serre vanishing and the uniform regularity bound of [F1], applied to the flat-family cohomology result, supply a common tail in which fibre higher cohomology vanishes. Also, for any fixed morphism of Noetherian bases, formation of sections of $F(r)$ commutes with that morphism for sufficiently large $r$: choose a two-term twist presentation; before and after pullback its two successive kernels are coherent, and Serre vanishing makes both section modules the same presentation cokernel. Apply this to each partition member. Increasing a common $N$ gives $(\pi_*F(r))\otimes\kappa(s)=H^0(F_s(r))$ for all $s$ and $r\ge N$. [F1, F3, algebra]

2.1 If $P$ does not occur, set $S_P=\varnothing$: any nonempty test scheme has a geometric point, whose fibre polynomial is one occurring on $S$ by [F1]. Otherwise $P$ has degree at most $n$. Increase $N$ further to the bounds in [F2] for every polynomial that occurs. Write $M_r=\pi_*F(r)$. Intersect the rank loci of $M_N,\ldots,M_{N+n}$ with prescribed ranks $P(N),\ldots,P(N+n)$ to obtain a locally closed scheme $W_P$. Its underlying points are exactly the polynomial-$P$ points: a degree-at-most-$n$ polynomial is determined by these $n+1$ values, and step 1.1 makes these values the fibre ranks. For each $r\ge N$, the rank-$P(r)$ stratum of $M_r|_{W_P}$ is closed by [F2], since all its fibre dimensions are $P(r)$. Let its ideal be $J_r$. The sum $\sum_{r\ge N}J_r$ is a coherent ideal and equals a finite partial sum, since $W_P$ is Noetherian. Define $S_P$ by this ideal. This retains every nilpotent equation. [F1, F2, step 1.1, construct]

3.1 On $S_P$, every $M_r$ pulls back to a locally free module of rank $P(r)$. The fixed Noetherian base change $S_P\to S$ commutes with sections in a sufficiently high tail by the presentation argument in step 1.1. Therefore all sufficiently high section modules of $F_{S_P}$ are locally free. On an affine open $V\subseteq S_P$, choose a twist presentation $E_1\to E_0\to F_{S_P}|_{\mathbb P^n_V}\to0$. Serre vanishing for its two successive coherent kernels makes the corresponding section tails right exact. Localizing at $x_j$ and taking degree zero preserves this exactness; for each $E_i$, its shifted polynomial section tail gives precisely its module on $D_+(x_j)$, by [F3]. Taking cokernels therefore identifies the localized degree-zero section tail of $F_{S_P}$ with its module on that chart. The section tail is base-flat, and each such degree-zero localization is flat, being a direct summand of a localization of a flat module. Thus $F_{S_P}$ is flat over $S_P$. Its fibre polynomial is $P$ by construction; any pullback along an arbitrary scheme map is still flat with polynomial $P$. [F3, step 1.1, step 2.1, algebra]

4.1 Conversely suppose $F_T$ is flat with polynomial $P$. On every affine open of $T$ mapping into our affine base, [F2] gives $M_r\otimes\mathcal O_T\cong\pi_{T*}F_T(r)$ for every $r\ge N$, uniformly for this arbitrary test scheme. The right side is locally free of rank $P(r)$. The universal rank properties therefore force the map to factor through $W_P$ and through all the closed rank loci there, hence through $S_P$. Uniqueness follows since a locally closed immersion is a monomorphism. This universal property glues the affine-base constructions over their overlaps. Finally the fibre polynomial of any flat family is locally constant by [F1], so its polynomial loci on $T$ are open and closed and the preceding factorizations give exactly the map to the coproduct. [F1, F2, step 2.1, step 3.1] ∎
