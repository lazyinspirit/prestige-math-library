---
id: fs-lambda-systems-are-closed-under-finite-intersections
kind: false-statement
title: "FALSE: every lambda-system is closed under finite intersections"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lambda-system, def-pi-system]
aliases: []
landmark: false
proof_strategy: counterexample
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
    - title: "A. Dembo, Probability Theory lecture notes, Proposition 1.1.37"
      url: "https://adembo.su.domains/stat-310b/lnotes.pdf"
pipeline_run: null
---

## Statement

Every lambda-system is closed under finite intersections.

## Facts & Assumptions

**Given:** The set $X:=\{1,2,3,4\}$ and the family $\mathcal D$ consisting of $\varnothing$, $X$, and all two-element subsets of $X$.

[L1] A lambda-system contains $X$, is closed under relative differences, and is closed under increasing countable unions ([[def-lambda-system]]).

[L2] A pi-system is closed under binary intersections ([[def-pi-system]]).

## Refutation

**Proof technique:** counterexample.

1.1 The family $\mathcal D$ contains $X$ and is closed under complements. Apart from $\varnothing\subseteq X$, its proper containments are $\varnothing\subseteq A\subseteq X$ for a two-element set $A$, and every corresponding difference remains in $\mathcal D$; every increasing sequence in the finite family stabilizes. Thus $\mathcal D$ is a lambda-system by [L1]. [L1, algebra]

2.1 Both $\{1,2\}$ and $\{1,3\}$ lie in $\mathcal D$, but their intersection $\{1\}$ does not. Hence $\mathcal D$ is not a pi-system by [L2], refuting the statement. [step 1.1, L2] ∎
