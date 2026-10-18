---
id: lem-isoparametric-pullback-and-surface-metric
kind: lemma
title: "Pullback gradients and induced surface metrics"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-isoparametric-curved-cell-map
  - thm-chain-rule-for-total-derivatives
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2023, Part III, Chapter 8"
      url: https://people.tamu.edu/~guermond/M661_FALL_2023/chap08.pdf
    - title: "Gerald Dziuk and Charles M. Elliott, Finite element methods for surface PDEs, Acta Numerica 22 (2013)"
      url: https://wrap.warwick.ac.uk/id/eprint/53966/1/WRAP_Elliott_DziEll13a.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $F:\widehat K\to K$ be an admissible $C^1$ orientation-preserving cell diffeomorphism and let $u$ be $C^1$ on $K$. With $\widehat u=u\circ F$, one has $\nabla_xu\circ F=DF^{-T}\nabla_{\xi}\widehat u$ and $\int_K |\nabla u|^2dx=\int_{\widehat K}J_F\nabla\widehat u^T(DF^{-1}DF^{-T})\nabla\widehat u\,d\xi$. For a regular $k$-dimensional parametrized face $f:U\subset\mathbb R^k\to\mathbb R^d$ with metric $G_f=Df^TDf$, the induced area factor is $\sqrt{\det G_f}$ and the tangential gradient of $u\circ f$ is $DfG_f^{-1}\nabla(u\circ f)$; its squared norm is $\nabla(u\circ f)^TG_f^{-1}\nabla(u\circ f)$.

## Facts & Assumptions

**Given:** Countable Choice, an admissible orientation-preserving $C^1$ cell map, and a $C^1$ scalar field.

[F1] [[def-isoparametric-curved-cell-map]]: $J_F=\det DF>0$, $G_F=DF^TDF$, and the induced facet metric is the Gram matrix of the facet differential.

[F2] [[thm-chain-rule-for-total-derivatives]]: $D(u\circ F)=Du(F)\,DF$.

[F3] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under Countable Choice a $C^1$ diffeomorphism changes variables with factor $|\det DF|$.

[A1] Countable Choice is assumed exactly for [F3] ([[def-countable-choice]]).

## Proof

1.1 The chain rule [F2] gives $\nabla_\xi\widehat u=DF^T(\nabla_xu\circ F)$. Since $DF$ is invertible by admissibility, multiplication by $DF^{-T}$ yields $\nabla_xu\circ F=DF^{-T}\nabla_\xi\widehat u$. [F1, F2, given, algebra]

1.2 For a regular face parametrization, the differential maps a coordinate vector $z$ to $Df z$ and its squared Euclidean length is $z^TG_fz$. The vector $G_f^{-1}\nabla(u\circ f)$ is therefore the coordinate vector whose image under $Df$ has the defining inner products with every tangent vector; its image is the tangential gradient. Taking its squared norm gives $\nabla(u\circ f)^TG_f^{-1}\nabla(u\circ f)$. The Gram determinant gives the $k$-volume scaling factor. [F1, F2, algebra]

2.1 The energy identity follows by substituting step 1.1 into $|\nabla u|^2$ and applying [F3] to the nonnegative measurable energy density. Since $J_F>0$, the absolute determinant in [F3] equals $J_F$. [F1, F3, A1, given, step 1.1] ∎
