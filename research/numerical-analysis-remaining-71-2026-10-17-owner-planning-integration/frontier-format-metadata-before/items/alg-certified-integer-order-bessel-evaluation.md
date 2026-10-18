---
id: alg-certified-integer-order-bessel-evaluation
kind: algorithm
title: Finite certified evaluation of integer-order Bessel functions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-certified-evaluation-result-contract, def-integer-order-bessel-series, def-bessel-complementary-recurrence-solution, lem-integer-order-bessel-series-tail, lem-integer-order-bessel-recurrences-and-ode, lem-bessel-integral-representations-and-scaled-range, lem-bessel-integral-midpoint-error, lem-scaled-modified-bessel-midpoint-error, lem-bessel-casoratian-invariant-positive, lem-finite-miller-terminal-error-identity, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-real-elementary-range-enclosures, lem-trigonometric-identities-machin-and-range-reduction]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §10.9, integral representations
      url: https://dlmf.nist.gov/10.9
    - title: DLMF, §10.6, recurrence relations and derivatives
      url: https://dlmf.nist.gov/10.6
    - title: DLMF, §10.2, Bessel functions of the first kind
      url: https://dlmf.nist.gov/10.2
    - title: DLMF, §§10.2, 10.6, 10.9, 10.25, and 10.74(iii)
      url: https://dlmf.nist.gov/10.74
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 4
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Statement

For integer $n\ge0$, this finite procedure evaluates either $J_n(x)$ for
an exact dyadic real input $x$, or the scaled modified Bessel value
$I_n^{\rm sc}(x)=e^{-x}I_n(x)$ for exact dyadic real $x\ge0$. It uses any successful
combination of: the power-series tail for $J_n$; midpoint enclosures of the
ordinary or scaled modified Bessel integrals; and, for $x>0$, a finite Miller
candidate certified by the exact terminal-contamination identity. It returns
`success`, `inconclusive`, `domain`, or `range` under
[[def-certified-evaluation-result-contract]].

Each branch takes finite work and precision caps, positive absolute
tolerance, optional positive relative tolerance, and a sound outward interval
backend as in [A1]. The Miller branch makes no terminal-index convergence
claim. For $I_n$, the output is always scaled; it does not exponentiate an
unscaled $I_n(x)$.

## Facts & Assumptions

**Given:** Integer $n\ge0$, the target, real $x$, tolerances, finite caps,
and the backend assumption.

[A1] [[def-outward-rounded-interval-and-ball-operations]] and
[[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: every finite
interval arithmetic expression DAG encloses its exact range, and non-finite
statuses make no finite claim. [[thm-real-elementary-range-enclosures]]:
required real elementary-function ranges are enclosed whenever those
evaluations return finite results.

[F1] [[def-certified-evaluation-result-contract]]: success requires a
containing interval with the requested radius; relative certification requires
zero exclusion.

[F2] [[lem-integer-order-bessel-series-tail]]: a truncated $J_n$ series
with a passing geometric ratio test has a tail bounded by its first omitted
term divided by $1-q$.

[F3] [[lem-bessel-integral-representations-and-scaled-range]]: for real $x$,
the stated cosine integral represents $J_n(x)$, and the scaled modified
Bessel integral represents $e^{-x}I_n(x)$ for $x\ge0$.

[F4] [[lem-bessel-integral-midpoint-error]]: the real $J_n$ integral midpoint
sum has the stated explicit second-derivative error bound.

[F5] [[lem-scaled-modified-bessel-midpoint-error]]: the scaled $I_n^{\rm sc}$
integral midpoint sum has the stated explicit second-derivative error bound.

[F6] [[lem-bessel-casoratian-invariant-positive]]: $J_j$ and the complementary
sequence $D_j$ solve the same recurrence and have positive invariant
Wronskian $J_0^2+J_1^2$ for $x>0$.

[F7] [[lem-finite-miller-terminal-error-identity]]: for the exact backward
recurrence sequence $u$, an admissible normalization index $s\in\{0,1\}$,
and $q=-J_{N+1}/D_{N+1}$, the exact terminal error is
$$\frac{J_su_n}{u_s}-J_n= \frac{q(J_sD_n-J_nD_s)}{J_s+qD_s},$$
whenever the displayed denominators are nonzero.

[F8] [[lem-trigonometric-identities-machin-and-range-reduction]]: a finite
Machin-formula enclosure supplies $\pi$ for the midpoint mesh; [A1] encloses
all resulting real sine and cosine evaluations.

## Proof
1.1 The procedure rejects $x<0$ only for the scaled $I_n$ target; it accepts every real $x$ for $J_n$. For $J_n$, it may enclose a finite series sum and add the tail from [F2]. [given, F2]

1.2 The integral branches enclose their finite midpoint sums by [A1] and add the error bound from [F4] or [F5]. The integral identities in [F3] identify the exact targets, including the scaled integrand for $I_n^{\rm sc}$. The midpoint mesh uses $\pi$ from [F8]. Hence each successful integral candidate contains its target. [A1, F3, F4, F5, F8]

1.3 For a Miller candidate, the procedure requires $x>0$ and $N>n$. It encloses $J_0,J_1,J_s,J_n,J_{N+1}$ by the independent series method. It chooses $s\in\{0,1\}$ only when the corresponding $J_s$ enclosure excludes zero; if neither does, it skips this candidate. It then encloses the finite $D$ and backward $u$ recurrences using [A1] and the recurrences in [F6]. It proceeds only if the interval for $D_{N+1}$, $u_s$, and $J_s+qD_s$ excludes zero. The positive Wronskian in [F6] verifies that the two exact recurrence solutions are independent; [F7] then gives an exact error interval. Subtracting that interval from the interval for $J_su_n/u_s$ produces a candidate containing $J_n$. [A1, F2, F6, F7]

2.1 Every candidate is an enclosure by steps 1.1, 1.2, and 1.3. The procedure intersects candidates only when the intersection is nonempty; their common exact value then remains in the intersection. It returns `success` only when the radius and applicable relative tests in [F1] pass. Finite caps otherwise give `inconclusive`; backend representational failure gives `range`. No terminal-index limit is used. [A1, F1, step 1.1, step 1.2, step 1.3] ∎