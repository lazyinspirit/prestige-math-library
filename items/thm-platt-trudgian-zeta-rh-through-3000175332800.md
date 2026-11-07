---
id: thm-platt-trudgian-zeta-rh-through-3000175332800
kind: theorem
title: "Riemann hypothesis for zeta through height 3,000,175,332,800"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-riemann-zeta-function
  - thm-riemann-zeta-continuation-to-the-right-half-plane
proof_strategy: direct
sources:
  references:
    - title: "David J. Platt and Timothy S. Trudgian, The Riemann hypothesis is true up to 3·10^12, Theorem 1"
      url: "https://arxiv.org/pdf/2004.09765v1"
    - title: "David J. Platt and Timothy S. Trudgian, The Riemann hypothesis is true up to 3·10^12, published version"
      url: "https://doi.org/10.1112/blms.12460"
---

## Statement

Platt and Trudgian proved that every nontrivial zero $\rho=\beta+i\gamma$ of the Riemann zeta function with $0<\gamma\le3{,}000{,}175{,}332{,}800$ satisfies $\beta=\tfrac12$.

## Statement references

[Platt and Trudgian, *The Riemann hypothesis is true up to $3\cdot10^{12}$*, arXiv full text, Theorem 1](https://arxiv.org/pdf/2004.09765v1)

[Platt and Trudgian, *Bulletin of the London Mathematical Society* 53(3) (2021), 792–797](https://doi.org/10.1112/blms.12460)

## Facts & Assumptions

**Given:** A nontrivial zero $\rho=\beta+i\gamma$ of the Riemann zeta function with $0<\gamma\le3{,}000{,}175{,}332{,}800$.

[F1] **External input, established finite computation.** Platt and Trudgian, *The Riemann hypothesis is true up to $3\cdot10^{12}$*, arXiv:2004.09765v1, §1 Theorem 1, printed p. 2 ([complete v1 article](https://arxiv.org/pdf/2004.09765v1)), establish unconditionally that every nontrivial zeta zero with $0<\operatorname{Im}\rho\le3{,}000{,}175{,}332{,}800$ has real part $1/2$. The owner authorized exactly this fourth computation input for run number-theory-all-141-2026-10-25. It is imported from the source, not reconstructed or replayed locally.

[F2] [[def-riemann-zeta-function]] defines $\zeta(s)=\sum_{n\ge1}n^{-s}$ for $\operatorname{Re}s>1$.

[F3] [[thm-riemann-zeta-continuation-to-the-right-half-plane]] gives its choice-free meromorphic continuation to $\operatorname{Re}s>0$, with its only pole there at $s=1$; this supplies the zeta notation on the open critical strip.

## Proof

1.1 The zeta function in the statement is the Dirichlet-series function in [F2], continued to the critical strip as in [F3]. Thus the given nontrivial zero is a zero of the same zeta function as in the imported result [F1]. This identifies the notation and does not supply a local zero count. [given, F1, F2, F3]

2.1 The given ordinate lies in the exact positive-height range of [F1], including its upper endpoint. Applying that imported finite computation yields $\beta=\tfrac12$, as asserted. This argument is an application of the authorized external input. [given, F1, step 1.1] ∎

## Remarks

The complete eight-page arXiv v1 article, §§1–3 and references, was read. Its §2, printed pp. 2–3, reports interval/ball arithmetic, a sign-change search with Turing completeness checks, and approximately 7.5 million core hours. That is the authors' historical execution report. No production replay, complete local certificate, independent numerical-code acceptance or locally reconstructed computation is claimed here. The publisher endpoint returned HTTP 403 in the focused investigation; no full journal-version comparison is claimed.

The precise fourth-input authorization is recorded in research/number-theory-all-141-2026-10-25-fourth-external-computation-authorization.json under CLAUDE.md rule 14. It covers this exact unconditional finite conclusion only. The separate local interval algorithms, generic contour-count soundness theorem and Countable Choice critical-line corollary retain their own contracts and assumptions. They are not logical suppliers of this imported computation; neither the Riemann–von Mangoldt count nor Countable Choice is needed to apply [F1]. This does not alter those existing suppliers or import any other computation or analytic consequence.
