---
id: alg-certified-scaled-spherical-bessel-evaluation
kind: algorithm
title: Finite exact-interval evaluation of scaled spherical Bessel values
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-spherical-bessel-evaluation-contract, def-factorial-and-falling-factorial, lem-of-naturals-positive]
justified_by: [thm-certified-scaled-spherical-bessel-enclosures]
axiom_use: "The procedure is deterministic and uses no choice principle; represented-point interval calls are terminating input operations."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §10.49, Explicit Formulas"
      url: "https://dlmf.nist.gov/10.49"
      locator: "§10.49(i), equations 10.49.1–10.49.6, terminating Laurent formulas for spherical Bessel and Hankel functions."
    - title: "NIST Digital Library of Mathematical Functions, §10.74, Methods of Computation"
      url: "https://dlmf.nist.gov/10.74"
      locator: "§10.74(i), exact spherical formulas and the cancellation risk when |z| is not large compared with the squared order."
    - title: "University of Toronto, Lecture Notes on Mathematical Methods 2019–20"
      url: "https://www.physics.utoronto.ca/~phy1540f/p154019_cumullect.pdf"
      locator: "§6.4, printed pp. 157–158, finite-derivative spherical formula and outgoing Hankel convention."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Inputs are those of [[def-spherical-bessel-evaluation-contract]], a nonempty finite list of valid targets, finite exact positive rational absolute tolerances, optional exact positive rational relative tolerances, and finite integer caps $W,Q,M_{\max},p_{\max}\ge1$. $W$ is the maximum exact-arithmetic work count, $Q$ the maximum stage and represented-point interface index, $M_{\max}$ the maximum Taylor degree, and $p_{\max}$ the maximum final dyadic precision. A Gaussian rational is $a+ib$ with $a,b\in\mathbb Q$. A Laurent polynomial is a finite sum $\sum_k a_k z^k$ with integer exponents and Gaussian-rational coefficients; its formal derivative uses $(z^k)'=kz^{k-1}$. An expression graph below is a finite directed acyclic graph of exact rational arithmetic operations.

Factorials are those of [[def-factorial-and-falling-factorial]]; they are nonzero by that definition and [[lem-of-naturals-positive]], so every displayed factorial denominator is defined. For a rational $x$, $\lceil x\rceil$ denotes the least integer greater than or equal to $x$, computed by exact integer division.

Reject an invalid order, target, tolerance, cap, or interval input not contained in $(0,\infty)$ with `domain`. For a represented point, an interval returned by the input interface may meet zero; such a stage is skipped and a later interface index is tried.

Construct Laurent polynomials by
$$A_0=0,\quad B_0=z^{-1},\quad C_0=-iz^{-1},$$
$$A_{r+1}=rz^{-1}A_r-A_r'-B_r,\quad B_{r+1}=rz^{-1}B_r-B_r'+A_r,\quad C_{r+1}=rz^{-1}C_r-C_r'-iC_r$$
for $r=0,\ldots,\ell-1$. With $s$ and $c$ denoting the sine and cosine input enclosures, form the unscaled outputs
$$u=A_\ell c+B_\ell s,\quad v=(A_\ell'+B_\ell)c+(B_\ell'-A_\ell)s,\quad w=C_\ell(c+is),\quad t=(C_\ell'+iC_\ell)(c+is).$$
Form the scaled outputs
$$c_\ell z^{-\ell}u,\quad c_\ell z^{-\ell}v,\quad d_\ell^{-1}z^{\ell+1}C_\ell,\quad d_\ell^{-1}z^{\ell+1}(C_\ell'+iC_\ell).$$
Collect like Laurent powers exactly; in particular cancel negative powers in the scaled $h_\ell^{(1)}$ value when they cancel algebraically. A remaining $z^{-1}$ in the scaled derivative is evaluated only on positive input intervals.

For real intervals use exact rational endpoint hulls: $[a,b]+[c,d]=[a+c,b+d]$, $[a,b][c,d]=[\min(ac,ad,bc,bd),\max(ac,ad,bc,bd)]$, and $[a,b]^{-1}=[1/b,1/a]$ when $0<a\le b$. For complex rectangles, apply these real interval operations to the real and imaginary components of $(x+iy)(u+iv)=(xu-yv)+i(xv+yu)$. Thus interval arithmetic encloses every pointwise sum and product; division is only by a positive power of the positive argument or by a positive integer constant. Compute powers, factorials, and rational endpoints by finite exact arithmetic.

At a positive current box $I=[a,b]$, choose $M\ge0$ with $M+2\ge2b$ and form the rational interval polynomial and rational tail
$$T_M(I)=\sum_{m=0}^{M}\frac{(iI)^m}{m!},\qquad E_M=\frac{2b^{M+1}}{(M+1)!}.$$
The interval power is repeated complex-rectangle multiplication. Enclose $\cos(I)$ by $\operatorname{Re}T_M(I)+[-E_M,E_M]$ and $\sin(I)$ by $\operatorname{Im}T_M(I)+[-E_M,E_M]$. Evaluate each requested output graph with these leaves and $z\in I$, and round each final endpoint outward to the grid $2^{-p}\mathbb Z$.

Use the following deterministic finite search. Charge the Laurent recurrence, graph construction, and coefficient collection to the work counter as they are performed. For stages $q=1,\ldots,Q$, first take the fixed interval unchanged, or call the represented-point interface at index $q$. Skip a represented-point stage unless its returned interval has $a>0$. Set $p=q$ and $M=\max(q,\lceil2b\rceil)$. If $p>p_{\max}$ or $M>M_{\max}$, stop with `inconclusive`. Evaluate all requested graphs and the displayed $T_M,E_M$ using the work counter: each exact rational or Gaussian-rational arithmetic operation or comparison, each Taylor term, each endpoint-rounding operation, and each interface call costs one unit. If the next operation would exceed $W$, stop with `inconclusive` before performing it. If the output format cannot represent a certified endpoint, return `range` with no finite claim. If every requested target has radius at most its absolute tolerance, return `success`; for each optional relative tolerance, set its flag true exactly when the enclosure excludes zero and the relative test in the contract passes. A failed relative test does not prevent absolute `success`. If no stage succeeds before a cap or the search ends, return `inconclusive`. No floating-point recurrence is used.
