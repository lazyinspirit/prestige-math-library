---
id: thm-generated-sigma-algebra-calculus
kind: theorem
title: "Generated sigma-algebras are monotone in their generators and idempotent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-generated-sigma-algebra-exists-and-is-minimal]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Section 2.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Statement

For families $\mathcal E,\mathcal F\subseteq\mathcal P(X)$:

1. if $\mathcal E\subseteq\mathcal F$, then
   $\sigma_X(\mathcal E)\subseteq\sigma_X(\mathcal F)$;
2. $\sigma_X(\sigma_X(\mathcal E))=\sigma_X(\mathcal E)$.

## Facts & Assumptions

**Given:** Families $\mathcal E,\mathcal F\subseteq\mathcal P(X)$.

[L1] The family $\sigma_X(\mathcal E)$ is the unique smallest sigma-algebra on $X$ containing $\mathcal E$ ([[thm-generated-sigma-algebra-exists-and-is-minimal]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathcal E\subseteq\mathcal F$, then the sigma-algebra $\sigma_X(\mathcal F)$ contains $\mathcal E$, so minimality in [L1] gives $\sigma_X(\mathcal E)\subseteq\sigma_X(\mathcal F)$. [L1]

2.1 The family $\sigma_X(\mathcal E)$ is already a sigma-algebra. It is therefore the smallest sigma-algebra containing itself, and [L1] gives $\sigma_X(\sigma_X(\mathcal E))=\sigma_X(\mathcal E)$. [L1] ∎
