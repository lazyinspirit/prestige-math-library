---
id: ex-binary-necklaces-of-length-six-in-two-colours
kind: example
title: "Binary necklaces of length $6$ from both $\\operatorname{CYC}(2\\mathcal{Z})$ and Burnside's lemma"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-necklaces-over-an-m-letter-alphabet, thm-cauchy-frobenius-orbit-counting]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
pipeline_run: null
---

## Example

There are $14$ binary necklaces of length $6$.

## Facts & Assumptions

**Given:** The necklace count $\frac{1}{n}\sum_{d \mid n}\varphi(d)m^{n/d}$ ([[cor-necklaces-over-an-m-letter-alphabet]]).

[L1] Burnside's lemma counts orbits by averaging fixed points ([[thm-cauchy-frobenius-orbit-counting]]).

## Verification

**Proof technique:** direct.

1.1 The corollary with $m=2$ and $n=6$ gives $(1/6)(\varphi(1)2^6+\varphi(2)2^3+\varphi(3)2^2+\varphi(6)2^1) = (1/6)(64+8+8+4)=14$. [given, algebra]

1.2 Burnside gives the same value. The six rotations of a $6$-bead necklace fix $64,2,4,8,4,2$ colourings respectively, since the numbers of position-orbits are $6,1,2,3,2,1$. Their average is $(64+2+4+8+4+2)/6 = 14$. [L1, algebra]

2.1 The cycle-construction count and the direct Burnside count therefore agree at length $6$. [step 1.1, step 1.2] ∎
