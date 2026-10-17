---
id: thm-spatial-bnb-eventual-epsilon-termination
kind: theorem
title: Consistent bounds and exhaustive longest-side branching give eventual epsilon termination
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 3
proof_strategy: direct
deps: [alg-certified-spatial-branch-and-bound, def-spatial-global-optimization-problem, thm-heine-borel-rn, thm-nested-interval-property, thm-extreme-value-metric]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §12"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
    - title: "Thomas Hübner, Akshay Gupte, and Steffen Rebennack, Spatial branch-and-bound for nonconvex separable piecewise linear optimization, §2.1"
      url: "https://optimization-online.org/wp-content/uploads/2024/05/Spatial-branch-and-bound-Piecewise-Linear-IJOC-revisions.pdf"
---

## Statement

Consider an **unconstrained** instance $C=D_0$ from [[def-spatial-global-optimization-problem]], with continuous $f$ on the compact box $D_0$. Run the unlimited continuation of [[alg-certified-spatial-branch-and-bound]] with exact midpoint objective evaluations and finite exact lower bounds. Assume either $D_0$ has positive diameter, or a singleton root report gives the exact value as both lower and upper bound. Assume the lower-bound oracle is consistent: on every nested sequence of nonclosed boxes $B_k$ with diameters tending to zero and unique limit $x$, its lower bounds satisfy $\ell(B_k)\to f(x)$. Midpoint evaluations then give upper bounds converging to $f(x)$. The algorithm reaches $U-L\le\varepsilon$ after finitely many calls for every $\varepsilon>0$. Consequently, any finite budget exceeding that finite call count returns the epsilon-global certificate.

## Facts & Assumptions

**Given:** $C=D_0$, a continuous real-valued $f$ on the finite closed box $D_0$, a tolerance $\varepsilon>0$, consistent lower/upper box bounds as stated, and the deterministic longest-side midpoint split.

[F1] A closed finite box in $\mathbb R^n$ is compact. [[thm-heine-borel-rn]]

[F2] A continuous real-valued function on a nonempty compact metric space attains a finite minimum. [[thm-extreme-value-metric]]

[F3] A processed leaf that is not closed has lower bound strictly below $U-\varepsilon$; a leaf closes only when its lower bound is at least $U-\varepsilon$. [[alg-certified-spatial-branch-and-bound]]

[F4] Nested closed real intervals whose lengths tend to zero have a unique common point. [[thm-nested-interval-property]]

[A1] The lower-bound oracle is consistent on every nested shrinking nonclosed branch, and exact midpoint witnesses provide the upper bounds specified in the Statement.

[A2] The unconstrained oracle reports the exact midpoint objective as a feasible witness on every queried box; if the root is a singleton, it also reports the exact point lower bound.

## Proof

1.1 The incumbent upper bounds $U_k$ are nonincreasing, and each is at least the attained minimum $f^*$ by [F2] and [A2]. If the unlimited continuation did not terminate, it would expand infinitely many boxes. The expansion tree is binary, so there is an infinite nested branch: recursively take the left child if it has infinitely many expanded descendants and otherwise take the right child. This rule is deterministic and requires no choice principle. [given, F2, A2, algebra, construct]

2.1 Along this branch, longest-side bisection makes every side length tend to zero. Fix $\eta>0$. Each coordinate can be halved only finitely many times while its side length is at least $\eta$, because each halving divides a finite initial length by two and never increases it. There are finitely many coordinates, and every split whose box has a side of length at least $\eta$ halves one such longest side, so only finitely many such splits occur. Thus the maximum side length tends to zero. The nested closed coordinate intervals have a unique common point in each coordinate by [F4], giving $x\in D_0$. [given, F1, F4, step 1.1, algebra]

3.1 Each expanded box on the branch was nonclosed, so [F3] gives $\ell(B_k)<U_k-\varepsilon$. Consistency [A1] implies $\ell(B_k)\to f(x)$. Its midpoint $m_k$ tends to $x$, and [A2] gives the exact midpoint upper $U(B_k)=f(m_k)$, which tends to $f(x)$ by continuity. Since $U_{k+1}\le U(B_k)$, the limit $U_\infty=\lim_k U_k$ satisfies $U_\infty\le f(x)$. Taking limits in the strict lower-bound inequalities yields $f(x)\le U_\infty-\varepsilon$, contradicting $\varepsilon>0$. [given, A1, A2, F3, step 2.1, algebra]

4.1 Thus the unlimited continuation cannot expand infinitely many boxes without meeting $U-L\le\varepsilon$. It reaches that certificate after finitely many calls, so any larger finite call budget returns it. [step 1.1, step 2.1, step 3.1, discharge-contradiction] ∎

