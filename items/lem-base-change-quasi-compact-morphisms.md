---
id: "lem-base-change-quasi-compact-morphisms"
kind: "lemma"
title: "Quasi-compactness is local on the target and survives base change"
status: "draft"
origin: "pipeline"
deps: ["def-quasi-compact-and-quasi-separated-morphism", "cor-affine-scheme-quasi-compact", "thm-fibre-products-of-schemes-exist"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Stacks 26.19.2–3"
      url: "https://stacks.math.columbia.edu/tag/01K2"
proof_strategy: direct
---

## Statement

For $f:X\to S$, the following are equivalent: $f$ is quasi-compact; the inverse image of every affine open in $S$ is quasi-compact; some affine open cover of $S$ has quasi-compact inverse images. Moreover any arbitrary base change of a quasi-compact morphism is quasi-compact.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] A morphism $f:X\to S$ is **quasi-compact** if $f^{-1}(V)$ is quasi-compact for every quasi-compact open $V\subseteq S$. It is **quasi-separated** if, for affine opens $U,U'\subseteq X$ lying over a common affine open of $S$, the intersection $U\cap U'$ is quasi-compact. This affine criterion is the definition used here, before the diagonal construction is available. ([[def-quasi-compact-and-quasi-separated-morphism]])

[F2] Every affine scheme is quasi-compact. ([[cor-affine-scheme-quasi-compact]])

[F3] Every diagram $X\to S\leftarrow Y$ of schemes has a fibre product. Given an affine cover $S=\bigcup_i\operatorname{Spec}A_i$ and affine covers $f^{-1}(\operatorname{Spec}A_i)=\bigcup_j\operatorname{Spec}B_{ij}$ and $g^{-1}(\operatorname{Spec}A_i)=\bigcup_k\operatorname{Spec}C_{ik}$, the product has open affine cover $$\operatorname{Spec}(B_{ij}\otimes_{A_i}C_{ik}).$$ ([[thm-fibre-products-of-schemes-exist]])

## Proof

1.1 By F1 and F2, quasi-compactness of $f$ implies the condition for every affine open, which implies the condition for any chosen affine cover. Suppose conversely that $S=\bigcup U_i$ is such a cover. For an arbitrary affine open $V\subset S$, principal opens in the $U_i$ contained in $V$ cover $V$. By F2 choose finitely many of them, say $W_1,\ldots,W_n$. [given, F1, F2]

2.1 For each $W_j=D_{U_i}(a)$ take a finite affine cover of the quasi-compact $f^{-1}(U_i)$. Its intersection with $f^{-1}(W_j)$ is principal in each affine chart, being the nonvanishing locus of the image of $a$, and is affine. Hence $f^{-1}(W_j)$, and then $f^{-1}(V)$, is a finite union of affines, thus quasi-compact by F2. Every quasi-compact open of $S$ has a finite affine cover; its inverse image is consequently quasi-compact. This is exactly F1. [F1, F2, step 1.1]

3.1 For $S^{\prime}\to S$, cover $S^{\prime}$ by affines $V^{\prime}$ mapping into affines $U\subset S$. A finite affine cover of $f^{-1}(U)$ pulls back by F3 to a finite affine cover of the inverse image of $V^{\prime}$. It is quasi-compact by F2. The criterion just proved gives quasi-compactness of the base-changed morphism. Empty covers, zero coordinate rings, and singleton covers are included. Composition of quasi-compact morphisms also follows directly from F1: pull back a quasi-compact open first by the second morphism and then by the first; both successive inverse images are quasi-compact. [F2, F3, step 2.1] ∎
