---
id: thm-li-yang-joint-divisor-circle-error-bound
kind: theorem
title: "Li–Yang Joint Divisor–Circle Error Bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps: [def-dirichlet-divisor-error-term, def-gauss-circle-error-term, thm-li-yang-final-divisor-circle-reduction, def-countable-choice]
justified_by: []
axiom_use: "Countable Choice is carried by the final reduction and Voronoï suppliers; no full Axiom of Choice is asserted."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Xiao-Chun Li and Xuerui Yang, “An Improvement on Gauss’s Circle Problem and Dirichlet’s Divisor Problem”"
      url: "https://arxiv.org/pdf/2308.14859v2"
      locator: "Theorem 1.2 and Definition 1.1"
    - title: "Stephan Baier, Lectures on Exponential Sums"
      url: "https://www.atmschools.org/sites/default/files/Baier-Lectures_on_expo_sums.pdf"
      locator: "Lecture 1, classical divisor/circle background"
verification:
  precheck: n/a
---

## Statement

Assume Countable Choice. Let $\Delta(X)$ be the Dirichlet divisor error and $P(X)$ the squared-radius Gauss circle error. Li–Yang’s arXiv v2 Theorem 1.2 claims that for every $\varepsilon>0$ there are constants $C_\varepsilon>0$ and $X_\varepsilon\ge1$ such that for every real $X\ge X_\varepsilon$,
$$|\Delta(X)|+|P(X)|\le C_\varepsilon X^{\theta^*+\varepsilon},$$
where $\theta^*=0.3144831759741\ldots$ is the unique real number such that $-\theta^*$ is the solution in $[-0.35,-0.3]$ of
$$-\frac{8}{25}x-\frac{1}{200}\left(\sqrt{2(1-14x)}-5\sqrt{-1-8x}\right)^2+\frac{51}{200}=-x.$$


## Statement references

[Xiao-Chun Li and Xuerui Yang, “An Improvement on Gauss’s Circle Problem and Dirichlet’s Divisor Problem”](https://arxiv.org/pdf/2308.14859v2)

[Stephan Baier, Lectures on Exponential Sums](https://www.atmschools.org/sites/default/files/Baier-Lectures_on_expo_sums.pdf)

## Facts & Assumptions

**Given:** Countable Choice and the other hypotheses in the Statement.

[A1] [[def-countable-choice]]: Countable Choice asserts that every at most countable family of nonempty sets has a choice function.

[F1] [[def-dirichlet-divisor-error-term]]: For each positive integer $n$, put $d(n):=\tau(n)$, the number of positive divisors of $n$. Let $\gamma$ be the Euler–Mascheroni constant. All sums indexed by $n$ are over positive integers. For every real $x\ge1$,
$$\Delta(x):=\sum_{1\le n\le x}d(n)-x\log x-(2\gamma-1)x.$$

[F2] [[def-gauss-circle-error-term]]: For real $x\ge0$, define the squared-radius Gauss circle error by
$$P(x):=\#\{(a,b)\in\mathbb Z^2:a^2+b^2\le x\}-\pi x =1+\sum_{1\le n\le x}r_2(n)-\pi x,$$
where $r_2(n)$ counts ordered pairs of integers with sum of squares $n$. The radius of the counted disk is $\sqrt{x}$, and the initial $1$ records the origin.

## Proof status

This is a source-claim record. Its reduction supplier is blocked by the withdrawn BW17 §7 argument, so no local proof of the joint upper bound is asserted. The exact exponent equation and its isolating interval are already included in the Statement and agree with Li–Yang Definition 1.1, equation (1.4), printed p. 2. A local algebraic verification of uniqueness is drafted at `research/number-theory-all-141-2026-10-25-targeted-followup/batch-122/lem-li-yang-exponent-is-well-defined.md`; that proposal is not installed as a logical supplier and does not discharge the upper-bound proof.
