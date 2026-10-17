---
id: thm-uniform-constraint-margin-enables-empty-box-detection
kind: theorem
title: A positive constraint-separation margin permits finite certified empty-box detection
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 8
proof_strategy: direct
deps: [alg-certified-constraint-emptiness-search, def-max-min, def-spatial-global-optimization-problem, thm-heine-borel-rn, thm-nested-interval-property, thm-extreme-value-metric, thm-interval-lipschitz-bound-sound-consistent]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §§11–12"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
---

## Statement

Let $D_0$ be a nonempty compact box and let $g_1,\ldots,g_m:D_0\to\mathbb R$ be continuous, with $m\ge1$. Assume the constraint oracle in [[alg-certified-constraint-emptiness-search]] returns finite-time sound lower bounds, and these bounds converge to $g_i(x)$ along every nested shrinking sequence with limit $x$ when the precision tends to infinity. If there is a uniform margin $\delta>0$ such that $\max_{1\le i\le m}g_i(x)\ge\delta$ for every $x\in D_0$, then the unlimited continuation of the procedure certifies every leaf empty and returns infeasible after finitely many oracle calls. Consequently, a finite query budget at least that call count returns the same result. Conversely, if $\{x\in D_0:g_i(x)\le0\ (1\le i\le m)\}=\emptyset$, then such a uniform margin exists. The margin condition is separate from continuity of the objective; objective continuity alone does not certify constraint emptiness.

## Facts & Assumptions

**Given:** A nonempty compact box $D_0$, finitely many continuous constraints $g_1,\ldots,g_m$ with $m\ge1$, a sound constraint oracle with the stated consistency property, and the deterministic queue, splitting, and precision rules in [[alg-certified-constraint-emptiness-search]].

[F0] A constrained compact-box instance may have feasible set $C=\{x\in D_0:g_i(x)\le0\text{ for }1\le i\le m\}$. [[def-spatial-global-optimization-problem]]

[F1] A closed bounded box in $\mathbb R^n$ is compact. [[thm-heine-borel-rn]]

[F2] A continuous real-valued function on a nonempty compact metric space attains its minimum. [[thm-extreme-value-metric]]

[F3] The maximum of a finite nonempty list of real numbers is one of its entries. [[def-max-min]]

[F4] An unpruned positive-width box is split along a longest coordinate into two closed children covering it; an unpruned singleton is queried repeatedly at increasing precision. [[alg-certified-constraint-emptiness-search]]

[F5] For a valid finite interval-DAG oracle, outward-rounded lower bounds are sound and converge along shrinking boxes when precision tends to infinity in a fixed exponent range that avoids overflow. [[thm-interval-lipschitz-bound-sound-consistent]]

[F6] Nested closed intervals whose lengths tend to zero have a unique common point. [[thm-nested-interval-property]]

[A1] Each constraint is evaluated by a finite arithmetic DAG whose division denominators stay bounded away from zero and whose exact intermediate values remain within one fixed exponent range. The algorithm increases precision with split depth and with each singleton refinement; every query returns in finite time without an unavailable or non-finite status.

## Proof

1.1 Define $h(x)=\max_{1\le i\le m}g_i(x)$. For any $x,y\in D_0$, $|h(x)-h(y)|\le\max_i|g_i(x)-g_i(y)|$; the right-hand side tends to zero as $y\to x$ because there are finitely many continuous $g_i$. Thus $h$ is continuous. [given, F3, algebra]

1.2 Suppose the unlimited procedure split infinitely many boxes. The split tree is binary and finitely branching, so it has an infinite nested branch: at each node choose its first child with infinitely many split descendants, if one exists, and otherwise its second child. This rule is deterministic. Along this branch, longest-side bisection makes every coordinate width tend to zero: for any $\eta>0$, each coordinate can be halved while its width is at least $\eta$ only finitely many times, and each split of a box with maximum width at least $\eta$ halves one such longest coordinate. Hence all coordinate widths, and the box diameters, tend to zero. The nested interval property gives a unique point $x$ in the intersection of the branch boxes. [given, F4, F6, construct, algebra]

2.1 For the feasible set $C$ in [F0], emptiness means that for every $x\in D_0$ at least one constraint is positive, so $h(x)>0$ everywhere. By [F1] and [F2], $h$ attains a minimum $\delta$ on $D_0$. Since the minimizing point also has strictly positive $h$-value, $\delta>0$. This proves the converse margin claim. [given, F0, F1, F2, step 1.1]

2.2 By the margin hypothesis and [F3], choose an index $i$ with $g_i(x)\ge\delta$. The interval soundness and consistency result [F5], under the valid-DAG and precision hypotheses [A1], gives $\ell_i(B_k)\to g_i(x)$ along the branch. Thus for some finite $k$ the lower bound is positive. The procedure would then certify $B_k$ empty and would not generate its branch child, contradicting the infinite branch. Thus only finitely many boxes are split. [given, A1, F3, F5, step 1.2, algebra, discharge-contradiction]

3.1 The finite split tree has finitely many generated leaves. Every unpruned positive-width leaf is split by [F4], so any remaining unpruned leaf is a singleton. At such a point $x$, the margin gives some $g_i(x)\ge\delta$; repeated increasing-precision reports converge to this value by [A1] and [F5], so after finitely many singleton queries its lower bound is positive. Every leaf is therefore certified empty after finitely many finite-time oracle calls. The queue empties, and the certified-empty leaf cover of $D_0$ proves infeasibility. [given, A1, F4, F5, step 2.2, algebra]

4.1 Let $K$ be the finite total number of oracle calls established in step 3.1. A budget of at least $K$ does not exhaust before the queue empties, so [[alg-certified-constraint-emptiness-search]] returns the same infeasibility certificate; a smaller budget may return only its explicit budget-exhausted status. [step 3.1, algebra] ∎
