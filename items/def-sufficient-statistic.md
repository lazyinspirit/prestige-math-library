---
id: def-sufficient-statistic
kind: definition
title: "Sufficient statistics"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-statistic-and-estimator
  - def-standard-borel-space
  - def-measure-kernel-and-probability-kernel
  - def-regular-conditional-distribution
  - def-conditional-law-given-a-random-element
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
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

## Definition

Let $((\mathcal X,\mathcal A),\Theta,(P_\theta))$ be a statistical experiment, where $(\mathcal X,\mathcal A)$ is standard Borel, and let $T:(\mathcal X,\mathcal A)\to(\mathcal Y,\mathcal B)$ be a statistic with standard Borel target. Write $P_\theta^T=P_\theta\circ T^{-1}$. The statistic $T$ is **sufficient** if there is one probability kernel $K$ from $(\mathcal Y,\mathcal B)$ to $(\mathcal X,\mathcal A)$ such that, for every $\theta\in\Theta$, $A\in\mathcal A$, and $C\in\mathcal B$,

$$P_\theta(A\cap T^{-1}(C))=\int_C K(y,A)\,P_\theta^T(dy).$$

Thus $K(T(x),A)$ is a common version of the conditional probability of $A$ given $T$, under every parameter. The kernel is fixed independently of $\theta$. Under AC, standard Borelness gives each law an individual conditional law through [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]] and [[lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable]]; sufficiency additionally asks that one kernel works across parameters.
