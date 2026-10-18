---
id: thm-pchip-normalized-slopes-in-square
kind: theorem
title: PCHIP endpoint slopes lie in the Hermite monotonicity square
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [ alg-pchip-slope-selection, lem-pchip-slope-selection-well-defined ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "F. N. Fritsch and J. Butland, A Method for Constructing Local Monotone
        Piecewise Cubic Interpolants, SIAM Journal on Scientific and Statistical
        Computing 5 (1984), pp. 300–304"
      url: https://anthonylloyd.github.io/public/interp/pchip/A_method_for_constructing_local_monotone_picewise_cubic_interpolants_fritsch1984.pdf
    - title: "SciPy v1.18.0, PchipInterpolator documentation, Notes"
      url: https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.PchipInterpolator.html
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For any input to [[alg-pchip-slope-selection]], consider an interval with secant $d_i$. If $d_i=0$, the selected slopes at both endpoints of that interval are zero. If $d_i\ne0$, then $m_i/d_i$ and $m_{i+1}/d_i$ both belong to $[0,3]$.

## Facts & Assumptions

**Given:** An admissible PCHIP input, its secants, and its selected slopes.

[F1] [[alg-pchip-slope-selection]]: interior slopes are zero when adjacent secants have nonpositive product and otherwise use the positive-weight harmonic formula; endpoint slopes are clipped when their sign disagrees with the adjacent secant and capped at three times that secant when the adjacent secants have opposite signs.

[F2] [[lem-pchip-slope-selection-well-defined]]: the algorithm's harmonic denominators are nonzero, and its selected slopes are finite.

## Proof
1.1 At an interior node $k$ whose adjacent secants have nonpositive product, [F1] sets $m_k=0$. If their product is positive, write $r=d_k/d_{k-1}>0$ and $W=w_1+w_2=3(h_{k-1}+h_k)$. Dividing the harmonic formula in [F1] by $d_k$ gives $m_k/d_k=W/(w_1r+w_2)$, which is positive and at most $W/w_2\le3$, because $w_2=h_k+2h_{k-1}\ge h_k+h_{k-1}$. Dividing instead by $d_{k-1}$ gives $m_k/d_{k-1}=W/(w_1+w_2/r)\le W/w_1\le3$, since $w_1=2h_k+h_{k-1}\ge h_k+h_{k-1}$. [F1, F2, given, algebra]

1.2 For a nonzero first secant, put $q=d_1/d_0$. The raw endpoint ratio is $\widehat m_0/d_0=1+\frac{h_0}{h_0+h_1}(1-q)$. If $q\ge0$, this ratio is at most $1+h_0/(h_0+h_1)<2$; clipping makes it zero if it is nonpositive. If $q<0$, the ratio is greater than $1$, and the cap branch reduces it to $3$ exactly when it exceeds $3$. Thus the final ratio is in $[0,3]$. If $d_0=0$, the raw endpoint value is either zero or has sign different from $d_0$, so the clip sets it to zero. The reflected argument proves the same bound at the right endpoint. [F1, given, algebra]

2.1 For two nodes both selected slopes equal $d_0$, so they are zero when $d_0=0$ and their ratios to $d_0$ are $1$ otherwise. For $n\ge3$, if $d_i=0$, its interior endpoint slopes are set to zero by the nonpositive-product branch, and a first or last endpoint slope is zero by the clip rule. If $d_i\ne0$, each of its endpoint slopes is either an interior slope covered by step 1.1 or an endpoint slope covered by step 1.2. These cases prove both alternatives in the statement. [step 1.1, step 1.2, F1, F2, given] ∎