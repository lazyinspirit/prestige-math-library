---
id: ex-closed-rays-form-a-borel-generating-pi-system
kind: example
title: "Closed left rays form a pi-system generating the Borel sigma-algebra on the real line"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pi-system, thm-seven-generators-of-the-borel-sigma-algebra-on-r]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Proposition 2.8"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Example

The family $\mathcal P:=\{(-\infty,a]:a\in\mathbb R\}$ is a pi-system and
$\sigma_{\mathbb R}(\mathcal P)=\mathcal B(\mathbb R)$.

## Facts & Assumptions

**Given:** The family $\mathcal P$ of closed left rays.

[L1] A pi-system is a nonempty family closed under binary intersections ([[def-pi-system]]).

[L2] The open right rays $(a,\infty)$ generate $\mathcal B(\mathbb R)$ ([[thm-seven-generators-of-the-borel-sigma-algebra-on-r]]).

## Verification

**Proof technique:** direct.

1.1 The family is nonempty, and $(-\infty,a]\cap(-\infty,b]=(-\infty,\min\{a,b\}]$, so it is a pi-system by [L1]. [L1, algebra]

2.1 Complementation exchanges $(-\infty,a]$ with $(a,\infty)$. A generated sigma-algebra is complement-closed, so [L2] implies that the closed left rays generate $\mathcal B(\mathbb R)$. [step 1.1, L2, algebra] ∎
