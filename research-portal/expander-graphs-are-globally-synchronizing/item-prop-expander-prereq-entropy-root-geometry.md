---
title: Entropy rates, inverse branches and shifted root contracts
status: draft
research_item: prop-expander-prereq-entropy-root-geometry
dependency_level: 5
---

## Prerequisites

- [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)
- [lem-author-2bcd11f9e275-logarithmic-tangent-bound](item-lem-author-2bcd11f9e275-logarithmic-tangent-bound)
- [lem-author-2bcd11f9e275-entropy-branch-geometry](item-lem-author-2bcd11f9e275-entropy-branch-geometry)
- [lem-author-2bcd11f9e275-entropy-inverse-branches](item-lem-author-2bcd11f9e275-entropy-inverse-branches)
- [lem-author-2bcd11f9e275-shifted-root-signs](item-lem-author-2bcd11f9e275-shifted-root-signs)
- [lem-author-2bcd11f9e275-shifted-root-comparisons](item-lem-author-2bcd11f9e275-shifted-root-comparisons)


## Statement

For $a>0$, put $I(a)=a\log a-a+1$. Then $I\prime(a)=\log a$, $I\prime\prime(a)=1/a>0$, $I(1)=0$, $I(a)\to1$ as $a\downarrow0$, and $I(a)\to\infty$ as $a\to\infty$. Its lower inverse branch $a_-:(0,1)\to(0,1)$ and upper inverse branch $a_+:(0,\infty)\to(1,\infty)$ are smooth with $a_\pm\prime(t)=1/\log a_\pm(t)$. In $I(1+c+s)=t$, require $1+c+s>0$ and choose a branch, giving $c=a_\pm(t)-1-s$. Under $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, define $c_\pm(\gamma)=a_\pm(1/\gamma)-1$ and $c_\pm(\gamma,\varepsilon)=a_\pm((1+\varepsilon)/\gamma)-1\mp\varepsilon$. Then $-1<c_-(\gamma)<c_-(\gamma,\varepsilon)<0<c_+(\gamma,\varepsilon)<c_+(\gamma)$. For fixed $\gamma>1$ the shifted roots tend to the unshifted roots as $\varepsilon\downarrow0$. In particular $1+\varepsilon^{-2}<(1+\varepsilon)/I(1-\varepsilon)$. Different parameters or branches cannot be ordered without the corresponding right-hand sides and shifts.

## Facts & Assumptions

**Given:** The variables and hypotheses of the Statement.

[F1] [lem-author-2bcd11f9e275-logarithmic-tangent-bound](item-lem-author-2bcd11f9e275-logarithmic-tangent-bound) proves the elementary logarithmic and entropy inequalities.

[F2] [lem-author-2bcd11f9e275-entropy-branch-geometry](item-lem-author-2bcd11f9e275-entropy-branch-geometry) proves the derivatives, endpoint limits, monotone ranges and unique branch roots.

[F3] [lem-author-2bcd11f9e275-entropy-inverse-branches](item-lem-author-2bcd11f9e275-entropy-inverse-branches) proves smooth inverse branches, their derivatives, and every shifted solution formula.

[F4] [lem-author-2bcd11f9e275-shifted-root-signs](item-lem-author-2bcd11f9e275-shifted-root-signs) proves the parameter-specific admissibility, signs and displayed scalar bound.

[F5] [lem-author-2bcd11f9e275-shifted-root-comparisons](item-lem-author-2bcd11f9e275-shifted-root-comparisons) proves the inward comparisons and the fixed-parameter small-shift limits.

## Proof

**Goal:** Establish the full Statement.

1.1 The endpoint and derivative assertions are F2. F3 supplies the inverse-branch definitions, their smoothness, and the expression for all shifted roots, with the positive logarithm domain explicitly required. F1 supplies the inequalities underlying the parameter-specific estimates. [F1, F2, F3]

2.1 For the stated $\gamma,\varepsilon$, F4 proves $0<(1+\varepsilon)/\gamma<1$, both shifted signs and the scalar bound. Substitute $s=-\varepsilon$ on the lower branch and $s=\varepsilon$ on the upper branch in F3. F5 then supplies the full strict ordering and both limits. No ordering for an unchosen branch or unrelated right-hand side has been assumed. [F3, F4, F5, step 1.1] ∎
