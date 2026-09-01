---
id: ex-a-residually-finite-free-group
kind: example
title: "A free group separates one nontrivial reduced word by a finite quotient"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-free-groups-are-residually-finite]
proof_strategy: "direct"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Example

The free group $F(a,b)$ separates the nontrivial word $ab$ by a finite quotient.

## Facts & Assumptions

**Given:** The free group $F(a,b)$ and the word $ab$.

[L1] Free groups are residually finite ([[thm-free-groups-are-residually-finite]]).

## Verification

**Proof technique:** direct.

1.1 The word $ab$ is nontrivial in the free group $F(a,b)$. [given]

2.1 By [L1], there is a finite-index normal subgroup omitting $ab$, equivalently a finite quotient in which the image of $ab$ is nontrivial. This is exactly the residual-finiteness witness promised in the example. [L1, step 1.1] ∎
