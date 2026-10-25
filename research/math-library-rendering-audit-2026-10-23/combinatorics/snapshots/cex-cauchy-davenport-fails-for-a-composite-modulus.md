---
id: cex-cauchy-davenport-fails-for-a-composite-modulus
kind: counterexample
title: "In $\\mathbb{Z}/4$ the sets $A=B=\\{0,2\\}$ have $\\lvert A+B\\rvert=2$, below the Cauchy–Davenport bound $3$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-davenport, def-integers-modulo-n, thm-integers-modulo-n-basic-algebra, thm-z-mod-p-is-a-field, def-prime]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "N. Alon, Combinatorial Nullstellensatz, Theorem 3.2"
      url: "https://www.tau.ac.il/~nogaa/PDFS/null.pdf"
pipeline_run: null
---

## Statement refuted

The Cauchy-Davenport lower bound can fail for a composite modulus.

## Facts & Assumptions

**Given:** the modulus $4$ and the set $A=B=\{0,2\}\subseteq\mathbb{Z}/4$.

[L1] For prime $p$ and nonempty $A,B\subseteq\mathbb Z/p$, Cauchy--Davenport gives $|A+B|\ge\min\{p,|A|+|B|-1\}$ ([[thm-cauchy-davenport]]).

## Counterexample

**Proof technique:** direct.

1.1 The four sums are $0+0=0$, $0+2=2$, $2+0=2$ and $2+2=0$, so $A+B=\{0,2\}$ and therefore $\lvert A+B\rvert=2$. [given]

2.1 The Cauchy-Davenport lower bound would be $\min\{4,2+2-1\}=3$, so the inequality fails for this composite modulus. [step 1.1]

3.1 The failure occurs outside the theorem's prime-modulus hypothesis: here the modulus is $4$, not a prime $p$, so [L1] does not apply. [L1, step 2.1] ∎
