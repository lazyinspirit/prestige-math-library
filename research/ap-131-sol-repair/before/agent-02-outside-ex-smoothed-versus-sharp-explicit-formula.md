---
id: ex-smoothed-versus-sharp-explicit-formula
kind: example
title: "Smoothed versus sharp explicit formulas"
status: published
origin: pipeline
deps: [thm-von-mangoldt-explicit-formula-smoothed, thm-von-mangoldt-explicit-formula-truncated]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Nick Andersen, Analytic Number Theory, Chapter 12"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Example

The linear cutoff equals $1$ through $x$ and fades to $0$ on $(x,y)$, whereas
the sharp formula evaluates $\psi_0(x)$ and gives half weight at a prime power.

## Verification

**Given:** the smoothed and sharp formulas.

1.1 The two integrations by parts in the smoothed formula supply Mellin decay, hence a declared convergent zero sum. [given, algebra]

2.1 The sharp formula instead has a finite ordinate sum and an error containing $\langle x\rangle$; at a jump its left hand side is explicitly half-weighted. [step 1.1, algebra] ∎
