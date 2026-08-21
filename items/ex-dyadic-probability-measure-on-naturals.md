---
id: ex-dyadic-probability-measure-on-naturals
kind: example
title: "The weights $2^{-(k+1)}$ define a probability measure on $\\mathcal P(\\mathbb N)$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-nonnegative-weighted-sums-of-measures, def-dirac-measure, prop-dirac-measure-is-a-probability-measure, def-probability-measure, thm-geometric-series, def-integer-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For $E\subseteq\mathbb N$, define

$$\mu(E):=\sum_{k\in E}2^{-(k+1)}=\left(\sum_{k=0}^{\infty}2^{-(k+1)}\delta_k\right)(E).$$

Then $\mu$ is a probability measure on $\mathcal P(\mathbb N)$. The shift by $1$ is essential: because $0\in\mathbb N$, the unshifted weights $2^{-k}$ have total mass $2$, not $1$.

## Facts & Assumptions

**Given:** The Dirac measures $\delta_k$ on $\mathbb N$ and the weights $c_k=2^{-(k+1)}$.

[L1] Nonnegative countable weighted sums of measures are measures ([[thm-nonnegative-weighted-sums-of-measures]]); $\delta_k(E)$ is $1$ exactly when $k\in E$ and is $0$ otherwise ([[def-dirac-measure]]); and every $\delta_k$ is a probability measure ([[prop-dirac-measure-is-a-probability-measure]]).

[L2] A probability measure is a measure of total mass $1$ ([[def-probability-measure]]).

[L3] Natural powers have initial value $r^0=1$ ([[def-integer-power]]), and for $|r|<1$, $\sum_{k=0}^{\infty}r^k=1/(1-r)$ ([[thm-geometric-series]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\mu=\sum_k2^{-(k+1)}\delta_k$ is a measure, and evaluating it on $E$ gives exactly the displayed subseries because $\delta_k(E)$ is $1$ for $k\in E$ and $0$ otherwise. [given, L1]

1.2 The geometric-series formula with $r=1/2$ gives $\mu(\mathbb N)=\sum_{k=0}^{\infty}2^{-(k+1)}=(1/2)\sum_{k=0}^{\infty}(1/2)^k=1$. [given, L3, algebra]

1.3 The unshifted total is $\sum_{k=0}^{\infty}2^{-k}=2$, whose first term at $k=0$ is $1$; thus those weights do not define a probability measure. [given, L3, algebra]

2.1 Steps 1.1 and 1.2 make $\mu$ a probability measure by [L2], and step 1.3 verifies the index-zero boundary and rules out the unshifted construction. [step 1.1, step 1.2, step 1.3, L2] ∎
