---
id: alg-corrected-stationary-residual-certificate
kind: algorithm
title: "Correct and certify a finite-chain stationary candidate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-finite-column-stochastic-matrix-and-law
  - lem-dobrushin-zero-sum-l1-coefficient
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ilse C. F. Ipsen and Teresa M. Selee, Ergodicity Coefficients Defined by Vector Norms"
      url: "https://ipsen.math.ncsu.edu/ps/simax75294.pdf"
      locator: "§3, Corollary 3.9, PDF p. 13; the column-overlap coefficient is a finite computable expression."
    - title: "Yuanyuan Liu, Perturbation Bounds for the Stationary Distributions of Markov Chains"
      url: "https://arxiv.org/pdf/1208.4974"
      locator: "§1, equations (1.1)–(1.3), PDF pp. 1–2; separate stationary perturbation magnitude from the computed chain's invariant residual."
verification:
  precheck: n/a
axiom_use: "The procedure uses only finite exact rational operations; no choice principle is used."
---

## Definition

**Inputs.** An integer $n\ge1$, an exact rational column-stochastic matrix $P\in\mathbb Q^{n\times n}$, an exact rational raw candidate $y\in\mathbb Q^n$, and an integer $m\ge1$. The represented rational entries are the exact data for this certificate.

**Outputs.** Return `invalid-input` if P has a negative entry or a column not summing exactly to one. Set $y_i^+=\max(y_i,0)$ and $s=\sum_i y_i^+$. If $s=0$, return `candidate-unavailable`. Otherwise set $x=y^+/s$ and $c=\|y-x\|_1$. Compute $M=P^m$ by $M_0=I$ and $M_{k+1}=PM_k$ for $0\le k<m$. Compute $r=Px-x$ and

$$q=1-\min_{j,k}\sum_i\min(M_{ij},M_{ik}).$$

If $q\ge1$, return `certificate-unavailable` with the corrected candidate and computed quantities; do not report an accuracy bound. If $q<1$, return `certified` with the candidate $x$, correction ledger $c$, residual $r$, coefficient $q$, and bound

$$B=c+\frac{m\|r\|_1}{1-q}.$$

All operations above are exact rational operations. A rounded implementation treats the represented rational inputs as exact data and may return `certified` only when directed enclosures certify P's column stochasticity, $s>0$, and upper bounds $c_+$, $r_+$, and $q_+<1$ for the exact correction distance, the residual norm of the exact normalized vector $x=y^+/s$, and $\delta(P^m)$, respectively. The mathematical candidate remains this exactly normalized probability vector; any reported enclosure for x must enclose it, and the enclosures for c and r must concern this same x. The implementation then returns $B_+=c_++mr_+/(1-q_+)$. Any undecided comparison or unavailable enclosure returns `certificate-unavailable`. The procedure takes y as input and makes no claim about how a stationary solver produced it.
