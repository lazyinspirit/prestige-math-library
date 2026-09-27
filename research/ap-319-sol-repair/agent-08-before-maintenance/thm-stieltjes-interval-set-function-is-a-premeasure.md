---
id: thm-stieltjes-interval-set-function-is-a-premeasure
kind: theorem
title: "The Stieltjes interval set function is a premeasure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-premeasure-on-an-algebra, def-lebesgue-stieltjes-interval-set-function, prop-stieltjes-interval-set-function-is-finitely-additive, thm-heine-borel-r]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Proposition 1.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $F : \mathbb{R} \to \mathbb{R}$ be nondecreasing and right-continuous, and let
$\mu_{0,F}$ be the set function of
[[def-lebesgue-stieltjes-interval-set-function]]. Then $\mu_{0,F}$ is a
premeasure on the half-open interval algebra in the sense of
[[def-premeasure-on-an-algebra]].

## Facts & Assumptions

**Given:** A nondecreasing right-continuous function $F : \mathbb{R} \to \mathbb{R}$, the associated interval set function $\mu_{0,F}$, a pairwise disjoint sequence $(E_n)_{n \in \mathbb{N}}$ in the half-open interval algebra, and a set $E = \bigcup_{n \in \mathbb{N}} E_n$ that also lies in the half-open interval algebra.

[L1] The set function $\mu_{0,F}$ is well defined and finitely additive on the half-open interval algebra. ([[prop-stieltjes-interval-set-function-is-finitely-additive]])

[L2] Every closed bounded interval $[a,b]$ is compact. ([[thm-heine-borel-r]])

## Proof

**Proof technique:** direct.

1.1 By [L1], it is enough to prove countable additivity when $E$ is a single h-interval. [L1, given, algebra]

Indeed, if $E = \bigcup_{r=1}^m I_r$ is a finite disjoint union of h-intervals, then each $E_n \cap I_r$ is again a finite disjoint union of h-intervals, the families $(E_n \cap I_r)_n$ are pairwise disjoint, and $I_r = \bigcup_n (E_n \cap I_r)$. Applying the single-interval case to each $I_r$ and summing finitely gives the general case.

2.1 Let $E = \bigcup_n I_n$ be a disjoint union of h-intervals, with $E$ itself an h-interval. [step 1.1, L1, given, algebra]

For every $N \in \mathbb{N}$,

$$\sum_{n=0}^N \mu_{0,F}(I_n) = \mu_{0,F}\!\left(\bigcup_{n=0}^N I_n\right) \le \mu_{0,F}(E),$$

because $E$ is the disjoint union of $\bigcup_{n=0}^N I_n$ and the remainder $E \setminus \bigcup_{n=0}^N I_n$, whose $\mu_{0,F}$-value is nonnegative. Hence $\sum_n \mu_{0,F}(I_n) \le \mu_{0,F}(E)$. [step 1.1, L1, given, algebra]

3.1 Assume first that $E = (a,b] = \bigcup_{n \in \mathbb{N}} I_n$, where the $I_n$ are pairwise disjoint h-intervals. [step 2.1, L1, given, algebra]

Let $\varepsilon > 0$. Right continuity at $a$ gives $\delta > 0$ with $F(a+\delta) - F(a) < \varepsilon/2$. For each $n$, if $I_n$ meets $[a+\delta,b]$ then its right endpoint is finite; write that endpoint as $v_n$, let $u_n$ be its left endpoint, and choose $w_n > v_n$ with $F(w_n) - F(v_n) < \varepsilon 2^{-n-2}$. Then the open intervals $(u_n,w_n)$ cover $[a+\delta,b]$: every $x$ in that compact interval belongs to $\bigcup_n I_n = (a,b]$, hence lies in some $I_n$ that must have finite right endpoint and therefore satisfies $x \in (u_n,w_n)$. [given, L2, choose]

4.1 By compactness from [L2], finitely many of those open intervals cover $[a+\delta,b]$. [step 3.1, L1, algebra]

Write them as $(u_{n_1},w_{n_1}),\dots,(u_{n_m},w_{n_m})$. Since $(a+\delta,b] \subseteq \bigcup_{j=1}^m (u_{n_j},w_{n_j}]$, monotonicity and finite additivity give

$$F(b) - F(a+\delta) \le \sum_{j=1}^m \big(F(w_{n_j}) - F(u_{n_j})\big) < \sum_{j=1}^m \mu_{0,F}(I_{n_j}) + \frac{\varepsilon}{2} \le \sum_n \mu_{0,F}(I_n) + \frac{\varepsilon}{2}.$$

Adding $F(a+\delta) - F(a) < \varepsilon/2$ yields

$$F(b) - F(a) < \sum_n \mu_{0,F}(I_n) + \varepsilon.$$

[step 2.1, step 3.1, L1, algebra]

5.1 Because $\varepsilon > 0$ was arbitrary, step 4.1 gives $\mu_{0,F}((a,b]) \le \sum_n \mu_{0,F}(I_n)$. [step 2.1, step 4.1]

Together with step 2.1, this proves countable additivity for bounded intervals. [step 2.1, step 4.1]

6.1 If $E = (-\infty,b]$, then for every real $M < b$ the bounded interval $(M,b]$ is the disjoint union of the h-intervals $I_n \cap (M,b]$. [step 2.1, step 5.1, algebra]

By step 5.1,

$$F(b) - F(M) = \sum_n \mu_{0,F}(I_n \cap (M,b]) \le \sum_n \mu_{0,F}(I_n).$$

Taking the supremum over $M < b$ gives $\mu_{0,F}(E) \le \sum_n \mu_{0,F}(I_n)$. Combined with step 2.1, this proves countable additivity for left rays. The same argument with $(a,M]$ proves the right-ray case $E = (a,\infty)$. [step 2.1, step 5.1, algebra]

7.1 If $E = \mathbb{R}$, then for every real $M < N$ the bounded interval $(M,N]$ is the disjoint union of the h-intervals $I_n \cap (M,N]$. [step 2.1, step 5.1, step 6.1, algebra]

So step 5.1 gives

$$F(N) - F(M) = \sum_n \mu_{0,F}(I_n \cap (M,N]) \le \sum_n \mu_{0,F}(I_n).$$

Taking the supremum over $M < N$ yields $\mu_{0,F}(\mathbb{R}) \le \sum_n \mu_{0,F}(I_n)$. Together with step 2.1 and step 6.1, this proves countable additivity for every h-interval. [step 2.1, step 5.1, step 6.1, algebra]

8.1 By step 1.1, the single-interval cases of steps 5.1 through 7.1 imply the general countable additivity clause whenever a disjoint union in the algebra stays in the algebra. [step 1.1, step 5.1, step 6.1, step 7.1]

Therefore $\mu_{0,F}$ is a premeasure. [step 1.1, step 5.1, step 6.1, step 7.1] ∎
