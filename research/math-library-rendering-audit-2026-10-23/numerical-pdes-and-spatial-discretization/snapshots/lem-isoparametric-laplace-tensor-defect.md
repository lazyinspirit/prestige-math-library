---
id: lem-isoparametric-laplace-tensor-defect
kind: lemma
title: "Derivative geometry error controls the Laplace tensor defect"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-curved-domain-geometry-approximation
  - lem-isoparametric-pullback-and-surface-metric
  - thm-holder-inequality-for-integrals
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

Let $\Phi,\Phi_h$ be the orientation-preserving maps of [[def-curved-domain-geometry-approximation]], with $J,J_h\ge j_*>0$ and $\|D\Phi\|_\infty+\|D\Phi_h\|_\infty\le M$. Set $B=J D\Phi^{-1}D\Phi^{-T}$ and $B_h=J_hD\Phi_h^{-1}D\Phi_h^{-T}$. Then $\|B-B_h\|_\infty\le C e_1$, where $C$ depends only on $d,j_*,M$. Consequently $|\int_{\widehat\Omega}\nabla v^T(B-B_h)\nabla w|\le C e_1\|\nabla v\|_2\|\nabla w\|_2$ for $v,w\in H^1(\widehat\Omega)$.

## Facts & Assumptions

**Given:** Two orientation-preserving $C^1$ diffeomorphisms with the stated determinant lower bounds and uniform derivative upper bounds.

[F1] [[def-curved-domain-geometry-approximation]]: $e_1=\|D\Phi-D\Phi_h\|_\infty$ and $J,J_h$ are the positive determinants.

[F2] [[lem-isoparametric-pullback-and-surface-metric]]: the pulled-back Laplace tensor is $J D\Phi^{-1}D\Phi^{-T}$.

[F3] [[thm-holder-inequality-for-integrals]]: integral Cauchy–Schwarz bounds the product of the two gradient magnitudes.

## Proof

1.1 On the bounded matrix set $\|A\|,\|C\|\le M$, the determinant is a polynomial in the entries, so its derivative is bounded on that set and $|\det A-\det C|\le C_d M^{d-1}\|A-C\|$. Apply this with $A=D\Phi$ and $C=D\Phi_h$ to obtain $|J-J_h|\le C e_1$. [F1, given, algebra]

2.1 The inverse identity $A^{-1}-C^{-1}=A^{-1}(C-A)C^{-1}$ and $J,J_h\ge j_*$ show $\|D\Phi^{-1}-D\Phi_h^{-1}\|\le C(d,M,j_*)e_1$; indeed every singular value is at most $M$ and their product is at least $j_*$, so the smallest is at least $j_*/M^{d-1}$ and each inverse norm is at most $M^{d-1}/j_*$.  Expanding $J A^{-1}A^{-T}-J_hC^{-1}C^{-T}$ into the determinant difference and the two inverse-factor differences gives $\|B-B_h\|_\infty\le Ce_1$. [F1, F2, step 1.1, algebra]

3.1 Pointwise, $|\nabla v^T(B-B_h)\nabla w|\le Ce_1|\nabla v||\nabla w|$. Integrating and applying [F3] proves the stated bilinear-form defect bound; the right side is finite because both gradients are in $L^2$. [F3, step 2.1, given] ∎
