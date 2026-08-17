---
id: ex-complete-reciprocity-table-for-small-odd-primes
kind: example
title: "A complete reciprocity table for $3,5,7,11$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-quadratic-reciprocity, def-legendre-symbol]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The nonzero square classes for the primes $3,5,7,11$ are

| $p$ | nonzero squares modulo $p$ |
|---:|:---|
| $3$ | $1$ |
| $5$ | $1,4$ |
| $7$ | $1,2,4$ |
| $11$ | $1,3,4,5,9$ |

Using the definition of the Legendre symbol ([[def-legendre-symbol]]) gives the complete pair table

| $\{p,q\}$ | $(p/q)$ | $(q/p)$ | relation |
|:---:|:---:|:---:|:---|
| $\{3,5\}$ | $-1$ | $-1$ | agree |
| $\{3,7\}$ | $-1$ | $1$ | opposite |
| $\{3,11\}$ | $1$ | $-1$ | opposite |
| $\{5,7\}$ | $-1$ | $-1$ | agree |
| $\{5,11\}$ | $1$ | $1$ | agree |
| $\{7,11\}$ | $-1$ | $1$ | opposite |

The signs are opposite exactly when both primes are congruent to $3$ modulo $4$, as predicted by quadratic reciprocity ([[thm-quadratic-reciprocity]]).

## Facts & Assumptions

**Given:** The primes $3,5,7,11$ and the residue tables displayed in the Example.

[L1] For distinct odd primes $p,q$, $\left(\frac pq\right)\left(\frac qp\right)=(-1)^{(p-1)(q-1)/4}$ ([[thm-quadratic-reciprocity]]).

[L2] For an odd prime $p$, the Legendre symbol is $1$ on nonzero square classes, $-1$ on nonzero nonsquare classes, and $0$ on the zero class ([[def-legendre-symbol]]).

## Verification

**Proof technique:** direct.

1.1 Squaring every residue class modulo each prime gives the displayed nonzero square sets. Reading the residues of each numerator from those sets by [L2] gives all entries in the pair table. [L2, given, algebra]

2.1 For the pairs $\{3,7\}$, $\{3,11\}$, and $\{7,11\}$ both primes are $3$ modulo $4$ and the direct signs are opposite; in every other row at least one prime is $1$ modulo $4$ and the signs agree. Each row therefore has the product required by [L1]. [step 1.1, L1, algebra] ∎
