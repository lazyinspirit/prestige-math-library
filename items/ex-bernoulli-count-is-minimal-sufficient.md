---
id: ex-bernoulli-count-is-minimal-sufficient
kind: example
title: "The Bernoulli count is minimal sufficient"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 8
deps:
  - thm-discrete-likelihood-ratio-classes-are-minimal-sufficient
  - def-likelihood-ratio-equivalence-on-common-discrete-support
  - def-axiom-of-choice
  - def-sufficient-statistic
  - def-minimal-sufficient-statistic
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
proof_strategy: direct
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture Note 6: Sufficiency"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf"
    - title: "Noah Fithian, Stat 210a Reader: Sufficiency"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html"
    - title: "Noah Fithian, Stat 210a Reader: Completeness, Ancillarity, and Basu’s Theorem"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/completeness.html"
    - title: "Jiahao Tian, Chapter 2: Sufficiency and Exponential Families"
      url: "https://jiahaotian-stat.github.io/Notes/en/Advanced_Stat/2Sufficiency/"
---

## Example

Assume AC. Let $X_1,\ldots,X_n$ be iid Bernoulli$(p)$ with $p\in(0,1)$, sample space $\{0,1\}^n$, and $T(x)=\sum_i x_i$. Then $T$ is minimal sufficient.

## Facts & Assumptions

**Given:** AC, $n\ge1$, $p\in(0,1)$, the Bernoulli product family, and counting measure as the common reference, so its likelihood densities equal the point masses.

[A1] [[def-axiom-of-choice]]: AC is the axiom branch of the discrete minimal-sufficiency theorem.

[F1] [[def-likelihood-ratio-equivalence-on-common-discrete-support]]: points are equivalent exactly when their point-mass ratio is constant in the parameter; with counting measure these are also the likelihood-density ratios.

[F2] [[thm-discrete-likelihood-ratio-classes-are-minimal-sufficient]]: the equivalence-class statistic is minimal sufficient on a countable common positive support.

## Proof

1.1 Every sample point has probability $m_p(x)=p^{t(x)}(1-p)^{n-t(x)}>0$, so the common support is the whole finite sample space. Counting measure assigns mass one to each point, so the densities equal these point masses; for $x,y$, their ratio is $m_p(x)/m_p(y)=[p/(1-p)]^{t(x)-t(y)}$. [F1, given, algebra]

2.1 If $t(x)=t(y)$, this ratio is one for all $p$. If $d=t(x)-t(y)\ne0$, its values at $p=1/2$ and $p=1/3$ are respectively $1$ and $(1/2)^d$, which differ. Thus equivalence classes are exactly the level sets of $T$. By [F2], $T$ is minimal sufficient. [A1, F1, F2, step 1.1, given, algebra] ∎
