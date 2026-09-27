---
id: ex-smoothed-versus-sharp-explicit-formula
kind: example
title: "Smoothed versus sharp explicit formulas"
status: published
origin: pipeline
deps: [def-countable-choice, thm-von-mangoldt-explicit-formula-smoothed, thm-von-mangoldt-explicit-formula-truncated]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Nick Andersen, Analytic Number Theory, Chapter 12"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

Assume countable choice.

The linear cutoff equals $1$ through $x$ and fades to $0$ on $(x,y)$, whereas
the sharp formula evaluates $\psi_0(x)$ and gives half weight at a prime power.

## Verification

**Given:** Countable choice and the smoothed and sharp formulas.

1.1 The two integrations by parts in the smoothed formula supply Mellin decay, hence a declared convergent zero sum. [given, algebra]

2.1 The sharp formula instead has a finite ordinate sum and an error containing $\langle x\rangle$; at a jump its left hand side is explicitly half-weighted. [step 1.1, algebra] ∎
