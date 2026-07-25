---
id: ex-sup-of-closed-interval
kind: example
title: "$\\sup[0,1] = 1 = \\max[0,1]$ and $\\inf[0,1] = 0 = \\min[0,1]$"
status: draft
origin: session
deps: [lem-max-is-sup, ex-sup-of-open-interval, def-max-min, def-infimum,
       def-bounded-set, def-complete-ordered-field, def-ordered-field,
       cor-of-one-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

The closed unit interval $J = [0,1] = \{x \in \mathbb{R} : 0 \le x \le 1\}$ has
$\sup J = 1$ and $\inf J = 0$, exactly as the open interval
[[ex-sup-of-open-interval]] does, but here both values belong to $J$: they are
the maximum and the minimum ([[def-max-min]]).

That is the whole content of this example. The two intervals have the same
supremum and the same infimum, and differ only in attainment, so the numerical
value of a supremum says nothing about whether the set reaches it. The
computation is also easier than for the open interval, because a set with a
maximum has that maximum as its least upper bound for free, with no epsilon
argument and no appeal to completeness ([[lem-max-is-sup]]).

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ and the closed interval $J := \{x \in \mathbb{R} : 0 \le x \le 1\}$.

[L1] Attainment: for a nonempty $X \subseteq \mathbb{R}$, if $X$ has a maximum then $\sup X$ exists and $\sup X = \max X$; and if $\sup X$ exists and lies in $X$ then $\max X$ exists and equals $\sup X$ ([[lem-max-is-sup]]).

[L2] Maximum and minimum: $m = \max X$ means $m \in X$ and $x \le m$ for every $x \in X$; $m = \min X$ means $m \in X$ and $m \le x$ for every $x \in X$; each is unique when it exists ([[def-max-min]]).

[L3] Bounds and the infimum: $u$ is an upper bound of $X$ when $x \le u$ for every $x \in X$ ([[def-complete-ordered-field]]), and $\ell$ is a lower bound of $X$ when $\ell \le x$ for every $x \in X$ ([[def-bounded-set]]); and $\ell = \inf X$ means $\ell$ is a lower bound of $X$ with $\ell' \le \ell$ for every lower bound $\ell'$ of $X$, unique when it exists ([[def-infimum]]).

[L4] Order: $0 < 1$; the order is reflexive, so $a \le a$; and $a < b$ implies $a \le b$ ([[cor-of-one-positive]], [[def-complete-ordered-field]], [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 Both $0$ and $1$ lie in $J$, so $J \ne \emptyset$: from $0 < 1$ we get $0 \le 1$, and reflexivity gives $0 \le 0$ and $1 \le 1$, so each of $0$ and $1$ satisfies the membership condition $0 \le x \le 1$. [L4]

1.2 Every $x \in J$ satisfies $x \le 1$ and $0 \le x$, directly by the membership condition; so $1$ is an upper bound of $J$ and $0$ is a lower bound of $J$. [L3]

2.1 $1 = \max J$: the number $1$ lies in $J$ and dominates every element of $J$. [step 1.1, step 1.2, L2]

2.2 $0 = \min J$: the number $0$ lies in $J$ and is dominated by every element of $J$. [step 1.1, step 1.2, L2]

3.1 Since $J$ is nonempty and has the maximum $1$, the attainment criterion gives that $\sup J$ exists and $\sup J = \max J = 1$. [step 2.1, step 1.1, L1]

3.2 $\inf J = 0$: the number $0$ is a lower bound of $J$, and any lower bound $\ell'$ of $J$ satisfies $\ell' \le 0$ because $0$ is itself an element of $J$; so $0$ is the greatest lower bound of $J$, and it equals $\min J$. [step 2.2, step 1.2, L3]

4.1 Therefore $\sup J = 1 \in J$ and $\inf J = 0 \in J$: both bounds are attained, and they coincide with the maximum and the minimum of $J$. [step 3.1, step 3.2, L1, L2] ∎

## Remarks

- Claim 1 of [[lem-max-is-sup]] needs no completeness: a set with a maximum has a least upper bound because the maximum already is one. The least-upper-bound property of $\mathbb{R}$ ([[def-complete-ordered-field]]) is what handles sets with no maximum, such as the open interval of [[ex-sup-of-open-interval]].
- The infimum was computed here directly from [[def-infimum]] rather than by reflecting through the origin. Both routes are available; the direct one is shorter when the bound is attained, since leastness of the upper bound and greatestness of the lower bound are then immediate from membership.
