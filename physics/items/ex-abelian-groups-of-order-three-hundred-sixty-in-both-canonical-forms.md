---
id: ex-abelian-groups-of-order-three-hundred-sixty-in-both-canonical-forms
kind: example
title: "The abelian groups of order $360$ in elementary-divisor and invariant-factor form"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-pid-module-classification-agrees-with-finite-abelian-group-classification, def-partition-of-a-positive-integer]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modules over a PID, finite abelian group specialization"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
    - title: "M. Brussel, Finitely Generated Modules over a PID, Section 4"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Example

Since $360=2^3\cdot3^2\cdot5$, the elementary-divisor and invariant-factor forms pair as follows:

| Elementary-divisor form | Invariant-factor form |
|---|---|
| $\mathbb Z/8\oplus\mathbb Z/9\oplus\mathbb Z/5$ | $\mathbb Z/360$ |
| $\mathbb Z/8\oplus\mathbb Z/3\oplus\mathbb Z/3\oplus\mathbb Z/5$ | $\mathbb Z/3\oplus\mathbb Z/120$ |
| $\mathbb Z/4\oplus\mathbb Z/2\oplus\mathbb Z/9\oplus\mathbb Z/5$ | $\mathbb Z/2\oplus\mathbb Z/180$ |
| $\mathbb Z/4\oplus\mathbb Z/2\oplus\mathbb Z/3\oplus\mathbb Z/3\oplus\mathbb Z/5$ | $\mathbb Z/6\oplus\mathbb Z/60$ |
| $\mathbb Z/2\oplus\mathbb Z/2\oplus\mathbb Z/2\oplus\mathbb Z/9\oplus\mathbb Z/5$ | $\mathbb Z/2\oplus\mathbb Z/2\oplus\mathbb Z/90$ |
| $\mathbb Z/2\oplus\mathbb Z/2\oplus\mathbb Z/2\oplus\mathbb Z/3\oplus\mathbb Z/3\oplus\mathbb Z/5$ | $\mathbb Z/2\oplus\mathbb Z/6\oplus\mathbb Z/30$ |

## Facts & Assumptions

**Given:** Partitions of positive integers ([[def-partition-of-a-positive-integer]]).

[L1] For a finite abelian group, the PID-module elementary divisors and invariant factors agree with the published group-theoretic data ([[prop-pid-module-classification-agrees-with-finite-abelian-group-classification]]).

## Verification

**Proof technique:** direct.

1.1 The exponent $3$ of $2$ has partitions $3$, $2+1$, and $1+1+1$; the exponent $2$ of $3$ has partitions $2$ and $1+1$; the exponent $1$ of $5$ has partition $1$. By [L1], independently combining these choices gives exactly the elementary-divisor rows displayed. [L1, given]

2.1 Align prime-power factors on the right and multiply columns. The resulting columns are respectively $(360)$, $(3,120)$, $(2,180)$, $(6,60)$, $(2,2,90)$, and $(2,6,30)$, giving the displayed invariant forms by [L1]. [step 1.1, L1]

3.1 In every row the product of the invariant factors is $360$, and each factor divides the next. Factoring those factors back into prime powers reproduces its elementary-divisor row, so no regrouping is duplicated. [step 2.1, algebra] ∎
