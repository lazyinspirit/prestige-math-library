---
id: thm-waring-asymptotic-variable-threshold
kind: theorem
title: "An upper bound for the Waring asymptotic threshold"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-countable-choice
  - def-natural-numbers
  - thm-well-ordering-principle
  - thm-waring-asymptotic-for-sufficiently-many-powers
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "definition of the asymptotic threshold and Theorem 1.4, printed pp. 1578–1579"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§6.3, the conclusion for the Waring variable threshold, printed pp. 47–48"
---

## Statement

Assume countable choice. For each integer $k\ge2$, put $e(u)=\exp(2\pi i u)$ and $S_k(q,a)=\sum_{r=0}^{q-1}e(ar^k/q)$. Let $R_{s,k}(n)=\#\{(x_1,\ldots,x_s)\in\mathbb Z_{>0}^s:\sum_i x_i^k=n\}$ count ordered tuples and set
$$\mathfrak S_{s,k}(n)=\sum_{q=1}^{\infty}\sum_{\substack{0\le a<q\\\gcd(a,q)=1}}q^{-s}S_k(q,a)^s e(-an/q),$$
where $\gcd(a,q)=1$ means that $a$ and $q$ have no positive common divisor other than $1$, and the $q=1$ sum uses its single residue $a=0$. Let $\widetilde G(k)$ be the least positive integer $t$ such that for every integer $s\ge t$, the Waring asymptotic formula for this count and series holds for all sufficiently large positive integers $n$:
$$\lim_{n\to\infty}\frac{R_{s,k}(n)-\dfrac{\Gamma(1+1/k)^s}{\Gamma(s/k)}\mathfrak S_{s,k}(n)n^{s/k-1}}{n^{s/k-1}}=0,$$
where $\Gamma(u)=\int_0^\infty t^{u-1}\exp(-t)dt$ for $u>0$. Then $\widetilde G(k)$ exists and
$$\widetilde G(k)\le2k^2+2k-3.$$

## Statement references

[Wooley, definition and Theorem 1.4](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §6.3](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** An integer $k\ge2$ and the Waring asymptotic formula in the Statement.

[F1] Every nonempty subset of the positive integers has a least element ([[def-natural-numbers]], [[thm-well-ordering-principle]]).

[A1] Countable choice is assumed by the Waring asymptotic supplier ([[def-countable-choice]]).

[F2] For every integer $s\ge T_k:=2k^2+2k-3$, the Waring asymptotic formula holds for all sufficiently large positive integers $n$ ([[thm-waring-asymptotic-for-sufficiently-many-powers]]).

## Proof

**Proof technique:** least-threshold comparison.

1.1 Define $E_k$ to be the set of positive integers $t$ such that for every integer $s\ge t$ the formula in the Statement holds for all sufficiently large $n$. By [F2], $T_k\in E_k$, so $E_k$ is nonempty. [A1, F2, construct]

1.2 By [F1], $E_k$ has a least element, which is $\widetilde G(k)$ by definition. Since $T_k\in E_k$, its least element satisfies $\widetilde G(k)\le T_k=2k^2+2k-3$. [F1, step 1.1, algebra] ∎
