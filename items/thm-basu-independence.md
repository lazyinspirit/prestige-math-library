---
id: thm-basu-independence
kind: theorem
title: "Basu’s independence theorem"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-complete-statistic
  - def-ancillary-statistic
  - def-sufficient-statistic
  - def-measure-kernel-and-probability-kernel
  - def-standard-borel-space
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
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
    - title: "Jiahao Tian, Chapter 2: Sufficiency and Exponential Families"
      url: "https://jiahaotian-stat.github.io/Notes/en/Advanced_Stat/2Sufficiency/"
---

## Statement

Let $(\mathcal X,\mathcal A)$ be standard Borel, and let $T$ and $U$ be statistics from this sample space into standard Borel spaces for a family $(P_\theta)$. If $T$ is complete and sufficient and $U$ is ancillary, then $T$ and $U$ are independent under every $P_\theta$.

## Facts & Assumptions

**Given:** the family on a standard Borel sample space, complete sufficient $T$, ancillary $U$, and their standard Borel target spaces.

[F1] [[def-sufficient-statistic]]: one kernel $K$ gives the conditional law of the data given $T$ for every parameter.

[F2] [[def-complete-statistic]]: an integrable function of $T$ with zero expectation for every parameter vanishes almost surely under every law.

[F3] [[def-ancillary-statistic]]: the law of $U$ is parameter-independent.

[F4] [[def-measure-kernel-and-probability-kernel]]: $y\mapsto K(y,A)$ is measurable and $K(y,\cdot)$ is a probability measure.

## Proof

1.1 Fix a Borel set $C$ in the target of $U$. The function $q_C(y)=K(y,U^{-1}(C))$ is Borel by [F4]. For every $\theta$, the conditional-law identity [F1] shows $q_C(T)$ is a version of $P_\theta(U\in C\mid T)$. [F1, F4, given, construct]

2.1 By ancillarity [F3], $p_C=P_\theta(U\in C)$ is constant in $\theta$. Hence the bounded function $g_C(y)=q_C(y)-p_C$ satisfies $E_\theta g_C(T)=0$ for every $\theta$. Completeness [F2] implies $q_C(T)=p_C$ $P_\theta$-almost surely for each $\theta$. [F2, F3, step 1.1, given, algebra]

3.1 For any Borel $D$ in the target of $T$, $P_\theta(T\in D,U\in C)=E_\theta[1_{\{T\in D\}}q_C(T)]=p_C P_\theta(T\in D)=P_\theta(U\in C)P_\theta(T\in D)$. This holds for every pair of Borel sets $D,C$, which is the definition of independence. [F1, F3, step 2.1, given, algebra] ∎
