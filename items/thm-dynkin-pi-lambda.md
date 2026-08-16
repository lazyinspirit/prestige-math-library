---
id: thm-dynkin-pi-lambda
kind: theorem
title: "Dynkin's pi-lambda theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-generated-lambda-system-closed-under-intersections, lem-lambda-system-with-finite-intersections-is-sigma, lem-generated-lambda-system-exists-and-is-minimal, thm-generated-sigma-algebra-exists-and-is-minimal]
aliases: []
landmark: true
short: "Dynkin's $\\pi$-$\\lambda$ theorem"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Dembo, Probability Theory lecture notes, Theorem 1.1.38"
      url: "https://adembo.su.domains/stat-310b/lnotes.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal P$ be a pi-system on $X$. Then
$\lambda_X(\mathcal P)=\sigma_X(\mathcal P)$. Consequently, if $\mathcal D$ is
any lambda-system on $X$ with $\mathcal P\subseteq\mathcal D$, then
$\sigma_X(\mathcal P)\subseteq\mathcal D$.

## Facts & Assumptions

**Given:** A pi-system $\mathcal P$ on $X$, its generated lambda-system $\lambda_X(\mathcal P)$, and an arbitrary lambda-system $\mathcal D$ containing $\mathcal P$.

[L1] If $\mathcal P$ is a pi-system on $X$, then $\lambda_X(\mathcal P)$ is closed under binary intersections ([[lem-generated-lambda-system-closed-under-intersections]]).

[L2] A lambda-system on $X$ closed under binary intersections is a sigma-algebra on $X$ ([[lem-lambda-system-with-finite-intersections-is-sigma]]).

[L3] The family $\lambda_X(\mathcal P)$ is the smallest lambda-system containing $\mathcal P$ ([[lem-generated-lambda-system-exists-and-is-minimal]]).

[L4] The family $\sigma_X(\mathcal P)$ is the smallest sigma-algebra containing $\mathcal P$ ([[thm-generated-sigma-algebra-exists-and-is-minimal]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], [L2], and [L3], $\lambda_X(\mathcal P)$ is a sigma-algebra containing $\mathcal P$. Hence [L4] gives $\sigma_X(\mathcal P)\subseteq\lambda_X(\mathcal P)$. [L1, L2, L3, L4]

1.2 The sigma-algebra $\sigma_X(\mathcal P)$ is a lambda-system: it contains $X$, is closed under relative differences because it is closed under complements and intersections, and is closed under increasing countable unions. Since it contains $\mathcal P$, [L3] gives $\lambda_X(\mathcal P)\subseteq\sigma_X(\mathcal P)$. [L3, L4, algebra]

2.1 Steps 1.1 and 1.2 prove equality. Minimality in [L3] also gives $\lambda_X(\mathcal P)\subseteq\mathcal D$, so $\sigma_X(\mathcal P)\subseteq\mathcal D$. [step 1.1, step 1.2, L3] ∎
