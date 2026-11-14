---
title: Strict first-threshold comparison from the cascade fidelity margin
status: draft
research_item: lem-qec-author-db1311c0cf0b-strict-threshold-comparison
dependency_level: 5
---

## Prerequisites

- [lem-qec-author-db1311c0cf0b-orthogonal-decay-sector-fidelity](item-lem-qec-author-db1311c0cf0b-orthogonal-decay-sector-fidelity)
- [math:def-infimum](https://alphabetamath.cc/item/def-infimum)
- [math:thm-infimum-property](https://alphabetamath.cc/item/thm-infimum-property)
- [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)
- [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)
- [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing)
- [math:thm-exponential-limits-and-range](https://alphabetamath.cc/item/thm-exponential-limits-and-range)
- [math:def-continuity-real](https://alphabetamath.cc/item/def-continuity-real)
- [math:def-limits-at-infinity](https://alphabetamath.cc/item/def-limits-at-infinity)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice and the cascade hypotheses of the orthogonal-sector lemma. Fix $\gamma>0$ and let $f:[0,\infty)\to[0,1]$ be the continuous fidelity function in the orthogonal-sector lemma, so $f(0)=1$, $f(t)<1$ for $t>0$, $f(t)\to1/4$, and $f(t)\ge m(t)+\gamma t e^{-\gamma t}/8$ with $m(t)=(1+3e^{-\gamma t})/4$. For any $F_0\in(0,1]$, define $\tau_f(F_0)=\inf\{t\ge0:f(t)<F_0\}$ and similarly $\tau_m$, with empty-set value $+\infty$. If $1/4<F_0<1$, then
$$0<\tau_m(F_0)=-\gamma^{-1}\log[(4F_0-1)/3]<\tau_f(F_0)<\infty.$$
For $F_0=1$, both first-crossing infima are zero. For $0<F_0\le1/4$, both are infinite. The strict comparison does not require monotonicity of $f$.

## Facts & Assumptions

[F1] Use continuity, limiting fidelity, the strict finite-positive-time margin and strict loss from one for the cascade fidelity function. [lem-qec-author-db1311c0cf0b-orthogonal-decay-sector-fidelity](item-lem-qec-author-db1311c0cf0b-orthogonal-decay-sector-fidelity)

[F2] An infimum is the greatest lower bound of a real set. [math:def-infimum](https://alphabetamath.cc/item/def-infimum)

[F3] Every nonempty real set bounded below has an infimum; take the stated extended-real convention for the empty set. [math:thm-infimum-property](https://alphabetamath.cc/item/thm-infimum-property)

[F4] Specializing the bounded-operator exponential to $X=\mathbb R$ and $A=I$ gives the scalar exponential series and $\exp(0)=1$. The scalar exponential is continuous and strictly increasing, is positive everywhere, and tends to zero as its argument tends to $-\infty$. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator) [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing) [math:thm-exponential-limits-and-range](https://alphabetamath.cc/item/thm-exponential-limits-and-range)

[F5] For $a>0$, $\log a$ is the unique real $y$ satisfying $\exp(y)=a$; in particular $\exp(\log a)=a$. [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)

[F6] Continuity of $f$ on $[0,\infty)$ means that for every $c\ge0$ and $r>0$ there is $\delta>0$ such that $t\ge0$ and $|t-c|<\delta$ imply $|f(t)-f(c)|<r$. [math:def-continuity-real](https://alphabetamath.cc/item/def-continuity-real)

[F7] The limit $f(t)\to1/4$ as $t\to+\infty$ means that for every $r>0$ there is a real $M$ such that $t\ge0$ and $t>M$ imply $|f(t)-1/4|<r$. The domain $[0,\infty)$ is unbounded above. [math:def-limits-at-infinity](https://alphabetamath.cc/item/def-limits-at-infinity)

[A1] Assume the Axiom of Choice inherited from the orthogonal-sector lemma and its cascade construction. The threshold comparison uses that lemma under its full cascade hypotheses; the real-variable crossing argument makes no additional choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [lem-qec-author-db1311c0cf0b-orthogonal-decay-sector-fidelity](item-lem-qec-author-db1311c0cf0b-orthogonal-decay-sector-fidelity)

## Proof

**Given:** The Axiom of Choice, the cascade hypotheses, the two fidelity functions and a common target.

**Goal:** Compare their strict first-threshold crossing infima, including endpoints.

1.1 For $1/4<F_0<1$, put $a=(4F_0-1)/3$, so $0<a<1$. By [F5], $\exp(\log a)=a$; by [F4], $\exp(0)=1$ and strict increase imply $\log a<0$. Thus $t_*=-\gamma^{-1}\log a>0$ and $m(t_*)=F_0$. Strict increase of the exponential and $\gamma>0$ make $m$ strictly decreasing, so its strict crossing set is $(t_*,\infty)$, with infimum $t_*$. For every $0\le t\le t_*$, $m(t)\ge F_0$ and $f(t)\ge m(t)$, so $f$ has no strict crossing there. [given, A1, F1, F2, F4, F5, algebra]

2.1 At $t_*$ the margin gives $d:=f(t_*)-F_0\ge\gamma t_*e^{-\gamma t_*}/8>0$. Apply continuity [F6] at $c=t_*$ with $r=d/2$ and take $\eta=\delta/2>0$. Every $t\in[t_*,t_*+\eta]$ then satisfies $f(t)>f(t_*)-d/2>F_0$. Together with step 1.1, this makes $t_*+\eta$ a lower bound for the strict crossing set of $f$. Whenever that set is nonempty, [F2] therefore gives $\tau_f(F_0)\ge t_*+\eta>t_*$. [F1, F2, F4, F6, step 1.1, algebra]

3.1 Still with $1/4<F_0<1$, apply [F7] with $r=(F_0-1/4)/2>0$. Choose a finite $t>\max\{M,0\}$; then $f(t)<1/4+r<F_0$. Thus the strict crossing set is nonempty, contains a finite time and is bounded below by zero. By [F3] its infimum exists in $\mathbb R$ and is at most that finite time. Combining this with steps 1.1 and 2.1 proves $0<\tau_m(F_0)<\tau_f(F_0)<\infty$. [F1, F2, F3, F7, step 1.1, step 2.1, choose, algebra]

4.1 If $F_0=1$, both functions equal one at zero and are strictly below one at every positive time, by [F1] for $f$ and [F4] for $m$. Both strict crossing sets are therefore $(0,\infty)$, with infimum zero. If $0<F_0\le1/4$, positivity of the exponential gives $m(t)>1/4$ at every finite time, and $f(t)\ge m(t)$, so both sets are empty and both infima are infinite under the stated convention. These arguments never assume monotonicity of $f$. [given, F1, F2, F4, algebra] ∎
