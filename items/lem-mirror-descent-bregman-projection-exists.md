---
id: lem-mirror-descent-bregman-projection-exists
kind: lemma
title: Compactness makes the Bregman projection well-defined
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-convex-subset-of-euclidean-space
  - alg-online-mirror-descent
  - def-mirror-map-and-bregman-divergence
  - def-euclidean-inner-product
  - def-semicontinuity-on-euclidean-subsets
  - thm-euclidean-semicontinuous-extreme-value-theorem
  - thm-heine-borel-rn
  - lem-bregman-three-point-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.3 Algorithm 14 and the generalized Bregman Pythagorean inequality, PDF pp. 100–103 (printed pp. 78–81)."
    - title: "Peter Bartlett, Stat 260/CS 294-102: Learning in Sequential Decision Problems, mirror-descent lecture notes"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2014fall-cs294stat260/lectures/mirror-descent-notes.pdf"
      locator: "Slides 26 and 29–30, Bregman projection and the generalized Pythagorean inequality; existence and uniqueness are proved locally."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $d\ge1$, let $K\subseteq\mathbb R^d$ be nonempty, bounded, closed, and convex, and let $(K,U,R)$ be a mirror regularizer with $R$ $m$-strongly convex on $K$ for some $m>0$. Then $R$ has a unique minimizer on $K$, and for every $y\in U$ the function $x\mapsto B_R(x\|y)$ has a unique minimizer $x_+(y)$ on $K$. If $x_+(y)\in U$, then for every $u\in K$,

$$\langle\nabla R(x_+(y))-\nabla R(y),u-x_+(y)\rangle\ge0$$

and

$$B_R(u\|y)\ge B_R(u\|x_+(y))+B_R(x_+(y)\|y).$$

## Statement references

[[alg-online-mirror-descent]]: uses a minimizer of $R$ to initialize and a minimizer of $B_R(\cdot\|y)$ for each dual point $y$.

[[def-mirror-map-and-bregman-divergence]]: gives continuity of $R$ on $K$, the strong-convexity inequality, and the Bregman formula.

[[def-euclidean-inner-product]]: the strong-convexity inequality uses the standard Euclidean norm.

[[lem-bregman-three-point-identity]]: states the algebraic identity used for the Pythagorean inequality.

[[def-semicontinuity-on-euclidean-subsets]]: continuity implies lower semicontinuity on a Euclidean subset.

## Facts & Assumptions

**Given:** The set $K$, the mirror regularizer $(K,U,R)$, its strong-convexity constant $m>0$, and any fixed $y\in U$.

[F1] [[alg-online-mirror-descent]]: $K$ is bounded, closed, and convex, $R$ is strongly convex on $K$, and the Bregman projection minimizes $B_R(x\|y)$ over $x\in K$.

[F2] [[def-mirror-map-and-bregman-divergence]]: $R$ is continuous on $K$, and $B_R(x\|y)=R(x)-R(y)-\langle\nabla R(y),x-y\rangle$ for $x\in K$, $y\in U$.

[F3] [[thm-heine-borel-rn]]: closed bounded subsets of finite-dimensional Euclidean space are compact.

[F4] [[thm-euclidean-semicontinuous-extreme-value-theorem]]: every real-valued lower semicontinuous function on a nonempty compact Euclidean set attains its minimum.

[F5] [[def-convex-subset-of-euclidean-space]]: every segment between two points of $K$ lies in $K$.

[F6] [[lem-bregman-three-point-identity]]: for $u\in K$ and $x,y\in U$, $\langle u-x,\nabla R(y)-\nabla R(x)\rangle=B_R(u\|x)-B_R(u\|y)+B_R(x\|y)$.

[F7] [[def-semicontinuity-on-euclidean-subsets]]: a continuous real-valued function on a Euclidean subset is lower semicontinuous there.

## Proof

1.1 By [F3], $K$ is compact. Continuity of $R$ on the nonempty set $K$ and [F7] make it lower semicontinuous; [F4] then implies that $R$ attains a minimum on $K$. [given, F2, F3, F4, F7]

1.2 Suppose $x_+(y)\in U$ and fix $u\in K$. The segment from $x_+(y)$ to $u$ lies in $K$ by [F5], and because $U$ is open it remains in $U$ for all sufficiently small nonnegative segment parameters. Since $x_+(y)$ minimizes $B_R(\cdot\|y)$, the right derivative at zero of $s\mapsto B_R(x_+(y)+s(u-x_+(y))\|y)$ is nonnegative. Differentiating its defining formula at $s=0$ gives $\langle\nabla R(x_+(y))-\nabla R(y),u-x_+(y)\rangle\ge0$. [given, F2, F5, algebra]

2.1 If two distinct points minimized $R$, their midpoint would lie in $K$ by [F5]. The strong-convexity inequality at $\lambda=1/2$ would make its value at least $m\|x-y\|_2^2/8$ below the common minimum, a contradiction. Thus the minimizer is unique. [step 1.1, F1, F5, algebra]

3.1 For fixed $y\in U$, the formula in [F2] writes $B_R(x\|y)$ as the continuous function $R(x)$ plus an affine function of $x$. It is therefore lower semicontinuous by [F7] and attains a minimum on compact $K$ by [F3, F4]. If two distinct points minimized it, the affine term would cancel from the strong-convexity inequality for $R$, giving the same strict midpoint contradiction as in step 2.1. Hence its minimizer $x_+(y)$ is unique. [given, step 2.1, F1, F2, F3, F4, F7, algebra]

4.1 Apply [F6] with $x=x_+(y)$. Step 1.2 makes its left side nonpositive, so $B_R(u\|x_+(y))-B_R(u\|y)+B_R(x_+(y)\|y)\le0$. Rearranging proves the stated Pythagorean inequality. [step 1.2, F6, algebra] ∎

