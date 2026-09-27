---
id: cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences
kind: corollary
title: "Assuming Countable Choice, $L^p$-convergent sequences have almost-everywhere convergent subsequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable-choice, thm-riesz-fischer-completeness-of-l-p]
proof_strategy: "Choose a rapidly convergent subsequence from an L^p-convergent sequence and re-use the subsequence construction inside Riesz-Fischer."
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Proposition 7.23"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Corollary 7.11"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume Countable Choice. Let $1\le p\le\infty$. If $u_n\to u$ in $L^p(\mu)$, then some subsequence of
$(u_n)$ admits measurable representatives converging almost everywhere to a
measurable representative of $u$.

## Facts & Assumptions

**Given:** Countable Choice ([[def-countable-choice]]) and a norm-convergent sequence $(u_n)$ in $L^p(\mu)$.

[L1] Under Countable Choice, Riesz-Fischer completeness states that every norm-convergent sequence in $L^p(\mu)$ has an almost-everywhere convergent subsequence of representatives ([[thm-riesz-fischer-completeness-of-l-p]]). Applying that representative-selection clause in step 1.1 is the use of Countable Choice here.

## Proof

**Proof technique:** Choose a rapidly convergent subsequence from an $L^p$-convergent sequence and re-use the subsequence construction inside Riesz-Fischer.

1.1 The sequence $(u_n)$ is Cauchy because it converges in norm. Applying [L1]
to that Cauchy sequence gives an $L^p$ limit together with an almost-everywhere convergent subsequence of representatives. Because metric limits are unique, the limit supplied by [L1] must be the given $u$. [L1, given]

2.1 That subsequence is the required one. [step 1.1] ∎
