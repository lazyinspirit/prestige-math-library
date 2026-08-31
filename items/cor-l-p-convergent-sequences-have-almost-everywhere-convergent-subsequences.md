---
id: cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences
kind: corollary
title: "$L^p$-convergent sequences have almost-everywhere convergent subsequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-riesz-fischer-completeness-of-l-p]
proof_strategy: "Choose a rapidly convergent subsequence from an L^p-convergent sequence and re-use the subsequence construction inside Riesz-Fischer."
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Proposition 7.23"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Corollary 7.11"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $1\le p\le\infty$. If $u_n\to u$ in $L^p(\mu)$, then some subsequence of
$(u_n)$ admits measurable representatives converging almost everywhere to a
measurable representative of $u$.

## Facts & Assumptions

**Given:** A norm-convergent sequence $(u_n)$ in $L^p(\mu)$.

[L1] Riesz-Fischer completeness already states that every norm-convergent
sequence in $L^p(\mu)$ has an almost-everywhere convergent subsequence of
representatives ([[thm-riesz-fischer-completeness-of-l-p]]).

## Proof

**Proof technique:** Choose a rapidly convergent subsequence from an
$L^p$-convergent sequence and re-use the subsequence construction inside
Riesz-Fischer.

1.1 The sequence $(u_n)$ is Cauchy because it converges in norm. Applying [L1]
to that Cauchy sequence gives an $L^p$ limit together with an almost-everywhere
convergent subsequence of representatives. Because metric limits are unique, the
limit supplied by [L1] must be the given $u$. [L1, given]

2.1 That subsequence is the required one. [step 1.1] ∎
