---
id: ex-normal-affine-space
kind: example
title: Affine space is normal
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 1
proof_strategy: direct
justified_by: []
aliases: []
deps: [cor-finite-type-algebra-over-noetherian-ring-is-noetherian, def-axiom-of-choice, def-normal-point-and-normal-variety, lem-polynomial-algebras-over-fields-are-integrally-closed, def-normal-noetherian-ring, def-affine-variety-classical, thm-local-ring-affine-variety-localization, thm-normality-is-local-for-domains]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §a: normal varieties and the polynomial ring as a basic normal domain"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Affine $n$-space $\mathbf A^n_k$ over an algebraically closed field $k$ is
normal: its coordinate ring $k[x_1,\dots,x_n]$ is an integrally closed domain,
so every local ring $k[x_1,\dots,x_n]_{\mathfrak m}$ is integrally closed as
well.

## Facts & Assumptions

**Given:** AC, the algebraically closed field $k$, the integer $n\ge0$, affine $n$-space $X=\mathbf A^n_k$ with coordinate ring $A=k[x_1,\dots,x_n]$, and a point $x\in X$ with maximal ideal $\mathfrak m_x\subseteq A$.

[F1] $A=k[x_1,\dots,x_n]$ is an integrally closed domain, and it is Noetherian, so it is a normal Noetherian ring in the sense of [[def-normal-noetherian-ring]] ([[lem-polynomial-algebras-over-fields-are-integrally-closed]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[def-affine-variety-classical]]).

[F2] The local ring of $X$ at $x$ is the localisation $\mathcal O_{X,x}\cong A_{\mathfrak m_x}$ at the corresponding maximal ideal ([[thm-local-ring-affine-variety-localization]]).

[F3] A domain is integrally closed if and only if all of its maximal localisations are integrally closed ([[thm-normality-is-local-for-domains]]); the Noetherian ring $A$ is normal in the sense of [[def-normal-noetherian-ring]] precisely when its prime localisations are integrally closed domains.

[F4] $X$ is normal exactly when every local ring $\mathcal O_{X,x}$ is an integrally closed domain ([[def-normal-point-and-normal-variety]]).

[F7] AC is inherited through the classical localization, normalization, or finite-morphism suppliers cited above ([[def-axiom-of-choice]]).

## Proof

1.1 By [F1] the ring $A$ is an integrally closed domain, so by the localisation criterion [F3] every maximal localisation $A_{\mathfrak m}$ is integrally closed; in particular, for each point $x\in X$ the local ring $\mathcal O_{X,x}\cong A_{\mathfrak m_x}$ of [F2] is an integrally closed domain. [F1, F2, F3, given, F7]

2.1 Every point $x\in X$ has an integrally closed local ring by step 1.1, so by [F4] affine space is normal. This uses no characteristic or perfectness hypothesis: the input [F1] holds over every field. [F1, F4, step 1.1] ∎
