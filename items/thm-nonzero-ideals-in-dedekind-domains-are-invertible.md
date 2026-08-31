---
id: thm-nonzero-ideals-in-dedekind-domains-are-invertible
kind: theorem
title: "Every nonzero fractional ideal of a Dedekind domain is invertible"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dedekind-domain, thm-invertible-ideal-characterisations, lem-dedekind-localisation-at-nonzero-prime-is-dvr, thm-ideals-in-a-dvr, thm-local-criterion-for-zero-modules-and-maps]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every nonzero fractional ideal of a Dedekind domain
is invertible.

## Facts & Assumptions

**Given:** A Dedekind domain $R$ and a nonzero fractional ideal $I$ of $R$.

[F1] A Dedekind domain is a Noetherian integrally closed domain of dimension $1$ ([[def-dedekind-domain]]).

[L1] A nonzero-prime localisation of a Dedekind domain is a DVR ([[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]).

[L2] Every nonzero ideal of a DVR is principal ([[thm-ideals-in-a-dvr]]).

[L3] A nonzero finitely generated fractional ideal is invertible exactly when all maximal localisations are principal ([[thm-invertible-ideal-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 Choose $0\neq d\in R$ with $J:=dI\subseteq R$. Then $J$ is a nonzero integral ideal of $R$, so [F1] makes it finitely generated; hence the fractional ideal $I=d^{-1}J$ is finitely generated as well. Let $\mathfrak m$ be a maximal ideal. If $J\nsubseteq\mathfrak m$, then $J_{\mathfrak m}=R_{\mathfrak m}$, so $I_{\mathfrak m}=d^{-1}R_{\mathfrak m}$ is principal. If $J\subseteq\mathfrak m$, then $\mathfrak m$ is a nonzero prime, [L1] makes $R_{\mathfrak m}$ a DVR, and [L2] makes the integral ideal $J_{\mathfrak m}$ principal. Hence $I_{\mathfrak m}=d^{-1}J_{\mathfrak m}$ is principal in either case. Thus $I$ is finitely generated and every maximal localisation of $I$ is principal. [F1, L1, L2, given, choose, algebra]

2.1 Applying [L3] to step 1.1 shows that $I$ is invertible. [L3, step 1.1] ∎
