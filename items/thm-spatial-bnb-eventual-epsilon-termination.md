---
id: thm-spatial-bnb-eventual-epsilon-termination
kind: theorem
title: Consistent bounds and exhaustive longest-side branching give eventual epsilon termination
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 3
proof_strategy: direct
deps: [alg-certified-spatial-branch-and-bound, def-spatial-global-optimization-problem, thm-heine-borel-rn, thm-nested-interval-property, thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded, thm-infimum-property, lem-inf-epsilon, thm-metric-closure-characterisation, lem-real-line-is-a-metric-space, def-metric-bounded-diameter]
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

[F2] A continuous image of a compact metric space is compact, and a compact subset of a metric space is closed and bounded. [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-compact-subset-is-closed-and-bounded]]

[F3] Every nonempty subset of $\mathbb R$ bounded below has an infimum, and for every $\eta>0$ some member lies below the infimum plus $\eta$. [[thm-infimum-property]], [[lem-inf-epsilon]]

[F4] A point belongs to the closure of a set exactly when every open ball around it meets the set; a closed set contains its closure. [[thm-metric-closure-characterisation]]

[F5] Open balls in the usual metric on $\mathbb R$ are the intervals $(v-\eta,v+\eta)$, and a bounded subset lies in some such ball. [[lem-real-line-is-a-metric-space]], [[def-metric-bounded-diameter]]

[F6] At each split checkpoint, after all current leaves have been evaluated and the closure test has been applied, every nonclosed leaf has lower bound strictly below the current $U-\varepsilon$. A leaf closes only when its lower bound is at least $U-\varepsilon$ at a closure test. [[alg-certified-spatial-branch-and-bound]]

[F7] Nested closed real intervals whose lengths tend to zero have a unique common point. [[thm-nested-interval-property]]

[A1] The lower-bound oracle is consistent on every nested shrinking nonclosed branch, and exact midpoint witnesses provide the upper bounds specified in the Statement.

[A2] The unconstrained oracle reports the exact midpoint objective as a feasible witness on every queried box; if the root is a singleton, it also reports the exact point lower bound.

## Proof

1.1 The box $D_0$ is nonempty (its left-endpoint vector belongs to it) and compact by [F1]. Therefore $f[D_0]$ is nonempty and compact by [F2], hence closed and bounded. By the boundedness definition and [F5], there are $c\in\mathbb R$ and $r>0$ such that $f[D_0]\subseteq(c-r,c+r)$, so $c-r$ is a lower bound. Let $f^*=\inf f[D_0]$, which exists by [F3]. For every $\eta>0$, [F3] gives $y\in f[D_0]$ with $f^*\le y<f^*+\eta$; by [F5] every open ball around $f^*$ meets $f[D_0]$. Thus $f^*\in\overline{f[D_0]}$ by [F4], and closedness gives $f^*\in f[D_0]$. So $f$ attains its minimum on $D_0$, and every feasible objective value is at least $f^*$. [given, F1, F2, F3, F4, F5]

2.1 The incumbent upper bounds $U_k$ are nonincreasing, and each is at least the attained minimum $f^*$ by step 1.1 and [A2]. If the unlimited continuation did not terminate, it would expand infinitely many boxes. The expansion tree is binary, so there is an infinite nested branch: recursively take the left child if it has infinitely many expanded descendants and otherwise take the right child. This rule is deterministic and requires no choice principle. [given, step 1.1, A2, algebra, construct]

3.1 Along this branch, longest-side bisection makes every side length tend to zero. Fix $\eta>0$. Each coordinate can be halved only finitely many times while its side length is at least $\eta$, because each halving divides a finite initial length by two and never increases it. There are finitely many coordinates, and every split whose box has a side of length at least $\eta$ halves one such longest side, so only finitely many such splits occur. Thus the maximum side length tends to zero. The nested closed coordinate intervals have a unique common point in each coordinate by [F7], giving $x\in D_0$. [given, F1, F7, step 2.1, algebra]

4.1 Let $U_k$ be the incumbent at the split checkpoint at which branch box $B_k$ is expanded. The closure test has already been applied, so [F6] gives $\ell(B_k)<U_k-\varepsilon$. That box was previously evaluated at its midpoint $m_k$, so [A2] and the incumbent update give $U_k\le f(m_k)$. By step 3.1, $m_k\to x$; continuity and consistency [A1] imply $f(m_k)\to f(x)$ and $\ell(B_k)\to f(x)$. Thus $\ell(B_k)<f(m_k)-\varepsilon$ for every $k$, whose limit gives $f(x)\le f(x)-\varepsilon$, contradicting $\varepsilon>0$. [given, A1, A2, F6, step 3.1, algebra]

5.1 Thus the unlimited continuation cannot expand infinitely many boxes without meeting $U-L\le\varepsilon$. It reaches that certificate after finitely many calls, so any larger finite call budget returns it. [step 2.1, step 3.1, step 4.1, discharge-contradiction] ∎

