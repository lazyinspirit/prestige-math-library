---
id: ex-pchip-flat-monotone-data
kind: example
title: PCHIP preserves a flat part of monotone data
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [ alg-pchip-slope-selection, thm-pchip-shape-preserving-no-overshoot ]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

For nodes $0,1,2,3$ and values $0,1,1,2$, the PCHIP data are monotone with one flat interval. The algorithm selects slopes $(3/2,0,0,3/2)$, and the interpolant is constant on $[1,2]$ while remaining monotone on the adjoining cells.

## Facts & Assumptions

**Given:** The nodes $x=(0,1,2,3)$, values $y=(0,1,1,2)$, and exact real arithmetic.

[F1] [[alg-pchip-slope-selection]]: the secant slopes determine the zero, harmonic-mean, and one-sided endpoint rules, and the output pieces are cubic Hermite pieces.

[F2] [[thm-pchip-shape-preserving-no-overshoot]]: each segment is monotone between its data endpoints, and a zero-secant segment is constant.

## Verification
1.1 The secants are $d_0=1$, $d_1=0$, and $d_2=1$. The interior rule in [F1] gives $m_1=m_2=0$. The endpoint rule gives $\widehat m_0=((3)(1)-0)/2=3/2$ and, by reflection, $\widehat m_3=3/2$; neither clip nor cap changes these values. [given, F1, algebra]

2.1 On the middle cell both endpoint values are $1$ and both slopes are zero, so the Hermite formula is the constant polynomial $1$. On the first cell it is $-t^3/2+3t/2$, and on the last cell it is $1+3t^2/2-t^3/2$, for normalized local coordinate $t\in[0,1]$. [F1, step 1.1, algebra]

3.1 The shape theorem [F2] makes the first and last pieces monotone from $0$ to $1$ and from $1$ to $2$ and makes the middle piece constant. Thus the interpolant is globally nondecreasing, has no overshoot, and retains the flat interval exactly. [F2, step 2.1, given] ∎