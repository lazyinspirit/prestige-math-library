---
id: ex-expected-duration-of-simple-gamblers-ruin
kind: example
title: Expected duration of simple gambler's ruin
status: published
origin: pipeline
deps: [cor-gamblers-ruin-expected-duration, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Durrett, Probability: Theory and Examples, 5th ed., gambler's ruin and optional stopping in §4.8", url: "https://web.archive.org/web/20240514054731if_/https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}
---

## Statement

Assume AC. A simple symmetric random walk started at $i\in\{1,\ldots,N-1\}$ and stopped on first hitting $0$ or $N$ has expected duration $i(N-i)$. From the midpoint of an even interval, the mean duration is $N^2/4$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[cor-gamblers-ruin-expected-duration]] gives the general duration formula.

[F2] [[def-axiom-of-choice]] states AC, assumed here because F1 requires it.

## Proof

1.1 Apply F1 to obtain $\mathbb E\tau=i(N-i)$. [F1]

2.1 If $N$ is even and $i=N/2$, direct substitution gives $$\mathbb E\tau=(N/2)(N-N/2)=N^2/4.$$ This calculation illustrates that almost-sure exit can have a quadratic mean duration. AC has exactly the inherited role in F2. [F2, step 1.1] ∎
