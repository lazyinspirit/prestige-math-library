---
id: fs-birkhoff-ergodic-averages-converge-at-every-point
kind: false-statement
title: Birkhoff averages need not converge at every point
status: draft
origin: pipeline
deps: [thm-birkhoff-ergodic-theorem, def-integer-base-map-on-the-circle, lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints, prop-integer-base-map-preserves-lebesgue-measure, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Alessio Del Vigna, The Birkhoff Ergodic Theorem"
      url: "https://poisson.phc.dm.unipi.it/~delvigna/maths/birkhoff.pdf"
      locator: "Example 1 and Theorems 3–5, pp. 1–6"
proof_strategy: constructive
---

## Statement

Assume the Axiom of Countable Choice.  **False claim:** for every $L^1$ observable in a measure-preserving system,
$A_nf$ converges at every point.

## Facts & Assumptions

**Given:** Countable choice, the doubling map $D_2$ on Lebesgue probability
$[0,1)$, and $f=\mathbf1_{[0,1/2)}$.

[F1] Under canonical binary coding, $f(D_2^kx)$ equals $1$ exactly when digit $k+1$ is zero ([[lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints]]).

[F2] Birkhoff asserts convergence almost everywhere, not at every point ([[thm-birkhoff-ergodic-theorem]]).

[F3] Under countable choice, $D_2$ preserves Lebesgue probability ([[prop-integer-base-map-preserves-lebesgue-measure]], [[def-countable-choice]]).

## Refutation

**Proof technique:** constructive.

1.1 Let $x$ have the binary digit string consisting successively of a zero block of length $1$, a one block of length $2$, a zero block of length $4$, a one block of length $8$, and so on, the block of index $r\geq0$ having length $2^r$.  This infinite string is neither terminating nor eventually one, so it is the canonical expansion of a point $x\notin E_2$. [construct]

2.1 At the end of block $r$ the number of read digits is $N_r=1+2+\cdots+2^r=2^{r+1}-1$.  At the end of zero block $r=2m$, the number of zero digits is $$Z_{2m}=1+4+\cdots+4^m=(4^{m+1}-1)/3,$$ so $Z_{2m}/N_{2m}\to2/3$. [step 1.1, algebra]

3.1 At the end of the following one block, the zero count is unchanged, while $N_{2m+1}=2^{2m+2}-1$; hence $$Z_{2m}/N_{2m+1}\longrightarrow1/3.$$ [step 2.1, algebra]

4.1 By [F1], these two zero-frequency subsequences are precisely subsequences of $A_nf(x)$.  Their distinct limits show that $A_nf(x)$ diverges.  By [F3] this is a measure-preserving probability system, and the bounded indicator $f$ is integrable, so the example refutes pointwise-everywhere convergence while remaining consistent with the almost-everywhere assertion in [F2]. [F1, F2, F3, step 2.1, step 3.1, discharge-construct] ∎
