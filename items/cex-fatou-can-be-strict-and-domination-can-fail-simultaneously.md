---
id: cex-fatou-can-be-strict-and-domination-can-fail-simultaneously
kind: counterexample
title: "Fatou can be strict and domination can fail simultaneously"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fatou-lemma, thm-dominated-convergence]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Example 4.18"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement refuted

Whenever $f_n\to f$ almost everywhere and each $f_n$ is integrable, Fatou's
lemma is an equality and dominated convergence is automatic.

## Facts & Assumptions

**Given:** The spike sequence
$f_n:=(n+1)\chi_{(0,1/(n+1))}$ on $(0,1)$.

[L1] Fatou's lemma is only a one-sided inequality ([[thm-fatou-lemma]]).

[L2] Dominated convergence requires one integrable majorant for the whole sequence ([[thm-dominated-convergence]]).

## Counterexample

**Proof technique:** direct.

1.1 The sequence $f_n$ converges pointwise almost everywhere to $0$, but $$\int_0^1f_n\,d\lambda=(n+1)\lambda((0,1/(n+1)))=1$$ for every $n$. [given, algebra]

2.1 Therefore [step 1.1, L1, L2] ∎ $$\int\liminf_nf_n\,d\lambda=0<1=\liminf_n\int f_n\,d\lambda,$$ so Fatou is strict, and the unchanged integral also shows that no dominated convergence conclusion can hold. This is exactly the hypothesis loss recorded in [L1] and [L2].
