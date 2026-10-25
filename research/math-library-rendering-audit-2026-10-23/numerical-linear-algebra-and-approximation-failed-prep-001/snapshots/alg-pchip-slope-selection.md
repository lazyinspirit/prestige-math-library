---
id: alg-pchip-slope-selection
kind: algorithm
title: PCHIP slope selection
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-piecewise-cubic-hermite-interpolant]
justified_by: [lem-pchip-slope-selection-well-defined]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "F. N. Fritsch and J. Butland, A Method for Constructing Local Monotone Piecewise Cubic Interpolants, SIAM Journal on Scientific and Statistical Computing 5 (1984), pp. 300–304"
      url: https://anthonylloyd.github.io/public/interp/pchip/A_method_for_constructing_local_monotone_picewise_cubic_interpolants_fritsch1984.pdf
    - title: "SciPy v1.18.0, PchipInterpolator documentation, Notes"
      url: https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.PchipInterpolator.html
---

## Definition

**Inputs:** An integer $n\ge2$, strictly increasing real nodes $x_0<\cdots<x_{n-1}$, and real values $y_0,\ldots,y_{n-1}$. All operations here are over the real numbers.

**Output:** Slopes $m_0,\ldots,m_{n-1}$ and the piecewise cubic Hermite interpolant determined by these nodes, values, and slopes under [[def-piecewise-cubic-hermite-interpolant]].

Put $h_i=x_{i+1}-x_i>0$ and $d_i=(y_{i+1}-y_i)/h_i$ for $0\le i<n-1$. Write $\operatorname{sgn}(r)\in\{-1,0,1\}$ for the sign of a real number.

- If $n=2$, set $m_0=m_1=d_0$.
- If $n\ge3$, for each interior node $1\le k\le n-2$, set $m_k=0$ when $d_{k-1}d_k\le0$. When $d_{k-1}d_k>0$, put $w_1=2h_k+h_{k-1}$, $w_2=h_k+2h_{k-1}$, and
  $$m_k=\frac{w_1+w_2}{w_1/d_{k-1}+w_2/d_k}.$$
- For $n\ge3$, at the left endpoint compute
  $$\widehat m_0=\frac{(2h_0+h_1)d_0-h_0d_1}{h_0+h_1}.$$
  Set $m_0=0$ if $\operatorname{sgn}(\widehat m_0)\ne\operatorname{sgn}(d_0)$. Otherwise set $m_0=3d_0$ if $d_0d_1<0$ and $|\widehat m_0|>3|d_0|$; in all remaining cases set $m_0=\widehat m_0$.
- For $n\ge3$, at the right endpoint compute
  $$\widehat m_{n-1}=\frac{(2h_{n-2}+h_{n-3})d_{n-2}-h_{n-2}d_{n-3}}{h_{n-2}+h_{n-3}}.$$
  Apply the preceding clip and cap rule with $d_0,d_1$ replaced by $d_{n-2},d_{n-3}$ and $m_0,\widehat m_0$ replaced by $m_{n-1},\widehat m_{n-1}$.

For $n\ge3$, the algorithm returns the Hermite pieces from the stated values and selected slopes. The two-node branch is the line through the two input points.
