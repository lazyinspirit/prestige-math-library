---
id: thm-interval-lipschitz-bound-sound-consistent
kind: theorem
title: Outward interval and Lipschitz midpoint bounds are sound and consistent under refinement
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 6
proof_strategy: direct
deps: [alg-interval-dag-box-enclosure-and-bound, alg-lipschitz-midpoint-box-lower-bound, def-dyadic-floating-point-format-and-directed-rounding, def-intervals-rectangles-and-complex-balls, def-outward-rounded-interval-and-ball-operations, lem-directed-dyadic-rounding-enclosure-and-error, thm-outward-rounded-operations-are-isotone-and-dag-sound]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §§11 and 20"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
---

## Statement

Assume a finite arithmetic expression DAG uses $+$, $-$, $\times$, and division only where the exact denominator is bounded away from zero on the box. Each constant is an exact dyadic or has certified enclosures at precision $p$ whose widths tend to zero as $p\to\infty$. Assume all operation results are finite. For every precision $p$, the enclosure returned by [[alg-interval-dag-box-enclosure-and-bound]] contains the exact range $f[B]$; hence its lower and upper endpoints are valid bounds for every point in $B$. If $B_k$ is a nested sequence of boxes with diameters tending to zero, their limit point is $x$, and the precisions $p_k$ tend to infinity in one fixed exponent range large enough to avoid overflow, then the interval endpoints tend to $f(x)$. Under the Lipschitz hypothesis in [[alg-lipschitz-midpoint-box-lower-bound]], its lower bounds are valid on $B$ and tend to $f(x)$ on every such shrinking sequence.

## Facts & Assumptions

**Given:** A finite arithmetic expression DAG, the finite-result conditions in the Statement, a box $B$, and (for the Lipschitz claim) a nonnegative constant $L$ satisfying the displayed Lipschitz inequality.

[F1] Every exact node value of a finite expression DAG belongs to its outward-rounded computed node enclosure; a non-finite node gives no finite enclosure claim. [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]

[F2] Directed lower and upper dyadic rounding enclose each exact endpoint, and the endpoint error tends to zero as precision increases on a fixed bounded range. Certified constant intervals also converge to their exact constants by the added hypothesis. [[lem-directed-dyadic-rounding-enclosure-and-error]], [[def-dyadic-floating-point-format-and-directed-rounding]], [[alg-interval-dag-box-enclosure-and-bound]]

[F3] The interval endpoints, inclusion order, midpoint and width have the meanings in [[def-intervals-rectangles-and-complex-balls]]; each finite operation applies the displayed exact formula before outward rounding. [[def-outward-rounded-interval-and-ball-operations]]

[F4] If a function is $L$-Lipschitz in the maximum-coordinate distance on $B$, then its values at $x,m$ differ by at most $L\max_j|x_j-m_j|$. [[alg-lipschitz-midpoint-box-lower-bound]]

## Proof

1.1 By the endpoint-rounding rule and [F2], the dyadic input intervals used by the algorithm contain the original box $B$. The DAG enclosure statement [F1] therefore implies $a_-\le f(x)\le a_+$ for every $x\in B$. Thus $a_-$ and $a_+$ are valid lower and upper bounds on the entire box, not estimates from a sample point. [given, F1, F2, F3]

1.2 For a nested shrinking sequence $B_k\to\{x\}$ with precision $p_k\to\infty$, outward-rounded input endpoints tend to their exact endpoint values by [F2], and each certified constant enclosure tends to its exact constant by the hypothesis. Induct in topological order through the finite DAG. At each addition, subtraction, or multiplication node the exact endpoint formulas are continuous in the input endpoints; at a division node the denominator is bounded away from zero, so the reciprocal endpoint formulas are continuous for all sufficiently large $k$. The directed-rounding error tends to zero by [F2]. Therefore each node enclosure converges to its exact node value at $x$, and in particular the root endpoints converge to $f(x)$. [given, F2, F3, induction]

1.3 For the Lipschitz procedure, every $x\in B$ satisfies $\max_j|x_j-m_j|\le r\le r^+$. By [F4], $f(x)\ge f(m)-Lr\ge q_- - Lr^+\ge\ell_B$, so $\ell_B$ is valid on $B$. [given, F4, algebra]

2.1 Along a shrinking sequence, $m_k\to x$, $r_k^+\to0$, and the singleton enclosure endpoints $q_{k,-},q_{k,+}$ tend to $f(x)$ by step 1.2. Hence $q_{k,-}-Lr_k^+\to f(x)$, and the extra directed-rounding error also tends to zero by [F2]; therefore $\ell_{B_k}\to f(x)$. [step 1.2, F2, algebra] ∎

