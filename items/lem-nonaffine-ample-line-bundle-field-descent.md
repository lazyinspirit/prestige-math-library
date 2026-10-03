---
id: lem-nonaffine-ample-line-bundle-field-descent
kind: lemma
title: "Ampleness of a given line bundle descends under field extension"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, thm-serre-criterion-ampleness, lem-nonaffine-global-sections-flat-field-base-change, thm-faithfully-flat-descent-vanishing]
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
    - title: "Stacks Project, Properties, ampleness under faithfully flat base change"
      url: https://stacks.math.columbia.edu/tag/01Q3
    - title: "Stacks Project, Varieties, Lemma 33.15.1"
      url: https://stacks.math.columbia.edu/download/varieties.pdf
---

## Statement

Assume the Axiom of Choice. Let $X$ be a separated finite-type scheme over $k$, $L$ an invertible sheaf on $X$, and $K/k$ a field extension. If $L_K$ is ample on $X_K$, then $L$ is ample on $X$.

## Facts & Assumptions

[F1] On a Noetherian scheme, ampleness is equivalent to eventual global generation of $F\otimes L^n$ for every coherent sheaf $F$. ([[thm-serre-criterion-ampleness]])

[F2] A module which becomes zero after faithfully flat base extension is zero. ([[thm-faithfully-flat-descent-vanishing]])

[F3] The finite affine-cover equalizer commutes with extension of scalars over a field. ([[lem-nonaffine-global-sections-flat-field-base-change]])

## Proof

**Given:** AC, $X$, $L$, $K/k$, and ampleness of $L_K$.

1.1 For every quasi-coherent sheaf $F$ on $X$, $\Gamma(X,F)\otimes_kK\cong\Gamma(X_K,F_K)$. Indeed choose a finite affine cover; its intersections are affine by separatedness. The sheaf gluing equalizer for the modules of sections is exact, and tensoring by $K$ preserves that equalizer and finite products, just as in [F3]. On each affine chart the sections of the pulled-back quasi-coherent sheaf are the original module tensored with $K$, so the equalizer is exactly the global-section module of $F_K$. [F3, given, algebra]

2.1 Fix a coherent $F$. Its base extension is coherent, since its finite presentations base extend on affine charts. By [F1], for all sufficiently large $n$, the evaluation map for $F_K\otimes L_K^n$ is onto. By step 1.1 this is the base extension of the evaluation map $\Gamma(X,F\otimes L^n)\otimes_k\mathcal O_X\to F\otimes L^n$. On every affine chart its cokernel becomes zero after tensoring by $K$ and hence is zero by [F2]. Thus the original sheaf is globally generated for all such $n$. Since $F$ was arbitrary, [F1] gives ampleness of $L$. AC is inherited from [F1]; no descent of a newly chosen line bundle is assumed. [F1, F2, step 1.1, algebra] ∎
