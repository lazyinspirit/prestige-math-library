---
id: def-complete-statistic
kind: definition
title: "Complete statistics"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-statistic-and-estimator
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
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

A statistic $T:(\mathcal X,\mathcal A)\to(\mathcal Y,\mathcal B)$ is **complete** for $(P_\theta)_{\theta\in\Theta}$ if, for every measurable real-valued $g$ such that $E_\theta|g(T)|<\infty$ for every $\theta$, the conditions $E_\theta[g(T)]=0$ for every $\theta$ imply $P_\theta(g(T)=0)=1$ for every $\theta$. Integrability is part of the premise; completeness is a property of the statistic relative to the specified family.
