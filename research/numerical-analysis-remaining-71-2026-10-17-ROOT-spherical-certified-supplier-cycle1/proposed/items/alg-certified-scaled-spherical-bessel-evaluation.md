---
id: alg-certified-scaled-spherical-bessel-evaluation
kind: algorithm
title: Finite exact-interval evaluation of scaled spherical Bessel values
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-spherical-bessel-evaluation-contract]
justified_by: [thm-certified-scaled-spherical-bessel-enclosures]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: NIST DLMF, spherical Bessel functions, explicit formulas
      url: https://dlmf.nist.gov/10.49
---

## Definition

Inputs are those of [[def-spherical-bessel-evaluation-contract]], a nonempty finite list of its targets, and finite work, degree, interface-index and precision caps. Reject an invalid order or tolerance with `domain`; reject an interval outside $(0,\infty)$ with `domain`. A represented positive point whose current box meets zero is refined within its cap, then gives `inconclusive` if no positive box is obtained. Interface calls are assumed terminating and charged against the work budget.

Construct the following finite Laurent polynomials, using exact Gaussian rational coefficients and formal differentiation, for $r=0,\ldots,\ell-1$:
$$A_0=0,\quad B_0=z^{-1},\quad C_0=-iz^{-1},$$
$$A_{r+1}=r z^{-1}A_r-A_r'-B_r,\quad B_{r+1}=r z^{-1}B_r-B_r'+A_r,\quad C_{r+1}=r z^{-1}C_r-C_r'-iC_r.$$
Build a finite expression graph with leaves $z,s,c$ and rational constants, where $s$ and $c$ stand for $\sin z$ and $\cos z$. Its unscaled outputs are
$$u=A_\ell c+B_\ell s,\quad v=(A_\ell'+B_\ell)c+(B_\ell'-A_\ell)s,\quad w=C_\ell(c+is),\quad t=(C_\ell'+iC_\ell)(c+is).$$
Its scaled outputs are
$$c_\ell z^{-\ell}u,\quad c_\ell z^{-\ell}v,\quad d_\ell^{-1}z^{\ell+1}C_\ell,\quad d_\ell^{-1}z^{\ell+1}(C_\ell'+iC_\ell).$$
Collect Laurent coefficients exactly; in particular cancel negative powers in the last two scaled expressions when present. Gaussian interval arithmetic means real rectangular arithmetic applied to real and imaginary components. Division is only by powers of the positive argument or by positive integer constants.

For any current positive box $I=[a,b]$, choose an integer $M\ge0$ with $M+2\ge2b$ and form by exact rational interval operations
$$T_M(I)=\sum_{m=0}^M\frac{(iI)^m}{m!},\qquad E_M=\frac{2b^{M+1}}{(M+1)!}.$$
Enclose $c$ by $\operatorname{Re}T_M(I)+[-E_M,E_M]$ and $s$ by $\operatorname{Im}T_M(I)+[-E_M,E_M]$. Evaluate each requested expression graph with these leaves and $z\in I$. Round each final endpoint outward to the grid $2^{-p}\mathbb Z$. Test each radius against $\varepsilon_a$ and, separately, the optional relative test. If every absolute test passes return `success`, with each relative flag set only if its own zero-excluding test passes. Relative failure does not prevent absolute success.

Here is a definite finite search order. Enumerate integer stages $q=1,2,\ldots$ up to the caps. At stage $q$, first obtain the box $I=[a,b]$: use the fixed box input unchanged, or call the represented-point interface to obtain $I_q=[a_q,b_q]$ and set $a=a_q,b=b_q$. Skip a represented-point box unless $a>0$. Only after obtaining this stage's positive box and its upper endpoint $b$, set $p=q$ and $M=\max(q,\lceil2b\rceil)$. If any stage exceeds a cap, return `inconclusive`; if a concrete output format cannot represent an otherwise certified endpoint, return `range`. Compute the Laurent graphs once and count all their operations and each Taylor operation against the work cap. No floating-point recurrence is accepted without enclosure. No conditional test silently treats an interval containing zero as nonzero.
